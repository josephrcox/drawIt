var Id=Object.defineProperty;var Rd=(n,e,t)=>e in n?Id(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Li=(n,e,t)=>Rd(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();function J(){}function Cd(n){return!!n&&(typeof n=="object"||typeof n=="function")&&typeof n.then=="function"}function ku(n){return n()}function hl(){return Object.create(null)}function yt(n){n.forEach(ku)}function Su(n){return typeof n=="function"}function ut(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let ys;function Tt(n,e){return n===e?!0:(ys||(ys=document.createElement("a")),ys.href=e,n===ys.href)}function kd(n){return Object.keys(n).length===0}function Pu(n,...e){if(n==null){for(const r of e)r(void 0);return J}const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Wr(n){let e;return Pu(n,t=>e=t)(),e}function Qe(n,e,t){n.$$.on_destroy.push(Pu(e,t))}function dt(n,e,t){return n.set(t),e}function k(n,e){n.appendChild(e)}function q(n,e,t){n.insertBefore(e,t||null)}function j(n){n.parentNode&&n.parentNode.removeChild(n)}function _t(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function N(n){return document.createElement(n)}function Yt(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function re(n){return document.createTextNode(n)}function $(){return re(" ")}function It(){return re("")}function de(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function E(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function Sd(n){return Array.from(n.childNodes)}function ye(n,e){e=""+e,n.data!==e&&(n.data=e)}function sn(n,e){n.value=e??""}function Yi(n,e,t,r){t==null?n.style.removeProperty(e):n.style.setProperty(e,t,"")}function Jt(n,e,t){n.classList.toggle(e,!!t)}let Or;function jt(n){Or=n}function Vu(){if(!Or)throw new Error("Function called outside component initialization");return Or}function Hr(n){Vu().$$.on_mount.push(n)}const jn=[],xr=[];let Gn=[];const fl=[],Pd=Promise.resolve();let Ji=!1;function Vd(){Ji||(Ji=!0,Pd.then(Io))}function Zi(n){Gn.push(n)}const Fi=new Set;let Un=0;function Io(){if(Un!==0)return;const n=Or;do{try{for(;Un<jn.length;){const e=jn[Un];Un++,jt(e),Dd(e.$$)}}catch(e){throw jn.length=0,Un=0,e}for(jt(null),jn.length=0,Un=0;xr.length;)xr.pop()();for(let e=0;e<Gn.length;e+=1){const t=Gn[e];Fi.has(t)||(Fi.add(t),t())}Gn.length=0}while(jn.length);for(;fl.length;)fl.pop()();Ji=!1,Fi.clear(),jt(n)}function Dd(n){if(n.fragment!==null){n.update(),yt(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Zi)}}function Nd(n){const e=[],t=[];Gn.forEach(r=>n.indexOf(r)===-1?e.push(r):t.push(r)),t.forEach(r=>r()),Gn=e}const Is=new Set;let bn;function Fe(){bn={r:0,c:[],p:bn}}function Ue(){bn.r||yt(bn.c),bn=bn.p}function Q(n,e){n&&n.i&&(Is.delete(n),n.i(e))}function ee(n,e,t,r){if(n&&n.o){if(Is.has(n))return;Is.add(n),bn.c.push(()=>{Is.delete(n),r&&(t&&n.d(1),r())}),n.o(e)}else r&&r()}function dl(n,e){const t=e.token={};function r(s,i,a,l){if(e.token!==t)return;e.resolved=l;let c=e.ctx;a!==void 0&&(c=c.slice(),c[a]=l);const u=s&&(e.current=s)(c);let f=!1;e.block&&(e.blocks?e.blocks.forEach((m,p)=>{p!==i&&m&&(Fe(),ee(m,1,1,()=>{e.blocks[p]===m&&(e.blocks[p]=null)}),Ue())}):e.block.d(1),u.c(),Q(u,1),u.m(e.mount(),e.anchor),f=!0),e.block=u,e.blocks&&(e.blocks[i]=u),f&&Io()}if(Cd(n)){const s=Vu();if(n.then(i=>{jt(s),r(e.then,1,e.value,i),jt(null)},i=>{if(jt(s),r(e.catch,2,e.error,i),jt(null),!e.hasCatch)throw i}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,n),!0;e.resolved=n}}function Md(n,e,t){const r=e.slice(),{resolved:s}=n;n.current===n.then&&(r[n.value]=s),n.current===n.catch&&(r[n.error]=s),n.block.p(r,t)}function Re(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function We(n){n&&n.c()}function Be(n,e,t){const{fragment:r,after_update:s}=n.$$;r&&r.m(e,t),Zi(()=>{const i=n.$$.on_mount.map(ku).filter(Su);n.$$.on_destroy?n.$$.on_destroy.push(...i):yt(i),n.$$.on_mount=[]}),s.forEach(Zi)}function je(n,e){const t=n.$$;t.fragment!==null&&(Nd(t.after_update),yt(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Od(n,e){n.$$.dirty[0]===-1&&(jn.push(n),Vd(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function wt(n,e,t,r,s,i,a=null,l=[-1]){const c=Or;jt(n);const u=n.$$={fragment:null,ctx:[],props:i,update:J,not_equal:s,bound:hl(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:hl(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};a&&a(u.root);let f=!1;if(u.ctx=t?t(n,e.props||{},(m,p,...y)=>{const b=y.length?y[0]:p;return u.ctx&&s(u.ctx[m],u.ctx[m]=b)&&(!u.skip_bound&&u.bound[m]&&u.bound[m](b),f&&Od(n,m)),p}):[],u.update(),f=!0,yt(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){const m=Sd(e.target);u.fragment&&u.fragment.l(m),m.forEach(j)}else u.fragment&&u.fragment.c();e.intro&&Q(n.$$.fragment),Be(n,e.target,e.anchor),Io()}jt(c)}class vt{constructor(){Li(this,"$$");Li(this,"$$set")}$destroy(){je(this,1),this.$destroy=J}$on(e,t){if(!Su(t))return J;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!kd(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const xd="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(xd);const Bn=[];function tr(n,e=J){let t;const r=new Set;function s(l){if(ut(n,l)&&(n=l,t)){const c=!Bn.length;for(const u of r)u[1](),Bn.push(u,n);if(c){for(let u=0;u<Bn.length;u+=2)Bn[u][0](Bn[u+1]);Bn.length=0}}}function i(l){s(l(n))}function a(l,c=J){const u=[l,c];return r.add(u),r.size===1&&(t=e(s,i)||J),l(n),()=>{r.delete(u),r.size===0&&t&&(t(),t=null)}}return{set:s,update:i,subscribe:a}}const Xe=tr(null),Gr=tr([]),mt=tr(null),Et=tr({}),Rs=tr(!1),Cs=tr(!1);try{const n=localStorage.getItem("drawIt-user");n&&Xe.set(JSON.parse(n));const e=localStorage.getItem("drawIt-games");e&&Gr.set(JSON.parse(e));const t=localStorage.getItem("drawIt-users");t&&Et.set(JSON.parse(t))}catch(n){console.error("Error loading from localStorage:",n)}Xe.subscribe(n=>{n?localStorage.setItem("drawIt-user",JSON.stringify(n)):localStorage.removeItem("drawIt-user")});Gr.subscribe(n=>{n?localStorage.setItem("drawIt-games",JSON.stringify(n)):localStorage.removeItem("drawIt-games")});Et.subscribe(n=>{Object.keys(n).length>0?localStorage.setItem("drawIt-users",JSON.stringify(n)):localStorage.removeItem("drawIt-users")});const Ld=()=>{};var ml={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Fd=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Nu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,c=s+2<n.length,u=c?n[s+2]:0,f=i>>2,m=(i&3)<<4|l>>4;let p=(l&15)<<2|u>>6,y=u&63;c||(y=64,a||(p=64)),r.push(t[f],t[m],t[p],t[y])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Du(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Fd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const m=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||u==null||m==null)throw new Ud;const p=i<<2|l>>4;if(r.push(p),u!==64){const y=l<<4&240|u>>2;if(r.push(y),m!==64){const b=u<<6&192|m;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ud extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Bd=function(n){const e=Du(n);return Nu.encodeByteArray(e,!0)},Ms=function(n){return Bd(n).replace(/\./g,"")},jd=function(n){try{return Nu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd=()=>qd().__FIREBASE_DEFAULTS__,Wd=()=>{if(typeof process>"u"||typeof ml>"u")return;const n=ml.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Hd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&jd(n[1]);return e&&JSON.parse(e)},Ro=()=>{try{return Ld()||zd()||Wd()||Hd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Gd=n=>{var e,t;return(t=(e=Ro())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Kd=n=>{const e=Gd(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Mu=()=>{var n;return(n=Ro())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ms(JSON.stringify(t)),Ms(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yd(){var n;const e=(n=Ro())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Jd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Zd(){return!Yd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ou(){try{return typeof indexedDB=="object"}catch{return!1}}function xu(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}function em(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm="FirebaseError";class dn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=tm,Object.setPrototypeOf(this,dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ys.prototype.create)}}class Ys{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?nm(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new dn(s,l,r)}}function nm(n,e){return n.replace(rm,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const rm=/\{\$([^}]+)}/g;function Os(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(pl(i)&&pl(a)){if(!Os(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function pl(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm=1e3,im=2,om=4*60*60*1e3,am=.5;function gl(n,e=sm,t=im){const r=e*Math.pow(t,n),s=Math.round(am*r*(Math.random()-.5)*2);return Math.min(om,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(n){return n&&n._delegate?n._delegate:n}class zt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new $d;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(um(e))try{this.getOrInitializeService({instanceIdentifier:En})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=En){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=En){return this.instances.has(e)}getOptions(e=En){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:cm(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=En){return this.component?this.component.multipleInstances?e:En:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cm(n){return n===En?void 0:n}function um(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new lm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ge||(ge={}));const fm={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},dm=ge.INFO,mm={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},pm=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=mm[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Co{constructor(e){this.name=e,this._logLevel=dm,this._logHandler=pm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const gm=(n,e)=>e.some(t=>n instanceof t);let _l,yl;function _m(){return _l||(_l=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ym(){return yl||(yl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lu=new WeakMap,eo=new WeakMap,Fu=new WeakMap,Ui=new WeakMap,ko=new WeakMap;function wm(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(en(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Lu.set(t,n)}).catch(()=>{}),ko.set(e,n),e}function vm(n){if(eo.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});eo.set(n,e)}let to={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return eo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Fu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return en(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Am(n){to=n(to)}function Em(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Bi(this),e,...t);return Fu.set(r,e.sort?e.sort():[e]),en(r)}:ym().includes(n)?function(...e){return n.apply(Bi(this),e),en(Lu.get(this))}:function(...e){return en(n.apply(Bi(this),e))}}function bm(n){return typeof n=="function"?Em(n):(n instanceof IDBTransaction&&vm(n),gm(n,_m())?new Proxy(n,to):n)}function en(n){if(n instanceof IDBRequest)return wm(n);if(Ui.has(n))return Ui.get(n);const e=bm(n);return e!==n&&(Ui.set(n,e),ko.set(e,n)),e}const Bi=n=>ko.get(n);function Uu(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=en(a);return r&&a.addEventListener("upgradeneeded",c=>{r(en(a.result),c.oldVersion,c.newVersion,en(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Tm=["get","getKey","getAll","getAllKeys","count"],Im=["put","add","delete","clear"],ji=new Map;function wl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ji.get(e))return ji.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Im.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Tm.includes(t)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[t](...l),s&&c.done]))[0]};return ji.set(e,i),i}Am(n=>({...n,get:(e,t,r)=>wl(e,t)||n.get(e,t,r),has:(e,t)=>!!wl(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Cm(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Cm(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const no="@firebase/app",vl="0.11.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt=new Co("@firebase/app"),km="@firebase/app-compat",Sm="@firebase/analytics-compat",Pm="@firebase/analytics",Vm="@firebase/app-check-compat",Dm="@firebase/app-check",Nm="@firebase/auth",Mm="@firebase/auth-compat",Om="@firebase/database",xm="@firebase/data-connect",Lm="@firebase/database-compat",Fm="@firebase/functions",Um="@firebase/functions-compat",Bm="@firebase/installations",jm="@firebase/installations-compat",qm="@firebase/messaging",zm="@firebase/messaging-compat",Wm="@firebase/performance",Hm="@firebase/performance-compat",Gm="@firebase/remote-config",Km="@firebase/remote-config-compat",$m="@firebase/storage",Qm="@firebase/storage-compat",Xm="@firebase/firestore",Ym="@firebase/vertexai",Jm="@firebase/firestore-compat",Zm="firebase",ep="11.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro="[DEFAULT]",tp={[no]:"fire-core",[km]:"fire-core-compat",[Pm]:"fire-analytics",[Sm]:"fire-analytics-compat",[Dm]:"fire-app-check",[Vm]:"fire-app-check-compat",[Nm]:"fire-auth",[Mm]:"fire-auth-compat",[Om]:"fire-rtdb",[xm]:"fire-data-connect",[Lm]:"fire-rtdb-compat",[Fm]:"fire-fn",[Um]:"fire-fn-compat",[Bm]:"fire-iid",[jm]:"fire-iid-compat",[qm]:"fire-fcm",[zm]:"fire-fcm-compat",[Wm]:"fire-perf",[Hm]:"fire-perf-compat",[Gm]:"fire-rc",[Km]:"fire-rc-compat",[$m]:"fire-gcs",[Qm]:"fire-gcs-compat",[Xm]:"fire-fst",[Jm]:"fire-fst-compat",[Ym]:"fire-vertex","fire-js":"fire-js",[Zm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs=new Map,np=new Map,so=new Map;function Al(n,e){try{n.container.addComponent(e)}catch(t){Wt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function on(n){const e=n.name;if(so.has(e))return Wt.debug(`There were multiple attempts to register component ${e}.`),!1;so.set(e,n);for(const t of xs.values())Al(t,n);for(const t of np.values())Al(t,n);return!0}function So(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function rp(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},tn=new Ys("app","Firebase",sp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op=ep;function Bu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ro,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw tn.create("bad-app-name",{appName:String(s)});if(t||(t=Mu()),!t)throw tn.create("no-options");const i=xs.get(s);if(i){if(Os(t,i.options)&&Os(r,i.config))return i;throw tn.create("duplicate-app",{appName:s})}const a=new hm(s);for(const c of so.values())a.addComponent(c);const l=new ip(t,r,a);return xs.set(s,l),l}function ap(n=ro){const e=xs.get(n);if(!e&&n===ro&&Mu())return Bu();if(!e)throw tn.create("no-app",{appName:n});return e}function Dt(n,e,t){var r;let s=(r=tp[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wt.warn(l.join(" "));return}on(new zt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp="firebase-heartbeat-database",cp=1,Lr="firebase-heartbeat-store";let qi=null;function ju(){return qi||(qi=Uu(lp,cp,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Lr)}catch(t){console.warn(t)}}}}).catch(n=>{throw tn.create("idb-open",{originalErrorMessage:n.message})})),qi}async function up(n){try{const t=(await ju()).transaction(Lr),r=await t.objectStore(Lr).get(qu(n));return await t.done,r}catch(e){if(e instanceof dn)Wt.warn(e.message);else{const t=tn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Wt.warn(t.message)}}}async function El(n,e){try{const r=(await ju()).transaction(Lr,"readwrite");await r.objectStore(Lr).put(e,qu(n)),await r.done}catch(t){if(t instanceof dn)Wt.warn(t.message);else{const r=tn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Wt.warn(r.message)}}}function qu(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp=1024,fp=30;class dp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new pp(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=bl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>fp){const a=gp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Wt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=bl(),{heartbeatsToSend:r,unsentEntries:s}=mp(this._heartbeatsCache.heartbeats),i=Ms(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Wt.warn(t),""}}}function bl(){return new Date().toISOString().substring(0,10)}function mp(n,e=hp){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Tl(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Tl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class pp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ou()?xu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await up(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return El(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return El(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Tl(n){return Ms(JSON.stringify({version:2,heartbeats:n})).length}function gp(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(n){on(new zt("platform-logger",e=>new Rm(e),"PRIVATE")),on(new zt("heartbeat",e=>new dp(e),"PRIVATE")),Dt(no,vl,n),Dt(no,vl,"esm2017"),Dt("fire-js","")}_p("");var yp="firebase",wp="11.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dt(yp,wp,"app");const zu="@firebase/installations",Po="0.6.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu=1e4,Hu=`w:${Po}`,Gu="FIS_v2",vp="https://firebaseinstallations.googleapis.com/v1",Ap=60*60*1e3,Ep="installations",bp="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Cn=new Ys(Ep,bp,Tp);function Ku(n){return n instanceof dn&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u({projectId:n}){return`${vp}/projects/${n}/installations`}function Qu(n){return{token:n.token,requestStatus:2,expiresIn:Rp(n.expiresIn),creationTime:Date.now()}}async function Xu(n,e){const r=(await e.json()).error;return Cn.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Yu({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Ip(n,{refreshToken:e}){const t=Yu(n);return t.append("Authorization",Cp(e)),t}async function Ju(n){const e=await n();return e.status>=500&&e.status<600?n():e}function Rp(n){return Number(n.replace("s","000"))}function Cp(n){return`${Gu} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kp({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=$u(n),s=Yu(n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const a={fid:t,authVersion:Gu,appId:n.appId,sdkVersion:Hu},l={method:"POST",headers:s,body:JSON.stringify(a)},c=await Ju(()=>fetch(r,l));if(c.ok){const u=await c.json();return{fid:u.fid||t,registrationStatus:2,refreshToken:u.refreshToken,authToken:Qu(u.authToken)}}else throw await Xu("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp=/^[cdef][\w-]{21}$/,io="";function Vp(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=Dp(n);return Pp.test(t)?t:io}catch{return io}}function Dp(n){return Sp(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh=new Map;function th(n,e){const t=Js(n);nh(t,e),Np(t,e)}function nh(n,e){const t=eh.get(n);if(t)for(const r of t)r(e)}function Np(n,e){const t=Mp();t&&t.postMessage({key:n,fid:e}),Op()}let Tn=null;function Mp(){return!Tn&&"BroadcastChannel"in self&&(Tn=new BroadcastChannel("[Firebase] FID Change"),Tn.onmessage=n=>{nh(n.data.key,n.data.fid)}),Tn}function Op(){eh.size===0&&Tn&&(Tn.close(),Tn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp="firebase-installations-database",Lp=1,kn="firebase-installations-store";let zi=null;function Vo(){return zi||(zi=Uu(xp,Lp,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(kn)}}})),zi}async function Ls(n,e){const t=Js(n),s=(await Vo()).transaction(kn,"readwrite"),i=s.objectStore(kn),a=await i.get(t);return await i.put(e,t),await s.done,(!a||a.fid!==e.fid)&&th(n,e.fid),e}async function rh(n){const e=Js(n),r=(await Vo()).transaction(kn,"readwrite");await r.objectStore(kn).delete(e),await r.done}async function Zs(n,e){const t=Js(n),s=(await Vo()).transaction(kn,"readwrite"),i=s.objectStore(kn),a=await i.get(t),l=e(a);return l===void 0?await i.delete(t):await i.put(l,t),await s.done,l&&(!a||a.fid!==l.fid)&&th(n,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Do(n){let e;const t=await Zs(n.appConfig,r=>{const s=Fp(r),i=Up(n,s);return e=i.registrationPromise,i.installationEntry});return t.fid===io?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Fp(n){const e=n||{fid:Vp(),registrationStatus:0};return sh(e)}function Up(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Cn.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Bp(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:jp(n)}:{installationEntry:e}}async function Bp(n,e){try{const t=await kp(n,e);return Ls(n.appConfig,t)}catch(t){throw Ku(t)&&t.customData.serverCode===409?await rh(n.appConfig):await Ls(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function jp(n){let e=await Il(n.appConfig);for(;e.registrationStatus===1;)await Zu(100),e=await Il(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await Do(n);return r||t}return e}function Il(n){return Zs(n,e=>{if(!e)throw Cn.create("installation-not-found");return sh(e)})}function sh(n){return qp(n)?{fid:n.fid,registrationStatus:0}:n}function qp(n){return n.registrationStatus===1&&n.registrationTime+Wu<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zp({appConfig:n,heartbeatServiceProvider:e},t){const r=Wp(n,t),s=Ip(n,t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const a={installation:{sdkVersion:Hu,appId:n.appId}},l={method:"POST",headers:s,body:JSON.stringify(a)},c=await Ju(()=>fetch(r,l));if(c.ok){const u=await c.json();return Qu(u)}else throw await Xu("Generate Auth Token",c)}function Wp(n,{fid:e}){return`${$u(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function No(n,e=!1){let t;const r=await Zs(n.appConfig,i=>{if(!ih(i))throw Cn.create("not-registered");const a=i.authToken;if(!e&&Kp(a))return i;if(a.requestStatus===1)return t=Hp(n,e),i;{if(!navigator.onLine)throw Cn.create("app-offline");const l=Qp(i);return t=Gp(n,l),l}});return t?await t:r.authToken}async function Hp(n,e){let t=await Rl(n.appConfig);for(;t.authToken.requestStatus===1;)await Zu(100),t=await Rl(n.appConfig);const r=t.authToken;return r.requestStatus===0?No(n,e):r}function Rl(n){return Zs(n,e=>{if(!ih(e))throw Cn.create("not-registered");const t=e.authToken;return Xp(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Gp(n,e){try{const t=await zp(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await Ls(n.appConfig,r),t}catch(t){if(Ku(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await rh(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ls(n.appConfig,r)}throw t}}function ih(n){return n!==void 0&&n.registrationStatus===2}function Kp(n){return n.requestStatus===2&&!$p(n)}function $p(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Ap}function Qp(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function Xp(n){return n.requestStatus===1&&n.requestTime+Wu<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yp(n){const e=n,{installationEntry:t,registrationPromise:r}=await Do(e);return r?r.catch(console.error):No(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jp(n,e=!1){const t=n;return await Zp(t),(await No(t,e)).token}async function Zp(n){const{registrationPromise:e}=await Do(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(n){if(!n||!n.options)throw Wi("App Configuration");if(!n.name)throw Wi("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Wi(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Wi(n){return Cn.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh="installations",tg="installations-internal",ng=n=>{const e=n.getProvider("app").getImmediate(),t=eg(e),r=So(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},rg=n=>{const e=n.getProvider("app").getImmediate(),t=So(e,oh).getImmediate();return{getId:()=>Yp(t),getToken:s=>Jp(t,s)}};function sg(){on(new zt(oh,ng,"PUBLIC")),on(new zt(tg,rg,"PRIVATE"))}sg();Dt(zu,Po);Dt(zu,Po,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl="analytics",ig="firebase_id",og="origin",ag=60*1e3,lg="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Mo="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt=new Co("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},bt=new Ys("analytics","Analytics",cg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(n){if(!n.startsWith(Mo)){const e=bt.create("invalid-gtag-resource",{gtagURL:n});return lt.warn(e.message),""}return n}function ah(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function hg(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function fg(n,e){const t=hg("firebase-js-sdk-policy",{createScriptURL:ug}),r=document.createElement("script"),s=`${Mo}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function dg(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function mg(n,e,t,r,s,i){const a=r[s];try{if(a)await e[a];else{const c=(await ah(t)).find(u=>u.measurementId===s);c&&await e[c.appId]}}catch(l){lt.error(l)}n("config",s,i)}async function pg(n,e,t,r,s){try{let i=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const l=await ah(t);for(const c of a){const u=l.find(m=>m.measurementId===c),f=u&&e[u.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),n("event",r,s||{})}catch(i){lt.error(i)}}function gg(n,e,t,r){async function s(i,...a){try{if(i==="event"){const[l,c]=a;await pg(n,e,t,l,c)}else if(i==="config"){const[l,c]=a;await mg(n,e,t,r,l,c)}else if(i==="consent"){const[l,c]=a;n("consent",l,c)}else if(i==="get"){const[l,c,u]=a;n("get",l,c,u)}else if(i==="set"){const[l]=a;n("set",l)}else n(i,...a)}catch(l){lt.error(l)}}return s}function _g(n,e,t,r,s){let i=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=gg(i,n,e,t),{gtagCore:i,wrappedGtag:window[s]}}function yg(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Mo)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg=30,vg=1e3;class Ag{constructor(e={},t=vg){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const lh=new Ag;function Eg(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function bg(n){var e;const{appId:t,apiKey:r}=n,s={method:"GET",headers:Eg(r)},i=lg.replace("{app-id}",t),a=await fetch(i,s);if(a.status!==200&&a.status!==304){let l="";try{const c=await a.json();!((e=c.error)===null||e===void 0)&&e.message&&(l=c.error.message)}catch{}throw bt.create("config-fetch-failed",{httpStatus:a.status,responseMessage:l})}return a.json()}async function Tg(n,e=lh,t){const{appId:r,apiKey:s,measurementId:i}=n.options;if(!r)throw bt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw bt.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new Cg;return setTimeout(async()=>{l.abort()},ag),ch({appId:r,apiKey:s,measurementId:i},a,l,e)}async function ch(n,{throttleEndTimeMillis:e,backoffCount:t},r,s=lh){var i;const{appId:a,measurementId:l}=n;try{await Ig(r,e)}catch(c){if(l)return lt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:a,measurementId:l};throw c}try{const c=await bg(n);return s.deleteThrottleMetadata(a),c}catch(c){const u=c;if(!Rg(u)){if(s.deleteThrottleMetadata(a),l)return lt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:l};throw c}const f=Number((i=u==null?void 0:u.customData)===null||i===void 0?void 0:i.httpStatus)===503?gl(t,s.intervalMillis,wg):gl(t,s.intervalMillis),m={throttleEndTimeMillis:Date.now()+f,backoffCount:t+1};return s.setThrottleMetadata(a,m),lt.debug(`Calling attemptFetch again in ${f} millis`),ch(n,m,r,s)}}function Ig(n,e){return new Promise((t,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(i),r(bt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Rg(n){if(!(n instanceof dn)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class Cg{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function kg(n,e,t,r,s){if(s&&s.global){n("event",t,r);return}else{const i=await e,a=Object.assign(Object.assign({},r),{send_to:i});n("event",t,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sg(){if(Ou())try{await xu()}catch(n){return lt.warn(bt.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return lt.warn(bt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Pg(n,e,t,r,s,i,a){var l;const c=Tg(n);c.then(y=>{t[y.measurementId]=y.appId,n.options.measurementId&&y.measurementId!==n.options.measurementId&&lt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${y.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(y=>lt.error(y)),e.push(c);const u=Sg().then(y=>{if(y)return r.getId()}),[f,m]=await Promise.all([c,u]);yg(i)||fg(i,f.measurementId),s("js",new Date);const p=(l=a==null?void 0:a.config)!==null&&l!==void 0?l:{};return p[og]="firebase",p.update=!0,m!=null&&(p[ig]=m),s("config",f.measurementId,p),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e){this.app=e}_delete(){return delete Pr[this.app.options.appId],Promise.resolve()}}let Pr={},kl=[];const Sl={};let Hi="dataLayer",Dg="gtag",Pl,uh,Vl=!1;function Ng(){const n=[];if(Jd()&&n.push("This is a browser extension environment."),em()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),t=bt.create("invalid-analytics-context",{errorInfo:e});lt.warn(t.message)}}function Mg(n,e,t){Ng();const r=n.options.appId;if(!r)throw bt.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)lt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw bt.create("no-api-key");if(Pr[r]!=null)throw bt.create("already-exists",{id:r});if(!Vl){dg(Hi);const{wrappedGtag:i,gtagCore:a}=_g(Pr,kl,Sl,Hi,Dg);uh=i,Pl=a,Vl=!0}return Pr[r]=Pg(n,kl,Sl,e,Pl,Hi,t),new Vg(n)}function Og(n,e,t,r){n=kt(n),kg(uh,Pr[n.app.options.appId],e,t,r).catch(s=>lt.error(s))}const Dl="@firebase/analytics",Nl="0.10.12";function xg(){on(new zt(Cl,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Mg(r,s,t)},"PUBLIC")),on(new zt("analytics-internal",n,"PRIVATE")),Dt(Dl,Nl),Dt(Dl,Nl,"esm2017");function n(e){try{const t=e.getProvider(Cl).getImmediate();return{logEvent:(r,s,i)=>Og(t,r,s,i)}}catch(t){throw bt.create("interop-component-reg-failed",{reason:t})}}}xg();var Ml=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var nn,hh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,_){function v(){}v.prototype=_.prototype,A.D=_.prototype,A.prototype=new v,A.prototype.constructor=A,A.C=function(T,I,P){for(var w=Array(arguments.length-2),W=2;W<arguments.length;W++)w[W-2]=arguments[W];return _.prototype[I].apply(T,w)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,_,v){v||(v=0);var T=Array(16);if(typeof _=="string")for(var I=0;16>I;++I)T[I]=_.charCodeAt(v++)|_.charCodeAt(v++)<<8|_.charCodeAt(v++)<<16|_.charCodeAt(v++)<<24;else for(I=0;16>I;++I)T[I]=_[v++]|_[v++]<<8|_[v++]<<16|_[v++]<<24;_=A.g[0],v=A.g[1],I=A.g[2];var P=A.g[3],w=_+(P^v&(I^P))+T[0]+3614090360&4294967295;_=v+(w<<7&4294967295|w>>>25),w=P+(I^_&(v^I))+T[1]+3905402710&4294967295,P=_+(w<<12&4294967295|w>>>20),w=I+(v^P&(_^v))+T[2]+606105819&4294967295,I=P+(w<<17&4294967295|w>>>15),w=v+(_^I&(P^_))+T[3]+3250441966&4294967295,v=I+(w<<22&4294967295|w>>>10),w=_+(P^v&(I^P))+T[4]+4118548399&4294967295,_=v+(w<<7&4294967295|w>>>25),w=P+(I^_&(v^I))+T[5]+1200080426&4294967295,P=_+(w<<12&4294967295|w>>>20),w=I+(v^P&(_^v))+T[6]+2821735955&4294967295,I=P+(w<<17&4294967295|w>>>15),w=v+(_^I&(P^_))+T[7]+4249261313&4294967295,v=I+(w<<22&4294967295|w>>>10),w=_+(P^v&(I^P))+T[8]+1770035416&4294967295,_=v+(w<<7&4294967295|w>>>25),w=P+(I^_&(v^I))+T[9]+2336552879&4294967295,P=_+(w<<12&4294967295|w>>>20),w=I+(v^P&(_^v))+T[10]+4294925233&4294967295,I=P+(w<<17&4294967295|w>>>15),w=v+(_^I&(P^_))+T[11]+2304563134&4294967295,v=I+(w<<22&4294967295|w>>>10),w=_+(P^v&(I^P))+T[12]+1804603682&4294967295,_=v+(w<<7&4294967295|w>>>25),w=P+(I^_&(v^I))+T[13]+4254626195&4294967295,P=_+(w<<12&4294967295|w>>>20),w=I+(v^P&(_^v))+T[14]+2792965006&4294967295,I=P+(w<<17&4294967295|w>>>15),w=v+(_^I&(P^_))+T[15]+1236535329&4294967295,v=I+(w<<22&4294967295|w>>>10),w=_+(I^P&(v^I))+T[1]+4129170786&4294967295,_=v+(w<<5&4294967295|w>>>27),w=P+(v^I&(_^v))+T[6]+3225465664&4294967295,P=_+(w<<9&4294967295|w>>>23),w=I+(_^v&(P^_))+T[11]+643717713&4294967295,I=P+(w<<14&4294967295|w>>>18),w=v+(P^_&(I^P))+T[0]+3921069994&4294967295,v=I+(w<<20&4294967295|w>>>12),w=_+(I^P&(v^I))+T[5]+3593408605&4294967295,_=v+(w<<5&4294967295|w>>>27),w=P+(v^I&(_^v))+T[10]+38016083&4294967295,P=_+(w<<9&4294967295|w>>>23),w=I+(_^v&(P^_))+T[15]+3634488961&4294967295,I=P+(w<<14&4294967295|w>>>18),w=v+(P^_&(I^P))+T[4]+3889429448&4294967295,v=I+(w<<20&4294967295|w>>>12),w=_+(I^P&(v^I))+T[9]+568446438&4294967295,_=v+(w<<5&4294967295|w>>>27),w=P+(v^I&(_^v))+T[14]+3275163606&4294967295,P=_+(w<<9&4294967295|w>>>23),w=I+(_^v&(P^_))+T[3]+4107603335&4294967295,I=P+(w<<14&4294967295|w>>>18),w=v+(P^_&(I^P))+T[8]+1163531501&4294967295,v=I+(w<<20&4294967295|w>>>12),w=_+(I^P&(v^I))+T[13]+2850285829&4294967295,_=v+(w<<5&4294967295|w>>>27),w=P+(v^I&(_^v))+T[2]+4243563512&4294967295,P=_+(w<<9&4294967295|w>>>23),w=I+(_^v&(P^_))+T[7]+1735328473&4294967295,I=P+(w<<14&4294967295|w>>>18),w=v+(P^_&(I^P))+T[12]+2368359562&4294967295,v=I+(w<<20&4294967295|w>>>12),w=_+(v^I^P)+T[5]+4294588738&4294967295,_=v+(w<<4&4294967295|w>>>28),w=P+(_^v^I)+T[8]+2272392833&4294967295,P=_+(w<<11&4294967295|w>>>21),w=I+(P^_^v)+T[11]+1839030562&4294967295,I=P+(w<<16&4294967295|w>>>16),w=v+(I^P^_)+T[14]+4259657740&4294967295,v=I+(w<<23&4294967295|w>>>9),w=_+(v^I^P)+T[1]+2763975236&4294967295,_=v+(w<<4&4294967295|w>>>28),w=P+(_^v^I)+T[4]+1272893353&4294967295,P=_+(w<<11&4294967295|w>>>21),w=I+(P^_^v)+T[7]+4139469664&4294967295,I=P+(w<<16&4294967295|w>>>16),w=v+(I^P^_)+T[10]+3200236656&4294967295,v=I+(w<<23&4294967295|w>>>9),w=_+(v^I^P)+T[13]+681279174&4294967295,_=v+(w<<4&4294967295|w>>>28),w=P+(_^v^I)+T[0]+3936430074&4294967295,P=_+(w<<11&4294967295|w>>>21),w=I+(P^_^v)+T[3]+3572445317&4294967295,I=P+(w<<16&4294967295|w>>>16),w=v+(I^P^_)+T[6]+76029189&4294967295,v=I+(w<<23&4294967295|w>>>9),w=_+(v^I^P)+T[9]+3654602809&4294967295,_=v+(w<<4&4294967295|w>>>28),w=P+(_^v^I)+T[12]+3873151461&4294967295,P=_+(w<<11&4294967295|w>>>21),w=I+(P^_^v)+T[15]+530742520&4294967295,I=P+(w<<16&4294967295|w>>>16),w=v+(I^P^_)+T[2]+3299628645&4294967295,v=I+(w<<23&4294967295|w>>>9),w=_+(I^(v|~P))+T[0]+4096336452&4294967295,_=v+(w<<6&4294967295|w>>>26),w=P+(v^(_|~I))+T[7]+1126891415&4294967295,P=_+(w<<10&4294967295|w>>>22),w=I+(_^(P|~v))+T[14]+2878612391&4294967295,I=P+(w<<15&4294967295|w>>>17),w=v+(P^(I|~_))+T[5]+4237533241&4294967295,v=I+(w<<21&4294967295|w>>>11),w=_+(I^(v|~P))+T[12]+1700485571&4294967295,_=v+(w<<6&4294967295|w>>>26),w=P+(v^(_|~I))+T[3]+2399980690&4294967295,P=_+(w<<10&4294967295|w>>>22),w=I+(_^(P|~v))+T[10]+4293915773&4294967295,I=P+(w<<15&4294967295|w>>>17),w=v+(P^(I|~_))+T[1]+2240044497&4294967295,v=I+(w<<21&4294967295|w>>>11),w=_+(I^(v|~P))+T[8]+1873313359&4294967295,_=v+(w<<6&4294967295|w>>>26),w=P+(v^(_|~I))+T[15]+4264355552&4294967295,P=_+(w<<10&4294967295|w>>>22),w=I+(_^(P|~v))+T[6]+2734768916&4294967295,I=P+(w<<15&4294967295|w>>>17),w=v+(P^(I|~_))+T[13]+1309151649&4294967295,v=I+(w<<21&4294967295|w>>>11),w=_+(I^(v|~P))+T[4]+4149444226&4294967295,_=v+(w<<6&4294967295|w>>>26),w=P+(v^(_|~I))+T[11]+3174756917&4294967295,P=_+(w<<10&4294967295|w>>>22),w=I+(_^(P|~v))+T[2]+718787259&4294967295,I=P+(w<<15&4294967295|w>>>17),w=v+(P^(I|~_))+T[9]+3951481745&4294967295,A.g[0]=A.g[0]+_&4294967295,A.g[1]=A.g[1]+(I+(w<<21&4294967295|w>>>11))&4294967295,A.g[2]=A.g[2]+I&4294967295,A.g[3]=A.g[3]+P&4294967295}r.prototype.u=function(A,_){_===void 0&&(_=A.length);for(var v=_-this.blockSize,T=this.B,I=this.h,P=0;P<_;){if(I==0)for(;P<=v;)s(this,A,P),P+=this.blockSize;if(typeof A=="string"){for(;P<_;)if(T[I++]=A.charCodeAt(P++),I==this.blockSize){s(this,T),I=0;break}}else for(;P<_;)if(T[I++]=A[P++],I==this.blockSize){s(this,T),I=0;break}}this.h=I,this.o+=_},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var _=1;_<A.length-8;++_)A[_]=0;var v=8*this.o;for(_=A.length-8;_<A.length;++_)A[_]=v&255,v/=256;for(this.u(A),A=Array(16),_=v=0;4>_;++_)for(var T=0;32>T;T+=8)A[v++]=this.g[_]>>>T&255;return A};function i(A,_){var v=l;return Object.prototype.hasOwnProperty.call(v,A)?v[A]:v[A]=_(A)}function a(A,_){this.h=_;for(var v=[],T=!0,I=A.length-1;0<=I;I--){var P=A[I]|0;T&&P==_||(v[I]=P,T=!1)}this.g=v}var l={};function c(A){return-128<=A&&128>A?i(A,function(_){return new a([_|0],0>_?-1:0)}):new a([A|0],0>A?-1:0)}function u(A){if(isNaN(A)||!isFinite(A))return m;if(0>A)return C(u(-A));for(var _=[],v=1,T=0;A>=v;T++)_[T]=A/v|0,v*=4294967296;return new a(_,0)}function f(A,_){if(A.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(A.charAt(0)=="-")return C(f(A.substring(1),_));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=u(Math.pow(_,8)),T=m,I=0;I<A.length;I+=8){var P=Math.min(8,A.length-I),w=parseInt(A.substring(I,I+P),_);8>P?(P=u(Math.pow(_,P)),T=T.j(P).add(u(w))):(T=T.j(v),T=T.add(u(w)))}return T}var m=c(0),p=c(1),y=c(16777216);n=a.prototype,n.m=function(){if(R(this))return-C(this).m();for(var A=0,_=1,v=0;v<this.g.length;v++){var T=this.i(v);A+=(0<=T?T:4294967296+T)*_,_*=4294967296}return A},n.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(b(this))return"0";if(R(this))return"-"+C(this).toString(A);for(var _=u(Math.pow(A,6)),v=this,T="";;){var I=O(v,_).g;v=D(v,I.j(_));var P=((0<v.g.length?v.g[0]:v.h)>>>0).toString(A);if(v=I,b(v))return P+T;for(;6>P.length;)P="0"+P;T=P+T}},n.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function b(A){if(A.h!=0)return!1;for(var _=0;_<A.g.length;_++)if(A.g[_]!=0)return!1;return!0}function R(A){return A.h==-1}n.l=function(A){return A=D(this,A),R(A)?-1:b(A)?0:1};function C(A){for(var _=A.g.length,v=[],T=0;T<_;T++)v[T]=~A.g[T];return new a(v,~A.h).add(p)}n.abs=function(){return R(this)?C(this):this},n.add=function(A){for(var _=Math.max(this.g.length,A.g.length),v=[],T=0,I=0;I<=_;I++){var P=T+(this.i(I)&65535)+(A.i(I)&65535),w=(P>>>16)+(this.i(I)>>>16)+(A.i(I)>>>16);T=w>>>16,P&=65535,w&=65535,v[I]=w<<16|P}return new a(v,v[v.length-1]&-2147483648?-1:0)};function D(A,_){return A.add(C(_))}n.j=function(A){if(b(this)||b(A))return m;if(R(this))return R(A)?C(this).j(C(A)):C(C(this).j(A));if(R(A))return C(this.j(C(A)));if(0>this.l(y)&&0>A.l(y))return u(this.m()*A.m());for(var _=this.g.length+A.g.length,v=[],T=0;T<2*_;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(var I=0;I<A.g.length;I++){var P=this.i(T)>>>16,w=this.i(T)&65535,W=A.i(I)>>>16,we=A.i(I)&65535;v[2*T+2*I]+=w*we,F(v,2*T+2*I),v[2*T+2*I+1]+=P*we,F(v,2*T+2*I+1),v[2*T+2*I+1]+=w*W,F(v,2*T+2*I+1),v[2*T+2*I+2]+=P*W,F(v,2*T+2*I+2)}for(T=0;T<_;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=_;T<2*_;T++)v[T]=0;return new a(v,0)};function F(A,_){for(;(A[_]&65535)!=A[_];)A[_+1]+=A[_]>>>16,A[_]&=65535,_++}function L(A,_){this.g=A,this.h=_}function O(A,_){if(b(_))throw Error("division by zero");if(b(A))return new L(m,m);if(R(A))return _=O(C(A),_),new L(C(_.g),C(_.h));if(R(_))return _=O(A,C(_)),new L(C(_.g),_.h);if(30<A.g.length){if(R(A)||R(_))throw Error("slowDivide_ only works with positive integers.");for(var v=p,T=_;0>=T.l(A);)v=G(v),T=G(T);var I=H(v,1),P=H(T,1);for(T=H(T,2),v=H(v,2);!b(T);){var w=P.add(T);0>=w.l(A)&&(I=I.add(v),P=w),T=H(T,1),v=H(v,1)}return _=D(A,I.j(_)),new L(I,_)}for(I=m;0<=A.l(_);){for(v=Math.max(1,Math.floor(A.m()/_.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),P=u(v),w=P.j(_);R(w)||0<w.l(A);)v-=T,P=u(v),w=P.j(_);b(P)&&(P=p),I=I.add(P),A=D(A,w)}return new L(I,A)}n.A=function(A){return O(this,A).h},n.and=function(A){for(var _=Math.max(this.g.length,A.g.length),v=[],T=0;T<_;T++)v[T]=this.i(T)&A.i(T);return new a(v,this.h&A.h)},n.or=function(A){for(var _=Math.max(this.g.length,A.g.length),v=[],T=0;T<_;T++)v[T]=this.i(T)|A.i(T);return new a(v,this.h|A.h)},n.xor=function(A){for(var _=Math.max(this.g.length,A.g.length),v=[],T=0;T<_;T++)v[T]=this.i(T)^A.i(T);return new a(v,this.h^A.h)};function G(A){for(var _=A.g.length+1,v=[],T=0;T<_;T++)v[T]=A.i(T)<<1|A.i(T-1)>>>31;return new a(v,A.h)}function H(A,_){var v=_>>5;_%=32;for(var T=A.g.length-v,I=[],P=0;P<T;P++)I[P]=0<_?A.i(P+v)>>>_|A.i(P+v+1)<<32-_:A.i(P+v);return new a(I,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,hh=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=u,a.fromString=f,nn=a}).apply(typeof Ml<"u"?Ml:typeof self<"u"?self:typeof window<"u"?window:{});var ws=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fh,Rr,dh,ks,oo,mh,ph,gh;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,h,d){return o==Array.prototype||o==Object.prototype||(o[h]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ws=="object"&&ws];for(var h=0;h<o.length;++h){var d=o[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(o,h){if(h)e:{var d=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var V=o[g];if(!(V in d))break e;d=d[V]}o=o[o.length-1],g=d[o],h=h(g),h!=g&&h!=null&&e(d,o,{configurable:!0,writable:!0,value:h})}}function i(o,h){o instanceof String&&(o+="");var d=0,g=!1,V={next:function(){if(!g&&d<o.length){var x=d++;return{value:h(x,o[x]),done:!1}}return g=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}s("Array.prototype.values",function(o){return o||function(){return i(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var h=typeof o;return h=h!="object"?h:o?Array.isArray(o)?"array":h:"null",h=="array"||h=="object"&&typeof o.length=="number"}function u(o){var h=typeof o;return h=="object"&&o!=null||h=="function"}function f(o,h,d){return o.call.apply(o.bind,arguments)}function m(o,h,d){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,g),o.apply(h,V)}}return function(){return o.apply(h,arguments)}}function p(o,h,d){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,p.apply(null,arguments)}function y(o,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function b(o,h){function d(){}d.prototype=h.prototype,o.aa=h.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(g,V,x){for(var z=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)z[Te-2]=arguments[Te];return h.prototype[V].apply(g,z)}}function R(o){const h=o.length;if(0<h){const d=Array(h);for(let g=0;g<h;g++)d[g]=o[g];return d}return[]}function C(o,h){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(c(g)){const V=o.length||0,x=g.length||0;o.length=V+x;for(let z=0;z<x;z++)o[V+z]=g[z]}else o.push(g)}}class D{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function F(o){return/^[\s\xa0]*$/.test(o)}function L(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function O(o){return O[" "](o),o}O[" "]=function(){};var G=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function H(o,h,d){for(const g in o)h.call(d,o[g],g,o)}function A(o,h){for(const d in o)h.call(void 0,o[d],d,o)}function _(o){const h={};for(const d in o)h[d]=o[d];return h}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,h){let d,g;for(let V=1;V<arguments.length;V++){g=arguments[V];for(d in g)o[d]=g[d];for(let x=0;x<v.length;x++)d=v[x],Object.prototype.hasOwnProperty.call(g,d)&&(o[d]=g[d])}}function I(o){var h=1;o=o.split(":");const d=[];for(;0<h&&o.length;)d.push(o.shift()),h--;return o.length&&d.push(o.join(":")),d}function P(o){l.setTimeout(()=>{throw o},0)}function w(){var o=cr;let h=null;return o.g&&(h=o.g,o.g=o.g.next,o.g||(o.h=null),h.next=null),h}class W{constructor(){this.h=this.g=null}add(h,d){const g=we.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var we=new D(()=>new St,o=>o.reset());class St{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let At,gn=!1,cr=new W,M=()=>{const o=l.Promise.resolve(void 0);At=()=>{o.then(S)}};var S=()=>{for(var o;o=w();){try{o.h.call(o.g)}catch(d){P(d)}var h=we;h.j(o),100>h.h&&(h.h++,o.next=h.g,h.g=o)}gn=!1};function Y(){this.s=this.s,this.C=this.C}Y.prototype.s=!1,Y.prototype.ma=function(){this.s||(this.s=!0,this.N())},Y.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function X(o,h){this.type=o,this.g=this.target=h,this.defaultPrevented=!1}X.prototype.h=function(){this.defaultPrevented=!0};var le=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,h=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return o}();function oe(o,h){if(X.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=h,h=o.relatedTarget){if(G){e:{try{O(h.nodeName);var V=!0;break e}catch{}V=!1}V||(h=null)}}else d=="mouseover"?h=o.fromElement:d=="mouseout"&&(h=o.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:ue[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&oe.aa.h.call(this)}}b(oe,X);var ue={2:"touch",3:"pen",4:"mouse"};oe.prototype.h=function(){oe.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var te="closure_listenable_"+(1e6*Math.random()|0),he=0;function Ee(o,h,d,g,V){this.listener=o,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=V,this.key=++he,this.da=this.fa=!1}function be(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ve(o){this.src=o,this.g={},this.h=0}ve.prototype.add=function(o,h,d,g,V){var x=o.toString();o=this.g[x],o||(o=this.g[x]=[],this.h++);var z=Ve(o,h,g,V);return-1<z?(h=o[z],d||(h.fa=!1)):(h=new Ee(h,this.src,x,!!g,V),h.fa=d,o.push(h)),h};function Ie(o,h){var d=h.type;if(d in o.g){var g=o.g[d],V=Array.prototype.indexOf.call(g,h,void 0),x;(x=0<=V)&&Array.prototype.splice.call(g,V,1),x&&(be(h),o.g[d].length==0&&(delete o.g[d],o.h--))}}function Ve(o,h,d,g){for(var V=0;V<o.length;++V){var x=o[V];if(!x.da&&x.listener==h&&x.capture==!!d&&x.ha==g)return V}return-1}var fe="closure_lm_"+(1e6*Math.random()|0),qe={};function st(o,h,d,g,V){if(Array.isArray(h)){for(var x=0;x<h.length;x++)st(o,h[x],d,g,V);return null}return d=ts(d),o&&o[te]?o.K(h,d,u(g)?!!g.capture:!!g,V):ht(o,h,d,!1,g,V)}function ht(o,h,d,g,V,x){if(!h)throw Error("Invalid event type");var z=u(V)?!!V.capture:!!V,Te=ur(o);if(Te||(o[fe]=Te=new ve(o)),d=Te.add(h,d,g,z,x),d.proxy)return d;if(g=Rt(),d.proxy=g,g.src=o,g.listener=d,o.addEventListener)le||(V=z),V===void 0&&(V=!1),o.addEventListener(h.toString(),g,V);else if(o.attachEvent)o.attachEvent(es(h.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Rt(){function o(d){return h.call(o.src,o.listener,d)}const h=vi;return o}function Pt(o,h,d,g,V){if(Array.isArray(h))for(var x=0;x<h.length;x++)Pt(o,h[x],d,g,V);else g=u(g)?!!g.capture:!!g,d=ts(d),o&&o[te]?(o=o.i,h=String(h).toString(),h in o.g&&(x=o.g[h],d=Ve(x,d,g,V),-1<d&&(be(x[d]),Array.prototype.splice.call(x,d,1),x.length==0&&(delete o.g[h],o.h--)))):o&&(o=ur(o))&&(h=o.g[h.toString()],o=-1,h&&(o=Ve(h,d,g,V)),(d=-1<o?h[o]:null)&&it(d))}function it(o){if(typeof o!="number"&&o&&!o.da){var h=o.src;if(h&&h[te])Ie(h.i,o);else{var d=o.type,g=o.proxy;h.removeEventListener?h.removeEventListener(d,g,o.capture):h.detachEvent?h.detachEvent(es(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=ur(h))?(Ie(d,o),d.h==0&&(d.src=null,h[fe]=null)):be(o)}}}function es(o){return o in qe?qe[o]:qe[o]="on"+o}function vi(o,h){if(o.da)o=!0;else{h=new oe(h,this);var d=o.listener,g=o.ha||o.src;o.fa&&it(o),o=d.call(g,h)}return o}function ur(o){return o=o[fe],o instanceof ve?o:null}var Nn="__closure_events_fn_"+(1e9*Math.random()>>>0);function ts(o){return typeof o=="function"?o:(o[Nn]||(o[Nn]=function(h){return o.handleEvent(h)}),o[Nn])}function Me(){Y.call(this),this.i=new ve(this),this.M=this,this.F=null}b(Me,Y),Me.prototype[te]=!0,Me.prototype.removeEventListener=function(o,h,d,g){Pt(this,o,h,d,g)};function He(o,h){var d,g=o.F;if(g)for(d=[];g;g=g.F)d.push(g);if(o=o.M,g=h.type||h,typeof h=="string")h=new X(h,o);else if(h instanceof X)h.target=h.target||o;else{var V=h;h=new X(g,o),T(h,V)}if(V=!0,d)for(var x=d.length-1;0<=x;x--){var z=h.g=d[x];V=Mn(z,g,!0,h)&&V}if(z=h.g=o,V=Mn(z,g,!0,h)&&V,V=Mn(z,g,!1,h)&&V,d)for(x=0;x<d.length;x++)z=h.g=d[x],V=Mn(z,g,!1,h)&&V}Me.prototype.N=function(){if(Me.aa.N.call(this),this.i){var o=this.i,h;for(h in o.g){for(var d=o.g[h],g=0;g<d.length;g++)be(d[g]);delete o.g[h],o.h--}}this.F=null},Me.prototype.K=function(o,h,d,g){return this.i.add(String(o),h,!1,d,g)},Me.prototype.L=function(o,h,d,g){return this.i.add(String(o),h,!0,d,g)};function Mn(o,h,d,g){if(h=o.i.g[String(h)],!h)return!0;h=h.concat();for(var V=!0,x=0;x<h.length;++x){var z=h[x];if(z&&!z.da&&z.capture==d){var Te=z.listener,Ge=z.ha||z.src;z.fa&&Ie(o.i,z),V=Te.call(Ge,g)!==!1&&V}}return V&&!g.defaultPrevented}function hr(o,h,d){if(typeof o=="function")d&&(o=p(o,d));else if(o&&typeof o.handleEvent=="function")o=p(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(o,h||0)}function fr(o){o.g=hr(()=>{o.g=null,o.i&&(o.i=!1,fr(o))},o.l);const h=o.h;o.h=null,o.m.apply(null,h)}class dr extends Y{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:fr(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _n(o){Y.call(this),this.h=o,this.g={}}b(_n,Y);var ns=[];function wa(o){H(o.g,function(h,d){this.g.hasOwnProperty(d)&&it(h)},o),o.g={}}_n.prototype.N=function(){_n.aa.N.call(this),wa(this)},_n.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ai=l.JSON.stringify,ed=l.JSON.parse,td=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Ei(){}Ei.prototype.h=null;function va(o){return o.h||(o.h=o.i())}function Aa(){}var mr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function bi(){X.call(this,"d")}b(bi,X);function Ti(){X.call(this,"c")}b(Ti,X);var yn={},Ea=null;function rs(){return Ea=Ea||new Me}yn.La="serverreachability";function ba(o){X.call(this,yn.La,o)}b(ba,X);function pr(o){const h=rs();He(h,new ba(h))}yn.STAT_EVENT="statevent";function Ta(o,h){X.call(this,yn.STAT_EVENT,o),this.stat=h}b(Ta,X);function rt(o){const h=rs();He(h,new Ta(h,o))}yn.Ma="timingevent";function Ia(o,h){X.call(this,yn.Ma,o),this.size=h}b(Ia,X);function gr(o,h){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},h)}function _r(){this.g=!0}_r.prototype.xa=function(){this.g=!1};function nd(o,h,d,g,V,x){o.info(function(){if(o.g)if(x)for(var z="",Te=x.split("&"),Ge=0;Ge<Te.length;Ge++){var _e=Te[Ge].split("=");if(1<_e.length){var Je=_e[0];_e=_e[1];var Ze=Je.split("_");z=2<=Ze.length&&Ze[1]=="type"?z+(Je+"="+_e+"&"):z+(Je+"=redacted&")}}else z=null;else z=x;return"XMLHTTP REQ ("+g+") [attempt "+V+"]: "+h+`
`+d+`
`+z})}function rd(o,h,d,g,V,x,z){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+V+"]: "+h+`
`+d+`
`+x+" "+z})}function On(o,h,d,g){o.info(function(){return"XMLHTTP TEXT ("+h+"): "+id(o,d)+(g?" "+g:"")})}function sd(o,h){o.info(function(){return"TIMEOUT: "+h})}_r.prototype.info=function(){};function id(o,h){if(!o.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var g=d[o];if(!(2>g.length)){var V=g[1];if(Array.isArray(V)&&!(1>V.length)){var x=V[0];if(x!="noop"&&x!="stop"&&x!="close")for(var z=1;z<V.length;z++)V[z]=""}}}}return Ai(d)}catch{return h}}var ss={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ra={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ii;function is(){}b(is,Ei),is.prototype.g=function(){return new XMLHttpRequest},is.prototype.i=function(){return{}},Ii=new is;function $t(o,h,d,g){this.j=o,this.i=h,this.l=d,this.R=g||1,this.U=new _n(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ca}function Ca(){this.i=null,this.g="",this.h=!1}var ka={},Ri={};function Ci(o,h,d){o.L=1,o.v=cs(Ut(h)),o.m=d,o.P=!0,Sa(o,null)}function Sa(o,h){o.F=Date.now(),os(o),o.A=Ut(o.v);var d=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),za(d.i,"t",g),o.C=0,d=o.j.J,o.h=new Ca,o.g=al(o.j,d?h:null,!o.m),0<o.O&&(o.M=new dr(p(o.Y,o,o.g),o.O)),h=o.U,d=o.g,g=o.ca;var V="readystatechange";Array.isArray(V)||(V&&(ns[0]=V.toString()),V=ns);for(var x=0;x<V.length;x++){var z=st(d,V[x],g||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,h)):(o.u="GET",o.g.ea(o.A,o.u,null,h)),pr(),nd(o.i,o.u,o.A,o.l,o.R,o.m)}$t.prototype.ca=function(o){o=o.target;const h=this.M;h&&Bt(o)==3?h.j():this.Y(o)},$t.prototype.Y=function(o){try{if(o==this.g)e:{const Ze=Bt(this.g);var h=this.g.Ba();const Fn=this.g.Z();if(!(3>Ze)&&(Ze!=3||this.g&&(this.h.h||this.g.oa()||Xa(this.g)))){this.J||Ze!=4||h==7||(h==8||0>=Fn?pr(3):pr(2)),ki(this);var d=this.g.Z();this.X=d;t:if(Pa(this)){var g=Xa(this.g);o="";var V=g.length,x=Bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){wn(this),yr(this);var z="";break t}this.h.i=new l.TextDecoder}for(h=0;h<V;h++)this.h.h=!0,o+=this.h.i.decode(g[h],{stream:!(x&&h==V-1)});g.length=0,this.h.g+=o,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=d==200,rd(this.i,this.u,this.A,this.l,this.R,Ze,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Te,Ge=this.g;if((Te=Ge.g?Ge.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(Te)){var _e=Te;break t}}_e=null}if(d=_e)On(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Si(this,d);else{this.o=!1,this.s=3,rt(12),wn(this),yr(this);break e}}if(this.P){d=!0;let Ct;for(;!this.J&&this.C<z.length;)if(Ct=od(this,z),Ct==Ri){Ze==4&&(this.s=4,rt(14),d=!1),On(this.i,this.l,null,"[Incomplete Response]");break}else if(Ct==ka){this.s=4,rt(15),On(this.i,this.l,z,"[Invalid Chunk]"),d=!1;break}else On(this.i,this.l,Ct,null),Si(this,Ct);if(Pa(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ze!=4||z.length!=0||this.h.h||(this.s=1,rt(16),d=!1),this.o=this.o&&d,!d)On(this.i,this.l,z,"[Invalid Chunked Response]"),wn(this),yr(this);else if(0<z.length&&!this.W){this.W=!0;var Je=this.j;Je.g==this&&Je.ba&&!Je.M&&(Je.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Oi(Je),Je.M=!0,rt(11))}}else On(this.i,this.l,z,null),Si(this,z);Ze==4&&wn(this),this.o&&!this.J&&(Ze==4?rl(this.j,this):(this.o=!1,os(this)))}else bd(this.g),d==400&&0<z.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),wn(this),yr(this)}}}catch{}finally{}};function Pa(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function od(o,h){var d=o.C,g=h.indexOf(`
`,d);return g==-1?Ri:(d=Number(h.substring(d,g)),isNaN(d)?ka:(g+=1,g+d>h.length?Ri:(h=h.slice(g,g+d),o.C=g+d,h)))}$t.prototype.cancel=function(){this.J=!0,wn(this)};function os(o){o.S=Date.now()+o.I,Va(o,o.I)}function Va(o,h){if(o.B!=null)throw Error("WatchDog timer not null");o.B=gr(p(o.ba,o),h)}function ki(o){o.B&&(l.clearTimeout(o.B),o.B=null)}$t.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(sd(this.i,this.A),this.L!=2&&(pr(),rt(17)),wn(this),this.s=2,yr(this)):Va(this,this.S-o)};function yr(o){o.j.G==0||o.J||rl(o.j,o)}function wn(o){ki(o);var h=o.M;h&&typeof h.ma=="function"&&h.ma(),o.M=null,wa(o.U),o.g&&(h=o.g,o.g=null,h.abort(),h.ma())}function Si(o,h){try{var d=o.j;if(d.G!=0&&(d.g==o||Pi(d.h,o))){if(!o.K&&Pi(d.h,o)&&d.G==3){try{var g=d.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var V=g;if(V[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)ps(d),ds(d);else break e;Mi(d),rt(18)}}else d.za=V[1],0<d.za-d.T&&37500>V[2]&&d.F&&d.v==0&&!d.C&&(d.C=gr(p(d.Za,d),6e3));if(1>=Ma(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else An(d,11)}else if((o.K||d.g==o)&&ps(d),!F(h))for(V=d.Da.g.parse(h),h=0;h<V.length;h++){let _e=V[h];if(d.T=_e[0],_e=_e[1],d.G==2)if(_e[0]=="c"){d.K=_e[1],d.ia=_e[2];const Je=_e[3];Je!=null&&(d.la=Je,d.j.info("VER="+d.la));const Ze=_e[4];Ze!=null&&(d.Aa=Ze,d.j.info("SVER="+d.Aa));const Fn=_e[5];Fn!=null&&typeof Fn=="number"&&0<Fn&&(g=1.5*Fn,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Ct=o.g;if(Ct){const _s=Ct.g?Ct.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_s){var x=g.h;x.g||_s.indexOf("spdy")==-1&&_s.indexOf("quic")==-1&&_s.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(Vi(x,x.h),x.h=null))}if(g.D){const xi=Ct.g?Ct.g.getResponseHeader("X-HTTP-Session-Id"):null;xi&&(g.ya=xi,Ce(g.I,g.D,xi))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var z=o;if(g.qa=ol(g,g.J?g.ia:null,g.W),z.K){Oa(g.h,z);var Te=z,Ge=g.L;Ge&&(Te.I=Ge),Te.B&&(ki(Te),os(Te)),g.g=z}else tl(g);0<d.i.length&&ms(d)}else _e[0]!="stop"&&_e[0]!="close"||An(d,7);else d.G==3&&(_e[0]=="stop"||_e[0]=="close"?_e[0]=="stop"?An(d,7):Ni(d):_e[0]!="noop"&&d.l&&d.l.ta(_e),d.v=0)}}pr(4)}catch{}}var ad=class{constructor(o,h){this.g=o,this.map=h}};function Da(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Na(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ma(o){return o.h?1:o.g?o.g.size:0}function Pi(o,h){return o.h?o.h==h:o.g?o.g.has(h):!1}function Vi(o,h){o.g?o.g.add(h):o.h=h}function Oa(o,h){o.h&&o.h==h?o.h=null:o.g&&o.g.has(h)&&o.g.delete(h)}Da.prototype.cancel=function(){if(this.i=xa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function xa(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let h=o.i;for(const d of o.g.values())h=h.concat(d.D);return h}return R(o.i)}function ld(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var h=[],d=o.length,g=0;g<d;g++)h.push(o[g]);return h}h=[],d=0;for(g in o)h[d++]=o[g];return h}function cd(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var h=[];o=o.length;for(var d=0;d<o;d++)h.push(d);return h}h=[],d=0;for(const g in o)h[d++]=g;return h}}}function La(o,h){if(o.forEach&&typeof o.forEach=="function")o.forEach(h,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,h,void 0);else for(var d=cd(o),g=ld(o),V=g.length,x=0;x<V;x++)h.call(void 0,g[x],d&&d[x],o)}var Fa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ud(o,h){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var g=o[d].indexOf("="),V=null;if(0<=g){var x=o[d].substring(0,g);V=o[d].substring(g+1)}else x=o[d];h(x,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function vn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof vn){this.h=o.h,as(this,o.j),this.o=o.o,this.g=o.g,ls(this,o.s),this.l=o.l;var h=o.i,d=new Ar;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),Ua(this,d),this.m=o.m}else o&&(h=String(o).match(Fa))?(this.h=!1,as(this,h[1]||"",!0),this.o=wr(h[2]||""),this.g=wr(h[3]||"",!0),ls(this,h[4]),this.l=wr(h[5]||"",!0),Ua(this,h[6]||"",!0),this.m=wr(h[7]||"")):(this.h=!1,this.i=new Ar(null,this.h))}vn.prototype.toString=function(){var o=[],h=this.j;h&&o.push(vr(h,Ba,!0),":");var d=this.g;return(d||h=="file")&&(o.push("//"),(h=this.o)&&o.push(vr(h,Ba,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(vr(d,d.charAt(0)=="/"?dd:fd,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",vr(d,pd)),o.join("")};function Ut(o){return new vn(o)}function as(o,h,d){o.j=d?wr(h,!0):h,o.j&&(o.j=o.j.replace(/:$/,""))}function ls(o,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);o.s=h}else o.s=null}function Ua(o,h,d){h instanceof Ar?(o.i=h,gd(o.i,o.h)):(d||(h=vr(h,md)),o.i=new Ar(h,o.h))}function Ce(o,h,d){o.i.set(h,d)}function cs(o){return Ce(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function wr(o,h){return o?h?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function vr(o,h,d){return typeof o=="string"?(o=encodeURI(o).replace(h,hd),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function hd(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Ba=/[#\/\?@]/g,fd=/[#\?:]/g,dd=/[#\?]/g,md=/[#\?@]/g,pd=/#/g;function Ar(o,h){this.h=this.g=null,this.i=o||null,this.j=!!h}function Qt(o){o.g||(o.g=new Map,o.h=0,o.i&&ud(o.i,function(h,d){o.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}n=Ar.prototype,n.add=function(o,h){Qt(this),this.i=null,o=xn(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(h),this.h+=1,this};function ja(o,h){Qt(o),h=xn(o,h),o.g.has(h)&&(o.i=null,o.h-=o.g.get(h).length,o.g.delete(h))}function qa(o,h){return Qt(o),h=xn(o,h),o.g.has(h)}n.forEach=function(o,h){Qt(this),this.g.forEach(function(d,g){d.forEach(function(V){o.call(h,V,g,this)},this)},this)},n.na=function(){Qt(this);const o=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let g=0;g<h.length;g++){const V=o[g];for(let x=0;x<V.length;x++)d.push(h[g])}return d},n.V=function(o){Qt(this);let h=[];if(typeof o=="string")qa(this,o)&&(h=h.concat(this.g.get(xn(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)h=h.concat(o[d])}return h},n.set=function(o,h){return Qt(this),this.i=null,o=xn(this,o),qa(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[h]),this.h+=1,this},n.get=function(o,h){return o?(o=this.V(o),0<o.length?String(o[0]):h):h};function za(o,h,d){ja(o,h),0<d.length&&(o.i=null,o.g.set(xn(o,h),R(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var g=h[d];const x=encodeURIComponent(String(g)),z=this.V(g);for(g=0;g<z.length;g++){var V=x;z[g]!==""&&(V+="="+encodeURIComponent(String(z[g]))),o.push(V)}}return this.i=o.join("&")};function xn(o,h){return h=String(h),o.j&&(h=h.toLowerCase()),h}function gd(o,h){h&&!o.j&&(Qt(o),o.i=null,o.g.forEach(function(d,g){var V=g.toLowerCase();g!=V&&(ja(this,g),za(this,V,d))},o)),o.j=h}function _d(o,h){const d=new _r;if(l.Image){const g=new Image;g.onload=y(Xt,d,"TestLoadImage: loaded",!0,h,g),g.onerror=y(Xt,d,"TestLoadImage: error",!1,h,g),g.onabort=y(Xt,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=y(Xt,d,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else h(!1)}function yd(o,h){const d=new _r,g=new AbortController,V=setTimeout(()=>{g.abort(),Xt(d,"TestPingServer: timeout",!1,h)},1e4);fetch(o,{signal:g.signal}).then(x=>{clearTimeout(V),x.ok?Xt(d,"TestPingServer: ok",!0,h):Xt(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(V),Xt(d,"TestPingServer: error",!1,h)})}function Xt(o,h,d,g,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),g(d)}catch{}}function wd(){this.g=new td}function vd(o,h,d){const g=d||"";try{La(o,function(V,x){let z=V;u(V)&&(z=Ai(V)),h.push(g+x+"="+encodeURIComponent(z))})}catch(V){throw h.push(g+"type="+encodeURIComponent("_badmap")),V}}function us(o){this.l=o.Ub||null,this.j=o.eb||!1}b(us,Ei),us.prototype.g=function(){return new hs(this.l,this.j)},us.prototype.i=function(o){return function(){return o}}({});function hs(o,h){Me.call(this),this.D=o,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(hs,Me),n=hs.prototype,n.open=function(o,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=h,this.readyState=1,br(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(h.body=o),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Er(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,br(this)),this.g&&(this.readyState=3,br(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Wa(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Wa(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var h=o.value?o.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!o.done}))&&(this.response=this.responseText+=h)}o.done?Er(this):br(this),this.readyState==3&&Wa(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Er(this))},n.Qa=function(o){this.g&&(this.response=o,Er(this))},n.ga=function(){this.g&&Er(this)};function Er(o){o.readyState=4,o.l=null,o.j=null,o.v=null,br(o)}n.setRequestHeader=function(o,h){this.u.append(o,h)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=h.next();return o.join(`\r
`)};function br(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(hs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Ha(o){let h="";return H(o,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function Di(o,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Ha(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):Ce(o,h,d))}function Pe(o){Me.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(Pe,Me);var Ad=/^https?$/i,Ed=["POST","PUT"];n=Pe.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);h=h?h.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ii.g(),this.v=this.o?va(this.o):va(Ii),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(h,String(o),!0),this.B=!1}catch(x){Ga(this,x);return}if(o=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var V in g)d.set(V,g[V]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const x of g.keys())d.set(x,g.get(x));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(x=>x.toLowerCase()=="content-type"),V=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Ed,h,void 0))||g||V||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,z]of d)this.g.setRequestHeader(x,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Qa(this),this.u=!0,this.g.send(o),this.u=!1}catch(x){Ga(this,x)}};function Ga(o,h){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=h,o.m=5,Ka(o),fs(o)}function Ka(o){o.A||(o.A=!0,He(o,"complete"),He(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,He(this,"complete"),He(this,"abort"),fs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),fs(this,!0)),Pe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?$a(this):this.bb())},n.bb=function(){$a(this)};function $a(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Bt(o)!=4||o.Z()!=2)){if(o.u&&Bt(o)==4)hr(o.Ea,0,o);else if(He(o,"readystatechange"),Bt(o)==4){o.h=!1;try{const z=o.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=z===0){var V=String(o.D).match(Fa)[1]||null;!V&&l.self&&l.self.location&&(V=l.self.location.protocol.slice(0,-1)),g=!Ad.test(V?V.toLowerCase():"")}d=g}if(d)He(o,"complete"),He(o,"success");else{o.m=6;try{var x=2<Bt(o)?o.g.statusText:""}catch{x=""}o.l=x+" ["+o.Z()+"]",Ka(o)}}finally{fs(o)}}}}function fs(o,h){if(o.g){Qa(o);const d=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,h||He(o,"ready");try{d.onreadystatechange=g}catch{}}}function Qa(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Bt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Bt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var h=this.g.responseText;return o&&h.indexOf(o)==0&&(h=h.substring(o.length)),ed(h)}};function Xa(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function bd(o){const h={};o=(o.g&&2<=Bt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(F(o[g]))continue;var d=I(o[g]);const V=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const x=h[V]||[];h[V]=x,x.push(d)}A(h,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Tr(o,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||h}function Ya(o){this.Aa=0,this.i=[],this.j=new _r,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Tr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Tr("baseRetryDelayMs",5e3,o),this.cb=Tr("retryDelaySeedMs",1e4,o),this.Wa=Tr("forwardChannelMaxRetries",2,o),this.wa=Tr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Da(o&&o.concurrentRequestLimit),this.Da=new wd,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ya.prototype,n.la=8,n.G=1,n.connect=function(o,h,d,g){rt(0),this.W=o,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=ol(this,null,this.W),ms(this)};function Ni(o){if(Ja(o),o.G==3){var h=o.U++,d=Ut(o.I);if(Ce(d,"SID",o.K),Ce(d,"RID",h),Ce(d,"TYPE","terminate"),Ir(o,d),h=new $t(o,o.j,h),h.L=2,h.v=cs(Ut(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=al(h.j,null),h.g.ea(h.v)),h.F=Date.now(),os(h)}il(o)}function ds(o){o.g&&(Oi(o),o.g.cancel(),o.g=null)}function Ja(o){ds(o),o.u&&(l.clearTimeout(o.u),o.u=null),ps(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function ms(o){if(!Na(o.h)&&!o.s){o.s=!0;var h=o.Ga;At||M(),gn||(At(),gn=!0),cr.add(h,o),o.B=0}}function Td(o,h){return Ma(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=h.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=gr(p(o.Ga,o,h),sl(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const V=new $t(this,this.j,o);let x=this.o;if(this.S&&(x?(x=_(x),T(x,this.S)):x=this.S),this.m!==null||this.O||(V.H=x,x=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=el(this,V,h),d=Ut(this.I),Ce(d,"RID",o),Ce(d,"CVER",22),this.D&&Ce(d,"X-HTTP-Session-Id",this.D),Ir(this,d),x&&(this.O?h="headers="+encodeURIComponent(String(Ha(x)))+"&"+h:this.m&&Di(d,this.m,x)),Vi(this.h,V),this.Ua&&Ce(d,"TYPE","init"),this.P?(Ce(d,"$req",h),Ce(d,"SID","null"),V.T=!0,Ci(V,d,null)):Ci(V,d,h),this.G=2}}else this.G==3&&(o?Za(this,o):this.i.length==0||Na(this.h)||Za(this))};function Za(o,h){var d;h?d=h.l:d=o.U++;const g=Ut(o.I);Ce(g,"SID",o.K),Ce(g,"RID",d),Ce(g,"AID",o.T),Ir(o,g),o.m&&o.o&&Di(g,o.m,o.o),d=new $t(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),h&&(o.i=h.D.concat(o.i)),h=el(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Vi(o.h,d),Ci(d,g,h)}function Ir(o,h){o.H&&H(o.H,function(d,g){Ce(h,g,d)}),o.l&&La({},function(d,g){Ce(h,g,d)})}function el(o,h,d){d=Math.min(o.i.length,d);var g=o.l?p(o.l.Na,o.l,o):null;e:{var V=o.i;let x=-1;for(;;){const z=["count="+d];x==-1?0<d?(x=V[0].g,z.push("ofs="+x)):x=0:z.push("ofs="+x);let Te=!0;for(let Ge=0;Ge<d;Ge++){let _e=V[Ge].g;const Je=V[Ge].map;if(_e-=x,0>_e)x=Math.max(0,V[Ge].g-100),Te=!1;else try{vd(Je,z,"req"+_e+"_")}catch{g&&g(Je)}}if(Te){g=z.join("&");break e}}}return o=o.i.splice(0,d),h.D=o,g}function tl(o){if(!o.g&&!o.u){o.Y=1;var h=o.Fa;At||M(),gn||(At(),gn=!0),cr.add(h,o),o.v=0}}function Mi(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=gr(p(o.Fa,o),sl(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,nl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=gr(p(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,rt(10),ds(this),nl(this))};function Oi(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function nl(o){o.g=new $t(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var h=Ut(o.qa);Ce(h,"RID","rpc"),Ce(h,"SID",o.K),Ce(h,"AID",o.T),Ce(h,"CI",o.F?"0":"1"),!o.F&&o.ja&&Ce(h,"TO",o.ja),Ce(h,"TYPE","xmlhttp"),Ir(o,h),o.m&&o.o&&Di(h,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=cs(Ut(h)),d.m=null,d.P=!0,Sa(d,o)}n.Za=function(){this.C!=null&&(this.C=null,ds(this),Mi(this),rt(19))};function ps(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function rl(o,h){var d=null;if(o.g==h){ps(o),Oi(o),o.g=null;var g=2}else if(Pi(o.h,h))d=h.D,Oa(o.h,h),g=1;else return;if(o.G!=0){if(h.o)if(g==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var V=o.B;g=rs(),He(g,new Ia(g,d)),ms(o)}else tl(o);else if(V=h.s,V==3||V==0&&0<h.X||!(g==1&&Td(o,h)||g==2&&Mi(o)))switch(d&&0<d.length&&(h=o.h,h.i=h.i.concat(d)),V){case 1:An(o,5);break;case 4:An(o,10);break;case 3:An(o,6);break;default:An(o,2)}}}function sl(o,h){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*h}function An(o,h){if(o.j.info("Error code "+h),h==2){var d=p(o.fb,o),g=o.Xa;const V=!g;g=new vn(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||as(g,"https"),cs(g),V?_d(g.toString(),d):yd(g.toString(),d)}else rt(2);o.G=0,o.l&&o.l.sa(h),il(o),Ja(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function il(o){if(o.G=0,o.ka=[],o.l){const h=xa(o.h);(h.length!=0||o.i.length!=0)&&(C(o.ka,h),C(o.ka,o.i),o.h.i.length=0,R(o.i),o.i.length=0),o.l.ra()}}function ol(o,h,d){var g=d instanceof vn?Ut(d):new vn(d);if(g.g!="")h&&(g.g=h+"."+g.g),ls(g,g.s);else{var V=l.location;g=V.protocol,h=h?h+"."+V.hostname:V.hostname,V=+V.port;var x=new vn(null);g&&as(x,g),h&&(x.g=h),V&&ls(x,V),d&&(x.l=d),g=x}return d=o.D,h=o.ya,d&&h&&Ce(g,d,h),Ce(g,"VER",o.la),Ir(o,g),g}function al(o,h,d){if(h&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=o.Ca&&!o.pa?new Pe(new us({eb:d})):new Pe(o.pa),h.Ha(o.J),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ll(){}n=ll.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function gs(){}gs.prototype.g=function(o,h){return new ft(o,h)};function ft(o,h){Me.call(this),this.g=new Ya(h),this.l=o,this.h=h&&h.messageUrlParams||null,o=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(o?o["X-WebChannel-Content-Type"]=h.messageContentType:o={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(o?o["X-WebChannel-Client-Profile"]=h.va:o={"X-WebChannel-Client-Profile":h.va}),this.g.S=o,(o=h&&h.Sb)&&!F(o)&&(this.g.m=o),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!F(h)&&(this.g.D=h,o=this.h,o!==null&&h in o&&(o=this.h,h in o&&delete o[h])),this.j=new Ln(this)}b(ft,Me),ft.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ft.prototype.close=function(){Ni(this.g)},ft.prototype.o=function(o){var h=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Ai(o),o=d);h.i.push(new ad(h.Ya++,o)),h.G==3&&ms(h)},ft.prototype.N=function(){this.g.l=null,delete this.j,Ni(this.g),delete this.g,ft.aa.N.call(this)};function cl(o){bi.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var h=o.__sm__;if(h){e:{for(const d in h){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,h=h!==null&&o in h?h[o]:void 0),this.data=h}else this.data=o}b(cl,bi);function ul(){Ti.call(this),this.status=1}b(ul,Ti);function Ln(o){this.g=o}b(Ln,ll),Ln.prototype.ua=function(){He(this.g,"a")},Ln.prototype.ta=function(o){He(this.g,new cl(o))},Ln.prototype.sa=function(o){He(this.g,new ul)},Ln.prototype.ra=function(){He(this.g,"b")},gs.prototype.createWebChannel=gs.prototype.g,ft.prototype.send=ft.prototype.o,ft.prototype.open=ft.prototype.m,ft.prototype.close=ft.prototype.close,gh=function(){return new gs},ph=function(){return rs()},mh=yn,oo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ss.NO_ERROR=0,ss.TIMEOUT=8,ss.HTTP_ERROR=6,ks=ss,Ra.COMPLETE="complete",dh=Ra,Aa.EventType=mr,mr.OPEN="a",mr.CLOSE="b",mr.ERROR="c",mr.MESSAGE="d",Me.prototype.listen=Me.prototype.K,Rr=Aa,Pe.prototype.listenOnce=Pe.prototype.L,Pe.prototype.getLastError=Pe.prototype.Ka,Pe.prototype.getLastErrorCode=Pe.prototype.Ba,Pe.prototype.getStatus=Pe.prototype.Z,Pe.prototype.getResponseJson=Pe.prototype.Oa,Pe.prototype.getResponseText=Pe.prototype.oa,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Ha,fh=Pe}).apply(typeof ws<"u"?ws:typeof self<"u"?self:typeof window<"u"?window:{});const Ol="@firebase/firestore",xl="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nr="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=new Co("@firebase/firestore");function qn(){return Sn.logLevel}function K(n,...e){if(Sn.logLevel<=ge.DEBUG){const t=e.map(Oo);Sn.debug(`Firestore (${nr}): ${n}`,...t)}}function Ht(n,...e){if(Sn.logLevel<=ge.ERROR){const t=e.map(Oo);Sn.error(`Firestore (${nr}): ${n}`,...t)}}function $n(n,...e){if(Sn.logLevel<=ge.WARN){const t=e.map(Oo);Sn.warn(`Firestore (${nr}): ${n}`,...t)}}function Oo(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(n="Unexpected state"){const e=`FIRESTORE (${nr}) INTERNAL ASSERTION FAILED: `+n;throw Ht(e),new Error(e)}function Ae(n,e){n||se()}function ae(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends dn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Lg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(tt.UNAUTHENTICATED))}shutdown(){}}class Fg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Ug{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ae(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new qt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new qt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new qt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ae(typeof r.accessToken=="string"),new _h(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ae(e===null||typeof e=="string"),new tt(e)}}class Bg{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class jg{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new Bg(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ll{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qg{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,rp(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){Ae(this.o===void 0);const r=i=>{i.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,K("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Ll(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ae(typeof t.token=="string"),this.R=t.token,new Ll(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=zg(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function ce(n,e){return n<e?-1:n>e?1:0}function ao(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return ce(r,s);{const i=yh(),a=Wg(i.encode(Fl(n,t)),i.encode(Fl(e,t)));return a!==0?a:ce(r,s)}}t+=r>65535?2:1}return ce(n.length,e.length)}function Fl(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function Wg(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return ce(n[t],e[t]);return ce(n.length,e.length)}function Qn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul=-62135596800,Bl=1e6;class xe{static now(){return xe.fromMillis(Date.now())}static fromDate(e){return xe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Bl);return new xe(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Z(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Z(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ul)throw new Z(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Bl}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Ul;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{static fromTimestamp(e){return new ie(e)}static min(){return new ie(new xe(0,0))}static max(){return new ie(new xe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl="__name__";class Vt{constructor(e,t,r){t===void 0?t=0:t>e.length&&se(),r===void 0?r=e.length-t:r>e.length-t&&se(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Vt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Vt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Vt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return ce(e.length,t.length)}static compareSegments(e,t){const r=Vt.isNumericId(e),s=Vt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Vt.extractNumericId(e).compare(Vt.extractNumericId(t)):ao(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return nn.fromString(e.substring(4,e.length-2))}}class ke extends Vt{construct(e,t,r){return new ke(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new Z(B.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new ke(t)}static emptyPath(){return new ke([])}}const Hg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $e extends Vt{construct(e,t,r){return new $e(e,t,r)}static isValidIdentifier(e){return Hg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===jl}static keyField(){return new $e([jl])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Z(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new Z(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Z(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new Z(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $e(t)}static emptyPath(){return new $e([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(ke.fromString(e))}static fromName(e){return new ne(ke.fromString(e).popFirst(5))}static empty(){return new ne(ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ke.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new ke(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=-1;function Gg(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=ie.fromTimestamp(r===1e9?new xe(t+1,0):new xe(t,r));return new an(s,ne.empty(),e)}function Kg(n){return new an(n.readTime,n.key,Fr)}class an{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new an(ie.min(),ne.empty(),Fr)}static max(){return new an(ie.max(),ne.empty(),Fr)}}function $g(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ne.comparator(n.documentKey,e.documentKey),t!==0?t:ce(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Xg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rr(n){if(n.code!==B.FAILED_PRECONDITION||n.message!==Qg)throw n;K("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&se(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new U((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof U?t:U.resolve(t)}catch(t){return U.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):U.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):U.reject(t)}static resolve(e){return new U((t,r)=>{t(e)})}static reject(e){return new U((t,r)=>{r(e)})}static waitFor(e){return new U((t,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&t()},c=>r(c))}),a=!0,i===s&&t()})}static or(e){let t=U.resolve(!1);for(const r of e)t=t.next(s=>s?U.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new U((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;t(e[u]).next(f=>{a[u]=f,++l,l===i&&r(a)},f=>s(f))}})}static doWhile(e,t){return new U((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function Yg(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function sr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.oe(r),this._e=r=>t.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}ei.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo=-1;function ti(n){return n==null}function Fs(n){return n===0&&1/n==-1/0}function Jg(n){return typeof n=="number"&&Number.isInteger(n)&&!Fs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh="";function Zg(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=ql(e)),e=e_(n.get(t),e);return ql(e)}function e_(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case vh:t+="";break;default:t+=i}}return t}function ql(n){return n+vh+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function mn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Ah(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,t){this.comparator=e,this.root=t||Ke.EMPTY}insert(e,t){return new Se(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ke.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ke.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vs(this.root,e,this.comparator,!1)}getReverseIterator(){return new vs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vs(this.root,e,this.comparator,!0)}}class vs{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ke{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Ke.RED,this.left=s??Ke.EMPTY,this.right=i??Ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Ke(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ke.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw se();const e=this.left.check();if(e!==this.right.check())throw se();return e+(this.isRed()?0:1)}}Ke.EMPTY=null,Ke.RED=!0,Ke.BLACK=!1;Ke.EMPTY=new class{constructor(){this.size=0}get key(){throw se()}get value(){throw se()}get color(){throw se()}get left(){throw se()}get right(){throw se()}copy(e,t,r,s,i){return this}insert(e,t,r){return new Ke(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Wl(this.data.getIterator())}getIteratorFrom(e){return new Wl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Le)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Le(this.comparator);return t.data=e,t}}class Wl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.fields=e,e.sort($e.comparator)}static empty(){return new pt([])}unionWith(e){let t=new Le($e.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new pt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Qn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Eh("Invalid base64 string: "+i):i}}(e);return new Ye(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Ye(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ye.EMPTY_BYTE_STRING=new Ye("");const t_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ln(n){if(Ae(!!n),typeof n=="string"){let e=0;const t=t_.exec(n);if(Ae(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:De(n.seconds),nanos:De(n.nanos)}}function De(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function cn(n){return typeof n=="string"?Ye.fromBase64String(n):Ye.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh="server_timestamp",Th="__type__",Ih="__previous_value__",Rh="__local_write_time__";function Lo(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Th])===null||t===void 0?void 0:t.stringValue)===bh}function ni(n){const e=n.mapValue.fields[Ih];return Lo(e)?ni(e):e}function Ur(n){const e=ln(n.mapValue.fields[Rh].timestampValue);return new xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e,t,r,s,i,a,l,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}const Us="(default)";class Br{constructor(e,t){this.projectId=e,this.database=t||Us}static empty(){return new Br("","")}get isDefaultDatabase(){return this.database===Us}isEqual(e){return e instanceof Br&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch="__type__",kh="__max__",As={mapValue:{fields:{__type__:{stringValue:kh}}}},Sh="__vector__",Bs="value";function un(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Lo(n)?4:s_(n)?9007199254740991:r_(n)?10:11:se()}function Ot(n,e){if(n===e)return!0;const t=un(n);if(t!==un(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ur(n).isEqual(Ur(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=ln(s.timestampValue),l=ln(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return cn(s.bytesValue).isEqual(cn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return De(s.geoPointValue.latitude)===De(i.geoPointValue.latitude)&&De(s.geoPointValue.longitude)===De(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return De(s.integerValue)===De(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=De(s.doubleValue),l=De(i.doubleValue);return a===l?Fs(a)===Fs(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return Qn(n.arrayValue.values||[],e.arrayValue.values||[],Ot);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(zl(a)!==zl(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!Ot(a[c],l[c])))return!1;return!0}(n,e);default:return se()}}function jr(n,e){return(n.values||[]).find(t=>Ot(t,e))!==void 0}function Xn(n,e){if(n===e)return 0;const t=un(n),r=un(e);if(t!==r)return ce(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ce(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=De(i.integerValue||i.doubleValue),c=De(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return Hl(n.timestampValue,e.timestampValue);case 4:return Hl(Ur(n),Ur(e));case 5:return ao(n.stringValue,e.stringValue);case 6:return function(i,a){const l=cn(i),c=cn(a);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=ce(l[u],c[u]);if(f!==0)return f}return ce(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=ce(De(i.latitude),De(a.latitude));return l!==0?l:ce(De(i.longitude),De(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Gl(n.arrayValue,e.arrayValue);case 10:return function(i,a){var l,c,u,f;const m=i.fields||{},p=a.fields||{},y=(l=m[Bs])===null||l===void 0?void 0:l.arrayValue,b=(c=p[Bs])===null||c===void 0?void 0:c.arrayValue,R=ce(((u=y==null?void 0:y.values)===null||u===void 0?void 0:u.length)||0,((f=b==null?void 0:b.values)===null||f===void 0?void 0:f.length)||0);return R!==0?R:Gl(y,b)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===As.mapValue&&a===As.mapValue)return 0;if(i===As.mapValue)return 1;if(a===As.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=a.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let m=0;m<c.length&&m<f.length;++m){const p=ao(c[m],f[m]);if(p!==0)return p;const y=Xn(l[c[m]],u[f[m]]);if(y!==0)return y}return ce(c.length,f.length)}(n.mapValue,e.mapValue);default:throw se()}}function Hl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ce(n,e);const t=ln(n),r=ln(e),s=ce(t.seconds,r.seconds);return s!==0?s:ce(t.nanos,r.nanos)}function Gl(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Xn(t[s],r[s]);if(i)return i}return ce(t.length,r.length)}function Yn(n){return lo(n)}function lo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=ln(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return cn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ne.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=lo(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${lo(t.fields[a])}`;return s+"}"}(n.mapValue):se()}function Ss(n){switch(un(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ni(n);return e?16+Ss(e):16;case 5:return 2*n.stringValue.length;case 6:return cn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ss(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return mn(r.fields,(i,a)=>{s+=i.length+Ss(a)}),s}(n.mapValue);default:throw se()}}function co(n){return!!n&&"integerValue"in n}function Fo(n){return!!n&&"arrayValue"in n}function Kl(n){return!!n&&"nullValue"in n}function $l(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ps(n){return!!n&&"mapValue"in n}function r_(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Ch])===null||t===void 0?void 0:t.stringValue)===Sh}function Vr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return mn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Vr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Vr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function s_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===kh}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.value=e}static empty(){return new at({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ps(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Vr(t)}setAll(e){let t=$e.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=Vr(a):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Ps(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ot(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Ps(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){mn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new at(Vr(this.value))}}function Ph(n){const e=[];return mn(n.fields,(t,r)=>{const s=new $e([t]);if(Ps(r)){const i=Ph(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new pt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new nt(e,0,ie.min(),ie.min(),ie.min(),at.empty(),0)}static newFoundDocument(e,t,r,s){return new nt(e,1,t,ie.min(),r,s,0)}static newNoDocument(e,t){return new nt(e,2,t,ie.min(),ie.min(),at.empty(),0)}static newUnknownDocument(e,t){return new nt(e,3,t,ie.min(),ie.min(),at.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=at.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=at.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,t){this.position=e,this.inclusive=t}}function Ql(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=ne.comparator(ne.fromName(a.referenceValue),t.key):r=Xn(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Xl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ot(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,t="asc"){this.field=e,this.dir=t}}function i_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{}class Oe extends Vh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new a_(e,t,r):t==="array-contains"?new u_(e,r):t==="in"?new h_(e,r):t==="not-in"?new f_(e,r):t==="array-contains-any"?new d_(e,r):new Oe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new l_(e,r):new c_(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Xn(t,this.value)):t!==null&&un(this.value)===un(t)&&this.matchesComparison(Xn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return se()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xt extends Vh{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new xt(e,t)}matches(e){return Dh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Dh(n){return n.op==="and"}function Nh(n){return o_(n)&&Dh(n)}function o_(n){for(const e of n.filters)if(e instanceof xt)return!1;return!0}function uo(n){if(n instanceof Oe)return n.field.canonicalString()+n.op.toString()+Yn(n.value);if(Nh(n))return n.filters.map(e=>uo(e)).join(",");{const e=n.filters.map(t=>uo(t)).join(",");return`${n.op}(${e})`}}function Mh(n,e){return n instanceof Oe?function(r,s){return s instanceof Oe&&r.op===s.op&&r.field.isEqual(s.field)&&Ot(r.value,s.value)}(n,e):n instanceof xt?function(r,s){return s instanceof xt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Mh(a,s.filters[l]),!0):!1}(n,e):void se()}function Oh(n){return n instanceof Oe?function(t){return`${t.field.canonicalString()} ${t.op} ${Yn(t.value)}`}(n):n instanceof xt?function(t){return t.op.toString()+" {"+t.getFilters().map(Oh).join(" ,")+"}"}(n):"Filter"}class a_ extends Oe{constructor(e,t,r){super(e,t,r),this.key=ne.fromName(r.referenceValue)}matches(e){const t=ne.comparator(e.key,this.key);return this.matchesComparison(t)}}class l_ extends Oe{constructor(e,t){super(e,"in",t),this.keys=xh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class c_ extends Oe{constructor(e,t){super(e,"not-in",t),this.keys=xh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function xh(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>ne.fromName(r.referenceValue))}class u_ extends Oe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Fo(t)&&jr(t.arrayValue,this.value)}}class h_ extends Oe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&jr(this.value.arrayValue,t)}}class f_ extends Oe{constructor(e,t){super(e,"not-in",t)}matches(e){if(jr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!jr(this.value.arrayValue,t)}}class d_ extends Oe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Fo(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>jr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.le=null}}function Yl(n,e=null,t=[],r=[],s=null,i=null,a=null){return new m_(n,e,t,r,s,i,a)}function Uo(n){const e=ae(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>uo(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ti(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Yn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Yn(r)).join(",")),e.le=t}return e.le}function Bo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!i_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Mh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Xl(n.startAt,e.startAt)&&Xl(n.endAt,e.endAt)}function ho(n){return ne.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function p_(n,e,t,r,s,i,a,l){return new ri(n,e,t,r,s,i,a,l)}function jo(n){return new ri(n)}function Jl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function g_(n){return n.collectionGroup!==null}function Dr(n){const e=ae(n);if(e.he===null){e.he=[];const t=new Set;for(const i of e.explicitOrderBy)e.he.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Le($e.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.he.push(new qs(i,r))}),t.has($e.keyField().canonicalString())||e.he.push(new qs($e.keyField(),r))}return e.he}function Nt(n){const e=ae(n);return e.Pe||(e.Pe=__(e,Dr(n))),e.Pe}function __(n,e){if(n.limitType==="F")return Yl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new qs(s.field,i)});const t=n.endAt?new js(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new js(n.startAt.position,n.startAt.inclusive):null;return Yl(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function fo(n,e,t){return new ri(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function si(n,e){return Bo(Nt(n),Nt(e))&&n.limitType===e.limitType}function Lh(n){return`${Uo(Nt(n))}|lt:${n.limitType}`}function zn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Oh(s)).join(", ")}]`),ti(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Yn(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Yn(s)).join(",")),`Target(${r})`}(Nt(n))}; limitType=${n.limitType})`}function ii(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ne.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Dr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,c){const u=Ql(a,l,c);return a.inclusive?u<=0:u<0}(r.startAt,Dr(r),s)||r.endAt&&!function(a,l,c){const u=Ql(a,l,c);return a.inclusive?u>=0:u>0}(r.endAt,Dr(r),s))}(n,e)}function y_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Fh(n){return(e,t)=>{let r=!1;for(const s of Dr(n)){const i=w_(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function w_(n,e,t){const r=n.field.isKeyField()?ne.comparator(e.key,t.key):function(i,a,l){const c=a.data.field(i),u=l.data.field(i);return c!==null&&u!==null?Xn(c,u):se()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return se()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){mn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Ah(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_=new Se(ne.comparator);function Gt(){return v_}const Uh=new Se(ne.comparator);function Cr(...n){let e=Uh;for(const t of n)e=e.insert(t.key,t);return e}function Bh(n){let e=Uh;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function In(){return Nr()}function jh(){return Nr()}function Nr(){return new Vn(n=>n.toString(),(n,e)=>n.isEqual(e))}const A_=new Se(ne.comparator),E_=new Le(ne.comparator);function me(...n){let e=E_;for(const t of n)e=e.add(t);return e}const b_=new Le(ce);function T_(){return b_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fs(e)?"-0":e}}function qh(n){return{integerValue:""+n}}function I_(n,e){return Jg(e)?qh(e):qo(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(){this._=void 0}}function R_(n,e,t){return n instanceof zs?function(s,i){const a={fields:{[Th]:{stringValue:bh},[Rh]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Lo(i)&&(i=ni(i)),i&&(a.fields[Ih]=i),{mapValue:a}}(t,e):n instanceof qr?Wh(n,e):n instanceof zr?Hh(n,e):function(s,i){const a=zh(s,i),l=Zl(a)+Zl(s.Ie);return co(a)&&co(s.Ie)?qh(l):qo(s.serializer,l)}(n,e)}function C_(n,e,t){return n instanceof qr?Wh(n,e):n instanceof zr?Hh(n,e):t}function zh(n,e){return n instanceof Ws?function(r){return co(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class zs extends oi{}class qr extends oi{constructor(e){super(),this.elements=e}}function Wh(n,e){const t=Gh(e);for(const r of n.elements)t.some(s=>Ot(s,r))||t.push(r);return{arrayValue:{values:t}}}class zr extends oi{constructor(e){super(),this.elements=e}}function Hh(n,e){let t=Gh(e);for(const r of n.elements)t=t.filter(s=>!Ot(s,r));return{arrayValue:{values:t}}}class Ws extends oi{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function Zl(n){return De(n.integerValue||n.doubleValue)}function Gh(n){return Fo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function k_(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof qr&&s instanceof qr||r instanceof zr&&s instanceof zr?Qn(r.elements,s.elements,Ot):r instanceof Ws&&s instanceof Ws?Ot(r.Ie,s.Ie):r instanceof zs&&s instanceof zs}(n.transform,e.transform)}class S_{constructor(e,t){this.version=e,this.transformResults=t}}class gt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new gt}static exists(e){return new gt(void 0,e)}static updateTime(e){return new gt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ai{}function Kh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new zo(n.key,gt.none()):new Kr(n.key,n.data,gt.none());{const t=n.data,r=at.empty();let s=new Le($e.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new pn(n.key,r,new pt(s.toArray()),gt.none())}}function P_(n,e,t){n instanceof Kr?function(s,i,a){const l=s.value.clone(),c=tc(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof pn?function(s,i,a){if(!Vs(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=tc(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll($h(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Mr(n,e,t,r){return n instanceof Kr?function(i,a,l,c){if(!Vs(i.precondition,a))return l;const u=i.value.clone(),f=nc(i.fieldTransforms,c,a);return u.setAll(f),a.convertToFoundDocument(a.version,u).setHasLocalMutations(),null}(n,e,t,r):n instanceof pn?function(i,a,l,c){if(!Vs(i.precondition,a))return l;const u=nc(i.fieldTransforms,c,a),f=a.data;return f.setAll($h(i)),f.setAll(u),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(i,a,l){return Vs(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function V_(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=zh(r.transform,s||null);i!=null&&(t===null&&(t=at.empty()),t.set(r.field,i))}return t||null}function ec(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Qn(r,s,(i,a)=>k_(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Kr extends ai{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class pn extends ai{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function $h(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function tc(n,e,t){const r=new Map;Ae(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,C_(a,l,t[s]))}return r}function nc(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,R_(i,a,e))}return r}class zo extends ai{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class D_ extends ai{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&P_(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Mr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Mr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=jh();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const c=Kh(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(ie.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),me())}isEqual(e){return this.batchId===e.batchId&&Qn(this.mutations,e.mutations,(t,r)=>ec(t,r))&&Qn(this.baseMutations,e.baseMutations,(t,r)=>ec(t,r))}}class Wo{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Ae(e.mutations.length===r.length);let s=function(){return A_}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Wo(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne,pe;function x_(n){switch(n){case B.OK:return se();case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0;default:return se()}}function Qh(n){if(n===void 0)return Ht("GRPC error has no .code"),B.UNKNOWN;switch(n){case Ne.OK:return B.OK;case Ne.CANCELLED:return B.CANCELLED;case Ne.UNKNOWN:return B.UNKNOWN;case Ne.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case Ne.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case Ne.INTERNAL:return B.INTERNAL;case Ne.UNAVAILABLE:return B.UNAVAILABLE;case Ne.UNAUTHENTICATED:return B.UNAUTHENTICATED;case Ne.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case Ne.NOT_FOUND:return B.NOT_FOUND;case Ne.ALREADY_EXISTS:return B.ALREADY_EXISTS;case Ne.PERMISSION_DENIED:return B.PERMISSION_DENIED;case Ne.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case Ne.ABORTED:return B.ABORTED;case Ne.OUT_OF_RANGE:return B.OUT_OF_RANGE;case Ne.UNIMPLEMENTED:return B.UNIMPLEMENTED;case Ne.DATA_LOSS:return B.DATA_LOSS;default:return se()}}(pe=Ne||(Ne={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_=new nn([4294967295,4294967295],0);function rc(n){const e=yh().encode(n),t=new hh;return t.update(e),new Uint8Array(t.digest())}function sc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new nn([t,r],0),new nn([s,i],0)]}class Ho{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new kr(`Invalid padding: ${t}`);if(r<0)throw new kr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new kr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new kr(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=nn.fromNumber(this.Ee)}Ae(e,t,r){let s=e.add(t.multiply(nn.fromNumber(r)));return s.compare(L_)===1&&(s=new nn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=rc(e),[r,s]=sc(t);for(let i=0;i<this.hashCount;i++){const a=this.Ae(r,s,i);if(!this.Re(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Ho(i,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ee===0)return;const t=rc(e),[r,s]=sc(t);for(let i=0;i<this.hashCount;i++){const a=this.Ae(r,s,i);this.Ve(a)}}Ve(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class kr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,$r.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new li(ie.min(),s,new Se(ce),Gt(),me())}}class $r{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new $r(r,t,me(),me(),me())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,t,r,s){this.me=e,this.removedTargetIds=t,this.key=r,this.fe=s}}class Xh{constructor(e,t){this.targetId=e,this.ge=t}}class Yh{constructor(e,t,r=Ye.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class ic{constructor(){this.pe=0,this.ye=oc(),this.we=Ye.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=me(),t=me(),r=me();return this.ye.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:se()}}),new $r(this.we,this.Se,e,t,r)}Me(){this.be=!1,this.ye=oc()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Ae(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class F_{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Gt(),this.$e=Es(),this.Ue=Es(),this.Ke=new Se(ce)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const r=this.He(t);switch(e.state){case 0:this.Je(t)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(t);break;case 3:this.Je(t)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),r.Ce(e.resumeToken));break;default:se()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((r,s)=>{this.Je(s)&&t(s)})}Ze(e){const t=e.targetId,r=e.ge.count,s=this.Xe(t);if(s){const i=s.target;if(ho(i))if(r===0){const a=new ne(i.path);this.ze(t,a,nt.newNoDocument(a,ie.min()))}else Ae(r===1);else{const a=this.et(t);if(a!==r){const l=this.tt(e),c=l?this.nt(l,e,a):1;if(c!==0){this.Ye(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,u)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=cn(r).toUint8Array()}catch(c){if(c instanceof Eh)return $n("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Ho(a,s,i)}catch(c){return $n(c instanceof kr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ee===0?null:l}nt(e,t,r){return t.ge.count===r-this.st(e,t.targetId)?0:2}st(e,t){const r=this.ke.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.ke.it(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.ze(t,i,null),s++)}),s}ot(e){const t=new Map;this.qe.forEach((i,a)=>{const l=this.Xe(a);if(l){if(i.current&&ho(l.target)){const c=new ne(l.target.path);this._t(c).has(a)||this.ut(a,c)||this.ze(a,c,nt.newNoDocument(c,e))}i.ve&&(t.set(a,i.Fe()),i.Me())}});let r=me();this.Ue.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const u=this.Xe(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.Qe.forEach((i,a)=>a.setReadTime(e));const s=new li(e,t,this.Ke,this.Qe,r);return this.Qe=Gt(),this.$e=Es(),this.Ue=Es(),this.Ke=new Se(ce),s}Ge(e,t){if(!this.Je(e))return;const r=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,r),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}ze(e,t,r){if(!this.Je(e))return;const s=this.He(e);this.ut(e,t)?s.xe(t,1):s.Oe(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),this.Ue=this.Ue.insert(t,this.ct(t).add(e)),r&&(this.Qe=this.Qe.insert(t,r))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new ic,this.qe.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new Le(ce),this.Ue=this.Ue.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new Le(ce),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||K("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new ic),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function Es(){return new Se(ne.comparator)}function oc(){return new Se(ne.comparator)}const U_={asc:"ASCENDING",desc:"DESCENDING"},B_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},j_={and:"AND",or:"OR"};class q_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function mo(n,e){return n.useProto3Json||ti(e)?e:{value:e}}function Hs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Jh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function z_(n,e){return Hs(n,e.toTimestamp())}function Mt(n){return Ae(!!n),ie.fromTimestamp(function(t){const r=ln(t);return new xe(r.seconds,r.nanos)}(n))}function Go(n,e){return po(n,e).canonicalString()}function po(n,e){const t=function(s){return new ke(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Zh(n){const e=ke.fromString(n);return Ae(sf(e)),e}function go(n,e){return Go(n.databaseId,e.path)}function Gi(n,e){const t=Zh(e);if(t.get(1)!==n.databaseId.projectId)throw new Z(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new Z(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ne(tf(t))}function ef(n,e){return Go(n.databaseId,e)}function W_(n){const e=Zh(n);return e.length===4?ke.emptyPath():tf(e)}function _o(n){return new ke(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function tf(n){return Ae(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function ac(n,e,t){return{name:go(n,e),fields:t.value.mapValue.fields}}function H_(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:se()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,f){return u.useProto3Json?(Ae(f===void 0||typeof f=="string"),Ye.fromBase64String(f||"")):(Ae(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Ye.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(u){const f=u.code===void 0?B.UNKNOWN:Qh(u.code);return new Z(f,u.message||"")}(a);t=new Yh(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Gi(n,r.document.name),i=Mt(r.document.updateTime),a=r.document.createTime?Mt(r.document.createTime):ie.min(),l=new at({mapValue:{fields:r.document.fields}}),c=nt.newFoundDocument(s,i,a,l),u=r.targetIds||[],f=r.removedTargetIds||[];t=new Ds(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Gi(n,r.document),i=r.readTime?Mt(r.readTime):ie.min(),a=nt.newNoDocument(s,i),l=r.removedTargetIds||[];t=new Ds([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Gi(n,r.document),i=r.removedTargetIds||[];t=new Ds([],i,s,null)}else{if(!("filter"in e))return se();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new O_(s,i),l=r.targetId;t=new Xh(l,a)}}return t}function G_(n,e){let t;if(e instanceof Kr)t={update:ac(n,e.key,e.value)};else if(e instanceof zo)t={delete:go(n,e.key)};else if(e instanceof pn)t={update:ac(n,e.key,e.data),updateMask:ty(e.fieldMask)};else{if(!(e instanceof D_))return se();t={verify:go(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof zs)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof qr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof zr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ws)return{fieldPath:a.field.canonicalString(),increment:l.Ie};throw se()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:z_(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:se()}(n,e.precondition)),t}function K_(n,e){return n&&n.length>0?(Ae(e!==void 0),n.map(t=>function(s,i){let a=s.updateTime?Mt(s.updateTime):Mt(i);return a.isEqual(ie.min())&&(a=Mt(i)),new S_(a,s.transformResults||[])}(t,e))):[]}function $_(n,e){return{documents:[ef(n,e.path)]}}function Q_(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=ef(n,s);const i=function(u){if(u.length!==0)return rf(xt.create(u,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(u){if(u.length!==0)return u.map(f=>function(p){return{field:Wn(p.field),direction:J_(p.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=mo(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ht:t,parent:s}}function X_(n){let e=W_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Ae(r===1);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(m){const p=nf(m);return p instanceof xt&&Nh(p)?p.getFilters():[p]}(t.where));let a=[];t.orderBy&&(a=function(m){return m.map(p=>function(b){return new qs(Hn(b.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(p))}(t.orderBy));let l=null;t.limit&&(l=function(m){let p;return p=typeof m=="object"?m.value:m,ti(p)?null:p}(t.limit));let c=null;t.startAt&&(c=function(m){const p=!!m.before,y=m.values||[];return new js(y,p)}(t.startAt));let u=null;return t.endAt&&(u=function(m){const p=!m.before,y=m.values||[];return new js(y,p)}(t.endAt)),p_(e,s,a,i,l,"F",c,u)}function Y_(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return se()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function nf(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Hn(t.unaryFilter.field);return Oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Hn(t.unaryFilter.field);return Oe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Hn(t.unaryFilter.field);return Oe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Hn(t.unaryFilter.field);return Oe.create(a,"!=",{nullValue:"NULL_VALUE"});default:return se()}}(n):n.fieldFilter!==void 0?function(t){return Oe.create(Hn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return se()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return xt.create(t.compositeFilter.filters.map(r=>nf(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return se()}}(t.compositeFilter.op))}(n):se()}function J_(n){return U_[n]}function Z_(n){return B_[n]}function ey(n){return j_[n]}function Wn(n){return{fieldPath:n.canonicalString()}}function Hn(n){return $e.fromServerFormat(n.fieldPath)}function rf(n){return n instanceof Oe?function(t){if(t.op==="=="){if($l(t.value))return{unaryFilter:{field:Wn(t.field),op:"IS_NAN"}};if(Kl(t.value))return{unaryFilter:{field:Wn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if($l(t.value))return{unaryFilter:{field:Wn(t.field),op:"IS_NOT_NAN"}};if(Kl(t.value))return{unaryFilter:{field:Wn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wn(t.field),op:Z_(t.op),value:t.value}}}(n):n instanceof xt?function(t){const r=t.getFilters().map(s=>rf(s));return r.length===1?r[0]:{compositeFilter:{op:ey(t.op),filters:r}}}(n):se()}function ty(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function sf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,t,r,s,i=ie.min(),a=ie.min(),l=Ye.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Zt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Zt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e){this.Tt=e}}function ry(n){const e=X_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?fo(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(){this.Tn=new iy}addToCollectionParentIndex(e,t){return this.Tn.add(t),U.resolve()}getCollectionParents(e,t){return U.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return U.resolve()}deleteFieldIndex(e,t){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,t){return U.resolve()}getDocumentsMatchingTarget(e,t){return U.resolve(null)}getIndexType(e,t){return U.resolve(0)}getFieldIndexes(e,t){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,t){return U.resolve(an.min())}getMinOffsetFromCollectionGroup(e,t){return U.resolve(an.min())}updateCollectionGroup(e,t,r){return U.resolve()}updateIndexEntries(e,t){return U.resolve()}}class iy{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Le(ke.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Le(ke.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},of=41943040;class ot{static withCacheSize(e){return new ot(e,ot.DEFAULT_COLLECTION_PERCENTILE,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ot.DEFAULT_COLLECTION_PERCENTILE=10,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ot.DEFAULT=new ot(of,ot.DEFAULT_COLLECTION_PERCENTILE,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ot.DISABLED=new ot(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new Jn(0)}static Kn(){return new Jn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc="LruGarbageCollector",oy=1048576;function uc([n,e],[t,r]){const s=ce(n,t);return s===0?ce(e,r):s}class ay{constructor(e){this.Hn=e,this.buffer=new Le(uc),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();uc(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ly{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){K(cc,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){sr(t)?K(cc,"Ignoring IndexedDB error during garbage collection: ",t):await rr(t)}await this.er(3e5)})}}class cy{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return U.resolve(ei.ae);const r=new ay(t);return this.tr.forEachTarget(e,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(e,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.tr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(K("LruGarbageCollector","Garbage collection skipped; disabled"),U.resolve(lc)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(K("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),lc):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let r,s,i,a,l,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(K("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,a=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,t))).next(m=>(i=m,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(u=Date.now(),qn()<=ge.DEBUG&&K("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${m} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),U.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function uy(n,e){return new cy(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(){this.changes=new Vn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,nt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?U.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Mr(r.mutation,s,pt.empty(),xe.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,me()).next(()=>r))}getLocalViewOfDocuments(e,t,r=me()){const s=In();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=Cr();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=In();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,me()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let i=Gt();const a=Nr(),l=function(){return Nr()}();return t.forEach((c,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof pn)?i=i.insert(u.key,u):f!==void 0?(a.set(u.key,f.mutation.getFieldMask()),Mr(f.mutation,u,f.mutation.getFieldMask(),xe.now())):a.set(u.key,pt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,f)=>a.set(u,f)),t.forEach((u,f)=>{var m;return l.set(u,new fy(f,(m=a.get(u))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,t){const r=Nr();let s=new Se((a,l)=>a-l),i=me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let f=r.get(c)||pt.empty();f=l.applyToLocalView(u,f),r.set(c,f);const m=(s.get(l.batchId)||me()).add(c);s=s.insert(l.batchId,m)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,m=jh();f.forEach(p=>{if(!i.has(p)){const y=Kh(t.get(p),r.get(p));y!==null&&m.set(p,y),i=i.add(p)}}),a.push(this.documentOverlayCache.saveOverlays(e,u,m))}return U.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return ne.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):g_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):U.resolve(In());let l=Fr,c=i;return a.next(u=>U.forEach(u,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(f)?U.resolve():this.remoteDocumentCache.getEntry(e,f).next(p=>{c=c.insert(f,p)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,me())).next(f=>({batchId:l,changes:Bh(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ne(t)).next(r=>{let s=Cr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Cr();return this.indexManager.getCollectionParents(e,i).next(l=>U.forEach(l,c=>{const u=function(m,p){return new ri(p,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(f=>{f.forEach((m,p)=>{a=a.insert(m,p)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((c,u)=>{const f=u.getKey();a.get(f)===null&&(a=a.insert(f,nt.newInvalidDocument(f)))});let l=Cr();return a.forEach((c,u)=>{const f=i.get(c);f!==void 0&&Mr(f.mutation,u,pt.empty(),xe.now()),ii(t,u)&&(l=l.insert(c,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return U.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Mt(s.createTime)}}(t)),U.resolve()}getNamedQuery(e,t){return U.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(s){return{name:s.name,query:ry(s.bundledQuery),readTime:Mt(s.readTime)}}(t)),U.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(){this.overlays=new Se(ne.comparator),this.Rr=new Map}getOverlay(e,t){return U.resolve(this.overlays.get(t))}getOverlays(e,t){const r=In();return U.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.Et(e,t,i)}),U.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(r)),U.resolve()}getOverlaysForCollection(e,t,r){const s=In(),i=t.length+1,a=new ne(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return U.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Se((u,f)=>u-f);const a=this.overlays.getIterator();for(;a.hasNext();){const u=a.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=In(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=In(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,f)=>l.set(u,f)),!(l.size()>=s)););return U.resolve(l)}Et(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new M_(t,r));let i=this.Rr.get(t);i===void 0&&(i=me(),this.Rr.set(t,i)),this.Rr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(){this.sessionToken=Ye.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(){this.Vr=new Le(ze.mr),this.gr=new Le(ze.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const r=new ze(e,t);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.wr(new ze(e,t))}Sr(e,t){e.forEach(r=>this.removeReference(r,t))}br(e){const t=new ne(new ke([])),r=new ze(t,e),s=new ze(t,e+1),i=[];return this.gr.forEachInRange([r,s],a=>{this.wr(a),i.push(a.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new ne(new ke([])),r=new ze(t,e),s=new ze(t,e+1);let i=me();return this.gr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new ze(e,0),r=this.Vr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ze{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return ne.comparator(e.key,t.key)||ce(e.Cr,t.Cr)}static pr(e,t){return ce(e.Cr,t.Cr)||ne.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new Le(ze.mr)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new N_(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.Mr=this.Mr.add(new ze(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return U.resolve(a)}lookupMutationBatch(e,t){return U.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Nr(r),i=s<0?0:s;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?xo:this.Fr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ze(t,0),s=new ze(t,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([r,s],a=>{const l=this.Or(a.Cr);i.push(l)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Le(ce);return t.forEach(s=>{const i=new ze(s,0),a=new ze(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,a],l=>{r=r.add(l.Cr)})}),U.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;ne.isDocumentKey(i)||(i=i.child(""));const a=new ze(new ne(i),0);let l=new Le(ce);return this.Mr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Cr)),!0)},a),U.resolve(this.Br(l))}Br(e){const t=[];return e.forEach(r=>{const s=this.Or(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Ae(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return U.forEach(t.mutations,s=>{const i=new ze(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,t){const r=new ze(t,0),s=this.Mr.firstAfterOrEqual(r);return U.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e){this.kr=e,this.docs=function(){return new Se(ne.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.kr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return U.resolve(r?r.document.mutableCopy():nt.newInvalidDocument(t))}getEntries(e,t){let r=Gt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():nt.newInvalidDocument(s))}),U.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Gt();const a=t.path,l=new ne(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!a.isPrefixOf(u.path))break;u.path.length>a.length+1||$g(Kg(f),r)<=0||(s.has(f.key)||ii(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,t,r,s){se()}qr(e,t){return U.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new wy(this)}getSize(e){return U.resolve(this.size)}}class wy extends hy{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Ir.addEntry(e,s)):this.Ir.removeEntry(r)}),U.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e){this.persistence=e,this.Qr=new Vn(t=>Uo(t),Bo),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.$r=0,this.Ur=new Ko,this.targetCount=0,this.Kr=Jn.Un()}forEachTarget(e,t){return this.Qr.forEach((r,s)=>t(s)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.$r&&(this.$r=t),U.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Kr=new Jn(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,U.resolve()}updateTargetData(e,t){return this.zn(t),U.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Ur.br(t.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Qr.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Qr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),U.waitFor(i).next(()=>s)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,t){const r=this.Qr.get(t)||null;return U.resolve(r)}addMatchingKeys(e,t,r){return this.Ur.yr(t,r),U.resolve()}removeMatchingKeys(e,t,r){this.Ur.Sr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Ur.br(t),U.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Ur.vr(t);return U.resolve(r)}containsKey(e,t){return U.resolve(this.Ur.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new ei(0),this.zr=!1,this.zr=!0,this.jr=new gy,this.referenceDelegate=e(this),this.Hr=new vy(this),this.indexManager=new sy,this.remoteDocumentCache=function(s){return new yy(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new ny(t),this.Yr=new my(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new py,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Wr[e.toKey()];return r||(r=new _y(t,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,r){K("MemoryPersistence","Starting transaction:",e);const s=new Ay(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(i=>this.referenceDelegate.Xr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}ei(e,t){return U.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,t)))}}class Ay extends Xg{constructor(e){super(),this.currentSequenceNumber=e}}class $o{constructor(e){this.persistence=e,this.ti=new Ko,this.ni=null}static ri(e){return new $o(e)}get ii(){if(this.ni)return this.ni;throw se()}addReference(e,t,r){return this.ti.addReference(r,t),this.ii.delete(r.toString()),U.resolve()}removeReference(e,t,r){return this.ti.removeReference(r,t),this.ii.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),U.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.ii.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.ii,r=>{const s=ne.fromPath(r);return this.si(e,s).next(i=>{i||t.removeEntry(s,ie.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(r=>{r?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return U.or([()=>U.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class Gs{constructor(e,t){this.persistence=e,this.oi=new Vn(r=>Zg(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=uy(this,t)}static ri(e,t){return new Gs(e,t)}Zr(){}Xr(e){return U.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}sr(e){let t=0;return this.rr(e,r=>{t++}).next(()=>t)}rr(e,t){return U.forEach(this.oi,(r,s)=>this.ar(e,r,s).next(i=>i?U.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.qr(e,a=>this.ar(e,a,t).next(l=>{l||(r++,i.removeEntry(a,ie.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),U.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),U.resolve()}removeReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),U.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),U.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ss(e.data.value)),t}ar(e,t,r){return U.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.oi.get(t);return U.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Hi=r,this.Ji=s}static Yi(e,t){let r=me(),s=me();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Qo(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Zd()?8:Yg(Xd())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.rs(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ss(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new Ey;return this._s(e,t,a).next(l=>{if(i.result=l,this.Xi)return this.us(e,t,a,l.size)})}).next(()=>i.result)}us(e,t,r,s){return r.documentReadCount<this.es?(qn()<=ge.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",zn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),U.resolve()):(qn()<=ge.DEBUG&&K("QueryEngine","Query:",zn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(qn()<=ge.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",zn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Nt(t))):U.resolve())}rs(e,t){if(Jl(t))return U.resolve(null);let r=Nt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=fo(t,null,"F"),r=Nt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=me(...i);return this.ns.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.cs(t,l);return this.ls(t,u,a,c.readTime)?this.rs(e,fo(t,null,"F")):this.hs(e,u,t,c)}))})))}ss(e,t,r,s){return Jl(t)||s.isEqual(ie.min())?U.resolve(null):this.ns.getDocuments(e,r).next(i=>{const a=this.cs(t,i);return this.ls(t,a,r,s)?U.resolve(null):(qn()<=ge.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),zn(t)),this.hs(e,a,t,Gg(s,Fr)).next(l=>l))})}cs(e,t){let r=new Le(Fh(e));return t.forEach((s,i)=>{ii(e,i)&&(r=r.add(i))}),r}ls(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}_s(e,t,r){return qn()<=ge.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",zn(t)),this.ns.getDocumentsMatchingQuery(e,t,an.min(),r)}hs(e,t,r,s){return this.ns.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo="LocalStore",Ty=3e8;class Iy{constructor(e,t,r,s){this.persistence=e,this.Ps=t,this.serializer=s,this.Ts=new Se(ce),this.Is=new Vn(i=>Uo(i),Bo),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new dy(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function Ry(n,e,t,r){return new Iy(n,e,t,r)}async function lf(n,e){const t=ae(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.As(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=me();for(const u of s){a.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of i){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(r,c).next(u=>({Rs:u,removedBatchIds:a,addedBatchIds:l}))})})}function Cy(n,e){const t=ae(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.ds.newChangeBuffer({trackRemovals:!0});return function(l,c,u,f){const m=u.batch,p=m.keys();let y=U.resolve();return p.forEach(b=>{y=y.next(()=>f.getEntry(c,b)).next(R=>{const C=u.docVersions.get(b);Ae(C!==null),R.version.compareTo(C)<0&&(m.applyToRemoteDocument(R,u),R.isValidDocument()&&(R.setReadTime(u.commitVersion),f.addEntry(R)))})}),y.next(()=>l.mutationQueue.removeMutationBatch(c,m))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=me();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function cf(n){const e=ae(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function ky(n,e){const t=ae(n),r=e.snapshotVersion;let s=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.ds.newChangeBuffer({trackRemovals:!0});s=t.Ts;const l=[];e.targetChanges.forEach((f,m)=>{const p=s.get(m);if(!p)return;l.push(t.Hr.removeMatchingKeys(i,f.removedDocuments,m).next(()=>t.Hr.addMatchingKeys(i,f.addedDocuments,m)));let y=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?y=y.withResumeToken(Ye.EMPTY_BYTE_STRING,ie.min()).withLastLimboFreeSnapshotVersion(ie.min()):f.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(f.resumeToken,r)),s=s.insert(m,y),function(R,C,D){return R.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=Ty?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(p,y,f)&&l.push(t.Hr.updateTargetData(i,y))});let c=Gt(),u=me();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(Sy(i,a,e.documentUpdates).next(f=>{c=f.Vs,u=f.fs})),!r.isEqual(ie.min())){const f=t.Hr.getLastRemoteSnapshotVersion(i).next(m=>t.Hr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return U.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(t.Ts=s,i))}function Sy(n,e,t){let r=me(),s=me();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=Gt();return t.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ie.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):K(Xo,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Vs:a,fs:s}})}function Py(n,e){const t=ae(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=xo),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Vy(n,e){const t=ae(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Hr.getTargetData(r,e).next(i=>i?(s=i,U.resolve(s)):t.Hr.allocateTargetId(r).next(a=>(s=new Zt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Hr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(r.targetId,r),t.Is.set(e,r.targetId)),r})}async function yo(n,e,t){const r=ae(n),s=r.Ts.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!sr(a))throw a;K(Xo,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ts=r.Ts.remove(e),r.Is.delete(s.target)}function hc(n,e,t){const r=ae(n);let s=ie.min(),i=me();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,u,f){const m=ae(c),p=m.Is.get(f);return p!==void 0?U.resolve(m.Ts.get(p)):m.Hr.getTargetData(u,f)}(r,a,Nt(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>r.Ps.getDocumentsMatchingQuery(a,e,t?s:ie.min(),t?i:me())).next(l=>(Dy(r,y_(e),l),{documents:l,gs:i})))}function Dy(n,e,t){let r=n.Es.get(e)||ie.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Es.set(e,r)}class fc{constructor(){this.activeTargetIds=T_()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ny{constructor(){this.ho=new fc,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,r){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new fc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc="ConnectivityMonitor";class mc{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){K(dc,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){K(dc,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bs=null;function wo(){return bs===null?bs=function(){return 268435456+Math.round(2147483648*Math.random())}():bs++,"0x"+bs.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki="RestConnection",Oy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class xy{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===Us?`project_id=${r}`:`project_id=${r}&database_id=${s}`}So(e,t,r,s,i){const a=wo(),l=this.bo(e,t.toUriEncodedString());K(Ki,`Sending RPC '${e}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(c,s,i),this.vo(e,l,c,r).then(u=>(K(Ki,`Received RPC '${e}' ${a}: `,u),u),u=>{throw $n(Ki,`RPC '${e}' ${a} failed with error: `,u,"url: ",l,"request:",r),u})}Co(e,t,r,s,i,a){return this.So(e,t,r,s,i)}Do(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+nr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}bo(e,t){const r=Oy[e];return`${this.po}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et="WebChannelConnection";class Fy extends xy{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,r,s){const i=wo();return new Promise((a,l)=>{const c=new fh;c.setWithCredentials(!0),c.listenOnce(dh.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ks.NO_ERROR:const f=c.getResponseJson();K(et,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),a(f);break;case ks.TIMEOUT:K(et,`RPC '${e}' ${i} timed out`),l(new Z(B.DEADLINE_EXCEEDED,"Request time out"));break;case ks.HTTP_ERROR:const m=c.getStatus();if(K(et,`RPC '${e}' ${i} failed with status:`,m,"response text:",c.getResponseText()),m>0){let p=c.getResponseJson();Array.isArray(p)&&(p=p[0]);const y=p==null?void 0:p.error;if(y&&y.status&&y.message){const b=function(C){const D=C.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(D)>=0?D:B.UNKNOWN}(y.status);l(new Z(b,y.message))}else l(new Z(B.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new Z(B.UNAVAILABLE,"Connection failed."));break;default:se()}}finally{K(et,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);K(et,`RPC '${e}' ${i} sending request:`,s),c.send(t,"POST",u,r,15)})}Wo(e,t,r){const s=wo(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=gh(),l=ph(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const f=i.join("");K(et,`Creating RPC '${e}' stream ${s}: ${f}`,c);const m=a.createWebChannel(f,c);let p=!1,y=!1;const b=new Ly({Fo:C=>{y?K(et,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(p||(K(et,`Opening RPC '${e}' stream ${s} transport.`),m.open(),p=!0),K(et,`RPC '${e}' stream ${s} sending:`,C),m.send(C))},Mo:()=>m.close()}),R=(C,D,F)=>{C.listen(D,L=>{try{F(L)}catch(O){setTimeout(()=>{throw O},0)}})};return R(m,Rr.EventType.OPEN,()=>{y||(K(et,`RPC '${e}' stream ${s} transport opened.`),b.Qo())}),R(m,Rr.EventType.CLOSE,()=>{y||(y=!0,K(et,`RPC '${e}' stream ${s} transport closed`),b.Uo())}),R(m,Rr.EventType.ERROR,C=>{y||(y=!0,$n(et,`RPC '${e}' stream ${s} transport errored:`,C),b.Uo(new Z(B.UNAVAILABLE,"The operation could not be completed")))}),R(m,Rr.EventType.MESSAGE,C=>{var D;if(!y){const F=C.data[0];Ae(!!F);const L=F,O=(L==null?void 0:L.error)||((D=L[0])===null||D===void 0?void 0:D.error);if(O){K(et,`RPC '${e}' stream ${s} received error:`,O);const G=O.status;let H=function(v){const T=Ne[v];if(T!==void 0)return Qh(T)}(G),A=O.message;H===void 0&&(H=B.INTERNAL,A="Unknown error status: "+G+" with message "+O.message),y=!0,b.Uo(new Z(H,A)),m.close()}else K(et,`RPC '${e}' stream ${s} received:`,F),b.Ko(F)}}),R(l,mh.STAT_EVENT,C=>{C.stat===oo.PROXY?K(et,`RPC '${e}' stream ${s} detected buffering proxy`):C.stat===oo.NOPROXY&&K(et,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{b.$o()},0),b}}function $i(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(n){return new q_(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Ti=e,this.timerId=t,this.Go=r,this.zo=s,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,t-r);s>0&&K("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc="PersistentStream";class hf{constructor(e,t,r,s,i,a,l,c){this.Ti=e,this.n_=r,this.r_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new uf(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===B.RESOURCE_EXHAUSTED?(Ht(t.toString()),Ht("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===t&&this.V_(r,s)},r=>{e(()=>{const s=new Z(B.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(e,t){const r=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return K(pc,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(K(pc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Uy extends hf{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=H_(this.serializer,e),r=function(i){if(!("targetChange"in i))return ie.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ie.min():a.readTime?Mt(a.readTime):ie.min()}(e);return this.listener.p_(t,r)}y_(e){const t={};t.database=_o(this.serializer),t.addTarget=function(i,a){let l;const c=a.target;if(l=ho(c)?{documents:$_(i,c)}:{query:Q_(i,c).ht},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Jh(i,a.resumeToken);const u=mo(i,a.expectedCount);u!==null&&(l.expectedCount=u)}else if(a.snapshotVersion.compareTo(ie.min())>0){l.readTime=Hs(i,a.snapshotVersion.toTimestamp());const u=mo(i,a.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=Y_(this.serializer,e);r&&(t.labels=r),this.I_(t)}w_(e){const t={};t.database=_o(this.serializer),t.removeTarget=e,this.I_(t)}}class By extends hf{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return Ae(!!e.streamToken),this.lastStreamToken=e.streamToken,Ae(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=K_(e.writeResults,e.commitTime),r=Mt(e.commitTime);return this.listener.v_(r,t)}C_(){const e={};e.database=_o(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>G_(this.serializer,r))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{}class qy extends jy{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new Z(B.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.So(e,po(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Z(B.UNKNOWN,i.toString())})}Co(e,t,r,s,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Co(e,po(t,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new Z(B.UNKNOWN,a.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class zy{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Ht(t),this.N_=!1):K("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn="RemoteStore";class Wy{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(a=>{r.enqueueAndForget(async()=>{Dn(this)&&(K(Pn,"Restarting streams for network reachability change."),await async function(c){const u=ae(c);u.W_.add(4),await Qr(u),u.j_.set("Unknown"),u.W_.delete(4),await ui(u)}(this))})}),this.j_=new zy(r,s)}}async function ui(n){if(Dn(n))for(const e of n.G_)await e(!0)}async function Qr(n){for(const e of n.G_)await e(!1)}function ff(n,e){const t=ae(n);t.K_.has(e.targetId)||(t.K_.set(e.targetId,e),ea(t)?Zo(t):ir(t).c_()&&Jo(t,e))}function Yo(n,e){const t=ae(n),r=ir(t);t.K_.delete(e),r.c_()&&df(t,e),t.K_.size===0&&(r.c_()?r.P_():Dn(t)&&t.j_.set("Unknown"))}function Jo(n,e){if(n.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ie.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ir(n).y_(e)}function df(n,e){n.H_.Ne(e),ir(n).w_(e)}function Zo(n){n.H_=new F_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.K_.get(e)||null,it:()=>n.datastore.serializer.databaseId}),ir(n).start(),n.j_.B_()}function ea(n){return Dn(n)&&!ir(n).u_()&&n.K_.size>0}function Dn(n){return ae(n).W_.size===0}function mf(n){n.H_=void 0}async function Hy(n){n.j_.set("Online")}async function Gy(n){n.K_.forEach((e,t)=>{Jo(n,e)})}async function Ky(n,e){mf(n),ea(n)?(n.j_.q_(e),Zo(n)):n.j_.set("Unknown")}async function $y(n,e,t){if(n.j_.set("Online"),e instanceof Yh&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.K_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.K_.delete(l),s.H_.removeTarget(l))}(n,e)}catch(r){K(Pn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ks(n,r)}else if(e instanceof Ds?n.H_.We(e):e instanceof Xh?n.H_.Ze(e):n.H_.je(e),!t.isEqual(ie.min()))try{const r=await cf(n.localStore);t.compareTo(r)>=0&&await function(i,a){const l=i.H_.ot(a);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.K_.get(u);f&&i.K_.set(u,f.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,u)=>{const f=i.K_.get(c);if(!f)return;i.K_.set(c,f.withResumeToken(Ye.EMPTY_BYTE_STRING,f.snapshotVersion)),df(i,c);const m=new Zt(f.target,c,u,f.sequenceNumber);Jo(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){K(Pn,"Failed to raise snapshot:",r),await Ks(n,r)}}async function Ks(n,e,t){if(!sr(e))throw e;n.W_.add(1),await Qr(n),n.j_.set("Offline"),t||(t=()=>cf(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{K(Pn,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await ui(n)})}function pf(n,e){return e().catch(t=>Ks(n,t,e))}async function hi(n){const e=ae(n),t=hn(e);let r=e.U_.length>0?e.U_[e.U_.length-1].batchId:xo;for(;Qy(e);)try{const s=await Py(e.localStore,r);if(s===null){e.U_.length===0&&t.P_();break}r=s.batchId,Xy(e,s)}catch(s){await Ks(e,s)}gf(e)&&_f(e)}function Qy(n){return Dn(n)&&n.U_.length<10}function Xy(n,e){n.U_.push(e);const t=hn(n);t.c_()&&t.S_&&t.b_(e.mutations)}function gf(n){return Dn(n)&&!hn(n).u_()&&n.U_.length>0}function _f(n){hn(n).start()}async function Yy(n){hn(n).C_()}async function Jy(n){const e=hn(n);for(const t of n.U_)e.b_(t.mutations)}async function Zy(n,e,t){const r=n.U_.shift(),s=Wo.from(r,e,t);await pf(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await hi(n)}async function ew(n,e){e&&hn(n).S_&&await async function(r,s){if(function(a){return x_(a)&&a!==B.ABORTED}(s.code)){const i=r.U_.shift();hn(r).h_(),await pf(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await hi(r)}}(n,e),gf(n)&&_f(n)}async function gc(n,e){const t=ae(n);t.asyncQueue.verifyOperationInProgress(),K(Pn,"RemoteStore received new credentials");const r=Dn(t);t.W_.add(3),await Qr(t),r&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await ui(t)}async function tw(n,e){const t=ae(n);e?(t.W_.delete(2),await ui(t)):e||(t.W_.add(2),await Qr(t),t.j_.set("Unknown"))}function ir(n){return n.J_||(n.J_=function(t,r,s){const i=ae(t);return i.M_(),new Uy(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{xo:Hy.bind(null,n),No:Gy.bind(null,n),Lo:Ky.bind(null,n),p_:$y.bind(null,n)}),n.G_.push(async e=>{e?(n.J_.h_(),ea(n)?Zo(n):n.j_.set("Unknown")):(await n.J_.stop(),mf(n))})),n.J_}function hn(n){return n.Y_||(n.Y_=function(t,r,s){const i=ae(t);return i.M_(),new By(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:Yy.bind(null,n),Lo:ew.bind(null,n),D_:Jy.bind(null,n),v_:Zy.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await hi(n)):(await n.Y_.stop(),n.U_.length>0&&(K(Pn,`Stopping write stream with ${n.U_.length} pending writes`),n.U_=[]))})),n.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new qt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new ta(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function na(n,e){if(Ht("AsyncQueue",`${e}: ${n}`),sr(n))return new Z(B.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{static emptySet(e){return new Kn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ne.comparator(t.key,r.key):(t,r)=>ne.comparator(t.key,r.key),this.keyedMap=Cr(),this.sortedSet=new Se(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Kn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Kn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(){this.Z_=new Se(ne.comparator)}track(e){const t=e.doc.key,r=this.Z_.get(t);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(t):e.type===1&&r.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):se():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Zn{constructor(e,t,r,s,i,a,l,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new Zn(e,t,Kn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&si(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class rw{constructor(){this.queries=yc(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,r){const s=ae(t),i=s.queries;s.queries=yc(),i.forEach((a,l)=>{for(const c of l.ta)c.onError(r)})})(this,new Z(B.ABORTED,"Firestore shutting down"))}}function yc(){return new Vn(n=>Lh(n),si)}async function yf(n,e){const t=ae(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.na()&&e.ra()&&(r=2):(i=new nw,r=e.ra()?0:1);try{switch(r){case 0:i.ea=await t.onListen(s,!0);break;case 1:i.ea=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=na(a,`Initialization of query '${zn(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.ta.push(e),e.sa(t.onlineState),i.ea&&e.oa(i.ea)&&ra(t)}async function wf(n,e){const t=ae(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.ta.indexOf(e);a>=0&&(i.ta.splice(a,1),i.ta.length===0?s=e.ra()?0:1:!i.na()&&e.ra()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function sw(n,e){const t=ae(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.ta)l.oa(s)&&(r=!0);a.ea=s}}r&&ra(t)}function iw(n,e,t){const r=ae(n),s=r.queries.get(e);if(s)for(const i of s.ta)i.onError(t);r.queries.delete(e)}function ra(n){n.ia.forEach(e=>{e.next()})}var vo,wc;(wc=vo||(vo={}))._a="default",wc.Cache="cache";class vf{constructor(e,t,r){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Zn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const r=t!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=Zn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==vo.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e){this.key=e}}class Ef{constructor(e){this.key=e}}class ow{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=me(),this.mutatedKeys=me(),this.ya=Fh(e),this.wa=new Kn(this.ya)}get Sa(){return this.fa}ba(e,t){const r=t?t.Da:new _c,s=t?t.wa:this.wa;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const p=s.get(f),y=ii(this.query,m)?m:null,b=!!p&&this.mutatedKeys.has(p.key),R=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let C=!1;p&&y?p.data.isEqual(y.data)?b!==R&&(r.track({type:3,doc:y}),C=!0):this.va(p,y)||(r.track({type:2,doc:y}),C=!0,(c&&this.ya(y,c)>0||u&&this.ya(y,u)<0)&&(l=!0)):!p&&y?(r.track({type:0,doc:y}),C=!0):p&&!y&&(r.track({type:1,doc:p}),C=!0,(c||u)&&(l=!0)),C&&(y?(a=a.add(y),i=R?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{wa:a,Da:r,ls:l,mutatedKeys:i}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const a=e.Da.X_();a.sort((f,m)=>function(y,b){const R=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return se()}};return R(y)-R(b)}(f.type,m.type)||this.ya(f.doc,m.doc)),this.Ca(r),s=s!=null&&s;const l=t&&!s?this.Fa():[],c=this.pa.size===0&&this.current&&!s?1:0,u=c!==this.ga;return this.ga=c,a.length!==0||u?{snapshot:new Zn(this.query,e.wa,i,a,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:l}:{Ma:l}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new _c,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=me(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const t=[];return e.forEach(r=>{this.pa.has(r)||t.push(new Ef(r))}),this.pa.forEach(r=>{e.has(r)||t.push(new Af(r))}),t}Oa(e){this.fa=e.gs,this.pa=me();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return Zn.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const sa="SyncEngine";class aw{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class lw{constructor(e){this.key=e,this.Ba=!1}}class cw{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new Vn(l=>Lh(l),si),this.qa=new Map,this.Qa=new Set,this.$a=new Se(ne.comparator),this.Ua=new Map,this.Ka=new Ko,this.Wa={},this.Ga=new Map,this.za=Jn.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function uw(n,e,t=!0){const r=kf(n);let s;const i=r.ka.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Na()):s=await bf(r,e,t,!0),s}async function hw(n,e){const t=kf(n);await bf(t,e,!0,!1)}async function bf(n,e,t,r){const s=await Vy(n.localStore,Nt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await fw(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&ff(n.remoteStore,s),l}async function fw(n,e,t,r,s){n.Ha=(m,p,y)=>async function(R,C,D,F){let L=C.view.ba(D);L.ls&&(L=await hc(R.localStore,C.query,!1).then(({documents:A})=>C.view.ba(A,L)));const O=F&&F.targetChanges.get(C.targetId),G=F&&F.targetMismatches.get(C.targetId)!=null,H=C.view.applyChanges(L,R.isPrimaryClient,O,G);return Ac(R,C.targetId,H.Ma),H.snapshot}(n,m,p,y);const i=await hc(n.localStore,e,!0),a=new ow(e,i.gs),l=a.ba(i.documents),c=$r.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),u=a.applyChanges(l,n.isPrimaryClient,c);Ac(n,t,u.Ma);const f=new aw(e,t,a);return n.ka.set(e,f),n.qa.has(t)?n.qa.get(t).push(e):n.qa.set(t,[e]),u.snapshot}async function dw(n,e,t){const r=ae(n),s=r.ka.get(e),i=r.qa.get(s.targetId);if(i.length>1)return r.qa.set(s.targetId,i.filter(a=>!si(a,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await yo(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Yo(r.remoteStore,s.targetId),Ao(r,s.targetId)}).catch(rr)):(Ao(r,s.targetId),await yo(r.localStore,s.targetId,!0))}async function mw(n,e){const t=ae(n),r=t.ka.get(e),s=t.qa.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Yo(t.remoteStore,r.targetId))}async function pw(n,e,t){const r=Ew(n);try{const s=await function(a,l){const c=ae(a),u=xe.now(),f=l.reduce((y,b)=>y.add(b.key),me());let m,p;return c.persistence.runTransaction("Locally write mutations","readwrite",y=>{let b=Gt(),R=me();return c.ds.getEntries(y,f).next(C=>{b=C,b.forEach((D,F)=>{F.isValidDocument()||(R=R.add(D))})}).next(()=>c.localDocuments.getOverlayedDocuments(y,b)).next(C=>{m=C;const D=[];for(const F of l){const L=V_(F,m.get(F.key).overlayedDocument);L!=null&&D.push(new pn(F.key,L,Ph(L.value.mapValue),gt.exists(!0)))}return c.mutationQueue.addMutationBatch(y,u,D,l)}).next(C=>{p=C;const D=C.applyToLocalDocumentSet(m,R);return c.documentOverlayCache.saveOverlays(y,C.batchId,D)})}).then(()=>({batchId:p.batchId,changes:Bh(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let u=a.Wa[a.currentUser.toKey()];u||(u=new Se(ce)),u=u.insert(l,c),a.Wa[a.currentUser.toKey()]=u}(r,s.batchId,t),await Xr(r,s.changes),await hi(r.remoteStore)}catch(s){const i=na(s,"Failed to persist write");t.reject(i)}}async function Tf(n,e){const t=ae(n);try{const r=await ky(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Ua.get(i);a&&(Ae(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.Ba=!0:s.modifiedDocuments.size>0?Ae(a.Ba):s.removedDocuments.size>0&&(Ae(a.Ba),a.Ba=!1))}),await Xr(t,r,e)}catch(r){await rr(r)}}function vc(n,e,t){const r=ae(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.ka.forEach((i,a)=>{const l=a.view.sa(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=ae(a);c.onlineState=l;let u=!1;c.queries.forEach((f,m)=>{for(const p of m.ta)p.sa(l)&&(u=!0)}),u&&ra(c)}(r.eventManager,e),s.length&&r.La.p_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function gw(n,e,t){const r=ae(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Ua.get(e),i=s&&s.key;if(i){let a=new Se(ne.comparator);a=a.insert(i,nt.newNoDocument(i,ie.min()));const l=me().add(i),c=new li(ie.min(),new Map,new Se(ce),a,l);await Tf(r,c),r.$a=r.$a.remove(i),r.Ua.delete(e),ia(r)}else await yo(r.localStore,e,!1).then(()=>Ao(r,e,t)).catch(rr)}async function _w(n,e){const t=ae(n),r=e.batch.batchId;try{const s=await Cy(t.localStore,e);Rf(t,r,null),If(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Xr(t,s)}catch(s){await rr(s)}}async function yw(n,e,t){const r=ae(n);try{const s=await function(a,l){const c=ae(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next(m=>(Ae(m!==null),f=m.keys(),c.mutationQueue.removeMutationBatch(u,m))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>c.localDocuments.getDocuments(u,f))})}(r.localStore,e);Rf(r,e,t),If(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Xr(r,s)}catch(s){await rr(s)}}function If(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function Rf(n,e,t){const r=ae(n);let s=r.Wa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Wa[r.currentUser.toKey()]=s}}function Ao(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.qa.get(e))n.ka.delete(r),t&&n.La.Ja(r,t);n.qa.delete(e),n.isPrimaryClient&&n.Ka.br(e).forEach(r=>{n.Ka.containsKey(r)||Cf(n,r)})}function Cf(n,e){n.Qa.delete(e.path.canonicalString());const t=n.$a.get(e);t!==null&&(Yo(n.remoteStore,t),n.$a=n.$a.remove(e),n.Ua.delete(t),ia(n))}function Ac(n,e,t){for(const r of t)r instanceof Af?(n.Ka.addReference(r.key,e),ww(n,r)):r instanceof Ef?(K(sa,"Document no longer in limbo: "+r.key),n.Ka.removeReference(r.key,e),n.Ka.containsKey(r.key)||Cf(n,r.key)):se()}function ww(n,e){const t=e.key,r=t.path.canonicalString();n.$a.get(t)||n.Qa.has(r)||(K(sa,"New document in limbo: "+t),n.Qa.add(r),ia(n))}function ia(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const e=n.Qa.values().next().value;n.Qa.delete(e);const t=new ne(ke.fromString(e)),r=n.za.next();n.Ua.set(r,new lw(t)),n.$a=n.$a.insert(t,r),ff(n.remoteStore,new Zt(Nt(jo(t.path)),r,"TargetPurposeLimboResolution",ei.ae))}}async function Xr(n,e,t){const r=ae(n),s=[],i=[],a=[];r.ka.isEmpty()||(r.ka.forEach((l,c)=>{a.push(r.Ha(c,e,t).then(u=>{var f;if((u||t)&&r.isPrimaryClient){const m=u?!u.fromCache:(f=t==null?void 0:t.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,m?"current":"not-current")}if(u){s.push(u);const m=Qo.Yi(c.targetId,u);i.push(m)}}))}),await Promise.all(a),r.La.p_(s),await async function(c,u){const f=ae(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>U.forEach(u,p=>U.forEach(p.Hi,y=>f.persistence.referenceDelegate.addReference(m,p.targetId,y)).next(()=>U.forEach(p.Ji,y=>f.persistence.referenceDelegate.removeReference(m,p.targetId,y)))))}catch(m){if(!sr(m))throw m;K(Xo,"Failed to update sequence numbers: "+m)}for(const m of u){const p=m.targetId;if(!m.fromCache){const y=f.Ts.get(p),b=y.snapshotVersion,R=y.withLastLimboFreeSnapshotVersion(b);f.Ts=f.Ts.insert(p,R)}}}(r.localStore,i))}async function vw(n,e){const t=ae(n);if(!t.currentUser.isEqual(e)){K(sa,"User change. New user:",e.toKey());const r=await lf(t.localStore,e);t.currentUser=e,function(i,a){i.Ga.forEach(l=>{l.forEach(c=>{c.reject(new Z(B.CANCELLED,a))})}),i.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Xr(t,r.Rs)}}function Aw(n,e){const t=ae(n),r=t.Ua.get(e);if(r&&r.Ba)return me().add(r.key);{let s=me();const i=t.qa.get(e);if(!i)return s;for(const a of i){const l=t.ka.get(a);s=s.unionWith(l.view.Sa)}return s}}function kf(n){const e=ae(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Tf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Aw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=gw.bind(null,e),e.La.p_=sw.bind(null,e.eventManager),e.La.Ja=iw.bind(null,e.eventManager),e}function Ew(n){const e=ae(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=_w.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=yw.bind(null,e),e}class $s{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ci(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return Ry(this.persistence,new by,e.initialUser,this.serializer)}Xa(e){return new af($o.ri,this.serializer)}Za(e){return new Ny}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}$s.provider={build:()=>new $s};class bw extends $s{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){Ae(this.persistence.referenceDelegate instanceof Gs);const r=this.persistence.referenceDelegate.garbageCollector;return new ly(r,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?ot.withCacheSize(this.cacheSizeBytes):ot.DEFAULT;return new af(r=>Gs.ri(r,t),this.serializer)}}class Eo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>vc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=vw.bind(null,this.syncEngine),await tw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new rw}()}createDatastore(e){const t=ci(e.databaseInfo.databaseId),r=function(i){return new Fy(i)}(e.databaseInfo);return function(i,a,l,c){return new qy(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,l){return new Wy(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>vc(this.syncEngine,t,0),function(){return mc.D()?new mc:new My}())}createSyncEngine(e,t){return function(s,i,a,l,c,u,f){const m=new cw(s,i,a,l,c,u);return f&&(m.ja=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=ae(s);K(Pn,"RemoteStore shutting down."),i.W_.add(5),await Qr(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Eo.provider={build:()=>new Eo};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):Ht("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn="FirestoreClient";class Tw{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=tt.UNAUTHENTICATED,this.clientId=wh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{K(fn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(K(fn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=na(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Qi(n,e){n.asyncQueue.verifyOperationInProgress(),K(fn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await lf(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Ec(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Iw(n);K(fn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>gc(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>gc(e.remoteStore,s)),n._onlineComponents=e}async function Iw(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){K(fn,"Using user provided OfflineComponentProvider");try{await Qi(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===B.FAILED_PRECONDITION||s.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;$n("Error using user provided cache. Falling back to memory cache: "+t),await Qi(n,new $s)}}else K(fn,"Using default OfflineComponentProvider"),await Qi(n,new bw(void 0));return n._offlineComponents}async function Pf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(K(fn,"Using user provided OnlineComponentProvider"),await Ec(n,n._uninitializedComponentsProvider._online)):(K(fn,"Using default OnlineComponentProvider"),await Ec(n,new Eo))),n._onlineComponents}function Rw(n){return Pf(n).then(e=>e.syncEngine)}async function Vf(n){const e=await Pf(n),t=e.eventManager;return t.onListen=uw.bind(null,e.syncEngine),t.onUnlisten=dw.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=hw.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=mw.bind(null,e.syncEngine),t}function Cw(n,e,t={}){const r=new qt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,u){const f=new Sf({next:p=>{f.su(),a.enqueueAndForget(()=>wf(i,m));const y=p.docs.has(l);!y&&p.fromCache?u.reject(new Z(B.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&p.fromCache&&c&&c.source==="server"?u.reject(new Z(B.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),m=new vf(jo(l.path),f,{includeMetadataChanges:!0,Ta:!0});return yf(i,m)}(await Vf(n),n.asyncQueue,e,t,r)),r.promise}function kw(n,e,t={}){const r=new qt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,u){const f=new Sf({next:p=>{f.su(),a.enqueueAndForget(()=>wf(i,m)),p.fromCache&&c.source==="server"?u.reject(new Z(B.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),m=new vf(l,f,{includeMetadataChanges:!0,Ta:!0});return yf(i,m)}(await Vf(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(n,e,t){if(!t)throw new Z(B.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Sw(n,e,t,r){if(e===!0&&r===!0)throw new Z(B.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Tc(n){if(!ne.isDocumentKey(n))throw new Z(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ic(n){if(ne.isDocumentKey(n))throw new Z(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function oa(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":se()}function Lt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new Z(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=oa(n);throw new Z(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf="firestore.googleapis.com",Rc=!0;class Cc{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Z(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Mf,this.ssl=Rc}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Rc;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=of;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<oy)throw new Z(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Sw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Df((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Z(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Z(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Z(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class fi{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Z(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Z(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cc(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Lg;switch(r.type){case"firstParty":return new jg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Z(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=bc.get(t);r&&(K("ComponentProvider","Removing Datastore"),bc.delete(t),r.terminate())}(this),Promise.resolve()}}function Pw(n,e,t,r={}){var s;const i=(n=Lt(n,fi))._getSettings(),a=Object.assign(Object.assign({},i),{emulatorOptions:n._getEmulatorOptions()}),l=`${e}:${t}`;i.host!==Mf&&i.host!==l&&$n("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},i),{host:l,ssl:!1,emulatorOptions:r});if(!Os(c,a)&&(n._setSettings(c),r.mockUserToken)){let u,f;if(typeof r.mockUserToken=="string")u=r.mockUserToken,f=tt.MOCK_USER;else{u=Qd(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new Z(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new tt(m)}n._authCredentials=new Fg(new _h(u,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new di(this.firestore,e,this._query)}}class ct{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ct(this.firestore,e,this._key)}}class rn extends di{constructor(e,t,r){super(e,t,jo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ct(this.firestore,null,new ne(e))}withConverter(e){return new rn(this.firestore,e,this._path)}}function mi(n,e,...t){if(n=kt(n),Nf("collection","path",e),n instanceof fi){const r=ke.fromString(e,...t);return Ic(r),new rn(n,null,r)}{if(!(n instanceof ct||n instanceof rn))throw new Z(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ke.fromString(e,...t));return Ic(r),new rn(n.firestore,null,r)}}function or(n,e,...t){if(n=kt(n),arguments.length===1&&(e=wh.newId()),Nf("doc","path",e),n instanceof fi){const r=ke.fromString(e,...t);return Tc(r),new ct(n,null,new ne(r))}{if(!(n instanceof ct||n instanceof rn))throw new Z(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ke.fromString(e,...t));return Tc(r),new ct(n.firestore,n instanceof rn?n.converter:null,new ne(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc="AsyncQueue";class Sc{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new uf(this,"async_queue_retry"),this.Su=()=>{const r=$i();r&&K(kc,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=e;const t=$i();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=$i();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new qt;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!sr(e))throw e;K(kc,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw Ht("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.bu=t,t}enqueueAfterDelay(e,t,r){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const s=ta.createAndSchedule(this,e,t,r,i=>this.Fu(i));return this.fu.push(s),s}Du(){this.gu&&se()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class ar extends fi{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Sc,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Sc(e),this._firestoreClient=void 0,await e}}}function Vw(n,e){const t=typeof n=="object"?n:ap(),r=typeof n=="string"?n:Us,s=So(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Kd("firestore");i&&Pw(s,...i)}return s}function pi(n){if(n._terminated)throw new Z(B.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Dw(n),n._firestoreClient}function Dw(n){var e,t,r;const s=n._freezeSettings(),i=function(l,c,u,f){return new n_(l,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Df(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Tw(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this._byteString=e}static fromBase64String(e){try{return new er(Ye.fromBase64String(e))}catch(t){throw new Z(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new er(Ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Z(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Z(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Z(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw=/^__.*__$/;class Mw{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new pn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Kr(e,this.data,t,this.fieldTransforms)}}class Of{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new pn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function xf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw se()}}class ua{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new ua(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ku({path:r,Qu:!1});return s.$u(e),s}Uu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Qs(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(xf(this.Lu)&&Nw.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class Ow{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ci(e)}ju(e,t,r,s=!1){return new ua({Lu:e,methodName:t,zu:r,path:$e.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ha(n){const e=n._freezeSettings(),t=ci(n._databaseId);return new Ow(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Lf(n,e,t,r,s,i={}){const a=n.ju(i.merge||i.mergeFields?2:0,e,t,s);fa("Data must be an object, but it was:",a,r);const l=Bf(r,a);let c,u;if(i.merge)c=new pt(a.fieldMask),u=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const p=bo(e,m,t);if(!a.contains(p))throw new Z(B.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);qf(f,p)||f.push(p)}c=new pt(f),u=a.fieldTransforms.filter(m=>c.covers(m.field))}else c=null,u=a.fieldTransforms;return new Mw(new at(l),c,u)}class gi extends aa{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof gi}}function Ff(n,e,t,r){const s=n.ju(1,e,t);fa("Data must be an object, but it was:",s,r);const i=[],a=at.empty();mn(r,(c,u)=>{const f=da(e,c,t);u=kt(u);const m=s.Uu(f);if(u instanceof gi)i.push(f);else{const p=_i(u,m);p!=null&&(i.push(f),a.set(f,p))}});const l=new pt(i);return new Of(a,l,s.fieldTransforms)}function Uf(n,e,t,r,s,i){const a=n.ju(1,e,t),l=[bo(e,r,t)],c=[s];if(i.length%2!=0)throw new Z(B.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)l.push(bo(e,i[p])),c.push(i[p+1]);const u=[],f=at.empty();for(let p=l.length-1;p>=0;--p)if(!qf(u,l[p])){const y=l[p];let b=c[p];b=kt(b);const R=a.Uu(y);if(b instanceof gi)u.push(y);else{const C=_i(b,R);C!=null&&(u.push(y),f.set(y,C))}}const m=new pt(u);return new Of(f,m,a.fieldTransforms)}function _i(n,e){if(jf(n=kt(n)))return fa("Unsupported field value:",e,n),Bf(n,e);if(n instanceof aa)return function(r,s){if(!xf(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=_i(l,s.Ku(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=kt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return I_(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=xe.fromDate(r);return{timestampValue:Hs(s.serializer,i)}}if(r instanceof xe){const i=new xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Hs(s.serializer,i)}}if(r instanceof la)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof er)return{bytesValue:Jh(s.serializer,r._byteString)};if(r instanceof ct){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Wu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Go(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ca)return function(a,l){return{mapValue:{fields:{[Ch]:{stringValue:Sh},[Bs]:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw l.Wu("VectorValues must only contain numeric values.");return qo(l.serializer,u)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${oa(r)}`)}(n,e)}function Bf(n,e){const t={};return Ah(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):mn(n,(r,s)=>{const i=_i(s,e.qu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function jf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof xe||n instanceof la||n instanceof er||n instanceof ct||n instanceof aa||n instanceof ca)}function fa(n,e,t){if(!jf(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=oa(t);throw r==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+r)}}function bo(n,e,t){if((e=kt(e))instanceof Yr)return e._internalPath;if(typeof e=="string")return da(n,e);throw Qs("Field path arguments must be of type string or ",n,!1,void 0,t)}const xw=new RegExp("[~\\*/\\[\\]]");function da(n,e,t){if(e.search(xw)>=0)throw Qs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Yr(...e.split("."))._internalPath}catch{throw Qs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Qs(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new Z(B.INVALID_ARGUMENT,l+n+c)}function qf(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Lw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Wf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Lw extends zf{data(){return super.data()}}function Wf(n,e){return typeof e=="string"?da(n,e):e instanceof Yr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fw(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new Z(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Uw{convertValue(e,t="none"){switch(un(e)){case 0:return null;case 1:return e.booleanValue;case 2:return De(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(cn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw se()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return mn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[Bs].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>De(a.doubleValue));return new ca(i)}convertGeoPoint(e){return new la(De(e.latitude),De(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ni(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ur(e));default:return null}}convertTimestamp(e){const t=ln(e);return new xe(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ke.fromString(e);Ae(sf(r));const s=new Br(r.get(1),r.get(3)),i=new ne(r.popFirst(5));return s.isEqual(t)||Ht(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Gf extends zf{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ns(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Wf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Ns extends Gf{data(e={}){return super.data(e)}}class Bw{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Sr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Ns(this._firestore,this._userDataWriter,r.key,r,new Sr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Z(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const c=new Ns(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Sr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Ns(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Sr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return l.type!==0&&(u=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:jw(l.type),doc:c,oldIndex:u,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function jw(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return se()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qw(n){n=Lt(n,ct);const e=Lt(n.firestore,ar);return Cw(pi(e),n._key).then(t=>Ww(e,n,t))}class Kf extends Uw{constructor(e){super(),this.firestore=e}convertBytes(e){return new er(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ct(this.firestore,null,t)}}function Ft(n){n=Lt(n,di);const e=Lt(n.firestore,ar),t=pi(e),r=new Kf(e);return Fw(n._query),kw(t,n._query).then(s=>new Bw(e,r,n,s))}function zw(n,e,t){n=Lt(n,ct);const r=Lt(n.firestore,ar),s=Hf(n.converter,e,t);return ma(r,[Lf(ha(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,gt.none())])}function $f(n,e,t,...r){n=Lt(n,ct);const s=Lt(n.firestore,ar),i=ha(s);let a;return a=typeof(e=kt(e))=="string"||e instanceof Yr?Uf(i,"updateDoc",n._key,e,t,r):Ff(i,"updateDoc",n._key,e),ma(s,[a.toMutation(n._key,gt.exists(!0))])}function ma(n,e){return function(r,s){const i=new qt;return r.asyncQueue.enqueueAndForget(async()=>pw(await Rw(r),s,i)),i.promise}(pi(n),e)}function Ww(n,e,t){const r=t.docs.get(e._key),s=new Kf(n);return new Gf(n,s,e._key,r,new Sr(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=ha(e)}set(e,t,r){this._verifyNotCommitted();const s=Xi(e,this._firestore),i=Hf(s.converter,t,r),a=Lf(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(a.toMutation(s._key,gt.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=Xi(e,this._firestore);let a;return a=typeof(t=kt(t))=="string"||t instanceof Yr?Uf(this._dataReader,"WriteBatch.update",i._key,t,r,s):Ff(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(a.toMutation(i._key,gt.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Xi(e,this._firestore);return this._mutations=this._mutations.concat(new zo(t._key,gt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new Z(B.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Xi(n,e){if((n=kt(n)).firestore!==e)throw new Z(B.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gw(n){return pi(n=Lt(n,ar)),new Hw(n,e=>ma(n,e))}(function(e,t=!0){(function(s){nr=s})(op),on(new zt("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new ar(new Ug(r.getProvider("auth-internal")),new qg(a,r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Z(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Br(u.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Dt(Ol,xl,e),Dt(Ol,xl,"esm2017")})();const Kw={apiKey:"AIzaSyCTe1si_Cg2Pkl2X77JpscYfW6KajberCM",authDomain:"drawit-1f620.firebaseapp.com",projectId:"drawit-1f620",storageBucket:"drawit-1f620.firebasestorage.app",messagingSenderId:"513679195329",appId:"1:513679195329:web:d650c7307b461788dc6840",measurementId:"G-P8GR3KFS0H"},$w=Bu(Kw),Jr=Vw($w),Zr=mi(Jr,"games"),Kt=mi(Jr,"users");mi(Jr,"drawings");const Qf=mi(Jr,"words");async function Qw(n){try{const e=Wr(Et),t=n.filter(i=>!e[i]);if(t.length===0)return;const r=await Ft(Kt),s={};r.docs.forEach(i=>{const a=i.data();t.includes(a.name)&&(s[a.name]={...a,id:i.id})}),Et.update(i=>({...i,...s}))}catch(e){console.error("Error loading users:",e)}}async function Xw(){try{return(await Ft(Qf)).docs.map(t=>t.data())}catch(n){console.error("Error loading words:",n)}return[]}async function Yw(n,e){try{const t=or(Qf);await pa(t,{word:n,createdBy:e,createdAt:new Date})}catch(t){console.error("Error creating custom word:",t)}}async function Jw(n){try{const t=(await Ft(Kt)).docs.find(i=>i.data().name===n);if(t){const a={...t.data(),id:t.id};return Xe.set(a),Et.update(l=>({...l,[a.name]:a})),await Yf(a.name),a}const r=or(Kt),s={name:n,coins:0,createdAt:new Date,id:r.id};return await pa(r,s),Xe.set(s),Et.update(i=>({...i,[s.name]:s})),s}catch(e){throw console.error("Error creating/retrieving user:",e),e}}async function Xf(n){try{const e=Wr(Et);if(e[n])return e[n];const r=(await Ft(Kt)).docs.find(s=>s.data().name===n);if(r){const i={...r.data(),id:r.id};return Et.update(a=>({...a,[i.name]:i})),i}return null}catch(e){return console.error("Error getting user:",e),null}}async function Pc(n){try{if(!n){const a=(await Ft(Kt)).docs.map(l=>({...l.data(),id:l.id}));return Et.update(l=>{const c={...l};return a.forEach(u=>{c[u.name]=u}),c}),a}const e=Wr(Et),t=Object.values(e).filter(i=>i.name.toLowerCase().includes(n.toLowerCase()));if(t.length>0)return t;const s=(await Ft(Kt)).docs.map(i=>({...i.data(),id:i.id})).filter(i=>i.name.toLowerCase().includes(n.toLowerCase()));return Et.update(i=>{const a={...i};return s.forEach(l=>{a[l.name]=l}),a}),s}catch(e){return console.error("Error searching users:",e),[]}}async function Yf(n){try{const t=(await Ft(Zr)).docs.filter(r=>{const s=r.data();return s.users&&s.users.includes(n)}).map(r=>({...r.data(),id:r.id}));return Gr.set(t),t}catch(e){return console.error("Error in loadGames:",e),[]}}async function Zw(n){const e=or(Zr),t={id:e.id,users:n,createdAt:new Date,drawings:[]};return await pa(e,t),Rs.set(!1),t}async function yi(n){if(!n.id)return console.error("Cannot update game without ID"),n;try{const e=or(Zr,n.id);return await $f(e,{drawings:n.drawings}),n}catch(e){return console.error("Error updating game:",e),n}}async function Rn(n,e){const t=await Xf(n);if(!t)return console.error("Cannot add coins to user without ID"),t;try{const r=or(Kt,t.id),s=t.coins+e;await $f(r,{coins:s});const i={...t,coins:s};return Xe.set(i),i}catch(r){return console.error("Error adding coins:",r),t}}async function ev(){try{const n=Wr(Xe);if(!n)return!1;const t=(await Ft(Kt)).docs.find(i=>i.data().name===n.name);if(!t)return Xe.set(null),localStorage.removeItem("drawIt-user"),localStorage.removeItem("drawIt-games"),localStorage.removeItem("drawIt-users"),!1;const s={...t.data(),id:t.id};return Xe.set(s),!0}catch(n){return console.error("Error validating user session:",n),!1}}async function Vc(n){try{const e=await qw(or(Zr,n));return e.exists()?{...e.data(),id:e.id}:null}catch(e){return console.error("Error loading game:",e),null}}async function tv(){try{const n=await Ft(Zr),e=[];n.docs.forEach(r=>{const s=r.data();if(s.drawings&&s.drawings.length>0){const i=s.drawings.map(a=>({...a,gameId:r.id}));for(const a of i)a.guessedBy=s.users.find(l=>l!==a.artist)??"";e.push(...i)}});const t=e.sort((r,s)=>{function i(c){return c?c instanceof Date?c:typeof c.toDate=="function"?c.toDate():typeof c=="string"?new Date(c):new Date(c):new Date(0)}const a=i(r.createdAt);return i(s.createdAt).getTime()-a.getTime()});return console.log(t),t.slice(0,100)}catch(n){return console.error("Error fetching recent drawings:",n),[]}}async function pa(n,e,t){const r=Wr(Xe),s={...e,_middleware:{domain:window.location.hostname,name:(r==null?void 0:r.name)||null,id:(r==null?void 0:r.id)||null}};return zw(n,s,t)}var ga={};(function n(e,t,r,s){var i=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",l=function(){if(!e.OffscreenCanvas)return!1;var M=new OffscreenCanvas(1,1),S=M.getContext("2d");S.fillRect(0,0,1,1);var Y=M.transferToImageBitmap();try{S.createPattern(Y,"no-repeat")}catch{return!1}return!0}();function c(){}function u(M){var S=t.exports.Promise,Y=S!==void 0?S:e.Promise;return typeof Y=="function"?new Y(M):(M(c,c),null)}var f=function(M,S){return{transform:function(Y){if(M)return Y;if(S.has(Y))return S.get(Y);var X=new OffscreenCanvas(Y.width,Y.height),le=X.getContext("2d");return le.drawImage(Y,0,0),S.set(Y,X),X},clear:function(){S.clear()}}}(l,new Map),m=function(){var M=Math.floor(16.666666666666668),S,Y,X={},le=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(S=function(oe){var ue=Math.random();return X[ue]=requestAnimationFrame(function te(he){le===he||le+M-1<he?(le=he,delete X[ue],oe()):X[ue]=requestAnimationFrame(te)}),ue},Y=function(oe){X[oe]&&cancelAnimationFrame(X[oe])}):(S=function(oe){return setTimeout(oe,M)},Y=function(oe){return clearTimeout(oe)}),{frame:S,cancel:Y}}(),p=function(){var M,S,Y={};function X(le){function oe(ue,te){le.postMessage({options:ue||{},callback:te})}le.init=function(te){var he=te.transferControlToOffscreen();le.postMessage({canvas:he},[he])},le.fire=function(te,he,Ee){if(S)return oe(te,null),S;var be=Math.random().toString(36).slice(2);return S=u(function(ve){function Ie(Ve){Ve.data.callback===be&&(delete Y[be],le.removeEventListener("message",Ie),S=null,f.clear(),Ee(),ve())}le.addEventListener("message",Ie),oe(te,be),Y[be]=Ie.bind(null,{data:{callback:be}})}),S},le.reset=function(){le.postMessage({reset:!0});for(var te in Y)Y[te](),delete Y[te]}}return function(){if(M)return M;if(!r&&i){var le=["var CONFETTI, SIZE = {}, module = {};","("+n.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{M=new Worker(URL.createObjectURL(new Blob([le])))}catch(oe){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",oe),null}X(M)}return M}}(),y={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function b(M,S){return S?S(M):M}function R(M){return M!=null}function C(M,S,Y){return b(M&&R(M[S])?M[S]:y[S],Y)}function D(M){return M<0?0:Math.floor(M)}function F(M,S){return Math.floor(Math.random()*(S-M))+M}function L(M){return parseInt(M,16)}function O(M){return M.map(G)}function G(M){var S=String(M).replace(/[^0-9a-f]/gi,"");return S.length<6&&(S=S[0]+S[0]+S[1]+S[1]+S[2]+S[2]),{r:L(S.substring(0,2)),g:L(S.substring(2,4)),b:L(S.substring(4,6))}}function H(M){var S=C(M,"origin",Object);return S.x=C(S,"x",Number),S.y=C(S,"y",Number),S}function A(M){M.width=document.documentElement.clientWidth,M.height=document.documentElement.clientHeight}function _(M){var S=M.getBoundingClientRect();M.width=S.width,M.height=S.height}function v(M){var S=document.createElement("canvas");return S.style.position="fixed",S.style.top="0px",S.style.left="0px",S.style.pointerEvents="none",S.style.zIndex=M,S}function T(M,S,Y,X,le,oe,ue,te,he){M.save(),M.translate(S,Y),M.rotate(oe),M.scale(X,le),M.arc(0,0,1,ue,te,he),M.restore()}function I(M){var S=M.angle*(Math.PI/180),Y=M.spread*(Math.PI/180);return{x:M.x,y:M.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:M.startVelocity*.5+Math.random()*M.startVelocity,angle2D:-S+(.5*Y-Math.random()*Y),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:M.color,shape:M.shape,tick:0,totalTicks:M.ticks,decay:M.decay,drift:M.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:M.gravity*3,ovalScalar:.6,scalar:M.scalar,flat:M.flat}}function P(M,S){S.x+=Math.cos(S.angle2D)*S.velocity+S.drift,S.y+=Math.sin(S.angle2D)*S.velocity+S.gravity,S.velocity*=S.decay,S.flat?(S.wobble=0,S.wobbleX=S.x+10*S.scalar,S.wobbleY=S.y+10*S.scalar,S.tiltSin=0,S.tiltCos=0,S.random=1):(S.wobble+=S.wobbleSpeed,S.wobbleX=S.x+10*S.scalar*Math.cos(S.wobble),S.wobbleY=S.y+10*S.scalar*Math.sin(S.wobble),S.tiltAngle+=.1,S.tiltSin=Math.sin(S.tiltAngle),S.tiltCos=Math.cos(S.tiltAngle),S.random=Math.random()+2);var Y=S.tick++/S.totalTicks,X=S.x+S.random*S.tiltCos,le=S.y+S.random*S.tiltSin,oe=S.wobbleX+S.random*S.tiltCos,ue=S.wobbleY+S.random*S.tiltSin;if(M.fillStyle="rgba("+S.color.r+", "+S.color.g+", "+S.color.b+", "+(1-Y)+")",M.beginPath(),a&&S.shape.type==="path"&&typeof S.shape.path=="string"&&Array.isArray(S.shape.matrix))M.fill(At(S.shape.path,S.shape.matrix,S.x,S.y,Math.abs(oe-X)*.1,Math.abs(ue-le)*.1,Math.PI/10*S.wobble));else if(S.shape.type==="bitmap"){var te=Math.PI/10*S.wobble,he=Math.abs(oe-X)*.1,Ee=Math.abs(ue-le)*.1,be=S.shape.bitmap.width*S.scalar,ve=S.shape.bitmap.height*S.scalar,Ie=new DOMMatrix([Math.cos(te)*he,Math.sin(te)*he,-Math.sin(te)*Ee,Math.cos(te)*Ee,S.x,S.y]);Ie.multiplySelf(new DOMMatrix(S.shape.matrix));var Ve=M.createPattern(f.transform(S.shape.bitmap),"no-repeat");Ve.setTransform(Ie),M.globalAlpha=1-Y,M.fillStyle=Ve,M.fillRect(S.x-be/2,S.y-ve/2,be,ve),M.globalAlpha=1}else if(S.shape==="circle")M.ellipse?M.ellipse(S.x,S.y,Math.abs(oe-X)*S.ovalScalar,Math.abs(ue-le)*S.ovalScalar,Math.PI/10*S.wobble,0,2*Math.PI):T(M,S.x,S.y,Math.abs(oe-X)*S.ovalScalar,Math.abs(ue-le)*S.ovalScalar,Math.PI/10*S.wobble,0,2*Math.PI);else if(S.shape==="star")for(var fe=Math.PI/2*3,qe=4*S.scalar,st=8*S.scalar,ht=S.x,Rt=S.y,Pt=5,it=Math.PI/Pt;Pt--;)ht=S.x+Math.cos(fe)*st,Rt=S.y+Math.sin(fe)*st,M.lineTo(ht,Rt),fe+=it,ht=S.x+Math.cos(fe)*qe,Rt=S.y+Math.sin(fe)*qe,M.lineTo(ht,Rt),fe+=it;else M.moveTo(Math.floor(S.x),Math.floor(S.y)),M.lineTo(Math.floor(S.wobbleX),Math.floor(le)),M.lineTo(Math.floor(oe),Math.floor(ue)),M.lineTo(Math.floor(X),Math.floor(S.wobbleY));return M.closePath(),M.fill(),S.tick<S.totalTicks}function w(M,S,Y,X,le){var oe=S.slice(),ue=M.getContext("2d"),te,he,Ee=u(function(be){function ve(){te=he=null,ue.clearRect(0,0,X.width,X.height),f.clear(),le(),be()}function Ie(){r&&!(X.width===s.width&&X.height===s.height)&&(X.width=M.width=s.width,X.height=M.height=s.height),!X.width&&!X.height&&(Y(M),X.width=M.width,X.height=M.height),ue.clearRect(0,0,X.width,X.height),oe=oe.filter(function(Ve){return P(ue,Ve)}),oe.length?te=m.frame(Ie):ve()}te=m.frame(Ie),he=ve});return{addFettis:function(be){return oe=oe.concat(be),Ee},canvas:M,promise:Ee,reset:function(){te&&m.cancel(te),he&&he()}}}function W(M,S){var Y=!M,X=!!C(S||{},"resize"),le=!1,oe=C(S,"disableForReducedMotion",Boolean),ue=i&&!!C(S||{},"useWorker"),te=ue?p():null,he=Y?A:_,Ee=M&&te?!!M.__confetti_initialized:!1,be=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,ve;function Ie(fe,qe,st){for(var ht=C(fe,"particleCount",D),Rt=C(fe,"angle",Number),Pt=C(fe,"spread",Number),it=C(fe,"startVelocity",Number),es=C(fe,"decay",Number),vi=C(fe,"gravity",Number),ur=C(fe,"drift",Number),Nn=C(fe,"colors",O),ts=C(fe,"ticks",Number),Me=C(fe,"shapes"),He=C(fe,"scalar"),Mn=!!C(fe,"flat"),hr=H(fe),fr=ht,dr=[],_n=M.width*hr.x,ns=M.height*hr.y;fr--;)dr.push(I({x:_n,y:ns,angle:Rt,spread:Pt,startVelocity:it,color:Nn[fr%Nn.length],shape:Me[F(0,Me.length)],ticks:ts,decay:es,gravity:vi,drift:ur,scalar:He,flat:Mn}));return ve?ve.addFettis(dr):(ve=w(M,dr,he,qe,st),ve.promise)}function Ve(fe){var qe=oe||C(fe,"disableForReducedMotion",Boolean),st=C(fe,"zIndex",Number);if(qe&&be)return u(function(it){it()});Y&&ve?M=ve.canvas:Y&&!M&&(M=v(st),document.body.appendChild(M)),X&&!Ee&&he(M);var ht={width:M.width,height:M.height};te&&!Ee&&te.init(M),Ee=!0,te&&(M.__confetti_initialized=!0);function Rt(){if(te){var it={getBoundingClientRect:function(){if(!Y)return M.getBoundingClientRect()}};he(it),te.postMessage({resize:{width:it.width,height:it.height}});return}ht.width=ht.height=null}function Pt(){ve=null,X&&(le=!1,e.removeEventListener("resize",Rt)),Y&&M&&(document.body.contains(M)&&document.body.removeChild(M),M=null,Ee=!1)}return X&&!le&&(le=!0,e.addEventListener("resize",Rt,!1)),te?te.fire(fe,ht,Pt):Ie(fe,ht,Pt)}return Ve.reset=function(){te&&te.reset(),ve&&ve.reset()},Ve}var we;function St(){return we||(we=W(null,{useWorker:!0,resize:!0})),we}function At(M,S,Y,X,le,oe,ue){var te=new Path2D(M),he=new Path2D;he.addPath(te,new DOMMatrix(S));var Ee=new Path2D;return Ee.addPath(he,new DOMMatrix([Math.cos(ue)*le,Math.sin(ue)*le,-Math.sin(ue)*oe,Math.cos(ue)*oe,Y,X])),Ee}function gn(M){if(!a)throw new Error("path confetti are not supported in this browser");var S,Y;typeof M=="string"?S=M:(S=M.path,Y=M.matrix);var X=new Path2D(S),le=document.createElement("canvas"),oe=le.getContext("2d");if(!Y){for(var ue=1e3,te=ue,he=ue,Ee=0,be=0,ve,Ie,Ve=0;Ve<ue;Ve+=2)for(var fe=0;fe<ue;fe+=2)oe.isPointInPath(X,Ve,fe,"nonzero")&&(te=Math.min(te,Ve),he=Math.min(he,fe),Ee=Math.max(Ee,Ve),be=Math.max(be,fe));ve=Ee-te,Ie=be-he;var qe=10,st=Math.min(qe/ve,qe/Ie);Y=[st,0,0,st,-Math.round(ve/2+te)*st,-Math.round(Ie/2+he)*st]}return{type:"path",path:S,matrix:Y}}function cr(M){var S,Y=1,X="#000000",le='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof M=="string"?S=M:(S=M.text,Y="scalar"in M?M.scalar:Y,le="fontFamily"in M?M.fontFamily:le,X="color"in M?M.color:X);var oe=10*Y,ue=""+oe+"px "+le,te=new OffscreenCanvas(oe,oe),he=te.getContext("2d");he.font=ue;var Ee=he.measureText(S),be=Math.ceil(Ee.actualBoundingBoxRight+Ee.actualBoundingBoxLeft),ve=Math.ceil(Ee.actualBoundingBoxAscent+Ee.actualBoundingBoxDescent),Ie=2,Ve=Ee.actualBoundingBoxLeft+Ie,fe=Ee.actualBoundingBoxAscent+Ie;be+=Ie+Ie,ve+=Ie+Ie,te=new OffscreenCanvas(be,ve),he=te.getContext("2d"),he.font=ue,he.fillStyle=X,he.fillText(S,Ve,fe);var qe=1/Y;return{type:"bitmap",bitmap:te.transferToImageBitmap(),matrix:[qe,0,0,qe,-be*qe/2,-ve*qe/2]}}t.exports=function(){return St().apply(this,arguments)},t.exports.reset=function(){St().reset()},t.exports.create=W,t.exports.shapeFromPath=gn,t.exports.shapeFromText=cr})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),ga,!1);const nv=ga.exports;ga.exports.create;function Jf(n){const e=document.createElement("div");e.className="toast toast-top toast-end",e.innerHTML=`
        <div class="alert bg-primary/80 text-black border-2 border-primary shadow-lg">
            <span>${n}</span>
        </div>
    `,document.body.appendChild(e),setTimeout(()=>{e.remove()},5e3),nv({particleCount:100,spread:70,origin:{y:.6}})}let rv=["apple","airplane","alligator","anchor","angel","antelope","apron","armchair","arrow","artist","avocado","axe","baby","backpack","bacon","badger","balloon","banana","bandage","banjo","barn","barrel","baseball","basket","bathtub","battery","beach","bear","beaver","bedroom","bee","beetle","bell","belt","bench","bicycle","binoculars","bird","birthday","blender","blimp","block","blouse","boat","bomb","book","boomerang","boot","bottle","bouquet","bow","boxer","bracelet","brain","branch","bread","bridge","broccoli","broom","brush","bucket","bulldozer","bullet","bus","bush","butterfly","button","cactus","cage","cake","calculator","camel","camera","campfire","can","candle","cannon","canoe","cap","cape","car","carrot","cart","castle","cat","caterpillar","cave","ceiling","cellphone","chainsaw","chair","chalk","champion","cheese","cherry","chest","chicken","chimney","church","circle","claw","cliff","clock","cloud","clown","coat","cobweb","coin","comet","computer","cookie","couch","cow","crab","crayon","cream","crocodile","crown","cruise","cupcake","curtain","cushion","dagger","daisy","dance","dart","deer","desk","desert","diamond","dice","dinosaur","dish","diver","dog","doll","dolphin","donkey","door","doormat","dragon","drawer","drill","drone","drum","duck","eagle","ear","earthquake","eggplant","electricity","elephant","elevator","engine","envelope","eraser","explosion","eyeglasses","face","fan","farm","feather","fence","ferret","fire","firefighter","fireplace","firetruck","fish","fishing","flag","flamingo","flashlight","flood","floor","flower","flute","fly","folder","football","fork","fountain","fox","fridge","frog","galaxy","garage","garden","gargoyle","gate","ghost","giraffe","glacier","glider","glove","goat","goggles","goldfish","golf","gorilla","grapes","grass","grill","guitar","hammer","hamster","handcuffs","handle","hanger","harp","hat","headphones","hedgehog","helicopter","helmet","hill","hippo","hive","hook","horn","horse","hospital","hotdog","house","hovercraft","hug","hurdle","hurricane","iceberg","icicle","igloo","iguana","ink","insect","iron","island","jacket","jail","jellyfish","jigsaw","jockey","jungle","kangaroo","kettle","key","keyboard","kick","kidney","kite","kitten","knee","knife","koala","ladder","lamp","lantern","laptop","lasso","laundry","leaf","leash","leg","lemon","leopard","letter","library","lightbulb","lighthouse","lightning","limo","lion","lips","lizard","lock","locust","lollipop","magnet","mailbox","map","maracas","mask","match","meatball","megaphone","mermaid","meteor","microscope","microwave","milk","mirror","moat","mole","monkey","monster","moon","mosquito","motorcycle","mountain","mouse","mower","mug","mummy","mushroom","music","nail","needle","nest","net","ninja","noodle","notebook","nose","notepad","nun","nut","oasis","ocean","octopus","oil","onion","ostrich","otter","oven","owl","oxygen","paddle","pajamas","panda","panther","parachute","parrot","party","passport","peacock","peanut","pear","peas","pencil","penguin","pepper","perfume","phone","piano","picture","pig","pigeon","pill","pillow","pineapple","pipe","pirate","pizza","planet","plate","plow","plug","plumber","pocket","pool","popcorn","postcard","poster","potato","printer","pudding","puppet","puppy","pyramid","quail","quartz","queen","quilt","rabbit","raccoon","radio","raft","rain","rainbow","rake","rat","raven","razor","reindeer","remote","ribbon","ring","robot","rocket","roof","rope","rose","ruler","saddle","sailboat","salad","sand","sandcastle","satellite","saw","scarf","school","scissors","scorpion","screw","seal","seesaw","shampoo","shark","sheep","shelf","shell","ship","shoe","shovel","shower","shrimp","sink","skateboard","skeleton","ski","skirt","skunk","sled","slide","slime","sloth","slug","smoke","snail","snake","sneeze","snow","snowball","snowflake","snowman","sock","sofa","soldier","spaceship","spaghetti","spark","speaker","spear","spectacles","spider","spoon","spring","spy","squirrel","stairs","starfish","statue","steak","stethoscope","stomach","stool","stove","straw","street","string","submarine","suitcase","sun","sunglasses","sunset","surfboard","surgeon","swamp","swan","sweater","swing","sword","table","tail","tape","tarp","taxi","teacup","teacher","teapot","telescope","tent","thermometer","throne","ticket","tie","tiger","toad","toaster","toilet","toothbrush","toothpaste","torch","tornado","towel","tractor","traffic","train","trampoline","trash","treasure","triangle","tricycle","troll","trophy","truck","trumpet","tuba","turtle","tusk","tv","typewriter","umbrella","unicorn","urn","vacuum","vampire","vase","vegetable","village","vine","violin","volcano","vulture","wagon","wall","wallet","wardrobe","watch","waterfall","wave","web","whale","wheelbarrow","whistle","wig","window","windmill","wing","wolf","worm","wrench","xylophone","yacht","yak","yo-yo","zebra","zoo"];function _a(n,e){return n.drawings.filter(r=>!r.guessed)[0]||null}async function sv(n,e,t){const r=_a(n,e.name);if(!r)return;const s=t.toLowerCase().trim(),i=r.secretWord.toLowerCase().trim();let a=!1;return s===i?(a=!0,r.guessed=!0,r.guessedBy=e.name,await Rn(e.name,r.coins),await Rn(r.artist,r.coins),Jf(`It was ${r.secretWord}! You both get ${r.coins} coins!`)):r.guesses.includes(t)||r.guesses.push(t),await yi(n),a}async function Dc(n){const e=[];for(const s of rv)e.push({secretWord:s,coins:0});let t=await Xw();e.push(...t.map(s=>({secretWord:s.word,coins:0,createdBy:s.createdBy,createdAt:s.createdAt})));const r=e.sort(()=>Math.random()-.5).slice(0,n);for(let s=0;s<r.length;s++)r[s].coins=s+1;return r}function Ts(n,e){const t=_a(n);if(!t){if(n.drawings.length===0)return n.users[0]===e?"draw":"waiting";const r=[...n.drawings].reverse().find(l=>l.guessed);if(!r)return n.users[0]===e?"draw":"waiting";const i=(n.users.indexOf(r.artist)+1)%n.users.length;return n.users[i]===e?"draw":"waiting"}return t.artist===e?"waiting":"guess"}function iv(n){return{...n,hintPurchased:n.hintPurchased??!1,superHintPurchased:n.superHintPurchased??!1}}function Nc(n){return`The word is ${n.secretWord.length} letters long`}function Mc(n){const e=n.secretWord.split("");for(let t=e.length-1;t>0;t--){const r=Math.floor(Math.random()*(t+1));[e[t],e[r]]=[e[r],e[t]]}return`Letters: ${e.join(" · ").toUpperCase()}`}function Xs(n){return n?n instanceof Date?n.getTime():typeof n.toDate=="function"?n.toDate().getTime():typeof n=="string"?new Date(n).getTime():new Date(n).getTime():0}async function ov(n,e,t){if(t.coins<5||e.hintPurchased)return!1;const r=n.drawings.findIndex(s=>s.artist===e.artist&&Xs(s.createdAt)===Xs(e.createdAt));return r===-1?!1:(n.drawings[r]={...e,hintPurchased:!0},await yi(n),!0)}async function av(n,e,t){if(t.coins<10||!e.hintPurchased||e.superHintPurchased)return!1;const r=n.drawings.findIndex(s=>s.artist===e.artist&&Xs(s.createdAt)===Xs(e.createdAt));return r===-1?!1:(n.drawings[r]={...e,superHintPurchased:!0},await yi(n),!0)}const lr="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAASUExURQAAAAYGCP/4Vf/QLPGZEf///5e4X0EAAAABdFJOUwBA5thmAAAAAWJLR0QF+G/pxwAAAAd0SU1FB+kFEQMBEaw38IoAAABMSURBVEjHY2CAA0EsgAEbGFVIP4VgQSUsAF31qEL6KUSoMcYCXEAAonpU4ajCUYWjCkcVjiokQyGisnHBArDWXKMK6adwKLQfR5pCAFjAgTiNHXoCAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI1LTA1LTE3VDAzOjAwOjU0KzAwOjAwAqVpBwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNS0wNS0xN1QwMzowMDo1NCswMDowMHP40bsAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjUtMDUtMTdUMDM6MDE6MTcrMDA6MDB+jY89AAAAAElFTkSuQmCC";function Oc(n){let e,t=n[0][0].toUpperCase()+"",r;return{c(){e=N("div"),r=re(t),E(e,"class","w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold")},m(s,i){q(s,e,i),k(e,r)},p(s,i){i&1&&t!==(t=s[0][0].toUpperCase()+"")&&ye(r,t)},d(s){s&&j(e)}}}function xc(n){let e,t,r,s,i;return{c(){e=N("span"),t=re(n[1]),r=$(),s=N("img"),Tt(s.src,i=lr)||E(s,"src",i),E(s,"class","w-4 h-4"),E(s,"alt","coins")},m(a,l){q(a,e,l),k(e,t),q(a,r,l),q(a,s,l)},p(a,l){l&2&&ye(t,a[1])},d(a){a&&(j(e),j(r),j(s))}}}function Lc(n){let e,t,r;return{c(){e=re("· "),t=N("span"),r=re(n[3]),E(t,"class","text-xs text-black/60")},m(s,i){q(s,e,i),q(s,t,i),k(t,r)},p(s,i){i&8&&ye(r,s[3])},d(s){s&&(j(e),j(t))}}}function Fc(n){let e,t;return{c(){e=Yt("svg"),t=Yt("path"),E(t,"fill-rule","evenodd"),E(t,"d","M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"),E(t,"clip-rule","evenodd"),E(e,"xmlns","http://www.w3.org/2000/svg"),E(e,"class","h-5 w-5 text-gray-400"),E(e,"viewBox","0 0 20 20"),E(e,"fill","currentColor")},m(r,s){q(r,e,s),k(e,t)},d(r){r&&j(e)}}}function lv(n){let e,t,r,s,i,a,l,c,u,f,m,p,y,b=n[2]&&Oc(n),R=n[1]!==null&&xc(n),C=n[3]&&Lc(n),D=n[4]&&Fc();return{c(){e=N("button"),t=N("div"),b&&b.c(),r=$(),s=N("div"),i=N("span"),a=re(n[0]),l=$(),c=N("div"),R&&R.c(),u=$(),C&&C.c(),f=$(),D&&D.c(),E(i,"class","font-medium text-black"),E(c,"class","flex items-center gap-1 text-sm text-black/60"),E(s,"class","flex flex-col items-start"),E(t,"class","flex items-center gap-3"),E(e,"class","flex items-center justify-between w-full p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-primary/20 transition-colors active:bg-gray-50"),e.disabled=m=n[4]===null,Jt(e,"cursor-pointer",n[4]!==null),Jt(e,"cursor-default",n[4]===null)},m(F,L){q(F,e,L),k(e,t),b&&b.m(t,null),k(t,r),k(t,s),k(s,i),k(i,a),k(s,l),k(s,c),R&&R.m(c,null),k(c,u),C&&C.m(c,null),k(e,f),D&&D.m(e,null),p||(y=de(e,"click",n[5]),p=!0)},p(F,[L]){F[2]?b?b.p(F,L):(b=Oc(F),b.c(),b.m(t,r)):b&&(b.d(1),b=null),L&1&&ye(a,F[0]),F[1]!==null?R?R.p(F,L):(R=xc(F),R.c(),R.m(c,u)):R&&(R.d(1),R=null),F[3]?C?C.p(F,L):(C=Lc(F),C.c(),C.m(c,null)):C&&(C.d(1),C=null),F[4]?D||(D=Fc(),D.c(),D.m(e,null)):D&&(D.d(1),D=null),L&16&&m!==(m=F[4]===null)&&(e.disabled=m),L&16&&Jt(e,"cursor-pointer",F[4]!==null),L&16&&Jt(e,"cursor-default",F[4]===null)},i:J,o:J,d(F){F&&j(e),b&&b.d(),R&&R.d(),C&&C.d(),D&&D.d(),p=!1,y()}}}function cv(n,e,t){let{name:r}=e,{coins:s=null}=e,{showAvatar:i=!1}=e,{subtitle:a=null}=e,{onClick:l=null}=e;const c=()=>l==null?void 0:l();return n.$$set=u=>{"name"in u&&t(0,r=u.name),"coins"in u&&t(1,s=u.coins),"showAvatar"in u&&t(2,i=u.showAvatar),"subtitle"in u&&t(3,a=u.subtitle),"onClick"in u&&t(4,l=u.onClick)},[r,s,i,a,l,c]}class ya extends vt{constructor(e){super(),wt(this,e,cv,lv,ut,{name:0,coins:1,showAvatar:2,subtitle:3,onClick:4})}}function Uc(n,e,t){const r=n.slice();return r[11]=e[t],r}function uv(n){let e,t,r=Re(n[0].users.filter(n[9])),s=[];for(let a=0;a<r.length;a+=1)s[a]=Bc(Uc(n,r,a));const i=a=>ee(s[a],1,1,()=>{s[a]=null});return{c(){for(let a=0;a<s.length;a+=1)s[a].c();e=It()},m(a,l){for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(a,l);q(a,e,l),t=!0},p(a,l){if(l&99){r=Re(a[0].users.filter(a[9]));let c;for(c=0;c<r.length;c+=1){const u=Uc(a,r,c);s[c]?(s[c].p(u,l),Q(s[c],1)):(s[c]=Bc(u),s[c].c(),Q(s[c],1),s[c].m(e.parentNode,e))}for(Fe(),c=r.length;c<s.length;c+=1)i(c);Ue()}},i(a){if(!t){for(let l=0;l<r.length;l+=1)Q(s[l]);t=!0}},o(a){s=s.filter(Boolean);for(let l=0;l<s.length;l+=1)ee(s[l]);t=!1},d(a){a&&j(e),_t(s,a)}}}function hv(n){let e,t,r;return t=new ya({props:{name:n[2],coins:n[3],onClick:n[6]}}),{c(){e=N("div"),We(t.$$.fragment),E(e,"class","flex flex-row text-start w-full")},m(s,i){q(s,e,i),Be(t,e,null),r=!0},p(s,i){const a={};i&4&&(a.name=s[2]),i&8&&(a.coins=s[3]),t.$set(a)},i(s){r||(Q(t.$$.fragment,s),r=!0)},o(s){ee(t.$$.fragment,s),r=!1},d(s){s&&j(e),je(t)}}}function fv(n){let e,t=n[11]+"",r;return{c(){e=N("span"),r=re(t),E(e,"class","font-bold text-black")},m(s,i){q(s,e,i),k(e,r)},p(s,i){i&3&&t!==(t=s[11]+"")&&ye(r,t)},i:J,o:J,d(s){s&&j(e)}}}function dv(n){let e,t;return e=new ya({props:{name:n[11],coins:n[5][n[11]].coins,subtitle:`${n[0].drawings.length} drawing${n[0].drawings.length===1?"":"s"}`,onClick:n[6]}}),{c(){We(e.$$.fragment)},m(r,s){Be(e,r,s),t=!0},p(r,s){const i={};s&3&&(i.name=r[11]),s&35&&(i.coins=r[5][r[11]].coins),s&1&&(i.subtitle=`${r[0].drawings.length} drawing${r[0].drawings.length===1?"":"s"}`),e.$set(i)},i(r){t||(Q(e.$$.fragment,r),t=!0)},o(r){ee(e.$$.fragment,r),t=!1},d(r){je(e,r)}}}function Bc(n){let e,t,r,s,i;const a=[dv,fv],l=[];function c(u,f){return u[5][u[11]]?0:1}return t=c(n),r=l[t]=a[t](n),{c(){e=N("div"),r.c(),s=$(),E(e,"class","w-full flex flex-col items-center justify-center gap-0.5")},m(u,f){q(u,e,f),l[t].m(e,null),k(e,s),i=!0},p(u,f){let m=t;t=c(u),t===m?l[t].p(u,f):(Fe(),ee(l[m],1,1,()=>{l[m]=null}),Ue(),r=l[t],r?r.p(u,f):(r=l[t]=a[t](u),r.c()),Q(r,1),r.m(e,s))},i(u){i||(Q(r),i=!0)},o(u){ee(r),i=!1},d(u){u&&j(e),l[t].d()}}}function mv(n){let e,t,r,s;const i=[hv,uv],a=[];function l(c,u){return c[4]?0:c[0]?1:-1}return~(t=l(n))&&(r=a[t]=i[t](n)),{c(){e=N("div"),r&&r.c(),E(e,"class","cursor-pointer py-1 rounded-lg transition-colors w-full mb-2 flex flex-col gap-2 items-center justify-between"),Jt(e,"bg-primary-10",!n[4]),Jt(e,"bg-secondary-10",n[4])},m(c,u){q(c,e,u),~t&&a[t].m(e,null),s=!0},p(c,[u]){let f=t;t=l(c),t===f?~t&&a[t].p(c,u):(r&&(Fe(),ee(a[f],1,1,()=>{a[f]=null}),Ue()),~t?(r=a[t],r?r.p(c,u):(r=a[t]=i[t](c),r.c()),Q(r,1),r.m(e,null)):r=null),(!s||u&16)&&Jt(e,"bg-primary-10",!c[4]),(!s||u&16)&&Jt(e,"bg-secondary-10",c[4])},i(c){s||(Q(r),s=!0)},o(c){ee(r),s=!1},d(c){c&&j(e),~t&&a[t].d()}}}function pv(n,e,t){let r,s;Qe(n,mt,b=>t(10,r=b)),Qe(n,Et,b=>t(5,s=b));let{game:i=null}=e,{currentUserName:a=""}=e,{user:l=""}=e,{coins:c=null}=e,{isNewGame:u=!1}=e,{onClick:f=null}=e,{navigate:m=null}=e;function p(){u&&f?f():i&&m&&(dt(mt,r=i,r),m("home"))}const y=b=>b!==a;return n.$$set=b=>{"game"in b&&t(0,i=b.game),"currentUserName"in b&&t(1,a=b.currentUserName),"user"in b&&t(2,l=b.user),"coins"in b&&t(3,c=b.coins),"isNewGame"in b&&t(4,u=b.isNewGame),"onClick"in b&&t(7,f=b.onClick),"navigate"in b&&t(8,m=b.navigate)},[i,a,l,c,u,s,p,f,m,y]}class gv extends vt{constructor(e){super(),wt(this,e,pv,mv,ut,{game:0,currentUserName:1,user:2,coins:3,isNewGame:4,onClick:7,navigate:8})}}function jc(n,e,t){const r=n.slice();return r[5]=e[t],r}function qc(n){let e,t;return e=new gv({props:{game:n[5],currentUserName:n[2],navigate:n[4]}}),{c(){We(e.$$.fragment)},m(r,s){Be(e,r,s),t=!0},p(r,s){const i={};s&2&&(i.game=r[5]),s&4&&(i.currentUserName=r[2]),s&16&&(i.navigate=r[4]),e.$set(i)},i(r){t||(Q(e.$$.fragment,r),t=!0)},o(r){ee(e.$$.fragment,r),t=!1},d(r){je(e,r)}}}function _v(n){let e,t,r,s,i,a=Re(n[1]),l=[];for(let u=0;u<a.length;u+=1)l[u]=qc(jc(n,a,u));const c=u=>ee(l[u],1,1,()=>{l[u]=null});return{c(){e=N("div"),t=N("h3"),r=re(n[0]),s=$();for(let u=0;u<l.length;u+=1)l[u].c();E(t,"class",n[3]),E(e,"class","flex flex-col gap-0")},m(u,f){q(u,e,f),k(e,t),k(t,r),k(e,s);for(let m=0;m<l.length;m+=1)l[m]&&l[m].m(e,null);i=!0},p(u,[f]){if((!i||f&1)&&ye(r,u[0]),(!i||f&8)&&E(t,"class",u[3]),f&22){a=Re(u[1]);let m;for(m=0;m<a.length;m+=1){const p=jc(u,a,m);l[m]?(l[m].p(p,f),Q(l[m],1)):(l[m]=qc(p),l[m].c(),Q(l[m],1),l[m].m(e,null))}for(Fe(),m=a.length;m<l.length;m+=1)c(m);Ue()}},i(u){if(!i){for(let f=0;f<a.length;f+=1)Q(l[f]);i=!0}},o(u){l=l.filter(Boolean);for(let f=0;f<l.length;f+=1)ee(l[f]);i=!1},d(u){u&&j(e),_t(l,u)}}}function yv(n,e,t){let{title:r}=e,{games:s}=e,{currentUserName:i}=e,{titleClass:a="text-sm font-semibold text-primary"}=e,{navigate:l=null}=e;return n.$$set=c=>{"title"in c&&t(0,r=c.title),"games"in c&&t(1,s=c.games),"currentUserName"in c&&t(2,i=c.currentUserName),"titleClass"in c&&t(3,a=c.titleClass),"navigate"in c&&t(4,l=c.navigate)},[r,s,i,a,l]}class Zf extends vt{constructor(e){super(),wt(this,e,yv,_v,ut,{title:0,games:1,currentUserName:2,titleClass:3,navigate:4})}}const wv=""+new URL("logo-BEMpbk-Y.svg",import.meta.url).href;function vv(n){let e,t,r,s;return{c(){e=N("img"),Tt(e.src,t=wv)||E(e,"src",t),E(e,"alt","drawIt"),E(e,"class","w-48 mx-auto mb-6 drop-shadow-md cursor-pointer")},m(i,a){q(i,e,a),r||(s=de(e,"click",n[0]),r=!0)},p:J,i:J,o:J,d(i){i&&j(e),r=!1,s()}}}function Av(n,e,t){let{navigate:r}=e;function s(){r?r("home"):window.location.href="/"}return n.$$set=i=>{"navigate"in i&&t(1,r=i.navigate)},[s,r]}class wi extends vt{constructor(e){super(),wt(this,e,Av,vv,ut,{navigate:1})}}function zc(n,e,t){const r=n.slice();return r[16]=e[t],r}function Wc(n,e,t){const r=n.slice();return r[16]=e[t],r}function Ev(n){let e,t,r,s,i,a,l,c,u,f;return{c(){var m;e=N("div"),t=N("span"),t.textContent="Who are you?",r=$(),s=N("input"),i=$(),a=N("button"),l=re("get drawin'"),E(t,"class","text-2xl font-bold text-primary"),E(s,"type","text"),E(s,"placeholder","Your name"),E(s,"class","input input-bordered w-full bg-white text-black border-primary rounded-xl text-lg px-4 py-2 shadow"),E(s,"autocapitalize","off"),E(s,"autocorrect","off"),E(s,"maxlength","14"),E(a,"class","btn btn-primary text-white w-full rounded-xl text-lg py-2 shadow"),a.disabled=c=!((m=n[4])!=null&&m.trim()),E(e,"class","flex flex-col items-center gap-4 w-full max-w-xs mx-auto mt-8")},m(m,p){q(m,e,p),k(e,t),k(e,r),k(e,s),sn(s,n[4]),k(e,i),k(e,a),k(a,l),u||(f=[de(s,"input",n[12]),de(a,"click",n[13])],u=!0)},p(m,p){var y;p&16&&s.value!==m[4]&&sn(s,m[4]),p&16&&c!==(c=!((y=m[4])!=null&&y.trim()))&&(a.disabled=c)},i:J,o:J,d(m){m&&j(e),u=!1,yt(f)}}}function bv(n){let e,t,r,s;const i=[Rv,Iv],a=[];function l(c,u){return c[6].length!==0?0:1}return e=l(n),t=a[e]=i[e](n),{c(){t.c(),r=It()},m(c,u){a[e].m(c,u),q(c,r,u),s=!0},p(c,u){let f=e;e=l(c),e===f?a[e].p(c,u):(Fe(),ee(a[f],1,1,()=>{a[f]=null}),Ue(),t=a[e],t?t.p(c,u):(t=a[e]=i[e](c),t.c()),Q(t,1),t.m(r.parentNode,r))},i(c){s||(Q(t),s=!0)},o(c){ee(t),s=!1},d(c){c&&j(r),a[e].d(c)}}}function Tv(n){let e;return{c(){e=N("div"),e.innerHTML='<div class="text-primary text-lg font-semibold">Loading...</div>',E(e,"class","flex flex-col items-center gap-4 w-full max-w-xs mx-auto")},m(t,r){q(t,e,r)},p:J,i:J,o:J,d(t){t&&j(e)}}}function Iv(n){let e;return{c(){e=N("div"),e.textContent="No games yet. Start a new one!",E(e,"class","text-center text-gray-500 mt-8")},m(t,r){q(t,e,r)},p:J,i:J,o:J,d(t){t&&j(e)}}}function Rv(n){let e,t,r=n[3]&&Hc(n);return{c(){e=N("div"),r&&r.c(),E(e,"class","flex flex-col gap-6 w-full max-w-xs mx-auto")},m(s,i){q(s,e,i),r&&r.m(e,null),t=!0},p(s,i){s[3]?r?(r.p(s,i),i&8&&Q(r,1)):(r=Hc(s),r.c(),Q(r,1),r.m(e,null)):r&&(Fe(),ee(r,1,1,()=>{r=null}),Ue())},i(s){t||(Q(r),t=!0)},o(s){ee(r),t=!1},d(s){s&&j(e),r&&r.d()}}}function Hc(n){let e=n[6].filter(n[9]).length>0,t,r=n[6].filter(n[8]).length>0,s,i,a=e&&Gc(n),l=r&&$c(n);return{c(){a&&a.c(),t=$(),l&&l.c(),s=It()},m(c,u){a&&a.m(c,u),q(c,t,u),l&&l.m(c,u),q(c,s,u),i=!0},p(c,u){u&72&&(e=c[6].filter(c[9]).length>0),e?a?(a.p(c,u),u&72&&Q(a,1)):(a=Gc(c),a.c(),Q(a,1),a.m(t.parentNode,t)):a&&(Fe(),ee(a,1,1,()=>{a=null}),Ue()),u&72&&(r=c[6].filter(c[8]).length>0),r?l?(l.p(c,u),u&72&&Q(l,1)):(l=$c(c),l.c(),Q(l,1),l.m(s.parentNode,s)):l&&(Fe(),ee(l,1,1,()=>{l=null}),Ue())},i(c){i||(Q(a),Q(l),i=!0)},o(c){ee(a),ee(l),i=!1},d(c){c&&(j(t),j(s)),a&&a.d(c),l&&l.d(c)}}}function Gc(n){let e,t,r,s,i=Re(n[6].filter(n[10])),a=[];for(let c=0;c<i.length;c+=1)a[c]=Kc(Wc(n,i,c));const l=c=>ee(a[c],1,1,()=>{a[c]=null});return{c(){e=N("div"),t=N("div"),t.textContent="Your Turn!",r=$();for(let c=0;c<a.length;c+=1)a[c].c();E(t,"class","text-center text-2xl font-bold mb-2 animate-gradient-text svelte-1by7pf7"),E(e,"class","rounded-2xl bg-white/90 shadow-md p-4")},m(c,u){q(c,e,u),k(e,t),k(e,r);for(let f=0;f<a.length;f+=1)a[f]&&a[f].m(e,null);s=!0},p(c,u){if(u&73){i=Re(c[6].filter(c[10]));let f;for(f=0;f<i.length;f+=1){const m=Wc(c,i,f);a[f]?(a[f].p(m,u),Q(a[f],1)):(a[f]=Kc(m),a[f].c(),Q(a[f],1),a[f].m(e,null))}for(Fe(),f=i.length;f<a.length;f+=1)l(f);Ue()}},i(c){if(!s){for(let u=0;u<i.length;u+=1)Q(a[u]);s=!0}},o(c){a=a.filter(Boolean);for(let u=0;u<a.length;u+=1)ee(a[u]);s=!1},d(c){c&&j(e),_t(a,c)}}}function Kc(n){let e,t;return e=new Zf({props:{title:"",games:[n[16]],currentUserName:n[3],navigate:n[0]}}),{c(){We(e.$$.fragment)},m(r,s){Be(e,r,s),t=!0},p(r,s){const i={};s&72&&(i.games=[r[16]]),s&8&&(i.currentUserName=r[3]),s&1&&(i.navigate=r[0]),e.$set(i)},i(r){t||(Q(e.$$.fragment,r),t=!0)},o(r){ee(e.$$.fragment,r),t=!1},d(r){je(e,r)}}}function $c(n){let e,t,r,s,i=Re(n[6].filter(n[11])),a=[];for(let c=0;c<i.length;c+=1)a[c]=Qc(zc(n,i,c));const l=c=>ee(a[c],1,1,()=>{a[c]=null});return{c(){e=N("div"),t=N("div"),t.textContent="Waiting",r=$();for(let c=0;c<a.length;c+=1)a[c].c();E(t,"class","text-center text-secondary/60 font-semibold text-xs mb-2"),E(e,"class","rounded-2xl bg-white/60 shadow-sm p-4 opacity-60")},m(c,u){q(c,e,u),k(e,t),k(e,r);for(let f=0;f<a.length;f+=1)a[f]&&a[f].m(e,null);s=!0},p(c,u){if(u&73){i=Re(c[6].filter(c[11]));let f;for(f=0;f<i.length;f+=1){const m=zc(c,i,f);a[f]?(a[f].p(m,u),Q(a[f],1)):(a[f]=Qc(m),a[f].c(),Q(a[f],1),a[f].m(e,null))}for(Fe(),f=i.length;f<a.length;f+=1)l(f);Ue()}},i(c){if(!s){for(let u=0;u<i.length;u+=1)Q(a[u]);s=!0}},o(c){a=a.filter(Boolean);for(let u=0;u<a.length;u+=1)ee(a[u]);s=!1},d(c){c&&j(e),_t(a,c)}}}function Qc(n){let e,t;return e=new Zf({props:{title:"",games:[n[16]],currentUserName:n[3],navigate:n[0]}}),{c(){We(e.$$.fragment)},m(r,s){Be(e,r,s),t=!0},p(r,s){const i={};s&72&&(i.games=[r[16]]),s&8&&(i.currentUserName=r[3]),s&1&&(i.navigate=r[0]),e.$set(i)},i(r){t||(Q(e.$$.fragment,r),t=!0)},o(r){ee(e.$$.fragment,r),t=!1},d(r){je(e,r)}}}function Cv(n){let e,t,r,s,i,a;t=new wi({props:{navigate:n[0]}});const l=[Tv,bv,Ev],c=[];function u(f,m){return f[2]||f[1]&&!f[5]?0:f[1]?1:2}return s=u(n),i=c[s]=l[s](n),{c(){e=N("div"),We(t.$$.fragment),r=$(),i.c(),E(e,"class","min-h-[80vh] flex flex-col items-center justify-center px-2 py-6")},m(f,m){q(f,e,m),Be(t,e,null),k(e,r),c[s].m(e,null),a=!0},p(f,[m]){const p={};m&1&&(p.navigate=f[0]),t.$set(p);let y=s;s=u(f),s===y?c[s].p(f,m):(Fe(),ee(c[y],1,1,()=>{c[y]=null}),Ue(),i=c[s],i?i.p(f,m):(i=c[s]=l[s](f),i.c()),Q(i,1),i.m(e,null))},i(f){a||(Q(t.$$.fragment,f),Q(i),a=!0)},o(f){ee(t.$$.fragment,f),ee(i),a=!1},d(f){f&&j(e),je(t),c[s].d()}}}function kv(n,e,t){let r,s,i;Qe(n,Rs,D=>t(5,r=D)),Qe(n,Xe,D=>t(1,s=D)),Qe(n,Gr,D=>t(6,i=D));let a=!0,l=null,c="",{navigate:u}=e;async function f(D){D.trim()&&/^[a-zA-Z0-9]+$/.test(D)?(t(2,a=!0),await Jw(D.trim()),t(2,a=!1),window.location.reload()):D.trim()}Hr(async()=>{if(t(2,a=!0),dt(Rs,r=!1,r),s&&s.name)if(!await Xf(s.name))dt(Xe,s=null,s);else{const L=(await Yf(s.name)).flatMap(O=>O.users.filter(G=>G!==s.name));await Qw(L),dt(Rs,r=!0,r)}t(2,a=!1)});const m=D=>Ts(D,l)==="waiting",p=D=>["draw","guess"].includes(Ts(D,l)),y=D=>["draw","guess"].includes(Ts(D,l)),b=D=>Ts(D,l)==="waiting";function R(){c=this.value,t(4,c)}const C=()=>f(c);return n.$$set=D=>{"navigate"in D&&t(0,u=D.navigate)},n.$$.update=()=>{n.$$.dirty&2&&t(3,l=s?s.name:null)},[u,s,a,l,c,r,i,f,m,p,y,b,R,C]}class Sv extends vt{constructor(e){super(),wt(this,e,kv,Cv,ut,{navigate:0})}}function Xc(n,e,t){const r=n.slice();return r[28]=e[t],r}function Yc(n,e,t){const r=n.slice();return r[31]=e[t],r}function Jc(n){let e,t,r,s;function i(){return n[13](n[31])}return{c(){e=N("button"),E(e,"class",t="w-8 h-8 rounded-full border-2 "+(n[1]===n[31]?"border-primary":"")),Yi(e,"background-color",n[31])},m(a,l){q(a,e,l),r||(s=de(e,"click",i),r=!0)},p(a,l){n=a,l[0]&2&&t!==(t="w-8 h-8 rounded-full border-2 "+(n[1]===n[31]?"border-primary":""))&&E(e,"class",t)},d(a){a&&j(e),r=!1,s()}}}function Zc(n){let e,t,r,s,i;function a(){return n[14](n[28])}return{c(){e=N("button"),t=N("div"),E(t,"class","w-4 h-4 rounded-full bg-black mx-auto"),Yi(t,"width",n[28]+"px"),Yi(t,"height",n[28]+"px"),E(e,"class",r="w-8 h-8 rounded-full border-2 bg-white "+(n[0]===n[28]?"border-primary":"border-transparent"))},m(l,c){q(l,e,c),k(e,t),s||(i=de(e,"click",a),s=!0)},p(l,c){n=l,c[0]&1&&r!==(r="w-8 h-8 rounded-full border-2 bg-white "+(n[0]===n[28]?"border-primary":"border-transparent"))&&E(e,"class",r)},d(l){l&&j(e),s=!1,i()}}}function Pv(n){let e,t,r,s,i,a,l,c,u,f,m=Re(n[6]),p=[];for(let R=0;R<m.length;R+=1)p[R]=Jc(Yc(n,m,R));let y=Re(n[7]),b=[];for(let R=0;R<y.length;R+=1)b[R]=Zc(Xc(n,y,R));return{c(){e=N("div"),t=N("div");for(let R=0;R<p.length;R+=1)p[R].c();r=$(),s=N("div");for(let R=0;R<b.length;R+=1)b[R].c();i=$(),a=N("button"),a.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"></path></svg>',l=$(),c=N("canvas"),E(t,"class","flex gap-2 justify-start items-center flex-wrap"),E(a,"class","w-8 h-8 rounded-full border-2 bg-white border-transparent"),E(s,"class","flex gap-2 justify-start items-center"),E(c,"class","border-2 border-gray-300 rounded-lg touch-none w-full aspect-square"),E(e,"class","flex flex-col gap-2 w-full")},m(R,C){q(R,e,C),k(e,t);for(let D=0;D<p.length;D+=1)p[D]&&p[D].m(t,null);k(e,r),k(e,s);for(let D=0;D<b.length;D+=1)b[D]&&b[D].m(s,null);k(s,i),k(s,a),k(e,l),k(e,c),n[15](c),n[16](e),u||(f=[de(a,"click",n[2]),de(c,"mousedown",n[8]),de(c,"mousemove",n[9]),de(c,"mouseup",n[10]),de(c,"mouseleave",n[10]),de(c,"touchstart",n[8]),de(c,"touchmove",n[9]),de(c,"touchend",n[10],{passive:!0})],u=!0)},p(R,C){if(C[0]&82){m=Re(R[6]);let D;for(D=0;D<m.length;D+=1){const F=Yc(R,m,D);p[D]?p[D].p(F,C):(p[D]=Jc(F),p[D].c(),p[D].m(t,null))}for(;D<p.length;D+=1)p[D].d(1);p.length=m.length}if(C[0]&145){y=Re(R[7]);let D;for(D=0;D<y.length;D+=1){const F=Xc(R,y,D);b[D]?b[D].p(F,C):(b[D]=Zc(F),b[D].c(),b[D].m(s,i))}for(;D<b.length;D+=1)b[D].d(1);b.length=y.length}},i:J,o:J,d(R){R&&j(e),_t(p,R),_t(b,R),n[15](null),n[16](null),u=!1,yt(f)}}}function Vv(n,e,t){let r=400,s=400,{lineWidth:i=5}=e,{strokeColor:a="#000000"}=e,l,c,u=!1,f,m=[],p=null;const y=["#E74C3C","#E67E22","#F1C40F","#2ECC71","#1ABC9C","#3498DB","#4834D4","#9B59B6","#D291BC","#F5E6DE","#D2A679","#8D5524","#000000","#7F8C8D","#FFFFFF"],b=[2,5,15,25];function R(){if(!l)return;const W=window.devicePixelRatio||1;t(3,l.width=r*W,l),t(3,l.height=s*W,l),t(3,l.style.width=r+"px",l),t(3,l.style.height=s+"px",l),t(4,c=l.getContext("2d")),c.setTransform(1,0,0,1,0,0),c.scale(W,W),t(4,c.lineCap="round",c),t(4,c.lineJoin="round",c),t(4,c.strokeStyle=a,c),t(4,c.lineWidth=i,c),t(4,c.fillStyle="#FFFFFF",c),c.fillRect(0,0,r,s)}function C(W){u=!0;const we=H(W);p={color:a,width:i,points:[we]}}function D(W){if(!u||!p)return;const we=H(W);p.points.push(we),L()}function F(){u&&p&&(m.push(p),p=null),u=!1}function L(){c.clearRect(0,0,r,s),t(4,c.fillStyle="#FFFFFF",c),c.fillRect(0,0,r,s);for(const W of m)O(W);p&&O(p)}function O(W){if(!(W.points.length<2)){c.save(),t(4,c.strokeStyle=W.color,c),t(4,c.lineWidth=W.width,c),c.beginPath(),c.moveTo(W.points[0].x,W.points[0].y);for(let we=1;we<W.points.length;we++)c.lineTo(W.points[we].x,W.points[we].y);c.stroke(),c.restore()}}function G(){m.length>0&&(m.pop(),L())}function H(W){const we=l.getBoundingClientRect();if("touches"in W&&W.touches.length>0){const St=W.touches[0];return{x:St.clientX-we.left,y:St.clientY-we.top}}return{x:W.clientX-we.left,y:W.clientY-we.top}}function A(){m=[],p=null,t(4,c.fillStyle="#FFFFFF",c),c.fillRect(0,0,r,s)}function _(){return l.toDataURL("image/png")}function v(){!f||!l||(r=f.clientWidth,s=r,R(),L())}Hr(()=>{R(),L();const W=new ResizeObserver(()=>{v()});return f&&W.observe(f),()=>{W.disconnect()}});const T=W=>{t(1,a=W),t(4,c.strokeStyle=W,c)},I=W=>{t(0,i=W),t(4,c.lineWidth=W,c)};function P(W){xr[W?"unshift":"push"](()=>{l=W,t(3,l)})}function w(W){xr[W?"unshift":"push"](()=>{f=W,t(5,f)})}return n.$$set=W=>{"lineWidth"in W&&t(0,i=W.lineWidth),"strokeColor"in W&&t(1,a=W.strokeColor)},[i,a,G,l,c,f,y,b,C,D,F,A,_,T,I,P,w]}class Dv extends vt{constructor(e){super(),wt(this,e,Vv,Pv,ut,{lineWidth:0,strokeColor:1,undo:2,clearCanvas:11,getImageData:12},null,[-1,-1])}get undo(){return this.$$.ctx[2]}get clearCanvas(){return this.$$.ctx[11]}get getImageData(){return this.$$.ctx[12]}}const To="data:image/gif;base64,R0lGODdhUABQAHcAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAUABQAIIAAAAGBgjxmRH/0Cz/+FUAAAAAAAAAAAAD/wi63B0wykmrlS7rza//HieOGWieAamSaHut8ObOU2w/dH7vQK7zNh8NGBS6iDHjEYmzEJ7QqHRKrUZDN491y91ii86uePxNXsZobhmmTbun61X7TSfEVfO6+8466998I3l/ZC9ZfoRogT2IVAOPkJGSk5SVkQKYmZo5W5aen56aogKcVqCnqAOjmzSdqa+Vq5mlVbC2krKYtI63vbmkraa9t7+7U8PEucZSyLbFwbXNr88zrtKo1C7W16DZLdvcocrQvOGf3ijg5pToJ+rruOPVwvCx8tr09ZPtJu/6qve+5fsHiR8If/oMfkBYT+EgZgTjyVoWJaLEVRShWLwUMKzdwIgOGx3b+ChkmGgkTVZgCE8lBZbrXE6AaU6mBJrhbEbAyU0nBJ7XfAYAKk0o0WZGPxJMinIj03JOO7pT+k9hhwu/smrFaAhMha1gty66aiGsWakRdng4y1bUWBlY28p9q2Gt3LZ0S8S9ezavA7t8zfpt8jWw4K5myhoOOxiPEhRM5Dw+EdnxZBCV+1z+kFnQZs6dyX62EFr0aAql4Z6ukLruatat/75GfSMBACH5BAkKAAAALAAAAABQAFAAggAAAAYGCPGZEf/QLP/4VQAAAAAAAAAAAAP/CLrc/irISWuFOOudrfdcKI7RZ0pkqjrnub5qa8K0KH91rt2g7rO8y29YCk6IRCMFGTMRntCoVOpiPk7TbLZqbWC14Ce3u/iGtWMywHyepsnsdvTdjcvFM3XZeafm9Wt8fVB0VnZ3hTCHUAONjo+QkAKTlJWJO4JZkZublZ4Clx2ZU5yljp+WfySLT6amqJShGKwErqWwk7IQtLacuKCqI7y9kb+6V6NSxMW4x0AfYcuSzcE2yVHSj8bVIcPZA9s4TdBg343hPSne2egWK+vS7ULq14zm8kvjHtH31OL05LSYA+cv3ap6rfrBcuYFYS2FqBgygLcM3xF9Fvh9s4gC0mMFjewKuvNIAWQ8kfMOBtQE8ZPEPStJtfT0ssi+cjNT/VN5U2DOWNw4UCTGMcA7hwOLHo2p7GeuoBuG9lJKcoLJiijzAezJcmPWi1sz4vS6ECompticAtspDKnamoHQ2iMb0awouQnpurQ7y61emnx3+Q1Zlm2OE7+oAkKcuLBBNYwb7zVcx4TkupQNWb4MODOTyJyfekYCOjTcpR5C63wMZ7Pqtawrf3gtOjaghkqM3kZtZDfvIL6ryggeFjjxtrmPI1ei3Fry5kJz64Z+lvmQBAAh+QQFCgAAACwAAAAAUABQAIAAAAAGBggC04SPqWvhD2NktNpbpda4+99sogOWpjKO52qmIgt77hbX1szZOopP+x/qPYBAIYT4Mw6ROiWJaXMGoFEntSa9xrJaFrd7+oJL4vGnbO6g05c1O2N9y+JyjLvOU+Lt9D3l7hdkFAinR8gAGJjot7jXiPdYFyk3+VbJdpmWabY51gn22RWqNXpVSnUKlcq0itRK9FrUd4gQmzRLKyiUmzfIW4uba7sz3BRMW1xl+Kvbw3yQjHV8GL01TVgNk+11rdjN+O0YDjkuWU55bpmOua7ZzvleUQAAIfkEBQoAAAAsAAAAAFAAUACCAAAABgYI8ZkR/9As//hVAAAAAAAAAAAAA/8Iutz+MMpJq7046827/2AojmRpnmiqrmzrvnAgzzRh33ie03wQ9zOdUAic/YrD5K0oOwKVSqbvJYUmpc6edYilMrdEZpYH1nVd1TLu3EqrbWyRVECv2wf4vH6/j4o3c3aCfISEfkUcgYJ1hY15h0CJTIt3jo2QPZJFlIyWhZg8mkCcdJ6fV38aipSmhqiIgJOkrXygNKI9pAK0fa+RsZuzvI++mcCjwsMDtkbHucnDzE3OPLrKeNJTqrKc18vFodQ01tfZuNXQvObiM+TK69vB3eXgt+wy7tH1zfHI8+/7pvV79k8fl1QZVi3yBi8hN1b0DsIaiK6guoDaHMqDCFCl4i+K49LRaohB4aCIYSZq9MfRYMqPKwm2vOjRGMh2IluRvGCyUseXNmNWnDkS47mQFovWDHcTX05TOy307PTTDMKSDxeitKoS60atVXdc5Zn1ZNg1Y6WW9emSK0yvLMG2Fds1xFRddOKsuItXrwq+uvymAExKMArCnAyfQExJsQnGixyXgCxIMgnKdiyPwFxHM4zPoEOLHk26tOnTqFOrXs26NekEACH5BAkKAAAALAAAAABQAFAAggAAAAYGCPGZEf/QLP/4VQAAAAAAAAAAAAP/CLrcHTDKSauVLuvNr/8eJ44ZaJ4BqZJoe63w5s5TbD90fu9ArvM2Hw0YFLqIMeMRibMQntCodEqtRkM3j3XL3WKLzq54/E1exmhuGaZNu6frVftNJ8RV87r7zjrr33wjeX9kL1l+hGiBPRcCjo+QA5KTlJWWl5iUXjSQnQKZoKGgmzOekaKoqaQupo+pr6GrLa2OsLaXsii0n7e9krknu76+wCbCw7fFIMfIsMofzM2qVjnR0qLPHtbXo9SctNzTVdXg4djepeXm3ePfreux6Kzq8Ljys/T1ldmN+fqT/Cxs+zcgYIWB/wxSQKhP4QSG9RxKgAhPYgSK6yxCwGhOqmMAjuE8guQm0h/Bku8I7runy2RClsFcNoRpTGZEmstsVsQJTWdGntp8dgTaL6VKgEQFCg2Z9OBSkk0XPr32rEPRXVizQlpkVanWr1i5yrgKtmwnsRqCml37CG0JsmzLunWgNq7ZuU2c2r1rCIzevWDxMqgLWKvgBYQLh+3LRIGSFo3xPD4Ruc9kEJUFXcacuetmxp3pfj4MZDRpHqZBhx6cusLqtK0p7EgAACH5BAkKAAAALAAAAABQAFAAggAAAAYGCPGZEf/QLP/4VQAAAAAAAAAAAAP/CLrc/irISWuFOOudrfdcKI7RZ0pkqjrnub5qa8K0KH91rt2g7rO8y29YCk6IRCMFGTMRntCoVOpiPk7TbLZqbWC14Ce3u/iGtWMywHyepsnsdvTdjcvFM3XZeafm9Wt8fVB0VnZ3hTAnAoyNjgOQkZKTk2GJOyaOmgKUnZ2WfySLm42eppGgOE0fpKWnpqk9KaOtr7Bglx2ZrZy2n7ihI7Skvr9owTa7tcWVwKqzysTMkrEWK8Ob09TOsqLR2dqQ1ULQrLzh4tzWqx68veHjS+wW7ugD8UfzFfXo+Cj6FPjBU0fOm7llA489M9juXD+C8so1RKjNX4Br3zTZs4jx2KC0hFuQhcCm8aHCbsIyPjIZcmFKj+BAuhHJgeRKmX5cJoNZEuccmhtsuvJJCCgmnjcrQswnkZ5Donh0jlQ5VOnJdU33PbXaEuXOiR+5zpRakyqjjUv/ZQ24dRpHgBMEis3pdSrSqm7TXoQrQW7eqwVfgo059yfZoGbfFS56+Ojgnouj1qUh1B2jXEMqW8b8Q7M7zj488wKtQ3Qr0jlMk0JdQ/Um1pQTfzaaRPZo2pltn8YNSAlTQHxbAH/hW+1whkaOB4etvPhe5YKTQ48eZDp1Hta/Sv+RAAAh+QQFCgAAACwAAAAAUABQAIAAAAAGBggC04SPqWvhD2NktNpbpda4+99sogOWpjKO52qmIgt77hbX1szZOopP+x/qPYBAIYT4Mw6ROiWJaXMGoFEntSa9xrJaFrd7+oJL4vGnbO6g05c1O2N9y+JyjLvOU+Lt9D3l7hdkFAinR8gAGJjot7jXiPdYFyk3+VbJdpmWabY51gn22RWqNXpVSnUKlcq0itRK9FrUd4gQmzRLKyiUmzfIW4uba7sz3BRMW1xl+Kvbw3yQjHV8GL01TVgNk+11rdjN+O0YDjkuWU55bpmOua7ZzvleUQAAIfkEBQoAAAAsAAAAAFAAUACCAAAABgYI8ZkR/9As//hVAAAAAAAAAAAAA/8Iutz+MMpJq7046827/2AojmRpnmiqrmzrvnAgzzRh33ie03wQ9zOdUAic/YrD5K0oOwKVSqbvJYUmpc6edYilMrdEZpYH1nVd1TLu3EqrbWyRWzio2+94vGDP78cvczp5g4N9hgJ/FoE5hI12h35iG4s4jo6QfIkVlDeWjZh7mhScNp6EoIiSGqQEpoWgohOsrnmosRKztHe2qhm5unW8RRy/wMJAxF9JwI+wvRjFusc9yUjLzAPTPNVP18zaNNxa3sbOw5PKQ9jZ5sjo1urY4Ebv3fHf7dT14/flmLcRotGa12QfGXLS8m0zWAPhQIXhGAZx6IrglFXp6MiDSA+oIzyN+P49A5RR0EaR5zzaA+kPEkAIAityLKiSH8uEKN3VPNgPp8uRikoyOvkzpS+hlYgeevkgpimL4njefJhT386GPakW1Xn0o8mQW612Xfm15VKgm5B2UmqIqQOnnqCWkIJKLhomdWdebIM3b9iFd4v4/RsxMJDBZ42yoIs4kuIVjBuHQosismS3ISw3xgxCM2LOMEKLHk26tOnTqFOrXs26tevXoxMAADs=";function eu(n,e,t){const r=n.slice();return r[29]=e[t],r}function tu(n,e,t){const r=n.slice();return r[32]=e[t],r}function nu(n,e,t){const r=n.slice();return r[12]=e[t],r}function Nv(n){let e,t,r,s;const i=[xv,Ov],a=[];function l(c,u){return c[1]?1:0}return t=l(n),r=a[t]=i[t](n),{c(){e=N("div"),r.c(),E(e,"class","flex flex-col items-center gap-6")},m(c,u){q(c,e,u),a[t].m(e,null),s=!0},p(c,u){let f=t;t=l(c),t===f?a[t].p(c,u):(Fe(),ee(a[f],1,1,()=>{a[f]=null}),Ue(),r=a[t],r?r.p(c,u):(r=a[t]=i[t](c),r.c()),Q(r,1),r.m(e,null))},i(c){s||(Q(r),s=!0)},o(c){ee(r),s=!1},d(c){c&&j(e),a[t].d()}}}function Mv(n){let e,t,r,s,i,a,l,c,u,f;function m(O,G){return O[0].data&&O[0].data.length>10?jv:Bv}let p=m(n),y=p(n);function b(O,G){return O[9]?zv:qv}let R=b(n),C=R(n),D=Re(n[0].guesses),F=[];for(let O=0;O<D.length;O+=1)F[O]=uu(nu(n,D,O));let L=!n[0].guessed&&n[2].name!==n[0].artist&&hu(n);return{c(){e=N("div"),t=N("div"),y.c(),r=$(),s=N("div"),i=N("h2"),i.textContent="What's this?",a=$(),l=N("p"),C.c(),c=$(),u=N("div");for(let O=0;O<F.length;O+=1)F[O].c();f=$(),L&&L.c(),E(t,"class","bg-white/90 p-2 rounded-lg w-full max-w-[min(90vw,300px)] aspect-square flex items-center justify-center mx-auto border-2 border-primary"),E(i,"class","text-xl font-bold mb-2 text-primary"),E(l,"class","mb-4"),E(u,"class","flex flex-wrap gap-2 w-full overflow-y-auto"),E(s,"class","w-full max-w-[min(90vw,400px)]"),E(e,"class","flex flex-col items-center gap-6")},m(O,G){q(O,e,G),k(e,t),y.m(t,null),k(e,r),k(e,s),k(s,i),k(s,a),k(s,l),C.m(l,null),k(s,c),k(s,u);for(let H=0;H<F.length;H+=1)F[H]&&F[H].m(u,null);k(e,f),L&&L.m(e,null)},p(O,G){if(p===(p=m(O))&&y?y.p(O,G):(y.d(1),y=p(O),y&&(y.c(),y.m(t,null))),R===(R=b(O))&&C?C.p(O,G):(C.d(1),C=R(O),C&&(C.c(),C.m(l,null))),G[0]&1){D=Re(O[0].guesses);let H;for(H=0;H<D.length;H+=1){const A=nu(O,D,H);F[H]?F[H].p(A,G):(F[H]=uu(A),F[H].c(),F[H].m(u,null))}for(;H<F.length;H+=1)F[H].d(1);F.length=D.length}!O[0].guessed&&O[2].name!==O[0].artist?L?L.p(O,G):(L=hu(O),L.c(),L.m(e,null)):L&&(L.d(1),L=null)},i:J,o:J,d(O){O&&j(e),y.d(),C.d(),_t(F,O),L&&L.d()}}}function Ov(n){let e,t,r,s,i=n[1].secretWord.toUpperCase()+"",a,l,c,u,f,m,p,y,b,R,C=n[4]?"Posting, great work...":"Submit Drawing",D,F,L,O,G,H={};return u=new Dv({props:H}),n[22](u),{c(){e=N("div"),t=N("h2"),r=re("Ok, let's draw "),s=N("span"),a=re(i),l=$(),c=N("div"),We(u.$$.fragment),f=$(),m=N("div"),p=N("button"),p.textContent="Clear",y=$(),b=N("button"),R=N("span"),D=re(C),E(s,"class","font-bold text-black"),E(t,"class","text-xl mb-4 text-black/60"),E(p,"class","btn btn-outline flex-1"),E(b,"class",F=n[4]?"btn-disabled flex-1":"btn btn-secondary flex-1 flex flex-row items-center justify-center text-center border border-secondary"),E(m,"class","flex flex-row gap-2 mt-4 w-full"),E(c,"class","w-full aspect-square max-w-[min(90vw,400px)] mx-auto"),E(e,"class","w-full h-screen")},m(A,_){q(A,e,_),k(e,t),k(t,r),k(t,s),k(s,a),k(e,l),k(e,c),Be(u,c,null),k(c,f),k(c,m),k(m,p),k(m,y),k(m,b),k(b,R),k(R,D),L=!0,O||(G=[de(p,"click",n[23]),de(b,"click",n[24])],O=!0)},p(A,_){(!L||_[0]&2)&&i!==(i=A[1].secretWord.toUpperCase()+"")&&ye(a,i);const v={};u.$set(v),(!L||_[0]&16)&&C!==(C=A[4]?"Posting, great work...":"Submit Drawing")&&ye(D,C),(!L||_[0]&16&&F!==(F=A[4]?"btn-disabled flex-1":"btn btn-secondary flex-1 flex flex-row items-center justify-center text-center border border-secondary"))&&E(b,"class",F)},i(A){L||(Q(u.$$.fragment,A),L=!0)},o(A){ee(u.$$.fragment,A),L=!1},d(A){A&&j(e),n[22](null),je(u),O=!1,yt(G)}}}function xv(n){let e,t,r,s,i,a,l,c=n[3].users.filter(n[19])[0]+"",u,f,m,p,y,b={ctx:n,current:null,token:null,hasCatch:!1,pending:Uv,then:Fv,catch:Lv,value:28};return dl(y=n[7],b),{c(){e=N("div"),t=N("h2"),t.textContent="Pick a word to draw",r=$(),s=N("p"),i=N("span"),a=re("You get coins as the artist, and "),l=N("span"),u=re(c),f=re(" gets coins for guessing correctly!"),m=$(),p=N("div"),b.block.c(),E(t,"class","text-xl font-bold mb-2 text-black"),E(l,"class","font-bold"),E(s,"class","mb-6 text-black/60 italic tooltip flex flex-row gap-2 text-xs"),E(p,"class","flex flex-col gap-4 w-full"),E(e,"class","w-full flex flex-col items-center")},m(R,C){q(R,e,C),k(e,t),k(e,r),k(e,s),k(s,i),k(i,a),k(i,l),k(l,u),k(i,f),k(e,m),k(e,p),b.block.m(p,b.anchor=null),b.mount=()=>p,b.anchor=null},p(R,C){n=R,C[0]&12&&c!==(c=n[3].users.filter(n[19])[0]+"")&&ye(u,c),b.ctx=n,C[0]&128&&y!==(y=n[7])&&dl(y,b)||Md(b,n,C)},i:J,o:J,d(R){R&&j(e),b.block.d(),b.token=null,b=null}}}function Lv(n){return{c:J,m:J,p:J,d:J}}function Fv(n){let e,t,r,s=n[8]?"Refreshing...":"Refresh Words",i,a,l,c,u,f=Re(n[28]),m=[];for(let y=0;y<f.length;y+=1)m[y]=su(eu(n,f,y));let p=!n[8]&&iu();return{c(){for(let y=0;y<m.length;y+=1)m[y].c();e=$(),t=N("button"),r=N("span"),i=re(s),a=$(),p&&p.c(),E(t,"class",l="btn btn-outline w-fit flex flex-row items-center justify-center gap-2 "+(!n[2]||n[2].coins<5||n[8]?"opacity-20 cursor-not-allowed":""))},m(y,b){for(let R=0;R<m.length;R+=1)m[R]&&m[R].m(y,b);q(y,e,b),q(y,t,b),k(t,r),k(r,i),k(t,a),p&&p.m(t,null),c||(u=de(t,"click",n[21]),c=!0)},p(y,b){if(b[0]&142){f=Re(y[28]);let R;for(R=0;R<f.length;R+=1){const C=eu(y,f,R);m[R]?m[R].p(C,b):(m[R]=su(C),m[R].c(),m[R].m(e.parentNode,e))}for(;R<m.length;R+=1)m[R].d(1);m.length=f.length}b[0]&256&&s!==(s=y[8]?"Refreshing...":"Refresh Words")&&ye(i,s),y[8]?p&&(p.d(1),p=null):p||(p=iu(),p.c(),p.m(t,null)),b[0]&260&&l!==(l="btn btn-outline w-fit flex flex-row items-center justify-center gap-2 "+(!y[2]||y[2].coins<5||y[8]?"opacity-20 cursor-not-allowed":""))&&E(t,"class",l)},d(y){y&&(j(e),j(t)),_t(m,y),p&&p.d(),c=!1,u()}}}function ru(n){let e,t;return{c(){e=N("img"),Tt(e.src,t=lr)||E(e,"src",t),E(e,"class","w-4 h-4")},m(r,s){q(r,e,s)},p:J,d(r){r&&j(e)}}}function su(n){let e,t,r,s=n[29].secretWord.toUpperCase()+"",i,a,l,c=n[29].createdBy?"by "+n[29].createdBy:"",u,f,m,p,y,b,R=Re(Array(n[29].coins)),C=[];for(let F=0;F<R.length;F+=1)C[F]=ru(tu(n,R,F));function D(){return n[20](n[29])}return{c(){e=N("button"),t=N("div"),r=N("span"),i=re(s),a=$(),l=N("span"),u=re(c),f=$(),m=N("span");for(let F=0;F<C.length;F+=1)C[F].c();E(r,"class","text-sm font-semibold"),E(l,"class","text-[0.8rem] text-white opacity-80"),E(t,"class","flex flex-col items-start gap-1"),E(m,"class","flex items-center gap-1"),E(e,"class",p="btn flex flex-row items-center justify-between w-full border "+(n[29].createdBy!=null?"btn-secondary border-black text-white h-20":"btn-primary border-primary text-white"))},m(F,L){q(F,e,L),k(e,t),k(t,r),k(r,i),k(t,a),k(t,l),k(l,u),k(e,f),k(e,m);for(let O=0;O<C.length;O+=1)C[O]&&C[O].m(m,null);y||(b=de(e,"click",D),y=!0)},p(F,L){if(n=F,L[0]&128&&s!==(s=n[29].secretWord.toUpperCase()+"")&&ye(i,s),L[0]&128&&c!==(c=n[29].createdBy?"by "+n[29].createdBy:"")&&ye(u,c),L[0]&128){R=Re(Array(n[29].coins));let O;for(O=0;O<R.length;O+=1){const G=tu(n,R,O);C[O]?C[O].p(G,L):(C[O]=ru(),C[O].c(),C[O].m(m,null))}for(;O<C.length;O+=1)C[O].d(1);C.length=R.length}L[0]&128&&p!==(p="btn flex flex-row items-center justify-between w-full border "+(n[29].createdBy!=null?"btn-secondary border-black text-white h-20":"btn-primary border-primary text-white"))&&E(e,"class",p)},d(F){F&&j(e),_t(C,F),y=!1,b()}}}function iu(n){let e;return{c(){e=N("span"),e.innerHTML=`(5 <img src="${lr}" class="w-4 h-4 inline"/>)`,E(e,"class","text-xs text-black/60")},m(t,r){q(t,e,r)},d(t){t&&j(e)}}}function Uv(n){return{c:J,m:J,p:J,d:J}}function Bv(n){let e;return{c(){e=N("span"),e.textContent="No drawing yet",E(e,"class","text-accent")},m(t,r){q(t,e,r)},p:J,d(t){t&&j(e)}}}function jv(n){let e,t;return{c(){e=N("img"),Tt(e.src,t=`${n[0].data}`)||E(e,"src",t),E(e,"class","w-full h-full object-contain"),E(e,"alt","Current drawing")},m(r,s){q(r,e,s)},p(r,s){s[0]&1&&!Tt(e.src,t=`${r[0].data}`)&&E(e,"src",t)},d(r){r&&j(e)}}}function qv(n){let e,t,r=n[0].artist+"",s,i,a,l=(n[0].hintPurchased||n[0].superHintPurchased)&&ou(n);return{c(){e=re("Drawn by "),t=N("span"),s=re(r),i=$(),l&&l.c(),a=It(),E(t,"class","font-bold text-secondary")},m(c,u){q(c,e,u),q(c,t,u),k(t,s),q(c,i,u),l&&l.m(c,u),q(c,a,u)},p(c,u){u[0]&1&&r!==(r=c[0].artist+"")&&ye(s,r),c[0].hintPurchased||c[0].superHintPurchased?l?l.p(c,u):(l=ou(c),l.c(),l.m(a.parentNode,a)):l&&(l.d(1),l=null)},d(c){c&&(j(e),j(t),j(i),j(a)),l&&l.d(c)}}}function zv(n){let e,t,r=n[0].secretWord+"",s;return{c(){e=re("You drew this. The secret word is "),t=N("span"),s=re(r),E(t,"class","font-bold text-secondary")},m(i,a){q(i,e,a),q(i,t,a),k(t,s)},p(i,a){a[0]&1&&r!==(r=i[0].secretWord+"")&&ye(s,r)},d(i){i&&(j(e),j(t))}}}function ou(n){let e,t,r=n[0].hintPurchased&&au(n),s=n[0].superHintPurchased&&lu(n);return{c(){e=N("ul"),r&&r.c(),t=$(),s&&s.c(),E(e,"class","pl-4 mt-1 space-y-1")},m(i,a){q(i,e,a),r&&r.m(e,null),k(e,t),s&&s.m(e,null)},p(i,a){i[0].hintPurchased?r?r.p(i,a):(r=au(i),r.c(),r.m(e,t)):r&&(r.d(1),r=null),i[0].superHintPurchased?s?s.p(i,a):(s=lu(i),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(i){i&&j(e),r&&r.d(),s&&s.d()}}}function au(n){let e,t=Nc(n[0])+"",r;return{c(){e=N("li"),r=re(t),E(e,"class","text-xs list-disc text-accent/70")},m(s,i){q(s,e,i),k(e,r)},p(s,i){i[0]&1&&t!==(t=Nc(s[0])+"")&&ye(r,t)},d(s){s&&j(e)}}}function lu(n){let e,t=Mc(n[0])+"",r;return{c(){e=N("li"),r=re(t),E(e,"class","text-xs list-disc text-accent/70")},m(s,i){q(s,e,i),k(e,r)},p(s,i){i[0]&1&&t!==(t=Mc(s[0])+"")&&ye(r,t)},d(s){s&&j(e)}}}function cu(n){let e,t=n[12]+"",r,s;return{c(){e=N("div"),r=re(t),s=$(),E(e,"class","bg-accent-light px-3 py-1 rounded-full text-black/60 border border-accent")},m(i,a){q(i,e,a),k(e,r),k(e,s)},p(i,a){a[0]&1&&t!==(t=i[12]+"")&&ye(r,t)},d(i){i&&j(e)}}}function uu(n){let e,t=n[12]&&cu(n);return{c(){t&&t.c(),e=It()},m(r,s){t&&t.m(r,s),q(r,e,s)},p(r,s){r[12]?t?t.p(r,s):(t=cu(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(r){r&&j(e),t&&t.d(r)}}}function hu(n){let e,t,r,s,i,a,l,c,u;function f(y,b){if(!y[0].hintPurchased)return Hv;if(!y[0].superHintPurchased)return Wv}let m=f(n),p=m&&m(n);return{c(){e=N("div"),t=N("div"),p&&p.c(),r=$(),s=N("div"),i=N("input"),a=$(),l=N("button"),l.textContent="Guess",E(t,"class","flex gap-2"),E(i,"type","text"),E(i,"placeholder","Type your guess..."),E(i,"class","input input-bordered flex-1 bg-white text-black border-primary"),E(l,"class","btn btn-primary"),E(s,"class","flex gap-2"),E(e,"class","flex flex-col gap-2 w-full max-w-[min(90vw,400px)]")},m(y,b){q(y,e,b),k(e,t),p&&p.m(t,null),k(e,r),k(e,s),k(s,i),sn(i,n[12]),k(s,a),k(s,l),c||(u=[de(i,"input",n[16]),de(i,"keydown",n[17]),de(l,"click",n[18])],c=!0)},p(y,b){m===(m=f(y))&&p?p.p(y,b):(p&&p.d(1),p=m&&m(y),p&&(p.c(),p.m(t,null))),b[0]&4096&&i.value!==y[12]&&sn(i,y[12])},d(y){y&&j(e),p&&p.d(),c=!1,yt(u)}}}function Wv(n){let e,t=n[11]?"Purchasing...":"Super Hint (10 ",r,s,i,a=n[11]?"":")",l,c,u,f,m;return{c(){e=N("button"),r=re(t),s=N("img"),l=re(a),Tt(s.src,i=lr)||E(s,"src",i),E(s,"class","w-4 h-4 inline"),E(e,"class",c="btn btn-outline flex-1 "+(n[2].coins<10||n[11]?"opacity-40 btn-error cursor-not-allowed":"")),e.disabled=u=n[2].coins<10||n[11]},m(p,y){q(p,e,y),k(e,r),k(e,s),k(e,l),f||(m=de(e,"click",n[15]),f=!0)},p(p,y){y[0]&2048&&t!==(t=p[11]?"Purchasing...":"Super Hint (10 ")&&ye(r,t),y[0]&2048&&a!==(a=p[11]?"":")")&&ye(l,a),y[0]&2052&&c!==(c="btn btn-outline flex-1 "+(p[2].coins<10||p[11]?"opacity-40 btn-error cursor-not-allowed":""))&&E(e,"class",c),y[0]&2052&&u!==(u=p[2].coins<10||p[11])&&(e.disabled=u)},d(p){p&&j(e),f=!1,m()}}}function Hv(n){let e,t=n[10]?"Purchasing...":"Hint (5 ",r,s,i,a=n[10]?"":")",l,c,u,f,m;return{c(){e=N("button"),r=re(t),s=N("img"),l=re(a),Tt(s.src,i=lr)||E(s,"src",i),E(s,"class","w-4 h-4 inline"),E(e,"class",c="btn btn-outline flex-1 "+(n[2].coins<5||n[10]?"opacity-40 btn-error cursor-not-allowed":"")),e.disabled=u=n[2].coins<5||n[10]},m(p,y){q(p,e,y),k(e,r),k(e,s),k(e,l),f||(m=de(e,"click",n[14]),f=!0)},p(p,y){y[0]&1024&&t!==(t=p[10]?"Purchasing...":"Hint (5 ")&&ye(r,t),y[0]&1024&&a!==(a=p[10]?"":")")&&ye(l,a),y[0]&1028&&c!==(c="btn btn-outline flex-1 "+(p[2].coins<5||p[10]?"opacity-40 btn-error cursor-not-allowed":""))&&E(e,"class",c),y[0]&1028&&u!==(u=p[2].coins<5||p[10])&&(e.disabled=u)},d(p){p&&j(e),f=!1,m()}}}function Gv(n){let e,t,r,s;const i=[Mv,Nv],a=[];function l(c,u){return c[3]&&c[2]&&c[0]?0:c[2]&&c[3]?1:-1}return~(t=l(n))&&(r=a[t]=i[t](n)),{c(){e=N("div"),r&&r.c(),E(e,"class","rounded-lg p-9 bg-background flex flex-col justify-center")},m(c,u){q(c,e,u),~t&&a[t].m(e,null),s=!0},p(c,u){let f=t;t=l(c),t===f?~t&&a[t].p(c,u):(r&&(Fe(),ee(a[f],1,1,()=>{a[f]=null}),Ue()),~t?(r=a[t],r?r.p(c,u):(r=a[t]=i[t](c),r.c()),Q(r,1),r.m(e,null)):r=null)},i(c){s||(Q(r),s=!0)},o(c){ee(r),s=!1},d(c){c&&j(e),~t&&a[t].d()}}}function Kv(n,e,t){let r,s,i;Qe(n,Xe,w=>t(2,r=w)),Qe(n,mt,w=>t(3,s=w)),Qe(n,Cs,w=>t(25,i=w));let a=null,l="",c=null,u=!1,f,m=0,p,y=!1,b=!1,R=!1,C=!1;async function D(w){if(!s||!r||!a||!w.trim()||(t(12,l=""),a.guesses.includes(w)))return;const W={...a};W.guesses.push(w);const we={...s},St=we.drawings.findIndex(At=>!At.guessed&&At.artist===W.artist);St>=0&&(we.drawings[St]=W,dt(mt,s=we,s)),sv(s,r,w).catch(At=>{console.error("Error submitting guess:",At)})}async function F(){if(!r||!a||!s||a.hintPurchased||r.coins<5||R)return;t(10,R=!0),await ov(s,a,r)&&await Rn(r.name,-5),t(10,R=!1)}async function L(){if(!r||!a||!s||!a.hintPurchased||r.coins<10||C)return;t(11,C=!0),await av(s,a,r)&&await Rn(r.name,-10),t(11,C=!1)}function O(){l=this.value,t(12,l)}const G=w=>{w.key==="Enter"&&l.length>0&&D(l)},H=()=>D(l),A=w=>w!==r.name,_=w=>{s&&t(1,c={secretWord:w.secretWord,coins:w.coins,data:"",artist:r.name,guessed:!1,guesses:[],createdAt:new Date,guessedBy:"",hintPurchased:!1,superHintPurchased:!1})},v=async()=>{if(r&&r.coins>=5&&!y){t(8,y=!0);try{await Rn(r.name,-5),t(6,m++,m),t(7,p=Dc(4))}finally{setTimeout(()=>{t(8,y=!1)},1e3)}}};function T(w){xr[w?"unshift":"push"](()=>{f=w,t(5,f)})}const I=()=>f.clearCanvas(),P=async()=>{if(c&&s&&!u){t(4,u=!0);const w=f.getImageData(),W={...c,data:w};s.drawings.push(W),await yi(s),t(1,c=null),dt(mt,s=null,s),t(4,u=!1)}};return n.$$.update=()=>{if(n.$$.dirty[0]&13&&s&&r){const w=_a(s,r.name);t(0,a=w?iv(w):null),t(9,b=r.name===(a==null?void 0:a.artist))}n.$$.dirty[0]&2&&(c?dt(Cs,i=!0,i):dt(Cs,i=!1,i))},t(7,p=Dc(4)),[a,c,r,s,u,f,m,p,y,b,R,C,l,D,F,L,O,G,H,A,_,v,T,I,P]}class $v extends vt{constructor(e){super(),wt(this,e,Kv,Gv,ut,{},null,[-1,-1])}}function fu(n,e,t){const r=n.slice();return r[17]=e[t],r}function du(n){let e,t,r;return{c(){e=N("button"),e.textContent="×",E(e,"class","absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-black p-2")},m(s,i){q(s,e,i),t||(r=de(e,"click",n[9]),t=!0)},p:J,d(s){s&&j(e),t=!1,r()}}}function Qv(n){let e,t,r=Re(n[2]),s=[];for(let a=0;a<r.length;a+=1)s[a]=pu(fu(n,r,a));const i=a=>ee(s[a],1,1,()=>{s[a]=null});return{c(){for(let a=0;a<s.length;a+=1)s[a].c();e=It()},m(a,l){for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(a,l);q(a,e,l),t=!0},p(a,l){if(l&180){r=Re(a[2]);let c;for(c=0;c<r.length;c+=1){const u=fu(a,r,c);s[c]?(s[c].p(u,l),Q(s[c],1)):(s[c]=pu(u),s[c].c(),Q(s[c],1),s[c].m(e.parentNode,e))}for(Fe(),c=r.length;c<s.length;c+=1)i(c);Ue()}},i(a){if(!t){for(let l=0;l<r.length;l+=1)Q(s[l]);t=!0}},o(a){s=s.filter(Boolean);for(let l=0;l<s.length;l+=1)ee(s[l]);t=!1},d(a){a&&j(e),_t(s,a)}}}function Xv(n){let e;return{c(){e=N("div"),e.textContent="No users found",E(e,"class","text-center py-8 text-black/60")},m(t,r){q(t,e,r)},p:J,i:J,o:J,d(t){t&&j(e)}}}function Yv(n){let e;return{c(){e=N("div"),e.innerHTML='<div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>',E(e,"class","flex items-center justify-center py-8")},m(t,r){q(t,e,r)},p:J,i:J,o:J,d(t){t&&j(e)}}}function mu(n){let e,t;function r(...l){return n[10](n[17],...l)}function s(...l){return n[11](n[17],...l)}function i(...l){return n[12](n[17],...l)}function a(){return n[13](n[17])}return e=new ya({props:{name:n[17].name,coins:n[17].coins,showAvatar:!0,subtitle:n[5].filter(r).length>0?`${n[5].filter(s).length} game${n[5].filter(i).length>1?"s":""}`:null,onClick:a}}),{c(){We(e.$$.fragment)},m(l,c){Be(e,l,c),t=!0},p(l,c){n=l;const u={};c&4&&(u.name=n[17].name),c&4&&(u.coins=n[17].coins),c&36&&(u.subtitle=n[5].filter(r).length>0?`${n[5].filter(s).length} game${n[5].filter(i).length>1?"s":""}`:null),c&4&&(u.onClick=a),e.$set(u)},i(l){t||(Q(e.$$.fragment,l),t=!0)},o(l){ee(e.$$.fragment,l),t=!1},d(l){je(e,l)}}}function pu(n){let e,t,r=n[4]&&n[4].name!==n[17].name&&mu(n);return{c(){r&&r.c(),e=It()},m(s,i){r&&r.m(s,i),q(s,e,i),t=!0},p(s,i){s[4]&&s[4].name!==s[17].name?r?(r.p(s,i),i&20&&Q(r,1)):(r=mu(s),r.c(),Q(r,1),r.m(e.parentNode,e)):r&&(Fe(),ee(r,1,1,()=>{r=null}),Ue())},i(s){t||(Q(r),t=!0)},o(s){ee(r),t=!1},d(s){s&&j(e),r&&r.d(s)}}}function Jv(n){let e,t,r,s,i,a,l,c,u,f,m,p,y,b,R,C,D,F;r=new wi({props:{navigate:n[0]}});let L=n[1]&&du(n);const O=[Yv,Xv,Qv],G=[];function H(A,_){return A[3]?0:A[2].length===0?1:2}return b=H(n),R=G[b]=O[b](n),{c(){e=N("div"),t=N("div"),We(r.$$.fragment),s=$(),i=N("h2"),i.textContent="Challenge a friend",a=$(),l=N("p"),l.textContent="Tap on a user to start a new game",c=$(),u=N("div"),f=N("input"),m=$(),L&&L.c(),p=$(),y=N("div"),R.c(),E(i,"class","text-xl font-bold text-primary"),E(l,"class","text-sm text-black/60"),E(t,"class","flex flex-col gap-2"),E(f,"type","text"),E(f,"placeholder","Search users..."),E(f,"class","input input-bordered w-full bg-white text-black border-primary rounded-xl text-base px-4 py-3 shadow-sm"),E(f,"autocorrect","off"),E(u,"class","relative"),E(y,"class","flex flex-col w-full gap-2 pt-2 overflow-y-auto"),E(e,"class","flex flex-col gap-4 p-4 pt-24")},m(A,_){q(A,e,_),k(e,t),Be(r,t,null),k(t,s),k(t,i),k(t,a),k(t,l),k(e,c),k(e,u),k(u,f),sn(f,n[1]),k(u,m),L&&L.m(u,null),k(e,p),k(e,y),G[b].m(y,null),C=!0,D||(F=[de(f,"input",n[6]),de(f,"input",n[8])],D=!0)},p(A,[_]){const v={};_&1&&(v.navigate=A[0]),r.$set(v),_&2&&f.value!==A[1]&&sn(f,A[1]),A[1]?L?L.p(A,_):(L=du(A),L.c(),L.m(u,null)):L&&(L.d(1),L=null);let T=b;b=H(A),b===T?G[b].p(A,_):(Fe(),ee(G[T],1,1,()=>{G[T]=null}),Ue(),R=G[b],R?R.p(A,_):(R=G[b]=O[b](A),R.c()),Q(R,1),R.m(y,null))},i(A){C||(Q(r.$$.fragment,A),Q(R),C=!0)},o(A){ee(r.$$.fragment,A),ee(R),C=!1},d(A){A&&j(e),je(r),L&&L.d(),G[b].d(),D=!1,yt(F)}}}function Zv(n,e,t){let r,s,i;Qe(n,Xe,O=>t(4,r=O)),Qe(n,mt,O=>t(16,s=O)),Qe(n,Gr,O=>t(5,i=O));let a="",l=[],c,u=!0,f=!1,{navigate:m}=e;function p(){clearTimeout(c),c=setTimeout(async()=>{t(3,u=!0),t(2,l=await Pc(a)),t(3,u=!1)},300)}(async()=>(t(3,u=!0),t(2,l=await Pc("")),t(3,u=!1)))();async function y(O){if(!(!r||f)){f=!0;try{dt(mt,s=await Zw([r.name,O.name]),s)}catch(G){console.error("Error creating game:",G)}finally{f=!1}}}function b(){a=this.value,t(1,a)}const R=()=>{t(1,a=""),p()},C=(O,G)=>G.users.includes(O.name),D=(O,G)=>G.users.includes(O.name),F=(O,G)=>G.users.includes(O.name),L=O=>y(O);return n.$$set=O=>{"navigate"in O&&t(0,m=O.navigate)},[m,a,l,u,r,i,p,y,b,R,C,D,F,L]}class e0 extends vt{constructor(e){super(),wt(this,e,Zv,Jv,ut,{navigate:0})}}function gu(n,e,t){const r=n.slice();return r[3]=e[t],r}function _u(n,e,t){const r=n.slice();return r[6]=e[t],r[8]=t,r}function yu(n,e,t){const r=n.slice();return r[9]=e[t],r}function t0(n){let e,t=Re(n[1]),r=[];for(let s=0;s<t.length;s+=1)r[s]=Tu(gu(n,t,s));return{c(){e=N("div");for(let s=0;s<r.length;s+=1)r[s].c();E(e,"class","flex flex-col gap-4")},m(s,i){q(s,e,i);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(e,null)},p(s,i){if(i&2){t=Re(s[1]);let a;for(a=0;a<t.length;a+=1){const l=gu(s,t,a);r[a]?r[a].p(l,i):(r[a]=Tu(l),r[a].c(),r[a].m(e,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=t.length}},d(s){s&&j(e),_t(r,s)}}}function n0(n){let e;return{c(){e=N("div"),e.innerHTML='<span class="text-accent">Loading drawings...</span>',E(e,"class","flex justify-center items-center h-40")},m(t,r){q(t,e,r)},p:J,d(t){t&&j(e)}}}function wu(n){let e,t,r,s,i,a,l,c,u,f=n[3].artist+"",m,p,y,b,R,C=Re(Array(n[3].coins)),D=[];for(let v=0;v<C.length;v+=1)D[v]=vu(yu(n,C,v));function F(v,T){return v[3].guessed?s0:r0}let L=F(n),O=L(n);function G(v,T){return v[3].guesses.length>0?o0:i0}let H=G(n),A=H(n),_=n[3].hintPurchased&&bu(n);return{c(){e=N("div"),t=N("div");for(let v=0;v<D.length;v+=1)D[v].c();r=$(),s=N("img"),a=$(),l=N("p"),O.c(),c=re(`
							by
							`),u=N("span"),m=re(f),p=$(),y=N("p"),A.c(),b=$(),_&&_.c(),R=$(),E(t,"class","flex flex-row gap-1 absolute top-2 right-2"),Tt(s.src,i=`${n[3].data}`)||E(s,"src",i),E(s,"class","w-full h-full object-contain"),E(s,"alt","Drawing"),E(u,"class","font-semibold"),E(l,"class","text-lg text-center py-2 align-middle items-center"),E(y,"class","text-[0.8rem] text-center align-middle items-center w-3/4"),E(e,"class","bg-white/90 p-1 relative rounded-lg w-full max-w-[min(90vw,400px)] flex flex-col items-center justify-center mx-auto border-2 border-primary")},m(v,T){q(v,e,T),k(e,t);for(let I=0;I<D.length;I+=1)D[I]&&D[I].m(t,null);k(e,r),k(e,s),k(e,a),k(e,l),O.m(l,null),k(l,c),k(l,u),k(u,m),k(e,p),k(e,y),A.m(y,null),k(e,b),_&&_.m(e,null),k(e,R)},p(v,T){if(T&2){C=Re(Array(v[3].coins));let I;for(I=0;I<C.length;I+=1){const P=yu(v,C,I);D[I]?D[I].p(P,T):(D[I]=vu(),D[I].c(),D[I].m(t,null))}for(;I<D.length;I+=1)D[I].d(1);D.length=C.length}T&2&&!Tt(s.src,i=`${v[3].data}`)&&E(s,"src",i),L===(L=F(v))&&O?O.p(v,T):(O.d(1),O=L(v),O&&(O.c(),O.m(l,c))),T&2&&f!==(f=v[3].artist+"")&&ye(m,f),H===(H=G(v))&&A?A.p(v,T):(A.d(1),A=H(v),A&&(A.c(),A.m(y,null))),v[3].hintPurchased?_?_.p(v,T):(_=bu(v),_.c(),_.m(e,R)):_&&(_.d(1),_=null)},d(v){v&&j(e),_t(D,v),O.d(),A.d(),_&&_.d()}}}function vu(n){let e,t;return{c(){e=N("img"),Tt(e.src,t=lr)||E(e,"src",t),E(e,"class","w-4 h-4")},m(r,s){q(r,e,s)},p:J,d(r){r&&j(e)}}}function r0(n){let e;return{c(){e=N("span"),e.textContent="?",E(e,"class","font-bold text-primary")},m(t,r){q(t,e,r)},p:J,d(t){t&&j(e)}}}function s0(n){let e,t=n[3].secretWord+"",r;return{c(){e=N("span"),r=re(t),E(e,"class","font-bold text-primary")},m(s,i){q(s,e,i),k(e,r)},p(s,i){i&2&&t!==(t=s[3].secretWord+"")&&ye(r,t)},d(s){s&&j(e)}}}function i0(n){let e,t,r=n[3].guessedBy+"",s,i;return{c(){e=N("span"),t=N("span"),s=re(r),i=re(`
									is thinking...`),E(t,"class","font-semibold"),E(e,"class","italic")},m(a,l){q(a,e,l),k(e,t),k(t,s),k(e,i)},p(a,l){l&2&&r!==(r=a[3].guessedBy+"")&&ye(s,r)},d(a){a&&j(e)}}}function o0(n){let e,t=n[3].guessedBy+"",r,s,i,a,l=!n[3].guessed&&Au(),c=Re(n[3].guesses),u=[];for(let f=0;f<c.length;f+=1)u[f]=Eu(_u(n,c,f));return{c(){e=N("span"),r=re(t),s=$(),l&&l.c(),i=re(`
								guessed:
								`);for(let f=0;f<u.length;f+=1)u[f].c();a=It(),E(e,"class","font-semibold")},m(f,m){q(f,e,m),k(e,r),q(f,s,m),l&&l.m(f,m),q(f,i,m);for(let p=0;p<u.length;p+=1)u[p]&&u[p].m(f,m);q(f,a,m)},p(f,m){if(m&2&&t!==(t=f[3].guessedBy+"")&&ye(r,t),f[3].guessed?l&&(l.d(1),l=null):l||(l=Au(),l.c(),l.m(i.parentNode,i)),m&2){c=Re(f[3].guesses);let p;for(p=0;p<c.length;p+=1){const y=_u(f,c,p);u[p]?u[p].p(y,m):(u[p]=Eu(y),u[p].c(),u[p].m(a.parentNode,a))}for(;p<u.length;p+=1)u[p].d(1);u.length=c.length}},d(f){f&&(j(e),j(s),j(i),j(a)),l&&l.d(f),_t(u,f)}}}function Au(n){let e;return{c(){e=re("has")},m(t,r){q(t,e,r)},d(t){t&&j(e)}}}function Eu(n){let e,t=n[6]+"",r,s=n[8]<n[3].guesses.length-1?", ":"",i;return{c(){e=N("span"),r=re(t),i=re(s),E(e,"class","italic")},m(a,l){q(a,e,l),k(e,r),k(e,i)},p(a,l){l&2&&t!==(t=a[6]+"")&&ye(r,t),l&2&&s!==(s=a[8]<a[3].guesses.length-1?", ":"")&&ye(i,s)},d(a){a&&j(e)}}}function bu(n){let e,t=n[3].hintPurchased?`${n[3].guessedBy} used a Hint`:"",r,s=n[3].superHintPurchased?"... AND a SuperHint!":"",i;return{c(){e=N("p"),r=re(t),i=re(s),E(e,"class","text-[0.8rem] text-secondary flex flex-row py-2 text-center align-middle items-center")},m(a,l){q(a,e,l),k(e,r),k(e,i)},p(a,l){l&2&&t!==(t=a[3].hintPurchased?`${a[3].guessedBy} used a Hint`:"")&&ye(r,t),l&2&&s!==(s=a[3].superHintPurchased?"... AND a SuperHint!":"")&&ye(i,s)},d(a){a&&j(e)}}}function Tu(n){let e,t=n[3].data&&n[3].data.length>10&&wu(n);return{c(){t&&t.c(),e=It()},m(r,s){t&&t.m(r,s),q(r,e,s)},p(r,s){r[3].data&&r[3].data.length>10?t?t.p(r,s):(t=wu(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(r){r&&j(e),t&&t.d(r)}}}function a0(n){let e,t,r,s;t=new wi({props:{navigate:n[0]}});function i(c,u){return c[2]?n0:t0}let a=i(n),l=a(n);return{c(){e=N("div"),We(t.$$.fragment),r=$(),l.c(),E(e,"class","p-4")},m(c,u){q(c,e,u),Be(t,e,null),k(e,r),l.m(e,null),s=!0},p(c,[u]){const f={};u&1&&(f.navigate=c[0]),t.$set(f),a===(a=i(c))&&l?l.p(c,u):(l.d(1),l=a(c),l&&(l.c(),l.m(e,null)))},i(c){s||(Q(t.$$.fragment,c),s=!0)},o(c){ee(t.$$.fragment,c),s=!1},d(c){c&&j(e),je(t),l.d()}}}function l0(n,e,t){let r=[],s=!0,{navigate:i}=e;return Hr(async()=>{console.log("Feed mounted"),t(1,r=await tv()),console.log("Drawings loaded",r),t(2,s=!1)}),n.$$set=a=>{"navigate"in a&&t(0,i=a.navigate)},[i,r,s]}class c0 extends vt{constructor(e){super(),wt(this,e,l0,a0,ut,{navigate:0})}}function Iu(n){var G;let e,t,r,s,i,a,l,c,u=(((G=n[2])==null?void 0:G.coins)||0)+"",f,m,p,y,b,R,C,D;function F(H,A){return H[3]?h0:u0}let L=F(n),O=L(n);return{c(){e=N("nav"),t=N("div"),r=N("button"),s=N("div"),i=N("img"),l=$(),c=N("span"),f=re(u),m=$(),p=N("span"),p.textContent="coins",y=$(),O.c(),b=$(),R=N("div"),Tt(i.src,a=To)||E(i,"src",a),E(i,"class","w-5 h-5"),E(i,"alt","coins"),E(c,"class","text-sm font-medium"),E(s,"class","flex items-center gap-1"),E(p,"class","text-xs text-gray-500"),E(r,"class","flex flex-col items-center"),E(t,"class","flex justify-around items-center max-w-md mx-auto"),E(e,"class","fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2"),E(R,"class","h-20")},m(H,A){q(H,e,A),k(e,t),k(t,r),k(r,s),k(s,i),k(s,l),k(s,c),k(c,f),k(r,m),k(r,p),k(t,y),O.m(t,null),q(H,b,A),q(H,R,A),C||(D=de(r,"click",n[6]),C=!0)},p(H,A){var _;A&4&&u!==(u=(((_=H[2])==null?void 0:_.coins)||0)+"")&&ye(f,u),L===(L=F(H))&&O?O.p(H,A):(O.d(1),O=L(H),O&&(O.c(),O.m(t,null)))},d(H){H&&(j(e),j(b),j(R)),O.d(),C=!1,D()}}}function u0(n){let e,t,r,s,i,a,l,c,u,f,m,p,y,b,R,C,D,F,L,O,G,H,A,_,v,T,I,P;return{c(){e=N("button"),t=Yt("svg"),r=Yt("path"),i=$(),a=N("span"),l=re("Home"),u=$(),f=N("button"),m=Yt("svg"),p=Yt("path"),b=$(),R=N("span"),C=re("New"),F=$(),L=N("button"),O=Yt("svg"),G=Yt("path"),A=$(),_=N("span"),v=re("Feed"),E(r,"stroke-linecap","round"),E(r,"stroke-linejoin","round"),E(r,"stroke-width","2"),E(r,"d","M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"),E(t,"xmlns","http://www.w3.org/2000/svg"),E(t,"class",s="h-6 w-6 "+(n[0]==="home"?"text-primary":"text-gray-400")),E(t,"fill","none"),E(t,"viewBox","0 0 24 24"),E(t,"stroke","currentColor"),E(a,"class",c="text-xs "+(n[0]==="home"?"text-primary":"text-gray-500")),E(e,"class","flex flex-col items-center"),E(p,"stroke-linecap","round"),E(p,"stroke-linejoin","round"),E(p,"stroke-width","2"),E(p,"d","M12 4v16m8-8H4"),E(m,"xmlns","http://www.w3.org/2000/svg"),E(m,"class",y="h-6 w-6 "+(n[0]==="new"?"text-primary":"text-gray-400")),E(m,"fill","none"),E(m,"viewBox","0 0 24 24"),E(m,"stroke","currentColor"),E(R,"class",D="text-xs "+(n[0]==="new"?"text-primary":"text-gray-500")),E(f,"class","flex flex-col items-center"),E(G,"stroke-linecap","round"),E(G,"stroke-linejoin","round"),E(G,"stroke-width","2"),E(G,"d","M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"),E(O,"xmlns","http://www.w3.org/2000/svg"),E(O,"class",H="h-6 w-6 "+(n[0]==="feed"?"text-primary":"text-gray-400")),E(O,"fill","none"),E(O,"viewBox","0 0 24 24"),E(O,"stroke","currentColor"),E(_,"class",T="text-xs "+(n[0]==="feed"?"text-primary":"text-gray-500")),E(L,"class","flex flex-col items-center")},m(w,W){q(w,e,W),k(e,t),k(t,r),k(e,i),k(e,a),k(a,l),q(w,u,W),q(w,f,W),k(f,m),k(m,p),k(f,b),k(f,R),k(R,C),q(w,F,W),q(w,L,W),k(L,O),k(O,G),k(L,A),k(L,_),k(_,v),I||(P=[de(e,"click",n[8]),de(f,"click",n[9]),de(L,"click",n[10])],I=!0)},p(w,W){W&1&&s!==(s="h-6 w-6 "+(w[0]==="home"?"text-primary":"text-gray-400"))&&E(t,"class",s),W&1&&c!==(c="text-xs "+(w[0]==="home"?"text-primary":"text-gray-500"))&&E(a,"class",c),W&1&&y!==(y="h-6 w-6 "+(w[0]==="new"?"text-primary":"text-gray-400"))&&E(m,"class",y),W&1&&D!==(D="text-xs "+(w[0]==="new"?"text-primary":"text-gray-500"))&&E(R,"class",D),W&1&&H!==(H="h-6 w-6 "+(w[0]==="feed"?"text-primary":"text-gray-400"))&&E(O,"class",H),W&1&&T!==(T="text-xs "+(w[0]==="feed"?"text-primary":"text-gray-500"))&&E(_,"class",T)},d(w){w&&(j(e),j(u),j(f),j(F),j(L)),I=!1,yt(P)}}}function h0(n){let e,t,r;return{c(){e=N("button"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg> <span class="text-xs text-primary">Back</span>',E(e,"class","flex flex-col items-center")},m(s,i){q(s,e,i),t||(r=de(e,"click",n[7]),t=!0)},p:J,d(s){s&&j(e),t=!1,r()}}}function f0(n){let e,t=!n[1]&&Iu(n);return{c(){t&&t.c(),e=It()},m(r,s){t&&t.m(r,s),q(r,e,s)},p(r,[s]){r[1]?t&&(t.d(1),t=null):t?t.p(r,s):(t=Iu(r),t.c(),t.m(e.parentNode,e))},i:J,o:J,d(r){r&&j(e),t&&t.d(r)}}}function d0(n,e,t){let r,s,i;Qe(n,Cs,R=>t(1,r=R)),Qe(n,Xe,R=>t(2,s=R)),Qe(n,mt,R=>t(3,i=R));let{navigate:a}=e,l="home";function c(){const R=new URLSearchParams(window.location.search);t(0,l=R.get("page")||"home")}typeof window<"u"&&(window.addEventListener("popstate",c),c());const u=R=>{t(0,l=R),a(R)},f=()=>u("store"),m=()=>{dt(mt,i=null,i),u("home")},p=()=>u("home"),y=()=>u("new"),b=()=>u("feed");return n.$$set=R=>{"navigate"in R&&t(5,a=R.navigate)},[l,r,s,i,u,a,f,m,p,y,b]}class m0 extends vt{constructor(e){super(),wt(this,e,d0,f0,ut,{navigate:5})}}function Ru(n){let e,t,r,s,i,a,l,c,u,f,m,p;return{c(){e=N("div"),t=N("div"),r=N("h2"),r.textContent="Dev Menu",s=$(),i=N("div"),a=N("button"),a.textContent="Delete All Users",l=$(),c=N("button"),u=re("Add 5 Points"),E(r,"class","text-lg font-bold mb-4"),E(a,"class","btn btn-error"),E(c,"class","btn btn-primary"),c.disabled=f=!n[1],E(i,"class","flex flex-col gap-2"),E(t,"class","bg-white rounded-lg shadow-lg p-4 border border-gray-200"),E(e,"class","fixed top-0 right-0 p-4 z-50")},m(y,b){q(y,e,b),k(e,t),k(t,r),k(t,s),k(t,i),k(i,a),k(i,l),k(i,c),k(c,u),m||(p=[de(a,"click",n[2]),de(c,"click",n[3])],m=!0)},p(y,b){b&2&&f!==(f=!y[1])&&(c.disabled=f)},d(y){y&&j(e),m=!1,yt(p)}}}function p0(n){let e,t=n[0]&&Ru(n);return{c(){t&&t.c(),e=It()},m(r,s){t&&t.m(r,s),q(r,e,s)},p(r,[s]){r[0]?t?t.p(r,s):(t=Ru(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:J,o:J,d(r){r&&j(e),t&&t.d(r)}}}function g0(n,e,t){let r;Qe(n,Xe,c=>t(1,r=c));let s=!1;async function i(c){c.key==="\\"&&t(0,s=!s)}async function a(){if(confirm("Are you sure you want to delete ALL users? This cannot be undone!"))try{const c=await Ft(Kt),u=Gw(Jr);c.docs.forEach(f=>{u.delete(f.ref)}),await u.commit(),localStorage.removeItem("drawIt-user"),localStorage.removeItem("drawIt-games"),localStorage.removeItem("drawIt-users"),Xe.set(null),alert("All users deleted successfully!"),window.location.reload()}catch(c){console.error("Error deleting users:",c),alert("Error deleting users. Check console for details.")}}async function l(){if(r)try{await Rn(r.name,5)}catch(c){console.error("Error adding points:",c),alert("Error adding points. Check console for details.")}}return Hr(()=>(window.addEventListener("keydown",i),()=>{window.removeEventListener("keydown",i)})),[s,r,a,l]}class _0 extends vt{constructor(e){super(),wt(this,e,g0,p0,ut,{})}}function y0(n){var I;let e,t,r,s,i,a,l,c,u,f=(((I=n[2])==null?void 0:I.coins)||0)+"",m,p,y,b,R,C,D,F,L,O,G,H,A,_,v,T;return t=new wi({props:{navigate:n[0]}}),{c(){e=N("div"),We(t.$$.fragment),r=$(),s=N("div"),i=N("div"),a=N("img"),c=$(),u=N("span"),m=re(f),p=$(),y=N("p"),y.textContent="Your current balance",b=$(),R=N("div"),C=N("div"),D=N("div"),D.innerHTML=`<img src="${To}" class="w-8 h-8" alt="coins"/> <span class="text-2xl font-bold">50</span>`,F=$(),L=N("input"),O=$(),G=N("button"),H=re("Submit"),Tt(a.src,l=To)||E(a,"src",l),E(a,"class","w-8 h-8"),E(a,"alt","coins"),E(u,"class","text-2xl font-bold"),E(i,"class","flex items-center gap-2"),E(y,"class","text-gray-600"),E(D,"class","flex flex-row items-center justify-center gap-2"),E(L,"type","text"),E(L,"placeholder","Enter custom word"),E(L,"class","input input-bordered w-full max-w-xs"),E(L,"maxlength","15"),E(L,"minlength","3"),E(G,"class","btn btn-primary"),G.disabled=A=!n[3],E(C,"class","flex flex-col items-center justify-center gap-4"),E(R,"class","flex flex-col items-center justify-center gap-4 pt-16 drop-shadow-sm"),E(s,"class","flex flex-col items-center justify-center gap-4 mt-8"),E(e,"class","p-4")},m(P,w){q(P,e,w),Be(t,e,null),k(e,r),k(e,s),k(s,i),k(i,a),k(i,c),k(i,u),k(u,m),k(s,p),k(s,y),k(s,b),k(s,R),k(R,C),k(C,D),k(C,F),k(C,L),sn(L,n[1]),k(C,O),k(C,G),k(G,H),_=!0,v||(T=[de(L,"input",n[7]),de(L,"input",n[4]),de(L,"keydown",n[8]),de(G,"click",n[5])],v=!0)},p(P,[w]){var we;const W={};w&1&&(W.navigate=P[0]),t.$set(W),(!_||w&4)&&f!==(f=(((we=P[2])==null?void 0:we.coins)||0)+"")&&ye(m,f),w&2&&L.value!==P[1]&&sn(L,P[1]),(!_||w&8&&A!==(A=!P[3]))&&(G.disabled=A)},i(P){_||(Q(t.$$.fragment,P),_=!0)},o(P){ee(t.$$.fragment,P),_=!1},d(P){P&&j(e),je(t),v=!1,yt(T)}}}function Cu(n){return n.replace(/[^a-zA-Z0-9 ]/g,"")}function w0(n,e,t){let r,s,i;Qe(n,Xe,p=>t(6,i=p));let{navigate:a}=e,l="";function c(p){const y=p.target;t(1,l=Cu(y.value))}async function u(){if(!s||!r)return;let p=Cu(l);p=p.trim(),await Rn(r.name,-50),await Yw(p,r.name),Jf("Custom word added!"),t(1,l="")}function f(){l=this.value,t(1,l)}const m=p=>{p.key==="Enter"&&u()};return n.$$set=p=>{"navigate"in p&&t(0,a=p.navigate)},n.$$.update=()=>{n.$$.dirty&64&&t(2,r=i),n.$$.dirty&6&&t(3,s=r&&r.coins!==void 0&&r.coins>=50&&l.length>=3&&l.length<=15)},[a,l,r,s,c,u,i,f,m]}class v0 extends vt{constructor(e){super(),wt(this,e,w0,y0,ut,{navigate:0})}}function A0(n){let e,t,r,s,i,a,l,c,u;const f=[C0,R0,I0,T0,b0],m=[];function p(y,b){return y[2]?0:y[0]==="home"?1:y[0]==="new"?2:y[0]==="feed"?3:y[0]==="store"?4:-1}return~(r=p(n))&&(s=m[r]=f[r](n)),a=new m0({props:{navigate:n[3]}}),c=new _0({}),{c(){e=N("main"),t=N("div"),s&&s.c(),i=$(),We(a.$$.fragment),l=$(),We(c.$$.fragment),E(t,"class","w-full max-w-md mx-auto px-4"),E(e,"class","w-full min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-background-gradient-start to-background-gradient-end text-black pb-20 overflow-y-auto")},m(y,b){q(y,e,b),k(e,t),~r&&m[r].m(t,null),k(e,i),Be(a,e,null),k(e,l),Be(c,e,null),u=!0},p(y,b){let R=r;r=p(y),r===R?~r&&m[r].p(y,b):(s&&(Fe(),ee(m[R],1,1,()=>{m[R]=null}),Ue()),~r?(s=m[r],s?s.p(y,b):(s=m[r]=f[r](y),s.c()),Q(s,1),s.m(t,null)):s=null)},i(y){u||(Q(s),Q(a.$$.fragment,y),Q(c.$$.fragment,y),u=!0)},o(y){ee(s),ee(a.$$.fragment,y),ee(c.$$.fragment,y),u=!1},d(y){y&&j(e),~r&&m[r].d(),je(a),je(c)}}}function E0(n){let e;return{c(){e=N("div"),e.innerHTML='<div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>',E(e,"class","w-full min-h-screen flex items-center justify-center")},m(t,r){q(t,e,r)},p:J,i:J,o:J,d(t){t&&j(e)}}}function b0(n){let e,t;return e=new v0({props:{navigate:n[3]}}),{c(){We(e.$$.fragment)},m(r,s){Be(e,r,s),t=!0},p:J,i(r){t||(Q(e.$$.fragment,r),t=!0)},o(r){ee(e.$$.fragment,r),t=!1},d(r){je(e,r)}}}function T0(n){let e,t;return e=new c0({props:{navigate:n[3]}}),{c(){We(e.$$.fragment)},m(r,s){Be(e,r,s),t=!0},p:J,i(r){t||(Q(e.$$.fragment,r),t=!0)},o(r){ee(e.$$.fragment,r),t=!1},d(r){je(e,r)}}}function I0(n){let e,t;return e=new e0({props:{navigate:n[3]}}),{c(){We(e.$$.fragment)},m(r,s){Be(e,r,s),t=!0},p:J,i(r){t||(Q(e.$$.fragment,r),t=!0)},o(r){ee(e.$$.fragment,r),t=!1},d(r){je(e,r)}}}function R0(n){let e,t;return e=new Sv({props:{navigate:n[3]}}),{c(){We(e.$$.fragment)},m(r,s){Be(e,r,s),t=!0},p:J,i(r){t||(Q(e.$$.fragment,r),t=!0)},o(r){ee(e.$$.fragment,r),t=!1},d(r){je(e,r)}}}function C0(n){let e,t;return e=new $v({}),{c(){We(e.$$.fragment)},m(r,s){Be(e,r,s),t=!0},p:J,i(r){t||(Q(e.$$.fragment,r),t=!0)},o(r){ee(e.$$.fragment,r),t=!1},d(r){je(e,r)}}}function k0(n){let e,t,r,s;const i=[E0,A0],a=[];function l(c,u){return c[1]?0:1}return e=l(n),t=a[e]=i[e](n),{c(){t.c(),r=It()},m(c,u){a[e].m(c,u),q(c,r,u),s=!0},p(c,[u]){let f=e;e=l(c),e===f?a[e].p(c,u):(Fe(),ee(a[f],1,1,()=>{a[f]=null}),Ue(),t=a[e],t?t.p(c,u):(t=a[e]=i[e](c),t.c()),Q(t,1),t.m(r.parentNode,r))},i(c){s||(Q(t),s=!0)},o(c){ee(t),s=!1},d(c){c&&j(r),a[e].d(c)}}}function S0(n,e,t){let r;Qe(n,mt,l=>t(2,r=l));let s="home",i=!0;Hr(async()=>{await ev();const l=new URLSearchParams(window.location.search);t(0,s=l.get("page")||"home");const c=l.get("currentGame");if(c){const u=await Vc(c);u&&dt(mt,r=u,r)}window.addEventListener("popstate",async()=>{const u=new URLSearchParams(window.location.search);t(0,s=u.get("page")||"home");const f=u.get("currentGame");if(f){const m=await Vc(f);m&&dt(mt,r=m,r)}else dt(mt,r=null,r)}),t(1,i=!1)});function a(l){const c=new URLSearchParams(window.location.search),u=r==null?void 0:r.id;u?c.set("currentGame",u):c.delete("currentGame"),l!=="home"?c.set("page",l):c.delete("page");const f=c.toString(),m=f?`?${f}`:"/";window.history.pushState({},"",m),t(0,s=l)}return[s,i,r,a]}class P0 extends vt{constructor(e){super(),wt(this,e,S0,k0,ut,{})}}new P0({target:document.getElementById("app")});
