// https://github.com/vasturiano/d3-force-3d v2.0.1 Copyright 2018 Vasco Asturiano
!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("d3-binarytree"),require("d3-quadtree"),require("d3-dispatch"),require("d3-timer")):"function"==typeof define&&define.amd?define(["exports","d3-binarytree","d3-quadtree","d3-dispatch","d3-timer"],t):t(n.d3=n.d3||{},n.d3,n.d3,n.d3,n.d3,n.d3)}(this,function(n,t,r,e,i,u){"use strict";function o(n){return function(){return n}}function f(){return 1e-6*(Math.random()-.5)}function a(n){return n.x+n.vx}function c(n){return n.y+n.vy}function l(n){return n.z+n.vz}function h(n){return n.index}function v(n,t){var r=n.get(t);if(!r)throw new Error("missing: "+t);return r}var y=3;function d(n){return n.x}function s(n){return n.y}function g(n){return n.z}var x=10,z=Math.PI*(3-Math.sqrt(5)),p=Math.PI/24;n.forceCenter=function(n,t,r){var e;function i(){var i,u,o=e.length,f=0,a=0,c=0;for(i=0;i<o;++i)f+=(u=e[i]).x||0,a+=u.y||0,c+=u.z||0;for(f=f/o-n,a=a/o-t,c=c/o-r,i=0;i<o;++i)u=e[i],f&&(u.x-=f),a&&(u.y-=a),c&&(u.z-=c)}return null==n&&(n=0),null==t&&(t=0),null==r&&(r=0),i.initialize=function(n){e=n},i.x=function(t){return arguments.length?(n=+t,i):n},i.y=function(n){return arguments.length?(t=+n,i):t},i.z=function(n){return arguments.length?(r=+n,i):r},i},n.forceCollide=function(n){var i,u,h,v=1,y=1;function d(){for(var n,o,d,g,x,z,p,M,N=i.length,w=0;w<y;++w)for(o=(1===u?t.binarytree(i,a):2===u?r.quadtree(i,a,c):3===u?e.octree(i,a,c,l):null).visitAfter(s),n=0;n<N;++n)d=i[n],p=h[d.index],M=p*p,g=d.x+d.vx,u>1&&(x=d.y+d.vy),u>2&&(z=d.z+d.vz),o.visit(q);function q(n,t,r,e,i,o,a){var c=[t,r,e,i,o,a],l=c[0],h=c[1],y=c[2],s=c[u],N=c[u+1],w=c[u+2],q=n.data,A=n.r,m=p+A;if(!q)return l>g+m||s<g-m||u>1&&(h>x+m||N<x-m)||u>2&&(y>z+m||w<z-m);if(q.index>d.index){var b=g-q.x-q.vx,k=u>1?x-q.y-q.vy:0,j=u>2?z-q.z-q.vz:0,E=b*b+k*k+j*j;E<m*m&&(0===b&&(E+=(b=f())*b),u>1&&0===k&&(E+=(k=f())*k),u>2&&0===j&&(E+=(j=f())*j),E=(m-(E=Math.sqrt(E)))/E*v,d.vx+=(b*=E)*(m=(A*=A)/(M+A)),u>1&&(d.vy+=(k*=E)*m),u>2&&(d.vz+=(j*=E)*m),q.vx-=b*(m=1-m),u>1&&(q.vy-=k*m),u>2&&(q.vz-=j*m))}}}function s(n){if(n.data)return n.r=h[n.data.index];for(var t=n.r=0;t<Math.pow(2,u);++t)n[t]&&n[t].r>n.r&&(n.r=n[t].r)}function g(){if(i){var t,r,e=i.length;for(h=new Array(e),t=0;t<e;++t)r=i[t],h[r.index]=+n(r,t,i)}}return"function"!=typeof n&&(n=o(null==n?1:+n)),d.initialize=function(n,t){i=n,u=t,g()},d.iterations=function(n){return arguments.length?(y=+n,d):y},d.strength=function(n){return arguments.length?(v=+n,d):v},d.radius=function(t){return arguments.length?(n="function"==typeof t?t:o(+t),g(),d):n},d},n.forceLink=function(n){var t,r,e,i,u,a,c=h,l=function(n){return 1/Math.min(u[n.source.index],u[n.target.index])},y=o(30),d=1;function s(e){for(var u=0,o=n.length;u<d;++u)for(var c,l,h,v,y,s=0,g=0,x=0,z=0;s<o;++s)l=(c=n[s]).source,g=(h=c.target).x+h.vx-l.x-l.vx||f(),i>1&&(x=h.y+h.vy-l.y-l.vy||f()),i>2&&(z=h.z+h.vz-l.z-l.vz||f()),g*=v=((v=Math.sqrt(g*g+x*x+z*z))-r[s])/v*e*t[s],x*=v,z*=v,h.vx-=g*(y=a[s]),i>1&&(h.vy-=x*y),i>2&&(h.vz-=z*y),l.vx+=g*(y=1-y),i>1&&(l.vy+=x*y),i>2&&(l.vz+=z*y)}function g(){if(e){var i,o,f=e.length,l=n.length,h=new Map(e.map((n,t)=>[c(n,t,e),n]));for(i=0,u=new Array(f);i<l;++i)(o=n[i]).index=i,"object"!=typeof o.source&&(o.source=v(h,o.source)),"object"!=typeof o.target&&(o.target=v(h,o.target)),u[o.source.index]=(u[o.source.index]||0)+1,u[o.target.index]=(u[o.target.index]||0)+1;for(i=0,a=new Array(l);i<l;++i)o=n[i],a[i]=u[o.source.index]/(u[o.source.index]+u[o.target.index]);t=new Array(l),x(),r=new Array(l),z()}}function x(){if(e)for(var r=0,i=n.length;r<i;++r)t[r]=+l(n[r],r,n)}function z(){if(e)for(var t=0,i=n.length;t<i;++t)r[t]=+y(n[t],t,n)}return null==n&&(n=[]),s.initialize=function(n,t){e=n,i=t,g()},s.links=function(t){return arguments.length?(n=t,g(),s):n},s.id=function(n){return arguments.length?(c=n,s):c},s.iterations=function(n){return arguments.length?(d=+n,s):d},s.strength=function(n){return arguments.length?(l="function"==typeof n?n:o(+n),x(),s):l},s.distance=function(n){return arguments.length?(y="function"==typeof n?n:o(+n),z(),s):y},s},n.forceManyBody=function(){var n,i,u,a,c,l=o(-30),h=1,v=1/0,y=.81;function x(o){var f,c=n.length,l=(1===i?t.binarytree(n,d):2===i?r.quadtree(n,d,s):3===i?e.octree(n,d,s,g):null).visitAfter(p);for(a=o,f=0;f<c;++f)u=n[f],l.visit(M)}function z(){if(n){var t,r,e=n.length;for(c=new Array(e),t=0;t<e;++t)r=n[t],c[r.index]=+l(r,t,n)}}function p(n){var t,r,e,u,o,f,a=0,l=0;if(n.length){for(e=u=o=f=0;f<4;++f)(t=n[f])&&(r=Math.abs(t.value))&&(a+=t.value,l+=r,e+=r*(t.x||0),u+=r*(t.y||0),o+=r*(t.z||0));n.x=e/l,i>1&&(n.y=u/l),i>2&&(n.z=o/l)}else{(t=n).x=t.data.x,i>1&&(t.y=t.data.y),i>2&&(t.z=t.data.z);do{a+=c[t.data.index]}while(t=t.next)}n.value=a}function M(n,t,r,e,o){if(!n.value)return!0;var l=[r,e,o][i-1],d=n.x-u.x,s=i>1?n.y-u.y:0,g=i>2?n.z-u.z:0,x=l-t,z=d*d+s*s+g*g;if(x*x/y<z)return z<v&&(0===d&&(z+=(d=f())*d),i>1&&0===s&&(z+=(s=f())*s),i>2&&0===g&&(z+=(g=f())*g),z<h&&(z=Math.sqrt(h*z)),u.vx+=d*n.value*a/z,i>1&&(u.vy+=s*n.value*a/z),i>2&&(u.vz+=g*n.value*a/z)),!0;if(!(n.length||z>=v)){(n.data!==u||n.next)&&(0===d&&(z+=(d=f())*d),i>1&&0===s&&(z+=(s=f())*s),i>2&&0===g&&(z+=(g=f())*g),z<h&&(z=Math.sqrt(h*z)));do{n.data!==u&&(x=c[n.data.index]*a/z,u.vx+=d*x,i>1&&(u.vy+=s*x),i>2&&(u.vz+=g*x))}while(n=n.next)}}return x.initialize=function(t,r){n=t,i=r,z()},x.strength=function(n){return arguments.length?(l="function"==typeof n?n:o(+n),z(),x):l},x.distanceMin=function(n){return arguments.length?(h=n*n,x):Math.sqrt(h)},x.distanceMax=function(n){return arguments.length?(v=n*n,x):Math.sqrt(v)},x.theta=function(n){return arguments.length?(y=n*n,x):Math.sqrt(y)},x},n.forceRadial=function(n,t,r,e){var i,u,f,a,c=o(.1);function l(n){for(var o=0,c=i.length;o<c;++o){var l=i[o],h=l.x-t||1e-6,v=(l.y||0)-r||1e-6,y=(l.z||0)-e||1e-6,d=Math.sqrt(h*h+v*v+y*y),s=(a[o]-d)*f[o]*n/d;l.vx+=h*s,u>1&&(l.vy+=v*s),u>2&&(l.vz+=y*s)}}function h(){if(i){var t,r=i.length;for(f=new Array(r),a=new Array(r),t=0;t<r;++t)a[t]=+n(i[t],t,i),f[t]=isNaN(a[t])?0:+c(i[t],t,i)}}return"function"!=typeof n&&(n=o(+n)),null==t&&(t=0),null==r&&(r=0),null==e&&(e=0),l.initialize=function(n,t){i=n,u=t,h()},l.strength=function(n){return arguments.length?(c="function"==typeof n?n:o(+n),h(),l):c},l.radius=function(t){return arguments.length?(n="function"==typeof t?t:o(+t),h(),l):n},l.x=function(n){return arguments.length?(t=+n,l):t},l.y=function(n){return arguments.length?(r=+n,l):r},l.z=function(n){return arguments.length?(e=+n,l):e},l},n.forceSimulation=function(n,t){t=t||2;var r,e=Math.min(y,Math.max(1,Math.round(t))),o=1,f=.001,a=1-Math.pow(f,1/300),c=0,l=.6,h=new Map,v=u.timer(s),d=i.dispatch("tick","end");function s(){g(),d.call("tick",r),o<f&&(v.stop(),d.call("end",r))}function g(t){var i,u,f=n.length;void 0===t&&(t=1);for(var v=0;v<t;++v)for(o+=(c-o)*a,h.forEach(function(n){n(o)}),i=0;i<f;++i)null==(u=n[i]).fx?u.x+=u.vx*=l:(u.x=u.fx,u.vx=0),e>1&&(null==u.fy?u.y+=u.vy*=l:(u.y=u.fy,u.vy=0)),e>2&&(null==u.fz?u.z+=u.vz*=l:(u.z=u.fz,u.vz=0));return r}function M(){for(var t,r=0,i=n.length;r<i;++r){if((t=n[r]).index=r,isNaN(t.fx)||(t.x=t.fx),isNaN(t.fy)||(t.y=t.fy),isNaN(t.fz)||(t.z=t.fz),isNaN(t.x)||e>1&&isNaN(t.y)||e>2&&isNaN(t.z)){var u=x*(e>2?Math.cbrt(r):e>1?Math.sqrt(r):r),o=r*z,f=r*p;t.x=u*(e>1?Math.cos(o):1),e>1&&(t.y=u*Math.sin(o)),e>2&&(t.z=u*Math.sin(f))}(isNaN(t.vx)||e>1&&isNaN(t.vy)||e>2&&isNaN(t.vz))&&(t.vx=0,e>1&&(t.vy=0),e>2&&(t.vz=0))}}function N(t){return t.initialize&&t.initialize(n,e),t}return null==n&&(n=[]),M(),r={tick:g,restart:function(){return v.restart(s),r},stop:function(){return v.stop(),r},numDimensions:function(n){return arguments.length?(e=Math.min(y,Math.max(1,Math.round(n))),h.forEach(N),r):e},nodes:function(t){return arguments.length?(n=t,M(),h.forEach(N),r):n},alpha:function(n){return arguments.length?(o=+n,r):o},alphaMin:function(n){return arguments.length?(f=+n,r):f},alphaDecay:function(n){return arguments.length?(a=+n,r):+a},alphaTarget:function(n){return arguments.length?(c=+n,r):c},velocityDecay:function(n){return arguments.length?(l=1-n,r):1-l},force:function(n,t){return arguments.length>1?(null==t?h.delete(n):h.set(n,N(t)),r):h.get(n)},find:function(){var t,r,i,u,o,f,a=Array.prototype.slice.call(arguments),c=a.shift()||0,l=(e>1?a.shift():null)||0,h=(e>2?a.shift():null)||0,v=a.shift()||1/0,y=0,d=n.length;for(v*=v,y=0;y<d;++y)(u=(t=c-(o=n[y]).x)*t+(r=l-(o.y||0))*r+(i=h-(o.z||0))*i)<v&&(f=o,v=u);return f},on:function(n,t){return arguments.length>1?(d.on(n,t),r):d.on(n)}}},n.forceX=function(n){var t,r,e,i=o(.1);function u(n){for(var i,u=0,o=t.length;u<o;++u)(i=t[u]).vx+=(e[u]-i.x)*r[u]*n}function f(){if(t){var u,o=t.length;for(r=new Array(o),e=new Array(o),u=0;u<o;++u)r[u]=isNaN(e[u]=+n(t[u],u,t))?0:+i(t[u],u,t)}}return"function"!=typeof n&&(n=o(null==n?0:+n)),u.initialize=function(n){t=n,f()},u.strength=function(n){return arguments.length?(i="function"==typeof n?n:o(+n),f(),u):i},u.x=function(t){return arguments.length?(n="function"==typeof t?t:o(+t),f(),u):n},u},n.forceY=function(n){var t,r,e,i=o(.1);function u(n){for(var i,u=0,o=t.length;u<o;++u)(i=t[u]).vy+=(e[u]-i.y)*r[u]*n}function f(){if(t){var u,o=t.length;for(r=new Array(o),e=new Array(o),u=0;u<o;++u)r[u]=isNaN(e[u]=+n(t[u],u,t))?0:+i(t[u],u,t)}}return"function"!=typeof n&&(n=o(null==n?0:+n)),u.initialize=function(n){t=n,f()},u.strength=function(n){return arguments.length?(i="function"==typeof n?n:o(+n),f(),u):i},u.y=function(t){return arguments.length?(n="function"==typeof t?t:o(+t),f(),u):n},u},n.forceZ=function(n){var t,r,e,i=o(.1);function u(n){for(var i,u=0,o=t.length;u<o;++u)(i=t[u]).vz+=(e[u]-i.z)*r[u]*n}function f(){if(t){var u,o=t.length;for(r=new Array(o),e=new Array(o),u=0;u<o;++u)r[u]=isNaN(e[u]=+n(t[u],u,t))?0:+i(t[u],u,t)}}return"function"!=typeof n&&(n=o(null==n?0:+n)),u.initialize=function(n){t=n,f()},u.strength=function(n){return arguments.length?(i="function"==typeof n?n:o(+n),f(),u):i},u.z=function(t){return arguments.length?(n="function"==typeof t?t:o(+t),f(),u):n},u},Object.defineProperty(n,"__esModule",{value:!0})});