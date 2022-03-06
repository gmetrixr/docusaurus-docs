"use strict";(self.webpackChunkgmetri_docs=self.webpackChunkgmetri_docs||[]).push([[133],{9613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),g=i,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6067:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(7813),i=n(7044),a=(n(9496),n(9613)),o=["components"],l={sidebar_label:"Introduction",sidebar_position:1,hide_table_of_contents:!1},s="GMetri Plugin Ecosystem",p={unversionedId:"plugins/intro",id:"plugins/intro",title:"GMetri Plugin Ecosystem",description:"Plugins are third-party scripts or applications that extend the functionality of GMetri Editor or Viewer. They allow users to customize their experiences or create more efficient workflows.",source:"@site/docs/07_plugins/00_intro.md",sourceDirName:"07_plugins",slug:"/plugins/intro",permalink:"/docs/plugins/intro",editUrl:"https://github.com/gmetrixr/docs/edit/main/gmetri-docs/docs/07_plugins/00_intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Introduction",sidebar_position:1,hide_table_of_contents:!1},sidebar:"tutorialSidebar",previous:{title:"Constraints",permalink:"/docs/compatibility/constraints"},next:{title:"API Tokens",permalink:"/docs/plugins/api_token"}},c={},u=[{value:"Plugin Access",id:"plugin-access",level:2},{value:"Plugin APIs",id:"plugin-apis",level:3},{value:"GMetri Player",id:"gmetri-player",level:3},{value:"Examples",id:"examples",level:3}],d={toc:u};function g(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gmetri-plugin-ecosystem"},"GMetri Plugin Ecosystem"),(0,a.kt)("p",null,"Plugins are third-party scripts or applications that extend the functionality of GMetri Editor or Viewer. They allow users to customize their experiences or create more efficient workflows."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Plugins are supposed to extend functionalities that are not already available on the GMetri Platform.\nIf you haven't explored the platform yet, head ",(0,a.kt)("a",{parentName:"p",href:"https://portal.gmetri.com/signup"},"here")," to signup. Go explore!  ")),(0,a.kt)("p",null,"Like GMetri Editor and Viewer, plugins are powered by web technologies. You'll need a basic understanding of these technologies to develop and take advantage of the Plugin ecosystem."),(0,a.kt)("p",null,"Plugins interact with GMetri via dedicated ",(0,a.kt)("strong",{parentName:"p"},"Plugin APIs"),". The API reference and the accompanying documentation has all the information you need to build plugins. "),(0,a.kt)("h2",{id:"plugin-access"},"Plugin Access"),(0,a.kt)("p",null,"The Plugin API supports for ",(0,a.kt)("strong",{parentName:"p"},"read")," and ",(0,a.kt)("strong",{parentName:"p"},"write")," operations, allowing developers to ",(0,a.kt)("strong",{parentName:"p"},"view"),", ",(0,a.kt)("strong",{parentName:"p"},"create")," and ",(0,a.kt)("strong",{parentName:"p"},"edit")," experiences."),(0,a.kt)("p",null,"To use the Plugin API(s), you will need an ",(0,a.kt)("strong",{parentName:"p"},"API token"),". To get an API Token, follow the steps down ",(0,a.kt)("a",{parentName:"p",href:"./api_token"},"here")),(0,a.kt)("p",null,"For the ease of understanding, we've broken the documentation down into two different sections.\nWe will first go over the usage of ",(0,a.kt)("strong",{parentName:"p"},"REST APIs")," and then about the usage of the ",(0,a.kt)("strong",{parentName:"p"},"GMetri Player"),"."),(0,a.kt)("h3",{id:"plugin-apis"},"Plugin APIs"),(0,a.kt)("p",null,"GMetri exposes a defined set of ",(0,a.kt)("strong",{parentName:"p"},"REST APIs")," which will allow you to ",(0,a.kt)("strong",{parentName:"p"},"create"),", ",(0,a.kt)("strong",{parentName:"p"},"view")," and ",(0,a.kt)("strong",{parentName:"p"},"edit")," experiences.\nAny changes done via the API interface will be visible immediately on the GMetri Platform as well.\nFor example, creating a new experience via REST APIs will also show this newly created experience on platform experiences page."),(0,a.kt)("p",null,"The REST APIs are broken down into 2 different functions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Experience")," - This contains APIs for creating, viewing and modifying experiences. Detailed documentation is available ",(0,a.kt)("a",{parentName:"li",href:"./rest_api/experience"},"here")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"File Manager")," - This contains APIs for uploading and managing files (",(0,a.kt)("strong",{parentName:"li"},"image/video/audio/3d"),"). Detailed documentation is available ",(0,a.kt)("a",{parentName:"li",href:"./rest_api/filemanager"},"here"))),(0,a.kt)("h3",{id:"gmetri-player"},"GMetri Player"),(0,a.kt)("p",null,"GMetri exposes it's ",(0,a.kt)("strong",{parentName:"p"},"viewer")," as a standalone player which can be added to any application via javascript.\n",(0,a.kt)("strong",{parentName:"p"},"GMetri Viewer")," is a full fledged ",(0,a.kt)("strong",{parentName:"p"},"Metaverse")," application on the web. It allows you to run experiences created using the Plugin API. "),(0,a.kt)("p",null,"Detailed documentation is available ",(0,a.kt)("a",{parentName:"p",href:"./player"},"here"),"    "),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("p",null,"We have a few examples ready to get you started using Plugin API ",(0,a.kt)("a",{parentName:"p",href:"/docs/plugins/examples/intro"},"here"),"."))}g.isMDXComponent=!0}}]);