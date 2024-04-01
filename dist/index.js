"use strict";var E=function(v,u){return function(){return u||v((u={exports:{}}).exports,u),u.exports}};var R=E(function(J,o){
var b=require('@stdlib/math-base-special-floor/dist'),g=128;function K(v,u,f,n,l){var a,M,q,c,s,e,p,m,t,S,w,i,r,O;if(a=l,v<8){for(w=0,i=0,O=0;O<v;O++)r=f[a],r===r&&(w+=r,i+=1),a+=n;return u[0]+=w,u[1]+=i,u}if(v<=g){for(M=0,q=0,c=0,s=0,e=0,p=0,m=0,t=0,i=0,S=v%8,O=0;O<v-S;O+=8)r=f[a],r===r&&(M+=r,i+=1),a+=n,r=f[a],r===r&&(q+=r,i+=1),a+=n,r=f[a],r===r&&(c+=r,i+=1),a+=n,r=f[a],r===r&&(s+=r,i+=1),a+=n,r=f[a],r===r&&(e+=r,i+=1),a+=n,r=f[a],r===r&&(p+=r,i+=1),a+=n,r=f[a],r===r&&(m+=r,i+=1),a+=n,r=f[a],r===r&&(t+=r,i+=1),a+=n;for(w=M+q+(c+s)+(e+p+(m+t)),O;O<v;O++)r=f[a],r===r&&(w+=r,i+=1),a+=n;return u[0]+=w,u[1]+=i,u}return i=b(v/2),i-=i%8,K(i,u,f,n,a)+K(v-i,u,f,n,a+i*n)}o.exports=K
});var P=E(function(Q,A){
var h=R(),y=[0,0];function j(v,u,f,n){var l,a,M,q,c,s,e,p,m;if(v<=0)return NaN;if(v===1||n===0)return e=f[0],e===e&&v-u>0?0:NaN;if(n<0?a=(1-v)*n:a=0,y[0]=0,y[1]=0,h(v,y,f,n,a),p=y[1],q=p-u,q<=0)return NaN;for(l=y[0]/p,M=0,c=0,m=0;m<v;m++)e=f[a],e===e&&(s=e-l,M+=s*s,c+=s),a+=n;return M/q-c/p*(c/q)}A.exports=j
});var B=E(function(T,W){
var k=R(),C=[0,0];function z(v,u,f,n,l){var a,M,q,c,s,e,p,m,t;if(v<=0)return NaN;if(v===1||n===0)return p=f[l],p===p&&v-u>0?0:NaN;if(C[0]=0,C[1]=0,k(v,C,f,n,l),m=C[1],c=m-u,c<=0)return NaN;for(a=C[0]/m,M=l,q=0,s=0,t=0;t<v;t++)p=f[M],p===p&&(e=p-a,q+=e*e,s+=e),M+=n;return q/c-s/m*(s/c)}W.exports=z
});var Z=E(function(U,L){
var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),I=P(),F=B();D(I,"ndarray",F);L.exports=I
});var G=Z();module.exports=G;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
