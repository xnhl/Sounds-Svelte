var app=function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,n){return!n||"object"!==i(n)&&"function"!=typeof n?t(e):n}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}function r(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}function g(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||r(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],s=!0,i=!1,l=void 0;try{for(var o,a=e[Symbol.iterator]();!(s=(o=a.next()).done)&&(n.push(o.value),!t||n.length!==t);s=!0);}catch(e){i=!0,l=e}finally{try{s||null==a.return||a.return()}finally{if(i)throw l}}return n}}(e,t)||r(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function m(){}function d(e){return e()}function p(){return Object.create(null)}function h(e){e.forEach(d)}function f(e){return"function"==typeof e}function v(e,t){return e!=e?t==t:e!==t||e&&"object"===i(e)||"function"==typeof e}function _(e,t){e.appendChild(t)}function b(e,t,n){e.insertBefore(t,n||null)}function w(e){e.parentNode.removeChild(e)}function y(e,t){for(var n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function k(e){return document.createElement(e)}function $(e){return document.createTextNode(e)}function q(){return $(" ")}function z(e,t,n,s){return e.addEventListener(t,n,s),function(){return e.removeEventListener(t,n,s)}}function S(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function x(e){return Array.from(e.childNodes)}function C(e,t){e.value=null==t?"":t}function R(e,t,n){e.classList[n?"add":"remove"](t)}var A;function O(e){A=e}var B=[],E=[],j=[],T=[],L=Promise.resolve(),I=!1;function P(e){j.push(e)}var W=!1,N=new Set;function D(){if(!W){W=!0;do{for(var e=0;e<B.length;e+=1){var t=B[e];O(t),F(t.$$)}for(B.length=0;E.length;)E.pop()();for(var n=0;n<j.length;n+=1){var s=j[n];N.has(s)||(N.add(s),s())}j.length=0}while(B.length);for(;T.length;)T.pop()();I=!1,W=!1,N.clear()}}function F(e){if(null!==e.fragment){e.update(),h(e.before_update);var t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(P)}}var M,H=new Set;function U(){M={r:0,c:[],p:M}}function J(){M.r||h(M.c),M=M.p}function K(e,t){e&&e.i&&(H.delete(e),e.i(t))}function G(e,t,n,s){if(e&&e.o){if(H.has(e))return;H.add(e),M.c.push((function(){H.delete(e),s&&(n&&e.d(1),s())})),e.o(t)}}var Q="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function V(e,t,n){var s=e.$$,i=s.fragment,l=s.on_mount,o=s.on_destroy,a=s.after_update;i&&i.m(t,n),P((function(){var t=l.map(d).filter(f);o?o.push.apply(o,g(t)):h(t),e.$$.on_mount=[]})),a.forEach(P)}function X(e,t){var n=e.$$;null!==n.fragment&&(h(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Y(e,t){-1===e.$$.dirty[0]&&(B.push(e),I||(I=!0,L.then(D)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Z(e,t,n,s,i,l){var o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],a=A;O(e);var r=t.props||{},g=e.$$={fragment:null,ctx:null,props:l,update:m,not_equal:i,bound:p(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:p(),dirty:o,skip_bound:!1},u=!1;if(g.ctx=n?n(e,r,(function(t,n){var s=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:n;return g.ctx&&i(g.ctx[t],g.ctx[t]=s)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](s),u&&Y(e,t)),n})):[],g.update(),u=!0,h(g.before_update),g.fragment=!!s&&s(g.ctx),t.target){if(t.hydrate){var c=x(t.target);g.fragment&&g.fragment.l(c),c.forEach(w)}else g.fragment&&g.fragment.c();t.intro&&K(e.$$.fragment),V(e,t.target,t.anchor),D()}O(a)}var ee=function(){function t(){e(this,t)}var n,s,i;return n=t,(s=[{key:"$destroy",value:function(){X(this,1),this.$destroy=m}},{key:"$on",value:function(e,t){var n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),function(){var e=n.indexOf(t);-1!==e&&n.splice(e,1)}}},{key:"$set",value:function(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}])&&c(n.prototype,s),i&&c(n,i),t}();function te(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,s=o(e);if(t){var i=o(this).constructor;n=Reflect.construct(s,arguments,i)}else n=s.apply(this,arguments);return l(this,n)}}function ne(e){var t,n,s,i,l,o,a,r,g,c,d,p,f,v,y,x=e[0].title+"";return{c:function(){t=k("div"),n=k("div"),s=k("img"),l=q(),o=k("p"),a=$(x),r=q(),g=k("audio"),c=q(),d=k("div"),p=k("input"),S(s,"class","sound-image svelte-19lvvp0"),s.src!==(i=e[3].src)&&S(s,"src",i),S(s,"alt",""),R(s,"inverted",e[3].invert),S(n,"class","sound-image-wrapper svelte-19lvvp0"),S(o,"class","sound-title svelte-19lvvp0"),S(g,"class","sound-audio hide"),g.src!==""&&S(g,"src",""),g.controls=!0,S(p,"class","sound-volume svelte-19lvvp0"),p.disabled="true",S(p,"type","range"),S(p,"name","volume"),S(p,"min","0"),S(p,"max","10"),S(p,"step","1"),S(d,"class","sound-volume-wrapper svelte-19lvvp0"),S(t,"class","sound svelte-19lvvp0"),S(t,"id",f="sound-".concat(e[1]))},m:function(i,u){b(i,t,u),_(t,n),_(n,s),_(t,l),_(t,o),_(o,a),_(t,r),_(t,g),_(t,c),_(t,d),_(d,p),C(p,e[2]),v||(y=[z(p,"change",e[4]),z(p,"change",e[6]),z(p,"input",e[6]),z(t,"click",e[5])],v=!0)},p:function(e,n){var i=u(n,1)[0];8&i&&R(s,"inverted",e[3].invert),1&i&&x!==(x=e[0].title+"")&&function(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}(a,x),4&i&&C(p,e[2]),2&i&&f!==(f="sound-".concat(e[1]))&&S(t,"id",f)},i:m,o:m,d:function(e){e&&w(t),v=!1,h(y)}}}function se(e,t,n){var s=t.info,i=t.index,l=10,o=!1,a={src:null!==s.image_local?s.image_local:s.image_test,invert:"dark"!=s.image_lightness};return e.$$set=function(e){"info"in e&&n(0,s=e.info),"index"in e&&n(1,i=e.index)},[s,i,l,a,function(){document.getElementById("sound-".concat(i)).getElementsByTagName("audio")[0].volume=parseFloat(l/10)},function(e){var t=document.getElementById("sound-".concat(i)).getElementsByTagName("audio")[0],n=document.getElementById("sound-".concat(i)).getElementsByClassName("sound-volume")[0];e.target.classList.contains("sound-volume")||e.target.classList.contains("sound-volume-wrapper")||(o?o&&(n.disabled=!0,t.pause()):(!t.src.indexOf(".mp3")>-1&&!t.src.indexOf(".mp4")>-1&&(t.src=s.source),n.disabled=!1,t.play()),o=!o)},function(){var e;e=this.value,n(2,l=""===e?void 0:+e)}]}var ie=function(n){s(l,n);var i=te(l);function l(n){var s;return e(this,l),Z(t(s=i.call(this)),n,se,ne,v,{info:0,index:1}),s}return l}(ee),le=[{title:"rainbowhunt",set_number:"1",sounds:[{title:"Light Rain",long_title:"Light rain",local:"/sounds/rainbest160.mp3",image_test:"/img/sound.svg",image_local:"/img/rain_2.png",image_lightness:"light",image:"https://rainbowhunt.com/img/rain.png",source:"https://e8b8e3q2.ssl.hwcdn.net/sounds/rain/rainbest160.mp3"},{title:"Window Raindrops",long_title:"Raindrops hitting a window",local:"/sounds/raindrops160.mp3",image_test:"/img/sound.svg",image_local:"/img/window.png",image_lightness:"light",image:"https://rainbowhunt.com/img/window.png",source:"https://e8b8e3q2.ssl.hwcdn.net/sounds/rain/raindrops160.mp3"},{title:"Heavy Rain",long_title:"Rainstorm",local:"/sounds/rain-constant160.mp3",image_test:"/img/sound.svg",image_local:"/img/rain_heavy.png",image_lightness:"light",image:"https://rainbowhunt.com/img/rain_heavy.png",source:"https://e8b8e3q2.ssl.hwcdn.net/sounds/rain/rain-constant160.mp3"},{title:"Splashing Rainfall",long_title:"Splashing rainfall",local:"/sounds/splashing-rainfall160.mp3",image_test:"/img/sound.svg",image_local:"/img/splash.png",image_lightness:"light",image:"https://rainbowhunt.com/img/splash.png",source:"https://e8b8e3q2.ssl.hwcdn.net/sounds/rain/splashing-rainfall160.mp3"},{title:"Thunder",long_title:"Thunder",local:"/sounds/thunder160.mp3",image_test:"/img/sound.svg",image_local:"/img/thunderstorm.png",image_lightness:"light",image:"https://rainbowhunt.com/img/thunderstorm.png",source:"https://e8b8e3q2.ssl.hwcdn.net/sounds/rain/thunder160.mp3"}]},{title:"asmrion",set_number:"2",sounds:[{title:"Aspen Tree",long_title:"Leaves rustling in the wind",local:"/sounds/aspen-tree160.mp3",image_test:"/img/sound.svg",image_local:"/img/leaf.png",image_lightness:"light",image:"https://asmrion.com/images/ronds/leaf.png",source:"https://e8b8e3q2.ssl.hwcdn.net/sounds/hipster/aspen-tree160.mp3"},{title:"Forest After Rain",long_title:"Forest at dawn after the rain",local:"/sounds/forest-at-dawn.mp3",image_test:"/img/sound.svg",image_local:"/img/forest.png",image_lightness:"light",image:"https://asmrion.com/images/ronds/forest.png",source:"https://e8b8e3q2.ssl.hwcdn.net/sounds/forest-at-dawn.mp3"},{title:"Dressmaker",long_title:"Dressmaker",local:"/sounds/dressmaker160.mp3",image_test:"/img/sound.svg",image_local:"/img/dress.png",image_lightness:"light",image:"https://asmrion.com/images/ronds/dress.png",source:"https://e8b8e3q2.ssl.hwcdn.net/sounds/people/dressmaker160.mp3"},{title:"Brushing",long_title:"Whispering",local:"/sounds/brushing-tapewriter160.mp3",image_test:"/img/sound.svg",image_local:"/img/whisper2.png",image_lightness:"light",image:"https://asmrion.com/images/ronds/whisper2.png",source:"https://e8b8e3q2.ssl.hwcdn.net/sounds/people/brushing-tapewriter160.mp3"},{title:"Barbershop",long_title:"Barbershop haircut",local:"/sounds/barbershop160.mp3",image_test:"/img/sound.svg",image_local:"/img/barber.png",image_lightness:"light",image:"https://asmrion.com/images/ronds/barber.png",source:"https://e8b8e3q2.ssl.hwcdn.net/sounds/people/barbershop160.mp3"},{title:"Pebble Beach",long_title:"Pebble beach",local:"/sounds/pebble-beach.mp3",image_test:"/img/sound.svg",image_local:"/img/beach.png",image_lightness:"light",image:"https://asmrion.com/images/ronds/beach.png",source:"https://e8b8e3q2.ssl.hwcdn.net/sounds/ocean/pebble-beach.mp3"},{title:"Rainy Walk",long_title:"Walking on a rainy day",local:"/sounds/rainy-walk160.mp3",image_test:"/img/sound.svg",image_local:"/img/rain.png",image_lightness:"light",image:"https://asmrion.com/images/ronds/rain.png",source:"https://e8b8e3q2.ssl.hwcdn.net/sounds/rain/rainy-walk160.mp3"},{title:"Snow",long_title:"Heavy snowstorm",local:"/sounds/snow.mp3",image_test:"/img/sound.svg",image_local:"/img/snow.png",image_lightness:"light",image:"https://asmrion.com/images/ronds/snow.png",source:"https://e8b8e3q2.ssl.hwcdn.net/sounds/hipster/snow.mp3"},{title:"Cat",long_title:"Cat's purr",local:"/sounds/cat160.mp3",image_test:"/img/sound.svg",image_local:"/img/cat.png",image_lightness:"light",image:"https://asmrion.com/images/ronds/cat.png",source:"https://e8b8e3q2.ssl.hwcdn.net/sounds/cat160.mp3"},{title:"Bonfire",long_title:"Crackling bonfire",local:"/sounds/bonfire160.mp3",image_test:"/img/sound.svg",image_local:"/img/fire.png",image_lightness:"light",image:"https://asmrion.com/images/ronds/fire.png",source:"https://e8b8e3q2.ssl.hwcdn.net/sounds/bonfire160.mp3"}]},{title:"defonic",set_number:"3",sounds:[{title:"Ocean",long_title:null,local:"/sounds/ocean.mp3",image_test:"/img/sound.svg",image_local:"/img/ocean.svg",image_lightness:"dark",image:"https://g2k7z4f8.ssl.hwcdn.net/defonic/images/blue/ocean.svg",source:"https://e8b8e3q2.ssl.hwcdn.net/sounds/hipster/ocean.mp3"},{title:"Birds",long_title:null,local:"/sounds/birds160.mp3",image_test:"/img/sound.svg",image_local:"/img/forest.svg",image_lightness:"dark",image:"https://g2k7z4f8.ssl.hwcdn.net/defonic/images/blue/forest.svg",source:"https://e8b8e3q2.ssl.hwcdn.net/sounds/hipster/birds160.mp3"},{title:"Wind",long_title:null,local:"/sounds/gale160.mp3",image_test:"/img/sound.svg",image_local:"/img/wind.svg",image_lightness:"dark",image:"https://g2k7z4f8.ssl.hwcdn.net/defonic/images/blue/wind.svg",source:"https://e8b8e3q2.ssl.hwcdn.net/sounds/gale160.mp3"},{title:"Whitenoise",long_title:null,local:"/sounds/white-noise144.mp3",image_test:"/img/sound.svg",image_local:"/img/noise.svg",image_lightness:"dark",image:"https://g2k7z4f8.ssl.hwcdn.net/defonic/images/blue/noise.svg",source:"https://e8b8e3q2.ssl.hwcdn.net/sounds/noise/white-noise144.mp3"},{title:"Library",long_title:null,local:"/sounds/delft-library160.mp3",image_test:"/img/sound.svg",image_local:"/img/library.svg",image_lightness:"dark",image:"https://g2k7z4f8.ssl.hwcdn.net/defonic/images/blue/library.svg",source:"https://e8b8e3q2.ssl.hwcdn.net/sounds/people/delft-library160.mp3"},{title:"Train",long_title:null,local:"/sounds/train160.mp3",image_test:"/img/sound.svg",image_local:"/img/train.svg",image_lightness:"dark",image:"https://g2k7z4f8.ssl.hwcdn.net/defonic/images/blue/train.svg",source:"https://e8b8e3q2.ssl.hwcdn.net/sounds/hipster/train160.mp3"},{title:"River",long_title:null,local:"/sounds/river160.mp3",image_test:"/img/sound.svg",image_local:"/img/brook.svg",image_lightness:"dark",image:"https://g2k7z4f8.ssl.hwcdn.net/defonic/images/blue/brook.svg",source:"https://e8b8e3q2.ssl.hwcdn.net/sounds/river160.mp3"},{title:"Fire",long_title:null,local:"/sounds/fireplace.mp3",image_test:"/img/sound.svg",image_local:"/img/fire.svg",image_lightness:"dark",image:"https://g2k7z4f8.ssl.hwcdn.net/defonic/images/blue/fire.svg",source:"https://e8b8e3q2.ssl.hwcdn.net/sounds/hipster/fireplace.mp3"},{title:"Crickets",long_title:null,local:"/sounds/crickets160.mp3",image_test:"/img/sound.svg",image_local:"/img/moon.svg",image_lightness:"dark",image:"https://g2k7z4f8.ssl.hwcdn.net/defonic/images/blue/moon.svg",source:"https://e8b8e3q2.ssl.hwcdn.net/sounds/hipster/crickets160.mp3"},{title:"Dolphins",long_title:null,local:"/sounds/dolphin-screaming160.mp3",image_test:"/img/sound.svg",image_local:"/img/dolphin.svg",image_lightness:"dark",image:"https://g2k7z4f8.ssl.hwcdn.net/defonic/images/blue/dolphin.svg",source:"https://e8b8e3q2.ssl.hwcdn.net/sounds/ocean/dolphin-screaming160.mp3"},{title:"Road",long_title:null,local:"/sounds/highway160.mp3",image_test:"/img/sound.svg",image_local:"/img/road.svg",image_lightness:"dark",image:"https://g2k7z4f8.ssl.hwcdn.net/defonic/images/blue/road.svg",source:"https://e8b8e3q2.ssl.hwcdn.net/sounds/hipster/highway160.mp3"},{title:"Fan",long_title:null,local:"/sounds/fan-two160.mp3",image_test:"/img/sound.svg",image_local:"/img/fan.svg",image_lightness:"dark",image:"https://g2k7z4f8.ssl.hwcdn.net/defonic/images/blue/fan.svg",source:"https://e8b8e3q2.ssl.hwcdn.net/sounds/objects/fan-two160.mp3"},{title:"Rain",long_title:null,local:"/sounds/rainbest160.mp3",image_test:"/img/sound.svg",image_local:"/img/rain.svg",image_lightness:"dark",image:"https://g2k7z4f8.ssl.hwcdn.net/defonic/images/blue/rain.svg",source:"https://e8b8e3q2.ssl.hwcdn.net/sounds/rain/rainbest160.mp3"},{title:"Thunder",long_title:null,local:"/sounds/thunder160.mp3",image_test:"/img/sound.svg",image_local:"/img/thunder.svg",image_lightness:"dark",image:"https://g2k7z4f8.ssl.hwcdn.net/defonic/images/blue/thunder.svg",source:"https://e8b8e3q2.ssl.hwcdn.net/sounds/rain/thunder160.mp3"},{title:"Snow",long_title:null,local:"/sounds/snow.mp3",image_test:"/img/sound.svg",image_local:"/img/snow.svg",image_lightness:"dark",image:"https://g2k7z4f8.ssl.hwcdn.net/defonic/images/blue/snow.svg",source:"https://e8b8e3q2.ssl.hwcdn.net/sounds/hipster/snow.mp3"},{title:"Windchime",long_title:null,local:"/sounds/windchime160.mp3",image_test:"/img/sound.svg",image_local:"/img/bell.svg",image_lightness:"dark",image:"https://g2k7z4f8.ssl.hwcdn.net/defonic/images/blue/bell.svg",source:"https://e8b8e3q2.ssl.hwcdn.net/sounds/windchime160.mp3"},{title:"Cafe",long_title:null,local:"/sounds/cafe-brazil-walla160.mp3",image_test:"/img/sound.svg",image_local:"/img/cafe.svg",image_lightness:"dark",image:"https://g2k7z4f8.ssl.hwcdn.net/defonic/images/blue/cafe.svg",source:"https://e8b8e3q2.ssl.hwcdn.net/sounds/cafe/cafe-brazil-walla160.mp3"},{title:"Countryside",long_title:null,local:"/sounds/fryers-forest160.mp3",image_test:"/img/sound.svg",image_local:"/img/village.svg",image_lightness:"dark",image:"https://g2k7z4f8.ssl.hwcdn.net/defonic/images/blue/village.svg",source:"https://e8b8e3q2.ssl.hwcdn.net/sounds/hipster/fryers-forest160.mp3"},{title:"Cat",long_title:null,local:"/sounds/cat160.mp3",image_test:"/img/sound.svg",image_local:"/img/cat.svg",image_lightness:"dark",image:"https://g2k7z4f8.ssl.hwcdn.net/defonic/images/blue/cat.svg",source:"https://e8b8e3q2.ssl.hwcdn.net/sounds/cat160.mp3"},{title:"Leaves",long_title:null,local:"/sounds/aspen-tree160.mp3",image_test:"/img/sound.svg",image_local:"/img/leafs.svg",image_lightness:"dark",image:"https://g2k7z4f8.ssl.hwcdn.net/defonic/images/blue/leafs.svg",source:"https://e8b8e3q2.ssl.hwcdn.net/sounds/hipster/aspen-tree160.mp3"},{title:"Pinknoise",long_title:null,local:"/sounds/pink-noise144.mp3",image_test:"/img/sound.svg",image_local:"/img/noise.svg",image_lightness:"dark",image:"https://g2k7z4f8.ssl.hwcdn.net/defonic/images/blue/noise.svg",source:"https://e8b8e3q2.ssl.hwcdn.net/sounds/noise/pink-noise144.mp3"}]},{title:"hipstersound",set_number:"4",sounds:[{title:"Cafe",long_title:null,local:"/sounds/cafe-brazil-walla160.mp3",image_test:"/img/sound.svg",image_local:null,image_lightness:"dark",image:null,source:"https://e8b8e3q2.ssl.hwcdn.net/sounds/cafe/cafe-brazil-walla160.mp3"},{title:"Jazz Club",long_title:null,local:"/sounds/music190_walk_1.mp3",image_test:"/img/sound.svg",image_local:null,image_lightness:"dark",image:null,source:"https://e8b8e3q2.ssl.hwcdn.net/sounds/licensed/music190_walk_1.mp3"},{title:"Birds",long_title:null,local:"/sounds/birds160.mp3",image_test:"/img/sound.svg",image_local:null,image_lightness:"dark",image:null,source:"https://e8b8e3q2.ssl.hwcdn.net/sounds/hipster/birds160.mp3"},{title:"Fire",long_title:null,local:"/sounds/fireplace.mp3",image_test:"/img/sound.svg",image_local:null,image_lightness:"dark",image:null,source:"https://e8b8e3q2.ssl.hwcdn.net/sounds/hipster/fireplace.mp3"},{title:"Ocean",long_title:null,local:"/sounds/ocean.mp3",image_test:"/img/sound.svg",image_local:null,image_lightness:"dark",image:null,source:"https://e8b8e3q2.ssl.hwcdn.net/sounds/hipster/ocean.mp3"},{title:"Raindrops",long_title:null,local:"/sounds/raindrops160.mp3",image_test:"/img/sound.svg",image_local:null,image_lightness:"dark",image:null,source:"https://e8b8e3q2.ssl.hwcdn.net/sounds/rain/raindrops160.mp3"},{title:"Keyboard",long_title:null,local:"/sounds/keyboard160.mp3",image_test:"/img/sound.svg",image_local:null,image_lightness:"dark",image:null,source:"https://e8b8e3q2.ssl.hwcdn.net/sounds/hipster/keyboard160.mp3"},{title:"Piano Bar",long_title:null,local:"/sounds/music190_lavender.mp3",image_test:"/img/sound.svg",image_local:null,image_lightness:"dark",image:null,source:"https://e8b8e3q2.ssl.hwcdn.net/sounds/licensed/music190_lavender.mp3"}]},{title:"asoftmurmur",set_number:"5",sounds:[{title:"Rain",long_title:null,local:"/sounds/main-rain.mp4",image_test:"/img/sound.svg",image_local:null,image_lightness:"dark",image:null,source:"https://st2.asoftmurmur.com/assets/p/content/rain/main-rain.mp4"},{title:"Thunder",long_title:null,local:"/sounds/main-thunder.mp4",image_test:"/img/sound.svg",image_local:null,image_lightness:"dark",image:null,source:"https://st2.asoftmurmur.com/assets/p/content/thunder/main-thunder.mp4"},{title:"Waves",long_title:null,local:"/sounds/main-waves.mp4",image_test:"/img/sound.svg",image_local:null,image_lightness:"dark",image:null,source:"https://st3.asoftmurmur.com/assets/p/content/waves/main-waves.mp4"},{title:"Wind",long_title:null,local:"/sounds/main-wind.mp4",image_test:"/img/sound.svg",image_local:null,image_lightness:"dark",image:null,source:"https://st2.asoftmurmur.com/assets/p/content/wind/main-wind.mp4"},{title:"Fire",long_title:null,local:"/sounds/main-fire.mp4",image_test:"/img/sound.svg",image_local:null,image_lightness:"dark",image:null,source:"https://st2.asoftmurmur.com/assets/p/content/fire/main-fire.mp4"},{title:"Birds",long_title:null,local:"/sounds/main-birds.mp4",image_test:"/img/sound.svg",image_local:null,image_lightness:"dark",image:null,source:"https://st3.asoftmurmur.com/assets/p/content/birds/main-birds.mp4"},{title:"Crickets",long_title:null,local:"/sounds/main-crickets.mp4",image_test:"/img/sound.svg",image_local:null,image_lightness:"dark",image:null,source:"https://st3.asoftmurmur.com/assets/p/content/crickets/main-crickets.mp4"},{title:"Coffee Shop",long_title:null,local:"/sounds/main-people.mp4",image_test:"/img/sound.svg",image_local:null,image_lightness:"dark",image:null,source:"https://st3.asoftmurmur.com/assets/p/content/people/main-people.mp4"},{title:"Singing Bowl",long_title:null,local:"/sounds/main-sbowl.mp4",image_test:"/img/sound.svg",image_local:null,image_lightness:"dark",image:null,source:"https://st1.asoftmurmur.com/assets/p/content/sbowl/main-sbowl.mp4"},{title:"White Noise",long_title:null,local:"/sounds/main-whitenoise.mp4",image_test:"/img/sound.svg",image_local:null,image_lightness:"dark",image:null,source:"https://st3.asoftmurmur.com/assets/p/content/whitenoise/main-whitenoise.mp4"}]}];function oe(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,s=o(e);if(t){var i=o(this).constructor;n=Reflect.construct(s,arguments,i)}else n=s.apply(this,arguments);return l(this,n)}}function ae(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return re(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return re(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var s=0,i=function(){};return{s:i,n:function(){return s>=e.length?{done:!0}:{done:!1,value:e[s++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,o=!0,a=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){a=!0,l=e},f:function(){try{o||null==n.return||n.return()}finally{if(a)throw l}}}}function re(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}var ge=Q.document;function ue(e,t,n){var s=e.slice();return s[5]=t[n],s[7]=n,s}function ce(e,t,n){var s=e.slice();return s[2]=t[n],s[4]=n,s}function me(e){var t,n;return t=new ie({props:{info:e[5],index:"".concat(e[4],"-").concat(e[7])}}),{c:function(){var e;(e=t.$$.fragment)&&e.c()},m:function(e,s){V(t,e,s),n=!0},p:m,i:function(e){n||(K(t.$$.fragment,e),n=!0)},o:function(e){G(t.$$.fragment,e),n=!1},d:function(e){X(t,e)}}}function de(e){for(var t,n,s,i,l,o,a=e[2].sounds,r=[],g=0;g<a.length;g+=1)r[g]=me(ue(e,a,g));var u=function(e){return G(r[e],1,1,(function(){r[e]=null}))};return{c:function(){t=k("div"),n=k("p"),s=q(),i=k("div");for(var o=0;o<r.length;o+=1)r[o].c();l=q(),S(n,"class","sounds-set-title svelte-dizp78"),S(n,"v-text","set.set_number"),S(i,"class","sounds-set-list svelte-dizp78"),S(t,"class","sounds-set"),S(t,"data-setnum",e[4]+1),R(t,"hide",e[4]>0)},m:function(e,a){b(e,t,a),_(t,n),_(t,s),_(t,i);for(var g=0;g<r.length;g+=1)r[g].m(i,null);_(t,l),o=!0},p:function(e,t){if(0&t){var n;for(a=e[2].sounds,n=0;n<a.length;n+=1){var s=ue(e,a,n);r[n]?(r[n].p(s,t),K(r[n],1)):(r[n]=me(s),r[n].c(),K(r[n],1),r[n].m(i,null))}for(U(),n=a.length;n<r.length;n+=1)u(n);J()}},i:function(e){if(!o){for(var t=0;t<a.length;t+=1)K(r[t]);o=!0}},o:function(e){r=r.filter(Boolean);for(var t=0;t<r.length;t+=1)G(r[t]);o=!1},d:function(e){e&&w(t),y(r,e)}}}function pe(e){for(var t,n,s,i,l,o,a,r,g,c,m,d,p,f,v,$,x,C,R,A,O=le,B=[],E=0;E<O.length;E+=1)B[E]=de(ce(e,O,E));var j=function(e){return G(B[e],1,1,(function(){B[e]=null}))};return{c:function(){t=k("meta"),n=q(),s=k("div"),(i=k("div")).innerHTML='<div id="intro-overlay-content" class="svelte-dizp78"><p class="intro-overlay-content-para svelte-dizp78">Welcome!</p> \n\t\t\t<p class="intro-overlay-content-para svelte-dizp78">Take a moment to relax with with 54 ambient soundscapes in 5 sets</p></div>',l=q(),o=k("div"),(a=k("p")).textContent="Set 1",r=q(),(g=k("p")).textContent="Set 2",c=q(),(m=k("p")).textContent="Set 3",d=q(),(p=k("p")).textContent="Set 4",f=q(),(v=k("p")).textContent="Set 5",$=q(),x=k("div");for(var e=0;e<B.length;e+=1)B[e].c();ge.title="Ambient Soundboard",S(t,"name","description"),S(t,"content","Ambient sound board"),S(i,"id","intro-overlay"),S(i,"class","svelte-dizp78"),S(a,"class","sounds-set-toggler active svelte-dizp78"),S(a,"data-setnum",1),S(g,"class","sounds-set-toggler svelte-dizp78"),S(g,"data-setnum",2),S(m,"class","sounds-set-toggler svelte-dizp78"),S(m,"data-setnum",3),S(p,"class","sounds-set-toggler svelte-dizp78"),S(p,"data-setnum",4),S(v,"class","sounds-set-toggler svelte-dizp78"),S(v,"data-setnum",5),S(o,"id","sounds-set-togglers"),S(o,"class","svelte-dizp78"),S(x,"id","sounds-wrapper"),S(x,"class","svelte-dizp78"),S(s,"id","sounds"),S(s,"class","svelte-dizp78")},m:function(u,h){_(ge.head,t),b(u,n,h),b(u,s,h),_(s,i),_(s,l),_(s,o),_(o,a),_(o,r),_(o,g),_(o,c),_(o,m),_(o,d),_(o,p),_(o,f),_(o,v),_(s,$),_(s,x);for(var w=0;w<B.length;w+=1)B[w].m(x,null);C=!0,R||(A=[z(i,"click",e[1]),z(a,"click",e[0]),z(g,"click",e[0]),z(m,"click",e[0]),z(p,"click",e[0]),z(v,"click",e[0])],R=!0)},p:function(e,t){var n=u(t,1)[0];if(0&n){var s;for(O=le,s=0;s<O.length;s+=1){var i=ce(e,O,s);B[s]?(B[s].p(i,n),K(B[s],1)):(B[s]=de(i),B[s].c(),K(B[s],1),B[s].m(x,null))}for(U(),s=O.length;s<B.length;s+=1)j(s);J()}},i:function(e){if(!C){for(var t=0;t<O.length;t+=1)K(B[t]);C=!0}},o:function(e){B=B.filter(Boolean);for(var t=0;t<B.length;t+=1)G(B[t]);C=!1},d:function(e){w(t),e&&w(n),e&&w(s),y(B,e),R=!1,h(A)}}}function he(e){return[function(e){var t,n=e.target.dataset.setnum,s=ae(g(document.getElementsByClassName("sounds-set-toggler")));try{for(s.s();!(t=s.n()).done;){t.value.classList.remove("active")}}catch(e){s.e(e)}finally{s.f()}e.target.classList.add("active");for(var i=g(document.getElementsByClassName("sounds-set")),l=i.length,o=0;o<l;o++){i[o].dataset.setnum==n?i[o].classList.remove("hide"):i[o].classList.add("hide")}},function(){document.getElementById("intro-overlay").classList.add("hide")}]}return new(function(n){s(l,n);var i=oe(l);function l(n){var s;return e(this,l),Z(t(s=i.call(this)),n,he,pe,v,{}),s}return l}(ee))({target:document.body})}();
//# sourceMappingURL=bundle.js.map
