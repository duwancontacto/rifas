(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[824],{9518:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rifas/detalles/[id]",function(){return n(6946)}])},3131:function(e,t){"use strict";t.Z={src:"/_next/static/media/bg-iconos-rifa-destacada.c7d56f68.jpg",height:1718,width:2732,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAAL/2gAMAwEAAhADEAAAAK+Ff//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z",blurWidth:8,blurHeight:5}},1563:function(e,t,n){"use strict";var i=n(5893);n(7294);let r=e=>{let{percentage:t=50}=e;return(0,i.jsx)("div",{className:"single-chart",children:(0,i.jsxs)("svg",{viewBox:"0 0 36 36",className:"circular-chart orange",children:[(0,i.jsx)("path",{className:"circle-bg",d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"}),(0,i.jsx)("path",{className:"circle","stroke-dasharray":"".concat(t,", 100"),d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"})]})})};t.Z=r},1165:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var i=n(5893),r=n(7294),s=n(6066);n(4640),n(9678);var o=n(5675),a=n.n(o),l=n(5434),c=n(9554),d=n(3037),u=n(1163),m=n(1649),h=n(8424),f=n(6843);let p=(e,t)=>e.length>t?e.substring(0,t)+"...":e;function x(e){let{all:t,rafflesCustom:n}=e,o=r.useRef(null),{raffles:x,causesCategories:w}=(0,m.v9)(h.VB),b=(0,u.useRouter)(),[A,v]=r.useState(null),j=(n||x).filter(e=>(!A||e.categories[0].id===A)&&1===e.status),g=e=>{let t=Number(null==e?void 0:e.ticket_number)*Number(null==e?void 0:e.ticket_price),n=100*((null==e?void 0:e.raised)||0)/t;return n.toFixed(2)};return(n||x).length?(0,i.jsx)("div",{className:"mt-3 mx-3 mx-lg-0  ",children:(0,i.jsxs)("section",{className:" mx-3 ".concat(!t&&"mx-lg-5"," "),style:{marginBottom:"120px"},children:[(0,i.jsxs)("div",{className:"d-flex  m-0  ",children:[(0,i.jsx)("p",{className:" raffles-title lh-1 m-0",children:"Rifas activas"}),!t&&(0,i.jsx)("p",{className:" raffles-subtitle ms-4 mt-1  ",onClick:()=>b.push("/rifas"),style:{cursor:"pointer"},children:"Ver todas las rifas"})]}),(0,i.jsxs)("div",{className:" raffles-navbar d-flex flex-wrap fw-light my-3 ",children:[(0,i.jsx)("p",{style:{cursor:"pointer"},onClick:()=>v(null),className:"me-5",children:"Todas"}),null==w?void 0:w.map((e,t)=>(0,i.jsx)("p",{style:{cursor:"pointer"},onClick:()=>v(e.id),className:"me-5",children:e.name},t))]}),t?(0,i.jsx)("div",{className:"d-flex flex-wrap justify-content-center justify-content-lg-start  ",children:j.map((e,t)=>(0,i.jsxs)("div",{className:" mt-4  mx-0 shadow mx-2 position-relative  ",style:{maxWidth:"309px",width:"100%",paddingBottom:70},children:[(0,i.jsx)(a(),{width:100,height:100,src:e.image||d.Z,className:"w-100 h-100",style:{maxHeight:"200px",objectFit:"contain"},alt:""}),(0,i.jsxs)("div",{className:"p-3 px-3 ",children:[(0,i.jsxs)("h6",{className:"raffles-title-card  ",children:[" ",p(e.name,40)]}),(0,i.jsx)("p",{className:"card-text raffles-subtitle-card lh-sm",children:p(e.description,70)}),(0,i.jsxs)("p",{className:"card-text  raffles-subtitle-card  p-0  ",children:[(0,i.jsx)(l.dKE,{size:20,className:"mb-1 me-2 opacity-75 "}),g(e),"%"," ",(0,f.p)((null==e?void 0:e.raised)||0)," recaudado"]}),(0,i.jsxs)("div",{className:"position-absolute ",style:{bottom:10,left:0,right:0,margin:"0 auto",width:"90%"},children:[(0,i.jsx)("button",{disabled:100===Number(g(e)),onClick:()=>b.push("/rifas/".concat(e.id)),className:"btn fs-6 btn-pink w-100",children:"Comprar boleto"}),(0,i.jsx)("button",{className:"btn fs-6 btn-border-pink w-100 mt-2",onClick:()=>b.push("/rifas/detalles/".concat(e.id)),children:"Ver detalles"})]})]})]},t))}):(0,i.jsxs)("div",{className:"px-2 px-md-5 position-relative  ",children:[(0,i.jsx)("button",{className:"position-absolute  buttonPrevious-RifasActivas ",onClick:()=>{var e;null==o||null===(e=o.current)||void 0===e||e.slickPrev()},children:(0,i.jsx)(c.u1R,{color:"#C3286D",className:"iconPreviousNext"})}),(0,i.jsx)(s.Z,{ref:o,dots:!0,infinite:!1,speed:600,slidesToShow:4,slidesToScroll:1,initialSlide:1,responsive:[{breakpoint:1300,settings:{slidesToShow:3,slidesToScroll:1,infinite:!1,dots:!0}},{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1,infinite:!1,dots:!0}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1,initialSlide:1}}],className:"  h-100 ",children:j.map((e,t)=>(0,i.jsx)("div",{className:" mt-4 mt-md-0 py-3  h-100  ",children:(0,i.jsxs)("div",{className:"mx-2 shadow card-raffle-slide h-100 position-relative ",style:{paddingBottom:80},children:[(0,i.jsx)(a(),{width:100,height:100,src:e.image||d.Z,className:"w-100 h-100",style:{maxHeight:"200px",objectFit:"contain"},alt:""}),(0,i.jsxs)("div",{className:"p-3 px-3",children:[(0,i.jsxs)("h6",{className:"raffles-title-card  ",children:[" ",p(e.name,40)]}),(0,i.jsx)("p",{className:"card-text raffles-subtitle-card lh-sm",children:p(e.description,70)}),(0,i.jsxs)("p",{className:"card-text  raffles-subtitle-card  p-0  ",children:[(0,i.jsx)(l.dKE,{size:20,className:"mb-1 me-2 opacity-75 "}),g(e),"%"," ",(0,f.p)((null==e?void 0:e.raised)||0)," recaudado"]}),(0,i.jsxs)("div",{className:"position-absolute ",style:{bottom:20,width:"90%",left:0,right:0,margin:"0 auto"},children:[(0,i.jsx)("button",{disabled:100===Number(g(e)),onClick:()=>b.push("/rifas/".concat(e.id)),className:"btn fs-6 btn-pink w-100",children:"Comprar boleto"}),(0,i.jsx)("button",{className:"btn fs-6 btn-border-pink w-100 mt-2",onClick:()=>b.push("/rifas/detalles/".concat(e.id)),children:"Ver detalles"})]})]})]})},t))}),(0,i.jsx)("button",{className:"position-absolute  buttonNext-RifasActivas ",onClick:()=>{var e;null==o||null===(e=o.current)||void 0===e||e.slickNext()},children:(0,i.jsx)(c.hjJ,{color:"#C3286D",className:"iconPreviousNext"})})]})]})}):(0,i.jsx)(i.Fragment,{})}},6946:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var i=n(5893),r=n(1071),s=n(7294),o=n(1165),a=n(5675),l=n.n(a),c=n(3131),d=n(3037),u=n(1649),m=n(8424);function h(){var e,t,n;let{raffle:r}=(0,u.v9)(m.VB);return(0,i.jsxs)("div",{className:"row m-0 d-block  justify-content-lg-center  overflow-hidden   position-relative mt-5 ",children:[(0,i.jsx)("div",{children:(0,i.jsx)(l(),{src:c.Z,alt:"fondoRifaDescriptions",className:"img-fluid position-absolute top-0 end-0 mt-5  fondoRifaDescriptions"})}),(0,i.jsxs)("div",{className:"  mb-5 mt-5  mx-0 mx-lg-5 mb-5 col-12 col-lg-7 position-relative ",children:[(0,i.jsx)("h3",{className:"title-RifaDescription   text-center text-lg-start z-2   ",children:"Acerca de la rifa"}),(0,i.jsx)("div",{className:" border-bottom border-1  z-2  my-2 w-100 w-lg-50 text-center text-lg-start "}),(0,i.jsx)("h5",{className:"subtitle-rifDescription text-center text-lg-start  z-2 ",children:"\xbfC\xf3mo voy a utilizar el dinero?"}),(0,i.jsx)("p",{className:"col-12 col-lg-6 text-rifaDescription opacity-75 text-center text-lg-start",children:(null==r?void 0:r.description)||""}),(0,i.jsx)("div",{className:" border-bottom border-1  my-2 w-100 w-lg-50   "}),(0,i.jsx)("h5",{className:"subtitle-rifDescription text-center text-lg-start  z-2 ",children:"\xbfCu\xe1l es el premio?"}),(0,i.jsxs)("div",{className:"d-block  justify-content-between d-md-flex  row col-12 col-lg-10 ",children:[(0,i.jsx)("div",{className:"col-12  col-lg-4  z-2 ",children:(0,i.jsx)(l(),{src:(null==r?void 0:null===(e=r.prizeData)||void 0===e?void 0:e.image)||d.Z,alt:"fondoDescription",className:" d-block w-100 h-auto mx-auto mx-lg-0 rounded-1 ",style:{maxHeight:"300px",objectFit:"contain"},width:160,height:160})}),(0,i.jsxs)("p",{className:"col-12 col-lg-8 mt-4 mt-md-0 opacity-75 text-rifaDescription mb-5 ",children:[(null==r?void 0:null===(t=r.prizeData)||void 0===t?void 0:t.name)||"",(0,i.jsx)("br",{}),(null==r?void 0:null===(n=r.prizeData)||void 0===n?void 0:n.description)||""]}),(0,i.jsx)("p",{className:"col-12 col-lg-8 mt-4 mt-md-0 opacity-75 text-rifaDescription mb-5 "})]})]})]})}var f=n(3750),p=n(1451),x=n(5434),w=n(1163),b=n(2514),A=n(6573),v=n(6616),j=n(8137),g=n(2834),y=n(6843),N=n(1563);function k(){let{raffle:e,loading:t}=(0,u.v9)(m.VB),n=(0,w.useRouter)();if(!e||t)return(0,i.jsx)("div",{className:"my-4"});let r="".concat("https://www.rifaconcausa.org","/rifas/detalles/").concat(e.id),s=e.name,o=Number(e.ticket_number)*Number(e.ticket_price),a=100*e.raised/o;return(0,i.jsxs)("section",{className:"mx-3 mx-lg-5 py-3",children:[(0,i.jsx)("h3",{className:"  mt-5 mt-md-3 title-RifaDetails",children:e.name}),(0,i.jsx)("p",{className:" mt-2 mb-3  subtitle-RifaDetails col-6 ",children:e.description}),(0,i.jsxs)("div",{className:"d-flex justify-content-between row mt-4",children:[(0,i.jsx)("div",{className:"col-lg-6  position-relative m-0 ",children:e.video?(0,i.jsx)("iframe",{width:"100%",height:"450",src:function(e){try{let t=new URL(e);if(t.hostname.toLowerCase().includes("youtube.com")){let e=t.searchParams.get("v");return e?"https://www.youtube.com/embed/".concat(e):null}if(t.hostname.toLowerCase().includes("youtu.be")){let e=t.pathname.split("/")[1];return e?"https://www.youtube.com/embed/".concat(e):null}if(t.hostname.toLowerCase().includes("vimeo.com")){let e=t.pathname.split("/")[1];return e?"https://player.vimeo.com/video/".concat(e):null}}catch(e){console.error("Error al extraer la URL de incrustaci\xf3n:",e)}return null}(e.video)||"",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Videos"}):(0,i.jsx)(l(),{width:100,height:100,src:e.image||d.Z,alt:"fondo",className:"w-100 h-100"})}),(0,i.jsxs)("div",{className:" col-lg-6  ",children:[(0,i.jsx)("p",{className:"fs-3 mt-4 mt-md-0 raffle-container-title",children:"Recaudado"}),(0,i.jsxs)("div",{className:"d-lg-flex d-flex align-items-center mb-0",children:[(0,i.jsx)(N.Z,{percentage:a}),(0,i.jsxs)("p",{className:" ps-2 m-0 raffle-container-textinformation  ",children:[(0,y.p)(a),"%"]}),(0,i.jsxs)("p",{className:" ms-0 m-0 ms-lg-4 raffle-container-textinformation  ",children:["$ ",(0,y.p)(e.raised)]})]}),(0,i.jsxs)("p",{className:"raffle-container-title   fs-3",children:["La meta es de ",o," MXN"]}),(0,i.jsx)("div",{className:" border-bottom border-2  my-2 position-relative "}),(0,i.jsxs)("div",{className:"d-flex  justify-content-between text-start me-3 pt-3  ",children:[(0,i.jsxs)("div",{className:"",children:[(0,i.jsx)("h6",{className:" raffle-container-textinformation2",children:"Costo por boleto"}),(0,i.jsxs)("p",{className:" raffle-container-value fw-semibold  ",children:["$",(0,y.p)(Number(e.ticket_price))]})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h6",{className:"raffle-container-textinformation2",children:"Numero de boletos"}),(0,i.jsx)("p",{className:"raffle-container-value fw-semibold  ",children:e.ticket_number})]})]}),(0,i.jsx)("div",{className:"d-flex justify-content-start ",children:(0,i.jsx)("button",{disabled:100===a,className:"btn btn-pink btn-sm border col-6 button-rifaDestacada  ",onClick:()=>n.push("/rifas/".concat(e.id)),children:"Comprar boletos"})}),(0,i.jsx)("div",{className:" border-bottom border-2  my-3 position-relative "}),(0,i.jsxs)("div",{className:"d-flex  justify-content-between text-start me-3   ",children:[(0,i.jsxs)("div",{className:"",children:[(0,i.jsx)("h6",{className:" raffle-container-finish",children:"La rifa termina en:"}),(0,i.jsxs)("p",{className:" raffle-container-value lh-1  m-0 fw-bold",children:[(0,i.jsx)(p.ujk,{color:"#5C5C5C",className:"mb-1"})," ",(0,b.g)(e.end_date)," dias"]})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h6",{className:"raffle-container-finish",children:"Compartir:"}),(0,i.jsx)(A.Z,{url:r,quote:s,className:"Demo__some-network__share-button",children:(0,i.jsx)(f.k1O,{color:" #C3286D",size:25,className:"mx- position-relative 2"})}),(0,i.jsx)(v.Z,{url:r,title:s,className:"Demo__some-network__share-button",children:(0,i.jsx)(f.meP,{color:" #C3286D",size:25,className:"mx-2  position-relative "})}),(0,i.jsx)(j.Z,{url:r,subject:s,body:"body",className:"Demo__some-network__share-button",children:(0,i.jsx)(x.ixJ,{color:" #C3286D",size:25,className:"mx-2  position-relative "})}),(0,i.jsx)(g.Z,{url:r,title:s,className:"Demo__some-network__share-button",children:(0,i.jsx)(f.RGt,{color:" #C3286D",size:25,className:"mx-2  position-relative "})})]})]})]})]})]})}function C(){return(0,i.jsxs)("div",{className:"",children:[(0,i.jsxs)("div",{className:"background-rifa",children:[(0,i.jsx)(k,{}),(0,i.jsx)(h,{})]}),(0,i.jsx)(o.Z,{})]})}var _=n(9008),D=n.n(_);function S(){let e=(0,w.useRouter)(),{id:t}=e.query,n=(0,u.I0)();(0,s.useEffect)(()=>{let e=setTimeout(()=>n((0,m.jM)(t||"")),200);return()=>{clearTimeout(e)}},[]);let{raffle:o}=(0,u.v9)(m.VB);return(0,i.jsxs)("div",{children:[(0,i.jsxs)(D(),{children:[(0,i.jsxs)("title",{children:["Rifa con causa | ",null==o?void 0:o.name]}),(0,i.jsx)("meta",{property:"og:title",content:null==o?void 0:o.name}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),(0,i.jsx)("meta",{property:"og:image",content:null==o?void 0:o.image}),(0,i.jsx)("meta",{property:"og:description",content:"Descripci\xf3n de tu p\xe1gina aqu\xed"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{name:"twitter:title",content:null==o?void 0:o.name}),(0,i.jsx)("meta",{name:"twitter:image",content:null==o?void 0:o.image}),(0,i.jsx)("meta",{name:"twitter:description",content:"Descripci\xf3n de tu p\xe1gina aqu\xed"})]}),(0,i.jsx)(r.Z,{children:(0,i.jsx)(C,{})})]})}},2514:function(e,t,n){"use strict";n.d(t,{g:function(){return i}});let i=e=>{let t=new Date,n=new Date(e),i=n.getTime()-t.getTime(),r=Math.ceil(i/864e5);return r<0?0:r}},9008:function(e,t,n){e.exports=n(2636)},8137:function(e,t,n){"use strict";var i=n(6459),r=(0,n(9075).Z)("email",function(e,t){var n=t.subject,r=t.body,s=t.separator;return"mailto:"+(0,i.Z)({subject:n,body:r?r+s+e:e})},function(e){return{subject:e.subject,body:e.body,separator:e.separator||" "}},{openShareDialogOnClick:!1,onClick:function(e,t){window.location.href=t}});t.Z=r},6573:function(e,t,n){"use strict";var i=n(5456),r=n(6459),s=(0,n(9075).Z)("facebook",function(e,t){var n=t.quote,s=t.hashtag;return(0,i.Z)(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+(0,r.Z)({u:e,quote:n,hashtag:s})},function(e){return{quote:e.quote,hashtag:e.hashtag}},{windowWidth:550,windowHeight:400});t.Z=s},6616:function(e,t,n){"use strict";var i=n(5456),r=n(6459),s=(0,n(9075).Z)("twitter",function(e,t){var n=t.title,s=t.via,o=t.hashtags,a=void 0===o?[]:o,l=t.related,c=void 0===l?[]:l;return(0,i.Z)(e,"twitter.url"),(0,i.Z)(Array.isArray(a),"twitter.hashtags is not an array"),(0,i.Z)(Array.isArray(c),"twitter.related is not an array"),"https://twitter.com/share"+(0,r.Z)({url:e,text:n,via:s,hashtags:a.length>0?a.join(","):void 0,related:c.length>0?c.join(","):void 0})},function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}},{windowWidth:550,windowHeight:400});t.Z=s},2834:function(e,t,n){"use strict";var i=n(5456),r=n(6459),s=(0,n(9075).Z)("whatsapp",function(e,t){var n=t.title,s=t.separator;return(0,i.Z)(e,"whatsapp.url"),"https://"+(/(android|iphone|ipad|mobile)/i.test(navigator.userAgent)?"api":"web")+".whatsapp.com/send"+(0,r.Z)({text:n?n+s+e:e})},function(e){return{title:e.title,separator:e.separator||" "}},{windowWidth:550,windowHeight:400});t.Z=s},9075:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var i,r=n(7294),s=n(4184),o=n.n(s),a=(i=function(e,t){return(i=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(){return(l=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},c=function(e,t){var n,i,r,s,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw TypeError("Generator is already executing.");for(;o;)try{if(n=1,i&&(r=2&s[0]?i.return:s[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,s[1])).done)return r;switch(i=0,r&&(s=[2&s[0],r.value]),s[0]){case 0:case 1:r=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,i=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(r=(r=o.trys).length>0&&r[r.length-1])&&(6===s[0]||2===s[0])){o=0;continue}if(3===s[0]&&(!r||s[1]>r[0]&&s[1]<r[3])){o.label=s[1];break}if(6===s[0]&&o.label<r[1]){o.label=r[1],r=s;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(s);break}r[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],i=0}finally{n=r=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}},d=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,i=Object.getOwnPropertySymbols(e);r<i.length;r++)0>t.indexOf(i[r])&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]]);return n},u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var n=t.props,i=n.onShareWindowClose,r=n.windowHeight,s=void 0===r?400:r,o=n.windowPosition,a=n.windowWidth,c=void 0===a?550:a;!function(e,t,n){var i=l({height:t.height,width:t.width,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},d(t,["height","width"])),r=window.open(e,"",Object.keys(i).map(function(e){return"".concat(e,"=").concat(i[e])}).join(", "));if(n)var s=window.setInterval(function(){try{(null===r||r.closed)&&(window.clearInterval(s),n(r))}catch(e){console.error(e)}},1e3)}(e,l({height:s,width:c},"windowCenter"===(void 0===o?"windowCenter":o)?{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-c/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-s/2}:{top:(window.screen.height-s)/2,left:(window.screen.width-c)/2}),i)},t.handleClick=function(e){var n,i,r;return n=void 0,i=void 0,r=function(){var t,n,i,r,s,o,a,l,d;return c(this,function(c){switch(c.label){case 0:var u;if(n=(t=this.props).beforeOnClick,i=t.disabled,r=t.networkLink,s=t.onClick,o=t.url,a=t.openShareDialogOnClick,l=r(o,t.opts),i)return[2];if(e.preventDefault(),!n||!((u=d=n())&&("object"==typeof u||"function"==typeof u)&&"function"==typeof u.then))return[3,2];return[4,d];case 1:c.sent(),c.label=2;case 2:return a&&this.openShareDialog(l),s&&s(e,l),[2]}})},new(i||(i=Promise))(function(e,s){function o(e){try{l(r.next(e))}catch(e){s(e)}}function a(e){try{l(r.throw(e))}catch(e){s(e)}}function l(t){var n;t.done?e(t.value):((n=t.value)instanceof i?n:new i(function(e){e(n)})).then(o,a)}l((r=r.apply(t,n||[])).next())})},t}return a(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),n=e.className,i=e.disabled,s=e.disabledStyle,a=e.forwardedRef,c=(e.networkLink,e.networkName),u=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),m=e.style,h=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,d(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),f=o()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!i,disabled:!!i},n),p=u?l(l({backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"},m),i&&s):l(l({},m),i&&s);return r.createElement("button",l({},h,{"aria-label":h["aria-label"]||c,className:f,onClick:this.handleClick,ref:a,style:p}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(r.Component),m=function(){return(m=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},h=function(e,t,n,i){function s(s,o){var a=n(s),l=m({},s);return Object.keys(a).forEach(function(e){delete l[e]}),r.createElement(u,m({},i,l,{forwardedRef:o,networkName:e,networkLink:t,opts:n(s)}))}return s.displayName="ShareButton-".concat(e),(0,r.forwardRef)(s)}},5456:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var i,r=(i=function(e,t){return(i=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=function(e){function t(t){var n=e.call(this,t)||this;return n.name="AssertionError",n}return r(t,e),t}(Error);function o(e,t){if(!e)throw new s(t)}},6459:function(e,t,n){"use strict";function i(e){var t=Object.entries(e).filter(function(e){return null!=e[1]}).map(function(e){var t=e[0],n=e[1];return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(String(n)))});return t.length>0?"?".concat(t.join("&")):""}n.d(t,{Z:function(){return i}})}},function(e){e.O(0,[445,617,866,874,228,570,772,484,278,183,71,774,888,179],function(){return e(e.s=9518)}),_N_E=e.O()}]);