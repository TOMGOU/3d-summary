import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  text: "3d-summary-notes",
  description: "A VitePress Site",
  base: '/3d-summary-notes/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Pages', link: '/pages/index' },
    ],
    sidebar: [
      {
        text: 'Basic',
        collapsed: true,
        items: [
          {
            text: 'Math',
            link: '/pages/threeJS/Math/index',
          },
          {
            text: 'Pipeline',
            link: '/pages/threeJS/Pipeline/index',
          },
          {
            text: 'Transform',
            link: '/pages/threeJS/Transform/index',
          },
          {
            text: 'Rasterization',
            link: '/pages/threeJS/Rasterization/index',
          },
          {
            text: 'Shading',
            link: '/pages/threeJS/Shading/index',
          },
          {
            text: 'RayTracing',
            link: '/pages/threeJS/RayTracing/index',
          },
        ]
      },
      {
        text: 'Shader',
        collapsed: true,
        items: [
          {
            text: 'Syntax',
            link: '/pages/shader/Syntax/',
          },
          {
            text: 'BuiltInFunction',
            link: '/pages/shader/BuiltInFunction/',
          },
          {
            text: 'BuiltInVariable',
            link: '/pages/shader/BuiltInVariable/',
          },
          {
            text: 'Shapes',
            link: '/pages/shader/Shapes/',
          },
          {
            text: 'KeyPoints',
            link: '/pages/shader/KeyPoints/',
          },
        ]
      },
      {
        text: '3DDisplay',
        collapsed: true,
        items: [
          {
            text: 'Draco',
            link: '/pages/3DDisplay/Draco/',
          },
          {
            text: 'glTF',
            link: '/pages/3DDisplay/glTF/',
          },
          {
            text: 'CSS3DRender',
            link: '/pages/3DDisplay/CSS3DRender/',
          },
          {
            text: 'Raycaster',
            link: '/pages/3DDisplay/Raycaster/',
          },
          {
            text: 'MaterialReset',
            link: '/pages/3DDisplay/MaterialReset/',
          },
          {
            text: 'Animation',
            link: '/pages/3DDisplay/Animation/',
          },
          {
            text: 'GuiControls',
            link: '/pages/3DDisplay/GuiControls/',
          },
          {
            text: 'Panorama',
            link: '/pages/3DDisplay/Panorama/',
          },
          {
            text: 'KeyboardControl',
            link: '/pages/3DDisplay/KeyboardControl/',
          },
          {
            text: 'Audio',
            link: '/pages/3DDisplay/Audio/',
          },
          {
            text: 'Encoding',
            link: '/pages/3DDisplay/Encoding/',
          },
        ]
      },
      {
        text: 'SmartCity',
        collapsed: true,
        items: [
          {
            text: 'camera',
            link: '/pages/smartCity/camera/',
          },
          {
            text: 'wander',
            link: '/pages/smartCity/wander/',
          },
          {
            text: 'automaticTransform',
            link: '/pages/smartCity/automaticTransform/',
          },
          {
            text: 'oribtControl',
            link: '/pages/smartCity/oribtControl/',
          },
          {
            text: 'gsap',
            link: '/pages/smartCity/gsap/',
          },
          {
            text: 'CSS2D',
            link: '/pages/smartCity/CSS2D/',
          },
          {
            text: 'chineseFont',
            link: '/pages/smartCity/chineseFont/',
          },
          {
            text: 'observeOperate',
            link: '/pages/smartCity/observeOperate/',
          },
          {
            text: 'colorDif',
            link: '/pages/smartCity/colorDif/',
          },
          {
            text: 'stats',
            link: '/pages/smartCity/stats/',
          },
          {
            text: 'geoJson',
            link: '/pages/smartCity/geoJson/',
          },
          {
            text: 'wallEffects',
            link: '/pages/smartCity/wallEffects/',
          },
          {
            text: 'mercator',
            link: '/pages/smartCity/mercator/',
          },
          {
            text: 'optimization',
            link: '/pages/smartCity/optimization/',
          },
          {
            text: 'webGLContext',
            link: '/pages/smartCity/webGLContext/',
          },
          {
            text: 'ourBIM',
            link: '/pages/smartCity/ourBIM/',
          },
        ]
      },
      {
        text: 'PointCloud',
        collapsed: true,
        items: [
          {
            text: 'rotation',
            link: '/pages/pointCloud/rotation/',
          },
          {
            text: 'fisheye',
            link: '/pages/pointCloud/fisheye/',
          },
        ]
      },
      {
        text: 'WebGPU',
        collapsed: true,
        items: [
          {
            text: 'document',
            link: '/pages/webGPU/document/',
          },
        ]
      },
      {
        text: 'Cesium',
        collapsed: true,
        items: [
          {
            text: 'shader',
            link: '/pages/cesium/shader/',
          },
          {
            text: 'event',
            link: '/pages/cesium/event/',
          },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
