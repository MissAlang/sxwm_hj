(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/search/search"],{"3ae7":function(t,e,n){},"650b":function(t,e,n){"use strict";n.r(e);var i=n("8fe2"),r=n("e143");for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);n("9561");var s=n("2877"),c=Object(s["a"])(r["default"],i["a"],i["b"],!1,null,"8b8a8262",null);e["default"]=c.exports},"8fe2":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r})},9561:function(t,e,n){"use strict";var i=n("3ae7"),r=n.n(i);r.a},e143:function(t,e,n){"use strict";n.r(e);var i=n("face"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=r.a},face:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("2f62");function r(t){return c(t)||s(t)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function s(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function c(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(n,!0).forEach(function(e){h(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f=function(){return Promise.all([n.e("common/vendor"),n.e("components/page-component/app-goods-list/app-goods-list")]).then(n.bind(null,"3f73"))},d=1,l=!1,y=!1,m={name:"search",components:{"app-goods-list":f},data:function(){return{searchList:[],searchKey:"",list:[],isSearch:!1,historyList:[],keyword:"",recommend_list:[]}},computed:u({},(0,i.mapState)({theme:function(t){return t.mallConfig.theme}}),{newList:function(){return this.list.length>0?this.list:this.recommend_list}}),onLoad:function(){d=1,l=!1,y=!1,this.historyList=this.getHistory(),this.getSearchList(),this.getRecommend()},onReachBottom:function(){y||this.getGoodsList()},watch:{keyword:{handler:function(t){""==t&&this.cancel()},immediate:!0}},methods:{getSearchList:function(){var t=this;this.$showLoading(),this.$request({url:this.$api.default.search_list}).then(function(e){t.$hideLoading(),t.searchList=e.data})},switchSearch:function(t){this.searchKey=t,this.historyList=this.getHistory(),this.reset()},cancel:function(){this.isSearch=!1,this.keyword="",this.list=[]},reset:function(){d=1,this.getGoodsList()},search:function(t){var e=this.keyword;""!==e&&(this.keyword=e.trim(),this.setHistory(),this.reset())},getGoodsList:function(){var e=this;this.keyword&&(l||(l=!0,t.showLoading(),this.$request({url:this.$api.default.goods_list,data:{keyword:this.keyword,sign:this.searchKey,page:d}}).then(function(n){var i;(t.hideLoading(),l=!1,e.isSearch=!0,0===n.code)?(1==d&&(e.list=[]),n.data.list.length>0?((i=e.list).push.apply(i,r(n.data.list)),d++):(y=!0,1===d&&e.getRecommend())):t.showModal({content:n.msg})}).catch(function(){l=!1,t.hideLoading()})))},setHistory:function(){var e=this.getHistory(),n=this.keyword.trim();e.forEach(function(t,i){t.keyword===n&&e.splice(i,1)}),e.push({keyword:n}),e.length>20&&e.shift(),this.historyList=e,t.setStorageSync("SEARCH_HISTORY_LIST",e)},getHistory:function(){var e=t.getStorageSync("SEARCH_HISTORY_LIST");return e||(e=[]),e},deleteHistory:function(){t.removeStorageSync("SEARCH_HISTORY_LIST"),this.historyList=[]},historyClick:function(t){this.keyword=t.trim(),this.reset()},getRecommend:function(){var t=this;this.recommend_list.length>0||this.$request({url:this.$api.goods.new_recommend,data:{goods_id:0,type:"goods"}}).then(function(e){0===e.code&&(t.recommend_list=e.data.list)})}}};e.default=m}).call(this,n("c11b")["default"])}},[["eef2","common/runtime","common/vendor"]]]);