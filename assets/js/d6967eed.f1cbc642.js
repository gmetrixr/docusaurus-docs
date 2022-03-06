"use strict";(self.webpackChunkgmetri_docs=self.webpackChunkgmetri_docs||[]).push([[4263],{9613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var i=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?i.createElement(f,a(a({ref:t},p),{},{components:n})):i.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3319:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var i=n(7813),r=n(7044),o=(n(9496),n(9613)),a=["components"],c={hide_title:!0,sidebar_label:"Social"},l="Social",s={unversionedId:"platform/publish/authentication/social",id:"platform/publish/authentication/social",title:"Social",description:"When a deployment's authentication is set to Social for a Deployment, viewers need to login with their Social Media accounts like Google or Facebook.",source:"@site/docs/02_platform/03_publish/authentication/social.md",sourceDirName:"02_platform/03_publish/authentication",slug:"/platform/publish/authentication/social",permalink:"/docs/platform/publish/authentication/social",editUrl:"https://github.com/gmetrixr/docs/edit/main/gmetri-docs/docs/02_platform/03_publish/authentication/social.md",tags:[],version:"current",frontMatter:{hide_title:!0,sidebar_label:"Social"},sidebar:"tutorialSidebar",previous:{title:"Public",permalink:"/docs/platform/publish/authentication/public"},next:{title:"Custom List",permalink:"/docs/platform/publish/authentication/viewer_groups/custom_list"}},p={},u=[{value:"Login Screen",id:"login-screen",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"social"},"Social"),(0,o.kt)("p",null,"When a deployment's authentication is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"Social")," for a Deployment, viewers need to login with their Social Media accounts like ",(0,o.kt)("inlineCode",{parentName:"p"},"Google")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Facebook"),". "),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Whenever a new deployment is created, its ",(0,o.kt)("inlineCode",{parentName:"p"},"Viewer Group")," type is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"Social")," by default."))),(0,o.kt)("h2",{id:"login-screen"},"Login Screen"),(0,o.kt)("p",null,"The login screen for any experience that is set to Social authentication mode looks something like this: "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/social_login.png.jpg#boxShadow/",alt:"Social Login"})))}d.isMDXComponent=!0}}]);