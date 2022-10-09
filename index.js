// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(e){"use strict";var r,t="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,o=Object.prototype,a=o.toString,i=o.__defineGetter__,u=o.__defineSetter__,f=o.__lookupGetter__,l=o.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?n:function(e,r,t){var n,c,p,_;if("object"!=typeof e||null===e||"[object Array]"===a.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(f.call(e,r)||l.call(e,r)?(n=e.__proto__,e.__proto__=o,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),p="get"in t,_="set"in t,c&&(p||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(e,r,t.get),_&&u&&u.call(e,r,t.set),e};var c=r,p=Math.floor;function _(e,r,t,n,o){var a,i,u,f,l,c,d,y,b,s,v,j,N,g;if(a=o,e<8){for(v=0,j=0,g=0;g<e;g++)(N=t[a])==N&&(v+=N,j+=1),a+=n;return r[0]+=v,r[1]+=j,r}if(e<=128){for(i=0,u=0,f=0,l=0,c=0,d=0,y=0,b=0,j=0,s=e%8,g=0;g<e-s;g+=8)(N=t[a])==N&&(i+=N,j+=1),(N=t[a+=n])==N&&(u+=N,j+=1),(N=t[a+=n])==N&&(f+=N,j+=1),(N=t[a+=n])==N&&(l+=N,j+=1),(N=t[a+=n])==N&&(c+=N,j+=1),(N=t[a+=n])==N&&(d+=N,j+=1),(N=t[a+=n])==N&&(y+=N,j+=1),(N=t[a+=n])==N&&(b+=N,j+=1),a+=n;for(v=i+u+(f+l)+(c+d+(y+b));g<e;g++)(N=t[a])==N&&(v+=N,j+=1),a+=n;return r[0]+=v,r[1]+=j,r}return j=p(e/2),_(j-=j%8,r,t,n,a)+_(e-j,r,t,n,a+j*n)}var d=[0,0];function y(e,r,t,n){var o,a,i,u,f,l,c,p,y;if(e<=0)return NaN;if(1===e||0===n)return(c=t[0])==c&&e-r>0?0:NaN;if(a=n<0?(1-e)*n:0,d[0]=0,d[1]=0,_(e,d,t,n,a),(u=(p=d[1])-r)<=0)return NaN;for(o=d[0]/p,i=0,f=0,y=0;y<e;y++)(c=t[a])==c&&(i+=(l=c-o)*l,f+=l),a+=n;return i/u-f/p*(f/u)}var b=[0,0];function s(e,r,t,n,o){var a,i,u,f,l,c,p,d,y;if(e<=0)return NaN;if(1===e||0===n)return(p=t[o])==p&&e-r>0?0:NaN;if(b[0]=0,b[1]=0,_(e,b,t,n,o),(f=(d=b[1])-r)<=0)return NaN;for(a=b[0]/d,i=o,u=0,l=0,y=0;y<e;y++)(p=t[i])==p&&(u+=(c=p-a)*c,l+=c),i+=n;return u/f-l/d*(l/f)}c(y,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:s}),e.default=y,e.ndarray=s,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).nanvariancepn={});
//# sourceMappingURL=index.js.map
