import{a as x}from"./chunk-SVE7K7DC.js";import"./chunk-YZXRXD3Q.js";import{C as nt,D as rt,E as ot,Z as at,b as Ze,c as Xe,d as Ye,f as E,g as $,h as Je,i as Ke,j as et,t as tt,u as it}from"./chunk-C43BA76M.js";import{b as je,c as Le,d as ze,e as Ve,f as He,g as Be,h as Ue,i as $e,j as Ge,k as qe,l as B,m as Z}from"./chunk-MFKGNWZG.js";import{c as Qe,d as X,f as U,g as We,h as Y}from"./chunk-IX6G3U3V.js";import{$a as ue,Ba as pe,Bb as Se,C as re,Cb as xe,Da as A,Db as a,Dc as Fe,Eb as s,Fb as h,Gb as _e,Hb as we,I as P,Ja as me,Jb as _,Lc as Pe,M as oe,Mb as S,Mc as H,Ob as g,Oc as Re,Pb as Ie,Pc as Ae,Qb as Me,Sb as Oe,Tb as ke,Ub as Ee,Vb as k,W as D,Wa as de,Wb as c,Xb as q,Yb as L,Z as ae,Za as p,_a as y,_b as Ne,a as te,aa as R,ac as z,b as ie,ba as M,bb as fe,bc as V,cc as De,da as se,db as he,fb as ge,ga as d,gb as ve,j as T,k as ne,ka as f,la as O,na as le,oa as G,pc as Te,rb as C,sa as ce,t as F,ta as v,tb as m,ua as b,ub as j,vb as be,wb as ye,zb as Ce}from"./chunk-M7QQO3YR.js";var st=(n,e)=>d(x).token$.pipe(P(1),F(t=>!t));var lt=(n,e)=>{let r=d(x),t=d(qe);return r.token$.pipe(P(1),F(i=>i?!0:t.createUrlTree(["/login"])))};var _t=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",loadChildren:()=>import("./chunk-CSG7GBSP.js").then(n=>n.HomeModule)},{path:"notFound",loadChildren:()=>import("./chunk-5MEMLXPG.js").then(n=>n.NotFoundModule)},{path:"admin",loadChildren:()=>import("./chunk-VZO4KIQS.js").then(n=>n.AdminModule),canActivate:[lt]},{path:"login",loadChildren:()=>import("./chunk-XJSF2RWS.js").then(n=>n.LoginModule),canActivate:[st]}],ct=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=O({type:e}),e.\u0275inj=M({imports:[Z.forRoot(_t),Z]});let n=e;return n})();var It=["overlay"],Mt=["*"];function Ot(n,e){n&1&&h(0,"div")}function kt(n,e){if(n&1&&(a(0,"div"),C(1,Ot,1,0,"div",6),s()),n&2){let r=g(2);ye(r.spinner.class),j("color",r.spinner.color),p(),m("ngForOf",r.spinner.divArray)}}function Et(n,e){if(n&1&&(h(0,"div",7),z(1,"safeHtml")),n&2){let r=g(2);m("innerHTML",V(1,1,r.template),de)}}function Nt(n,e){if(n&1&&(a(0,"div",2,0),C(2,kt,2,5,"div",3)(3,Et,2,3,"div",4),a(4,"div",5),Me(5),s()()),n&2){let r=g();j("background-color",r.spinner.bdColor)("z-index",r.spinner.zIndex)("position",r.spinner.fullScreen?"fixed":"absolute"),m("@.disabled",r.disableAnimation)("@fadeIn","in"),p(2),m("ngIf",!r.template),p(),m("ngIf",r.template),p(),j("z-index",r.spinner.zIndex)}}var Dt={"ball-8bits":16,"ball-atom":4,"ball-beat":3,"ball-circus":5,"ball-climbing-dot":4,"ball-clip-rotate":1,"ball-clip-rotate-multiple":2,"ball-clip-rotate-pulse":2,"ball-elastic-dots":5,"ball-fall":3,"ball-fussion":4,"ball-grid-beat":9,"ball-grid-pulse":9,"ball-newton-cradle":4,"ball-pulse":3,"ball-pulse-rise":5,"ball-pulse-sync":3,"ball-rotate":1,"ball-running-dots":5,"ball-scale":1,"ball-scale-multiple":3,"ball-scale-pulse":2,"ball-scale-ripple":1,"ball-scale-ripple-multiple":3,"ball-spin":8,"ball-spin-clockwise":8,"ball-spin-clockwise-fade":8,"ball-spin-clockwise-fade-rotating":8,"ball-spin-fade":8,"ball-spin-fade-rotating":8,"ball-spin-rotate":2,"ball-square-clockwise-spin":8,"ball-square-spin":8,"ball-triangle-path":3,"ball-zig-zag":2,"ball-zig-zag-deflect":2,cog:1,"cube-transition":2,fire:3,"line-scale":5,"line-scale-party":5,"line-scale-pulse-out":5,"line-scale-pulse-out-rapid":5,"line-spin-clockwise-fade":8,"line-spin-clockwise-fade-rotating":8,"line-spin-fade":8,"line-spin-fade-rotating":8,pacman:6,"square-jelly-box":2,"square-loader":1,"square-spin":1,timer:1,"triangle-skew-spin":1},Q={BD_COLOR:"rgba(51,51,51,0.8)",SPINNER_COLOR:"#fff",Z_INDEX:99999},W="primary",I=class n{constructor(e){Object.assign(this,e)}static create(e){return!e?.template&&!e?.type&&console.warn(`[ngx-spinner]: Property "type" is missed. Please, provide animation type to <ngx-spinner> component
        and ensure css is added to angular.json file`),new n(e)}},J=(()=>{let e=class e{constructor(){this.spinnerObservable=new ne(null)}getSpinner(t){return this.spinnerObservable.asObservable().pipe(re(i=>i&&i.name===t))}show(t=W,i){return new Promise((o,l)=>{setTimeout(()=>{i&&Object.keys(i).length?(i.name=t,this.spinnerObservable.next(new I(ie(te({},i),{show:!0}))),o(!0)):(this.spinnerObservable.next(new I({name:t,show:!0})),o(!0))},10)})}hide(t=W,i=10){return new Promise((o,l)=>{setTimeout(()=>{this.spinnerObservable.next(new I({name:t,show:!1})),o(!0)},i)})}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),pt=new se("NGX_SPINNER_CONFIG"),Tt=(()=>{let e=class e{constructor(t){this._sanitizer=t}transform(t){if(t)return this._sanitizer.bypassSecurityTrustHtml(t)}};e.\u0275fac=function(i){return new(i||e)(y(Ue,16))},e.\u0275pipe=le({name:"safeHtml",type:e,pure:!0,standalone:!0});let n=e;return n})(),mt=(()=>{let e=class e{constructor(t,i,o,l){this.spinnerService=t,this.changeDetector=i,this.elementRef=o,this.globalConfig=l,this.disableAnimation=!1,this.spinner=new I,this.ngUnsubscribe=new T,this.setDefaultOptions=()=>{let{type:u}=this.globalConfig??{};this.spinner=I.create({name:this.name,bdColor:this.bdColor,size:this.size,color:this.color,type:this.type??u,fullScreen:this.fullScreen,divArray:this.divArray,divCount:this.divCount,show:this.show,zIndex:this.zIndex,template:this.template,showSpinner:this.showSpinner})},this.bdColor=Q.BD_COLOR,this.zIndex=Q.Z_INDEX,this.color=Q.SPINNER_COLOR,this.size="large",this.fullScreen=!0,this.name=W,this.template=null,this.showSpinner=!1,this.divArray=[],this.divCount=0,this.show=!1}initObservable(){this.spinnerService.getSpinner(this.name).pipe(D(this.ngUnsubscribe)).subscribe(t=>{this.setDefaultOptions(),Object.assign(this.spinner,t),t.show&&this.onInputChange(),this.changeDetector.detectChanges()})}ngOnInit(){this.setDefaultOptions(),this.initObservable()}isSpinnerZone(t){return t===this.elementRef.nativeElement.parentElement?!0:t.parentNode&&this.isSpinnerZone(t.parentNode)}ngOnChanges(t){for(let i in t)if(i){let o=t[i];if(o.isFirstChange())return;typeof o.currentValue<"u"&&o.currentValue!==o.previousValue&&o.currentValue!==""&&(this.spinner[i]=o.currentValue,i==="showSpinner"&&(o.currentValue?this.spinnerService.show(this.spinner.name,this.spinner):this.spinnerService.hide(this.spinner.name)),i==="name"&&this.initObservable())}}getClass(t,i){this.spinner.divCount=Dt[t],this.spinner.divArray=Array(this.spinner.divCount).fill(0).map((l,u)=>u);let o="";switch(i.toLowerCase()){case"small":o="la-sm";break;case"medium":o="la-2x";break;case"large":o="la-3x";break;default:break}return"la-"+t+" "+o}onInputChange(){this.spinner.class=this.getClass(this.spinner.type,this.spinner.size)}ngOnDestroy(){this.ngUnsubscribe.next(),this.ngUnsubscribe.complete()}};e.\u0275fac=function(i){return new(i||e)(y(J),y(Te),y(pe),y(pt,8))},e.\u0275cmp=f({type:e,selectors:[["ngx-spinner"]],viewQuery:function(i,o){if(i&1&&Oe(It,5),i&2){let l;ke(l=Ee())&&(o.spinnerDOM=l.first)}},inputs:{bdColor:"bdColor",size:"size",color:"color",type:"type",fullScreen:"fullScreen",name:"name",zIndex:"zIndex",template:"template",showSpinner:"showSpinner",disableAnimation:"disableAnimation"},standalone:!0,features:[ce,Ne],ngContentSelectors:Mt,decls:1,vars:1,consts:[["overlay",""],["class","ngx-spinner-overlay",3,"background-color","z-index","position",4,"ngIf"],[1,"ngx-spinner-overlay"],[3,"class","color",4,"ngIf"],[3,"innerHTML",4,"ngIf"],[1,"loading-text"],[4,"ngFor","ngForOf"],[3,"innerHTML"]],template:function(i,o){i&1&&(Ie(),C(0,Nt,6,12,"div",1)),i&2&&m("ngIf",o.spinner.show)},dependencies:[Tt,H,Pe],styles:[".ngx-spinner-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%}.ngx-spinner-overlay[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(.loading-text){top:50%;left:50%;margin:0;position:absolute;transform:translate(-50%,-50%)}.loading-text[_ngcontent-%COMP%]{position:absolute;top:60%;left:50%;transform:translate(-50%,-60%)}"],data:{animation:[Qe("fadeIn",[We("in",U({opacity:1})),Y(":enter",[U({opacity:0}),X(300)]),Y(":leave",X(200,U({opacity:0})))])]},changeDetection:0});let n=e;return n})(),dt=(()=>{let e=class e{static forRoot(t){return{ngModule:e,providers:[{provide:pt,useValue:t}]}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=O({type:e}),e.\u0275inj=M({imports:[Ae]});let n=e;return n})();function Rt(n,e){if(n&1){let r=_();_e(0),a(1,"button",6),S("click",function(){v(r);let i=g();return b(i.onToggleSidenav())}),a(2,"mat-icon"),c(3,"menu"),s()(),we()}}function At(n,e){n&1&&(a(0,"a",7),c(1,"Iniciar Sesi\xF3n"),s())}function jt(n,e){if(n&1){let r=_();a(0,"button",8),c(1),z(2,"titlecase"),a(3,"mat-icon"),c(4,"expand_more"),s()(),a(5,"mat-menu",null,1)(7,"button",9),S("click",function(){v(r);let i=g();return b(i.onLogout())}),a(8,"mat-icon"),c(9,"logout"),s(),c(10," Cerrar Sesi\xF3n "),s()()}if(n&2){let r=k(6),t=g();m("matMenuTriggerFor",r),p(),L(" ",V(2,2,t.data.nombre+" "+t.data.apellidos)," ")}}var ht=(()=>{let e=class e{constructor(t){this.authSvc=t,this.toggleSidenav=new A,this.isLogged=!1,this.data={},this.destroy$=new T}ngOnInit(){this.authSvc.isLogged$.pipe(D(this.destroy$)).subscribe(t=>{this.isLogged=t}),this.authSvc.tokenData$.pipe(D(this.destroy$)).subscribe(t=>{this.data=t})}onLogout(){this.authSvc.logOut()}onToggleSidenav(){this.toggleSidenav.emit()}ngOnDestroy(){this.destroy$.next({}),this.destroy$.complete()}};e.\u0275fac=function(i){return new(i||e)(y(x))},e.\u0275cmp=f({type:e,selectors:[["app-header"]],outputs:{toggleSidenav:"toggleSidenav"},decls:9,vars:5,consts:[["viewLogOut",""],["lista","matMenu"],[4,"ngIf"],["routerLink","/home"],[1,"spacer"],["mat-button","","color","primary","routerLink","/login",4,"ngIf","ngIfElse"],["mat-icon-button","",3,"click"],["mat-button","","color","primary","routerLink","/login"],["mat-button","",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"]],template:function(i,o){if(i&1&&(a(0,"mat-toolbar"),C(1,Rt,4,0,"ng-container",2),a(2,"span")(3,"a",3),c(4,"Sistema de Ventas"),s()(),h(5,"span",4),C(6,At,2,0,"a",5),s(),C(7,jt,11,4,"ng-template",null,0,De)),i&2){let l=k(8);be("mat-elevation-z2",!0),p(),m("ngIf",o.isLogged),p(5),m("ngIf",!o.isLogged)("ngIfElse",l)}},dependencies:[H,B,Xe,Ze,Ye,E,$,rt,nt,ot,Re],styles:[".spacer[_ngcontent-%COMP%]{flex:1 1 auto}a[_ngcontent-%COMP%]{text-decoration:none;color:#0f9}"]});let n=e;return n})();var gt=(()=>{let e=class e{constructor(){this.currentYear=new Date().getFullYear()}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=f({type:e,selectors:[["app-footer"]],decls:20,vars:1,consts:[[1,"footer"],[1,"container"],[1,"row"],[1,"col-md-6"],[1,"col-md-6","text-md-right"],["href","#",1,"me-2"],["color","primary"],["href","#"],[1,"custom-icon"],[1,"col"],[1,"text-muted"]],template:function(i,o){i&1&&(a(0,"footer",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"p"),c(5,"Lorem ipsum dolor sit, amet consectetur adipisicing elit."),s()(),a(6,"div",4)(7,"a",5)(8,"mat-icon",6),c(9,"facebook"),s()(),a(10,"a",7)(11,"mat-icon",8),c(12,"tiktok"),s()()()(),a(13,"div",2)(14,"div",9),h(15,"hr"),s()(),a(16,"div",2)(17,"div",9)(18,"span",10),c(19),s()()()()()),i&2&&(p(19),L("",o.currentYear," Mi Empresa"))},dependencies:[E],styles:[".footer[_ngcontent-%COMP%]{width:100%;padding:10px 0;text-align:center;background-color:#00dbde;background-image:linear-gradient(90deg,#00dbde,#fc00ff)}.custom-icon[_ngcontent-%COMP%]{color:#000}"]});let n=e;return n})();function Vt(n,e){if(n&1){let r=_();a(0,"a",2),S("click",function(){v(r);let i=g();return b(i.onToggleSidenav())}),a(1,"mat-icon",3),c(2),s(),a(3,"span"),c(4),s()()}if(n&2){let r=e.$implicit;m("routerLink",r.route),p(2),q(r.icon),p(2),q(r.name)}}var vt=(()=>{let e=class e{constructor(){this.toggleSidenav=new A,this.menus=[]}ngOnInit(){this.generateMenu()}generateMenu(){this.menus.push({icon:"home",name:"Inicio",route:"/"},{icon:"manage_accounts",name:"Usuarios",route:"admin/usuarios"},{icon:"category",name:"Categorias",route:"admin/categorias"},{icon:"inventory_2",name:"Productos",route:"admin/productos"},{icon:"shopping_cart",name:"Ventas",route:"ventas/ventas"},{icon:"content_paste",name:"Reportes",route:"ventas/reportes"})}onToggleSidenav(){this.toggleSidenav.emit()}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=f({type:e,selectors:[["app-sidebar"]],outputs:{toggleSidenav:"toggleSidenav"},decls:5,vars:0,consts:[["color","primary"],["mat-list-item","",3,"routerLink"],["mat-list-item","",3,"click","routerLink"],[1,"me-2","align-middle"]],template:function(i,o){i&1&&(a(0,"mat-toolbar",0),c(1,"Menu"),s(),a(2,"mat-nav-list"),Se(3,Vt,5,3,"a",1,Ce),s()),i&2&&(p(3),xe(o.menus))},dependencies:[B,E,$,it,tt]});let n=e;return n})();var bt=(()=>{let e=class e{constructor(){this.title="sistema-ventas-app"}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=f({type:e,selectors:[["app-root"]],decls:13,vars:1,consts:[["sidenav",""],["mode","push"],[3,"toggleSidenav"],["bdColor","rgba(0, 0, 0, 0.8)","size","medium","color","#fff","type","ball-atom",3,"fullScreen"],[2,"color","white"]],template:function(i,o){if(i&1){let l=_();a(0,"mat-sidenav-container")(1,"mat-sidenav",1,0)(3,"app-sidebar",2),S("toggleSidenav",function(){v(l);let N=k(2);return b(N.toggle())}),s()(),a(4,"mat-sidenav-content")(5,"header")(6,"app-header",2),S("toggleSidenav",function(){v(l);let N=k(2);return b(N.toggle())}),s()(),a(7,"main"),h(8,"router-outlet"),s(),h(9,"app-footer"),s()(),a(10,"ngx-spinner",3)(11,"p",4),c(12,"Loading..."),s()()}i&2&&(p(10),m("fullScreen",!0))},dependencies:[Ge,Ke,et,Je,mt,ht,gt,vt],styles:["mat-sidenav[_ngcontent-%COMP%]{width:25%}mat-sidenav-container[_ngcontent-%COMP%]{height:100%}mat-sidenav-content[_ngcontent-%COMP%]{min-height:100vh;display:grid;grid-template-rows:auto 1fr auto}"]});let n=e;return n})();var Bt="@",Ut=(()=>{let e=class e{constructor(t,i,o,l,u){this.doc=t,this.delegate=i,this.zone=o,this.animationType=l,this.moduleImpl=u,this._rendererFactoryPromise=null,this.scheduler=d(fe,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-XVQ6TIGY.js").then(i=>i)).catch(i=>{throw new ae(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:o})=>{this._engine=i(this.animationType,this.doc);let l=new o(this.delegate,this._engine,this.zone);return this.delegate=l,l})}createRenderer(t,i){let o=this.delegate.createRenderer(t,i);if(o.\u0275type===0)return o;typeof o.throwOnSyntheticProps=="boolean"&&(o.throwOnSyntheticProps=!1);let l=new K(o);return i?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(u=>{let N=u.createRenderer(t,i);l.use(N),this.scheduler?.notify(9)}).catch(u=>{l.use(o)}),l}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(i){ue()},e.\u0275prov=R({token:e,factory:e.\u0275fac});let n=e;return n})(),K=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let r of this.replay)r(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,r){return this.delegate.createElement(e,r)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,r){this.delegate.appendChild(e,r)}insertBefore(e,r,t,i){this.delegate.insertBefore(e,r,t,i)}removeChild(e,r,t){this.delegate.removeChild(e,r,t)}selectRootElement(e,r){return this.delegate.selectRootElement(e,r)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,r,t,i){this.delegate.setAttribute(e,r,t,i)}removeAttribute(e,r,t){this.delegate.removeAttribute(e,r,t)}addClass(e,r){this.delegate.addClass(e,r)}removeClass(e,r){this.delegate.removeClass(e,r)}setStyle(e,r,t,i){this.delegate.setStyle(e,r,t,i)}removeStyle(e,r,t){this.delegate.removeStyle(e,r,t)}setProperty(e,r,t){this.shouldReplay(r)&&this.replay.push(i=>i.setProperty(e,r,t)),this.delegate.setProperty(e,r,t)}setValue(e,r){this.delegate.setValue(e,r)}listen(e,r,t){return this.shouldReplay(r)&&this.replay.push(i=>i.listen(e,r,t)),this.delegate.listen(e,r,t)}shouldReplay(e){return this.replay!==null&&e.startsWith(Bt)}};function yt(n="animations"){return ge("NgAsyncAnimations"),G([{provide:he,useFactory:(e,r,t)=>new Ut(e,r,t,n),deps:[Fe,Ve,ve]},{provide:me,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var ee=0,Ct=(n,e)=>{let r=d(J);return r.show(),ee++,e(n).pipe(oe(()=>{ee--,ee||r.hide()}))};var St=(n,e)=>{if(n.headers.get("requireToken")){let t=d(x).tokenValue;if(t){let i=n.clone({setHeaders:{auth:`${t}`}});return e(i)}}return e(n)};var xt=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=O({type:e,bootstrap:[bt]}),e.\u0275inj=M({providers:[$e(),yt(),je(ze(),Le([Ct,St]))],imports:[Be,ct,at,dt]});let n=e;return n})();He().bootstrapModule(xt,{ngZoneEventCoalescing:!0}).catch(n=>console.error(n));