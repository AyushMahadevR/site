"use strict";(self.webpackChunknaive_engineer=self.webpackChunknaive_engineer||[]).push([[282],{1282:(_e,S,g)=>{g.r(S),g.d(S,{DashboardModule:()=>Ze});var v=g(8583);const q="https://129.154.38.224/";var e=g(639),Y=g(5917),W=g(7574),Q=g(4612),ee=g(5435),A=g(8002);class R{}class U{}class m{constructor(n){this.normalizedNames=new Map,this.lazyUpdate=null,n?this.lazyInit="string"==typeof n?()=>{this.headers=new Map,n.split("\n").forEach(t=>{const o=t.indexOf(":");if(o>0){const s=t.slice(0,o),i=s.toLowerCase(),d=t.slice(o+1).trim();this.maybeSetNormalizedName(s,i),this.headers.has(i)?this.headers.get(i).push(d):this.headers.set(i,[d])}})}:()=>{this.headers=new Map,Object.keys(n).forEach(t=>{let o=n[t];const s=t.toLowerCase();"string"==typeof o&&(o=[o]),o.length>0&&(this.headers.set(s,o),this.maybeSetNormalizedName(t,s))})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();const t=this.headers.get(n.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,t){return this.clone({name:n,value:t,op:"a"})}set(n,t){return this.clone({name:n,value:t,op:"s"})}delete(n,t){return this.clone({name:n,value:t,op:"d"})}maybeSetNormalizedName(n,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,n)}init(){this.lazyInit&&(this.lazyInit instanceof m?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(t=>{this.headers.set(t,n.headers.get(t)),this.normalizedNames.set(t,n.normalizedNames.get(t))})}clone(n){const t=new m;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof m?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([n]),t}applyUpdate(n){const t=n.name.toLowerCase();switch(n.op){case"a":case"s":let o=n.value;if("string"==typeof o&&(o=[o]),0===o.length)return;this.maybeSetNormalizedName(n.name,t);const s=("a"===n.op?this.headers.get(t):void 0)||[];s.push(...o),this.headers.set(t,s);break;case"d":const i=n.value;if(i){let d=this.headers.get(t);if(!d)return;d=d.filter(p=>-1===i.indexOf(p)),0===d.length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,d)}else this.headers.delete(t),this.normalizedNames.delete(t)}}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>n(this.normalizedNames.get(t),this.headers.get(t)))}}class te{encodeKey(n){return D(n)}encodeValue(n){return D(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}}const re=/%(\d[a-f0-9])/gi,se={40:"@","3A":":",24:"$","2C":",","3B":";","2B":"+","3D":"=","3F":"?","2F":"/"};function D(r){return encodeURIComponent(r).replace(re,(n,t)=>{var o;return null!==(o=se[t])&&void 0!==o?o:n})}function F(r){return`${r}`}class y{constructor(n={}){if(this.updates=null,this.cloneFrom=null,this.encoder=n.encoder||new te,n.fromString){if(n.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function(r,n){const t=new Map;return r.length>0&&r.replace(/^\?/,"").split("&").forEach(s=>{const i=s.indexOf("="),[d,p]=-1==i?[n.decodeKey(s),""]:[n.decodeKey(s.slice(0,i)),n.decodeValue(s.slice(i+1))],a=t.get(d)||[];a.push(p),t.set(d,a)}),t}(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(t=>{const o=n.fromObject[t];this.map.set(t,Array.isArray(o)?o:[o])})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();const t=this.map.get(n);return t?t[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,t){return this.clone({param:n,value:t,op:"a"})}appendAll(n){const t=[];return Object.keys(n).forEach(o=>{const s=n[o];Array.isArray(s)?s.forEach(i=>{t.push({param:o,value:i,op:"a"})}):t.push({param:o,value:s,op:"a"})}),this.clone(t)}set(n,t){return this.clone({param:n,value:t,op:"s"})}delete(n,t){return this.clone({param:n,value:t,op:"d"})}toString(){return this.init(),this.keys().map(n=>{const t=this.encoder.encodeKey(n);return this.map.get(n).map(o=>t+"="+this.encoder.encodeValue(o)).join("&")}).filter(n=>""!==n).join("&")}clone(n){const t=new y({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(n),t}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":const t=("a"===n.op?this.map.get(n.param):void 0)||[];t.push(F(n.value)),this.map.set(n.param,t);break;case"d":if(void 0===n.value){this.map.delete(n.param);break}{let o=this.map.get(n.param)||[];const s=o.indexOf(F(n.value));-1!==s&&o.splice(s,1),o.length>0?this.map.set(n.param,o):this.map.delete(n.param)}}}),this.cloneFrom=this.updates=null)}}class oe{constructor(){this.map=new Map}set(n,t){return this.map.set(n,t),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}keys(){return this.map.keys()}}function L(r){return"undefined"!=typeof ArrayBuffer&&r instanceof ArrayBuffer}function I(r){return"undefined"!=typeof Blob&&r instanceof Blob}function j(r){return"undefined"!=typeof FormData&&r instanceof FormData}class Z{constructor(n,t,o,s){let i;if(this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=n.toUpperCase(),function(r){switch(r){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||s?(this.body=void 0!==o?o:null,i=s):i=o,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params)),this.headers||(this.headers=new m),this.context||(this.context=new oe),this.params){const d=this.params.toString();if(0===d.length)this.urlWithParams=t;else{const p=t.indexOf("?");this.urlWithParams=t+(-1===p?"?":p<t.length-1?"&":"")+d}}else this.params=new y,this.urlWithParams=t}serializeBody(){return null===this.body?null:L(this.body)||I(this.body)||j(this.body)||"undefined"!=typeof URLSearchParams&&this.body instanceof URLSearchParams||"string"==typeof this.body?this.body:this.body instanceof y?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||j(this.body)?null:I(this.body)?this.body.type||null:L(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof y?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(n={}){var t;const o=n.method||this.method,s=n.url||this.url,i=n.responseType||this.responseType,d=void 0!==n.body?n.body:this.body,p=void 0!==n.withCredentials?n.withCredentials:this.withCredentials,a=void 0!==n.reportProgress?n.reportProgress:this.reportProgress;let h=n.headers||this.headers,x=n.params||this.params;const w=null!==(t=n.context)&&void 0!==t?t:this.context;return void 0!==n.setHeaders&&(h=Object.keys(n.setHeaders).reduce((C,l)=>C.set(l,n.setHeaders[l]),h)),n.setParams&&(x=Object.keys(n.setParams).reduce((C,l)=>C.set(l,n.setParams[l]),x)),new Z(o,s,d,{params:x,headers:h,context:w,reportProgress:a,responseType:i,withCredentials:p})}}var c=(()=>((c=c||{})[c.Sent=0]="Sent",c[c.UploadProgress=1]="UploadProgress",c[c.ResponseHeader=2]="ResponseHeader",c[c.DownloadProgress=3]="DownloadProgress",c[c.Response=4]="Response",c[c.User=5]="User",c))();class k{constructor(n,t=200,o="OK"){this.headers=n.headers||new m,this.status=void 0!==n.status?n.status:t,this.statusText=n.statusText||o,this.url=n.url||null,this.ok=this.status>=200&&this.status<300}}class M extends k{constructor(n={}){super(n),this.type=c.ResponseHeader}clone(n={}){return new M({headers:n.headers||this.headers,status:void 0!==n.status?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}}class _ extends k{constructor(n={}){super(n),this.type=c.Response,this.body=void 0!==n.body?n.body:null}clone(n={}){return new _({body:void 0!==n.body?n.body:this.body,headers:n.headers||this.headers,status:void 0!==n.status?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}}class z extends k{constructor(n){super(n,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${n.url||"(unknown url)"}`:`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}}function N(r,n){return{body:n,headers:r.headers,context:r.context,observe:r.observe,params:r.params,reportProgress:r.reportProgress,responseType:r.responseType,withCredentials:r.withCredentials}}let B=(()=>{class r{constructor(t){this.handler=t}request(t,o,s={}){let i;if(t instanceof Z)i=t;else{let a,h;a=s.headers instanceof m?s.headers:new m(s.headers),s.params&&(h=s.params instanceof y?s.params:new y({fromObject:s.params})),i=new Z(t,o,void 0!==s.body?s.body:null,{headers:a,context:s.context,params:h,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials})}const d=(0,Y.of)(i).pipe((0,Q.b)(a=>this.handler.handle(a)));if(t instanceof Z||"events"===s.observe)return d;const p=d.pipe((0,ee.h)(a=>a instanceof _));switch(s.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return p.pipe((0,A.U)(a=>{if(null!==a.body&&!(a.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return a.body}));case"blob":return p.pipe((0,A.U)(a=>{if(null!==a.body&&!(a.body instanceof Blob))throw new Error("Response is not a Blob.");return a.body}));case"text":return p.pipe((0,A.U)(a=>{if(null!==a.body&&"string"!=typeof a.body)throw new Error("Response is not a string.");return a.body}));case"json":default:return p.pipe((0,A.U)(a=>a.body))}case"response":return p;default:throw new Error(`Unreachable: unhandled observe type ${s.observe}}`)}}delete(t,o={}){return this.request("DELETE",t,o)}get(t,o={}){return this.request("GET",t,o)}head(t,o={}){return this.request("HEAD",t,o)}jsonp(t,o){return this.request("JSONP",t,{params:(new y).append(o,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,o={}){return this.request("OPTIONS",t,o)}patch(t,o,s={}){return this.request("PATCH",t,N(s,o))}post(t,o,s={}){return this.request("POST",t,N(s,o))}put(t,o,s={}){return this.request("PUT",t,N(s,o))}}return r.\u0275fac=function(t){return new(t||r)(e.LFG(R))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac}),r})();class X{constructor(n,t){this.next=n,this.interceptor=t}handle(n){return this.interceptor.intercept(n,this.next)}}const V=new e.OlP("HTTP_INTERCEPTORS");let le=(()=>{class r{intercept(t,o){return o.handle(t)}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac}),r})();const de=/^\)\]\}',?\n/;let G=(()=>{class r{constructor(t){this.xhrFactory=t}handle(t){if("JSONP"===t.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new W.y(o=>{const s=this.xhrFactory.build();if(s.open(t.method,t.urlWithParams),t.withCredentials&&(s.withCredentials=!0),t.headers.forEach((l,u)=>s.setRequestHeader(l,u.join(","))),t.headers.has("Accept")||s.setRequestHeader("Accept","application/json, text/plain, */*"),!t.headers.has("Content-Type")){const l=t.detectContentTypeHeader();null!==l&&s.setRequestHeader("Content-Type",l)}if(t.responseType){const l=t.responseType.toLowerCase();s.responseType="json"!==l?l:"text"}const i=t.serializeBody();let d=null;const p=()=>{if(null!==d)return d;const l=1223===s.status?204:s.status,u=s.statusText||"OK",T=new m(s.getAllResponseHeaders()),E=function(r){return"responseURL"in r&&r.responseURL?r.responseURL:/^X-Request-URL:/m.test(r.getAllResponseHeaders())?r.getResponseHeader("X-Request-URL"):null}(s)||t.url;return d=new M({headers:T,status:l,statusText:u,url:E}),d},a=()=>{let{headers:l,status:u,statusText:T,url:E}=p(),f=null;204!==u&&(f=void 0===s.response?s.responseText:s.response),0===u&&(u=f?200:0);let J=u>=200&&u<300;if("json"===t.responseType&&"string"==typeof f){const we=f;f=f.replace(de,"");try{f=""!==f?JSON.parse(f):null}catch(Ae){f=we,J&&(J=!1,f={error:Ae,text:f})}}J?(o.next(new _({body:f,headers:l,status:u,statusText:T,url:E||void 0})),o.complete()):o.error(new z({error:f,headers:l,status:u,statusText:T,url:E||void 0}))},h=l=>{const{url:u}=p(),T=new z({error:l,status:s.status||0,statusText:s.statusText||"Unknown Error",url:u||void 0});o.error(T)};let x=!1;const w=l=>{x||(o.next(p()),x=!0);let u={type:c.DownloadProgress,loaded:l.loaded};l.lengthComputable&&(u.total=l.total),"text"===t.responseType&&!!s.responseText&&(u.partialText=s.responseText),o.next(u)},C=l=>{let u={type:c.UploadProgress,loaded:l.loaded};l.lengthComputable&&(u.total=l.total),o.next(u)};return s.addEventListener("load",a),s.addEventListener("error",h),s.addEventListener("timeout",h),s.addEventListener("abort",h),t.reportProgress&&(s.addEventListener("progress",w),null!==i&&s.upload&&s.upload.addEventListener("progress",C)),s.send(i),o.next({type:c.Sent}),()=>{s.removeEventListener("error",h),s.removeEventListener("abort",h),s.removeEventListener("load",a),s.removeEventListener("timeout",h),t.reportProgress&&(s.removeEventListener("progress",w),null!==i&&s.upload&&s.upload.removeEventListener("progress",C)),s.readyState!==s.DONE&&s.abort()}})}}return r.\u0275fac=function(t){return new(t||r)(e.LFG(v.JF))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac}),r})();const P=new e.OlP("XSRF_COOKIE_NAME"),O=new e.OlP("XSRF_HEADER_NAME");class K{}let ue=(()=>{class r{constructor(t,o,s){this.doc=t,this.platform=o,this.cookieName=s,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,v.Mx)(t,this.cookieName),this.lastCookieString=t),this.lastToken}}return r.\u0275fac=function(t){return new(t||r)(e.LFG(v.K0),e.LFG(e.Lbi),e.LFG(P))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac}),r})(),H=(()=>{class r{constructor(t,o){this.tokenService=t,this.headerName=o}intercept(t,o){const s=t.url.toLowerCase();if("GET"===t.method||"HEAD"===t.method||s.startsWith("http://")||s.startsWith("https://"))return o.handle(t);const i=this.tokenService.getToken();return null!==i&&!t.headers.has(this.headerName)&&(t=t.clone({headers:t.headers.set(this.headerName,i)})),o.handle(t)}}return r.\u0275fac=function(t){return new(t||r)(e.LFG(K),e.LFG(O))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac}),r})(),pe=(()=>{class r{constructor(t,o){this.backend=t,this.injector=o,this.chain=null}handle(t){if(null===this.chain){const o=this.injector.get(V,[]);this.chain=o.reduceRight((s,i)=>new X(s,i),this.backend)}return this.chain.handle(t)}}return r.\u0275fac=function(t){return new(t||r)(e.LFG(U),e.LFG(e.zs3))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac}),r})(),he=(()=>{class r{static disable(){return{ngModule:r,providers:[{provide:H,useClass:le}]}}static withOptions(t={}){return{ngModule:r,providers:[t.cookieName?{provide:P,useValue:t.cookieName}:[],t.headerName?{provide:O,useValue:t.headerName}:[]]}}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({providers:[H,{provide:V,useExisting:H,multi:!0},{provide:K,useClass:ue},{provide:P,useValue:"XSRF-TOKEN"},{provide:O,useValue:"X-XSRF-TOKEN"}]}),r})(),fe=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({providers:[B,{provide:R,useClass:pe},G,{provide:U,useExisting:G}],imports:[[he.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]]}),r})(),$=(()=>{class r{constructor(t){this.http=t}saveCPU(t){return this.http.post(q+"computers",t)}getAllCPU(){return this.http.get(q+"computers")}}return r.\u0275fac=function(t){return new(t||r)(e.LFG(B))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac}),r})();var b=g(665);function ge(r,n){if(1&r){const t=e.EpF();e.TgZ(0,"button",9),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return s.isCreate=!s.isCreate}),e._uU(1," New Processor "),e.qZA()}}function me(r,n){if(1&r){const t=e.EpF();e.TgZ(0,"div",10),e.TgZ(1,"div"),e.TgZ(2,"form",11),e.TgZ(3,"div",12),e.TgZ(4,"div",13),e.TgZ(5,"div",14),e.TgZ(6,"div",15),e.TgZ(7,"label",16),e._uU(8,"Name"),e.qZA(),e.TgZ(9,"input",17),e.NdJ("ngModelChange",function(s){return e.CHM(t),e.oxw().computer.name=s}),e.qZA(),e.qZA(),e.TgZ(10,"div",18),e.TgZ(11,"label",19),e._uU(12,"Multi-core"),e.qZA(),e.TgZ(13,"input",20),e.NdJ("ngModelChange",function(s){return e.CHM(t),e.oxw().computer.multiCoreValue=s}),e.qZA(),e.qZA(),e.TgZ(14,"div",18),e.TgZ(15,"label",21),e._uU(16,"Single-core"),e.qZA(),e.TgZ(17,"input",22),e.NdJ("ngModelChange",function(s){return e.CHM(t),e.oxw().computer.singleCoreValue=s}),e.qZA(),e.qZA(),e.TgZ(18,"div",18),e.TgZ(19,"label",21),e._uU(20,"Price"),e.qZA(),e.TgZ(21,"input",23),e.NdJ("ngModelChange",function(s){return e.CHM(t),e.oxw().computer.price=s}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(22,"div",24),e.TgZ(23,"button",25),e.NdJ("click",function(){return e.CHM(t),e.oxw().clearCreation()}),e._uU(24," Cancel "),e.qZA(),e.TgZ(25,"button",26),e.NdJ("click",function(){return e.CHM(t),e.oxw().saveProcessor()}),e._uU(26," Save "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&r){const t=e.oxw();e.xp6(9),e.Q6J("ngModel",t.computer.name),e.xp6(4),e.Q6J("ngModel",t.computer.multiCoreValue),e.xp6(4),e.Q6J("ngModel",t.computer.singleCoreValue),e.xp6(4),e.Q6J("ngModel",t.computer.price)}}function ye(r,n){if(1&r){const t=e.EpF();e.TgZ(0,"tr",48),e.TgZ(1,"td",30),e.TgZ(2,"div",49),e.TgZ(3,"div"),e.TgZ(4,"p",50),e._uU(5),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(6,"td",51),e._uU(7),e.qZA(),e.TgZ(8,"td",51),e._uU(9),e.qZA(),e.TgZ(10,"td",51),e._uU(11),e.qZA(),e.TgZ(12,"td",51),e._uU(13),e.ALo(14,"number"),e.qZA(),e.TgZ(15,"td",52),e.TgZ(16,"a",53),e.NdJ("click",function(){const i=e.CHM(t).$implicit;return e.oxw(2).editComputer(i)}),e._uU(17,"Edit"),e.qZA(),e.qZA(),e.qZA()}if(2&r){const t=n.$implicit;e.xp6(5),e.Oqu(t.name),e.xp6(2),e.hij(" ",t.multiCoreValue," "),e.xp6(2),e.hij(" ",t.singleCoreValue," "),e.xp6(2),e.hij(" ",t.price," "),e.xp6(2),e.hij(" ",e.lcZ(14,5,t.multiCoreValue/t.price*100)," ")}}function be(r,n){1&r&&(e.TgZ(0,"tr"),e.TgZ(1,"td",54),e.TgZ(2,"p",50),e._uU(3,"No Data Found"),e.qZA(),e.qZA(),e.qZA())}function ve(r,n){if(1&r&&(e.TgZ(0,"div",10),e.TgZ(1,"div",27),e.TgZ(2,"table",28),e.TgZ(3,"thead"),e.TgZ(4,"tr",29),e.TgZ(5,"th",30),e._uU(6,"CPU"),e.qZA(),e.TgZ(7,"th",30),e._uU(8,"Muti"),e.qZA(),e.TgZ(9,"th",30),e._uU(10,"Single"),e.qZA(),e.TgZ(11,"th",30),e._uU(12,"Price"),e.qZA(),e.TgZ(13,"th",30),e._uU(14,"Value"),e.qZA(),e.TgZ(15,"th",30),e._uU(16,"Action"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(17,"tbody",31),e.YNc(18,ye,18,7,"tr",32),e.YNc(19,be,4,0,"tr",33),e.qZA(),e.qZA(),e.qZA(),e.TgZ(20,"div",34),e.TgZ(21,"span",35),e._uU(22," Showing 21-30 of 100 "),e.qZA(),e._UZ(23,"span",36),e.TgZ(24,"span",37),e.TgZ(25,"nav",38),e.TgZ(26,"ul",39),e.TgZ(27,"li"),e.TgZ(28,"button",40),e.O4$(),e.TgZ(29,"svg",41),e._UZ(30,"path",42),e.qZA(),e.qZA(),e.qZA(),e.kcU(),e.TgZ(31,"li"),e.TgZ(32,"button",43),e._uU(33," 1 "),e.qZA(),e.qZA(),e.TgZ(34,"li"),e.TgZ(35,"button",43),e._uU(36," 2 "),e.qZA(),e.qZA(),e.TgZ(37,"li"),e.TgZ(38,"button",44),e._uU(39," 3 "),e.qZA(),e.qZA(),e.TgZ(40,"li"),e.TgZ(41,"button",43),e._uU(42," 4 "),e.qZA(),e.qZA(),e.TgZ(43,"li"),e.TgZ(44,"span",45),e._uU(45,"..."),e.qZA(),e.qZA(),e.TgZ(46,"li"),e.TgZ(47,"button",43),e._uU(48," 8 "),e.qZA(),e.qZA(),e.TgZ(49,"li"),e.TgZ(50,"button",43),e._uU(51," 9 "),e.qZA(),e.qZA(),e.TgZ(52,"li"),e.TgZ(53,"button",46),e.O4$(),e.TgZ(54,"svg",41),e._UZ(55,"path",47),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&r){const t=e.oxw();e.xp6(18),e.Q6J("ngForOf",t.allComputers),e.xp6(1),e.Q6J("ngIf",0==t.allComputers.length)}}let xe=(()=>{class r{constructor(t){this.dashboardService=t,this.isCreate=!1,this.computer={name:"",price:0,multiCoreValue:0,singleCoreValue:0},this.allComputers=[]}ngOnInit(){this.fetchAllComputers()}fetchAllComputers(){this.dashboardService.getAllCPU().subscribe(t=>{this.allComputers=t})}editComputer(t){this.computer=t,this.isCreate=!0}clearCreation(){this.isCreate=!1,this.computer={name:"",price:0,multiCoreValue:0,singleCoreValue:0}}saveProcessor(){this.isCreate=!1,this.dashboardService.saveCPU(this.computer).subscribe(t=>{this.allComputers.push(this.computer),this.computer={name:"",price:0,multiCoreValue:0,singleCoreValue:0}})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36($))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-dashboard"]],features:[e._Bn([$])],decls:14,vars:3,consts:[[1,"flex","h-screen"],[1,"w-2/12","border-r"],[1,"font-bold","mt-5","text-center","text-gray-500"],[1,"flex-1"],[1,"border-b","flex","justify-between","p-5"],[1,"font-bold","text-gray-600","text-lg"],["class","group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",3,"click",4,"ngIf"],[1,"m-16"],["class","w-full overflow-hidden rounded-lg shadow-xs border",4,"ngIf"],[1,"group","relative","w-full","flex","justify-center","py-2","px-4","border","border-transparent","text-sm","font-medium","rounded-md","text-white","bg-indigo-600","hover:bg-indigo-700","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-indigo-500",3,"click"],[1,"w-full","overflow-hidden","rounded-lg","shadow-xs","border"],["action","#","method","POST"],[1,"shadow","sm:rounded-md","sm:overflow-hidden"],[1,"px-4","py-5","bg-white","space-y-6","sm:p-6"],[1,"gap-6","grid","grid-cols-8"],[1,"col-span-6","sm:col-span-6","lg:col-span-2"],["for","city",1,"block","text-sm","font-medium","text-gray-700"],["type","text","name","city","id","city",1,"mt-1","focus:ring-indigo-500","focus:border-indigo-500","block","w-full","shadow-sm","sm:text-sm","border-gray-300","rounded-md",3,"ngModel","ngModelChange"],[1,"col-span-6","sm:col-span-3","lg:col-span-2"],["for","region",1,"block","text-sm","font-medium","text-gray-700"],["type","text","name","region","id","region",1,"mt-1","focus:ring-indigo-500","focus:border-indigo-500","block","w-full","shadow-sm","sm:text-sm","border-gray-300","rounded-md",3,"ngModel","ngModelChange"],["for","postal-code",1,"block","text-sm","font-medium","text-gray-700"],["type","text","name","postal-code","id","postal-code",1,"mt-1","focus:ring-indigo-500","focus:border-indigo-500","block","w-full","shadow-sm","sm:text-sm","border-gray-300","rounded-md",3,"ngModel","ngModelChange"],["type","number","name","postal-code","id","cost",1,"mt-1","focus:ring-indigo-500","focus:border-indigo-500","block","w-full","shadow-sm","sm:text-sm","border-gray-300","rounded-md",3,"ngModel","ngModelChange"],[1,"px-4","py-3","bg-gray-50","text-right","sm:px-6"],[1,"bg-white","border","border-gray-300","border-transparent","focus:outline-none","focus:ring-2","focus:ring-indigo-500","focus:ring-offset-2","font-medium","inline-flex","justify-center","mx-3","px-4","py-2","rounded-md","shadow-sm","text-sm",3,"click"],[1,"inline-flex","justify-center","py-2","px-4","border","border-transparent","shadow-sm","text-sm","font-medium","rounded-md","text-white","bg-indigo-600","hover:bg-indigo-700","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-indigo-500",3,"click"],[1,"w-full","overflow-x-auto"],[1,"w-full","whitespace-no-wrap"],[1,"text-xs","font-semibold","tracking-wide","text-left","text-gray-500","uppercase","border-b","dark:border-gray-700","bg-gray-50","dark:text-gray-400","dark:bg-gray-800"],[1,"px-4","py-3"],[1,"bg-white","divide-y","dark:divide-gray-700","dark:bg-gray-800"],["class","text-gray-700 dark:text-gray-400",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"grid","px-4","py-3","text-xs","font-semibold","tracking-wide","text-gray-500","uppercase","border-t","dark:border-gray-700","bg-gray-50","sm:grid-cols-9","dark:text-gray-400","dark:bg-gray-800"],[1,"flex","items-center","col-span-3"],[1,"col-span-2"],[1,"flex","col-span-4","mt-2","sm:mt-auto","sm:justify-end"],["aria-label","Table navigation"],[1,"inline-flex","items-center"],["aria-label","Previous",1,"px-3","py-1","rounded-md","rounded-l-lg","focus:outline-none","focus:shadow-outline-purple"],["aria-hidden","true","viewBox","0 0 20 20",1,"w-4","h-4","fill-current"],["clip-rule","evenodd","d","M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","fill-rule","evenodd"],[1,"px-3","py-1","rounded-md","focus:outline-none","focus:shadow-outline-purple"],[1,"px-3","py-1","text-white","transition-colors","duration-150","bg-purple-600","border","border-r-0","border-purple-600","rounded-md","focus:outline-none","focus:shadow-outline-purple"],[1,"px-3","py-1"],["aria-label","Next",1,"px-3","py-1","rounded-md","rounded-r-lg","focus:outline-none","focus:shadow-outline-purple"],["clip-rule","evenodd","d","M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","fill-rule","evenodd"],[1,"text-gray-700","dark:text-gray-400"],[1,"flex","items-center","text-sm"],[1,"font-semibold"],[1,"px-4","py-3","text-sm"],[1,"px-6","py-4","whitespace-nowrap","text-sm","font-medium"],[1,"text-indigo-600","hover:text-indigo-900",3,"click"],["colspan","100%",1,"px-4","py-3","text-center"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"p",2),e._uU(3,"simple stuff"),e.qZA(),e.qZA(),e.TgZ(4,"div",3),e.TgZ(5,"div",4),e.TgZ(6,"div"),e.TgZ(7,"h3",5),e._uU(8,"Processors"),e.qZA(),e.qZA(),e.TgZ(9,"div"),e.YNc(10,ge,2,0,"button",6),e.qZA(),e.qZA(),e.TgZ(11,"div",7),e.YNc(12,me,27,4,"div",8),e.YNc(13,ve,56,2,"div",8),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(10),e.Q6J("ngIf",!o.isCreate),e.xp6(2),e.Q6J("ngIf",o.isCreate),e.xp6(1),e.Q6J("ngIf",!o.isCreate))},directives:[v.O5,b._Y,b.JL,b.F,b.Fj,b.JJ,b.On,b.wV,v.sg],pipes:[v.JJ],styles:[""]}),r})();var Ce=g(4152);const Te=[{path:"",component:xe}];let Ze=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[v.ez,b.u5,fe,Ce.Bz.forChild(Te)]]}),r})()}}]);