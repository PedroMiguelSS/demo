(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"27zm":function(e,t,n){e.exports={main:"Home-module--main--3KEdi",heading:"Home-module--heading--2we-H",carousel:"Home-module--carousel--wkMmo",splittedButton:"Home-module--splittedButton--L0V-D",controls:"Home-module--controls--3yLIV",budgetButton:"Home-module--budgetButton--GQgUE",arrow:"Home-module--arrow--1nfZY"}},RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var a=n("q1tI"),r=n.n(a),o=n("Wbzz"),l=n("ryey"),c=n("lkqW");var s=(e,t)=>1===t?{prev:e,next:e}:0===e?{prev:t-1,next:e+1}:e===t-1?{prev:e-1,next:0}:{prev:e-1,next:e+1};const i="next",u="prev";var d=({length:e,duration:t=2e3,infinite:n=!0,initialIndex:r=0}={})=>{if(!e)throw new Error("'length' must be passed to useCarouselBehavior hook");const o=Object(a.useRef)(),{prev:l,next:c}=s(r,e),{0:d,1:m}=Object(a.useState)({prevIndex:l,nextIndex:c,activeIndex:r}),p=Object(a.useCallback)(t=>n=>{const a=t===i?n.nextIndex:n.prevIndex,{next:r,prev:o}=s(a,e);return{...n,prevIndex:o,nextIndex:r,oldIndex:n.activeIndex,activeIndex:a}},[e]),v=Object(a.useCallback)(()=>{m(t=>t.activeIndex+1!==e||n?p(i)(t):(clearInterval(o),t))},[p,n,e]),b=Object(a.useCallback)(()=>{clearInterval(o.current),o.current=setInterval(v,t)},[t,v]),x=Object(a.useCallback)(()=>{m(p(i)),b()},[p,b]),h=Object(a.useCallback)(()=>{m(p(u)),b()},[p,b]);return Object(a.useEffect)(()=>(o.current=setInterval(v,t),()=>{clearInterval(o.current)}),[t,v]),{...d,nextItem:x,prevItem:h}};var m=({length:e,duration:t,children:n})=>{const o=d({duration:t,length:e}),l=Object(a.useMemo)(()=>({...o,duration:t,length:e}),[o,t,e]);return r.a.createElement(c.a.Provider,{value:l},n)},p=n("bh8u"),v=n("9BFO"),b=n("27zm"),x=n.n(b);var h=({data:{contentful:{projectCollection:{items:e}}},location:t})=>{const{seeProjects:n}=Object(p.f)(),{title:c}=Object(o.c)("426988268").site.siteMetadata,s=Object(a.useMemo)(()=>e.map(({title:e,smallDescription:t,photosCollection:n},a)=>{const[o]=n.items,c={src:o.url,alt:o.description};return r.a.createElement(l.l,{title:e,photo:c,key:`${a}-${e}`,description:t})}),[e]);return r.a.createElement(m,{length:e.length,duration:1e4},r.a.createElement(l.i,{fullHeight:!0,withFooter:!1,location:t,className:x.a.main,headerVariant:"transparent"},r.a.createElement("h1",{className:x.a.heading},c),r.a.createElement(l.d,{items:s,className:x.a.carousel}),r.a.createElement(l.p,{to:v.c.projects,className:x.a.splittedButton},n),r.a.createElement(l.g,{items:e,className:x.a.controls}),r.a.createElement(l.b,{arrowClassName:x.a.arrow,className:x.a.budgetButton})))}}}]);
//# sourceMappingURL=component---src-pages-index-js-9a2470f6947fce3eb698.js.map