(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/coupon/list/list"],{"65d4":function(t,e,n){"use strict";var o=n("9b66"),i=n.n(o);i.a},"9b66":function(t,e,n){},bd29:function(t,e,n){"use strict";n.r(e);var o=n("c260"),i=n("facf");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("65d4");var c=n("2877"),u=Object(c["a"])(i["default"],o["a"],o["b"],!1,null,"4c4925d9",null);e["default"]=u.exports},c260:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.list,function(e,n){var o=t._f("keepNumbers")(e.sub_price),i=t._f("keepNumbers")(e.discount),r=t._f("keepNumbers")(e.min_price),c=t._f("keepNumbers")(e.discount_limit);return{$orig:t.__get_orig(e),f0:o,f1:i,f2:r,f3:c}}));t.$mp.data=Object.assign({},{$root:{l0:n}})},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},c60b:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("2f62");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(n,!0).forEach(function(e){c(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u={data:function(){return{list:[],page:2}},computed:r({},(0,o.mapState)({theme:function(t){return t.mallConfig.theme},couponImg:function(t){return t.mallConfig.__wxapp_img.coupon}})),methods:{getList:function(){var e=this;e.$request({url:e.$api.coupon.list,method:"get"}).then(function(n){t.hideLoading(),e.$hideLoading(),0==n.code?e.list=n.data.list:t.showToast({title:n.msg,icon:"none",duration:1e3})}).catch(function(n){t.hideLoading(),e.$hideLoading()})},getMore:function(){var e=this;t.showLoading({title:"加载中..."}),e.$request({url:e.$api.coupon.list,data:{page:e.page}}).then(function(n){t.hideLoading(),0==n.code?n.data.list.length>0&&(e.loading=null,e.list=e.list.concat(n.data.list),e.page++):t.showToast({title:n.msg,icon:"none",duration:1e3})}).catch(function(e){t.hideLoading()})},toDetail:function(e){t.navigateTo({url:"/pages/coupon/details/details?id="+e})},receive:function(e){var n=this;t.showLoading({title:"领取中..."}),n.$request({url:n.$api.coupon.receive,data:{coupon_id:e}}).then(function(e){t.hideLoading(),0==e.code?setTimeout(function(o){t.showToast({title:e.msg,duration:1e3}),n.getList()},200):(t.showToast({title:e.msg,icon:"none",duration:1e3}),n.getList())}).catch(function(o){t.hideLoading(),n.$event.on(n.$const.EVENT_USER_LOGIN).then(function(){n.receive(e)})})}},onLoad:function(){this.$showLoading({text:"加载中..."}),this.getList()},filters:{keepNumbers:function(t){return Number(t)}},onReachBottom:function(){this.getMore()}};e.default=u}).call(this,n("c11b")["default"])},facf:function(t,e,n){"use strict";n.r(e);var o=n("c60b"),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=i.a}},[["1b6e","common/runtime","common/vendor"]]]);