"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[7473],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=m(n),u=i,c=h["".concat(l,".").concat(u)]||h[u]||p[u]||o;return n?a.createElement(c,r(r({ref:t},d),{},{components:n})):a.createElement(c,r({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var m=2;m<o;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9918:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return r},default:function(){return p},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return m}});var a=n(3117),i=(n(7294),n(3905));const o={id:"animations",title:"Animations",sidebar_label:"Animations"},r=void 0,s={unversionedId:"fundamentals/animations",id:"version-2.5.x/fundamentals/animations",title:"Animations",description:"Animations are first-class citizens in Reanimated 2.",source:"@site/versioned_docs/version-2.5.x/fundamentals/animations.md",sourceDirName:"fundamentals",slug:"/fundamentals/animations",permalink:"/react-native-reanimated/docs/fundamentals/animations",draft:!1,tags:[],version:"2.5.x",frontMatter:{id:"animations",title:"Animations",sidebar_label:"Animations"},sidebar:"version-2.5.x/docs",previous:{title:"Shared Values",permalink:"/react-native-reanimated/docs/fundamentals/shared-values"},next:{title:"Events",permalink:"/react-native-reanimated/docs/fundamentals/events"}},l={},m=[{value:"Shared Value Animated Transitions",id:"shared-value-animated-transitions",level:2},{value:"Animations in <code>useAnimatedStyle</code> hook",id:"animations-in-useanimatedstyle-hook",level:2},{value:"Interrupting Animated Updates",id:"interrupting-animated-updates",level:2},{value:"Customizing Animations",id:"customizing-animations",level:2},{value:"Timing",id:"timing",level:3},{value:"Spring",id:"spring",level:3},{value:"Animation Modifiers",id:"animation-modifiers",level:2},{value:"Animating Layout Properties",id:"animating-layout-properties",level:2},{value:"Animating Non-Style Properties",id:"animating-non-style-properties",level:2}],d={toc:m};function p(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Animations are first-class citizens in Reanimated 2.\nThe library comes bundled with a number of animation helper methods that make it very easy to go from immediate property updates into animated ones."),(0,i.kt)("p",null,"In the previous article about ",(0,i.kt)("a",{parentName:"p",href:"shared-values"},"Shared Values")," we learned about the ",(0,i.kt)("inlineCode",{parentName:"p"},"useAnimatedStyle")," hook, that allows for creating an association between Reanimated code and view properties.\nWe also learned how to perform animated transitions of Shared Values.\nThis, however, is not the only way how animations can be started.\nOn top of that Reanimated provides a number of animation modifiers and ways for animations to be customized.\nIn this article we explore the methods that can be used to perform animated view updates."),(0,i.kt)("h2",{id:"shared-value-animated-transitions"},"Shared Value Animated Transitions"),(0,i.kt)("p",null,"One of the easiest ways of starting an animation in Reanimated 2, is by making an animated transition of a Shared Value.\nAnimated Shared Value updates require just a tiny change compared to immediate updates.\nLet us recall the example from the previous article, where we'd update a Shared Value with some random number on every button tap:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"{15}","{15}":!0},"import Animated, { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';\n\nfunction Box() {\n  const offset = useSharedValue(0);\n\n  const animatedStyles = useAnimatedStyle(() => {\n    return {\n      transform: [{ translateX: offset.value * 255 }],\n    };\n  });\n\n  return (\n    <>\n      <Animated.View style={[styles.box, animatedStyles]} />\n      <Button onPress={() => (offset.value = Math.random())} title=\"Move\" />\n    </>\n  );\n}\n")),(0,i.kt)("p",null,"In the above example we make immediate updates to the ",(0,i.kt)("inlineCode",{parentName:"p"},"offset")," Shared Value upon a button click.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"offset")," value is then mapped to a view translation using ",(0,i.kt)("inlineCode",{parentName:"p"},"useAnimatedStyle"),'.\nAs a result, when we tap on the "Move" button the animated box jumps to a new, random location as presented below:'),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(2472).Z,width:"640",height:"533"})),(0,i.kt)("p",null,"With Reanimated 2, such Shared Value updates can be transformed to animated updates by wrapping the target value using one of the animation helpers, e.g., ",(0,i.kt)("a",{parentName:"p",href:"../api/animations/withTiming"},(0,i.kt)("inlineCode",{parentName:"a"},"withTiming"))," or ",(0,i.kt)("a",{parentName:"p",href:"../api/animations/withSpring"},(0,i.kt)("inlineCode",{parentName:"a"},"withSpring")),".\nThe only change that we can do now, is to wrap the random offset value with a ",(0,i.kt)("inlineCode",{parentName:"p"},"withSpring")," call as shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"{3}","{3}":!0},'<Button\n  onPress={() => {\n    offset.value = withSpring(Math.random());\n  }}\n  title="Move"\n/>\n')),(0,i.kt)("p",null,"This way, instead of assigning a number to the Shared Value, we make an animation object which is then used to run updates on the Shared Value until it reaches the target.\nAs a result the ",(0,i.kt)("inlineCode",{parentName:"p"},"offset")," Shared Value transitions smoothly between the current and the newly assigned random number, which results in a nice spring-based animation in between those states:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5506).Z,width:"640",height:"533"})),(0,i.kt)("h2",{id:"animations-in-useanimatedstyle-hook"},"Animations in ",(0,i.kt)("inlineCode",{parentName:"h2"},"useAnimatedStyle")," hook"),(0,i.kt)("p",null,"Animated Shared Value transitions are not the only way to initiate and run animations.\nIt is often the case that we'd like to animate properties that are not directly mapped onto a Shared Value.\nFor that, in Reanimated we allow for animations to be specified directly in the ",(0,i.kt)("a",{parentName:"p",href:"../api/hooks/useAnimatedStyle"},(0,i.kt)("inlineCode",{parentName:"a"},"useAnimatedStyle"))," hook.\nIn order to do this you can use the same animation helper methods from Reanimated API, but instead of using it when updating a Shared Value you use it to wrap the style value property:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"{5}","{5}":!0},"const animatedStyles = useAnimatedStyle(() => {\n  return {\n    transform: [\n      {\n        translateX: withSpring(offset.value * 255),\n      },\n    ],\n  };\n});\n")),(0,i.kt)("p",null,"As you can see, the only change compared to the example from the previous section is that we wrapped the value provided to ",(0,i.kt)("inlineCode",{parentName:"p"},"translateX")," offset in a ",(0,i.kt)("inlineCode",{parentName:"p"},"withSpring")," call.\nThis tells the Reanimated engine that all updates made to ",(0,i.kt)("inlineCode",{parentName:"p"},"translateX")," offset should be animated using spring.\nWith this change added, we no longer need to animate the ",(0,i.kt)("inlineCode",{parentName:"p"},"offset"),' Shared Value updates, and can keep those updates being "immediate":'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'<Button onPress={() => (offset.value = Math.random())} title="Move" />\n')),(0,i.kt)("p",null,"As a result we will get the exact same behavior as when animating the ",(0,i.kt)("inlineCode",{parentName:"p"},"offset")," value update.\nHowever, in this case we move the control over how value updates need to be performed from the place where we make Shared Value amends to the place where we define the View styles.\nThis approach is more convenient in many cases, especially when view properties are derived from Shared Value as opposed to the Shared Value being directly mapped to given styles.\nAlso, keeping all the aspects of view styles and transitions colocated often makes it easier to keep control over your components' code.\nIt forces you to have everything defined in one place vs scattered around the codebase allowing for animated transitions being triggered from anywhere."),(0,i.kt)("h2",{id:"interrupting-animated-updates"},"Interrupting Animated Updates"),(0,i.kt)("p",null,"Animated UI updates, by definition, take time to perform.\nIt is often undesirable to freeze user interactions with the App and wait for transitions to finish.\nWhile allowing the user to interact with the screen while style properties are being animated, the framework needs to support a way for those animations to be interrupted or reconfigured as they go.\nThis is the case for the Reanimated animations API as well.\nWhenever you make animated updates of Shared Values, or you specify animations in the ",(0,i.kt)("inlineCode",{parentName:"p"},"useAnimatedStyle")," hook, those animations are fully interruptible.\nIn the former case, when you make an update to a Shared Value that is being animated, the framework won't wait for the previous animation to finish, but will immediately initiate a new transition starting from the current position of the previous animation.\nInterruptions also work correctly for animations defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"useAnimatedStyle")," hook.\nWhen the style is updated and the target value for a given property has changed compared to the last time when the style hook was run, the new animation will launch immediately starting from the current position of the property."),(0,i.kt)("p",null,"We believe that the described behavior, when it comes to interruptions, is desirable in the majority of the usecases, and hence we made it the default.\nIn case you'd like to wait with the next animation until the previous one is finished, or in the case you'd like to cancel currently running animation prior to starting a new one, you can still do it using animation callbacks in the former, or the ",(0,i.kt)("a",{parentName:"p",href:"../api/animations/cancelAnimation"},(0,i.kt)("inlineCode",{parentName:"a"},"cancelAnimation"))," method in the latter case."),(0,i.kt)("p",null,"To illustrate how interruptions perform in practice, please take a look at the below video, where we run the example presented earlier, but make much more frequent taps on the button in order to trigger value changes before the animation settles:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3477).Z,width:"640",height:"533"})),(0,i.kt)("h2",{id:"customizing-animations"},"Customizing Animations"),(0,i.kt)("p",null,"Reanimated currently provides three built-in animation helpers: ",(0,i.kt)("a",{parentName:"p",href:"../api/animations/withTiming"},(0,i.kt)("inlineCode",{parentName:"a"},"withTiming")),", ",(0,i.kt)("a",{parentName:"p",href:"../api/animations/withSpring"},(0,i.kt)("inlineCode",{parentName:"a"},"withSpring")),", and ",(0,i.kt)("a",{parentName:"p",href:"../api/animations/withDecay"},(0,i.kt)("inlineCode",{parentName:"a"},"withDecay")),".\nThere are ways of expanding that with your own custom animations (animation helpers are built on top of the ",(0,i.kt)("a",{parentName:"p",href:"worklets"},"worklets")," abstraction), but we are not yet ready to document that as we still plan some changes in that part of the API.\nHowever, the built-in methods along with the animation modifiers (that we discuss later on), already provide great flexibility.\nBelow we discuss some of the most common configuration options of the animation helpers, and we refer to the documentation page of ",(0,i.kt)("a",{parentName:"p",href:"../api/animations/withTiming"},(0,i.kt)("inlineCode",{parentName:"a"},"withTiming"))," and ",(0,i.kt)("a",{parentName:"p",href:"../api/animations/withSpring"},(0,i.kt)("inlineCode",{parentName:"a"},"withSpring"))," for the complete set of parameters."),(0,i.kt)("p",null,"Both animation helper methods share a similar structure.\nThey take target value as the first parameter, configuration object as the second, and finally a callback method as the last parameter.\nStarting from the end, the callback is a method that runs when the animation is finished, or when the animation is interrupted/cancelled.\nThr callback is run with a single argument \u2013 a boolean indicating whether the animation has finished executing without cancellation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'<Button\n  onPress={() => {\n    offset.value = withSpring(Math.random(), {}, (finished) => {\n      if (finished) {\n        console.log("ANIMATION ENDED");\n      } else {\n        console.log("ANIMATION GOT CANCELLED");\n      }\n    });\n  }}\n  title="Move"\n/>\n')),(0,i.kt)("h3",{id:"timing"},"Timing"),(0,i.kt)("p",null,"As it comes to the configuration options, those are different depending on the animation we run.\nFor timing-based animations, we can provide a duration and an easing method.\nThe easing parameter allows to control how fast the animation progresses along the specified time duration.\nYou may wish for the animation to accelerate fast and then slow down towards the end, or to start slowly, then accelerate and slow down again at the end.\nEasing can be described using ",(0,i.kt)("a",{parentName:"p",href:"https://javascript.info/bezier-curve"},"bezier curve")," thanks to ",(0,i.kt)("inlineCode",{parentName:"p"},"Easing.bezier")," method exported from the Reanimated package.\nBut in most of the cases it is enough to use ",(0,i.kt)("inlineCode",{parentName:"p"},"Easing.in"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Easing.out")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Easing.inOut")," to adjust the timing curve at the start, end or at the both ends respectively.\nThe default duration for the timing animation is 300ms, and the default easing is an in-out quadratic curve (",(0,i.kt)("inlineCode",{parentName:"p"},"Easing.inOut(Easing.quad)"),"):"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(630).Z,width:"405",height:"290"})),(0,i.kt)("p",null,"Here is how to start a timing animation with a custom configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"{4-5}","{4-5}":!0},"import { Easing, withTiming } from 'react-native-reanimated';\n\noffset.value = withTiming(0, {\n  duration: 500,\n  easing: Easing.out(Easing.exp),\n});\n")),(0,i.kt)("p",null,"You may want to visit ",(0,i.kt)("a",{parentName:"p",href:"https://easings.net/"},"easings.net")," and check various easing visualizations.\nTo learn how to apply these please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-reanimated/blob/main/src/reanimated2/Easing.ts"},"Easing.ts")," file where all the easing related helper methods are defined."),(0,i.kt)("h3",{id:"spring"},"Spring"),(0,i.kt)("p",null,"Unlike timing, spring-based animations do not take duration as a parameter.\nInstead the time it takes for the spring to run is determined by the spring physics (which is configurable), initial velocity, and the distance to travel.\nBelow we show an example of how a custom spring animation can be defined and how it compares to the default spring settings.\nPlease review ",(0,i.kt)("a",{parentName:"p",href:"../api/animations/withSpring"},(0,i.kt)("inlineCode",{parentName:"a"},"withSpring"))," documentation for the complete list of configurable options."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import Animated, {\n  withSpring,\n  useAnimatedStyle,\n  useSharedValue,\n} from 'react-native-reanimated';\n\nfunction Box() {\n  const offset = useSharedValue(0);\n\n  const defaultSpringStyles = useAnimatedStyle(() => {\n    return {\n      transform: [{ translateX: withSpring(offset.value * 255) }],\n    };\n  });\n\n  const customSpringStyles = useAnimatedStyle(() => {\n    return {\n      transform: [\n        {\n          translateX: withSpring(offset.value * 255, {\n            damping: 20,\n            stiffness: 90,\n          }),\n        },\n      ],\n    };\n  });\n\n  return (\n    <>\n      <Animated.View style={[styles.box, defaultSpringStyles]} />\n      <Animated.View style={[styles.box, customSpringStyles]} />\n      <Button onPress={() => (offset.value = Math.random())} title=\"Move\" />\n    </>\n  );\n}\n")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4656).Z,width:"640",height:"533"})),(0,i.kt)("p",null,"Unlike in the previous example, here we define the animation in the ",(0,i.kt)("inlineCode",{parentName:"p"},"useAnimatedStyle")," hook.\nThis makes it possible to use a single Shared Value but map that to two View's styles."),(0,i.kt)("h2",{id:"animation-modifiers"},"Animation Modifiers"),(0,i.kt)("p",null,"Besides the ability to adjust animation options, another way of customizing animations is by using animation modifiers.\nCurrently, Reanimated exposes three modifiers: ",(0,i.kt)("a",{parentName:"p",href:"../api/animations/withDelay"},(0,i.kt)("inlineCode",{parentName:"a"},"withDelay")),", ",(0,i.kt)("a",{parentName:"p",href:"../api/animations/withSequence"},(0,i.kt)("inlineCode",{parentName:"a"},"withSequence"))," and ",(0,i.kt)("a",{parentName:"p",href:"../api/animations/withRepeat"},(0,i.kt)("inlineCode",{parentName:"a"},"withRepeat")),".\nAs the name suggests, the ",(0,i.kt)("inlineCode",{parentName:"p"},"withDelay")," modifier makes the provided animation to start with a given delay, the ",(0,i.kt)("inlineCode",{parentName:"p"},"withSequence")," modifier allows a number of animations to be provided and will make them run one after another.\nFinally, the ",(0,i.kt)("inlineCode",{parentName:"p"},"withRepeat")," modifier allows for the provided animation to be repeated several times."),(0,i.kt)("p",null,"Modifiers typically take one or more animation objects with optional configuration as an input, and return an object that represents the modified animation.\nThis makes it possible to wrap existing animation helpers (or custom helpers), or make a chain of modifiers when necessary.\nPlease refer to the documentation of each of the modifier methods to learn about the ways how they can be parameterized."),(0,i.kt)("p",null,"Let us now exercise the use of modifiers in practice and build an animation that causes a rectangular view to wobble upon a button click.\nWe start by rendering the actual view and defining the rotation Shared Value that we then use to run the animation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import Animated, { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';\n\nfunction WobbleExample(props) {\n  const rotation = useSharedValue(0);\n\n  const animatedStyle = useAnimatedStyle(() => {\n    return {\n      transform: [{ rotateZ: `${rotation.value}deg` }],\n    };\n  });\n\n  return (\n    <>\n      <Animated.View style={[styles.box, animatedStyle]} />\n      <Button\n        title=\"wobble\"\n        onPress={() => {\n          // will be filled in later\n        }}\n      />\n    </>\n  );\n}\n")),(0,i.kt)("p",null,"In the above example we make a Shared Value that will represent the rotation of the view.\nThen, in ",(0,i.kt)("inlineCode",{parentName:"p"},"useAnimatedStyle"),' we map that variable to the rotation attribute by adding a "deg" suffix to indicate the angle is expressed in degrees.\nLet us see how we can now make the rotation animate back and forth using modifiers, here is what we can put in the button\'s ',(0,i.kt)("inlineCode",{parentName:"p"},"onPress")," handler:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"rotation.value = withRepeat(withTiming(10), 6, true)\n")),(0,i.kt)("p",null,"The above code will cause the view to run six repetitions of timing animation between the initial state of the ",(0,i.kt)("inlineCode",{parentName:"p"},"rotation")," value (that is ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),") and value ",(0,i.kt)("inlineCode",{parentName:"p"},"10"),".\nThe third parameter passed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"withRepeat")," method makes the animation run in reverse every other repetition.\nSetting the reverse flag to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," will result in the rotation doing three full loops (from ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"10"),' and back).\nAt the end of all six repetitions the rotation will go back to zero.\nHere is what will happen when we click on the "wobble" button:'),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9241).Z,width:"640",height:"533"})),(0,i.kt)("p",null,"The above code makes the rotation only go between ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"10")," degrees.\nIn order for the view to also swing to the left, we could start from ",(0,i.kt)("inlineCode",{parentName:"p"},"-10")," and go to ",(0,i.kt)("inlineCode",{parentName:"p"},"10")," degrees.\nBut we can't just change the initial value to ",(0,i.kt)("inlineCode",{parentName:"p"},"-10"),", because in such a case the rectangle will be skewed from the beginning.\nOne way to solve this is to use a ",(0,i.kt)("inlineCode",{parentName:"p"},"withSequence")," modifier and starting from ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),", do the first animation to ",(0,i.kt)("inlineCode",{parentName:"p"},"-10"),", then swing the view from ",(0,i.kt)("inlineCode",{parentName:"p"},"-10")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"10")," several times, and finally go from ",(0,i.kt)("inlineCode",{parentName:"p"},"-10")," back to ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),".\nHere is how the ",(0,i.kt)("inlineCode",{parentName:"p"},"onPress")," handler will look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"rotation.value = withSequence(\n  withTiming(-10, { duration: 50 }),\n  withRepeat(withTiming(ANGLE, { duration: 100 }), 6, true),\n  withTiming(0, { duration: 50 })\n);\n")),(0,i.kt)("p",null,"In the above code we put three animations in a sequence.\nFirst, we start a timing to the minimum swing position (",(0,i.kt)("inlineCode",{parentName:"p"},"-10")," degrees), after that we start a loop that goes between ",(0,i.kt)("inlineCode",{parentName:"p"},"-10")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"10")," degrees six times (same as in the previous implementation).\nFinally, we add a finishing timing animation that makes the rotation go back to zero.\nFor the surrounding timing animation we pass a duration that is half of the duration we use for the looped animation.\nIt is because those animations make half the distance, thus this way we maintain similar velocities for the initial, middle and finishing swings.\nBelow we present the end result:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4273).Z,width:"640",height:"533"})),(0,i.kt)("h2",{id:"animating-layout-properties"},"Animating Layout Properties"),(0,i.kt)("p",null,"Reanimated makes it possible for animations to be executed by completely avoiding React Native's main JavaScript thread.\nThanks to the animation runner being completely isolated, the application logic (rendering components, fetching and processing data, etc) do not impact the performance of animations and allow to avoid many unpredictable frame drops.\nDevelopers who are familiar with React Native's ",(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/animated"},"Animated API")," and the concept of ",(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/blog/2017/02/14/using-native-driver-for-animated"},"Native Driver")," may already understand this benefit, and also know that the use of Native Driver is limited to some subset of view properties.\nThis, however, is not the case in Reanimated which supports animations of ",(0,i.kt)("strong",{parentName:"p"},"all")," native properties without generating any load on the main JavaScript thread (including layout properties like ",(0,i.kt)("inlineCode",{parentName:"p"},"width"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"flex"),", etc.).\nThis, in fact, was already the case since the first version of Reanimated but we'd like to emphasize that again as we receive questions around this topic from time to time."),(0,i.kt)("p",null,"When discussing animated updates of layout properties, however, it is important to note that even though we avoid calling into the main JavaScript thread, some of the layout updates can be really expensive and cause significant delays despite being run on the native threads.\nAn example where the layout property update can be expensive is a change of ",(0,i.kt)("inlineCode",{parentName:"p"},"flex-direction")," on a container with many items.\nSuch a change will cause each of the items to reposition and also change their dimensions.\nThe change of the dimensions for each of the views may trigger further layout recalculations of the nested views down to the leaf nodes.\nAs you can see, a single property change can trigger a lot of recomputation.\nIt may perform just fine when we need to fire it once, but if we decided to run such computation during animation for every frame, the outcome may not be satisfactory especially on low-end devices.\nAs we work to improve performance of complex layout updates in Reanimated 2, when you experience  issues that are the effects of heavy layout computation on every frame, we recommend that you try Reanimated's ",(0,i.kt)("a",{parentName:"p",href:"/react-native-reanimated/docs/1.x.x/transitions"},"Transition API")," or React Native's ",(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/layoutanimation"},"LayoutAnimation API"),"."),(0,i.kt)("h2",{id:"animating-non-style-properties"},"Animating Non-Style Properties"),(0,i.kt)("p",null,"View styles are definitely the most frequently animated properties out there.\nHowever, in some usecases it is important to also animate properties that do not belong to styles.\nThis is especially important if we have native components that expose native properties that we want to animate.\nIn such a case we want to avoid roundtrips to the main JavaScript thread in order to update such properties while animating.\nThankfully, Reanimated allows for that, but as the properties do not belong to styles we can't just use the ",(0,i.kt)("inlineCode",{parentName:"p"},"useAnimatedStyle")," hook.\nFor this purpose Reanimated exposes a separate hook called ",(0,i.kt)("inlineCode",{parentName:"p"},"useAnimatedProps"),".\nIt works in a very similar way to ",(0,i.kt)("inlineCode",{parentName:"p"},"useAnimatedStyle")," but instead of expecting a method that returns the animated styles, we expect the returned object to contain properties that we want to animate.\nThen, in order to hook animated props to a view, we provide the resulting object as ",(0,i.kt)("inlineCode",{parentName:"p"},"animatedProps"),' property to the "Animated" version of the view type we want to render (e.g. ',(0,i.kt)("inlineCode",{parentName:"p"},"Animated.View"),").\nPlease check the documentation of the ",(0,i.kt)("a",{parentName:"p",href:"../api/hooks/useAnimatedProps"},(0,i.kt)("inlineCode",{parentName:"a"},"useAnimatedProps"))," hook for usage examples."))}p.isMDXComponent=!0},630:function(e,t,n){t.Z=n.p+"assets/images/easeInOutQuad-9b64cfd158bcecb3f04abb09e22fb051.png"},9241:function(e,t,n){t.Z=n.p+"assets/images/swing-c96a79837f84ca2b7510e64367653c43.gif"},4656:function(e,t,n){t.Z=n.p+"assets/images/twosprings-4d81dda6c4ee2124a9b801679cc78f1b.gif"},4273:function(e,t,n){t.Z=n.p+"assets/images/wobble-6ca91e5708c8023e5d278551b82bd66c.gif"},2472:function(e,t,n){t.Z=n.p+"assets/images/sv-immediate-163a607a1256501020dc30d515d78647.gif"},3477:function(e,t,n){t.Z=n.p+"assets/images/sv-interruption-74d74b266b4840a5f3ebc4cb7779c90f.gif"},5506:function(e,t,n){t.Z=n.p+"assets/images/sv-spring-8af0692299a5863f1b8cef55e187431e.gif"}}]);