# 关于矩阵变换

### 本地坐标转世界坐标

- 单个坐标转换：

```js
// 判断 data 里面的点是否在包围盒内
const insideBoundingBox = data.some((value: any) => {
    // 将世界坐标转成本地坐标
    const newVal = value.clone().applyMatrix4(item.matrixWorld.clone().invert())
    return (newVal.x >= boxMin.x && newVal.x <= boxMax.x) && (newVal.y >= boxMin.y && newVal.y <= boxMax.y);
});
```

- geometry 转换：

```js
tilesRenderer.onTileVisibilityChange = ( scene, tile, visible ) => {
    visible && scene.traverse((c: any) => {
        if (!c.geometry.attributes.positionWorld) {
            const newGeometry = c.geometry.clone();
            newGeometry.applyMatrix4(c.matrixWorld.clone());
            c.geometry.setAttribute('positionWorld', new THREE.BufferAttribute(newGeometry.attributes.position.array, 3, false));
        }
    });
};
```

### 矩阵转换之左乘

C * B * A * POINT => 对 POINT 依次进行 A B C 矩阵左乘

### 矩阵与逆矩阵

`matrixWorld.clone().invert()` is the inverse of transform `matrixWorld` in both a matrix and geometric sense.

three.js 中，能进行4维矩阵变换的有：geometry、vector3、matrix4.

### 屏幕坐标与 3D 坐标相互转换

```js
point.clone().project(camera);

// 等价于
const matrix = new THREE.Matrix4();
matrix.copy(view.camera.projectionMatrix);
matrix.multiply(view.camera.matrixWorldInverse);
point.clone().applyMatrix4(matrix);
```
