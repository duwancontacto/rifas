"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[183],{3037:function(e,t){t.Z={src:"/_next/static/media/logoRifas.3a88c166.jpeg",height:599,width:689,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAcACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAqwP/xAAcEAABAwUAAAAAAAAAAAAAAAARABITAgMhMlH/2gAIAQEAAT8AF2YvpjbqMnpX/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:8,blurHeight:7}},1228:function(e,t,n){n.d(t,{K$:function(){return y},O4:function(){return w},wf:function(){return F},ek:function(){return C}});var a=n(5893),s=n(7294),l=n(948),r=n(9583),i=n(7516);function c(e){let{tooltip:t}=e,[n,c]=(0,s.useState)(!1),o=(0,s.useRef)(null);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{ref:o,onClick:()=>c(!n),children:(0,a.jsx)(r.iih,{})}),(0,a.jsx)(l.Z,{target:o.current,show:n,placement:"bottom",children:e=>{let{placement:n,arrowProps:s,show:l,popper:r,hasDoneInitialMeasure:o,...d}=e;return(0,a.jsxs)("div",{...d,style:{position:"absolute",backgroundColor:"#f8f8f8",padding:"10px",paddingRight:30,color:"black",maxWidth:300,borderRadius:3,...d.style},children:[(0,a.jsx)("div",{onClick:()=>c(!1),style:{position:"absolute",top:7,right:10,cursor:"pointer"},children:(0,a.jsx)(i.FfE,{size:20})}),(0,a.jsx)("p",{style:{fontWeight:600},children:t.title}),(0,a.jsx)("span",{children:t.content})]})}})]})}var o=n(5675),d=n.n(o),m=n(6501),u=n(8193),h=n(3037),x=n(5140),f=n(5067),p=n(6843);let A=e=>{let{selectedItem:t,resetValue:n,handleSelect:s,handleShow:l}=e,r=(0,x.e)(e=>e.createdCauses),i=r.find(e=>e===t.id);return(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"m-0 mt-2",children:"Causa seleccionada"}),(0,a.jsxs)("div",{className:"d-flex mt-2  ",children:[(0,a.jsx)(d(),{src:t.image||h.Z,alt:"logorifas",width:150,height:150,style:{objectFit:"contain"},className:"rounded"}),(0,a.jsxs)("div",{className:"ms-3",children:[(0,a.jsx)("h6",{className:"lh-1  fw-bold",children:t.name}),(0,a.jsx)("p",{className:"m-0 lh-sm",children:null==t?void 0:t.description}),(0,a.jsxs)("p",{className:"m-0 lh-sm pt-1",children:["Monto a recaudar:"," ",(0,a.jsxs)("span",{className:"fw-bold",children:["$",(0,p.p)(null==t?void 0:t.goal)]})]}),(0,a.jsx)("button",{className:"btn btn-pink  mt-3  mb-4",onClick:e=>{e.preventDefault(),n(),s(e)},children:"Cambiar causa"}),(0,a.jsx)("button",{className:"btn btn-outline-pink  mt-3 ms-2  mb-4",onClick:e=>{e.preventDefault(),n(),l(e)},children:"Crear nueva Causa"}),i&&(0,a.jsx)("button",{className:"btn btn-outline-pink  mt-3 ms-2  mb-4",onClick:e=>{e.preventDefault(),l(e,t)},children:"Editar Causa"})]})]})]})},g=e=>{let{selectedItem:t,resetValue:n,handleSelect:s,handleShow:l}=e,r=(0,f.Z)(e=>e.createdPrizes),i=r.find(e=>e===t.id);return(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"m-0 mt-2",children:"Premio seleccionado"}),(0,a.jsxs)("div",{className:"d-flex mt-2  ",children:[(0,a.jsx)(d(),{src:t.image||h.Z,alt:"logorifas2",width:150,height:150,style:{objectFit:"contain"},className:"rounded"}),(0,a.jsxs)("div",{className:"ms-3",children:[(0,a.jsx)("h6",{className:"lh-1 fw-bold ",children:t.name}),(0,a.jsx)("p",{className:"m-0 lh-sm",children:null==t?void 0:t.description}),(0,a.jsxs)("p",{className:"m-0 lh-sm pt-1",children:["Valor del premio:"," ",(0,a.jsxs)("span",{className:"fw-bold",children:["$",(0,p.p)(Number(null==t?void 0:t.value))]})]}),(0,a.jsx)("button",{className:"btn btn-pink  mt-3  mb-4",onClick:e=>{e.preventDefault(),n(),s(e)},children:"Cambiar premio"}),(0,a.jsx)("button",{className:"btn btn-outline-pink  mt-3 ms-2 mb-4",onClick:e=>{e.preventDefault(),n(),l(e)},children:"Crear nuevo Premio"}),i&&(0,a.jsx)("button",{className:"btn btn-outline-pink  mt-3 ms-2 mb-4",onClick:e=>{e.preventDefault(),n(),l(e,t)},children:"Editar Premio"})]})]})]})},j={cause:A,prize:g};var b=n(6922);n(5213);var v=n(4398),N=n(4853);let w=e=>{let t={};return e.map(e=>{"title"!==e.type&&"custom"!==e.type&&"subtitle"!==e.type&&(t[e.name]=e.default||"")}),t},y={textSlug:function(e){let{register:t,label:n,name:s,required:l,error:r,subLabel:i,disabled:c}=e;return(0,a.jsxs)("div",{className:"d-md-flex d-block align-items-center justify-content-cneter",children:[(0,a.jsx)("label",{className:"".concat(r&&"text-danger"," title-form-generator "),htmlFor:s,children:n}),""===i?null:(0,a.jsx)("p",{className:" text-secondary fs-6 mb-0 pe-2 ".concat(r&&"text-danger"),children:i}),(0,a.jsx)("input",{id:s,name:s,disabled:c,type:"text",...t(s,{required:l}),className:"w-100 form-control my-2 fs-5 m-0 ".concat(r&&"border-danger ")})]})},text:function(e){let{register:t,label:n,name:l,required:r,error:i,subLabel:o,disabled:d,visible:m,watch:u,tooltip:h}=e,[x,f]=(0,s.useState)(!1);(0,s.useRef)(null);let p=u();return m&&!p[m]?(0,a.jsx)(a.Fragment,{children:" "}):(0,a.jsxs)("div",{children:[(0,a.jsxs)("label",{className:"".concat(i&&"text-danger"," title-form-generator d-flex position-relative "),children:[n,h&&(0,a.jsx)(c,{tooltip:h})]}),""===o?null:(0,a.jsx)("p",{className:" text-secondary fs-6 mb-0 ".concat(i&&"text-danger"),children:o}),(0,a.jsx)("input",{id:l,name:l,disabled:d,type:"text",...t(l,{required:r}),className:"w-100 form-control my-2 fs-5 m-0 ".concat(i&&"border-danger ")})]})},email:function(e){let{register:t,label:n,name:s,required:l,error:r}=e;return(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"".concat(r&&"text-danger"," title-form-generator"),htmlFor:s,children:n}),(0,a.jsx)("input",{id:s,name:s,type:"email",...t(s,{required:l}),className:"w-100 form-control my-2 fs-5 ".concat(r&&"border-danger ")})]})},checkbox:function(e){let{register:t,label:n,name:s,required:l,error:r}=e;return(0,a.jsxs)("div",{className:"my-3",children:[(0,a.jsx)("input",{id:s,name:s,type:"checkbox",...t(s,{required:l}),className:" form-check-input ".concat(r&&"border-danger"," fs-5")}),(0,a.jsx)("label",{className:"ms-2 form-check-label title-form-generator  ".concat(r&&"text-danger "),htmlFor:s,children:n})]})},password:function(e){let{register:t,label:n,name:s,required:l,error:r,validate:i=()=>{},watch:c}=e,o=c();return(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"".concat(r&&"text-danger"," title-form-generator"),htmlFor:s,children:n}),(0,a.jsx)("input",{id:s,name:s,type:"password",...t(s,{required:l,validate:e=>i(e,o)}),className:"w-100 form-control my-2 fs-5  ".concat(r&&"border-danger ")}),(0,a.jsxs)("p",{className:"text-danger ",children:[null==r?void 0:r.message," "]})]})},number:function(e){let{register:t,label:n,name:s,required:l,setValue:r,error:i,watch:c,visible:o,customChange:d}=e,m=c();return o&&!m[o]?(0,a.jsx)(a.Fragment,{children:" "}):(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"".concat(i&&"text-danger"," title-form-generator"),htmlFor:s,children:n}),(0,a.jsx)("input",{id:s,name:s,type:"number",...t(s,{required:l}),className:"w-100 form-control my-2 fs-5 ".concat(i&&"border-danger "),onChange:e=>{r(s,e.target.value),d&&d({setValue:r,newValue:e.target.value,values:m})}})]})},title:function(e){let{register:t,label:n,name:s,required:l,error:r}=e;return(0,a.jsx)("div",{children:(0,a.jsx)("p",{className:"  fw-medium fs-3",style:{color:"#C3286D"},children:n})})},radioButton:function(e){let{register:t,label:n,name:s,required:l,error:r,options:i,disabledStyle:c,customChange:o,setValue:d,watch:m}=e,u=m();return(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"".concat(r&&"text-danger"," title-form-generator"),htmlFor:s,children:n}),c?(0,a.jsx)("div",{className:"form-check",children:null==i?void 0:i.map((e,n)=>(0,a.jsxs)("div",{children:[(0,a.jsx)("input",{className:"form-check-input",value:e.value,...t(s,{required:l}),type:"radio",name:s,id:"".concat(s).concat(n+1)}),(0,a.jsx)("label",{className:"form-check-label",htmlFor:"".concat(s).concat(n+1),children:e.label})]},n))}):(0,a.jsx)("div",{className:"d-flex flex-wrap my-3",children:null==i?void 0:i.map((e,n)=>(0,a.jsxs)("div",{className:" btn btn-outline-secondary opacity-75  d-flex align-items-center me-2",children:[(0,a.jsx)("input",{value:e.value,...t(s,{required:l}),onChange:e=>{d(s,e.target.value),o&&o({setValue:d,newValue:e.target.value,values:u})},name:s,className:"form-check-input mt-0",type:"radio",id:"".concat(s).concat(n+1)}),(0,a.jsx)("label",{className:"text-gray m-0 ms-2 ",htmlFor:"".concat(s).concat(n+1),children:e.label})]},n))})]})},select:function(e){let{register:t,label:n,name:s,required:l,error:r,options:i,setValue:c,customChange:o,watch:d}=e,m=d();return(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"".concat(r&&"text-danger"," title-form-generator "),htmlFor:s,children:n}),(0,a.jsxs)("select",{...t(s,{required:l}),className:"form-select form-select-md my-2 fs-5 w-100 ".concat(r&&"border-danger "),onChange:e=>{c(s,e.target.value),o&&o({setValue:c,newValue:e.target.value,values:m})},children:[(0,a.jsx)("option",{selected:!0}),null==i?void 0:i.map((e,t)=>(0,a.jsx)("option",{value:e.value,children:e.label},t))]})]})},file:function(e){let{label:t,name:n,error:l,setValue:r,maxFile:i,subLabel:c,watch:o,customChange:h}=e,x=o(),[f,p]=(0,s.useState)([]),[A,g]=(0,s.useState)([]),j=i||5,b=(0,s.useRef)(null),v=e=>{let{files:t}=e.target;if(!(null==t?void 0:t.length)||!t)return;let a=t[0];if(a.size>10485760){m.Am.error("El peso maximo por foto es de ".concat(10,"MB"));return}if((null==A?void 0:A.length)===j){m.Am.error("Solo puedes subir ".concat(j," ").concat(j>1?"fotos":"foto"," "));return}let s=URL.createObjectURL(a);h&&h({setValue:r,newValue:[...f,a],values:x}),r(n,[...f,a]),p(e=>[...e,a]),g(e=>[...e,s])},N=e=>{r(n,f.filter((t,n)=>n!==e)),h&&h({setValue:r,newValue:f.filter((t,n)=>n!==e),values:x}),g(t=>t.filter((t,n)=>n!==e)),p(t=>t.filter((t,n)=>n!==e))},w=async()=>{if(!x[n])return;let e=await F(x[n]);p(e),r(n,e);let t=x[n].map(e=>"string"!=typeof e?URL.createObjectURL(e):C(e)?e:"".concat("https://www.api.rifaconcausa.org").concat(e));g(t)};return(0,s.useEffect)(()=>{let e=setTimeout(()=>{w()},200);return()=>clearTimeout(e)},[]),(0,a.jsxs)("div",{children:[(0,a.jsxs)("label",{className:"".concat(l&&"text-danger"," title-form-generator  mt-2"),htmlFor:n,children:[t," (Peso maximo por foto 10MB)"]}),""===c?null:(0,a.jsx)("p",{className:"  fs-6 mb-0",children:c}),(0,a.jsx)("input",{id:n,name:n,accept:"image/*",type:"file",onChange:e=>v(e),style:{display:"none"},ref:b}),(0,a.jsxs)("div",{className:"mt-4 w-100 d-flex flex-wrap mb-4",children:[A.map((e,t)=>(0,a.jsxs)("div",{className:"me-2 mb-2 position-relative ",children:[(0,a.jsx)(d(),{width:150,height:150,style:{objectFit:"cover"},className:"rounded",src:e,alt:"preview"},t),(0,a.jsx)("button",{onClick:e=>{e.preventDefault(),N(t)},className:"btn position-absolute top-0 end-0  mt-2 me-2 p-1 pt-0",children:(0,a.jsx)(u.LHV,{size:20,color:"white"})})]},t)),(0,a.jsxs)("button",{className:" bg-white",style:{width:"150px",height:"150px",borderStyle:"dashed"},onClick:e=>{var t;e.preventDefault(),null===(t=b.current)||void 0===t||t.click()},children:[(0,a.jsx)(u.hOO,{size:40,color:"#313131"}),(0,a.jsx)("p",{className:" fs-6",children:"Agrega o arrastra tus fotos aqu\xed"})]})]})]})},textarea:function(e){let{register:t,label:n,name:s,required:l,error:r,subLabel:i}=e;return(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"".concat(r&&"text-danger"," title-form-generator"),htmlFor:s,children:n}),""===i?null:(0,a.jsx)("p",{className:" text-secondary fs-6 mb-0 ".concat(r&&"text-danger"),children:i}),(0,a.jsx)("textarea",{...t(s,{required:l}),className:"w-100 form-control my-2 fs-5 ".concat(r&&"border-danger "),id:s,name:s,cols:5,rows:5})]})},selectItems:function(e){let{register:t,label:n,name:l,required:r,error:i,ModalComponent:c,createTitle:o,selectTitle:d,setValue:m}=e,[u,h]=(0,s.useState)(!1),[x,f]=(0,s.useState)(!1),[p,A]=(0,s.useState)(null),g=j[(null==p?void 0:p.type)||"cause"],b=()=>{h(!1),f(!1)},v=(e,t)=>{e.preventDefault(),h(t||!0)},N=e=>{A(e),m(l,e),h(!1)},w=()=>{A(null),m(l,null),f(!1)},y=e=>{v(e),f(!0)};return(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("label",{className:"".concat(i&&"text-danger"," opacity-75 mt-3 fs-4 fw-medium "),htmlFor:l,children:n}),(0,a.jsx)("input",{id:l,name:l,type:"text",...t(l,{required:r}),className:"d-none"}),(0,a.jsx)(c,{activeSelect:x,handleSubmit:N,show:u,setSelected:A,handleClose:b}),p?(0,a.jsx)(g,{selectedItem:p,resetValue:w,handleSelect:y,handleShow:v}):(0,a.jsxs)("div",{className:"d-lg-flex col-12  m-auto mb-3 mt-2  ",children:[(0,a.jsx)("button",{onClick:y,className:" btn btn-pink col-12 col-lg-6 mt-lg-0  my-4 ",children:d}),(0,a.jsx)("button",{className:" mx-0 mx-lg-2 btn btn-withe  col-12 col-lg-6 mt-lg-0 my-0 my-lg-4",onClick:v,children:o})]})]})},subtitle:function(e){let{register:t,label:n,name:s,required:l,error:r,subLabel:i}=e;return(0,a.jsxs)("section",{children:[n&&(0,a.jsx)("label",{className:"opacity-75 mt-3 fs-4 fw-medium ",children:n}),i&&(0,a.jsx)("p",{className:" subtitle-form-generator mb-0 ",children:i})]})},sliser:function(e){let{label:t,name:n,error:s,setValue:l,register:r,required:i,marks:c,customChange:o,watch:d}=e,m=d(),u=e=>{l(n,c[e]),o&&o({setValue:l,newValue:c[e],values:m})};return(0,a.jsxs)("div",{className:"my-3",children:[(0,a.jsx)("label",{className:"title-form-generator ".concat(s&&"text-danger "),htmlFor:n,children:t}),(0,a.jsx)("div",{className:"mx-4 my-3 mb-5",children:(0,a.jsx)(b.Z,{...r(n,{required:i}),min:0,max:Object.keys(c).length-1,marks:c,onChange:u})})]})},custom:function(e){let t=e.Component;return(0,a.jsx)(t,{...e})},date:function(e){let{register:t,label:n,name:s,required:l,error:r,minDate:i="",maxDate:c="",watch:o,limitDays:d}=e,m=o();return(0,a.jsxs)("div",{className:"col-5",children:[(0,a.jsx)("label",{className:"".concat(r&&"text-danger"," title-form-generator my-2"),htmlFor:s,children:n}),(0,a.jsx)("div",{className:"d-flex ",children:(0,a.jsx)("div",{className:"  d-flex ",children:(0,a.jsx)("input",{type:"datetime-local",min:new Date(m[i]||null).toISOString().slice(0,16),max:(()=>{let e=new Date(m[c]||new Date);return d?new Date(e.getTime()-864e5*d):e})().toISOString().slice(0,16),className:"w-100 form-control my-2 fs-5 m-0 ".concat(r&&"border-danger "),...t(s,{required:l})})})})]})},range:function(e){let{label:t,name:n,error:s,maxRange:l=10,setValue:r,register:i,required:c,customChange:o,watch:d}=e,m=d();return(0,a.jsxs)("div",{className:"my-3",children:[(0,a.jsx)("label",{className:"form-check-label fw-bold ps-2 fs-6 my-2  ".concat(s&&"text-danger "),htmlFor:n,children:t}),(0,a.jsx)("div",{className:"mx-4",children:(0,a.jsx)(v.Range,{...i(n,{required:c}),values:[m[n]],onChange:e=>{r(n,e[0]),o&&o({setValue:r,newValue:e[0],values:m})},step:1,min:0,max:l,renderTrack:e=>{let{props:t,children:s}=e;return(0,a.jsx)("div",{onMouseDown:t.onMouseDown,onTouchStart:t.onTouchStart,style:{...t.style,height:"36px",display:"flex",width:"100%"},children:(0,a.jsx)("div",{ref:t.ref,style:{height:"5px",width:"100%",borderRadius:"4px",background:(0,v.getTrackBackground)({values:[m[n]],colors:["#C3286D","#ccc"],min:0,max:l}),alignSelf:"center"},children:s})})},renderThumb:e=>{let{props:t,isDragged:s}=e;return(0,a.jsx)("div",{...t,style:{...t.style,height:"42px",width:"50px",borderRadius:"4px",backgroundColor:"#FFF",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"0px 2px 6px #AAA",color:s?"#C3286D":"inherit"},children:m[n]||[0]})}})})]})},captchap:function(e){let{register:t,label:n,name:l,required:r,setValue:i,error:c}=e,[o,d]=(0,s.useState)(null);return(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:" form-check-label title-form-generator  ".concat(c&&"text-danger "),htmlFor:l,children:n}),(0,a.jsx)(N.Z,{sitekey:"6Lc8zg0oAAAAAHFQmcPdU8SLs86YvXWMfYTjEvaM",onChange:function(e){d(e),i(l,e)}}),(0,a.jsx)("input",{id:l,name:l,type:"text",...t(l,{required:r}),className:"d-none"})]})}};function C(e){return(null==e?void 0:e.startsWith("http://"))||(null==e?void 0:e.startsWith("https://"))}async function k(e,t){if("string"!=typeof e)return e;let n=C(e)?e:"".concat("https://www.api.rifaconcausa.org").concat(e),a=await fetch(n),s=await a.arrayBuffer(),l=new File([s],e,{type:t});return l}let F=async e=>new Promise((t,n)=>{let a=null==e?void 0:e.map(e=>k(e,"image/png"));Promise.all(a).then(e=>{t(e)}).catch(e=>n(e))})},265:function(e,t,n){n.d(t,{F7:function(){return s},I:function(){return r},KZ:function(){return l}});var a=n(444);let s=e=>(0,a.V)({endpoint:"/causes/my_causes/?page=".concat(e),method:"GET"}),l=e=>(0,a.V)({endpoint:"/causes/search/?name=".concat(e),method:"GET"}),r=e=>(0,a.V)({endpoint:"/prizes/search/?name=".concat(e,"&isFree=true"),method:"GET"})},5140:function(e,t,n){n.d(t,{e:function(){return l}});var a=n(265),s=n(4529);let l=(0,s.Ue)(e=>({isLoading:!1,causes:[],filterCauses:[],error:!1,paginacion:1,createdCauses:[],getCauses:async t=>{e({isLoading:!0});let{data:n}=await (0,a.F7)(t||1),s=n.next?t+1:null;e(e=>({causes:1===t?n.results:[...e.causes,...n.results],isLoading:!1,paginacion:s}))},resetCauses:()=>{e({causes:[]})},setCreatedCauses:t=>{e(e=>({createdCauses:[...e.createdCauses,t]}))},setFilterCauses:async t=>{e({isLoading:!0});let{data:n}=await (0,a.KZ)(t);e(e=>({filterCauses:n.results,isLoading:!1}))}}))},5067:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(265),s=n(444);let l=e=>(0,s.V)({endpoint:"/prizes/?page=".concat(e,"&isFree=true"),method:"GET"});var r=n(4529);let i=(0,r.Ue)(e=>({isLoading:!1,premio:[],error:!1,filterPremios:[],paginacion:1,createdPrizes:[],getPremio:async t=>{e({isLoading:!0});let{data:n}=await l(t||1),a=n.next?t+1:null;e(e=>({premio:1===t?n.results:[...e.premio,...n.results],isLoading:!1,paginacion:a}))},resetPremio:()=>{e({premio:[],paginacion:1})},setCreatedPrizes:t=>{e(e=>({createdPrizes:[...e.createdPrizes,t]}))},setFilterPremios:async t=>{e({isLoading:!0});let{data:n}=await (0,a.I)(t);e(e=>({filterPremios:n.results,isLoading:!1}))}}))},6843:function(e,t,n){n.d(t,{p:function(){return a}});let a=function(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1],n=(e=Number(e)).toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:0,useGrouping:!0});return t&&(n+=".00"),n}}}]);