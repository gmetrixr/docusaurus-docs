"use strict";(self.webpackChunkgmetri_docs=self.webpackChunkgmetri_docs||[]).push([[1839],{9613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=i,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6144:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=r(7813),i=r(7044),o=(r(9496),r(9613)),a=["components"],l={title:"Add SCORM packages to Build XR Experiences",description:"View Description, Usage, Looks, Properties, Rules, When Events, Then Actions, Compatibility, Tutorials for running SCORM packages in GMetri XR experiences.",hide_title:!0,sidebar_label:"SCORM"},s="SCORM",c={unversionedId:"platform/create/elements/scorm",id:"platform/create/elements/scorm",title:"Add SCORM packages to Build XR Experiences",description:"View Description, Usage, Looks, Properties, Rules, When Events, Then Actions, Compatibility, Tutorials for running SCORM packages in GMetri XR experiences.",source:"@site/docs/02_platform/02_create/03_elements/scorm.md",sourceDirName:"02_platform/02_create/03_elements",slug:"/platform/create/elements/scorm",permalink:"/docs/platform/create/elements/scorm",editUrl:"https://github.com/gmetrixr/docs/edit/main/gmetri-docs/docs/02_platform/02_create/03_elements/scorm.md",tags:[],version:"current",frontMatter:{title:"Add SCORM packages to Build XR Experiences",description:"View Description, Usage, Looks, Properties, Rules, When Events, Then Actions, Compatibility, Tutorials for running SCORM packages in GMetri XR experiences.",hide_title:!0,sidebar_label:"SCORM"},sidebar:"tutorialSidebar",previous:{title:"Score",permalink:"/docs/platform/create/elements/score"},next:{title:"Share",permalink:"/docs/platform/create/elements/share"}},p={},u=[{value:"Properties",id:"properties",level:2},{value:"Rules",id:"rules",level:2},{value:"When Event",id:"when-event",level:3},{value:"Then Action",id:"then-action",level:3}],m={toc:u};function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"scorm"},"SCORM"),(0,o.kt)("p",null,"Use this element to integrate a SCORM package with a GMetri experience."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"URL"),": The URL to the entry file for the SCORM package. This is generally an address to the HTML file inside the SCORM package. Example: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://example.com/scorm/index.html"))),(0,o.kt)("h2",{id:"rules"},"Rules"),(0,o.kt)("h3",{id:"when-event"},"When Event"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"is completed")," - Use this event to perform any actions whenever the user completes the SCORM module."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"is initialized")," - Use this event to perform any actions whenever the SCORM module is loaded initially."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"sets score")," - Use this event to capture the score emitted from the SCORM module into a variable. Example rule: ",(0,o.kt)("inlineCode",{parentName:"li"},"When SCORM sets score, then capture variable_score should capture data")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"is closed")," - Use this event to perform any action when the SCORM module is closed.")),(0,o.kt)("h3",{id:"then-action"},"Then Action"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"appear")," - Make the SCORM element appear"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"disappear")," - Make the SCORM element disappear")))}d.isMDXComponent=!0}}]);