"use strict";(self.webpackChunkhondrytravis_blog=self.webpackChunkhondrytravis_blog||[]).push([[9574],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(r),f=a,m=s["".concat(i,".").concat(f)]||s[f]||p[f]||o;return r?n.createElement(m,u(u({ref:t},d),{},{components:r})):n.createElement(m,u({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=s;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var c=2;c<o;c++)u[c]=r[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},4286:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return d},default:function(){return s}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),u=["components"],l={title:"Redux | \u5b9e\u73b0\u539f\u7406"},i=void 0,c={unversionedId:"framework/redux/redux_start",id:"framework/redux/redux_start",isDocsHomePage:!1,title:"Redux | \u5b9e\u73b0\u539f\u7406",description:"Redux \u4ecb\u7ecd",source:"@site/packages/docs/framework/redux/redux_start.md",sourceDirName:"framework/redux",slug:"/framework/redux/redux_start",permalink:"/docs/framework/redux/redux_start",editUrl:"https://github.com/HondryTravis/Blog/tree/master/packages/docs/framework/redux/redux_start.md",tags:[],version:"current",lastUpdatedBy:"travis",lastUpdatedAt:1670325249,formattedLastUpdatedAt:"2022/12/6",frontMatter:{title:"Redux | \u5b9e\u73b0\u539f\u7406"},sidebar:"docs",previous:{title:"Vue2 | \u6e90\u7801\u89e3\u6790",permalink:"/docs/framework/vue/vue_1"},next:{title:"\u8fdb\u7a0b | \u7ebf\u7a0b",permalink:"/docs/os/thread"}},d=[{value:"Redux \u4ecb\u7ecd",id:"redux-\u4ecb\u7ecd",children:[{value:"\u5de5\u4f5c\u6d41",id:"\u5de5\u4f5c\u6d41",children:[],level:3}],level:2},{value:"Redux \u524d\u8eab",id:"redux-\u524d\u8eab",children:[],level:2},{value:"\u524d\u7f6e\u50a8\u5907\u77e5\u8bc6",id:"\u524d\u7f6e\u50a8\u5907\u77e5\u8bc6",children:[],level:2},{value:"\u601d\u8def\u5206\u6790",id:"\u601d\u8def\u5206\u6790",children:[],level:2},{value:"\u5177\u4f53\u5b9e\u73b0\u6d41\u7a0b",id:"\u5177\u4f53\u5b9e\u73b0\u6d41\u7a0b",children:[],level:2}],p={toc:d};function s(e){var t=e.components,l=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"redux-\u4ecb\u7ecd"},"Redux \u4ecb\u7ecd"),(0,o.kt)("p",null,"Redux\u662f\u4e00\u4e2a\u7528\u6765\u7ba1\u7406\u7ba1\u7406\u6570\u636e\u72b6\u6001\u548cUI\u72b6\u6001\u7684JavaScript\u5e94\u7528\u5de5\u5177\u3002\u968f\u7740JavaScript\u5355\u9875\u5e94\u7528\uff08SPA\uff09\u5f00\u53d1\u65e5\u8d8b\u590d\u6742\uff0cJavaScript\u9700\u8981\u7ba1\u7406\u6bd4\u4efb\u4f55\u65f6\u5019\u90fd\u8981\u591a\u7684state\uff08\u72b6\u6001\uff09\uff0cRedux\u5c31\u662f\u7528\u6765\u964d\u4f4e\u7ba1\u7406\u96be\u5ea6\u7684\u3002\uff08Redux\u652f\u6301React\uff0cVue\u3001Angular\u3001jQuery\u751a\u81f3\u7eafJavaScript\uff09"),(0,o.kt)("h3",{id:"\u5de5\u4f5c\u6d41"},"\u5de5\u4f5c\u6d41"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"redux \u5de5\u4f5c\u6d41",src:r(7811).Z})),(0,o.kt)("p",null,"\u4e3e\u4e2a\ud83c\udf30"),(0,o.kt)("p",null,"\u501f\u4e66\u8005(Components)\u8981\u53bb\u501f\u4e66\u3002\u90a3\u8981\u5148\u53bb\u627e\u7ba1\u7406\u5458(ActionCreator)\u501f\u4e66\uff0c\u7ba1\u7406\u5458\u5148\u53bb\u56fe\u4e66\u9986\u67dc\u53f0\u673a\u4e0a(Store) \u7528\u56fe\u4e66\u7ba1\u7406\u8f6f\u4ef6(Reducers)\u627e,\u627e\u5230\u4e86\u5c31\u7ed9\u8fd9\u4e2a\u501f\u9605\u8005(Components)\u544a\u8bc9\u6b63\u786e\u7684\u4f4d\u7f6e\uff0c\u548c\u56fe\u4e66\u7684\u4fe1\u606f\uff0c\u6ca1\u627e\u5230\u6216\u8005\u5df2\u7ecf\u501f\u9605\u51fa\u53bb\u4e86\uff0c\u7ed9\u53cd\u9988\u4fe1\u606f\uff0c\u8fd8\u4e66\u4e5f\u662f\u4e00\u6837"),(0,o.kt)("h2",{id:"redux-\u524d\u8eab"},"Redux \u524d\u8eab"),(0,o.kt)("p",null,"Redux \u5c31\u662f Flux \u7684\u5347\u7ea7\u7248\u672c\uff0c\u65e9\u671f\u4f7f\u7528 React \u90fd\u8981\u914d\u5408 Flux \u8fdb\u884c\u72b6\u6001\u7ba1\u7406\uff0c\u4f46\u662f\u5728\u4f7f\u7528\u4e2d\uff0cFlux \u663e\u9732\u4e86\u5f88\u591a\u5f0a\u7aef\uff0c\u6bd4\u5982\u591a\u72b6\u6001\u7ba1\u7406\u7684\u590d\u6742\u548c\u6613\u9519\u3002\u6240\u4ee5 Redux \u5c31\u8bde\u751f\u4e86\uff0c\u8fd8\u5438\u53d6\u4e86\u90e8\u5206\u7cbe\u534e\uff0c\u73b0\u5728\u5df2\u7ecf\u5b8c\u5168\u53d6\u4ee3\u4e86 Flux\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u60f3\u4e86\u89e3\u67e5\u770b ",(0,o.kt)("a",{parentName:"p",href:"http://facebook.github.io/flux/"},"flux")),(0,o.kt)("h2",{id:"\u524d\u7f6e\u50a8\u5907\u77e5\u8bc6"},"\u524d\u7f6e\u50a8\u5907\u77e5\u8bc6"),(0,o.kt)("p",null,"\u9700\u8981\u5bf9",(0,o.kt)("a",{parentName:"p",href:"/docs/thinking/functional_programming"},"\u51fd\u6570\u5f0f\u7f16\u7a0b"),"\u6709\u4e00\u5b9a\u7684\u4e86\u89e3"),(0,o.kt)("h2",{id:"\u601d\u8def\u5206\u6790"},"\u601d\u8def\u5206\u6790"),(0,o.kt)("p",null,"\u5bf9\u5e94\u51fd\u6570\u5f0f\u7f16\u7a0b\u4e2d"),(0,o.kt)("p",null,"1.store -> container(IOC \u5bb9\u5668\u4ed3\u5e93)"),(0,o.kt)("p",null,"2.currentState -> _value"),(0,o.kt)("p",null,"3.action -> f \u53d8\u5f62\u5173\u7cfb"),(0,o.kt)("p",null,"4.reducer -> map"),(0,o.kt)("p",null,"5.middleware -> IO functor (\u89e3\u51b3\u5f02\u6b65\u548c\u810f\u64cd\u4f5c)"),(0,o.kt)("h2",{id:"\u5177\u4f53\u5b9e\u73b0\u6d41\u7a0b"},"\u5177\u4f53\u5b9e\u73b0\u6d41\u7a0b"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/HondryTravis/Blog-example/tree/master/packages/redux"},"Blog-example redux")))}s.isMDXComponent=!0},7811:function(e,t,r){t.Z=r.p+"assets/images/redux_flow-3a2492f727780dae15fb9ce3a8a29b91.png"}}]);