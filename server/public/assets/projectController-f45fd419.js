import{L as a}from"./index-9f45cced.js";const o={create:async e=>{try{const{data:t}=await a().post("/api/v1/projects",e);return t}catch(t){throw t.response.message}},getOne:async e=>{try{const{data:t}=await a().get(`/api/v1/projects/${e}`);return t}catch(t){throw t.response.message}},getAll:async(e,t)=>{try{const{data:r}=await a().get(`/api/v1/projects/q/?selector=${JSON.stringify(e)}&options=${JSON.stringify(t)}`);return r}catch(r){throw r.response.message}},update:async(e,t)=>{try{const{data:r}=await a().put(`/api/v1/projects/${e}`,t);return r}catch(r){throw r.response.message}},delete:async e=>{try{const{data:t}=await a().delete(`/api/v1/projects/${e}`);return t}catch(t){throw t.response.message}}};export{o as p};