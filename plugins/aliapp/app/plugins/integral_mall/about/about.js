(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["plugins/integral_mall/about/about"],{"301c":function(e,t,n){"use strict";n.r(t);var o=n("ebdd"),r=n("78be");for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);n("df75");var a=n("2877"),u=Object(a["a"])(r["default"],o["a"],o["b"],!1,null,"69194272",null);t["default"]=u.exports},"59f8":function(e,t,n){},"78be":function(e,t,n){"use strict";n.r(t);var o=n("9093"),r=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);t["default"]=r.a},9093:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("2f62");function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(n,!0).forEach(function(t){a(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=function(){return Promise.all([n.e("common/vendor"),n.e("components/basic-component/app-layout/app-layout")]).then(n.bind(null,"0b17"))},c=function(){return Promise.all([n.e("common/vendor"),n.e("components/basic-component/app-form-id/app-form-id")]).then(n.bind(null,"8ee9"))},f={name:"about",components:{"app-layout":u,"app-form-id":c},data:function(){return{desc:[]}},computed:i({},(0,o.mapState)({theme:function(e){return e.mallConfig.theme},mall:function(e){return e.mallConfig.mall}})),onLoad:function(){this.getList()},methods:{getList:function(){var t=this;t.$request({url:t.$api.integral_mall.index}).then(function(n){t.$hideLoading(),0==n.code?t.desc=n.data.setting.desc:e.showToast({title:n.msg,icon:"none",duration:1e3})}).catch(function(e){t.$hideLoading()})}}};t.default=f}).call(this,n("c11b")["default"])},df75:function(e,t,n){"use strict";var o=n("59f8"),r=n.n(o);r.a},ebdd:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r})}},[["42a8","common/runtime","common/vendor"]]]);