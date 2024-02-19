import{d as C,r as u,e as x,E as N,o as m,c as _,a as e,g as a,w as i,F as v,m as D,f as w,O as q,P as I,s as V,H as j,p as B,j as U,_ as L}from"./index-9f45cced.js";import{p as S}from"./projectController-f45fd419.js";import{C as E}from"./categoriesController-64e076d1.js";import{c as y,C as g}from"./compressor-b1d296c0.js";import{_ as P}from"./BackBtn.vue_vue_type_script_setup_true_lang-3c4735c8.js";const n=d=>(B("data-v-2333bb5a"),d=d(),U(),d),$={class:"container-fluid"},O={class:"row"},A={class:"col-12"},M={class:"d-flex justify-content-between"},K=n(()=>e("h2",null,"Create Project",-1)),R={class:"row wrapper"},T={class:"col-12"},W=n(()=>e("p",null,"Demo Link",-1)),z={class:"modal-content rounded-3 shadow-sm mt-3 bg-body-tertiary"},H={class:"modal-body p-4"},G={class:"container-fluid"},J={class:"col-lg-5 col-sm-12"},Q={class:"col-lg-5 col-sm-12"},X={class:"col-lg-2 col-sm-12"},Y=["onClick"],Z=n(()=>e("i",{class:"bi bi-node-plus"},null,-1)),ee=n(()=>e("i",{class:"bi bi-node-plus"},null,-1)),se={class:"d-flex gap-3 mt-2"},ae={class:"toggle-switch"},oe=n(()=>e("label",{class:"toggle-label",for:"toggle"},null,-1)),le=n(()=>e("div",{class:"Download"}," Downloadable ",-1)),te=n(()=>e("h5",null,"Platforms*",-1)),re={class:"modal-content rounded-3 shadow-sm mt-3 bg-body-tertiary"},ie={class:"modal-body p-4"},ne={class:"container-fluid"},ce={class:"row"},de={class:"col-4"},pe={class:"col-4"},me={class:"col-4"},_e={class:"modal-content rounded-3 shadow-sm mt-3 bg-body-tertiary"},ue={class:"modal-body p-4"},fe={class:"container-fluid"},be={class:"row"},he={class:"col-4"},ve={class:"col-4"},we={class:"col-4"},ye={class:"modal-content rounded-2 shadow-sm mt-3 bg-body-tertiary"},ge={class:"modal-body p-4"},ke={class:"container-fluid"},Fe={class:"row"},Ce={class:"col-4"},xe={class:"col-4"},Ne={class:"col-4"},De={class:"modal-content rounded-2 shadow-sm mt-3 bg-body-tertiary"},qe={class:"modal-body p-4"},Ie={class:"container-fluid"},Ve={class:"row"},je={class:"col-4"},Be={class:"col-4"},Ue={class:"col-4"},Le={class:"modal-content rounded-3 shadow-sm mt-3 mb-3 bg-body-tertiary"},Se={class:"modal-body p-4"},Ee={class:"container-fluid"},Pe={class:"row"},$e={class:"col-4"},Oe={class:"col-4"},Ae={class:"col-4"},Me={class:"container-fluid"},Ke={class:"row"},Re={class:"col-12"},Te=C({__name:"createProject",setup(d){const f=u([]),b=u(!1);x(async()=>{const o=await E.getAll();f.value=o.map(t=>({label:`${t.enName} - ${t.khName} - ${t.type}`,value:t._id}))});const r=u({categoryId:"",categoryDoc:{khName:"",enName:"",status:"",type:"",_id:""},name:"",thumbnail:{},description:"",features:[],screenshots:[],demoLinks:[],requirements:[],releaseDate:"",note:"",downloadable:!1,status:"Completed"}),k=()=>{var o;(o=r.value.demoLinks)==null||o.push({name:"",link:""})},F=async o=>{try{if(o.thumbnailFile&&o.thumbnailFile.length>0&&o.thumbnailFile[0].file){const s=o.thumbnailFile[0].file;console.log("O File",s);let l=s;s.size>1e6&&(l=await y(s,.6)),console.log("🚀 ~ submit ~ thumnailBob:",l);const c=await g.toBase64(l);o.thumbnail.name=o.thumbnailFile[0].name,o.thumbnail.base64=c}if(o.screenshotFiles&&o.screenshotFiles.length>0)for(let s=0;s<o.screenshotFiles.length;s++){const l=o.screenshotFiles[s];if(l){const c=await y(l.file),p=await g.toBase64(c);o.screenshots.push({name:l.name,base64:p})}}if(o.platforms&&o.platforms.length){const s=o.platforms.filter(l=>l&&l.url);o.platforms=s}const t=await S.create(o);j.success(t.message),b.value=!0}catch(t){console.error("Error submitting form:",t)}};return(o,t)=>{const s=N("FormKit");return m(),_("div",null,[e("div",$,[e("div",O,[e("div",A,[e("div",M,[K,a(P)])])]),e("div",R,[e("div",T,[a(s,{"form-class":b.value?"hide":"show",id:"licenseForm",type:"form",modelValue:r.value,"onUpdate:modelValue":t[2]||(t[2]=l=>r.value=l),onSubmit:F},{default:i(()=>[a(s,{type:"file",label:"Thumbnail*","wrapper-class":{"formkit-wrapper":!1},name:"thumbnailFile",accept:".jpg,.png,.pdf",validation:"required"}),a(s,{type:"select",label:"Category*","wrapper-class":{"formkit-wrapper":!1},name:"categoryId",placeholder:"Select options",options:f.value},null,8,["options"]),a(s,{type:"text",name:"name",label:"Name*","wrapper-class":{"formkit-wrapper":!1},placeholder:"Enter your project name",validation:"required"}),a(s,{type:"textarea",name:"description","wrapper-class":{"formkit-wrapper":!1},label:"Description*",placeholder:"Enter your description",validation:"required"}),a(s,{type:"textarea",name:"features",label:"Features*","wrapper-class":{"formkit-wrapper":!1},placeholder:"Enter your features",validation:"required"}),a(s,{type:"file",name:"screenshotFiles",label:"Screenshots*",accept:".jpg,.png,.pdf","wrapper-class":{"formkit-wrapper":!1},multiple:"true",validation:"required"}),W,e("div",z,[e("div",H,[e("div",G,[a(s,{type:"list",modelValue:r.value.demoLinks,"onUpdate:modelValue":t[0]||(t[0]=l=>r.value.demoLinks=l),dynamic:""},{default:i(({items:l})=>[(m(!0),_(v,null,D(l,(c,p)=>(m(),_("div",{key:c,class:"row"},[a(s,{type:"group",index:p},{default:i(()=>[e("div",J,[a(s,{type:"text",name:"name","wrapper-class":{"formkit-wrapper":!1},label:"Name*"})]),e("div",Q,[a(s,{type:"url",name:"link","wrapper-class":{"formkit-wrapper":!1},label:"Url*",validation:"required|url"})]),e("div",X,[e("button",{class:"card-Delete__button bg-danger",onClick:We=>{var h;return(h=r.value.demoLinks)==null?void 0:h.splice(p,1)}},[Z,w(" Delete ")],8,Y)])]),_:2},1032,["index"])]))),128)),e("button",{type:"button",onClick:k,class:"card-form__button"},[ee,w(" Add ")])]),_:1},8,["modelValue"])])])]),e("div",se,[e("div",ae,[q(e("input",{class:"toggle-input",id:"toggle",type:"checkbox","onUpdate:modelValue":t[1]||(t[1]=l=>r.value.downloadable=l)},null,512),[[I,r.value.downloadable]]),oe]),le]),r.value.downloadable?(m(),_(v,{key:0},[te,a(s,{type:"list",name:"platforms"},{default:i(()=>[e("div",re,[e("div",ie,[e("div",ne,[e("div",ce,[a(s,{type:"group"},{default:i(()=>[e("div",de,[a(s,{label:"Icon*",name:"icon",value:"bi bi-microsoft","wrapper-class":{"formkit-wrapper":!1},disabled:""})]),e("div",pe,[a(s,{label:"Name*",name:"name",value:"Windows","wrapper-class":{"formkit-wrapper":!1},disabled:""})]),e("div",me,[a(s,{type:"url",name:"url",label:"Url*","wrapper-class":{"formkit-wrapper":!1}})])]),_:1})])])])]),e("div",_e,[e("div",ue,[e("div",fe,[e("div",be,[a(s,{type:"group"},{default:i(()=>[e("div",he,[a(s,{label:"Icon*",name:"icon",value:"bi bi-apple","wrapper-class":{"formkit-wrapper":!1},disabled:""})]),e("div",ve,[a(s,{label:"Name*",name:"name",value:"Mac","wrapper-class":{"formkit-wrapper":!1},disabled:""})]),e("div",we,[a(s,{type:"url",name:"url",label:"Url*","wrapper-class":{"formkit-wrapper":!1}})])]),_:1})])])])]),e("div",ye,[e("div",ge,[e("div",ke,[e("div",Fe,[a(s,{type:"group"},{default:i(()=>[e("div",Ce,[a(s,{label:"Icon*",name:"icon",value:"bi bi-ubuntu","wrapper-class":{"formkit-wrapper":!1},disabled:""})]),e("div",xe,[a(s,{label:"Name*",name:"name",value:"Linux","wrapper-class":{"formkit-wrapper":!1},disabled:""})]),e("div",Ne,[a(s,{type:"url",name:"url",label:"Url*","wrapper-class":{"formkit-wrapper":!1}})])]),_:1})])])])]),e("div",De,[e("div",qe,[e("div",Ie,[e("div",Ve,[a(s,{type:"group"},{default:i(()=>[e("div",je,[a(s,{label:"Icon*",name:"icon",value:"bi bi-app","wrapper-class":{"formkit-wrapper":!1},disabled:""})]),e("div",Be,[a(s,{label:"Name*",name:"name",value:"IOS","wrapper-class":{"formkit-wrapper":!1},disabled:""})]),e("div",Ue,[a(s,{type:"url",name:"url",label:"Url*","wrapper-class":{"formkit-wrapper":!1}})])]),_:1})])])])]),e("div",Le,[e("div",Se,[e("div",Ee,[e("div",Pe,[a(s,{type:"group"},{default:i(()=>[e("div",$e,[a(s,{label:"Icon*",name:"icon",value:"bi bi-android2","wrapper-class":{"formkit-wrapper":!1},disabled:""})]),e("div",Oe,[a(s,{label:"Name*",name:"name",value:"Android","wrapper-class":{"formkit-wrapper":!1},disabled:""})]),e("div",Ae,[a(s,{type:"url",name:"url",label:"Url*","wrapper-class":{"formkit-wrapper":!1}})])]),_:1})])])])])]),_:1}),e("div",Me,[e("div",Ke,[e("div",Re,[a(s,{label:"Requirements",name:"requirements","wrapper-class":{"formkit-wrapper":!1}})])])])],64)):V("",!0),a(s,{type:"datetime-local",name:"releaseDate","wrapper-class":{"formkit-wrapper":!1},label:"Release Date*",validation:"required"}),a(s,{type:"textarea",name:"note","wrapper-class":{"formkit-wrapper":!1},label:"Note",placeholder:"Enter your note",validation:"required"}),a(s,{type:"select",label:"Status*","wrapper-class":{"formkit-wrapper":!1},name:"status",options:["Completed","Development","Coming Soon"],validation:"required"})]),_:1},8,["form-class","modelValue"])])])])])}}});const Xe=L(Te,[["__scopeId","data-v-2333bb5a"]]);export{Xe as default};