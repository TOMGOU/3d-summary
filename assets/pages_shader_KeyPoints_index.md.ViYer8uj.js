import{_ as s,c as i,o as a,V as n}from"./chunks/framework.dnpgIXFM.js";const y=JSON.parse('{"title":"glsl 奇技淫巧","description":"","frontmatter":{},"headers":[],"relativePath":"pages/shader/KeyPoints/index.md","filePath":"pages/shader/KeyPoints/index.md"}'),l={name:"pages/shader/KeyPoints/index.md"},h=n(`<h1 id="glsl-奇技淫巧" tabindex="-1">glsl 奇技淫巧 <a class="header-anchor" href="#glsl-奇技淫巧" aria-label="Permalink to &quot;glsl 奇技淫巧&quot;">​</a></h1><h2 id="缩放" tabindex="-1">缩放 <a class="header-anchor" href="#缩放" aria-label="Permalink to &quot;缩放&quot;">​</a></h2><blockquote><p>适用于水波纹，信号扩散等动效</p></blockquote><h3 id="代码举例" tabindex="-1">代码举例 <a class="header-anchor" href="#代码举例" aria-label="Permalink to &quot;代码举例&quot;">​</a></h3><div class="language-glsl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">uniform</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> u_time;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">uniform</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> sampler2D</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> u_image;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  vec2 st </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> gl_FragCoord.xy </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> u_resolution.xy;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  vec4 color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> texture2D</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(u_image, (st </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fract</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(u_time)) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10.0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	gl_FragColor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> color;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="简单说明" tabindex="-1">简单说明： <a class="header-anchor" href="#简单说明" aria-label="Permalink to &quot;简单说明：&quot;">​</a></h3><ul><li><p>无论是旋转还是缩放，都有一个中心点，在动画之前首先要将 st 平移到中心点（st - 0.5），动画之后再平移回来（+ 0.5）。</p></li><li><p>对于 texture2D(u_image, st)，st 是一个二维向量，st 乘以一个大于 1 的值，纹理贴图是在缩小；反之放大。</p></li><li><p>对于连续往返的动画，可以使用：abs(sin(u_time))；对于不连续的单向动画，可以使用：fract(u_time)。</p></li></ul><h2 id="旋转" tabindex="-1">旋转 <a class="header-anchor" href="#旋转" aria-label="Permalink to &quot;旋转&quot;">​</a></h2><blockquote><p>适用于雷达扫描，特殊标注等动效</p></blockquote><h3 id="代码举例-1" tabindex="-1">代码举例 <a class="header-anchor" href="#代码举例-1" aria-label="Permalink to &quot;代码举例&quot;">​</a></h3><div class="language-glsl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">uniform</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> u_time;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">uniform</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> sampler2D</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> u_image;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">vec2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rotateMat </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> mat2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  cos</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(u_time), </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(u_time),</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  sin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(u_time), </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cos</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(u_time)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  vec2 st </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> gl_FragCoord.xy </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> u_resolution.xy;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  vec2 newSt </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rotateMat </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (st </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  vec4 color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> texture2D</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(u_image, newSt);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	gl_FragColor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> color;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="简单说明-1" tabindex="-1">简单说明： <a class="header-anchor" href="#简单说明-1" aria-label="Permalink to &quot;简单说明：&quot;">​</a></h3><ul><li><p>无论是旋转还是缩放，都有一个中心点，在动画之前首先要将 st 平移到中心点（st - 0.5），动画之后再平移回来（+ 0.5）。</p></li><li><p>旋转动画的核心就是这个旋转矩阵</p></li></ul>`,13),t=[h];function k(p,e,r,E,d,g){return a(),i("div",null,t)}const c=s(l,[["render",k]]);export{y as __pageData,c as default};