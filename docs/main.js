!function(e){function t(t){for(var o,c,a=t[0],i=t[1],l=t[2],p=0,h=[];p<a.length;p++)c=a[p],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&h.push(r[c][0]),r[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);for(d&&d(t);h.length;)h.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,a=1;a<n.length;a++){var i=n[a];0!==r[i]&&(o=!1)}o&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={0:0},s=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var a=window.webpackJsonp=window.webpackJsonp||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var d=i;s.push([4,1]),n()}([,,function(e,t,n){e.exports=n.p+"network.json"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(3);var o=n(0),r=n(1),s=n.n(r);let c={densityData:[],distance:30,zoomIdentity:null,setCanvas:()=>{c.canvas=o.l("canvas"),c.context=document.querySelector("canvas").getContext("2d")},setMatches:e=>{c.matches=e},setGraph:e=>{e.links.map(e=>{e.source=e.s,e.target=e.t,e.value=e.v,delete e.s,delete e.t,delete e.v}),c.graph=e},setPairs:e=>{c.pairs=[],s.a.bigCombination(e,2).forEach(e=>{const t=Object.keys(e[0].tokens).filter(t=>Object.keys(e[1].tokens).includes(t)).reduce((t,n)=>{const o=(e[0].tokens[n]+e[1].tokens[n])/2;return t.push([n,o]),t},[]).sort((e,t)=>t[1]-e[1]);c.pairs.push({pair:e,terms:t})})},setScreen:()=>{c.screen={},c.screen.density=1;const e=document.getElementById("simulation");c.screen.width=e.clientWidth*c.screen.density,c.screen.height=e.clientHeight*c.screen.density,o.l("canvas").style("width",`${e.clientWidth}px`).style("height",`${e.clientHeight}px`).attr("width",c.screen.width).attr("height",c.screen.height)}};const a={x:0,y:0,k:0},i=()=>{c.computed&&!c.densityData.length&&(()=>{const e=o.c(c.graph.nodes,e=>e.x),t=o.c(c.graph.nodes,e=>e.y),n=Math.max(e[1]-e[0],t[1]-t[0]),r=4*c.screen.width;a.k=r/(n+1e3),a.x=-e[0]*a.k,a.y=-t[0]*a.k,c.densityData=o.a().x(e=>a.x+e.x*a.k).y(e=>a.y+e.y*a.k).weight(e=>a.k*e.docs).size([r,r]).bandwidth(40*a.k)(c.graph.nodes),c.densityData.forEach(e=>e.coordinates=e.coordinates.map(e=>e.map(e=>e.map(e=>[(e[0]-a.x)/a.k,(e[1]-a.y)/a.k]))))})();const e=o.i().context(c.context);c.densityData.forEach((t,n)=>{c.context.beginPath(),c.context.strokeStyle=o.k(251,253,166),c.context.lineWidth=(.1+.05*n)/c.zoomIdentity.k,e(t),c.context.stroke()})};window.s=c,c.zoomIdentity=o.n;const l=()=>{const e=c.zoomIdentity.x*c.screen.density,t=c.zoomIdentity.y*c.screen.density,n=c.zoomIdentity.k;c.context.save(),c.context.clearRect(0,0,c.screen.width,c.screen.height),c.context.translate(e,t),c.context.scale(n,n),(()=>{const e=Math.pow(0,2),t=Math.pow(40,2);c.context.fillStyle=o.k(251,253,166),c.context.fill(),c.pairs.forEach(n=>{const o=Math.abs(n.pair[0].x-n.pair[1].x),r=Math.abs(n.pair[0].y-n.pair[1].y),s=Math.pow(o,2)+Math.pow(r,2);if(e<s&&s<t){const e=o/2+(n.pair[0].x<n.pair[1].x?n.pair[0].x:n.pair[1].x),t=r/2+(n.pair[0].y<n.pair[1].y?n.pair[0].y:n.pair[1].y),s=n.terms.slice(0,8).reduce((e,t)=>e+=1.5,0);let a=0;n.terms.slice(0,8).forEach((n,o)=>{c.context.textAlign="center";c.context.font="normal 300 1pt Helvetica",a+=1.5,c.context.fillText(n[0],e,t+a-s/2)})}})})(),c.context.beginPath(),c.context.fillStyle=o.k(251,253,166),c.graph.nodes.forEach(e=>{c.context.moveTo(e.x,e.y),c.context.arc(e.x,e.y,.5,0,2*Math.PI),c.context.font="1.5pt Helvetica",c.context.fillText(`${e.id} (${e.docs})`,e.x,e.y+4)}),c.context.fillStyle=o.k(251,253,166),c.context.fill(),i(),c.context.restore()};var d=()=>{const e=o.h().force("charge",o.g().strength(-600)).force("collide",o.e().radius(20)).force("center",o.d(c.screen.width/2,c.screen.height/2)).force("link",o.f().id(e=>e.id).strength(e=>e.value));e.nodes(c.graph.nodes),e.force("link").links(c.graph.links);e.on("tick",l).on("end",()=>{c.computed=!0,l()}),c.zoom=o.m().on("zoom",()=>{c.zoomIdentity=o.b.transform,l()}),c.zoom.scaleExtent([.1,10]),c.zoom.scaleTo(c.canvas,.3),c.canvas.call(c.zoom),c.canvas.on("mousemove",()=>{const e=c.zoomIdentity.invertX(event.x*c.screen.density),t=c.zoomIdentity.invertY(event.y*c.screen.density);for(let r=c.graph.nodes.length-1;r>=0;--r){const s=c.graph.nodes[r],a=e-s.x,i=t-s.y;let l=[];for(var n in s.tokens){const e=s.tokens[n].toFixed(2);l.push(`${n} (${e})`)}if(a*a+i*i<900){let e="";e+=`<p><strong>${s.id}</strong></p>`,e+=`<p>Number of papers: ${s.docs}</p>`,e+=`<p>Tokens:<br/>${l.join("<br/>")}</p>`,o.l("#focus").html(e)}}})},p=n(2),h=n.n(p);o.j(h.a).catch(e=>console.error(e)).then(e=>{c.setCanvas(),c.setGraph(e),c.setPairs(e.nodes),c.setScreen(),d()})}]);