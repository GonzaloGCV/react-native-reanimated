"use strict";(self.webpackChunkreact_native_reanimated=self.webpackChunkreact_native_reanimated||[]).push([[3709],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||a;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},627:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return c}});var r=n(3117),o=(n(7294),n(3905));const a={id:"useScrollViewOffset",title:"useScrollViewOffset",sidebar_label:"useScrollViewOffset"},l=void 0,i={unversionedId:"api/hooks/useScrollViewOffset",id:"api/hooks/useScrollViewOffset",title:"useScrollViewOffset",description:"This hook allows you to create animations based on the offset of a ScrollView.",source:"@site/docs/api/hooks/useScrollViewOffset.md",sourceDirName:"api/hooks",slug:"/api/hooks/useScrollViewOffset",permalink:"/react-native-reanimated/docs/next/api/hooks/useScrollViewOffset",draft:!1,tags:[],version:"current",frontMatter:{id:"useScrollViewOffset",title:"useScrollViewOffset",sidebar_label:"useScrollViewOffset"},sidebar:"docs",previous:{title:"useHandler",permalink:"/react-native-reanimated/docs/next/api/hooks/useHandler"},next:{title:"useSharedValue",permalink:"/react-native-reanimated/docs/next/api/hooks/useSharedValue"}},s={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>aref</code> RefObject<Animated.ScrollView>",id:"aref-refobjectanimatedscrollview",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2}],u={toc:c};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This hook allows you to create animations based on the offset of a ",(0,o.kt)("inlineCode",{parentName:"p"},"ScrollView"),".\nThe hook automatically detects if the ",(0,o.kt)("inlineCode",{parentName:"p"},"ScrollView")," is horizontal or vertical."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"useScrollViewOffset(aref: RefObject<Animated.ScrollView>) => [SharedValue<number>]\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"aref-refobjectanimatedscrollview"},(0,o.kt)("inlineCode",{parentName:"h4"},"aref")," ","[RefObject","<","Animated.ScrollView",">]"),(0,o.kt)("p",null,"An Animated reference to a ",(0,o.kt)("inlineCode",{parentName:"p"},"ScrollView"),". The reference should be passed to the\nappropriate ",(0,o.kt)("inlineCode",{parentName:"p"},"ScrollView")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"ref")," prop."),(0,o.kt)("h3",{id:"returns"},"Returns"),(0,o.kt)("p",null,"A Shared Value which holds the current offset of the ",(0,o.kt)("inlineCode",{parentName:"p"},"ScrollView"),"."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function ScrollViewOffsetExample() {\n  const aref = useAnimatedRef<Animated.ScrollView>();\n  const scrollHandler = useScrollViewOffset(aref);\n\n  useAnimatedStyle(() => {\n    console.log(scrollHandler.value);\n    return {};\n  });\n\n  return (\n    <>\n      <View style={styles.positionView}>\n        <Text>Test</Text>\n      </View>\n      <View style={styles.divider} />\n      <Animated.ScrollView\n        ref={aref}\n        scrollEventThrottle={16}\n        style={styles.scrollView}>\n        {[...Array(100)].map((_, i) => (\n          <Text key={i} style={styles.text}>\n            {i}\n          </Text>\n        ))}\n      </Animated.ScrollView>\n    </>\n  );\n}\n")))}f.isMDXComponent=!0}}]);