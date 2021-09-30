"use strict";(self.webpackChunkgmetri_docs=self.webpackChunkgmetri_docs||[]).push([[4751],{9613:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,b=d["".concat(l,".").concat(u)]||d[u]||p[u]||o;return n?r.createElement(b,a(a({ref:t},m),{},{components:n})):r.createElement(b,a({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7796:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return m},default:function(){return d}});var r=n(98),i=n(6862),o=(n(9496),n(9613)),a=["components"],s={title:"How to Embed VR on Website with iFrame - Experience Deployment - GMetri XR Platform",description:"Experiences created on the GMetri platform can be easily embedded within websites using the embed code generated after publishing the experience - Tutorials on GMetri Documentation",hide_title:!0,sidebar_label:"Website Embed"},l="Website Embed",c={unversionedId:"features/publish/embed/website-embed",id:"features/publish/embed/website-embed",isDocsHomePage:!1,title:"How to Embed VR on Website with iFrame - Experience Deployment - GMetri XR Platform",description:"Experiences created on the GMetri platform can be easily embedded within websites using the embed code generated after publishing the experience - Tutorials on GMetri Documentation",source:"@site/docs/02-features/publish/embed/02-website-embed.md",sourceDirName:"02-features/publish/embed",slug:"/features/publish/embed/website-embed",permalink:"/docs/features/publish/embed/website-embed",editUrl:"https://github.com/gmetrixr/docs/edit/main/gmetri-docs/docs/02-features/publish/embed/02-website-embed.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"How to Embed VR on Website with iFrame - Experience Deployment - GMetri XR Platform",description:"Experiences created on the GMetri platform can be easily embedded within websites using the embed code generated after publishing the experience - Tutorials on GMetri Documentation",hide_title:!0,sidebar_label:"Website Embed"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/features/publish/embed/introduction"},next:{title:"Android Embed",permalink:"/docs/features/publish/embed/android-embed"}},m=[],p={toc:m};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"website-embed"},"Website Embed"),(0,o.kt)("p",null,"Experiences created on the GMetri platform can be easily embedded within websites using the embed code generated after publishing the experience."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Ensure that the "Public" option for your published experience is turned on.'),(0,o.kt)("li",{parentName:"ul"},"For ",(0,o.kt)("strong",{parentName:"li"},"linking"),", you can simply copy and insert the deployment URL in your website."),(0,o.kt)("li",{parentName:"ul"},"For ",(0,o.kt)("strong",{parentName:"li"},"embedding"),", you can copy the link for the deployment and embed it within an iframe in your website."),(0,o.kt)("li",{parentName:"ul"},"Add the required permissions to the iframe element as shown in the example below (replace src with your deployment link):")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<div className="embed_iframe_container gmetri-embed-gmetri-test_don_jan" \n     style="width: 560px; height: 315px; position: relative; overflow: hidden;">\n      \n</div>\n<script type="text/javascript" src="..." async>\n<\/script>\n')),(0,o.kt)("p",null,"Example code to show a GMETRI Experience as a fullscreen iframe:\nIn index.html:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<html style="margin: 0; height: 100%; overflow: hidden">\n<head>\n    <meta name="apple-mobile-web-app-capable" content="yes" />\n    <meta name="mobile-web-app-capable" content="yes" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"> \n    <title>\n    GMETRI | experience-name\n    </title>\n</head>\n  <body>\n    <div className= "embed_iframe_container gmetri-embed-gmetri-project-name" \n         style="position: absolute; left: 0; right: 0; top: 0; bottom: 0"></div>\n      <script type=\'text/javascript\' src="..." async><\/script>\n  </body>\n</html>\n')))}d.isMDXComponent=!0}}]);