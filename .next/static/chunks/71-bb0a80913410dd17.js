"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[71],{5909:function(e,s){s.Z={src:"/_next/static/media/logo-rifa-footer.e20d0103.png",height:85,width:180,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAdUlEQVR42mO4zpDre5Ex26VGPEwVyM67ypDjc40hJw1I2wAxA8M1htyCS4zZ8VFSAcr3GQrELzPmiADFZIBYCojBCvKBCmITJANV7jHky1xmyAFJSgOxLtAEBQagsZ4gK7IlghRuAK0DCsYBrYgB0inXGHIyAOAOLgU+Qd9rAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4}},9037:function(e,s){s.Z={src:"/_next/static/media/logoRifas.106db5b6.svg",height:114,width:130,blurWidth:0,blurHeight:0}},5709:function(e,s,t){t.d(s,{Z:function(){return y}});var a=t(5893),n=t(7294),l=t(7536),o=t(5675),i=t.n(o),c=t(6501),r=t(8193),d=t(9037),m=t(6843);let u=e=>{let{selectedItem:s,resetValue:t}=e;return(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"m-0 mt-2",children:"Causa seleccionada"}),(0,a.jsxs)("div",{className:"d-flex mt-2  ",children:[(0,a.jsx)(i(),{src:s.image||d.Z,alt:"logorifas",width:150,height:150,style:{objectFit:"cover"},className:"rounded"}),(0,a.jsxs)("div",{className:"ms-3",children:[(0,a.jsx)("h6",{className:"lh-1  fw-bold",children:s.name}),(0,a.jsx)("p",{className:"m-0 lh-sm",children:null==s?void 0:s.description}),(0,a.jsxs)("p",{className:"m-0 lh-sm pt-1",children:["Monto a recaudar:"," ",(0,a.jsxs)("span",{className:"fw-bold",children:["$",(0,m.p)(null==s?void 0:s.goal)]})]}),(0,a.jsx)("button",{className:"btn btn-pink  mt-3  mb-4",onClick:e=>{e.preventDefault(),t()},children:"Cambiar causa"})]})]})]})},x=e=>{let{selectedItem:s,resetValue:t}=e;return(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"m-0 mt-2",children:"Premio seleccionado"}),(0,a.jsxs)("div",{className:"d-flex mt-2  ",children:[(0,a.jsx)(i(),{src:s.image||d.Z,alt:"logorifas2",width:150,height:150,style:{objectFit:"cover"},className:"rounded"}),(0,a.jsxs)("div",{className:"ms-3",children:[(0,a.jsx)("h6",{className:"lh-1 fw-bold ",children:s.name}),(0,a.jsx)("p",{className:"m-0 lh-sm",children:null==s?void 0:s.description}),(0,a.jsxs)("p",{className:"m-0 lh-sm pt-1",children:["Monto a recaudar:"," ",(0,a.jsxs)("span",{className:"fw-bold",children:["$",(0,m.p)(Number(null==s?void 0:s.value))]})]}),(0,a.jsx)("button",{className:"btn btn-pink  mt-3  mb-4",onClick:e=>{e.preventDefault(),t()},children:"Cambiar premio"})]})]})]})},h={cause:u,prize:x};var f=t(6922);t(5213);var p=t(4398),j=t(4853);let A=e=>{let s={};return e.map(e=>{"title"!==e.type&&"custom"!==e.type&&"subtitle"!==e.type&&(s[e.name]=e.default||"")}),s},g={text:function(e){let{register:s,label:t,name:n,required:l,error:o,subLabel:i,disabled:c}=e;return(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"".concat(o&&"text-danger"," title-form-generator"),htmlFor:n,children:t}),""===i?null:(0,a.jsx)("p",{className:" text-secondary fs-6 mb-0 ".concat(o&&"text-danger"),children:i}),(0,a.jsx)("input",{id:n,name:n,disabled:c,type:"text",...s(n,{required:l}),className:"w-100 form-control my-2 fs-5 m-0 ".concat(o&&"border-danger ")})]})},email:function(e){let{register:s,label:t,name:n,required:l,error:o}=e;return(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"".concat(o&&"text-danger"," title-form-generator"),htmlFor:n,children:t}),(0,a.jsx)("input",{id:n,name:n,type:"email",...s(n,{required:l}),className:"w-100 form-control my-2 fs-5 ".concat(o&&"border-danger ")})]})},checkbox:function(e){let{register:s,label:t,name:n,required:l,error:o}=e;return(0,a.jsxs)("div",{className:"my-3",children:[(0,a.jsx)("input",{id:n,name:n,type:"checkbox",...s(n,{required:l}),className:" form-check-input ".concat(o&&"border-danger"," fs-5")}),(0,a.jsx)("label",{className:"ms-2 form-check-label title-form-generator  ".concat(o&&"text-danger "),htmlFor:n,children:t})]})},password:function(e){let{register:s,label:t,name:n,required:l,error:o}=e;return(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"".concat(o&&"text-danger"," title-form-generator"),htmlFor:n,children:t}),(0,a.jsx)("input",{id:n,name:n,type:"password",...s(n,{required:l}),className:"w-100 form-control my-2 fs-5  ".concat(o&&"border-danger ")})]})},number:function(e){let{register:s,label:t,name:n,required:l,setValue:o,error:i,watch:c,customChange:r}=e,d=c();return(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"".concat(i&&"text-danger"," title-form-generator"),htmlFor:n,children:t}),(0,a.jsx)("input",{id:n,name:n,type:"number",...s(n,{required:l}),className:"w-100 form-control my-2 fs-5 ".concat(i&&"border-danger "),onChange:e=>{o(n,e.target.value),r&&r({setValue:o,newValue:e.target.value,values:d})}})]})},title:function(e){let{register:s,label:t,name:n,required:l,error:o}=e;return(0,a.jsx)("div",{children:(0,a.jsx)("p",{className:"  fw-medium fs-3",style:{color:"#C3286D"},children:t})})},radioButton:function(e){let{register:s,label:t,name:n,required:l,error:o,options:i,disabledStyle:c}=e;return(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"".concat(o&&"text-danger"," title-form-generator"),htmlFor:n,children:t}),c?(0,a.jsx)("div",{className:"form-check",children:null==i?void 0:i.map((e,t)=>(0,a.jsxs)("div",{children:[(0,a.jsx)("input",{className:"form-check-input",value:e.value,...s(n,{required:l}),type:"radio",name:n,id:"".concat(n).concat(t+1)}),(0,a.jsx)("label",{className:"form-check-label",htmlFor:"".concat(n).concat(t+1),children:e.label})]},t))}):(0,a.jsx)("div",{className:"d-flex flex-wrap my-3",children:null==i?void 0:i.map((e,t)=>(0,a.jsxs)("div",{className:" btn btn-outline-secondary opacity-75  d-flex align-items-center me-2",children:[(0,a.jsx)("input",{value:e.value,...s(n,{required:l}),name:n,className:"form-check-input mt-0",type:"radio",id:"".concat(n).concat(t+1)}),(0,a.jsx)("label",{className:"text-gray m-0 ms-2 ",htmlFor:"".concat(n).concat(t+1),children:e.label})]},t))})]})},select:function(e){let{register:s,label:t,name:n,required:l,error:o,options:i,setValue:c,customChange:r,watch:d}=e,m=d();return(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"".concat(o&&"text-danger"," title-form-generator "),htmlFor:n,children:t}),(0,a.jsxs)("select",{...s(n,{required:l}),className:"form-select form-select-md my-2 fs-5 w-100 ".concat(o&&"border-danger "),onChange:e=>{c(n,e.target.value),r&&r({setValue:c,newValue:e.target.value,values:m})},children:[(0,a.jsx)("option",{selected:!0}),null==i?void 0:i.map((e,s)=>(0,a.jsx)("option",{value:e.value,children:e.label},s))]})]})},file:function(e){let{label:s,name:t,error:l,setValue:o,maxFile:d,subLabel:m,watch:u}=e,x=u(),[h,f]=(0,n.useState)([]),[p,j]=(0,n.useState)([]),A=d||5,g=(0,n.useRef)(null),N=e=>{let{files:s}=e.target;if(!(null==s?void 0:s.length)||!s)return;let a=s[0];if((null==p?void 0:p.length)===A){c.Am.error("Solo puedes subir ".concat(A," ").concat(A>1?"fotos":"foto"," "));return}let n=URL.createObjectURL(a);o(t,[...h,a]),f(e=>[...e,a]),j(e=>[...e,n])},y=e=>{o(t,h.filter((s,t)=>t!==e)),j(s=>s.filter((s,t)=>t!==e)),f(s=>s.filter((s,t)=>t!==e))},w=async()=>{if(!x[t])return;let e=await v(x[t]);f(e);let s=x[t].map(e=>b(e)?e:"".concat("https://www.api.rifaconcausa.org/").concat(e));j(s)};return(0,n.useEffect)(()=>{let e=setTimeout(()=>{w()},200);return()=>clearTimeout(e)},[]),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"".concat(l&&"text-danger"," title-form-generator  mt-2"),htmlFor:t,children:s}),""===m?null:(0,a.jsx)("p",{className:"  fs-6 mb-0",children:m}),(0,a.jsx)("input",{id:t,name:t,accept:"image/*",type:"file",onChange:e=>N(e),style:{display:"none"},ref:g}),(0,a.jsxs)("div",{className:"mt-4 w-100 d-flex flex-wrap mb-4",children:[p.map((e,s)=>(0,a.jsxs)("div",{className:"me-2 mb-2 position-relative ",children:[(0,a.jsx)(i(),{width:150,height:150,style:{objectFit:"cover"},className:"rounded",src:e,alt:"preview"},s),(0,a.jsx)("button",{onClick:e=>{e.preventDefault(),y(s)},className:"btn position-absolute top-0 end-0  mt-2 me-2 p-1 pt-0",children:(0,a.jsx)(r.LHV,{size:20,color:"white"})})]},s)),(0,a.jsxs)("button",{className:" bg-white",style:{width:"150px",height:"150px",borderStyle:"dashed"},onClick:e=>{var s;e.preventDefault(),null===(s=g.current)||void 0===s||s.click()},children:[(0,a.jsx)(r.hOO,{size:40,color:"#313131"}),(0,a.jsx)("p",{className:" fs-6",children:"Agrega o arrastra tus fotos aqu\xed"})]})]})]})},textarea:function(e){let{register:s,label:t,name:n,required:l,error:o,subLabel:i}=e;return(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"".concat(o&&"text-danger"," title-form-generator"),htmlFor:n,children:t}),""===i?null:(0,a.jsx)("p",{className:" text-secondary fs-6 mb-0 ".concat(o&&"text-danger"),children:i}),(0,a.jsx)("textarea",{...s(n,{required:l}),className:"w-100 form-control my-2 fs-5 ".concat(o&&"border-danger "),id:n,name:n,cols:5,rows:5})]})},selectItems:function(e){let{register:s,label:t,name:l,required:o,error:i,ModalComponent:c,createTitle:r,selectTitle:d,setValue:m}=e,[u,x]=(0,n.useState)(!1),[f,p]=(0,n.useState)(!1),[j,A]=(0,n.useState)(null),g=h[(null==j?void 0:j.type)||"cause"],b=()=>{x(!1),p(!1)},N=e=>{e.preventDefault(),x(!0)},v=e=>{A(e),m(l,e),x(!1)},y=()=>{A(null),m(l,null)};return(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("label",{className:"".concat(i&&"text-danger"," opacity-75 mt-3 fs-4 fw-medium "),htmlFor:l,children:t}),(0,a.jsx)("input",{id:l,name:l,type:"text",...s(l,{required:o}),className:"d-none"}),(0,a.jsx)(c,{activeSelect:f,handleSubmit:v,show:u,handleClose:b}),j?(0,a.jsx)(g,{selectedItem:j,resetValue:y}):(0,a.jsxs)("div",{className:"d-lg-flex col-12  m-auto mb-3 mt-2  ",children:[(0,a.jsx)("button",{onClick:e=>{N(e),p(!0)},className:" btn btn-pink col-12 col-lg-6 mt-lg-0  my-4 ",children:d}),(0,a.jsx)("button",{className:" mx-0 mx-lg-2 btn btn-withe  col-12 col-lg-6 mt-lg-0 my-0 my-lg-4",onClick:N,children:r})]})]})},subtitle:function(e){let{register:s,label:t,name:n,required:l,error:o,subLabel:i}=e;return(0,a.jsxs)("section",{children:[t&&(0,a.jsx)("label",{className:"opacity-75 mt-3 fs-4 fw-medium ",children:t}),i&&(0,a.jsx)("p",{className:" subtitle-form-generator mb-0 ",children:i})]})},sliser:function(e){let{label:s,name:t,error:n,setValue:l,register:o,required:i,marks:c,customChange:r,watch:d}=e,m=d(),u=e=>{l(t,c[e]),r({setValue:l,newValue:c[e],values:m})};return(0,a.jsxs)("div",{className:"my-3",children:[(0,a.jsx)("label",{className:"title-form-generator ".concat(n&&"text-danger "),htmlFor:t,children:s}),(0,a.jsx)("div",{className:"mx-4 my-3 mb-5",children:(0,a.jsx)(f.Z,{...o(t,{required:i}),min:0,max:Object.keys(c).length-1,marks:c,onChange:u})})]})},custom:function(e){let s=e.Component;return(0,a.jsx)(s,{...e})},date:function(e){let{register:s,label:t,name:n,required:l,error:o,minDate:i="",watch:c}=e,r=c();return(0,a.jsxs)("div",{className:"col-5",children:[(0,a.jsx)("label",{className:"".concat(o&&"text-danger"," title-form-generator my-2"),htmlFor:n,children:t}),(0,a.jsx)("div",{className:"d-flex ",children:(0,a.jsx)("div",{className:"col-5 col-md-7 d-md-flex d-flex ",children:(0,a.jsx)("input",{type:"datetime-local",min:new Date(r[i]||null).toISOString().slice(0,16),className:"w-100 form-control my-2 fs-5 m-0 ".concat(o&&"border-danger "),...s(n,{required:l})})})})]})},range:function(e){let{label:s,name:t,error:n,maxRange:l=10,setValue:o,register:i,required:c,customChange:r,watch:d}=e,m=d();return(0,a.jsxs)("div",{className:"my-3",children:[(0,a.jsx)("label",{className:"form-check-label fw-bold ps-2 fs-6 my-2  ".concat(n&&"text-danger "),htmlFor:t,children:s}),(0,a.jsx)("div",{className:"mx-4",children:(0,a.jsx)(p.Range,{...i(t,{required:c}),values:[m[t]],onChange:e=>{o(t,e[0]),r({setValue:o,newValue:e[0],values:m})},step:1,min:0,max:l,renderTrack:e=>{let{props:s,children:n}=e;return(0,a.jsx)("div",{onMouseDown:s.onMouseDown,onTouchStart:s.onTouchStart,style:{...s.style,height:"36px",display:"flex",width:"100%"},children:(0,a.jsx)("div",{ref:s.ref,style:{height:"5px",width:"100%",borderRadius:"4px",background:(0,p.getTrackBackground)({values:[m[t]],colors:["#C3286D","#ccc"],min:0,max:l}),alignSelf:"center"},children:n})})},renderThumb:e=>{let{props:s,isDragged:n}=e;return(0,a.jsx)("div",{...s,style:{...s.style,height:"42px",width:"50px",borderRadius:"4px",backgroundColor:"#FFF",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"0px 2px 6px #AAA",color:n?"#C3286D":"inherit"},children:m[t]||[0]})}})})]})},captchap:function(e){let{register:s,label:t,name:l,required:o,setValue:i,error:c}=e,[r,d]=(0,n.useState)(null);return(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:" form-check-label title-form-generator  ".concat(c&&"text-danger "),htmlFor:l,children:t}),(0,a.jsx)(j.Z,{sitekey:"6Lc8zg0oAAAAAHFQmcPdU8SLs86YvXWMfYTjEvaM",onChange:function(e){d(e),i(l,e)}}),(0,a.jsx)("input",{id:l,name:l,type:"text",...s(l,{required:o}),className:"d-none"})]})}};function b(e){return(null==e?void 0:e.startsWith("http://"))||(null==e?void 0:e.startsWith("https://"))}async function N(e,s){let t=b(e)?e:"".concat("https://www.api.rifaconcausa.org/").concat(e),a=await fetch(t),n=await a.arrayBuffer(),l=new File([n],e,{type:s});return l}let v=async e=>new Promise((s,t)=>{let a=null==e?void 0:e.map(e=>N(e,"image/png"));Promise.all(a).then(e=>{s(e)}).catch(e=>t(e))});function y(e){let{fields:s,submitData:t,buttonText:n="Enviar",loading:o=!1,renderButton:i}=e,{handleSubmit:c,register:r,formState:{errors:d},setValue:m,watch:u}=(0,l.cI)({defaultValues:A(s)});return(0,a.jsxs)("form",{className:"",onSubmit:c(t),children:[s.map((e,s)=>{let t=g[e.type];return(0,a.jsx)(t,{error:d[e.name],register:r,setValue:m,watch:u,...e},s)}),i?i(c(t)):(0,a.jsx)("button",{disabled:o,className:"btn btn-pink w-100 my-4",type:"submit",children:n})]})}},1071:function(e,s,t){t.d(s,{Z:function(){return B}});var a=t(5893),n=t(7294),l=t(5675),o=t.n(l),i={src:"/_next/static/media/logo-rifa-menu.ec6072d9.png",height:55,width:117,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAa0lEQVR42gXAQQoBYRQA4O/NjGGlpCRLR3ALCzdwBQfjHq4gkWTJxkYpzP8UB5vVN8p7N3nc1vfpsshzMEuO2DeYB89L/b0OVNtX/Loqo0VAA8iWSGqpF3TJGL0Gp+QzLHX3URaVGKGgj/YPADYkDn6vUeMAAAAASUVORK5CYII=",blurWidth:8,blurHeight:4},c=t(8596),r=t(5709),d=t(1649),m=t(3452),u=t(1163),x=t(1103),h=t(3231),f=t(212),p=t(4529);let j=(0,p.Ue)(e=>({showModal:!1,isLoading:!1,error:!1,postEmail:async s=>{try{return e({isLoading:!0}),await (0,f.Dc)(s),e({isLoading:!1}),!0}catch(s){return e({isLoading:!1,error:!0}),!1}},postValidateAccount:async s=>{try{e({isLoading:!0});let t=await (0,f.iz)(s);return await localStorage.setItem("sessionToken",t.data.access),await localStorage.setItem("sessionTokenRefresh",t.data.refresh),e({isLoading:!1}),t.data}catch(s){return e({isLoading:!1,error:!0}),!1}},setShowModal:s=>{e({showModal:s})}}));function A(e){let{show:s,handleClose:t}=e,n=(0,d.I0)(),{loading:l}=(0,d.v9)(m._9),o=(0,u.useRouter)(),i=j(e=>e.setShowModal),f=async e=>{let{payload:s}=await n((0,m.m3)(e));s&&(t(),o.push("/"))};return(0,a.jsx)(c.Z,{show:s,onHide:t,className:"custom-modal",children:(0,a.jsxs)(c.Z.Body,{className:"px-4",children:[(0,a.jsxs)("div",{className:"m-auto mb-5",children:[(0,a.jsx)("h4",{className:"text-secondary text-center m-0",children:"Iniciar sesi\xf3n"}),(0,a.jsx)("h4",{className:"text-secondary text-center m-0",children:"Para continuar"})]}),(0,a.jsx)("div",{style:{cursor:"pointer"},className:"fs-4 text-secondary position-absolute top-0 end-0 mx-3 my-2",onClick:t,children:"X"}),(0,a.jsx)(r.Z,{buttonText:"Iniciar sesion",fields:[{label:"Correo electr\xf3nico",name:"email",required:!0,type:"email"},{label:"Contrase\xf1a",name:"password",required:!0,type:"password"}],submitData:f,loading:l}),(0,a.jsx)("p",{onClick:()=>{t(),i(!0)},className:"text-center mb-3 fw-medium  password",children:"\xbfOlvidaste tu contrase\xf1a?"}),(0,a.jsxs)("div",{className:" mx-0 mx-md-auto d-flex flex-lg-wrap flex-wrap  justify-content-center mb-4",children:[(0,a.jsx)("div",{className:"my-2 my-md-0 mx-3",children:" "}),(0,a.jsxs)("div",{className:" mx-0 mx-md-auto d-flex flex-wrap  justify-content-center mb-4 p-0",children:[(0,a.jsx)("div",{className:"my-2 my-md-0 mx-2",children:(0,a.jsx)(h.Z,{handleClose:t})}),(0,a.jsx)("div",{className:" mt-1 mt-md-0 mx-2 ",children:(0,a.jsx)(x.t,{handleClose:t})})]}),(0,a.jsx)("div",{className:" border-bottom border-2 my-3  "}),(0,a.jsx)("h6",{onClick:()=>{t(),o.push("/registro")},className:"fw-bold  text-center registroAqui","style-":{cursor:"pointer"},children:"\xbfNo tienes una cuenta? Registrate aqui"}),(0,a.jsxs)("h6",{onClick:()=>{t(),o.push("/faq")},className:"fw-bold text-center mb-3",children:["\xbfPorque necesito una cuenta?"," "]})]})]})})}var g=t(9554),b={src:"/_next/static/media/portada-rifa1.7178cb16.jpg",height:220,width:301,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAAAwEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAuDf/xAAbEAACAgMBAAAAAAAAAAAAAAABAgQSAAMFEf/aAAgBAQABPwDpwo6xXZX2AVU18BBz/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQIBAT8Aj//EABYRAAMAAAAAAAAAAAAAAAAAAAACQf/aAAgBAwEBPwB4f//Z",blurWidth:8,blurHeight:6},N=t(8193),v=t(2377);function y(e){let{showNotification:s,setShowNotification:t}=e,l=(0,n.useRef)(),i=(0,v.G)(e=>e.isLoading),c=(0,v.G)(e=>e.error),r=(0,v.G)(e=>e.notifications);return(0,n.useEffect)(()=>{function e(e){l.current&&!l.current.contains(e.target)&&t(!1)}return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]),(0,a.jsx)(a.Fragment,{children:s&&(0,a.jsxs)("div",{ref:l,className:"container-modalNotification rounded-3 shadow",children:[(0,a.jsx)("div",{className:" contenedor border-bottom border rounded-3",children:(0,a.jsxs)("div",{className:" d-flex justify-content-around  pt-2 ",children:[(0,a.jsxs)("p",{className:" z-3 notification ",children:["Notificaciones (",r.length,")"]}),(0,a.jsx)("p",{className:"z-3 leido-notification ",children:"marcar todo como leido"})]})}),(0,a.jsxs)("div",{className:"mt-3 row m-0 border-bottom",children:[!!i&&(0,a.jsx)("p",{className:"m-0",children:"Cargando..."}),!!c&&(0,a.jsx)("p",{className:"m-0 text-danger ",children:"Error al cargar las notificaciones"}),!i&&!c&&r.map(e=>(0,a.jsxs)("section",{onClick:()=>{},children:[(0,a.jsx)("p",{className:"name-notifications m-0",children:e.subject}),(0,a.jsxs)("div",{className:"d-flex justify-content-between   row m-0 ",children:[(0,a.jsx)("div",{className:"col-4  p-0   ",children:(0,a.jsx)(o(),{className:" mt-1 size-imagenNotifications w-100 h-auto  rounded",src:b,alt:"portadarifa1"})}),(0,a.jsx)("p",{className:"col-6 px-1 parraf-notifications mt-1 mt-lg-0 ",children:e.message}),(0,a.jsx)("div",{className:"col-1 p-0 d-flex justify-content-center rounded   bg-white align-items-center mb-5",style:{width:"30px",height:"30px",border:"1px solid #70707036"},children:(0,a.jsx)(N.KP3,{size:20,style:{color:"#707070"}})})]})]},e.id))]})]})})}function w(e){let{showprofile:s,setShowProfile:t}=e,l=(0,d.I0)(),{authenticated:o,profile:i}=(0,d.v9)(m._9),[c,r]=(0,n.useState)(!1),x=(0,u.useRouter)();return(0,a.jsx)(a.Fragment,{children:s&&(0,a.jsx)("div",{className:"container-Profile me-0 me-md-1 rounded-3 shadow p-0  p-md-2",children:[{label:"Cerrar sesion",path:"/",onClick:()=>{l((0,m.wt)()),x.push("/")}},{label:"Asociacion",path:"/",onClick:()=>x.push("/dashboard")},{label:"Profile",path:"/",onClick:()=>x.push("/profile")}].map((e,s)=>(0,a.jsx)("p",{className:" mx-2 mx-md-3 my-2 ",style:{cursor:"pointer"},onClick:()=>{t(!1),e.onClick?e.onClick():x.push(e.path)},children:e.Icon?(0,a.jsxs)("div",{className:"position-relative ",children:[(0,a.jsx)("div",{className:"notification-active"}),(0,a.jsx)(e.Icon,{className:" size-icon m-0"})]}):e.label},s))})})}function C(e){let{selectOptions:s}=e,t=(0,u.useRouter)(),[l,o]=(0,n.useState)(!1);return(0,a.jsxs)("div",{children:[(0,a.jsx)(N.qTj,{className:"d-flex d-md-none position-absolute top-0 end-0 mx-4 mt-4",size:28,style:{cursor:"pointer"},onClick:()=>o(!l)}),l&&(0,a.jsx)("div",{className:"home-navbar d-md-none position-absolute z-1 flex-column w-100 py-2 text-center top-75 start-0 mt-3  bg-light  shadow p-3 mb-5 bg-body-tertiary",children:(0,a.jsx)("ul",{className:"  list-unstyled text-secondary align-items-center justify-content-center m-0",children:s.map((e,s)=>(0,a.jsx)("li",{className:" mx-4 my-2 cursor-pointer",onClick:()=>e.onClick?e.onClick():t.push(e.path),children:e.Icon?(0,a.jsx)(e.Icon,{className:"me-2"}):e.label},s))})})]})}function k(){let e=(0,u.useRouter)(),s=(0,d.I0)(),{authenticated:t,profile:l}=(0,d.v9)(m._9),[c,r]=(0,n.useState)(!1),[x,h]=(0,n.useState)(!1),f=(0,v.G)(e=>e.notificationsSize),p=j(e=>e.postValidateAccount),[b,N]=(0,n.useState)(!1),k=()=>N(!1),S=()=>N(!0),E=[{label:"Rifas",path:"/rifas"},{label:"Donaciones",path:"/donaciones"},{label:"Crear Rifa",path:"/rifas/crear_rifas"},{label:"Nosotros",path:"/nosotros"},{label:"Perfil",path:"/perfil",Icon:g.VGs,onClick:()=>r(!c)},{label:"Hola ".concat(null==l?void 0:l.full_name),path:"/",onClick:()=>h(!x)}],I=t?E:[{label:"Rifas",path:"/rifas"},{label:"Nosotros",path:"/nosotros"},{label:"Ingreso",path:"/",onClick:S},{label:"Registro",path:"/registro"}],R=async()=>{var t,a;(null==e?void 0:null===(t=e.query)||void 0===t?void 0:t.validateAccount)&&(await p(null==e?void 0:null===(a=e.query)||void 0===a?void 0:a.validateAccount),await s((0,m.ib)({})),e.push("/rifas/crear_rifas"))};return(0,n.useEffect)(()=>{let e=setTimeout(()=>R(),200);return()=>clearTimeout(e)},[]),(0,a.jsxs)("div",{className:"position-absolute top-0 w-100 ",children:[(0,a.jsx)(y,{showNotification:c,setShowNotification:r}),(0,a.jsx)(w,{setShowProfile:h,showprofile:x}),(0,a.jsx)(A,{show:b,handleClose:k}),(0,a.jsxs)("nav",{className:"d-md-flex justify-content-between align-items-center mt-2",children:[(0,a.jsx)("div",{className:"mx-0 mx-lg-2",style:{cursor:"pointer"},onClick:()=>e.push("/"),children:(0,a.jsx)(o(),{src:i,alt:"fondo",className:"img-fluid"})}),(0,a.jsx)(C,{selectOptions:I}),(0,a.jsx)("ul",{className:"d-none  home-navbar d-md-flex  list-unstyled text-secondary align-items-center justify-content-center m-0",children:I.map((s,t)=>(0,a.jsx)("li",{className:" mx-3 my-2",style:{cursor:"pointer"},onClick:()=>s.onClick?s.onClick():e.push(s.path),children:s.Icon?(0,a.jsxs)("div",{className:"position-relative",children:[(0,a.jsx)("div",{className:"notification-active",children:f}),(0,a.jsx)(s.Icon,{className:" size-icon m-0"})]}):s.label},t))})]})]})}var S=t(5909);function E(){let e=(0,u.useRouter)(),{authenticated:s}=(0,d.v9)(m._9),t=s?"/rifas/crear_rifas":"/registro",n=s?"/rifas":"/registro",l=s?"/donaciones":"/registro";return(0,a.jsx)("div",{children:(0,a.jsxs)("footer",{className:" mt-5 footer-fondo p-4  ",children:[(0,a.jsxs)("div",{className:"d-md-flex text-center text-md-start justify-content-md-between  p-0 mx-5",children:[(0,a.jsx)("div",{className:" mw-100   ",children:(0,a.jsx)(o(),{src:S.Z,alt:"fondo",className:" "})}),(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("h6",{className:".footer-title mt-5 mt-md-0 ",children:"\xa1R\xedfate!"}),(0,a.jsxs)("ul",{className:" list-unstyled footer-information ",children:[(0,a.jsx)("li",{className:"listas-footer",onClick:()=>e.push(t),children:"Inicia una rifa"}),(0,a.jsx)("li",{className:"listas-footer",onClick:()=>e.push(n),children:"Comprar boletos"}),(0,a.jsx)("li",{className:"listas-footer",onClick:()=>e.push(l),children:"Haz una donacion"}),(0,a.jsx)("li",{className:"listas-footer",onClick:()=>e.push("/registro"),children:"Crear una cuenta"})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h6",{className:".footer-title",children:"Nosotros"}),(0,a.jsxs)("ul",{className:" list-unstyled footer-information",children:[(0,a.jsx)("li",{onClick:()=>e.push("/nosotros"),className:"button-contacto",children:"Conocenos"}),(0,a.jsx)("li",{onClick:()=>e.push("/faq"),className:"button-contacto",children:"\xbfComo funciona?"}),(0,a.jsxs)("li",{onClick:()=>e.push("/contacto"),className:"button-contacto",children:[" ","\xbfNecesitas ayuda?"]})]})]})," ",(0,a.jsxs)("div",{children:[(0,a.jsx)("h6",{className:".footer-title",children:"Legal"}),(0,a.jsxs)("ul",{className:" list-unstyled footer-information",children:[(0,a.jsx)("li",{className:"button-contacto",onClick:()=>e.push("/terminosCondiciones"),children:"Terminos y condiciones"}),(0,a.jsx)("li",{className:"button-contacto",onClick:()=>e.push("/privacyNotice"),children:"Aviso de privacidad"}),(0,a.jsx)("li",{className:"button-contacto",onClick:()=>e.push("/frequentQuestions"),children:"Preguntan frecuentes"}),(0,a.jsx)("li",{onClick:()=>e.push("/contacto"),className:"button-contacto",children:"Reportar rifa"})]})]})," ",(0,a.jsxs)("div",{children:[(0,a.jsx)("h6",{className:".footer-title",children:"Redes"}),(0,a.jsxs)("ul",{className:" list-unstyled footer-information",children:[(0,a.jsx)("li",{onClick:()=>e.push("https://www.instagram.com/rifaconcausa/"),className:"button-contacto",children:"Instagram"}),(0,a.jsx)("li",{onClick:()=>e.push("https://www.facebook.com/profile.php?id=100094965330971"),className:"button-contacto",children:"Facebook"})]})]})]}),(0,a.jsxs)("div",{className:"mx-5 text-secondary fs-6 ",children:[(0,a.jsx)("p",{className:"m-0 footer-text ",children:"Escribenos"}),(0,a.jsx)("p",{className:"footer-text",children:"Contacto@rifaconcausa.org"})]}),(0,a.jsx)("div",{className:" border-bottom border-1 border-black opacity-25 w-auto mx-5  "}),(0,a.jsxs)("div",{className:"d-block d-lg-flex justify-content-between mt-3",children:[(0,a.jsx)("p",{className:"mx-5 footer-text",children:"2023. Rifa con Causa Todos los derechos reservados"}),(0,a.jsxs)("p",{className:"footer-text d-flex ",children:["Creado por ",(0,a.jsx)("p",{className:"mx-2 fw-bold",children:"Keep in Touch"})," \xa1hacemos que las cosas sucedan!"]})]})]})})}var I=t(6501);function R(){(0,d.I0)();let{loading:e}=(0,d.v9)(m._9),s=(0,u.useRouter)(),t=j(e=>e.setShowModal),n=j(e=>e.showModal),l=j(e=>e.postEmail),o=j(e=>e.isLoading),i=()=>{t(!1)},x=async e=>{let t=await l(e.email);t?(i(),s.push("/")):I.ZP.error("Ocurrio un error al enviar el correo")};return(0,a.jsx)("div",{children:(0,a.jsx)(c.Z,{className:"custom-modal",show:n,onHide:i,children:(0,a.jsxs)(c.Z.Body,{className:"px-4",children:[(0,a.jsx)("div",{className:"m-auto mb-4",children:(0,a.jsx)("h4",{className:"text-secondary text-center m-0",children:"Olvidaste tu contrasena"})}),(0,a.jsx)("div",{style:{cursor:"pointer"},className:"fs-4 text-secondary position-absolute top-0 end-0 mx-3 my-2",onClick:i,children:"X"}),(0,a.jsx)(r.Z,{buttonText:"Enviar",fields:[{label:"Correo electr\xf3nico",name:"email",required:!0,type:"email"}],submitData:x,loading:o})]})})})}function F(e){let{handleClose:s,show:t,code:n}=e,l=(0,d.I0)(),{loading:o}=(0,d.v9)(m._9),i=(0,u.useRouter)(),x=async e=>{let{payload:t}=await l((0,m.m3)({...e,code:n}));t&&(s(),i.push("/"))};return(0,a.jsx)("div",{children:(0,a.jsx)(c.Z,{className:"custom-modal",show:t,onHide:s,children:(0,a.jsxs)(c.Z.Body,{className:"px-4",children:[(0,a.jsx)("div",{className:"m-auto mb-4",children:(0,a.jsx)("h4",{className:"text-secondary text-center m-0",children:"Recuperar Contrase\xf1a"})}),(0,a.jsx)("div",{style:{cursor:"pointer"},className:"fs-4 text-secondary position-absolute top-0 end-0 mx-3 my-2",onClick:s,children:"X"}),(0,a.jsx)(r.Z,{buttonText:"Enviar",fields:[{label:"Contrase\xf1a",name:"paswword",required:!0,type:"password"},{label:"Confirmar Contrase\xf1a",name:"password-confirmation",required:!0,type:"password"}],submitData:x,loading:o})]})})})}function B(e){let{children:s,home:t}=e,l=(0,u.useRouter)(),[o,i]=(0,n.useState)(!1),[c,r]=(0,n.useState)(""),d=()=>i(!1);return(0,n.useEffect)(()=>{var e,s;(null==l?void 0:null===(e=l.query)||void 0===e?void 0:e.recoverPassword)&&(i(!0),r(null==l?void 0:null===(s=l.query)||void 0===s?void 0:s.recoverPassword))},[]),(0,a.jsxs)("main",{className:" position-relative mx-auto ",style:{maxWidth:"1440px",paddingTop:"62px"},children:[(0,a.jsx)(R,{}),(0,a.jsx)(F,{handleClose:d,show:o,code:c}),(0,a.jsxs)("div",{children:[(0,a.jsx)(k,{}),(0,a.jsx)("div",{className:"mx-3 mx-lg-3",children:s}),(0,a.jsx)(E,{})]})]})}},3231:function(e,s,t){t.d(s,{Z:function(){return d}});var a=t(5893),n=t(3452),l=t(1163);t(7294);var o=t(8228),i=t.n(o),c=t(3750),r=t(1649);function d(e){let{handleClose:s}=e,t=(0,r.I0)(),o=(0,l.useRouter)(),d=async e=>{let{payload:a}=await t((0,n.yx)({token:e.accessToken}));a&&(s(),o.push("/"))};return(0,a.jsx)(i(),{appId:"679244714108869",fields:"name,email,picture",callback:d,render:e=>(0,a.jsxs)("button",{onClick:()=>{e.onClick()},className:"btn btn-primary ",style:{backgroundColor:"#3b5998",border:"none"},children:[(0,a.jsx)(c.k1O,{size:18,className:"me-2 me-lg-3"}),"Continuar con facebook"]})})}},1103:function(e,s,t){t.d(s,{t:function(){return c}});var a=t(5893),n=t(3452),l=t(1163),o=t(7294),i=t(1649);let c=e=>{let{handleClose:s}=e,t=(0,i.I0)(),c=(0,l.useRouter)();(0,o.useEffect)(()=>{window.onGoogleSuccess=e=>{r(e)};let e=document.createElement("script");return e.src="https://accounts.google.com/gsi/client",e.async=!0,document.body.appendChild(e),()=>{window.onGoogleSuccess=void 0,document.body.removeChild(e)}},[]);let r=async e=>{let{payload:a}=await t((0,n.UF)(e));a&&(s(),c.push("/"))};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{id:"g_id_onload","data-client_id":"388797586221-62o9ph0f22lokf6i4c4apjkstr7t775c.apps.googleusercontent.com","data-callback":"onGoogleSuccess","data-context":"signin","data-ux_mode":"popup","data-auto_prompt":"false",style:{width:"100%",display:"flex",justifyContent:"center"}}),(0,a.jsx)("div",{className:"g_id_signin ","data-type":"standard","data-shape":"rectangular","data-theme":"outline","data-text":"signin_with","data-size":"large","data-logo_alignment":"left",style:{width:"100%",display:"flex",justifyContent:"center"}})]})}},6843:function(e,s,t){t.d(s,{p:function(){return a}});let a=e=>(e=Number(e)).toLocaleString("es-ES",{minimumFractionDigits:0,maximumFractionDigits:0})}}]);