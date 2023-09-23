// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var r=t();var n=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;var a="function"==typeof Symbol?Symbol:void 0,e="function"==typeof a?a.toStringTag:"";var i=r&&"symbol"==typeof Symbol.toStringTag?function(t){var r,a,i,c,l;if(null==t)return n.call(t);a=t[e],l=e,r=null!=(c=t)&&o.call(c,l);try{t[e]=void 0}catch(r){return n.call(t)}return i=n.call(t),r?t[e]=a:delete t[e],i}:function(t){return n.call(t)},c="function"==typeof Uint32Array;var l="function"==typeof Uint32Array?Uint32Array:null;var u,f="function"==typeof Uint32Array?Uint32Array:void 0;u=function(){var t,r,n;if("function"!=typeof l)return!1;try{r=new l(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(c&&n instanceof Uint32Array||"[object Uint32Array]"===i(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?f:function(){throw new Error("not implemented")};var y=u,p=t();var v=Object.prototype.toString;var A=Object.prototype.hasOwnProperty;var b="function"==typeof a?a.toStringTag:"";var m=p&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,o,a,e;if(null==t)return v.call(t);n=t[b],e=b,r=null!=(a=t)&&A.call(a,e);try{t[b]=void 0}catch(r){return v.call(t)}return o=v.call(t),r?t[b]=n:delete t[b],o}:function(t){return v.call(t)},w="function"==typeof Float64Array;var g="function"==typeof Float64Array?Float64Array:null;var S,d="function"==typeof Float64Array?Float64Array:void 0;S=function(){var t,r,n;if("function"!=typeof g)return!1;try{r=new g([1,3.14,-3.14,NaN]),n=r,t=(w&&n instanceof Float64Array||"[object Float64Array]"===m(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?d:function(){throw new Error("not implemented")};var U=S,h=t();var s=Object.prototype.toString;var j=Object.prototype.hasOwnProperty;var F="function"==typeof a?a.toStringTag:"";var O=h&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,o,a,e;if(null==t)return s.call(t);n=t[F],e=F,r=null!=(a=t)&&j.call(a,e);try{t[F]=void 0}catch(r){return s.call(t)}return o=s.call(t),r?t[F]=n:delete t[F],o}:function(t){return s.call(t)},N="function"==typeof Uint8Array;var T="function"==typeof Uint8Array?Uint8Array:null;var E,P="function"==typeof Uint8Array?Uint8Array:void 0;E=function(){var t,r,n;if("function"!=typeof T)return!1;try{r=new T(r=[1,3.14,-3.14,256,257]),n=r,t=(N&&n instanceof Uint8Array||"[object Uint8Array]"===O(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?P:function(){throw new Error("not implemented")};var I=E,x=t();var G=Object.prototype.toString;var V=Object.prototype.hasOwnProperty;var Y="function"==typeof a?a.toStringTag:"";var _=x&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,o,a,e;if(null==t)return G.call(t);n=t[Y],e=Y,r=null!=(a=t)&&V.call(a,e);try{t[Y]=void 0}catch(r){return G.call(t)}return o=G.call(t),r?t[Y]=n:delete t[Y],o}:function(t){return G.call(t)},k="function"==typeof Uint16Array;var q="function"==typeof Uint16Array?Uint16Array:null;var z,B="function"==typeof Uint16Array?Uint16Array:void 0;z=function(){var t,r,n;if("function"!=typeof q)return!1;try{r=new q(r=[1,3.14,-3.14,65536,65537]),n=r,t=(k&&n instanceof Uint16Array||"[object Uint16Array]"===_(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?B:function(){throw new Error("not implemented")};var C,D={uint16:z,uint8:I};(C=new D.uint16(1))[0]=4660;var H=52===new D.uint8(C.buffer)[0],J=!0===H?1:0,K=new U(1),L=new y(K.buffer);function M(t){return K[0]=t,L[J]}var Q=t();var R=Object.prototype.toString;var W=Object.prototype.hasOwnProperty;var X="function"==typeof a?a.toStringTag:"";var Z=Q&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,o,a,e;if(null==t)return R.call(t);n=t[X],e=X,r=null!=(a=t)&&W.call(a,e);try{t[X]=void 0}catch(r){return R.call(t)}return o=R.call(t),r?t[X]=n:delete t[X],o}:function(t){return R.call(t)},$="function"==typeof Float64Array;var tt="function"==typeof Float64Array?Float64Array:null;var rt,nt="function"==typeof Float64Array?Float64Array:void 0;rt=function(){var t,r,n;if("function"!=typeof tt)return!1;try{r=new tt([1,3.14,-3.14,NaN]),n=r,t=($&&n instanceof Float64Array||"[object Float64Array]"===Z(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?nt:function(){throw new Error("not implemented")};var ot=!0===H?1:0,at=new rt(1),et=new y(at.buffer);var it=Number.NEGATIVE_INFINITY;var ct=.6931471803691238,lt=1.9082149292705877e-10;function ut(t){var r,n,o,a,e,i,c,l,u,f,y,p;return 0===t?it:function(t){return t!=t}(t)||t<0?NaN:(e=0,(n=M(t))<1048576&&(e-=54,n=M(t*=0x40000000000000)),n>=2146435072?t+t:(e+=(n>>20)-1023|0,e+=(l=(n&=1048575)+614244&1048576|0)>>20|0,c=(t=function(t,r){return at[0]=t,et[ot]=r>>>0,at[0]}(t,n|1072693248^l))-1,(1048575&2+n)<3?0===c?0===e?0:e*ct+e*lt:(i=c*c*(.5-.3333333333333333*c),0===e?c-i:e*ct-(i-e*lt-c)):(l=n-398458|0,u=440401-n|0,a=(y=(p=(f=c/(2+c))*f)*p)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(y),o=p*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(y),i=o+a,(l|=u)>0?(r=.5*c*c,0===e?c-(r-f*(r+i)):e*ct-(r-(f*(r+i)+e*lt)-c)):0===e?c-f*(c-i):e*ct-(f*(c-i)-e*lt-c))))}function ft(t,r){return t>=r?NaN:ut(r-t)}export{ft as default};
//# sourceMappingURL=mod.js.map
