;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["plugins/pt/components/app-order-time"],{"05dd":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={name:"app-order-time",props:{time:String},data:function(){return{html:"",t:null}},watch:{time:{handler:function(e){var t=this;clearInterval(this.t);var n=new Date(e.replace(/-/g,"/")),r=n.getTime()-(new Date).getTime(),a=parseInt(r/1e3/60/60/24%30),i=parseInt(r/1e3/60/60%24),u=parseInt(r/1e3/60%60),s=parseInt(r/1e3%60);this.html=a>0?a+"天"+i+"小时"+(u<10?"0"+u:u)+"分"+(s<10?"0"+s:s)+"秒":i+"小时"+(u<10?"0"+u:u)+"分"+(s<10?"0"+s:s)+"秒",this.t=setInterval(function(){var e=n.getTime()-(new Date).getTime();e<0&&clearInterval(t.t);var r=parseInt(e/1e3/60/60/24%30),a=parseInt(e/1e3/60/60%24),i=parseInt(e/1e3/60%60),u=parseInt(e/1e3%60);t.html=r>0?r+"天"+a+"小时"+(i<10?"0"+i:i)+"分"+(u<10?"0"+u:u)+"秒":a+"小时"+(i<10?"0"+i:i)+"分"+(u<10?"0"+u:u)+"秒"},1e3)},immediate:!0}}};t.default=r},1960:function(e,t,n){"use strict";n.r(t);var r=n("2d51"),a=n("b8d9");for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);var u=n("2877"),s=Object(u["a"])(a["default"],r["a"],r["b"],!1,null,"142ee0ca",null);t["default"]=s.exports},"2d51":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a})},b8d9:function(e,t,n){"use strict";n.r(t);var r=n("05dd"),a=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);t["default"]=a.a}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'plugins/pt/components/app-order-time-create-component',
    {
        'plugins/pt/components/app-order-time-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("1960"))
        })
    },
    [['plugins/pt/components/app-order-time-create-component']]
]);                