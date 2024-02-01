import{_ as e,E as p,c as l,m as s,J as t,w as n,V as h,a,o}from"./chunks/framework.V-t2EA2A.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/gitbook/index.md","filePath":"pages/gitbook/index.md"}'),k={name:"pages/gitbook/index.md"},r=h(`<h3 id="gitbook使用步骤" tabindex="-1">gitbook使用步骤 <a class="header-anchor" href="#gitbook使用步骤" aria-label="Permalink to &quot;gitbook使用步骤&quot;">​</a></h3><h5 id="step-1-创建github仓库" tabindex="-1">Step-1: 创建github仓库 <a class="header-anchor" href="#step-1-创建github仓库" aria-label="Permalink to &quot;Step-1: 创建github仓库&quot;">​</a></h5><h5 id="step-2-克隆github仓库" tabindex="-1">Step-2: 克隆github仓库 <a class="header-anchor" href="#step-2-克隆github仓库" aria-label="Permalink to &quot;Step-2: 克隆github仓库&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git clone git@github.com:TOMGOU/3d-study-notes.git</span></span></code></pre></div><h5 id="step-3-进入项目并初始化" tabindex="-1">Step-3: 进入项目并初始化 <a class="header-anchor" href="#step-3-进入项目并初始化" aria-label="Permalink to &quot;Step-3: 进入项目并初始化&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// npm初始化</span></span>
<span class="line"><span>npm init -y</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// gitbook初始化</span></span>
<span class="line"><span>gitbook init</span></span></code></pre></div><h5 id="step-4-创建自动化发布shell脚本git-sh" tabindex="-1">Step-4: 创建自动化发布shell脚本git.sh <a class="header-anchor" href="#step-4-创建自动化发布shell脚本git-sh" aria-label="Permalink to &quot;Step-4: 创建自动化发布shell脚本git.sh&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>cd _book</span></span>
<span class="line"><span>git init</span></span>
<span class="line"><span>git add .</span></span>
<span class="line"><span>git commit -m &#39;update&#39;</span></span>
<span class="line"><span>git push -f git@github.com:&lt;USERNAME&gt;/&lt;REPO&gt;.git master:gh-pages</span></span>
<span class="line"><span>cd ../</span></span></code></pre></div><p><strong>用户名：USERNAME = TOMGOU</strong></p><p><strong>仓库名：REPO = work-summary</strong></p><h5 id="step-5-修改package-json" tabindex="-1">Step-5: 修改package.json <a class="header-anchor" href="#step-5-修改package-json" aria-label="Permalink to &quot;Step-5: 修改package.json&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;scripts&quot;: {</span></span>
<span class="line"><span>    &quot;gh-pages&quot;: &quot;./git.sh&quot;</span></span>
<span class="line"><span>},</span></span></code></pre></div><h5 id="step-6-本地编辑" tabindex="-1">Step-6: 本地编辑 <a class="header-anchor" href="#step-6-本地编辑" aria-label="Permalink to &quot;Step-6: 本地编辑&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>gitbook init (新增文件夹的时候，需要初始化)</span></span>
<span class="line"><span>gitbook serve</span></span></code></pre></div><h5 id="step-7-github发布" tabindex="-1">Step-7: github发布 <a class="header-anchor" href="#step-7-github发布" aria-label="Permalink to &quot;Step-7: github发布&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm run gh-pages</span></span></code></pre></div><p><strong>页面地址：<a href="https://tomgou.github.io/work-summary/" target="_blank" rel="noreferrer">https://tomgou.github.io/work-summary/</a></strong></p><h5 id="step-8-gitbook-plugin【添加文件-book-json-gitbook-install】" tabindex="-1">Step-8: gitbook plugin【添加文件：book.json，gitbook install】 <a class="header-anchor" href="#step-8-gitbook-plugin【添加文件-book-json-gitbook-install】" aria-label="Permalink to &quot;Step-8: gitbook plugin【添加文件：book.json，gitbook install】&quot;">​</a></h5><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;3d学习笔记&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;author&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;tomgou&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;description&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;3d学习笔记&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;language&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;zh-hans&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;plugins&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;mathjax-pro&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;github&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;hide-element&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;chapter-fold&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;splitter&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;-lunr&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;-search&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;search-pro&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;copy-code-button&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;back-to-top-button&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;tbfed-pagefooter&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;popup&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;pluginsConfig&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // &quot;mathjax-pro&quot;:{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //   &quot;version&quot;: &quot;2.7.5&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;github&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;url&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://tomgou.github.io/3d-study-notes/&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;hide-element&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;elements&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.gitbook-link&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;tbfed-pagefooter&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;copyright&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Copyright &amp;copy tomgou 2022&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;modify_label&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;该文章修订时间：&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;modify_format&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;YYYY-MM-DD HH:mm:ss&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><blockquote><p>mathjax 官方不再支持</p></blockquote>`,20),g=s("li",null,[s("p",null,[s("a",{href:"https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference",target:"_blank",rel:"noreferrer"},"https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference")])],-1),u=s("li",null,[s("p",null,[s("a",{href:"https://blog.csdn.net/ajacker/article/details/80301378",target:"_blank",rel:"noreferrer"},"https://blog.csdn.net/ajacker/article/details/80301378")])],-1),d=s("p",null,[s("strong",null,[a("页面地址："),s("a",{href:"https://tomgou.github.io/algorithm-study/",target:"_blank",rel:"noreferrer"},"https://tomgou.github.io/algorithm-study/")])],-1),c=s("h3",{id:"这样使用gitbook的好处",tabindex:"-1"},[a("这样使用gitbook的好处 "),s("a",{class:"header-anchor",href:"#这样使用gitbook的好处","aria-label":'Permalink to "这样使用gitbook的好处"'},"​")],-1),E=s("ul",null,[s("li",null,"不暴露源码（只要不push主分支"),s("li",null,"及时预览：gitbook serve"),s("li",null,"及时发布：npm run gh-pages")],-1);function b(q,y,F,m,C,f){const i=p("font");return o(),l("div",null,[r,s("ul",null,[s("li",null,[t(i,{color:"#00ff00",size:"12",face:"黑体"},{default:n(()=>[a("mathjax: npm i mathjax@2.7.6（2.7.7版本有bug）")]),_:1})]),s("li",null,[t(i,{color:"#00ff00",size:"12",face:"黑体"},{default:n(()=>[a("mathjax-pro: npm i gitbook-plugin-mathjax-pro")]),_:1})]),g,u]),d,c,E])}const B=e(k,[["render",b]]);export{v as __pageData,B as default};