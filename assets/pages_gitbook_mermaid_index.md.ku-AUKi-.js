import{_ as s,c as a,o as i,V as n}from"./chunks/framework.V-t2EA2A.js";const g=JSON.parse('{"title":"mermaid-gb3","description":"","frontmatter":{},"headers":[],"relativePath":"pages/gitbook/mermaid/index.md","filePath":"pages/gitbook/mermaid/index.md"}'),e={name:"pages/gitbook/mermaid/index.md"},t=n(`<h1 id="mermaid-gb3" tabindex="-1">mermaid-gb3 <a class="header-anchor" href="#mermaid-gb3" aria-label="Permalink to &quot;mermaid-gb3&quot;">​</a></h1><h2 id="flow-流程图" tabindex="-1">Flow 流程图 <a class="header-anchor" href="#flow-流程图" aria-label="Permalink to &quot;Flow 流程图&quot;">​</a></h2><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">graph TD</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">A[Hard] --&gt;|Text| B(Round)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">B --&gt; C{Decision}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">C --&gt;|One| D[Result 1]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">C --&gt;|Two| E[Result 2]</span></span></code></pre></div><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">graph LR</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">A[Hard] --&gt;|Text| B(Round)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">B --&gt; C{Decision}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">C --&gt;|One| D[Result 1]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">C --&gt;|Two| E[Result 2]</span></span></code></pre></div><h2 id="sequence-时序图" tabindex="-1">Sequence 时序图 <a class="header-anchor" href="#sequence-时序图" aria-label="Permalink to &quot;Sequence 时序图&quot;">​</a></h2><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sequenceDiagram</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Alice-&gt;&gt;John: Hello John, how are you?</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">loop Healthcheck</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    John-&gt;&gt;John: Fight against hypochondria</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">end</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Note right of John: Rational thoughts!</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">John--&gt;&gt;Alice: Great!</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">John-&gt;&gt;Bob: How about you?</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Bob--&gt;&gt;John: Jolly good!</span></span></code></pre></div><h2 id="gantt-甘特图" tabindex="-1">Gantt 甘特图 <a class="header-anchor" href="#gantt-甘特图" aria-label="Permalink to &quot;Gantt 甘特图&quot;">​</a></h2><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">gantt</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    title 排期</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    dateFormat YYYY-MM-DD</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    section Part-A</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Completed: done, des1, 2022-01-07,2022-01-19</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Active: active, des2, 2022-01-07, 3d</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    taskA: des3, after des1, 5d</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    taskB: des4, after des2, 5d</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    taskC: des5, after des3, 5d</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    taskD: des6, after des4, 5d</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    section Part-B</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Completed: done, des1, 2022-01-07,2022-01-19</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    taskAA: crit, active, des1, 2022-01-07, 10d</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    taskBB: crit, active, des2, after des1 , 10d</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    taskCC: crit, after des2, 10d</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    section Part-C</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Completed: done, des1, 2022-01-07,2022-01-19</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    taskAA: crit, active, des1, 2022-01-07, 10d</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    taskBB: crit, active, des2, after des1 , 10d</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    taskCC: crit, after des2, 10d</span></span></code></pre></div><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">gantt</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    dateFormat  YYYY-MM-DD</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    title 为mermaid加入甘特图功能</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    section A部分</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    完成任务        :done, des1,2019-01-06,2019-01-08</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    正进行任务      :active, des2,2019-01-09,3d</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    待开始任务      :des3, after des2, 5d</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    待开始任务2     :des4, after des3, 5d</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    section 紧急任务</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    完成任务        :crit,done,2019-01-06,24h</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    实现parser     :crit,done,after des1, 2d</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    为parser编写test :crit, active, 3d</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    待完成任务      :crit,5d</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    为rendere编写test: 2d</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    将功能加入到mermaid: 1d</span></span></code></pre></div>`,9),l=[t];function p(h,E,d,k,r,c){return i(),a("div",null,l)}const m=s(e,[["render",p]]);export{g as __pageData,m as default};
