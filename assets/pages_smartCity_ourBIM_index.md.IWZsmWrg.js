import{_ as a,c as e,o as i,V as r}from"./chunks/framework.V-t2EA2A.js";const t="/3d-summary-notes/assets/modeling.3sTxpshD.png",l="/3d-summary-notes/assets/technology.3iNBIp7h.png",s="/3d-summary-notes/assets/T_stack.ctRyPkBa.png",o="/3d-summary-notes/assets/comparation.DA-jTf7y.png",k=JSON.parse('{"title":"项目选型","description":"","frontmatter":{},"headers":[],"relativePath":"pages/smartCity/ourBIM/index.md","filePath":"pages/smartCity/ourBIM/index.md"}'),p={name:"pages/smartCity/ourBIM/index.md"},n=r('<h1 id="项目选型" tabindex="-1">项目选型 <a class="header-anchor" href="#项目选型" aria-label="Permalink to &quot;项目选型&quot;">​</a></h1><h2 id="建模选型" tabindex="-1">建模选型 <a class="header-anchor" href="#建模选型" aria-label="Permalink to &quot;建模选型&quot;">​</a></h2><blockquote><p>视频介绍：<a href="https://www.bilibili.com/video/BV1pe4y1k7JE/?is_story_h5=false&amp;p=1&amp;share_from=ugc&amp;share_medium=android&amp;share_plat=android&amp;share_session_id=b47e229e-53d7-4c1d-9f87-b53002b5be89&amp;share_source=WEIXIN&amp;share_tag=s_i&amp;timestamp=1663801154&amp;unique_k=dinnZLv" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV1pe4y1k7JE/?is_story_h5=false&amp;p=1&amp;share_from=ugc&amp;share_medium=android&amp;share_plat=android&amp;share_session_id=b47e229e-53d7-4c1d-9f87-b53002b5be89&amp;share_source=WEIXIN&amp;share_tag=s_i&amp;timestamp=1663801154&amp;unique_k=dinnZLv</a></p></blockquote><ul><li><p>BIM 建模: 精度高，项目交付高标准，建模周期长（2-3个月）。</p></li><li><p>图纸建模: 项目交付标准一般，建模周期根据精度可控。</p></li><li><p>逆向建模: 倾斜摄影 + 激光点云，需后期修图。</p></li></ul><p><img src="'+t+'" alt="建模选型"></p><h2 id="渲染技术选型" tabindex="-1">渲染技术选型 <a class="header-anchor" href="#渲染技术选型" aria-label="Permalink to &quot;渲染技术选型&quot;">​</a></h2><ul><li><p>云端渲染: 1.服务器端渲染 + webRTC + api接口；2.受制于服务商</p></li><li><p>webGL 网页渲染: 1.模型分开建模，单个模型不能太大；2.性能问题自己控制</p></li><li><p>客户端渲染(引擎改良): 1.不用考虑性能问题；2.受制于服务商</p></li></ul><p><img src="'+l+'" alt="渲染技术选型"></p><h2 id="ourbim-会议记录" tabindex="-1">ourBIM 会议记录 <a class="header-anchor" href="#ourbim-会议记录" aria-label="Permalink to &quot;ourBIM 会议记录&quot;">​</a></h2><h3 id="参会人员" tabindex="-1">参会人员 <a class="header-anchor" href="#参会人员" aria-label="Permalink to &quot;参会人员&quot;">​</a></h3><p>于浩、刘利、曹沙、唐勇、陈小鹃、牛经理</p><h3 id="技术架构说明" tabindex="-1">技术架构说明 <a class="header-anchor" href="#技术架构说明" aria-label="Permalink to &quot;技术架构说明&quot;">​</a></h3><p><img src="'+s+'" alt="技术架构"></p><h3 id="优劣势分析" tabindex="-1">优劣势分析 <a class="header-anchor" href="#优劣势分析" aria-label="Permalink to &quot;优劣势分析&quot;">​</a></h3><h4 id="优势" tabindex="-1">优势 <a class="header-anchor" href="#优势" aria-label="Permalink to &quot;优势&quot;">​</a></h4><ul><li><p>效率：实时云端渲染对客户端配置要求低。</p></li><li><p>时间：在医院能提供 BIM 模型的情况下，开发周期短。</p></li></ul><h4 id="劣势" tabindex="-1">劣势 <a class="header-anchor" href="#劣势" aria-label="Permalink to &quot;劣势&quot;">​</a></h4><ul><li><p>费用：私有云部署费用高(50w)，后期升级收取费用15%。</p></li><li><p>未来可能有部分自定义功能不能实现，受制于服务商。</p></li></ul><h3 id="会议结论" tabindex="-1">会议结论 <a class="header-anchor" href="#会议结论" aria-label="Permalink to &quot;会议结论&quot;">​</a></h3><ul><li><p>可以先尝试使用免费版做一个小 demo，作为备选方案。</p></li><li><p>在医院能提供 BIM 模型的情况下，开发周期短，2周左右。</p></li></ul><h2 id="整体结论-个人建议" tabindex="-1">整体结论（个人建议） <a class="header-anchor" href="#整体结论-个人建议" aria-label="Permalink to &quot;整体结论（个人建议）&quot;">​</a></h2><p>适当降低交付标准，建模根据图纸手动建模，采用 webGL 网页渲染。</p><ul><li><p>有利于未来根据激光点云快速建模，快速交付以后的项目</p></li><li><p>技术沉淀，自己搭建云端渲染应用</p></li><li><p>具体实现：</p><ul><li><p>3栋建筑整体建模，只识别楼栋</p></li><li><p>单栋建筑建模，识别楼层</p></li><li><p>单层建筑，识别细节</p></li></ul></li></ul><h2 id="方案对比" tabindex="-1">方案对比 <a class="header-anchor" href="#方案对比" aria-label="Permalink to &quot;方案对比&quot;">​</a></h2><p><img src="'+o+'" alt="文件结构"></p>',25),h=[n];function d(m,u,c,_,b,f){return i(),e("div",null,h)}const x=a(p,[["render",d]]);export{k as __pageData,x as default};