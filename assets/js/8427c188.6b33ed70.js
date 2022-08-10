"use strict";(self.webpackChunkmdx_mermaid_doc=self.webpackChunkmdx_mermaid_doc||[]).push([[432],{6280:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return m}});var o=t(3117),i=(t(7378),t(3905)),a=t(862);const r={sidebar_position:2},d="Examples",s={unversionedId:"examples",id:"version-1.x.x/examples",title:"Examples",description:"The documentation for this library is a working example.",source:"@site/versioned_docs/version-1.x.x/examples.mdx",sourceDirName:".",slug:"/examples",permalink:"/mdx-mermaid/docs/examples",draft:!1,editUrl:"https://github.com/sjwall/mdx-mermaid/edit/main/doc/versioned_docs/version-1.x.x/examples.mdx",tags:[],version:"1.x.x",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Tutorial",permalink:"/mdx-mermaid/docs/intro"},next:{title:"Theme",permalink:"/mdx-mermaid/docs/theme"}},l={},m=[{value:"Component",id:"component",level:2},{value:"Code block",id:"code-block",level:2},{value:"Mermaid Config",id:"mermaid-config",level:2}],c={toc:m};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"examples"},"Examples"),(0,i.kt)("p",null,"The documentation for this library is a working example."),(0,i.kt)("p",null,"This file, for example, has a diagram using the component and code block."),(0,i.kt)("h2",{id:"component"},"Component"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Component example"',title:'"Component','example"':!0},"import { Mermaid } from 'mdx-mermaid/Mermaid'\n\n<Mermaid chart={`sequenceDiagram\n    participant Alice\n    participant Bob\n    Alice->>John: Hello John, how are you?\n    loop Healthcheck\n        John->>John: Fight against hypochondria\n    end\n    Note right of John: Rational thoughts <br/>prevail!\n    John--\x3e>Alice: Great!\n    John->>Bob: How about you?\n    Bob--\x3e>John: Jolly good!`} />\n")),(0,i.kt)(a.G,{config:{},chart:"sequenceDiagram\n    participant Alice\n    participant Bob\n    Alice->>John: Hello John, how are you?\n    loop Healthcheck\n        John->>John: Fight against hypochondria\n    end\n    Note right of John: Rational thoughts <br/>prevail!\n    John--\x3e>Alice: Great!\n    John->>Bob: How about you?\n    Bob--\x3e>John: Jolly good!",mdxType:"Mermaid"}),(0,i.kt)("h2",{id:"code-block"},"Code block"),(0,i.kt)("p",null,"The component doesn't need to be imported as this will be auto inserted."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="Code block example"',title:'"Code',block:!0,'example"':!0},"```mermaid\ngantt\ndateFormat  YYYY-MM-DD\ntitle Adding GANTT diagram to mermaid\nexcludes weekdays 2014-01-10\n\nsection A section\nCompleted task            :done,    des1, 2014-01-06,2014-01-08\nActive task               :active,  des2, 2014-01-09, 3d\nFuture task               :         des3, after des2, 5d\nFuture task2               :         des4, after des3, 5d\n```\n")),(0,i.kt)(a.G,{chart:"gantt\ndateFormat  YYYY-MM-DD\ntitle Adding GANTT diagram to mermaid\nexcludes weekdays 2014-01-10\n\nsection A section\nCompleted task            :done,    des1, 2014-01-06,2014-01-08\nActive task               :active,  des2, 2014-01-09, 3d\nFuture task               :         des3, after des2, 5d\nFuture task2               :         des4, after des3, 5d",mdxType:"Mermaid"}),(0,i.kt)("h2",{id:"mermaid-config"},"Mermaid Config"),(0,i.kt)("p",null,"Mermaid config can be configured through the plugin config:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=docusaurus.config.js",title:"docusaurus.config.js"},"remarkPlugins: [[require('mdx-mermaid'), { mermaid: { theme: 'dark' } }]],\n")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"When passing config to the ",(0,i.kt)("inlineCode",{parentName:"p"},"<Mermaid>")," component only the first instance should have the config passed to it.\nIf no config is passed to any component then Mermaid will not initialize.\nThis is not an issue when using in ",(0,i.kt)("inlineCode",{parentName:"p"},".mdx")," files as the parser will handle this.")))}p.isMDXComponent=!0}}]);