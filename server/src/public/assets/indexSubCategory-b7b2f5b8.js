import{_ as C}from"./EasyDataTableOperations.vue_vue_type_script_setup_true_lang-2a5636c9.js";import{d as S,r as i,u as w,e as E,E as d,o as N,c as D,a as t,g as r,w as u,p as V,j as k,_ as I}from"./index-aa565c7f.js";import{c as _}from"./subCategoriesController-78b792a8.js";const m=a=>(V("data-v-889351b0"),a=a(),k(),a),B={class:"container-fluid"},T={class:"row"},F={class:"col-12"},K=m(()=>t("h2",null,"Sub Category",-1)),$={class:"row"},j={class:"col-12"},z={class:"col-12 mt-4"},A=m(()=>t("i",{class:"bi bi-search mx-2"},null,-1)),M=S({__name:"indexSubCategory",setup(a){const p=["khName","status"],c=i(),h=[{text:"KhName",value:"khName"},{text:"EnName",value:"enName"},{text:"Type",value:"categoryDoc.enName"},{text:"Status",value:"status"},{text:"Operation",value:"operation",width:200}],o=i([]),l=w(),v=e=>{l.push({name:"core.admin.editSubCategory",params:{id:e}})},b=async e=>{await _.delete(e),o.value=o.value.filter(s=>s._id!==e)},y=()=>{l.push({path:"/core/admin/sub-category/create"})};return E(async()=>{try{const e=await _.getAll();o.value=e,console.log(e)}catch(e){console.error("Error fetching data:",e)}}),(e,s)=>{const g=d("FormKit"),x=d("EasyDataTable");return N(),D("div",null,[t("div",B,[t("div",T,[t("div",F,[t("div",{class:"d-flex justify-content-between"},[K,t("button",{type:"button",class:"btn btn-primary Btn-add",onClick:y},"Create")]),t("div",$,[t("div",j,[t("div",z,[r(g,{type:"search",placeholder:"Search...",modelValue:c.value,"onUpdate:modelValue":s[0]||(s[0]=n=>c.value=n)},{prefixIcon:u(()=>[A]),_:1},8,["modelValue"]),r(x,{"buttons-pagination":"","theme-color":"var(--primary)","show-index":"","table-class-name":"customize-table shadow-sm",headers:h,items:o.value,"search-field":p,"search-value":c.value},{"item-operation":u(n=>[r(C,{onDelete:f=>b(n._id),onEdit:f=>v(n._id)},null,8,["onDelete","onEdit"])]),_:1},8,["items","search-value"])])])])])])])])}}});const q=I(M,[["__scopeId","data-v-889351b0"]]);export{q as default};
