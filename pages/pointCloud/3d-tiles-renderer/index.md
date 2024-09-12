# 3d-tiles-renderer

> `3d-tiles-renderer` 是一个 `JavaScript` 库，用于渲染 `3D Tiles` 数据。`3D Tiles` 是一种开放的、基于 JSON 的格式，旨在有效地传输和渲染大型 3D 地理空间数据集，如城市模型、地形、点云和 `BIM`（建筑信息模型）数据。`3d-tiles-renderer` 库通常与 `WebGL` 和 `Three.js` 等图形库结合使用，来在浏览器中显示这些复杂的 3D 数据。

### 基础使用

```js
    const tilesRenderer = new TilesRenderer('./path/to/tileset.json');
    tilesRenderer.setCamera( this.view.camera );
    tilesRenderer.setResolutionFromRenderer( this.view.camera, this.view.renderer );
    tilesRenderer.group.position.x = 0;
    tilesRenderer.group.position.y = 0;
    tilesRenderer.group.position.z = 0;
    tilesRenderer.lruCache.maxSize  = 400;
    tilesRenderer.lruCache.minSize  = 300;
    const material = this.material;
    tilesRenderer.fetchOptions = {
        headers: {
            'Cache-Control': 'max-age=31536000',
        },
    }
    
    tilesRenderer.onLoadModel = function ( scene ) {
        scene.traverse( (c: any) => {
            if (c.batchTable) {
                const batchTable = c.batchTable;
                const intensity = batchTable.getData( 'Intensity' );
                if (intensity) {
                    c.geometry.setAttribute( 'intensity', new THREE.BufferAttribute( intensity, 1, false ) );
                }
            }
            if ( c.material ) {
                c.geometry.computeBoundingBox();
                c.material = material;
            }
        } );
    };
    tilesRenderer.onTileVisibilityChange = ( scene, tile, visible ) => {
        visible && scene.traverse( (c: any) => {
            if (!c.geometry.attributes.positionWorld) {
                const newGeometry = c.geometry.clone();
                newGeometry.applyMatrix4(c.matrixWorld.clone());
                c.geometry.setAttribute( 'positionWorld', new THREE.BufferAttribute( newGeometry.attributes.position.array, 3, false ) );
            }
        } );
        if (!visible) {
            if (tile.cached) {
                tile.cached.geometry[0].dispose();
                tile.cached.materials[0].dispose();
            }
        }
    };
```

### 参数说明

- .fetchOptions

设置 fetch 请求头和响应头

```js
tilesRenderer.fetchOptions = {
    headers: {
        'Cache-Control': 'max-age=31536000',
    },
}
```

- .errorTarget

几何误差（`geometricError`）小于 `errorTarget` 的瓦片不渲染

```js
tilesRenderer.errorTarget = 10;
```

- .errorThreshold

它被用来计算阈值 `errorTarget * errorThreshold`。超过这个阈值的瓦片将不会加载或渲染。

```js
tilesRenderer.errorThreshold = 0;
```

- .maxDepth
  
用于控制瓦片加载和渲染的最大深度, 小于 maxDepth 的瓦片不渲染。

```js
tilesRenderer.maxDepth = 6;
```

- .loadSiblings

移动摄像机时是否加载当前瓦片的相邻瓦片（同级瓦片）。

```js
tilesRenderer.loadSiblings = true;
```

- .displayActiveTiles
  
是否在场景中显示“活动瓦片”。“活动瓦片”是指那些已加载但当前不在摄像机视锥体内可见的瓦片。

```js
tilesRenderer.displayActiveTiles = false;
```

- .autoDisableRendererCulling
  
控制是否自动禁用瓦片网格的视锥体裁剪（frustum culling）。

```js
tilesRenderer.autoDisableRendererCulling = true;
```

- .optimizeRaycast

是否优化对瓦片进行射线投射（raycasting）操作。

```js
tilesRenderer.optimizeRaycast = true;
```

- .preprocessURL

对 URL 进行二次处理，可以对每一个 URL 单独处理，比如：获取签名。

```js
tilesRenderer.preprocessURL = ( uri : string ) => {
    const URI = new URL( uri );
    URI.searchParams.append( 'authorization', '123');
    return URI.toString();
};
```

- .lruCache

设置用于瓦片缓存的最近最少使用（LRU，Least Recently Used）缓存对象。该缓存对象有助于管理和优化内存使用，通过确保最近使用的瓦片优先保留在缓存中，而较少使用的瓦片被移除。

    * maxSize: 表示缓存的最大瓦片数量，默认值是 800。
    * minSize: 表示缓存的最小瓦片数量，默认值是 600。
    * scheduled: 调度标志，默认是 false，当缓存超出 maxSize 时，这个属性会被设置为 true，以表示清理任务已被安排。
    * unloadPercent: 卸载百分比，默认值是 0.05，每次清理任务会移除缓存中 5% 的 tiles，即 800 * 0.05 = 40 个 tiles，直到缓存大小回到 maxSize 以下。

```js
tilesRenderer.lruCache.maxSize  = 600;
tilesRenderer.lruCache.minSize  = 450;
tilesRenderer.lruCache.unloadPercent  = 0.05;
```

- .downloadQueue

控制 3D Tiles 渲染器中下载任务的优先级队列。通过使用 PriorityQueue，可以确保更重要的任务优先处理，从而优化资源加载和页面渲染。

    * maxJobs: 最大同时处理的任务数量。

- .parseQueue

用于处理瓦片解析任务的优先级队列。它的工作机制类似于 downloadQueue，但是专注于解析已经下载的数据，以确保解析任务能够根据优先级进行排序和执行。

    * maxJobs: 最大同时处理的解析任务数量。

- .resetFailedTiles()

重置因服务器或网络问题而导致加载失败的瓦片状态。当瓦片加载失败时，通常会记录失败状态，以避免重复尝试加载这些失败的瓦片。使用 .resetFailedTiles() 方法可以清除所有失败的瓦片状态，使得未加载的瓦片可以重新尝试加载。

```js
 tilesRenderer.onTileVisibilityChange = ( scene, tile, visible ) => {
    if ( tilesRenderer.stats.failed > 0 ) {
        tilesRenderer.resetFailedTiles();
    }
};
```