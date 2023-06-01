// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var r=Object.prototype.toString;var t=Object.prototype.hasOwnProperty;var o="function"==typeof Symbol?Symbol.toStringTag:"";var e=n&&"symbol"==typeof Symbol.toStringTag?function(n){var e,a,i,f,u;if(null==n)return r.call(n);a=n[o],u=o,e=null!=(f=n)&&t.call(f,u);try{n[o]=void 0}catch(t){return r.call(n)}return i=r.call(n),e?n[o]=a:delete n[o],i}:function(n){return r.call(n)},a="function"==typeof Uint32Array;var i="function"==typeof Uint32Array?Uint32Array:null;var f,u="function"==typeof Uint32Array?Uint32Array:void 0;f=function(){var n,r,t;if("function"!=typeof i)return!1;try{r=new i(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,n=(a&&t instanceof Uint32Array||"[object Uint32Array]"===e(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?u:function(){throw new Error("not implemented")};var y=f,c="function"==typeof Float64Array;var l="function"==typeof Float64Array?Float64Array:null;var v,p="function"==typeof Float64Array?Float64Array:void 0;v=function(){var n,r,t;if("function"!=typeof l)return!1;try{r=new l([1,3.14,-3.14,NaN]),t=r,n=(c&&t instanceof Float64Array||"[object Float64Array]"===e(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n}()?p:function(){throw new Error("not implemented")};var A=v,U="function"==typeof Uint8Array;var w="function"==typeof Uint8Array?Uint8Array:null;var b,m="function"==typeof Uint8Array?Uint8Array:void 0;b=function(){var n,r,t;if("function"!=typeof w)return!1;try{r=new w(r=[1,3.14,-3.14,256,257]),t=r,n=(U&&t instanceof Uint8Array||"[object Uint8Array]"===e(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?m:function(){throw new Error("not implemented")};var d=b,h="function"==typeof Uint16Array;var N="function"==typeof Uint16Array?Uint16Array:null;var s,F="function"==typeof Uint16Array?Uint16Array:void 0;s=function(){var n,r,t;if("function"!=typeof N)return!1;try{r=new N(r=[1,3.14,-3.14,65536,65537]),t=r,n=(h&&t instanceof Uint16Array||"[object Uint16Array]"===e(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?F:function(){throw new Error("not implemented")};var S,j={uint16:s,uint8:d};(S=new j.uint16(1))[0]=4660;var E=52===new j.uint8(S.buffer)[0],g=!0===E?1:0,I=new A(1),T=new y(I.buffer);function O(n){return I[0]=n,T[g]}var x=!0===E?1:0,G=new A(1),P=new y(G.buffer);var V=Number.NEGATIVE_INFINITY;var Y=.6931471803691238,_=1.9082149292705877e-10;function k(n){var r,t,o,e,a,i,f,u,y,c,l,v;return 0===n?V:function(n){return n!=n}(n)||n<0?NaN:(a=0,(t=O(n))<1048576&&(a-=54,t=O(n*=0x40000000000000)),t>=2146435072?n+n:(a+=(t>>20)-1023|0,a+=(u=(t&=1048575)+614244&1048576|0)>>20|0,f=(n=function(n,r){return G[0]=n,P[x]=r>>>0,G[0]}(n,t|1072693248^u))-1,(1048575&2+t)<3?0===f?0===a?0:a*Y+a*_:(i=f*f*(.5-.3333333333333333*f),0===a?f-i:a*Y-(i-a*_-f)):(u=t-398458|0,y=440401-t|0,e=(l=(v=(c=f/(2+f))*c)*v)*function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)}(l),o=v*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))}(l),i=o+e,(u|=y)>0?(r=.5*f*f,0===a?f-(r-c*(r+i)):a*Y-(r-(c*(r+i)+a*_)-f)):0===a?f-c*(f-i):a*Y-(c*(f-i)-a*_-f))))}function q(n,r){return n>=r?NaN:k(r-n)}export{q as default};
//# sourceMappingURL=mod.js.map
