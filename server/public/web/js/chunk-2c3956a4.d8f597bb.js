(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c3956a4"],{"057f":function(t,e,n){var r=n("fc6a"),i=n("241c").f,o={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return i(t)}catch(e){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==o.call(t)?s(t):i(r(t))}},"13d5":function(t,e,n){"use strict";var r=n("23e7"),i=n("d58f").left,o=n("a640"),c=n("ae40"),s=o("reduce"),a=c("reduce",{1:0});r({target:"Array",proto:!0,forced:!s||!a},{reduce:function(t){return i(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"159b":function(t,e,n){var r=n("da84"),i=n("fdbc"),o=n("17c2"),c=n("9112");for(var s in i){var a=r[s],u=a&&a.prototype;if(u&&u.forEach!==o)try{c(u,"forEach",o)}catch(f){u.forEach=o}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,i=n("a640"),o=n("ae40"),c=i("forEach"),s=o("forEach");t.exports=c&&s?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"25f0":function(t,e,n){"use strict";var r=n("6eeb"),i=n("825a"),o=n("d039"),c=n("ad6d"),s="toString",a=RegExp.prototype,u=a[s],f=o((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),l=u.name!=s;(f||l)&&r(RegExp.prototype,s,(function(){var t=i(this),e=String(t.source),n=t.flags,r=String(void 0===n&&t instanceof RegExp&&!("flags"in a)?c.call(t):n);return"/"+e+"/"+r}),{unsafe:!0})},2909:function(t,e,n){"use strict";function r(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("e260"),n("d3b7"),n("25f0"),n("3ca3"),n("ddb0");function i(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(t){return r(t)||i(t)||o()}n.d(e,"a",(function(){return c}))},"31ef":function(t,e,n){},"362f":function(t,e,n){"use strict";var r=n("8f83"),i=n.n(r);i.a},"3ca3":function(t,e,n){"use strict";var r=n("6547").charAt,i=n("69f3"),o=n("7dd0"),c="String Iterator",s=i.set,a=i.getterFor(c);o(String,"String",(function(t){s(this,{type:c,string:String(t),index:0})}),(function(){var t,e=a(this),n=e.string,i=e.index;return i>=n.length?{value:void 0,done:!0}:(t=r(n,i),e.index+=t.length,{value:t,done:!1})}))},4160:function(t,e,n){"use strict";var r=n("23e7"),i=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"4df4":function(t,e,n){"use strict";var r=n("0366"),i=n("7b0b"),o=n("9bdd"),c=n("e95a"),s=n("50c4"),a=n("8418"),u=n("35a1");t.exports=function(t){var e,n,f,l,d,b,p=i(t),h="function"==typeof this?this:Array,v=arguments.length,m=v>1?arguments[1]:void 0,g=void 0!==m,y=u(p),O=0;if(g&&(m=r(m,v>2?arguments[2]:void 0,2)),void 0==y||h==Array&&c(y))for(e=s(p.length),n=new h(e);e>O;O++)b=g?m(p[O],O):p[O],a(n,O,b);else for(l=y.call(p),d=l.next,n=new h;!(f=d.call(l)).done;O++)b=g?o(l,m,[f.value,O],!0):f.value,a(n,O,b);return n.length=O,n}},"4e88":function(t,e,n){"use strict";var r=n("cad6"),i=n.n(r);i.a},5530:function(t,e,n){"use strict";n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}n.d(e,"a",(function(){return o}))},5790:function(t,e,n){},6547:function(t,e,n){var r=n("a691"),i=n("1d80"),o=function(t){return function(e,n){var o,c,s=String(i(e)),a=r(n),u=s.length;return a<0||a>=u?t?"":void 0:(o=s.charCodeAt(a),o<55296||o>56319||a+1===u||(c=s.charCodeAt(a+1))<56320||c>57343?t?s.charAt(a):o:t?s.slice(a,a+2):c-56320+(o-55296<<10)+65536)}};t.exports={codeAt:o(!1),charAt:o(!0)}},7257:function(t,e,n){"use strict";var r=n("be0f"),i=n.n(r);i.a},"746f":function(t,e,n){var r=n("428f"),i=n("5135"),o=n("e538"),c=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||c(e,t,{value:o.f(t)})}},8418:function(t,e,n){"use strict";var r=n("c04e"),i=n("9bf2"),o=n("5c6c");t.exports=function(t,e,n){var c=r(e);c in t?i.f(t,c,o(0,n)):t[c]=n}},8943:function(t,e,n){"use strict";var r=n("31ef"),i=n.n(r);i.a},"8f83":function(t,e,n){},a4d3:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("d066"),c=n("c430"),s=n("83ab"),a=n("4930"),u=n("fdbf"),f=n("d039"),l=n("5135"),d=n("e8b5"),b=n("861d"),p=n("825a"),h=n("7b0b"),v=n("fc6a"),m=n("c04e"),g=n("5c6c"),y=n("7c73"),O=n("df75"),S=n("241c"),w=n("057f"),k=n("7418"),j=n("06cf"),_=n("9bf2"),$=n("d1e7"),x=n("9112"),E=n("6eeb"),C=n("5692"),L=n("f772"),P=n("d012"),A=n("90e3"),T=n("b622"),D=n("e538"),N=n("746f"),M=n("d44e"),R=n("69f3"),V=n("b727").forEach,G=L("hidden"),F="Symbol",H="prototype",I=T("toPrimitive"),J=R.set,U=R.getterFor(F),q=Object[H],B=i.Symbol,Q=o("JSON","stringify"),W=j.f,z=_.f,K=w.f,X=$.f,Y=C("symbols"),Z=C("op-symbols"),tt=C("string-to-symbol-registry"),et=C("symbol-to-string-registry"),nt=C("wks"),rt=i.QObject,it=!rt||!rt[H]||!rt[H].findChild,ot=s&&f((function(){return 7!=y(z({},"a",{get:function(){return z(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=W(q,e);r&&delete q[e],z(t,e,n),r&&t!==q&&z(q,e,r)}:z,ct=function(t,e){var n=Y[t]=y(B[H]);return J(n,{type:F,tag:t,description:e}),s||(n.description=e),n},st=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof B},at=function(t,e,n){t===q&&at(Z,e,n),p(t);var r=m(e,!0);return p(n),l(Y,r)?(n.enumerable?(l(t,G)&&t[G][r]&&(t[G][r]=!1),n=y(n,{enumerable:g(0,!1)})):(l(t,G)||z(t,G,g(1,{})),t[G][r]=!0),ot(t,r,n)):z(t,r,n)},ut=function(t,e){p(t);var n=v(e),r=O(n).concat(pt(n));return V(r,(function(e){s&&!lt.call(n,e)||at(t,e,n[e])})),t},ft=function(t,e){return void 0===e?y(t):ut(y(t),e)},lt=function(t){var e=m(t,!0),n=X.call(this,e);return!(this===q&&l(Y,e)&&!l(Z,e))&&(!(n||!l(this,e)||!l(Y,e)||l(this,G)&&this[G][e])||n)},dt=function(t,e){var n=v(t),r=m(e,!0);if(n!==q||!l(Y,r)||l(Z,r)){var i=W(n,r);return!i||!l(Y,r)||l(n,G)&&n[G][r]||(i.enumerable=!0),i}},bt=function(t){var e=K(v(t)),n=[];return V(e,(function(t){l(Y,t)||l(P,t)||n.push(t)})),n},pt=function(t){var e=t===q,n=K(e?Z:v(t)),r=[];return V(n,(function(t){!l(Y,t)||e&&!l(q,t)||r.push(Y[t])})),r};if(a||(B=function(){if(this instanceof B)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=A(t),n=function(t){this===q&&n.call(Z,t),l(this,G)&&l(this[G],e)&&(this[G][e]=!1),ot(this,e,g(1,t))};return s&&it&&ot(q,e,{configurable:!0,set:n}),ct(e,t)},E(B[H],"toString",(function(){return U(this).tag})),E(B,"withoutSetter",(function(t){return ct(A(t),t)})),$.f=lt,_.f=at,j.f=dt,S.f=w.f=bt,k.f=pt,D.f=function(t){return ct(T(t),t)},s&&(z(B[H],"description",{configurable:!0,get:function(){return U(this).description}}),c||E(q,"propertyIsEnumerable",lt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:B}),V(O(nt),(function(t){N(t)})),r({target:F,stat:!0,forced:!a},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var n=B(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),r({target:"Object",stat:!0,forced:!a,sham:!s},{create:ft,defineProperty:at,defineProperties:ut,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:bt,getOwnPropertySymbols:pt}),r({target:"Object",stat:!0,forced:f((function(){k.f(1)}))},{getOwnPropertySymbols:function(t){return k.f(h(t))}}),Q){var ht=!a||f((function(){var t=B();return"[null]"!=Q([t])||"{}"!=Q({a:t})||"{}"!=Q(Object(t))}));r({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,n){var r,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(r=e,(b(e)||void 0!==t)&&!st(t))return d(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!st(e))return e}),i[1]=e,Q.apply(null,i)}})}B[H][I]||x(B[H],I,B[H].valueOf),M(B,F),P[G]=!0},a630:function(t,e,n){var r=n("23e7"),i=n("4df4"),o=n("1c7e"),c=!o((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:c},{from:i})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b64b:function(t,e,n){var r=n("23e7"),i=n("7b0b"),o=n("df75"),c=n("d039"),s=c((function(){o(1)}));r({target:"Object",stat:!0,forced:s},{keys:function(t){return o(i(t))}})},be0f:function(t,e,n){},c723:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"shopcart"}},[n("h2",[t._v("购物车")]),n("div",{staticClass:"pc"},[n("goodlist")],1),n("div",{staticClass:"phone"},[n("scroll",{staticClass:"content"},[n("goodlist")],1)],1),n("botprice")],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"goodlist"}},t._l(t.goodlist,(function(t,e){return n("div",{key:e,staticClass:"item"},[n("goodlistitem",{attrs:{item:t}})],1)})),0)},c=[],s=n("5530"),a=n("2f62"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"goodlistitem"}},[n("div",{staticClass:"con"},[n("shopbutton",{attrs:{isActive:t.item.check},on:{btnnclick:t.btnclick}}),n("img",{attrs:{src:t.item.item_img,alt:""}}),n("span",{staticClass:"tit"},[t._v(t._s(t.item.item_title))]),n("span",{staticClass:"price"},[n("span",{class:{iscount:void 0!=t.item.discount}},[t._v(" 单价:"+t._s(t.item.item_price)+" ")]),void 0!=t.item.discount?n("span",[t._v("折后"+t._s(t.item.item_price*Number("0."+t.item.discount))+"元")]):t._e()]),n("span",{staticClass:"count"},[t._v(" 数量:"+t._s(t.item.count)+" "),n("button",{on:{click:t.btnclick1}},[t._v("+")]),n("button",{on:{click:t.btnclick2}},[t._v("-")])]),n("span",{staticClass:"out",on:{click:function(e){return t.btnout(t.item.item_title)}}},[t._v("移除")])],1)])},f=[],l=(n("4de4"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"botton"},[n("span",{class:{active:t.isActive},on:{click:t.btnclick}})])}),d=[],b={data:function(){return{}},props:{isActive:{type:Boolean,default:!1}},methods:{btnclick:function(){console.log("222222"),this.$emit("btnnclick"),this.$emit("qrxrbtn")}}},p=b,h=(n("7257"),n("2877")),v=Object(h["a"])(p,l,d,!1,null,"3e66ad81",null),m=v.exports,g={props:{item:{type:Object,default:function(){return{}}}},data:function(){return{}},components:{shopbutton:m},methods:{btnclick:function(){this.$forceUpdate(),this.item.check=!this.item.check},btnclick1:function(){this.$forceUpdate(),this.item.count+=1},btnclick2:function(){this.$forceUpdate(),1==this.item.count?this.$toast.show("最少选择一个哦",1e3):this.item.count-=1},btnout:function(t){this.$forceUpdate(),this.$store.state.goodlist=this.$store.state.goodlist.filter((function(e){return e.item_title!=t}))}}},y=g,O=(n("362f"),Object(h["a"])(y,u,f,!1,null,"76705ce8",null)),S=O.exports,w={computed:Object(s["a"])({},Object(a["b"])(["goodlist"])),components:{goodlistitem:S},methods:{}},k=w,j=(n("8943"),Object(h["a"])(k,o,c,!1,null,"e2bf6ab4",null)),_=j.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clear-fix",attrs:{id:"price"}},[n("span",{staticClass:"jxsr",on:{click:t.btnfrom}},[t._v("提交订单")]),n("display",{directives:[{name:"show",rawName:"v-show",value:t.act,expression:"act"}],attrs:{typenumber:t.typenumber(),price:t.price()},on:{backup:t.backup,backuout:t.backuout}})],1)},x=[],E=(n("13d5"),n("a9e3"),n("2909")),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"display"}},[n("div",{staticClass:"from"},[n("div",{staticClass:"h3"},[t._v("结算")]),n("span",{staticClass:"type"},[t._v("总类数: "+t._s(t.typenumber)+"种")]),n("span",{staticClass:"price"},[t._v("总价格: "+t._s(t.price)+"元")]),n("button",{on:{click:t.backup}},[t._v("退出")]),n("button",{on:{click:t.backuout}},[t._v("结算")])])])},L=[],P={props:{typenumber:{type:Number,default:0},price:{type:Number,default:""}},methods:{backup:function(){this.$emit("backup")},backuout:function(){this.$emit("backuout")}}},A=P,T=(n("4e88"),Object(h["a"])(A,C,L,!1,null,"ef5b49dc",null)),D=T.exports,N={data:function(){return{act:!1}},components:{shopbutton:m,display:D},computed:Object(s["a"])({},Object(a["b"])(["goodlist"])),methods:{btnfrom:function(){this.act=!0},backup:function(){this.act=!1},typenumber:function(){return this.$store.state.goodlist.filter((function(t){return t.check})).length},price:function(){return this.$store.state.goodlist.filter((function(t){return t.check})).reduce((function(t,e){return void 0==e.discount?t+e.item_price*e.count:t+e.item_price*Number("0."+e.discount)*e.count}),0)},backuout:function(){var t=this;if(null==this.$store.state.user.tel)this.$toast.show("请先登录在进行购买",2e3),setTimeout((function(){t.$router.push("/profile/login")}),2200);else if(0==this.typenumber())this.$toast.show("请先添加或者选择食品",2e3),setTimeout((function(){t.act=!1}),2300);else{this.$toast.show("结算成功",2e3),setTimeout((function(){t.act=!1}),2300);var e={};e.tel=this.$store.state.user.tel,e.listcopy=[],e.listcopy=Object(E["a"])(this.goodlist);var n=new Date;e.time=n.getMonth()+1+"/"+n.getDate()+" "+n.getHours()+"."+n.getMinutes(),this.$ajax.post("/users/addolder",e).then((function(e){t.$toast.show(e.data,2e3)})),setTimeout((function(){t.$store.state.goodlist=[]}),2200)}}}},M=N,R=(n("dc8b"),Object(h["a"])(M,$,x,!1,null,"e9b67ff6",null)),V=R.exports,G=n("9fb0"),F={components:{goodlist:_,botprice:V,scroll:G["a"]},methods:{}},H=F,I=(n("f2d1"),Object(h["a"])(H,r,i,!1,null,"dc11375a",null));e["default"]=I.exports},cad6:function(t,e,n){},ccaf:function(t,e,n){},d28b:function(t,e,n){var r=n("746f");r("iterator")},d58f:function(t,e,n){var r=n("1c0b"),i=n("7b0b"),o=n("44ad"),c=n("50c4"),s=function(t){return function(e,n,s,a){r(n);var u=i(e),f=o(u),l=c(u.length),d=t?l-1:0,b=t?-1:1;if(s<2)while(1){if(d in f){a=f[d],d+=b;break}if(d+=b,t?d<0:l<=d)throw TypeError("Reduce of empty array with no initial value")}for(;t?d>=0:l>d;d+=b)d in f&&(a=n(a,f[d],d,u));return a}};t.exports={left:s(!1),right:s(!0)}},dbb4:function(t,e,n){var r=n("23e7"),i=n("83ab"),o=n("56ef"),c=n("fc6a"),s=n("06cf"),a=n("8418");r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,n,r=c(t),i=s.f,u=o(r),f={},l=0;while(u.length>l)n=i(r,e=u[l++]),void 0!==n&&a(f,e,n);return f}})},dc8b:function(t,e,n){"use strict";var r=n("ccaf"),i=n.n(r);i.a},ddb0:function(t,e,n){var r=n("da84"),i=n("fdbc"),o=n("e260"),c=n("9112"),s=n("b622"),a=s("iterator"),u=s("toStringTag"),f=o.values;for(var l in i){var d=r[l],b=d&&d.prototype;if(b){if(b[a]!==f)try{c(b,a,f)}catch(h){b[a]=f}if(b[u]||c(b,u,l),i[l])for(var p in o)if(b[p]!==o[p])try{c(b,p,o[p])}catch(h){b[p]=o[p]}}}},e01a:function(t,e,n){"use strict";var r=n("23e7"),i=n("83ab"),o=n("da84"),c=n("5135"),s=n("861d"),a=n("9bf2").f,u=n("e893"),f=o.Symbol;if(i&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};u(d,f);var b=d.prototype=f.prototype;b.constructor=d;var p=b.toString,h="Symbol(test)"==String(f("test")),v=/^Symbol\((.*)\)[^)]+$/;a(b,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=p.call(t);if(c(l,t))return"";var n=h?e.slice(7,-1):e.replace(v,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:d})}},e439:function(t,e,n){var r=n("23e7"),i=n("d039"),o=n("fc6a"),c=n("06cf").f,s=n("83ab"),a=i((function(){c(1)})),u=!s||a;r({target:"Object",stat:!0,forced:u,sham:!s},{getOwnPropertyDescriptor:function(t,e){return c(o(t),e)}})},e538:function(t,e,n){var r=n("b622");e.f=r},f2d1:function(t,e,n){"use strict";var r=n("5790"),i=n.n(r);i.a},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-2c3956a4.d8f597bb.js.map