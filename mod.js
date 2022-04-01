// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var r=function(){return n&&"symbol"==typeof Symbol.toStringTag},t=Object.prototype.toString,o=t;var e=function(n){return o.call(n)},i=Object.prototype.hasOwnProperty;var a=function(n,r){return null!=n&&i.call(n,r)},u="function"==typeof Symbol?Symbol.toStringTag:"",f=a,c=u,y=t;var l=e,v=function(n){var r,t,o;if(null==n)return y.call(n);t=n[c],r=f(n,c);try{n[c]=void 0}catch(r){return y.call(n)}return o=y.call(n),r?n[c]=t:delete n[c],o},p=r()?v:l,A=p,U="function"==typeof Uint32Array;var w="function"==typeof Uint32Array?Uint32Array:null,b=function(n){return U&&n instanceof Uint32Array||"[object Uint32Array]"===A(n)},m=w;var d=function(){var n,r;if("function"!=typeof m)return!1;try{r=new m(r=[1,3.14,-3.14,4294967296,4294967297]),n=b(r)&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n};var h="function"==typeof Uint32Array?Uint32Array:void 0,N=function(){throw new Error("not implemented")},s=d()?h:N,F=p,S="function"==typeof Float64Array;var j="function"==typeof Float64Array?Float64Array:null,E=function(n){return S&&n instanceof Float64Array||"[object Float64Array]"===F(n)},g=j;var I=function(){var n,r;if("function"!=typeof g)return!1;try{r=new g([1,3.14,-3.14,NaN]),n=E(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n};var T="function"==typeof Float64Array?Float64Array:void 0,O=function(){throw new Error("not implemented")},x=I()?T:O,G=p,P="function"==typeof Uint8Array;var V="function"==typeof Uint8Array?Uint8Array:null,Y=function(n){return P&&n instanceof Uint8Array||"[object Uint8Array]"===G(n)},_=V;var k=function(){var n,r;if("function"!=typeof _)return!1;try{r=new _(r=[1,3.14,-3.14,256,257]),n=Y(r)&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n};var q="function"==typeof Uint8Array?Uint8Array:void 0,z=function(){throw new Error("not implemented")},B=k()?q:z,C=p,D="function"==typeof Uint16Array;var H="function"==typeof Uint16Array?Uint16Array:null,J=function(n){return D&&n instanceof Uint16Array||"[object Uint16Array]"===C(n)},K=H;var L=function(){var n,r;if("function"!=typeof K)return!1;try{r=new K(r=[1,3.14,-3.14,65536,65537]),n=J(r)&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n};var M,Q="function"==typeof Uint16Array?Uint16Array:void 0,R=function(){throw new Error("not implemented")},W={uint16:L()?Q:R,uint8:B};(M=new W.uint16(1))[0]=4660;var X=52===new W.uint8(M.buffer)[0],Z=s,$=!0===X?1:0,nn=new x(1),rn=new Z(nn.buffer);var tn=function(n){return nn[0]=n,rn[$]},on=s,en=!0===X?1:0,an=new x(1),un=new on(an.buffer);var fn=function(n,r){return an[0]=n,un[en]=r>>>0,an[0]},cn=fn;var yn=function(n){return n!=n},ln=Number.NEGATIVE_INFINITY;var vn=tn,pn=cn,An=yn,Un=ln,wn=function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)},bn=function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))},mn=.6931471803691238,dn=1.9082149292705877e-10;var hn=function(n){var r,t,o,e,i,a,u,f,c,y,l;return 0===n?Un:An(n)||n<0?NaN:(e=0,(t=vn(n))<1048576&&(e-=54,t=vn(n*=0x40000000000000)),t>=2146435072?n+n:(e+=(t>>20)-1023|0,e+=(u=(t&=1048575)+614244&1048576|0)>>20|0,a=(n=pn(n,t|1072693248^u))-1,(1048575&2+t)<3?0===a?0===e?0:e*mn+e*dn:(i=a*a*(.5-.3333333333333333*a),0===e?a-i:e*mn-(i-e*dn-a)):(u=t-398458|0,f=440401-t|0,o=(y=(l=(c=a/(2+a))*c)*l)*wn(y),i=l*bn(y)+o,(u|=f)>0?(r=.5*a*a,0===e?a-(r-c*(r+i)):e*mn-(r-(c*(r+i)+e*dn)-a)):0===e?a-c*(a-i):e*mn-(c*(a-i)-e*dn-a))))};var Nn=function(n,r){return n>=r?NaN:hn(r-n)};export{Nn as default};
//# sourceMappingURL=mod.js.map
