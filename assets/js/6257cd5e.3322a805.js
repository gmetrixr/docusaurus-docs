"use strict";(self.webpackChunkgmetri_docs=self.webpackChunkgmetri_docs||[]).push([[5858],{9613:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return h}});var n=a(9496);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(a),h=o,u=c["".concat(p,".").concat(h)]||c[h]||d[h]||r;return a?n.createElement(u,i(i({ref:t},m),{},{components:a})):n.createElement(u,i({ref:t},m))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1787:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var n=a(7813),o=a(7044),r=(a(9496),a(9613)),i=["components"],l={title:"How to make a simple QR code scanner app - GMetri XR Platform",description:"Made using the GMetri XR platform, this app demonstrates the versatility of the GMetri platform, for enabling the creation of 2D experiences on the platform.",hide_title:!0,sidebar_label:"QR Code Scanner",sidebar_position:5},p="QR Code Scanner",s={unversionedId:"features/qr_code",id:"features/qr_code",title:"How to make a simple QR code scanner app - GMetri XR Platform",description:"Made using the GMetri XR platform, this app demonstrates the versatility of the GMetri platform, for enabling the creation of 2D experiences on the platform.",source:"@site/docs/03_features/06_qr_code.md",sourceDirName:"03_features",slug:"/features/qr_code",permalink:"/docs/features/qr_code",editUrl:"https://github.com/gmetrixr/docs/edit/main/gmetri-docs/docs/03_features/06_qr_code.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"How to make a simple QR code scanner app - GMetri XR Platform",description:"Made using the GMetri XR platform, this app demonstrates the versatility of the GMetri platform, for enabling the creation of 2D experiences on the platform.",hide_title:!0,sidebar_label:"QR Code Scanner",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Chatbot Integration",permalink:"/docs/features/chatbot"},next:{title:"Adding Sprites",permalink:"/docs/features/sprites"}},m={},d=[{value:"Description",id:"description",level:2},{value:"Elements Used",id:"elements-used",level:2},{value:"Add Elements",id:"add-elements",level:2},{value:"Add Rules",id:"add-rules",level:2},{value:"Test",id:"test",level:2},{value:"Deploy",id:"deploy",level:2}],c={toc:d};function h(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"qr-code-scanner"},"QR Code Scanner"),(0,r.kt)("p",null,"Let's learn how to make a simple QR code scanner app."),(0,r.kt)("div",{className:"mobile"},(0,r.kt)("div",{className:"mobile_front_camera"}),(0,r.kt)("div",{className:"mobile_top_speaker"}),(0,r.kt)("video",{autoPlay:!0,loop:!0,muted:!0,height:"420",width:"240",playsInline:!0},(0,r.kt)("source",{src:"https://s.vrgmetri.com/gb-web/portal-docs/assets/videos/coffee_maker.mp4",type:"video/mp4"}),"Your browser does not support the video tag."),(0,r.kt)("br",null),(0,r.kt)("div",{className:"mobile_button"})),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Made using the GMetri XR platform, this app demonstrates the versatility of the GMetri platform, for enabling the creation of 2D experiences on the platform.\nThis QR Code app can scan QR Codes to show product information. We have two devices, namely, a coffee maker and a frother. We show YouTube videos corresponding to these elements when their QR codes are scanned!"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This app uses QR Code Matcher Element (see ",(0,r.kt)("inlineCode",{parentName:"p"},"Elements Used")," section below) and hence the experience only works on mobile devices."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The above app is available to all ",(0,r.kt)("a",{parentName:"li",href:"https://view.gmetri.com/v4/xyecjf/scanner/"},"here"),"."),(0,r.kt)("li",{parentName:"ul"},"To generate QR codes for any text, head ",(0,r.kt)("a",{parentName:"li",href:"https://www.the-qrcode-generator.com/"},"here"),".")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},'The above app can scan QR codes with the words "coffee" and "frother" only. When it reads any of those words, it will open up a YouTube video for the corresponding elements.'))),(0,r.kt)("h2",{id:"elements-used"},"Elements Used"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pano Image"),(0,r.kt)("li",{parentName:"ul"},"Image"),(0,r.kt)("li",{parentName:"ul"},"Pop-Up"),(0,r.kt)("li",{parentName:"ul"},"QR Code Matcher")),(0,r.kt)("h2",{id:"add-elements"},"Add Elements"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new experience called ",(0,r.kt)("inlineCode",{parentName:"p"},"Scanner"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Head over to the editor.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on the Elements button inside editor.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose the Pano Image."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Give a name to the Pano Image. Here we named it ",(0,r.kt)("inlineCode",{parentName:"p"},"White_Background"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Now, on the right bar, click on the upload button to upload a Pano Image. "),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Note: ",(0,r.kt)("em",{parentName:"p"},"Pano Image is the background of your Scene."))),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/QR_Tutorial_Pano.png.jpg#boxShadow/",alt:"QR_Tutorial_Pano"}),"\n")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Once you click that, the file uploader will open up. Here, either you can  upload a background of your choice or chose from the templates. To choose a white background from the templates, go to ",(0,r.kt)("inlineCode",{parentName:"p"},"templates/panos/helpers/")," and find ",(0,r.kt)("inlineCode",{parentName:"p"},"white_pano.jpg"),"."),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/QR_Tutorial_File_Uploader.png.jpg#boxShadow/",alt:"QR_Tutorial_Pano"}),"\n")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Choose a Pano image and click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Select")," button. The image will be applied as the background of your Scene.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on the Elements button again and now choose the Image element. An image thumbnail will appear in the Editor. We will use this image as a button.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"This is the right time for us to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Gyro lock")," feature. "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Click on Scene in the Structure Tab on the Right Bar. "),(0,r.kt)("li",{parentName:"ul"},"Now go to Properties Tab and click on the Gyro Lock. ")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"See the yellow highlighted setting in the image below."))),(0,r.kt)("p",{parentName:"li"}," ",(0,r.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/QR_Tutorial_Gyro.png.jpg#boxShadow/",alt:"Gyro"})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Go ahead and try to click and drag the experience. You can't? That's right. What you just observed is, the experience got locked in 2 dimensions and became non-draggable.",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Gyro lock is used for making 2D applications on the GMetri XR platform. "))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Next, upload an image to the Image element that we created in step 5. The steps to upload are pretty much the same as those shown in step 4 for uploading the Pano Image. We have used an image that suggests ",(0,r.kt)("inlineCode",{parentName:"p"},"QR Code scanner"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once you're all set with your image, add 2 Pop-Up elements to the experience using the Elements button. These Pop-Ups will be used to show YouTube videos of the devices that we scan with the QR Code."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Decide the number of objects that you want to scan the QR code for and create as many Pop-Up elements as devices. Here we choose 2 devices from the office - Coffee Maker and Milk Frother for this demo. Hence we add 2 pano elements in step 8."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Double-click on the newly created Pop-Up Elements in the Structure Tab to change their names to something relevant to the product that will be displayed and click on the Properties Tab to change its properties:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/QR_Tutorial_Pop_Up.png.jpg#boxShadow/",alt:"Pop-Up"})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Add")," button to add ",(0,r.kt)("inlineCode",{parentName:"p"},"Items")," to the pop-up."),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/QR_Tutorial_Pop_Up_Add.png.jpg#boxShadow/",alt:"ADD"}),"\n")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Now from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Drop down")," choose YouTube link.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add the link and details of the product being displayed in the heading and description."),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/QR_Tutorial_Pop_Up_YouTube.png.jpg#boxShadow/",alt:"ADD youtube"}),"\n")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Do step 9 for all of the Pop-Ups.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add a Text Element optionally to show the app name. Here, we use the name ",(0,r.kt)("inlineCode",{parentName:"p"},"Scanner"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now, we add the most important element for this app, the QR Code Matcher."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Once added, head over to the Properties Tab of the QR Code Matcher and add two (or as many devices as you have) items as shown below."),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/QR_Tutorial_Code_Matcher.png.jpg#boxShadow/",alt:"QR Matcher"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"QR Matcher matches the string in a scanned QR Code to the strings above, and performs certain activities accordingly. (We will explore how as we go ahead)"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Summary:")),(0,r.kt)("p",null,"Once all elements are added, your editor should look something like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/QR_Tutorial.png.jpg#boxShadow/",alt:"Editor"})),(0,r.kt)("p",null,"And the Right Bar Structure Tab should show your elements:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/QR_Tutorial_Right_bar_summary.png.jpg#boxShadow/",alt:"Right bar"})),(0,r.kt)("h2",{id:"add-rules"},"Add Rules"),(0,r.kt)("p",null,"Now that we have all the Elements in place, we need to add rules between elements for the app to work."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Head over to the rules window by clicking on the Rules button."),(0,r.kt)("li",{parentName:"ol"},"Firstly, we need to have a click event for the Image that should open the QR Code Matcher and start scanning for QR codes.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/QR_Tutorial_Image_QR_Matcher_Connection.png.jpg#boxShadow#zoom/",alt:"Rules"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Second, we add 2 rules that tell the Code Matcher to open the respective Pop-Up Elements when a particular string is scanned.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/QR_Tutorial_Code_Matcher_Pop_Up_Connection.png.jpg#boxShadow#zoom/",alt:"Rule"})),(0,r.kt)("h2",{id:"test"},"Test"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"That's it! It now time to test the application. You can do that by clicking the green ",(0,r.kt)("inlineCode",{parentName:"li"},"Play")," button in Right bar. "),(0,r.kt)("li",{parentName:"ul"},"A QR Code shall appear. Scan this from your phone to preview your app. The changes you make in the editor will be available in the preview as soon as you make them after refreshing the page!")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Note that QR Code Matcher and Browser works only on mobile hence this experience should be run on a mobile device."))),(0,r.kt)("h2",{id:"deploy"},"Deploy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For other to view this app, you must deploy it. To do this head over to the Publish section to know more.")))}h.isMDXComponent=!0}}]);