import{L as r}from"./index-aa565c7f.js";const o={create:async t=>{try{const{data:e}=await r().post("/api/v1/categories",t);return e}catch(e){throw e.response.message}},getOne:async t=>{try{const{data:e}=await r().get(`/api/v1/categories/${t}`);return e}catch(e){throw e.response.message}},getAll:async()=>{try{const{data:t}=await r().get("/api/v1/categories");return t}catch(t){throw t.response.message}},update:async(t,e)=>{try{const{data:a}=await r().put(`/api/v1/categories/${t}`,e);return a}catch(a){throw a.response.message}},delete:async t=>{try{const{data:e}=await r().delete(`/api/v1/categories/${t}`);return e}catch(e){throw e.response.message}}};export{o as C};
