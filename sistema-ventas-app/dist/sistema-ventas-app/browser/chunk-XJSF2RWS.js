import{a as w}from"./chunk-SVE7K7DC.js";import{a as P}from"./chunk-JIPGNADR.js";import"./chunk-YZXRXD3Q.js";import{A,B as U,Z as _,b as C,d as I,f as N,k as E,l,m as j,n as x,o as L,p as D,q as k,r as B,s as G,v as $,w as O,x as T,y as V,z as q}from"./chunk-C43BA76M.js";import{m as v}from"./chunk-MFKGNWZG.js";import"./chunk-IX6G3U3V.js";import{Db as r,Eb as n,Fb as f,Mb as h,Pc as S,W as y,Wb as a,Xb as M,Yb as g,Za as s,_a as u,ba as p,j as b,ka as F,la as d,tb as c}from"./chunk-M7QQO3YR.js";var z=(()=>{let t=class t{constructor(m,o,e){this.fb=m,this.baseForm=o,this.authSvc=e,this.destroy$=new b,this.hide=!0,this.loginForm=this.fb.group({username:["",[l.required,l.minLength(3)]],password:["",[l.required,l.minLength(3)]]})}ngOnInit(){}onLogin(){if(this.loginForm.invalid)return;let m=this.loginForm.value;this.authSvc.login(m).pipe(y(this.destroy$)).subscribe()}ngOnDestroy(){this.destroy$.next({}),this.destroy$.complete()}};t.\u0275fac=function(o){return new(o||t)(u(B),u(P),u(w))},t.\u0275cmp=F({type:t,selectors:[["app-login"]],decls:25,vars:6,consts:[[1,"container"],[1,"row","align-items-center","justify-content-center","h-100"],[1,"col-md-6"],[3,"submit","formGroup"],["appearance","outline",1,"full-width"],["type","text","matInput","","formControlName","username","autocomplete","off"],["matInput","","formControlName","password","autocomplete","new-password",3,"type"],["type","button","mat-icon-button","","matSuffix","",3,"click"],["type","submit","mat-flat-button","","color","primary",1,"full-width",3,"disabled"]],template:function(o,e){o&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"mat-card")(4,"mat-card-content")(5,"form",3),h("submit",function(){return e.onLogin()}),r(6,"h3"),a(7,"Inicio de Sesi\xF3n"),n(),r(8,"mat-form-field",4)(9,"mat-label"),a(10,"Usuario"),n(),f(11,"input",5),r(12,"mat-error"),a(13),n()(),r(14,"mat-form-field",4)(15,"mat-label"),a(16,"Contrase\xF1a"),n(),f(17,"input",6),r(18,"button",7),h("click",function(){return e.hide=!e.hide}),r(19,"mat-icon"),a(20),n()(),r(21,"mat-error"),a(22),n()(),r(23,"button",8),a(24," Iniciar Sesi\xF3n "),n()()()()()()()),o&2&&(s(5),c("formGroup",e.loginForm),s(8),g(" ",e.baseForm.getErrorMessage(e.loginForm.get("username"))," "),s(4),c("type",e.hide?"password":"text"),s(3),M(e.hide?"visibility_off":"visibility"),s(2),g(" ",e.baseForm.getErrorMessage(e.loginForm.get("password"))," "),s(),c("disabled",e.loginForm.invalid))},dependencies:[C,I,N,$,O,U,A,T,V,q,L,E,j,x,D,k],styles:[".container[_ngcontent-%COMP%]{height:80%}"]});let i=t;return i})();var K=[{path:"",component:z}],H=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=d({type:t}),t.\u0275inj=p({imports:[v.forChild(K),v]});let i=t;return i})();var ht=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=d({type:t}),t.\u0275inj=p({imports:[S,H,_,G]});let i=t;return i})();export{ht as LoginModule};
