(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{6896:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return a(9642)}])},9642:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return O}});var l=a(5893),t=a(1071),n=a(7294),i=a(5675),r=a.n(i),c=a(7896),o=a(4568),d=a(8193),m=a(9583),u=a(1163),x=a(5085),h=a(3452),p=a(1649),f=a(6843),j=a(8837),b=a(8858);function N(e){var s;let{option:a,index:t}=e;return(0,l.jsxs)("tr",{className:"table-secondary   position-relative border text-left ",style:{background:t%2==0?"#F2F2F2":"#fff"},children:[(0,l.jsxs)("th",{scope:"row ps-2",children:[(0,l.jsx)("div",{className:"position-absolute top-0 start-0 borderLateral-Rifas ",style:{backgroundColor:(0,b.K)(a.estado)}}),(0,l.jsx)("div",{style:{width:"42px",height:"42px"},className:"  d-flex justify-content-center  align-items-center bg-white  icon ms-3 ",children:a.icon})]}),(0,l.jsxs)("td",{children:[(0,l.jsx)("h6",{className:"text-cartera ",children:null==a?void 0:null===(s=a.raffle)||void 0===s?void 0:s.name}),(0,l.jsx)("p",{className:"parraf-cartera",children:a.informacion})]}),(0,l.jsx)("td",{className:"number-dashboardRifas",children:new Date(a.created_at).toLocaleDateString()}),(0,l.jsx)("td",{style:{width:"120px"},className:"number-dashboardRifas ",children:a.total})]},t)}var v=a(7488),g=a(6501),w=a(6782),R=a(4258),y=a(8323),P=a(5913),C=a(3037);function k(e){let{option:s,index:a,actions:t}=e,{setShowEdit:n,setShowInfo:i}=t;return(0,l.jsxs)("tr",{className:" position-relative border text-left",style:{background:a%2==0?"#F2F2F2":"#fff"},children:[(0,l.jsxs)("th",{scope:"row ",children:[(0,l.jsx)("div",{className:"position-absolute top-0 start-0 borderLateral-Rifas  ",style:{backgroundColor:(0,P.z2)(s.estado)}}),(0,l.jsx)("div",{className:"  d-flex justify-content-start align-items-center  icon ms-3 w-full",children:(0,l.jsx)(r(),{width:50,height:50,src:s.image||C.Z,alt:s.name,className:"rounded"})})]}),(0,l.jsxs)("td",{children:[(0,l.jsx)("h6",{className:"text-cartera px-2 ",children:s.name}),(0,l.jsx)("p",{className:"parraf-cartera px-2",children:s.short_description})]}),(0,l.jsx)("td",{className:"number-dashboardRifas mt-3",children:s.purchased}),(0,l.jsx)("td",{className:"number-dashboardRifas mt-3",children:s.raised}),(0,l.jsx)("td",{className:"number-dashboardRifas",children:s.ticket_price}),(0,l.jsx)("td",{className:"number-dashboardRifas px-3",children:new Date(s.end_date).toLocaleDateString()}),(0,l.jsx)("td",{className:"number-dashboardRifas",children:s.winner})]})}var Z=a(8393),_=a(1541),S=a(623),F=a(5539),z=a(103);let E=[{label:"Resumen",value:"1",icon:(0,l.jsx)(d.qTj,{})},{label:"Rifas",value:"2",icon:(0,l.jsx)(d.pp5,{})},{label:"Premios",value:"3",icon:(0,l.jsx)(m.RPl,{})},{label:"Cartera",value:"4",icon:(0,l.jsx)(m.OZg,{})},{label:"Perfil",value:"5",icon:(0,l.jsx)(d.nf1,{})}],T={1:function(e){let{setShowScreen:s}=e;(0,u.useRouter)();let a=(0,o.R)(e=>e.getResumenProfile),t=(0,o.R)(e=>e.resumenProfile);return(0,n.useEffect)(()=>{a()},[]),(0,l.jsxs)("section",{className:"",children:[(0,l.jsx)("div",{className:"background-dashboard  d-block d-lg-flex justify-content-between align-items-center py-3 col-12",children:(0,l.jsx)("div",{className:" d-block d-md-flex ",children:(0,l.jsx)("p",{className:"title-dashboard ms-3 ",children:"Resumen"})})}),(0,l.jsxs)("div",{className:"row m-0 d-flex flex-wrap mt-3 background-dashboard  py-2",children:[(0,l.jsxs)("div",{className:"container-resumen col-9 col-md-3 mx-4 my-2 text-center py-3",children:[(0,l.jsx)(d.pp5,{color:"#784B5F",size:30}),(0,l.jsx)("p",{className:"title-resumen m-0",children:"Rifas"}),(0,l.jsxs)("p",{className:"informationRaffle-resumen m-0 mb-2 ",children:[t.raffles," rifas creadas"]}),(0,l.jsx)("button",{onClick:()=>{s(2)},className:"button-Resumen p-2 px-3 m-0",children:"Ver Rifas"})]}),(0,l.jsxs)("div",{className:"container-resumen col-9 col-md-3 mx-4 my-2 text-center py-3",children:[(0,l.jsx)(m.RPl,{color:"#784B5F",size:30}),(0,l.jsx)("p",{className:"title-resumen m-0",children:"Premios"}),(0,l.jsxs)("p",{className:"informationRaffle-resumen m-0 mb-2 ",children:[t.prizes," Premios creados"]}),(0,l.jsx)("button",{onClick:()=>{s(3)},className:"button-Resumen p-2 px-3 m-0",children:"Ver Premios"})]}),(0,l.jsxs)("div",{className:"container-resumen col-9 col-md-3 mx-4 my-2 text-center py-3",children:[(0,l.jsx)(m.OZg,{color:"#784B5F",size:30}),(0,l.jsx)("p",{className:"title-resumen m-0",children:"Cartera"}),(0,l.jsx)("button",{onClick:()=>{s(4)},className:"button-Resumen p-2 px-3 m-0",children:"Ver Cartera"})]}),(0,l.jsxs)("div",{className:"container-resumen col-9 col-md-3 mx-4 my-2 text-center py-3",children:[(0,l.jsx)(d.nf1,{color:"#784B5F",size:30}),(0,l.jsx)("p",{className:"title-resumen m-0",children:"Mi perfil"}),(0,l.jsx)("button",{onClick:()=>{s(5)},className:"button-Resumen p-2 px-3 m-0",children:"Ver perfil"})]})]})]})},2:function(){let[e,s]=(0,n.useState)(!1),[a,t]=(0,n.useState)(!1),[i,r]=(0,n.useState)(!1),c=()=>r(!1),d=(0,o.p)(e=>e.rafflePurchase),m=(0,o.p)(e=>e.getRafflesPurchase),u=(0,o.p)(e=>e.paginacion);return(0,l.jsxs)("section",{className:"",children:[(0,l.jsx)(x.Z,{screen:"Rifas",profile:!0}),(0,l.jsx)(w.Z,{show:e,setShow:s}),(0,l.jsx)(R.Z,{show:a,setShow:t}),(0,l.jsx)(y.Z,{showModalRaffle:i,handleClose:c}),(0,l.jsx)(j.Z,{head:[{label:"Imagen"},{label:"Titulo"},{label:"Tickets comprados"},{label:"Recaudado"},{label:"Precio boleto"},{label:"Fecha de finalizacion"},{label:"Ganador"}],options:d,Component:k,actions:{setShowEdit:s,setShowInfo:t},getRequest:e=>{m(e)},pagination:u})]})},3:function(){let[e,s]=(0,n.useState)(!1),a=()=>s(!1);(0,u.useRouter)();let[t,i]=(0,n.useState)(!1),[r,c]=(0,n.useState)(!1),o=(0,F.E)(e=>e.prizeUser),d=(0,F.E)(e=>e.getPrizeUser),h=(0,F.E)(e=>e.pagination),p=()=>{s(!1),i(!1),d(1)};return(0,l.jsxs)("section",{className:" ",children:[(0,l.jsx)(Z.Z,{showScreen:e,setShowScreen:s,handleClose:a,handleReset:p}),(0,l.jsx)(x.Z,{screen:"Premios",profile:!0,renderButton:()=>(0,l.jsxs)("button",{onClick:()=>s(!0),className:"me-3 button-user m-0 p-2  ",children:[(0,l.jsx)(m.RPl,{className:"mx-2"}),"Nuevo premio"]})}),(0,l.jsx)(S.Z,{show:t,setShow:i,handleReset:p}),(0,l.jsx)(_.Z,{show:r,setShow:c}),(0,l.jsx)(j.Z,{head:[{label:"Imagen"},{label:"Titulo"},{label:"Fecha alta",width:"115px"},{label:"Precio"},{label:"Estado"},{label:"Acciones",width:"115px"}],options:o,getRequest:e=>{d(e)},pagination:h,Component:z.Z,actions:{setShowEdit:i,setShowInfo:c}})]})},4:function(){let{profile:e}=(0,p.v9)(h._9),s=(0,o.R)(e=>e.getWalletProfile),a=(0,o.R)(e=>e.paginationProfile),t=(0,o.R)(e=>e.walletsProfile);return(0,l.jsxs)("section",{className:" ",children:[(0,l.jsx)(x.Z,{screen:"Cartera",profile:!0}),(0,l.jsx)("div",{className:"pt-3 background-dashboard mt-3 px-3 pb-3",children:(0,l.jsxs)("div",{className:"d-flex container-cartera  p-3 mt-2",children:[(0,l.jsxs)("div",{className:"ms-4 text-center",children:[(0,l.jsx)(m.OZg,{color:"#784B5F",size:30}),(0,l.jsxs)("p",{className:"value-Cartera mt-2",children:["$",(0,f.p)(Number(null==e?void 0:e.wallet.value))]})]}),(0,l.jsxs)("div",{className:"ms-4 d-flex flex-column align-items-start justify-content-center ",children:[(0,l.jsx)("p",{className:"m-0 saldo-Cartera",children:"Saldo de tu cartera"}),(0,l.jsx)("p",{className:"m-0 information-Saldo",children:"Este es el saldo aplicado a tu cuenta, no tiene vencimiento y lo puedes ocupar para comprar boletos para cualquier rifa."})]})]})}),(0,l.jsx)(j.Z,{title:"Detalle de movimientos",disableFilter:!0,disablePagination:!0,head:[{label:"Imagen"},{label:"Titulo"},{label:"Fecha rifa",width:"120px"},{label:"Monto"}],options:t,Component:N,getRequest:e=>{s(e)},pagination:a})]})},5:function(e){let{nextStep:s}=e,a=(0,p.I0)(),{profile:t,loading:n}=(0,p.v9)(h._9),i=async e=>{let{payload:s}=await a((0,h.Ot)(e));s&&g.ZP.success("Perfil actualizado correctamente")},r=[{label:"Nombre completo",name:"full_name",type:"text",default:null==t?void 0:t.full_name},{label:"Correo electronico",name:"email",disabled:!0,type:"text",default:null==t?void 0:t.email},{label:"Empresa (Opcional)",name:"company_name",type:"text",default:null==t?void 0:t.company_name},{label:"Perfil",required:!1,name:"image",type:"file",maxFile:1,default:(null==t?void 0:t.image)?[(null==t?void 0:t.image)||""]:[]}];return(0,l.jsxs)("section",{className:" ",children:[(0,l.jsx)(x.Z,{screen:"Mi perfil",profile:!0}),(0,l.jsx)("div",{className:"pt-3 background-dashboard mt-3 px-3",children:(0,l.jsx)(v.Z,{buttonText:"Actualizar Perfil",submitData:i,fields:r,loading:n})})]})}};function D(){let[e,s]=(0,n.useState)("1"),a=(0,o.R)(e=>e.getAsociations),t=T[e];return(0,n.useEffect)(()=>{a()},[]),(0,l.jsxs)("section",{className:"mx-0 mx-md-4 position-relative    ",children:[(0,l.jsx)("div",{className:"position-absolute top-0 overflow-hidden mx-auto mt-2",children:(0,l.jsx)(r(),{src:c.Z,alt:"fondo-Profile",className:"w-100  fondo-Profile"})}),(0,l.jsx)("div",{className:" mx-0 mx-lg-5 mt-3 mt-lg-2 position-relative pt-4  text-center ",children:(0,l.jsx)("h3",{className:"contacto w-100  mt-2 ",children:" Mi Cuenta"})}),(0,l.jsxs)("section",{className:"row d-flex z-3 mt-5 pt-4 pt-md-0 container-Dashboard justify-content-between   m-0",children:[(0,l.jsx)("div",{className:"col-12 col-lg-2 mt-3  container-sidebar px-3",children:E.map((e,a)=>(0,l.jsxs)("div",{onClick:()=>s(e.value),className:"d-flex justify-content-start mx-auto   py-2   container-boxSidebar my-2 ",children:[(0,l.jsxs)("p",{className:"m-0 ms-2 ",children:[" ",e.icon," "]}),(0,l.jsx)("p",{className:" m-0 ms-2",children:e.label})]},a))}),(0,l.jsx)("div",{className:"col-12 col-lg-10 mt-2 mt-md-0   m-0",children:(0,l.jsx)("div",{className:"",children:(0,l.jsx)(t,{setShowScreen:s})})})]})]})}function O(){return(0,l.jsx)(t.Z,{children:(0,l.jsx)(D,{})})}}},function(e){e.O(0,[445,617,866,874,228,556,772,484,183,71,879,814,774,888,179],function(){return e(e.s=6896)}),_N_E=e.O()}]);