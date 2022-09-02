"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[6890],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(g,l(l({ref:t},s),{},{components:n})):a.createElement(g,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7578:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return u}});var a=n(3117),r=(n(7294),n(3905));const i={id:"withSpring",title:"withSpring",sidebar_label:"withSpring"},l=void 0,o={unversionedId:"api/withSpring",id:"version-2.1.x/api/withSpring",title:"withSpring",description:"Starts a spring-based animation.",source:"@site/versioned_docs/version-2.1.x/api/withSpring.md",sourceDirName:"api",slug:"/api/withSpring",permalink:"/react-native-reanimated/docs/2.1.x/api/withSpring",draft:!1,tags:[],version:"2.1.x",frontMatter:{id:"withSpring",title:"withSpring",sidebar_label:"withSpring"},sidebar:"version-2.1.x/docs",previous:{title:"withSequence",permalink:"/react-native-reanimated/docs/2.1.x/api/withSequence"},next:{title:"withTiming",permalink:"/react-native-reanimated/docs/2.1.x/api/withTiming"}},p={},u=[{value:"Arguments",id:"arguments",level:3},{value:"<code>toValue</code> number | string",id:"tovalue-number--string",level:4},{value:"<code>options</code> object",id:"options-object",level:4},{value:"<code>callback</code> function(optional)",id:"callback-functionoptional",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Starts a spring-based animation."),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"tovalue-number--string"},(0,r.kt)("inlineCode",{parentName:"h4"},"toValue")," ","[number | string]"),(0,r.kt)("p",null,"The target value at which the spring should settle.\nIt can be specified as a color value by providing string like: ",(0,r.kt)("inlineCode",{parentName:"p"},"rgba(255, 105, 180, 0)"),"."),(0,r.kt)("p",null,"Currently supported formats are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"rgb(r, g, b)"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"rgba(r, g, b, a)"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"hsl(h, s, l)"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"hsla(h, s, l, a)"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"#rgb"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"#rgba"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"#rrggbb"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"#rrggbbaa"'))),(0,r.kt)("h4",{id:"options-object"},(0,r.kt)("inlineCode",{parentName:"h4"},"options")," ","[object]"),(0,r.kt)("p",null,"Object carrying spring configuration.\nAllowed parameters are listed below:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Options"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"damping"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"How hard the animation decelerates.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mass"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"The weight of the spring. Reducing this value makes the animation faster.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stiffness"),(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"How bouncy the animation is.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"overshootClamping"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the animation can bounce over the specified value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"restDisplacementThreshold"),(0,r.kt)("td",{parentName:"tr",align:null},"0.01"),(0,r.kt)("td",{parentName:"tr",align:null},"The displacement below which the spring is considered to be at rest.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"restSpeedThreshold"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"The speed in pixels per second from which the spring is considered to be at rest.")))),(0,r.kt)("h4",{id:"callback-functionoptional"},(0,r.kt)("inlineCode",{parentName:"h4"},"callback")," ","[function]","(","optional",")"),(0,r.kt)("p",null,"The provided function will be called when the animation is complete.\nIn case the animation is cancelled, the callback will receive ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," as the argument, otherwise it will receive ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h3",{id:"returns"},"Returns"),(0,r.kt)("p",null,"This method returns an animation object. It can be either assigned directly to a Shared Value or can be used as a value for a style object returned from ",(0,r.kt)("a",{parentName:"p",href:"useAnimatedStyle"},(0,r.kt)("inlineCode",{parentName:"a"},"useAnimatedStyle")),"."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"{20}","{20}":!0},"import Animated, {\n  useSharedValue,\n  withSpring,\n  useAnimatedStyle,\n  useAnimatedGestureHandler,\n} from 'react-native-reanimated';\nimport { PanGestureHandler } from 'react-native-gesture-handler';\n\nfunction App() {\n  const x = useSharedValue(0);\n\n  const gestureHandler = useAnimatedGestureHandler({\n    onStart: (_, ctx) => {\n      ctx.startX = x.value;\n    },\n    onActive: (event, ctx) => {\n      x.value = ctx.startX + event.translationX;\n    },\n    onEnd: (_) => {\n      x.value = withSpring(0);\n    },\n  });\n\n  const animatedStyle = useAnimatedStyle(() => {\n    return {\n      transform: [\n        {\n          translateX: x.value,\n        },\n      ],\n    };\n  });\n\n  return (\n    <PanGestureHandler onGestureEvent={gestureHandler}>\n      <Animated.View style={[styles.box, animatedStyle]} />\n    </PanGestureHandler>\n  );\n}\n")))}c.isMDXComponent=!0}}]);