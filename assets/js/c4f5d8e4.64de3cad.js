(self.webpackChunkmdx_mermaid_doc=self.webpackChunkmdx_mermaid_doc||[]).push([[195],{3181:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>N});var a=r(7378),n=r(8944),i=r(2333),m=r(1884),o=r(353);const c={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN",banner:"banner_d9gt"},s={features:"features_xdhU",featureSvg:"featureSvg__8YW"};var d=r(7929);const l="dark",u="default",f="dark",h="light",E="data-theme";const b=({chart:e,config:t})=>{if("undefined"==typeof window)return a.createElement("div",{className:"mermaid","data-mermaid-src":e},e);const r=(0,a.useMemo)((()=>"string"==typeof t?JSON.parse(t):t),[t]),n=document.querySelector("html"),[i,m]=(0,a.useState)(!1),o=(0,a.useMemo)((()=>function(e,t){let r=e.getAttribute(E)??h;r!==h&&r!==f&&(r=h);const a=r===h?u:l;return t?.theme?.[r]??t?.mermaid?.theme??a}(n,r)),[r,i]);return(0,a.useEffect)((()=>{const e=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-theme"===t.attributeName){m((e=>!e));break}}));return e.observe(n,{attributes:!0}),()=>{try{e.disconnect()}catch{}}}),[]),(0,a.useEffect)((()=>{r&&(r.mermaid?d.Z.initialize({startOnLoad:!0,...r.mermaid,theme:o}):d.Z.initialize({startOnLoad:!0,theme:o}),document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),d.Z.contentLoaded())}),[r,o]),(0,a.useEffect)((()=>{document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((e=>{e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-mermaid-src")})),setTimeout(d.Z.contentLoaded,0)}),[e]),a.createElement("div",{className:"mermaid","data-mermaid-src":e},e)};function p(){return a.createElement("section",{className:s.features},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},a.createElement(b,{chart:"\ngraph LR;\n    User--\x3emf[Markdown file];\n    mf--\x3ecm[```mermaid ```];\n    cm--\x3emdx[mdx-mermaid];\n    mdx--\x3eMermaid;\n    Mermaid--\x3eSVG;\n",config:{}}))))}function v(){const{siteConfig:e}=(0,o.Z)();return a.createElement("header",{className:(0,n.Z)("hero hero--primary",c.heroBanner)},a.createElement("div",{className:"container"},a.createElement("h1",{className:"hero__title"},e.title),a.createElement("p",{className:"hero__subtitle"},e.tagline),a.createElement("div",{className:c.buttons},a.createElement(m.Z,{className:"button button--secondary button--lg",to:"/docs/intro"},"mdx-mermaid Tutorial - 5min \u23f1\ufe0f"))))}function N(){const{siteConfig:e}=(0,o.Z)();return a.createElement(i.Z,{title:e.title,description:"Display mermaid diagrams in mdx files."},a.createElement("div",null,a.createElement("div",{className:c.banner},"Support Ukraine \ud83c\uddfa\ud83c\udde6"," ",a.createElement(m.Z,{to:"https://opensource.facebook.com/support-ukraine"},"Help Provide Humanitarian Aid to Ukraine"),".")),a.createElement(v,null),a.createElement("main",null,a.createElement(p,null)))}},6138:(e,t,r)=>{var a={"./locale":9738,"./locale.js":9738};function n(e){var t=i(e);return r(t)}function i(e){if(!r.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=i,e.exports=n,n.id=6138}}]);