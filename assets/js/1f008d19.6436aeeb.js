"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[9964],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return t?a.createElement(f,o(o({ref:n},s),{},{components:t})):a.createElement(f,o({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},681:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var a=t(3117),r=(t(7294),t(3905));const i={id:"cancelAnimation",title:"cancelAnimation",sidebar_label:"cancelAnimation"},o=void 0,c={unversionedId:"api/animations/cancelAnimation",id:"version-2.3.x/api/animations/cancelAnimation",title:"cancelAnimation",description:"Cancels animation linked to given shared value.",source:"@site/versioned_docs/version-2.3.x/api/animations/cancelAnimation.md",sourceDirName:"api/animations",slug:"/api/animations/cancelAnimation",permalink:"/react-native-reanimated/docs/2.3.x/api/animations/cancelAnimation",draft:!1,tags:[],version:"2.3.x",frontMatter:{id:"cancelAnimation",title:"cancelAnimation",sidebar_label:"cancelAnimation"},sidebar:"version-2.3.x/docs",previous:{title:"Troubleshooting",permalink:"/react-native-reanimated/docs/2.3.x/fundamentals/troubleshooting"},next:{title:"withDecay",permalink:"/react-native-reanimated/docs/2.3.x/api/animations/withDecay"}},l={},u=[{value:"Arguments",id:"arguments",level:3},{value:"<code>sharedValue</code> SharedValueRef",id:"sharedvalue-sharedvalueref",level:4},{value:"Example",id:"example",level:2}],s={toc:u};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Cancels animation linked to given shared value."),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"sharedvalue-sharedvalueref"},(0,r.kt)("inlineCode",{parentName:"h4"},"sharedValue")," ","[SharedValueRef]"),(0,r.kt)("p",null,"The value for which we want the previously started animation to be cancelled.\nIf there was no animation started on that value, or the animation completed, no error will be thrown."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"{5}","{5}":!0},"const someValue = useSharedValue(0);\n\nconst gestureHandler = useAnimatedGestureHandler({\n  onStart: (_, ctx) => {\n    cancelAnimation(someValue);\n  },\n});\n")))}m.isMDXComponent=!0}}]);