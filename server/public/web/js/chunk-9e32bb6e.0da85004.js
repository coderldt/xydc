(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9e32bb6e"],{"0ac0":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"datalist"}},t._l(t.list,(function(e,i){return n("div",{key:i,staticClass:"list"},[n("datlistitem",{attrs:{listitem:e,spec:t.spec}})],1)})),0)},r=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"listitem"}},[n("div",{staticClass:"content"},[n("div",{staticClass:"shopimg"},[n("div",{staticClass:"leftt"},[n("img",{attrs:{src:t.listitem[this.spec].head_logo,alt:""},on:{click:t.detail}})]),n("div",{staticClass:"rightt"},[n("h3",{on:{click:t.detail}},[t._v(t._s(t.listitem[this.spec].head_title))]),t._l(t.listitem[this.spec].head_desc,(function(e,i){return n("span",{key:i},[t._v(t._s(e))])}))],2),n("div",{staticClass:"meth"},[n("span",{on:{click:t.detail}},[t._v("进店")])])])])])},s=[],c={props:{listitem:{type:Object,default:function(){return{}}},spec:{type:String}},data:function(){return{}},methods:{detail:function(){this.$store.state.item=this.listitem,this.$router.push({path:"/detail",query:{fu:this.spec}})}},mounted:function(){}},o=c,u=(n("e94a"),n("2877")),l=Object(u["a"])(o,a,s,!1,null,"4b5eb4ba",null),d=l.exports,f={props:{list:{type:Array,default:function(){return[]}},spec:{type:String}},components:{datlistitem:d},methods:{}},h=f,p=(n("7973"),Object(u["a"])(h,i,r,!1,null,"4ecf1bb2",null));e["a"]=p.exports},"1b5f":function(t,e,n){},"1dde":function(t,e,n){var i=n("d039"),r=n("b622"),a=n("2d00"),s=r("species");t.exports=function(t){return a>=51||!i((function(){var e=[],n=e.constructor={};return n[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"26ee":function(t,e,n){},"2ae2":function(t,e,n){t.exports=n.p+"img/eat2.8676b229.jpg"},"39c4":function(t,e,n){"use strict";var i=n("26ee"),r=n.n(i);r.a},"3a64":function(t,e,n){t.exports=n.p+"img/eat4.ad4b551e.jpg"},4280:function(t,e,n){t.exports=n.p+"img/eat1.10f8dcff.jpg"},"4de4":function(t,e,n){"use strict";var i=n("23e7"),r=n("b727").filter,a=n("1dde"),s=n("ae40"),c=a("filter"),o=s("filter");i({target:"Array",proto:!0,forced:!c||!o},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},5019:function(t,e,n){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var i=n("1d80"),r=n("5899"),a="["+r+"]",s=RegExp("^"+a+a+"*"),c=RegExp(a+a+"*$"),o=function(t){return function(e){var n=String(i(e));return 1&t&&(n=n.replace(s,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:o(1),end:o(2),trim:o(3)}},"65f0":function(t,e,n){var i=n("861d"),r=n("e8b5"),a=n("b622"),s=a("species");t.exports=function(t,e){var n;return r(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!r(n.prototype)?i(n)&&(n=n[s],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"6e34":function(t,e,n){t.exports=n.p+"img/eat5.86d435d4.jpg"},7156:function(t,e,n){var i=n("861d"),r=n("d2bb");t.exports=function(t,e,n){var a,s;return r&&"function"==typeof(a=e.constructor)&&a!==n&&i(s=a.prototype)&&s!==n.prototype&&r(t,s),t}},7763:function(t,e,n){"use strict";var i=n("a1c4"),r=n.n(i);r.a},"77b8":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("homeswiper"),n("recommed"),n("galesslove"),n("botbar")],1)},r=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"navbarhome"}},[n("navhome",[n("div",{staticClass:"navbar",attrs:{slot:"left"},slot:"left"},[t._v("订餐系统")]),n("div",{staticClass:"barright",attrs:{slot:"right"},slot:"right"},[n("span",{on:{click:t.btnclick1}},[t._v("主页")]),n("span",{on:{click:t.btnclick2}},[t._v("分类")]),n("span",{on:{click:t.btnclick3}},[t._v("购物车")]),n("span",{on:{click:t.btnclick4}},[t._v("我的")])])])],1)},s=[],c=n("09dd"),o={data:function(){return{}},components:{navhome:c["a"]},methods:{btnclick1:function(){this.$router.push("/home")},btnclick2:function(){this.$router.push("/cateorgy")},btnclick3:function(){this.$router.push("/shopcart")},btnclick4:function(){this.$router.push("/profile")}}},u=o,l=(n("7763"),n("2877")),d=Object(l["a"])(u,a,s,!1,null,"6f12a0e7",null),f=d.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"homeswiper"}},[n("div",{staticClass:"dis"},[n("Swiper",t._l(t.list,(function(t,e){return n("SwiperItem",{key:e},[n("img",{attrs:{src:t,alt:""}})])})),1)],1),n("div",{},[n("h2",[t._v("精品展示")]),n("div",{staticClass:"pict"},t._l(t.list1,(function(t,e){return n("img",{key:e,attrs:{src:t,alt:""}})})),0)])])},p=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"hy-swiper"}},[n("div",{staticClass:"swiper",on:{touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd}},[t._t("default")],2),t._t("indicator"),n("div",{staticClass:"indicator"},[t.showIndicator&&t.slideCount>1?t._t("indicator",t._l(t.slideCount,(function(e,i){return n("div",{key:i,staticClass:"indi-item",class:{active:i===t.currentIndex-1}})}))):t._e()],2)],2)},v=[],b=(n("a9e3"),{name:"Swiper",props:{interval:{type:Number,default:2e3},animDuration:{type:Number,default:300},moveRatio:{type:Number,default:.25},showIndicator:{type:Boolean,default:!0}},data:function(){return{slideCount:0,totalWidth:0,swiperStyle:{},currentIndex:1,scrolling:!1}},mounted:function(){var t=this;setTimeout((function(){t.handleDom(),t.startTimer()}),200)},methods:{startTimer:function(){var t=this;this.playTimer=window.setInterval((function(){t.currentIndex++,t.scrollContent(-t.currentIndex*t.totalWidth)}),this.interval)},stopTimer:function(){window.clearInterval(this.playTimer)},scrollContent:function(t){this.scrolling=!0,this.swiperStyle.transition="transform "+this.animDuration+"ms",this.setTransform(t),this.checkPosition(),this.scrolling=!1},checkPosition:function(){var t=this;window.setTimeout((function(){t.swiperStyle.transition="0ms",t.currentIndex>=t.slideCount+1?(t.currentIndex=1,t.setTransform(-t.currentIndex*t.totalWidth)):t.currentIndex<=0&&(t.currentIndex=t.slideCount,t.setTransform(-t.currentIndex*t.totalWidth)),t.$emit("transitionEnd",t.currentIndex-1)}),this.animDuration)},setTransform:function(t){this.swiperStyle.transform="translate3d(".concat(t,"px, 0, 0)"),this.swiperStyle["-webkit-transform"]="translate3d(".concat(t,"px), 0, 0"),this.swiperStyle["-ms-transform"]="translate3d(".concat(t,"px), 0, 0")},handleDom:function(){var t=document.querySelector(".swiper"),e=t.getElementsByClassName("slide");if(this.slideCount=e.length,this.slideCount>1){var n=e[0].cloneNode(!0),i=e[this.slideCount-1].cloneNode(!0);t.insertBefore(i,e[0]),t.appendChild(n),this.totalWidth=t.offsetWidth,this.swiperStyle=t.style}this.setTransform(-this.totalWidth)},touchStart:function(t){this.scrolling||(this.stopTimer(),this.startX=t.touches[0].pageX)},touchMove:function(t){this.currentX=t.touches[0].pageX,this.distance=this.currentX-this.startX;var e=-this.currentIndex*this.totalWidth,n=this.distance+e;this.setTransform(n)},touchEnd:function(t){var e=Math.abs(this.distance);0!==this.distance&&(this.distance>0&&e>this.totalWidth*this.moveRatio?this.currentIndex--:this.distance<0&&e>this.totalWidth*this.moveRatio&&this.currentIndex++,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer())},previous:function(){this.changeItem(-1)},next:function(){this.changeItem(1)},changeItem:function(t){this.stopTimer(),this.currentIndex+=t,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer()}}}),_=b,g=(n("78dd"),Object(l["a"])(_,m,v,!1,null,"79fc22c6",null)),x=g.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slide"},[t._t("default")],2)},I=[],k={name:"Slide"},w=k,C=(n("b14c"),Object(l["a"])(w,y,I,!1,null,"4935a4a7",null)),E=C.exports,N=n("4280"),S=n.n(N),T=n("2ae2"),$=n.n(T),j=n("c5bb"),A=n.n(j),O=n("3a64"),W=n.n(O),D=n("6e34"),X=n.n(D),M=n("9a7c"),R=n.n(M),F={data:function(){return{list:[S.a,$.a,A.a,W.a,X.a,R.a],list1:[S.a,$.a,A.a]}},components:{Swiper:x,SwiperItem:E},mounted:function(){}},q=F,P=(n("cf7e"),Object(l["a"])(q,h,p,!1,null,"55673491",null)),B=P.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"commed"}},[n("div",{staticClass:"pc"},[n("div",{},[n("h2",[t._v("分类")]),n("div",{staticClass:"bar"},t._l(t.tit,(function(e,i){return n("span",{key:i,on:{click:function(e){return t.dataclick(i)}}},[t._v(t._s(e.name))])})),0)])]),n("div",{staticClass:"phone"},t._l(t.tit,(function(e,i){return n("div",{key:i,staticClass:"bar",on:{click:function(e){return t.dataclick(i)}}},[n("img",{attrs:{src:e.img,alt:""}}),n("span",[t._v(t._s(e.name))])])})),0)])},G=[],L={data:function(){return{tit:[{name:"周边美食",img:"https://u2.0xiao.cn/3cfood/food/detail/image/a4bfcb3c21941589.png"},{name:"梦华苑",img:"https://u2.0xiao.cn/3cfood/food/detail/image/7bd353599b0b068e.png"},{name:"学致苑",img:"https://u2.0xiao.cn/3cfood/food/detail/image/9f355bb3386dd5ab.png"},{name:"学聚苑",img:"https://u2.0xiao.cn/3cfood/food/detail/image/07fe2f992f296749.png"},{name:"甜点奶茶",img:"https://u2.0xiao.cn/3cfood/food/detail/image/6feb1248698afd99.png"},{name:"快餐炒饭",img:"https://u2.0xiao.cn/3cfood/food/detail/image/218dffb521a910ba.png"}]}},methods:{dataclick:function(t){this.$router.push({path:"cateorgy",query:{dataID:t}})}}},J=L,U=(n("a007"),Object(l["a"])(J,V,G,!1,null,"1b249e29",null)),Y=U.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"love"}},[n("h2",[t._v("猜你喜欢")]),n("datlist",{attrs:{list:t.data,spec:"tian"}})],1)},H=[],K=(n("4de4"),n("0ac0")),Q={data:function(){return{data:[]}},created:function(){this.getData()},methods:{getData:function(){var t=this;this.$ajax.get("/data/redata","请求数据").then((function(e){var n=e.data.filter((function(t){return t.hasOwnProperty("tian")}));t.data=n}))}},components:{datlist:K["a"]}},Z=Q,tt=(n("d6a4"),Object(l["a"])(Z,z,H,!1,null,"411c7247",null)),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"botbar"}},[n("div",{staticClass:"box"},[n("table",[n("tr",t._l(t.list1,(function(e,i){return n("td",{key:i},[t._v(t._s(e))])})),0),n("tr",t._l(t.list2,(function(e,i){return n("td",{key:i},[t._v(t._s(e))])})),0),n("tr",t._l(t.list3,(function(e,i){return n("td",{key:i},[t._v(t._s(e))])})),0),n("tr",t._l(t.list4,(function(e,i){return n("td",{key:i},[t._v(t._s(e))])})),0)])]),t._m(0)])},it=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"con"},[n("li",[n("span",[t._v("京公网安备110105xxxxxxxxxxxx号")])]),n("li",[n("span",[t._v("食品经营许可证")]),n("span",[t._v("互联网信息服务许可证")])])])}],rt={data:function(){return{list1:["消费者服务热线","商家服务热线","投诉举报热线","公司信息","廉政举报"],list2:["外面消费者: 10109777","外卖&餐饮商家：10105557","违法和不良信息举报电话：4006018900","关于我们","廉政举报平台"],list3:["猫眼消费者: 10105335","","举报邮箱：11111111@qq.com","投资者关系",""],list4:["其他消费者: 10107888","","","加入我们",""]}}},at=rt,st=(n("fe70"),Object(l["a"])(at,nt,it,!1,null,"36fa619b",null)),ct=st.exports,ot={data:function(){return{}},components:{navbarhome:f,homeswiper:B,recommed:Y,galesslove:et,botbar:ct}},ut=ot,lt=(n("39c4"),Object(l["a"])(ut,i,r,!1,null,"459cec75",null));e["default"]=lt.exports},"78dd":function(t,e,n){"use strict";var i=n("a5cc"),r=n.n(i);r.a},7973:function(t,e,n){"use strict";var i=n("1b5f"),r=n.n(i);r.a},"7e66":function(t,e,n){},9753:function(t,e,n){},"9a7c":function(t,e,n){t.exports=n.p+"img/eat6.7eabceb1.jpg"},a007:function(t,e,n){"use strict";var i=n("bef3"),r=n.n(i);r.a},a1c4:function(t,e,n){},a5cc:function(t,e,n){},a9e3:function(t,e,n){"use strict";var i=n("83ab"),r=n("da84"),a=n("94ca"),s=n("6eeb"),c=n("5135"),o=n("c6b6"),u=n("7156"),l=n("c04e"),d=n("d039"),f=n("7c73"),h=n("241c").f,p=n("06cf").f,m=n("9bf2").f,v=n("58a8").trim,b="Number",_=r[b],g=_.prototype,x=o(f(g))==b,y=function(t){var e,n,i,r,a,s,c,o,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=v(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+u}for(a=u.slice(2),s=a.length,c=0;c<s;c++)if(o=a.charCodeAt(c),o<48||o>r)return NaN;return parseInt(a,i)}return+u};if(a(b,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var I,k=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof k&&(x?d((function(){g.valueOf.call(n)})):o(n)!=b)?u(new _(y(e)),n,k):y(e)},w=i?h(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;w.length>C;C++)c(_,I=w[C])&&!c(k,I)&&m(k,I,p(_,I));k.prototype=g,g.constructor=k,s(r,b,k)}},b14c:function(t,e,n){"use strict";var i=n("c3d7"),r=n.n(i);r.a},b727:function(t,e,n){var i=n("0366"),r=n("44ad"),a=n("7b0b"),s=n("50c4"),c=n("65f0"),o=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,l=4==t,d=6==t,f=5==t||d;return function(h,p,m,v){for(var b,_,g=a(h),x=r(g),y=i(p,m,3),I=s(x.length),k=0,w=v||c,C=e?w(h,I):n?w(h,0):void 0;I>k;k++)if((f||k in x)&&(b=x[k],_=y(b,k,g),t))if(e)C[k]=_;else if(_)switch(t){case 3:return!0;case 5:return b;case 6:return k;case 2:o.call(C,b)}else if(l)return!1;return d?-1:u||l?l:C}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},bef3:function(t,e,n){},c3d7:function(t,e,n){},c5bb:function(t,e,n){t.exports=n.p+"img/eat3.ee0ee3d1.jpg"},ccd0:function(t,e,n){},cf7e:function(t,e,n){"use strict";var i=n("9753"),r=n.n(i);r.a},d6a4:function(t,e,n){"use strict";var i=n("ccd0"),r=n.n(i);r.a},e8b5:function(t,e,n){var i=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==i(t)}},e94a:function(t,e,n){"use strict";var i=n("7e66"),r=n.n(i);r.a},fe70:function(t,e,n){"use strict";var i=n("5019"),r=n.n(i);r.a}}]);
//# sourceMappingURL=chunk-9e32bb6e.0da85004.js.map