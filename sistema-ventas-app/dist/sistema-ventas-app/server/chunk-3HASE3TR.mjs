import './polyfills.server.mjs';
import{r as m}from"./chunk-FCK6OXEA.mjs";import{Bb as p,Cb as a,Rc as f,Ub as c,Z as i,ga as s,ha as r}from"./chunk-46OW7NTA.mjs";import"./chunk-NDYDZJSS.mjs";var l=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s({type:t,selectors:[["app-admin"]],decls:2,vars:0,template:function(e,y){e&1&&(p(0,"p"),c(1,"admin works!"),a())}});let o=t;return o})();var h=[{path:"",component:l},{path:"usuarios",loadChildren:()=>import("./chunk-QWQWM37B.mjs").then(o=>o.UsuariosModule)}],u=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r({type:t}),t.\u0275inj=i({imports:[m.forChild(h),m]});let o=t;return o})();var F=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r({type:t}),t.\u0275inj=i({imports:[f,u]});let o=t;return o})();export{F as AdminModule};