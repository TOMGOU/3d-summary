# 关于旋转

### 3个基本方向

- yaw: 偏航
- pitch: 俯仰
- roll: 翻滚

### 旋转的基本操作

1. 四元数

> 不直观: 

```
// 绕单位向量Vector3(x, y, z) 表示的轴旋转 θ 度

// k = sin(θ / 2)

// q = [ x * k , y * k , z * k, cos(θ / 2) ]
```

> 四元数的翻转，本质是：将其虚部取负（negate），而保持实部不变。可以实现逆向旋转的效果。

```js
    import * as THREE from 'three';

    // 旋转轴 new THREE.Vector3(0, 1, 0)
    // 旋转角度 Math.PI / 2
    const angle = Math.PI / 2
    const quaternion = new THREE.Quaternion();
    quaternion.setFromAxisAngle(new THREE.Vector3(0, 1, 0), angle)
    console.log('查看四元数结构', quaternion);
    const k = Math.sin(angle / 2)
    console.log('查看数组', [0 * k , 1 * k , 0 * k, Math.cos(angle / 2)]);
    const vector = new THREE.Vector3( 0, 0, 1 );
    const newVector = vector.clone().applyQuaternion( quaternion );
    console.log('旋转后的新坐标', newVector)
    const vector1 = new THREE.Vector3( 0, 0, 1 );
    vector1.applyQuaternion(quaternion);
    console.log('Quaternion旋转后的新坐标1', vector1);
```

2. 欧拉对象

> 直观易懂，但是有万象锁问题

```js
    import * as THREE from 'three';

    // 旋转轴 new THREE.Vector3(0, 1, 0)
    // 旋转角度 Math.PI / 2
    const angle = Math.PI / 2
    const vector2 = new THREE.Vector3( 0, 0, 1 );
    const eulerRotation = new THREE.Euler(0, Math.PI/2, 0, 'XYZ');
    vector2.applyEuler (eulerRotation);
    console.log('Euler旋转后的新坐标2', vector2)

```

3. 矩阵

> 矩阵的逆矩阵就是逆操作，也可以逆向旋转的效果。

```js
    import * as THREE from 'three';

    // 旋转轴 new THREE.Vector3(0, 1, 0)
    // 旋转角度 Math.PI / 2
    const angle = Math.PI / 2
    const quaternion = new THREE.Quaternion();
    quaternion.setFromAxisAngle(new THREE.Vector3(0, 1, 0), angle)
    const matrix1 = new THREE.Matrix4();
    const vector4 = new THREE.Vector3( 0, 0, 1 );
    const matrix2 = matrix1.makeRotationFromQuaternion(quaternion);
    vector4.applyMatrix4(matrix2);
    console.log('Matrix旋转后的新坐标2', vector4);

```

4. AxisAngle

> 简单直观，单轴旋转可以使用

```js
    import * as THREE from 'three';

    // 旋转轴 new THREE.Vector3(0, 1, 0)
    // 旋转角度 Math.PI / 2
    const angle = Math.PI / 2
    const vector3 = new THREE.Vector3( 0, 0, 1 );
    const axis = new THREE.Vector3(0, 1, 0);
    vector3.applyAxisAngle(axis, angle);
    console.log('AxisAngle旋转后的新坐标2', vector3);

```

### 关于 欧拉旋转的万象锁问题
