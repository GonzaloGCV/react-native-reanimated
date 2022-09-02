"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[2324],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(f,o(o({ref:n},s),{},{components:t})):r.createElement(f,o({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3458:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=t(3117),a=(t(7294),t(3905));const i={id:"cancelAnimation",title:"cancelAnimation",sidebar_label:"cancelAnimation"},o=void 0,c={unversionedId:"api/cancelAnimation",id:"version-2.1.x/api/cancelAnimation",title:"cancelAnimation",description:"Cancels animation linked to given shared value.",source:"@site/versioned_docs/version-2.1.x/api/cancelAnimation.md",sourceDirName:"api",slug:"/api/cancelAnimation",permalink:"/react-native-reanimated/docs/2.1.x/api/cancelAnimation",draft:!1,tags:[],version:"2.1.x",frontMatter:{id:"cancelAnimation",title:"cancelAnimation",sidebar_label:"cancelAnimation"},sidebar:"version-2.1.x/docs",previous:{title:"Troubleshooting",permalink:"/react-native-reanimated/docs/2.1.x/troubleshooting"},next:{title:"withDecay",permalink:"/react-native-reanimated/docs/2.1.x/api/withDecay"}},l={},u=[{value:"Arguments",id:"arguments",level:3},{value:"<code>sharedValue</code> SharedValueRef",id:"sharedvalue-sharedvalueref",level:4},{value:"Example",id:"example",level:2}],s={toc:u};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Cancels animation linked to given shared value."),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"sharedvalue-sharedvalueref"},(0,a.kt)("inlineCode",{parentName:"h4"},"sharedValue")," ","[SharedValueRef]"),(0,a.kt)("p",null,"The value for which we want the previously started animation to be cancelled.\nIf there was no animation started on that value, or the animation completed, no error will be thrown."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"{5}","{5}":!0},"const someValue = useSharedValue(0);\n\nconst gestureHandler = useAnimatedGestureHandler({\n  onStart: (_, ctx) => {\n    cancelAnimation(someValue);\n  },\n});\n")))}p.isMDXComponent=!0}}]);