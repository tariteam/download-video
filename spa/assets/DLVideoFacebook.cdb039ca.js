import{H as C,u as A,_ as B,Q as D,a as T}from"./InputURL.9a0eda44.js";import{d as $,S as N,U as Q,r as H,ah as U,w as j,s as I,W as _,a2 as f,j as h,a0 as e,a1 as L,a5 as i,Y as b,F as k,a4 as s,a3 as M,ag as R,$ as z,av as P}from"./index.5edad22b.js";import{d as E}from"./downloadFile.71983aec.js";import{u as W}from"./vue-i18n.runtime.esm-bundler.ce80b7f9.js";import"./iconify.f40161ec.js";import"./IndexPage.c8e1a9bb.js";import"./focus-manager.58612f5a.js";function Y(n){return new Function(`
  let uri
  const get_progressApi = t => uri = t
  try {
    ${n}
  } catch {}
  return uri
  `)()}function J(n){const{type:t,html:o}=new Function(`
const Date = class { toString() { return 9e9 }}
const window = { location: { hostname: "snapsave.app" }}
const dom = {remove(){},reset(){},classList:{remove(){},add(){}}}
const document = {
  getElementById() {
    return dom
  },
  querySelector() { return {...dom} }
}
let type
const sendEvent = t => type = t
;
${n}
;
return { type, html: dom.innerHTML }
`)();if(t.toLowerCase()!=="get_success")throw new Error(t);const m=document.createElement("div");return m.innerHTML=o,m}function K(n){const t=J(n),o={preview:t.querySelector("video").getAttribute("src"),poster:t.querySelector("video").getAttribute("poster")},m=t.querySelector(".media-content > .content > p > strong").textContent,v=t.querySelector(".media-content > .content > p > span").textContent,w=Array.from(t.querySelectorAll(".table > tbody > tr")).map(a=>{const d=a.querySelector("button");return{name:a.querySelector(".video-quality").textContent,render:d!==null,url:d?"https://snapsave.app"+Y(d.getAttribute("onclick")):a.querySelector("a").getAttribute("href")}});return{title:m,description:v,meta:o,qualities:w}}const O=$("dlvideo-facebook",{actions:{async start(n,t=5){const{data:o}=await C.post({url:"https://snapsave.app/action.php",data:{url:n}});return t&&!o.trim().startsWith("var")?this.start(n,t-1):K(o)},async render(n){return C.post({url:new URL(n,"https://snapsave.app").href,data:{url:n},responseType:"json"}).then(t=>{var o;if(t.status!==1)throw new Error((o=t.message)!=null?o:"not_found");return t.data})}}});const G={key:0,class:"text-[16px] font-weight-medium py-5"},X={key:1},Z={class:"flex flex-nowrap text-left"},ee=["src","poster"],te={class:"pl-2"},oe={class:"text-subtitle1 font-weight-medium line-clamp-2"},se={class:"text-grey-5"},ne={class:"w-full table"},ae={class:"text-[14px]"},re={class:"ml-[3px] mr-[-9px] mb-[0.1em] text-[13px]"},ie=Q({__name:"DLVideoFacebook",setup(n){const t=O(),{t:o}=W(),{loading:m,error:v,run:w,data:a}=A(t.start,{manual:!0}),d=H(!1),u=U(new Map);j(a,()=>{u.clear(),d.value=!1});let x;I(()=>clearTimeout(x));function V(p,y){if(!y)return E(p);const c=u.get(p);if(c)return c.progress===100?E(p):console.warn("'%s' exists in task or render completed",p);d.value=!0,r();async function r(){clearTimeout(x);const l=await t.render(p);if(u.set(p,l),l.progress===100)return d.value=!1;x=setTimeout(r,1e3)}}return(p,y)=>(_(),f(k,null,[h(B,{"onKeypress:video":y[0]||(y[0]=c=>a.value=void 0),"onClick:download":e(w),class:"mb-5",type:"Facebook",placeholder:e(o)("dan-lien-ket-facebook-vao-day")},null,8,["onClick:download","placeholder"]),e(m)?(_(),f("div",G,[h(D,{size:"25px",class:"mr-1"}),L(" "+i(e(o)("fetching")),1)])):e(v)?(_(),f("div",X,[h(T,{dense:"","inline-actions":"",class:"text-white bg-red"},{default:b(()=>{var c,r;return[L(i((r=(c=e(v))==null?void 0:c.message)!=null?r:"Video \u1EDF ch\u1EBF \u0111\u1ED9 ri\xEAng t\u01B0"),1)]}),_:1})])):e(a)?(_(),f(k,{key:2},[s("div",Z,[s("video",{class:"w-[173px]",controls:"",src:e(a).meta.preview,poster:e(a).meta.poster},null,8,ee),s("div",te,[s("h3",oe,i(e(a).title),1),s("h4",se,i(e(a).description),1)])]),s("table",ne,[s("thead",null,[s("tr",null,[s("th",null,i(e(o)("chat-luong")),1),s("th",null,i(e(o)("ket-xuat")),1),s("th",null,i(e(o)("tai-xuong")),1)])]),s("tbody",null,[(_(!0),f(k,null,M(e(a).qualities,({name:c,render:r,url:l})=>{var S,q;return _(),f("tr",{key:c,class:"py-1"},[s("td",null,i(c),1),s("td",null,i(r?"Yes":"No"),1),s("td",null,[h(z,{"no-caps":"",size:"sm",disable:r&&d.value&&!e(u).get(l),loading:((S=e(u).get(l))==null?void 0:S.progress)<100,percentage:(q=e(u).get(l))==null?void 0:q.progress,rounded:"",outline:"",color:r?"light-blue-5":"green-5",onClick:g=>V(l,r)},{loading:b(()=>{var g,F;return[h(R),s("span",re,i(e(o)("_progress-per",[(F=(g=e(u).get(l))==null?void 0:g.progress)!=null?F:0])),1)]}),default:b(()=>{var g;return[s("span",ae,i(r&&((g=e(u).get(l))==null?void 0:g.progress)!==100?e(o)("render"):e(o)("dowload")),1)]}),_:2},1032,["disable","loading","percentage","color","onClick"])])])}),128))])])],64)):P("",!0)],64))}});var _e=N(ie,[["__scopeId","data-v-1c8770db"]]);export{_e as default};
