"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[814],{7896:function(e,a){a.Z={src:"/_next/static/media/Contacto-bg.5de213e9.jpg",height:150,width:1920,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAEACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAwb/2gAMAwEAAhADEAAAAI4a4//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z",blurWidth:8,blurHeight:1}},8837:function(e,a,s){s.d(a,{Z:function(){return l}});var t=s(5893),n=s(7294),i=s(3750),r=s(2708);function l(e){let{head:a,options:s,Component:l,actions:o,disableFilter:c,title:d,pagination:u,getRequest:m,loading:x}=e,[f,h]=(0,n.useState)(""),[p,g]=(0,n.useState)({startDate:null,endDate:null}),[A,j]=(0,r.YD)({triggerOnce:!1});(0,n.useEffect)(()=>{j&&u&&m&&m(u)},[j]);let b=f||p.startDate||p.endDate?s.filter(e=>{if(p.startDate&&p.endDate){let a=new Date(p.startDate).getTime(),s=new Date(p.endDate).getTime(),t=e.created_at.split("T")[0],n=new Date(t).getTime();if(!(a<=n)||!(n<=s))return!1;if(!f)return!0}return Object.keys(e).some(a=>"string"==typeof e[a]?e[a].toLowerCase().includes(f.toLowerCase()):"number"==typeof e[a]&&e[a].toString().includes(f.toLowerCase()))}):s,v=e=>{g({...p,[e.target.name]:e.target.value})};return(0,t.jsxs)("div",{className:"pt-3 background-dashboard mt-3 ",children:[d&&(0,t.jsx)("p",{className:"mt-3 ps-3 details-Cartera ",children:d}),!c&&(0,t.jsxs)("div",{className:"d-md-flex justify-content-between px-3",children:[(0,t.jsxs)("div",{className:"d-flex align-items-center justify-content-center  mb-3",children:[(0,t.jsx)("h6",{className:"me-2",children:"Fechas "}),(0,t.jsxs)("div",{className:"rounded-3 d-flex overflow-hidden ",children:[(0,t.jsx)("input",{name:"startDate",type:"date",value:p.startDate||"",onChange:v,className:"w-100 form-control rounded-0  "}),(0,t.jsx)("input",{name:"endDate",value:p.endDate||"",onChange:v,type:"date",className:"w-100 form-control rounded-0  "})]})]}),(0,t.jsxs)("div",{className:" input-search mb-3",children:[(0,t.jsx)("input",{type:"text",value:f,onChange:e=>h(e.target.value),className:"form-control",placeholder:"Buscar "}),(0,t.jsx)("button",{className:"btn btn-search",type:"button",id:"button-addon2",children:(0,t.jsx)(i.dVI,{})})]})]}),(0,t.jsxs)("div",{className:"table-responsive  mx-3 ",children:[(0,t.jsxs)("table",{className:"table ",children:[(0,t.jsx)("thead",{className:"container-cartera ",children:(0,t.jsx)("tr",{className:"",children:a.map((e,a)=>(0,t.jsx)("th",{className:"select-DashboarRifas px-2 text-left",scope:"col",style:e.width?{width:e.width}:{},children:e.label},a))})}),(0,t.jsx)("tbody",{children:b.map((e,a)=>(0,t.jsx)(l,{actions:o,option:e,index:a},a))})]}),x&&(0,t.jsx)("div",{style:{height:"1000px"}}),(0,t.jsx)("div",{ref:A})]})]})}},5085:function(e,a,s){s.d(a,{Z:function(){return l}});var t=s(5893),n=s(4568),i=s(1163);s(7294);var r=s(5434);function l(e){let{renderButton:a,screen:s,profile:l}=e,o=(0,i.useRouter)(),c=(0,n.R)(e=>e.asociations),d=c.find(e=>e.id===Number(o.query.id));return(0,t.jsxs)("div",{className:"background-dashboard  d-block d-lg-flex justify-content-between align-items-center p-3 col-12 ",children:[(0,t.jsx)("div",{className:" d-block d-md-flex mt-2 ",children:(0,t.jsxs)("p",{className:"title-dashboard mx-2  ",children:[!l&&"".concat(null==d?void 0:d.association_name," / "),s]})}),(0,t.jsxs)("div",{className:"d-flex justify-content-between align-items-center ",children:[!l&&(0,t.jsxs)("button",{className:" p-2 me-3 button-dashboard m-0 ",onClick:()=>o.push("/dashboard/"),children:[(0,t.jsx)(r.sG8,{}),"Mis asociaciones"]}),a&&a()]})]})}},103:function(e,a,s){s.d(a,{Z:function(){return c}});var t=s(5893),n=s(5913),i=s(5675),r=s.n(i);s(7294);var l=s(9583),o=s(3037);function c(e){let{option:a,index:s,actions:i}=e,{setShowEdit:c,setShowInfo:d}=i;return(0,t.jsxs)("tr",{className:"border position-relative text-left",style:{background:s%2==0?"#F2F2F2":"#fff"},children:[(0,t.jsxs)("th",{scope:"row text-center ",children:[(0,t.jsx)("div",{className:"position-absolute top-0 start-0 borderLateral-Rifas ",style:{backgroundColor:(0,n.sG)(a.status)}}),(0,t.jsx)("div",{className:"  d-flex justify-content-start align-items-center  icon ms-3 w-full",children:(0,t.jsx)(r(),{width:50,height:50,src:a.image||o.Z,alt:a.name,className:"rounded"})})]}),(0,t.jsxs)("td",{children:[(0,t.jsx)("h6",{className:"text-cartera px-2 ",children:a.name}),(0,t.jsx)("p",{className:"parraf-cartera px-2",children:a.informacion})]}),(0,t.jsx)("td",{className:"number-dashboardRifas ",children:new Date(a.created_at).toLocaleDateString()}),(0,t.jsx)("td",{className:"number-dashboardRifas ",children:a.value}),(0,t.jsx)("td",{style:{color:(0,n.sG)(a.status)},className:"number-dashboardRifas px-3",children:(0,n.Eu)(a.status)}),(0,t.jsx)("td",{className:"icon-dashboarRifas ",children:(0,t.jsx)(l.ffH,{onClick:()=>{c(a)},color:"#2161BD",size:18})})]})}},623:function(e,a,s){s.d(a,{Z:function(){return u}});var t=s(5893);s(7294);var n=s(8596),i=s(7488),r=s(1649),l=s(8424),o=s(4568),c=s(5539),d=s(1163);function u(e){var a,s;let{show:u,setShow:m,handleReset:x}=e,{loading:f}=(0,r.v9)(l.VB);(0,d.useRouter)();let h=(0,c.E)(e=>e.updatePrize),{prizesCategories:p}=(0,r.v9)(l.VB),g=(0,o.R)(e=>e.asociations),A=async e=>{await h(u.id,e,u),x()},j=(null==u?void 0:u.images)&&(null==u?void 0:null===(a=u.images)||void 0===a?void 0:a.length)>0?null==u?void 0:null===(s=u.images)||void 0===s?void 0:s.map(e=>e.file):[],b=[{label:" \xbfCu\xe1l es el nombre del premio?",name:"name",required:!0,type:"text",default:null==u?void 0:u.name},{label:"\xbfCu\xe1l es la descripci\xf3n del  premio?*",name:"description",required:!0,type:"textarea",default:null==u?void 0:u.description},{label:"\xbfQu\xe9 categor\xeda describe tu producto?*",name:"category",required:!0,type:"select",options:p.map(e=>({label:e.name,value:e.id})),default:null==u?void 0:u.category},{label:"\xbfCu\xe1l es el precio de tu producto (pesos MXN)?*",name:"value",required:!0,type:"number",default:null==u?void 0:u.value},{label:"\xbfQuieres asignar tu premio a alguna Asociaci\xf3n?",name:"association",required:!1,type:"select",options:g.map(e=>({label:e.association_name,value:e.id})),default:null==u?void 0:u.association},{label:"\xbfCu\xe1l es la condici\xf3n de tu producto?*",name:"status",required:!0,type:"radioButton",options:[{label:"Nuevo",value:"nuevo"},{label:"Usado",value:"usado"}],default:"nuevo"},{label:"Agrega las fotos de tu premio",name:"image",required:!1,type:"file",default:[...j]}];return(0,t.jsx)(t.Fragment,{children:u?(0,t.jsx)("div",{children:(0,t.jsx)(n.Z,{className:"custom-modal",show:u,setShowScreen:()=>m(!1),children:(0,t.jsxs)(n.Z.Body,{className:"px-4",children:[(0,t.jsx)("div",{className:"m-auto mb-4",children:(0,t.jsx)("h4",{className:"text-secondary text-center m-0",children:"Editar Premio"})}),(0,t.jsx)("div",{style:{cursor:"pointer"},className:"fs-4 text-secondary position-absolute top-0 end-0 mx-3 my-2",onClick:()=>m(!1),children:"X"}),(0,t.jsx)(i.Z,{buttonText:"Guardar Causa",fields:b,submitData:A,loading:f})]})})}):null})}},6782:function(e,a,s){s.d(a,{Z:function(){return o}});var t=s(5893);s(7294);var n=s(8596),i=s(7488),r=s(1649),l=s(8424);function o(e){let{show:a,setShow:s}=e,o=async e=>{},{loading:c}=(0,r.v9)(l.VB);return(0,t.jsx)(t.Fragment,{children:a?(0,t.jsx)(n.Z,{className:"custom-modal",show:a,setShowScreen:()=>s(!1),children:(0,t.jsxs)(n.Z.Body,{className:"px-4",children:[(0,t.jsx)("div",{className:"m-auto mb-4",children:(0,t.jsx)("h4",{className:"text-secondary text-center m-0",children:"Editar Rifa"})}),(0,t.jsx)("div",{style:{cursor:"pointer"},className:"fs-4 text-secondary position-absolute top-0 end-0 mx-3 my-2",onClick:()=>s(!1),children:"X"}),(0,t.jsx)(i.Z,{buttonText:"Guardar Rifa",fields:[],submitData:o,loading:c})]})}):null})}},1541:function(e,a,s){s.d(a,{Z:function(){return o}});var t=s(5893);s(7294);var n=s(8596),i=s(7488),r=s(1649),l=s(8424);function o(e){let{show:a,setShow:s}=e,o=async e=>{},{loading:c}=(0,r.v9)(l.VB);return(0,t.jsx)(t.Fragment,{children:a?(0,t.jsx)("div",{className:"",children:(0,t.jsx)(n.Z,{className:"custom-modal",show:a,setShowScreen:()=>s(!1),children:(0,t.jsxs)(n.Z.Body,{className:"px-4",children:[(0,t.jsx)("div",{className:"m-auto mb-4",children:(0,t.jsx)("h4",{className:"text-secondary text-center m-0",children:"Informaci\xf3n del Premio"})}),(0,t.jsx)("div",{style:{cursor:"pointer"},className:"fs-4 text-secondary position-absolute top-0 end-0 mx-3 my-2",onClick:()=>s(!1),children:"X"}),(0,t.jsx)(i.Z,{buttonText:"Cerrar",fields:[{label:"Nombre del premio ",name:"name-cause",required:!0,type:"text"},{label:"Descripci\xf3n del premio",name:"descriptions-cause",required:!0,type:"textarea"},{label:"Fotos de tu premio",name:"photo",required:!1,type:"file"}],submitData:o,loading:c}),(0,t.jsxs)("div",{className:"d-flex align-items-center m-0 ",children:[(0,t.jsx)("p",{className:"title-informationCausa",children:"Agregado por: "}),(0,t.jsx)("p",{className:"information-cause mx-2",children:"Cuautli Martinez"})]}),(0,t.jsxs)("div",{className:"d-flex align-items-center m-0 ",children:[(0,t.jsxs)("p",{className:"title-informationCausa",children:["Fecha en que se agrego:"," "]}),(0,t.jsx)("p",{className:"information-cause mx-2",children:" 31/05/2023"})]}),(0,t.jsxs)("div",{className:"d-flex align-items-center m-0",children:[(0,t.jsx)("p",{className:"title-informationCausa",children:"Monto a lograr: "}),(0,t.jsx)("p",{className:"information-cause mx-2",children:" $ 1000.00 pesos"})]}),(0,t.jsxs)("div",{className:"d-flex align-items-center m-0 p-0",children:[(0,t.jsx)("p",{className:"title-informationCausa ",children:"Estado de tu rifa: "}),(0,t.jsx)("p",{className:"mx-2 information-cause",children:"Tu rifa esta en proceso de verificaci\xf3n."})]})]})})}):null})}},4258:function(e,a,s){s.d(a,{Z:function(){return o}});var t=s(5893);s(7294);var n=s(8596),i=s(7488),r=s(1649),l=s(8424);function o(e){let{show:a,setShow:s}=e,o=async e=>{},{loading:c}=(0,r.v9)(l.VB);return(0,t.jsx)(t.Fragment,{children:a?(0,t.jsx)(n.Z,{className:"custom-modal",show:a,setShowScreen:()=>s(!1),children:(0,t.jsxs)(n.Z.Body,{className:"px-4",children:[(0,t.jsx)("div",{className:"m-auto mb-4",children:(0,t.jsx)("h4",{className:"text-secondary text-center m-0",children:"Informaci\xf3n del Premio"})}),(0,t.jsx)("div",{style:{cursor:"pointer"},className:"fs-4 text-secondary position-absolute top-0 end-0 mx-3 my-2",onClick:()=>s(!1),children:"X"}),(0,t.jsx)(i.Z,{buttonText:"Cerrar",fields:[],submitData:o,loading:c})]})}):null})}},8323:function(e,a,s){s.d(a,{Z:function(){return v}});var t=s(5893),n=s(7294),i=s(8596),r=s(5434),l=s(8193),o=s(3854),c=s(9583),d=s(1649),u=s(8424),m=s(3452),x=s(1163),f=s(5067),h=s(5616),p=s(7486),g=s(3316),A=s(6968);let j=(e,a)=>e===a?(0,t.jsx)(r.rWj,{size:30}):(0,t.jsx)(r.Ix0,{size:30});function b(e){let{nextStep:a,backStep:s,disable:i}=e;(0,x.useRouter)();let[r,b]=(0,n.useState)(1),[v,y]=(0,n.useState)({}),N=(0,f.Z)(e=>e.getPremio),w=(0,d.I0)(),{profile:C}=(0,d.v9)(m._9),D=(null==C?void 0:C.role)===1,L=e=>{y({...v,...e}),b(e=>e+1)},Z=async()=>{let{payload:e}=await w((0,u.ni)(v));if(!e)return b(1);N(1),a()},B=()=>{b(1),y({})};return D||i?(0,t.jsxs)("div",{className:"mx-4",children:[(0,t.jsxs)("h2",{className:"title-page-rifaRegistro my-4",children:["\xa1Es momento de rifarnos ",null==C?void 0:C.full_name,"!"]}),(0,t.jsxs)("div",{className:"  bg-white mb-3 col-12 col-lg-8 m-auto  ",children:[(0,t.jsx)("div",{className:" d-flex justify-content-between align-items-center    ",onClick:()=>{},children:(0,t.jsxs)("button",{onClick:()=>r>1&&b(1),className:" fs-4 text-light  fondo-crear-rifa  d-flex justify-content-between align-item-center  ".concat(1===r?" opacity-50 ":" opacity-100  "),children:[(0,t.jsxs)("div",{className:"text-fondo-container",children:[(0,t.jsx)(l.pp5,{size:25,className:"me-2"}),"Configura el premio tu rifa"]}),(0,t.jsx)("div",{className:"m-0",children:j(r,1)})]})}),(0,t.jsx)("div",{className:"".concat(1!==r&&"d-none"),children:(0,t.jsx)(p.Z,{handleChangeRaffle:L})}),(0,t.jsx)("div",{className:" d-flex justify-content-between align-items-center  mt-4  ",children:(0,t.jsxs)("button",{onClick:()=>r>2&&b(2),className:" fs-4  text-light fondo-crear-rifa d-flex justify-content-between align-item-center ".concat(2===r?" opacity-50 ":" opacity-100  "),children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(o.GwR,{})," Define los datos de tu rifa"]}),(0,t.jsx)("div",{className:"m-0",children:j(r,2)})]})}),(0,t.jsx)("div",{className:"".concat(2!==r&&"d-none"),children:(0,t.jsx)(g.Z,{handleChangeRaffle:L})}),(0,t.jsx)("div",{className:" d-flex justify-content-around align-items-center   mt-4   ",children:(0,t.jsxs)("button",{className:" fs-4 text-light fondo-crear-rifa d-flex justify-content-between align-item-center ".concat(3===r?" opacity-50 ":" opacity-100  "),children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(c.uQe,{})," Confirmaci\xf3n de la rifa"]}),(0,t.jsx)("div",{className:"m-0",children:j(r,3)})]})}),(0,t.jsx)("div",{className:"".concat(3!==r&&"d-none"),children:(0,t.jsx)(A.Z,{handleSubmit:Z,resetRaffle:B,raffle:v})})]})]}):(0,t.jsx)(h.Z,{})}function v(e){let{showModalRaffle:a,handleClose:s}=e;return(0,t.jsx)(t.Fragment,{children:a?(0,t.jsx)("div",{children:(0,t.jsxs)(i.Z,{className:"",size:"xl",show:a,handleCloseDelete:s,children:[(0,t.jsxs)("div",{className:"modal-header",children:[(0,t.jsxs)("h4",{className:"modal-title text-secondary text-center m-0",id:"staticBackdropLabel",children:[" ","Crear una Rifa"]}),(0,t.jsx)("button",{style:{cursor:"pointer"},className:"fs-4 text-secondary position-absolute top-0 end-0 mx-3 my-2 btn-close",onClick:s,type:"button","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,t.jsx)(i.Z.Body,{className:"",children:(0,t.jsx)(b,{disable:!0,handleClose:s})}),(0,t.jsx)("div",{className:"modal-footer",children:(0,t.jsx)("button",{onClick:s,type:"button",className:"btn btn-border-pink","data-bs-dismiss":"modal",children:"Cerrar"})})]})}):null})}},8393:function(e,a,s){s.d(a,{Z:function(){return m}});var t=s(5893),n=s(7294),i=s(8596),r=s(3680),l=s(7488),o=s(1649),c=s(8424),d=s(5951),u=s(4568);function m(e){let{showScreen:a,handleClose:s,handleSubmit:m,activeSelect:x,setShowScreen:f,handleReset:h}=e,p=(0,o.I0)(),[g,A]=(0,n.useState)(!1),{prizesCategories:j}=(0,o.v9)(c.VB),b=(0,u.R)(e=>e.asociations),v=[{label:" \xbfCu\xe1l es el nombre del premio?",name:"name",required:!0,type:"text"},{label:"\xbfCu\xe1l es la descripci\xf3n del  premio?*",name:"description",required:!0,type:"textarea"},{label:"\xbfQu\xe9 categor\xeda describe tu producto?*",name:"category",required:!0,type:"select",options:j.map(e=>({label:e.name,value:e.id}))},{label:"\xbfCu\xe1l es el precio de tu producto (pesos MXN)?*",name:"value",required:!0,type:"number"},{label:"\xbfQuieres asignar tu premio a alguna Asociaci\xf3n?",name:"association",required:!1,type:"select",options:b.map(e=>({label:e.association_name,value:e.id}))},{label:"\xbfCu\xe1l es la condici\xf3n de tu producto?*",name:"status",required:!0,type:"radioButton",options:[{label:"Nuevo",value:"nuevo"},{label:"Usado",value:"usado"}]},{label:"Agrega las fotos de tu premio",name:"image",required:!1,type:"file"}],y=async e=>{A(!0);let{payload:a}=await p((0,c.FL)(e));a&&(f(),h()),A(!1)};return(0,t.jsx)("section",{children:(0,t.jsx)(i.Z,{show:a,onHide:s,className:"custom-modal ",children:(0,t.jsxs)(i.Z.Body,{className:"px-4",children:[(0,t.jsxs)(i.Z.Header,{children:[!x&&(0,t.jsx)("h4",{className:"title-Modal",children:"Donar premio"}),x&&(0,t.jsx)("h4",{className:"title-Modal",children:"Seleccionar premio"})]}),(0,t.jsx)("div",{style:{cursor:"pointer"},className:"fs-4 text-secondary position-absolute top-0 end-0 mx-3 my-2",onClick:s,children:"X"}),!x&&(0,t.jsx)("div",{className:"mt-4",children:(0,t.jsx)(l.Z,{fields:v,submitData:y,loading:g,renderButton:e=>(0,t.jsxs)("section",{className:"row w-100 mx-auto mt-5   ",children:[(0,t.jsx)("div",{className:"border-bottom  border border-dark opacity-50 w-100 "}),(0,t.jsxs)("div",{className:"d-flex justify-content-end mt-3",children:[(0,t.jsx)("div",{className:"col-3 p-0 pe-2   ",children:(0,t.jsx)(r.Z,{disabled:g,variant:"secondary",onClick:s,className:"w-100 text-dark bg-light",children:"Cerrar"})}),(0,t.jsx)("div",{className:"col-4 p-0 ps-2 ",children:(0,t.jsx)(r.Z,{disabled:g,variant:"secondary",type:"submit",className:"w-100 btn btn-pink",onClick:a=>{a.preventDefault(),e()},children:"Guardar premio"})})]})]})})}),x&&(0,t.jsx)(d.Z,{handleSubmit:m})]})})})}},4568:function(e,a,s){s.d(a,{R:function(){return c},p:function(){return o}});var t=s(4529),n=s(3697),i=s(3843),r=s(9956),l=s(6501);let o=(0,t.Ue)(e=>({isLoading:!1,raffle:[],error:!1,rafflePurchase:[],paginacion:1,getRaffle:async a=>{e({isLoading:!0});let{data:s}=await (0,n.Kj)(a);e({raffle:s.results,isLoading:!1})},getRafflesPurchase:async a=>{try{e({isLoading:!0});let{data:s}=await (0,i.bN)(a||1),t=s.next?a+1:null;e(e=>({rafflePurchase:1===a?s.results:[...e.rafflePurchase,...s.results],isLoading:!1,paginacion:t}))}catch(e){}}})),c=(0,t.Ue)(e=>({isLoading:!1,asociations:[],resumen:[],error:!1,wallets:[],pagination:1,paginationProfile:1,user:[],resumenProfile:[],microsite:null,site:null,walletsProfile:[],getAsociations:async()=>{e({isLoading:!0});let{data:a}=await (0,i.fM)();e({asociations:a.results,isLoading:!1})},getWallet:async(a,s)=>{e({isLoading:!0});let{data:t}=await (0,n.An)(a,s),i=t.next?s+1:null;e(e=>({wallets:1===s?t.results:[...e.wallets,...t.results],isLoading:!1,pagination:i}))},getWalletProfile:async a=>{e({isLoading:!0});let{data:s}=await (0,n.l)(a),t=s.next?a+1:null;e(e=>({walletsProfile:1===a?s.results:[...e.walletsProfile,...s.results],isLoading:!1,paginationProfile:t}))},getUser:async(a,s)=>{try{e({isLoading:!0});let{data:t}=await (0,n.ep)(a,s),i=t.next?s+1:null;e(e=>({user:1===s?t.results:[...e.user,...t.results],isLoading:!1,pagination:i}))}catch(e){}},setAddUser:async(a,s)=>{try{return e({isLoading:!0}),await (0,n.c5)(a,s),e(e=>({isLoading:!1})),!0}catch(a){return(0,r.S)(a),e(e=>({isLoading:!1})),!1}},setCreateUser:async(a,s)=>{try{return e({isLoading:!0}),await (0,n.ng)(a,s),e(e=>({isLoading:!1})),!0}catch(a){return(0,r.S)(a),e(e=>({isLoading:!1})),!1}},setEditUser:async(a,s)=>{try{return e({isLoading:!0}),await (0,n.qN)(a,s),e(e=>({isLoading:!1})),!0}catch(a){return(0,r.S)(a),e(e=>({isLoading:!1})),!1}},setRemoveUser:async(a,s)=>{try{return e({isLoading:!0}),await (0,n.Ie)(a,s),e(e=>({isLoading:!1})),!0}catch(a){return(0,r.S)(a),e(e=>({isLoading:!1})),!1}},getResumen:async a=>{e({isLoading:!0});let{data:s}=await (0,n.eB)(a);e({resumen:s,isLoading:!1})},getResumenProfile:async()=>{try{e({isLoading:!0});let{data:a}=await (0,n.zQ)();e({resumenProfile:a,isLoading:!1})}catch(e){}},getSite:async a=>{try{e({isLoading:!0});let{data:s}=await (0,n.NP)(a);e({site:s,isLoading:!1})}catch(e){}},getMicrosite:async a=>{try{e({isLoading:!0});let{data:s}=await (0,n.ED)(a);e({microsite:s,isLoading:!1})}catch(e){}},updateMicrosite:async(a,s)=>{try{if(e({isLoading:!0}),s.images.length>0){let e=[];s.images.map(a=>e.push((0,n.qA)(a,s.id.toString())));let a=await Promise.all(e);s.images=a.map(e=>e.data.id)}let t=[];s.oldImages.map(e=>t.push((0,n.EH)(e.id))),await Promise.all(t);let{data:i}=await (0,n.gR)(a,s);l.ZP.success("Se actualizo el micrositio con exito!!"),e({microsite:i,isLoading:!1})}catch(e){}}}))},5913:function(e,a,s){s.d(a,{Eu:function(){return r},HY:function(){return n},sG:function(){return i},z2:function(){return t}});let t=e=>{switch(e){case"0":return"#00A650";case"1":return"#FF8800";case"2":return"#F23D4F";default:return"#784B5F"}},n=e=>{switch(e.toString()){case"0":return"Canceled";case"1":return"Public";case"2":return"Completed";case"3":return"Draft";case"4":return"Paused";case"5":return"Requested";case"6":return"Rejectes";default:return"Default"}},i=e=>{switch(e.toString()){case"0":return"#00A650";case"1":return"#FF8800";default:return"status-vigente"}},r=e=>{switch(e.toString()){case"0":return"Nuevo";case"1":return"Usado";default:return"status-vigente"}}},8858:function(e,a,s){s.d(a,{K:function(){return t}});let t=e=>{switch(e){case"Canjeado":default:return"#C3286D";case"Abonado":return"#00A650"}}}}]);