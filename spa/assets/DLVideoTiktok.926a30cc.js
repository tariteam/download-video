import{H as k,u as v,_ as y,Q as V,a as B}from"./InputURL.9a0eda44.js";import{d as D,U as E,W as c,a2 as d,j as e,a0 as t,a1 as i,a5 as a,Y as n,a4 as l,Z as T,$ as m,av as $,F as b}from"./index.5edad22b.js";import{I as r}from"./iconify.f40161ec.js";import{u as C}from"./vue-i18n.runtime.esm-bundler.ce80b7f9.js";import"./IndexPage.c8e1a9bb.js";import"./focus-manager.58612f5a.js";const Q=D("dlvideo-tiktok",{actions:{async start(h){return k.get({url:"https://www.tikwm.com/api/?count=12&cursor=&web=1&hd=1&url="+h,responseType:"json"}).then(o=>{if(o.data.code===-1)throw new Error(o.data.msg);return o.data})}}}),F={key:0,class:"text-[16px] font-weight-medium py-5"},N={key:1},S={key:2,class:"flex flex-nowrap text-left mt-7"},I=["src","poster"],L={class:"pl-2"},j={class:"text-subtitle1 line-clamp-2"},q={class:"flex items-center text-[13px] text-grey-5 mt-3"},z=["src"],A={class:"flex text-left items-center text-[14px] mt-2"},Z=E({__name:"DLVideoTiktok",setup(h){const{t:o}=C(),g=Q(),{data:s,error:p,run:x,loading:w}=v(g.start,{manual:!0});return(H,_)=>(c(),d(b,null,[e(y,{"onKeypress:video":_[0]||(_[0]=u=>s.value=void 0),"onClick:download":t(x),type:"TikTok",class:"mb-5",placeholder:t(o)("dan-lien-ket-tiktok-vao-day")},null,8,["onClick:download","placeholder"]),t(w)?(c(),d("div",F,[e(V,{size:"25px",class:"mr-1"}),i(" "+a(t(o)("fetching")),1)])):t(p)?(c(),d("div",N,[e(B,{dense:"","inline-actions":"",class:"text-white bg-red"},{default:n(()=>{var u,f;return[i(a((f=(u=t(p))==null?void 0:u.message)!=null?f:"Video \u1EDF ch\u1EBF \u0111\u1ED9 ri\xEAng t\u01B0"),1)]}),_:1})])):t(s)?(c(),d("div",S,[l("video",{class:"w-[173px]",controls:"",src:`https://tikwm.com${t(s).data.play}`,poster:`https://tikwm.com${t(s).data.cover}`},null,8,I),l("div",L,[l("h3",j,a(t(s).data.title),1),l("div",q,[e(T,{size:"1.5em",class:"mr-1"},{default:n(()=>[l("img",{src:`https://tikwm.com${t(s).data.author.avatar}`},null,8,z)]),_:1}),i(" "+a(t(s).data.author.nickname)+" (@"+a(t(s).data.author.unique_id)+") ",1)]),l("div",A,[e(t(r),{icon:"fluent:music-note-2-20-filled",class:"mr-1",width:"20px"}),i(" "+a(t(s).data.music_info.title),1)]),e(m,{"no-caps":"",rounded:"",outline:"",color:"teal-13",class:"mr-2 mt-2"},{default:n(()=>[e(t(r),{icon:"mdi:download-circle",width:"1.5em",height:"1.5em",class:"mr-1"}),i(" "+a(t(o)("tai-xuong-khong-logo")),1)]),_:1}),e(m,{"no-caps":"",rounded:"",outline:"",color:"green-5",class:"mr-2 mt-2"},{default:n(()=>[e(t(r),{icon:"mdi:download-circle",width:"1.5em",height:"1.5em",class:"mr-1"}),i(" "+a(t(o)("tai-xuong-co-logo")),1)]),_:1}),e(m,{"no-caps":"",rounded:"",outline:"",color:"light-blue-5",class:"mr-2 mt-2"},{default:n(()=>[e(t(r),{icon:"mdi:download-circle",width:"1.5em",height:"1.5em",class:"mr-1"}),i(" "+a(t(o)("tai-xuong-khong-logo-hd")),1)]),_:1}),e(m,{"no-caps":"",rounded:"",outline:"",color:"orange-5",class:"mr-2 mt-2"},{default:n(()=>[e(t(r),{icon:"mdi:download-circle",width:"1.5em",height:"1.5em",class:"mr-1"}),i(" "+a(t(o)("tai-xuong-am-thanh")),1)]),_:1})])])):$("",!0)],64))}});export{Z as default};
