import{S as f}from"./staticOption-8a004fcf.js";import{c as u}from"./subCategoriesController-78b792a8.js";import{d as _,D as v,u as g,r as i,e as h,E as w,o as b,c as y,a as e,g as o,w as C,i as S,H as k}from"./index-aa565c7f.js";import{C as N}from"./categoriesController-a13c619d.js";const x=e("div",{class:"container-fluid"},[e("div",{class:"row"},[e("div",{class:"col-12"},[e("h3",null,"Edit Sub Category")])])],-1),E={class:"container-fluid mt-5"},V={class:"row"},B={class:"col-lg-12"},O={class:"col-lg-12"},$={class:"col-lg-12"},q={class:"col-lg-12"},R=_({__name:"editSubCategory",setup(F){const d=v(),p=g(),l=d.params.id.toString();console.log("🚀 ~ file: editSubCategory.vue:48 ~ id:",l);const n=i(!1),r=i(),c=i([]);h(async()=>{const s=await N.getAll();c.value=s.map(a=>({label:`${a.enName} - ${a.khName} - ${a.type}`,value:a._id})),r.value=await u.getOne(l),console.log("🚀 ~ file: editSubCategory.vue:60 ~ onMounted ~ initialValues:",r.value)});const m=async s=>{try{const a=await u.update(l,s);k.success(a.message),n.value=!0,p.back()}catch(a){console.error("Error submitting form:",a)}};return(s,a)=>{const t=w("FormKit");return b(),y("div",null,[x,e("div",E,[o(t,{type:"form","model-value":r.value,id:"registration-example","form-class":n.value?"hide":"show",onSubmit:m},{default:C(()=>[e("div",V,[e("div",B,[o(t,{type:"select",label:"Category*","wrapper-class":{"formkit-wrapper":!1},name:"categoryId",placeholder:"categoryId",options:c.value},null,8,["options"])]),e("div",O,[o(t,{type:"text",name:"khName",label:"Your name in khmer","wrapper-class":{"formkit-wrapper":!1},placeholder:"khName",validation:"required"})]),e("div",$,[o(t,{type:"text",name:"enName",label:"Your name in english","wrapper-class":{"formkit-wrapper":!1},placeholder:"enName",validation:"required"})]),e("div",q,[o(t,{type:"select",label:"Status",name:"status","wrapper-class":{"formkit-wrapper":!1},placeholder:"Select a Status",options:S(f).status},null,8,["options"])])])]),_:1},8,["model-value","form-class"])])])}}});export{R as default};