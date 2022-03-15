"use strict";(self.webpackChunkgmetri_docs=self.webpackChunkgmetri_docs||[]).push([[7806],{9613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=p(n),d=r,u=g["".concat(s,".").concat(d)]||g[d]||m[d]||i;return n?a.createElement(u,l(l({ref:t},c),{},{components:n})):a.createElement(u,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4060:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var a=n(7813),r=n(7044),i=(n(9496),n(9613)),l=["components"],o={title:"Storing and Managing assets on the GMetri XR Platform",description:"File management and storage on GMetri XR Platform, Usage in GMetri XR Experiences.",hide_title:!0,sidebar_label:"File Manager"},s="File Manager",p={unversionedId:"platform/create/experience/file_manager",id:"platform/create/experience/file_manager",title:"Storing and Managing assets on the GMetri XR Platform",description:"File management and storage on GMetri XR Platform, Usage in GMetri XR Experiences.",source:"@site/docs/02_platform/02_create/02_experience/03_file_manager.md",sourceDirName:"02_platform/02_create/02_experience",slug:"/platform/create/experience/file_manager",permalink:"/docs/platform/create/experience/file_manager",editUrl:"https://github.com/gmetrixr/docs/edit/main/gmetri-docs/docs/02_platform/02_create/02_experience/03_file_manager.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Storing and Managing assets on the GMetri XR Platform",description:"File management and storage on GMetri XR Platform, Usage in GMetri XR Experiences.",hide_title:!0,sidebar_label:"File Manager"},sidebar:"tutorialSidebar",previous:{title:"Scene",permalink:"/docs/platform/create/experience/scene"},next:{title:"Duplicate an Experience",permalink:"/docs/platform/create/experience/duplicate_experience"}},c={},m=[{value:"Uploading assets",id:"uploading-assets",level:2},{value:"Selecting files using File Manager",id:"selecting-files-using-file-manager",level:2},{value:"Uploading 3D Models",id:"uploading-3d-models",level:3}],g={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"file-manager"},"File Manager"),(0,i.kt)("p",null,"All assets used in GMetri experiences are managed using the Fila Manager."),(0,i.kt)("p",null,"You can access the File Manager insider the editor by clicking on the ",(0,i.kt)("strong",{parentName:"p"},"folder icon")," on the left bar. "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/q_90,w_500/gb-web/portal-docs/assets/img/screenshots/file_manager/file_manager_screen2.png.jpg#boxShadow",alt:"File Manager"})),(0,i.kt)("h2",{id:"uploading-assets"},"Uploading assets"),(0,i.kt)("p",null,"To upload assets, ",(0,i.kt)("strong",{parentName:"p"},"drag and drop")," any number of file or folders to the file manager screen. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Doing this will open up the uploader modal and add all the files and folders for uploading.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/q_90,w_500/gb-web/portal-docs/assets/img/screenshots/file_manager/file_manager_screen5.png.jpg#boxShadow",alt:"File Manager"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click on the upload button on the bottom right to start the upload process. A progress bar at the bottom tells you the upload status.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/q_90,w_500/gb-web/portal-docs/assets/img/screenshots/file_manager/file_manager_screen4.png.jpg#boxShadow",alt:"File Manager"})),(0,i.kt)("h2",{id:"selecting-files-using-file-manager"},"Selecting files using File Manager"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Select the element that you want to change the file for, and click on properties tab. Then select the ",(0,i.kt)("inlineCode",{parentName:"li"},"File Select")," icon.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/h_400,q_90/gb-web/portal-docs/assets/img/screenshots/file_manager_selection_mode.png#boxShadow#boxShadow",alt:"File Manager"})," "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This opens the File Manager in ",(0,i.kt)("inlineCode",{parentName:"li"},"Selection Mode"),". You can\n",(0,i.kt)("strong",{parentName:"li"},"Selection Mode")," can be enabled by clicking on the upload icon in the element properties on the rightbar:")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/q_90,w_500/gb-web/portal-docs/assets/img/screenshots/file_manager/file_manager_screen6.jpg#boxShadow",alt:"File Manager"})," "),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You will not be able to select a file if you open the file manager from the left bar, as this opens the ",(0,i.kt)("strong",{parentName:"p"},'"Browsing mode"')," and not the ",(0,i.kt)("strong",{parentName:"p"},'"Selection mode"')))),(0,i.kt)("h3",{id:"uploading-3d-models"},"Uploading 3D Models"),(0,i.kt)("p",null,"Steps for uploading ",(0,i.kt)("inlineCode",{parentName:"p"},"glb")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"gltf")," (zip) models:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"GLB")," - This is usually a single file hat contains information for all images, textures and animations used in the 3D model.\nThis file can be uploaded like any other asset such as image, audio or video."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"GLTF")," - This is usually a combination of a few files. A sample gltf 3D model would contain at least 1 ",(0,i.kt)("inlineCode",{parentName:"li"},".gltf")," file, 1 or more ",(0,i.kt)("inlineCode",{parentName:"li"},".bin")," files and 1 or more ",(0,i.kt)("inlineCode",{parentName:"li"},"image")," files.\nTo upload and use a GLTF 3D model, simply ",(0,i.kt)("strong",{parentName:"li"},"zip")," up all the files keeping the folder structure intact, drag and drop on the file manager screen and click the upload button.\nThis zip file will be available for use in a few moments after we are done processing the file.")))}d.isMDXComponent=!0}}]);