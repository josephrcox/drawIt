var Ad=Object.defineProperty;var Ed=(n,e,t)=>e in n?Ad(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Oi=(n,e,t)=>Ed(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();function Q(){}function Td(n){return!!n&&(typeof n=="object"||typeof n=="function")&&typeof n.then=="function"}function Iu(n){return n()}function cl(){return Object.create(null)}function vt(n){n.forEach(Iu)}function Ru(n){return typeof n=="function"}function At(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let ps;function It(n,e){return n===e?!0:(ps||(ps=document.createElement("a")),ps.href=e,n===ps.href)}function bd(n){return Object.keys(n).length===0}function Cu(n,...e){if(n==null){for(const r of e)r(void 0);return Q}const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function $s(n){let e;return Cu(n,t=>e=t)(),e}function Je(n,e,t){n.$$.on_destroy.push(Cu(e,t))}function ht(n,e,t){return n.set(t),e}function V(n,e){n.appendChild(e)}function q(n,e,t){n.insertBefore(e,t||null)}function j(n){n.parentNode&&n.parentNode.removeChild(n)}function pt(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function M(n){return document.createElement(n)}function Xt(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function re(n){return document.createTextNode(n)}function J(){return re(" ")}function Et(){return re("")}function ye(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function I(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function Id(n){return Array.from(n.childNodes)}function ve(n,e){e=""+e,n.data!==e&&(n.data=e)}function Gn(n,e){n.value=e??""}function Qi(n,e,t,r){t==null?n.style.removeProperty(e):n.style.setProperty(e,t,"")}function Jt(n,e,t){n.classList.toggle(e,!!t)}let Nr;function Ut(n){Nr=n}function ku(){if(!Nr)throw new Error("Function called outside component initialization");return Nr}function qr(n){ku().$$.on_mount.push(n)}const Un=[],Mr=[];let Hn=[];const ul=[],Rd=Promise.resolve();let Xi=!1;function Cd(){Xi||(Xi=!0,Rd.then(Eo))}function Ji(n){Hn.push(n)}const xi=new Set;let Ln=0;function Eo(){if(Ln!==0)return;const n=Nr;do{try{for(;Ln<Un.length;){const e=Un[Ln];Ln++,Ut(e),kd(e.$$)}}catch(e){throw Un.length=0,Ln=0,e}for(Ut(null),Un.length=0,Ln=0;Mr.length;)Mr.pop()();for(let e=0;e<Hn.length;e+=1){const t=Hn[e];xi.has(t)||(xi.add(t),t())}Hn.length=0}while(Un.length);for(;ul.length;)ul.pop()();Xi=!1,xi.clear(),Ut(n)}function kd(n){if(n.fragment!==null){n.update(),vt(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Ji)}}function Sd(n){const e=[],t=[];Hn.forEach(r=>n.indexOf(r)===-1?e.push(r):t.push(r)),t.forEach(r=>r()),Hn=e}const Es=new Set;let En;function Le(){En={r:0,c:[],p:En}}function Fe(){En.r||vt(En.c),En=En.p}function K(n,e){n&&n.i&&(Es.delete(n),n.i(e))}function ee(n,e,t,r){if(n&&n.o){if(Es.has(n))return;Es.add(n),En.c.push(()=>{Es.delete(n),r&&(t&&n.d(1),r())}),n.o(e)}else r&&r()}function hl(n,e){const t=e.token={};function r(s,i,a,l){if(e.token!==t)return;e.resolved=l;let c=e.ctx;a!==void 0&&(c=c.slice(),c[a]=l);const u=s&&(e.current=s)(c);let d=!1;e.block&&(e.blocks?e.blocks.forEach((m,p)=>{p!==i&&m&&(Le(),ee(m,1,1,()=>{e.blocks[p]===m&&(e.blocks[p]=null)}),Fe())}):e.block.d(1),u.c(),K(u,1),u.m(e.mount(),e.anchor),d=!0),e.block=u,e.blocks&&(e.blocks[i]=u),d&&Eo()}if(Td(n)){const s=ku();if(n.then(i=>{Ut(s),r(e.then,1,e.value,i),Ut(null)},i=>{if(Ut(s),r(e.catch,2,e.error,i),Ut(null),!e.hasCatch)throw i}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,n),!0;e.resolved=n}}function Pd(n,e,t){const r=e.slice(),{resolved:s}=n;n.current===n.then&&(r[n.value]=s),n.current===n.catch&&(r[n.error]=s),n.block.p(r,t)}function Ie(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function gt(n){n&&n.c()}function ot(n,e,t){const{fragment:r,after_update:s}=n.$$;r&&r.m(e,t),Ji(()=>{const i=n.$$.on_mount.map(Iu).filter(Ru);n.$$.on_destroy?n.$$.on_destroy.push(...i):vt(i),n.$$.on_mount=[]}),s.forEach(Ji)}function at(n,e){const t=n.$$;t.fragment!==null&&(Sd(t.after_update),vt(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Vd(n,e){n.$$.dirty[0]===-1&&(Un.push(n),Cd(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function Ct(n,e,t,r,s,i,a=null,l=[-1]){const c=Nr;Ut(n);const u=n.$$={fragment:null,ctx:[],props:i,update:Q,not_equal:s,bound:cl(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:cl(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};a&&a(u.root);let d=!1;if(u.ctx=t?t(n,e.props||{},(m,p,..._)=>{const E=_.length?_[0]:p;return u.ctx&&s(u.ctx[m],u.ctx[m]=E)&&(!u.skip_bound&&u.bound[m]&&u.bound[m](E),d&&Vd(n,m)),p}):[],u.update(),d=!0,vt(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){const m=Id(e.target);u.fragment&&u.fragment.l(m),m.forEach(j)}else u.fragment&&u.fragment.c();e.intro&&K(n.$$.fragment),ot(n,e.target,e.anchor),Eo()}Ut(c)}class kt{constructor(){Oi(this,"$$");Oi(this,"$$set")}$destroy(){at(this,1),this.$destroy=Q}$on(e,t){if(!Ru(t))return Q;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!bd(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Dd="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Dd);const Fn=[];function er(n,e=Q){let t;const r=new Set;function s(l){if(At(n,l)&&(n=l,t)){const c=!Fn.length;for(const u of r)u[1](),Fn.push(u,n);if(c){for(let u=0;u<Fn.length;u+=2)Fn[u][0](Fn[u+1]);Fn.length=0}}}function i(l){s(l(n))}function a(l,c=Q){const u=[l,c];return r.add(u),r.size===1&&(t=e(s,i)||Q),l(n),()=>{r.delete(u),r.size===0&&t&&(t(),t=null)}}return{set:s,update:i,subscribe:a}}const Ze=er(null),zr=er([]),ft=er(null),yt=er({}),Ts=er(!1),bs=er(!1);try{const n=localStorage.getItem("drawIt-user");n&&Ze.set(JSON.parse(n));const e=localStorage.getItem("drawIt-games");e&&zr.set(JSON.parse(e));const t=localStorage.getItem("drawIt-users");t&&yt.set(JSON.parse(t))}catch(n){console.error("Error loading from localStorage:",n)}Ze.subscribe(n=>{n?localStorage.setItem("drawIt-user",JSON.stringify(n)):localStorage.removeItem("drawIt-user")});zr.subscribe(n=>{n?localStorage.setItem("drawIt-games",JSON.stringify(n)):localStorage.removeItem("drawIt-games")});yt.subscribe(n=>{Object.keys(n).length>0?localStorage.setItem("drawIt-users",JSON.stringify(n)):localStorage.removeItem("drawIt-users")});const Nd=()=>{};var fl={};/**
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
 */const Su=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Md=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Pu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,c=s+2<n.length,u=c?n[s+2]:0,d=i>>2,m=(i&3)<<4|l>>4;let p=(l&15)<<2|u>>6,_=u&63;c||(_=64,a||(p=64)),r.push(t[d],t[m],t[p],t[_])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Su(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Md(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const m=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||u==null||m==null)throw new Od;const p=i<<2|l>>4;if(r.push(p),u!==64){const _=l<<4&240|u>>2;if(r.push(_),m!==64){const E=u<<6&192|m;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Od extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xd=function(n){const e=Su(n);return Pu.encodeByteArray(e,!0)},Vs=function(n){return xd(n).replace(/\./g,"")},Ld=function(n){try{return Pu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Fd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ud=()=>Fd().__FIREBASE_DEFAULTS__,Bd=()=>{if(typeof process>"u"||typeof fl>"u")return;const n=fl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},jd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ld(n[1]);return e&&JSON.parse(e)},To=()=>{try{return Nd()||Ud()||Bd()||jd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},qd=n=>{var e,t;return(t=(e=To())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},zd=n=>{const e=qd(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Vu=()=>{var n;return(n=To())===null||n===void 0?void 0:n.config};/**
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
 */class Hd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Wd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Vs(JSON.stringify(t)),Vs(JSON.stringify(a)),""].join(".")}/**
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
 */function Gd(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Kd(){var n;const e=(n=To())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $d(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Qd(){return!Kd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Du(){try{return typeof indexedDB=="object"}catch{return!1}}function Nu(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}function Xd(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Jd="FirebaseError";class hn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Jd,Object.setPrototypeOf(this,hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qs.prototype.create)}}class Qs{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Yd(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new hn(s,l,r)}}function Yd(n,e){return n.replace(Zd,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Zd=/\{\$([^}]+)}/g;function Ds(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(dl(i)&&dl(a)){if(!Ds(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function dl(n){return n!==null&&typeof n=="object"}/**
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
 */const em=1e3,tm=2,nm=4*60*60*1e3,rm=.5;function ml(n,e=em,t=tm){const r=e*Math.pow(t,n),s=Math.round(rm*r*(Math.random()-.5)*2);return Math.min(nm,r+s)}/**
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
 */const An="[DEFAULT]";/**
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
 */class sm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Hd;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(om(e))try{this.getOrInitializeService({instanceIdentifier:An})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=An){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=An){return this.instances.has(e)}getOptions(e=An){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:im(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=An){return this.component?this.component.multipleInstances?e:An:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function im(n){return n===An?void 0:n}function om(n){return n.instantiationMode==="EAGER"}/**
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
 */class am{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new sm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var me;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(me||(me={}));const lm={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},cm=me.INFO,um={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},hm=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=um[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bo{constructor(e){this.name=e,this._logLevel=cm,this._logHandler=hm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const fm=(n,e)=>e.some(t=>n instanceof t);let pl,gl;function dm(){return pl||(pl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mm(){return gl||(gl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mu=new WeakMap,Yi=new WeakMap,Ou=new WeakMap,Li=new WeakMap,Io=new WeakMap;function pm(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Zt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Mu.set(t,n)}).catch(()=>{}),Io.set(e,n),e}function gm(n){if(Yi.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Yi.set(n,e)}let Zi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Yi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ou.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Zt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function _m(n){Zi=n(Zi)}function ym(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Fi(this),e,...t);return Ou.set(r,e.sort?e.sort():[e]),Zt(r)}:mm().includes(n)?function(...e){return n.apply(Fi(this),e),Zt(Mu.get(this))}:function(...e){return Zt(n.apply(Fi(this),e))}}function wm(n){return typeof n=="function"?ym(n):(n instanceof IDBTransaction&&gm(n),fm(n,dm())?new Proxy(n,Zi):n)}function Zt(n){if(n instanceof IDBRequest)return pm(n);if(Li.has(n))return Li.get(n);const e=wm(n);return e!==n&&(Li.set(n,e),Io.set(e,n)),e}const Fi=n=>Io.get(n);function xu(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=Zt(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Zt(a.result),c.oldVersion,c.newVersion,Zt(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const vm=["get","getKey","getAll","getAllKeys","count"],Am=["put","add","delete","clear"],Ui=new Map;function _l(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ui.get(e))return Ui.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Am.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||vm.includes(t)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[t](...l),s&&c.done]))[0]};return Ui.set(e,i),i}_m(n=>({...n,get:(e,t,r)=>_l(e,t)||n.get(e,t,r),has:(e,t)=>!!_l(e,t)||n.has(e,t)}));/**
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
 */class Em{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Tm(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Tm(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const eo="@firebase/app",yl="0.11.3";/**
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
 */const qt=new bo("@firebase/app"),bm="@firebase/app-compat",Im="@firebase/analytics-compat",Rm="@firebase/analytics",Cm="@firebase/app-check-compat",km="@firebase/app-check",Sm="@firebase/auth",Pm="@firebase/auth-compat",Vm="@firebase/database",Dm="@firebase/data-connect",Nm="@firebase/database-compat",Mm="@firebase/functions",Om="@firebase/functions-compat",xm="@firebase/installations",Lm="@firebase/installations-compat",Fm="@firebase/messaging",Um="@firebase/messaging-compat",Bm="@firebase/performance",jm="@firebase/performance-compat",qm="@firebase/remote-config",zm="@firebase/remote-config-compat",Hm="@firebase/storage",Wm="@firebase/storage-compat",Gm="@firebase/firestore",Km="@firebase/vertexai",$m="@firebase/firestore-compat",Qm="firebase",Xm="11.5.0";/**
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
 */const to="[DEFAULT]",Jm={[eo]:"fire-core",[bm]:"fire-core-compat",[Rm]:"fire-analytics",[Im]:"fire-analytics-compat",[km]:"fire-app-check",[Cm]:"fire-app-check-compat",[Sm]:"fire-auth",[Pm]:"fire-auth-compat",[Vm]:"fire-rtdb",[Dm]:"fire-data-connect",[Nm]:"fire-rtdb-compat",[Mm]:"fire-fn",[Om]:"fire-fn-compat",[xm]:"fire-iid",[Lm]:"fire-iid-compat",[Fm]:"fire-fcm",[Um]:"fire-fcm-compat",[Bm]:"fire-perf",[jm]:"fire-perf-compat",[qm]:"fire-rc",[zm]:"fire-rc-compat",[Hm]:"fire-gcs",[Wm]:"fire-gcs-compat",[Gm]:"fire-fst",[$m]:"fire-fst-compat",[Km]:"fire-vertex","fire-js":"fire-js",[Qm]:"fire-js-all"};/**
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
 */const Ns=new Map,Ym=new Map,no=new Map;function wl(n,e){try{n.container.addComponent(e)}catch(t){qt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function rn(n){const e=n.name;if(no.has(e))return qt.debug(`There were multiple attempts to register component ${e}.`),!1;no.set(e,n);for(const t of Ns.values())wl(t,n);for(const t of Ym.values())wl(t,n);return!0}function Ro(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Zm(n){return n==null?!1:n.settings!==void 0}/**
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
 */const ep={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},en=new Qs("app","Firebase",ep);/**
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
 */class tp{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new jt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw en.create("app-deleted",{appName:this._name})}}/**
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
 */const np=Xm;function Lu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:to,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw en.create("bad-app-name",{appName:String(s)});if(t||(t=Vu()),!t)throw en.create("no-options");const i=Ns.get(s);if(i){if(Ds(t,i.options)&&Ds(r,i.config))return i;throw en.create("duplicate-app",{appName:s})}const a=new am(s);for(const c of no.values())a.addComponent(c);const l=new tp(t,r,a);return Ns.set(s,l),l}function rp(n=to){const e=Ns.get(n);if(!e&&n===to&&Vu())return Lu();if(!e)throw en.create("no-app",{appName:n});return e}function Vt(n,e,t){var r;let s=(r=Jm[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qt.warn(l.join(" "));return}rn(new jt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const sp="firebase-heartbeat-database",ip=1,Or="firebase-heartbeat-store";let Bi=null;function Fu(){return Bi||(Bi=xu(sp,ip,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Or)}catch(t){console.warn(t)}}}}).catch(n=>{throw en.create("idb-open",{originalErrorMessage:n.message})})),Bi}async function op(n){try{const t=(await Fu()).transaction(Or),r=await t.objectStore(Or).get(Uu(n));return await t.done,r}catch(e){if(e instanceof hn)qt.warn(e.message);else{const t=en.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qt.warn(t.message)}}}async function vl(n,e){try{const r=(await Fu()).transaction(Or,"readwrite");await r.objectStore(Or).put(e,Uu(n)),await r.done}catch(t){if(t instanceof hn)qt.warn(t.message);else{const r=en.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});qt.warn(r.message)}}}function Uu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ap=1024,lp=30;class cp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new hp(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Al();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>lp){const a=fp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){qt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Al(),{heartbeatsToSend:r,unsentEntries:s}=up(this._heartbeatsCache.heartbeats),i=Vs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return qt.warn(t),""}}}function Al(){return new Date().toISOString().substring(0,10)}function up(n,e=ap){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),El(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),El(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class hp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Du()?Nu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await op(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return vl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return vl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function El(n){return Vs(JSON.stringify({version:2,heartbeats:n})).length}function fp(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function dp(n){rn(new jt("platform-logger",e=>new Em(e),"PRIVATE")),rn(new jt("heartbeat",e=>new cp(e),"PRIVATE")),Vt(eo,yl,n),Vt(eo,yl,"esm2017"),Vt("fire-js","")}dp("");var mp="firebase",pp="11.5.0";/**
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
 */Vt(mp,pp,"app");const Bu="@firebase/installations",Co="0.6.13";/**
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
 */const ju=1e4,qu=`w:${Co}`,zu="FIS_v2",gp="https://firebaseinstallations.googleapis.com/v1",_p=60*60*1e3,yp="installations",wp="Installations";/**
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
 */const vp={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},In=new Qs(yp,wp,vp);function Hu(n){return n instanceof hn&&n.code.includes("request-failed")}/**
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
 */function Wu({projectId:n}){return`${gp}/projects/${n}/installations`}function Gu(n){return{token:n.token,requestStatus:2,expiresIn:Ep(n.expiresIn),creationTime:Date.now()}}async function Ku(n,e){const r=(await e.json()).error;return In.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function $u({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Ap(n,{refreshToken:e}){const t=$u(n);return t.append("Authorization",Tp(e)),t}async function Qu(n){const e=await n();return e.status>=500&&e.status<600?n():e}function Ep(n){return Number(n.replace("s","000"))}function Tp(n){return`${zu} ${n}`}/**
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
 */async function bp({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=Wu(n),s=$u(n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const a={fid:t,authVersion:zu,appId:n.appId,sdkVersion:qu},l={method:"POST",headers:s,body:JSON.stringify(a)},c=await Qu(()=>fetch(r,l));if(c.ok){const u=await c.json();return{fid:u.fid||t,registrationStatus:2,refreshToken:u.refreshToken,authToken:Gu(u.authToken)}}else throw await Ku("Create Installation",c)}/**
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
 */function Xu(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function Ip(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Rp=/^[cdef][\w-]{21}$/,ro="";function Cp(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=kp(n);return Rp.test(t)?t:ro}catch{return ro}}function kp(n){return Ip(n).substr(0,22)}/**
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
 */function Xs(n){return`${n.appName}!${n.appId}`}/**
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
 */const Ju=new Map;function Yu(n,e){const t=Xs(n);Zu(t,e),Sp(t,e)}function Zu(n,e){const t=Ju.get(n);if(t)for(const r of t)r(e)}function Sp(n,e){const t=Pp();t&&t.postMessage({key:n,fid:e}),Vp()}let Tn=null;function Pp(){return!Tn&&"BroadcastChannel"in self&&(Tn=new BroadcastChannel("[Firebase] FID Change"),Tn.onmessage=n=>{Zu(n.data.key,n.data.fid)}),Tn}function Vp(){Ju.size===0&&Tn&&(Tn.close(),Tn=null)}/**
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
 */const Dp="firebase-installations-database",Np=1,Rn="firebase-installations-store";let ji=null;function ko(){return ji||(ji=xu(Dp,Np,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Rn)}}})),ji}async function Ms(n,e){const t=Xs(n),s=(await ko()).transaction(Rn,"readwrite"),i=s.objectStore(Rn),a=await i.get(t);return await i.put(e,t),await s.done,(!a||a.fid!==e.fid)&&Yu(n,e.fid),e}async function eh(n){const e=Xs(n),r=(await ko()).transaction(Rn,"readwrite");await r.objectStore(Rn).delete(e),await r.done}async function Js(n,e){const t=Xs(n),s=(await ko()).transaction(Rn,"readwrite"),i=s.objectStore(Rn),a=await i.get(t),l=e(a);return l===void 0?await i.delete(t):await i.put(l,t),await s.done,l&&(!a||a.fid!==l.fid)&&Yu(n,l.fid),l}/**
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
 */async function So(n){let e;const t=await Js(n.appConfig,r=>{const s=Mp(r),i=Op(n,s);return e=i.registrationPromise,i.installationEntry});return t.fid===ro?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Mp(n){const e=n||{fid:Cp(),registrationStatus:0};return th(e)}function Op(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(In.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=xp(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Lp(n)}:{installationEntry:e}}async function xp(n,e){try{const t=await bp(n,e);return Ms(n.appConfig,t)}catch(t){throw Hu(t)&&t.customData.serverCode===409?await eh(n.appConfig):await Ms(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function Lp(n){let e=await Tl(n.appConfig);for(;e.registrationStatus===1;)await Xu(100),e=await Tl(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await So(n);return r||t}return e}function Tl(n){return Js(n,e=>{if(!e)throw In.create("installation-not-found");return th(e)})}function th(n){return Fp(n)?{fid:n.fid,registrationStatus:0}:n}function Fp(n){return n.registrationStatus===1&&n.registrationTime+ju<Date.now()}/**
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
 */async function Up({appConfig:n,heartbeatServiceProvider:e},t){const r=Bp(n,t),s=Ap(n,t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const a={installation:{sdkVersion:qu,appId:n.appId}},l={method:"POST",headers:s,body:JSON.stringify(a)},c=await Qu(()=>fetch(r,l));if(c.ok){const u=await c.json();return Gu(u)}else throw await Ku("Generate Auth Token",c)}function Bp(n,{fid:e}){return`${Wu(n)}/${e}/authTokens:generate`}/**
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
 */async function Po(n,e=!1){let t;const r=await Js(n.appConfig,i=>{if(!nh(i))throw In.create("not-registered");const a=i.authToken;if(!e&&zp(a))return i;if(a.requestStatus===1)return t=jp(n,e),i;{if(!navigator.onLine)throw In.create("app-offline");const l=Wp(i);return t=qp(n,l),l}});return t?await t:r.authToken}async function jp(n,e){let t=await bl(n.appConfig);for(;t.authToken.requestStatus===1;)await Xu(100),t=await bl(n.appConfig);const r=t.authToken;return r.requestStatus===0?Po(n,e):r}function bl(n){return Js(n,e=>{if(!nh(e))throw In.create("not-registered");const t=e.authToken;return Gp(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function qp(n,e){try{const t=await Up(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await Ms(n.appConfig,r),t}catch(t){if(Hu(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await eh(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ms(n.appConfig,r)}throw t}}function nh(n){return n!==void 0&&n.registrationStatus===2}function zp(n){return n.requestStatus===2&&!Hp(n)}function Hp(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+_p}function Wp(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function Gp(n){return n.requestStatus===1&&n.requestTime+ju<Date.now()}/**
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
 */async function Kp(n){const e=n,{installationEntry:t,registrationPromise:r}=await So(e);return r?r.catch(console.error):Po(e).catch(console.error),t.fid}/**
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
 */async function $p(n,e=!1){const t=n;return await Qp(t),(await Po(t,e)).token}async function Qp(n){const{registrationPromise:e}=await So(n);e&&await e}/**
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
 */function Xp(n){if(!n||!n.options)throw qi("App Configuration");if(!n.name)throw qi("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw qi(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function qi(n){return In.create("missing-app-config-values",{valueName:n})}/**
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
 */const rh="installations",Jp="installations-internal",Yp=n=>{const e=n.getProvider("app").getImmediate(),t=Xp(e),r=Ro(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Zp=n=>{const e=n.getProvider("app").getImmediate(),t=Ro(e,rh).getImmediate();return{getId:()=>Kp(t),getToken:s=>$p(t,s)}};function eg(){rn(new jt(rh,Yp,"PUBLIC")),rn(new jt(Jp,Zp,"PRIVATE"))}eg();Vt(Bu,Co);Vt(Bu,Co,"esm2017");/**
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
 */const Il="analytics",tg="firebase_id",ng="origin",rg=60*1e3,sg="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Vo="https://www.googletagmanager.com/gtag/js";/**
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
 */const st=new bo("@firebase/analytics");/**
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
 */const ig={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},wt=new Qs("analytics","Analytics",ig);/**
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
 */function og(n){if(!n.startsWith(Vo)){const e=wt.create("invalid-gtag-resource",{gtagURL:n});return st.warn(e.message),""}return n}function sh(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function ag(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function lg(n,e){const t=ag("firebase-js-sdk-policy",{createScriptURL:og}),r=document.createElement("script"),s=`${Vo}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function cg(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function ug(n,e,t,r,s,i){const a=r[s];try{if(a)await e[a];else{const c=(await sh(t)).find(u=>u.measurementId===s);c&&await e[c.appId]}}catch(l){st.error(l)}n("config",s,i)}async function hg(n,e,t,r,s){try{let i=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const l=await sh(t);for(const c of a){const u=l.find(m=>m.measurementId===c),d=u&&e[u.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),n("event",r,s||{})}catch(i){st.error(i)}}function fg(n,e,t,r){async function s(i,...a){try{if(i==="event"){const[l,c]=a;await hg(n,e,t,l,c)}else if(i==="config"){const[l,c]=a;await ug(n,e,t,r,l,c)}else if(i==="consent"){const[l,c]=a;n("consent",l,c)}else if(i==="get"){const[l,c,u]=a;n("get",l,c,u)}else if(i==="set"){const[l]=a;n("set",l)}else n(i,...a)}catch(l){st.error(l)}}return s}function dg(n,e,t,r,s){let i=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=fg(i,n,e,t),{gtagCore:i,wrappedGtag:window[s]}}function mg(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Vo)&&t.src.includes(n))return t;return null}/**
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
 */const pg=30,gg=1e3;class _g{constructor(e={},t=gg){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ih=new _g;function yg(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function wg(n){var e;const{appId:t,apiKey:r}=n,s={method:"GET",headers:yg(r)},i=sg.replace("{app-id}",t),a=await fetch(i,s);if(a.status!==200&&a.status!==304){let l="";try{const c=await a.json();!((e=c.error)===null||e===void 0)&&e.message&&(l=c.error.message)}catch{}throw wt.create("config-fetch-failed",{httpStatus:a.status,responseMessage:l})}return a.json()}async function vg(n,e=ih,t){const{appId:r,apiKey:s,measurementId:i}=n.options;if(!r)throw wt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw wt.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new Tg;return setTimeout(async()=>{l.abort()},rg),oh({appId:r,apiKey:s,measurementId:i},a,l,e)}async function oh(n,{throttleEndTimeMillis:e,backoffCount:t},r,s=ih){var i;const{appId:a,measurementId:l}=n;try{await Ag(r,e)}catch(c){if(l)return st.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:a,measurementId:l};throw c}try{const c=await wg(n);return s.deleteThrottleMetadata(a),c}catch(c){const u=c;if(!Eg(u)){if(s.deleteThrottleMetadata(a),l)return st.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:l};throw c}const d=Number((i=u==null?void 0:u.customData)===null||i===void 0?void 0:i.httpStatus)===503?ml(t,s.intervalMillis,pg):ml(t,s.intervalMillis),m={throttleEndTimeMillis:Date.now()+d,backoffCount:t+1};return s.setThrottleMetadata(a,m),st.debug(`Calling attemptFetch again in ${d} millis`),oh(n,m,r,s)}}function Ag(n,e){return new Promise((t,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(i),r(wt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Eg(n){if(!(n instanceof hn)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class Tg{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function bg(n,e,t,r,s){if(s&&s.global){n("event",t,r);return}else{const i=await e,a=Object.assign(Object.assign({},r),{send_to:i});n("event",t,a)}}/**
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
 */async function Ig(){if(Du())try{await Nu()}catch(n){return st.warn(wt.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return st.warn(wt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Rg(n,e,t,r,s,i,a){var l;const c=vg(n);c.then(_=>{t[_.measurementId]=_.appId,n.options.measurementId&&_.measurementId!==n.options.measurementId&&st.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>st.error(_)),e.push(c);const u=Ig().then(_=>{if(_)return r.getId()}),[d,m]=await Promise.all([c,u]);mg(i)||lg(i,d.measurementId),s("js",new Date);const p=(l=a==null?void 0:a.config)!==null&&l!==void 0?l:{};return p[ng]="firebase",p.update=!0,m!=null&&(p[tg]=m),s("config",d.measurementId,p),d.measurementId}/**
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
 */class Cg{constructor(e){this.app=e}_delete(){return delete Cr[this.app.options.appId],Promise.resolve()}}let Cr={},Rl=[];const Cl={};let zi="dataLayer",kg="gtag",kl,ah,Sl=!1;function Sg(){const n=[];if($d()&&n.push("This is a browser extension environment."),Xd()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),t=wt.create("invalid-analytics-context",{errorInfo:e});st.warn(t.message)}}function Pg(n,e,t){Sg();const r=n.options.appId;if(!r)throw wt.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)st.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw wt.create("no-api-key");if(Cr[r]!=null)throw wt.create("already-exists",{id:r});if(!Sl){cg(zi);const{wrappedGtag:i,gtagCore:a}=dg(Cr,Rl,Cl,zi,kg);ah=i,kl=a,Sl=!0}return Cr[r]=Rg(n,Rl,Cl,e,kl,zi,t),new Cg(n)}function Vg(n,e,t,r){n=Rt(n),bg(ah,Cr[n.app.options.appId],e,t,r).catch(s=>st.error(s))}const Pl="@firebase/analytics",Vl="0.10.12";function Dg(){rn(new jt(Il,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Pg(r,s,t)},"PUBLIC")),rn(new jt("analytics-internal",n,"PRIVATE")),Vt(Pl,Vl),Vt(Pl,Vl,"esm2017");function n(e){try{const t=e.getProvider(Il).getImmediate();return{logEvent:(r,s,i)=>Vg(t,r,s,i)}}catch(t){throw wt.create("interop-component-reg-failed",{reason:t})}}}Dg();var Dl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tn,lh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,w){function v(){}v.prototype=w.prototype,T.D=w.prototype,T.prototype=new v,T.prototype.constructor=T,T.C=function(b,A,C){for(var y=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)y[ge-2]=arguments[ge];return w.prototype[A].apply(b,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,w,v){v||(v=0);var b=Array(16);if(typeof w=="string")for(var A=0;16>A;++A)b[A]=w.charCodeAt(v++)|w.charCodeAt(v++)<<8|w.charCodeAt(v++)<<16|w.charCodeAt(v++)<<24;else for(A=0;16>A;++A)b[A]=w[v++]|w[v++]<<8|w[v++]<<16|w[v++]<<24;w=T.g[0],v=T.g[1],A=T.g[2];var C=T.g[3],y=w+(C^v&(A^C))+b[0]+3614090360&4294967295;w=v+(y<<7&4294967295|y>>>25),y=C+(A^w&(v^A))+b[1]+3905402710&4294967295,C=w+(y<<12&4294967295|y>>>20),y=A+(v^C&(w^v))+b[2]+606105819&4294967295,A=C+(y<<17&4294967295|y>>>15),y=v+(w^A&(C^w))+b[3]+3250441966&4294967295,v=A+(y<<22&4294967295|y>>>10),y=w+(C^v&(A^C))+b[4]+4118548399&4294967295,w=v+(y<<7&4294967295|y>>>25),y=C+(A^w&(v^A))+b[5]+1200080426&4294967295,C=w+(y<<12&4294967295|y>>>20),y=A+(v^C&(w^v))+b[6]+2821735955&4294967295,A=C+(y<<17&4294967295|y>>>15),y=v+(w^A&(C^w))+b[7]+4249261313&4294967295,v=A+(y<<22&4294967295|y>>>10),y=w+(C^v&(A^C))+b[8]+1770035416&4294967295,w=v+(y<<7&4294967295|y>>>25),y=C+(A^w&(v^A))+b[9]+2336552879&4294967295,C=w+(y<<12&4294967295|y>>>20),y=A+(v^C&(w^v))+b[10]+4294925233&4294967295,A=C+(y<<17&4294967295|y>>>15),y=v+(w^A&(C^w))+b[11]+2304563134&4294967295,v=A+(y<<22&4294967295|y>>>10),y=w+(C^v&(A^C))+b[12]+1804603682&4294967295,w=v+(y<<7&4294967295|y>>>25),y=C+(A^w&(v^A))+b[13]+4254626195&4294967295,C=w+(y<<12&4294967295|y>>>20),y=A+(v^C&(w^v))+b[14]+2792965006&4294967295,A=C+(y<<17&4294967295|y>>>15),y=v+(w^A&(C^w))+b[15]+1236535329&4294967295,v=A+(y<<22&4294967295|y>>>10),y=w+(A^C&(v^A))+b[1]+4129170786&4294967295,w=v+(y<<5&4294967295|y>>>27),y=C+(v^A&(w^v))+b[6]+3225465664&4294967295,C=w+(y<<9&4294967295|y>>>23),y=A+(w^v&(C^w))+b[11]+643717713&4294967295,A=C+(y<<14&4294967295|y>>>18),y=v+(C^w&(A^C))+b[0]+3921069994&4294967295,v=A+(y<<20&4294967295|y>>>12),y=w+(A^C&(v^A))+b[5]+3593408605&4294967295,w=v+(y<<5&4294967295|y>>>27),y=C+(v^A&(w^v))+b[10]+38016083&4294967295,C=w+(y<<9&4294967295|y>>>23),y=A+(w^v&(C^w))+b[15]+3634488961&4294967295,A=C+(y<<14&4294967295|y>>>18),y=v+(C^w&(A^C))+b[4]+3889429448&4294967295,v=A+(y<<20&4294967295|y>>>12),y=w+(A^C&(v^A))+b[9]+568446438&4294967295,w=v+(y<<5&4294967295|y>>>27),y=C+(v^A&(w^v))+b[14]+3275163606&4294967295,C=w+(y<<9&4294967295|y>>>23),y=A+(w^v&(C^w))+b[3]+4107603335&4294967295,A=C+(y<<14&4294967295|y>>>18),y=v+(C^w&(A^C))+b[8]+1163531501&4294967295,v=A+(y<<20&4294967295|y>>>12),y=w+(A^C&(v^A))+b[13]+2850285829&4294967295,w=v+(y<<5&4294967295|y>>>27),y=C+(v^A&(w^v))+b[2]+4243563512&4294967295,C=w+(y<<9&4294967295|y>>>23),y=A+(w^v&(C^w))+b[7]+1735328473&4294967295,A=C+(y<<14&4294967295|y>>>18),y=v+(C^w&(A^C))+b[12]+2368359562&4294967295,v=A+(y<<20&4294967295|y>>>12),y=w+(v^A^C)+b[5]+4294588738&4294967295,w=v+(y<<4&4294967295|y>>>28),y=C+(w^v^A)+b[8]+2272392833&4294967295,C=w+(y<<11&4294967295|y>>>21),y=A+(C^w^v)+b[11]+1839030562&4294967295,A=C+(y<<16&4294967295|y>>>16),y=v+(A^C^w)+b[14]+4259657740&4294967295,v=A+(y<<23&4294967295|y>>>9),y=w+(v^A^C)+b[1]+2763975236&4294967295,w=v+(y<<4&4294967295|y>>>28),y=C+(w^v^A)+b[4]+1272893353&4294967295,C=w+(y<<11&4294967295|y>>>21),y=A+(C^w^v)+b[7]+4139469664&4294967295,A=C+(y<<16&4294967295|y>>>16),y=v+(A^C^w)+b[10]+3200236656&4294967295,v=A+(y<<23&4294967295|y>>>9),y=w+(v^A^C)+b[13]+681279174&4294967295,w=v+(y<<4&4294967295|y>>>28),y=C+(w^v^A)+b[0]+3936430074&4294967295,C=w+(y<<11&4294967295|y>>>21),y=A+(C^w^v)+b[3]+3572445317&4294967295,A=C+(y<<16&4294967295|y>>>16),y=v+(A^C^w)+b[6]+76029189&4294967295,v=A+(y<<23&4294967295|y>>>9),y=w+(v^A^C)+b[9]+3654602809&4294967295,w=v+(y<<4&4294967295|y>>>28),y=C+(w^v^A)+b[12]+3873151461&4294967295,C=w+(y<<11&4294967295|y>>>21),y=A+(C^w^v)+b[15]+530742520&4294967295,A=C+(y<<16&4294967295|y>>>16),y=v+(A^C^w)+b[2]+3299628645&4294967295,v=A+(y<<23&4294967295|y>>>9),y=w+(A^(v|~C))+b[0]+4096336452&4294967295,w=v+(y<<6&4294967295|y>>>26),y=C+(v^(w|~A))+b[7]+1126891415&4294967295,C=w+(y<<10&4294967295|y>>>22),y=A+(w^(C|~v))+b[14]+2878612391&4294967295,A=C+(y<<15&4294967295|y>>>17),y=v+(C^(A|~w))+b[5]+4237533241&4294967295,v=A+(y<<21&4294967295|y>>>11),y=w+(A^(v|~C))+b[12]+1700485571&4294967295,w=v+(y<<6&4294967295|y>>>26),y=C+(v^(w|~A))+b[3]+2399980690&4294967295,C=w+(y<<10&4294967295|y>>>22),y=A+(w^(C|~v))+b[10]+4293915773&4294967295,A=C+(y<<15&4294967295|y>>>17),y=v+(C^(A|~w))+b[1]+2240044497&4294967295,v=A+(y<<21&4294967295|y>>>11),y=w+(A^(v|~C))+b[8]+1873313359&4294967295,w=v+(y<<6&4294967295|y>>>26),y=C+(v^(w|~A))+b[15]+4264355552&4294967295,C=w+(y<<10&4294967295|y>>>22),y=A+(w^(C|~v))+b[6]+2734768916&4294967295,A=C+(y<<15&4294967295|y>>>17),y=v+(C^(A|~w))+b[13]+1309151649&4294967295,v=A+(y<<21&4294967295|y>>>11),y=w+(A^(v|~C))+b[4]+4149444226&4294967295,w=v+(y<<6&4294967295|y>>>26),y=C+(v^(w|~A))+b[11]+3174756917&4294967295,C=w+(y<<10&4294967295|y>>>22),y=A+(w^(C|~v))+b[2]+718787259&4294967295,A=C+(y<<15&4294967295|y>>>17),y=v+(C^(A|~w))+b[9]+3951481745&4294967295,T.g[0]=T.g[0]+w&4294967295,T.g[1]=T.g[1]+(A+(y<<21&4294967295|y>>>11))&4294967295,T.g[2]=T.g[2]+A&4294967295,T.g[3]=T.g[3]+C&4294967295}r.prototype.u=function(T,w){w===void 0&&(w=T.length);for(var v=w-this.blockSize,b=this.B,A=this.h,C=0;C<w;){if(A==0)for(;C<=v;)s(this,T,C),C+=this.blockSize;if(typeof T=="string"){for(;C<w;)if(b[A++]=T.charCodeAt(C++),A==this.blockSize){s(this,b),A=0;break}}else for(;C<w;)if(b[A++]=T[C++],A==this.blockSize){s(this,b),A=0;break}}this.h=A,this.o+=w},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var w=1;w<T.length-8;++w)T[w]=0;var v=8*this.o;for(w=T.length-8;w<T.length;++w)T[w]=v&255,v/=256;for(this.u(T),T=Array(16),w=v=0;4>w;++w)for(var b=0;32>b;b+=8)T[v++]=this.g[w]>>>b&255;return T};function i(T,w){var v=l;return Object.prototype.hasOwnProperty.call(v,T)?v[T]:v[T]=w(T)}function a(T,w){this.h=w;for(var v=[],b=!0,A=T.length-1;0<=A;A--){var C=T[A]|0;b&&C==w||(v[A]=C,b=!1)}this.g=v}var l={};function c(T){return-128<=T&&128>T?i(T,function(w){return new a([w|0],0>w?-1:0)}):new a([T|0],0>T?-1:0)}function u(T){if(isNaN(T)||!isFinite(T))return m;if(0>T)return S(u(-T));for(var w=[],v=1,b=0;T>=v;b++)w[b]=T/v|0,v*=4294967296;return new a(w,0)}function d(T,w){if(T.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(T.charAt(0)=="-")return S(d(T.substring(1),w));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=u(Math.pow(w,8)),b=m,A=0;A<T.length;A+=8){var C=Math.min(8,T.length-A),y=parseInt(T.substring(A,A+C),w);8>C?(C=u(Math.pow(w,C)),b=b.j(C).add(u(y))):(b=b.j(v),b=b.add(u(y)))}return b}var m=c(0),p=c(1),_=c(16777216);n=a.prototype,n.m=function(){if(k(this))return-S(this).m();for(var T=0,w=1,v=0;v<this.g.length;v++){var b=this.i(v);T+=(0<=b?b:4294967296+b)*w,w*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(E(this))return"0";if(k(this))return"-"+S(this).toString(T);for(var w=u(Math.pow(T,6)),v=this,b="";;){var A=U(v,w).g;v=O(v,A.j(w));var C=((0<v.g.length?v.g[0]:v.h)>>>0).toString(T);if(v=A,E(v))return C+b;for(;6>C.length;)C="0"+C;b=C+b}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function E(T){if(T.h!=0)return!1;for(var w=0;w<T.g.length;w++)if(T.g[w]!=0)return!1;return!0}function k(T){return T.h==-1}n.l=function(T){return T=O(this,T),k(T)?-1:E(T)?0:1};function S(T){for(var w=T.g.length,v=[],b=0;b<w;b++)v[b]=~T.g[b];return new a(v,~T.h).add(p)}n.abs=function(){return k(this)?S(this):this},n.add=function(T){for(var w=Math.max(this.g.length,T.g.length),v=[],b=0,A=0;A<=w;A++){var C=b+(this.i(A)&65535)+(T.i(A)&65535),y=(C>>>16)+(this.i(A)>>>16)+(T.i(A)>>>16);b=y>>>16,C&=65535,y&=65535,v[A]=y<<16|C}return new a(v,v[v.length-1]&-2147483648?-1:0)};function O(T,w){return T.add(S(w))}n.j=function(T){if(E(this)||E(T))return m;if(k(this))return k(T)?S(this).j(S(T)):S(S(this).j(T));if(k(T))return S(this.j(S(T)));if(0>this.l(_)&&0>T.l(_))return u(this.m()*T.m());for(var w=this.g.length+T.g.length,v=[],b=0;b<2*w;b++)v[b]=0;for(b=0;b<this.g.length;b++)for(var A=0;A<T.g.length;A++){var C=this.i(b)>>>16,y=this.i(b)&65535,ge=T.i(A)>>>16,lt=T.i(A)&65535;v[2*b+2*A]+=y*lt,x(v,2*b+2*A),v[2*b+2*A+1]+=C*lt,x(v,2*b+2*A+1),v[2*b+2*A+1]+=y*ge,x(v,2*b+2*A+1),v[2*b+2*A+2]+=C*ge,x(v,2*b+2*A+2)}for(b=0;b<w;b++)v[b]=v[2*b+1]<<16|v[2*b];for(b=w;b<2*w;b++)v[b]=0;return new a(v,0)};function x(T,w){for(;(T[w]&65535)!=T[w];)T[w+1]+=T[w]>>>16,T[w]&=65535,w++}function L(T,w){this.g=T,this.h=w}function U(T,w){if(E(w))throw Error("division by zero");if(E(T))return new L(m,m);if(k(T))return w=U(S(T),w),new L(S(w.g),S(w.h));if(k(w))return w=U(T,S(w)),new L(S(w.g),w.h);if(30<T.g.length){if(k(T)||k(w))throw Error("slowDivide_ only works with positive integers.");for(var v=p,b=w;0>=b.l(T);)v=te(v),b=te(b);var A=X(v,1),C=X(b,1);for(b=X(b,2),v=X(v,2);!E(b);){var y=C.add(b);0>=y.l(T)&&(A=A.add(v),C=y),b=X(b,1),v=X(v,1)}return w=O(T,A.j(w)),new L(A,w)}for(A=m;0<=T.l(w);){for(v=Math.max(1,Math.floor(T.m()/w.m())),b=Math.ceil(Math.log(v)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),C=u(v),y=C.j(w);k(y)||0<y.l(T);)v-=b,C=u(v),y=C.j(w);E(C)&&(C=p),A=A.add(C),T=O(T,y)}return new L(A,T)}n.A=function(T){return U(this,T).h},n.and=function(T){for(var w=Math.max(this.g.length,T.g.length),v=[],b=0;b<w;b++)v[b]=this.i(b)&T.i(b);return new a(v,this.h&T.h)},n.or=function(T){for(var w=Math.max(this.g.length,T.g.length),v=[],b=0;b<w;b++)v[b]=this.i(b)|T.i(b);return new a(v,this.h|T.h)},n.xor=function(T){for(var w=Math.max(this.g.length,T.g.length),v=[],b=0;b<w;b++)v[b]=this.i(b)^T.i(b);return new a(v,this.h^T.h)};function te(T){for(var w=T.g.length+1,v=[],b=0;b<w;b++)v[b]=T.i(b)<<1|T.i(b-1)>>>31;return new a(v,T.h)}function X(T,w){var v=w>>5;w%=32;for(var b=T.g.length-v,A=[],C=0;C<b;C++)A[C]=0<w?T.i(C+v)>>>w|T.i(C+v+1)<<32-w:T.i(C+v);return new a(A,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,lh=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=u,a.fromString=d,tn=a}).apply(typeof Dl<"u"?Dl:typeof self<"u"?self:typeof window<"u"?window:{});var gs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ch,Tr,uh,Is,so,hh,fh,dh;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,h,f){return o==Array.prototype||o==Object.prototype||(o[h]=f.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof gs=="object"&&gs];for(var h=0;h<o.length;++h){var f=o[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(o,h){if(h)e:{var f=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var P=o[g];if(!(P in f))break e;f=f[P]}o=o[o.length-1],g=f[o],h=h(g),h!=g&&h!=null&&e(f,o,{configurable:!0,writable:!0,value:h})}}function i(o,h){o instanceof String&&(o+="");var f=0,g=!1,P={next:function(){if(!g&&f<o.length){var N=f++;return{value:h(N,o[N]),done:!1}}return g=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(o){return o||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var h=typeof o;return h=h!="object"?h:o?Array.isArray(o)?"array":h:"null",h=="array"||h=="object"&&typeof o.length=="number"}function u(o){var h=typeof o;return h=="object"&&o!=null||h=="function"}function d(o,h,f){return o.call.apply(o.bind,arguments)}function m(o,h,f){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,g),o.apply(h,P)}}return function(){return o.apply(h,arguments)}}function p(o,h,f){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:m,p.apply(null,arguments)}function _(o,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function E(o,h){function f(){}f.prototype=h.prototype,o.aa=h.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(g,P,N){for(var z=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)z[Te-2]=arguments[Te];return h.prototype[P].apply(g,z)}}function k(o){const h=o.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=o[g];return f}return[]}function S(o,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const P=o.length||0,N=g.length||0;o.length=P+N;for(let z=0;z<N;z++)o[P+z]=g[z]}else o.push(g)}}class O{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function x(o){return/^[\s\xa0]*$/.test(o)}function L(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function U(o){return U[" "](o),o}U[" "]=function(){};var te=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function X(o,h,f){for(const g in o)h.call(f,o[g],g,o)}function T(o,h){for(const f in o)h.call(void 0,o[f],f,o)}function w(o){const h={};for(const f in o)h[f]=o[f];return h}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(o,h){let f,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(f in g)o[f]=g[f];for(let N=0;N<v.length;N++)f=v[N],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function A(o){var h=1;o=o.split(":");const f=[];for(;0<h&&o.length;)f.push(o.shift()),h--;return o.length&&f.push(o.join(":")),f}function C(o){l.setTimeout(()=>{throw o},0)}function y(){var o=or;let h=null;return o.g&&(h=o.g,o.g=o.g.next,o.g||(o.h=null),h.next=null),h}class ge{constructor(){this.h=this.g=null}add(h,f){const g=lt.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var lt=new O(()=>new mn,o=>o.reset());class mn{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let _t,pn=!1,or=new ge,D=()=>{const o=l.Promise.resolve(void 0);_t=()=>{o.then(R)}};var R=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(f){C(f)}var h=lt;h.j(o),100>h.h&&(h.h++,o.next=h.g,h.g=o)}pn=!1};function G(){this.s=this.s,this.C=this.C}G.prototype.s=!1,G.prototype.ma=function(){this.s||(this.s=!0,this.N())},G.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function W(o,h){this.type=o,this.g=this.target=h,this.defaultPrevented=!1}W.prototype.h=function(){this.defaultPrevented=!0};var ae=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,h=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return o}();function ie(o,h){if(W.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=h,h=o.relatedTarget){if(te){e:{try{U(h.nodeName);var P=!0;break e}catch{}P=!1}P||(h=null)}}else f=="mouseover"?h=o.fromElement:f=="mouseout"&&(h=o.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:ce[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&ie.aa.h.call(this)}}E(ie,W);var ce={2:"touch",3:"pen",4:"mouse"};ie.prototype.h=function(){ie.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Y="closure_listenable_"+(1e6*Math.random()|0),ue=0;function Ae(o,h,f,g,P){this.listener=o,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=P,this.key=++ue,this.da=this.fa=!1}function Ee(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function _e(o){this.src=o,this.g={},this.h=0}_e.prototype.add=function(o,h,f,g,P){var N=o.toString();o=this.g[N],o||(o=this.g[N]=[],this.h++);var z=Pe(o,h,g,P);return-1<z?(h=o[z],f||(h.fa=!1)):(h=new Ae(h,this.src,N,!!g,P),h.fa=f,o.push(h)),h};function be(o,h){var f=h.type;if(f in o.g){var g=o.g[f],P=Array.prototype.indexOf.call(g,h,void 0),N;(N=0<=P)&&Array.prototype.splice.call(g,P,1),N&&(Ee(h),o.g[f].length==0&&(delete o.g[f],o.h--))}}function Pe(o,h,f,g){for(var P=0;P<o.length;++P){var N=o[P];if(!N.da&&N.listener==h&&N.capture==!!f&&N.ha==g)return P}return-1}var he="closure_lm_"+(1e6*Math.random()|0),Ue={};function et(o,h,f,g,P){if(Array.isArray(h)){for(var N=0;N<h.length;N++)et(o,h[N],f,g,P);return null}return f=Yr(f),o&&o[Y]?o.K(h,f,u(g)?!!g.capture:!!g,P):ct(o,h,f,!1,g,P)}function ct(o,h,f,g,P,N){if(!h)throw Error("Invalid event type");var z=u(P)?!!P.capture:!!P,Te=ar(o);if(Te||(o[he]=Te=new _e(o)),f=Te.add(h,f,g,z,N),f.proxy)return f;if(g=Tt(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)ae||(P=z),P===void 0&&(P=!1),o.addEventListener(h.toString(),g,P);else if(o.attachEvent)o.attachEvent(Jr(h.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Tt(){function o(f){return h.call(o.src,o.listener,f)}const h=yi;return o}function St(o,h,f,g,P){if(Array.isArray(h))for(var N=0;N<h.length;N++)St(o,h[N],f,g,P);else g=u(g)?!!g.capture:!!g,f=Yr(f),o&&o[Y]?(o=o.i,h=String(h).toString(),h in o.g&&(N=o.g[h],f=Pe(N,f,g,P),-1<f&&(Ee(N[f]),Array.prototype.splice.call(N,f,1),N.length==0&&(delete o.g[h],o.h--)))):o&&(o=ar(o))&&(h=o.g[h.toString()],o=-1,h&&(o=Pe(h,f,g,P)),(f=-1<o?h[o]:null)&&tt(f))}function tt(o){if(typeof o!="number"&&o&&!o.da){var h=o.src;if(h&&h[Y])be(h.i,o);else{var f=o.type,g=o.proxy;h.removeEventListener?h.removeEventListener(f,g,o.capture):h.detachEvent?h.detachEvent(Jr(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=ar(h))?(be(f,o),f.h==0&&(f.src=null,h[he]=null)):Ee(o)}}}function Jr(o){return o in Ue?Ue[o]:Ue[o]="on"+o}function yi(o,h){if(o.da)o=!0;else{h=new ie(h,this);var f=o.listener,g=o.ha||o.src;o.fa&&tt(o),o=f.call(g,h)}return o}function ar(o){return o=o[he],o instanceof _e?o:null}var Vn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Yr(o){return typeof o=="function"?o:(o[Vn]||(o[Vn]=function(h){return o.handleEvent(h)}),o[Vn])}function Ne(){G.call(this),this.i=new _e(this),this.M=this,this.F=null}E(Ne,G),Ne.prototype[Y]=!0,Ne.prototype.removeEventListener=function(o,h,f,g){St(this,o,h,f,g)};function je(o,h){var f,g=o.F;if(g)for(f=[];g;g=g.F)f.push(g);if(o=o.M,g=h.type||h,typeof h=="string")h=new W(h,o);else if(h instanceof W)h.target=h.target||o;else{var P=h;h=new W(g,o),b(h,P)}if(P=!0,f)for(var N=f.length-1;0<=N;N--){var z=h.g=f[N];P=Dn(z,g,!0,h)&&P}if(z=h.g=o,P=Dn(z,g,!0,h)&&P,P=Dn(z,g,!1,h)&&P,f)for(N=0;N<f.length;N++)z=h.g=f[N],P=Dn(z,g,!1,h)&&P}Ne.prototype.N=function(){if(Ne.aa.N.call(this),this.i){var o=this.i,h;for(h in o.g){for(var f=o.g[h],g=0;g<f.length;g++)Ee(f[g]);delete o.g[h],o.h--}}this.F=null},Ne.prototype.K=function(o,h,f,g){return this.i.add(String(o),h,!1,f,g)},Ne.prototype.L=function(o,h,f,g){return this.i.add(String(o),h,!0,f,g)};function Dn(o,h,f,g){if(h=o.i.g[String(h)],!h)return!0;h=h.concat();for(var P=!0,N=0;N<h.length;++N){var z=h[N];if(z&&!z.da&&z.capture==f){var Te=z.listener,qe=z.ha||z.src;z.fa&&be(o.i,z),P=Te.call(qe,g)!==!1&&P}}return P&&!g.defaultPrevented}function lr(o,h,f){if(typeof o=="function")f&&(o=p(o,f));else if(o&&typeof o.handleEvent=="function")o=p(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(o,h||0)}function cr(o){o.g=lr(()=>{o.g=null,o.i&&(o.i=!1,cr(o))},o.l);const h=o.h;o.h=null,o.m.apply(null,h)}class ur extends G{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:cr(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gn(o){G.call(this),this.h=o,this.g={}}E(gn,G);var Zr=[];function _a(o){X(o.g,function(h,f){this.g.hasOwnProperty(f)&&tt(h)},o),o.g={}}gn.prototype.N=function(){gn.aa.N.call(this),_a(this)},gn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var wi=l.JSON.stringify,Xf=l.JSON.parse,Jf=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function vi(){}vi.prototype.h=null;function ya(o){return o.h||(o.h=o.i())}function wa(){}var hr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ai(){W.call(this,"d")}E(Ai,W);function Ei(){W.call(this,"c")}E(Ei,W);var _n={},va=null;function es(){return va=va||new Ne}_n.La="serverreachability";function Aa(o){W.call(this,_n.La,o)}E(Aa,W);function fr(o){const h=es();je(h,new Aa(h))}_n.STAT_EVENT="statevent";function Ea(o,h){W.call(this,_n.STAT_EVENT,o),this.stat=h}E(Ea,W);function Ye(o){const h=es();je(h,new Ea(h,o))}_n.Ma="timingevent";function Ta(o,h){W.call(this,_n.Ma,o),this.size=h}E(Ta,W);function dr(o,h){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},h)}function mr(){this.g=!0}mr.prototype.xa=function(){this.g=!1};function Yf(o,h,f,g,P,N){o.info(function(){if(o.g)if(N)for(var z="",Te=N.split("&"),qe=0;qe<Te.length;qe++){var pe=Te[qe].split("=");if(1<pe.length){var Ge=pe[0];pe=pe[1];var Ke=Ge.split("_");z=2<=Ke.length&&Ke[1]=="type"?z+(Ge+"="+pe+"&"):z+(Ge+"=redacted&")}}else z=null;else z=N;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+h+`
`+f+`
`+z})}function Zf(o,h,f,g,P,N,z){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+h+`
`+f+`
`+N+" "+z})}function Nn(o,h,f,g){o.info(function(){return"XMLHTTP TEXT ("+h+"): "+td(o,f)+(g?" "+g:"")})}function ed(o,h){o.info(function(){return"TIMEOUT: "+h})}mr.prototype.info=function(){};function td(o,h){if(!o.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var g=f[o];if(!(2>g.length)){var P=g[1];if(Array.isArray(P)&&!(1>P.length)){var N=P[0];if(N!="noop"&&N!="stop"&&N!="close")for(var z=1;z<P.length;z++)P[z]=""}}}}return wi(f)}catch{return h}}var ts={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ba={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ti;function ns(){}E(ns,vi),ns.prototype.g=function(){return new XMLHttpRequest},ns.prototype.i=function(){return{}},Ti=new ns;function Kt(o,h,f,g){this.j=o,this.i=h,this.l=f,this.R=g||1,this.U=new gn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ia}function Ia(){this.i=null,this.g="",this.h=!1}var Ra={},bi={};function Ii(o,h,f){o.L=1,o.v=os(Lt(h)),o.m=f,o.P=!0,Ca(o,null)}function Ca(o,h){o.F=Date.now(),rs(o),o.A=Lt(o.v);var f=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),ja(f.i,"t",g),o.C=0,f=o.j.J,o.h=new Ia,o.g=il(o.j,f?h:null,!o.m),0<o.O&&(o.M=new ur(p(o.Y,o,o.g),o.O)),h=o.U,f=o.g,g=o.ca;var P="readystatechange";Array.isArray(P)||(P&&(Zr[0]=P.toString()),P=Zr);for(var N=0;N<P.length;N++){var z=et(f,P[N],g||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=o.H?w(o.H):{},o.m?(o.u||(o.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,h)):(o.u="GET",o.g.ea(o.A,o.u,null,h)),fr(),Yf(o.i,o.u,o.A,o.l,o.R,o.m)}Kt.prototype.ca=function(o){o=o.target;const h=this.M;h&&Ft(o)==3?h.j():this.Y(o)},Kt.prototype.Y=function(o){try{if(o==this.g)e:{const Ke=Ft(this.g);var h=this.g.Ba();const xn=this.g.Z();if(!(3>Ke)&&(Ke!=3||this.g&&(this.h.h||this.g.oa()||$a(this.g)))){this.J||Ke!=4||h==7||(h==8||0>=xn?fr(3):fr(2)),Ri(this);var f=this.g.Z();this.X=f;t:if(ka(this)){var g=$a(this.g);o="";var P=g.length,N=Ft(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yn(this),pr(this);var z="";break t}this.h.i=new l.TextDecoder}for(h=0;h<P;h++)this.h.h=!0,o+=this.h.i.decode(g[h],{stream:!(N&&h==P-1)});g.length=0,this.h.g+=o,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=f==200,Zf(this.i,this.u,this.A,this.l,this.R,Ke,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Te,qe=this.g;if((Te=qe.g?qe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(Te)){var pe=Te;break t}}pe=null}if(f=pe)Nn(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ci(this,f);else{this.o=!1,this.s=3,Ye(12),yn(this),pr(this);break e}}if(this.P){f=!0;let bt;for(;!this.J&&this.C<z.length;)if(bt=nd(this,z),bt==bi){Ke==4&&(this.s=4,Ye(14),f=!1),Nn(this.i,this.l,null,"[Incomplete Response]");break}else if(bt==Ra){this.s=4,Ye(15),Nn(this.i,this.l,z,"[Invalid Chunk]"),f=!1;break}else Nn(this.i,this.l,bt,null),Ci(this,bt);if(ka(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ke!=4||z.length!=0||this.h.h||(this.s=1,Ye(16),f=!1),this.o=this.o&&f,!f)Nn(this.i,this.l,z,"[Invalid Chunked Response]"),yn(this),pr(this);else if(0<z.length&&!this.W){this.W=!0;var Ge=this.j;Ge.g==this&&Ge.ba&&!Ge.M&&(Ge.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Ni(Ge),Ge.M=!0,Ye(11))}}else Nn(this.i,this.l,z,null),Ci(this,z);Ke==4&&yn(this),this.o&&!this.J&&(Ke==4?tl(this.j,this):(this.o=!1,rs(this)))}else wd(this.g),f==400&&0<z.indexOf("Unknown SID")?(this.s=3,Ye(12)):(this.s=0,Ye(13)),yn(this),pr(this)}}}catch{}finally{}};function ka(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function nd(o,h){var f=o.C,g=h.indexOf(`
`,f);return g==-1?bi:(f=Number(h.substring(f,g)),isNaN(f)?Ra:(g+=1,g+f>h.length?bi:(h=h.slice(g,g+f),o.C=g+f,h)))}Kt.prototype.cancel=function(){this.J=!0,yn(this)};function rs(o){o.S=Date.now()+o.I,Sa(o,o.I)}function Sa(o,h){if(o.B!=null)throw Error("WatchDog timer not null");o.B=dr(p(o.ba,o),h)}function Ri(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Kt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(ed(this.i,this.A),this.L!=2&&(fr(),Ye(17)),yn(this),this.s=2,pr(this)):Sa(this,this.S-o)};function pr(o){o.j.G==0||o.J||tl(o.j,o)}function yn(o){Ri(o);var h=o.M;h&&typeof h.ma=="function"&&h.ma(),o.M=null,_a(o.U),o.g&&(h=o.g,o.g=null,h.abort(),h.ma())}function Ci(o,h){try{var f=o.j;if(f.G!=0&&(f.g==o||ki(f.h,o))){if(!o.K&&ki(f.h,o)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)fs(f),us(f);else break e;Di(f),Ye(18)}}else f.za=P[1],0<f.za-f.T&&37500>P[2]&&f.F&&f.v==0&&!f.C&&(f.C=dr(p(f.Za,f),6e3));if(1>=Da(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else vn(f,11)}else if((o.K||f.g==o)&&fs(f),!x(h))for(P=f.Da.g.parse(h),h=0;h<P.length;h++){let pe=P[h];if(f.T=pe[0],pe=pe[1],f.G==2)if(pe[0]=="c"){f.K=pe[1],f.ia=pe[2];const Ge=pe[3];Ge!=null&&(f.la=Ge,f.j.info("VER="+f.la));const Ke=pe[4];Ke!=null&&(f.Aa=Ke,f.j.info("SVER="+f.Aa));const xn=pe[5];xn!=null&&typeof xn=="number"&&0<xn&&(g=1.5*xn,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const bt=o.g;if(bt){const ms=bt.g?bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ms){var N=g.h;N.g||ms.indexOf("spdy")==-1&&ms.indexOf("quic")==-1&&ms.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Si(N,N.h),N.h=null))}if(g.D){const Mi=bt.g?bt.g.getResponseHeader("X-HTTP-Session-Id"):null;Mi&&(g.ya=Mi,Re(g.I,g.D,Mi))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var z=o;if(g.qa=sl(g,g.J?g.ia:null,g.W),z.K){Na(g.h,z);var Te=z,qe=g.L;qe&&(Te.I=qe),Te.B&&(Ri(Te),rs(Te)),g.g=z}else Za(g);0<f.i.length&&hs(f)}else pe[0]!="stop"&&pe[0]!="close"||vn(f,7);else f.G==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?vn(f,7):Vi(f):pe[0]!="noop"&&f.l&&f.l.ta(pe),f.v=0)}}fr(4)}catch{}}var rd=class{constructor(o,h){this.g=o,this.map=h}};function Pa(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Va(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Da(o){return o.h?1:o.g?o.g.size:0}function ki(o,h){return o.h?o.h==h:o.g?o.g.has(h):!1}function Si(o,h){o.g?o.g.add(h):o.h=h}function Na(o,h){o.h&&o.h==h?o.h=null:o.g&&o.g.has(h)&&o.g.delete(h)}Pa.prototype.cancel=function(){if(this.i=Ma(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ma(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let h=o.i;for(const f of o.g.values())h=h.concat(f.D);return h}return k(o.i)}function sd(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var h=[],f=o.length,g=0;g<f;g++)h.push(o[g]);return h}h=[],f=0;for(g in o)h[f++]=o[g];return h}function id(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var h=[];o=o.length;for(var f=0;f<o;f++)h.push(f);return h}h=[],f=0;for(const g in o)h[f++]=g;return h}}}function Oa(o,h){if(o.forEach&&typeof o.forEach=="function")o.forEach(h,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,h,void 0);else for(var f=id(o),g=sd(o),P=g.length,N=0;N<P;N++)h.call(void 0,g[N],f&&f[N],o)}var xa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function od(o,h){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var g=o[f].indexOf("="),P=null;if(0<=g){var N=o[f].substring(0,g);P=o[f].substring(g+1)}else N=o[f];h(N,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function wn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof wn){this.h=o.h,ss(this,o.j),this.o=o.o,this.g=o.g,is(this,o.s),this.l=o.l;var h=o.i,f=new yr;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),La(this,f),this.m=o.m}else o&&(h=String(o).match(xa))?(this.h=!1,ss(this,h[1]||"",!0),this.o=gr(h[2]||""),this.g=gr(h[3]||"",!0),is(this,h[4]),this.l=gr(h[5]||"",!0),La(this,h[6]||"",!0),this.m=gr(h[7]||"")):(this.h=!1,this.i=new yr(null,this.h))}wn.prototype.toString=function(){var o=[],h=this.j;h&&o.push(_r(h,Fa,!0),":");var f=this.g;return(f||h=="file")&&(o.push("//"),(h=this.o)&&o.push(_r(h,Fa,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(_r(f,f.charAt(0)=="/"?cd:ld,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",_r(f,hd)),o.join("")};function Lt(o){return new wn(o)}function ss(o,h,f){o.j=f?gr(h,!0):h,o.j&&(o.j=o.j.replace(/:$/,""))}function is(o,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);o.s=h}else o.s=null}function La(o,h,f){h instanceof yr?(o.i=h,fd(o.i,o.h)):(f||(h=_r(h,ud)),o.i=new yr(h,o.h))}function Re(o,h,f){o.i.set(h,f)}function os(o){return Re(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function gr(o,h){return o?h?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function _r(o,h,f){return typeof o=="string"?(o=encodeURI(o).replace(h,ad),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function ad(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Fa=/[#\/\?@]/g,ld=/[#\?:]/g,cd=/[#\?]/g,ud=/[#\?@]/g,hd=/#/g;function yr(o,h){this.h=this.g=null,this.i=o||null,this.j=!!h}function $t(o){o.g||(o.g=new Map,o.h=0,o.i&&od(o.i,function(h,f){o.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}n=yr.prototype,n.add=function(o,h){$t(this),this.i=null,o=Mn(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(h),this.h+=1,this};function Ua(o,h){$t(o),h=Mn(o,h),o.g.has(h)&&(o.i=null,o.h-=o.g.get(h).length,o.g.delete(h))}function Ba(o,h){return $t(o),h=Mn(o,h),o.g.has(h)}n.forEach=function(o,h){$t(this),this.g.forEach(function(f,g){f.forEach(function(P){o.call(h,P,g,this)},this)},this)},n.na=function(){$t(this);const o=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const P=o[g];for(let N=0;N<P.length;N++)f.push(h[g])}return f},n.V=function(o){$t(this);let h=[];if(typeof o=="string")Ba(this,o)&&(h=h.concat(this.g.get(Mn(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)h=h.concat(o[f])}return h},n.set=function(o,h){return $t(this),this.i=null,o=Mn(this,o),Ba(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[h]),this.h+=1,this},n.get=function(o,h){return o?(o=this.V(o),0<o.length?String(o[0]):h):h};function ja(o,h,f){Ua(o,h),0<f.length&&(o.i=null,o.g.set(Mn(o,h),k(f)),o.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const N=encodeURIComponent(String(g)),z=this.V(g);for(g=0;g<z.length;g++){var P=N;z[g]!==""&&(P+="="+encodeURIComponent(String(z[g]))),o.push(P)}}return this.i=o.join("&")};function Mn(o,h){return h=String(h),o.j&&(h=h.toLowerCase()),h}function fd(o,h){h&&!o.j&&($t(o),o.i=null,o.g.forEach(function(f,g){var P=g.toLowerCase();g!=P&&(Ua(this,g),ja(this,P,f))},o)),o.j=h}function dd(o,h){const f=new mr;if(l.Image){const g=new Image;g.onload=_(Qt,f,"TestLoadImage: loaded",!0,h,g),g.onerror=_(Qt,f,"TestLoadImage: error",!1,h,g),g.onabort=_(Qt,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=_(Qt,f,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else h(!1)}function md(o,h){const f=new mr,g=new AbortController,P=setTimeout(()=>{g.abort(),Qt(f,"TestPingServer: timeout",!1,h)},1e4);fetch(o,{signal:g.signal}).then(N=>{clearTimeout(P),N.ok?Qt(f,"TestPingServer: ok",!0,h):Qt(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(P),Qt(f,"TestPingServer: error",!1,h)})}function Qt(o,h,f,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(f)}catch{}}function pd(){this.g=new Jf}function gd(o,h,f){const g=f||"";try{Oa(o,function(P,N){let z=P;u(P)&&(z=wi(P)),h.push(g+N+"="+encodeURIComponent(z))})}catch(P){throw h.push(g+"type="+encodeURIComponent("_badmap")),P}}function as(o){this.l=o.Ub||null,this.j=o.eb||!1}E(as,vi),as.prototype.g=function(){return new ls(this.l,this.j)},as.prototype.i=function(o){return function(){return o}}({});function ls(o,h){Ne.call(this),this.D=o,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}E(ls,Ne),n=ls.prototype,n.open=function(o,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=h,this.readyState=1,vr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(h.body=o),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,wr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,vr(this)),this.g&&(this.readyState=3,vr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;qa(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function qa(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var h=o.value?o.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!o.done}))&&(this.response=this.responseText+=h)}o.done?wr(this):vr(this),this.readyState==3&&qa(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,wr(this))},n.Qa=function(o){this.g&&(this.response=o,wr(this))},n.ga=function(){this.g&&wr(this)};function wr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,vr(o)}n.setRequestHeader=function(o,h){this.u.append(o,h)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=h.next();return o.join(`\r
`)};function vr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ls.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function za(o){let h="";return X(o,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function Pi(o,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=za(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):Re(o,h,f))}function Se(o){Ne.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}E(Se,Ne);var _d=/^https?$/i,yd=["POST","PUT"];n=Se.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);h=h?h.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ti.g(),this.v=this.o?ya(this.o):ya(Ti),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(h,String(o),!0),this.B=!1}catch(N){Ha(this,N);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)f.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const N of g.keys())f.set(N,g.get(N));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(N=>N.toLowerCase()=="content-type"),P=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(yd,h,void 0))||g||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,z]of f)this.g.setRequestHeader(N,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ka(this),this.u=!0,this.g.send(o),this.u=!1}catch(N){Ha(this,N)}};function Ha(o,h){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=h,o.m=5,Wa(o),cs(o)}function Wa(o){o.A||(o.A=!0,je(o,"complete"),je(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,je(this,"complete"),je(this,"abort"),cs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),cs(this,!0)),Se.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ga(this):this.bb())},n.bb=function(){Ga(this)};function Ga(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Ft(o)!=4||o.Z()!=2)){if(o.u&&Ft(o)==4)lr(o.Ea,0,o);else if(je(o,"readystatechange"),Ft(o)==4){o.h=!1;try{const z=o.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=z===0){var P=String(o.D).match(xa)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),g=!_d.test(P?P.toLowerCase():"")}f=g}if(f)je(o,"complete"),je(o,"success");else{o.m=6;try{var N=2<Ft(o)?o.g.statusText:""}catch{N=""}o.l=N+" ["+o.Z()+"]",Wa(o)}}finally{cs(o)}}}}function cs(o,h){if(o.g){Ka(o);const f=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,h||je(o,"ready");try{f.onreadystatechange=g}catch{}}}function Ka(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Ft(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Ft(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var h=this.g.responseText;return o&&h.indexOf(o)==0&&(h=h.substring(o.length)),Xf(h)}};function $a(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function wd(o){const h={};o=(o.g&&2<=Ft(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(x(o[g]))continue;var f=A(o[g]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const N=h[P]||[];h[P]=N,N.push(f)}T(h,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ar(o,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||h}function Qa(o){this.Aa=0,this.i=[],this.j=new mr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ar("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ar("baseRetryDelayMs",5e3,o),this.cb=Ar("retryDelaySeedMs",1e4,o),this.Wa=Ar("forwardChannelMaxRetries",2,o),this.wa=Ar("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Pa(o&&o.concurrentRequestLimit),this.Da=new pd,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Qa.prototype,n.la=8,n.G=1,n.connect=function(o,h,f,g){Ye(0),this.W=o,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=sl(this,null,this.W),hs(this)};function Vi(o){if(Xa(o),o.G==3){var h=o.U++,f=Lt(o.I);if(Re(f,"SID",o.K),Re(f,"RID",h),Re(f,"TYPE","terminate"),Er(o,f),h=new Kt(o,o.j,h),h.L=2,h.v=os(Lt(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=il(h.j,null),h.g.ea(h.v)),h.F=Date.now(),rs(h)}rl(o)}function us(o){o.g&&(Ni(o),o.g.cancel(),o.g=null)}function Xa(o){us(o),o.u&&(l.clearTimeout(o.u),o.u=null),fs(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function hs(o){if(!Va(o.h)&&!o.s){o.s=!0;var h=o.Ga;_t||D(),pn||(_t(),pn=!0),or.add(h,o),o.B=0}}function vd(o,h){return Da(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=h.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=dr(p(o.Ga,o,h),nl(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const P=new Kt(this,this.j,o);let N=this.o;if(this.S&&(N?(N=w(N),b(N,this.S)):N=this.S),this.m!==null||this.O||(P.H=N,N=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Ya(this,P,h),f=Lt(this.I),Re(f,"RID",o),Re(f,"CVER",22),this.D&&Re(f,"X-HTTP-Session-Id",this.D),Er(this,f),N&&(this.O?h="headers="+encodeURIComponent(String(za(N)))+"&"+h:this.m&&Pi(f,this.m,N)),Si(this.h,P),this.Ua&&Re(f,"TYPE","init"),this.P?(Re(f,"$req",h),Re(f,"SID","null"),P.T=!0,Ii(P,f,null)):Ii(P,f,h),this.G=2}}else this.G==3&&(o?Ja(this,o):this.i.length==0||Va(this.h)||Ja(this))};function Ja(o,h){var f;h?f=h.l:f=o.U++;const g=Lt(o.I);Re(g,"SID",o.K),Re(g,"RID",f),Re(g,"AID",o.T),Er(o,g),o.m&&o.o&&Pi(g,o.m,o.o),f=new Kt(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),h&&(o.i=h.D.concat(o.i)),h=Ya(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Si(o.h,f),Ii(f,g,h)}function Er(o,h){o.H&&X(o.H,function(f,g){Re(h,g,f)}),o.l&&Oa({},function(f,g){Re(h,g,f)})}function Ya(o,h,f){f=Math.min(o.i.length,f);var g=o.l?p(o.l.Na,o.l,o):null;e:{var P=o.i;let N=-1;for(;;){const z=["count="+f];N==-1?0<f?(N=P[0].g,z.push("ofs="+N)):N=0:z.push("ofs="+N);let Te=!0;for(let qe=0;qe<f;qe++){let pe=P[qe].g;const Ge=P[qe].map;if(pe-=N,0>pe)N=Math.max(0,P[qe].g-100),Te=!1;else try{gd(Ge,z,"req"+pe+"_")}catch{g&&g(Ge)}}if(Te){g=z.join("&");break e}}}return o=o.i.splice(0,f),h.D=o,g}function Za(o){if(!o.g&&!o.u){o.Y=1;var h=o.Fa;_t||D(),pn||(_t(),pn=!0),or.add(h,o),o.v=0}}function Di(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=dr(p(o.Fa,o),nl(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,el(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=dr(p(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ye(10),us(this),el(this))};function Ni(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function el(o){o.g=new Kt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var h=Lt(o.qa);Re(h,"RID","rpc"),Re(h,"SID",o.K),Re(h,"AID",o.T),Re(h,"CI",o.F?"0":"1"),!o.F&&o.ja&&Re(h,"TO",o.ja),Re(h,"TYPE","xmlhttp"),Er(o,h),o.m&&o.o&&Pi(h,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=os(Lt(h)),f.m=null,f.P=!0,Ca(f,o)}n.Za=function(){this.C!=null&&(this.C=null,us(this),Di(this),Ye(19))};function fs(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function tl(o,h){var f=null;if(o.g==h){fs(o),Ni(o),o.g=null;var g=2}else if(ki(o.h,h))f=h.D,Na(o.h,h),g=1;else return;if(o.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var P=o.B;g=es(),je(g,new Ta(g,f)),hs(o)}else Za(o);else if(P=h.s,P==3||P==0&&0<h.X||!(g==1&&vd(o,h)||g==2&&Di(o)))switch(f&&0<f.length&&(h=o.h,h.i=h.i.concat(f)),P){case 1:vn(o,5);break;case 4:vn(o,10);break;case 3:vn(o,6);break;default:vn(o,2)}}}function nl(o,h){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*h}function vn(o,h){if(o.j.info("Error code "+h),h==2){var f=p(o.fb,o),g=o.Xa;const P=!g;g=new wn(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ss(g,"https"),os(g),P?dd(g.toString(),f):md(g.toString(),f)}else Ye(2);o.G=0,o.l&&o.l.sa(h),rl(o),Xa(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ye(2)):(this.j.info("Failed to ping google.com"),Ye(1))};function rl(o){if(o.G=0,o.ka=[],o.l){const h=Ma(o.h);(h.length!=0||o.i.length!=0)&&(S(o.ka,h),S(o.ka,o.i),o.h.i.length=0,k(o.i),o.i.length=0),o.l.ra()}}function sl(o,h,f){var g=f instanceof wn?Lt(f):new wn(f);if(g.g!="")h&&(g.g=h+"."+g.g),is(g,g.s);else{var P=l.location;g=P.protocol,h=h?h+"."+P.hostname:P.hostname,P=+P.port;var N=new wn(null);g&&ss(N,g),h&&(N.g=h),P&&is(N,P),f&&(N.l=f),g=N}return f=o.D,h=o.ya,f&&h&&Re(g,f,h),Re(g,"VER",o.la),Er(o,g),g}function il(o,h,f){if(h&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=o.Ca&&!o.pa?new Se(new as({eb:f})):new Se(o.pa),h.Ha(o.J),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ol(){}n=ol.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ds(){}ds.prototype.g=function(o,h){return new ut(o,h)};function ut(o,h){Ne.call(this),this.g=new Qa(h),this.l=o,this.h=h&&h.messageUrlParams||null,o=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(o?o["X-WebChannel-Content-Type"]=h.messageContentType:o={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(o?o["X-WebChannel-Client-Profile"]=h.va:o={"X-WebChannel-Client-Profile":h.va}),this.g.S=o,(o=h&&h.Sb)&&!x(o)&&(this.g.m=o),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!x(h)&&(this.g.D=h,o=this.h,o!==null&&h in o&&(o=this.h,h in o&&delete o[h])),this.j=new On(this)}E(ut,Ne),ut.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ut.prototype.close=function(){Vi(this.g)},ut.prototype.o=function(o){var h=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=wi(o),o=f);h.i.push(new rd(h.Ya++,o)),h.G==3&&hs(h)},ut.prototype.N=function(){this.g.l=null,delete this.j,Vi(this.g),delete this.g,ut.aa.N.call(this)};function al(o){Ai.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var h=o.__sm__;if(h){e:{for(const f in h){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,h=h!==null&&o in h?h[o]:void 0),this.data=h}else this.data=o}E(al,Ai);function ll(){Ei.call(this),this.status=1}E(ll,Ei);function On(o){this.g=o}E(On,ol),On.prototype.ua=function(){je(this.g,"a")},On.prototype.ta=function(o){je(this.g,new al(o))},On.prototype.sa=function(o){je(this.g,new ll)},On.prototype.ra=function(){je(this.g,"b")},ds.prototype.createWebChannel=ds.prototype.g,ut.prototype.send=ut.prototype.o,ut.prototype.open=ut.prototype.m,ut.prototype.close=ut.prototype.close,dh=function(){return new ds},fh=function(){return es()},hh=_n,so={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ts.NO_ERROR=0,ts.TIMEOUT=8,ts.HTTP_ERROR=6,Is=ts,ba.COMPLETE="complete",uh=ba,wa.EventType=hr,hr.OPEN="a",hr.CLOSE="b",hr.ERROR="c",hr.MESSAGE="d",Ne.prototype.listen=Ne.prototype.K,Tr=wa,Se.prototype.listenOnce=Se.prototype.L,Se.prototype.getLastError=Se.prototype.Ka,Se.prototype.getLastErrorCode=Se.prototype.Ba,Se.prototype.getStatus=Se.prototype.Z,Se.prototype.getResponseJson=Se.prototype.Oa,Se.prototype.getResponseText=Se.prototype.oa,Se.prototype.send=Se.prototype.ea,Se.prototype.setWithCredentials=Se.prototype.Ha,ch=Se}).apply(typeof gs<"u"?gs:typeof self<"u"?self:typeof window<"u"?window:{});const Nl="@firebase/firestore",Ml="4.7.10";/**
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
 */const Cn=new bo("@firebase/firestore");function Bn(){return Cn.logLevel}function H(n,...e){if(Cn.logLevel<=me.DEBUG){const t=e.map(Do);Cn.debug(`Firestore (${tr}): ${n}`,...t)}}function zt(n,...e){if(Cn.logLevel<=me.ERROR){const t=e.map(Do);Cn.error(`Firestore (${tr}): ${n}`,...t)}}function Kn(n,...e){if(Cn.logLevel<=me.WARN){const t=e.map(Do);Cn.warn(`Firestore (${tr}): ${n}`,...t)}}function Do(n){if(typeof n=="string")return n;try{/**
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
 */function ne(n="Unexpected state"){const e=`FIRESTORE (${tr}) INTERNAL ASSERTION FAILED: `+n;throw zt(e),new Error(e)}function we(n,e){n||ne()}function oe(n,e){return n}/**
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
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends hn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class mh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ng{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Qe.UNAUTHENTICATED))}shutdown(){}}class Mg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Og{constructor(e){this.t=e,this.currentUser=Qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){we(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new Bt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Bt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Bt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(we(typeof r.accessToken=="string"),new mh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return we(e===null||typeof e=="string"),new Qe(e)}}class xg{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Qe.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Lg{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new xg(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ol{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Fg{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Zm(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){we(this.o===void 0);const r=i=>{i.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,H("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Ol(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(we(typeof t.token=="string"),this.R=t.token,new Ol(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Ug(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function ph(){return new TextEncoder}/**
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
 */class gh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Ug(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function le(n,e){return n<e?-1:n>e?1:0}function io(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return le(r,s);{const i=ph(),a=Bg(i.encode(xl(n,t)),i.encode(xl(e,t)));return a!==0?a:le(r,s)}}t+=r>65535?2:1}return le(n.length,e.length)}function xl(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function Bg(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return le(n[t],e[t]);return le(n.length,e.length)}function $n(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const Ll=-62135596800,Fl=1e6;class Oe{static now(){return Oe.fromMillis(Date.now())}static fromDate(e){return Oe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Fl);return new Oe(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new $(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new $(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ll)throw new $(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Fl}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Ll;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class se{static fromTimestamp(e){return new se(e)}static min(){return new se(new Oe(0,0))}static max(){return new se(new Oe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ul="__name__";class Pt{constructor(e,t,r){t===void 0?t=0:t>e.length&&ne(),r===void 0?r=e.length-t:r>e.length-t&&ne(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Pt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Pt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Pt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return le(e.length,t.length)}static compareSegments(e,t){const r=Pt.isNumericId(e),s=Pt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Pt.extractNumericId(e).compare(Pt.extractNumericId(t)):io(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return tn.fromString(e.substring(4,e.length-2))}}class Ce extends Pt{construct(e,t,r){return new Ce(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(B.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new Ce(t)}static emptyPath(){return new Ce([])}}const jg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class He extends Pt{construct(e,t,r){return new He(e,t,r)}static isValidIdentifier(e){return jg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),He.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ul}static keyField(){return new He([Ul])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new $(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new $(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new $(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new $(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new He(t)}static emptyPath(){return new He([])}}/**
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
 */const xr=-1;function qg(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=se.fromTimestamp(r===1e9?new Oe(t+1,0):new Oe(t,r));return new sn(s,Z.empty(),e)}function zg(n){return new sn(n.readTime,n.key,xr)}class sn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new sn(se.min(),Z.empty(),xr)}static max(){return new sn(se.max(),Z.empty(),xr)}}function Hg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Z.comparator(n.documentKey,e.documentKey),t!==0?t:le(n.largestBatchId,e.largestBatchId))}/**
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
 */const Wg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Gg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function nr(n){if(n.code!==B.FAILED_PRECONDITION||n.message!==Wg)throw n;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ne(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new F((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof F?t:F.resolve(t)}catch(t){return F.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):F.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):F.reject(t)}static resolve(e){return new F((t,r)=>{t(e)})}static reject(e){return new F((t,r)=>{r(e)})}static waitFor(e){return new F((t,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&t()},c=>r(c))}),a=!0,i===s&&t()})}static or(e){let t=F.resolve(!1);for(const r of e)t=t.next(s=>s?F.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new F((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;t(e[u]).next(d=>{a[u]=d,++l,l===i&&r(a)},d=>s(d))}})}static doWhile(e,t){return new F((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function Kg(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function rr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ys{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.oe(r),this._e=r=>t.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Ys.ae=-1;/**
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
 */const No=-1;function Zs(n){return n==null}function Os(n){return n===0&&1/n==-1/0}function $g(n){return typeof n=="number"&&Number.isInteger(n)&&!Os(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const _h="";function Qg(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Bl(e)),e=Xg(n.get(t),e);return Bl(e)}function Xg(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case _h:t+="";break;default:t+=i}}return t}function Bl(n){return n+_h+""}/**
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
 */function jl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function fn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function yh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ke{constructor(e,t){this.comparator=e,this.root=t||ze.EMPTY}insert(e,t){return new ke(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ze.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ze.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _s(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _s(this.root,e,this.comparator,!1)}getReverseIterator(){return new _s(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _s(this.root,e,this.comparator,!0)}}class _s{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ze{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??ze.RED,this.left=s??ze.EMPTY,this.right=i??ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new ze(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return ze.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ne();const e=this.left.check();if(e!==this.right.check())throw ne();return e+(this.isRed()?0:1)}}ze.EMPTY=null,ze.RED=!0,ze.BLACK=!1;ze.EMPTY=new class{constructor(){this.size=0}get key(){throw ne()}get value(){throw ne()}get color(){throw ne()}get left(){throw ne()}get right(){throw ne()}copy(e,t,r,s,i){return this}insert(e,t,r){return new ze(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class xe{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ql(this.data.getIterator())}getIteratorFrom(e){return new ql(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof xe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new xe(this.comparator);return t.data=e,t}}class ql{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class dt{constructor(e){this.fields=e,e.sort(He.comparator)}static empty(){return new dt([])}unionWith(e){let t=new xe(He.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new dt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return $n(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class wh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class We{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new wh("Invalid base64 string: "+i):i}}(e);return new We(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new We(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}We.EMPTY_BYTE_STRING=new We("");const Jg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function on(n){if(we(!!n),typeof n=="string"){let e=0;const t=Jg.exec(n);if(we(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(n.seconds),nanos:Ve(n.nanos)}}function Ve(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function an(n){return typeof n=="string"?We.fromBase64String(n):We.fromUint8Array(n)}/**
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
 */const vh="server_timestamp",Ah="__type__",Eh="__previous_value__",Th="__local_write_time__";function Mo(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Ah])===null||t===void 0?void 0:t.stringValue)===vh}function ei(n){const e=n.mapValue.fields[Eh];return Mo(e)?ei(e):e}function Lr(n){const e=on(n.mapValue.fields[Th].timestampValue);return new Oe(e.seconds,e.nanos)}/**
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
 */class Yg{constructor(e,t,r,s,i,a,l,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}const xs="(default)";class Fr{constructor(e,t){this.projectId=e,this.database=t||xs}static empty(){return new Fr("","")}get isDefaultDatabase(){return this.database===xs}isEqual(e){return e instanceof Fr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const bh="__type__",Ih="__max__",ys={mapValue:{fields:{__type__:{stringValue:Ih}}}},Rh="__vector__",Ls="value";function ln(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Mo(n)?4:e_(n)?9007199254740991:Zg(n)?10:11:ne()}function Mt(n,e){if(n===e)return!0;const t=ln(n);if(t!==ln(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Lr(n).isEqual(Lr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=on(s.timestampValue),l=on(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return an(s.bytesValue).isEqual(an(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return Ve(s.geoPointValue.latitude)===Ve(i.geoPointValue.latitude)&&Ve(s.geoPointValue.longitude)===Ve(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ve(s.integerValue)===Ve(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Ve(s.doubleValue),l=Ve(i.doubleValue);return a===l?Os(a)===Os(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return $n(n.arrayValue.values||[],e.arrayValue.values||[],Mt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(jl(a)!==jl(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!Mt(a[c],l[c])))return!1;return!0}(n,e);default:return ne()}}function Ur(n,e){return(n.values||[]).find(t=>Mt(t,e))!==void 0}function Qn(n,e){if(n===e)return 0;const t=ln(n),r=ln(e);if(t!==r)return le(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return le(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=Ve(i.integerValue||i.doubleValue),c=Ve(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return zl(n.timestampValue,e.timestampValue);case 4:return zl(Lr(n),Lr(e));case 5:return io(n.stringValue,e.stringValue);case 6:return function(i,a){const l=an(i),c=an(a);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=le(l[u],c[u]);if(d!==0)return d}return le(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=le(Ve(i.latitude),Ve(a.latitude));return l!==0?l:le(Ve(i.longitude),Ve(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Hl(n.arrayValue,e.arrayValue);case 10:return function(i,a){var l,c,u,d;const m=i.fields||{},p=a.fields||{},_=(l=m[Ls])===null||l===void 0?void 0:l.arrayValue,E=(c=p[Ls])===null||c===void 0?void 0:c.arrayValue,k=le(((u=_==null?void 0:_.values)===null||u===void 0?void 0:u.length)||0,((d=E==null?void 0:E.values)===null||d===void 0?void 0:d.length)||0);return k!==0?k:Hl(_,E)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===ys.mapValue&&a===ys.mapValue)return 0;if(i===ys.mapValue)return 1;if(a===ys.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=a.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let m=0;m<c.length&&m<d.length;++m){const p=io(c[m],d[m]);if(p!==0)return p;const _=Qn(l[c[m]],u[d[m]]);if(_!==0)return _}return le(c.length,d.length)}(n.mapValue,e.mapValue);default:throw ne()}}function zl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return le(n,e);const t=on(n),r=on(e),s=le(t.seconds,r.seconds);return s!==0?s:le(t.nanos,r.nanos)}function Hl(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Qn(t[s],r[s]);if(i)return i}return le(t.length,r.length)}function Xn(n){return oo(n)}function oo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=on(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return an(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Z.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=oo(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${oo(t.fields[a])}`;return s+"}"}(n.mapValue):ne()}function Rs(n){switch(ln(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ei(n);return e?16+Rs(e):16;case 5:return 2*n.stringValue.length;case 6:return an(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Rs(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return fn(r.fields,(i,a)=>{s+=i.length+Rs(a)}),s}(n.mapValue);default:throw ne()}}function ao(n){return!!n&&"integerValue"in n}function Oo(n){return!!n&&"arrayValue"in n}function Wl(n){return!!n&&"nullValue"in n}function Gl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Cs(n){return!!n&&"mapValue"in n}function Zg(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[bh])===null||t===void 0?void 0:t.stringValue)===Rh}function kr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return fn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=kr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=kr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function e_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Ih}/**
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
 */class rt{constructor(e){this.value=e}static empty(){return new rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Cs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=kr(t)}setAll(e){let t=He.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=kr(a):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Cs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Mt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Cs(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){fn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new rt(kr(this.value))}}function Ch(n){const e=[];return fn(n.fields,(t,r)=>{const s=new He([t]);if(Cs(r)){const i=Ch(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new dt(e)}/**
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
 */class Fs{constructor(e,t){this.position=e,this.inclusive=t}}function Kl(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=Z.comparator(Z.fromName(a.referenceValue),t.key):r=Qn(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function $l(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Mt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Us{constructor(e,t="asc"){this.field=e,this.dir=t}}function t_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class kh{}class Me extends kh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new r_(e,t,r):t==="array-contains"?new o_(e,r):t==="in"?new a_(e,r):t==="not-in"?new l_(e,r):t==="array-contains-any"?new c_(e,r):new Me(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new s_(e,r):new i_(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Qn(t,this.value)):t!==null&&ln(this.value)===ln(t)&&this.matchesComparison(Qn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ot extends kh{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new Ot(e,t)}matches(e){return Sh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Sh(n){return n.op==="and"}function Ph(n){return n_(n)&&Sh(n)}function n_(n){for(const e of n.filters)if(e instanceof Ot)return!1;return!0}function lo(n){if(n instanceof Me)return n.field.canonicalString()+n.op.toString()+Xn(n.value);if(Ph(n))return n.filters.map(e=>lo(e)).join(",");{const e=n.filters.map(t=>lo(t)).join(",");return`${n.op}(${e})`}}function Vh(n,e){return n instanceof Me?function(r,s){return s instanceof Me&&r.op===s.op&&r.field.isEqual(s.field)&&Mt(r.value,s.value)}(n,e):n instanceof Ot?function(r,s){return s instanceof Ot&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Vh(a,s.filters[l]),!0):!1}(n,e):void ne()}function Dh(n){return n instanceof Me?function(t){return`${t.field.canonicalString()} ${t.op} ${Xn(t.value)}`}(n):n instanceof Ot?function(t){return t.op.toString()+" {"+t.getFilters().map(Dh).join(" ,")+"}"}(n):"Filter"}class r_ extends Me{constructor(e,t,r){super(e,t,r),this.key=Z.fromName(r.referenceValue)}matches(e){const t=Z.comparator(e.key,this.key);return this.matchesComparison(t)}}class s_ extends Me{constructor(e,t){super(e,"in",t),this.keys=Nh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class i_ extends Me{constructor(e,t){super(e,"not-in",t),this.keys=Nh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Nh(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>Z.fromName(r.referenceValue))}class o_ extends Me{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Oo(t)&&Ur(t.arrayValue,this.value)}}class a_ extends Me{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ur(this.value.arrayValue,t)}}class l_ extends Me{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ur(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ur(this.value.arrayValue,t)}}class c_ extends Me{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Oo(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ur(this.value.arrayValue,r))}}/**
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
 */class u_{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.le=null}}function Ql(n,e=null,t=[],r=[],s=null,i=null,a=null){return new u_(n,e,t,r,s,i,a)}function xo(n){const e=oe(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>lo(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Zs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Xn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Xn(r)).join(",")),e.le=t}return e.le}function Lo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!t_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Vh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!$l(n.startAt,e.startAt)&&$l(n.endAt,e.endAt)}function co(n){return Z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class ti{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function h_(n,e,t,r,s,i,a,l){return new ti(n,e,t,r,s,i,a,l)}function Fo(n){return new ti(n)}function Xl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function f_(n){return n.collectionGroup!==null}function Sr(n){const e=oe(n);if(e.he===null){e.he=[];const t=new Set;for(const i of e.explicitOrderBy)e.he.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new xe(He.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.he.push(new Us(i,r))}),t.has(He.keyField().canonicalString())||e.he.push(new Us(He.keyField(),r))}return e.he}function Dt(n){const e=oe(n);return e.Pe||(e.Pe=d_(e,Sr(n))),e.Pe}function d_(n,e){if(n.limitType==="F")return Ql(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Us(s.field,i)});const t=n.endAt?new Fs(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Fs(n.startAt.position,n.startAt.inclusive):null;return Ql(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function uo(n,e,t){return new ti(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ni(n,e){return Lo(Dt(n),Dt(e))&&n.limitType===e.limitType}function Mh(n){return`${xo(Dt(n))}|lt:${n.limitType}`}function jn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Dh(s)).join(", ")}]`),Zs(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Xn(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Xn(s)).join(",")),`Target(${r})`}(Dt(n))}; limitType=${n.limitType})`}function ri(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Z.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Sr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,c){const u=Kl(a,l,c);return a.inclusive?u<=0:u<0}(r.startAt,Sr(r),s)||r.endAt&&!function(a,l,c){const u=Kl(a,l,c);return a.inclusive?u>=0:u>0}(r.endAt,Sr(r),s))}(n,e)}function m_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Oh(n){return(e,t)=>{let r=!1;for(const s of Sr(n)){const i=p_(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function p_(n,e,t){const r=n.field.isKeyField()?Z.comparator(e.key,t.key):function(i,a,l){const c=a.data.field(i),u=l.data.field(i);return c!==null&&u!==null?Qn(c,u):ne()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ne()}}/**
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
 */class Sn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){fn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return yh(this.inner)}size(){return this.innerSize}}/**
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
 */const g_=new ke(Z.comparator);function Ht(){return g_}const xh=new ke(Z.comparator);function br(...n){let e=xh;for(const t of n)e=e.insert(t.key,t);return e}function Lh(n){let e=xh;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function bn(){return Pr()}function Fh(){return Pr()}function Pr(){return new Sn(n=>n.toString(),(n,e)=>n.isEqual(e))}const __=new ke(Z.comparator),y_=new xe(Z.comparator);function fe(...n){let e=y_;for(const t of n)e=e.add(t);return e}const w_=new xe(le);function v_(){return w_}/**
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
 */function Uo(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Os(e)?"-0":e}}function Uh(n){return{integerValue:""+n}}function A_(n,e){return $g(e)?Uh(e):Uo(n,e)}/**
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
 */class si{constructor(){this._=void 0}}function E_(n,e,t){return n instanceof Bs?function(s,i){const a={fields:{[Ah]:{stringValue:vh},[Th]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Mo(i)&&(i=ei(i)),i&&(a.fields[Eh]=i),{mapValue:a}}(t,e):n instanceof Br?jh(n,e):n instanceof jr?qh(n,e):function(s,i){const a=Bh(s,i),l=Jl(a)+Jl(s.Ie);return ao(a)&&ao(s.Ie)?Uh(l):Uo(s.serializer,l)}(n,e)}function T_(n,e,t){return n instanceof Br?jh(n,e):n instanceof jr?qh(n,e):t}function Bh(n,e){return n instanceof js?function(r){return ao(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Bs extends si{}class Br extends si{constructor(e){super(),this.elements=e}}function jh(n,e){const t=zh(e);for(const r of n.elements)t.some(s=>Mt(s,r))||t.push(r);return{arrayValue:{values:t}}}class jr extends si{constructor(e){super(),this.elements=e}}function qh(n,e){let t=zh(e);for(const r of n.elements)t=t.filter(s=>!Mt(s,r));return{arrayValue:{values:t}}}class js extends si{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function Jl(n){return Ve(n.integerValue||n.doubleValue)}function zh(n){return Oo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function b_(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Br&&s instanceof Br||r instanceof jr&&s instanceof jr?$n(r.elements,s.elements,Mt):r instanceof js&&s instanceof js?Mt(r.Ie,s.Ie):r instanceof Bs&&s instanceof Bs}(n.transform,e.transform)}class I_{constructor(e,t){this.version=e,this.transformResults=t}}class mt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new mt}static exists(e){return new mt(void 0,e)}static updateTime(e){return new mt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ks(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ii{}function Hh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Bo(n.key,mt.none()):new Hr(n.key,n.data,mt.none());{const t=n.data,r=rt.empty();let s=new xe(He.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new dn(n.key,r,new dt(s.toArray()),mt.none())}}function R_(n,e,t){n instanceof Hr?function(s,i,a){const l=s.value.clone(),c=Zl(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof dn?function(s,i,a){if(!ks(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Zl(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(Wh(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Vr(n,e,t,r){return n instanceof Hr?function(i,a,l,c){if(!ks(i.precondition,a))return l;const u=i.value.clone(),d=ec(i.fieldTransforms,c,a);return u.setAll(d),a.convertToFoundDocument(a.version,u).setHasLocalMutations(),null}(n,e,t,r):n instanceof dn?function(i,a,l,c){if(!ks(i.precondition,a))return l;const u=ec(i.fieldTransforms,c,a),d=a.data;return d.setAll(Wh(i)),d.setAll(u),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(i,a,l){return ks(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function C_(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Bh(r.transform,s||null);i!=null&&(t===null&&(t=rt.empty()),t.set(r.field,i))}return t||null}function Yl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&$n(r,s,(i,a)=>b_(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Hr extends ii{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class dn extends ii{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Wh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Zl(n,e,t){const r=new Map;we(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,T_(a,l,t[s]))}return r}function ec(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,E_(i,a,e))}return r}class Bo extends ii{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class k_ extends ii{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class S_{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&R_(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Vr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Vr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Fh();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const c=Hh(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(se.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),fe())}isEqual(e){return this.batchId===e.batchId&&$n(this.mutations,e.mutations,(t,r)=>Yl(t,r))&&$n(this.baseMutations,e.baseMutations,(t,r)=>Yl(t,r))}}class jo{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){we(e.mutations.length===r.length);let s=function(){return __}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new jo(e,t,r,s)}}/**
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
 */class P_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class V_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var De,de;function D_(n){switch(n){case B.OK:return ne();case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0;default:return ne()}}function Gh(n){if(n===void 0)return zt("GRPC error has no .code"),B.UNKNOWN;switch(n){case De.OK:return B.OK;case De.CANCELLED:return B.CANCELLED;case De.UNKNOWN:return B.UNKNOWN;case De.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case De.INTERNAL:return B.INTERNAL;case De.UNAVAILABLE:return B.UNAVAILABLE;case De.UNAUTHENTICATED:return B.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case De.NOT_FOUND:return B.NOT_FOUND;case De.ALREADY_EXISTS:return B.ALREADY_EXISTS;case De.PERMISSION_DENIED:return B.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case De.ABORTED:return B.ABORTED;case De.OUT_OF_RANGE:return B.OUT_OF_RANGE;case De.UNIMPLEMENTED:return B.UNIMPLEMENTED;case De.DATA_LOSS:return B.DATA_LOSS;default:return ne()}}(de=De||(De={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const N_=new tn([4294967295,4294967295],0);function tc(n){const e=ph().encode(n),t=new lh;return t.update(e),new Uint8Array(t.digest())}function nc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new tn([t,r],0),new tn([s,i],0)]}class qo{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Ir(`Invalid padding: ${t}`);if(r<0)throw new Ir(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ir(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Ir(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=tn.fromNumber(this.Ee)}Ae(e,t,r){let s=e.add(t.multiply(tn.fromNumber(r)));return s.compare(N_)===1&&(s=new tn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=tc(e),[r,s]=nc(t);for(let i=0;i<this.hashCount;i++){const a=this.Ae(r,s,i);if(!this.Re(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new qo(i,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ee===0)return;const t=tc(e),[r,s]=nc(t);for(let i=0;i<this.hashCount;i++){const a=this.Ae(r,s,i);this.Ve(a)}}Ve(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Ir extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class oi{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Wr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new oi(se.min(),s,new ke(le),Ht(),fe())}}class Wr{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Wr(r,t,fe(),fe(),fe())}}/**
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
 */class Ss{constructor(e,t,r,s){this.me=e,this.removedTargetIds=t,this.key=r,this.fe=s}}class Kh{constructor(e,t){this.targetId=e,this.ge=t}}class $h{constructor(e,t,r=We.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class rc{constructor(){this.pe=0,this.ye=sc(),this.we=We.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=fe(),t=fe(),r=fe();return this.ye.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:ne()}}),new Wr(this.we,this.Se,e,t,r)}Me(){this.be=!1,this.ye=sc()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,we(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class M_{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Ht(),this.$e=ws(),this.Ue=ws(),this.Ke=new ke(le)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const r=this.He(t);switch(e.state){case 0:this.Je(t)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(t);break;case 3:this.Je(t)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),r.Ce(e.resumeToken));break;default:ne()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((r,s)=>{this.Je(s)&&t(s)})}Ze(e){const t=e.targetId,r=e.ge.count,s=this.Xe(t);if(s){const i=s.target;if(co(i))if(r===0){const a=new Z(i.path);this.ze(t,a,Xe.newNoDocument(a,se.min()))}else we(r===1);else{const a=this.et(t);if(a!==r){const l=this.tt(e),c=l?this.nt(l,e,a):1;if(c!==0){this.Ye(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,u)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=an(r).toUint8Array()}catch(c){if(c instanceof wh)return Kn("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new qo(a,s,i)}catch(c){return Kn(c instanceof Ir?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ee===0?null:l}nt(e,t,r){return t.ge.count===r-this.st(e,t.targetId)?0:2}st(e,t){const r=this.ke.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.ke.it(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.ze(t,i,null),s++)}),s}ot(e){const t=new Map;this.qe.forEach((i,a)=>{const l=this.Xe(a);if(l){if(i.current&&co(l.target)){const c=new Z(l.target.path);this._t(c).has(a)||this.ut(a,c)||this.ze(a,c,Xe.newNoDocument(c,e))}i.ve&&(t.set(a,i.Fe()),i.Me())}});let r=fe();this.Ue.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const u=this.Xe(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.Qe.forEach((i,a)=>a.setReadTime(e));const s=new oi(e,t,this.Ke,this.Qe,r);return this.Qe=Ht(),this.$e=ws(),this.Ue=ws(),this.Ke=new ke(le),s}Ge(e,t){if(!this.Je(e))return;const r=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,r),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}ze(e,t,r){if(!this.Je(e))return;const s=this.He(e);this.ut(e,t)?s.xe(t,1):s.Oe(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),this.Ue=this.Ue.insert(t,this.ct(t).add(e)),r&&(this.Qe=this.Qe.insert(t,r))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new rc,this.qe.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new xe(le),this.Ue=this.Ue.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new xe(le),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||H("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new rc),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function ws(){return new ke(Z.comparator)}function sc(){return new ke(Z.comparator)}const O_={asc:"ASCENDING",desc:"DESCENDING"},x_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},L_={and:"AND",or:"OR"};class F_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ho(n,e){return n.useProto3Json||Zs(e)?e:{value:e}}function qs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Qh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function U_(n,e){return qs(n,e.toTimestamp())}function Nt(n){return we(!!n),se.fromTimestamp(function(t){const r=on(t);return new Oe(r.seconds,r.nanos)}(n))}function zo(n,e){return fo(n,e).canonicalString()}function fo(n,e){const t=function(s){return new Ce(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Xh(n){const e=Ce.fromString(n);return we(tf(e)),e}function mo(n,e){return zo(n.databaseId,e.path)}function Hi(n,e){const t=Xh(e);if(t.get(1)!==n.databaseId.projectId)throw new $(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new $(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Z(Yh(t))}function Jh(n,e){return zo(n.databaseId,e)}function B_(n){const e=Xh(n);return e.length===4?Ce.emptyPath():Yh(e)}function po(n){return new Ce(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Yh(n){return we(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function ic(n,e,t){return{name:mo(n,e),fields:t.value.mapValue.fields}}function j_(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ne()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(we(d===void 0||typeof d=="string"),We.fromBase64String(d||"")):(we(d===void 0||d instanceof Buffer||d instanceof Uint8Array),We.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(u){const d=u.code===void 0?B.UNKNOWN:Gh(u.code);return new $(d,u.message||"")}(a);t=new $h(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Hi(n,r.document.name),i=Nt(r.document.updateTime),a=r.document.createTime?Nt(r.document.createTime):se.min(),l=new rt({mapValue:{fields:r.document.fields}}),c=Xe.newFoundDocument(s,i,a,l),u=r.targetIds||[],d=r.removedTargetIds||[];t=new Ss(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Hi(n,r.document),i=r.readTime?Nt(r.readTime):se.min(),a=Xe.newNoDocument(s,i),l=r.removedTargetIds||[];t=new Ss([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Hi(n,r.document),i=r.removedTargetIds||[];t=new Ss([],i,s,null)}else{if(!("filter"in e))return ne();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new V_(s,i),l=r.targetId;t=new Kh(l,a)}}return t}function q_(n,e){let t;if(e instanceof Hr)t={update:ic(n,e.key,e.value)};else if(e instanceof Bo)t={delete:mo(n,e.key)};else if(e instanceof dn)t={update:ic(n,e.key,e.data),updateMask:J_(e.fieldMask)};else{if(!(e instanceof k_))return ne();t={verify:mo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof Bs)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Br)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof jr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof js)return{fieldPath:a.field.canonicalString(),increment:l.Ie};throw ne()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:U_(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ne()}(n,e.precondition)),t}function z_(n,e){return n&&n.length>0?(we(e!==void 0),n.map(t=>function(s,i){let a=s.updateTime?Nt(s.updateTime):Nt(i);return a.isEqual(se.min())&&(a=Nt(i)),new I_(a,s.transformResults||[])}(t,e))):[]}function H_(n,e){return{documents:[Jh(n,e.path)]}}function W_(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Jh(n,s);const i=function(u){if(u.length!==0)return ef(Ot.create(u,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(u){if(u.length!==0)return u.map(d=>function(p){return{field:qn(p.field),direction:$_(p.dir)}}(d))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=ho(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ht:t,parent:s}}function G_(n){let e=B_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){we(r===1);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=function(m){const p=Zh(m);return p instanceof Ot&&Ph(p)?p.getFilters():[p]}(t.where));let a=[];t.orderBy&&(a=function(m){return m.map(p=>function(E){return new Us(zn(E.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(p))}(t.orderBy));let l=null;t.limit&&(l=function(m){let p;return p=typeof m=="object"?m.value:m,Zs(p)?null:p}(t.limit));let c=null;t.startAt&&(c=function(m){const p=!!m.before,_=m.values||[];return new Fs(_,p)}(t.startAt));let u=null;return t.endAt&&(u=function(m){const p=!m.before,_=m.values||[];return new Fs(_,p)}(t.endAt)),h_(e,s,a,i,l,"F",c,u)}function K_(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ne()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Zh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=zn(t.unaryFilter.field);return Me.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=zn(t.unaryFilter.field);return Me.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=zn(t.unaryFilter.field);return Me.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=zn(t.unaryFilter.field);return Me.create(a,"!=",{nullValue:"NULL_VALUE"});default:return ne()}}(n):n.fieldFilter!==void 0?function(t){return Me.create(zn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ne()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ot.create(t.compositeFilter.filters.map(r=>Zh(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ne()}}(t.compositeFilter.op))}(n):ne()}function $_(n){return O_[n]}function Q_(n){return x_[n]}function X_(n){return L_[n]}function qn(n){return{fieldPath:n.canonicalString()}}function zn(n){return He.fromServerFormat(n.fieldPath)}function ef(n){return n instanceof Me?function(t){if(t.op==="=="){if(Gl(t.value))return{unaryFilter:{field:qn(t.field),op:"IS_NAN"}};if(Wl(t.value))return{unaryFilter:{field:qn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Gl(t.value))return{unaryFilter:{field:qn(t.field),op:"IS_NOT_NAN"}};if(Wl(t.value))return{unaryFilter:{field:qn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qn(t.field),op:Q_(t.op),value:t.value}}}(n):n instanceof Ot?function(t){const r=t.getFilters().map(s=>ef(s));return r.length===1?r[0]:{compositeFilter:{op:X_(t.op),filters:r}}}(n):ne()}function J_(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function tf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Yt{constructor(e,t,r,s,i=se.min(),a=se.min(),l=We.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Yt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Y_{constructor(e){this.Tt=e}}function Z_(n){const e=G_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?uo(e,e.limit,"L"):e}/**
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
 */class ey{constructor(){this.Tn=new ty}addToCollectionParentIndex(e,t){return this.Tn.add(t),F.resolve()}getCollectionParents(e,t){return F.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return F.resolve()}deleteFieldIndex(e,t){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,t){return F.resolve()}getDocumentsMatchingTarget(e,t){return F.resolve(null)}getIndexType(e,t){return F.resolve(0)}getFieldIndexes(e,t){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,t){return F.resolve(sn.min())}getMinOffsetFromCollectionGroup(e,t){return F.resolve(sn.min())}updateCollectionGroup(e,t,r){return F.resolve()}updateIndexEntries(e,t){return F.resolve()}}class ty{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new xe(Ce.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new xe(Ce.comparator)).toArray()}}/**
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
 */const oc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},nf=41943040;class nt{static withCacheSize(e){return new nt(e,nt.DEFAULT_COLLECTION_PERCENTILE,nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */nt.DEFAULT_COLLECTION_PERCENTILE=10,nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,nt.DEFAULT=new nt(nf,nt.DEFAULT_COLLECTION_PERCENTILE,nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),nt.DISABLED=new nt(-1,0,0);/**
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
 */const ac="LruGarbageCollector",ny=1048576;function lc([n,e],[t,r]){const s=le(n,t);return s===0?le(e,r):s}class ry{constructor(e){this.Hn=e,this.buffer=new xe(lc),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();lc(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class sy{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){H(ac,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){rr(t)?H(ac,"Ignoring IndexedDB error during garbage collection: ",t):await nr(t)}await this.er(3e5)})}}class iy{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return F.resolve(Ys.ae);const r=new ry(t);return this.tr.forEachTarget(e,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(e,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.tr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(oc)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),oc):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let r,s,i,a,l,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,a=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,t))).next(m=>(i=m,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(u=Date.now(),Bn()<=me.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${m} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function oy(n,e){return new iy(n,e)}/**
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
 */class ay{constructor(){this.changes=new Sn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Xe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?F.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class ly{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class cy{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Vr(r.mutation,s,dt.empty(),Oe.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,fe()).next(()=>r))}getLocalViewOfDocuments(e,t,r=fe()){const s=bn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=br();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=bn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,fe()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let i=Ht();const a=Pr(),l=function(){return Pr()}();return t.forEach((c,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof dn)?i=i.insert(u.key,u):d!==void 0?(a.set(u.key,d.mutation.getFieldMask()),Vr(d.mutation,u,d.mutation.getFieldMask(),Oe.now())):a.set(u.key,dt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,d)=>a.set(u,d)),t.forEach((u,d)=>{var m;return l.set(u,new ly(d,(m=a.get(u))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,t){const r=Pr();let s=new ke((a,l)=>a-l),i=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let d=r.get(c)||dt.empty();d=l.applyToLocalView(u,d),r.set(c,d);const m=(s.get(l.batchId)||fe()).add(c);s=s.insert(l.batchId,m)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,m=Fh();d.forEach(p=>{if(!i.has(p)){const _=Hh(t.get(p),r.get(p));_!==null&&m.set(p,_),i=i.add(p)}}),a.push(this.documentOverlayCache.saveOverlays(e,u,m))}return F.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return Z.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):f_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):F.resolve(bn());let l=xr,c=i;return a.next(u=>F.forEach(u,(d,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(d)?F.resolve():this.remoteDocumentCache.getEntry(e,d).next(p=>{c=c.insert(d,p)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,fe())).next(d=>({batchId:l,changes:Lh(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Z(t)).next(r=>{let s=br();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=br();return this.indexManager.getCollectionParents(e,i).next(l=>F.forEach(l,c=>{const u=function(m,p){return new ti(p,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((m,p)=>{a=a.insert(m,p)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((c,u)=>{const d=u.getKey();a.get(d)===null&&(a=a.insert(d,Xe.newInvalidDocument(d)))});let l=br();return a.forEach((c,u)=>{const d=i.get(c);d!==void 0&&Vr(d.mutation,u,dt.empty(),Oe.now()),ri(t,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class uy{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return F.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Nt(s.createTime)}}(t)),F.resolve()}getNamedQuery(e,t){return F.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(s){return{name:s.name,query:Z_(s.bundledQuery),readTime:Nt(s.readTime)}}(t)),F.resolve()}}/**
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
 */class hy{constructor(){this.overlays=new ke(Z.comparator),this.Rr=new Map}getOverlay(e,t){return F.resolve(this.overlays.get(t))}getOverlays(e,t){const r=bn();return F.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.Et(e,t,i)}),F.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(r)),F.resolve()}getOverlaysForCollection(e,t,r){const s=bn(),i=t.length+1,a=new Z(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return F.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ke((u,d)=>u-d);const a=this.overlays.getIterator();for(;a.hasNext();){const u=a.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=bn(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=bn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>l.set(u,d)),!(l.size()>=s)););return F.resolve(l)}Et(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new P_(t,r));let i=this.Rr.get(t);i===void 0&&(i=fe(),this.Rr.set(t,i)),this.Rr.set(t,i.add(r.key))}}/**
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
 */class fy{constructor(){this.sessionToken=We.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,F.resolve()}}/**
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
 */class Ho{constructor(){this.Vr=new xe(Be.mr),this.gr=new xe(Be.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const r=new Be(e,t);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.wr(new Be(e,t))}Sr(e,t){e.forEach(r=>this.removeReference(r,t))}br(e){const t=new Z(new Ce([])),r=new Be(t,e),s=new Be(t,e+1),i=[];return this.gr.forEachInRange([r,s],a=>{this.wr(a),i.push(a.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new Z(new Ce([])),r=new Be(t,e),s=new Be(t,e+1);let i=fe();return this.gr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Be(e,0),r=this.Vr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Be{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return Z.comparator(e.key,t.key)||le(e.Cr,t.Cr)}static pr(e,t){return le(e.Cr,t.Cr)||Z.comparator(e.key,t.key)}}/**
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
 */class dy{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new xe(Be.mr)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new S_(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.Mr=this.Mr.add(new Be(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return F.resolve(a)}lookupMutationBatch(e,t){return F.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Nr(r),i=s<0?0:s;return F.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?No:this.Fr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Be(t,0),s=new Be(t,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([r,s],a=>{const l=this.Or(a.Cr);i.push(l)}),F.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new xe(le);return t.forEach(s=>{const i=new Be(s,0),a=new Be(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,a],l=>{r=r.add(l.Cr)})}),F.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;Z.isDocumentKey(i)||(i=i.child(""));const a=new Be(new Z(i),0);let l=new xe(le);return this.Mr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Cr)),!0)},a),F.resolve(this.Br(l))}Br(e){const t=[];return e.forEach(r=>{const s=this.Or(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){we(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return F.forEach(t.mutations,s=>{const i=new Be(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,t){const r=new Be(t,0),s=this.Mr.firstAfterOrEqual(r);return F.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class my{constructor(e){this.kr=e,this.docs=function(){return new ke(Z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.kr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return F.resolve(r?r.document.mutableCopy():Xe.newInvalidDocument(t))}getEntries(e,t){let r=Ht();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Xe.newInvalidDocument(s))}),F.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Ht();const a=t.path,l=new Z(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!a.isPrefixOf(u.path))break;u.path.length>a.length+1||Hg(zg(d),r)<=0||(s.has(d.key)||ri(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return F.resolve(i)}getAllFromCollectionGroup(e,t,r,s){ne()}qr(e,t){return F.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new py(this)}getSize(e){return F.resolve(this.size)}}class py extends ay{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Ir.addEntry(e,s)):this.Ir.removeEntry(r)}),F.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
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
 */class gy{constructor(e){this.persistence=e,this.Qr=new Sn(t=>xo(t),Lo),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.$r=0,this.Ur=new Ho,this.targetCount=0,this.Kr=Jn.Un()}forEachTarget(e,t){return this.Qr.forEach((r,s)=>t(s)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.$r&&(this.$r=t),F.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Kr=new Jn(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,F.resolve()}updateTargetData(e,t){return this.zn(t),F.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Ur.br(t.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Qr.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Qr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),F.waitFor(i).next(()=>s)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,t){const r=this.Qr.get(t)||null;return F.resolve(r)}addMatchingKeys(e,t,r){return this.Ur.yr(t,r),F.resolve()}removeMatchingKeys(e,t,r){this.Ur.Sr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),F.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Ur.br(t),F.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Ur.vr(t);return F.resolve(r)}containsKey(e,t){return F.resolve(this.Ur.containsKey(t))}}/**
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
 */class rf{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new Ys(0),this.zr=!1,this.zr=!0,this.jr=new fy,this.referenceDelegate=e(this),this.Hr=new gy(this),this.indexManager=new ey,this.remoteDocumentCache=function(s){return new my(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new Y_(t),this.Yr=new uy(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new hy,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Wr[e.toKey()];return r||(r=new dy(t,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,r){H("MemoryPersistence","Starting transaction:",e);const s=new _y(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(i=>this.referenceDelegate.Xr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}ei(e,t){return F.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,t)))}}class _y extends Gg{constructor(e){super(),this.currentSequenceNumber=e}}class Wo{constructor(e){this.persistence=e,this.ti=new Ho,this.ni=null}static ri(e){return new Wo(e)}get ii(){if(this.ni)return this.ni;throw ne()}addReference(e,t,r){return this.ti.addReference(r,t),this.ii.delete(r.toString()),F.resolve()}removeReference(e,t,r){return this.ti.removeReference(r,t),this.ii.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),F.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.ii.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.ii,r=>{const s=Z.fromPath(r);return this.si(e,s).next(i=>{i||t.removeEntry(s,se.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(r=>{r?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return F.or([()=>F.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class zs{constructor(e,t){this.persistence=e,this.oi=new Sn(r=>Qg(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=oy(this,t)}static ri(e,t){return new zs(e,t)}Zr(){}Xr(e){return F.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}sr(e){let t=0;return this.rr(e,r=>{t++}).next(()=>t)}rr(e,t){return F.forEach(this.oi,(r,s)=>this.ar(e,r,s).next(i=>i?F.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.qr(e,a=>this.ar(e,a,t).next(l=>{l||(r++,i.removeEntry(a,se.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),F.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),F.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Rs(e.data.value)),t}ar(e,t,r){return F.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.oi.get(t);return F.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class yy{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class wy{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Qd()?8:Kg(Gd())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.rs(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ss(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new yy;return this._s(e,t,a).next(l=>{if(i.result=l,this.Xi)return this.us(e,t,a,l.size)})}).next(()=>i.result)}us(e,t,r,s){return r.documentReadCount<this.es?(Bn()<=me.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",jn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),F.resolve()):(Bn()<=me.DEBUG&&H("QueryEngine","Query:",jn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(Bn()<=me.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",jn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Dt(t))):F.resolve())}rs(e,t){if(Xl(t))return F.resolve(null);let r=Dt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=uo(t,null,"F"),r=Dt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=fe(...i);return this.ns.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.cs(t,l);return this.ls(t,u,a,c.readTime)?this.rs(e,uo(t,null,"F")):this.hs(e,u,t,c)}))})))}ss(e,t,r,s){return Xl(t)||s.isEqual(se.min())?F.resolve(null):this.ns.getDocuments(e,r).next(i=>{const a=this.cs(t,i);return this.ls(t,a,r,s)?F.resolve(null):(Bn()<=me.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),jn(t)),this.hs(e,a,t,qg(s,xr)).next(l=>l))})}cs(e,t){let r=new xe(Oh(e));return t.forEach((s,i)=>{ri(e,i)&&(r=r.add(i))}),r}ls(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}_s(e,t,r){return Bn()<=me.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",jn(t)),this.ns.getDocumentsMatchingQuery(e,t,sn.min(),r)}hs(e,t,r,s){return this.ns.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const Ko="LocalStore",vy=3e8;class Ay{constructor(e,t,r,s){this.persistence=e,this.Ps=t,this.serializer=s,this.Ts=new ke(le),this.Is=new Sn(i=>xo(i),Lo),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new cy(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function Ey(n,e,t,r){return new Ay(n,e,t,r)}async function sf(n,e){const t=oe(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.As(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=fe();for(const u of s){a.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of i){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return t.localDocuments.getDocuments(r,c).next(u=>({Rs:u,removedBatchIds:a,addedBatchIds:l}))})})}function Ty(n,e){const t=oe(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.ds.newChangeBuffer({trackRemovals:!0});return function(l,c,u,d){const m=u.batch,p=m.keys();let _=F.resolve();return p.forEach(E=>{_=_.next(()=>d.getEntry(c,E)).next(k=>{const S=u.docVersions.get(E);we(S!==null),k.version.compareTo(S)<0&&(m.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),d.addEntry(k)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(c,m))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=fe();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function of(n){const e=oe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function by(n,e){const t=oe(n),r=e.snapshotVersion;let s=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.ds.newChangeBuffer({trackRemovals:!0});s=t.Ts;const l=[];e.targetChanges.forEach((d,m)=>{const p=s.get(m);if(!p)return;l.push(t.Hr.removeMatchingKeys(i,d.removedDocuments,m).next(()=>t.Hr.addMatchingKeys(i,d.addedDocuments,m)));let _=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?_=_.withResumeToken(We.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),s=s.insert(m,_),function(k,S,O){return k.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=vy?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(p,_,d)&&l.push(t.Hr.updateTargetData(i,_))});let c=Ht(),u=fe();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(Iy(i,a,e.documentUpdates).next(d=>{c=d.Vs,u=d.fs})),!r.isEqual(se.min())){const d=t.Hr.getLastRemoteSnapshotVersion(i).next(m=>t.Hr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return F.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(t.Ts=s,i))}function Iy(n,e,t){let r=fe(),s=fe();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=Ht();return t.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(se.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):H(Ko,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Vs:a,fs:s}})}function Ry(n,e){const t=oe(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=No),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Cy(n,e){const t=oe(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Hr.getTargetData(r,e).next(i=>i?(s=i,F.resolve(s)):t.Hr.allocateTargetId(r).next(a=>(s=new Yt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Hr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(r.targetId,r),t.Is.set(e,r.targetId)),r})}async function go(n,e,t){const r=oe(n),s=r.Ts.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!rr(a))throw a;H(Ko,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ts=r.Ts.remove(e),r.Is.delete(s.target)}function cc(n,e,t){const r=oe(n);let s=se.min(),i=fe();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,u,d){const m=oe(c),p=m.Is.get(d);return p!==void 0?F.resolve(m.Ts.get(p)):m.Hr.getTargetData(u,d)}(r,a,Dt(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>r.Ps.getDocumentsMatchingQuery(a,e,t?s:se.min(),t?i:fe())).next(l=>(ky(r,m_(e),l),{documents:l,gs:i})))}function ky(n,e,t){let r=n.Es.get(e)||se.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Es.set(e,r)}class uc{constructor(){this.activeTargetIds=v_()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Sy{constructor(){this.ho=new uc,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,r){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new uc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Py{To(e){}shutdown(){}}/**
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
 */const hc="ConnectivityMonitor";class fc{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){H(hc,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){H(hc,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let vs=null;function _o(){return vs===null?vs=function(){return 268435456+Math.round(2147483648*Math.random())}():vs++,"0x"+vs.toString(16)}/**
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
 */const Wi="RestConnection",Vy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Dy{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===xs?`project_id=${r}`:`project_id=${r}&database_id=${s}`}So(e,t,r,s,i){const a=_o(),l=this.bo(e,t.toUriEncodedString());H(Wi,`Sending RPC '${e}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(c,s,i),this.vo(e,l,c,r).then(u=>(H(Wi,`Received RPC '${e}' ${a}: `,u),u),u=>{throw Kn(Wi,`RPC '${e}' ${a} failed with error: `,u,"url: ",l,"request:",r),u})}Co(e,t,r,s,i,a){return this.So(e,t,r,s,i)}Do(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+tr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}bo(e,t){const r=Vy[e];return`${this.po}/v1/${t}:${r}`}terminate(){}}/**
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
 */class Ny{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
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
 */const $e="WebChannelConnection";class My extends Dy{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,r,s){const i=_o();return new Promise((a,l)=>{const c=new ch;c.setWithCredentials(!0),c.listenOnce(uh.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Is.NO_ERROR:const d=c.getResponseJson();H($e,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),a(d);break;case Is.TIMEOUT:H($e,`RPC '${e}' ${i} timed out`),l(new $(B.DEADLINE_EXCEEDED,"Request time out"));break;case Is.HTTP_ERROR:const m=c.getStatus();if(H($e,`RPC '${e}' ${i} failed with status:`,m,"response text:",c.getResponseText()),m>0){let p=c.getResponseJson();Array.isArray(p)&&(p=p[0]);const _=p==null?void 0:p.error;if(_&&_.status&&_.message){const E=function(S){const O=S.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(O)>=0?O:B.UNKNOWN}(_.status);l(new $(E,_.message))}else l(new $(B.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new $(B.UNAVAILABLE,"Connection failed."));break;default:ne()}}finally{H($e,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);H($e,`RPC '${e}' ${i} sending request:`,s),c.send(t,"POST",u,r,15)})}Wo(e,t,r){const s=_o(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=dh(),l=fh(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const d=i.join("");H($e,`Creating RPC '${e}' stream ${s}: ${d}`,c);const m=a.createWebChannel(d,c);let p=!1,_=!1;const E=new Ny({Fo:S=>{_?H($e,`Not sending because RPC '${e}' stream ${s} is closed:`,S):(p||(H($e,`Opening RPC '${e}' stream ${s} transport.`),m.open(),p=!0),H($e,`RPC '${e}' stream ${s} sending:`,S),m.send(S))},Mo:()=>m.close()}),k=(S,O,x)=>{S.listen(O,L=>{try{x(L)}catch(U){setTimeout(()=>{throw U},0)}})};return k(m,Tr.EventType.OPEN,()=>{_||(H($e,`RPC '${e}' stream ${s} transport opened.`),E.Qo())}),k(m,Tr.EventType.CLOSE,()=>{_||(_=!0,H($e,`RPC '${e}' stream ${s} transport closed`),E.Uo())}),k(m,Tr.EventType.ERROR,S=>{_||(_=!0,Kn($e,`RPC '${e}' stream ${s} transport errored:`,S),E.Uo(new $(B.UNAVAILABLE,"The operation could not be completed")))}),k(m,Tr.EventType.MESSAGE,S=>{var O;if(!_){const x=S.data[0];we(!!x);const L=x,U=(L==null?void 0:L.error)||((O=L[0])===null||O===void 0?void 0:O.error);if(U){H($e,`RPC '${e}' stream ${s} received error:`,U);const te=U.status;let X=function(v){const b=De[v];if(b!==void 0)return Gh(b)}(te),T=U.message;X===void 0&&(X=B.INTERNAL,T="Unknown error status: "+te+" with message "+U.message),_=!0,E.Uo(new $(X,T)),m.close()}else H($e,`RPC '${e}' stream ${s} received:`,x),E.Ko(x)}}),k(l,hh.STAT_EVENT,S=>{S.stat===so.PROXY?H($e,`RPC '${e}' stream ${s} detected buffering proxy`):S.stat===so.NOPROXY&&H($e,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{E.$o()},0),E}}function Gi(){return typeof document<"u"?document:null}/**
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
 */function ai(n){return new F_(n,!0)}/**
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
 */class af{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Ti=e,this.timerId=t,this.Go=r,this.zo=s,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,t-r);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const dc="PersistentStream";class lf{constructor(e,t,r,s,i,a,l,c){this.Ti=e,this.n_=r,this.r_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new af(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===B.RESOURCE_EXHAUSTED?(zt(t.toString()),zt("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===t&&this.V_(r,s)},r=>{e(()=>{const s=new $(B.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(e,t){const r=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return H(dc,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(H(dc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Oy extends lf{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=j_(this.serializer,e),r=function(i){if(!("targetChange"in i))return se.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?se.min():a.readTime?Nt(a.readTime):se.min()}(e);return this.listener.p_(t,r)}y_(e){const t={};t.database=po(this.serializer),t.addTarget=function(i,a){let l;const c=a.target;if(l=co(c)?{documents:H_(i,c)}:{query:W_(i,c).ht},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Qh(i,a.resumeToken);const u=ho(i,a.expectedCount);u!==null&&(l.expectedCount=u)}else if(a.snapshotVersion.compareTo(se.min())>0){l.readTime=qs(i,a.snapshotVersion.toTimestamp());const u=ho(i,a.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=K_(this.serializer,e);r&&(t.labels=r),this.I_(t)}w_(e){const t={};t.database=po(this.serializer),t.removeTarget=e,this.I_(t)}}class xy extends lf{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return we(!!e.streamToken),this.lastStreamToken=e.streamToken,we(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){we(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=z_(e.writeResults,e.commitTime),r=Nt(e.commitTime);return this.listener.v_(r,t)}C_(){const e={};e.database=po(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>q_(this.serializer,r))};this.I_(t)}}/**
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
 */class Ly{}class Fy extends Ly{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new $(B.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.So(e,fo(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(B.UNKNOWN,i.toString())})}Co(e,t,r,s,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Co(e,fo(t,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new $(B.UNKNOWN,a.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class Uy{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(zt(t),this.N_=!1):H("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const kn="RemoteStore";class By{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(a=>{r.enqueueAndForget(async()=>{Pn(this)&&(H(kn,"Restarting streams for network reachability change."),await async function(c){const u=oe(c);u.W_.add(4),await Gr(u),u.j_.set("Unknown"),u.W_.delete(4),await li(u)}(this))})}),this.j_=new Uy(r,s)}}async function li(n){if(Pn(n))for(const e of n.G_)await e(!0)}async function Gr(n){for(const e of n.G_)await e(!1)}function cf(n,e){const t=oe(n);t.K_.has(e.targetId)||(t.K_.set(e.targetId,e),Jo(t)?Xo(t):sr(t).c_()&&Qo(t,e))}function $o(n,e){const t=oe(n),r=sr(t);t.K_.delete(e),r.c_()&&uf(t,e),t.K_.size===0&&(r.c_()?r.P_():Pn(t)&&t.j_.set("Unknown"))}function Qo(n,e){if(n.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}sr(n).y_(e)}function uf(n,e){n.H_.Ne(e),sr(n).w_(e)}function Xo(n){n.H_=new M_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.K_.get(e)||null,it:()=>n.datastore.serializer.databaseId}),sr(n).start(),n.j_.B_()}function Jo(n){return Pn(n)&&!sr(n).u_()&&n.K_.size>0}function Pn(n){return oe(n).W_.size===0}function hf(n){n.H_=void 0}async function jy(n){n.j_.set("Online")}async function qy(n){n.K_.forEach((e,t)=>{Qo(n,e)})}async function zy(n,e){hf(n),Jo(n)?(n.j_.q_(e),Xo(n)):n.j_.set("Unknown")}async function Hy(n,e,t){if(n.j_.set("Online"),e instanceof $h&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.K_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.K_.delete(l),s.H_.removeTarget(l))}(n,e)}catch(r){H(kn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Hs(n,r)}else if(e instanceof Ss?n.H_.We(e):e instanceof Kh?n.H_.Ze(e):n.H_.je(e),!t.isEqual(se.min()))try{const r=await of(n.localStore);t.compareTo(r)>=0&&await function(i,a){const l=i.H_.ot(a);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.K_.get(u);d&&i.K_.set(u,d.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,u)=>{const d=i.K_.get(c);if(!d)return;i.K_.set(c,d.withResumeToken(We.EMPTY_BYTE_STRING,d.snapshotVersion)),uf(i,c);const m=new Yt(d.target,c,u,d.sequenceNumber);Qo(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){H(kn,"Failed to raise snapshot:",r),await Hs(n,r)}}async function Hs(n,e,t){if(!rr(e))throw e;n.W_.add(1),await Gr(n),n.j_.set("Offline"),t||(t=()=>of(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{H(kn,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await li(n)})}function ff(n,e){return e().catch(t=>Hs(n,t,e))}async function ci(n){const e=oe(n),t=cn(e);let r=e.U_.length>0?e.U_[e.U_.length-1].batchId:No;for(;Wy(e);)try{const s=await Ry(e.localStore,r);if(s===null){e.U_.length===0&&t.P_();break}r=s.batchId,Gy(e,s)}catch(s){await Hs(e,s)}df(e)&&mf(e)}function Wy(n){return Pn(n)&&n.U_.length<10}function Gy(n,e){n.U_.push(e);const t=cn(n);t.c_()&&t.S_&&t.b_(e.mutations)}function df(n){return Pn(n)&&!cn(n).u_()&&n.U_.length>0}function mf(n){cn(n).start()}async function Ky(n){cn(n).C_()}async function $y(n){const e=cn(n);for(const t of n.U_)e.b_(t.mutations)}async function Qy(n,e,t){const r=n.U_.shift(),s=jo.from(r,e,t);await ff(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await ci(n)}async function Xy(n,e){e&&cn(n).S_&&await async function(r,s){if(function(a){return D_(a)&&a!==B.ABORTED}(s.code)){const i=r.U_.shift();cn(r).h_(),await ff(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ci(r)}}(n,e),df(n)&&mf(n)}async function mc(n,e){const t=oe(n);t.asyncQueue.verifyOperationInProgress(),H(kn,"RemoteStore received new credentials");const r=Pn(t);t.W_.add(3),await Gr(t),r&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await li(t)}async function Jy(n,e){const t=oe(n);e?(t.W_.delete(2),await li(t)):e||(t.W_.add(2),await Gr(t),t.j_.set("Unknown"))}function sr(n){return n.J_||(n.J_=function(t,r,s){const i=oe(t);return i.M_(),new Oy(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{xo:jy.bind(null,n),No:qy.bind(null,n),Lo:zy.bind(null,n),p_:Hy.bind(null,n)}),n.G_.push(async e=>{e?(n.J_.h_(),Jo(n)?Xo(n):n.j_.set("Unknown")):(await n.J_.stop(),hf(n))})),n.J_}function cn(n){return n.Y_||(n.Y_=function(t,r,s){const i=oe(t);return i.M_(),new xy(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:Ky.bind(null,n),Lo:Xy.bind(null,n),D_:$y.bind(null,n),v_:Qy.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await ci(n)):(await n.Y_.stop(),n.U_.length>0&&(H(kn,`Stopping write stream with ${n.U_.length} pending writes`),n.U_=[]))})),n.Y_}/**
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
 */class Yo{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Bt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new Yo(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zo(n,e){if(zt("AsyncQueue",`${e}: ${n}`),rr(n))return new $(B.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Wn{static emptySet(e){return new Wn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Z.comparator(t.key,r.key):(t,r)=>Z.comparator(t.key,r.key),this.keyedMap=br(),this.sortedSet=new ke(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Wn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Wn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class pc{constructor(){this.Z_=new ke(Z.comparator)}track(e){const t=e.doc.key,r=this.Z_.get(t);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(t):e.type===1&&r.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):ne():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Yn{constructor(e,t,r,s,i,a,l,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new Yn(e,t,Wn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ni(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Yy{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class Zy{constructor(){this.queries=gc(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,r){const s=oe(t),i=s.queries;s.queries=gc(),i.forEach((a,l)=>{for(const c of l.ta)c.onError(r)})})(this,new $(B.ABORTED,"Firestore shutting down"))}}function gc(){return new Sn(n=>Mh(n),ni)}async function pf(n,e){const t=oe(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.na()&&e.ra()&&(r=2):(i=new Yy,r=e.ra()?0:1);try{switch(r){case 0:i.ea=await t.onListen(s,!0);break;case 1:i.ea=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=Zo(a,`Initialization of query '${jn(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.ta.push(e),e.sa(t.onlineState),i.ea&&e.oa(i.ea)&&ea(t)}async function gf(n,e){const t=oe(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.ta.indexOf(e);a>=0&&(i.ta.splice(a,1),i.ta.length===0?s=e.ra()?0:1:!i.na()&&e.ra()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function ew(n,e){const t=oe(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.ta)l.oa(s)&&(r=!0);a.ea=s}}r&&ea(t)}function tw(n,e,t){const r=oe(n),s=r.queries.get(e);if(s)for(const i of s.ta)i.onError(t);r.queries.delete(e)}function ea(n){n.ia.forEach(e=>{e.next()})}var yo,_c;(_c=yo||(yo={}))._a="default",_c.Cache="cache";class _f{constructor(e,t,r){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Yn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const r=t!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=Yn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==yo.Cache}}/**
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
 */class yf{constructor(e){this.key=e}}class wf{constructor(e){this.key=e}}class nw{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=fe(),this.mutatedKeys=fe(),this.ya=Oh(e),this.wa=new Wn(this.ya)}get Sa(){return this.fa}ba(e,t){const r=t?t.Da:new pc,s=t?t.wa:this.wa;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,m)=>{const p=s.get(d),_=ri(this.query,m)?m:null,E=!!p&&this.mutatedKeys.has(p.key),k=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let S=!1;p&&_?p.data.isEqual(_.data)?E!==k&&(r.track({type:3,doc:_}),S=!0):this.va(p,_)||(r.track({type:2,doc:_}),S=!0,(c&&this.ya(_,c)>0||u&&this.ya(_,u)<0)&&(l=!0)):!p&&_?(r.track({type:0,doc:_}),S=!0):p&&!_&&(r.track({type:1,doc:p}),S=!0,(c||u)&&(l=!0)),S&&(_?(a=a.add(_),i=k?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{wa:a,Da:r,ls:l,mutatedKeys:i}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const a=e.Da.X_();a.sort((d,m)=>function(_,E){const k=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne()}};return k(_)-k(E)}(d.type,m.type)||this.ya(d.doc,m.doc)),this.Ca(r),s=s!=null&&s;const l=t&&!s?this.Fa():[],c=this.pa.size===0&&this.current&&!s?1:0,u=c!==this.ga;return this.ga=c,a.length!==0||u?{snapshot:new Yn(this.query,e.wa,i,a,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:l}:{Ma:l}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new pc,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=fe(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const t=[];return e.forEach(r=>{this.pa.has(r)||t.push(new wf(r))}),this.pa.forEach(r=>{e.has(r)||t.push(new yf(r))}),t}Oa(e){this.fa=e.gs,this.pa=fe();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return Yn.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const ta="SyncEngine";class rw{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class sw{constructor(e){this.key=e,this.Ba=!1}}class iw{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new Sn(l=>Mh(l),ni),this.qa=new Map,this.Qa=new Set,this.$a=new ke(Z.comparator),this.Ua=new Map,this.Ka=new Ho,this.Wa={},this.Ga=new Map,this.za=Jn.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function ow(n,e,t=!0){const r=If(n);let s;const i=r.ka.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Na()):s=await vf(r,e,t,!0),s}async function aw(n,e){const t=If(n);await vf(t,e,!0,!1)}async function vf(n,e,t,r){const s=await Cy(n.localStore,Dt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await lw(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&cf(n.remoteStore,s),l}async function lw(n,e,t,r,s){n.Ha=(m,p,_)=>async function(k,S,O,x){let L=S.view.ba(O);L.ls&&(L=await cc(k.localStore,S.query,!1).then(({documents:T})=>S.view.ba(T,L)));const U=x&&x.targetChanges.get(S.targetId),te=x&&x.targetMismatches.get(S.targetId)!=null,X=S.view.applyChanges(L,k.isPrimaryClient,U,te);return wc(k,S.targetId,X.Ma),X.snapshot}(n,m,p,_);const i=await cc(n.localStore,e,!0),a=new nw(e,i.gs),l=a.ba(i.documents),c=Wr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),u=a.applyChanges(l,n.isPrimaryClient,c);wc(n,t,u.Ma);const d=new rw(e,t,a);return n.ka.set(e,d),n.qa.has(t)?n.qa.get(t).push(e):n.qa.set(t,[e]),u.snapshot}async function cw(n,e,t){const r=oe(n),s=r.ka.get(e),i=r.qa.get(s.targetId);if(i.length>1)return r.qa.set(s.targetId,i.filter(a=>!ni(a,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await go(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&$o(r.remoteStore,s.targetId),wo(r,s.targetId)}).catch(nr)):(wo(r,s.targetId),await go(r.localStore,s.targetId,!0))}async function uw(n,e){const t=oe(n),r=t.ka.get(e),s=t.qa.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),$o(t.remoteStore,r.targetId))}async function hw(n,e,t){const r=yw(n);try{const s=await function(a,l){const c=oe(a),u=Oe.now(),d=l.reduce((_,E)=>_.add(E.key),fe());let m,p;return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{let E=Ht(),k=fe();return c.ds.getEntries(_,d).next(S=>{E=S,E.forEach((O,x)=>{x.isValidDocument()||(k=k.add(O))})}).next(()=>c.localDocuments.getOverlayedDocuments(_,E)).next(S=>{m=S;const O=[];for(const x of l){const L=C_(x,m.get(x.key).overlayedDocument);L!=null&&O.push(new dn(x.key,L,Ch(L.value.mapValue),mt.exists(!0)))}return c.mutationQueue.addMutationBatch(_,u,O,l)}).next(S=>{p=S;const O=S.applyToLocalDocumentSet(m,k);return c.documentOverlayCache.saveOverlays(_,S.batchId,O)})}).then(()=>({batchId:p.batchId,changes:Lh(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let u=a.Wa[a.currentUser.toKey()];u||(u=new ke(le)),u=u.insert(l,c),a.Wa[a.currentUser.toKey()]=u}(r,s.batchId,t),await Kr(r,s.changes),await ci(r.remoteStore)}catch(s){const i=Zo(s,"Failed to persist write");t.reject(i)}}async function Af(n,e){const t=oe(n);try{const r=await by(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Ua.get(i);a&&(we(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.Ba=!0:s.modifiedDocuments.size>0?we(a.Ba):s.removedDocuments.size>0&&(we(a.Ba),a.Ba=!1))}),await Kr(t,r,e)}catch(r){await nr(r)}}function yc(n,e,t){const r=oe(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.ka.forEach((i,a)=>{const l=a.view.sa(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=oe(a);c.onlineState=l;let u=!1;c.queries.forEach((d,m)=>{for(const p of m.ta)p.sa(l)&&(u=!0)}),u&&ea(c)}(r.eventManager,e),s.length&&r.La.p_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function fw(n,e,t){const r=oe(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Ua.get(e),i=s&&s.key;if(i){let a=new ke(Z.comparator);a=a.insert(i,Xe.newNoDocument(i,se.min()));const l=fe().add(i),c=new oi(se.min(),new Map,new ke(le),a,l);await Af(r,c),r.$a=r.$a.remove(i),r.Ua.delete(e),na(r)}else await go(r.localStore,e,!1).then(()=>wo(r,e,t)).catch(nr)}async function dw(n,e){const t=oe(n),r=e.batch.batchId;try{const s=await Ty(t.localStore,e);Tf(t,r,null),Ef(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Kr(t,s)}catch(s){await nr(s)}}async function mw(n,e,t){const r=oe(n);try{const s=await function(a,l){const c=oe(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next(m=>(we(m!==null),d=m.keys(),c.mutationQueue.removeMutationBatch(u,m))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(r.localStore,e);Tf(r,e,t),Ef(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Kr(r,s)}catch(s){await nr(s)}}function Ef(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function Tf(n,e,t){const r=oe(n);let s=r.Wa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Wa[r.currentUser.toKey()]=s}}function wo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.qa.get(e))n.ka.delete(r),t&&n.La.Ja(r,t);n.qa.delete(e),n.isPrimaryClient&&n.Ka.br(e).forEach(r=>{n.Ka.containsKey(r)||bf(n,r)})}function bf(n,e){n.Qa.delete(e.path.canonicalString());const t=n.$a.get(e);t!==null&&($o(n.remoteStore,t),n.$a=n.$a.remove(e),n.Ua.delete(t),na(n))}function wc(n,e,t){for(const r of t)r instanceof yf?(n.Ka.addReference(r.key,e),pw(n,r)):r instanceof wf?(H(ta,"Document no longer in limbo: "+r.key),n.Ka.removeReference(r.key,e),n.Ka.containsKey(r.key)||bf(n,r.key)):ne()}function pw(n,e){const t=e.key,r=t.path.canonicalString();n.$a.get(t)||n.Qa.has(r)||(H(ta,"New document in limbo: "+t),n.Qa.add(r),na(n))}function na(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const e=n.Qa.values().next().value;n.Qa.delete(e);const t=new Z(Ce.fromString(e)),r=n.za.next();n.Ua.set(r,new sw(t)),n.$a=n.$a.insert(t,r),cf(n.remoteStore,new Yt(Dt(Fo(t.path)),r,"TargetPurposeLimboResolution",Ys.ae))}}async function Kr(n,e,t){const r=oe(n),s=[],i=[],a=[];r.ka.isEmpty()||(r.ka.forEach((l,c)=>{a.push(r.Ha(c,e,t).then(u=>{var d;if((u||t)&&r.isPrimaryClient){const m=u?!u.fromCache:(d=t==null?void 0:t.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,m?"current":"not-current")}if(u){s.push(u);const m=Go.Yi(c.targetId,u);i.push(m)}}))}),await Promise.all(a),r.La.p_(s),await async function(c,u){const d=oe(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>F.forEach(u,p=>F.forEach(p.Hi,_=>d.persistence.referenceDelegate.addReference(m,p.targetId,_)).next(()=>F.forEach(p.Ji,_=>d.persistence.referenceDelegate.removeReference(m,p.targetId,_)))))}catch(m){if(!rr(m))throw m;H(Ko,"Failed to update sequence numbers: "+m)}for(const m of u){const p=m.targetId;if(!m.fromCache){const _=d.Ts.get(p),E=_.snapshotVersion,k=_.withLastLimboFreeSnapshotVersion(E);d.Ts=d.Ts.insert(p,k)}}}(r.localStore,i))}async function gw(n,e){const t=oe(n);if(!t.currentUser.isEqual(e)){H(ta,"User change. New user:",e.toKey());const r=await sf(t.localStore,e);t.currentUser=e,function(i,a){i.Ga.forEach(l=>{l.forEach(c=>{c.reject(new $(B.CANCELLED,a))})}),i.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Kr(t,r.Rs)}}function _w(n,e){const t=oe(n),r=t.Ua.get(e);if(r&&r.Ba)return fe().add(r.key);{let s=fe();const i=t.qa.get(e);if(!i)return s;for(const a of i){const l=t.ka.get(a);s=s.unionWith(l.view.Sa)}return s}}function If(n){const e=oe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Af.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_w.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=fw.bind(null,e),e.La.p_=ew.bind(null,e.eventManager),e.La.Ja=tw.bind(null,e.eventManager),e}function yw(n){const e=oe(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=dw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=mw.bind(null,e),e}class Ws{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ai(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return Ey(this.persistence,new wy,e.initialUser,this.serializer)}Xa(e){return new rf(Wo.ri,this.serializer)}Za(e){return new Sy}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ws.provider={build:()=>new Ws};class ww extends Ws{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){we(this.persistence.referenceDelegate instanceof zs);const r=this.persistence.referenceDelegate.garbageCollector;return new sy(r,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?nt.withCacheSize(this.cacheSizeBytes):nt.DEFAULT;return new rf(r=>zs.ri(r,t),this.serializer)}}class vo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>yc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=gw.bind(null,this.syncEngine),await Jy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Zy}()}createDatastore(e){const t=ai(e.databaseInfo.databaseId),r=function(i){return new My(i)}(e.databaseInfo);return function(i,a,l,c){return new Fy(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,l){return new By(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>yc(this.syncEngine,t,0),function(){return fc.D()?new fc:new Py}())}createSyncEngine(e,t){return function(s,i,a,l,c,u,d){const m=new iw(s,i,a,l,c,u);return d&&(m.ja=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=oe(s);H(kn,"RemoteStore shutting down."),i.W_.add(5),await Gr(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}vo.provider={build:()=>new vo};/**
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
 */class Rf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):zt("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const un="FirestoreClient";class vw{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Qe.UNAUTHENTICATED,this.clientId=gh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{H(un,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(H(un,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Bt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Zo(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ki(n,e){n.asyncQueue.verifyOperationInProgress(),H(un,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await sf(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function vc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Aw(n);H(un,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>mc(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>mc(e.remoteStore,s)),n._onlineComponents=e}async function Aw(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){H(un,"Using user provided OfflineComponentProvider");try{await Ki(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===B.FAILED_PRECONDITION||s.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Kn("Error using user provided cache. Falling back to memory cache: "+t),await Ki(n,new Ws)}}else H(un,"Using default OfflineComponentProvider"),await Ki(n,new ww(void 0));return n._offlineComponents}async function Cf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(H(un,"Using user provided OnlineComponentProvider"),await vc(n,n._uninitializedComponentsProvider._online)):(H(un,"Using default OnlineComponentProvider"),await vc(n,new vo))),n._onlineComponents}function Ew(n){return Cf(n).then(e=>e.syncEngine)}async function kf(n){const e=await Cf(n),t=e.eventManager;return t.onListen=ow.bind(null,e.syncEngine),t.onUnlisten=cw.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=aw.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=uw.bind(null,e.syncEngine),t}function Tw(n,e,t={}){const r=new Bt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,u){const d=new Rf({next:p=>{d.su(),a.enqueueAndForget(()=>gf(i,m));const _=p.docs.has(l);!_&&p.fromCache?u.reject(new $(B.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&p.fromCache&&c&&c.source==="server"?u.reject(new $(B.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),m=new _f(Fo(l.path),d,{includeMetadataChanges:!0,Ta:!0});return pf(i,m)}(await kf(n),n.asyncQueue,e,t,r)),r.promise}function bw(n,e,t={}){const r=new Bt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,u){const d=new Rf({next:p=>{d.su(),a.enqueueAndForget(()=>gf(i,m)),p.fromCache&&c.source==="server"?u.reject(new $(B.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),m=new _f(l,d,{includeMetadataChanges:!0,Ta:!0});return pf(i,m)}(await kf(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function Sf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Ac=new Map;/**
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
 */function Pf(n,e,t){if(!t)throw new $(B.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Iw(n,e,t,r){if(e===!0&&r===!0)throw new $(B.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ec(n){if(!Z.isDocumentKey(n))throw new $(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Tc(n){if(Z.isDocumentKey(n))throw new $(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ra(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ne()}function xt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new $(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ra(n);throw new $(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */const Vf="firestore.googleapis.com",bc=!0;class Ic{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Vf,this.ssl=bc}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:bc;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=nf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ny)throw new $(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Iw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Sf((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new $(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new $(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new $(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ui{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ic({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ic(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ng;switch(r.type){case"firstParty":return new Lg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Ac.get(t);r&&(H("ComponentProvider","Removing Datastore"),Ac.delete(t),r.terminate())}(this),Promise.resolve()}}function Rw(n,e,t,r={}){var s;const i=(n=xt(n,ui))._getSettings(),a=Object.assign(Object.assign({},i),{emulatorOptions:n._getEmulatorOptions()}),l=`${e}:${t}`;i.host!==Vf&&i.host!==l&&Kn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},i),{host:l,ssl:!1,emulatorOptions:r});if(!Ds(c,a)&&(n._setSettings(c),r.mockUserToken)){let u,d;if(typeof r.mockUserToken=="string")u=r.mockUserToken,d=Qe.MOCK_USER;else{u=Wd(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new $(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new Qe(m)}n._authCredentials=new Mg(new mh(u,d))}}/**
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
 */class hi{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new hi(this.firestore,e,this._query)}}class it{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new nn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new it(this.firestore,e,this._key)}}class nn extends hi{constructor(e,t,r){super(e,t,Fo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new it(this.firestore,null,new Z(e))}withConverter(e){return new nn(this.firestore,e,this._path)}}function sa(n,e,...t){if(n=Rt(n),Pf("collection","path",e),n instanceof ui){const r=Ce.fromString(e,...t);return Tc(r),new nn(n,null,r)}{if(!(n instanceof it||n instanceof nn))throw new $(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ce.fromString(e,...t));return Tc(r),new nn(n.firestore,null,r)}}function $r(n,e,...t){if(n=Rt(n),arguments.length===1&&(e=gh.newId()),Pf("doc","path",e),n instanceof ui){const r=Ce.fromString(e,...t);return Ec(r),new it(n,null,new Z(r))}{if(!(n instanceof it||n instanceof nn))throw new $(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ce.fromString(e,...t));return Ec(r),new it(n.firestore,n instanceof nn?n.converter:null,new Z(r))}}/**
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
 */const Rc="AsyncQueue";class Cc{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new af(this,"async_queue_retry"),this.Su=()=>{const r=Gi();r&&H(Rc,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=e;const t=Gi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=Gi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new Bt;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!rr(e))throw e;H(Rc,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw zt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.bu=t,t}enqueueAfterDelay(e,t,r){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const s=Yo.createAndSchedule(this,e,t,r,i=>this.Fu(i));return this.fu.push(s),s}Du(){this.gu&&ne()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class ir extends ui{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Cc,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Cc(e),this._firestoreClient=void 0,await e}}}function Cw(n,e){const t=typeof n=="object"?n:rp(),r=typeof n=="string"?n:xs,s=Ro(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=zd("firestore");i&&Rw(s,...i)}return s}function fi(n){if(n._terminated)throw new $(B.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||kw(n),n._firestoreClient}function kw(n){var e,t,r;const s=n._freezeSettings(),i=function(l,c,u,d){return new Yg(l,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Sf(d.experimentalLongPollingOptions),d.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new vw(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(n._componentsProvider))}/**
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
 */class Zn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Zn(We.fromBase64String(e))}catch(t){throw new $(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Zn(We.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Qr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new $(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new He(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class oa{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new $(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new $(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
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
 */const Sw=/^__.*__$/;class Pw{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new dn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Hr(e,this.data,t,this.fieldTransforms)}}class Df{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new dn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Nf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne()}}class la{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new la(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ku({path:r,Qu:!1});return s.$u(e),s}Uu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Gs(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(Nf(this.Lu)&&Sw.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class Vw{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ai(e)}ju(e,t,r,s=!1){return new la({Lu:e,methodName:t,zu:r,path:He.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ca(n){const e=n._freezeSettings(),t=ai(n._databaseId);return new Vw(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Mf(n,e,t,r,s,i={}){const a=n.ju(i.merge||i.mergeFields?2:0,e,t,s);ua("Data must be an object, but it was:",a,r);const l=Lf(r,a);let c,u;if(i.merge)c=new dt(a.fieldMask),u=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const m of i.mergeFields){const p=Ao(e,m,t);if(!a.contains(p))throw new $(B.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);Uf(d,p)||d.push(p)}c=new dt(d),u=a.fieldTransforms.filter(m=>c.covers(m.field))}else c=null,u=a.fieldTransforms;return new Pw(new rt(l),c,u)}class di extends ia{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof di}}function Of(n,e,t,r){const s=n.ju(1,e,t);ua("Data must be an object, but it was:",s,r);const i=[],a=rt.empty();fn(r,(c,u)=>{const d=ha(e,c,t);u=Rt(u);const m=s.Uu(d);if(u instanceof di)i.push(d);else{const p=mi(u,m);p!=null&&(i.push(d),a.set(d,p))}});const l=new dt(i);return new Df(a,l,s.fieldTransforms)}function xf(n,e,t,r,s,i){const a=n.ju(1,e,t),l=[Ao(e,r,t)],c=[s];if(i.length%2!=0)throw new $(B.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)l.push(Ao(e,i[p])),c.push(i[p+1]);const u=[],d=rt.empty();for(let p=l.length-1;p>=0;--p)if(!Uf(u,l[p])){const _=l[p];let E=c[p];E=Rt(E);const k=a.Uu(_);if(E instanceof di)u.push(_);else{const S=mi(E,k);S!=null&&(u.push(_),d.set(_,S))}}const m=new dt(u);return new Df(d,m,a.fieldTransforms)}function mi(n,e){if(Ff(n=Rt(n)))return ua("Unsupported field value:",e,n),Lf(n,e);if(n instanceof ia)return function(r,s){if(!Nf(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=mi(l,s.Ku(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Rt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return A_(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Oe.fromDate(r);return{timestampValue:qs(s.serializer,i)}}if(r instanceof Oe){const i=new Oe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:qs(s.serializer,i)}}if(r instanceof oa)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Zn)return{bytesValue:Qh(s.serializer,r._byteString)};if(r instanceof it){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Wu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:zo(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof aa)return function(a,l){return{mapValue:{fields:{[bh]:{stringValue:Rh},[Ls]:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw l.Wu("VectorValues must only contain numeric values.");return Uo(l.serializer,u)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${ra(r)}`)}(n,e)}function Lf(n,e){const t={};return yh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fn(n,(r,s)=>{const i=mi(s,e.qu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Ff(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Oe||n instanceof oa||n instanceof Zn||n instanceof it||n instanceof ia||n instanceof aa)}function ua(n,e,t){if(!Ff(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=ra(t);throw r==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+r)}}function Ao(n,e,t){if((e=Rt(e))instanceof Qr)return e._internalPath;if(typeof e=="string")return ha(n,e);throw Gs("Field path arguments must be of type string or ",n,!1,void 0,t)}const Dw=new RegExp("[~\\*/\\[\\]]");function ha(n,e,t){if(e.search(Dw)>=0)throw Gs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Qr(...e.split("."))._internalPath}catch{throw Gs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Gs(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new $(B.INVALID_ARGUMENT,l+n+c)}function Uf(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Bf{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new it(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Nw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(jf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Nw extends Bf{data(){return super.data()}}function jf(n,e){return typeof e=="string"?ha(n,e):e instanceof Qr?e._internalPath:e._delegate._internalPath}/**
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
 */function Mw(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new $(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ow{convertValue(e,t="none"){switch(ln(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(an(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ne()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return fn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[Ls].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>Ve(a.doubleValue));return new aa(i)}convertGeoPoint(e){return new oa(Ve(e.latitude),Ve(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ei(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Lr(e));default:return null}}convertTimestamp(e){const t=on(e);return new Oe(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Ce.fromString(e);we(tf(r));const s=new Fr(r.get(1),r.get(3)),i=new Z(r.popFirst(5));return s.isEqual(t)||zt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function qf(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
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
 */class Rr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class zf extends Bf{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ps(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(jf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Ps extends zf{data(e={}){return super.data(e)}}class xw{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Rr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Ps(this._firestore,this._userDataWriter,r.key,r,new Rr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new $(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const c=new Ps(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Rr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Ps(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Rr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return l.type!==0&&(u=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:Lw(l.type),doc:c,oldIndex:u,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Lw(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne()}}/**
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
 */function Fw(n){n=xt(n,it);const e=xt(n.firestore,ir);return Tw(fi(e),n._key).then(t=>Uw(e,n,t))}class Hf extends Ow{constructor(e){super(),this.firestore=e}convertBytes(e){return new Zn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new it(this.firestore,null,t)}}function Wt(n){n=xt(n,hi);const e=xt(n.firestore,ir),t=fi(e),r=new Hf(e);return Mw(n._query),bw(t,n._query).then(s=>new xw(e,r,n,s))}function Wf(n,e,t){n=xt(n,it);const r=xt(n.firestore,ir),s=qf(n.converter,e,t);return fa(r,[Mf(ca(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,mt.none())])}function Gf(n,e,t,...r){n=xt(n,it);const s=xt(n.firestore,ir),i=ca(s);let a;return a=typeof(e=Rt(e))=="string"||e instanceof Qr?xf(i,"updateDoc",n._key,e,t,r):Of(i,"updateDoc",n._key,e),fa(s,[a.toMutation(n._key,mt.exists(!0))])}function fa(n,e){return function(r,s){const i=new Bt;return r.asyncQueue.enqueueAndForget(async()=>hw(await Ew(r),s,i)),i.promise}(fi(n),e)}function Uw(n,e,t){const r=t.docs.get(e._key),s=new Hf(n);return new zf(n,s,e._key,r,new Rr(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */class Bw{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=ca(e)}set(e,t,r){this._verifyNotCommitted();const s=$i(e,this._firestore),i=qf(s.converter,t,r),a=Mf(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(a.toMutation(s._key,mt.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=$i(e,this._firestore);let a;return a=typeof(t=Rt(t))=="string"||t instanceof Qr?xf(this._dataReader,"WriteBatch.update",i._key,t,r,s):Of(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(a.toMutation(i._key,mt.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=$i(e,this._firestore);return this._mutations=this._mutations.concat(new Bo(t._key,mt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new $(B.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function $i(n,e){if((n=Rt(n)).firestore!==e)throw new $(B.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */function jw(n){return fi(n=xt(n,ir)),new Bw(n,e=>fa(n,e))}(function(e,t=!0){(function(s){tr=s})(np),rn(new jt("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new ir(new Og(r.getProvider("auth-internal")),new Fg(a,r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new $(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fr(u.options.projectId,d)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Vt(Nl,Ml,e),Vt(Nl,Ml,"esm2017")})();const qw={apiKey:"AIzaSyCTe1si_Cg2Pkl2X77JpscYfW6KajberCM",authDomain:"drawit-1f620.firebaseapp.com",projectId:"drawit-1f620",storageBucket:"drawit-1f620.firebasestorage.app",messagingSenderId:"513679195329",appId:"1:513679195329:web:d650c7307b461788dc6840",measurementId:"G-P8GR3KFS0H"},zw=Lu(qw),pi=Cw(zw),Xr=sa(pi,"games"),Gt=sa(pi,"users");sa(pi,"drawings");async function Hw(n){try{const e=$s(yt),t=n.filter(i=>!e[i]);if(t.length===0)return;const r=await Wt(Gt),s={};r.docs.forEach(i=>{const a=i.data();t.includes(a.name)&&(s[a.name]={...a,id:i.id})}),yt.update(i=>({...i,...s}))}catch(e){console.error("Error loading users:",e)}}async function Ww(n){try{const t=(await Wt(Gt)).docs.find(i=>i.data().name===n);if(t){const a={...t.data(),id:t.id};return Ze.set(a),yt.update(l=>({...l,[a.name]:a})),await Kf(a.name),a}const r=$r(Gt),s={name:n,coins:0,createdAt:new Date,id:r.id};return await Wf(r,s),Ze.set(s),yt.update(i=>({...i,[s.name]:s})),s}catch(e){throw console.error("Error creating/retrieving user:",e),e}}async function Gw(n){try{const e=$s(yt);if(e[n])return e[n];const r=(await Wt(Gt)).docs.find(s=>s.data().name===n);if(r){const i={...r.data(),id:r.id};return yt.update(a=>({...a,[i.name]:i})),i}return null}catch(e){return console.error("Error getting user:",e),null}}async function kc(n){try{if(!n){const a=(await Wt(Gt)).docs.map(l=>({...l.data(),id:l.id}));return yt.update(l=>{const c={...l};return a.forEach(u=>{c[u.name]=u}),c}),a}const e=$s(yt),t=Object.values(e).filter(i=>i.name.toLowerCase().includes(n.toLowerCase()));if(t.length>0)return t;const s=(await Wt(Gt)).docs.map(i=>({...i.data(),id:i.id})).filter(i=>i.name.toLowerCase().includes(n.toLowerCase()));return yt.update(i=>{const a={...i};return s.forEach(l=>{a[l.name]=l}),a}),s}catch(e){return console.error("Error searching users:",e),[]}}async function Kf(n){try{const t=(await Wt(Xr)).docs.filter(r=>{const s=r.data();return s.users&&s.users.includes(n)}).map(r=>({...r.data(),id:r.id}));return zr.set(t),t}catch(e){return console.error("Error in loadGames:",e),[]}}async function Kw(n){const e=$r(Xr),t={id:e.id,users:n,createdAt:new Date,drawings:[]};return await Wf(e,t),Ts.set(!1),t}async function gi(n){if(!n.id)return console.error("Cannot update game without ID"),n;try{const e=$r(Xr,n.id);return await Gf(e,{drawings:n.drawings}),n}catch(e){return console.error("Error updating game:",e),n}}async function Dr(n,e){if(!n.id)return console.error("Cannot add coins to user without ID"),n;try{const t=$r(Gt,n.id),r=n.coins+e;await Gf(t,{coins:r});const s={...n,coins:r};return Ze.set(s),s}catch(t){return console.error("Error adding coins:",t),n}}async function $w(){try{const n=$s(Ze);if(!n)return!1;const t=(await Wt(Gt)).docs.find(i=>i.data().name===n.name);if(!t)return Ze.set(null),localStorage.removeItem("drawIt-user"),localStorage.removeItem("drawIt-games"),localStorage.removeItem("drawIt-users"),!1;const s={...t.data(),id:t.id};return Ze.set(s),!0}catch(n){return console.error("Error validating user session:",n),!1}}async function Sc(n){try{const e=await Fw($r(Xr,n));return e.exists()?{...e.data(),id:e.id}:null}catch(e){return console.error("Error loading game:",e),null}}async function Qw(){try{const n=await Wt(Xr),e=[];n.docs.forEach(r=>{const s=r.data();if(s.drawings&&s.drawings.length>0){const i=s.drawings.map(a=>({...a,gameId:r.id}));for(const a of i)a.guessedBy=s.users.find(l=>l!==a.artist)??"";e.push(...i)}});const t=e.sort((r,s)=>{function i(c){return c?c instanceof Date?c:typeof c.toDate=="function"?c.toDate():typeof c=="string"?new Date(c):new Date(c):new Date(0)}const a=i(r.createdAt);return i(s.createdAt).getTime()-a.getTime()});return console.log(t),t.slice(0,100)}catch(n){return console.error("Error fetching recent drawings:",n),[]}}var da={};(function n(e,t,r,s){var i=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",l=function(){if(!e.OffscreenCanvas)return!1;var D=new OffscreenCanvas(1,1),R=D.getContext("2d");R.fillRect(0,0,1,1);var G=D.transferToImageBitmap();try{R.createPattern(G,"no-repeat")}catch{return!1}return!0}();function c(){}function u(D){var R=t.exports.Promise,G=R!==void 0?R:e.Promise;return typeof G=="function"?new G(D):(D(c,c),null)}var d=function(D,R){return{transform:function(G){if(D)return G;if(R.has(G))return R.get(G);var W=new OffscreenCanvas(G.width,G.height),ae=W.getContext("2d");return ae.drawImage(G,0,0),R.set(G,W),W},clear:function(){R.clear()}}}(l,new Map),m=function(){var D=Math.floor(16.666666666666668),R,G,W={},ae=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(R=function(ie){var ce=Math.random();return W[ce]=requestAnimationFrame(function Y(ue){ae===ue||ae+D-1<ue?(ae=ue,delete W[ce],ie()):W[ce]=requestAnimationFrame(Y)}),ce},G=function(ie){W[ie]&&cancelAnimationFrame(W[ie])}):(R=function(ie){return setTimeout(ie,D)},G=function(ie){return clearTimeout(ie)}),{frame:R,cancel:G}}(),p=function(){var D,R,G={};function W(ae){function ie(ce,Y){ae.postMessage({options:ce||{},callback:Y})}ae.init=function(Y){var ue=Y.transferControlToOffscreen();ae.postMessage({canvas:ue},[ue])},ae.fire=function(Y,ue,Ae){if(R)return ie(Y,null),R;var Ee=Math.random().toString(36).slice(2);return R=u(function(_e){function be(Pe){Pe.data.callback===Ee&&(delete G[Ee],ae.removeEventListener("message",be),R=null,d.clear(),Ae(),_e())}ae.addEventListener("message",be),ie(Y,Ee),G[Ee]=be.bind(null,{data:{callback:Ee}})}),R},ae.reset=function(){ae.postMessage({reset:!0});for(var Y in G)G[Y](),delete G[Y]}}return function(){if(D)return D;if(!r&&i){var ae=["var CONFETTI, SIZE = {}, module = {};","("+n.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{D=new Worker(URL.createObjectURL(new Blob([ae])))}catch(ie){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",ie),null}W(D)}return D}}(),_={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function E(D,R){return R?R(D):D}function k(D){return D!=null}function S(D,R,G){return E(D&&k(D[R])?D[R]:_[R],G)}function O(D){return D<0?0:Math.floor(D)}function x(D,R){return Math.floor(Math.random()*(R-D))+D}function L(D){return parseInt(D,16)}function U(D){return D.map(te)}function te(D){var R=String(D).replace(/[^0-9a-f]/gi,"");return R.length<6&&(R=R[0]+R[0]+R[1]+R[1]+R[2]+R[2]),{r:L(R.substring(0,2)),g:L(R.substring(2,4)),b:L(R.substring(4,6))}}function X(D){var R=S(D,"origin",Object);return R.x=S(R,"x",Number),R.y=S(R,"y",Number),R}function T(D){D.width=document.documentElement.clientWidth,D.height=document.documentElement.clientHeight}function w(D){var R=D.getBoundingClientRect();D.width=R.width,D.height=R.height}function v(D){var R=document.createElement("canvas");return R.style.position="fixed",R.style.top="0px",R.style.left="0px",R.style.pointerEvents="none",R.style.zIndex=D,R}function b(D,R,G,W,ae,ie,ce,Y,ue){D.save(),D.translate(R,G),D.rotate(ie),D.scale(W,ae),D.arc(0,0,1,ce,Y,ue),D.restore()}function A(D){var R=D.angle*(Math.PI/180),G=D.spread*(Math.PI/180);return{x:D.x,y:D.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:D.startVelocity*.5+Math.random()*D.startVelocity,angle2D:-R+(.5*G-Math.random()*G),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:D.color,shape:D.shape,tick:0,totalTicks:D.ticks,decay:D.decay,drift:D.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:D.gravity*3,ovalScalar:.6,scalar:D.scalar,flat:D.flat}}function C(D,R){R.x+=Math.cos(R.angle2D)*R.velocity+R.drift,R.y+=Math.sin(R.angle2D)*R.velocity+R.gravity,R.velocity*=R.decay,R.flat?(R.wobble=0,R.wobbleX=R.x+10*R.scalar,R.wobbleY=R.y+10*R.scalar,R.tiltSin=0,R.tiltCos=0,R.random=1):(R.wobble+=R.wobbleSpeed,R.wobbleX=R.x+10*R.scalar*Math.cos(R.wobble),R.wobbleY=R.y+10*R.scalar*Math.sin(R.wobble),R.tiltAngle+=.1,R.tiltSin=Math.sin(R.tiltAngle),R.tiltCos=Math.cos(R.tiltAngle),R.random=Math.random()+2);var G=R.tick++/R.totalTicks,W=R.x+R.random*R.tiltCos,ae=R.y+R.random*R.tiltSin,ie=R.wobbleX+R.random*R.tiltCos,ce=R.wobbleY+R.random*R.tiltSin;if(D.fillStyle="rgba("+R.color.r+", "+R.color.g+", "+R.color.b+", "+(1-G)+")",D.beginPath(),a&&R.shape.type==="path"&&typeof R.shape.path=="string"&&Array.isArray(R.shape.matrix))D.fill(_t(R.shape.path,R.shape.matrix,R.x,R.y,Math.abs(ie-W)*.1,Math.abs(ce-ae)*.1,Math.PI/10*R.wobble));else if(R.shape.type==="bitmap"){var Y=Math.PI/10*R.wobble,ue=Math.abs(ie-W)*.1,Ae=Math.abs(ce-ae)*.1,Ee=R.shape.bitmap.width*R.scalar,_e=R.shape.bitmap.height*R.scalar,be=new DOMMatrix([Math.cos(Y)*ue,Math.sin(Y)*ue,-Math.sin(Y)*Ae,Math.cos(Y)*Ae,R.x,R.y]);be.multiplySelf(new DOMMatrix(R.shape.matrix));var Pe=D.createPattern(d.transform(R.shape.bitmap),"no-repeat");Pe.setTransform(be),D.globalAlpha=1-G,D.fillStyle=Pe,D.fillRect(R.x-Ee/2,R.y-_e/2,Ee,_e),D.globalAlpha=1}else if(R.shape==="circle")D.ellipse?D.ellipse(R.x,R.y,Math.abs(ie-W)*R.ovalScalar,Math.abs(ce-ae)*R.ovalScalar,Math.PI/10*R.wobble,0,2*Math.PI):b(D,R.x,R.y,Math.abs(ie-W)*R.ovalScalar,Math.abs(ce-ae)*R.ovalScalar,Math.PI/10*R.wobble,0,2*Math.PI);else if(R.shape==="star")for(var he=Math.PI/2*3,Ue=4*R.scalar,et=8*R.scalar,ct=R.x,Tt=R.y,St=5,tt=Math.PI/St;St--;)ct=R.x+Math.cos(he)*et,Tt=R.y+Math.sin(he)*et,D.lineTo(ct,Tt),he+=tt,ct=R.x+Math.cos(he)*Ue,Tt=R.y+Math.sin(he)*Ue,D.lineTo(ct,Tt),he+=tt;else D.moveTo(Math.floor(R.x),Math.floor(R.y)),D.lineTo(Math.floor(R.wobbleX),Math.floor(ae)),D.lineTo(Math.floor(ie),Math.floor(ce)),D.lineTo(Math.floor(W),Math.floor(R.wobbleY));return D.closePath(),D.fill(),R.tick<R.totalTicks}function y(D,R,G,W,ae){var ie=R.slice(),ce=D.getContext("2d"),Y,ue,Ae=u(function(Ee){function _e(){Y=ue=null,ce.clearRect(0,0,W.width,W.height),d.clear(),ae(),Ee()}function be(){r&&!(W.width===s.width&&W.height===s.height)&&(W.width=D.width=s.width,W.height=D.height=s.height),!W.width&&!W.height&&(G(D),W.width=D.width,W.height=D.height),ce.clearRect(0,0,W.width,W.height),ie=ie.filter(function(Pe){return C(ce,Pe)}),ie.length?Y=m.frame(be):_e()}Y=m.frame(be),ue=_e});return{addFettis:function(Ee){return ie=ie.concat(Ee),Ae},canvas:D,promise:Ae,reset:function(){Y&&m.cancel(Y),ue&&ue()}}}function ge(D,R){var G=!D,W=!!S(R||{},"resize"),ae=!1,ie=S(R,"disableForReducedMotion",Boolean),ce=i&&!!S(R||{},"useWorker"),Y=ce?p():null,ue=G?T:w,Ae=D&&Y?!!D.__confetti_initialized:!1,Ee=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,_e;function be(he,Ue,et){for(var ct=S(he,"particleCount",O),Tt=S(he,"angle",Number),St=S(he,"spread",Number),tt=S(he,"startVelocity",Number),Jr=S(he,"decay",Number),yi=S(he,"gravity",Number),ar=S(he,"drift",Number),Vn=S(he,"colors",U),Yr=S(he,"ticks",Number),Ne=S(he,"shapes"),je=S(he,"scalar"),Dn=!!S(he,"flat"),lr=X(he),cr=ct,ur=[],gn=D.width*lr.x,Zr=D.height*lr.y;cr--;)ur.push(A({x:gn,y:Zr,angle:Tt,spread:St,startVelocity:tt,color:Vn[cr%Vn.length],shape:Ne[x(0,Ne.length)],ticks:Yr,decay:Jr,gravity:yi,drift:ar,scalar:je,flat:Dn}));return _e?_e.addFettis(ur):(_e=y(D,ur,ue,Ue,et),_e.promise)}function Pe(he){var Ue=ie||S(he,"disableForReducedMotion",Boolean),et=S(he,"zIndex",Number);if(Ue&&Ee)return u(function(tt){tt()});G&&_e?D=_e.canvas:G&&!D&&(D=v(et),document.body.appendChild(D)),W&&!Ae&&ue(D);var ct={width:D.width,height:D.height};Y&&!Ae&&Y.init(D),Ae=!0,Y&&(D.__confetti_initialized=!0);function Tt(){if(Y){var tt={getBoundingClientRect:function(){if(!G)return D.getBoundingClientRect()}};ue(tt),Y.postMessage({resize:{width:tt.width,height:tt.height}});return}ct.width=ct.height=null}function St(){_e=null,W&&(ae=!1,e.removeEventListener("resize",Tt)),G&&D&&(document.body.contains(D)&&document.body.removeChild(D),D=null,Ae=!1)}return W&&!ae&&(ae=!0,e.addEventListener("resize",Tt,!1)),Y?Y.fire(he,ct,St):be(he,ct,St)}return Pe.reset=function(){Y&&Y.reset(),_e&&_e.reset()},Pe}var lt;function mn(){return lt||(lt=ge(null,{useWorker:!0,resize:!0})),lt}function _t(D,R,G,W,ae,ie,ce){var Y=new Path2D(D),ue=new Path2D;ue.addPath(Y,new DOMMatrix(R));var Ae=new Path2D;return Ae.addPath(ue,new DOMMatrix([Math.cos(ce)*ae,Math.sin(ce)*ae,-Math.sin(ce)*ie,Math.cos(ce)*ie,G,W])),Ae}function pn(D){if(!a)throw new Error("path confetti are not supported in this browser");var R,G;typeof D=="string"?R=D:(R=D.path,G=D.matrix);var W=new Path2D(R),ae=document.createElement("canvas"),ie=ae.getContext("2d");if(!G){for(var ce=1e3,Y=ce,ue=ce,Ae=0,Ee=0,_e,be,Pe=0;Pe<ce;Pe+=2)for(var he=0;he<ce;he+=2)ie.isPointInPath(W,Pe,he,"nonzero")&&(Y=Math.min(Y,Pe),ue=Math.min(ue,he),Ae=Math.max(Ae,Pe),Ee=Math.max(Ee,he));_e=Ae-Y,be=Ee-ue;var Ue=10,et=Math.min(Ue/_e,Ue/be);G=[et,0,0,et,-Math.round(_e/2+Y)*et,-Math.round(be/2+ue)*et]}return{type:"path",path:R,matrix:G}}function or(D){var R,G=1,W="#000000",ae='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof D=="string"?R=D:(R=D.text,G="scalar"in D?D.scalar:G,ae="fontFamily"in D?D.fontFamily:ae,W="color"in D?D.color:W);var ie=10*G,ce=""+ie+"px "+ae,Y=new OffscreenCanvas(ie,ie),ue=Y.getContext("2d");ue.font=ce;var Ae=ue.measureText(R),Ee=Math.ceil(Ae.actualBoundingBoxRight+Ae.actualBoundingBoxLeft),_e=Math.ceil(Ae.actualBoundingBoxAscent+Ae.actualBoundingBoxDescent),be=2,Pe=Ae.actualBoundingBoxLeft+be,he=Ae.actualBoundingBoxAscent+be;Ee+=be+be,_e+=be+be,Y=new OffscreenCanvas(Ee,_e),ue=Y.getContext("2d"),ue.font=ce,ue.fillStyle=W,ue.fillText(R,Pe,he);var Ue=1/G;return{type:"bitmap",bitmap:Y.transferToImageBitmap(),matrix:[Ue,0,0,Ue,-Ee*Ue/2,-_e*Ue/2]}}t.exports=function(){return mn().apply(this,arguments)},t.exports.reset=function(){mn().reset()},t.exports.create=ge,t.exports.shapeFromPath=pn,t.exports.shapeFromText=or})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),da,!1);const Xw=da.exports;da.exports.create;function Jw(n){const e=document.createElement("div");e.className="toast toast-top toast-end",e.innerHTML=`
        <div class="alert bg-primary/80 text-black border-2 border-primary shadow-lg">
            <span>${n}</span>
        </div>
    `,document.body.appendChild(e),setTimeout(()=>{e.remove()},5e3),Xw({particleCount:100,spread:70,origin:{y:.6}})}let Yw=["apple","airplane","alligator","anchor","angel","antelope","apron","armchair","arrow","artist","avocado","axe","baby","backpack","bacon","badger","balloon","banana","bandage","banjo","barn","barrel","baseball","basket","bathtub","battery","beach","bear","beaver","bedroom","bee","beetle","bell","belt","bench","bicycle","binoculars","bird","birthday","blender","blimp","block","blouse","boat","bomb","book","boomerang","boot","bottle","bouquet","bow","boxer","bracelet","brain","branch","bread","bridge","broccoli","broom","brush","bucket","bulldozer","bullet","bus","bush","butterfly","button","cactus","cage","cake","calculator","camel","camera","campfire","can","candle","cannon","canoe","cap","cape","car","carrot","cart","castle","cat","caterpillar","cave","ceiling","cellphone","chainsaw","chair","chalk","champion","cheese","cherry","chest","chicken","chimney","church","circle","claw","cliff","clock","cloud","clown","coat","cobweb","coin","comet","computer","cookie","couch","cow","crab","crayon","cream","crocodile","crown","cruise","cupcake","curtain","cushion","dagger","daisy","dance","dart","deer","desk","desert","diamond","dice","dinosaur","dish","diver","dog","doll","dolphin","donkey","door","doormat","dragon","drawer","drill","drone","drum","duck","dumptruck","eagle","ear","earthquake","eggplant","electricity","elephant","elevator","engine","envelope","eraser","explosion","eyeglasses","face","fan","farm","feather","fence","ferret","fire","firefighter","fireplace","firetruck","fish","fishing","flag","flamingo","flashlight","flood","floor","flower","flute","fly","folder","football","fork","fountain","fox","fridge","frog","fryingpan","galaxy","garage","garden","gargoyle","gate","ghost","giraffe","glacier","glider","glove","goat","goggles","goldfish","golf","gorilla","grapes","grass","grill","guitar","hammer","hamster","handcuffs","handle","hanger","harp","hat","headphones","hedgehog","helicopter","helmet","hill","hippo","hive","hook","horn","horse","hospital","hotdog","house","hovercraft","hug","hurdle","hurricane","iceberg","icicle","igloo","iguana","ink","insect","iron","island","jacket","jail","jellyfish","jigsaw","jockey","jungle","kangaroo","kettle","key","keyboard","kick","kidney","kite","kitten","knee","knife","koala","ladder","lamp","lantern","laptop","lasso","laundry","leaf","leash","leg","lemon","leopard","letter","library","lightbulb","lighthouse","lightning","limo","lion","lips","lizard","lock","locust","lollipop","magnet","mailbox","map","maracas","mask","match","meatball","megaphone","mermaid","meteor","microscope","microwave","milk","mirror","moat","mole","monkey","monster","moon","mosquito","motorcycle","mountain","mouse","mower","mug","mummy","mushroom","music","nail","needle","nest","net","ninja","noodle","notebook","nose","notepad","nun","nut","oasis","ocean","octopus","oil","onion","ostrich","otter","oven","owl","oxygen","paddle","pajamas","panda","panther","parachute","parrot","party","passport","peacock","peanut","pear","peas","pencil","penguin","pepper","perfume","phone","piano","picture","pig","pigeon","pill","pillow","pineapple","pipe","pirate","pizza","planet","plate","plow","plug","plumber","pocket","pool","popcorn","postcard","poster","potato","printer","pudding","puppet","puppy","pyramid","quail","quartz","queen","quilt","rabbit","raccoon","radio","raft","rain","rainbow","rake","rat","raven","razor","reindeer","remote","ribbon","ring","robot","rocket","rockingchair","roof","rope","rose","ruler","saddle","sailboat","salad","sand","sandcastle","satellite","saw","scarf","school","scissors","scorpion","screw","seal","seesaw","shampoo","shark","sheep","shelf","shell","ship","shoe","shoppingcart","shovel","shower","shrimp","sink","skateboard","skeleton","ski","skirt","skunk","sled","sleepingbag","slide","slime","sloth","slug","smoke","snail","snake","sneeze","snow","snowball","snowflake","snowman","sock","sofa","soldier","spaceship","spaghetti","spark","speaker","spear","spectacles","spider","spoon","spring","spy","squirrel","stairs","starfish","statue","steak","steeringwheel","stethoscope","stomach","stool","stove","straw","street","string","submarine","suitcase","sun","sunglasses","sunset","surfboard","surgeon","swamp","swan","sweater","swing","sword","table","tail","tape","tarp","taxi","teacup","teacher","teapot","telescope","tent","thermometer","throne","ticket","tie","tiger","toad","toaster","toilet","toothbrush","toothpaste","torch","tornado","towel","tractor","traffic","train","trampoline","trash","treasure","treehouse","triangle","tricycle","troll","trophy","truck","trumpet","tuba","turtle","tusk","tv","typewriter","umbrella","unicorn","urn","vacuum","vampire","vase","vegetable","village","vine","violin","volcano","vulture","wagon","wall","wallet","wardrobe","washingmachine","watch","waterfall","wave","web","whale","wheelbarrow","whistle","wig","window","windmill","wing","wolf","worm","wrench","xylophone","yacht","yak","yo-yo","zebra","zoo"];function ma(n,e){return n.drawings.filter(r=>!r.guessed)[0]||null}async function Zw(n,e,t){const r=ma(n,e.name);if(!r)return;const s=t.toLowerCase().trim(),i=r.secretWord.toLowerCase().trim();let a=!1;return s===i?(a=!0,r.guessed=!0,r.guessedBy=e.name,await Dr(e,r.coins),Jw(`It was ${r.secretWord}! You got ${r.coins} coins!`)):r.guesses.includes(t)||r.guesses.push(t),await gi(n),a}async function Pc(n){return Yw.sort(()=>Math.random()-.5).slice(0,n).map((t,r)=>({secretWord:t,coins:r+1}))}function As(n,e){const t=ma(n);if(!t){if(n.drawings.length===0)return n.users[0]===e?"draw":"waiting";const r=[...n.drawings].reverse().find(l=>l.guessed);if(!r)return n.users[0]===e?"draw":"waiting";const i=(n.users.indexOf(r.artist)+1)%n.users.length;return n.users[i]===e?"draw":"waiting"}return t.artist===e?"waiting":"guess"}function ev(n){return{...n,hintPurchased:n.hintPurchased??!1,superHintPurchased:n.superHintPurchased??!1}}function Vc(n){return`The word is ${n.secretWord.length} letters long`}function Dc(n){const e=n.secretWord.split("");for(let t=e.length-1;t>0;t--){const r=Math.floor(Math.random()*(t+1));[e[t],e[r]]=[e[r],e[t]]}return`Letters: ${e.join(" · ").toUpperCase()}`}function Ks(n){return n?n instanceof Date?n.getTime():typeof n.toDate=="function"?n.toDate().getTime():typeof n=="string"?new Date(n).getTime():new Date(n).getTime():0}async function tv(n,e,t){if(t.coins<5||e.hintPurchased)return!1;const r=n.drawings.findIndex(s=>s.artist===e.artist&&Ks(s.createdAt)===Ks(e.createdAt));return r===-1?!1:(n.drawings[r]={...e,hintPurchased:!0},await gi(n),!0)}async function nv(n,e,t){if(t.coins<10||!e.hintPurchased||e.superHintPurchased)return!1;const r=n.drawings.findIndex(s=>s.artist===e.artist&&Ks(s.createdAt)===Ks(e.createdAt));return r===-1?!1:(n.drawings[r]={...e,superHintPurchased:!0},await gi(n),!0)}const _i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAASUExURQAAAAYGCP/4Vf/QLPGZEf///5e4X0EAAAABdFJOUwBA5thmAAAAAWJLR0QF+G/pxwAAAAd0SU1FB+kFEQMBEaw38IoAAABMSURBVEjHY2CAA0EsgAEbGFVIP4VgQSUsAF31qEL6KUSoMcYCXEAAonpU4ajCUYWjCkcVjiokQyGisnHBArDWXKMK6adwKLQfR5pCAFjAgTiNHXoCAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI1LTA1LTE3VDAzOjAwOjU0KzAwOjAwAqVpBwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNS0wNS0xN1QwMzowMDo1NCswMDowMHP40bsAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjUtMDUtMTdUMDM6MDE6MTcrMDA6MDB+jY89AAAAAElFTkSuQmCC";function Nc(n){let e,t=n[0][0].toUpperCase()+"",r;return{c(){e=M("div"),r=re(t),I(e,"class","w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold")},m(s,i){q(s,e,i),V(e,r)},p(s,i){i&1&&t!==(t=s[0][0].toUpperCase()+"")&&ve(r,t)},d(s){s&&j(e)}}}function Mc(n){let e,t,r,s,i;return{c(){e=M("span"),t=re(n[1]),r=J(),s=M("img"),It(s.src,i=_i)||I(s,"src",i),I(s,"class","w-4 h-4"),I(s,"alt","coins")},m(a,l){q(a,e,l),V(e,t),q(a,r,l),q(a,s,l)},p(a,l){l&2&&ve(t,a[1])},d(a){a&&(j(e),j(r),j(s))}}}function Oc(n){let e,t,r;return{c(){e=re("· "),t=M("span"),r=re(n[3]),I(t,"class","text-xs text-black/60")},m(s,i){q(s,e,i),q(s,t,i),V(t,r)},p(s,i){i&8&&ve(r,s[3])},d(s){s&&(j(e),j(t))}}}function xc(n){let e,t;return{c(){e=Xt("svg"),t=Xt("path"),I(t,"fill-rule","evenodd"),I(t,"d","M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"),I(t,"clip-rule","evenodd"),I(e,"xmlns","http://www.w3.org/2000/svg"),I(e,"class","h-5 w-5 text-gray-400"),I(e,"viewBox","0 0 20 20"),I(e,"fill","currentColor")},m(r,s){q(r,e,s),V(e,t)},d(r){r&&j(e)}}}function rv(n){let e,t,r,s,i,a,l,c,u,d,m,p,_,E=n[2]&&Nc(n),k=n[1]!==null&&Mc(n),S=n[3]&&Oc(n),O=n[4]&&xc();return{c(){e=M("button"),t=M("div"),E&&E.c(),r=J(),s=M("div"),i=M("span"),a=re(n[0]),l=J(),c=M("div"),k&&k.c(),u=J(),S&&S.c(),d=J(),O&&O.c(),I(i,"class","font-medium text-black"),I(c,"class","flex items-center gap-1 text-sm text-black/60"),I(s,"class","flex flex-col items-start"),I(t,"class","flex items-center gap-3"),I(e,"class","flex items-center justify-between w-full p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-primary/20 transition-colors active:bg-gray-50"),e.disabled=m=n[4]===null,Jt(e,"cursor-pointer",n[4]!==null),Jt(e,"cursor-default",n[4]===null)},m(x,L){q(x,e,L),V(e,t),E&&E.m(t,null),V(t,r),V(t,s),V(s,i),V(i,a),V(s,l),V(s,c),k&&k.m(c,null),V(c,u),S&&S.m(c,null),V(e,d),O&&O.m(e,null),p||(_=ye(e,"click",n[5]),p=!0)},p(x,[L]){x[2]?E?E.p(x,L):(E=Nc(x),E.c(),E.m(t,r)):E&&(E.d(1),E=null),L&1&&ve(a,x[0]),x[1]!==null?k?k.p(x,L):(k=Mc(x),k.c(),k.m(c,u)):k&&(k.d(1),k=null),x[3]?S?S.p(x,L):(S=Oc(x),S.c(),S.m(c,null)):S&&(S.d(1),S=null),x[4]?O||(O=xc(),O.c(),O.m(e,null)):O&&(O.d(1),O=null),L&16&&m!==(m=x[4]===null)&&(e.disabled=m),L&16&&Jt(e,"cursor-pointer",x[4]!==null),L&16&&Jt(e,"cursor-default",x[4]===null)},i:Q,o:Q,d(x){x&&j(e),E&&E.d(),k&&k.d(),S&&S.d(),O&&O.d(),p=!1,_()}}}function sv(n,e,t){let{name:r}=e,{coins:s=null}=e,{showAvatar:i=!1}=e,{subtitle:a=null}=e,{onClick:l=null}=e;const c=()=>l==null?void 0:l();return n.$$set=u=>{"name"in u&&t(0,r=u.name),"coins"in u&&t(1,s=u.coins),"showAvatar"in u&&t(2,i=u.showAvatar),"subtitle"in u&&t(3,a=u.subtitle),"onClick"in u&&t(4,l=u.onClick)},[r,s,i,a,l,c]}class pa extends kt{constructor(e){super(),Ct(this,e,sv,rv,At,{name:0,coins:1,showAvatar:2,subtitle:3,onClick:4})}}function Lc(n,e,t){const r=n.slice();return r[11]=e[t],r}function iv(n){let e,t,r=Ie(n[0].users.filter(n[9])),s=[];for(let a=0;a<r.length;a+=1)s[a]=Fc(Lc(n,r,a));const i=a=>ee(s[a],1,1,()=>{s[a]=null});return{c(){for(let a=0;a<s.length;a+=1)s[a].c();e=Et()},m(a,l){for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(a,l);q(a,e,l),t=!0},p(a,l){if(l&99){r=Ie(a[0].users.filter(a[9]));let c;for(c=0;c<r.length;c+=1){const u=Lc(a,r,c);s[c]?(s[c].p(u,l),K(s[c],1)):(s[c]=Fc(u),s[c].c(),K(s[c],1),s[c].m(e.parentNode,e))}for(Le(),c=r.length;c<s.length;c+=1)i(c);Fe()}},i(a){if(!t){for(let l=0;l<r.length;l+=1)K(s[l]);t=!0}},o(a){s=s.filter(Boolean);for(let l=0;l<s.length;l+=1)ee(s[l]);t=!1},d(a){a&&j(e),pt(s,a)}}}function ov(n){let e,t,r;return t=new pa({props:{name:n[2],coins:n[3],onClick:n[6]}}),{c(){e=M("div"),gt(t.$$.fragment),I(e,"class","flex flex-row text-start w-full")},m(s,i){q(s,e,i),ot(t,e,null),r=!0},p(s,i){const a={};i&4&&(a.name=s[2]),i&8&&(a.coins=s[3]),t.$set(a)},i(s){r||(K(t.$$.fragment,s),r=!0)},o(s){ee(t.$$.fragment,s),r=!1},d(s){s&&j(e),at(t)}}}function av(n){let e,t=n[11]+"",r;return{c(){e=M("span"),r=re(t),I(e,"class","font-bold text-black")},m(s,i){q(s,e,i),V(e,r)},p(s,i){i&3&&t!==(t=s[11]+"")&&ve(r,t)},i:Q,o:Q,d(s){s&&j(e)}}}function lv(n){let e,t;return e=new pa({props:{name:n[11],coins:n[5][n[11]].coins,subtitle:`${n[0].drawings.length} drawing${n[0].drawings.length===1?"":"s"}`,onClick:n[6]}}),{c(){gt(e.$$.fragment)},m(r,s){ot(e,r,s),t=!0},p(r,s){const i={};s&3&&(i.name=r[11]),s&35&&(i.coins=r[5][r[11]].coins),s&1&&(i.subtitle=`${r[0].drawings.length} drawing${r[0].drawings.length===1?"":"s"}`),e.$set(i)},i(r){t||(K(e.$$.fragment,r),t=!0)},o(r){ee(e.$$.fragment,r),t=!1},d(r){at(e,r)}}}function Fc(n){let e,t,r,s,i;const a=[lv,av],l=[];function c(u,d){return u[5][u[11]]?0:1}return t=c(n),r=l[t]=a[t](n),{c(){e=M("div"),r.c(),s=J(),I(e,"class","w-full flex flex-col items-center justify-center gap-0.5")},m(u,d){q(u,e,d),l[t].m(e,null),V(e,s),i=!0},p(u,d){let m=t;t=c(u),t===m?l[t].p(u,d):(Le(),ee(l[m],1,1,()=>{l[m]=null}),Fe(),r=l[t],r?r.p(u,d):(r=l[t]=a[t](u),r.c()),K(r,1),r.m(e,s))},i(u){i||(K(r),i=!0)},o(u){ee(r),i=!1},d(u){u&&j(e),l[t].d()}}}function cv(n){let e,t,r,s;const i=[ov,iv],a=[];function l(c,u){return c[4]?0:c[0]?1:-1}return~(t=l(n))&&(r=a[t]=i[t](n)),{c(){e=M("div"),r&&r.c(),I(e,"class","cursor-pointer py-1 rounded-lg transition-colors w-full mb-2 flex flex-col gap-2 items-center justify-between"),Jt(e,"bg-primary-10",!n[4]),Jt(e,"bg-secondary-10",n[4])},m(c,u){q(c,e,u),~t&&a[t].m(e,null),s=!0},p(c,[u]){let d=t;t=l(c),t===d?~t&&a[t].p(c,u):(r&&(Le(),ee(a[d],1,1,()=>{a[d]=null}),Fe()),~t?(r=a[t],r?r.p(c,u):(r=a[t]=i[t](c),r.c()),K(r,1),r.m(e,null)):r=null),(!s||u&16)&&Jt(e,"bg-primary-10",!c[4]),(!s||u&16)&&Jt(e,"bg-secondary-10",c[4])},i(c){s||(K(r),s=!0)},o(c){ee(r),s=!1},d(c){c&&j(e),~t&&a[t].d()}}}function uv(n,e,t){let r,s;Je(n,ft,E=>t(10,r=E)),Je(n,yt,E=>t(5,s=E));let{game:i=null}=e,{currentUserName:a=""}=e,{user:l=""}=e,{coins:c=null}=e,{isNewGame:u=!1}=e,{onClick:d=null}=e,{navigate:m=null}=e;function p(){u&&d?d():i&&m&&(ht(ft,r=i,r),m("home"))}const _=E=>E!==a;return n.$$set=E=>{"game"in E&&t(0,i=E.game),"currentUserName"in E&&t(1,a=E.currentUserName),"user"in E&&t(2,l=E.user),"coins"in E&&t(3,c=E.coins),"isNewGame"in E&&t(4,u=E.isNewGame),"onClick"in E&&t(7,d=E.onClick),"navigate"in E&&t(8,m=E.navigate)},[i,a,l,c,u,s,p,d,m,_]}class hv extends kt{constructor(e){super(),Ct(this,e,uv,cv,At,{game:0,currentUserName:1,user:2,coins:3,isNewGame:4,onClick:7,navigate:8})}}function Uc(n,e,t){const r=n.slice();return r[5]=e[t],r}function Bc(n){let e,t;return e=new hv({props:{game:n[5],currentUserName:n[2],navigate:n[4]}}),{c(){gt(e.$$.fragment)},m(r,s){ot(e,r,s),t=!0},p(r,s){const i={};s&2&&(i.game=r[5]),s&4&&(i.currentUserName=r[2]),s&16&&(i.navigate=r[4]),e.$set(i)},i(r){t||(K(e.$$.fragment,r),t=!0)},o(r){ee(e.$$.fragment,r),t=!1},d(r){at(e,r)}}}function fv(n){let e,t,r,s,i,a=Ie(n[1]),l=[];for(let u=0;u<a.length;u+=1)l[u]=Bc(Uc(n,a,u));const c=u=>ee(l[u],1,1,()=>{l[u]=null});return{c(){e=M("div"),t=M("h3"),r=re(n[0]),s=J();for(let u=0;u<l.length;u+=1)l[u].c();I(t,"class",n[3]),I(e,"class","flex flex-col gap-0")},m(u,d){q(u,e,d),V(e,t),V(t,r),V(e,s);for(let m=0;m<l.length;m+=1)l[m]&&l[m].m(e,null);i=!0},p(u,[d]){if((!i||d&1)&&ve(r,u[0]),(!i||d&8)&&I(t,"class",u[3]),d&22){a=Ie(u[1]);let m;for(m=0;m<a.length;m+=1){const p=Uc(u,a,m);l[m]?(l[m].p(p,d),K(l[m],1)):(l[m]=Bc(p),l[m].c(),K(l[m],1),l[m].m(e,null))}for(Le(),m=a.length;m<l.length;m+=1)c(m);Fe()}},i(u){if(!i){for(let d=0;d<a.length;d+=1)K(l[d]);i=!0}},o(u){l=l.filter(Boolean);for(let d=0;d<l.length;d+=1)ee(l[d]);i=!1},d(u){u&&j(e),pt(l,u)}}}function dv(n,e,t){let{title:r}=e,{games:s}=e,{currentUserName:i}=e,{titleClass:a="text-sm font-semibold text-primary"}=e,{navigate:l=null}=e;return n.$$set=c=>{"title"in c&&t(0,r=c.title),"games"in c&&t(1,s=c.games),"currentUserName"in c&&t(2,i=c.currentUserName),"titleClass"in c&&t(3,a=c.titleClass),"navigate"in c&&t(4,l=c.navigate)},[r,s,i,a,l]}class $f extends kt{constructor(e){super(),Ct(this,e,dv,fv,At,{title:0,games:1,currentUserName:2,titleClass:3,navigate:4})}}const Qf=""+new URL("logo-BEMpbk-Y.svg",import.meta.url).href;function jc(n,e,t){const r=n.slice();return r[16]=e[t],r}function qc(n,e,t){const r=n.slice();return r[16]=e[t],r}function mv(n){let e,t,r,s,i,a,l,c,u,d;return{c(){var m;e=M("div"),t=M("span"),t.textContent="Who are you?",r=J(),s=M("input"),i=J(),a=M("button"),l=re("get drawin'"),I(t,"class","text-2xl font-bold text-primary"),I(s,"type","text"),I(s,"placeholder","Enter username"),I(s,"class","input input-bordered w-full bg-white text-black border-primary rounded-xl text-lg px-4 py-2 shadow"),s.autofocus=!0,I(s,"autocapitalize","off"),I(s,"autocorrect","off"),I(s,"maxlength","14"),I(a,"class","btn btn-primary text-white w-full rounded-xl text-lg py-2 shadow"),a.disabled=c=!((m=n[4])!=null&&m.trim()),I(e,"class","flex flex-col items-center gap-4 w-full max-w-xs mx-auto mt-8")},m(m,p){q(m,e,p),V(e,t),V(e,r),V(e,s),Gn(s,n[4]),V(e,i),V(e,a),V(a,l),s.focus(),u||(d=[ye(s,"input",n[12]),ye(a,"click",n[13])],u=!0)},p(m,p){var _;p&16&&s.value!==m[4]&&Gn(s,m[4]),p&16&&c!==(c=!((_=m[4])!=null&&_.trim()))&&(a.disabled=c)},i:Q,o:Q,d(m){m&&j(e),u=!1,vt(d)}}}function pv(n){let e,t,r,s,i,a,l;const c=[yv,_v],u=[];function d(m,p){return m[6].length!==0?0:1}return s=d(n),i=u[s]=c[s](n),{c(){e=M("img"),r=J(),i.c(),a=Et(),It(e.src,t=Qf)||I(e,"src",t),I(e,"alt","drawIt"),I(e,"class","w-32 mx-auto mb-6 drop-shadow-md")},m(m,p){q(m,e,p),q(m,r,p),u[s].m(m,p),q(m,a,p),l=!0},p(m,p){let _=s;s=d(m),s===_?u[s].p(m,p):(Le(),ee(u[_],1,1,()=>{u[_]=null}),Fe(),i=u[s],i?i.p(m,p):(i=u[s]=c[s](m),i.c()),K(i,1),i.m(a.parentNode,a))},i(m){l||(K(i),l=!0)},o(m){ee(i),l=!1},d(m){m&&(j(e),j(r),j(a)),u[s].d(m)}}}function gv(n){let e;return{c(){e=M("div"),e.innerHTML=`<img src="${Qf}" alt="drawIt" class="w-32 mx-auto mb-6 drop-shadow-md"/> <div class="text-primary text-lg font-semibold">Loading...</div>`,I(e,"class","flex flex-col items-center gap-4 w-full max-w-xs mx-auto")},m(t,r){q(t,e,r)},p:Q,i:Q,o:Q,d(t){t&&j(e)}}}function _v(n){let e;return{c(){e=M("div"),e.textContent="No games yet. Start a new one!",I(e,"class","text-center text-gray-500 mt-8")},m(t,r){q(t,e,r)},p:Q,i:Q,o:Q,d(t){t&&j(e)}}}function yv(n){let e,t,r=n[3]&&zc(n);return{c(){e=M("div"),r&&r.c(),I(e,"class","flex flex-col gap-6 w-full max-w-xs mx-auto")},m(s,i){q(s,e,i),r&&r.m(e,null),t=!0},p(s,i){s[3]?r?(r.p(s,i),i&8&&K(r,1)):(r=zc(s),r.c(),K(r,1),r.m(e,null)):r&&(Le(),ee(r,1,1,()=>{r=null}),Fe())},i(s){t||(K(r),t=!0)},o(s){ee(r),t=!1},d(s){s&&j(e),r&&r.d()}}}function zc(n){let e=n[6].filter(n[9]).length>0,t,r=n[6].filter(n[8]).length>0,s,i,a=e&&Hc(n),l=r&&Gc(n);return{c(){a&&a.c(),t=J(),l&&l.c(),s=Et()},m(c,u){a&&a.m(c,u),q(c,t,u),l&&l.m(c,u),q(c,s,u),i=!0},p(c,u){u&72&&(e=c[6].filter(c[9]).length>0),e?a?(a.p(c,u),u&72&&K(a,1)):(a=Hc(c),a.c(),K(a,1),a.m(t.parentNode,t)):a&&(Le(),ee(a,1,1,()=>{a=null}),Fe()),u&72&&(r=c[6].filter(c[8]).length>0),r?l?(l.p(c,u),u&72&&K(l,1)):(l=Gc(c),l.c(),K(l,1),l.m(s.parentNode,s)):l&&(Le(),ee(l,1,1,()=>{l=null}),Fe())},i(c){i||(K(a),K(l),i=!0)},o(c){ee(a),ee(l),i=!1},d(c){c&&(j(t),j(s)),a&&a.d(c),l&&l.d(c)}}}function Hc(n){let e,t,r,s,i=Ie(n[6].filter(n[10])),a=[];for(let c=0;c<i.length;c+=1)a[c]=Wc(qc(n,i,c));const l=c=>ee(a[c],1,1,()=>{a[c]=null});return{c(){e=M("div"),t=M("div"),t.textContent="Your Turn!",r=J();for(let c=0;c<a.length;c+=1)a[c].c();I(t,"class","text-center text-2xl font-bold mb-2 animate-gradient-text svelte-1by7pf7"),I(e,"class","rounded-2xl bg-white/90 shadow-md p-4")},m(c,u){q(c,e,u),V(e,t),V(e,r);for(let d=0;d<a.length;d+=1)a[d]&&a[d].m(e,null);s=!0},p(c,u){if(u&73){i=Ie(c[6].filter(c[10]));let d;for(d=0;d<i.length;d+=1){const m=qc(c,i,d);a[d]?(a[d].p(m,u),K(a[d],1)):(a[d]=Wc(m),a[d].c(),K(a[d],1),a[d].m(e,null))}for(Le(),d=i.length;d<a.length;d+=1)l(d);Fe()}},i(c){if(!s){for(let u=0;u<i.length;u+=1)K(a[u]);s=!0}},o(c){a=a.filter(Boolean);for(let u=0;u<a.length;u+=1)ee(a[u]);s=!1},d(c){c&&j(e),pt(a,c)}}}function Wc(n){let e,t;return e=new $f({props:{title:"",games:[n[16]],currentUserName:n[3],navigate:n[0]}}),{c(){gt(e.$$.fragment)},m(r,s){ot(e,r,s),t=!0},p(r,s){const i={};s&72&&(i.games=[r[16]]),s&8&&(i.currentUserName=r[3]),s&1&&(i.navigate=r[0]),e.$set(i)},i(r){t||(K(e.$$.fragment,r),t=!0)},o(r){ee(e.$$.fragment,r),t=!1},d(r){at(e,r)}}}function Gc(n){let e,t,r,s,i=Ie(n[6].filter(n[11])),a=[];for(let c=0;c<i.length;c+=1)a[c]=Kc(jc(n,i,c));const l=c=>ee(a[c],1,1,()=>{a[c]=null});return{c(){e=M("div"),t=M("div"),t.textContent="Waiting",r=J();for(let c=0;c<a.length;c+=1)a[c].c();I(t,"class","text-center text-secondary/60 font-semibold text-xs mb-2"),I(e,"class","rounded-2xl bg-white/60 shadow-sm p-4 opacity-60")},m(c,u){q(c,e,u),V(e,t),V(e,r);for(let d=0;d<a.length;d+=1)a[d]&&a[d].m(e,null);s=!0},p(c,u){if(u&73){i=Ie(c[6].filter(c[11]));let d;for(d=0;d<i.length;d+=1){const m=jc(c,i,d);a[d]?(a[d].p(m,u),K(a[d],1)):(a[d]=Kc(m),a[d].c(),K(a[d],1),a[d].m(e,null))}for(Le(),d=i.length;d<a.length;d+=1)l(d);Fe()}},i(c){if(!s){for(let u=0;u<i.length;u+=1)K(a[u]);s=!0}},o(c){a=a.filter(Boolean);for(let u=0;u<a.length;u+=1)ee(a[u]);s=!1},d(c){c&&j(e),pt(a,c)}}}function Kc(n){let e,t;return e=new $f({props:{title:"",games:[n[16]],currentUserName:n[3],navigate:n[0]}}),{c(){gt(e.$$.fragment)},m(r,s){ot(e,r,s),t=!0},p(r,s){const i={};s&72&&(i.games=[r[16]]),s&8&&(i.currentUserName=r[3]),s&1&&(i.navigate=r[0]),e.$set(i)},i(r){t||(K(e.$$.fragment,r),t=!0)},o(r){ee(e.$$.fragment,r),t=!1},d(r){at(e,r)}}}function wv(n){let e,t,r,s;const i=[gv,pv,mv],a=[];function l(c,u){return c[2]||c[1]&&!c[5]?0:c[1]?1:2}return t=l(n),r=a[t]=i[t](n),{c(){e=M("div"),r.c(),I(e,"class","min-h-[80vh] flex flex-col items-center justify-center px-2 py-6")},m(c,u){q(c,e,u),a[t].m(e,null),s=!0},p(c,[u]){let d=t;t=l(c),t===d?a[t].p(c,u):(Le(),ee(a[d],1,1,()=>{a[d]=null}),Fe(),r=a[t],r?r.p(c,u):(r=a[t]=i[t](c),r.c()),K(r,1),r.m(e,null))},i(c){s||(K(r),s=!0)},o(c){ee(r),s=!1},d(c){c&&j(e),a[t].d()}}}function vv(n,e,t){let r,s,i;Je(n,Ts,O=>t(5,r=O)),Je(n,Ze,O=>t(1,s=O)),Je(n,zr,O=>t(6,i=O));let a=!0,l=null,c="",{navigate:u}=e;async function d(O){O.trim()&&/^[a-zA-Z0-9]+$/.test(O)?(t(2,a=!0),await Ww(O.trim()),t(2,a=!1)):O.trim()}qr(async()=>{if(t(2,a=!0),ht(Ts,r=!1,r),s&&s.name)if(!await Gw(s.name))ht(Ze,s=null,s);else{const L=(await Kf(s.name)).flatMap(U=>U.users.filter(te=>te!==s.name));await Hw(L),ht(Ts,r=!0,r)}t(2,a=!1)});const m=O=>As(O,l)==="waiting",p=O=>["draw","guess"].includes(As(O,l)),_=O=>["draw","guess"].includes(As(O,l)),E=O=>As(O,l)==="waiting";function k(){c=this.value,t(4,c)}const S=()=>d(c);return n.$$set=O=>{"navigate"in O&&t(0,u=O.navigate)},n.$$.update=()=>{n.$$.dirty&2&&t(3,l=s?s.name:null)},[u,s,a,l,c,r,i,d,m,p,_,E,k,S]}class Av extends kt{constructor(e){super(),Ct(this,e,vv,wv,At,{navigate:0})}}function $c(n,e,t){const r=n.slice();return r[24]=e[t],r}function Qc(n,e,t){const r=n.slice();return r[27]=e[t],r}function Xc(n){let e,t,r,s;function i(){return n[12](n[27])}return{c(){e=M("button"),I(e,"class",t="w-8 h-8 rounded-full border-2 "+(n[1]===n[27]?"border-primary":"")),Qi(e,"background-color",n[27])},m(a,l){q(a,e,l),r||(s=ye(e,"click",i),r=!0)},p(a,l){n=a,l&2&&t!==(t="w-8 h-8 rounded-full border-2 "+(n[1]===n[27]?"border-primary":""))&&I(e,"class",t)},d(a){a&&j(e),r=!1,s()}}}function Jc(n){let e,t,r,s,i,a;function l(){return n[13](n[24])}return{c(){e=M("button"),t=M("div"),r=J(),I(t,"class","w-4 h-4 rounded-full bg-black mx-auto"),Qi(t,"width",n[24]+"px"),Qi(t,"height",n[24]+"px"),I(e,"class",s="w-8 h-8 rounded-full border-2 bg-white "+(n[0]===n[24]?"border-primary":"border-transparent"))},m(c,u){q(c,e,u),V(e,t),V(e,r),i||(a=ye(e,"click",l),i=!0)},p(c,u){n=c,u&1&&s!==(s="w-8 h-8 rounded-full border-2 bg-white "+(n[0]===n[24]?"border-primary":"border-transparent"))&&I(e,"class",s)},d(c){c&&j(e),i=!1,a()}}}function Ev(n){let e,t,r,s,i,a,l,c,u=Ie(n[5]),d=[];for(let _=0;_<u.length;_+=1)d[_]=Xc(Qc(n,u,_));let m=Ie(n[6]),p=[];for(let _=0;_<m.length;_+=1)p[_]=Jc($c(n,m,_));return{c(){e=M("div"),t=M("div");for(let _=0;_<d.length;_+=1)d[_].c();r=J(),s=M("div");for(let _=0;_<p.length;_+=1)p[_].c();i=J(),a=M("canvas"),I(t,"class","flex gap-2 justify-start items-center flex-wrap"),I(s,"class","flex gap-2 justify-start items-center"),I(a,"class","border-2 border-gray-300 rounded-lg touch-none w-full aspect-square"),I(e,"class","flex flex-col gap-2 w-full")},m(_,E){q(_,e,E),V(e,t);for(let k=0;k<d.length;k+=1)d[k]&&d[k].m(t,null);V(e,r),V(e,s);for(let k=0;k<p.length;k+=1)p[k]&&p[k].m(s,null);V(e,i),V(e,a),n[14](a),n[15](e),l||(c=[ye(a,"mousedown",n[7]),ye(a,"mousemove",n[8]),ye(a,"mouseup",n[9]),ye(a,"mouseleave",n[9]),ye(a,"touchstart",n[7]),ye(a,"touchmove",n[8]),ye(a,"touchend",n[9],{passive:!0})],l=!0)},p(_,[E]){if(E&42){u=Ie(_[5]);let k;for(k=0;k<u.length;k+=1){const S=Qc(_,u,k);d[k]?d[k].p(S,E):(d[k]=Xc(S),d[k].c(),d[k].m(t,null))}for(;k<d.length;k+=1)d[k].d(1);d.length=u.length}if(E&73){m=Ie(_[6]);let k;for(k=0;k<m.length;k+=1){const S=$c(_,m,k);p[k]?p[k].p(S,E):(p[k]=Jc(S),p[k].c(),p[k].m(s,null))}for(;k<p.length;k+=1)p[k].d(1);p.length=m.length}},i:Q,o:Q,d(_){_&&j(e),pt(d,_),pt(p,_),n[14](null),n[15](null),l=!1,vt(c)}}}function Tv(n,e,t){let r=400,s=400,{lineWidth:i=5}=e,{strokeColor:a="#000000"}=e,l,c,u=!1,d=0,m=0,p;const _=["#000000","#FFFFFF","#E74C3C","#E67E22","#F1C40F","#2ECC71","#1ABC9C","#3498DB","#9B59B6","#7F8C8D"],E=[5,15,25];function k(){if(!l)return;const A=window.devicePixelRatio||1;t(2,l.width=r*A,l),t(2,l.height=s*A,l),t(2,l.style.width=r+"px",l),t(2,l.style.height=s+"px",l),t(3,c=l.getContext("2d")),c.setTransform(1,0,0,1,0,0),c.scale(A,A),t(3,c.lineCap="round",c),t(3,c.lineJoin="round",c),t(3,c.strokeStyle=a,c),t(3,c.lineWidth=i,c),t(3,c.fillStyle="#FFFFFF",c),c.fillRect(0,0,r,s)}function S(A){u=!0;const C=L(A);d=C.x,m=C.y}function O(A){if(!u)return;const C=L(A);c.beginPath(),c.moveTo(d,m),c.lineTo(C.x,C.y),c.stroke(),d=C.x,m=C.y}function x(){u=!1}function L(A){const C=l.getBoundingClientRect();if("touches"in A&&A.touches.length>0){const y=A.touches[0];return{x:y.clientX-C.left,y:y.clientY-C.top}}return{x:A.clientX-C.left,y:A.clientY-C.top}}function U(){t(3,c.fillStyle="#FFFFFF",c),c.fillRect(0,0,r,s)}function te(){return l.toDataURL("image/png")}function X(){!p||!l||(r=p.clientWidth,s=r,k())}qr(()=>{k();const A=new ResizeObserver(()=>{X()});return p&&A.observe(p),()=>{A.disconnect()}});const T=A=>{t(1,a=A),t(3,c.strokeStyle=A,c)},w=A=>{t(0,i=A),t(3,c.lineWidth=A,c)};function v(A){Mr[A?"unshift":"push"](()=>{l=A,t(2,l)})}function b(A){Mr[A?"unshift":"push"](()=>{p=A,t(4,p)})}return n.$$set=A=>{"lineWidth"in A&&t(0,i=A.lineWidth),"strokeColor"in A&&t(1,a=A.strokeColor)},[i,a,l,c,p,_,E,S,O,x,U,te,T,w,v,b]}class bv extends kt{constructor(e){super(),Ct(this,e,Tv,Ev,At,{lineWidth:0,strokeColor:1,clearCanvas:10,getImageData:11})}get clearCanvas(){return this.$$.ctx[10]}get getImageData(){return this.$$.ctx[11]}}const ga="data:image/gif;base64,R0lGODdhUABQAHcAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAUABQAIIAAAAGBgjxmRH/0Cz/+FUAAAAAAAAAAAAD/wi63B0wykmrlS7rza//HieOGWieAamSaHut8ObOU2w/dH7vQK7zNh8NGBS6iDHjEYmzEJ7QqHRKrUZDN491y91ii86uePxNXsZobhmmTbun61X7TSfEVfO6+8466998I3l/ZC9ZfoRogT2IVAOPkJGSk5SVkQKYmZo5W5aen56aogKcVqCnqAOjmzSdqa+Vq5mlVbC2krKYtI63vbmkraa9t7+7U8PEucZSyLbFwbXNr88zrtKo1C7W16DZLdvcocrQvOGf3ijg5pToJ+rruOPVwvCx8tr09ZPtJu/6qve+5fsHiR8If/oMfkBYT+EgZgTjyVoWJaLEVRShWLwUMKzdwIgOGx3b+ChkmGgkTVZgCE8lBZbrXE6AaU6mBJrhbEbAyU0nBJ7XfAYAKk0o0WZGPxJMinIj03JOO7pT+k9hhwu/smrFaAhMha1gty66aiGsWakRdng4y1bUWBlY28p9q2Gt3LZ0S8S9ezavA7t8zfpt8jWw4K5myhoOOxiPEhRM5Dw+EdnxZBCV+1z+kFnQZs6dyX62EFr0aAql4Z6ukLruatat/75GfSMBACH5BAkKAAAALAAAAABQAFAAggAAAAYGCPGZEf/QLP/4VQAAAAAAAAAAAAP/CLrc/irISWuFOOudrfdcKI7RZ0pkqjrnub5qa8K0KH91rt2g7rO8y29YCk6IRCMFGTMRntCoVOpiPk7TbLZqbWC14Ce3u/iGtWMywHyepsnsdvTdjcvFM3XZeafm9Wt8fVB0VnZ3hTCHUAONjo+QkAKTlJWJO4JZkZublZ4Clx2ZU5yljp+WfySLT6amqJShGKwErqWwk7IQtLacuKCqI7y9kb+6V6NSxMW4x0AfYcuSzcE2yVHSj8bVIcPZA9s4TdBg343hPSne2egWK+vS7ULq14zm8kvjHtH31OL05LSYA+cv3ap6rfrBcuYFYS2FqBgygLcM3xF9Fvh9s4gC0mMFjewKuvNIAWQ8kfMOBtQE8ZPEPStJtfT0ssi+cjNT/VN5U2DOWNw4UCTGMcA7hwOLHo2p7GeuoBuG9lJKcoLJiijzAezJcmPWi1sz4vS6ECompticAtspDKnamoHQ2iMb0awouQnpurQ7y61emnx3+Q1Zlm2OE7+oAkKcuLBBNYwb7zVcx4TkupQNWb4MODOTyJyfekYCOjTcpR5C63wMZ7Pqtawrf3gtOjaghkqM3kZtZDfvIL6ryggeFjjxtrmPI1ei3Fry5kJz64Z+lvmQBAAh+QQFCgAAACwAAAAAUABQAIAAAAAGBggC04SPqWvhD2NktNpbpda4+99sogOWpjKO52qmIgt77hbX1szZOopP+x/qPYBAIYT4Mw6ROiWJaXMGoFEntSa9xrJaFrd7+oJL4vGnbO6g05c1O2N9y+JyjLvOU+Lt9D3l7hdkFAinR8gAGJjot7jXiPdYFyk3+VbJdpmWabY51gn22RWqNXpVSnUKlcq0itRK9FrUd4gQmzRLKyiUmzfIW4uba7sz3BRMW1xl+Kvbw3yQjHV8GL01TVgNk+11rdjN+O0YDjkuWU55bpmOua7ZzvleUQAAIfkEBQoAAAAsAAAAAFAAUACCAAAABgYI8ZkR/9As//hVAAAAAAAAAAAAA/8Iutz+MMpJq7046827/2AojmRpnmiqrmzrvnAgzzRh33ie03wQ9zOdUAic/YrD5K0oOwKVSqbvJYUmpc6edYilMrdEZpYH1nVd1TLu3EqrbWyRVECv2wf4vH6/j4o3c3aCfISEfkUcgYJ1hY15h0CJTIt3jo2QPZJFlIyWhZg8mkCcdJ6fV38aipSmhqiIgJOkrXygNKI9pAK0fa+RsZuzvI++mcCjwsMDtkbHucnDzE3OPLrKeNJTqrKc18vFodQ01tfZuNXQvObiM+TK69vB3eXgt+wy7tH1zfHI8+/7pvV79k8fl1QZVi3yBi8hN1b0DsIaiK6guoDaHMqDCFCl4i+K49LRaohB4aCIYSZq9MfRYMqPKwm2vOjRGMh2IluRvGCyUseXNmNWnDkS47mQFovWDHcTX05TOy307PTTDMKSDxeitKoS60atVXdc5Zn1ZNg1Y6WW9emSK0yvLMG2Fds1xFRddOKsuItXrwq+uvymAExKMArCnAyfQExJsQnGixyXgCxIMgnKdiyPwFxHM4zPoEOLHk26tOnTqFOrXs26NekEACH5BAkKAAAALAAAAABQAFAAggAAAAYGCPGZEf/QLP/4VQAAAAAAAAAAAAP/CLrcHTDKSauVLuvNr/8eJ44ZaJ4BqZJoe63w5s5TbD90fu9ArvM2Hw0YFLqIMeMRibMQntCodEqtRkM3j3XL3WKLzq54/E1exmhuGaZNu6frVftNJ8RV87r7zjrr33wjeX9kL1l+hGiBPRcCjo+QA5KTlJWWl5iUXjSQnQKZoKGgmzOekaKoqaQupo+pr6GrLa2OsLaXsii0n7e9krknu76+wCbCw7fFIMfIsMofzM2qVjnR0qLPHtbXo9SctNzTVdXg4djepeXm3ePfreux6Kzq8Ljys/T1ldmN+fqT/Cxs+zcgYIWB/wxSQKhP4QSG9RxKgAhPYgSK6yxCwGhOqmMAjuE8guQm0h/Bku8I7runy2RClsFcNoRpTGZEmstsVsQJTWdGntp8dgTaL6VKgEQFCg2Z9OBSkk0XPr32rEPRXVizQlpkVanWr1i5yrgKtmwnsRqCml37CG0JsmzLunWgNq7ZuU2c2r1rCIzevWDxMqgLWKvgBYQLh+3LRIGSFo3xPD4Ruc9kEJUFXcacuetmxp3pfj4MZDRpHqZBhx6cusLqtK0p7EgAACH5BAkKAAAALAAAAABQAFAAggAAAAYGCPGZEf/QLP/4VQAAAAAAAAAAAAP/CLrc/irISWuFOOudrfdcKI7RZ0pkqjrnub5qa8K0KH91rt2g7rO8y29YCk6IRCMFGTMRntCoVOpiPk7TbLZqbWC14Ce3u/iGtWMywHyepsnsdvTdjcvFM3XZeafm9Wt8fVB0VnZ3hTAnAoyNjgOQkZKTk2GJOyaOmgKUnZ2WfySLm42eppGgOE0fpKWnpqk9KaOtr7Bglx2ZrZy2n7ihI7Skvr9owTa7tcWVwKqzysTMkrEWK8Ob09TOsqLR2dqQ1ULQrLzh4tzWqx68veHjS+wW7ugD8UfzFfXo+Cj6FPjBU0fOm7llA489M9juXD+C8so1RKjNX4Br3zTZs4jx2KC0hFuQhcCm8aHCbsIyPjIZcmFKj+BAuhHJgeRKmX5cJoNZEuccmhtsuvJJCCgmnjcrQswnkZ5Donh0jlQ5VOnJdU33PbXaEuXOiR+5zpRakyqjjUv/ZQ24dRpHgBMEis3pdSrSqm7TXoQrQW7eqwVfgo059yfZoGbfFS56+Ojgnouj1qUh1B2jXEMqW8b8Q7M7zj488wKtQ3Qr0jlMk0JdQ/Um1pQTfzaaRPZo2pltn8YNSAlTQHxbAH/hW+1whkaOB4etvPhe5YKTQ48eZDp1Hta/Sv+RAAAh+QQFCgAAACwAAAAAUABQAIAAAAAGBggC04SPqWvhD2NktNpbpda4+99sogOWpjKO52qmIgt77hbX1szZOopP+x/qPYBAIYT4Mw6ROiWJaXMGoFEntSa9xrJaFrd7+oJL4vGnbO6g05c1O2N9y+JyjLvOU+Lt9D3l7hdkFAinR8gAGJjot7jXiPdYFyk3+VbJdpmWabY51gn22RWqNXpVSnUKlcq0itRK9FrUd4gQmzRLKyiUmzfIW4uba7sz3BRMW1xl+Kvbw3yQjHV8GL01TVgNk+11rdjN+O0YDjkuWU55bpmOua7ZzvleUQAAIfkEBQoAAAAsAAAAAFAAUACCAAAABgYI8ZkR/9As//hVAAAAAAAAAAAAA/8Iutz+MMpJq7046827/2AojmRpnmiqrmzrvnAgzzRh33ie03wQ9zOdUAic/YrD5K0oOwKVSqbvJYUmpc6edYilMrdEZpYH1nVd1TLu3EqrbWyRWzio2+94vGDP78cvczp5g4N9hgJ/FoE5hI12h35iG4s4jo6QfIkVlDeWjZh7mhScNp6EoIiSGqQEpoWgohOsrnmosRKztHe2qhm5unW8RRy/wMJAxF9JwI+wvRjFusc9yUjLzAPTPNVP18zaNNxa3sbOw5PKQ9jZ5sjo1urY4Ebv3fHf7dT14/flmLcRotGa12QfGXLS8m0zWAPhQIXhGAZx6IrglFXp6MiDSA+oIzyN+P49A5RR0EaR5zzaA+kPEkAIAityLKiSH8uEKN3VPNgPp8uRikoyOvkzpS+hlYgeevkgpimL4njefJhT386GPakW1Xn0o8mQW612Xfm15VKgm5B2UmqIqQOnnqCWkIJKLhomdWdebIM3b9iFd4v4/RsxMJDBZ42yoIs4kuIVjBuHQosismS3ISw3xgxCM2LOMEKLHk26tOnTqFOrXs26tevXoxMAADs=";function Yc(n,e,t){const r=n.slice();return r[29]=e[t],r}function Zc(n,e,t){const r=n.slice();return r[32]=e[t],r}function eu(n,e,t){const r=n.slice();return r[12]=e[t],r}function Iv(n){let e,t,r,s;const i=[kv,Cv],a=[];function l(c,u){return c[1]?1:0}return t=l(n),r=a[t]=i[t](n),{c(){e=M("div"),r.c(),I(e,"class","flex flex-col items-center gap-6")},m(c,u){q(c,e,u),a[t].m(e,null),s=!0},p(c,u){let d=t;t=l(c),t===d?a[t].p(c,u):(Le(),ee(a[d],1,1,()=>{a[d]=null}),Fe(),r=a[t],r?r.p(c,u):(r=a[t]=i[t](c),r.c()),K(r,1),r.m(e,null))},i(c){s||(K(r),s=!0)},o(c){ee(r),s=!1},d(c){c&&j(e),a[t].d()}}}function Rv(n){let e,t,r,s,i,a,l,c,u,d;function m(U,te){return U[0].data&&U[0].data.length>10?Nv:Dv}let p=m(n),_=p(n);function E(U,te){return U[9]?Ov:Mv}let k=E(n),S=k(n),O=Ie(n[0].guesses),x=[];for(let U=0;U<O.length;U+=1)x[U]=lu(eu(n,O,U));let L=!n[0].guessed&&n[2].name!==n[0].artist&&cu(n);return{c(){e=M("div"),t=M("div"),_.c(),r=J(),s=M("div"),i=M("h2"),i.textContent="What's this?",a=J(),l=M("p"),S.c(),c=J(),u=M("div");for(let U=0;U<x.length;U+=1)x[U].c();d=J(),L&&L.c(),I(t,"class","bg-white/90 p-2 rounded-lg w-full max-w-[min(90vw,300px)] aspect-square flex items-center justify-center mx-auto border-2 border-primary"),I(i,"class","text-xl font-bold mb-2 text-primary"),I(l,"class","mb-4"),I(u,"class","flex flex-wrap gap-2 w-full overflow-y-auto"),I(s,"class","w-full max-w-[min(90vw,400px)]"),I(e,"class","flex flex-col items-center gap-6")},m(U,te){q(U,e,te),V(e,t),_.m(t,null),V(e,r),V(e,s),V(s,i),V(s,a),V(s,l),S.m(l,null),V(s,c),V(s,u);for(let X=0;X<x.length;X+=1)x[X]&&x[X].m(u,null);V(e,d),L&&L.m(e,null)},p(U,te){if(p===(p=m(U))&&_?_.p(U,te):(_.d(1),_=p(U),_&&(_.c(),_.m(t,null))),k===(k=E(U))&&S?S.p(U,te):(S.d(1),S=k(U),S&&(S.c(),S.m(l,null))),te[0]&1){O=Ie(U[0].guesses);let X;for(X=0;X<O.length;X+=1){const T=eu(U,O,X);x[X]?x[X].p(T,te):(x[X]=lu(T),x[X].c(),x[X].m(u,null))}for(;X<x.length;X+=1)x[X].d(1);x.length=O.length}!U[0].guessed&&U[2].name!==U[0].artist?L?L.p(U,te):(L=cu(U),L.c(),L.m(e,null)):L&&(L.d(1),L=null)},i:Q,o:Q,d(U){U&&j(e),_.d(),S.d(),pt(x,U),L&&L.d()}}}function Cv(n){let e,t,r,s,i=n[1].secretWord.toUpperCase()+"",a,l,c,u,d,m,p,_,E,k,S=n[4]?"Posting, great work...":"Submit Drawing",O,x,L,U,te,X={};return u=new bv({props:X}),n[22](u),{c(){e=M("div"),t=M("h2"),r=re("Ok, let's draw "),s=M("span"),a=re(i),l=J(),c=M("div"),gt(u.$$.fragment),d=J(),m=M("div"),p=M("button"),p.textContent="Clear",_=J(),E=M("button"),k=M("span"),O=re(S),I(s,"class","font-bold text-black"),I(t,"class","text-xl mb-4 text-black/60"),I(p,"class","btn btn-outline flex-1"),I(E,"class",x=n[4]?"btn-disabled flex-1":"btn btn-secondary flex-1 flex flex-row items-center justify-center text-center border border-secondary"),I(m,"class","flex flex-row gap-2 mt-4 w-full"),I(c,"class","w-full aspect-square max-w-[min(90vw,400px)] mx-auto"),I(e,"class","w-full h-screen")},m(T,w){q(T,e,w),V(e,t),V(t,r),V(t,s),V(s,a),V(e,l),V(e,c),ot(u,c,null),V(c,d),V(c,m),V(m,p),V(m,_),V(m,E),V(E,k),V(k,O),L=!0,U||(te=[ye(p,"click",n[23]),ye(E,"click",n[24])],U=!0)},p(T,w){(!L||w[0]&2)&&i!==(i=T[1].secretWord.toUpperCase()+"")&&ve(a,i);const v={};u.$set(v),(!L||w[0]&16)&&S!==(S=T[4]?"Posting, great work...":"Submit Drawing")&&ve(O,S),(!L||w[0]&16&&x!==(x=T[4]?"btn-disabled flex-1":"btn btn-secondary flex-1 flex flex-row items-center justify-center text-center border border-secondary"))&&I(E,"class",x)},i(T){L||(K(u.$$.fragment,T),L=!0)},o(T){ee(u.$$.fragment,T),L=!1},d(T){T&&j(e),n[22](null),at(u),U=!1,vt(te)}}}function kv(n){let e,t,r,s,i,a,l,c=n[3].users.filter(n[19])[0]+"",u,d,m,p,_,E={ctx:n,current:null,token:null,hasCatch:!1,pending:Vv,then:Pv,catch:Sv,value:28};return hl(_=n[7],E),{c(){e=M("div"),t=M("h2"),t.textContent="Pick a word to draw",r=J(),s=M("p"),i=M("span"),a=re("You get coins as the artist, and "),l=M("span"),u=re(c),d=re(" gets coins for guessing correctly!"),m=J(),p=M("div"),E.block.c(),I(t,"class","text-xl font-bold mb-2 text-primary"),I(l,"class","font-bold"),I(s,"class","mb-6 text-accent italic tooltip flex flex-row gap-2 text-xs"),I(p,"class","flex flex-col gap-4"),I(e,"class","w-full flex flex-col items-center")},m(k,S){q(k,e,S),V(e,t),V(e,r),V(e,s),V(s,i),V(i,a),V(i,l),V(l,u),V(i,d),V(e,m),V(e,p),E.block.m(p,E.anchor=null),E.mount=()=>p,E.anchor=null},p(k,S){n=k,S[0]&12&&c!==(c=n[3].users.filter(n[19])[0]+"")&&ve(u,c),E.ctx=n,S[0]&128&&_!==(_=n[7])&&hl(_,E)||Pd(E,n,S)},i:Q,o:Q,d(k){k&&j(e),E.block.d(),E.token=null,E=null}}}function Sv(n){return{c:Q,m:Q,p:Q,d:Q}}function Pv(n){let e,t,r,s=n[8]?"Refreshing...":"Refresh Words",i,a,l,c,u,d=Ie(n[28]),m=[];for(let _=0;_<d.length;_+=1)m[_]=nu(Yc(n,d,_));let p=!n[8]&&ru();return{c(){for(let _=0;_<m.length;_+=1)m[_].c();e=J(),t=M("button"),r=M("span"),i=re(s),a=J(),p&&p.c(),I(t,"class",l="btn btn-outline w-72 flex flex-row items-center justify-center gap-2 "+(!n[2]||n[2].coins<5||n[8]?"opacity-20 cursor-not-allowed":""))},m(_,E){for(let k=0;k<m.length;k+=1)m[k]&&m[k].m(_,E);q(_,e,E),q(_,t,E),V(t,r),V(r,i),V(t,a),p&&p.m(t,null),c||(u=ye(t,"click",n[21]),c=!0)},p(_,E){if(E[0]&142){d=Ie(_[28]);let k;for(k=0;k<d.length;k+=1){const S=Yc(_,d,k);m[k]?m[k].p(S,E):(m[k]=nu(S),m[k].c(),m[k].m(e.parentNode,e))}for(;k<m.length;k+=1)m[k].d(1);m.length=d.length}E[0]&256&&s!==(s=_[8]?"Refreshing...":"Refresh Words")&&ve(i,s),_[8]?p&&(p.d(1),p=null):p||(p=ru(),p.c(),p.m(t,null)),E[0]&260&&l!==(l="btn btn-outline w-72 flex flex-row items-center justify-center gap-2 "+(!_[2]||_[2].coins<5||_[8]?"opacity-20 cursor-not-allowed":""))&&I(t,"class",l)},d(_){_&&(j(e),j(t)),pt(m,_),p&&p.d(),c=!1,u()}}}function tu(n){let e,t;return{c(){e=M("img"),It(e.src,t=ga)||I(e,"src",t),I(e,"class","w-4 h-4")},m(r,s){q(r,e,s)},p:Q,d(r){r&&j(e)}}}function nu(n){let e,t=n[29].secretWord.toUpperCase()+"",r,s,i,a,l,c=Ie(Array(n[29].coins)),u=[];for(let m=0;m<c.length;m+=1)u[m]=tu(Zc(n,c,m));function d(){return n[20](n[29])}return{c(){e=M("button"),r=re(t),s=J(),i=M("span");for(let m=0;m<u.length;m+=1)u[m].c();I(i,"class","flex items-center gap-1"),I(e,"class","btn btn-secondary flex flex-row items-center justify-between w-72 border border-secondary")},m(m,p){q(m,e,p),V(e,r),V(e,s),V(e,i);for(let _=0;_<u.length;_+=1)u[_]&&u[_].m(i,null);a||(l=ye(e,"click",d),a=!0)},p(m,p){if(n=m,p[0]&128&&t!==(t=n[29].secretWord.toUpperCase()+"")&&ve(r,t),p[0]&128){c=Ie(Array(n[29].coins));let _;for(_=0;_<c.length;_+=1){const E=Zc(n,c,_);u[_]?u[_].p(E,p):(u[_]=tu(),u[_].c(),u[_].m(i,null))}for(;_<u.length;_+=1)u[_].d(1);u.length=c.length}},d(m){m&&j(e),pt(u,m),a=!1,l()}}}function ru(n){let e;return{c(){e=M("span"),e.innerHTML=`(5 <img src="${ga}" class="w-4 h-4 inline"/>)`,I(e,"class","text-xs text-black/60")},m(t,r){q(t,e,r)},d(t){t&&j(e)}}}function Vv(n){return{c:Q,m:Q,p:Q,d:Q}}function Dv(n){let e;return{c(){e=M("span"),e.textContent="No drawing yet",I(e,"class","text-accent")},m(t,r){q(t,e,r)},p:Q,d(t){t&&j(e)}}}function Nv(n){let e,t;return{c(){e=M("img"),It(e.src,t=`${n[0].data}`)||I(e,"src",t),I(e,"class","w-full h-full object-contain"),I(e,"alt","Current drawing")},m(r,s){q(r,e,s)},p(r,s){s[0]&1&&!It(e.src,t=`${r[0].data}`)&&I(e,"src",t)},d(r){r&&j(e)}}}function Mv(n){let e,t,r=n[0].artist+"",s,i,a,l=(n[0].hintPurchased||n[0].superHintPurchased)&&su(n);return{c(){e=re("Drawn by "),t=M("span"),s=re(r),i=J(),l&&l.c(),a=Et(),I(t,"class","font-bold text-secondary")},m(c,u){q(c,e,u),q(c,t,u),V(t,s),q(c,i,u),l&&l.m(c,u),q(c,a,u)},p(c,u){u[0]&1&&r!==(r=c[0].artist+"")&&ve(s,r),c[0].hintPurchased||c[0].superHintPurchased?l?l.p(c,u):(l=su(c),l.c(),l.m(a.parentNode,a)):l&&(l.d(1),l=null)},d(c){c&&(j(e),j(t),j(i),j(a)),l&&l.d(c)}}}function Ov(n){let e,t,r=n[0].secretWord+"",s;return{c(){e=re("You drew this. The secret word is "),t=M("span"),s=re(r),I(t,"class","font-bold text-secondary")},m(i,a){q(i,e,a),q(i,t,a),V(t,s)},p(i,a){a[0]&1&&r!==(r=i[0].secretWord+"")&&ve(s,r)},d(i){i&&(j(e),j(t))}}}function su(n){let e,t,r=n[0].hintPurchased&&iu(n),s=n[0].superHintPurchased&&ou(n);return{c(){e=M("ul"),r&&r.c(),t=J(),s&&s.c(),I(e,"class","pl-4 mt-1 space-y-1")},m(i,a){q(i,e,a),r&&r.m(e,null),V(e,t),s&&s.m(e,null)},p(i,a){i[0].hintPurchased?r?r.p(i,a):(r=iu(i),r.c(),r.m(e,t)):r&&(r.d(1),r=null),i[0].superHintPurchased?s?s.p(i,a):(s=ou(i),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(i){i&&j(e),r&&r.d(),s&&s.d()}}}function iu(n){let e,t=Vc(n[0])+"",r;return{c(){e=M("li"),r=re(t),I(e,"class","text-xs list-disc text-accent/70")},m(s,i){q(s,e,i),V(e,r)},p(s,i){i[0]&1&&t!==(t=Vc(s[0])+"")&&ve(r,t)},d(s){s&&j(e)}}}function ou(n){let e,t=Dc(n[0])+"",r;return{c(){e=M("li"),r=re(t),I(e,"class","text-xs list-disc text-accent/70")},m(s,i){q(s,e,i),V(e,r)},p(s,i){i[0]&1&&t!==(t=Dc(s[0])+"")&&ve(r,t)},d(s){s&&j(e)}}}function au(n){let e,t=n[12]+"",r,s;return{c(){e=M("div"),r=re(t),s=J(),I(e,"class","bg-accent-light px-3 py-1 rounded-full text-black/60 border border-accent")},m(i,a){q(i,e,a),V(e,r),V(e,s)},p(i,a){a[0]&1&&t!==(t=i[12]+"")&&ve(r,t)},d(i){i&&j(e)}}}function lu(n){let e,t=n[12]&&au(n);return{c(){t&&t.c(),e=Et()},m(r,s){t&&t.m(r,s),q(r,e,s)},p(r,s){r[12]?t?t.p(r,s):(t=au(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(r){r&&j(e),t&&t.d(r)}}}function cu(n){let e,t,r,s,i,a,l,c,u;function d(_,E){if(!_[0].hintPurchased)return Lv;if(!_[0].superHintPurchased)return xv}let m=d(n),p=m&&m(n);return{c(){e=M("div"),t=M("div"),p&&p.c(),r=J(),s=M("div"),i=M("input"),a=J(),l=M("button"),l.textContent="Guess",I(t,"class","flex gap-2"),I(i,"type","text"),I(i,"placeholder","Type your guess..."),I(i,"class","input input-bordered flex-1 bg-white text-black border-primary"),I(l,"class","btn btn-primary"),I(s,"class","flex gap-2"),I(e,"class","flex flex-col gap-2 w-full max-w-[min(90vw,400px)]")},m(_,E){q(_,e,E),V(e,t),p&&p.m(t,null),V(e,r),V(e,s),V(s,i),Gn(i,n[12]),V(s,a),V(s,l),c||(u=[ye(i,"input",n[16]),ye(i,"keydown",n[17]),ye(l,"click",n[18])],c=!0)},p(_,E){m===(m=d(_))&&p?p.p(_,E):(p&&p.d(1),p=m&&m(_),p&&(p.c(),p.m(t,null))),E[0]&4096&&i.value!==_[12]&&Gn(i,_[12])},d(_){_&&j(e),p&&p.d(),c=!1,vt(u)}}}function xv(n){let e,t=n[11]?"Purchasing...":"Super Hint (10 ",r,s,i,a=n[11]?"":")",l,c,u,d,m;return{c(){e=M("button"),r=re(t),s=M("img"),l=re(a),It(s.src,i=_i)||I(s,"src",i),I(s,"class","w-4 h-4 inline"),I(e,"class",c="btn btn-outline flex-1 "+(n[2].coins<10||n[11]?"opacity-40 btn-error cursor-not-allowed":"")),e.disabled=u=n[2].coins<10||n[11]},m(p,_){q(p,e,_),V(e,r),V(e,s),V(e,l),d||(m=ye(e,"click",n[15]),d=!0)},p(p,_){_[0]&2048&&t!==(t=p[11]?"Purchasing...":"Super Hint (10 ")&&ve(r,t),_[0]&2048&&a!==(a=p[11]?"":")")&&ve(l,a),_[0]&2052&&c!==(c="btn btn-outline flex-1 "+(p[2].coins<10||p[11]?"opacity-40 btn-error cursor-not-allowed":""))&&I(e,"class",c),_[0]&2052&&u!==(u=p[2].coins<10||p[11])&&(e.disabled=u)},d(p){p&&j(e),d=!1,m()}}}function Lv(n){let e,t=n[10]?"Purchasing...":"Hint (5 ",r,s,i,a=n[10]?"":")",l,c,u,d,m;return{c(){e=M("button"),r=re(t),s=M("img"),l=re(a),It(s.src,i=_i)||I(s,"src",i),I(s,"class","w-4 h-4 inline"),I(e,"class",c="btn btn-outline flex-1 "+(n[2].coins<5||n[10]?"opacity-40 btn-error cursor-not-allowed":"")),e.disabled=u=n[2].coins<5||n[10]},m(p,_){q(p,e,_),V(e,r),V(e,s),V(e,l),d||(m=ye(e,"click",n[14]),d=!0)},p(p,_){_[0]&1024&&t!==(t=p[10]?"Purchasing...":"Hint (5 ")&&ve(r,t),_[0]&1024&&a!==(a=p[10]?"":")")&&ve(l,a),_[0]&1028&&c!==(c="btn btn-outline flex-1 "+(p[2].coins<5||p[10]?"opacity-40 btn-error cursor-not-allowed":""))&&I(e,"class",c),_[0]&1028&&u!==(u=p[2].coins<5||p[10])&&(e.disabled=u)},d(p){p&&j(e),d=!1,m()}}}function Fv(n){let e,t,r,s;const i=[Rv,Iv],a=[];function l(c,u){return c[3]&&c[2]&&c[0]?0:c[2]&&c[3]?1:-1}return~(t=l(n))&&(r=a[t]=i[t](n)),{c(){e=M("div"),r&&r.c(),I(e,"class","rounded-lg p-9 bg-background flex flex-col justify-center")},m(c,u){q(c,e,u),~t&&a[t].m(e,null),s=!0},p(c,u){let d=t;t=l(c),t===d?~t&&a[t].p(c,u):(r&&(Le(),ee(a[d],1,1,()=>{a[d]=null}),Fe()),~t?(r=a[t],r?r.p(c,u):(r=a[t]=i[t](c),r.c()),K(r,1),r.m(e,null)):r=null)},i(c){s||(K(r),s=!0)},o(c){ee(r),s=!1},d(c){c&&j(e),~t&&a[t].d()}}}function Uv(n,e,t){let r,s,i;Je(n,Ze,y=>t(2,r=y)),Je(n,ft,y=>t(3,s=y)),Je(n,bs,y=>t(25,i=y));let a=null,l="",c=null,u=!1,d,m=0,p,_=!1,E=!1,k=!1,S=!1;async function O(y){if(!s||!r||!a||!y.trim()||(t(12,l=""),a.guesses.includes(y)))return;const ge={...a};ge.guesses.push(y);const lt={...s},mn=lt.drawings.findIndex(_t=>!_t.guessed&&_t.artist===ge.artist);mn>=0&&(lt.drawings[mn]=ge,ht(ft,s=lt,s)),Zw(s,r,y).catch(_t=>{console.error("Error submitting guess:",_t)})}async function x(){if(!r||!a||!s||a.hintPurchased||r.coins<5||k)return;t(10,k=!0),await tv(s,a,r)&&await Dr(r,-5),t(10,k=!1)}async function L(){if(!r||!a||!s||!a.hintPurchased||r.coins<10||S)return;t(11,S=!0),await nv(s,a,r)&&await Dr(r,-10),t(11,S=!1)}function U(){l=this.value,t(12,l)}const te=y=>{y.key==="Enter"&&l.length>0&&O(l)},X=()=>O(l),T=y=>y!==r.name,w=y=>{s&&t(1,c={secretWord:y.secretWord,coins:y.coins,data:"",artist:r.name,guessed:!1,guesses:[],createdAt:new Date,guessedBy:"",hintPurchased:!1,superHintPurchased:!1})},v=async()=>{if(r&&r.coins>=5&&!_){t(8,_=!0);try{await Dr(r,-5),t(6,m++,m),t(7,p=Pc(4))}finally{setTimeout(()=>{t(8,_=!1)},1e3)}}};function b(y){Mr[y?"unshift":"push"](()=>{d=y,t(5,d)})}const A=()=>d.clearCanvas(),C=async()=>{if(c&&s&&!u){t(4,u=!0);const y=d.getImageData(),ge={...c,data:y};s.drawings.push(ge),await gi(s),t(1,c=null),ht(ft,s=null,s),t(4,u=!1)}};return n.$$.update=()=>{if(n.$$.dirty[0]&13&&s&&r){const y=ma(s,r.name);t(0,a=y?ev(y):null),t(9,E=r.name===(a==null?void 0:a.artist))}n.$$.dirty[0]&2&&(c?ht(bs,i=!0,i):ht(bs,i=!1,i))},t(7,p=Pc(4)),[a,c,r,s,u,d,m,p,_,E,k,S,l,O,x,L,U,te,X,T,w,v,b,A,C]}class Bv extends kt{constructor(e){super(),Ct(this,e,Uv,Fv,At,{},null,[-1,-1])}}function uu(n,e,t){const r=n.slice();return r[16]=e[t],r}function hu(n){let e,t,r;return{c(){e=M("button"),e.textContent="×",I(e,"class","absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-black p-2")},m(s,i){q(s,e,i),t||(r=ye(e,"click",n[8]),t=!0)},p:Q,d(s){s&&j(e),t=!1,r()}}}function jv(n){let e,t,r=Ie(n[1]),s=[];for(let a=0;a<r.length;a+=1)s[a]=du(uu(n,r,a));const i=a=>ee(s[a],1,1,()=>{s[a]=null});return{c(){for(let a=0;a<s.length;a+=1)s[a].c();e=Et()},m(a,l){for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(a,l);q(a,e,l),t=!0},p(a,l){if(l&90){r=Ie(a[1]);let c;for(c=0;c<r.length;c+=1){const u=uu(a,r,c);s[c]?(s[c].p(u,l),K(s[c],1)):(s[c]=du(u),s[c].c(),K(s[c],1),s[c].m(e.parentNode,e))}for(Le(),c=r.length;c<s.length;c+=1)i(c);Fe()}},i(a){if(!t){for(let l=0;l<r.length;l+=1)K(s[l]);t=!0}},o(a){s=s.filter(Boolean);for(let l=0;l<s.length;l+=1)ee(s[l]);t=!1},d(a){a&&j(e),pt(s,a)}}}function qv(n){let e;return{c(){e=M("div"),e.textContent="No users found",I(e,"class","text-center py-8 text-black/60")},m(t,r){q(t,e,r)},p:Q,i:Q,o:Q,d(t){t&&j(e)}}}function zv(n){let e;return{c(){e=M("div"),e.innerHTML='<div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>',I(e,"class","flex items-center justify-center py-8")},m(t,r){q(t,e,r)},p:Q,i:Q,o:Q,d(t){t&&j(e)}}}function fu(n){let e,t;function r(...l){return n[9](n[16],...l)}function s(...l){return n[10](n[16],...l)}function i(...l){return n[11](n[16],...l)}function a(){return n[12](n[16])}return e=new pa({props:{name:n[16].name,coins:n[16].coins,showAvatar:!0,subtitle:n[4].filter(r).length>0?`${n[4].filter(s).length} game${n[4].filter(i).length>1?"s":""}`:null,onClick:a}}),{c(){gt(e.$$.fragment)},m(l,c){ot(e,l,c),t=!0},p(l,c){n=l;const u={};c&2&&(u.name=n[16].name),c&2&&(u.coins=n[16].coins),c&18&&(u.subtitle=n[4].filter(r).length>0?`${n[4].filter(s).length} game${n[4].filter(i).length>1?"s":""}`:null),c&2&&(u.onClick=a),e.$set(u)},i(l){t||(K(e.$$.fragment,l),t=!0)},o(l){ee(e.$$.fragment,l),t=!1},d(l){at(e,l)}}}function du(n){let e,t,r=n[3]&&n[3].name!==n[16].name&&fu(n);return{c(){r&&r.c(),e=Et()},m(s,i){r&&r.m(s,i),q(s,e,i),t=!0},p(s,i){s[3]&&s[3].name!==s[16].name?r?(r.p(s,i),i&10&&K(r,1)):(r=fu(s),r.c(),K(r,1),r.m(e.parentNode,e)):r&&(Le(),ee(r,1,1,()=>{r=null}),Fe())},i(s){t||(K(r),t=!0)},o(s){ee(r),t=!1},d(s){s&&j(e),r&&r.d(s)}}}function Hv(n){let e,t,r,s,i,a,l,c,u,d,m,p,_,E=n[0]&&hu(n);const k=[zv,qv,jv],S=[];function O(x,L){return x[2]?0:x[1].length===0?1:2}return u=O(n),d=S[u]=k[u](n),{c(){e=M("div"),t=M("div"),t.innerHTML='<h2 class="text-xl font-bold text-primary">Challenge a friend</h2> <p class="text-sm text-black/60">Tap on a user to start a new game</p>',r=J(),s=M("div"),i=M("input"),a=J(),E&&E.c(),l=J(),c=M("div"),d.c(),I(t,"class","flex flex-col gap-2"),I(i,"type","text"),I(i,"placeholder","Search users..."),I(i,"class","input input-bordered w-full bg-white text-black border-primary rounded-xl text-base px-4 py-3 shadow-sm"),I(i,"autocorrect","off"),I(s,"class","relative"),I(c,"class","flex flex-col w-full gap-2 pt-2 overflow-y-auto"),I(e,"class","flex flex-col gap-4 p-4 pt-24")},m(x,L){q(x,e,L),V(e,t),V(e,r),V(e,s),V(s,i),Gn(i,n[0]),V(s,a),E&&E.m(s,null),V(e,l),V(e,c),S[u].m(c,null),m=!0,p||(_=[ye(i,"input",n[5]),ye(i,"input",n[7])],p=!0)},p(x,[L]){L&1&&i.value!==x[0]&&Gn(i,x[0]),x[0]?E?E.p(x,L):(E=hu(x),E.c(),E.m(s,null)):E&&(E.d(1),E=null);let U=u;u=O(x),u===U?S[u].p(x,L):(Le(),ee(S[U],1,1,()=>{S[U]=null}),Fe(),d=S[u],d?d.p(x,L):(d=S[u]=k[u](x),d.c()),K(d,1),d.m(c,null))},i(x){m||(K(d),m=!0)},o(x){ee(d),m=!1},d(x){x&&j(e),E&&E.d(),S[u].d(),p=!1,vt(_)}}}function Wv(n,e,t){let r,s,i;Je(n,Ze,L=>t(3,r=L)),Je(n,ft,L=>t(15,s=L)),Je(n,zr,L=>t(4,i=L));let a="",l=[],c,u=!0,d=!1;function m(){clearTimeout(c),c=setTimeout(async()=>{t(2,u=!0),t(1,l=await kc(a)),t(2,u=!1)},300)}(async()=>(t(2,u=!0),t(1,l=await kc("")),t(2,u=!1)))();async function p(L){if(!(!r||d)){d=!0;try{ht(ft,s=await Kw([r.name,L.name]),s)}catch(U){console.error("Error creating game:",U)}finally{d=!1}}}function _(){a=this.value,t(0,a)}return[a,l,u,r,i,m,p,_,()=>{t(0,a=""),m()},(L,U)=>U.users.includes(L.name),(L,U)=>U.users.includes(L.name),(L,U)=>U.users.includes(L.name),L=>p(L)]}class Gv extends kt{constructor(e){super(),Ct(this,e,Wv,Hv,At,{})}}function mu(n,e,t){const r=n.slice();return r[2]=e[t],r}function pu(n,e,t){const r=n.slice();return r[5]=e[t],r[7]=t,r}function gu(n,e,t){const r=n.slice();return r[8]=e[t],r}function Kv(n){let e,t=Ie(n[0]),r=[];for(let s=0;s<t.length;s+=1)r[s]=Eu(mu(n,t,s));return{c(){e=M("div");for(let s=0;s<r.length;s+=1)r[s].c();I(e,"class","flex flex-col gap-4")},m(s,i){q(s,e,i);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(e,null)},p(s,i){if(i&1){t=Ie(s[0]);let a;for(a=0;a<t.length;a+=1){const l=mu(s,t,a);r[a]?r[a].p(l,i):(r[a]=Eu(l),r[a].c(),r[a].m(e,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=t.length}},d(s){s&&j(e),pt(r,s)}}}function $v(n){let e;return{c(){e=M("div"),e.innerHTML='<span class="text-accent">Loading drawings...</span>',I(e,"class","flex justify-center items-center h-40")},m(t,r){q(t,e,r)},p:Q,d(t){t&&j(e)}}}function _u(n){let e,t,r,s,i,a,l,c,u,d=n[2].artist+"",m,p,_,E,k,S=Ie(Array(n[2].coins)),O=[];for(let v=0;v<S.length;v+=1)O[v]=yu(gu(n,S,v));function x(v,b){return v[2].guessed?Xv:Qv}let L=x(n),U=L(n);function te(v,b){return v[2].guesses.length>0?Yv:Jv}let X=te(n),T=X(n),w=n[2].hintPurchased&&Au(n);return{c(){e=M("div"),t=M("div");for(let v=0;v<O.length;v+=1)O[v].c();r=J(),s=M("img"),a=J(),l=M("p"),U.c(),c=re(`
							by
							`),u=M("span"),m=re(d),p=J(),_=M("p"),T.c(),E=J(),w&&w.c(),k=J(),I(t,"class","flex flex-row gap-1 absolute top-2 right-2"),It(s.src,i=`${n[2].data}`)||I(s,"src",i),I(s,"class","w-full h-full object-contain"),I(s,"alt","Drawing"),I(u,"class","font-semibold"),I(l,"class","text-lg text-center py-2 align-middle items-center"),I(_,"class","text-[0.8rem] text-center align-middle items-center w-3/4"),I(e,"class","bg-white/90 p-1 relative rounded-lg w-full max-w-[min(90vw,400px)] flex flex-col items-center justify-center mx-auto border-2 border-primary")},m(v,b){q(v,e,b),V(e,t);for(let A=0;A<O.length;A+=1)O[A]&&O[A].m(t,null);V(e,r),V(e,s),V(e,a),V(e,l),U.m(l,null),V(l,c),V(l,u),V(u,m),V(e,p),V(e,_),T.m(_,null),V(e,E),w&&w.m(e,null),V(e,k)},p(v,b){if(b&1){S=Ie(Array(v[2].coins));let A;for(A=0;A<S.length;A+=1){const C=gu(v,S,A);O[A]?O[A].p(C,b):(O[A]=yu(),O[A].c(),O[A].m(t,null))}for(;A<O.length;A+=1)O[A].d(1);O.length=S.length}b&1&&!It(s.src,i=`${v[2].data}`)&&I(s,"src",i),L===(L=x(v))&&U?U.p(v,b):(U.d(1),U=L(v),U&&(U.c(),U.m(l,c))),b&1&&d!==(d=v[2].artist+"")&&ve(m,d),X===(X=te(v))&&T?T.p(v,b):(T.d(1),T=X(v),T&&(T.c(),T.m(_,null))),v[2].hintPurchased?w?w.p(v,b):(w=Au(v),w.c(),w.m(e,k)):w&&(w.d(1),w=null)},d(v){v&&j(e),pt(O,v),U.d(),T.d(),w&&w.d()}}}function yu(n){let e,t;return{c(){e=M("img"),It(e.src,t=_i)||I(e,"src",t),I(e,"class","w-4 h-4")},m(r,s){q(r,e,s)},p:Q,d(r){r&&j(e)}}}function Qv(n){let e;return{c(){e=M("span"),e.textContent="?",I(e,"class","font-bold text-primary")},m(t,r){q(t,e,r)},p:Q,d(t){t&&j(e)}}}function Xv(n){let e,t=n[2].secretWord+"",r;return{c(){e=M("span"),r=re(t),I(e,"class","font-bold text-primary")},m(s,i){q(s,e,i),V(e,r)},p(s,i){i&1&&t!==(t=s[2].secretWord+"")&&ve(r,t)},d(s){s&&j(e)}}}function Jv(n){let e,t,r=n[2].guessedBy+"",s,i;return{c(){e=M("span"),t=M("span"),s=re(r),i=re(`
									is thinking...`),I(t,"class","font-semibold"),I(e,"class","italic")},m(a,l){q(a,e,l),V(e,t),V(t,s),V(e,i)},p(a,l){l&1&&r!==(r=a[2].guessedBy+"")&&ve(s,r)},d(a){a&&j(e)}}}function Yv(n){let e,t=n[2].guessedBy+"",r,s,i,a,l=!n[2].guessed&&wu(),c=Ie(n[2].guesses),u=[];for(let d=0;d<c.length;d+=1)u[d]=vu(pu(n,c,d));return{c(){e=M("span"),r=re(t),s=J(),l&&l.c(),i=re(`
								guessed:
								`);for(let d=0;d<u.length;d+=1)u[d].c();a=Et(),I(e,"class","font-semibold")},m(d,m){q(d,e,m),V(e,r),q(d,s,m),l&&l.m(d,m),q(d,i,m);for(let p=0;p<u.length;p+=1)u[p]&&u[p].m(d,m);q(d,a,m)},p(d,m){if(m&1&&t!==(t=d[2].guessedBy+"")&&ve(r,t),d[2].guessed?l&&(l.d(1),l=null):l||(l=wu(),l.c(),l.m(i.parentNode,i)),m&1){c=Ie(d[2].guesses);let p;for(p=0;p<c.length;p+=1){const _=pu(d,c,p);u[p]?u[p].p(_,m):(u[p]=vu(_),u[p].c(),u[p].m(a.parentNode,a))}for(;p<u.length;p+=1)u[p].d(1);u.length=c.length}},d(d){d&&(j(e),j(s),j(i),j(a)),l&&l.d(d),pt(u,d)}}}function wu(n){let e;return{c(){e=re("has")},m(t,r){q(t,e,r)},d(t){t&&j(e)}}}function vu(n){let e,t=n[5]+"",r,s=n[7]<n[2].guesses.length-1?", ":"",i;return{c(){e=M("span"),r=re(t),i=re(s),I(e,"class","italic")},m(a,l){q(a,e,l),V(e,r),V(e,i)},p(a,l){l&1&&t!==(t=a[5]+"")&&ve(r,t),l&1&&s!==(s=a[7]<a[2].guesses.length-1?", ":"")&&ve(i,s)},d(a){a&&j(e)}}}function Au(n){let e,t=n[2].hintPurchased?`${n[2].guessedBy} used a Hint`:"",r,s=n[2].superHintPurchased?"... AND a SuperHint!":"",i;return{c(){e=M("p"),r=re(t),i=re(s),I(e,"class","text-[0.8rem] text-secondary flex flex-row py-2 text-center align-middle items-center")},m(a,l){q(a,e,l),V(e,r),V(e,i)},p(a,l){l&1&&t!==(t=a[2].hintPurchased?`${a[2].guessedBy} used a Hint`:"")&&ve(r,t),l&1&&s!==(s=a[2].superHintPurchased?"... AND a SuperHint!":"")&&ve(i,s)},d(a){a&&j(e)}}}function Eu(n){let e,t=n[2].data&&n[2].data.length>10&&_u(n);return{c(){t&&t.c(),e=Et()},m(r,s){t&&t.m(r,s),q(r,e,s)},p(r,s){r[2].data&&r[2].data.length>10?t?t.p(r,s):(t=_u(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(r){r&&j(e),t&&t.d(r)}}}function Zv(n){let e;function t(i,a){return i[1]?$v:Kv}let r=t(n),s=r(n);return{c(){e=M("div"),s.c(),I(e,"class","p-4")},m(i,a){q(i,e,a),s.m(e,null)},p(i,[a]){r===(r=t(i))&&s?s.p(i,a):(s.d(1),s=r(i),s&&(s.c(),s.m(e,null)))},i:Q,o:Q,d(i){i&&j(e),s.d()}}}function e0(n,e,t){let r=[],s=!0;return qr(async()=>{console.log("Feed mounted"),t(0,r=await Qw()),console.log("Drawings loaded",r),t(1,s=!1)}),[r,s]}class t0 extends kt{constructor(e){super(),Ct(this,e,e0,Zv,At,{})}}function Tu(n){var L;let e,t,r,s,i,a,l,c,u=(((L=n[2])==null?void 0:L.coins)||0)+"",d,m,p,_,E,k;function S(U,te){return U[3]?r0:n0}let O=S(n),x=O(n);return{c(){e=M("nav"),t=M("div"),r=M("div"),s=M("div"),i=M("img"),l=J(),c=M("span"),d=re(u),m=J(),p=M("span"),p.textContent="coins",_=J(),x.c(),E=J(),k=M("div"),It(i.src,a=ga)||I(i,"src",a),I(i,"class","w-5 h-5"),I(i,"alt","coins"),I(c,"class","text-sm font-medium"),I(s,"class","flex items-center gap-1"),I(p,"class","text-xs text-gray-500"),I(r,"class","flex flex-col items-center"),I(t,"class","flex justify-around items-center max-w-md mx-auto"),I(e,"class","fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2"),I(k,"class","h-20")},m(U,te){q(U,e,te),V(e,t),V(t,r),V(r,s),V(s,i),V(s,l),V(s,c),V(c,d),V(r,m),V(r,p),V(t,_),x.m(t,null),q(U,E,te),q(U,k,te)},p(U,te){var X;te&4&&u!==(u=(((X=U[2])==null?void 0:X.coins)||0)+"")&&ve(d,u),O===(O=S(U))&&x?x.p(U,te):(x.d(1),x=O(U),x&&(x.c(),x.m(t,null)))},d(U){U&&(j(e),j(E),j(k)),x.d()}}}function n0(n){let e,t,r,s,i,a,l,c,u,d,m,p,_,E,k,S,O,x,L,U,te,X,T,w,v,b,A,C;return{c(){e=M("button"),t=Xt("svg"),r=Xt("path"),i=J(),a=M("span"),l=re("Home"),u=J(),d=M("button"),m=Xt("svg"),p=Xt("path"),E=J(),k=M("span"),S=re("New"),x=J(),L=M("button"),U=Xt("svg"),te=Xt("path"),T=J(),w=M("span"),v=re("Feed"),I(r,"stroke-linecap","round"),I(r,"stroke-linejoin","round"),I(r,"stroke-width","2"),I(r,"d","M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"),I(t,"xmlns","http://www.w3.org/2000/svg"),I(t,"class",s="h-6 w-6 "+(n[0]==="home"?"text-primary":"text-gray-400")),I(t,"fill","none"),I(t,"viewBox","0 0 24 24"),I(t,"stroke","currentColor"),I(a,"class",c="text-xs "+(n[0]==="home"?"text-primary":"text-gray-500")),I(e,"class","flex flex-col items-center"),I(p,"stroke-linecap","round"),I(p,"stroke-linejoin","round"),I(p,"stroke-width","2"),I(p,"d","M12 4v16m8-8H4"),I(m,"xmlns","http://www.w3.org/2000/svg"),I(m,"class",_="h-6 w-6 "+(n[0]==="new"?"text-primary":"text-gray-400")),I(m,"fill","none"),I(m,"viewBox","0 0 24 24"),I(m,"stroke","currentColor"),I(k,"class",O="text-xs "+(n[0]==="new"?"text-primary":"text-gray-500")),I(d,"class","flex flex-col items-center"),I(te,"stroke-linecap","round"),I(te,"stroke-linejoin","round"),I(te,"stroke-width","2"),I(te,"d","M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"),I(U,"xmlns","http://www.w3.org/2000/svg"),I(U,"class",X="h-6 w-6 "+(n[0]==="feed"?"text-primary":"text-gray-400")),I(U,"fill","none"),I(U,"viewBox","0 0 24 24"),I(U,"stroke","currentColor"),I(w,"class",b="text-xs "+(n[0]==="feed"?"text-primary":"text-gray-500")),I(L,"class","flex flex-col items-center")},m(y,ge){q(y,e,ge),V(e,t),V(t,r),V(e,i),V(e,a),V(a,l),q(y,u,ge),q(y,d,ge),V(d,m),V(m,p),V(d,E),V(d,k),V(k,S),q(y,x,ge),q(y,L,ge),V(L,U),V(U,te),V(L,T),V(L,w),V(w,v),A||(C=[ye(e,"click",n[7]),ye(d,"click",n[8]),ye(L,"click",n[9])],A=!0)},p(y,ge){ge&1&&s!==(s="h-6 w-6 "+(y[0]==="home"?"text-primary":"text-gray-400"))&&I(t,"class",s),ge&1&&c!==(c="text-xs "+(y[0]==="home"?"text-primary":"text-gray-500"))&&I(a,"class",c),ge&1&&_!==(_="h-6 w-6 "+(y[0]==="new"?"text-primary":"text-gray-400"))&&I(m,"class",_),ge&1&&O!==(O="text-xs "+(y[0]==="new"?"text-primary":"text-gray-500"))&&I(k,"class",O),ge&1&&X!==(X="h-6 w-6 "+(y[0]==="feed"?"text-primary":"text-gray-400"))&&I(U,"class",X),ge&1&&b!==(b="text-xs "+(y[0]==="feed"?"text-primary":"text-gray-500"))&&I(w,"class",b)},d(y){y&&(j(e),j(u),j(d),j(x),j(L)),A=!1,vt(C)}}}function r0(n){let e,t,r;return{c(){e=M("button"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg> <span class="text-xs text-primary">Back</span>',I(e,"class","flex flex-col items-center")},m(s,i){q(s,e,i),t||(r=ye(e,"click",n[6]),t=!0)},p:Q,d(s){s&&j(e),t=!1,r()}}}function s0(n){let e,t=!n[1]&&Tu(n);return{c(){t&&t.c(),e=Et()},m(r,s){t&&t.m(r,s),q(r,e,s)},p(r,[s]){r[1]?t&&(t.d(1),t=null):t?t.p(r,s):(t=Tu(r),t.c(),t.m(e.parentNode,e))},i:Q,o:Q,d(r){r&&j(e),t&&t.d(r)}}}function i0(n,e,t){let r,s,i;Je(n,bs,E=>t(1,r=E)),Je(n,Ze,E=>t(2,s=E)),Je(n,ft,E=>t(3,i=E));let{navigate:a}=e,l="home";function c(){const E=new URLSearchParams(window.location.search);t(0,l=E.get("page")||"home")}typeof window<"u"&&(window.addEventListener("popstate",c),c());const u=E=>{t(0,l=E),a(E)},d=()=>{ht(ft,i=null,i),u("home")},m=()=>u("home"),p=()=>u("new"),_=()=>u("feed");return n.$$set=E=>{"navigate"in E&&t(5,a=E.navigate)},[l,r,s,i,u,a,d,m,p,_]}class o0 extends kt{constructor(e){super(),Ct(this,e,i0,s0,At,{navigate:5})}}function bu(n){let e,t,r,s,i,a,l,c,u,d,m,p;return{c(){e=M("div"),t=M("div"),r=M("h2"),r.textContent="Dev Menu",s=J(),i=M("div"),a=M("button"),a.textContent="Delete All Users",l=J(),c=M("button"),u=re("Add 5 Points"),I(r,"class","text-lg font-bold mb-4"),I(a,"class","btn btn-error"),I(c,"class","btn btn-primary"),c.disabled=d=!n[1],I(i,"class","flex flex-col gap-2"),I(t,"class","bg-white rounded-lg shadow-lg p-4 border border-gray-200"),I(e,"class","fixed top-0 right-0 p-4 z-50")},m(_,E){q(_,e,E),V(e,t),V(t,r),V(t,s),V(t,i),V(i,a),V(i,l),V(i,c),V(c,u),m||(p=[ye(a,"click",n[2]),ye(c,"click",n[3])],m=!0)},p(_,E){E&2&&d!==(d=!_[1])&&(c.disabled=d)},d(_){_&&j(e),m=!1,vt(p)}}}function a0(n){let e,t=n[0]&&bu(n);return{c(){t&&t.c(),e=Et()},m(r,s){t&&t.m(r,s),q(r,e,s)},p(r,[s]){r[0]?t?t.p(r,s):(t=bu(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:Q,o:Q,d(r){r&&j(e),t&&t.d(r)}}}function l0(n,e,t){let r;Je(n,Ze,c=>t(1,r=c));let s=!1;async function i(c){c.key==="\\"&&t(0,s=!s)}async function a(){if(confirm("Are you sure you want to delete ALL users? This cannot be undone!"))try{const c=await Wt(Gt),u=jw(pi);c.docs.forEach(d=>{u.delete(d.ref)}),await u.commit(),localStorage.removeItem("drawIt-user"),localStorage.removeItem("drawIt-games"),localStorage.removeItem("drawIt-users"),Ze.set(null),alert("All users deleted successfully!"),window.location.reload()}catch(c){console.error("Error deleting users:",c),alert("Error deleting users. Check console for details.")}}async function l(){if(r)try{await Dr(r,5),alert("Added 5 points to current user!")}catch(c){console.error("Error adding points:",c),alert("Error adding points. Check console for details.")}}return qr(()=>(window.addEventListener("keydown",i),()=>{window.removeEventListener("keydown",i)})),[s,r,a,l]}class c0 extends kt{constructor(e){super(),Ct(this,e,l0,a0,At,{})}}function u0(n){let e,t,r,s,i,a,l,c,u;const d=[p0,m0,d0,f0],m=[];function p(_,E){return _[2]?0:_[0]==="home"?1:_[0]==="new"?2:_[0]==="feed"?3:-1}return~(r=p(n))&&(s=m[r]=d[r](n)),a=new o0({props:{navigate:n[3]}}),c=new c0({}),{c(){e=M("main"),t=M("div"),s&&s.c(),i=J(),gt(a.$$.fragment),l=J(),gt(c.$$.fragment),I(t,"class","w-full max-w-md mx-auto px-4"),I(e,"class","w-full min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-background-gradient-start to-background-gradient-end text-black pb-20")},m(_,E){q(_,e,E),V(e,t),~r&&m[r].m(t,null),V(e,i),ot(a,e,null),V(e,l),ot(c,e,null),u=!0},p(_,E){let k=r;r=p(_),r===k?~r&&m[r].p(_,E):(s&&(Le(),ee(m[k],1,1,()=>{m[k]=null}),Fe()),~r?(s=m[r],s?s.p(_,E):(s=m[r]=d[r](_),s.c()),K(s,1),s.m(t,null)):s=null)},i(_){u||(K(s),K(a.$$.fragment,_),K(c.$$.fragment,_),u=!0)},o(_){ee(s),ee(a.$$.fragment,_),ee(c.$$.fragment,_),u=!1},d(_){_&&j(e),~r&&m[r].d(),at(a),at(c)}}}function h0(n){let e;return{c(){e=M("div"),e.innerHTML='<div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>',I(e,"class","w-full min-h-screen flex items-center justify-center")},m(t,r){q(t,e,r)},p:Q,i:Q,o:Q,d(t){t&&j(e)}}}function f0(n){let e,t;return e=new t0({}),{c(){gt(e.$$.fragment)},m(r,s){ot(e,r,s),t=!0},p:Q,i(r){t||(K(e.$$.fragment,r),t=!0)},o(r){ee(e.$$.fragment,r),t=!1},d(r){at(e,r)}}}function d0(n){let e,t;return e=new Gv({}),{c(){gt(e.$$.fragment)},m(r,s){ot(e,r,s),t=!0},p:Q,i(r){t||(K(e.$$.fragment,r),t=!0)},o(r){ee(e.$$.fragment,r),t=!1},d(r){at(e,r)}}}function m0(n){let e,t;return e=new Av({props:{navigate:n[3]}}),{c(){gt(e.$$.fragment)},m(r,s){ot(e,r,s),t=!0},p:Q,i(r){t||(K(e.$$.fragment,r),t=!0)},o(r){ee(e.$$.fragment,r),t=!1},d(r){at(e,r)}}}function p0(n){let e,t;return e=new Bv({}),{c(){gt(e.$$.fragment)},m(r,s){ot(e,r,s),t=!0},p:Q,i(r){t||(K(e.$$.fragment,r),t=!0)},o(r){ee(e.$$.fragment,r),t=!1},d(r){at(e,r)}}}function g0(n){let e,t,r,s;const i=[h0,u0],a=[];function l(c,u){return c[1]?0:1}return e=l(n),t=a[e]=i[e](n),{c(){t.c(),r=Et()},m(c,u){a[e].m(c,u),q(c,r,u),s=!0},p(c,[u]){let d=e;e=l(c),e===d?a[e].p(c,u):(Le(),ee(a[d],1,1,()=>{a[d]=null}),Fe(),t=a[e],t?t.p(c,u):(t=a[e]=i[e](c),t.c()),K(t,1),t.m(r.parentNode,r))},i(c){s||(K(t),s=!0)},o(c){ee(t),s=!1},d(c){c&&j(r),a[e].d(c)}}}function _0(n,e,t){let r;Je(n,ft,l=>t(2,r=l));let s="home",i=!0;qr(async()=>{await $w();const l=new URLSearchParams(window.location.search);t(0,s=l.get("page")||"home");const c=l.get("currentGame");if(c){const u=await Sc(c);u&&ht(ft,r=u,r)}window.addEventListener("popstate",async()=>{const u=new URLSearchParams(window.location.search);t(0,s=u.get("page")||"home");const d=u.get("currentGame");if(d){const m=await Sc(d);m&&ht(ft,r=m,r)}else ht(ft,r=null,r)}),t(1,i=!1)});function a(l){const c=new URLSearchParams(window.location.search),u=r==null?void 0:r.id;u?c.set("currentGame",u):c.delete("currentGame"),l!=="home"?c.set("page",l):c.delete("page");const d=c.toString(),m=d?`?${d}`:"/drawIt/";window.history.pushState({},"",m),t(0,s=l)}return[s,i,r,a]}class y0 extends kt{constructor(e){super(),Ct(this,e,_0,g0,At,{})}}new y0({target:document.getElementById("app")});
