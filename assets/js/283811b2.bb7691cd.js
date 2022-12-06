"use strict";(self.webpackChunkhondrytravis_blog=self.webpackChunkhondrytravis_blog||[]).push([[1697],{3905:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return u}});var n=a(7294);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,p=function(e,t){if(null==e)return{};var a,n,p={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(p[a]=e[a]);return p}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(p[a]=e[a])}return p}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},o=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,p=e.mdxType,l=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),k=s(a),u=p,d=k["".concat(c,".").concat(u)]||k[u]||m[u]||l;return a?n.createElement(d,r(r({ref:t},o),{},{components:a})):n.createElement(d,r({ref:t},o))}));function u(e,t){var a=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var l=a.length,r=new Array(l);r[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:p,r[1]=i;for(var s=2;s<l;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},8505:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return o},default:function(){return k}});var n=a(3117),p=a(102),l=(a(7294),a(3905)),r=["components"],i={title:"Webpack | \u4f18\u5316 & \u63d2\u4ef6"},c=void 0,s={unversionedId:"tools/webpack_until_v4",id:"tools/webpack_until_v4",isDocsHomePage:!1,title:"Webpack | \u4f18\u5316 & \u63d2\u4ef6",description:"webpack 5\u2193 \u7248\u672c\u8c03\u6574\u5408\u96c6\uff0c\u4e0d\u4f1a\u7b97\u6211\u8f93",source:"@site/packages/docs/tools/webpack_until_v4.md",sourceDirName:"tools",slug:"/tools/webpack_until_v4",permalink:"/docs/tools/webpack_until_v4",editUrl:"https://github.com/HondryTravis/Blog/tree/master/packages/docs/tools/webpack_until_v4.md",tags:[],version:"current",lastUpdatedBy:"travis",lastUpdatedAt:1670325249,formattedLastUpdatedAt:"2022/12/6",frontMatter:{title:"Webpack | \u4f18\u5316 & \u63d2\u4ef6"},sidebar:"docs",previous:{title:"CSS \u6709\u8da3\u7684\u63d2\u4ef6",permalink:"/docs/css/css_plugin"},next:{title:"NodeJS \u521d\u63a2",permalink:"/docs/node/node"}},o=[{value:"\u5feb\u901f\u4e0a\u624b",id:"\u5feb\u901f\u4e0a\u624b",children:[],level:2},{value:"\u601d\u8def",id:"\u601d\u8def",children:[],level:2},{value:"\u591a\u6838\u4f18\u5316\u538b\u7f29",id:"\u591a\u6838\u4f18\u5316\u538b\u7f29",children:[{value:"javascript",id:"javascript",children:[],level:3},{value:"css",id:"css",children:[],level:3}],level:2},{value:"\u6253\u5305\u5206\u6790",id:"\u6253\u5305\u5206\u6790",children:[{value:"\u901f\u5ea6\u5206\u6790",id:"\u901f\u5ea6\u5206\u6790",children:[],level:3},{value:"\u6253\u5305\u8fdb\u5ea6\u6761",id:"\u6253\u5305\u8fdb\u5ea6\u6761",children:[],level:3},{value:"\u6587\u4ef6\u5206\u6790\u9762\u677f",id:"\u6587\u4ef6\u5206\u6790\u9762\u677f",children:[],level:3}],level:2},{value:"\u7f13\u5b58\u52a0\u901f",id:"\u7f13\u5b58\u52a0\u901f",children:[{value:"\u6574\u4e2a\u5de5\u7a0b\u5f00\u542f\u7f13\u5b58",id:"\u6574\u4e2a\u5de5\u7a0b\u5f00\u542f\u7f13\u5b58",children:[],level:3},{value:"cache-loader",id:"cache-loader",children:[],level:3}],level:2},{value:"\u8d44\u6e90\u5904\u7406",id:"\u8d44\u6e90\u5904\u7406",children:[],level:2},{value:"runtime",id:"runtime",children:[],level:2},{value:"\u56fe\u7247",id:"\u56fe\u7247",children:[],level:2},{value:"html",id:"html",children:[],level:2},{value:"\u4ee3\u7801\u5206\u6790",id:"\u4ee3\u7801\u5206\u6790",children:[],level:2},{value:"\u9519\u8bef\u63d0\u793a\u5904\u7406",id:"\u9519\u8bef\u63d0\u793a\u5904\u7406",children:[],level:2},{value:"\u5feb\u901f\u533a\u5206\u7ec8\u7aef\u7a97\u53e3",id:"\u5feb\u901f\u533a\u5206\u7ec8\u7aef\u7a97\u53e3",children:[],level:2},{value:"\u4ee3\u7801\u62c6\u5206",id:"\u4ee3\u7801\u62c6\u5206",children:[],level:2},{value:"polyfill",id:"polyfill",children:[],level:2},{value:"\u4f18\u79c0\u914d\u7f6e\u5e93\u641c\u96c6",id:"\u4f18\u79c0\u914d\u7f6e\u5e93\u641c\u96c6",children:[],level:2}],m={toc:o};function k(e){var t=e.components,a=(0,p.Z)(e,r);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8c03\u4f18\u6574\u5408")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"webpack 5\u2193 \u7248\u672c\u8c03\u6574\u5408\u96c6\uff0c\u4e0d\u4f1a\u7b97\u6211\u8f93"))),(0,l.kt)("h2",{id:"\u5feb\u901f\u4e0a\u624b"},"\u5feb\u901f\u4e0a\u624b"),(0,l.kt)("p",null,"webpack \u662f\u4e00\u6b3e\u9879\u76ee\u6a21\u5757\u6253\u5305\u5668"),(0,l.kt)("p",null,"\u8d77\u6b65\uff0c\u5feb\u901f\u4e0a\u624b\u79fb\u6b65\u81f3 ",(0,l.kt)("a",{parentName:"p",href:"https://www.webpackjs.com/concepts/"},"webpack \u6982\u5ff5")),(0,l.kt)("h2",{id:"\u601d\u8def"},"\u601d\u8def"),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"#%E6%89%93%E5%8C%85%E5%88%86%E6%9E%90"},"\u6253\u5305\u5206\u6790")," \u5f97\u51fa\u7ed3\u679c\uff0c"),(0,l.kt)("p",null,"\u5bf9 loader \u6162\u5904\u7406 ",(0,l.kt)("a",{parentName:"p",href:"#%E7%BC%93%E5%AD%98%E5%8A%A0%E9%80%9F"},"\u7f13\u5b58\u52a0\u901f")),(0,l.kt)("p",null,"\u5bf9\u9759\u6001\u4ee3\u7801\u5904\u7406 ",(0,l.kt)("a",{parentName:"p",href:"#%E4%BB%A3%E7%A0%81%E5%88%86%E6%9E%90"},"\u4ee3\u7801\u5206\u6790")),(0,l.kt)("p",null,"\u591a\u7ebf\u7a0b\u52a0\u901f\u538b\u7f29 ",(0,l.kt)("a",{parentName:"p",href:"#%E5%A4%9A%E6%A0%B8%E4%BC%98%E5%8C%96%E5%8E%8B%E7%BC%A9"},"\u591a\u6838\u4f18\u5316")),(0,l.kt)("p",null,"\u5bf9 html \u5904\u7406 ",(0,l.kt)("a",{parentName:"p",href:"#html"},"html")),(0,l.kt)("p",null,"\u5bf9\u56fe\u7247\u5904\u7406 ",(0,l.kt)("a",{parentName:"p",href:"#%E5%9B%BE%E7%89%87"},"image")),(0,l.kt)("p",null,"...(\u5fd8\u4e86\uff1f\u5f80\u4e0b\u770b)"),(0,l.kt)("p",null,"\u5982\u679c\u5b9e\u5728\u8fd8\u662f\u7279\u522b\u6162\uff0c\u55ef\uff1f\ud83d\ude11 \u8003\u8651\u96c6\u7fa4\u7f16\u8bd1\u5427\uff0c\u5206\u6a21\u5757\u6253\u5305\uff0c\u901a\u8fc7 jenkins \u914d\u7f6e\u81ea\u52a8\u5316\uff0cshell \u811a\u672c\uff0c\u901a\u8fc7\u514d\u5bc6\u767b\u5f55 scp \u5230\u672c\u5730"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u63d0\u901f\u2191")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u6253\u5305 4 \u79d2 -> 1 \u79d2\u4e0d\u5230\u7684\u5feb\u611f, \u4f60\u80fd\u4f53\u4f1a\u4e48\uff1f"))),(0,l.kt)("h2",{id:"\u591a\u6838\u4f18\u5316\u538b\u7f29"},"\u591a\u6838\u4f18\u5316\u538b\u7f29"),(0,l.kt)("h3",{id:"javascript"},"javascript"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6df1\u5ea6 treeShaking(\u6ce8\u610f\u8fc7\u8001\u7248\u672c)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/webpack-deep-scope-plugin"},"webpack-deep-scope-plugin")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/webpack-parallel-uglify-plugin"},"webpack-parallel-uglify-plugin")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/purgecss-webpack-plugin"},"purifycss-webpack-plugin")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5f00\u542f\u591a\u6838\u538b\u7f29 ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/happypack"},"happypack")," \u591a\u7ebf\u7a0b\u7f16\u8bd1 webpack \u4e0d\u2f40\u6301\u7684\u60c5\u51b5\u4e0b\u4f7f\u2f64 ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/thread-loader"},"thread-loader")," ",(0,l.kt)("strong",{parentName:"p"},"\u614e\u7528\u8be5\u63d2\u4ef6"),"\uff0cJavaScript\u7684\u591a\u6838\u538b\u7f29\u53ef\u4ee5\u5f00\u542f ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/terser-webpack-plugin"},"terser-webpack-plugin")," (\u591a\u6838\u538b\u7f29 ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/uglifyjs-webpack-plugin"},"uglifyjs-webpack-plugin")," \u5b98\u2f45\u7ef4\u62a4 \u2fae\u5b98\u2f45\u7ef4\u62a4 ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/webpack-parallel-uglify-plugin"},"webpack-parallel-uglify-plugin"),")"))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"webpack 5")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("blockquote",{parentName:"div"},(0,l.kt)("p",{parentName:"blockquote"},"Webpack5 \u4e0d\u95f4\u65ad\u8fdb\u7a0b\uff08continuous processes\uff09\u548c\u7f13\u5b58\u5bf9\u4e8e\u2f24\u578b\u590d\u6742\u9879\u2f6c\u5e94\u2f64\uff0c\u5728\u5f00\u53d1\u9636\u6bb5\uff0c\u5f00\u53d1\u8005\u2f00\u822c\u4e60\u60ef\u4f7f\u2f64 Webpack --watch \u9009\u9879\u6216\u8005webpack devServer \u542f\u52a8\u2f00\u4e2a\u4e0d\u95f4\u65ad\u7684\u8fdb\u7a0b\uff08continuous processes\uff09\u4ee5\u8fbe\u5230\u6700\u4f73\u7684\u6784\u5efa\u901f\u5ea6\u548c\u6548\u7387\u3002Webpack --watch \u9009\u9879\u548c webpack-dev-server \u90fd\u4f1a\u76d1\u542c\u2f42\u4ef6\u7cfb\u7edf\uff0c\u8fdb\u2f7d\u5728\u5fc5\u8981\u65f6\uff0c\u89e6\u53d1\u6301\u7eed\u7f16\u8bd1\u6784\u5efa\u52a8\u4f5c\u3002")),(0,l.kt)("p",{parentName:"div"},"\u539f\u7406\u5176\u5b9e\u5c31\u662f\u8f6e\u8be2\u5224\u65ad\u2f42\u4ef6\u7684\u6700\u540e\u7f16\u8f91\u65f6\u95f4\u662f\u5426\u53d8\u5316\uff0c\u67d0\u4e2a\u2f42\u4ef6\u53d1\u2f63\u4e86\u53d8\u5316\uff0c\u5e76\u4e0d\u4f1a\u2f74\u523b\u544a\u8bc9\u76d1\u542c\u8005\uff0c\u2f7d\u662f\u5148\u7f13\u5b58\u8d77\u6765\uff0c\u7b49\u5f85aggregateTimeout\uff08Webpack \u7684 --watch \u9009\u9879\u5185\u7f6e\u7684\u7c7b\u4f3c batching \u7684\u80fd\u2f12\uff09",(0,l.kt)("a",{parentName:"p",href:"https://github.com/paulmillr/chokidar"},"https://github.com/paulmillr/chokidar")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const TerserJSPlugin = require('terser-webpack-plugin');\n      module.exports = {\n      optimization: {\n      minimizer: [new TerserJSPlugin({\n      cache: true, // \u662f\u5426\u7f13\u5b58\n      parallel: true, // \u662f\u5426\u5e76\u2f8f\u6253\u5305\n      sourceMap: true\n    })],\n  }\n}\n")),(0,l.kt)("h3",{id:"css"},"css"),(0,l.kt)("p",null,"CSS\u7684\u591a\u6838\u538b\u7f29 ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/optimize-css-assets-webpack-plugin"},"optimize-css-assets-webpack-plugin")),(0,l.kt)("h2",{id:"\u6253\u5305\u5206\u6790"},"\u6253\u5305\u5206\u6790"),(0,l.kt)("h3",{id:"\u901f\u5ea6\u5206\u6790"},"\u901f\u5ea6\u5206\u6790"),(0,l.kt)("p",null,"\u5229\u7528\u63d2\u4ef6 ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/speed-measure-webpack-plugin"},"speed-measure-webpack-plugin")),(0,l.kt)("h3",{id:"\u6253\u5305\u8fdb\u5ea6\u6761"},"\u6253\u5305\u8fdb\u5ea6\u6761"),(0,l.kt)("p",null,"\u5229\u7528\u63d2\u4ef6 ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/progress-bar-webpack-plugin"},"progress-bar-webpack-plugin")),(0,l.kt)("h3",{id:"\u6587\u4ef6\u5206\u6790\u9762\u677f"},"\u6587\u4ef6\u5206\u6790\u9762\u677f"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/webpack-dashboard"},"webpack-dashboard")," \u589e\u5f3a\u4e86 webpack \u7684\u8f93\u51fa\uff0c\u5305\u542b\u4f9d\u8d56\u7684\u2f24\u2f29\u3001\u8fdb\u5ea6\u548c\u5176\u4ed6\u7ec6\u8282\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/webpack-bundle-analyzer"},"webpack-bundle-analyzer")," \u6253\u5305\u7ed3\u679c\u5206\u6790"),(0,l.kt)("p",null,"\u96c6\u6210\u5230CI \u76d1\u63a7\u2f42\u4ef6\u7684\u2f24\u2f29 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/siddharthkp/bundlesize"},"https://github.com/siddharthkp/bundlesize")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"webpack --profile --json > stats.json\n")),(0,l.kt)("p",null,"\u5907\u7528\uff1a",(0,l.kt)("a",{parentName:"p",href:"http://alexkuz.github.io/webpack-chart/"},"webpack-chart")),(0,l.kt)("p",null,"\u5907\u7528\uff1a",(0,l.kt)("a",{parentName:"p",href:"http://webpack.github.io/analyse/"},"analyse")),(0,l.kt)("h2",{id:"\u7f13\u5b58\u52a0\u901f"},"\u7f13\u5b58\u52a0\u901f"),(0,l.kt)("h3",{id:"\u6574\u4e2a\u5de5\u7a0b\u5f00\u542f\u7f13\u5b58"},"\u6574\u4e2a\u5de5\u7a0b\u5f00\u542f\u7f13\u5b58"),(0,l.kt)("p",null,"\u6709\u65f6\u5019\u4e3a\u4e86\u6781\u81f4\u6027\u80fd\uff0c\u53ef\u4ee5\u4f7f\u7528\u8be5\u65b9\u6cd5\uff0c\u5f3a\u7f13\u5b58\uff0c\u614e\u7528"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/hard-source-webpack-plugin"},"hard-source-webpack-plugin")),(0,l.kt)("h3",{id:"cache-loader"},"cache-loader"),(0,l.kt)("p",null,"\u901a\u8fc7\u68c0\u6d4b\u90a3\u4e2a loader \u901f\u5ea6\u8fc7\u6162\u4f7f\u7528"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/cache-loader"},"cache-loader")),(0,l.kt)("p",null,"loader\u7684\u7f13\u5b58 => 'babel-loader?cacheDirectory=true'"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"exclude: /node_modules/, // \u6392\u9664\u4e0d\u5904\u7406\u7684\u2f6c\u5f55\ninclude: path.resolve(__dirname, 'src') // \u7cbe\u786e\u6307\u5b9a\u8981\u5904\u7406\u7684\u2f6c\u5f55\n")),(0,l.kt)("h2",{id:"\u8d44\u6e90\u5904\u7406"},"\u8d44\u6e90\u5904\u7406"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/html-inline-css-webpack-plugin"},"html-inline-css-webpack-plugin")," \u628a\u2f00\u4e9b\u6838\u2f3c\u7684CSS\u653e\u5230\u2eda\u2faf\u5185\u90e8"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/html-webpack-inline-source-plugin"},"html-webpack-inline-source-plugin")," \u5185\u90e8\u8d44\u6e90\u5f15\u2f0a"),(0,l.kt)("h2",{id:"runtime"},"runtime"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/inline-manifest-webpack-plugin"},"inline-manifest-webpack-plugin")," \u628aruntime\u653e\u5230html\u2fa5"),(0,l.kt)("h2",{id:"\u56fe\u7247"},"\u56fe\u7247"),(0,l.kt)("p",null,"\u538b\u7f29\u56fe\u2f5a ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/image-webpack-loader"},"image-webpack-loader")),(0,l.kt)("h2",{id:"html"},"html"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/html-webpack-plugin"},"html-webpack-plugin")," html"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'new HtmlWebpackPlugin({\n  inlineSource: ".css$",\n  template: path.join(__dirname, `src/${pageName}/index.html`),\n  filename: `${pageName}.html`,\n  chunks: ["vendors", pageName],\n  inject: true,\n  minify: {\n    html5: true,\n    collapseWhitespace: true,\n    preserveLineBreaks: false,\n    minifyCSS: true,\n    minifyJS: true,\n    removeComments: false,\n  },\n});\n')),(0,l.kt)("h2",{id:"\u4ee3\u7801\u5206\u6790"},"\u4ee3\u7801\u5206\u6790"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/prepack-webpack-plugin"},"prepack-webpack-plugin")," \u4ee3\u7801\u6c42\u503c\uff0c\u9759\u6001\u4ee3\u7801\u5206\u6790"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@babel/plugin-syntax-dynamic-import"},"@babel/plugin-syntax-dynamic-import")," \u52a8\u6001\u5f15\u2f0a"),(0,l.kt)("h2",{id:"\u9519\u8bef\u63d0\u793a\u5904\u7406"},"\u9519\u8bef\u63d0\u793a\u5904\u7406"),(0,l.kt)("p",null,"\u53cb\u597d\u9519\u8bef\u63d0\u793a ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/friendly-errors-webpack-plugin"},"friendly-errors-webpack-plugin")),(0,l.kt)("p",null,"\u793e\u533a\u7ef4\u62a4(\u901a\u77e5\uff0c\u672c\u5730 dev) ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/webpack-build-notifier"},"webpack-build-notifier")),(0,l.kt)("h2",{id:"\u5feb\u901f\u533a\u5206\u7ec8\u7aef\u7a97\u53e3"},"\u5feb\u901f\u533a\u5206\u7ec8\u7aef\u7a97\u53e3"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/set-iterm2-badge"},"set-iterm2-badge")," && ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/node-bash-title"},"node-bash-title")," \u6807\u9898\u548c\u7a97\u2f1d\u5185\u5bb9\u4fee\u6539"),(0,l.kt)("p",null,"\u9519\u8bef\u9000\u51fa(\u4e0d\u9700\u8981\u63d2\u4ef6)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function() {\n  this.hooks.done.tap('done', (stats) => {\n    if (stats.compilation.errors && stats.compilation.errors.length\n    && process.argv.indexOf('--watch') == -1)\n    {\n      console.log('build error');\n      process.exit(1);\n    }\n  })\n}\n")),(0,l.kt)("h2",{id:"\u4ee3\u7801\u62c6\u5206"},"\u4ee3\u7801\u62c6\u5206"),(0,l.kt)("p",null,"externals \u914d\u7f6e\u53bb\u6389\u4e0d\u9700\u8981\u7f16\u8bd1\u7684\uff0c\u53ef\u4ee5\u629b\u5f03 dll"),(0,l.kt)("p",null,"splitChunks \u516c\u2f64\u5e93\u7684\u4ee3\u7801\u62c6\u5206 \u53bb\u9664\u6253\u5305"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"splitChunks: {\n  chunks: 'async',\n  minSize: 30000,\n  minChunks: 1,\n  maxAsyncRequests: 5,\n  maxInitialRequests: 3,\n  name: false,\n  cacheGroups: {\n    commons: {\n      chunks: 'initial',\n      minChunks: 2,\n      maxInitialRequests: 5,\n      minSize: 0,\n      name: 'commons',\n    },\n  },\n}\n")),(0,l.kt)("p",null,"\u5206\u79bb\u2eda\u2faf\u516c\u2f64\u5305 ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/html-webpack-externals-plugin"},"html-webpack-externals-plugin")),(0,l.kt)("h2",{id:"polyfill"},"polyfill"),(0,l.kt)("p",null,"js\u811a\u672c\u76f4\u63a5\u5f15\u5165\uff0c\u4e0d\u7f16\u8bd1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://cdn.polyfill.io/v2/polyfill.min.js?feature=Map,Set"><\/script>\n')),(0,l.kt)("p",null,"\u4f7f\u2f64\u52a8\u6001 polyfill, \u5b83\u4f1a\u6839\u636e\u4f60\u7684\u6d4f\u89c8\u5668 UA \u5934\uff0c\u5224\u65ad\u4f60\u662f\u5426\u2f40\u6301\u67d0\u4e9b\u7279\u6027\uff0c\u4ece\u2f7d\u8fd4\u56de\u7ed9\u4f60\u2f00\u4e2a\u5408\u9002\u7684 polyfill"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<script type="module" src="main.js"><\/script>\n<script nomodule src="main.es5.js"><\/script>\n')),(0,l.kt)("h2",{id:"\u4f18\u79c0\u914d\u7f6e\u5e93\u641c\u96c6"},"\u4f18\u79c0\u914d\u7f6e\u5e93\u641c\u96c6"),(0,l.kt)("p",null,"\u6784\u5efa\u914d\u7f6e\u8bbe\u8ba1\u6210\u2f00\u4e2a\u5e93"),(0,l.kt)("p",null,"hjs-webpack\u3001Neutrino\u3001webpack-blocks"),(0,l.kt)("p",null,"\u62bd\u6210\u2f00\u4e2a\u2f2f\u5177\u8fdb\u2f8f\u7ba1\u7406"),(0,l.kt)("p",null,"create-react-app, kyt, nwb"),(0,l.kt)("p",null,"\u66f4\u591a\u7684\u5feb\u901f\u6784\u5efa\u2f2f\u5177"),(0,l.kt)("p",null,"lerna \u3001brunch\u3001 rome \u3001snowpack \uff08\u8fc7\u5f80Browserify\u3001Rollup.js\u3001Gulp\u3001Parcel\u3001Microbundle\uff09"))}k.isMDXComponent=!0}}]);