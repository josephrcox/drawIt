var yd=Object.defineProperty;var wd=(n,e,t)=>e in n?yd(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var vd=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var xi=(n,e,t)=>wd(n,typeof e!="symbol"?e+"":e,t);var _0=vd((v0,Yr)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();function Q(){}function Ed(n){return!!n&&(typeof n=="object"||typeof n=="function")&&typeof n.then=="function"}function bu(n){return n()}function al(){return Object.create(null)}function vt(n){n.forEach(bu)}function Iu(n){return typeof n=="function"}function Et(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let gs;function At(n,e){return n===e?!0:(gs||(gs=document.createElement("a")),gs.href=e,n===gs.href)}function Td(n){return Object.keys(n).length===0}function Au(n,...e){if(n==null){for(const r of e)r(void 0);return Q}const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Qs(n){let e;return Au(n,t=>e=t)(),e}function Ye(n,e,t){n.$$.on_destroy.push(Au(e,t))}function ht(n,e,t){return n.set(t),e}function V(n,e){n.appendChild(e)}function q(n,e,t){n.insertBefore(e,t||null)}function j(n){n.parentNode&&n.parentNode.removeChild(n)}function pt(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function M(n){return document.createElement(n)}function Xt(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function re(n){return document.createTextNode(n)}function Y(){return re(" ")}function Tt(){return re("")}function ye(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function A(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function bd(n){return Array.from(n.childNodes)}function ve(n,e){e=""+e,n.data!==e&&(n.data=e)}function Gn(n,e){n.value=e??""}function Qi(n,e,t,r){t==null?n.style.removeProperty(e):n.style.setProperty(e,t,"")}function Yt(n,e,t){n.classList.toggle(e,!!t)}let Nr;function Ut(n){Nr=n}function Ru(){if(!Nr)throw new Error("Function called outside component initialization");return Nr}function qr(n){Ru().$$.on_mount.push(n)}const Un=[],Mr=[];let zn=[];const ll=[],Id=Promise.resolve();let Xi=!1;function Ad(){Xi||(Xi=!0,Id.then(To))}function Yi(n){zn.push(n)}const Oi=new Set;let Ln=0;function To(){if(Ln!==0)return;const n=Nr;do{try{for(;Ln<Un.length;){const e=Un[Ln];Ln++,Ut(e),Rd(e.$$)}}catch(e){throw Un.length=0,Ln=0,e}for(Ut(null),Un.length=0,Ln=0;Mr.length;)Mr.pop()();for(let e=0;e<zn.length;e+=1){const t=zn[e];Oi.has(t)||(Oi.add(t),t())}zn.length=0}while(Un.length);for(;ll.length;)ll.pop()();Xi=!1,Oi.clear(),Ut(n)}function Rd(n){if(n.fragment!==null){n.update(),vt(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Yi)}}function Cd(n){const e=[],t=[];zn.forEach(r=>n.indexOf(r)===-1?e.push(r):t.push(r)),t.forEach(r=>r()),zn=e}const bs=new Set;let Tn;function Le(){Tn={r:0,c:[],p:Tn}}function Fe(){Tn.r||vt(Tn.c),Tn=Tn.p}function W(n,e){n&&n.i&&(bs.delete(n),n.i(e))}function ee(n,e,t,r){if(n&&n.o){if(bs.has(n))return;bs.add(n),Tn.c.push(()=>{bs.delete(n),r&&(t&&n.d(1),r())}),n.o(e)}else r&&r()}function cl(n,e){const t=e.token={};function r(s,i,a,l){if(e.token!==t)return;e.resolved=l;let c=e.ctx;a!==void 0&&(c=c.slice(),c[a]=l);const u=s&&(e.current=s)(c);let d=!1;e.block&&(e.blocks?e.blocks.forEach((m,p)=>{p!==i&&m&&(Le(),ee(m,1,1,()=>{e.blocks[p]===m&&(e.blocks[p]=null)}),Fe())}):e.block.d(1),u.c(),W(u,1),u.m(e.mount(),e.anchor),d=!0),e.block=u,e.blocks&&(e.blocks[i]=u),d&&To()}if(Ed(n)){const s=Ru();if(n.then(i=>{Ut(s),r(e.then,1,e.value,i),Ut(null)},i=>{if(Ut(s),r(e.catch,2,e.error,i),Ut(null),!e.hasCatch)throw i}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,n),!0;e.resolved=n}}function Sd(n,e,t){const r=e.slice(),{resolved:s}=n;n.current===n.then&&(r[n.value]=s),n.current===n.catch&&(r[n.error]=s),n.block.p(r,t)}function Ae(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function gt(n){n&&n.c()}function ot(n,e,t){const{fragment:r,after_update:s}=n.$$;r&&r.m(e,t),Yi(()=>{const i=n.$$.on_mount.map(bu).filter(Iu);n.$$.on_destroy?n.$$.on_destroy.push(...i):vt(i),n.$$.on_mount=[]}),s.forEach(Yi)}function at(n,e){const t=n.$$;t.fragment!==null&&(Cd(t.after_update),vt(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function kd(n,e){n.$$.dirty[0]===-1&&(Un.push(n),Ad(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function Ct(n,e,t,r,s,i,a=null,l=[-1]){const c=Nr;Ut(n);const u=n.$$={fragment:null,ctx:[],props:i,update:Q,not_equal:s,bound:al(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:al(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};a&&a(u.root);let d=!1;if(u.ctx=t?t(n,e.props||{},(m,p,..._)=>{const T=_.length?_[0]:p;return u.ctx&&s(u.ctx[m],u.ctx[m]=T)&&(!u.skip_bound&&u.bound[m]&&u.bound[m](T),d&&kd(n,m)),p}):[],u.update(),d=!0,vt(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){const m=bd(e.target);u.fragment&&u.fragment.l(m),m.forEach(j)}else u.fragment&&u.fragment.c();e.intro&&W(n.$$.fragment),ot(n,e.target,e.anchor),To()}Ut(c)}class St{constructor(){xi(this,"$$");xi(this,"$$set")}$destroy(){at(this,1),this.$destroy=Q}$on(e,t){if(!Iu(t))return Q;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!Td(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Pd="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Pd);const Fn=[];function er(n,e=Q){let t;const r=new Set;function s(l){if(Et(n,l)&&(n=l,t)){const c=!Fn.length;for(const u of r)u[1](),Fn.push(u,n);if(c){for(let u=0;u<Fn.length;u+=2)Fn[u][0](Fn[u+1]);Fn.length=0}}}function i(l){s(l(n))}function a(l,c=Q){const u=[l,c];return r.add(u),r.size===1&&(t=e(s,i)||Q),l(n),()=>{r.delete(u),r.size===0&&t&&(t(),t=null)}}return{set:s,update:i,subscribe:a}}const Ze=er(null),$r=er([]),ft=er(null),yt=er({}),Is=er(!1),As=er(!1);try{const n=localStorage.getItem("drawit-user");n&&Ze.set(JSON.parse(n));const e=localStorage.getItem("drawit-games");e&&$r.set(JSON.parse(e));const t=localStorage.getItem("drawit-users");t&&yt.set(JSON.parse(t))}catch(n){console.error("Error loading from localStorage:",n)}Ze.subscribe(n=>{n?localStorage.setItem("drawit-user",JSON.stringify(n)):localStorage.removeItem("drawit-user")});$r.subscribe(n=>{n?localStorage.setItem("drawit-games",JSON.stringify(n)):localStorage.removeItem("drawit-games")});yt.subscribe(n=>{Object.keys(n).length>0?localStorage.setItem("drawit-users",JSON.stringify(n)):localStorage.removeItem("drawit-users")});const Vd=()=>{};var ul={};/**
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
 */const Cu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Dd=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Su={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,c=s+2<n.length,u=c?n[s+2]:0,d=i>>2,m=(i&3)<<4|l>>4;let p=(l&15)<<2|u>>6,_=u&63;c||(_=64,a||(p=64)),r.push(t[d],t[m],t[p],t[_])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Cu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Dd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const m=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||u==null||m==null)throw new Nd;const p=i<<2|l>>4;if(r.push(p),u!==64){const _=l<<4&240|u>>2;if(r.push(_),m!==64){const T=u<<6&192|m;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Nd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Md=function(n){const e=Cu(n);return Su.encodeByteArray(e,!0)},Ds=function(n){return Md(n).replace(/\./g,"")},xd=function(n){try{return Su.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Od(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ld=()=>Od().__FIREBASE_DEFAULTS__,Fd=()=>{if(typeof process>"u"||typeof ul>"u")return;const n=ul.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ud=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&xd(n[1]);return e&&JSON.parse(e)},bo=()=>{try{return Vd()||Ld()||Fd()||Ud()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Bd=n=>{var e,t;return(t=(e=bo())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},jd=n=>{const e=Bd(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},ku=()=>{var n;return(n=bo())===null||n===void 0?void 0:n.config};/**
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
 */class qd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function $d(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ds(JSON.stringify(t)),Ds(JSON.stringify(a)),""].join(".")}/**
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
 */function zd(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hd(){var n;const e=(n=bo())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Gd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Wd(){return!Hd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Pu(){try{return typeof indexedDB=="object"}catch{return!1}}function Vu(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}function Kd(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Qd="FirebaseError";class hn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Qd,Object.setPrototypeOf(this,hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xs.prototype.create)}}class Xs{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Xd(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new hn(s,l,r)}}function Xd(n,e){return n.replace(Yd,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Yd=/\{\$([^}]+)}/g;function Ns(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(hl(i)&&hl(a)){if(!Ns(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function hl(n){return n!==null&&typeof n=="object"}/**
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
 */const Jd=1e3,Zd=2,em=4*60*60*1e3,tm=.5;function fl(n,e=Jd,t=Zd){const r=e*Math.pow(t,n),s=Math.round(tm*r*(Math.random()-.5)*2);return Math.min(em,r+s)}/**
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
 */function Rt(n){return n&&n._delegate?n._delegate:n}class jt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class nm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new qd;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sm(e))try{this.getOrInitializeService({instanceIdentifier:En})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=En){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=En){return this.instances.has(e)}getOptions(e=En){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rm(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=En){return this.component?this.component.multipleInstances?e:En:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rm(n){return n===En?void 0:n}function sm(n){return n.instantiationMode==="EAGER"}/**
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
 */class im{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new nm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var me;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(me||(me={}));const om={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},am=me.INFO,lm={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},cm=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=lm[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Io{constructor(e){this.name=e,this._logLevel=am,this._logHandler=cm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?om[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const um=(n,e)=>e.some(t=>n instanceof t);let dl,ml;function hm(){return dl||(dl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fm(){return ml||(ml=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Du=new WeakMap,Ji=new WeakMap,Nu=new WeakMap,Li=new WeakMap,Ao=new WeakMap;function dm(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Zt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Du.set(t,n)}).catch(()=>{}),Ao.set(e,n),e}function mm(n){if(Ji.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Ji.set(n,e)}let Zi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ji.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Nu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Zt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function pm(n){Zi=n(Zi)}function gm(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Fi(this),e,...t);return Nu.set(r,e.sort?e.sort():[e]),Zt(r)}:fm().includes(n)?function(...e){return n.apply(Fi(this),e),Zt(Du.get(this))}:function(...e){return Zt(n.apply(Fi(this),e))}}function _m(n){return typeof n=="function"?gm(n):(n instanceof IDBTransaction&&mm(n),um(n,hm())?new Proxy(n,Zi):n)}function Zt(n){if(n instanceof IDBRequest)return dm(n);if(Li.has(n))return Li.get(n);const e=_m(n);return e!==n&&(Li.set(n,e),Ao.set(e,n)),e}const Fi=n=>Ao.get(n);function Mu(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=Zt(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Zt(a.result),c.oldVersion,c.newVersion,Zt(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const ym=["get","getKey","getAll","getAllKeys","count"],wm=["put","add","delete","clear"],Ui=new Map;function pl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ui.get(e))return Ui.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=wm.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ym.includes(t)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[t](...l),s&&c.done]))[0]};return Ui.set(e,i),i}pm(n=>({...n,get:(e,t,r)=>pl(e,t)||n.get(e,t,r),has:(e,t)=>!!pl(e,t)||n.has(e,t)}));/**
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
 */class vm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Em(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Em(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const eo="@firebase/app",gl="0.11.3";/**
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
 */const qt=new Io("@firebase/app"),Tm="@firebase/app-compat",bm="@firebase/analytics-compat",Im="@firebase/analytics",Am="@firebase/app-check-compat",Rm="@firebase/app-check",Cm="@firebase/auth",Sm="@firebase/auth-compat",km="@firebase/database",Pm="@firebase/data-connect",Vm="@firebase/database-compat",Dm="@firebase/functions",Nm="@firebase/functions-compat",Mm="@firebase/installations",xm="@firebase/installations-compat",Om="@firebase/messaging",Lm="@firebase/messaging-compat",Fm="@firebase/performance",Um="@firebase/performance-compat",Bm="@firebase/remote-config",jm="@firebase/remote-config-compat",qm="@firebase/storage",$m="@firebase/storage-compat",zm="@firebase/firestore",Hm="@firebase/vertexai",Gm="@firebase/firestore-compat",Wm="firebase",Km="11.5.0";/**
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
 */const to="[DEFAULT]",Qm={[eo]:"fire-core",[Tm]:"fire-core-compat",[Im]:"fire-analytics",[bm]:"fire-analytics-compat",[Rm]:"fire-app-check",[Am]:"fire-app-check-compat",[Cm]:"fire-auth",[Sm]:"fire-auth-compat",[km]:"fire-rtdb",[Pm]:"fire-data-connect",[Vm]:"fire-rtdb-compat",[Dm]:"fire-fn",[Nm]:"fire-fn-compat",[Mm]:"fire-iid",[xm]:"fire-iid-compat",[Om]:"fire-fcm",[Lm]:"fire-fcm-compat",[Fm]:"fire-perf",[Um]:"fire-perf-compat",[Bm]:"fire-rc",[jm]:"fire-rc-compat",[qm]:"fire-gcs",[$m]:"fire-gcs-compat",[zm]:"fire-fst",[Gm]:"fire-fst-compat",[Hm]:"fire-vertex","fire-js":"fire-js",[Wm]:"fire-js-all"};/**
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
 */const Ms=new Map,Xm=new Map,no=new Map;function _l(n,e){try{n.container.addComponent(e)}catch(t){qt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function rn(n){const e=n.name;if(no.has(e))return qt.debug(`There were multiple attempts to register component ${e}.`),!1;no.set(e,n);for(const t of Ms.values())_l(t,n);for(const t of Xm.values())_l(t,n);return!0}function Ro(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ym(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Jm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},en=new Xs("app","Firebase",Jm);/**
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
 */class Zm{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new jt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw en.create("app-deleted",{appName:this._name})}}/**
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
 */const ep=Km;function xu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:to,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw en.create("bad-app-name",{appName:String(s)});if(t||(t=ku()),!t)throw en.create("no-options");const i=Ms.get(s);if(i){if(Ns(t,i.options)&&Ns(r,i.config))return i;throw en.create("duplicate-app",{appName:s})}const a=new im(s);for(const c of no.values())a.addComponent(c);const l=new Zm(t,r,a);return Ms.set(s,l),l}function tp(n=to){const e=Ms.get(n);if(!e&&n===to&&ku())return xu();if(!e)throw en.create("no-app",{appName:n});return e}function Vt(n,e,t){var r;let s=(r=Qm[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qt.warn(l.join(" "));return}rn(new jt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const np="firebase-heartbeat-database",rp=1,xr="firebase-heartbeat-store";let Bi=null;function Ou(){return Bi||(Bi=Mu(np,rp,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(xr)}catch(t){console.warn(t)}}}}).catch(n=>{throw en.create("idb-open",{originalErrorMessage:n.message})})),Bi}async function sp(n){try{const t=(await Ou()).transaction(xr),r=await t.objectStore(xr).get(Lu(n));return await t.done,r}catch(e){if(e instanceof hn)qt.warn(e.message);else{const t=en.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qt.warn(t.message)}}}async function yl(n,e){try{const r=(await Ou()).transaction(xr,"readwrite");await r.objectStore(xr).put(e,Lu(n)),await r.done}catch(t){if(t instanceof hn)qt.warn(t.message);else{const r=en.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});qt.warn(r.message)}}}function Lu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ip=1024,op=30;class ap{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new cp(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=wl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>op){const a=up(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){qt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=wl(),{heartbeatsToSend:r,unsentEntries:s}=lp(this._heartbeatsCache.heartbeats),i=Ds(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return qt.warn(t),""}}}function wl(){return new Date().toISOString().substring(0,10)}function lp(n,e=ip){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),vl(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),vl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class cp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Pu()?Vu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await sp(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return yl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return yl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function vl(n){return Ds(JSON.stringify({version:2,heartbeats:n})).length}function up(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function hp(n){rn(new jt("platform-logger",e=>new vm(e),"PRIVATE")),rn(new jt("heartbeat",e=>new ap(e),"PRIVATE")),Vt(eo,gl,n),Vt(eo,gl,"esm2017"),Vt("fire-js","")}hp("");var fp="firebase",dp="11.5.0";/**
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
 */Vt(fp,dp,"app");const Fu="@firebase/installations",Co="0.6.13";/**
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
 */const Uu=1e4,Bu=`w:${Co}`,ju="FIS_v2",mp="https://firebaseinstallations.googleapis.com/v1",pp=60*60*1e3,gp="installations",_p="Installations";/**
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
 */const yp={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},An=new Xs(gp,_p,yp);function qu(n){return n instanceof hn&&n.code.includes("request-failed")}/**
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
 */function $u({projectId:n}){return`${mp}/projects/${n}/installations`}function zu(n){return{token:n.token,requestStatus:2,expiresIn:vp(n.expiresIn),creationTime:Date.now()}}async function Hu(n,e){const r=(await e.json()).error;return An.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Gu({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function wp(n,{refreshToken:e}){const t=Gu(n);return t.append("Authorization",Ep(e)),t}async function Wu(n){const e=await n();return e.status>=500&&e.status<600?n():e}function vp(n){return Number(n.replace("s","000"))}function Ep(n){return`${ju} ${n}`}/**
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
 */async function Tp({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=$u(n),s=Gu(n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const a={fid:t,authVersion:ju,appId:n.appId,sdkVersion:Bu},l={method:"POST",headers:s,body:JSON.stringify(a)},c=await Wu(()=>fetch(r,l));if(c.ok){const u=await c.json();return{fid:u.fid||t,registrationStatus:2,refreshToken:u.refreshToken,authToken:zu(u.authToken)}}else throw await Hu("Create Installation",c)}/**
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
 */function Ku(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function bp(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Ip=/^[cdef][\w-]{21}$/,ro="";function Ap(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=Rp(n);return Ip.test(t)?t:ro}catch{return ro}}function Rp(n){return bp(n).substr(0,22)}/**
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
 */function Ys(n){return`${n.appName}!${n.appId}`}/**
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
 */const Qu=new Map;function Xu(n,e){const t=Ys(n);Yu(t,e),Cp(t,e)}function Yu(n,e){const t=Qu.get(n);if(t)for(const r of t)r(e)}function Cp(n,e){const t=Sp();t&&t.postMessage({key:n,fid:e}),kp()}let bn=null;function Sp(){return!bn&&"BroadcastChannel"in self&&(bn=new BroadcastChannel("[Firebase] FID Change"),bn.onmessage=n=>{Yu(n.data.key,n.data.fid)}),bn}function kp(){Qu.size===0&&bn&&(bn.close(),bn=null)}/**
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
 */const Pp="firebase-installations-database",Vp=1,Rn="firebase-installations-store";let ji=null;function So(){return ji||(ji=Mu(Pp,Vp,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Rn)}}})),ji}async function xs(n,e){const t=Ys(n),s=(await So()).transaction(Rn,"readwrite"),i=s.objectStore(Rn),a=await i.get(t);return await i.put(e,t),await s.done,(!a||a.fid!==e.fid)&&Xu(n,e.fid),e}async function Ju(n){const e=Ys(n),r=(await So()).transaction(Rn,"readwrite");await r.objectStore(Rn).delete(e),await r.done}async function Js(n,e){const t=Ys(n),s=(await So()).transaction(Rn,"readwrite"),i=s.objectStore(Rn),a=await i.get(t),l=e(a);return l===void 0?await i.delete(t):await i.put(l,t),await s.done,l&&(!a||a.fid!==l.fid)&&Xu(n,l.fid),l}/**
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
 */async function ko(n){let e;const t=await Js(n.appConfig,r=>{const s=Dp(r),i=Np(n,s);return e=i.registrationPromise,i.installationEntry});return t.fid===ro?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Dp(n){const e=n||{fid:Ap(),registrationStatus:0};return Zu(e)}function Np(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(An.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Mp(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:xp(n)}:{installationEntry:e}}async function Mp(n,e){try{const t=await Tp(n,e);return xs(n.appConfig,t)}catch(t){throw qu(t)&&t.customData.serverCode===409?await Ju(n.appConfig):await xs(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function xp(n){let e=await El(n.appConfig);for(;e.registrationStatus===1;)await Ku(100),e=await El(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await ko(n);return r||t}return e}function El(n){return Js(n,e=>{if(!e)throw An.create("installation-not-found");return Zu(e)})}function Zu(n){return Op(n)?{fid:n.fid,registrationStatus:0}:n}function Op(n){return n.registrationStatus===1&&n.registrationTime+Uu<Date.now()}/**
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
 */async function Lp({appConfig:n,heartbeatServiceProvider:e},t){const r=Fp(n,t),s=wp(n,t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const a={installation:{sdkVersion:Bu,appId:n.appId}},l={method:"POST",headers:s,body:JSON.stringify(a)},c=await Wu(()=>fetch(r,l));if(c.ok){const u=await c.json();return zu(u)}else throw await Hu("Generate Auth Token",c)}function Fp(n,{fid:e}){return`${$u(n)}/${e}/authTokens:generate`}/**
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
 */async function Po(n,e=!1){let t;const r=await Js(n.appConfig,i=>{if(!eh(i))throw An.create("not-registered");const a=i.authToken;if(!e&&jp(a))return i;if(a.requestStatus===1)return t=Up(n,e),i;{if(!navigator.onLine)throw An.create("app-offline");const l=$p(i);return t=Bp(n,l),l}});return t?await t:r.authToken}async function Up(n,e){let t=await Tl(n.appConfig);for(;t.authToken.requestStatus===1;)await Ku(100),t=await Tl(n.appConfig);const r=t.authToken;return r.requestStatus===0?Po(n,e):r}function Tl(n){return Js(n,e=>{if(!eh(e))throw An.create("not-registered");const t=e.authToken;return zp(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Bp(n,e){try{const t=await Lp(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await xs(n.appConfig,r),t}catch(t){if(qu(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Ju(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await xs(n.appConfig,r)}throw t}}function eh(n){return n!==void 0&&n.registrationStatus===2}function jp(n){return n.requestStatus===2&&!qp(n)}function qp(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+pp}function $p(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function zp(n){return n.requestStatus===1&&n.requestTime+Uu<Date.now()}/**
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
 */async function Hp(n){const e=n,{installationEntry:t,registrationPromise:r}=await ko(e);return r?r.catch(console.error):Po(e).catch(console.error),t.fid}/**
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
 */async function Gp(n,e=!1){const t=n;return await Wp(t),(await Po(t,e)).token}async function Wp(n){const{registrationPromise:e}=await ko(n);e&&await e}/**
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
 */function Kp(n){if(!n||!n.options)throw qi("App Configuration");if(!n.name)throw qi("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw qi(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function qi(n){return An.create("missing-app-config-values",{valueName:n})}/**
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
 */const th="installations",Qp="installations-internal",Xp=n=>{const e=n.getProvider("app").getImmediate(),t=Kp(e),r=Ro(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Yp=n=>{const e=n.getProvider("app").getImmediate(),t=Ro(e,th).getImmediate();return{getId:()=>Hp(t),getToken:s=>Gp(t,s)}};function Jp(){rn(new jt(th,Xp,"PUBLIC")),rn(new jt(Qp,Yp,"PRIVATE"))}Jp();Vt(Fu,Co);Vt(Fu,Co,"esm2017");/**
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
 */const bl="analytics",Zp="firebase_id",eg="origin",tg=60*1e3,ng="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Vo="https://www.googletagmanager.com/gtag/js";/**
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
 */const st=new Io("@firebase/analytics");/**
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
 */const rg={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},wt=new Xs("analytics","Analytics",rg);/**
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
 */function sg(n){if(!n.startsWith(Vo)){const e=wt.create("invalid-gtag-resource",{gtagURL:n});return st.warn(e.message),""}return n}function nh(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function ig(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function og(n,e){const t=ig("firebase-js-sdk-policy",{createScriptURL:sg}),r=document.createElement("script"),s=`${Vo}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function ag(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function lg(n,e,t,r,s,i){const a=r[s];try{if(a)await e[a];else{const c=(await nh(t)).find(u=>u.measurementId===s);c&&await e[c.appId]}}catch(l){st.error(l)}n("config",s,i)}async function cg(n,e,t,r,s){try{let i=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const l=await nh(t);for(const c of a){const u=l.find(m=>m.measurementId===c),d=u&&e[u.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),n("event",r,s||{})}catch(i){st.error(i)}}function ug(n,e,t,r){async function s(i,...a){try{if(i==="event"){const[l,c]=a;await cg(n,e,t,l,c)}else if(i==="config"){const[l,c]=a;await lg(n,e,t,r,l,c)}else if(i==="consent"){const[l,c]=a;n("consent",l,c)}else if(i==="get"){const[l,c,u]=a;n("get",l,c,u)}else if(i==="set"){const[l]=a;n("set",l)}else n(i,...a)}catch(l){st.error(l)}}return s}function hg(n,e,t,r,s){let i=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=ug(i,n,e,t),{gtagCore:i,wrappedGtag:window[s]}}function fg(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Vo)&&t.src.includes(n))return t;return null}/**
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
 */const dg=30,mg=1e3;class pg{constructor(e={},t=mg){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const rh=new pg;function gg(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function _g(n){var e;const{appId:t,apiKey:r}=n,s={method:"GET",headers:gg(r)},i=ng.replace("{app-id}",t),a=await fetch(i,s);if(a.status!==200&&a.status!==304){let l="";try{const c=await a.json();!((e=c.error)===null||e===void 0)&&e.message&&(l=c.error.message)}catch{}throw wt.create("config-fetch-failed",{httpStatus:a.status,responseMessage:l})}return a.json()}async function yg(n,e=rh,t){const{appId:r,apiKey:s,measurementId:i}=n.options;if(!r)throw wt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw wt.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new Eg;return setTimeout(async()=>{l.abort()},tg),sh({appId:r,apiKey:s,measurementId:i},a,l,e)}async function sh(n,{throttleEndTimeMillis:e,backoffCount:t},r,s=rh){var i;const{appId:a,measurementId:l}=n;try{await wg(r,e)}catch(c){if(l)return st.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:a,measurementId:l};throw c}try{const c=await _g(n);return s.deleteThrottleMetadata(a),c}catch(c){const u=c;if(!vg(u)){if(s.deleteThrottleMetadata(a),l)return st.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:l};throw c}const d=Number((i=u==null?void 0:u.customData)===null||i===void 0?void 0:i.httpStatus)===503?fl(t,s.intervalMillis,dg):fl(t,s.intervalMillis),m={throttleEndTimeMillis:Date.now()+d,backoffCount:t+1};return s.setThrottleMetadata(a,m),st.debug(`Calling attemptFetch again in ${d} millis`),sh(n,m,r,s)}}function wg(n,e){return new Promise((t,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(i),r(wt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function vg(n){if(!(n instanceof hn)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class Eg{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Tg(n,e,t,r,s){if(s&&s.global){n("event",t,r);return}else{const i=await e,a=Object.assign(Object.assign({},r),{send_to:i});n("event",t,a)}}/**
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
 */async function bg(){if(Pu())try{await Vu()}catch(n){return st.warn(wt.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return st.warn(wt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Ig(n,e,t,r,s,i,a){var l;const c=yg(n);c.then(_=>{t[_.measurementId]=_.appId,n.options.measurementId&&_.measurementId!==n.options.measurementId&&st.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>st.error(_)),e.push(c);const u=bg().then(_=>{if(_)return r.getId()}),[d,m]=await Promise.all([c,u]);fg(i)||og(i,d.measurementId),s("js",new Date);const p=(l=a==null?void 0:a.config)!==null&&l!==void 0?l:{};return p[eg]="firebase",p.update=!0,m!=null&&(p[Zp]=m),s("config",d.measurementId,p),d.measurementId}/**
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
 */class Ag{constructor(e){this.app=e}_delete(){return delete Cr[this.app.options.appId],Promise.resolve()}}let Cr={},Il=[];const Al={};let $i="dataLayer",Rg="gtag",Rl,ih,Cl=!1;function Cg(){const n=[];if(Gd()&&n.push("This is a browser extension environment."),Kd()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),t=wt.create("invalid-analytics-context",{errorInfo:e});st.warn(t.message)}}function Sg(n,e,t){Cg();const r=n.options.appId;if(!r)throw wt.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)st.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw wt.create("no-api-key");if(Cr[r]!=null)throw wt.create("already-exists",{id:r});if(!Cl){ag($i);const{wrappedGtag:i,gtagCore:a}=hg(Cr,Il,Al,$i,Rg);ih=i,Rl=a,Cl=!0}return Cr[r]=Ig(n,Il,Al,e,Rl,$i,t),new Ag(n)}function kg(n,e,t,r){n=Rt(n),Tg(ih,Cr[n.app.options.appId],e,t,r).catch(s=>st.error(s))}const Sl="@firebase/analytics",kl="0.10.12";function Pg(){rn(new jt(bl,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Sg(r,s,t)},"PUBLIC")),rn(new jt("analytics-internal",n,"PRIVATE")),Vt(Sl,kl),Vt(Sl,kl,"esm2017");function n(e){try{const t=e.getProvider(bl).getImmediate();return{logEvent:(r,s,i)=>kg(t,r,s,i)}}catch(t){throw wt.create("interop-component-reg-failed",{reason:t})}}}Pg();var Pl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tn,oh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,w){function v(){}v.prototype=w.prototype,b.D=w.prototype,b.prototype=new v,b.prototype.constructor=b,b.C=function(I,E,C){for(var y=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)y[ge-2]=arguments[ge];return w.prototype[E].apply(I,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,w,v){v||(v=0);var I=Array(16);if(typeof w=="string")for(var E=0;16>E;++E)I[E]=w.charCodeAt(v++)|w.charCodeAt(v++)<<8|w.charCodeAt(v++)<<16|w.charCodeAt(v++)<<24;else for(E=0;16>E;++E)I[E]=w[v++]|w[v++]<<8|w[v++]<<16|w[v++]<<24;w=b.g[0],v=b.g[1],E=b.g[2];var C=b.g[3],y=w+(C^v&(E^C))+I[0]+3614090360&4294967295;w=v+(y<<7&4294967295|y>>>25),y=C+(E^w&(v^E))+I[1]+3905402710&4294967295,C=w+(y<<12&4294967295|y>>>20),y=E+(v^C&(w^v))+I[2]+606105819&4294967295,E=C+(y<<17&4294967295|y>>>15),y=v+(w^E&(C^w))+I[3]+3250441966&4294967295,v=E+(y<<22&4294967295|y>>>10),y=w+(C^v&(E^C))+I[4]+4118548399&4294967295,w=v+(y<<7&4294967295|y>>>25),y=C+(E^w&(v^E))+I[5]+1200080426&4294967295,C=w+(y<<12&4294967295|y>>>20),y=E+(v^C&(w^v))+I[6]+2821735955&4294967295,E=C+(y<<17&4294967295|y>>>15),y=v+(w^E&(C^w))+I[7]+4249261313&4294967295,v=E+(y<<22&4294967295|y>>>10),y=w+(C^v&(E^C))+I[8]+1770035416&4294967295,w=v+(y<<7&4294967295|y>>>25),y=C+(E^w&(v^E))+I[9]+2336552879&4294967295,C=w+(y<<12&4294967295|y>>>20),y=E+(v^C&(w^v))+I[10]+4294925233&4294967295,E=C+(y<<17&4294967295|y>>>15),y=v+(w^E&(C^w))+I[11]+2304563134&4294967295,v=E+(y<<22&4294967295|y>>>10),y=w+(C^v&(E^C))+I[12]+1804603682&4294967295,w=v+(y<<7&4294967295|y>>>25),y=C+(E^w&(v^E))+I[13]+4254626195&4294967295,C=w+(y<<12&4294967295|y>>>20),y=E+(v^C&(w^v))+I[14]+2792965006&4294967295,E=C+(y<<17&4294967295|y>>>15),y=v+(w^E&(C^w))+I[15]+1236535329&4294967295,v=E+(y<<22&4294967295|y>>>10),y=w+(E^C&(v^E))+I[1]+4129170786&4294967295,w=v+(y<<5&4294967295|y>>>27),y=C+(v^E&(w^v))+I[6]+3225465664&4294967295,C=w+(y<<9&4294967295|y>>>23),y=E+(w^v&(C^w))+I[11]+643717713&4294967295,E=C+(y<<14&4294967295|y>>>18),y=v+(C^w&(E^C))+I[0]+3921069994&4294967295,v=E+(y<<20&4294967295|y>>>12),y=w+(E^C&(v^E))+I[5]+3593408605&4294967295,w=v+(y<<5&4294967295|y>>>27),y=C+(v^E&(w^v))+I[10]+38016083&4294967295,C=w+(y<<9&4294967295|y>>>23),y=E+(w^v&(C^w))+I[15]+3634488961&4294967295,E=C+(y<<14&4294967295|y>>>18),y=v+(C^w&(E^C))+I[4]+3889429448&4294967295,v=E+(y<<20&4294967295|y>>>12),y=w+(E^C&(v^E))+I[9]+568446438&4294967295,w=v+(y<<5&4294967295|y>>>27),y=C+(v^E&(w^v))+I[14]+3275163606&4294967295,C=w+(y<<9&4294967295|y>>>23),y=E+(w^v&(C^w))+I[3]+4107603335&4294967295,E=C+(y<<14&4294967295|y>>>18),y=v+(C^w&(E^C))+I[8]+1163531501&4294967295,v=E+(y<<20&4294967295|y>>>12),y=w+(E^C&(v^E))+I[13]+2850285829&4294967295,w=v+(y<<5&4294967295|y>>>27),y=C+(v^E&(w^v))+I[2]+4243563512&4294967295,C=w+(y<<9&4294967295|y>>>23),y=E+(w^v&(C^w))+I[7]+1735328473&4294967295,E=C+(y<<14&4294967295|y>>>18),y=v+(C^w&(E^C))+I[12]+2368359562&4294967295,v=E+(y<<20&4294967295|y>>>12),y=w+(v^E^C)+I[5]+4294588738&4294967295,w=v+(y<<4&4294967295|y>>>28),y=C+(w^v^E)+I[8]+2272392833&4294967295,C=w+(y<<11&4294967295|y>>>21),y=E+(C^w^v)+I[11]+1839030562&4294967295,E=C+(y<<16&4294967295|y>>>16),y=v+(E^C^w)+I[14]+4259657740&4294967295,v=E+(y<<23&4294967295|y>>>9),y=w+(v^E^C)+I[1]+2763975236&4294967295,w=v+(y<<4&4294967295|y>>>28),y=C+(w^v^E)+I[4]+1272893353&4294967295,C=w+(y<<11&4294967295|y>>>21),y=E+(C^w^v)+I[7]+4139469664&4294967295,E=C+(y<<16&4294967295|y>>>16),y=v+(E^C^w)+I[10]+3200236656&4294967295,v=E+(y<<23&4294967295|y>>>9),y=w+(v^E^C)+I[13]+681279174&4294967295,w=v+(y<<4&4294967295|y>>>28),y=C+(w^v^E)+I[0]+3936430074&4294967295,C=w+(y<<11&4294967295|y>>>21),y=E+(C^w^v)+I[3]+3572445317&4294967295,E=C+(y<<16&4294967295|y>>>16),y=v+(E^C^w)+I[6]+76029189&4294967295,v=E+(y<<23&4294967295|y>>>9),y=w+(v^E^C)+I[9]+3654602809&4294967295,w=v+(y<<4&4294967295|y>>>28),y=C+(w^v^E)+I[12]+3873151461&4294967295,C=w+(y<<11&4294967295|y>>>21),y=E+(C^w^v)+I[15]+530742520&4294967295,E=C+(y<<16&4294967295|y>>>16),y=v+(E^C^w)+I[2]+3299628645&4294967295,v=E+(y<<23&4294967295|y>>>9),y=w+(E^(v|~C))+I[0]+4096336452&4294967295,w=v+(y<<6&4294967295|y>>>26),y=C+(v^(w|~E))+I[7]+1126891415&4294967295,C=w+(y<<10&4294967295|y>>>22),y=E+(w^(C|~v))+I[14]+2878612391&4294967295,E=C+(y<<15&4294967295|y>>>17),y=v+(C^(E|~w))+I[5]+4237533241&4294967295,v=E+(y<<21&4294967295|y>>>11),y=w+(E^(v|~C))+I[12]+1700485571&4294967295,w=v+(y<<6&4294967295|y>>>26),y=C+(v^(w|~E))+I[3]+2399980690&4294967295,C=w+(y<<10&4294967295|y>>>22),y=E+(w^(C|~v))+I[10]+4293915773&4294967295,E=C+(y<<15&4294967295|y>>>17),y=v+(C^(E|~w))+I[1]+2240044497&4294967295,v=E+(y<<21&4294967295|y>>>11),y=w+(E^(v|~C))+I[8]+1873313359&4294967295,w=v+(y<<6&4294967295|y>>>26),y=C+(v^(w|~E))+I[15]+4264355552&4294967295,C=w+(y<<10&4294967295|y>>>22),y=E+(w^(C|~v))+I[6]+2734768916&4294967295,E=C+(y<<15&4294967295|y>>>17),y=v+(C^(E|~w))+I[13]+1309151649&4294967295,v=E+(y<<21&4294967295|y>>>11),y=w+(E^(v|~C))+I[4]+4149444226&4294967295,w=v+(y<<6&4294967295|y>>>26),y=C+(v^(w|~E))+I[11]+3174756917&4294967295,C=w+(y<<10&4294967295|y>>>22),y=E+(w^(C|~v))+I[2]+718787259&4294967295,E=C+(y<<15&4294967295|y>>>17),y=v+(C^(E|~w))+I[9]+3951481745&4294967295,b.g[0]=b.g[0]+w&4294967295,b.g[1]=b.g[1]+(E+(y<<21&4294967295|y>>>11))&4294967295,b.g[2]=b.g[2]+E&4294967295,b.g[3]=b.g[3]+C&4294967295}r.prototype.u=function(b,w){w===void 0&&(w=b.length);for(var v=w-this.blockSize,I=this.B,E=this.h,C=0;C<w;){if(E==0)for(;C<=v;)s(this,b,C),C+=this.blockSize;if(typeof b=="string"){for(;C<w;)if(I[E++]=b.charCodeAt(C++),E==this.blockSize){s(this,I),E=0;break}}else for(;C<w;)if(I[E++]=b[C++],E==this.blockSize){s(this,I),E=0;break}}this.h=E,this.o+=w},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var w=1;w<b.length-8;++w)b[w]=0;var v=8*this.o;for(w=b.length-8;w<b.length;++w)b[w]=v&255,v/=256;for(this.u(b),b=Array(16),w=v=0;4>w;++w)for(var I=0;32>I;I+=8)b[v++]=this.g[w]>>>I&255;return b};function i(b,w){var v=l;return Object.prototype.hasOwnProperty.call(v,b)?v[b]:v[b]=w(b)}function a(b,w){this.h=w;for(var v=[],I=!0,E=b.length-1;0<=E;E--){var C=b[E]|0;I&&C==w||(v[E]=C,I=!1)}this.g=v}var l={};function c(b){return-128<=b&&128>b?i(b,function(w){return new a([w|0],0>w?-1:0)}):new a([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return m;if(0>b)return k(u(-b));for(var w=[],v=1,I=0;b>=v;I++)w[I]=b/v|0,v*=4294967296;return new a(w,0)}function d(b,w){if(b.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(b.charAt(0)=="-")return k(d(b.substring(1),w));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=u(Math.pow(w,8)),I=m,E=0;E<b.length;E+=8){var C=Math.min(8,b.length-E),y=parseInt(b.substring(E,E+C),w);8>C?(C=u(Math.pow(w,C)),I=I.j(C).add(u(y))):(I=I.j(v),I=I.add(u(y)))}return I}var m=c(0),p=c(1),_=c(16777216);n=a.prototype,n.m=function(){if(S(this))return-k(this).m();for(var b=0,w=1,v=0;v<this.g.length;v++){var I=this.i(v);b+=(0<=I?I:4294967296+I)*w,w*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(T(this))return"0";if(S(this))return"-"+k(this).toString(b);for(var w=u(Math.pow(b,6)),v=this,I="";;){var E=U(v,w).g;v=x(v,E.j(w));var C=((0<v.g.length?v.g[0]:v.h)>>>0).toString(b);if(v=E,T(v))return C+I;for(;6>C.length;)C="0"+C;I=C+I}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function T(b){if(b.h!=0)return!1;for(var w=0;w<b.g.length;w++)if(b.g[w]!=0)return!1;return!0}function S(b){return b.h==-1}n.l=function(b){return b=x(this,b),S(b)?-1:T(b)?0:1};function k(b){for(var w=b.g.length,v=[],I=0;I<w;I++)v[I]=~b.g[I];return new a(v,~b.h).add(p)}n.abs=function(){return S(this)?k(this):this},n.add=function(b){for(var w=Math.max(this.g.length,b.g.length),v=[],I=0,E=0;E<=w;E++){var C=I+(this.i(E)&65535)+(b.i(E)&65535),y=(C>>>16)+(this.i(E)>>>16)+(b.i(E)>>>16);I=y>>>16,C&=65535,y&=65535,v[E]=y<<16|C}return new a(v,v[v.length-1]&-2147483648?-1:0)};function x(b,w){return b.add(k(w))}n.j=function(b){if(T(this)||T(b))return m;if(S(this))return S(b)?k(this).j(k(b)):k(k(this).j(b));if(S(b))return k(this.j(k(b)));if(0>this.l(_)&&0>b.l(_))return u(this.m()*b.m());for(var w=this.g.length+b.g.length,v=[],I=0;I<2*w;I++)v[I]=0;for(I=0;I<this.g.length;I++)for(var E=0;E<b.g.length;E++){var C=this.i(I)>>>16,y=this.i(I)&65535,ge=b.i(E)>>>16,lt=b.i(E)&65535;v[2*I+2*E]+=y*lt,O(v,2*I+2*E),v[2*I+2*E+1]+=C*lt,O(v,2*I+2*E+1),v[2*I+2*E+1]+=y*ge,O(v,2*I+2*E+1),v[2*I+2*E+2]+=C*ge,O(v,2*I+2*E+2)}for(I=0;I<w;I++)v[I]=v[2*I+1]<<16|v[2*I];for(I=w;I<2*w;I++)v[I]=0;return new a(v,0)};function O(b,w){for(;(b[w]&65535)!=b[w];)b[w+1]+=b[w]>>>16,b[w]&=65535,w++}function L(b,w){this.g=b,this.h=w}function U(b,w){if(T(w))throw Error("division by zero");if(T(b))return new L(m,m);if(S(b))return w=U(k(b),w),new L(k(w.g),k(w.h));if(S(w))return w=U(b,k(w)),new L(k(w.g),w.h);if(30<b.g.length){if(S(b)||S(w))throw Error("slowDivide_ only works with positive integers.");for(var v=p,I=w;0>=I.l(b);)v=te(v),I=te(I);var E=X(v,1),C=X(I,1);for(I=X(I,2),v=X(v,2);!T(I);){var y=C.add(I);0>=y.l(b)&&(E=E.add(v),C=y),I=X(I,1),v=X(v,1)}return w=x(b,E.j(w)),new L(E,w)}for(E=m;0<=b.l(w);){for(v=Math.max(1,Math.floor(b.m()/w.m())),I=Math.ceil(Math.log(v)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),C=u(v),y=C.j(w);S(y)||0<y.l(b);)v-=I,C=u(v),y=C.j(w);T(C)&&(C=p),E=E.add(C),b=x(b,y)}return new L(E,b)}n.A=function(b){return U(this,b).h},n.and=function(b){for(var w=Math.max(this.g.length,b.g.length),v=[],I=0;I<w;I++)v[I]=this.i(I)&b.i(I);return new a(v,this.h&b.h)},n.or=function(b){for(var w=Math.max(this.g.length,b.g.length),v=[],I=0;I<w;I++)v[I]=this.i(I)|b.i(I);return new a(v,this.h|b.h)},n.xor=function(b){for(var w=Math.max(this.g.length,b.g.length),v=[],I=0;I<w;I++)v[I]=this.i(I)^b.i(I);return new a(v,this.h^b.h)};function te(b){for(var w=b.g.length+1,v=[],I=0;I<w;I++)v[I]=b.i(I)<<1|b.i(I-1)>>>31;return new a(v,b.h)}function X(b,w){var v=w>>5;w%=32;for(var I=b.g.length-v,E=[],C=0;C<I;C++)E[C]=0<w?b.i(C+v)>>>w|b.i(C+v+1)<<32-w:b.i(C+v);return new a(E,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,oh=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=u,a.fromString=d,tn=a}).apply(typeof Pl<"u"?Pl:typeof self<"u"?self:typeof window<"u"?window:{});var _s=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ah,br,lh,Rs,so,ch,uh,hh;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,h,f){return o==Array.prototype||o==Object.prototype||(o[h]=f.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof _s=="object"&&_s];for(var h=0;h<o.length;++h){var f=o[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(o,h){if(h)e:{var f=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var P=o[g];if(!(P in f))break e;f=f[P]}o=o[o.length-1],g=f[o],h=h(g),h!=g&&h!=null&&e(f,o,{configurable:!0,writable:!0,value:h})}}function i(o,h){o instanceof String&&(o+="");var f=0,g=!1,P={next:function(){if(!g&&f<o.length){var N=f++;return{value:h(N,o[N]),done:!1}}return g=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(o){return o||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var h=typeof o;return h=h!="object"?h:o?Array.isArray(o)?"array":h:"null",h=="array"||h=="object"&&typeof o.length=="number"}function u(o){var h=typeof o;return h=="object"&&o!=null||h=="function"}function d(o,h,f){return o.call.apply(o.bind,arguments)}function m(o,h,f){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,g),o.apply(h,P)}}return function(){return o.apply(h,arguments)}}function p(o,h,f){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:m,p.apply(null,arguments)}function _(o,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function T(o,h){function f(){}f.prototype=h.prototype,o.aa=h.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(g,P,N){for(var $=Array(arguments.length-2),be=2;be<arguments.length;be++)$[be-2]=arguments[be];return h.prototype[P].apply(g,$)}}function S(o){const h=o.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=o[g];return f}return[]}function k(o,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const P=o.length||0,N=g.length||0;o.length=P+N;for(let $=0;$<N;$++)o[P+$]=g[$]}else o.push(g)}}class x{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function O(o){return/^[\s\xa0]*$/.test(o)}function L(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function U(o){return U[" "](o),o}U[" "]=function(){};var te=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function X(o,h,f){for(const g in o)h.call(f,o[g],g,o)}function b(o,h){for(const f in o)h.call(void 0,o[f],f,o)}function w(o){const h={};for(const f in o)h[f]=o[f];return h}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(o,h){let f,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(f in g)o[f]=g[f];for(let N=0;N<v.length;N++)f=v[N],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function E(o){var h=1;o=o.split(":");const f=[];for(;0<h&&o.length;)f.push(o.shift()),h--;return o.length&&f.push(o.join(":")),f}function C(o){l.setTimeout(()=>{throw o},0)}function y(){var o=or;let h=null;return o.g&&(h=o.g,o.g=o.g.next,o.g||(o.h=null),h.next=null),h}class ge{constructor(){this.h=this.g=null}add(h,f){const g=lt.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var lt=new x(()=>new mn,o=>o.reset());class mn{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let _t,pn=!1,or=new ge,D=()=>{const o=l.Promise.resolve(void 0);_t=()=>{o.then(R)}};var R=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(f){C(f)}var h=lt;h.j(o),100>h.h&&(h.h++,o.next=h.g,h.g=o)}pn=!1};function G(){this.s=this.s,this.C=this.C}G.prototype.s=!1,G.prototype.ma=function(){this.s||(this.s=!0,this.N())},G.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function H(o,h){this.type=o,this.g=this.target=h,this.defaultPrevented=!1}H.prototype.h=function(){this.defaultPrevented=!0};var ae=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,h=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return o}();function ie(o,h){if(H.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=h,h=o.relatedTarget){if(te){e:{try{U(h.nodeName);var P=!0;break e}catch{}P=!1}P||(h=null)}}else f=="mouseover"?h=o.fromElement:f=="mouseout"&&(h=o.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:ce[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&ie.aa.h.call(this)}}T(ie,H);var ce={2:"touch",3:"pen",4:"mouse"};ie.prototype.h=function(){ie.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var J="closure_listenable_"+(1e6*Math.random()|0),ue=0;function Ee(o,h,f,g,P){this.listener=o,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=P,this.key=++ue,this.da=this.fa=!1}function Te(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function _e(o){this.src=o,this.g={},this.h=0}_e.prototype.add=function(o,h,f,g,P){var N=o.toString();o=this.g[N],o||(o=this.g[N]=[],this.h++);var $=Pe(o,h,g,P);return-1<$?(h=o[$],f||(h.fa=!1)):(h=new Ee(h,this.src,N,!!g,P),h.fa=f,o.push(h)),h};function Ie(o,h){var f=h.type;if(f in o.g){var g=o.g[f],P=Array.prototype.indexOf.call(g,h,void 0),N;(N=0<=P)&&Array.prototype.splice.call(g,P,1),N&&(Te(h),o.g[f].length==0&&(delete o.g[f],o.h--))}}function Pe(o,h,f,g){for(var P=0;P<o.length;++P){var N=o[P];if(!N.da&&N.listener==h&&N.capture==!!f&&N.ha==g)return P}return-1}var he="closure_lm_"+(1e6*Math.random()|0),Ue={};function et(o,h,f,g,P){if(Array.isArray(h)){for(var N=0;N<h.length;N++)et(o,h[N],f,g,P);return null}return f=Zr(f),o&&o[J]?o.K(h,f,u(g)?!!g.capture:!!g,P):ct(o,h,f,!1,g,P)}function ct(o,h,f,g,P,N){if(!h)throw Error("Invalid event type");var $=u(P)?!!P.capture:!!P,be=ar(o);if(be||(o[he]=be=new _e(o)),f=be.add(h,f,g,$,N),f.proxy)return f;if(g=bt(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)ae||(P=$),P===void 0&&(P=!1),o.addEventListener(h.toString(),g,P);else if(o.attachEvent)o.attachEvent(Jr(h.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function bt(){function o(f){return h.call(o.src,o.listener,f)}const h=yi;return o}function kt(o,h,f,g,P){if(Array.isArray(h))for(var N=0;N<h.length;N++)kt(o,h[N],f,g,P);else g=u(g)?!!g.capture:!!g,f=Zr(f),o&&o[J]?(o=o.i,h=String(h).toString(),h in o.g&&(N=o.g[h],f=Pe(N,f,g,P),-1<f&&(Te(N[f]),Array.prototype.splice.call(N,f,1),N.length==0&&(delete o.g[h],o.h--)))):o&&(o=ar(o))&&(h=o.g[h.toString()],o=-1,h&&(o=Pe(h,f,g,P)),(f=-1<o?h[o]:null)&&tt(f))}function tt(o){if(typeof o!="number"&&o&&!o.da){var h=o.src;if(h&&h[J])Ie(h.i,o);else{var f=o.type,g=o.proxy;h.removeEventListener?h.removeEventListener(f,g,o.capture):h.detachEvent?h.detachEvent(Jr(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=ar(h))?(Ie(f,o),f.h==0&&(f.src=null,h[he]=null)):Te(o)}}}function Jr(o){return o in Ue?Ue[o]:Ue[o]="on"+o}function yi(o,h){if(o.da)o=!0;else{h=new ie(h,this);var f=o.listener,g=o.ha||o.src;o.fa&&tt(o),o=f.call(g,h)}return o}function ar(o){return o=o[he],o instanceof _e?o:null}var Vn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Zr(o){return typeof o=="function"?o:(o[Vn]||(o[Vn]=function(h){return o.handleEvent(h)}),o[Vn])}function Ne(){G.call(this),this.i=new _e(this),this.M=this,this.F=null}T(Ne,G),Ne.prototype[J]=!0,Ne.prototype.removeEventListener=function(o,h,f,g){kt(this,o,h,f,g)};function je(o,h){var f,g=o.F;if(g)for(f=[];g;g=g.F)f.push(g);if(o=o.M,g=h.type||h,typeof h=="string")h=new H(h,o);else if(h instanceof H)h.target=h.target||o;else{var P=h;h=new H(g,o),I(h,P)}if(P=!0,f)for(var N=f.length-1;0<=N;N--){var $=h.g=f[N];P=Dn($,g,!0,h)&&P}if($=h.g=o,P=Dn($,g,!0,h)&&P,P=Dn($,g,!1,h)&&P,f)for(N=0;N<f.length;N++)$=h.g=f[N],P=Dn($,g,!1,h)&&P}Ne.prototype.N=function(){if(Ne.aa.N.call(this),this.i){var o=this.i,h;for(h in o.g){for(var f=o.g[h],g=0;g<f.length;g++)Te(f[g]);delete o.g[h],o.h--}}this.F=null},Ne.prototype.K=function(o,h,f,g){return this.i.add(String(o),h,!1,f,g)},Ne.prototype.L=function(o,h,f,g){return this.i.add(String(o),h,!0,f,g)};function Dn(o,h,f,g){if(h=o.i.g[String(h)],!h)return!0;h=h.concat();for(var P=!0,N=0;N<h.length;++N){var $=h[N];if($&&!$.da&&$.capture==f){var be=$.listener,qe=$.ha||$.src;$.fa&&Ie(o.i,$),P=be.call(qe,g)!==!1&&P}}return P&&!g.defaultPrevented}function lr(o,h,f){if(typeof o=="function")f&&(o=p(o,f));else if(o&&typeof o.handleEvent=="function")o=p(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(o,h||0)}function cr(o){o.g=lr(()=>{o.g=null,o.i&&(o.i=!1,cr(o))},o.l);const h=o.h;o.h=null,o.m.apply(null,h)}class ur extends G{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:cr(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gn(o){G.call(this),this.h=o,this.g={}}T(gn,G);var es=[];function pa(o){X(o.g,function(h,f){this.g.hasOwnProperty(f)&&tt(h)},o),o.g={}}gn.prototype.N=function(){gn.aa.N.call(this),pa(this)},gn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var wi=l.JSON.stringify,Wf=l.JSON.parse,Kf=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function vi(){}vi.prototype.h=null;function ga(o){return o.h||(o.h=o.i())}function _a(){}var hr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ei(){H.call(this,"d")}T(Ei,H);function Ti(){H.call(this,"c")}T(Ti,H);var _n={},ya=null;function ts(){return ya=ya||new Ne}_n.La="serverreachability";function wa(o){H.call(this,_n.La,o)}T(wa,H);function fr(o){const h=ts();je(h,new wa(h))}_n.STAT_EVENT="statevent";function va(o,h){H.call(this,_n.STAT_EVENT,o),this.stat=h}T(va,H);function Je(o){const h=ts();je(h,new va(h,o))}_n.Ma="timingevent";function Ea(o,h){H.call(this,_n.Ma,o),this.size=h}T(Ea,H);function dr(o,h){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},h)}function mr(){this.g=!0}mr.prototype.xa=function(){this.g=!1};function Qf(o,h,f,g,P,N){o.info(function(){if(o.g)if(N)for(var $="",be=N.split("&"),qe=0;qe<be.length;qe++){var pe=be[qe].split("=");if(1<pe.length){var Ge=pe[0];pe=pe[1];var We=Ge.split("_");$=2<=We.length&&We[1]=="type"?$+(Ge+"="+pe+"&"):$+(Ge+"=redacted&")}}else $=null;else $=N;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+h+`
`+f+`
`+$})}function Xf(o,h,f,g,P,N,$){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+h+`
`+f+`
`+N+" "+$})}function Nn(o,h,f,g){o.info(function(){return"XMLHTTP TEXT ("+h+"): "+Jf(o,f)+(g?" "+g:"")})}function Yf(o,h){o.info(function(){return"TIMEOUT: "+h})}mr.prototype.info=function(){};function Jf(o,h){if(!o.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var g=f[o];if(!(2>g.length)){var P=g[1];if(Array.isArray(P)&&!(1>P.length)){var N=P[0];if(N!="noop"&&N!="stop"&&N!="close")for(var $=1;$<P.length;$++)P[$]=""}}}}return wi(f)}catch{return h}}var ns={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ta={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},bi;function rs(){}T(rs,vi),rs.prototype.g=function(){return new XMLHttpRequest},rs.prototype.i=function(){return{}},bi=new rs;function Wt(o,h,f,g){this.j=o,this.i=h,this.l=f,this.R=g||1,this.U=new gn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ba}function ba(){this.i=null,this.g="",this.h=!1}var Ia={},Ii={};function Ai(o,h,f){o.L=1,o.v=as(Lt(h)),o.m=f,o.P=!0,Aa(o,null)}function Aa(o,h){o.F=Date.now(),ss(o),o.A=Lt(o.v);var f=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),Ua(f.i,"t",g),o.C=0,f=o.j.J,o.h=new ba,o.g=rl(o.j,f?h:null,!o.m),0<o.O&&(o.M=new ur(p(o.Y,o,o.g),o.O)),h=o.U,f=o.g,g=o.ca;var P="readystatechange";Array.isArray(P)||(P&&(es[0]=P.toString()),P=es);for(var N=0;N<P.length;N++){var $=et(f,P[N],g||h.handleEvent,!1,h.h||h);if(!$)break;h.g[$.key]=$}h=o.H?w(o.H):{},o.m?(o.u||(o.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,h)):(o.u="GET",o.g.ea(o.A,o.u,null,h)),fr(),Qf(o.i,o.u,o.A,o.l,o.R,o.m)}Wt.prototype.ca=function(o){o=o.target;const h=this.M;h&&Ft(o)==3?h.j():this.Y(o)},Wt.prototype.Y=function(o){try{if(o==this.g)e:{const We=Ft(this.g);var h=this.g.Ba();const On=this.g.Z();if(!(3>We)&&(We!=3||this.g&&(this.h.h||this.g.oa()||Ga(this.g)))){this.J||We!=4||h==7||(h==8||0>=On?fr(3):fr(2)),Ri(this);var f=this.g.Z();this.X=f;t:if(Ra(this)){var g=Ga(this.g);o="";var P=g.length,N=Ft(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yn(this),pr(this);var $="";break t}this.h.i=new l.TextDecoder}for(h=0;h<P;h++)this.h.h=!0,o+=this.h.i.decode(g[h],{stream:!(N&&h==P-1)});g.length=0,this.h.g+=o,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=f==200,Xf(this.i,this.u,this.A,this.l,this.R,We,f),this.o){if(this.T&&!this.K){t:{if(this.g){var be,qe=this.g;if((be=qe.g?qe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(be)){var pe=be;break t}}pe=null}if(f=pe)Nn(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ci(this,f);else{this.o=!1,this.s=3,Je(12),yn(this),pr(this);break e}}if(this.P){f=!0;let It;for(;!this.J&&this.C<$.length;)if(It=Zf(this,$),It==Ii){We==4&&(this.s=4,Je(14),f=!1),Nn(this.i,this.l,null,"[Incomplete Response]");break}else if(It==Ia){this.s=4,Je(15),Nn(this.i,this.l,$,"[Invalid Chunk]"),f=!1;break}else Nn(this.i,this.l,It,null),Ci(this,It);if(Ra(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),We!=4||$.length!=0||this.h.h||(this.s=1,Je(16),f=!1),this.o=this.o&&f,!f)Nn(this.i,this.l,$,"[Invalid Chunked Response]"),yn(this),pr(this);else if(0<$.length&&!this.W){this.W=!0;var Ge=this.j;Ge.g==this&&Ge.ba&&!Ge.M&&(Ge.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),Ni(Ge),Ge.M=!0,Je(11))}}else Nn(this.i,this.l,$,null),Ci(this,$);We==4&&yn(this),this.o&&!this.J&&(We==4?Za(this.j,this):(this.o=!1,ss(this)))}else gd(this.g),f==400&&0<$.indexOf("Unknown SID")?(this.s=3,Je(12)):(this.s=0,Je(13)),yn(this),pr(this)}}}catch{}finally{}};function Ra(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Zf(o,h){var f=o.C,g=h.indexOf(`
`,f);return g==-1?Ii:(f=Number(h.substring(f,g)),isNaN(f)?Ia:(g+=1,g+f>h.length?Ii:(h=h.slice(g,g+f),o.C=g+f,h)))}Wt.prototype.cancel=function(){this.J=!0,yn(this)};function ss(o){o.S=Date.now()+o.I,Ca(o,o.I)}function Ca(o,h){if(o.B!=null)throw Error("WatchDog timer not null");o.B=dr(p(o.ba,o),h)}function Ri(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Wt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Yf(this.i,this.A),this.L!=2&&(fr(),Je(17)),yn(this),this.s=2,pr(this)):Ca(this,this.S-o)};function pr(o){o.j.G==0||o.J||Za(o.j,o)}function yn(o){Ri(o);var h=o.M;h&&typeof h.ma=="function"&&h.ma(),o.M=null,pa(o.U),o.g&&(h=o.g,o.g=null,h.abort(),h.ma())}function Ci(o,h){try{var f=o.j;if(f.G!=0&&(f.g==o||Si(f.h,o))){if(!o.K&&Si(f.h,o)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)ds(f),hs(f);else break e;Di(f),Je(18)}}else f.za=P[1],0<f.za-f.T&&37500>P[2]&&f.F&&f.v==0&&!f.C&&(f.C=dr(p(f.Za,f),6e3));if(1>=Pa(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else vn(f,11)}else if((o.K||f.g==o)&&ds(f),!O(h))for(P=f.Da.g.parse(h),h=0;h<P.length;h++){let pe=P[h];if(f.T=pe[0],pe=pe[1],f.G==2)if(pe[0]=="c"){f.K=pe[1],f.ia=pe[2];const Ge=pe[3];Ge!=null&&(f.la=Ge,f.j.info("VER="+f.la));const We=pe[4];We!=null&&(f.Aa=We,f.j.info("SVER="+f.Aa));const On=pe[5];On!=null&&typeof On=="number"&&0<On&&(g=1.5*On,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const It=o.g;if(It){const ps=It.g?It.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ps){var N=g.h;N.g||ps.indexOf("spdy")==-1&&ps.indexOf("quic")==-1&&ps.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(ki(N,N.h),N.h=null))}if(g.D){const Mi=It.g?It.g.getResponseHeader("X-HTTP-Session-Id"):null;Mi&&(g.ya=Mi,Re(g.I,g.D,Mi))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var $=o;if(g.qa=nl(g,g.J?g.ia:null,g.W),$.K){Va(g.h,$);var be=$,qe=g.L;qe&&(be.I=qe),be.B&&(Ri(be),ss(be)),g.g=$}else Ya(g);0<f.i.length&&fs(f)}else pe[0]!="stop"&&pe[0]!="close"||vn(f,7);else f.G==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?vn(f,7):Vi(f):pe[0]!="noop"&&f.l&&f.l.ta(pe),f.v=0)}}fr(4)}catch{}}var ed=class{constructor(o,h){this.g=o,this.map=h}};function Sa(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ka(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Pa(o){return o.h?1:o.g?o.g.size:0}function Si(o,h){return o.h?o.h==h:o.g?o.g.has(h):!1}function ki(o,h){o.g?o.g.add(h):o.h=h}function Va(o,h){o.h&&o.h==h?o.h=null:o.g&&o.g.has(h)&&o.g.delete(h)}Sa.prototype.cancel=function(){if(this.i=Da(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Da(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let h=o.i;for(const f of o.g.values())h=h.concat(f.D);return h}return S(o.i)}function td(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var h=[],f=o.length,g=0;g<f;g++)h.push(o[g]);return h}h=[],f=0;for(g in o)h[f++]=o[g];return h}function nd(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var h=[];o=o.length;for(var f=0;f<o;f++)h.push(f);return h}h=[],f=0;for(const g in o)h[f++]=g;return h}}}function Na(o,h){if(o.forEach&&typeof o.forEach=="function")o.forEach(h,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,h,void 0);else for(var f=nd(o),g=td(o),P=g.length,N=0;N<P;N++)h.call(void 0,g[N],f&&f[N],o)}var Ma=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rd(o,h){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var g=o[f].indexOf("="),P=null;if(0<=g){var N=o[f].substring(0,g);P=o[f].substring(g+1)}else N=o[f];h(N,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function wn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof wn){this.h=o.h,is(this,o.j),this.o=o.o,this.g=o.g,os(this,o.s),this.l=o.l;var h=o.i,f=new yr;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),xa(this,f),this.m=o.m}else o&&(h=String(o).match(Ma))?(this.h=!1,is(this,h[1]||"",!0),this.o=gr(h[2]||""),this.g=gr(h[3]||"",!0),os(this,h[4]),this.l=gr(h[5]||"",!0),xa(this,h[6]||"",!0),this.m=gr(h[7]||"")):(this.h=!1,this.i=new yr(null,this.h))}wn.prototype.toString=function(){var o=[],h=this.j;h&&o.push(_r(h,Oa,!0),":");var f=this.g;return(f||h=="file")&&(o.push("//"),(h=this.o)&&o.push(_r(h,Oa,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(_r(f,f.charAt(0)=="/"?od:id,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",_r(f,ld)),o.join("")};function Lt(o){return new wn(o)}function is(o,h,f){o.j=f?gr(h,!0):h,o.j&&(o.j=o.j.replace(/:$/,""))}function os(o,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);o.s=h}else o.s=null}function xa(o,h,f){h instanceof yr?(o.i=h,cd(o.i,o.h)):(f||(h=_r(h,ad)),o.i=new yr(h,o.h))}function Re(o,h,f){o.i.set(h,f)}function as(o){return Re(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function gr(o,h){return o?h?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function _r(o,h,f){return typeof o=="string"?(o=encodeURI(o).replace(h,sd),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function sd(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Oa=/[#\/\?@]/g,id=/[#\?:]/g,od=/[#\?]/g,ad=/[#\?@]/g,ld=/#/g;function yr(o,h){this.h=this.g=null,this.i=o||null,this.j=!!h}function Kt(o){o.g||(o.g=new Map,o.h=0,o.i&&rd(o.i,function(h,f){o.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}n=yr.prototype,n.add=function(o,h){Kt(this),this.i=null,o=Mn(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(h),this.h+=1,this};function La(o,h){Kt(o),h=Mn(o,h),o.g.has(h)&&(o.i=null,o.h-=o.g.get(h).length,o.g.delete(h))}function Fa(o,h){return Kt(o),h=Mn(o,h),o.g.has(h)}n.forEach=function(o,h){Kt(this),this.g.forEach(function(f,g){f.forEach(function(P){o.call(h,P,g,this)},this)},this)},n.na=function(){Kt(this);const o=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const P=o[g];for(let N=0;N<P.length;N++)f.push(h[g])}return f},n.V=function(o){Kt(this);let h=[];if(typeof o=="string")Fa(this,o)&&(h=h.concat(this.g.get(Mn(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)h=h.concat(o[f])}return h},n.set=function(o,h){return Kt(this),this.i=null,o=Mn(this,o),Fa(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[h]),this.h+=1,this},n.get=function(o,h){return o?(o=this.V(o),0<o.length?String(o[0]):h):h};function Ua(o,h,f){La(o,h),0<f.length&&(o.i=null,o.g.set(Mn(o,h),S(f)),o.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const N=encodeURIComponent(String(g)),$=this.V(g);for(g=0;g<$.length;g++){var P=N;$[g]!==""&&(P+="="+encodeURIComponent(String($[g]))),o.push(P)}}return this.i=o.join("&")};function Mn(o,h){return h=String(h),o.j&&(h=h.toLowerCase()),h}function cd(o,h){h&&!o.j&&(Kt(o),o.i=null,o.g.forEach(function(f,g){var P=g.toLowerCase();g!=P&&(La(this,g),Ua(this,P,f))},o)),o.j=h}function ud(o,h){const f=new mr;if(l.Image){const g=new Image;g.onload=_(Qt,f,"TestLoadImage: loaded",!0,h,g),g.onerror=_(Qt,f,"TestLoadImage: error",!1,h,g),g.onabort=_(Qt,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=_(Qt,f,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else h(!1)}function hd(o,h){const f=new mr,g=new AbortController,P=setTimeout(()=>{g.abort(),Qt(f,"TestPingServer: timeout",!1,h)},1e4);fetch(o,{signal:g.signal}).then(N=>{clearTimeout(P),N.ok?Qt(f,"TestPingServer: ok",!0,h):Qt(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(P),Qt(f,"TestPingServer: error",!1,h)})}function Qt(o,h,f,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(f)}catch{}}function fd(){this.g=new Kf}function dd(o,h,f){const g=f||"";try{Na(o,function(P,N){let $=P;u(P)&&($=wi(P)),h.push(g+N+"="+encodeURIComponent($))})}catch(P){throw h.push(g+"type="+encodeURIComponent("_badmap")),P}}function ls(o){this.l=o.Ub||null,this.j=o.eb||!1}T(ls,vi),ls.prototype.g=function(){return new cs(this.l,this.j)},ls.prototype.i=function(o){return function(){return o}}({});function cs(o,h){Ne.call(this),this.D=o,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(cs,Ne),n=cs.prototype,n.open=function(o,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=h,this.readyState=1,vr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(h.body=o),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,wr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,vr(this)),this.g&&(this.readyState=3,vr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ba(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ba(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var h=o.value?o.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!o.done}))&&(this.response=this.responseText+=h)}o.done?wr(this):vr(this),this.readyState==3&&Ba(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,wr(this))},n.Qa=function(o){this.g&&(this.response=o,wr(this))},n.ga=function(){this.g&&wr(this)};function wr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,vr(o)}n.setRequestHeader=function(o,h){this.u.append(o,h)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=h.next();return o.join(`\r
`)};function vr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(cs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function ja(o){let h="";return X(o,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function Pi(o,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=ja(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):Re(o,h,f))}function ke(o){Ne.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(ke,Ne);var md=/^https?$/i,pd=["POST","PUT"];n=ke.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);h=h?h.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():bi.g(),this.v=this.o?ga(this.o):ga(bi),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(h,String(o),!0),this.B=!1}catch(N){qa(this,N);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)f.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const N of g.keys())f.set(N,g.get(N));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(N=>N.toLowerCase()=="content-type"),P=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(pd,h,void 0))||g||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,$]of f)this.g.setRequestHeader(N,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ha(this),this.u=!0,this.g.send(o),this.u=!1}catch(N){qa(this,N)}};function qa(o,h){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=h,o.m=5,$a(o),us(o)}function $a(o){o.A||(o.A=!0,je(o,"complete"),je(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,je(this,"complete"),je(this,"abort"),us(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),us(this,!0)),ke.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?za(this):this.bb())},n.bb=function(){za(this)};function za(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Ft(o)!=4||o.Z()!=2)){if(o.u&&Ft(o)==4)lr(o.Ea,0,o);else if(je(o,"readystatechange"),Ft(o)==4){o.h=!1;try{const $=o.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=$===0){var P=String(o.D).match(Ma)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),g=!md.test(P?P.toLowerCase():"")}f=g}if(f)je(o,"complete"),je(o,"success");else{o.m=6;try{var N=2<Ft(o)?o.g.statusText:""}catch{N=""}o.l=N+" ["+o.Z()+"]",$a(o)}}finally{us(o)}}}}function us(o,h){if(o.g){Ha(o);const f=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,h||je(o,"ready");try{f.onreadystatechange=g}catch{}}}function Ha(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Ft(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Ft(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var h=this.g.responseText;return o&&h.indexOf(o)==0&&(h=h.substring(o.length)),Wf(h)}};function Ga(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function gd(o){const h={};o=(o.g&&2<=Ft(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(O(o[g]))continue;var f=E(o[g]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const N=h[P]||[];h[P]=N,N.push(f)}b(h,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Er(o,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||h}function Wa(o){this.Aa=0,this.i=[],this.j=new mr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Er("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Er("baseRetryDelayMs",5e3,o),this.cb=Er("retryDelaySeedMs",1e4,o),this.Wa=Er("forwardChannelMaxRetries",2,o),this.wa=Er("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Sa(o&&o.concurrentRequestLimit),this.Da=new fd,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Wa.prototype,n.la=8,n.G=1,n.connect=function(o,h,f,g){Je(0),this.W=o,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=nl(this,null,this.W),fs(this)};function Vi(o){if(Ka(o),o.G==3){var h=o.U++,f=Lt(o.I);if(Re(f,"SID",o.K),Re(f,"RID",h),Re(f,"TYPE","terminate"),Tr(o,f),h=new Wt(o,o.j,h),h.L=2,h.v=as(Lt(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=rl(h.j,null),h.g.ea(h.v)),h.F=Date.now(),ss(h)}tl(o)}function hs(o){o.g&&(Ni(o),o.g.cancel(),o.g=null)}function Ka(o){hs(o),o.u&&(l.clearTimeout(o.u),o.u=null),ds(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function fs(o){if(!ka(o.h)&&!o.s){o.s=!0;var h=o.Ga;_t||D(),pn||(_t(),pn=!0),or.add(h,o),o.B=0}}function _d(o,h){return Pa(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=h.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=dr(p(o.Ga,o,h),el(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const P=new Wt(this,this.j,o);let N=this.o;if(this.S&&(N?(N=w(N),I(N,this.S)):N=this.S),this.m!==null||this.O||(P.H=N,N=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Xa(this,P,h),f=Lt(this.I),Re(f,"RID",o),Re(f,"CVER",22),this.D&&Re(f,"X-HTTP-Session-Id",this.D),Tr(this,f),N&&(this.O?h="headers="+encodeURIComponent(String(ja(N)))+"&"+h:this.m&&Pi(f,this.m,N)),ki(this.h,P),this.Ua&&Re(f,"TYPE","init"),this.P?(Re(f,"$req",h),Re(f,"SID","null"),P.T=!0,Ai(P,f,null)):Ai(P,f,h),this.G=2}}else this.G==3&&(o?Qa(this,o):this.i.length==0||ka(this.h)||Qa(this))};function Qa(o,h){var f;h?f=h.l:f=o.U++;const g=Lt(o.I);Re(g,"SID",o.K),Re(g,"RID",f),Re(g,"AID",o.T),Tr(o,g),o.m&&o.o&&Pi(g,o.m,o.o),f=new Wt(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),h&&(o.i=h.D.concat(o.i)),h=Xa(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ki(o.h,f),Ai(f,g,h)}function Tr(o,h){o.H&&X(o.H,function(f,g){Re(h,g,f)}),o.l&&Na({},function(f,g){Re(h,g,f)})}function Xa(o,h,f){f=Math.min(o.i.length,f);var g=o.l?p(o.l.Na,o.l,o):null;e:{var P=o.i;let N=-1;for(;;){const $=["count="+f];N==-1?0<f?(N=P[0].g,$.push("ofs="+N)):N=0:$.push("ofs="+N);let be=!0;for(let qe=0;qe<f;qe++){let pe=P[qe].g;const Ge=P[qe].map;if(pe-=N,0>pe)N=Math.max(0,P[qe].g-100),be=!1;else try{dd(Ge,$,"req"+pe+"_")}catch{g&&g(Ge)}}if(be){g=$.join("&");break e}}}return o=o.i.splice(0,f),h.D=o,g}function Ya(o){if(!o.g&&!o.u){o.Y=1;var h=o.Fa;_t||D(),pn||(_t(),pn=!0),or.add(h,o),o.v=0}}function Di(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=dr(p(o.Fa,o),el(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Ja(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=dr(p(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Je(10),hs(this),Ja(this))};function Ni(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Ja(o){o.g=new Wt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var h=Lt(o.qa);Re(h,"RID","rpc"),Re(h,"SID",o.K),Re(h,"AID",o.T),Re(h,"CI",o.F?"0":"1"),!o.F&&o.ja&&Re(h,"TO",o.ja),Re(h,"TYPE","xmlhttp"),Tr(o,h),o.m&&o.o&&Pi(h,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=as(Lt(h)),f.m=null,f.P=!0,Aa(f,o)}n.Za=function(){this.C!=null&&(this.C=null,hs(this),Di(this),Je(19))};function ds(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Za(o,h){var f=null;if(o.g==h){ds(o),Ni(o),o.g=null;var g=2}else if(Si(o.h,h))f=h.D,Va(o.h,h),g=1;else return;if(o.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var P=o.B;g=ts(),je(g,new Ea(g,f)),fs(o)}else Ya(o);else if(P=h.s,P==3||P==0&&0<h.X||!(g==1&&_d(o,h)||g==2&&Di(o)))switch(f&&0<f.length&&(h=o.h,h.i=h.i.concat(f)),P){case 1:vn(o,5);break;case 4:vn(o,10);break;case 3:vn(o,6);break;default:vn(o,2)}}}function el(o,h){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*h}function vn(o,h){if(o.j.info("Error code "+h),h==2){var f=p(o.fb,o),g=o.Xa;const P=!g;g=new wn(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||is(g,"https"),as(g),P?ud(g.toString(),f):hd(g.toString(),f)}else Je(2);o.G=0,o.l&&o.l.sa(h),tl(o),Ka(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Je(2)):(this.j.info("Failed to ping google.com"),Je(1))};function tl(o){if(o.G=0,o.ka=[],o.l){const h=Da(o.h);(h.length!=0||o.i.length!=0)&&(k(o.ka,h),k(o.ka,o.i),o.h.i.length=0,S(o.i),o.i.length=0),o.l.ra()}}function nl(o,h,f){var g=f instanceof wn?Lt(f):new wn(f);if(g.g!="")h&&(g.g=h+"."+g.g),os(g,g.s);else{var P=l.location;g=P.protocol,h=h?h+"."+P.hostname:P.hostname,P=+P.port;var N=new wn(null);g&&is(N,g),h&&(N.g=h),P&&os(N,P),f&&(N.l=f),g=N}return f=o.D,h=o.ya,f&&h&&Re(g,f,h),Re(g,"VER",o.la),Tr(o,g),g}function rl(o,h,f){if(h&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=o.Ca&&!o.pa?new ke(new ls({eb:f})):new ke(o.pa),h.Ha(o.J),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function sl(){}n=sl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ms(){}ms.prototype.g=function(o,h){return new ut(o,h)};function ut(o,h){Ne.call(this),this.g=new Wa(h),this.l=o,this.h=h&&h.messageUrlParams||null,o=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(o?o["X-WebChannel-Content-Type"]=h.messageContentType:o={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(o?o["X-WebChannel-Client-Profile"]=h.va:o={"X-WebChannel-Client-Profile":h.va}),this.g.S=o,(o=h&&h.Sb)&&!O(o)&&(this.g.m=o),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!O(h)&&(this.g.D=h,o=this.h,o!==null&&h in o&&(o=this.h,h in o&&delete o[h])),this.j=new xn(this)}T(ut,Ne),ut.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ut.prototype.close=function(){Vi(this.g)},ut.prototype.o=function(o){var h=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=wi(o),o=f);h.i.push(new ed(h.Ya++,o)),h.G==3&&fs(h)},ut.prototype.N=function(){this.g.l=null,delete this.j,Vi(this.g),delete this.g,ut.aa.N.call(this)};function il(o){Ei.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var h=o.__sm__;if(h){e:{for(const f in h){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,h=h!==null&&o in h?h[o]:void 0),this.data=h}else this.data=o}T(il,Ei);function ol(){Ti.call(this),this.status=1}T(ol,Ti);function xn(o){this.g=o}T(xn,sl),xn.prototype.ua=function(){je(this.g,"a")},xn.prototype.ta=function(o){je(this.g,new il(o))},xn.prototype.sa=function(o){je(this.g,new ol)},xn.prototype.ra=function(){je(this.g,"b")},ms.prototype.createWebChannel=ms.prototype.g,ut.prototype.send=ut.prototype.o,ut.prototype.open=ut.prototype.m,ut.prototype.close=ut.prototype.close,hh=function(){return new ms},uh=function(){return ts()},ch=_n,so={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ns.NO_ERROR=0,ns.TIMEOUT=8,ns.HTTP_ERROR=6,Rs=ns,Ta.COMPLETE="complete",lh=Ta,_a.EventType=hr,hr.OPEN="a",hr.CLOSE="b",hr.ERROR="c",hr.MESSAGE="d",Ne.prototype.listen=Ne.prototype.K,br=_a,ke.prototype.listenOnce=ke.prototype.L,ke.prototype.getLastError=ke.prototype.Ka,ke.prototype.getLastErrorCode=ke.prototype.Ba,ke.prototype.getStatus=ke.prototype.Z,ke.prototype.getResponseJson=ke.prototype.Oa,ke.prototype.getResponseText=ke.prototype.oa,ke.prototype.send=ke.prototype.ea,ke.prototype.setWithCredentials=ke.prototype.Ha,ah=ke}).apply(typeof _s<"u"?_s:typeof self<"u"?self:typeof window<"u"?window:{});const Vl="@firebase/firestore",Dl="4.7.10";/**
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
 */class Qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Qe.UNAUTHENTICATED=new Qe(null),Qe.GOOGLE_CREDENTIALS=new Qe("google-credentials-uid"),Qe.FIRST_PARTY=new Qe("first-party-uid"),Qe.MOCK_USER=new Qe("mock-user");/**
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
 */let tr="11.5.0";/**
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
 */const Cn=new Io("@firebase/firestore");function Bn(){return Cn.logLevel}function z(n,...e){if(Cn.logLevel<=me.DEBUG){const t=e.map(Do);Cn.debug(`Firestore (${tr}): ${n}`,...t)}}function $t(n,...e){if(Cn.logLevel<=me.ERROR){const t=e.map(Do);Cn.error(`Firestore (${tr}): ${n}`,...t)}}function Wn(n,...e){if(Cn.logLevel<=me.WARN){const t=e.map(Do);Cn.warn(`Firestore (${tr}): ${n}`,...t)}}function Do(n){if(typeof n=="string")return n;try{/**
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
 */function ne(n="Unexpected state"){const e=`FIRESTORE (${tr}) INTERNAL ASSERTION FAILED: `+n;throw $t(e),new Error(e)}function we(n,e){n||ne()}function oe(n,e){return n}/**
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
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends hn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Bt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class fh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Vg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Qe.UNAUTHENTICATED))}shutdown(){}}class Dg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Ng{constructor(e){this.t=e,this.currentUser=Qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){we(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new Bt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Bt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Bt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(we(typeof r.accessToken=="string"),new fh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return we(e===null||typeof e=="string"),new Qe(e)}}class Mg{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Qe.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class xg{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new Mg(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Nl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Og{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Ym(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){we(this.o===void 0);const r=i=>{i.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,z("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Nl(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(we(typeof t.token=="string"),this.R=t.token,new Nl(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Lg(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function dh(){return new TextEncoder}/**
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
 */class mh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Lg(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function le(n,e){return n<e?-1:n>e?1:0}function io(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return le(r,s);{const i=dh(),a=Fg(i.encode(Ml(n,t)),i.encode(Ml(e,t)));return a!==0?a:le(r,s)}}t+=r>65535?2:1}return le(n.length,e.length)}function Ml(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function Fg(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return le(n[t],e[t]);return le(n.length,e.length)}function Kn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const xl=-62135596800,Ol=1e6;class xe{static now(){return xe.fromMillis(Date.now())}static fromDate(e){return xe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Ol);return new xe(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new K(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new K(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<xl)throw new K(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ol}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-xl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class se{static fromTimestamp(e){return new se(e)}static min(){return new se(new xe(0,0))}static max(){return new se(new xe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ll="__name__";class Pt{constructor(e,t,r){t===void 0?t=0:t>e.length&&ne(),r===void 0?r=e.length-t:r>e.length-t&&ne(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Pt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Pt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Pt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return le(e.length,t.length)}static compareSegments(e,t){const r=Pt.isNumericId(e),s=Pt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Pt.extractNumericId(e).compare(Pt.extractNumericId(t)):io(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return tn.fromString(e.substring(4,e.length-2))}}class Ce extends Pt{construct(e,t,r){return new Ce(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(B.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new Ce(t)}static emptyPath(){return new Ce([])}}const Ug=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ze extends Pt{construct(e,t,r){return new ze(e,t,r)}static isValidIdentifier(e){return Ug.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ll}static keyField(){return new ze([Ll])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new K(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new K(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new K(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new K(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ze(t)}static emptyPath(){return new ze([])}}/**
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
 */class Z{constructor(e){this.path=e}static fromPath(e){return new Z(Ce.fromString(e))}static fromName(e){return new Z(Ce.fromString(e).popFirst(5))}static empty(){return new Z(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ce.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Z(new Ce(e.slice()))}}/**
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
 */const Or=-1;function Bg(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=se.fromTimestamp(r===1e9?new xe(t+1,0):new xe(t,r));return new sn(s,Z.empty(),e)}function jg(n){return new sn(n.readTime,n.key,Or)}class sn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new sn(se.min(),Z.empty(),Or)}static max(){return new sn(se.max(),Z.empty(),Or)}}function qg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Z.comparator(n.documentKey,e.documentKey),t!==0?t:le(n.largestBatchId,e.largestBatchId))}/**
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
 */const $g="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function nr(n){if(n.code!==B.FAILED_PRECONDITION||n.message!==$g)throw n;z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ne(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new F((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof F?t:F.resolve(t)}catch(t){return F.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):F.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):F.reject(t)}static resolve(e){return new F((t,r)=>{t(e)})}static reject(e){return new F((t,r)=>{r(e)})}static waitFor(e){return new F((t,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&t()},c=>r(c))}),a=!0,i===s&&t()})}static or(e){let t=F.resolve(!1);for(const r of e)t=t.next(s=>s?F.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new F((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;t(e[u]).next(d=>{a[u]=d,++l,l===i&&r(a)},d=>s(d))}})}static doWhile(e,t){return new F((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function Hg(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function rr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Zs{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.oe(r),this._e=r=>t.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Zs.ae=-1;/**
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
 */const No=-1;function ei(n){return n==null}function Os(n){return n===0&&1/n==-1/0}function Gg(n){return typeof n=="number"&&Number.isInteger(n)&&!Os(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const ph="";function Wg(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Fl(e)),e=Kg(n.get(t),e);return Fl(e)}function Kg(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case ph:t+="";break;default:t+=i}}return t}function Fl(n){return n+ph+""}/**
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
 */function Ul(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function fn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function gh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Se{constructor(e,t){this.comparator=e,this.root=t||$e.EMPTY}insert(e,t){return new Se(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,$e.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$e.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ys(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ys(this.root,e,this.comparator,!1)}getReverseIterator(){return new ys(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ys(this.root,e,this.comparator,!0)}}class ys{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class $e{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??$e.RED,this.left=s??$e.EMPTY,this.right=i??$e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new $e(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return $e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return $e.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ne();const e=this.left.check();if(e!==this.right.check())throw ne();return e+(this.isRed()?0:1)}}$e.EMPTY=null,$e.RED=!0,$e.BLACK=!1;$e.EMPTY=new class{constructor(){this.size=0}get key(){throw ne()}get value(){throw ne()}get color(){throw ne()}get left(){throw ne()}get right(){throw ne()}copy(e,t,r,s,i){return this}insert(e,t,r){return new $e(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Oe{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Bl(this.data.getIterator())}getIteratorFrom(e){return new Bl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Oe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Oe(this.comparator);return t.data=e,t}}class Bl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class dt{constructor(e){this.fields=e,e.sort(ze.comparator)}static empty(){return new dt([])}unionWith(e){let t=new Oe(ze.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new dt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Kn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class _h extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class He{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new _h("Invalid base64 string: "+i):i}}(e);return new He(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new He(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}He.EMPTY_BYTE_STRING=new He("");const Qg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function on(n){if(we(!!n),typeof n=="string"){let e=0;const t=Qg.exec(n);if(we(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(n.seconds),nanos:Ve(n.nanos)}}function Ve(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function an(n){return typeof n=="string"?He.fromBase64String(n):He.fromUint8Array(n)}/**
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
 */const yh="server_timestamp",wh="__type__",vh="__previous_value__",Eh="__local_write_time__";function Mo(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[wh])===null||t===void 0?void 0:t.stringValue)===yh}function ti(n){const e=n.mapValue.fields[vh];return Mo(e)?ti(e):e}function Lr(n){const e=on(n.mapValue.fields[Eh].timestampValue);return new xe(e.seconds,e.nanos)}/**
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
 */class Xg{constructor(e,t,r,s,i,a,l,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}const Ls="(default)";class Fr{constructor(e,t){this.projectId=e,this.database=t||Ls}static empty(){return new Fr("","")}get isDefaultDatabase(){return this.database===Ls}isEqual(e){return e instanceof Fr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Th="__type__",bh="__max__",ws={mapValue:{fields:{__type__:{stringValue:bh}}}},Ih="__vector__",Fs="value";function ln(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Mo(n)?4:Jg(n)?9007199254740991:Yg(n)?10:11:ne()}function Mt(n,e){if(n===e)return!0;const t=ln(n);if(t!==ln(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Lr(n).isEqual(Lr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=on(s.timestampValue),l=on(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return an(s.bytesValue).isEqual(an(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return Ve(s.geoPointValue.latitude)===Ve(i.geoPointValue.latitude)&&Ve(s.geoPointValue.longitude)===Ve(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ve(s.integerValue)===Ve(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Ve(s.doubleValue),l=Ve(i.doubleValue);return a===l?Os(a)===Os(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return Kn(n.arrayValue.values||[],e.arrayValue.values||[],Mt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Ul(a)!==Ul(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!Mt(a[c],l[c])))return!1;return!0}(n,e);default:return ne()}}function Ur(n,e){return(n.values||[]).find(t=>Mt(t,e))!==void 0}function Qn(n,e){if(n===e)return 0;const t=ln(n),r=ln(e);if(t!==r)return le(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return le(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=Ve(i.integerValue||i.doubleValue),c=Ve(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return jl(n.timestampValue,e.timestampValue);case 4:return jl(Lr(n),Lr(e));case 5:return io(n.stringValue,e.stringValue);case 6:return function(i,a){const l=an(i),c=an(a);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=le(l[u],c[u]);if(d!==0)return d}return le(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=le(Ve(i.latitude),Ve(a.latitude));return l!==0?l:le(Ve(i.longitude),Ve(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return ql(n.arrayValue,e.arrayValue);case 10:return function(i,a){var l,c,u,d;const m=i.fields||{},p=a.fields||{},_=(l=m[Fs])===null||l===void 0?void 0:l.arrayValue,T=(c=p[Fs])===null||c===void 0?void 0:c.arrayValue,S=le(((u=_==null?void 0:_.values)===null||u===void 0?void 0:u.length)||0,((d=T==null?void 0:T.values)===null||d===void 0?void 0:d.length)||0);return S!==0?S:ql(_,T)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===ws.mapValue&&a===ws.mapValue)return 0;if(i===ws.mapValue)return 1;if(a===ws.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=a.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let m=0;m<c.length&&m<d.length;++m){const p=io(c[m],d[m]);if(p!==0)return p;const _=Qn(l[c[m]],u[d[m]]);if(_!==0)return _}return le(c.length,d.length)}(n.mapValue,e.mapValue);default:throw ne()}}function jl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return le(n,e);const t=on(n),r=on(e),s=le(t.seconds,r.seconds);return s!==0?s:le(t.nanos,r.nanos)}function ql(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Qn(t[s],r[s]);if(i)return i}return le(t.length,r.length)}function Xn(n){return oo(n)}function oo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=on(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return an(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Z.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=oo(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${oo(t.fields[a])}`;return s+"}"}(n.mapValue):ne()}function Cs(n){switch(ln(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ti(n);return e?16+Cs(e):16;case 5:return 2*n.stringValue.length;case 6:return an(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Cs(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return fn(r.fields,(i,a)=>{s+=i.length+Cs(a)}),s}(n.mapValue);default:throw ne()}}function ao(n){return!!n&&"integerValue"in n}function xo(n){return!!n&&"arrayValue"in n}function $l(n){return!!n&&"nullValue"in n}function zl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ss(n){return!!n&&"mapValue"in n}function Yg(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Th])===null||t===void 0?void 0:t.stringValue)===Ih}function Sr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return fn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Sr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Sr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Jg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===bh}/**
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
 */class rt{constructor(e){this.value=e}static empty(){return new rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ss(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Sr(t)}setAll(e){let t=ze.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=Sr(a):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Ss(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Mt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Ss(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){fn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new rt(Sr(this.value))}}function Ah(n){const e=[];return fn(n.fields,(t,r)=>{const s=new ze([t]);if(Ss(r)){const i=Ah(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new dt(e)}/**
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
 */class Xe{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Xe(e,0,se.min(),se.min(),se.min(),rt.empty(),0)}static newFoundDocument(e,t,r,s){return new Xe(e,1,t,se.min(),r,s,0)}static newNoDocument(e,t){return new Xe(e,2,t,se.min(),se.min(),rt.empty(),0)}static newUnknownDocument(e,t){return new Xe(e,3,t,se.min(),se.min(),rt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Xe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Xe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Us{constructor(e,t){this.position=e,this.inclusive=t}}function Hl(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=Z.comparator(Z.fromName(a.referenceValue),t.key):r=Qn(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Gl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Mt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Bs{constructor(e,t="asc"){this.field=e,this.dir=t}}function Zg(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Rh{}class Me extends Rh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new t_(e,t,r):t==="array-contains"?new s_(e,r):t==="in"?new i_(e,r):t==="not-in"?new o_(e,r):t==="array-contains-any"?new a_(e,r):new Me(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new n_(e,r):new r_(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Qn(t,this.value)):t!==null&&ln(this.value)===ln(t)&&this.matchesComparison(Qn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xt extends Rh{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new xt(e,t)}matches(e){return Ch(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Ch(n){return n.op==="and"}function Sh(n){return e_(n)&&Ch(n)}function e_(n){for(const e of n.filters)if(e instanceof xt)return!1;return!0}function lo(n){if(n instanceof Me)return n.field.canonicalString()+n.op.toString()+Xn(n.value);if(Sh(n))return n.filters.map(e=>lo(e)).join(",");{const e=n.filters.map(t=>lo(t)).join(",");return`${n.op}(${e})`}}function kh(n,e){return n instanceof Me?function(r,s){return s instanceof Me&&r.op===s.op&&r.field.isEqual(s.field)&&Mt(r.value,s.value)}(n,e):n instanceof xt?function(r,s){return s instanceof xt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&kh(a,s.filters[l]),!0):!1}(n,e):void ne()}function Ph(n){return n instanceof Me?function(t){return`${t.field.canonicalString()} ${t.op} ${Xn(t.value)}`}(n):n instanceof xt?function(t){return t.op.toString()+" {"+t.getFilters().map(Ph).join(" ,")+"}"}(n):"Filter"}class t_ extends Me{constructor(e,t,r){super(e,t,r),this.key=Z.fromName(r.referenceValue)}matches(e){const t=Z.comparator(e.key,this.key);return this.matchesComparison(t)}}class n_ extends Me{constructor(e,t){super(e,"in",t),this.keys=Vh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class r_ extends Me{constructor(e,t){super(e,"not-in",t),this.keys=Vh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Vh(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>Z.fromName(r.referenceValue))}class s_ extends Me{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return xo(t)&&Ur(t.arrayValue,this.value)}}class i_ extends Me{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ur(this.value.arrayValue,t)}}class o_ extends Me{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ur(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ur(this.value.arrayValue,t)}}class a_ extends Me{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!xo(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ur(this.value.arrayValue,r))}}/**
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
 */class l_{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.le=null}}function Wl(n,e=null,t=[],r=[],s=null,i=null,a=null){return new l_(n,e,t,r,s,i,a)}function Oo(n){const e=oe(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>lo(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ei(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Xn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Xn(r)).join(",")),e.le=t}return e.le}function Lo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Zg(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!kh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Gl(n.startAt,e.startAt)&&Gl(n.endAt,e.endAt)}function co(n){return Z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class ni{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function c_(n,e,t,r,s,i,a,l){return new ni(n,e,t,r,s,i,a,l)}function Fo(n){return new ni(n)}function Kl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function u_(n){return n.collectionGroup!==null}function kr(n){const e=oe(n);if(e.he===null){e.he=[];const t=new Set;for(const i of e.explicitOrderBy)e.he.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Oe(ze.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.he.push(new Bs(i,r))}),t.has(ze.keyField().canonicalString())||e.he.push(new Bs(ze.keyField(),r))}return e.he}function Dt(n){const e=oe(n);return e.Pe||(e.Pe=h_(e,kr(n))),e.Pe}function h_(n,e){if(n.limitType==="F")return Wl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Bs(s.field,i)});const t=n.endAt?new Us(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Us(n.startAt.position,n.startAt.inclusive):null;return Wl(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function uo(n,e,t){return new ni(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ri(n,e){return Lo(Dt(n),Dt(e))&&n.limitType===e.limitType}function Dh(n){return`${Oo(Dt(n))}|lt:${n.limitType}`}function jn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Ph(s)).join(", ")}]`),ei(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Xn(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Xn(s)).join(",")),`Target(${r})`}(Dt(n))}; limitType=${n.limitType})`}function si(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Z.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of kr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,c){const u=Hl(a,l,c);return a.inclusive?u<=0:u<0}(r.startAt,kr(r),s)||r.endAt&&!function(a,l,c){const u=Hl(a,l,c);return a.inclusive?u>=0:u>0}(r.endAt,kr(r),s))}(n,e)}function f_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Nh(n){return(e,t)=>{let r=!1;for(const s of kr(n)){const i=d_(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function d_(n,e,t){const r=n.field.isKeyField()?Z.comparator(e.key,t.key):function(i,a,l){const c=a.data.field(i),u=l.data.field(i);return c!==null&&u!==null?Qn(c,u):ne()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ne()}}/**
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
 */class kn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){fn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return gh(this.inner)}size(){return this.innerSize}}/**
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
 */const m_=new Se(Z.comparator);function zt(){return m_}const Mh=new Se(Z.comparator);function Ir(...n){let e=Mh;for(const t of n)e=e.insert(t.key,t);return e}function xh(n){let e=Mh;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function In(){return Pr()}function Oh(){return Pr()}function Pr(){return new kn(n=>n.toString(),(n,e)=>n.isEqual(e))}const p_=new Se(Z.comparator),g_=new Oe(Z.comparator);function fe(...n){let e=g_;for(const t of n)e=e.add(t);return e}const __=new Oe(le);function y_(){return __}/**
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
 */function Uo(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Os(e)?"-0":e}}function Lh(n){return{integerValue:""+n}}function w_(n,e){return Gg(e)?Lh(e):Uo(n,e)}/**
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
 */class ii{constructor(){this._=void 0}}function v_(n,e,t){return n instanceof js?function(s,i){const a={fields:{[wh]:{stringValue:yh},[Eh]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Mo(i)&&(i=ti(i)),i&&(a.fields[vh]=i),{mapValue:a}}(t,e):n instanceof Br?Uh(n,e):n instanceof jr?Bh(n,e):function(s,i){const a=Fh(s,i),l=Ql(a)+Ql(s.Ie);return ao(a)&&ao(s.Ie)?Lh(l):Uo(s.serializer,l)}(n,e)}function E_(n,e,t){return n instanceof Br?Uh(n,e):n instanceof jr?Bh(n,e):t}function Fh(n,e){return n instanceof qs?function(r){return ao(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class js extends ii{}class Br extends ii{constructor(e){super(),this.elements=e}}function Uh(n,e){const t=jh(e);for(const r of n.elements)t.some(s=>Mt(s,r))||t.push(r);return{arrayValue:{values:t}}}class jr extends ii{constructor(e){super(),this.elements=e}}function Bh(n,e){let t=jh(e);for(const r of n.elements)t=t.filter(s=>!Mt(s,r));return{arrayValue:{values:t}}}class qs extends ii{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function Ql(n){return Ve(n.integerValue||n.doubleValue)}function jh(n){return xo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function T_(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Br&&s instanceof Br||r instanceof jr&&s instanceof jr?Kn(r.elements,s.elements,Mt):r instanceof qs&&s instanceof qs?Mt(r.Ie,s.Ie):r instanceof js&&s instanceof js}(n.transform,e.transform)}class b_{constructor(e,t){this.version=e,this.transformResults=t}}class mt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new mt}static exists(e){return new mt(void 0,e)}static updateTime(e){return new mt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ks(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class oi{}function qh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Bo(n.key,mt.none()):new zr(n.key,n.data,mt.none());{const t=n.data,r=rt.empty();let s=new Oe(ze.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new dn(n.key,r,new dt(s.toArray()),mt.none())}}function I_(n,e,t){n instanceof zr?function(s,i,a){const l=s.value.clone(),c=Yl(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof dn?function(s,i,a){if(!ks(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Yl(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll($h(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Vr(n,e,t,r){return n instanceof zr?function(i,a,l,c){if(!ks(i.precondition,a))return l;const u=i.value.clone(),d=Jl(i.fieldTransforms,c,a);return u.setAll(d),a.convertToFoundDocument(a.version,u).setHasLocalMutations(),null}(n,e,t,r):n instanceof dn?function(i,a,l,c){if(!ks(i.precondition,a))return l;const u=Jl(i.fieldTransforms,c,a),d=a.data;return d.setAll($h(i)),d.setAll(u),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(i,a,l){return ks(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function A_(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Fh(r.transform,s||null);i!=null&&(t===null&&(t=rt.empty()),t.set(r.field,i))}return t||null}function Xl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Kn(r,s,(i,a)=>T_(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class zr extends oi{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class dn extends oi{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function $h(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Yl(n,e,t){const r=new Map;we(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,E_(a,l,t[s]))}return r}function Jl(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,v_(i,a,e))}return r}class Bo extends oi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class R_ extends oi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class C_{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&I_(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Vr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Vr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Oh();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const c=qh(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(se.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),fe())}isEqual(e){return this.batchId===e.batchId&&Kn(this.mutations,e.mutations,(t,r)=>Xl(t,r))&&Kn(this.baseMutations,e.baseMutations,(t,r)=>Xl(t,r))}}class jo{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){we(e.mutations.length===r.length);let s=function(){return p_}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new jo(e,t,r,s)}}/**
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
 */class S_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class k_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var De,de;function P_(n){switch(n){case B.OK:return ne();case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0;default:return ne()}}function zh(n){if(n===void 0)return $t("GRPC error has no .code"),B.UNKNOWN;switch(n){case De.OK:return B.OK;case De.CANCELLED:return B.CANCELLED;case De.UNKNOWN:return B.UNKNOWN;case De.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case De.INTERNAL:return B.INTERNAL;case De.UNAVAILABLE:return B.UNAVAILABLE;case De.UNAUTHENTICATED:return B.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case De.NOT_FOUND:return B.NOT_FOUND;case De.ALREADY_EXISTS:return B.ALREADY_EXISTS;case De.PERMISSION_DENIED:return B.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case De.ABORTED:return B.ABORTED;case De.OUT_OF_RANGE:return B.OUT_OF_RANGE;case De.UNIMPLEMENTED:return B.UNIMPLEMENTED;case De.DATA_LOSS:return B.DATA_LOSS;default:return ne()}}(de=De||(De={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const V_=new tn([4294967295,4294967295],0);function Zl(n){const e=dh().encode(n),t=new oh;return t.update(e),new Uint8Array(t.digest())}function ec(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new tn([t,r],0),new tn([s,i],0)]}class qo{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Ar(`Invalid padding: ${t}`);if(r<0)throw new Ar(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ar(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Ar(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=tn.fromNumber(this.Ee)}Ae(e,t,r){let s=e.add(t.multiply(tn.fromNumber(r)));return s.compare(V_)===1&&(s=new tn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=Zl(e),[r,s]=ec(t);for(let i=0;i<this.hashCount;i++){const a=this.Ae(r,s,i);if(!this.Re(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new qo(i,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ee===0)return;const t=Zl(e),[r,s]=ec(t);for(let i=0;i<this.hashCount;i++){const a=this.Ae(r,s,i);this.Ve(a)}}Ve(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Ar extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ai{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Hr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ai(se.min(),s,new Se(le),zt(),fe())}}class Hr{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Hr(r,t,fe(),fe(),fe())}}/**
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
 */class Ps{constructor(e,t,r,s){this.me=e,this.removedTargetIds=t,this.key=r,this.fe=s}}class Hh{constructor(e,t){this.targetId=e,this.ge=t}}class Gh{constructor(e,t,r=He.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class tc{constructor(){this.pe=0,this.ye=nc(),this.we=He.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=fe(),t=fe(),r=fe();return this.ye.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:ne()}}),new Hr(this.we,this.Se,e,t,r)}Me(){this.be=!1,this.ye=nc()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,we(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class D_{constructor(e){this.ke=e,this.qe=new Map,this.Qe=zt(),this.$e=vs(),this.Ue=vs(),this.Ke=new Se(le)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const r=this.He(t);switch(e.state){case 0:this.Je(t)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(t);break;case 3:this.Je(t)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),r.Ce(e.resumeToken));break;default:ne()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((r,s)=>{this.Je(s)&&t(s)})}Ze(e){const t=e.targetId,r=e.ge.count,s=this.Xe(t);if(s){const i=s.target;if(co(i))if(r===0){const a=new Z(i.path);this.ze(t,a,Xe.newNoDocument(a,se.min()))}else we(r===1);else{const a=this.et(t);if(a!==r){const l=this.tt(e),c=l?this.nt(l,e,a):1;if(c!==0){this.Ye(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,u)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=an(r).toUint8Array()}catch(c){if(c instanceof _h)return Wn("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new qo(a,s,i)}catch(c){return Wn(c instanceof Ar?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ee===0?null:l}nt(e,t,r){return t.ge.count===r-this.st(e,t.targetId)?0:2}st(e,t){const r=this.ke.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.ke.it(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.ze(t,i,null),s++)}),s}ot(e){const t=new Map;this.qe.forEach((i,a)=>{const l=this.Xe(a);if(l){if(i.current&&co(l.target)){const c=new Z(l.target.path);this._t(c).has(a)||this.ut(a,c)||this.ze(a,c,Xe.newNoDocument(c,e))}i.ve&&(t.set(a,i.Fe()),i.Me())}});let r=fe();this.Ue.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const u=this.Xe(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.Qe.forEach((i,a)=>a.setReadTime(e));const s=new ai(e,t,this.Ke,this.Qe,r);return this.Qe=zt(),this.$e=vs(),this.Ue=vs(),this.Ke=new Se(le),s}Ge(e,t){if(!this.Je(e))return;const r=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,r),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}ze(e,t,r){if(!this.Je(e))return;const s=this.He(e);this.ut(e,t)?s.xe(t,1):s.Oe(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),this.Ue=this.Ue.insert(t,this.ct(t).add(e)),r&&(this.Qe=this.Qe.insert(t,r))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new tc,this.qe.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new Oe(le),this.Ue=this.Ue.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new Oe(le),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||z("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new tc),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function vs(){return new Se(Z.comparator)}function nc(){return new Se(Z.comparator)}const N_={asc:"ASCENDING",desc:"DESCENDING"},M_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},x_={and:"AND",or:"OR"};class O_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ho(n,e){return n.useProto3Json||ei(e)?e:{value:e}}function $s(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Wh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function L_(n,e){return $s(n,e.toTimestamp())}function Nt(n){return we(!!n),se.fromTimestamp(function(t){const r=on(t);return new xe(r.seconds,r.nanos)}(n))}function $o(n,e){return fo(n,e).canonicalString()}function fo(n,e){const t=function(s){return new Ce(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Kh(n){const e=Ce.fromString(n);return we(Zh(e)),e}function mo(n,e){return $o(n.databaseId,e.path)}function zi(n,e){const t=Kh(e);if(t.get(1)!==n.databaseId.projectId)throw new K(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new K(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Z(Xh(t))}function Qh(n,e){return $o(n.databaseId,e)}function F_(n){const e=Kh(n);return e.length===4?Ce.emptyPath():Xh(e)}function po(n){return new Ce(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Xh(n){return we(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function rc(n,e,t){return{name:mo(n,e),fields:t.value.mapValue.fields}}function U_(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ne()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(we(d===void 0||typeof d=="string"),He.fromBase64String(d||"")):(we(d===void 0||d instanceof Buffer||d instanceof Uint8Array),He.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(u){const d=u.code===void 0?B.UNKNOWN:zh(u.code);return new K(d,u.message||"")}(a);t=new Gh(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=zi(n,r.document.name),i=Nt(r.document.updateTime),a=r.document.createTime?Nt(r.document.createTime):se.min(),l=new rt({mapValue:{fields:r.document.fields}}),c=Xe.newFoundDocument(s,i,a,l),u=r.targetIds||[],d=r.removedTargetIds||[];t=new Ps(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=zi(n,r.document),i=r.readTime?Nt(r.readTime):se.min(),a=Xe.newNoDocument(s,i),l=r.removedTargetIds||[];t=new Ps([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=zi(n,r.document),i=r.removedTargetIds||[];t=new Ps([],i,s,null)}else{if(!("filter"in e))return ne();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new k_(s,i),l=r.targetId;t=new Hh(l,a)}}return t}function B_(n,e){let t;if(e instanceof zr)t={update:rc(n,e.key,e.value)};else if(e instanceof Bo)t={delete:mo(n,e.key)};else if(e instanceof dn)t={update:rc(n,e.key,e.data),updateMask:Q_(e.fieldMask)};else{if(!(e instanceof R_))return ne();t={verify:mo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof js)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Br)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof jr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof qs)return{fieldPath:a.field.canonicalString(),increment:l.Ie};throw ne()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:L_(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ne()}(n,e.precondition)),t}function j_(n,e){return n&&n.length>0?(we(e!==void 0),n.map(t=>function(s,i){let a=s.updateTime?Nt(s.updateTime):Nt(i);return a.isEqual(se.min())&&(a=Nt(i)),new b_(a,s.transformResults||[])}(t,e))):[]}function q_(n,e){return{documents:[Qh(n,e.path)]}}function $_(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Qh(n,s);const i=function(u){if(u.length!==0)return Jh(xt.create(u,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(u){if(u.length!==0)return u.map(d=>function(p){return{field:qn(p.field),direction:G_(p.dir)}}(d))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=ho(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ht:t,parent:s}}function z_(n){let e=F_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){we(r===1);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=function(m){const p=Yh(m);return p instanceof xt&&Sh(p)?p.getFilters():[p]}(t.where));let a=[];t.orderBy&&(a=function(m){return m.map(p=>function(T){return new Bs($n(T.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(p))}(t.orderBy));let l=null;t.limit&&(l=function(m){let p;return p=typeof m=="object"?m.value:m,ei(p)?null:p}(t.limit));let c=null;t.startAt&&(c=function(m){const p=!!m.before,_=m.values||[];return new Us(_,p)}(t.startAt));let u=null;return t.endAt&&(u=function(m){const p=!m.before,_=m.values||[];return new Us(_,p)}(t.endAt)),c_(e,s,a,i,l,"F",c,u)}function H_(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ne()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Yh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=$n(t.unaryFilter.field);return Me.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=$n(t.unaryFilter.field);return Me.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=$n(t.unaryFilter.field);return Me.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=$n(t.unaryFilter.field);return Me.create(a,"!=",{nullValue:"NULL_VALUE"});default:return ne()}}(n):n.fieldFilter!==void 0?function(t){return Me.create($n(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ne()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return xt.create(t.compositeFilter.filters.map(r=>Yh(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ne()}}(t.compositeFilter.op))}(n):ne()}function G_(n){return N_[n]}function W_(n){return M_[n]}function K_(n){return x_[n]}function qn(n){return{fieldPath:n.canonicalString()}}function $n(n){return ze.fromServerFormat(n.fieldPath)}function Jh(n){return n instanceof Me?function(t){if(t.op==="=="){if(zl(t.value))return{unaryFilter:{field:qn(t.field),op:"IS_NAN"}};if($l(t.value))return{unaryFilter:{field:qn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(zl(t.value))return{unaryFilter:{field:qn(t.field),op:"IS_NOT_NAN"}};if($l(t.value))return{unaryFilter:{field:qn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qn(t.field),op:W_(t.op),value:t.value}}}(n):n instanceof xt?function(t){const r=t.getFilters().map(s=>Jh(s));return r.length===1?r[0]:{compositeFilter:{op:K_(t.op),filters:r}}}(n):ne()}function Q_(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Zh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Jt{constructor(e,t,r,s,i=se.min(),a=se.min(),l=He.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Jt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Jt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Jt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Jt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class X_{constructor(e){this.Tt=e}}function Y_(n){const e=z_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?uo(e,e.limit,"L"):e}/**
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
 */class J_{constructor(){this.Tn=new Z_}addToCollectionParentIndex(e,t){return this.Tn.add(t),F.resolve()}getCollectionParents(e,t){return F.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return F.resolve()}deleteFieldIndex(e,t){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,t){return F.resolve()}getDocumentsMatchingTarget(e,t){return F.resolve(null)}getIndexType(e,t){return F.resolve(0)}getFieldIndexes(e,t){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,t){return F.resolve(sn.min())}getMinOffsetFromCollectionGroup(e,t){return F.resolve(sn.min())}updateCollectionGroup(e,t,r){return F.resolve()}updateIndexEntries(e,t){return F.resolve()}}class Z_{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Oe(Ce.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Oe(Ce.comparator)).toArray()}}/**
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
 */const sc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ef=41943040;class nt{static withCacheSize(e){return new nt(e,nt.DEFAULT_COLLECTION_PERCENTILE,nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */nt.DEFAULT_COLLECTION_PERCENTILE=10,nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,nt.DEFAULT=new nt(ef,nt.DEFAULT_COLLECTION_PERCENTILE,nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),nt.DISABLED=new nt(-1,0,0);/**
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
 */class Yn{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new Yn(0)}static Kn(){return new Yn(-1)}}/**
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
 */const ic="LruGarbageCollector",ey=1048576;function oc([n,e],[t,r]){const s=le(n,t);return s===0?le(e,r):s}class ty{constructor(e){this.Hn=e,this.buffer=new Oe(oc),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();oc(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ny{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){z(ic,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){rr(t)?z(ic,"Ignoring IndexedDB error during garbage collection: ",t):await nr(t)}await this.er(3e5)})}}class ry{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return F.resolve(Zs.ae);const r=new ty(t);return this.tr.forEachTarget(e,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(e,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.tr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(z("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(sc)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),sc):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let r,s,i,a,l,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,a=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,t))).next(m=>(i=m,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(u=Date.now(),Bn()<=me.DEBUG&&z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${m} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function sy(n,e){return new ry(n,e)}/**
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
 */class iy{constructor(){this.changes=new kn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Xe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?F.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class oy{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class ay{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Vr(r.mutation,s,dt.empty(),xe.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,fe()).next(()=>r))}getLocalViewOfDocuments(e,t,r=fe()){const s=In();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=Ir();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=In();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,fe()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let i=zt();const a=Pr(),l=function(){return Pr()}();return t.forEach((c,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof dn)?i=i.insert(u.key,u):d!==void 0?(a.set(u.key,d.mutation.getFieldMask()),Vr(d.mutation,u,d.mutation.getFieldMask(),xe.now())):a.set(u.key,dt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,d)=>a.set(u,d)),t.forEach((u,d)=>{var m;return l.set(u,new oy(d,(m=a.get(u))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,t){const r=Pr();let s=new Se((a,l)=>a-l),i=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let d=r.get(c)||dt.empty();d=l.applyToLocalView(u,d),r.set(c,d);const m=(s.get(l.batchId)||fe()).add(c);s=s.insert(l.batchId,m)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,m=Oh();d.forEach(p=>{if(!i.has(p)){const _=qh(t.get(p),r.get(p));_!==null&&m.set(p,_),i=i.add(p)}}),a.push(this.documentOverlayCache.saveOverlays(e,u,m))}return F.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return Z.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):u_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):F.resolve(In());let l=Or,c=i;return a.next(u=>F.forEach(u,(d,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(d)?F.resolve():this.remoteDocumentCache.getEntry(e,d).next(p=>{c=c.insert(d,p)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,fe())).next(d=>({batchId:l,changes:xh(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Z(t)).next(r=>{let s=Ir();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Ir();return this.indexManager.getCollectionParents(e,i).next(l=>F.forEach(l,c=>{const u=function(m,p){return new ni(p,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((m,p)=>{a=a.insert(m,p)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((c,u)=>{const d=u.getKey();a.get(d)===null&&(a=a.insert(d,Xe.newInvalidDocument(d)))});let l=Ir();return a.forEach((c,u)=>{const d=i.get(c);d!==void 0&&Vr(d.mutation,u,dt.empty(),xe.now()),si(t,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class ly{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return F.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Nt(s.createTime)}}(t)),F.resolve()}getNamedQuery(e,t){return F.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(s){return{name:s.name,query:Y_(s.bundledQuery),readTime:Nt(s.readTime)}}(t)),F.resolve()}}/**
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
 */class cy{constructor(){this.overlays=new Se(Z.comparator),this.Rr=new Map}getOverlay(e,t){return F.resolve(this.overlays.get(t))}getOverlays(e,t){const r=In();return F.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.Et(e,t,i)}),F.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(r)),F.resolve()}getOverlaysForCollection(e,t,r){const s=In(),i=t.length+1,a=new Z(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return F.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Se((u,d)=>u-d);const a=this.overlays.getIterator();for(;a.hasNext();){const u=a.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=In(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=In(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>l.set(u,d)),!(l.size()>=s)););return F.resolve(l)}Et(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new S_(t,r));let i=this.Rr.get(t);i===void 0&&(i=fe(),this.Rr.set(t,i)),this.Rr.set(t,i.add(r.key))}}/**
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
 */class uy{constructor(){this.sessionToken=He.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,F.resolve()}}/**
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
 */class zo{constructor(){this.Vr=new Oe(Be.mr),this.gr=new Oe(Be.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const r=new Be(e,t);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.wr(new Be(e,t))}Sr(e,t){e.forEach(r=>this.removeReference(r,t))}br(e){const t=new Z(new Ce([])),r=new Be(t,e),s=new Be(t,e+1),i=[];return this.gr.forEachInRange([r,s],a=>{this.wr(a),i.push(a.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new Z(new Ce([])),r=new Be(t,e),s=new Be(t,e+1);let i=fe();return this.gr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Be(e,0),r=this.Vr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Be{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return Z.comparator(e.key,t.key)||le(e.Cr,t.Cr)}static pr(e,t){return le(e.Cr,t.Cr)||Z.comparator(e.key,t.key)}}/**
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
 */class hy{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new Oe(Be.mr)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new C_(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.Mr=this.Mr.add(new Be(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return F.resolve(a)}lookupMutationBatch(e,t){return F.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Nr(r),i=s<0?0:s;return F.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?No:this.Fr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Be(t,0),s=new Be(t,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([r,s],a=>{const l=this.Or(a.Cr);i.push(l)}),F.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Oe(le);return t.forEach(s=>{const i=new Be(s,0),a=new Be(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,a],l=>{r=r.add(l.Cr)})}),F.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;Z.isDocumentKey(i)||(i=i.child(""));const a=new Be(new Z(i),0);let l=new Oe(le);return this.Mr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Cr)),!0)},a),F.resolve(this.Br(l))}Br(e){const t=[];return e.forEach(r=>{const s=this.Or(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){we(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return F.forEach(t.mutations,s=>{const i=new Be(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,t){const r=new Be(t,0),s=this.Mr.firstAfterOrEqual(r);return F.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class fy{constructor(e){this.kr=e,this.docs=function(){return new Se(Z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.kr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return F.resolve(r?r.document.mutableCopy():Xe.newInvalidDocument(t))}getEntries(e,t){let r=zt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Xe.newInvalidDocument(s))}),F.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=zt();const a=t.path,l=new Z(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!a.isPrefixOf(u.path))break;u.path.length>a.length+1||qg(jg(d),r)<=0||(s.has(d.key)||si(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return F.resolve(i)}getAllFromCollectionGroup(e,t,r,s){ne()}qr(e,t){return F.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new dy(this)}getSize(e){return F.resolve(this.size)}}class dy extends iy{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Ir.addEntry(e,s)):this.Ir.removeEntry(r)}),F.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
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
 */class my{constructor(e){this.persistence=e,this.Qr=new kn(t=>Oo(t),Lo),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.$r=0,this.Ur=new zo,this.targetCount=0,this.Kr=Yn.Un()}forEachTarget(e,t){return this.Qr.forEach((r,s)=>t(s)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.$r&&(this.$r=t),F.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Kr=new Yn(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,F.resolve()}updateTargetData(e,t){return this.zn(t),F.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Ur.br(t.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Qr.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Qr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),F.waitFor(i).next(()=>s)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,t){const r=this.Qr.get(t)||null;return F.resolve(r)}addMatchingKeys(e,t,r){return this.Ur.yr(t,r),F.resolve()}removeMatchingKeys(e,t,r){this.Ur.Sr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),F.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Ur.br(t),F.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Ur.vr(t);return F.resolve(r)}containsKey(e,t){return F.resolve(this.Ur.containsKey(t))}}/**
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
 */class tf{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new Zs(0),this.zr=!1,this.zr=!0,this.jr=new uy,this.referenceDelegate=e(this),this.Hr=new my(this),this.indexManager=new J_,this.remoteDocumentCache=function(s){return new fy(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new X_(t),this.Yr=new ly(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new cy,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Wr[e.toKey()];return r||(r=new hy(t,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,r){z("MemoryPersistence","Starting transaction:",e);const s=new py(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(i=>this.referenceDelegate.Xr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}ei(e,t){return F.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,t)))}}class py extends zg{constructor(e){super(),this.currentSequenceNumber=e}}class Ho{constructor(e){this.persistence=e,this.ti=new zo,this.ni=null}static ri(e){return new Ho(e)}get ii(){if(this.ni)return this.ni;throw ne()}addReference(e,t,r){return this.ti.addReference(r,t),this.ii.delete(r.toString()),F.resolve()}removeReference(e,t,r){return this.ti.removeReference(r,t),this.ii.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),F.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.ii.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.ii,r=>{const s=Z.fromPath(r);return this.si(e,s).next(i=>{i||t.removeEntry(s,se.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(r=>{r?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return F.or([()=>F.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class zs{constructor(e,t){this.persistence=e,this.oi=new kn(r=>Wg(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=sy(this,t)}static ri(e,t){return new zs(e,t)}Zr(){}Xr(e){return F.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}sr(e){let t=0;return this.rr(e,r=>{t++}).next(()=>t)}rr(e,t){return F.forEach(this.oi,(r,s)=>this.ar(e,r,s).next(i=>i?F.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.qr(e,a=>this.ar(e,a,t).next(l=>{l||(r++,i.removeEntry(a,se.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),F.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),F.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Cs(e.data.value)),t}ar(e,t,r){return F.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.oi.get(t);return F.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Go{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Hi=r,this.Ji=s}static Yi(e,t){let r=fe(),s=fe();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Go(e,t.fromCache,r,s)}}/**
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
 */class gy{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class _y{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Wd()?8:Hg(zd())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.rs(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ss(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new gy;return this._s(e,t,a).next(l=>{if(i.result=l,this.Xi)return this.us(e,t,a,l.size)})}).next(()=>i.result)}us(e,t,r,s){return r.documentReadCount<this.es?(Bn()<=me.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",jn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),F.resolve()):(Bn()<=me.DEBUG&&z("QueryEngine","Query:",jn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(Bn()<=me.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",jn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Dt(t))):F.resolve())}rs(e,t){if(Kl(t))return F.resolve(null);let r=Dt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=uo(t,null,"F"),r=Dt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=fe(...i);return this.ns.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.cs(t,l);return this.ls(t,u,a,c.readTime)?this.rs(e,uo(t,null,"F")):this.hs(e,u,t,c)}))})))}ss(e,t,r,s){return Kl(t)||s.isEqual(se.min())?F.resolve(null):this.ns.getDocuments(e,r).next(i=>{const a=this.cs(t,i);return this.ls(t,a,r,s)?F.resolve(null):(Bn()<=me.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),jn(t)),this.hs(e,a,t,Bg(s,Or)).next(l=>l))})}cs(e,t){let r=new Oe(Nh(e));return t.forEach((s,i)=>{si(e,i)&&(r=r.add(i))}),r}ls(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}_s(e,t,r){return Bn()<=me.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",jn(t)),this.ns.getDocumentsMatchingQuery(e,t,sn.min(),r)}hs(e,t,r,s){return this.ns.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const Wo="LocalStore",yy=3e8;class wy{constructor(e,t,r,s){this.persistence=e,this.Ps=t,this.serializer=s,this.Ts=new Se(le),this.Is=new kn(i=>Oo(i),Lo),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ay(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function vy(n,e,t,r){return new wy(n,e,t,r)}async function nf(n,e){const t=oe(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.As(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=fe();for(const u of s){a.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of i){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return t.localDocuments.getDocuments(r,c).next(u=>({Rs:u,removedBatchIds:a,addedBatchIds:l}))})})}function Ey(n,e){const t=oe(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.ds.newChangeBuffer({trackRemovals:!0});return function(l,c,u,d){const m=u.batch,p=m.keys();let _=F.resolve();return p.forEach(T=>{_=_.next(()=>d.getEntry(c,T)).next(S=>{const k=u.docVersions.get(T);we(k!==null),S.version.compareTo(k)<0&&(m.applyToRemoteDocument(S,u),S.isValidDocument()&&(S.setReadTime(u.commitVersion),d.addEntry(S)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(c,m))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=fe();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function rf(n){const e=oe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function Ty(n,e){const t=oe(n),r=e.snapshotVersion;let s=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.ds.newChangeBuffer({trackRemovals:!0});s=t.Ts;const l=[];e.targetChanges.forEach((d,m)=>{const p=s.get(m);if(!p)return;l.push(t.Hr.removeMatchingKeys(i,d.removedDocuments,m).next(()=>t.Hr.addMatchingKeys(i,d.addedDocuments,m)));let _=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?_=_.withResumeToken(He.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),s=s.insert(m,_),function(S,k,x){return S.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=yy?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(p,_,d)&&l.push(t.Hr.updateTargetData(i,_))});let c=zt(),u=fe();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(by(i,a,e.documentUpdates).next(d=>{c=d.Vs,u=d.fs})),!r.isEqual(se.min())){const d=t.Hr.getLastRemoteSnapshotVersion(i).next(m=>t.Hr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return F.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(t.Ts=s,i))}function by(n,e,t){let r=fe(),s=fe();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=zt();return t.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(se.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):z(Wo,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Vs:a,fs:s}})}function Iy(n,e){const t=oe(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=No),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Ay(n,e){const t=oe(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Hr.getTargetData(r,e).next(i=>i?(s=i,F.resolve(s)):t.Hr.allocateTargetId(r).next(a=>(s=new Jt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Hr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(r.targetId,r),t.Is.set(e,r.targetId)),r})}async function go(n,e,t){const r=oe(n),s=r.Ts.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!rr(a))throw a;z(Wo,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ts=r.Ts.remove(e),r.Is.delete(s.target)}function ac(n,e,t){const r=oe(n);let s=se.min(),i=fe();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,u,d){const m=oe(c),p=m.Is.get(d);return p!==void 0?F.resolve(m.Ts.get(p)):m.Hr.getTargetData(u,d)}(r,a,Dt(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>r.Ps.getDocumentsMatchingQuery(a,e,t?s:se.min(),t?i:fe())).next(l=>(Ry(r,f_(e),l),{documents:l,gs:i})))}function Ry(n,e,t){let r=n.Es.get(e)||se.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Es.set(e,r)}class lc{constructor(){this.activeTargetIds=y_()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Cy{constructor(){this.ho=new lc,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,r){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new lc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Sy{To(e){}shutdown(){}}/**
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
 */const cc="ConnectivityMonitor";class uc{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){z(cc,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){z(cc,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Es=null;function _o(){return Es===null?Es=function(){return 268435456+Math.round(2147483648*Math.random())}():Es++,"0x"+Es.toString(16)}/**
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
 */const Hi="RestConnection",ky={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Py{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===Ls?`project_id=${r}`:`project_id=${r}&database_id=${s}`}So(e,t,r,s,i){const a=_o(),l=this.bo(e,t.toUriEncodedString());z(Hi,`Sending RPC '${e}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(c,s,i),this.vo(e,l,c,r).then(u=>(z(Hi,`Received RPC '${e}' ${a}: `,u),u),u=>{throw Wn(Hi,`RPC '${e}' ${a} failed with error: `,u,"url: ",l,"request:",r),u})}Co(e,t,r,s,i,a){return this.So(e,t,r,s,i)}Do(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+tr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}bo(e,t){const r=ky[e];return`${this.po}/v1/${t}:${r}`}terminate(){}}/**
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
 */class Vy{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
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
 */const Ke="WebChannelConnection";class Dy extends Py{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,r,s){const i=_o();return new Promise((a,l)=>{const c=new ah;c.setWithCredentials(!0),c.listenOnce(lh.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Rs.NO_ERROR:const d=c.getResponseJson();z(Ke,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),a(d);break;case Rs.TIMEOUT:z(Ke,`RPC '${e}' ${i} timed out`),l(new K(B.DEADLINE_EXCEEDED,"Request time out"));break;case Rs.HTTP_ERROR:const m=c.getStatus();if(z(Ke,`RPC '${e}' ${i} failed with status:`,m,"response text:",c.getResponseText()),m>0){let p=c.getResponseJson();Array.isArray(p)&&(p=p[0]);const _=p==null?void 0:p.error;if(_&&_.status&&_.message){const T=function(k){const x=k.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(x)>=0?x:B.UNKNOWN}(_.status);l(new K(T,_.message))}else l(new K(B.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new K(B.UNAVAILABLE,"Connection failed."));break;default:ne()}}finally{z(Ke,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);z(Ke,`RPC '${e}' ${i} sending request:`,s),c.send(t,"POST",u,r,15)})}Wo(e,t,r){const s=_o(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=hh(),l=uh(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const d=i.join("");z(Ke,`Creating RPC '${e}' stream ${s}: ${d}`,c);const m=a.createWebChannel(d,c);let p=!1,_=!1;const T=new Vy({Fo:k=>{_?z(Ke,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(p||(z(Ke,`Opening RPC '${e}' stream ${s} transport.`),m.open(),p=!0),z(Ke,`RPC '${e}' stream ${s} sending:`,k),m.send(k))},Mo:()=>m.close()}),S=(k,x,O)=>{k.listen(x,L=>{try{O(L)}catch(U){setTimeout(()=>{throw U},0)}})};return S(m,br.EventType.OPEN,()=>{_||(z(Ke,`RPC '${e}' stream ${s} transport opened.`),T.Qo())}),S(m,br.EventType.CLOSE,()=>{_||(_=!0,z(Ke,`RPC '${e}' stream ${s} transport closed`),T.Uo())}),S(m,br.EventType.ERROR,k=>{_||(_=!0,Wn(Ke,`RPC '${e}' stream ${s} transport errored:`,k),T.Uo(new K(B.UNAVAILABLE,"The operation could not be completed")))}),S(m,br.EventType.MESSAGE,k=>{var x;if(!_){const O=k.data[0];we(!!O);const L=O,U=(L==null?void 0:L.error)||((x=L[0])===null||x===void 0?void 0:x.error);if(U){z(Ke,`RPC '${e}' stream ${s} received error:`,U);const te=U.status;let X=function(v){const I=De[v];if(I!==void 0)return zh(I)}(te),b=U.message;X===void 0&&(X=B.INTERNAL,b="Unknown error status: "+te+" with message "+U.message),_=!0,T.Uo(new K(X,b)),m.close()}else z(Ke,`RPC '${e}' stream ${s} received:`,O),T.Ko(O)}}),S(l,ch.STAT_EVENT,k=>{k.stat===so.PROXY?z(Ke,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===so.NOPROXY&&z(Ke,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{T.$o()},0),T}}function Gi(){return typeof document<"u"?document:null}/**
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
 */function li(n){return new O_(n,!0)}/**
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
 */class sf{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Ti=e,this.timerId=t,this.Go=r,this.zo=s,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,t-r);s>0&&z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const hc="PersistentStream";class of{constructor(e,t,r,s,i,a,l,c){this.Ti=e,this.n_=r,this.r_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new sf(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===B.RESOURCE_EXHAUSTED?($t(t.toString()),$t("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===t&&this.V_(r,s)},r=>{e(()=>{const s=new K(B.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(e,t){const r=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return z(hc,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(z(hc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ny extends of{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=U_(this.serializer,e),r=function(i){if(!("targetChange"in i))return se.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?se.min():a.readTime?Nt(a.readTime):se.min()}(e);return this.listener.p_(t,r)}y_(e){const t={};t.database=po(this.serializer),t.addTarget=function(i,a){let l;const c=a.target;if(l=co(c)?{documents:q_(i,c)}:{query:$_(i,c).ht},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Wh(i,a.resumeToken);const u=ho(i,a.expectedCount);u!==null&&(l.expectedCount=u)}else if(a.snapshotVersion.compareTo(se.min())>0){l.readTime=$s(i,a.snapshotVersion.toTimestamp());const u=ho(i,a.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=H_(this.serializer,e);r&&(t.labels=r),this.I_(t)}w_(e){const t={};t.database=po(this.serializer),t.removeTarget=e,this.I_(t)}}class My extends of{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return we(!!e.streamToken),this.lastStreamToken=e.streamToken,we(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){we(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=j_(e.writeResults,e.commitTime),r=Nt(e.commitTime);return this.listener.v_(r,t)}C_(){const e={};e.database=po(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>B_(this.serializer,r))};this.I_(t)}}/**
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
 */class xy{}class Oy extends xy{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new K(B.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.So(e,fo(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(B.UNKNOWN,i.toString())})}Co(e,t,r,s,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Co(e,fo(t,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new K(B.UNKNOWN,a.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class Ly{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?($t(t),this.N_=!1):z("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const Sn="RemoteStore";class Fy{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(a=>{r.enqueueAndForget(async()=>{Pn(this)&&(z(Sn,"Restarting streams for network reachability change."),await async function(c){const u=oe(c);u.W_.add(4),await Gr(u),u.j_.set("Unknown"),u.W_.delete(4),await ci(u)}(this))})}),this.j_=new Ly(r,s)}}async function ci(n){if(Pn(n))for(const e of n.G_)await e(!0)}async function Gr(n){for(const e of n.G_)await e(!1)}function af(n,e){const t=oe(n);t.K_.has(e.targetId)||(t.K_.set(e.targetId,e),Yo(t)?Xo(t):sr(t).c_()&&Qo(t,e))}function Ko(n,e){const t=oe(n),r=sr(t);t.K_.delete(e),r.c_()&&lf(t,e),t.K_.size===0&&(r.c_()?r.P_():Pn(t)&&t.j_.set("Unknown"))}function Qo(n,e){if(n.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}sr(n).y_(e)}function lf(n,e){n.H_.Ne(e),sr(n).w_(e)}function Xo(n){n.H_=new D_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.K_.get(e)||null,it:()=>n.datastore.serializer.databaseId}),sr(n).start(),n.j_.B_()}function Yo(n){return Pn(n)&&!sr(n).u_()&&n.K_.size>0}function Pn(n){return oe(n).W_.size===0}function cf(n){n.H_=void 0}async function Uy(n){n.j_.set("Online")}async function By(n){n.K_.forEach((e,t)=>{Qo(n,e)})}async function jy(n,e){cf(n),Yo(n)?(n.j_.q_(e),Xo(n)):n.j_.set("Unknown")}async function qy(n,e,t){if(n.j_.set("Online"),e instanceof Gh&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.K_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.K_.delete(l),s.H_.removeTarget(l))}(n,e)}catch(r){z(Sn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Hs(n,r)}else if(e instanceof Ps?n.H_.We(e):e instanceof Hh?n.H_.Ze(e):n.H_.je(e),!t.isEqual(se.min()))try{const r=await rf(n.localStore);t.compareTo(r)>=0&&await function(i,a){const l=i.H_.ot(a);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.K_.get(u);d&&i.K_.set(u,d.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,u)=>{const d=i.K_.get(c);if(!d)return;i.K_.set(c,d.withResumeToken(He.EMPTY_BYTE_STRING,d.snapshotVersion)),lf(i,c);const m=new Jt(d.target,c,u,d.sequenceNumber);Qo(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){z(Sn,"Failed to raise snapshot:",r),await Hs(n,r)}}async function Hs(n,e,t){if(!rr(e))throw e;n.W_.add(1),await Gr(n),n.j_.set("Offline"),t||(t=()=>rf(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{z(Sn,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await ci(n)})}function uf(n,e){return e().catch(t=>Hs(n,t,e))}async function ui(n){const e=oe(n),t=cn(e);let r=e.U_.length>0?e.U_[e.U_.length-1].batchId:No;for(;$y(e);)try{const s=await Iy(e.localStore,r);if(s===null){e.U_.length===0&&t.P_();break}r=s.batchId,zy(e,s)}catch(s){await Hs(e,s)}hf(e)&&ff(e)}function $y(n){return Pn(n)&&n.U_.length<10}function zy(n,e){n.U_.push(e);const t=cn(n);t.c_()&&t.S_&&t.b_(e.mutations)}function hf(n){return Pn(n)&&!cn(n).u_()&&n.U_.length>0}function ff(n){cn(n).start()}async function Hy(n){cn(n).C_()}async function Gy(n){const e=cn(n);for(const t of n.U_)e.b_(t.mutations)}async function Wy(n,e,t){const r=n.U_.shift(),s=jo.from(r,e,t);await uf(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await ui(n)}async function Ky(n,e){e&&cn(n).S_&&await async function(r,s){if(function(a){return P_(a)&&a!==B.ABORTED}(s.code)){const i=r.U_.shift();cn(r).h_(),await uf(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ui(r)}}(n,e),hf(n)&&ff(n)}async function fc(n,e){const t=oe(n);t.asyncQueue.verifyOperationInProgress(),z(Sn,"RemoteStore received new credentials");const r=Pn(t);t.W_.add(3),await Gr(t),r&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await ci(t)}async function Qy(n,e){const t=oe(n);e?(t.W_.delete(2),await ci(t)):e||(t.W_.add(2),await Gr(t),t.j_.set("Unknown"))}function sr(n){return n.J_||(n.J_=function(t,r,s){const i=oe(t);return i.M_(),new Ny(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{xo:Uy.bind(null,n),No:By.bind(null,n),Lo:jy.bind(null,n),p_:qy.bind(null,n)}),n.G_.push(async e=>{e?(n.J_.h_(),Yo(n)?Xo(n):n.j_.set("Unknown")):(await n.J_.stop(),cf(n))})),n.J_}function cn(n){return n.Y_||(n.Y_=function(t,r,s){const i=oe(t);return i.M_(),new My(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:Hy.bind(null,n),Lo:Ky.bind(null,n),D_:Gy.bind(null,n),v_:Wy.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await ui(n)):(await n.Y_.stop(),n.U_.length>0&&(z(Sn,`Stopping write stream with ${n.U_.length} pending writes`),n.U_=[]))})),n.Y_}/**
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
 */class Jo{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Bt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new Jo(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zo(n,e){if($t("AsyncQueue",`${e}: ${n}`),rr(n))return new K(B.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Hn{static emptySet(e){return new Hn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Z.comparator(t.key,r.key):(t,r)=>Z.comparator(t.key,r.key),this.keyedMap=Ir(),this.sortedSet=new Se(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Hn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Hn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class dc{constructor(){this.Z_=new Se(Z.comparator)}track(e){const t=e.doc.key,r=this.Z_.get(t);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(t):e.type===1&&r.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):ne():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Jn{constructor(e,t,r,s,i,a,l,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new Jn(e,t,Hn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ri(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Xy{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class Yy{constructor(){this.queries=mc(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,r){const s=oe(t),i=s.queries;s.queries=mc(),i.forEach((a,l)=>{for(const c of l.ta)c.onError(r)})})(this,new K(B.ABORTED,"Firestore shutting down"))}}function mc(){return new kn(n=>Dh(n),ri)}async function df(n,e){const t=oe(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.na()&&e.ra()&&(r=2):(i=new Xy,r=e.ra()?0:1);try{switch(r){case 0:i.ea=await t.onListen(s,!0);break;case 1:i.ea=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=Zo(a,`Initialization of query '${jn(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.ta.push(e),e.sa(t.onlineState),i.ea&&e.oa(i.ea)&&ea(t)}async function mf(n,e){const t=oe(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.ta.indexOf(e);a>=0&&(i.ta.splice(a,1),i.ta.length===0?s=e.ra()?0:1:!i.na()&&e.ra()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Jy(n,e){const t=oe(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.ta)l.oa(s)&&(r=!0);a.ea=s}}r&&ea(t)}function Zy(n,e,t){const r=oe(n),s=r.queries.get(e);if(s)for(const i of s.ta)i.onError(t);r.queries.delete(e)}function ea(n){n.ia.forEach(e=>{e.next()})}var yo,pc;(pc=yo||(yo={}))._a="default",pc.Cache="cache";class pf{constructor(e,t,r){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Jn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const r=t!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=Jn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==yo.Cache}}/**
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
 */class gf{constructor(e){this.key=e}}class _f{constructor(e){this.key=e}}class ew{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=fe(),this.mutatedKeys=fe(),this.ya=Nh(e),this.wa=new Hn(this.ya)}get Sa(){return this.fa}ba(e,t){const r=t?t.Da:new dc,s=t?t.wa:this.wa;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,m)=>{const p=s.get(d),_=si(this.query,m)?m:null,T=!!p&&this.mutatedKeys.has(p.key),S=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let k=!1;p&&_?p.data.isEqual(_.data)?T!==S&&(r.track({type:3,doc:_}),k=!0):this.va(p,_)||(r.track({type:2,doc:_}),k=!0,(c&&this.ya(_,c)>0||u&&this.ya(_,u)<0)&&(l=!0)):!p&&_?(r.track({type:0,doc:_}),k=!0):p&&!_&&(r.track({type:1,doc:p}),k=!0,(c||u)&&(l=!0)),k&&(_?(a=a.add(_),i=S?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{wa:a,Da:r,ls:l,mutatedKeys:i}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const a=e.Da.X_();a.sort((d,m)=>function(_,T){const S=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne()}};return S(_)-S(T)}(d.type,m.type)||this.ya(d.doc,m.doc)),this.Ca(r),s=s!=null&&s;const l=t&&!s?this.Fa():[],c=this.pa.size===0&&this.current&&!s?1:0,u=c!==this.ga;return this.ga=c,a.length!==0||u?{snapshot:new Jn(this.query,e.wa,i,a,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:l}:{Ma:l}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new dc,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=fe(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const t=[];return e.forEach(r=>{this.pa.has(r)||t.push(new _f(r))}),this.pa.forEach(r=>{e.has(r)||t.push(new gf(r))}),t}Oa(e){this.fa=e.gs,this.pa=fe();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return Jn.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const ta="SyncEngine";class tw{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class nw{constructor(e){this.key=e,this.Ba=!1}}class rw{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new kn(l=>Dh(l),ri),this.qa=new Map,this.Qa=new Set,this.$a=new Se(Z.comparator),this.Ua=new Map,this.Ka=new zo,this.Wa={},this.Ga=new Map,this.za=Yn.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function sw(n,e,t=!0){const r=bf(n);let s;const i=r.ka.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Na()):s=await yf(r,e,t,!0),s}async function iw(n,e){const t=bf(n);await yf(t,e,!0,!1)}async function yf(n,e,t,r){const s=await Ay(n.localStore,Dt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await ow(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&af(n.remoteStore,s),l}async function ow(n,e,t,r,s){n.Ha=(m,p,_)=>async function(S,k,x,O){let L=k.view.ba(x);L.ls&&(L=await ac(S.localStore,k.query,!1).then(({documents:b})=>k.view.ba(b,L)));const U=O&&O.targetChanges.get(k.targetId),te=O&&O.targetMismatches.get(k.targetId)!=null,X=k.view.applyChanges(L,S.isPrimaryClient,U,te);return _c(S,k.targetId,X.Ma),X.snapshot}(n,m,p,_);const i=await ac(n.localStore,e,!0),a=new ew(e,i.gs),l=a.ba(i.documents),c=Hr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),u=a.applyChanges(l,n.isPrimaryClient,c);_c(n,t,u.Ma);const d=new tw(e,t,a);return n.ka.set(e,d),n.qa.has(t)?n.qa.get(t).push(e):n.qa.set(t,[e]),u.snapshot}async function aw(n,e,t){const r=oe(n),s=r.ka.get(e),i=r.qa.get(s.targetId);if(i.length>1)return r.qa.set(s.targetId,i.filter(a=>!ri(a,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await go(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Ko(r.remoteStore,s.targetId),wo(r,s.targetId)}).catch(nr)):(wo(r,s.targetId),await go(r.localStore,s.targetId,!0))}async function lw(n,e){const t=oe(n),r=t.ka.get(e),s=t.qa.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Ko(t.remoteStore,r.targetId))}async function cw(n,e,t){const r=gw(n);try{const s=await function(a,l){const c=oe(a),u=xe.now(),d=l.reduce((_,T)=>_.add(T.key),fe());let m,p;return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{let T=zt(),S=fe();return c.ds.getEntries(_,d).next(k=>{T=k,T.forEach((x,O)=>{O.isValidDocument()||(S=S.add(x))})}).next(()=>c.localDocuments.getOverlayedDocuments(_,T)).next(k=>{m=k;const x=[];for(const O of l){const L=A_(O,m.get(O.key).overlayedDocument);L!=null&&x.push(new dn(O.key,L,Ah(L.value.mapValue),mt.exists(!0)))}return c.mutationQueue.addMutationBatch(_,u,x,l)}).next(k=>{p=k;const x=k.applyToLocalDocumentSet(m,S);return c.documentOverlayCache.saveOverlays(_,k.batchId,x)})}).then(()=>({batchId:p.batchId,changes:xh(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let u=a.Wa[a.currentUser.toKey()];u||(u=new Se(le)),u=u.insert(l,c),a.Wa[a.currentUser.toKey()]=u}(r,s.batchId,t),await Wr(r,s.changes),await ui(r.remoteStore)}catch(s){const i=Zo(s,"Failed to persist write");t.reject(i)}}async function wf(n,e){const t=oe(n);try{const r=await Ty(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Ua.get(i);a&&(we(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.Ba=!0:s.modifiedDocuments.size>0?we(a.Ba):s.removedDocuments.size>0&&(we(a.Ba),a.Ba=!1))}),await Wr(t,r,e)}catch(r){await nr(r)}}function gc(n,e,t){const r=oe(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.ka.forEach((i,a)=>{const l=a.view.sa(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=oe(a);c.onlineState=l;let u=!1;c.queries.forEach((d,m)=>{for(const p of m.ta)p.sa(l)&&(u=!0)}),u&&ea(c)}(r.eventManager,e),s.length&&r.La.p_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function uw(n,e,t){const r=oe(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Ua.get(e),i=s&&s.key;if(i){let a=new Se(Z.comparator);a=a.insert(i,Xe.newNoDocument(i,se.min()));const l=fe().add(i),c=new ai(se.min(),new Map,new Se(le),a,l);await wf(r,c),r.$a=r.$a.remove(i),r.Ua.delete(e),na(r)}else await go(r.localStore,e,!1).then(()=>wo(r,e,t)).catch(nr)}async function hw(n,e){const t=oe(n),r=e.batch.batchId;try{const s=await Ey(t.localStore,e);Ef(t,r,null),vf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Wr(t,s)}catch(s){await nr(s)}}async function fw(n,e,t){const r=oe(n);try{const s=await function(a,l){const c=oe(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next(m=>(we(m!==null),d=m.keys(),c.mutationQueue.removeMutationBatch(u,m))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(r.localStore,e);Ef(r,e,t),vf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Wr(r,s)}catch(s){await nr(s)}}function vf(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function Ef(n,e,t){const r=oe(n);let s=r.Wa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Wa[r.currentUser.toKey()]=s}}function wo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.qa.get(e))n.ka.delete(r),t&&n.La.Ja(r,t);n.qa.delete(e),n.isPrimaryClient&&n.Ka.br(e).forEach(r=>{n.Ka.containsKey(r)||Tf(n,r)})}function Tf(n,e){n.Qa.delete(e.path.canonicalString());const t=n.$a.get(e);t!==null&&(Ko(n.remoteStore,t),n.$a=n.$a.remove(e),n.Ua.delete(t),na(n))}function _c(n,e,t){for(const r of t)r instanceof gf?(n.Ka.addReference(r.key,e),dw(n,r)):r instanceof _f?(z(ta,"Document no longer in limbo: "+r.key),n.Ka.removeReference(r.key,e),n.Ka.containsKey(r.key)||Tf(n,r.key)):ne()}function dw(n,e){const t=e.key,r=t.path.canonicalString();n.$a.get(t)||n.Qa.has(r)||(z(ta,"New document in limbo: "+t),n.Qa.add(r),na(n))}function na(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const e=n.Qa.values().next().value;n.Qa.delete(e);const t=new Z(Ce.fromString(e)),r=n.za.next();n.Ua.set(r,new nw(t)),n.$a=n.$a.insert(t,r),af(n.remoteStore,new Jt(Dt(Fo(t.path)),r,"TargetPurposeLimboResolution",Zs.ae))}}async function Wr(n,e,t){const r=oe(n),s=[],i=[],a=[];r.ka.isEmpty()||(r.ka.forEach((l,c)=>{a.push(r.Ha(c,e,t).then(u=>{var d;if((u||t)&&r.isPrimaryClient){const m=u?!u.fromCache:(d=t==null?void 0:t.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,m?"current":"not-current")}if(u){s.push(u);const m=Go.Yi(c.targetId,u);i.push(m)}}))}),await Promise.all(a),r.La.p_(s),await async function(c,u){const d=oe(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>F.forEach(u,p=>F.forEach(p.Hi,_=>d.persistence.referenceDelegate.addReference(m,p.targetId,_)).next(()=>F.forEach(p.Ji,_=>d.persistence.referenceDelegate.removeReference(m,p.targetId,_)))))}catch(m){if(!rr(m))throw m;z(Wo,"Failed to update sequence numbers: "+m)}for(const m of u){const p=m.targetId;if(!m.fromCache){const _=d.Ts.get(p),T=_.snapshotVersion,S=_.withLastLimboFreeSnapshotVersion(T);d.Ts=d.Ts.insert(p,S)}}}(r.localStore,i))}async function mw(n,e){const t=oe(n);if(!t.currentUser.isEqual(e)){z(ta,"User change. New user:",e.toKey());const r=await nf(t.localStore,e);t.currentUser=e,function(i,a){i.Ga.forEach(l=>{l.forEach(c=>{c.reject(new K(B.CANCELLED,a))})}),i.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Wr(t,r.Rs)}}function pw(n,e){const t=oe(n),r=t.Ua.get(e);if(r&&r.Ba)return fe().add(r.key);{let s=fe();const i=t.qa.get(e);if(!i)return s;for(const a of i){const l=t.ka.get(a);s=s.unionWith(l.view.Sa)}return s}}function bf(n){const e=oe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=wf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=pw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=uw.bind(null,e),e.La.p_=Jy.bind(null,e.eventManager),e.La.Ja=Zy.bind(null,e.eventManager),e}function gw(n){const e=oe(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=hw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fw.bind(null,e),e}class Gs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=li(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return vy(this.persistence,new _y,e.initialUser,this.serializer)}Xa(e){return new tf(Ho.ri,this.serializer)}Za(e){return new Cy}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Gs.provider={build:()=>new Gs};class _w extends Gs{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){we(this.persistence.referenceDelegate instanceof zs);const r=this.persistence.referenceDelegate.garbageCollector;return new ny(r,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?nt.withCacheSize(this.cacheSizeBytes):nt.DEFAULT;return new tf(r=>zs.ri(r,t),this.serializer)}}class vo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>gc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=mw.bind(null,this.syncEngine),await Qy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Yy}()}createDatastore(e){const t=li(e.databaseInfo.databaseId),r=function(i){return new Dy(i)}(e.databaseInfo);return function(i,a,l,c){return new Oy(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,l){return new Fy(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>gc(this.syncEngine,t,0),function(){return uc.D()?new uc:new Sy}())}createSyncEngine(e,t){return function(s,i,a,l,c,u,d){const m=new rw(s,i,a,l,c,u);return d&&(m.ja=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=oe(s);z(Sn,"RemoteStore shutting down."),i.W_.add(5),await Gr(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}vo.provider={build:()=>new vo};/**
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
 */class If{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):$t("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const un="FirestoreClient";class yw{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Qe.UNAUTHENTICATED,this.clientId=mh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{z(un,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(z(un,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Bt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Zo(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Wi(n,e){n.asyncQueue.verifyOperationInProgress(),z(un,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await nf(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function yc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await ww(n);z(un,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>fc(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>fc(e.remoteStore,s)),n._onlineComponents=e}async function ww(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){z(un,"Using user provided OfflineComponentProvider");try{await Wi(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===B.FAILED_PRECONDITION||s.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Wn("Error using user provided cache. Falling back to memory cache: "+t),await Wi(n,new Gs)}}else z(un,"Using default OfflineComponentProvider"),await Wi(n,new _w(void 0));return n._offlineComponents}async function Af(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(z(un,"Using user provided OnlineComponentProvider"),await yc(n,n._uninitializedComponentsProvider._online)):(z(un,"Using default OnlineComponentProvider"),await yc(n,new vo))),n._onlineComponents}function vw(n){return Af(n).then(e=>e.syncEngine)}async function Rf(n){const e=await Af(n),t=e.eventManager;return t.onListen=sw.bind(null,e.syncEngine),t.onUnlisten=aw.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=iw.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=lw.bind(null,e.syncEngine),t}function Ew(n,e,t={}){const r=new Bt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,u){const d=new If({next:p=>{d.su(),a.enqueueAndForget(()=>mf(i,m));const _=p.docs.has(l);!_&&p.fromCache?u.reject(new K(B.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&p.fromCache&&c&&c.source==="server"?u.reject(new K(B.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),m=new pf(Fo(l.path),d,{includeMetadataChanges:!0,Ta:!0});return df(i,m)}(await Rf(n),n.asyncQueue,e,t,r)),r.promise}function Tw(n,e,t={}){const r=new Bt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,u){const d=new If({next:p=>{d.su(),a.enqueueAndForget(()=>mf(i,m)),p.fromCache&&c.source==="server"?u.reject(new K(B.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),m=new pf(l,d,{includeMetadataChanges:!0,Ta:!0});return df(i,m)}(await Rf(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function Cf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const wc=new Map;/**
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
 */function Sf(n,e,t){if(!t)throw new K(B.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function bw(n,e,t,r){if(e===!0&&r===!0)throw new K(B.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function vc(n){if(!Z.isDocumentKey(n))throw new K(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ec(n){if(Z.isDocumentKey(n))throw new K(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ra(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ne()}function Ot(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new K(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ra(n);throw new K(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */const kf="firestore.googleapis.com",Tc=!0;class bc{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=kf,this.ssl=Tc}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Tc;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ef;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ey)throw new K(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}bw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Cf((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new K(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new K(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new K(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class hi{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bc(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Vg;switch(r.type){case"firstParty":return new xg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=wc.get(t);r&&(z("ComponentProvider","Removing Datastore"),wc.delete(t),r.terminate())}(this),Promise.resolve()}}function Iw(n,e,t,r={}){var s;const i=(n=Ot(n,hi))._getSettings(),a=Object.assign(Object.assign({},i),{emulatorOptions:n._getEmulatorOptions()}),l=`${e}:${t}`;i.host!==kf&&i.host!==l&&Wn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},i),{host:l,ssl:!1,emulatorOptions:r});if(!Ns(c,a)&&(n._setSettings(c),r.mockUserToken)){let u,d;if(typeof r.mockUserToken=="string")u=r.mockUserToken,d=Qe.MOCK_USER;else{u=$d(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new K(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new Qe(m)}n._authCredentials=new Dg(new fh(u,d))}}/**
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
 */class fi{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new fi(this.firestore,e,this._query)}}class it{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new nn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new it(this.firestore,e,this._key)}}class nn extends fi{constructor(e,t,r){super(e,t,Fo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new it(this.firestore,null,new Z(e))}withConverter(e){return new nn(this.firestore,e,this._path)}}function sa(n,e,...t){if(n=Rt(n),Sf("collection","path",e),n instanceof hi){const r=Ce.fromString(e,...t);return Ec(r),new nn(n,null,r)}{if(!(n instanceof it||n instanceof nn))throw new K(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ce.fromString(e,...t));return Ec(r),new nn(n.firestore,null,r)}}function Kr(n,e,...t){if(n=Rt(n),arguments.length===1&&(e=mh.newId()),Sf("doc","path",e),n instanceof hi){const r=Ce.fromString(e,...t);return vc(r),new it(n,null,new Z(r))}{if(!(n instanceof it||n instanceof nn))throw new K(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ce.fromString(e,...t));return vc(r),new it(n.firestore,n instanceof nn?n.converter:null,new Z(r))}}/**
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
 */const Ic="AsyncQueue";class Ac{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new sf(this,"async_queue_retry"),this.Su=()=>{const r=Gi();r&&z(Ic,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=e;const t=Gi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=Gi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new Bt;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!rr(e))throw e;z(Ic,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw $t("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.bu=t,t}enqueueAfterDelay(e,t,r){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const s=Jo.createAndSchedule(this,e,t,r,i=>this.Fu(i));return this.fu.push(s),s}Du(){this.gu&&ne()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class ir extends hi{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Ac,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ac(e),this._firestoreClient=void 0,await e}}}function Aw(n,e){const t=typeof n=="object"?n:tp(),r=typeof n=="string"?n:Ls,s=Ro(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=jd("firestore");i&&Iw(s,...i)}return s}function di(n){if(n._terminated)throw new K(B.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Rw(n),n._firestoreClient}function Rw(n){var e,t,r;const s=n._freezeSettings(),i=function(l,c,u,d){return new Xg(l,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Cf(d.experimentalLongPollingOptions),d.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new yw(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(n._componentsProvider))}/**
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
 */class Zn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Zn(He.fromBase64String(e))}catch(t){throw new K(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Zn(He.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Qr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new K(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ia{constructor(e){this._methodName=e}}/**
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
 */class oa{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new K(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new K(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
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
 */class aa{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const Cw=/^__.*__$/;class Sw{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new dn(e,this.data,this.fieldMask,t,this.fieldTransforms):new zr(e,this.data,t,this.fieldTransforms)}}class Pf{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new dn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Vf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne()}}class la{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new la(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ku({path:r,Qu:!1});return s.$u(e),s}Uu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Ws(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(Vf(this.Lu)&&Cw.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class kw{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||li(e)}ju(e,t,r,s=!1){return new la({Lu:e,methodName:t,zu:r,path:ze.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ca(n){const e=n._freezeSettings(),t=li(n._databaseId);return new kw(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Df(n,e,t,r,s,i={}){const a=n.ju(i.merge||i.mergeFields?2:0,e,t,s);ua("Data must be an object, but it was:",a,r);const l=xf(r,a);let c,u;if(i.merge)c=new dt(a.fieldMask),u=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const m of i.mergeFields){const p=Eo(e,m,t);if(!a.contains(p))throw new K(B.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);Lf(d,p)||d.push(p)}c=new dt(d),u=a.fieldTransforms.filter(m=>c.covers(m.field))}else c=null,u=a.fieldTransforms;return new Sw(new rt(l),c,u)}class mi extends ia{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof mi}}function Nf(n,e,t,r){const s=n.ju(1,e,t);ua("Data must be an object, but it was:",s,r);const i=[],a=rt.empty();fn(r,(c,u)=>{const d=ha(e,c,t);u=Rt(u);const m=s.Uu(d);if(u instanceof mi)i.push(d);else{const p=pi(u,m);p!=null&&(i.push(d),a.set(d,p))}});const l=new dt(i);return new Pf(a,l,s.fieldTransforms)}function Mf(n,e,t,r,s,i){const a=n.ju(1,e,t),l=[Eo(e,r,t)],c=[s];if(i.length%2!=0)throw new K(B.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)l.push(Eo(e,i[p])),c.push(i[p+1]);const u=[],d=rt.empty();for(let p=l.length-1;p>=0;--p)if(!Lf(u,l[p])){const _=l[p];let T=c[p];T=Rt(T);const S=a.Uu(_);if(T instanceof mi)u.push(_);else{const k=pi(T,S);k!=null&&(u.push(_),d.set(_,k))}}const m=new dt(u);return new Pf(d,m,a.fieldTransforms)}function pi(n,e){if(Of(n=Rt(n)))return ua("Unsupported field value:",e,n),xf(n,e);if(n instanceof ia)return function(r,s){if(!Vf(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=pi(l,s.Ku(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Rt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return w_(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=xe.fromDate(r);return{timestampValue:$s(s.serializer,i)}}if(r instanceof xe){const i=new xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:$s(s.serializer,i)}}if(r instanceof oa)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Zn)return{bytesValue:Wh(s.serializer,r._byteString)};if(r instanceof it){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Wu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:$o(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof aa)return function(a,l){return{mapValue:{fields:{[Th]:{stringValue:Ih},[Fs]:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw l.Wu("VectorValues must only contain numeric values.");return Uo(l.serializer,u)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${ra(r)}`)}(n,e)}function xf(n,e){const t={};return gh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fn(n,(r,s)=>{const i=pi(s,e.qu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Of(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof xe||n instanceof oa||n instanceof Zn||n instanceof it||n instanceof ia||n instanceof aa)}function ua(n,e,t){if(!Of(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=ra(t);throw r==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+r)}}function Eo(n,e,t){if((e=Rt(e))instanceof Qr)return e._internalPath;if(typeof e=="string")return ha(n,e);throw Ws("Field path arguments must be of type string or ",n,!1,void 0,t)}const Pw=new RegExp("[~\\*/\\[\\]]");function ha(n,e,t){if(e.search(Pw)>=0)throw Ws(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Qr(...e.split("."))._internalPath}catch{throw Ws(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ws(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new K(B.INVALID_ARGUMENT,l+n+c)}function Lf(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Ff{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new it(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Vw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Uf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Vw extends Ff{data(){return super.data()}}function Uf(n,e){return typeof e=="string"?ha(n,e):e instanceof Qr?e._internalPath:e._delegate._internalPath}/**
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
 */function Dw(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new K(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Nw{convertValue(e,t="none"){switch(ln(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(an(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ne()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return fn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[Fs].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>Ve(a.doubleValue));return new aa(i)}convertGeoPoint(e){return new oa(Ve(e.latitude),Ve(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ti(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Lr(e));default:return null}}convertTimestamp(e){const t=on(e);return new xe(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Ce.fromString(e);we(Zh(r));const s=new Fr(r.get(1),r.get(3)),i=new Z(r.popFirst(5));return s.isEqual(t)||$t(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function Bf(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
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
 */class Rr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class jf extends Ff{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Vs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Uf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Vs extends jf{data(e={}){return super.data(e)}}class Mw{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Rr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Vs(this._firestore,this._userDataWriter,r.key,r,new Rr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new K(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const c=new Vs(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Rr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Vs(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Rr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return l.type!==0&&(u=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:xw(l.type),doc:c,oldIndex:u,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function xw(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne()}}/**
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
 */function Ow(n){n=Ot(n,it);const e=Ot(n.firestore,ir);return Ew(di(e),n._key).then(t=>Lw(e,n,t))}class qf extends Nw{constructor(e){super(),this.firestore=e}convertBytes(e){return new Zn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new it(this.firestore,null,t)}}function Ht(n){n=Ot(n,fi);const e=Ot(n.firestore,ir),t=di(e),r=new qf(e);return Dw(n._query),Tw(t,n._query).then(s=>new Mw(e,r,n,s))}function $f(n,e,t){n=Ot(n,it);const r=Ot(n.firestore,ir),s=Bf(n.converter,e,t);return fa(r,[Df(ca(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,mt.none())])}function zf(n,e,t,...r){n=Ot(n,it);const s=Ot(n.firestore,ir),i=ca(s);let a;return a=typeof(e=Rt(e))=="string"||e instanceof Qr?Mf(i,"updateDoc",n._key,e,t,r):Nf(i,"updateDoc",n._key,e),fa(s,[a.toMutation(n._key,mt.exists(!0))])}function fa(n,e){return function(r,s){const i=new Bt;return r.asyncQueue.enqueueAndForget(async()=>cw(await vw(r),s,i)),i.promise}(di(n),e)}function Lw(n,e,t){const r=t.docs.get(e._key),s=new qf(n);return new jf(n,s,e._key,r,new Rr(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */class Fw{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=ca(e)}set(e,t,r){this._verifyNotCommitted();const s=Ki(e,this._firestore),i=Bf(s.converter,t,r),a=Df(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(a.toMutation(s._key,mt.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=Ki(e,this._firestore);let a;return a=typeof(t=Rt(t))=="string"||t instanceof Qr?Mf(this._dataReader,"WriteBatch.update",i._key,t,r,s):Nf(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(a.toMutation(i._key,mt.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Ki(e,this._firestore);return this._mutations=this._mutations.concat(new Bo(t._key,mt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new K(B.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ki(n,e){if((n=Rt(n)).firestore!==e)throw new K(B.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */function Uw(n){return di(n=Ot(n,ir)),new Fw(n,e=>fa(n,e))}(function(e,t=!0){(function(s){tr=s})(ep),rn(new jt("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new ir(new Ng(r.getProvider("auth-internal")),new Og(a,r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new K(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fr(u.options.projectId,d)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Vt(Vl,Dl,e),Vt(Vl,Dl,"esm2017")})();const Bw={apiKey:"AIzaSyCTe1si_Cg2Pkl2X77JpscYfW6KajberCM",authDomain:"drawit-1f620.firebaseapp.com",projectId:"drawit-1f620",storageBucket:"drawit-1f620.firebasestorage.app",messagingSenderId:"513679195329",appId:"1:513679195329:web:d650c7307b461788dc6840",measurementId:"G-P8GR3KFS0H"},jw=xu(Bw),gi=Aw(jw),Xr=sa(gi,"games"),Gt=sa(gi,"users");sa(gi,"drawings");async function qw(n){try{const e=Qs(yt),t=n.filter(i=>!e[i]);if(t.length===0)return;const r=await Ht(Gt),s={};r.docs.forEach(i=>{const a=i.data();t.includes(a.name)&&(s[a.name]={...a,id:i.id})}),yt.update(i=>({...i,...s}))}catch(e){console.error("Error loading users:",e)}}async function $w(n){try{const t=(await Ht(Gt)).docs.find(i=>i.data().name===n);if(t){const a={...t.data(),id:t.id};return Ze.set(a),yt.update(l=>({...l,[a.name]:a})),await Hf(a.name),a}const r=Kr(Gt),s={name:n,coins:0,createdAt:new Date,id:r.id};return await $f(r,s),Ze.set(s),yt.update(i=>({...i,[s.name]:s})),s}catch(e){throw console.error("Error creating/retrieving user:",e),e}}async function zw(n){try{const e=Qs(yt);if(e[n])return e[n];const r=(await Ht(Gt)).docs.find(s=>s.data().name===n);if(r){const i={...r.data(),id:r.id};return yt.update(a=>({...a,[i.name]:i})),i}return null}catch(e){return console.error("Error getting user:",e),null}}async function Rc(n){try{if(!n){const a=(await Ht(Gt)).docs.map(l=>({...l.data(),id:l.id}));return yt.update(l=>{const c={...l};return a.forEach(u=>{c[u.name]=u}),c}),a}const e=Qs(yt),t=Object.values(e).filter(i=>i.name.toLowerCase().includes(n.toLowerCase()));if(t.length>0)return t;const s=(await Ht(Gt)).docs.map(i=>({...i.data(),id:i.id})).filter(i=>i.name.toLowerCase().includes(n.toLowerCase()));return yt.update(i=>{const a={...i};return s.forEach(l=>{a[l.name]=l}),a}),s}catch(e){return console.error("Error searching users:",e),[]}}async function Hf(n){try{const t=(await Ht(Xr)).docs.filter(r=>{const s=r.data();return s.users&&s.users.includes(n)}).map(r=>({...r.data(),id:r.id}));return $r.set(t),t}catch(e){return console.error("Error in loadGames:",e),[]}}async function Hw(n){const e=Kr(Xr),t={id:e.id,users:n,createdAt:new Date,drawings:[]};return await $f(e,t),Is.set(!1),t}async function _i(n){if(!n.id)return console.error("Cannot update game without ID"),n;try{const e=Kr(Xr,n.id);return await zf(e,{drawings:n.drawings}),n}catch(e){return console.error("Error updating game:",e),n}}async function Dr(n,e){if(!n.id)return console.error("Cannot add coins to user without ID"),n;try{const t=Kr(Gt,n.id),r=n.coins+e;await zf(t,{coins:r});const s={...n,coins:r};return Ze.set(s),s}catch(t){return console.error("Error adding coins:",t),n}}async function Gw(){try{const n=Qs(Ze);if(!n)return!1;const t=(await Ht(Gt)).docs.find(i=>i.data().name===n.name);if(!t)return Ze.set(null),localStorage.removeItem("drawit-user"),localStorage.removeItem("drawit-games"),localStorage.removeItem("drawit-users"),!1;const s={...t.data(),id:t.id};return Ze.set(s),!0}catch(n){return console.error("Error validating user session:",n),!1}}async function Cc(n){try{const e=await Ow(Kr(Xr,n));return e.exists()?{...e.data(),id:e.id}:null}catch(e){return console.error("Error loading game:",e),null}}async function Ww(){try{const n=await Ht(Xr),e=[];n.docs.forEach(r=>{const s=r.data();if(s.drawings&&s.drawings.length>0){const i=s.drawings.map(a=>({...a,gameId:r.id}));for(const a of i)a.guessedBy=s.users.find(l=>l!==a.artist)??"";e.push(...i)}});const t=e.sort((r,s)=>{function i(c){return c?c instanceof Date?c:typeof c.toDate=="function"?c.toDate():typeof c=="string"?new Date(c):new Date(c):new Date(0)}const a=i(r.createdAt);return i(s.createdAt).getTime()-a.getTime()});return console.log(t),t.slice(0,100)}catch(n){return console.error("Error fetching recent drawings:",n),[]}}var Yr={};(function n(e,t,r,s){var i=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",l=function(){if(!e.OffscreenCanvas)return!1;var D=new OffscreenCanvas(1,1),R=D.getContext("2d");R.fillRect(0,0,1,1);var G=D.transferToImageBitmap();try{R.createPattern(G,"no-repeat")}catch{return!1}return!0}();function c(){}function u(D){var R=t.exports.Promise,G=R!==void 0?R:e.Promise;return typeof G=="function"?new G(D):(D(c,c),null)}var d=function(D,R){return{transform:function(G){if(D)return G;if(R.has(G))return R.get(G);var H=new OffscreenCanvas(G.width,G.height),ae=H.getContext("2d");return ae.drawImage(G,0,0),R.set(G,H),H},clear:function(){R.clear()}}}(l,new Map),m=function(){var D=Math.floor(16.666666666666668),R,G,H={},ae=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(R=function(ie){var ce=Math.random();return H[ce]=requestAnimationFrame(function J(ue){ae===ue||ae+D-1<ue?(ae=ue,delete H[ce],ie()):H[ce]=requestAnimationFrame(J)}),ce},G=function(ie){H[ie]&&cancelAnimationFrame(H[ie])}):(R=function(ie){return setTimeout(ie,D)},G=function(ie){return clearTimeout(ie)}),{frame:R,cancel:G}}(),p=function(){var D,R,G={};function H(ae){function ie(ce,J){ae.postMessage({options:ce||{},callback:J})}ae.init=function(J){var ue=J.transferControlToOffscreen();ae.postMessage({canvas:ue},[ue])},ae.fire=function(J,ue,Ee){if(R)return ie(J,null),R;var Te=Math.random().toString(36).slice(2);return R=u(function(_e){function Ie(Pe){Pe.data.callback===Te&&(delete G[Te],ae.removeEventListener("message",Ie),R=null,d.clear(),Ee(),_e())}ae.addEventListener("message",Ie),ie(J,Te),G[Te]=Ie.bind(null,{data:{callback:Te}})}),R},ae.reset=function(){ae.postMessage({reset:!0});for(var J in G)G[J](),delete G[J]}}return function(){if(D)return D;if(!r&&i){var ae=["var CONFETTI, SIZE = {}, module = {};","("+n.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{D=new Worker(URL.createObjectURL(new Blob([ae])))}catch(ie){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",ie),null}H(D)}return D}}(),_={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function T(D,R){return R?R(D):D}function S(D){return D!=null}function k(D,R,G){return T(D&&S(D[R])?D[R]:_[R],G)}function x(D){return D<0?0:Math.floor(D)}function O(D,R){return Math.floor(Math.random()*(R-D))+D}function L(D){return parseInt(D,16)}function U(D){return D.map(te)}function te(D){var R=String(D).replace(/[^0-9a-f]/gi,"");return R.length<6&&(R=R[0]+R[0]+R[1]+R[1]+R[2]+R[2]),{r:L(R.substring(0,2)),g:L(R.substring(2,4)),b:L(R.substring(4,6))}}function X(D){var R=k(D,"origin",Object);return R.x=k(R,"x",Number),R.y=k(R,"y",Number),R}function b(D){D.width=document.documentElement.clientWidth,D.height=document.documentElement.clientHeight}function w(D){var R=D.getBoundingClientRect();D.width=R.width,D.height=R.height}function v(D){var R=document.createElement("canvas");return R.style.position="fixed",R.style.top="0px",R.style.left="0px",R.style.pointerEvents="none",R.style.zIndex=D,R}function I(D,R,G,H,ae,ie,ce,J,ue){D.save(),D.translate(R,G),D.rotate(ie),D.scale(H,ae),D.arc(0,0,1,ce,J,ue),D.restore()}function E(D){var R=D.angle*(Math.PI/180),G=D.spread*(Math.PI/180);return{x:D.x,y:D.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:D.startVelocity*.5+Math.random()*D.startVelocity,angle2D:-R+(.5*G-Math.random()*G),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:D.color,shape:D.shape,tick:0,totalTicks:D.ticks,decay:D.decay,drift:D.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:D.gravity*3,ovalScalar:.6,scalar:D.scalar,flat:D.flat}}function C(D,R){R.x+=Math.cos(R.angle2D)*R.velocity+R.drift,R.y+=Math.sin(R.angle2D)*R.velocity+R.gravity,R.velocity*=R.decay,R.flat?(R.wobble=0,R.wobbleX=R.x+10*R.scalar,R.wobbleY=R.y+10*R.scalar,R.tiltSin=0,R.tiltCos=0,R.random=1):(R.wobble+=R.wobbleSpeed,R.wobbleX=R.x+10*R.scalar*Math.cos(R.wobble),R.wobbleY=R.y+10*R.scalar*Math.sin(R.wobble),R.tiltAngle+=.1,R.tiltSin=Math.sin(R.tiltAngle),R.tiltCos=Math.cos(R.tiltAngle),R.random=Math.random()+2);var G=R.tick++/R.totalTicks,H=R.x+R.random*R.tiltCos,ae=R.y+R.random*R.tiltSin,ie=R.wobbleX+R.random*R.tiltCos,ce=R.wobbleY+R.random*R.tiltSin;if(D.fillStyle="rgba("+R.color.r+", "+R.color.g+", "+R.color.b+", "+(1-G)+")",D.beginPath(),a&&R.shape.type==="path"&&typeof R.shape.path=="string"&&Array.isArray(R.shape.matrix))D.fill(_t(R.shape.path,R.shape.matrix,R.x,R.y,Math.abs(ie-H)*.1,Math.abs(ce-ae)*.1,Math.PI/10*R.wobble));else if(R.shape.type==="bitmap"){var J=Math.PI/10*R.wobble,ue=Math.abs(ie-H)*.1,Ee=Math.abs(ce-ae)*.1,Te=R.shape.bitmap.width*R.scalar,_e=R.shape.bitmap.height*R.scalar,Ie=new DOMMatrix([Math.cos(J)*ue,Math.sin(J)*ue,-Math.sin(J)*Ee,Math.cos(J)*Ee,R.x,R.y]);Ie.multiplySelf(new DOMMatrix(R.shape.matrix));var Pe=D.createPattern(d.transform(R.shape.bitmap),"no-repeat");Pe.setTransform(Ie),D.globalAlpha=1-G,D.fillStyle=Pe,D.fillRect(R.x-Te/2,R.y-_e/2,Te,_e),D.globalAlpha=1}else if(R.shape==="circle")D.ellipse?D.ellipse(R.x,R.y,Math.abs(ie-H)*R.ovalScalar,Math.abs(ce-ae)*R.ovalScalar,Math.PI/10*R.wobble,0,2*Math.PI):I(D,R.x,R.y,Math.abs(ie-H)*R.ovalScalar,Math.abs(ce-ae)*R.ovalScalar,Math.PI/10*R.wobble,0,2*Math.PI);else if(R.shape==="star")for(var he=Math.PI/2*3,Ue=4*R.scalar,et=8*R.scalar,ct=R.x,bt=R.y,kt=5,tt=Math.PI/kt;kt--;)ct=R.x+Math.cos(he)*et,bt=R.y+Math.sin(he)*et,D.lineTo(ct,bt),he+=tt,ct=R.x+Math.cos(he)*Ue,bt=R.y+Math.sin(he)*Ue,D.lineTo(ct,bt),he+=tt;else D.moveTo(Math.floor(R.x),Math.floor(R.y)),D.lineTo(Math.floor(R.wobbleX),Math.floor(ae)),D.lineTo(Math.floor(ie),Math.floor(ce)),D.lineTo(Math.floor(H),Math.floor(R.wobbleY));return D.closePath(),D.fill(),R.tick<R.totalTicks}function y(D,R,G,H,ae){var ie=R.slice(),ce=D.getContext("2d"),J,ue,Ee=u(function(Te){function _e(){J=ue=null,ce.clearRect(0,0,H.width,H.height),d.clear(),ae(),Te()}function Ie(){r&&!(H.width===s.width&&H.height===s.height)&&(H.width=D.width=s.width,H.height=D.height=s.height),!H.width&&!H.height&&(G(D),H.width=D.width,H.height=D.height),ce.clearRect(0,0,H.width,H.height),ie=ie.filter(function(Pe){return C(ce,Pe)}),ie.length?J=m.frame(Ie):_e()}J=m.frame(Ie),ue=_e});return{addFettis:function(Te){return ie=ie.concat(Te),Ee},canvas:D,promise:Ee,reset:function(){J&&m.cancel(J),ue&&ue()}}}function ge(D,R){var G=!D,H=!!k(R||{},"resize"),ae=!1,ie=k(R,"disableForReducedMotion",Boolean),ce=i&&!!k(R||{},"useWorker"),J=ce?p():null,ue=G?b:w,Ee=D&&J?!!D.__confetti_initialized:!1,Te=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,_e;function Ie(he,Ue,et){for(var ct=k(he,"particleCount",x),bt=k(he,"angle",Number),kt=k(he,"spread",Number),tt=k(he,"startVelocity",Number),Jr=k(he,"decay",Number),yi=k(he,"gravity",Number),ar=k(he,"drift",Number),Vn=k(he,"colors",U),Zr=k(he,"ticks",Number),Ne=k(he,"shapes"),je=k(he,"scalar"),Dn=!!k(he,"flat"),lr=X(he),cr=ct,ur=[],gn=D.width*lr.x,es=D.height*lr.y;cr--;)ur.push(E({x:gn,y:es,angle:bt,spread:kt,startVelocity:tt,color:Vn[cr%Vn.length],shape:Ne[O(0,Ne.length)],ticks:Zr,decay:Jr,gravity:yi,drift:ar,scalar:je,flat:Dn}));return _e?_e.addFettis(ur):(_e=y(D,ur,ue,Ue,et),_e.promise)}function Pe(he){var Ue=ie||k(he,"disableForReducedMotion",Boolean),et=k(he,"zIndex",Number);if(Ue&&Te)return u(function(tt){tt()});G&&_e?D=_e.canvas:G&&!D&&(D=v(et),document.body.appendChild(D)),H&&!Ee&&ue(D);var ct={width:D.width,height:D.height};J&&!Ee&&J.init(D),Ee=!0,J&&(D.__confetti_initialized=!0);function bt(){if(J){var tt={getBoundingClientRect:function(){if(!G)return D.getBoundingClientRect()}};ue(tt),J.postMessage({resize:{width:tt.width,height:tt.height}});return}ct.width=ct.height=null}function kt(){_e=null,H&&(ae=!1,e.removeEventListener("resize",bt)),G&&D&&(document.body.contains(D)&&document.body.removeChild(D),D=null,Ee=!1)}return H&&!ae&&(ae=!0,e.addEventListener("resize",bt,!1)),J?J.fire(he,ct,kt):Ie(he,ct,kt)}return Pe.reset=function(){J&&J.reset(),_e&&_e.reset()},Pe}var lt;function mn(){return lt||(lt=ge(null,{useWorker:!0,resize:!0})),lt}function _t(D,R,G,H,ae,ie,ce){var J=new Path2D(D),ue=new Path2D;ue.addPath(J,new DOMMatrix(R));var Ee=new Path2D;return Ee.addPath(ue,new DOMMatrix([Math.cos(ce)*ae,Math.sin(ce)*ae,-Math.sin(ce)*ie,Math.cos(ce)*ie,G,H])),Ee}function pn(D){if(!a)throw new Error("path confetti are not supported in this browser");var R,G;typeof D=="string"?R=D:(R=D.path,G=D.matrix);var H=new Path2D(R),ae=document.createElement("canvas"),ie=ae.getContext("2d");if(!G){for(var ce=1e3,J=ce,ue=ce,Ee=0,Te=0,_e,Ie,Pe=0;Pe<ce;Pe+=2)for(var he=0;he<ce;he+=2)ie.isPointInPath(H,Pe,he,"nonzero")&&(J=Math.min(J,Pe),ue=Math.min(ue,he),Ee=Math.max(Ee,Pe),Te=Math.max(Te,he));_e=Ee-J,Ie=Te-ue;var Ue=10,et=Math.min(Ue/_e,Ue/Ie);G=[et,0,0,et,-Math.round(_e/2+J)*et,-Math.round(Ie/2+ue)*et]}return{type:"path",path:R,matrix:G}}function or(D){var R,G=1,H="#000000",ae='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof D=="string"?R=D:(R=D.text,G="scalar"in D?D.scalar:G,ae="fontFamily"in D?D.fontFamily:ae,H="color"in D?D.color:H);var ie=10*G,ce=""+ie+"px "+ae,J=new OffscreenCanvas(ie,ie),ue=J.getContext("2d");ue.font=ce;var Ee=ue.measureText(R),Te=Math.ceil(Ee.actualBoundingBoxRight+Ee.actualBoundingBoxLeft),_e=Math.ceil(Ee.actualBoundingBoxAscent+Ee.actualBoundingBoxDescent),Ie=2,Pe=Ee.actualBoundingBoxLeft+Ie,he=Ee.actualBoundingBoxAscent+Ie;Te+=Ie+Ie,_e+=Ie+Ie,J=new OffscreenCanvas(Te,_e),ue=J.getContext("2d"),ue.font=ce,ue.fillStyle=H,ue.fillText(R,Pe,he);var Ue=1/G;return{type:"bitmap",bitmap:J.transferToImageBitmap(),matrix:[Ue,0,0,Ue,-Te*Ue/2,-_e*Ue/2]}}t.exports=function(){return mn().apply(this,arguments)},t.exports.reset=function(){mn().reset()},t.exports.create=ge,t.exports.shapeFromPath=pn,t.exports.shapeFromText=or})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),Yr,!1);const Kw=Yr.exports;Yr.exports.create;function Qw(n){const e=document.createElement("div");e.className="toast toast-top toast-end",e.innerHTML=`
        <div class="alert bg-primary/80 text-black border-2 border-primary shadow-lg">
            <span>${n}</span>
        </div>
    `,document.body.appendChild(e),setTimeout(()=>{e.remove()},5e3),Kw({particleCount:100,spread:70,origin:{y:.6}})}let Xw=["apple","airplane","alligator","anchor","angel","antelope","apron","armchair","arrow","artist","avocado","axe","baby","backpack","bacon","badger","balloon","banana","bandage","banjo","barn","barrel","baseball","basket","bathtub","battery","beach","bear","beaver","bedroom","bee","beetle","bell","belt","bench","bicycle","binoculars","bird","birthday","blender","blimp","block","blouse","boat","bomb","book","boomerang","boot","bottle","bouquet","bow","boxer","bracelet","brain","branch","bread","bridge","broccoli","broom","brush","bucket","bulldozer","bullet","bus","bush","butterfly","button","cactus","cage","cake","calculator","camel","camera","campfire","can","candle","cannon","canoe","cap","cape","car","carrot","cart","castle","cat","caterpillar","cave","ceiling","cellphone","chainsaw","chair","chalk","champion","cheese","cherry","chest","chicken","chimney","church","circle","claw","cliff","clock","cloud","clown","coat","cobweb","coin","comet","computer","cookie","couch","cow","crab","crayon","cream","crocodile","crown","cruise","cupcake","curtain","cushion","dagger","daisy","dance","dart","deer","desk","desert","diamond","dice","dinosaur","dish","diver","dog","doll","dolphin","donkey","door","doormat","dragon","drawer","drill","drone","drum","duck","dumptruck","eagle","ear","earthquake","eggplant","electricity","elephant","elevator","engine","envelope","eraser","explosion","eyeglasses","face","fan","farm","feather","fence","ferret","fire","firefighter","fireplace","firetruck","fish","fishing","flag","flamingo","flashlight","flood","floor","flower","flute","fly","folder","football","fork","fountain","fox","fridge","frog","fryingpan","galaxy","garage","garden","gargoyle","gate","ghost","giraffe","glacier","glider","glove","goat","goggles","goldfish","golf","gorilla","grapes","grass","grill","guitar","hammer","hamster","handcuffs","handle","hanger","harp","hat","headphones","hedgehog","helicopter","helmet","hill","hippo","hive","hook","horn","horse","hospital","hotdog","house","hovercraft","hug","hurdle","hurricane","iceberg","icicle","igloo","iguana","ink","insect","iron","island","jacket","jail","jellyfish","jigsaw","jockey","jungle","kangaroo","kettle","key","keyboard","kick","kidney","kite","kitten","knee","knife","koala","ladder","lamp","lantern","laptop","lasso","laundry","leaf","leash","leg","lemon","leopard","letter","library","lightbulb","lighthouse","lightning","limo","lion","lips","lizard","lock","locust","lollipop","magnet","mailbox","map","maracas","mask","match","meatball","megaphone","mermaid","meteor","microscope","microwave","milk","mirror","moat","mole","monkey","monster","moon","mosquito","motorcycle","mountain","mouse","mower","mug","mummy","mushroom","music","nail","needle","nest","net","ninja","noodle","notebook","nose","notepad","nun","nut","oasis","ocean","octopus","oil","onion","ostrich","otter","oven","owl","oxygen","paddle","pajamas","panda","panther","parachute","parrot","party","passport","peacock","peanut","pear","peas","pencil","penguin","pepper","perfume","phone","piano","picture","pig","pigeon","pill","pillow","pineapple","pipe","pirate","pizza","planet","plate","plow","plug","plumber","pocket","pool","popcorn","postcard","poster","potato","printer","pudding","puppet","puppy","pyramid","quail","quartz","queen","quilt","rabbit","raccoon","radio","raft","rain","rainbow","rake","rat","raven","razor","reindeer","remote","ribbon","ring","robot","rocket","rockingchair","roof","rope","rose","ruler","saddle","sailboat","salad","sand","sandcastle","satellite","saw","scarf","school","scissors","scorpion","screw","seal","seesaw","shampoo","shark","sheep","shelf","shell","ship","shoe","shoppingcart","shovel","shower","shrimp","sink","skateboard","skeleton","ski","skirt","skunk","sled","sleepingbag","slide","slime","sloth","slug","smoke","snail","snake","sneeze","snow","snowball","snowflake","snowman","sock","sofa","soldier","spaceship","spaghetti","spark","speaker","spear","spectacles","spider","spoon","spring","spy","squirrel","stairs","starfish","statue","steak","steeringwheel","stethoscope","stomach","stool","stove","straw","street","string","submarine","suitcase","sun","sunglasses","sunset","surfboard","surgeon","swamp","swan","sweater","swing","sword","table","tail","tape","tarp","taxi","teacup","teacher","teapot","telescope","tent","thermometer","throne","ticket","tie","tiger","toad","toaster","toilet","toothbrush","toothpaste","torch","tornado","towel","tractor","traffic","train","trampoline","trash","treasure","treehouse","triangle","tricycle","troll","trophy","truck","trumpet","tuba","turtle","tusk","tv","typewriter","umbrella","unicorn","urn","vacuum","vampire","vase","vegetable","village","vine","violin","volcano","vulture","wagon","wall","wallet","wardrobe","washingmachine","watch","waterfall","wave","web","whale","wheelbarrow","whistle","wig","window","windmill","wing","wolf","worm","wrench","xylophone","yacht","yak","yo-yo","zebra","zoo"];function da(n,e){return n.drawings.filter(r=>!r.guessed)[0]||null}async function Yw(n,e,t){const r=da(n,e.name);if(!r)return;const s=t.toLowerCase().trim(),i=r.secretWord.toLowerCase().trim();let a=!1;return s===i?(a=!0,r.guessed=!0,r.guessedBy=e.name,await Dr(e,r.coins),Qw(`It was ${r.secretWord}! You got ${r.coins} coins!`)):r.guesses.includes(t)||r.guesses.push(t),await _i(n),a}async function Sc(n){return Xw.sort(()=>Math.random()-.5).slice(0,n).map((t,r)=>({secretWord:t,coins:r+1}))}function Ts(n,e){const t=da(n);if(!t){if(n.drawings.length===0)return n.users[0]===e?"draw":"waiting";const r=[...n.drawings].reverse().find(l=>l.guessed);if(!r)return n.users[0]===e?"draw":"waiting";const i=(n.users.indexOf(r.artist)+1)%n.users.length;return n.users[i]===e?"draw":"waiting"}return t.artist===e?"waiting":"guess"}function Jw(n){return{...n,hintPurchased:n.hintPurchased??!1,superHintPurchased:n.superHintPurchased??!1}}function kc(n){return`The word is ${n.secretWord.length} letters long`}function Pc(n){const e=n.secretWord.split("");for(let t=e.length-1;t>0;t--){const r=Math.floor(Math.random()*(t+1));[e[t],e[r]]=[e[r],e[t]]}return`Letters: ${e.join(" · ").toUpperCase()}`}function Ks(n){return n?n instanceof Date?n.getTime():typeof n.toDate=="function"?n.toDate().getTime():typeof n=="string"?new Date(n).getTime():new Date(n).getTime():0}async function Zw(n,e,t){if(t.coins<5||e.hintPurchased)return!1;const r=n.drawings.findIndex(s=>s.artist===e.artist&&Ks(s.createdAt)===Ks(e.createdAt));return r===-1?!1:(n.drawings[r]={...e,hintPurchased:!0},await _i(n),!0)}async function ev(n,e,t){if(t.coins<10||!e.hintPurchased||e.superHintPurchased)return!1;const r=n.drawings.findIndex(s=>s.artist===e.artist&&Ks(s.createdAt)===Ks(e.createdAt));return r===-1?!1:(n.drawings[r]={...e,superHintPurchased:!0},await _i(n),!0)}function Vc(n){let e,t=n[0][0].toUpperCase()+"",r;return{c(){e=M("div"),r=re(t),A(e,"class","w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold")},m(s,i){q(s,e,i),V(e,r)},p(s,i){i&1&&t!==(t=s[0][0].toUpperCase()+"")&&ve(r,t)},d(s){s&&j(e)}}}function Dc(n){let e,t,r,s,i;return{c(){e=M("span"),t=re(n[1]),r=Y(),s=M("img"),At(s.src,i="/drawit/public/coin.png")||A(s,"src",i),A(s,"class","w-4 h-4"),A(s,"alt","coins")},m(a,l){q(a,e,l),V(e,t),q(a,r,l),q(a,s,l)},p(a,l){l&2&&ve(t,a[1])},d(a){a&&(j(e),j(r),j(s))}}}function Nc(n){let e,t,r;return{c(){e=re("· "),t=M("span"),r=re(n[3]),A(t,"class","text-xs text-black/60")},m(s,i){q(s,e,i),q(s,t,i),V(t,r)},p(s,i){i&8&&ve(r,s[3])},d(s){s&&(j(e),j(t))}}}function Mc(n){let e,t;return{c(){e=Xt("svg"),t=Xt("path"),A(t,"fill-rule","evenodd"),A(t,"d","M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"),A(t,"clip-rule","evenodd"),A(e,"xmlns","http://www.w3.org/2000/svg"),A(e,"class","h-5 w-5 text-gray-400"),A(e,"viewBox","0 0 20 20"),A(e,"fill","currentColor")},m(r,s){q(r,e,s),V(e,t)},d(r){r&&j(e)}}}function tv(n){let e,t,r,s,i,a,l,c,u,d,m,p,_,T=n[2]&&Vc(n),S=n[1]!==null&&Dc(n),k=n[3]&&Nc(n),x=n[4]&&Mc();return{c(){e=M("button"),t=M("div"),T&&T.c(),r=Y(),s=M("div"),i=M("span"),a=re(n[0]),l=Y(),c=M("div"),S&&S.c(),u=Y(),k&&k.c(),d=Y(),x&&x.c(),A(i,"class","font-medium text-black"),A(c,"class","flex items-center gap-1 text-sm text-black/60"),A(s,"class","flex flex-col items-start"),A(t,"class","flex items-center gap-3"),A(e,"class","flex items-center justify-between w-full p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-primary/20 transition-colors active:bg-gray-50"),e.disabled=m=n[4]===null,Yt(e,"cursor-pointer",n[4]!==null),Yt(e,"cursor-default",n[4]===null)},m(O,L){q(O,e,L),V(e,t),T&&T.m(t,null),V(t,r),V(t,s),V(s,i),V(i,a),V(s,l),V(s,c),S&&S.m(c,null),V(c,u),k&&k.m(c,null),V(e,d),x&&x.m(e,null),p||(_=ye(e,"click",n[5]),p=!0)},p(O,[L]){O[2]?T?T.p(O,L):(T=Vc(O),T.c(),T.m(t,r)):T&&(T.d(1),T=null),L&1&&ve(a,O[0]),O[1]!==null?S?S.p(O,L):(S=Dc(O),S.c(),S.m(c,u)):S&&(S.d(1),S=null),O[3]?k?k.p(O,L):(k=Nc(O),k.c(),k.m(c,null)):k&&(k.d(1),k=null),O[4]?x||(x=Mc(),x.c(),x.m(e,null)):x&&(x.d(1),x=null),L&16&&m!==(m=O[4]===null)&&(e.disabled=m),L&16&&Yt(e,"cursor-pointer",O[4]!==null),L&16&&Yt(e,"cursor-default",O[4]===null)},i:Q,o:Q,d(O){O&&j(e),T&&T.d(),S&&S.d(),k&&k.d(),x&&x.d(),p=!1,_()}}}function nv(n,e,t){let{name:r}=e,{coins:s=null}=e,{showAvatar:i=!1}=e,{subtitle:a=null}=e,{onClick:l=null}=e;const c=()=>l==null?void 0:l();return n.$$set=u=>{"name"in u&&t(0,r=u.name),"coins"in u&&t(1,s=u.coins),"showAvatar"in u&&t(2,i=u.showAvatar),"subtitle"in u&&t(3,a=u.subtitle),"onClick"in u&&t(4,l=u.onClick)},[r,s,i,a,l,c]}class ma extends St{constructor(e){super(),Ct(this,e,nv,tv,Et,{name:0,coins:1,showAvatar:2,subtitle:3,onClick:4})}}function xc(n,e,t){const r=n.slice();return r[11]=e[t],r}function rv(n){let e,t,r=Ae(n[0].users.filter(n[9])),s=[];for(let a=0;a<r.length;a+=1)s[a]=Oc(xc(n,r,a));const i=a=>ee(s[a],1,1,()=>{s[a]=null});return{c(){for(let a=0;a<s.length;a+=1)s[a].c();e=Tt()},m(a,l){for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(a,l);q(a,e,l),t=!0},p(a,l){if(l&99){r=Ae(a[0].users.filter(a[9]));let c;for(c=0;c<r.length;c+=1){const u=xc(a,r,c);s[c]?(s[c].p(u,l),W(s[c],1)):(s[c]=Oc(u),s[c].c(),W(s[c],1),s[c].m(e.parentNode,e))}for(Le(),c=r.length;c<s.length;c+=1)i(c);Fe()}},i(a){if(!t){for(let l=0;l<r.length;l+=1)W(s[l]);t=!0}},o(a){s=s.filter(Boolean);for(let l=0;l<s.length;l+=1)ee(s[l]);t=!1},d(a){a&&j(e),pt(s,a)}}}function sv(n){let e,t,r;return t=new ma({props:{name:n[2],coins:n[3],onClick:n[6]}}),{c(){e=M("div"),gt(t.$$.fragment),A(e,"class","flex flex-row text-start w-full")},m(s,i){q(s,e,i),ot(t,e,null),r=!0},p(s,i){const a={};i&4&&(a.name=s[2]),i&8&&(a.coins=s[3]),t.$set(a)},i(s){r||(W(t.$$.fragment,s),r=!0)},o(s){ee(t.$$.fragment,s),r=!1},d(s){s&&j(e),at(t)}}}function iv(n){let e,t=n[11]+"",r;return{c(){e=M("span"),r=re(t),A(e,"class","font-bold text-black")},m(s,i){q(s,e,i),V(e,r)},p(s,i){i&3&&t!==(t=s[11]+"")&&ve(r,t)},i:Q,o:Q,d(s){s&&j(e)}}}function ov(n){let e,t;return e=new ma({props:{name:n[11],coins:n[5][n[11]].coins,subtitle:`${n[0].drawings.length} drawing${n[0].drawings.length===1?"":"s"}`,onClick:n[6]}}),{c(){gt(e.$$.fragment)},m(r,s){ot(e,r,s),t=!0},p(r,s){const i={};s&3&&(i.name=r[11]),s&35&&(i.coins=r[5][r[11]].coins),s&1&&(i.subtitle=`${r[0].drawings.length} drawing${r[0].drawings.length===1?"":"s"}`),e.$set(i)},i(r){t||(W(e.$$.fragment,r),t=!0)},o(r){ee(e.$$.fragment,r),t=!1},d(r){at(e,r)}}}function Oc(n){let e,t,r,s,i;const a=[ov,iv],l=[];function c(u,d){return u[5][u[11]]?0:1}return t=c(n),r=l[t]=a[t](n),{c(){e=M("div"),r.c(),s=Y(),A(e,"class","w-full flex flex-col items-center justify-center gap-0.5")},m(u,d){q(u,e,d),l[t].m(e,null),V(e,s),i=!0},p(u,d){let m=t;t=c(u),t===m?l[t].p(u,d):(Le(),ee(l[m],1,1,()=>{l[m]=null}),Fe(),r=l[t],r?r.p(u,d):(r=l[t]=a[t](u),r.c()),W(r,1),r.m(e,s))},i(u){i||(W(r),i=!0)},o(u){ee(r),i=!1},d(u){u&&j(e),l[t].d()}}}function av(n){let e,t,r,s;const i=[sv,rv],a=[];function l(c,u){return c[4]?0:c[0]?1:-1}return~(t=l(n))&&(r=a[t]=i[t](n)),{c(){e=M("div"),r&&r.c(),A(e,"class","cursor-pointer py-1 rounded-lg transition-colors w-full mb-2 flex flex-col gap-2 items-center justify-between"),Yt(e,"bg-primary-10",!n[4]),Yt(e,"bg-secondary-10",n[4])},m(c,u){q(c,e,u),~t&&a[t].m(e,null),s=!0},p(c,[u]){let d=t;t=l(c),t===d?~t&&a[t].p(c,u):(r&&(Le(),ee(a[d],1,1,()=>{a[d]=null}),Fe()),~t?(r=a[t],r?r.p(c,u):(r=a[t]=i[t](c),r.c()),W(r,1),r.m(e,null)):r=null),(!s||u&16)&&Yt(e,"bg-primary-10",!c[4]),(!s||u&16)&&Yt(e,"bg-secondary-10",c[4])},i(c){s||(W(r),s=!0)},o(c){ee(r),s=!1},d(c){c&&j(e),~t&&a[t].d()}}}function lv(n,e,t){let r,s;Ye(n,ft,T=>t(10,r=T)),Ye(n,yt,T=>t(5,s=T));let{game:i=null}=e,{currentUserName:a=""}=e,{user:l=""}=e,{coins:c=null}=e,{isNewGame:u=!1}=e,{onClick:d=null}=e,{navigate:m=null}=e;function p(){u&&d?d():i&&m&&(ht(ft,r=i,r),m("home"))}const _=T=>T!==a;return n.$$set=T=>{"game"in T&&t(0,i=T.game),"currentUserName"in T&&t(1,a=T.currentUserName),"user"in T&&t(2,l=T.user),"coins"in T&&t(3,c=T.coins),"isNewGame"in T&&t(4,u=T.isNewGame),"onClick"in T&&t(7,d=T.onClick),"navigate"in T&&t(8,m=T.navigate)},[i,a,l,c,u,s,p,d,m,_]}class cv extends St{constructor(e){super(),Ct(this,e,lv,av,Et,{game:0,currentUserName:1,user:2,coins:3,isNewGame:4,onClick:7,navigate:8})}}function Lc(n,e,t){const r=n.slice();return r[5]=e[t],r}function Fc(n){let e,t;return e=new cv({props:{game:n[5],currentUserName:n[2],navigate:n[4]}}),{c(){gt(e.$$.fragment)},m(r,s){ot(e,r,s),t=!0},p(r,s){const i={};s&2&&(i.game=r[5]),s&4&&(i.currentUserName=r[2]),s&16&&(i.navigate=r[4]),e.$set(i)},i(r){t||(W(e.$$.fragment,r),t=!0)},o(r){ee(e.$$.fragment,r),t=!1},d(r){at(e,r)}}}function uv(n){let e,t,r,s,i,a=Ae(n[1]),l=[];for(let u=0;u<a.length;u+=1)l[u]=Fc(Lc(n,a,u));const c=u=>ee(l[u],1,1,()=>{l[u]=null});return{c(){e=M("div"),t=M("h3"),r=re(n[0]),s=Y();for(let u=0;u<l.length;u+=1)l[u].c();A(t,"class",n[3]),A(e,"class","flex flex-col gap-0")},m(u,d){q(u,e,d),V(e,t),V(t,r),V(e,s);for(let m=0;m<l.length;m+=1)l[m]&&l[m].m(e,null);i=!0},p(u,[d]){if((!i||d&1)&&ve(r,u[0]),(!i||d&8)&&A(t,"class",u[3]),d&22){a=Ae(u[1]);let m;for(m=0;m<a.length;m+=1){const p=Lc(u,a,m);l[m]?(l[m].p(p,d),W(l[m],1)):(l[m]=Fc(p),l[m].c(),W(l[m],1),l[m].m(e,null))}for(Le(),m=a.length;m<l.length;m+=1)c(m);Fe()}},i(u){if(!i){for(let d=0;d<a.length;d+=1)W(l[d]);i=!0}},o(u){l=l.filter(Boolean);for(let d=0;d<l.length;d+=1)ee(l[d]);i=!1},d(u){u&&j(e),pt(l,u)}}}function hv(n,e,t){let{title:r}=e,{games:s}=e,{currentUserName:i}=e,{titleClass:a="text-sm font-semibold text-primary"}=e,{navigate:l=null}=e;return n.$$set=c=>{"title"in c&&t(0,r=c.title),"games"in c&&t(1,s=c.games),"currentUserName"in c&&t(2,i=c.currentUserName),"titleClass"in c&&t(3,a=c.titleClass),"navigate"in c&&t(4,l=c.navigate)},[r,s,i,a,l]}class Gf extends St{constructor(e){super(),Ct(this,e,hv,uv,Et,{title:0,games:1,currentUserName:2,titleClass:3,navigate:4})}}function Uc(n,e,t){const r=n.slice();return r[16]=e[t],r}function Bc(n,e,t){const r=n.slice();return r[16]=e[t],r}function fv(n){let e,t,r,s,i,a,l,c,u,d;return{c(){var m;e=M("div"),t=M("span"),t.textContent="Who are you?",r=Y(),s=M("input"),i=Y(),a=M("button"),l=re("get drawin'"),A(t,"class","text-2xl font-bold text-primary"),A(s,"type","text"),A(s,"placeholder","Enter username"),A(s,"class","input input-bordered w-full bg-white text-black border-primary rounded-xl text-lg px-4 py-2 shadow"),s.autofocus=!0,A(s,"autocapitalize","off"),A(s,"autocorrect","off"),A(s,"maxlength","14"),A(a,"class","btn btn-primary text-white w-full rounded-xl text-lg py-2 shadow"),a.disabled=c=!((m=n[4])!=null&&m.trim()),A(e,"class","flex flex-col items-center gap-4 w-full max-w-xs mx-auto mt-8")},m(m,p){q(m,e,p),V(e,t),V(e,r),V(e,s),Gn(s,n[4]),V(e,i),V(e,a),V(a,l),s.focus(),u||(d=[ye(s,"input",n[12]),ye(a,"click",n[13])],u=!0)},p(m,p){var _;p&16&&s.value!==m[4]&&Gn(s,m[4]),p&16&&c!==(c=!((_=m[4])!=null&&_.trim()))&&(a.disabled=c)},i:Q,o:Q,d(m){m&&j(e),u=!1,vt(d)}}}function dv(n){let e,t,r,s,i,a,l;const c=[gv,pv],u=[];function d(m,p){return m[6].length!==0?0:1}return s=d(n),i=u[s]=c[s](n),{c(){e=M("img"),r=Y(),i.c(),a=Tt(),At(e.src,t="logo.svg")||A(e,"src",t),A(e,"alt","drawit"),A(e,"class","w-32 mx-auto mb-6 drop-shadow-md")},m(m,p){q(m,e,p),q(m,r,p),u[s].m(m,p),q(m,a,p),l=!0},p(m,p){let _=s;s=d(m),s===_?u[s].p(m,p):(Le(),ee(u[_],1,1,()=>{u[_]=null}),Fe(),i=u[s],i?i.p(m,p):(i=u[s]=c[s](m),i.c()),W(i,1),i.m(a.parentNode,a))},i(m){l||(W(i),l=!0)},o(m){ee(i),l=!1},d(m){m&&(j(e),j(r),j(a)),u[s].d(m)}}}function mv(n){let e;return{c(){e=M("div"),e.innerHTML='<img src="logo.svg" alt="drawit" class="w-32 mx-auto mb-6 drop-shadow-md"/> <div class="text-primary text-lg font-semibold">Loading...</div>',A(e,"class","flex flex-col items-center gap-4 w-full max-w-xs mx-auto")},m(t,r){q(t,e,r)},p:Q,i:Q,o:Q,d(t){t&&j(e)}}}function pv(n){let e;return{c(){e=M("div"),e.textContent="No games yet. Start a new one!",A(e,"class","text-center text-gray-500 mt-8")},m(t,r){q(t,e,r)},p:Q,i:Q,o:Q,d(t){t&&j(e)}}}function gv(n){let e,t,r=n[3]&&jc(n);return{c(){e=M("div"),r&&r.c(),A(e,"class","flex flex-col gap-6 w-full max-w-xs mx-auto")},m(s,i){q(s,e,i),r&&r.m(e,null),t=!0},p(s,i){s[3]?r?(r.p(s,i),i&8&&W(r,1)):(r=jc(s),r.c(),W(r,1),r.m(e,null)):r&&(Le(),ee(r,1,1,()=>{r=null}),Fe())},i(s){t||(W(r),t=!0)},o(s){ee(r),t=!1},d(s){s&&j(e),r&&r.d()}}}function jc(n){let e=n[6].filter(n[9]).length>0,t,r=n[6].filter(n[8]).length>0,s,i,a=e&&qc(n),l=r&&zc(n);return{c(){a&&a.c(),t=Y(),l&&l.c(),s=Tt()},m(c,u){a&&a.m(c,u),q(c,t,u),l&&l.m(c,u),q(c,s,u),i=!0},p(c,u){u&72&&(e=c[6].filter(c[9]).length>0),e?a?(a.p(c,u),u&72&&W(a,1)):(a=qc(c),a.c(),W(a,1),a.m(t.parentNode,t)):a&&(Le(),ee(a,1,1,()=>{a=null}),Fe()),u&72&&(r=c[6].filter(c[8]).length>0),r?l?(l.p(c,u),u&72&&W(l,1)):(l=zc(c),l.c(),W(l,1),l.m(s.parentNode,s)):l&&(Le(),ee(l,1,1,()=>{l=null}),Fe())},i(c){i||(W(a),W(l),i=!0)},o(c){ee(a),ee(l),i=!1},d(c){c&&(j(t),j(s)),a&&a.d(c),l&&l.d(c)}}}function qc(n){let e,t,r,s,i=Ae(n[6].filter(n[10])),a=[];for(let c=0;c<i.length;c+=1)a[c]=$c(Bc(n,i,c));const l=c=>ee(a[c],1,1,()=>{a[c]=null});return{c(){e=M("div"),t=M("div"),t.textContent="Your Turn!",r=Y();for(let c=0;c<a.length;c+=1)a[c].c();A(t,"class","text-center text-2xl font-bold mb-2 animate-gradient-text svelte-1by7pf7"),A(e,"class","rounded-2xl bg-white/90 shadow-md p-4")},m(c,u){q(c,e,u),V(e,t),V(e,r);for(let d=0;d<a.length;d+=1)a[d]&&a[d].m(e,null);s=!0},p(c,u){if(u&73){i=Ae(c[6].filter(c[10]));let d;for(d=0;d<i.length;d+=1){const m=Bc(c,i,d);a[d]?(a[d].p(m,u),W(a[d],1)):(a[d]=$c(m),a[d].c(),W(a[d],1),a[d].m(e,null))}for(Le(),d=i.length;d<a.length;d+=1)l(d);Fe()}},i(c){if(!s){for(let u=0;u<i.length;u+=1)W(a[u]);s=!0}},o(c){a=a.filter(Boolean);for(let u=0;u<a.length;u+=1)ee(a[u]);s=!1},d(c){c&&j(e),pt(a,c)}}}function $c(n){let e,t;return e=new Gf({props:{title:"",games:[n[16]],currentUserName:n[3],navigate:n[0]}}),{c(){gt(e.$$.fragment)},m(r,s){ot(e,r,s),t=!0},p(r,s){const i={};s&72&&(i.games=[r[16]]),s&8&&(i.currentUserName=r[3]),s&1&&(i.navigate=r[0]),e.$set(i)},i(r){t||(W(e.$$.fragment,r),t=!0)},o(r){ee(e.$$.fragment,r),t=!1},d(r){at(e,r)}}}function zc(n){let e,t,r,s,i=Ae(n[6].filter(n[11])),a=[];for(let c=0;c<i.length;c+=1)a[c]=Hc(Uc(n,i,c));const l=c=>ee(a[c],1,1,()=>{a[c]=null});return{c(){e=M("div"),t=M("div"),t.textContent="Waiting",r=Y();for(let c=0;c<a.length;c+=1)a[c].c();A(t,"class","text-center text-secondary/60 font-semibold text-xs mb-2"),A(e,"class","rounded-2xl bg-white/60 shadow-sm p-4 opacity-60")},m(c,u){q(c,e,u),V(e,t),V(e,r);for(let d=0;d<a.length;d+=1)a[d]&&a[d].m(e,null);s=!0},p(c,u){if(u&73){i=Ae(c[6].filter(c[11]));let d;for(d=0;d<i.length;d+=1){const m=Uc(c,i,d);a[d]?(a[d].p(m,u),W(a[d],1)):(a[d]=Hc(m),a[d].c(),W(a[d],1),a[d].m(e,null))}for(Le(),d=i.length;d<a.length;d+=1)l(d);Fe()}},i(c){if(!s){for(let u=0;u<i.length;u+=1)W(a[u]);s=!0}},o(c){a=a.filter(Boolean);for(let u=0;u<a.length;u+=1)ee(a[u]);s=!1},d(c){c&&j(e),pt(a,c)}}}function Hc(n){let e,t;return e=new Gf({props:{title:"",games:[n[16]],currentUserName:n[3],navigate:n[0]}}),{c(){gt(e.$$.fragment)},m(r,s){ot(e,r,s),t=!0},p(r,s){const i={};s&72&&(i.games=[r[16]]),s&8&&(i.currentUserName=r[3]),s&1&&(i.navigate=r[0]),e.$set(i)},i(r){t||(W(e.$$.fragment,r),t=!0)},o(r){ee(e.$$.fragment,r),t=!1},d(r){at(e,r)}}}function _v(n){let e,t,r,s;const i=[mv,dv,fv],a=[];function l(c,u){return c[2]||c[1]&&!c[5]?0:c[1]?1:2}return t=l(n),r=a[t]=i[t](n),{c(){e=M("div"),r.c(),A(e,"class","min-h-[80vh] flex flex-col items-center justify-center px-2 py-6")},m(c,u){q(c,e,u),a[t].m(e,null),s=!0},p(c,[u]){let d=t;t=l(c),t===d?a[t].p(c,u):(Le(),ee(a[d],1,1,()=>{a[d]=null}),Fe(),r=a[t],r?r.p(c,u):(r=a[t]=i[t](c),r.c()),W(r,1),r.m(e,null))},i(c){s||(W(r),s=!0)},o(c){ee(r),s=!1},d(c){c&&j(e),a[t].d()}}}function yv(n,e,t){let r,s,i;Ye(n,Is,x=>t(5,r=x)),Ye(n,Ze,x=>t(1,s=x)),Ye(n,$r,x=>t(6,i=x));let a=!0,l=null,c="",{navigate:u}=e;async function d(x){x.trim()&&/^[a-zA-Z0-9]+$/.test(x)?(t(2,a=!0),await $w(x.trim()),t(2,a=!1)):x.trim()}qr(async()=>{if(t(2,a=!0),ht(Is,r=!1,r),s&&s.name)if(!await zw(s.name))ht(Ze,s=null,s);else{const L=(await Hf(s.name)).flatMap(U=>U.users.filter(te=>te!==s.name));await qw(L),ht(Is,r=!0,r)}t(2,a=!1)});const m=x=>Ts(x,l)==="waiting",p=x=>["draw","guess"].includes(Ts(x,l)),_=x=>["draw","guess"].includes(Ts(x,l)),T=x=>Ts(x,l)==="waiting";function S(){c=this.value,t(4,c)}const k=()=>d(c);return n.$$set=x=>{"navigate"in x&&t(0,u=x.navigate)},n.$$.update=()=>{n.$$.dirty&2&&t(3,l=s?s.name:null)},[u,s,a,l,c,r,i,d,m,p,_,T,S,k]}class wv extends St{constructor(e){super(),Ct(this,e,yv,_v,Et,{navigate:0})}}function Gc(n,e,t){const r=n.slice();return r[24]=e[t],r}function Wc(n,e,t){const r=n.slice();return r[27]=e[t],r}function Kc(n){let e,t,r,s;function i(){return n[12](n[27])}return{c(){e=M("button"),A(e,"class",t="w-8 h-8 rounded-full border-2 "+(n[1]===n[27]?"border-primary":"")),Qi(e,"background-color",n[27])},m(a,l){q(a,e,l),r||(s=ye(e,"click",i),r=!0)},p(a,l){n=a,l&2&&t!==(t="w-8 h-8 rounded-full border-2 "+(n[1]===n[27]?"border-primary":""))&&A(e,"class",t)},d(a){a&&j(e),r=!1,s()}}}function Qc(n){let e,t,r,s,i,a;function l(){return n[13](n[24])}return{c(){e=M("button"),t=M("div"),r=Y(),A(t,"class","w-4 h-4 rounded-full bg-black mx-auto"),Qi(t,"width",n[24]+"px"),Qi(t,"height",n[24]+"px"),A(e,"class",s="w-8 h-8 rounded-full border-2 bg-white "+(n[0]===n[24]?"border-primary":"border-transparent"))},m(c,u){q(c,e,u),V(e,t),V(e,r),i||(a=ye(e,"click",l),i=!0)},p(c,u){n=c,u&1&&s!==(s="w-8 h-8 rounded-full border-2 bg-white "+(n[0]===n[24]?"border-primary":"border-transparent"))&&A(e,"class",s)},d(c){c&&j(e),i=!1,a()}}}function vv(n){let e,t,r,s,i,a,l,c,u=Ae(n[5]),d=[];for(let _=0;_<u.length;_+=1)d[_]=Kc(Wc(n,u,_));let m=Ae(n[6]),p=[];for(let _=0;_<m.length;_+=1)p[_]=Qc(Gc(n,m,_));return{c(){e=M("div"),t=M("div");for(let _=0;_<d.length;_+=1)d[_].c();r=Y(),s=M("div");for(let _=0;_<p.length;_+=1)p[_].c();i=Y(),a=M("canvas"),A(t,"class","flex gap-2 justify-start items-center flex-wrap"),A(s,"class","flex gap-2 justify-start items-center"),A(a,"class","border-2 border-gray-300 rounded-lg touch-none w-full aspect-square"),A(e,"class","flex flex-col gap-2 w-full")},m(_,T){q(_,e,T),V(e,t);for(let S=0;S<d.length;S+=1)d[S]&&d[S].m(t,null);V(e,r),V(e,s);for(let S=0;S<p.length;S+=1)p[S]&&p[S].m(s,null);V(e,i),V(e,a),n[14](a),n[15](e),l||(c=[ye(a,"mousedown",n[7]),ye(a,"mousemove",n[8]),ye(a,"mouseup",n[9]),ye(a,"mouseleave",n[9]),ye(a,"touchstart",n[7]),ye(a,"touchmove",n[8]),ye(a,"touchend",n[9],{passive:!0})],l=!0)},p(_,[T]){if(T&42){u=Ae(_[5]);let S;for(S=0;S<u.length;S+=1){const k=Wc(_,u,S);d[S]?d[S].p(k,T):(d[S]=Kc(k),d[S].c(),d[S].m(t,null))}for(;S<d.length;S+=1)d[S].d(1);d.length=u.length}if(T&73){m=Ae(_[6]);let S;for(S=0;S<m.length;S+=1){const k=Gc(_,m,S);p[S]?p[S].p(k,T):(p[S]=Qc(k),p[S].c(),p[S].m(s,null))}for(;S<p.length;S+=1)p[S].d(1);p.length=m.length}},i:Q,o:Q,d(_){_&&j(e),pt(d,_),pt(p,_),n[14](null),n[15](null),l=!1,vt(c)}}}function Ev(n,e,t){let r=400,s=400,{lineWidth:i=5}=e,{strokeColor:a="#000000"}=e,l,c,u=!1,d=0,m=0,p;const _=["#000000","#FFFFFF","#E74C3C","#E67E22","#F1C40F","#2ECC71","#1ABC9C","#3498DB","#9B59B6","#7F8C8D"],T=[5,15,25];function S(){if(!l)return;const E=window.devicePixelRatio||1;t(2,l.width=r*E,l),t(2,l.height=s*E,l),t(2,l.style.width=r+"px",l),t(2,l.style.height=s+"px",l),t(3,c=l.getContext("2d")),c.setTransform(1,0,0,1,0,0),c.scale(E,E),t(3,c.lineCap="round",c),t(3,c.lineJoin="round",c),t(3,c.strokeStyle=a,c),t(3,c.lineWidth=i,c),t(3,c.fillStyle="#FFFFFF",c),c.fillRect(0,0,r,s)}function k(E){u=!0;const C=L(E);d=C.x,m=C.y}function x(E){if(!u)return;const C=L(E);c.beginPath(),c.moveTo(d,m),c.lineTo(C.x,C.y),c.stroke(),d=C.x,m=C.y}function O(){u=!1}function L(E){const C=l.getBoundingClientRect();if("touches"in E&&E.touches.length>0){const y=E.touches[0];return{x:y.clientX-C.left,y:y.clientY-C.top}}return{x:E.clientX-C.left,y:E.clientY-C.top}}function U(){t(3,c.fillStyle="#FFFFFF",c),c.fillRect(0,0,r,s)}function te(){return l.toDataURL("image/png")}function X(){!p||!l||(r=p.clientWidth,s=r,S())}qr(()=>{S();const E=new ResizeObserver(()=>{X()});return p&&E.observe(p),()=>{E.disconnect()}});const b=E=>{t(1,a=E),t(3,c.strokeStyle=E,c)},w=E=>{t(0,i=E),t(3,c.lineWidth=E,c)};function v(E){Mr[E?"unshift":"push"](()=>{l=E,t(2,l)})}function I(E){Mr[E?"unshift":"push"](()=>{p=E,t(4,p)})}return n.$$set=E=>{"lineWidth"in E&&t(0,i=E.lineWidth),"strokeColor"in E&&t(1,a=E.strokeColor)},[i,a,l,c,p,_,T,k,x,O,U,te,b,w,v,I]}class Tv extends St{constructor(e){super(),Ct(this,e,Ev,vv,Et,{lineWidth:0,strokeColor:1,clearCanvas:10,getImageData:11})}get clearCanvas(){return this.$$.ctx[10]}get getImageData(){return this.$$.ctx[11]}}function Xc(n,e,t){const r=n.slice();return r[29]=e[t],r}function Yc(n,e,t){const r=n.slice();return r[32]=e[t],r}function Jc(n,e,t){const r=n.slice();return r[12]=e[t],r}function bv(n){let e,t,r,s;const i=[Rv,Av],a=[];function l(c,u){return c[1]?1:0}return t=l(n),r=a[t]=i[t](n),{c(){e=M("div"),r.c(),A(e,"class","flex flex-col items-center gap-6")},m(c,u){q(c,e,u),a[t].m(e,null),s=!0},p(c,u){let d=t;t=l(c),t===d?a[t].p(c,u):(Le(),ee(a[d],1,1,()=>{a[d]=null}),Fe(),r=a[t],r?r.p(c,u):(r=a[t]=i[t](c),r.c()),W(r,1),r.m(e,null))},i(c){s||(W(r),s=!0)},o(c){ee(r),s=!1},d(c){c&&j(e),a[t].d()}}}function Iv(n){let e,t,r,s,i,a,l,c,u,d;function m(U,te){return U[0].data&&U[0].data.length>10?Vv:Pv}let p=m(n),_=p(n);function T(U,te){return U[9]?Nv:Dv}let S=T(n),k=S(n),x=Ae(n[0].guesses),O=[];for(let U=0;U<x.length;U+=1)O[U]=ou(Jc(n,x,U));let L=!n[0].guessed&&n[2].name!==n[0].artist&&au(n);return{c(){e=M("div"),t=M("div"),_.c(),r=Y(),s=M("div"),i=M("h2"),i.textContent="What's this?",a=Y(),l=M("p"),k.c(),c=Y(),u=M("div");for(let U=0;U<O.length;U+=1)O[U].c();d=Y(),L&&L.c(),A(t,"class","bg-white/90 p-2 rounded-lg w-full max-w-[min(90vw,300px)] aspect-square flex items-center justify-center mx-auto border-2 border-primary"),A(i,"class","text-xl font-bold mb-2 text-primary"),A(l,"class","mb-4"),A(u,"class","flex flex-wrap gap-2 w-full overflow-y-auto"),A(s,"class","w-full max-w-[min(90vw,400px)]"),A(e,"class","flex flex-col items-center gap-6")},m(U,te){q(U,e,te),V(e,t),_.m(t,null),V(e,r),V(e,s),V(s,i),V(s,a),V(s,l),k.m(l,null),V(s,c),V(s,u);for(let X=0;X<O.length;X+=1)O[X]&&O[X].m(u,null);V(e,d),L&&L.m(e,null)},p(U,te){if(p===(p=m(U))&&_?_.p(U,te):(_.d(1),_=p(U),_&&(_.c(),_.m(t,null))),S===(S=T(U))&&k?k.p(U,te):(k.d(1),k=S(U),k&&(k.c(),k.m(l,null))),te[0]&1){x=Ae(U[0].guesses);let X;for(X=0;X<x.length;X+=1){const b=Jc(U,x,X);O[X]?O[X].p(b,te):(O[X]=ou(b),O[X].c(),O[X].m(u,null))}for(;X<O.length;X+=1)O[X].d(1);O.length=x.length}!U[0].guessed&&U[2].name!==U[0].artist?L?L.p(U,te):(L=au(U),L.c(),L.m(e,null)):L&&(L.d(1),L=null)},i:Q,o:Q,d(U){U&&j(e),_.d(),k.d(),pt(O,U),L&&L.d()}}}function Av(n){let e,t,r,s,i=n[1].secretWord.toUpperCase()+"",a,l,c,u,d,m,p,_,T,S,k=n[4]?"Posting, great work...":"Submit Drawing",x,O,L,U,te,X={};return u=new Tv({props:X}),n[22](u),{c(){e=M("div"),t=M("h2"),r=re("Ok, let's draw "),s=M("span"),a=re(i),l=Y(),c=M("div"),gt(u.$$.fragment),d=Y(),m=M("div"),p=M("button"),p.textContent="Clear",_=Y(),T=M("button"),S=M("span"),x=re(k),A(s,"class","font-bold text-black"),A(t,"class","text-xl mb-4 text-black/60"),A(p,"class","btn btn-outline flex-1"),A(T,"class",O=n[4]?"btn-disabled flex-1":"btn btn-secondary flex-1 flex flex-row items-center justify-center text-center border border-secondary"),A(m,"class","flex flex-row gap-2 mt-4 w-full"),A(c,"class","w-full aspect-square max-w-[min(90vw,400px)] mx-auto"),A(e,"class","w-full h-screen")},m(b,w){q(b,e,w),V(e,t),V(t,r),V(t,s),V(s,a),V(e,l),V(e,c),ot(u,c,null),V(c,d),V(c,m),V(m,p),V(m,_),V(m,T),V(T,S),V(S,x),L=!0,U||(te=[ye(p,"click",n[23]),ye(T,"click",n[24])],U=!0)},p(b,w){(!L||w[0]&2)&&i!==(i=b[1].secretWord.toUpperCase()+"")&&ve(a,i);const v={};u.$set(v),(!L||w[0]&16)&&k!==(k=b[4]?"Posting, great work...":"Submit Drawing")&&ve(x,k),(!L||w[0]&16&&O!==(O=b[4]?"btn-disabled flex-1":"btn btn-secondary flex-1 flex flex-row items-center justify-center text-center border border-secondary"))&&A(T,"class",O)},i(b){L||(W(u.$$.fragment,b),L=!0)},o(b){ee(u.$$.fragment,b),L=!1},d(b){b&&j(e),n[22](null),at(u),U=!1,vt(te)}}}function Rv(n){let e,t,r,s,i,a,l,c=n[3].users.filter(n[19])[0]+"",u,d,m,p,_,T={ctx:n,current:null,token:null,hasCatch:!1,pending:kv,then:Sv,catch:Cv,value:28};return cl(_=n[7],T),{c(){e=M("div"),t=M("h2"),t.textContent="Pick a word to draw",r=Y(),s=M("p"),i=M("span"),a=re("You get coins as the artist, and "),l=M("span"),u=re(c),d=re(" gets coins for guessing correctly!"),m=Y(),p=M("div"),T.block.c(),A(t,"class","text-xl font-bold mb-2 text-primary"),A(l,"class","font-bold"),A(s,"class","mb-6 text-accent italic tooltip flex flex-row gap-2 text-xs"),A(p,"class","flex flex-col gap-4"),A(e,"class","w-full flex flex-col items-center")},m(S,k){q(S,e,k),V(e,t),V(e,r),V(e,s),V(s,i),V(i,a),V(i,l),V(l,u),V(i,d),V(e,m),V(e,p),T.block.m(p,T.anchor=null),T.mount=()=>p,T.anchor=null},p(S,k){n=S,k[0]&12&&c!==(c=n[3].users.filter(n[19])[0]+"")&&ve(u,c),T.ctx=n,k[0]&128&&_!==(_=n[7])&&cl(_,T)||Sd(T,n,k)},i:Q,o:Q,d(S){S&&j(e),T.block.d(),T.token=null,T=null}}}function Cv(n){return{c:Q,m:Q,p:Q,d:Q}}function Sv(n){let e,t,r,s=n[8]?"Refreshing...":"Refresh Words",i,a,l,c,u,d=Ae(n[28]),m=[];for(let _=0;_<d.length;_+=1)m[_]=eu(Xc(n,d,_));let p=!n[8]&&tu();return{c(){for(let _=0;_<m.length;_+=1)m[_].c();e=Y(),t=M("button"),r=M("span"),i=re(s),a=Y(),p&&p.c(),A(t,"class",l="btn btn-outline w-72 flex flex-row items-center justify-center gap-2 "+(!n[2]||n[2].coins<5||n[8]?"opacity-20 cursor-not-allowed":""))},m(_,T){for(let S=0;S<m.length;S+=1)m[S]&&m[S].m(_,T);q(_,e,T),q(_,t,T),V(t,r),V(r,i),V(t,a),p&&p.m(t,null),c||(u=ye(t,"click",n[21]),c=!0)},p(_,T){if(T[0]&142){d=Ae(_[28]);let S;for(S=0;S<d.length;S+=1){const k=Xc(_,d,S);m[S]?m[S].p(k,T):(m[S]=eu(k),m[S].c(),m[S].m(e.parentNode,e))}for(;S<m.length;S+=1)m[S].d(1);m.length=d.length}T[0]&256&&s!==(s=_[8]?"Refreshing...":"Refresh Words")&&ve(i,s),_[8]?p&&(p.d(1),p=null):p||(p=tu(),p.c(),p.m(t,null)),T[0]&260&&l!==(l="btn btn-outline w-72 flex flex-row items-center justify-center gap-2 "+(!_[2]||_[2].coins<5||_[8]?"opacity-20 cursor-not-allowed":""))&&A(t,"class",l)},d(_){_&&(j(e),j(t)),pt(m,_),p&&p.d(),c=!1,u()}}}function Zc(n){let e,t;return{c(){e=M("img"),At(e.src,t="/drawit/public/coin.gif")||A(e,"src",t),A(e,"class","w-4 h-4")},m(r,s){q(r,e,s)},p:Q,d(r){r&&j(e)}}}function eu(n){let e,t=n[29].secretWord.toUpperCase()+"",r,s,i,a,l,c=Ae(Array(n[29].coins)),u=[];for(let m=0;m<c.length;m+=1)u[m]=Zc(Yc(n,c,m));function d(){return n[20](n[29])}return{c(){e=M("button"),r=re(t),s=Y(),i=M("span");for(let m=0;m<u.length;m+=1)u[m].c();A(i,"class","flex items-center gap-1"),A(e,"class","btn btn-secondary flex flex-row items-center justify-between w-72 border border-secondary")},m(m,p){q(m,e,p),V(e,r),V(e,s),V(e,i);for(let _=0;_<u.length;_+=1)u[_]&&u[_].m(i,null);a||(l=ye(e,"click",d),a=!0)},p(m,p){if(n=m,p[0]&128&&t!==(t=n[29].secretWord.toUpperCase()+"")&&ve(r,t),p[0]&128){c=Ae(Array(n[29].coins));let _;for(_=0;_<c.length;_+=1){const T=Yc(n,c,_);u[_]?u[_].p(T,p):(u[_]=Zc(),u[_].c(),u[_].m(i,null))}for(;_<u.length;_+=1)u[_].d(1);u.length=c.length}},d(m){m&&j(e),pt(u,m),a=!1,l()}}}function tu(n){let e;return{c(){e=M("span"),e.innerHTML='(5 <img src="/drawit/public/coin.gif" class="w-4 h-4 inline"/>)',A(e,"class","text-xs text-black/60")},m(t,r){q(t,e,r)},d(t){t&&j(e)}}}function kv(n){return{c:Q,m:Q,p:Q,d:Q}}function Pv(n){let e;return{c(){e=M("span"),e.textContent="No drawing yet",A(e,"class","text-accent")},m(t,r){q(t,e,r)},p:Q,d(t){t&&j(e)}}}function Vv(n){let e,t;return{c(){e=M("img"),At(e.src,t=`${n[0].data}`)||A(e,"src",t),A(e,"class","w-full h-full object-contain"),A(e,"alt","Current drawing")},m(r,s){q(r,e,s)},p(r,s){s[0]&1&&!At(e.src,t=`${r[0].data}`)&&A(e,"src",t)},d(r){r&&j(e)}}}function Dv(n){let e,t,r=n[0].artist+"",s,i,a,l=(n[0].hintPurchased||n[0].superHintPurchased)&&nu(n);return{c(){e=re("Drawn by "),t=M("span"),s=re(r),i=Y(),l&&l.c(),a=Tt(),A(t,"class","font-bold text-secondary")},m(c,u){q(c,e,u),q(c,t,u),V(t,s),q(c,i,u),l&&l.m(c,u),q(c,a,u)},p(c,u){u[0]&1&&r!==(r=c[0].artist+"")&&ve(s,r),c[0].hintPurchased||c[0].superHintPurchased?l?l.p(c,u):(l=nu(c),l.c(),l.m(a.parentNode,a)):l&&(l.d(1),l=null)},d(c){c&&(j(e),j(t),j(i),j(a)),l&&l.d(c)}}}function Nv(n){let e,t,r=n[0].secretWord+"",s;return{c(){e=re("You drew this. The secret word is "),t=M("span"),s=re(r),A(t,"class","font-bold text-secondary")},m(i,a){q(i,e,a),q(i,t,a),V(t,s)},p(i,a){a[0]&1&&r!==(r=i[0].secretWord+"")&&ve(s,r)},d(i){i&&(j(e),j(t))}}}function nu(n){let e,t,r=n[0].hintPurchased&&ru(n),s=n[0].superHintPurchased&&su(n);return{c(){e=M("ul"),r&&r.c(),t=Y(),s&&s.c(),A(e,"class","pl-4 mt-1 space-y-1")},m(i,a){q(i,e,a),r&&r.m(e,null),V(e,t),s&&s.m(e,null)},p(i,a){i[0].hintPurchased?r?r.p(i,a):(r=ru(i),r.c(),r.m(e,t)):r&&(r.d(1),r=null),i[0].superHintPurchased?s?s.p(i,a):(s=su(i),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(i){i&&j(e),r&&r.d(),s&&s.d()}}}function ru(n){let e,t=kc(n[0])+"",r;return{c(){e=M("li"),r=re(t),A(e,"class","text-xs list-disc text-accent/70")},m(s,i){q(s,e,i),V(e,r)},p(s,i){i[0]&1&&t!==(t=kc(s[0])+"")&&ve(r,t)},d(s){s&&j(e)}}}function su(n){let e,t=Pc(n[0])+"",r;return{c(){e=M("li"),r=re(t),A(e,"class","text-xs list-disc text-accent/70")},m(s,i){q(s,e,i),V(e,r)},p(s,i){i[0]&1&&t!==(t=Pc(s[0])+"")&&ve(r,t)},d(s){s&&j(e)}}}function iu(n){let e,t=n[12]+"",r,s;return{c(){e=M("div"),r=re(t),s=Y(),A(e,"class","bg-accent-light px-3 py-1 rounded-full text-black/60 border border-accent")},m(i,a){q(i,e,a),V(e,r),V(e,s)},p(i,a){a[0]&1&&t!==(t=i[12]+"")&&ve(r,t)},d(i){i&&j(e)}}}function ou(n){let e,t=n[12]&&iu(n);return{c(){t&&t.c(),e=Tt()},m(r,s){t&&t.m(r,s),q(r,e,s)},p(r,s){r[12]?t?t.p(r,s):(t=iu(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(r){r&&j(e),t&&t.d(r)}}}function au(n){let e,t,r,s,i,a,l,c,u;function d(_,T){if(!_[0].hintPurchased)return xv;if(!_[0].superHintPurchased)return Mv}let m=d(n),p=m&&m(n);return{c(){e=M("div"),t=M("div"),p&&p.c(),r=Y(),s=M("div"),i=M("input"),a=Y(),l=M("button"),l.textContent="Guess",A(t,"class","flex gap-2"),A(i,"type","text"),A(i,"placeholder","Type your guess..."),A(i,"class","input input-bordered flex-1 bg-white text-black border-primary"),A(l,"class","btn btn-primary"),A(s,"class","flex gap-2"),A(e,"class","flex flex-col gap-2 w-full max-w-[min(90vw,400px)]")},m(_,T){q(_,e,T),V(e,t),p&&p.m(t,null),V(e,r),V(e,s),V(s,i),Gn(i,n[12]),V(s,a),V(s,l),c||(u=[ye(i,"input",n[16]),ye(i,"keydown",n[17]),ye(l,"click",n[18])],c=!0)},p(_,T){m===(m=d(_))&&p?p.p(_,T):(p&&p.d(1),p=m&&m(_),p&&(p.c(),p.m(t,null))),T[0]&4096&&i.value!==_[12]&&Gn(i,_[12])},d(_){_&&j(e),p&&p.d(),c=!1,vt(u)}}}function Mv(n){let e,t=n[11]?"Purchasing...":"Super Hint (10 ",r,s,i,a=n[11]?"":")",l,c,u,d,m;return{c(){e=M("button"),r=re(t),s=M("img"),l=re(a),At(s.src,i="/drawit/public/coin.png")||A(s,"src",i),A(s,"class","w-4 h-4 inline"),A(e,"class",c="btn btn-outline flex-1 "+(n[2].coins<10||n[11]?"opacity-40 btn-error cursor-not-allowed":"")),e.disabled=u=n[2].coins<10||n[11]},m(p,_){q(p,e,_),V(e,r),V(e,s),V(e,l),d||(m=ye(e,"click",n[15]),d=!0)},p(p,_){_[0]&2048&&t!==(t=p[11]?"Purchasing...":"Super Hint (10 ")&&ve(r,t),_[0]&2048&&a!==(a=p[11]?"":")")&&ve(l,a),_[0]&2052&&c!==(c="btn btn-outline flex-1 "+(p[2].coins<10||p[11]?"opacity-40 btn-error cursor-not-allowed":""))&&A(e,"class",c),_[0]&2052&&u!==(u=p[2].coins<10||p[11])&&(e.disabled=u)},d(p){p&&j(e),d=!1,m()}}}function xv(n){let e,t=n[10]?"Purchasing...":"Hint (5 ",r,s,i,a=n[10]?"":")",l,c,u,d,m;return{c(){e=M("button"),r=re(t),s=M("img"),l=re(a),At(s.src,i="/drawit/public/coin.png")||A(s,"src",i),A(s,"class","w-4 h-4 inline"),A(e,"class",c="btn btn-outline flex-1 "+(n[2].coins<5||n[10]?"opacity-40 btn-error cursor-not-allowed":"")),e.disabled=u=n[2].coins<5||n[10]},m(p,_){q(p,e,_),V(e,r),V(e,s),V(e,l),d||(m=ye(e,"click",n[14]),d=!0)},p(p,_){_[0]&1024&&t!==(t=p[10]?"Purchasing...":"Hint (5 ")&&ve(r,t),_[0]&1024&&a!==(a=p[10]?"":")")&&ve(l,a),_[0]&1028&&c!==(c="btn btn-outline flex-1 "+(p[2].coins<5||p[10]?"opacity-40 btn-error cursor-not-allowed":""))&&A(e,"class",c),_[0]&1028&&u!==(u=p[2].coins<5||p[10])&&(e.disabled=u)},d(p){p&&j(e),d=!1,m()}}}function Ov(n){let e,t,r,s;const i=[Iv,bv],a=[];function l(c,u){return c[3]&&c[2]&&c[0]?0:c[2]&&c[3]?1:-1}return~(t=l(n))&&(r=a[t]=i[t](n)),{c(){e=M("div"),r&&r.c(),A(e,"class","rounded-lg p-9 bg-background flex flex-col justify-center")},m(c,u){q(c,e,u),~t&&a[t].m(e,null),s=!0},p(c,u){let d=t;t=l(c),t===d?~t&&a[t].p(c,u):(r&&(Le(),ee(a[d],1,1,()=>{a[d]=null}),Fe()),~t?(r=a[t],r?r.p(c,u):(r=a[t]=i[t](c),r.c()),W(r,1),r.m(e,null)):r=null)},i(c){s||(W(r),s=!0)},o(c){ee(r),s=!1},d(c){c&&j(e),~t&&a[t].d()}}}function Lv(n,e,t){let r,s,i;Ye(n,Ze,y=>t(2,r=y)),Ye(n,ft,y=>t(3,s=y)),Ye(n,As,y=>t(25,i=y));let a=null,l="",c=null,u=!1,d,m=0,p,_=!1,T=!1,S=!1,k=!1;async function x(y){if(!s||!r||!a||!y.trim()||(t(12,l=""),a.guesses.includes(y)))return;const ge={...a};ge.guesses.push(y);const lt={...s},mn=lt.drawings.findIndex(_t=>!_t.guessed&&_t.artist===ge.artist);mn>=0&&(lt.drawings[mn]=ge,ht(ft,s=lt,s)),Yw(s,r,y).catch(_t=>{console.error("Error submitting guess:",_t)})}async function O(){if(!r||!a||!s||a.hintPurchased||r.coins<5||S)return;t(10,S=!0),await Zw(s,a,r)&&await Dr(r,-5),t(10,S=!1)}async function L(){if(!r||!a||!s||!a.hintPurchased||r.coins<10||k)return;t(11,k=!0),await ev(s,a,r)&&await Dr(r,-10),t(11,k=!1)}function U(){l=this.value,t(12,l)}const te=y=>{y.key==="Enter"&&l.length>0&&x(l)},X=()=>x(l),b=y=>y!==r.name,w=y=>{s&&t(1,c={secretWord:y.secretWord,coins:y.coins,data:"",artist:r.name,guessed:!1,guesses:[],createdAt:new Date,guessedBy:"",hintPurchased:!1,superHintPurchased:!1})},v=async()=>{if(r&&r.coins>=5&&!_){t(8,_=!0);try{await Dr(r,-5),t(6,m++,m),t(7,p=Sc(4))}finally{setTimeout(()=>{t(8,_=!1)},1e3)}}};function I(y){Mr[y?"unshift":"push"](()=>{d=y,t(5,d)})}const E=()=>d.clearCanvas(),C=async()=>{if(c&&s&&!u){t(4,u=!0);const y=d.getImageData(),ge={...c,data:y};s.drawings.push(ge),await _i(s),t(1,c=null),ht(ft,s=null,s),t(4,u=!1)}};return n.$$.update=()=>{if(n.$$.dirty[0]&13&&s&&r){const y=da(s,r.name);t(0,a=y?Jw(y):null),t(9,T=r.name===(a==null?void 0:a.artist))}n.$$.dirty[0]&2&&(c?ht(As,i=!0,i):ht(As,i=!1,i))},t(7,p=Sc(4)),[a,c,r,s,u,d,m,p,_,T,S,k,l,x,O,L,U,te,X,b,w,v,I,E,C]}class Fv extends St{constructor(e){super(),Ct(this,e,Lv,Ov,Et,{},null,[-1,-1])}}function lu(n,e,t){const r=n.slice();return r[16]=e[t],r}function cu(n){let e,t,r;return{c(){e=M("button"),e.textContent="×",A(e,"class","absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-black p-2")},m(s,i){q(s,e,i),t||(r=ye(e,"click",n[8]),t=!0)},p:Q,d(s){s&&j(e),t=!1,r()}}}function Uv(n){let e,t,r=Ae(n[1]),s=[];for(let a=0;a<r.length;a+=1)s[a]=hu(lu(n,r,a));const i=a=>ee(s[a],1,1,()=>{s[a]=null});return{c(){for(let a=0;a<s.length;a+=1)s[a].c();e=Tt()},m(a,l){for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(a,l);q(a,e,l),t=!0},p(a,l){if(l&90){r=Ae(a[1]);let c;for(c=0;c<r.length;c+=1){const u=lu(a,r,c);s[c]?(s[c].p(u,l),W(s[c],1)):(s[c]=hu(u),s[c].c(),W(s[c],1),s[c].m(e.parentNode,e))}for(Le(),c=r.length;c<s.length;c+=1)i(c);Fe()}},i(a){if(!t){for(let l=0;l<r.length;l+=1)W(s[l]);t=!0}},o(a){s=s.filter(Boolean);for(let l=0;l<s.length;l+=1)ee(s[l]);t=!1},d(a){a&&j(e),pt(s,a)}}}function Bv(n){let e;return{c(){e=M("div"),e.textContent="No users found",A(e,"class","text-center py-8 text-black/60")},m(t,r){q(t,e,r)},p:Q,i:Q,o:Q,d(t){t&&j(e)}}}function jv(n){let e;return{c(){e=M("div"),e.innerHTML='<div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>',A(e,"class","flex items-center justify-center py-8")},m(t,r){q(t,e,r)},p:Q,i:Q,o:Q,d(t){t&&j(e)}}}function uu(n){let e,t;function r(...l){return n[9](n[16],...l)}function s(...l){return n[10](n[16],...l)}function i(...l){return n[11](n[16],...l)}function a(){return n[12](n[16])}return e=new ma({props:{name:n[16].name,coins:n[16].coins,showAvatar:!0,subtitle:n[4].filter(r).length>0?`${n[4].filter(s).length} game${n[4].filter(i).length>1?"s":""}`:null,onClick:a}}),{c(){gt(e.$$.fragment)},m(l,c){ot(e,l,c),t=!0},p(l,c){n=l;const u={};c&2&&(u.name=n[16].name),c&2&&(u.coins=n[16].coins),c&18&&(u.subtitle=n[4].filter(r).length>0?`${n[4].filter(s).length} game${n[4].filter(i).length>1?"s":""}`:null),c&2&&(u.onClick=a),e.$set(u)},i(l){t||(W(e.$$.fragment,l),t=!0)},o(l){ee(e.$$.fragment,l),t=!1},d(l){at(e,l)}}}function hu(n){let e,t,r=n[3]&&n[3].name!==n[16].name&&uu(n);return{c(){r&&r.c(),e=Tt()},m(s,i){r&&r.m(s,i),q(s,e,i),t=!0},p(s,i){s[3]&&s[3].name!==s[16].name?r?(r.p(s,i),i&10&&W(r,1)):(r=uu(s),r.c(),W(r,1),r.m(e.parentNode,e)):r&&(Le(),ee(r,1,1,()=>{r=null}),Fe())},i(s){t||(W(r),t=!0)},o(s){ee(r),t=!1},d(s){s&&j(e),r&&r.d(s)}}}function qv(n){let e,t,r,s,i,a,l,c,u,d,m,p,_,T=n[0]&&cu(n);const S=[jv,Bv,Uv],k=[];function x(O,L){return O[2]?0:O[1].length===0?1:2}return u=x(n),d=k[u]=S[u](n),{c(){e=M("div"),t=M("div"),t.innerHTML='<h2 class="text-xl font-bold text-primary">Challenge a friend</h2> <p class="text-sm text-black/60">Tap on a user to start a new game</p>',r=Y(),s=M("div"),i=M("input"),a=Y(),T&&T.c(),l=Y(),c=M("div"),d.c(),A(t,"class","flex flex-col gap-2"),A(i,"type","text"),A(i,"placeholder","Search users..."),A(i,"class","input input-bordered w-full bg-white text-black border-primary rounded-xl text-base px-4 py-3 shadow-sm"),A(i,"autocorrect","off"),A(s,"class","relative"),A(c,"class","flex flex-col w-full gap-2 pt-2 overflow-y-auto"),A(e,"class","flex flex-col gap-4 p-4 pt-24")},m(O,L){q(O,e,L),V(e,t),V(e,r),V(e,s),V(s,i),Gn(i,n[0]),V(s,a),T&&T.m(s,null),V(e,l),V(e,c),k[u].m(c,null),m=!0,p||(_=[ye(i,"input",n[5]),ye(i,"input",n[7])],p=!0)},p(O,[L]){L&1&&i.value!==O[0]&&Gn(i,O[0]),O[0]?T?T.p(O,L):(T=cu(O),T.c(),T.m(s,null)):T&&(T.d(1),T=null);let U=u;u=x(O),u===U?k[u].p(O,L):(Le(),ee(k[U],1,1,()=>{k[U]=null}),Fe(),d=k[u],d?d.p(O,L):(d=k[u]=S[u](O),d.c()),W(d,1),d.m(c,null))},i(O){m||(W(d),m=!0)},o(O){ee(d),m=!1},d(O){O&&j(e),T&&T.d(),k[u].d(),p=!1,vt(_)}}}function $v(n,e,t){let r,s,i;Ye(n,Ze,L=>t(3,r=L)),Ye(n,ft,L=>t(15,s=L)),Ye(n,$r,L=>t(4,i=L));let a="",l=[],c,u=!0,d=!1;function m(){clearTimeout(c),c=setTimeout(async()=>{t(2,u=!0),t(1,l=await Rc(a)),t(2,u=!1)},300)}(async()=>(t(2,u=!0),t(1,l=await Rc("")),t(2,u=!1)))();async function p(L){if(!(!r||d)){d=!0;try{ht(ft,s=await Hw([r.name,L.name]),s)}catch(U){console.error("Error creating game:",U)}finally{d=!1}}}function _(){a=this.value,t(0,a)}return[a,l,u,r,i,m,p,_,()=>{t(0,a=""),m()},(L,U)=>U.users.includes(L.name),(L,U)=>U.users.includes(L.name),(L,U)=>U.users.includes(L.name),L=>p(L)]}class zv extends St{constructor(e){super(),Ct(this,e,$v,qv,Et,{})}}function fu(n,e,t){const r=n.slice();return r[2]=e[t],r}function du(n,e,t){const r=n.slice();return r[5]=e[t],r[7]=t,r}function mu(n,e,t){const r=n.slice();return r[8]=e[t],r}function Hv(n){let e,t=Ae(n[0]),r=[];for(let s=0;s<t.length;s+=1)r[s]=vu(fu(n,t,s));return{c(){e=M("div");for(let s=0;s<r.length;s+=1)r[s].c();A(e,"class","flex flex-col gap-4")},m(s,i){q(s,e,i);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(e,null)},p(s,i){if(i&1){t=Ae(s[0]);let a;for(a=0;a<t.length;a+=1){const l=fu(s,t,a);r[a]?r[a].p(l,i):(r[a]=vu(l),r[a].c(),r[a].m(e,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=t.length}},d(s){s&&j(e),pt(r,s)}}}function Gv(n){let e;return{c(){e=M("div"),e.innerHTML='<span class="text-accent">Loading drawings...</span>',A(e,"class","flex justify-center items-center h-40")},m(t,r){q(t,e,r)},p:Q,d(t){t&&j(e)}}}function pu(n){let e,t,r,s,i,a,l,c,u,d=n[2].artist+"",m,p,_,T,S,k=Ae(Array(n[2].coins)),x=[];for(let v=0;v<k.length;v+=1)x[v]=gu(mu(n,k,v));function O(v,I){return v[2].guessed?Kv:Wv}let L=O(n),U=L(n);function te(v,I){return v[2].guesses.length>0?Xv:Qv}let X=te(n),b=X(n),w=n[2].hintPurchased&&wu(n);return{c(){e=M("div"),t=M("div");for(let v=0;v<x.length;v+=1)x[v].c();r=Y(),s=M("img"),a=Y(),l=M("p"),U.c(),c=re(`
							by
							`),u=M("span"),m=re(d),p=Y(),_=M("p"),b.c(),T=Y(),w&&w.c(),S=Y(),A(t,"class","flex flex-row gap-1 absolute top-2 right-2"),At(s.src,i=`${n[2].data}`)||A(s,"src",i),A(s,"class","w-full h-full object-contain"),A(s,"alt","Drawing"),A(u,"class","font-semibold"),A(l,"class","text-lg text-center py-2 align-middle items-center"),A(_,"class","text-[0.8rem] text-center align-middle items-center w-3/4"),A(e,"class","bg-white/90 p-1 relative rounded-lg w-full max-w-[min(90vw,400px)] flex flex-col items-center justify-center mx-auto border-2 border-primary")},m(v,I){q(v,e,I),V(e,t);for(let E=0;E<x.length;E+=1)x[E]&&x[E].m(t,null);V(e,r),V(e,s),V(e,a),V(e,l),U.m(l,null),V(l,c),V(l,u),V(u,m),V(e,p),V(e,_),b.m(_,null),V(e,T),w&&w.m(e,null),V(e,S)},p(v,I){if(I&1){k=Ae(Array(v[2].coins));let E;for(E=0;E<k.length;E+=1){const C=mu(v,k,E);x[E]?x[E].p(C,I):(x[E]=gu(),x[E].c(),x[E].m(t,null))}for(;E<x.length;E+=1)x[E].d(1);x.length=k.length}I&1&&!At(s.src,i=`${v[2].data}`)&&A(s,"src",i),L===(L=O(v))&&U?U.p(v,I):(U.d(1),U=L(v),U&&(U.c(),U.m(l,c))),I&1&&d!==(d=v[2].artist+"")&&ve(m,d),X===(X=te(v))&&b?b.p(v,I):(b.d(1),b=X(v),b&&(b.c(),b.m(_,null))),v[2].hintPurchased?w?w.p(v,I):(w=wu(v),w.c(),w.m(e,S)):w&&(w.d(1),w=null)},d(v){v&&j(e),pt(x,v),U.d(),b.d(),w&&w.d()}}}function gu(n){let e,t;return{c(){e=M("img"),At(e.src,t="/drawit/public/coin.png")||A(e,"src",t),A(e,"class","w-4 h-4")},m(r,s){q(r,e,s)},p:Q,d(r){r&&j(e)}}}function Wv(n){let e;return{c(){e=M("span"),e.textContent="?",A(e,"class","font-bold text-primary")},m(t,r){q(t,e,r)},p:Q,d(t){t&&j(e)}}}function Kv(n){let e,t=n[2].secretWord+"",r;return{c(){e=M("span"),r=re(t),A(e,"class","font-bold text-primary")},m(s,i){q(s,e,i),V(e,r)},p(s,i){i&1&&t!==(t=s[2].secretWord+"")&&ve(r,t)},d(s){s&&j(e)}}}function Qv(n){let e,t,r=n[2].guessedBy+"",s,i;return{c(){e=M("span"),t=M("span"),s=re(r),i=re(`
									is thinking...`),A(t,"class","font-semibold"),A(e,"class","italic")},m(a,l){q(a,e,l),V(e,t),V(t,s),V(e,i)},p(a,l){l&1&&r!==(r=a[2].guessedBy+"")&&ve(s,r)},d(a){a&&j(e)}}}function Xv(n){let e,t=n[2].guessedBy+"",r,s,i,a,l=!n[2].guessed&&_u(),c=Ae(n[2].guesses),u=[];for(let d=0;d<c.length;d+=1)u[d]=yu(du(n,c,d));return{c(){e=M("span"),r=re(t),s=Y(),l&&l.c(),i=re(`
								guessed:
								`);for(let d=0;d<u.length;d+=1)u[d].c();a=Tt(),A(e,"class","font-semibold")},m(d,m){q(d,e,m),V(e,r),q(d,s,m),l&&l.m(d,m),q(d,i,m);for(let p=0;p<u.length;p+=1)u[p]&&u[p].m(d,m);q(d,a,m)},p(d,m){if(m&1&&t!==(t=d[2].guessedBy+"")&&ve(r,t),d[2].guessed?l&&(l.d(1),l=null):l||(l=_u(),l.c(),l.m(i.parentNode,i)),m&1){c=Ae(d[2].guesses);let p;for(p=0;p<c.length;p+=1){const _=du(d,c,p);u[p]?u[p].p(_,m):(u[p]=yu(_),u[p].c(),u[p].m(a.parentNode,a))}for(;p<u.length;p+=1)u[p].d(1);u.length=c.length}},d(d){d&&(j(e),j(s),j(i),j(a)),l&&l.d(d),pt(u,d)}}}function _u(n){let e;return{c(){e=re("has")},m(t,r){q(t,e,r)},d(t){t&&j(e)}}}function yu(n){let e,t=n[5]+"",r,s=n[7]<n[2].guesses.length-1?", ":"",i;return{c(){e=M("span"),r=re(t),i=re(s),A(e,"class","italic")},m(a,l){q(a,e,l),V(e,r),V(e,i)},p(a,l){l&1&&t!==(t=a[5]+"")&&ve(r,t),l&1&&s!==(s=a[7]<a[2].guesses.length-1?", ":"")&&ve(i,s)},d(a){a&&j(e)}}}function wu(n){let e,t=n[2].hintPurchased?`${n[2].guessedBy} used a Hint`:"",r,s=n[2].superHintPurchased?"... AND a SuperHint!":"",i;return{c(){e=M("p"),r=re(t),i=re(s),A(e,"class","text-[0.8rem] text-secondary flex flex-row py-2 text-center align-middle items-center")},m(a,l){q(a,e,l),V(e,r),V(e,i)},p(a,l){l&1&&t!==(t=a[2].hintPurchased?`${a[2].guessedBy} used a Hint`:"")&&ve(r,t),l&1&&s!==(s=a[2].superHintPurchased?"... AND a SuperHint!":"")&&ve(i,s)},d(a){a&&j(e)}}}function vu(n){let e,t=n[2].data&&n[2].data.length>10&&pu(n);return{c(){t&&t.c(),e=Tt()},m(r,s){t&&t.m(r,s),q(r,e,s)},p(r,s){r[2].data&&r[2].data.length>10?t?t.p(r,s):(t=pu(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(r){r&&j(e),t&&t.d(r)}}}function Yv(n){let e;function t(i,a){return i[1]?Gv:Hv}let r=t(n),s=r(n);return{c(){e=M("div"),s.c(),A(e,"class","p-4")},m(i,a){q(i,e,a),s.m(e,null)},p(i,[a]){r===(r=t(i))&&s?s.p(i,a):(s.d(1),s=r(i),s&&(s.c(),s.m(e,null)))},i:Q,o:Q,d(i){i&&j(e),s.d()}}}function Jv(n,e,t){let r=[],s=!0;return qr(async()=>{console.log("Feed mounted"),t(0,r=await Ww()),console.log("Drawings loaded",r),t(1,s=!1)}),[r,s]}class Zv extends St{constructor(e){super(),Ct(this,e,Jv,Yv,Et,{})}}function Eu(n){var L;let e,t,r,s,i,a,l,c,u=(((L=n[2])==null?void 0:L.coins)||0)+"",d,m,p,_,T,S;function k(U,te){return U[3]?t0:e0}let x=k(n),O=x(n);return{c(){e=M("nav"),t=M("div"),r=M("div"),s=M("div"),i=M("img"),l=Y(),c=M("span"),d=re(u),m=Y(),p=M("span"),p.textContent="coins",_=Y(),O.c(),T=Y(),S=M("div"),At(i.src,a="/drawit/public/coin.gif")||A(i,"src",a),A(i,"class","w-5 h-5"),A(i,"alt","coins"),A(c,"class","text-sm font-medium"),A(s,"class","flex items-center gap-1"),A(p,"class","text-xs text-gray-500"),A(r,"class","flex flex-col items-center"),A(t,"class","flex justify-around items-center max-w-md mx-auto"),A(e,"class","fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2"),A(S,"class","h-20")},m(U,te){q(U,e,te),V(e,t),V(t,r),V(r,s),V(s,i),V(s,l),V(s,c),V(c,d),V(r,m),V(r,p),V(t,_),O.m(t,null),q(U,T,te),q(U,S,te)},p(U,te){var X;te&4&&u!==(u=(((X=U[2])==null?void 0:X.coins)||0)+"")&&ve(d,u),x===(x=k(U))&&O?O.p(U,te):(O.d(1),O=x(U),O&&(O.c(),O.m(t,null)))},d(U){U&&(j(e),j(T),j(S)),O.d()}}}function e0(n){let e,t,r,s,i,a,l,c,u,d,m,p,_,T,S,k,x,O,L,U,te,X,b,w,v,I,E,C;return{c(){e=M("button"),t=Xt("svg"),r=Xt("path"),i=Y(),a=M("span"),l=re("Home"),u=Y(),d=M("button"),m=Xt("svg"),p=Xt("path"),T=Y(),S=M("span"),k=re("New"),O=Y(),L=M("button"),U=Xt("svg"),te=Xt("path"),b=Y(),w=M("span"),v=re("Feed"),A(r,"stroke-linecap","round"),A(r,"stroke-linejoin","round"),A(r,"stroke-width","2"),A(r,"d","M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"),A(t,"xmlns","http://www.w3.org/2000/svg"),A(t,"class",s="h-6 w-6 "+(n[0]==="home"?"text-primary":"text-gray-400")),A(t,"fill","none"),A(t,"viewBox","0 0 24 24"),A(t,"stroke","currentColor"),A(a,"class",c="text-xs "+(n[0]==="home"?"text-primary":"text-gray-500")),A(e,"class","flex flex-col items-center"),A(p,"stroke-linecap","round"),A(p,"stroke-linejoin","round"),A(p,"stroke-width","2"),A(p,"d","M12 4v16m8-8H4"),A(m,"xmlns","http://www.w3.org/2000/svg"),A(m,"class",_="h-6 w-6 "+(n[0]==="new"?"text-primary":"text-gray-400")),A(m,"fill","none"),A(m,"viewBox","0 0 24 24"),A(m,"stroke","currentColor"),A(S,"class",x="text-xs "+(n[0]==="new"?"text-primary":"text-gray-500")),A(d,"class","flex flex-col items-center"),A(te,"stroke-linecap","round"),A(te,"stroke-linejoin","round"),A(te,"stroke-width","2"),A(te,"d","M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"),A(U,"xmlns","http://www.w3.org/2000/svg"),A(U,"class",X="h-6 w-6 "+(n[0]==="feed"?"text-primary":"text-gray-400")),A(U,"fill","none"),A(U,"viewBox","0 0 24 24"),A(U,"stroke","currentColor"),A(w,"class",I="text-xs "+(n[0]==="feed"?"text-primary":"text-gray-500")),A(L,"class","flex flex-col items-center")},m(y,ge){q(y,e,ge),V(e,t),V(t,r),V(e,i),V(e,a),V(a,l),q(y,u,ge),q(y,d,ge),V(d,m),V(m,p),V(d,T),V(d,S),V(S,k),q(y,O,ge),q(y,L,ge),V(L,U),V(U,te),V(L,b),V(L,w),V(w,v),E||(C=[ye(e,"click",n[7]),ye(d,"click",n[8]),ye(L,"click",n[9])],E=!0)},p(y,ge){ge&1&&s!==(s="h-6 w-6 "+(y[0]==="home"?"text-primary":"text-gray-400"))&&A(t,"class",s),ge&1&&c!==(c="text-xs "+(y[0]==="home"?"text-primary":"text-gray-500"))&&A(a,"class",c),ge&1&&_!==(_="h-6 w-6 "+(y[0]==="new"?"text-primary":"text-gray-400"))&&A(m,"class",_),ge&1&&x!==(x="text-xs "+(y[0]==="new"?"text-primary":"text-gray-500"))&&A(S,"class",x),ge&1&&X!==(X="h-6 w-6 "+(y[0]==="feed"?"text-primary":"text-gray-400"))&&A(U,"class",X),ge&1&&I!==(I="text-xs "+(y[0]==="feed"?"text-primary":"text-gray-500"))&&A(w,"class",I)},d(y){y&&(j(e),j(u),j(d),j(O),j(L)),E=!1,vt(C)}}}function t0(n){let e,t,r;return{c(){e=M("button"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg> <span class="text-xs text-primary">Back</span>',A(e,"class","flex flex-col items-center")},m(s,i){q(s,e,i),t||(r=ye(e,"click",n[6]),t=!0)},p:Q,d(s){s&&j(e),t=!1,r()}}}function n0(n){let e,t=!n[1]&&Eu(n);return{c(){t&&t.c(),e=Tt()},m(r,s){t&&t.m(r,s),q(r,e,s)},p(r,[s]){r[1]?t&&(t.d(1),t=null):t?t.p(r,s):(t=Eu(r),t.c(),t.m(e.parentNode,e))},i:Q,o:Q,d(r){r&&j(e),t&&t.d(r)}}}function r0(n,e,t){let r,s,i;Ye(n,As,T=>t(1,r=T)),Ye(n,Ze,T=>t(2,s=T)),Ye(n,ft,T=>t(3,i=T));let{navigate:a}=e,l="home";function c(){const T=new URLSearchParams(window.location.search);t(0,l=T.get("page")||"home")}typeof window<"u"&&(window.addEventListener("popstate",c),c());const u=T=>{t(0,l=T),a(T)},d=()=>{ht(ft,i=null,i),u("home")},m=()=>u("home"),p=()=>u("new"),_=()=>u("feed");return n.$$set=T=>{"navigate"in T&&t(5,a=T.navigate)},[l,r,s,i,u,a,d,m,p,_]}class s0 extends St{constructor(e){super(),Ct(this,e,r0,n0,Et,{navigate:5})}}function Tu(n){let e,t,r,s,i,a,l,c,u,d,m,p;return{c(){e=M("div"),t=M("div"),r=M("h2"),r.textContent="Dev Menu",s=Y(),i=M("div"),a=M("button"),a.textContent="Delete All Users",l=Y(),c=M("button"),u=re("Add 5 Points"),A(r,"class","text-lg font-bold mb-4"),A(a,"class","btn btn-error"),A(c,"class","btn btn-primary"),c.disabled=d=!n[1],A(i,"class","flex flex-col gap-2"),A(t,"class","bg-white rounded-lg shadow-lg p-4 border border-gray-200"),A(e,"class","fixed top-0 right-0 p-4 z-50")},m(_,T){q(_,e,T),V(e,t),V(t,r),V(t,s),V(t,i),V(i,a),V(i,l),V(i,c),V(c,u),m||(p=[ye(a,"click",n[2]),ye(c,"click",n[3])],m=!0)},p(_,T){T&2&&d!==(d=!_[1])&&(c.disabled=d)},d(_){_&&j(e),m=!1,vt(p)}}}function i0(n){let e,t=n[0]&&Tu(n);return{c(){t&&t.c(),e=Tt()},m(r,s){t&&t.m(r,s),q(r,e,s)},p(r,[s]){r[0]?t?t.p(r,s):(t=Tu(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:Q,o:Q,d(r){r&&j(e),t&&t.d(r)}}}function o0(n,e,t){let r;Ye(n,Ze,c=>t(1,r=c));let s=!1;async function i(c){c.key==="\\"&&t(0,s=!s)}async function a(){if(confirm("Are you sure you want to delete ALL users? This cannot be undone!"))try{const c=await Ht(Gt),u=Uw(gi);c.docs.forEach(d=>{u.delete(d.ref)}),await u.commit(),localStorage.removeItem("drawit-user"),localStorage.removeItem("drawit-games"),localStorage.removeItem("drawit-users"),Ze.set(null),alert("All users deleted successfully!"),window.location.reload()}catch(c){console.error("Error deleting users:",c),alert("Error deleting users. Check console for details.")}}async function l(){if(r)try{await Dr(r,5),alert("Added 5 points to current user!")}catch(c){console.error("Error adding points:",c),alert("Error adding points. Check console for details.")}}return qr(()=>(window.addEventListener("keydown",i),()=>{window.removeEventListener("keydown",i)})),[s,r,a,l]}class a0 extends St{constructor(e){super(),Ct(this,e,o0,i0,Et,{})}}function l0(n){let e,t,r,s,i,a,l,c,u;const d=[d0,f0,h0,u0],m=[];function p(_,T){return _[2]?0:_[0]==="home"?1:_[0]==="new"?2:_[0]==="feed"?3:-1}return~(r=p(n))&&(s=m[r]=d[r](n)),a=new s0({props:{navigate:n[3]}}),c=new a0({}),{c(){e=M("main"),t=M("div"),s&&s.c(),i=Y(),gt(a.$$.fragment),l=Y(),gt(c.$$.fragment),A(t,"class","w-full max-w-md mx-auto px-4"),A(e,"class","w-full min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-background-gradient-start to-background-gradient-end text-black pb-20")},m(_,T){q(_,e,T),V(e,t),~r&&m[r].m(t,null),V(e,i),ot(a,e,null),V(e,l),ot(c,e,null),u=!0},p(_,T){let S=r;r=p(_),r===S?~r&&m[r].p(_,T):(s&&(Le(),ee(m[S],1,1,()=>{m[S]=null}),Fe()),~r?(s=m[r],s?s.p(_,T):(s=m[r]=d[r](_),s.c()),W(s,1),s.m(t,null)):s=null)},i(_){u||(W(s),W(a.$$.fragment,_),W(c.$$.fragment,_),u=!0)},o(_){ee(s),ee(a.$$.fragment,_),ee(c.$$.fragment,_),u=!1},d(_){_&&j(e),~r&&m[r].d(),at(a),at(c)}}}function c0(n){let e;return{c(){e=M("div"),e.innerHTML='<div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>',A(e,"class","w-full min-h-screen flex items-center justify-center")},m(t,r){q(t,e,r)},p:Q,i:Q,o:Q,d(t){t&&j(e)}}}function u0(n){let e,t;return e=new Zv({}),{c(){gt(e.$$.fragment)},m(r,s){ot(e,r,s),t=!0},p:Q,i(r){t||(W(e.$$.fragment,r),t=!0)},o(r){ee(e.$$.fragment,r),t=!1},d(r){at(e,r)}}}function h0(n){let e,t;return e=new zv({}),{c(){gt(e.$$.fragment)},m(r,s){ot(e,r,s),t=!0},p:Q,i(r){t||(W(e.$$.fragment,r),t=!0)},o(r){ee(e.$$.fragment,r),t=!1},d(r){at(e,r)}}}function f0(n){let e,t;return e=new wv({props:{navigate:n[3]}}),{c(){gt(e.$$.fragment)},m(r,s){ot(e,r,s),t=!0},p:Q,i(r){t||(W(e.$$.fragment,r),t=!0)},o(r){ee(e.$$.fragment,r),t=!1},d(r){at(e,r)}}}function d0(n){let e,t;return e=new Fv({}),{c(){gt(e.$$.fragment)},m(r,s){ot(e,r,s),t=!0},p:Q,i(r){t||(W(e.$$.fragment,r),t=!0)},o(r){ee(e.$$.fragment,r),t=!1},d(r){at(e,r)}}}function m0(n){let e,t,r,s;const i=[c0,l0],a=[];function l(c,u){return c[1]?0:1}return e=l(n),t=a[e]=i[e](n),{c(){t.c(),r=Tt()},m(c,u){a[e].m(c,u),q(c,r,u),s=!0},p(c,[u]){let d=e;e=l(c),e===d?a[e].p(c,u):(Le(),ee(a[d],1,1,()=>{a[d]=null}),Fe(),t=a[e],t?t.p(c,u):(t=a[e]=i[e](c),t.c()),W(t,1),t.m(r.parentNode,r))},i(c){s||(W(t),s=!0)},o(c){ee(t),s=!1},d(c){c&&j(r),a[e].d(c)}}}function p0(n,e,t){let r;Ye(n,ft,l=>t(2,r=l));let s="home",i=!0;qr(async()=>{await Gw();const l=new URLSearchParams(window.location.search);t(0,s=l.get("page")||"home");const c=l.get("currentGame");if(c){const u=await Cc(c);u&&ht(ft,r=u,r)}window.addEventListener("popstate",async()=>{const u=new URLSearchParams(window.location.search);t(0,s=u.get("page")||"home");const d=u.get("currentGame");if(d){const m=await Cc(d);m&&ht(ft,r=m,r)}else ht(ft,r=null,r)}),t(1,i=!1)});function a(l){const c=new URLSearchParams(window.location.search),u=r==null?void 0:r.id;u?c.set("currentGame",u):c.delete("currentGame"),l!=="home"?c.set("page",l):c.delete("page");const d=c.toString(),m=d?`?${d}`:"/drawit/";window.history.pushState({},"",m),t(0,s=l)}return[s,i,r,a]}class g0 extends St{constructor(e){super(),Ct(this,e,p0,m0,Et,{})}}new g0({target:document.getElementById("app")})});export default _0();
