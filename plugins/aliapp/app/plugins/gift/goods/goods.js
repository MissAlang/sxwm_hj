(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["plugins/gift/goods/goods"],{"02e7":function(t,e,n){"use strict";var o=n("4279"),i=n.n(o);i.a},4279:function(t,e,n){},8478:function(t,e,n){"use strict";n.r(e);var o=n("a30f"),i=n("fa80");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("02e7");var a=n("2877"),s=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,null,null);e["default"]=s.exports},a30f:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=(t._self._c,{attr_list:t.selectAttr.attr_list}),o=Number(110);t.$mp.data=Object.assign({},{$root:{a0:n,m0:o}})},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},c751:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n("a34a")),i=n("2f62");function r(t){return t&&t.__esModule?t:{default:t}}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(n,!0).forEach(function(e){c(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e,n,o,i,r,a){try{var s=t[r](a),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(o,i)}function p(t){return function(){var e=this,n=arguments;return new Promise(function(o,i){var r=t.apply(e,n);function a(t){u(r,o,i,a,s,"next",t)}function s(t){u(r,o,i,a,s,"throw",t)}a(void 0)})}}var d=function(){return n.e("components/page-component/goods/app-goods-banner").then(n.bind(null,"12b6"))},l=function(){return n.e("components/page-component/app-goods-detail/app-name").then(n.bind(null,"1caa"))},h=function(){return n.e("plugins/gift/components/goods/detail-parameter").then(n.bind(null,"6c8b"))},g=function(){return n.e("components/page-component/app-join-member/app-join-member").then(n.bind(null,"40f4"))},f=function(){return n.e("components/page-component/goods/app-goods-detail").then(n.bind(null,"5abf"))},m=function(){return n.e("components/page-component/app-vip-card/app-vip-card").then(n.bind(null,"19f0"))},_=function(){return n.e("components/page-component/app-related-suggestion-product/app-related-suggestion-product").then(n.bind(null,"1ce4"))},b=function(){return n.e("components/page-component/goods/app-goods-service").then(n.bind(null,"311c"))},v=function(){return n.e("components/basic-component/app-empty-bottom/app-empty-bottom").then(n.bind(null,"0c06"))},w=function(){return n.e("components/basic-component/app-iphone-x/app-iphone-x").then(n.bind(null,"7598"))},y=function(){return n.e("plugins/gift/components/goods/bottom-button").then(n.bind(null,"5446"))},$=function(){return n.e("components/page-component/goods/app-goods-attr").then(n.bind(null,"9dc1"))},O=function(){return n.e("components/page-component/app-attr/app-attr").then(n.bind(null,"d3c4"))},k={name:"goods",data:function(){return{goods_id:-1,goods_detail:{},goods_list:[],attr_bool:!1,select_data:{},select_str:"",number:1,ask_gift:"",mch_id:-1,loading:!1,join_disabled:!0,is_share:0,is_search:0,selectAttr:{},attrShow:0}},onLoad:function(t){var e=this;this.goods_id=t.id,t.mch_id&&(this.mch_id=t.mch_id),1==t.is_share&&(this.is_share=1),1==t.is_search&&(this.is_search=1),this.$store.dispatch("gift/getConfig",this.$api.gift.config),this.request().then(function(){e.requestList(),e.requestConfig()})},onShareAppMessage:function(){return this.$shareAppMessage({path:"/plugins/gift/goods/goods",title:this.ask_gift,imageUrl:this.goods_detail.app_share_pic?this.goods_detail.app_share_pic:"",bgImgUrl:this.goods_detail.app_share_pic?this.goods_detail.app_share_pic:"",params:{id:this.goods_id,is_share:1}})},methods:{clickAttr:function(){this.attrShow=Math.random()},onAttr:function(t){if(t){this.selectAttr=t;for(var e="",n=0;n<t.attr_list.length;n++)e+="".concat(t.attr_list[n].attr_group_name,": ").concat(t.attr_list[n].attr_name," ");this.select_data={name:this.goods_detail.name,price:t.price,attr:{id:t.id,attr_list:t.attr_list,stock:t.stock,goods_id:t.goods_id},attr_str:e,pic_url:t.pic_url?t.pic_url:this.goods_detail.cover_pic}}},request:function(){var e=p(o.default.mark(function e(){var n,i,r,a;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.$utils.showLoading(),e.prev=1,n={id:this.goods_id},e.next=5,this.$request({url:this.$api.gift.goods,method:"get",data:s({},n)});case 5:if(i=e.sent,this.$utils.hideLoading(),0===i.code)for(this.goods_detail=i.data.goods,this.loading=!0,r=0;r<this.goods_detail.attr_groups.length;r++)for(a=0;a<this.goods_detail.attr_groups[r].attr_list.length;a++)this.goods_detail.attr_groups[r].attr_list[a].active=0===a;else t.showModal({title:"提示",content:i.msg});e.next=14;break;case 10:throw e.prev=10,e.t0=e["catch"](1),this.$utils.hideLoading(),new Error(e.t0);case 14:case"end":return e.stop()}},e,this,[[1,10]])}));function n(){return e.apply(this,arguments)}return n}(),requestConfig:function(){var e=p(o.default.mark(function e(){var n;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.$utils.showLoading(),e.prev=1,e.next=4,this.$request({url:this.$api.gift.config,method:"get"});case 4:n=e.sent,this.$utils.hideLoading(),0===n.code?(this.ask_gift=n.data.ask_gift,this.$store.commit("gift/setTheme",Number(n.data.theme.id))):t.showModal({title:"提示",content:n.msg}),e.next=13;break;case 9:throw e.prev=9,e.t0=e["catch"](1),this.$utils.hideLoading(),new Error(e.t0);case 13:case"end":return e.stop()}},e,this,[[1,9]])}));function n(){return e.apply(this,arguments)}return n}(),requestList:function(){var e=p(o.default.mark(function e(){var n;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.$utils.showLoading(),e.prev=1,e.next=4,this.$request({url:this.$api.goods.new_recommend,method:"get",data:{goods_id:this.goods_id,type:"goods"}});case 4:n=e.sent,this.$utils.hideLoading(),0===n.code?this.goods_list=n.data.list:t.showModal({title:"提示",content:n.msg}),e.next=13;break;case 9:throw e.prev=9,e.t0=e["catch"](1),this.$utils.hideLoading(),new Error(e.t0);case 13:case"end":return e.stop()}},e,this,[[1,9]])}));function n(){return e.apply(this,arguments)}return n}(),attrSwitch:function(t){this.attr_bool=t},pay:function(e){if(console.log(this.select_data),this.number=e,this.$storage.getStorageSync("GIFT_CART")){for(var n=0,o=this.$storage.getStorageSync("GIFT_CART"),i=0;i<o.length;i++)o[i].attr.id===this.select_data.attr.id?o[i].number+=this.number:n+=1;if(n===o.length){var r=this.select_data;r.number=this.number,o.push(r)}this.$storage.setStorageSync("GIFT_CART",o)}else{var a=this.select_data;a.number=this.number,this.$storage.setStorageSync("GIFT_CART",[a])}1===this.is_share?t.navigateTo({url:"/plugins/gift/index/index"}):1===this.is_search?t.navigateBack({delta:3}):t.navigateBack({delta:2})}},computed:s({},(0,i.mapState)("gift",{theme:function(t){return t.theme}}),{},(0,i.mapState)("mallConfig",{mall:function(t){return t.mall}})),components:{"app-goods-banner":d,"app-name":l,"detail-parameter":h,"app-join-member":g,"app-goods-detail":f,"app-vip-card":m,"app-related-suggestion-product":_,"app-goods-service":b,"app-empty-bottom":v,"app-iphone-x":w,"bottom-button":y,"show-attr":$,appAttr:O}};e.default=k}).call(this,n("c11b")["default"])},fa80:function(t,e,n){"use strict";n.r(e);var o=n("c751"),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=i.a}},[["8d66","common/runtime","common/vendor"]]]);