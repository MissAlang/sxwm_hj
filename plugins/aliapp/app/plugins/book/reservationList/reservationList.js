(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["plugins/book/reservationList/reservationList"],{3679:function(t,i,n){"use strict";n.r(i);var e=n("7c82"),o=n.n(e);for(var a in e)"default"!==a&&function(t){n.d(i,t,function(){return e[t]})}(a);i["default"]=o.a},"77d6":function(t,i,n){"use strict";var e=n("b3ea"),o=n.n(e);o.a},"7c82":function(t,i,n){"use strict";function e(t){return r(t)||a(t)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function a(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function r(t){if(Array.isArray(t)){for(var i=0,n=new Array(t.length);i<t.length;i++)n[i]=t[i];return n}}Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=function(){return n.e("plugins/book/components/app-head-navigation").then(n.bind(null,"ffe8"))},u=function(){return n.e("plugins/book/components/app-reservation-form").then(n.bind(null,"5410"))},c=function(){return n.e("components/basic-component/app-prompt-box/app-prompt-box").then(n.bind(null,"387a"))},d=function(){return n.e("plugins/book/components/app-write-off-code").then(n.bind(null,"e604"))},h={name:"reservationList",components:{"app-head-navigation":s,"app-reservation-form":u,"app-prompt-box":c,"app-write-off-code":d},data:function(){return{list:[],page:1,over:!1,status:0,hidden:!1,text:"",confirm:!1,back:"",item:null,file_path:"",hiddenCode:!1,itemId:"-1"}},onLoad:function(t){this.request(this.page,this.status)},methods:{classification:function(t){this.list=[],this.status=t,this.over=!1,this.page=1,this.request(this.page,t)},request:function(t,i){var n=this;this.$request({url:this.$api.book.order_list,data:{page:t,status:i}}).then(function(t){0===t.code&&(0===t.data.list.length?n.over=!0:n.list=[].concat(e(n.list),e(t.data.list)))}).catch(function(){})},confirmNegative:function(t){t?this[this.back]():this.hidden=!1},funHandler:function(t,i){this.back=t,this.item=i,"refund"===t?(this.text="是否申请退款",this.hidden=!0):"cancel"===t?(this.text="是否申请取消订单",this.hidden=!0):"use"===t?this[this.back]():"pay"===t&&(this.hidden=!0,this.text="申请支付")},refund:function(){var t=this;this.$request({url:this.$api.order.cancel,data:{id:this.item.id}}).then(function(i){if(0===i.code){for(var n=0;n<t.list.length;n++)t.list[n].id===t.item.id&&t.$delete(t.list,n);t.hidden=!1}})},cancel:function(){var t=this;this.$request({url:this.$api.order.cancel,data:{id:this.item.id}}).then(function(i){if(0===i.code){for(var n=0;n<t.list.length;n++)t.list[n].id===t.item.id&&t.$delete(t.list,n);t.hidden=!1}})},use:function(){this.itemId=this.item.id,this.hiddenCode=!0},pay:function(){var t=this;this.hidden=!1,this.$request({url:this.$api.order.list_pay_data,data:{id:this.item.id}}).then(function(i){0===i.code&&t.$payment.pay(i.data.id).then(function(){for(var i=0;i<t.list.length;i++)t.list[i].id===t.item.id&&t.$delete(t.list,i)}).catch(function(){})})}},onReachBottom:function(){this.over||(this.page+=1,this.request(this.page,this.status))}};i.default=h},"94ac":function(t,i,n){"use strict";var e=function(){var t=this,i=t.$createElement;t._self._c;t._isMounted||(t.e0=function(i){t.hiddenCode=!1})},o=[];n.d(i,"a",function(){return e}),n.d(i,"b",function(){return o})},b2f2:function(t,i,n){"use strict";n.r(i);var e=n("94ac"),o=n("3679");for(var a in o)"default"!==a&&function(t){n.d(i,t,function(){return o[t]})}(a);n("77d6");var r=n("2877"),s=Object(r["a"])(o["default"],e["a"],e["b"],!1,null,"661cb5d0",null);i["default"]=s.exports},b3ea:function(t,i,n){}},[["746d","common/runtime","common/vendor"]]]);