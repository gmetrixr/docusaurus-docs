"use strict";(self.webpackChunkgmetri_docs=self.webpackChunkgmetri_docs||[]).push([[2867],{9613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1266:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var n=r(7813),o=r(7044),a=(r(9496),r(9613)),l=["components"],i={title:"Build XR Experiences on GMetri Platform",description:"Understand concepts related to Rules on the GMetri XR platform.",hide_title:!0},c="Introduction to Rules",s={unversionedId:"platform/create/rules/index",id:"platform/create/rules/index",title:"Build XR Experiences on GMetri Platform",description:"Understand concepts related to Rules on the GMetri XR platform.",source:"@site/docs/02_platform/02_create/05_rules/index.md",sourceDirName:"02_platform/02_create/05_rules",slug:"/platform/create/rules/",permalink:"/docs/platform/create/rules/",editUrl:"https://github.com/gmetrixr/docs/edit/main/gmetri-docs/docs/02_platform/02_create/05_rules/index.md",tags:[],version:"current",frontMatter:{title:"Build XR Experiences on GMetri Platform",description:"Understand concepts related to Rules on the GMetri XR platform.",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Using Variables",permalink:"/docs/platform/create/variables/using-variables"},next:{title:"Introduction",permalink:"/docs/platform/publish/intro"}},u={},p=[{value:"Add rules",id:"add-rules",level:2},{value:"Enable/Disable rules",id:"enabledisable-rules",level:2},{value:"Tracking rules",id:"tracking-rules",level:2},{value:"Search rules",id:"search-rules",level:2},{value:"Color coding",id:"color-coding",level:2},{value:"Stacking events and actions",id:"stacking-events-and-actions",level:2},{value:"Rule actions",id:"rule-actions",level:2}],d={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction-to-rules"},"Introduction to Rules"),(0,a.kt)("p",null,"Rules define the actions performed based on certain event triggers. Event triggers can be in the form of clicks, scene loads and many more.\nEvent trigger vary from element to element and are specified in detail on every element's documentation page."),(0,a.kt)("p",null,"To add a rule, hea over to the rule (zig-zag connected dots) button on the top left of your editor screen/"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/z5/rules.JPG#boxShadow/",alt:"Editor rules"})),(0,a.kt)("p",null,"Rules follow a ",(0,a.kt)("inlineCode",{parentName:"p"},"WHEN an EVENT is triggered THEN an ACTION is performed")," model. Thus rules are applied to elements or a scene to perform certain action based on event triggers."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/z5/rule_expanded.JPG#boxShadow/",alt:"rules"})),(0,a.kt)("h2",{id:"add-rules"},"Add rules"),(0,a.kt)("p",null,"To add a rule, click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"New Rule")," button."),(0,a.kt)("h2",{id:"enabledisable-rules"},"Enable/Disable rules"),(0,a.kt)("p",null,"To enable or disable rules, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Active")," checkbox on the top right of the rule."),(0,a.kt)("h2",{id:"tracking-rules"},"Tracking rules"),(0,a.kt)("p",null,"To enable analytics tracking of a rule check the ",(0,a.kt)("inlineCode",{parentName:"p"},"Analytics")," checkbox on the top right."),(0,a.kt)("h2",{id:"search-rules"},"Search rules"),(0,a.kt)("p",null,"On larger experiences, the amount of rules can increase multi-folds. To ease the process of finding a rule, you can use the searchbox on the rules page. You can search for any keyword related to a particular rule (event, action, element names etc.)"),(0,a.kt)("h2",{id:"color-coding"},"Color coding"),(0,a.kt)("p",null,"To help you cluster rules together, you can color code them. To do so, click on the color box on the top left of a rule and choose a color."),(0,a.kt)("h2",{id:"stacking-events-and-actions"},"Stacking events and actions"),(0,a.kt)("p",null,"You can stack events using ",(0,a.kt)("inlineCode",{parentName:"p"},"AND")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"OR")," operators. This is useful when you want to perform actions based off multiple events.\nFor example, when event A AND B AND C occur, perform action(s). Or, when event A OR B OR C occur, perform action(s).\nHence multiple actions can be triggered based on one of more events."),(0,a.kt)("p",null,"An example of an event is: "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"WHEN")," ",(0,a.kt)("strong",{parentName:"p"},"Scene_A")," loads ",(0,a.kt)("inlineCode",{parentName:"p"},"OR")," ",(0,a.kt)("strong",{parentName:"p"},"start_button")," is clicked ",(0,a.kt)("inlineCode",{parentName:"p"},"THEN"),"  ",(0,a.kt)("strong",{parentName:"p"},"increment a variable")," ",(0,a.kt)("inlineCode",{parentName:"p"},"AND")," toggle ",(0,a.kt)("strong",{parentName:"p"},"Cube_A")," to appear/dissapear."),(0,a.kt)("h2",{id:"rule-actions"},"Rule actions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Select"),(0,a.kt)("li",{parentName:"ul"},"Duplicate"),(0,a.kt)("li",{parentName:"ul"},"Delete")))}m.isMDXComponent=!0}}]);