var Ad=Object.defineProperty;var Ed=(n,e,t)=>e in n?Ad(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Oi=(n,e,t)=>Ed(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();function X(){}function Td(n){return!!n&&(typeof n=="object"||typeof n=="function")&&typeof n.then=="function"}function Iu(n){return n()}function cl(){return Object.create(null)}function At(n){n.forEach(Iu)}function Ru(n){return typeof n=="function"}function Et(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let ps;function vt(n,e){return n===e?!0:(ps||(ps=document.createElement("a")),ps.href=e,n===ps.href)}function bd(n){return Object.keys(n).length===0}function Cu(n,...e){if(n==null){for(const r of e)r(void 0);return X}const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function $s(n){let e;return Cu(n,t=>e=t)(),e}function Ye(n,e,t){n.$$.on_destroy.push(Cu(e,t))}function ht(n,e,t){return n.set(t),e}function V(n,e){n.appendChild(e)}function q(n,e,t){n.insertBefore(e,t||null)}function j(n){n.parentNode&&n.parentNode.removeChild(n)}function pt(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function O(n){return document.createElement(n)}function Jt(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function se(n){return document.createTextNode(n)}function Y(){return se(" ")}function Tt(){return se("")}function _e(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function b(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function Id(n){return Array.from(n.childNodes)}function ve(n,e){e=""+e,n.data!==e&&(n.data=e)}function Gn(n,e){n.value=e??""}function Qi(n,e,t,r){t==null?n.style.removeProperty(e):n.style.setProperty(e,t,"")}function Yt(n,e,t){n.classList.toggle(e,!!t)}let Nr;function Bt(n){Nr=n}function ku(){if(!Nr)throw new Error("Function called outside component initialization");return Nr}function qr(n){ku().$$.on_mount.push(n)}const Un=[],Mr=[];let Hn=[];const ul=[],Rd=Promise.resolve();let Xi=!1;function Cd(){Xi||(Xi=!0,Rd.then(Eo))}function Ji(n){Hn.push(n)}const xi=new Set;let Ln=0;function Eo(){if(Ln!==0)return;const n=Nr;do{try{for(;Ln<Un.length;){const e=Un[Ln];Ln++,Bt(e),kd(e.$$)}}catch(e){throw Un.length=0,Ln=0,e}for(Bt(null),Un.length=0,Ln=0;Mr.length;)Mr.pop()();for(let e=0;e<Hn.length;e+=1){const t=Hn[e];xi.has(t)||(xi.add(t),t())}Hn.length=0}while(Un.length);for(;ul.length;)ul.pop()();Xi=!1,xi.clear(),Bt(n)}function kd(n){if(n.fragment!==null){n.update(),At(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Ji)}}function Sd(n){const e=[],t=[];Hn.forEach(r=>n.indexOf(r)===-1?e.push(r):t.push(r)),t.forEach(r=>r()),Hn=e}const Es=new Set;let En;function Fe(){En={r:0,c:[],p:En}}function Ue(){En.r||At(En.c),En=En.p}function $(n,e){n&&n.i&&(Es.delete(n),n.i(e))}function te(n,e,t,r){if(n&&n.o){if(Es.has(n))return;Es.add(n),En.c.push(()=>{Es.delete(n),r&&(t&&n.d(1),r())}),n.o(e)}else r&&r()}function hl(n,e){const t=e.token={};function r(s,i,a,l){if(e.token!==t)return;e.resolved=l;let c=e.ctx;a!==void 0&&(c=c.slice(),c[a]=l);const u=s&&(e.current=s)(c);let d=!1;e.block&&(e.blocks?e.blocks.forEach((m,p)=>{p!==i&&m&&(Fe(),te(m,1,1,()=>{e.blocks[p]===m&&(e.blocks[p]=null)}),Ue())}):e.block.d(1),u.c(),$(u,1),u.m(e.mount(),e.anchor),d=!0),e.block=u,e.blocks&&(e.blocks[i]=u),d&&Eo()}if(Td(n)){const s=ku();if(n.then(i=>{Bt(s),r(e.then,1,e.value,i),Bt(null)},i=>{if(Bt(s),r(e.catch,2,e.error,i),Bt(null),!e.hasCatch)throw i}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,n),!0;e.resolved=n}}function Pd(n,e,t){const r=e.slice(),{resolved:s}=n;n.current===n.then&&(r[n.value]=s),n.current===n.catch&&(r[n.error]=s),n.block.p(r,t)}function Re(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function gt(n){n&&n.c()}function at(n,e,t){const{fragment:r,after_update:s}=n.$$;r&&r.m(e,t),Ji(()=>{const i=n.$$.on_mount.map(Iu).filter(Ru);n.$$.on_destroy?n.$$.on_destroy.push(...i):At(i),n.$$.on_mount=[]}),s.forEach(Ji)}function lt(n,e){const t=n.$$;t.fragment!==null&&(Sd(t.after_update),At(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Vd(n,e){n.$$.dirty[0]===-1&&(Un.push(n),Cd(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function Ct(n,e,t,r,s,i,a=null,l=[-1]){const c=Nr;Bt(n);const u=n.$$={fragment:null,ctx:[],props:i,update:X,not_equal:s,bound:cl(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:cl(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};a&&a(u.root);let d=!1;if(u.ctx=t?t(n,e.props||{},(m,p,..._)=>{const A=_.length?_[0]:p;return u.ctx&&s(u.ctx[m],u.ctx[m]=A)&&(!u.skip_bound&&u.bound[m]&&u.bound[m](A),d&&Vd(n,m)),p}):[],u.update(),d=!0,At(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){const m=Id(e.target);u.fragment&&u.fragment.l(m),m.forEach(j)}else u.fragment&&u.fragment.c();e.intro&&$(n.$$.fragment),at(n,e.target,e.anchor),Eo()}Bt(c)}class kt{constructor(){Oi(this,"$$");Oi(this,"$$set")}$destroy(){lt(this,1),this.$destroy=X}$on(e,t){if(!Ru(t))return X;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!bd(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Dd="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Dd);const Fn=[];function er(n,e=X){let t;const r=new Set;function s(l){if(Et(n,l)&&(n=l,t)){const c=!Fn.length;for(const u of r)u[1](),Fn.push(u,n);if(c){for(let u=0;u<Fn.length;u+=2)Fn[u][0](Fn[u+1]);Fn.length=0}}}function i(l){s(l(n))}function a(l,c=X){const u=[l,c];return r.add(u),r.size===1&&(t=e(s,i)||X),l(n),()=>{r.delete(u),r.size===0&&t&&(t(),t=null)}}return{set:s,update:i,subscribe:a}}const et=er(null),zr=er([]),ft=er(null),yt=er({}),Ts=er(!1),bs=er(!1);try{const n=localStorage.getItem("drawIt-user");n&&et.set(JSON.parse(n));const e=localStorage.getItem("drawIt-games");e&&zr.set(JSON.parse(e));const t=localStorage.getItem("drawIt-users");t&&yt.set(JSON.parse(t))}catch(n){console.error("Error loading from localStorage:",n)}et.subscribe(n=>{n?localStorage.setItem("drawIt-user",JSON.stringify(n)):localStorage.removeItem("drawIt-user")});zr.subscribe(n=>{n?localStorage.setItem("drawIt-games",JSON.stringify(n)):localStorage.removeItem("drawIt-games")});yt.subscribe(n=>{Object.keys(n).length>0?localStorage.setItem("drawIt-users",JSON.stringify(n)):localStorage.removeItem("drawIt-users")});const Nd=()=>{};var fl={};/**
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
 */const Su=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Md=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Pu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,c=s+2<n.length,u=c?n[s+2]:0,d=i>>2,m=(i&3)<<4|l>>4;let p=(l&15)<<2|u>>6,_=u&63;c||(_=64,a||(p=64)),r.push(t[d],t[m],t[p],t[_])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Su(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Md(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const m=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||u==null||m==null)throw new Od;const p=i<<2|l>>4;if(r.push(p),u!==64){const _=l<<4&240|u>>2;if(r.push(_),m!==64){const A=u<<6&192|m;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Od extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xd=function(n){const e=Su(n);return Pu.encodeByteArray(e,!0)},Vs=function(n){return xd(n).replace(/\./g,"")},Ld=function(n){try{return Pu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const Jd="FirebaseError";class fn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Jd,Object.setPrototypeOf(this,fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qs.prototype.create)}}class Qs{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Yd(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new fn(s,l,r)}}function Yd(n,e){return n.replace(Zd,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Zd=/\{\$([^}]+)}/g;function Ds(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(dl(i)&&dl(a)){if(!Ds(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function dl(n){return n!==null&&typeof n=="object"}/**
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
 */function Rt(n){return n&&n._delegate?n._delegate:n}class qt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */var pe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(pe||(pe={}));const lm={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},cm=pe.INFO,um={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},hm=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=um[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bo{constructor(e){this.name=e,this._logLevel=cm,this._logHandler=hm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const fm=(n,e)=>e.some(t=>n instanceof t);let pl,gl;function dm(){return pl||(pl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mm(){return gl||(gl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mu=new WeakMap,Yi=new WeakMap,Ou=new WeakMap,Li=new WeakMap,Io=new WeakMap;function pm(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(en(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Mu.set(t,n)}).catch(()=>{}),Io.set(e,n),e}function gm(n){if(Yi.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Yi.set(n,e)}let Zi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Yi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ou.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return en(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function _m(n){Zi=n(Zi)}function ym(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Fi(this),e,...t);return Ou.set(r,e.sort?e.sort():[e]),en(r)}:mm().includes(n)?function(...e){return n.apply(Fi(this),e),en(Mu.get(this))}:function(...e){return en(n.apply(Fi(this),e))}}function wm(n){return typeof n=="function"?ym(n):(n instanceof IDBTransaction&&gm(n),fm(n,dm())?new Proxy(n,Zi):n)}function en(n){if(n instanceof IDBRequest)return pm(n);if(Li.has(n))return Li.get(n);const e=wm(n);return e!==n&&(Li.set(n,e),Io.set(e,n)),e}const Fi=n=>Io.get(n);function xu(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=en(a);return r&&a.addEventListener("upgradeneeded",c=>{r(en(a.result),c.oldVersion,c.newVersion,en(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const vm=["get","getKey","getAll","getAllKeys","count"],Am=["put","add","delete","clear"],Ui=new Map;function _l(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ui.get(e))return Ui.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Am.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||vm.includes(t)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[t](...l),s&&c.done]))[0]};return Ui.set(e,i),i}_m(n=>({...n,get:(e,t,r)=>_l(e,t)||n.get(e,t,r),has:(e,t)=>!!_l(e,t)||n.has(e,t)}));/**
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
 */const zt=new bo("@firebase/app"),bm="@firebase/app-compat",Im="@firebase/analytics-compat",Rm="@firebase/analytics",Cm="@firebase/app-check-compat",km="@firebase/app-check",Sm="@firebase/auth",Pm="@firebase/auth-compat",Vm="@firebase/database",Dm="@firebase/data-connect",Nm="@firebase/database-compat",Mm="@firebase/functions",Om="@firebase/functions-compat",xm="@firebase/installations",Lm="@firebase/installations-compat",Fm="@firebase/messaging",Um="@firebase/messaging-compat",Bm="@firebase/performance",jm="@firebase/performance-compat",qm="@firebase/remote-config",zm="@firebase/remote-config-compat",Hm="@firebase/storage",Wm="@firebase/storage-compat",Gm="@firebase/firestore",Km="@firebase/vertexai",$m="@firebase/firestore-compat",Qm="firebase",Xm="11.5.0";/**
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
 */const Ns=new Map,Ym=new Map,no=new Map;function wl(n,e){try{n.container.addComponent(e)}catch(t){zt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function sn(n){const e=n.name;if(no.has(e))return zt.debug(`There were multiple attempts to register component ${e}.`),!1;no.set(e,n);for(const t of Ns.values())wl(t,n);for(const t of Ym.values())wl(t,n);return!0}function Ro(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Zm(n){return n==null?!1:n.settings!==void 0}/**
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
 */const ep={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},tn=new Qs("app","Firebase",ep);/**
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
 */class tp{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tn.create("app-deleted",{appName:this._name})}}/**
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
 */const np=Xm;function Lu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:to,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw tn.create("bad-app-name",{appName:String(s)});if(t||(t=Vu()),!t)throw tn.create("no-options");const i=Ns.get(s);if(i){if(Ds(t,i.options)&&Ds(r,i.config))return i;throw tn.create("duplicate-app",{appName:s})}const a=new am(s);for(const c of no.values())a.addComponent(c);const l=new tp(t,r,a);return Ns.set(s,l),l}function rp(n=to){const e=Ns.get(n);if(!e&&n===to&&Vu())return Lu();if(!e)throw tn.create("no-app",{appName:n});return e}function Dt(n,e,t){var r;let s=(r=Jm[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zt.warn(l.join(" "));return}sn(new qt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const sp="firebase-heartbeat-database",ip=1,Or="firebase-heartbeat-store";let Bi=null;function Fu(){return Bi||(Bi=xu(sp,ip,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Or)}catch(t){console.warn(t)}}}}).catch(n=>{throw tn.create("idb-open",{originalErrorMessage:n.message})})),Bi}async function op(n){try{const t=(await Fu()).transaction(Or),r=await t.objectStore(Or).get(Uu(n));return await t.done,r}catch(e){if(e instanceof fn)zt.warn(e.message);else{const t=tn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});zt.warn(t.message)}}}async function vl(n,e){try{const r=(await Fu()).transaction(Or,"readwrite");await r.objectStore(Or).put(e,Uu(n)),await r.done}catch(t){if(t instanceof fn)zt.warn(t.message);else{const r=tn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});zt.warn(r.message)}}}function Uu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ap=1024,lp=30;class cp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new hp(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Al();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>lp){const a=fp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){zt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Al(),{heartbeatsToSend:r,unsentEntries:s}=up(this._heartbeatsCache.heartbeats),i=Vs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return zt.warn(t),""}}}function Al(){return new Date().toISOString().substring(0,10)}function up(n,e=ap){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),El(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),El(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class hp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Du()?Nu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await op(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return vl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return vl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function El(n){return Vs(JSON.stringify({version:2,heartbeats:n})).length}function fp(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function dp(n){sn(new qt("platform-logger",e=>new Em(e),"PRIVATE")),sn(new qt("heartbeat",e=>new cp(e),"PRIVATE")),Dt(eo,yl,n),Dt(eo,yl,"esm2017"),Dt("fire-js","")}dp("");var mp="firebase",pp="11.5.0";/**
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
 */Dt(mp,pp,"app");const Bu="@firebase/installations",Co="0.6.13";/**
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
 */const vp={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},In=new Qs(yp,wp,vp);function Hu(n){return n instanceof fn&&n.code.includes("request-failed")}/**
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
 */const rh="installations",Jp="installations-internal",Yp=n=>{const e=n.getProvider("app").getImmediate(),t=Xp(e),r=Ro(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Zp=n=>{const e=n.getProvider("app").getImmediate(),t=Ro(e,rh).getImmediate();return{getId:()=>Kp(t),getToken:s=>$p(t,s)}};function eg(){sn(new qt(rh,Yp,"PUBLIC")),sn(new qt(Jp,Zp,"PRIVATE"))}eg();Dt(Bu,Co);Dt(Bu,Co,"esm2017");/**
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
 */const it=new bo("@firebase/analytics");/**
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
 */function og(n){if(!n.startsWith(Vo)){const e=wt.create("invalid-gtag-resource",{gtagURL:n});return it.warn(e.message),""}return n}function sh(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function ag(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function lg(n,e){const t=ag("firebase-js-sdk-policy",{createScriptURL:og}),r=document.createElement("script"),s=`${Vo}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function cg(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function ug(n,e,t,r,s,i){const a=r[s];try{if(a)await e[a];else{const c=(await sh(t)).find(u=>u.measurementId===s);c&&await e[c.appId]}}catch(l){it.error(l)}n("config",s,i)}async function hg(n,e,t,r,s){try{let i=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const l=await sh(t);for(const c of a){const u=l.find(m=>m.measurementId===c),d=u&&e[u.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),n("event",r,s||{})}catch(i){it.error(i)}}function fg(n,e,t,r){async function s(i,...a){try{if(i==="event"){const[l,c]=a;await hg(n,e,t,l,c)}else if(i==="config"){const[l,c]=a;await ug(n,e,t,r,l,c)}else if(i==="consent"){const[l,c]=a;n("consent",l,c)}else if(i==="get"){const[l,c,u]=a;n("get",l,c,u)}else if(i==="set"){const[l]=a;n("set",l)}else n(i,...a)}catch(l){it.error(l)}}return s}function dg(n,e,t,r,s){let i=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=fg(i,n,e,t),{gtagCore:i,wrappedGtag:window[s]}}function mg(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Vo)&&t.src.includes(n))return t;return null}/**
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
 */const pg=30,gg=1e3;class _g{constructor(e={},t=gg){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ih=new _g;function yg(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function wg(n){var e;const{appId:t,apiKey:r}=n,s={method:"GET",headers:yg(r)},i=sg.replace("{app-id}",t),a=await fetch(i,s);if(a.status!==200&&a.status!==304){let l="";try{const c=await a.json();!((e=c.error)===null||e===void 0)&&e.message&&(l=c.error.message)}catch{}throw wt.create("config-fetch-failed",{httpStatus:a.status,responseMessage:l})}return a.json()}async function vg(n,e=ih,t){const{appId:r,apiKey:s,measurementId:i}=n.options;if(!r)throw wt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw wt.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new Tg;return setTimeout(async()=>{l.abort()},rg),oh({appId:r,apiKey:s,measurementId:i},a,l,e)}async function oh(n,{throttleEndTimeMillis:e,backoffCount:t},r,s=ih){var i;const{appId:a,measurementId:l}=n;try{await Ag(r,e)}catch(c){if(l)return it.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:a,measurementId:l};throw c}try{const c=await wg(n);return s.deleteThrottleMetadata(a),c}catch(c){const u=c;if(!Eg(u)){if(s.deleteThrottleMetadata(a),l)return it.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:l};throw c}const d=Number((i=u==null?void 0:u.customData)===null||i===void 0?void 0:i.httpStatus)===503?ml(t,s.intervalMillis,pg):ml(t,s.intervalMillis),m={throttleEndTimeMillis:Date.now()+d,backoffCount:t+1};return s.setThrottleMetadata(a,m),it.debug(`Calling attemptFetch again in ${d} millis`),oh(n,m,r,s)}}function Ag(n,e){return new Promise((t,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(i),r(wt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Eg(n){if(!(n instanceof fn)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class Tg{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function bg(n,e,t,r,s){if(s&&s.global){n("event",t,r);return}else{const i=await e,a=Object.assign(Object.assign({},r),{send_to:i});n("event",t,a)}}/**
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
 */async function Ig(){if(Du())try{await Nu()}catch(n){return it.warn(wt.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return it.warn(wt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Rg(n,e,t,r,s,i,a){var l;const c=vg(n);c.then(_=>{t[_.measurementId]=_.appId,n.options.measurementId&&_.measurementId!==n.options.measurementId&&it.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>it.error(_)),e.push(c);const u=Ig().then(_=>{if(_)return r.getId()}),[d,m]=await Promise.all([c,u]);mg(i)||lg(i,d.measurementId),s("js",new Date);const p=(l=a==null?void 0:a.config)!==null&&l!==void 0?l:{};return p[ng]="firebase",p.update=!0,m!=null&&(p[tg]=m),s("config",d.measurementId,p),d.measurementId}/**
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
 */class Cg{constructor(e){this.app=e}_delete(){return delete Cr[this.app.options.appId],Promise.resolve()}}let Cr={},Rl=[];const Cl={};let zi="dataLayer",kg="gtag",kl,ah,Sl=!1;function Sg(){const n=[];if($d()&&n.push("This is a browser extension environment."),Xd()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),t=wt.create("invalid-analytics-context",{errorInfo:e});it.warn(t.message)}}function Pg(n,e,t){Sg();const r=n.options.appId;if(!r)throw wt.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)it.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw wt.create("no-api-key");if(Cr[r]!=null)throw wt.create("already-exists",{id:r});if(!Sl){cg(zi);const{wrappedGtag:i,gtagCore:a}=dg(Cr,Rl,Cl,zi,kg);ah=i,kl=a,Sl=!0}return Cr[r]=Rg(n,Rl,Cl,e,kl,zi,t),new Cg(n)}function Vg(n,e,t,r){n=Rt(n),bg(ah,Cr[n.app.options.appId],e,t,r).catch(s=>it.error(s))}const Pl="@firebase/analytics",Vl="0.10.12";function Dg(){sn(new qt(Il,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Pg(r,s,t)},"PUBLIC")),sn(new qt("analytics-internal",n,"PRIVATE")),Dt(Pl,Vl),Dt(Pl,Vl,"esm2017");function n(e){try{const t=e.getProvider(Il).getImmediate();return{logEvent:(r,s,i)=>Vg(t,r,s,i)}}catch(t){throw wt.create("interop-component-reg-failed",{reason:t})}}}Dg();var Dl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var nn,lh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function v(){}v.prototype=y.prototype,E.D=y.prototype,E.prototype=new v,E.prototype.constructor=E,E.C=function(T,I,k){for(var w=Array(arguments.length-2),H=2;H<arguments.length;H++)w[H-2]=arguments[H];return y.prototype[I].apply(T,w)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,y,v){v||(v=0);var T=Array(16);if(typeof y=="string")for(var I=0;16>I;++I)T[I]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(I=0;16>I;++I)T[I]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=E.g[0],v=E.g[1],I=E.g[2];var k=E.g[3],w=y+(k^v&(I^k))+T[0]+3614090360&4294967295;y=v+(w<<7&4294967295|w>>>25),w=k+(I^y&(v^I))+T[1]+3905402710&4294967295,k=y+(w<<12&4294967295|w>>>20),w=I+(v^k&(y^v))+T[2]+606105819&4294967295,I=k+(w<<17&4294967295|w>>>15),w=v+(y^I&(k^y))+T[3]+3250441966&4294967295,v=I+(w<<22&4294967295|w>>>10),w=y+(k^v&(I^k))+T[4]+4118548399&4294967295,y=v+(w<<7&4294967295|w>>>25),w=k+(I^y&(v^I))+T[5]+1200080426&4294967295,k=y+(w<<12&4294967295|w>>>20),w=I+(v^k&(y^v))+T[6]+2821735955&4294967295,I=k+(w<<17&4294967295|w>>>15),w=v+(y^I&(k^y))+T[7]+4249261313&4294967295,v=I+(w<<22&4294967295|w>>>10),w=y+(k^v&(I^k))+T[8]+1770035416&4294967295,y=v+(w<<7&4294967295|w>>>25),w=k+(I^y&(v^I))+T[9]+2336552879&4294967295,k=y+(w<<12&4294967295|w>>>20),w=I+(v^k&(y^v))+T[10]+4294925233&4294967295,I=k+(w<<17&4294967295|w>>>15),w=v+(y^I&(k^y))+T[11]+2304563134&4294967295,v=I+(w<<22&4294967295|w>>>10),w=y+(k^v&(I^k))+T[12]+1804603682&4294967295,y=v+(w<<7&4294967295|w>>>25),w=k+(I^y&(v^I))+T[13]+4254626195&4294967295,k=y+(w<<12&4294967295|w>>>20),w=I+(v^k&(y^v))+T[14]+2792965006&4294967295,I=k+(w<<17&4294967295|w>>>15),w=v+(y^I&(k^y))+T[15]+1236535329&4294967295,v=I+(w<<22&4294967295|w>>>10),w=y+(I^k&(v^I))+T[1]+4129170786&4294967295,y=v+(w<<5&4294967295|w>>>27),w=k+(v^I&(y^v))+T[6]+3225465664&4294967295,k=y+(w<<9&4294967295|w>>>23),w=I+(y^v&(k^y))+T[11]+643717713&4294967295,I=k+(w<<14&4294967295|w>>>18),w=v+(k^y&(I^k))+T[0]+3921069994&4294967295,v=I+(w<<20&4294967295|w>>>12),w=y+(I^k&(v^I))+T[5]+3593408605&4294967295,y=v+(w<<5&4294967295|w>>>27),w=k+(v^I&(y^v))+T[10]+38016083&4294967295,k=y+(w<<9&4294967295|w>>>23),w=I+(y^v&(k^y))+T[15]+3634488961&4294967295,I=k+(w<<14&4294967295|w>>>18),w=v+(k^y&(I^k))+T[4]+3889429448&4294967295,v=I+(w<<20&4294967295|w>>>12),w=y+(I^k&(v^I))+T[9]+568446438&4294967295,y=v+(w<<5&4294967295|w>>>27),w=k+(v^I&(y^v))+T[14]+3275163606&4294967295,k=y+(w<<9&4294967295|w>>>23),w=I+(y^v&(k^y))+T[3]+4107603335&4294967295,I=k+(w<<14&4294967295|w>>>18),w=v+(k^y&(I^k))+T[8]+1163531501&4294967295,v=I+(w<<20&4294967295|w>>>12),w=y+(I^k&(v^I))+T[13]+2850285829&4294967295,y=v+(w<<5&4294967295|w>>>27),w=k+(v^I&(y^v))+T[2]+4243563512&4294967295,k=y+(w<<9&4294967295|w>>>23),w=I+(y^v&(k^y))+T[7]+1735328473&4294967295,I=k+(w<<14&4294967295|w>>>18),w=v+(k^y&(I^k))+T[12]+2368359562&4294967295,v=I+(w<<20&4294967295|w>>>12),w=y+(v^I^k)+T[5]+4294588738&4294967295,y=v+(w<<4&4294967295|w>>>28),w=k+(y^v^I)+T[8]+2272392833&4294967295,k=y+(w<<11&4294967295|w>>>21),w=I+(k^y^v)+T[11]+1839030562&4294967295,I=k+(w<<16&4294967295|w>>>16),w=v+(I^k^y)+T[14]+4259657740&4294967295,v=I+(w<<23&4294967295|w>>>9),w=y+(v^I^k)+T[1]+2763975236&4294967295,y=v+(w<<4&4294967295|w>>>28),w=k+(y^v^I)+T[4]+1272893353&4294967295,k=y+(w<<11&4294967295|w>>>21),w=I+(k^y^v)+T[7]+4139469664&4294967295,I=k+(w<<16&4294967295|w>>>16),w=v+(I^k^y)+T[10]+3200236656&4294967295,v=I+(w<<23&4294967295|w>>>9),w=y+(v^I^k)+T[13]+681279174&4294967295,y=v+(w<<4&4294967295|w>>>28),w=k+(y^v^I)+T[0]+3936430074&4294967295,k=y+(w<<11&4294967295|w>>>21),w=I+(k^y^v)+T[3]+3572445317&4294967295,I=k+(w<<16&4294967295|w>>>16),w=v+(I^k^y)+T[6]+76029189&4294967295,v=I+(w<<23&4294967295|w>>>9),w=y+(v^I^k)+T[9]+3654602809&4294967295,y=v+(w<<4&4294967295|w>>>28),w=k+(y^v^I)+T[12]+3873151461&4294967295,k=y+(w<<11&4294967295|w>>>21),w=I+(k^y^v)+T[15]+530742520&4294967295,I=k+(w<<16&4294967295|w>>>16),w=v+(I^k^y)+T[2]+3299628645&4294967295,v=I+(w<<23&4294967295|w>>>9),w=y+(I^(v|~k))+T[0]+4096336452&4294967295,y=v+(w<<6&4294967295|w>>>26),w=k+(v^(y|~I))+T[7]+1126891415&4294967295,k=y+(w<<10&4294967295|w>>>22),w=I+(y^(k|~v))+T[14]+2878612391&4294967295,I=k+(w<<15&4294967295|w>>>17),w=v+(k^(I|~y))+T[5]+4237533241&4294967295,v=I+(w<<21&4294967295|w>>>11),w=y+(I^(v|~k))+T[12]+1700485571&4294967295,y=v+(w<<6&4294967295|w>>>26),w=k+(v^(y|~I))+T[3]+2399980690&4294967295,k=y+(w<<10&4294967295|w>>>22),w=I+(y^(k|~v))+T[10]+4293915773&4294967295,I=k+(w<<15&4294967295|w>>>17),w=v+(k^(I|~y))+T[1]+2240044497&4294967295,v=I+(w<<21&4294967295|w>>>11),w=y+(I^(v|~k))+T[8]+1873313359&4294967295,y=v+(w<<6&4294967295|w>>>26),w=k+(v^(y|~I))+T[15]+4264355552&4294967295,k=y+(w<<10&4294967295|w>>>22),w=I+(y^(k|~v))+T[6]+2734768916&4294967295,I=k+(w<<15&4294967295|w>>>17),w=v+(k^(I|~y))+T[13]+1309151649&4294967295,v=I+(w<<21&4294967295|w>>>11),w=y+(I^(v|~k))+T[4]+4149444226&4294967295,y=v+(w<<6&4294967295|w>>>26),w=k+(v^(y|~I))+T[11]+3174756917&4294967295,k=y+(w<<10&4294967295|w>>>22),w=I+(y^(k|~v))+T[2]+718787259&4294967295,I=k+(w<<15&4294967295|w>>>17),w=v+(k^(I|~y))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(I+(w<<21&4294967295|w>>>11))&4294967295,E.g[2]=E.g[2]+I&4294967295,E.g[3]=E.g[3]+k&4294967295}r.prototype.u=function(E,y){y===void 0&&(y=E.length);for(var v=y-this.blockSize,T=this.B,I=this.h,k=0;k<y;){if(I==0)for(;k<=v;)s(this,E,k),k+=this.blockSize;if(typeof E=="string"){for(;k<y;)if(T[I++]=E.charCodeAt(k++),I==this.blockSize){s(this,T),I=0;break}}else for(;k<y;)if(T[I++]=E[k++],I==this.blockSize){s(this,T),I=0;break}}this.h=I,this.o+=y},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;var v=8*this.o;for(y=E.length-8;y<E.length;++y)E[y]=v&255,v/=256;for(this.u(E),E=Array(16),y=v=0;4>y;++y)for(var T=0;32>T;T+=8)E[v++]=this.g[y]>>>T&255;return E};function i(E,y){var v=l;return Object.prototype.hasOwnProperty.call(v,E)?v[E]:v[E]=y(E)}function a(E,y){this.h=y;for(var v=[],T=!0,I=E.length-1;0<=I;I--){var k=E[I]|0;T&&k==y||(v[I]=k,T=!1)}this.g=v}var l={};function c(E){return-128<=E&&128>E?i(E,function(y){return new a([y|0],0>y?-1:0)}):new a([E|0],0>E?-1:0)}function u(E){if(isNaN(E)||!isFinite(E))return m;if(0>E)return C(u(-E));for(var y=[],v=1,T=0;E>=v;T++)y[T]=E/v|0,v*=4294967296;return new a(y,0)}function d(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return C(d(E.substring(1),y));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=u(Math.pow(y,8)),T=m,I=0;I<E.length;I+=8){var k=Math.min(8,E.length-I),w=parseInt(E.substring(I,I+k),y);8>k?(k=u(Math.pow(y,k)),T=T.j(k).add(u(w))):(T=T.j(v),T=T.add(u(w)))}return T}var m=c(0),p=c(1),_=c(16777216);n=a.prototype,n.m=function(){if(S(this))return-C(this).m();for(var E=0,y=1,v=0;v<this.g.length;v++){var T=this.i(v);E+=(0<=T?T:4294967296+T)*y,y*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(A(this))return"0";if(S(this))return"-"+C(this).toString(E);for(var y=u(Math.pow(E,6)),v=this,T="";;){var I=U(v,y).g;v=D(v,I.j(y));var k=((0<v.g.length?v.g[0]:v.h)>>>0).toString(E);if(v=I,A(v))return k+T;for(;6>k.length;)k="0"+k;T=k+T}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function A(E){if(E.h!=0)return!1;for(var y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function S(E){return E.h==-1}n.l=function(E){return E=D(this,E),S(E)?-1:A(E)?0:1};function C(E){for(var y=E.g.length,v=[],T=0;T<y;T++)v[T]=~E.g[T];return new a(v,~E.h).add(p)}n.abs=function(){return S(this)?C(this):this},n.add=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],T=0,I=0;I<=y;I++){var k=T+(this.i(I)&65535)+(E.i(I)&65535),w=(k>>>16)+(this.i(I)>>>16)+(E.i(I)>>>16);T=w>>>16,k&=65535,w&=65535,v[I]=w<<16|k}return new a(v,v[v.length-1]&-2147483648?-1:0)};function D(E,y){return E.add(C(y))}n.j=function(E){if(A(this)||A(E))return m;if(S(this))return S(E)?C(this).j(C(E)):C(C(this).j(E));if(S(E))return C(this.j(C(E)));if(0>this.l(_)&&0>E.l(_))return u(this.m()*E.m());for(var y=this.g.length+E.g.length,v=[],T=0;T<2*y;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(var I=0;I<E.g.length;I++){var k=this.i(T)>>>16,w=this.i(T)&65535,H=E.i(I)>>>16,Ee=E.i(I)&65535;v[2*T+2*I]+=w*Ee,x(v,2*T+2*I),v[2*T+2*I+1]+=k*Ee,x(v,2*T+2*I+1),v[2*T+2*I+1]+=w*H,x(v,2*T+2*I+1),v[2*T+2*I+2]+=k*H,x(v,2*T+2*I+2)}for(T=0;T<y;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=y;T<2*y;T++)v[T]=0;return new a(v,0)};function x(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function L(E,y){this.g=E,this.h=y}function U(E,y){if(A(y))throw Error("division by zero");if(A(E))return new L(m,m);if(S(E))return y=U(C(E),y),new L(C(y.g),C(y.h));if(S(y))return y=U(E,C(y)),new L(C(y.g),y.h);if(30<E.g.length){if(S(E)||S(y))throw Error("slowDivide_ only works with positive integers.");for(var v=p,T=y;0>=T.l(E);)v=ne(v),T=ne(T);var I=J(v,1),k=J(T,1);for(T=J(T,2),v=J(v,2);!A(T);){var w=k.add(T);0>=w.l(E)&&(I=I.add(v),k=w),T=J(T,1),v=J(v,1)}return y=D(E,I.j(y)),new L(I,y)}for(I=m;0<=E.l(y);){for(v=Math.max(1,Math.floor(E.m()/y.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),k=u(v),w=k.j(y);S(w)||0<w.l(E);)v-=T,k=u(v),w=k.j(y);A(k)&&(k=p),I=I.add(k),E=D(E,w)}return new L(I,E)}n.A=function(E){return U(this,E).h},n.and=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],T=0;T<y;T++)v[T]=this.i(T)&E.i(T);return new a(v,this.h&E.h)},n.or=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],T=0;T<y;T++)v[T]=this.i(T)|E.i(T);return new a(v,this.h|E.h)},n.xor=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],T=0;T<y;T++)v[T]=this.i(T)^E.i(T);return new a(v,this.h^E.h)};function ne(E){for(var y=E.g.length+1,v=[],T=0;T<y;T++)v[T]=E.i(T)<<1|E.i(T-1)>>>31;return new a(v,E.h)}function J(E,y){var v=y>>5;y%=32;for(var T=E.g.length-v,I=[],k=0;k<T;k++)I[k]=0<y?E.i(k+v)>>>y|E.i(k+v+1)<<32-y:E.i(k+v);return new a(I,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,lh=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=u,a.fromString=d,nn=a}).apply(typeof Dl<"u"?Dl:typeof self<"u"?self:typeof window<"u"?window:{});var gs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ch,Tr,uh,Is,so,hh,fh,dh;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,h,f){return o==Array.prototype||o==Object.prototype||(o[h]=f.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof gs=="object"&&gs];for(var h=0;h<o.length;++h){var f=o[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(o,h){if(h)e:{var f=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var P=o[g];if(!(P in f))break e;f=f[P]}o=o[o.length-1],g=f[o],h=h(g),h!=g&&h!=null&&e(f,o,{configurable:!0,writable:!0,value:h})}}function i(o,h){o instanceof String&&(o+="");var f=0,g=!1,P={next:function(){if(!g&&f<o.length){var M=f++;return{value:h(M,o[M]),done:!1}}return g=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(o){return o||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var h=typeof o;return h=h!="object"?h:o?Array.isArray(o)?"array":h:"null",h=="array"||h=="object"&&typeof o.length=="number"}function u(o){var h=typeof o;return h=="object"&&o!=null||h=="function"}function d(o,h,f){return o.call.apply(o.bind,arguments)}function m(o,h,f){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,g),o.apply(h,P)}}return function(){return o.apply(h,arguments)}}function p(o,h,f){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:m,p.apply(null,arguments)}function _(o,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function A(o,h){function f(){}f.prototype=h.prototype,o.aa=h.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(g,P,M){for(var z=Array(arguments.length-2),be=2;be<arguments.length;be++)z[be-2]=arguments[be];return h.prototype[P].apply(g,z)}}function S(o){const h=o.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=o[g];return f}return[]}function C(o,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const P=o.length||0,M=g.length||0;o.length=P+M;for(let z=0;z<M;z++)o[P+z]=g[z]}else o.push(g)}}class D{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function x(o){return/^[\s\xa0]*$/.test(o)}function L(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function U(o){return U[" "](o),o}U[" "]=function(){};var ne=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function J(o,h,f){for(const g in o)h.call(f,o[g],g,o)}function E(o,h){for(const f in o)h.call(void 0,o[f],f,o)}function y(o){const h={};for(const f in o)h[f]=o[f];return h}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,h){let f,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(f in g)o[f]=g[f];for(let M=0;M<v.length;M++)f=v[M],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function I(o){var h=1;o=o.split(":");const f=[];for(;0<h&&o.length;)f.push(o.shift()),h--;return o.length&&f.push(o.join(":")),f}function k(o){l.setTimeout(()=>{throw o},0)}function w(){var o=or;let h=null;return o.g&&(h=o.g,o.g=o.g.next,o.g||(o.h=null),h.next=null),h}class H{constructor(){this.h=this.g=null}add(h,f){const g=Ee.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Ee=new D(()=>new St,o=>o.reset());class St{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let _t,pn=!1,or=new H,N=()=>{const o=l.Promise.resolve(void 0);_t=()=>{o.then(R)}};var R=()=>{for(var o;o=w();){try{o.h.call(o.g)}catch(f){k(f)}var h=Ee;h.j(o),100>h.h&&(h.h++,o.next=h.g,h.g=o)}pn=!1};function K(){this.s=this.s,this.C=this.C}K.prototype.s=!1,K.prototype.ma=function(){this.s||(this.s=!0,this.N())},K.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function G(o,h){this.type=o,this.g=this.target=h,this.defaultPrevented=!1}G.prototype.h=function(){this.defaultPrevented=!0};var le=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,h=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return o}();function oe(o,h){if(G.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=h,h=o.relatedTarget){if(ne){e:{try{U(h.nodeName);var P=!0;break e}catch{}P=!1}P||(h=null)}}else f=="mouseover"?h=o.fromElement:f=="mouseout"&&(h=o.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:ue[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&oe.aa.h.call(this)}}A(oe,G);var ue={2:"touch",3:"pen",4:"mouse"};oe.prototype.h=function(){oe.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Z="closure_listenable_"+(1e6*Math.random()|0),he=0;function Ae(o,h,f,g,P){this.listener=o,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=P,this.key=++he,this.da=this.fa=!1}function Te(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ye(o){this.src=o,this.g={},this.h=0}ye.prototype.add=function(o,h,f,g,P){var M=o.toString();o=this.g[M],o||(o=this.g[M]=[],this.h++);var z=Ve(o,h,g,P);return-1<z?(h=o[z],f||(h.fa=!1)):(h=new Ae(h,this.src,M,!!g,P),h.fa=f,o.push(h)),h};function Ie(o,h){var f=h.type;if(f in o.g){var g=o.g[f],P=Array.prototype.indexOf.call(g,h,void 0),M;(M=0<=P)&&Array.prototype.splice.call(g,P,1),M&&(Te(h),o.g[f].length==0&&(delete o.g[f],o.h--))}}function Ve(o,h,f,g){for(var P=0;P<o.length;++P){var M=o[P];if(!M.da&&M.listener==h&&M.capture==!!f&&M.ha==g)return P}return-1}var fe="closure_lm_"+(1e6*Math.random()|0),Be={};function tt(o,h,f,g,P){if(Array.isArray(h)){for(var M=0;M<h.length;M++)tt(o,h[M],f,g,P);return null}return f=Yr(f),o&&o[Z]?o.K(h,f,u(g)?!!g.capture:!!g,P):ct(o,h,f,!1,g,P)}function ct(o,h,f,g,P,M){if(!h)throw Error("Invalid event type");var z=u(P)?!!P.capture:!!P,be=ar(o);if(be||(o[fe]=be=new ye(o)),f=be.add(h,f,g,z,M),f.proxy)return f;if(g=bt(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)le||(P=z),P===void 0&&(P=!1),o.addEventListener(h.toString(),g,P);else if(o.attachEvent)o.attachEvent(Jr(h.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function bt(){function o(f){return h.call(o.src,o.listener,f)}const h=yi;return o}function Pt(o,h,f,g,P){if(Array.isArray(h))for(var M=0;M<h.length;M++)Pt(o,h[M],f,g,P);else g=u(g)?!!g.capture:!!g,f=Yr(f),o&&o[Z]?(o=o.i,h=String(h).toString(),h in o.g&&(M=o.g[h],f=Ve(M,f,g,P),-1<f&&(Te(M[f]),Array.prototype.splice.call(M,f,1),M.length==0&&(delete o.g[h],o.h--)))):o&&(o=ar(o))&&(h=o.g[h.toString()],o=-1,h&&(o=Ve(h,f,g,P)),(f=-1<o?h[o]:null)&&nt(f))}function nt(o){if(typeof o!="number"&&o&&!o.da){var h=o.src;if(h&&h[Z])Ie(h.i,o);else{var f=o.type,g=o.proxy;h.removeEventListener?h.removeEventListener(f,g,o.capture):h.detachEvent?h.detachEvent(Jr(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=ar(h))?(Ie(f,o),f.h==0&&(f.src=null,h[fe]=null)):Te(o)}}}function Jr(o){return o in Be?Be[o]:Be[o]="on"+o}function yi(o,h){if(o.da)o=!0;else{h=new oe(h,this);var f=o.listener,g=o.ha||o.src;o.fa&&nt(o),o=f.call(g,h)}return o}function ar(o){return o=o[fe],o instanceof ye?o:null}var Vn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Yr(o){return typeof o=="function"?o:(o[Vn]||(o[Vn]=function(h){return o.handleEvent(h)}),o[Vn])}function Me(){K.call(this),this.i=new ye(this),this.M=this,this.F=null}A(Me,K),Me.prototype[Z]=!0,Me.prototype.removeEventListener=function(o,h,f,g){Pt(this,o,h,f,g)};function qe(o,h){var f,g=o.F;if(g)for(f=[];g;g=g.F)f.push(g);if(o=o.M,g=h.type||h,typeof h=="string")h=new G(h,o);else if(h instanceof G)h.target=h.target||o;else{var P=h;h=new G(g,o),T(h,P)}if(P=!0,f)for(var M=f.length-1;0<=M;M--){var z=h.g=f[M];P=Dn(z,g,!0,h)&&P}if(z=h.g=o,P=Dn(z,g,!0,h)&&P,P=Dn(z,g,!1,h)&&P,f)for(M=0;M<f.length;M++)z=h.g=f[M],P=Dn(z,g,!1,h)&&P}Me.prototype.N=function(){if(Me.aa.N.call(this),this.i){var o=this.i,h;for(h in o.g){for(var f=o.g[h],g=0;g<f.length;g++)Te(f[g]);delete o.g[h],o.h--}}this.F=null},Me.prototype.K=function(o,h,f,g){return this.i.add(String(o),h,!1,f,g)},Me.prototype.L=function(o,h,f,g){return this.i.add(String(o),h,!0,f,g)};function Dn(o,h,f,g){if(h=o.i.g[String(h)],!h)return!0;h=h.concat();for(var P=!0,M=0;M<h.length;++M){var z=h[M];if(z&&!z.da&&z.capture==f){var be=z.listener,ze=z.ha||z.src;z.fa&&Ie(o.i,z),P=be.call(ze,g)!==!1&&P}}return P&&!g.defaultPrevented}function lr(o,h,f){if(typeof o=="function")f&&(o=p(o,f));else if(o&&typeof o.handleEvent=="function")o=p(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(o,h||0)}function cr(o){o.g=lr(()=>{o.g=null,o.i&&(o.i=!1,cr(o))},o.l);const h=o.h;o.h=null,o.m.apply(null,h)}class ur extends K{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:cr(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gn(o){K.call(this),this.h=o,this.g={}}A(gn,K);var Zr=[];function _a(o){J(o.g,function(h,f){this.g.hasOwnProperty(f)&&nt(h)},o),o.g={}}gn.prototype.N=function(){gn.aa.N.call(this),_a(this)},gn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var wi=l.JSON.stringify,Xf=l.JSON.parse,Jf=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function vi(){}vi.prototype.h=null;function ya(o){return o.h||(o.h=o.i())}function wa(){}var hr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ai(){G.call(this,"d")}A(Ai,G);function Ei(){G.call(this,"c")}A(Ei,G);var _n={},va=null;function es(){return va=va||new Me}_n.La="serverreachability";function Aa(o){G.call(this,_n.La,o)}A(Aa,G);function fr(o){const h=es();qe(h,new Aa(h))}_n.STAT_EVENT="statevent";function Ea(o,h){G.call(this,_n.STAT_EVENT,o),this.stat=h}A(Ea,G);function Ze(o){const h=es();qe(h,new Ea(h,o))}_n.Ma="timingevent";function Ta(o,h){G.call(this,_n.Ma,o),this.size=h}A(Ta,G);function dr(o,h){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},h)}function mr(){this.g=!0}mr.prototype.xa=function(){this.g=!1};function Yf(o,h,f,g,P,M){o.info(function(){if(o.g)if(M)for(var z="",be=M.split("&"),ze=0;ze<be.length;ze++){var ge=be[ze].split("=");if(1<ge.length){var Ke=ge[0];ge=ge[1];var $e=Ke.split("_");z=2<=$e.length&&$e[1]=="type"?z+(Ke+"="+ge+"&"):z+(Ke+"=redacted&")}}else z=null;else z=M;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+h+`
`+f+`
`+z})}function Zf(o,h,f,g,P,M,z){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+h+`
`+f+`
`+M+" "+z})}function Nn(o,h,f,g){o.info(function(){return"XMLHTTP TEXT ("+h+"): "+td(o,f)+(g?" "+g:"")})}function ed(o,h){o.info(function(){return"TIMEOUT: "+h})}mr.prototype.info=function(){};function td(o,h){if(!o.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var g=f[o];if(!(2>g.length)){var P=g[1];if(Array.isArray(P)&&!(1>P.length)){var M=P[0];if(M!="noop"&&M!="stop"&&M!="close")for(var z=1;z<P.length;z++)P[z]=""}}}}return wi(f)}catch{return h}}var ts={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ba={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ti;function ns(){}A(ns,vi),ns.prototype.g=function(){return new XMLHttpRequest},ns.prototype.i=function(){return{}},Ti=new ns;function $t(o,h,f,g){this.j=o,this.i=h,this.l=f,this.R=g||1,this.U=new gn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ia}function Ia(){this.i=null,this.g="",this.h=!1}var Ra={},bi={};function Ii(o,h,f){o.L=1,o.v=os(Ft(h)),o.m=f,o.P=!0,Ca(o,null)}function Ca(o,h){o.F=Date.now(),rs(o),o.A=Ft(o.v);var f=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),ja(f.i,"t",g),o.C=0,f=o.j.J,o.h=new Ia,o.g=il(o.j,f?h:null,!o.m),0<o.O&&(o.M=new ur(p(o.Y,o,o.g),o.O)),h=o.U,f=o.g,g=o.ca;var P="readystatechange";Array.isArray(P)||(P&&(Zr[0]=P.toString()),P=Zr);for(var M=0;M<P.length;M++){var z=tt(f,P[M],g||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,h)):(o.u="GET",o.g.ea(o.A,o.u,null,h)),fr(),Yf(o.i,o.u,o.A,o.l,o.R,o.m)}$t.prototype.ca=function(o){o=o.target;const h=this.M;h&&Ut(o)==3?h.j():this.Y(o)},$t.prototype.Y=function(o){try{if(o==this.g)e:{const $e=Ut(this.g);var h=this.g.Ba();const xn=this.g.Z();if(!(3>$e)&&($e!=3||this.g&&(this.h.h||this.g.oa()||$a(this.g)))){this.J||$e!=4||h==7||(h==8||0>=xn?fr(3):fr(2)),Ri(this);var f=this.g.Z();this.X=f;t:if(ka(this)){var g=$a(this.g);o="";var P=g.length,M=Ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yn(this),pr(this);var z="";break t}this.h.i=new l.TextDecoder}for(h=0;h<P;h++)this.h.h=!0,o+=this.h.i.decode(g[h],{stream:!(M&&h==P-1)});g.length=0,this.h.g+=o,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=f==200,Zf(this.i,this.u,this.A,this.l,this.R,$e,f),this.o){if(this.T&&!this.K){t:{if(this.g){var be,ze=this.g;if((be=ze.g?ze.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(be)){var ge=be;break t}}ge=null}if(f=ge)Nn(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ci(this,f);else{this.o=!1,this.s=3,Ze(12),yn(this),pr(this);break e}}if(this.P){f=!0;let It;for(;!this.J&&this.C<z.length;)if(It=nd(this,z),It==bi){$e==4&&(this.s=4,Ze(14),f=!1),Nn(this.i,this.l,null,"[Incomplete Response]");break}else if(It==Ra){this.s=4,Ze(15),Nn(this.i,this.l,z,"[Invalid Chunk]"),f=!1;break}else Nn(this.i,this.l,It,null),Ci(this,It);if(ka(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),$e!=4||z.length!=0||this.h.h||(this.s=1,Ze(16),f=!1),this.o=this.o&&f,!f)Nn(this.i,this.l,z,"[Invalid Chunked Response]"),yn(this),pr(this);else if(0<z.length&&!this.W){this.W=!0;var Ke=this.j;Ke.g==this&&Ke.ba&&!Ke.M&&(Ke.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Ni(Ke),Ke.M=!0,Ze(11))}}else Nn(this.i,this.l,z,null),Ci(this,z);$e==4&&yn(this),this.o&&!this.J&&($e==4?tl(this.j,this):(this.o=!1,rs(this)))}else wd(this.g),f==400&&0<z.indexOf("Unknown SID")?(this.s=3,Ze(12)):(this.s=0,Ze(13)),yn(this),pr(this)}}}catch{}finally{}};function ka(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function nd(o,h){var f=o.C,g=h.indexOf(`
`,f);return g==-1?bi:(f=Number(h.substring(f,g)),isNaN(f)?Ra:(g+=1,g+f>h.length?bi:(h=h.slice(g,g+f),o.C=g+f,h)))}$t.prototype.cancel=function(){this.J=!0,yn(this)};function rs(o){o.S=Date.now()+o.I,Sa(o,o.I)}function Sa(o,h){if(o.B!=null)throw Error("WatchDog timer not null");o.B=dr(p(o.ba,o),h)}function Ri(o){o.B&&(l.clearTimeout(o.B),o.B=null)}$t.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(ed(this.i,this.A),this.L!=2&&(fr(),Ze(17)),yn(this),this.s=2,pr(this)):Sa(this,this.S-o)};function pr(o){o.j.G==0||o.J||tl(o.j,o)}function yn(o){Ri(o);var h=o.M;h&&typeof h.ma=="function"&&h.ma(),o.M=null,_a(o.U),o.g&&(h=o.g,o.g=null,h.abort(),h.ma())}function Ci(o,h){try{var f=o.j;if(f.G!=0&&(f.g==o||ki(f.h,o))){if(!o.K&&ki(f.h,o)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)fs(f),us(f);else break e;Di(f),Ze(18)}}else f.za=P[1],0<f.za-f.T&&37500>P[2]&&f.F&&f.v==0&&!f.C&&(f.C=dr(p(f.Za,f),6e3));if(1>=Da(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else vn(f,11)}else if((o.K||f.g==o)&&fs(f),!x(h))for(P=f.Da.g.parse(h),h=0;h<P.length;h++){let ge=P[h];if(f.T=ge[0],ge=ge[1],f.G==2)if(ge[0]=="c"){f.K=ge[1],f.ia=ge[2];const Ke=ge[3];Ke!=null&&(f.la=Ke,f.j.info("VER="+f.la));const $e=ge[4];$e!=null&&(f.Aa=$e,f.j.info("SVER="+f.Aa));const xn=ge[5];xn!=null&&typeof xn=="number"&&0<xn&&(g=1.5*xn,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const It=o.g;if(It){const ms=It.g?It.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ms){var M=g.h;M.g||ms.indexOf("spdy")==-1&&ms.indexOf("quic")==-1&&ms.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(Si(M,M.h),M.h=null))}if(g.D){const Mi=It.g?It.g.getResponseHeader("X-HTTP-Session-Id"):null;Mi&&(g.ya=Mi,Ce(g.I,g.D,Mi))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var z=o;if(g.qa=sl(g,g.J?g.ia:null,g.W),z.K){Na(g.h,z);var be=z,ze=g.L;ze&&(be.I=ze),be.B&&(Ri(be),rs(be)),g.g=z}else Za(g);0<f.i.length&&hs(f)}else ge[0]!="stop"&&ge[0]!="close"||vn(f,7);else f.G==3&&(ge[0]=="stop"||ge[0]=="close"?ge[0]=="stop"?vn(f,7):Vi(f):ge[0]!="noop"&&f.l&&f.l.ta(ge),f.v=0)}}fr(4)}catch{}}var rd=class{constructor(o,h){this.g=o,this.map=h}};function Pa(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Va(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Da(o){return o.h?1:o.g?o.g.size:0}function ki(o,h){return o.h?o.h==h:o.g?o.g.has(h):!1}function Si(o,h){o.g?o.g.add(h):o.h=h}function Na(o,h){o.h&&o.h==h?o.h=null:o.g&&o.g.has(h)&&o.g.delete(h)}Pa.prototype.cancel=function(){if(this.i=Ma(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ma(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let h=o.i;for(const f of o.g.values())h=h.concat(f.D);return h}return S(o.i)}function sd(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var h=[],f=o.length,g=0;g<f;g++)h.push(o[g]);return h}h=[],f=0;for(g in o)h[f++]=o[g];return h}function id(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var h=[];o=o.length;for(var f=0;f<o;f++)h.push(f);return h}h=[],f=0;for(const g in o)h[f++]=g;return h}}}function Oa(o,h){if(o.forEach&&typeof o.forEach=="function")o.forEach(h,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,h,void 0);else for(var f=id(o),g=sd(o),P=g.length,M=0;M<P;M++)h.call(void 0,g[M],f&&f[M],o)}var xa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function od(o,h){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var g=o[f].indexOf("="),P=null;if(0<=g){var M=o[f].substring(0,g);P=o[f].substring(g+1)}else M=o[f];h(M,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function wn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof wn){this.h=o.h,ss(this,o.j),this.o=o.o,this.g=o.g,is(this,o.s),this.l=o.l;var h=o.i,f=new yr;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),La(this,f),this.m=o.m}else o&&(h=String(o).match(xa))?(this.h=!1,ss(this,h[1]||"",!0),this.o=gr(h[2]||""),this.g=gr(h[3]||"",!0),is(this,h[4]),this.l=gr(h[5]||"",!0),La(this,h[6]||"",!0),this.m=gr(h[7]||"")):(this.h=!1,this.i=new yr(null,this.h))}wn.prototype.toString=function(){var o=[],h=this.j;h&&o.push(_r(h,Fa,!0),":");var f=this.g;return(f||h=="file")&&(o.push("//"),(h=this.o)&&o.push(_r(h,Fa,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(_r(f,f.charAt(0)=="/"?cd:ld,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",_r(f,hd)),o.join("")};function Ft(o){return new wn(o)}function ss(o,h,f){o.j=f?gr(h,!0):h,o.j&&(o.j=o.j.replace(/:$/,""))}function is(o,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);o.s=h}else o.s=null}function La(o,h,f){h instanceof yr?(o.i=h,fd(o.i,o.h)):(f||(h=_r(h,ud)),o.i=new yr(h,o.h))}function Ce(o,h,f){o.i.set(h,f)}function os(o){return Ce(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function gr(o,h){return o?h?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function _r(o,h,f){return typeof o=="string"?(o=encodeURI(o).replace(h,ad),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function ad(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Fa=/[#\/\?@]/g,ld=/[#\?:]/g,cd=/[#\?]/g,ud=/[#\?@]/g,hd=/#/g;function yr(o,h){this.h=this.g=null,this.i=o||null,this.j=!!h}function Qt(o){o.g||(o.g=new Map,o.h=0,o.i&&od(o.i,function(h,f){o.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}n=yr.prototype,n.add=function(o,h){Qt(this),this.i=null,o=Mn(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(h),this.h+=1,this};function Ua(o,h){Qt(o),h=Mn(o,h),o.g.has(h)&&(o.i=null,o.h-=o.g.get(h).length,o.g.delete(h))}function Ba(o,h){return Qt(o),h=Mn(o,h),o.g.has(h)}n.forEach=function(o,h){Qt(this),this.g.forEach(function(f,g){f.forEach(function(P){o.call(h,P,g,this)},this)},this)},n.na=function(){Qt(this);const o=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const P=o[g];for(let M=0;M<P.length;M++)f.push(h[g])}return f},n.V=function(o){Qt(this);let h=[];if(typeof o=="string")Ba(this,o)&&(h=h.concat(this.g.get(Mn(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)h=h.concat(o[f])}return h},n.set=function(o,h){return Qt(this),this.i=null,o=Mn(this,o),Ba(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[h]),this.h+=1,this},n.get=function(o,h){return o?(o=this.V(o),0<o.length?String(o[0]):h):h};function ja(o,h,f){Ua(o,h),0<f.length&&(o.i=null,o.g.set(Mn(o,h),S(f)),o.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const M=encodeURIComponent(String(g)),z=this.V(g);for(g=0;g<z.length;g++){var P=M;z[g]!==""&&(P+="="+encodeURIComponent(String(z[g]))),o.push(P)}}return this.i=o.join("&")};function Mn(o,h){return h=String(h),o.j&&(h=h.toLowerCase()),h}function fd(o,h){h&&!o.j&&(Qt(o),o.i=null,o.g.forEach(function(f,g){var P=g.toLowerCase();g!=P&&(Ua(this,g),ja(this,P,f))},o)),o.j=h}function dd(o,h){const f=new mr;if(l.Image){const g=new Image;g.onload=_(Xt,f,"TestLoadImage: loaded",!0,h,g),g.onerror=_(Xt,f,"TestLoadImage: error",!1,h,g),g.onabort=_(Xt,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=_(Xt,f,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else h(!1)}function md(o,h){const f=new mr,g=new AbortController,P=setTimeout(()=>{g.abort(),Xt(f,"TestPingServer: timeout",!1,h)},1e4);fetch(o,{signal:g.signal}).then(M=>{clearTimeout(P),M.ok?Xt(f,"TestPingServer: ok",!0,h):Xt(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(P),Xt(f,"TestPingServer: error",!1,h)})}function Xt(o,h,f,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(f)}catch{}}function pd(){this.g=new Jf}function gd(o,h,f){const g=f||"";try{Oa(o,function(P,M){let z=P;u(P)&&(z=wi(P)),h.push(g+M+"="+encodeURIComponent(z))})}catch(P){throw h.push(g+"type="+encodeURIComponent("_badmap")),P}}function as(o){this.l=o.Ub||null,this.j=o.eb||!1}A(as,vi),as.prototype.g=function(){return new ls(this.l,this.j)},as.prototype.i=function(o){return function(){return o}}({});function ls(o,h){Me.call(this),this.D=o,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(ls,Me),n=ls.prototype,n.open=function(o,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=h,this.readyState=1,vr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(h.body=o),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,wr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,vr(this)),this.g&&(this.readyState=3,vr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;qa(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function qa(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var h=o.value?o.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!o.done}))&&(this.response=this.responseText+=h)}o.done?wr(this):vr(this),this.readyState==3&&qa(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,wr(this))},n.Qa=function(o){this.g&&(this.response=o,wr(this))},n.ga=function(){this.g&&wr(this)};function wr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,vr(o)}n.setRequestHeader=function(o,h){this.u.append(o,h)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=h.next();return o.join(`\r
`)};function vr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ls.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function za(o){let h="";return J(o,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function Pi(o,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=za(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):Ce(o,h,f))}function Pe(o){Me.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(Pe,Me);var _d=/^https?$/i,yd=["POST","PUT"];n=Pe.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);h=h?h.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ti.g(),this.v=this.o?ya(this.o):ya(Ti),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(h,String(o),!0),this.B=!1}catch(M){Ha(this,M);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)f.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const M of g.keys())f.set(M,g.get(M));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(M=>M.toLowerCase()=="content-type"),P=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(yd,h,void 0))||g||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,z]of f)this.g.setRequestHeader(M,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ka(this),this.u=!0,this.g.send(o),this.u=!1}catch(M){Ha(this,M)}};function Ha(o,h){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=h,o.m=5,Wa(o),cs(o)}function Wa(o){o.A||(o.A=!0,qe(o,"complete"),qe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,qe(this,"complete"),qe(this,"abort"),cs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),cs(this,!0)),Pe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ga(this):this.bb())},n.bb=function(){Ga(this)};function Ga(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Ut(o)!=4||o.Z()!=2)){if(o.u&&Ut(o)==4)lr(o.Ea,0,o);else if(qe(o,"readystatechange"),Ut(o)==4){o.h=!1;try{const z=o.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=z===0){var P=String(o.D).match(xa)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),g=!_d.test(P?P.toLowerCase():"")}f=g}if(f)qe(o,"complete"),qe(o,"success");else{o.m=6;try{var M=2<Ut(o)?o.g.statusText:""}catch{M=""}o.l=M+" ["+o.Z()+"]",Wa(o)}}finally{cs(o)}}}}function cs(o,h){if(o.g){Ka(o);const f=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,h||qe(o,"ready");try{f.onreadystatechange=g}catch{}}}function Ka(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Ut(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Ut(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var h=this.g.responseText;return o&&h.indexOf(o)==0&&(h=h.substring(o.length)),Xf(h)}};function $a(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function wd(o){const h={};o=(o.g&&2<=Ut(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(x(o[g]))continue;var f=I(o[g]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const M=h[P]||[];h[P]=M,M.push(f)}E(h,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ar(o,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||h}function Qa(o){this.Aa=0,this.i=[],this.j=new mr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ar("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ar("baseRetryDelayMs",5e3,o),this.cb=Ar("retryDelaySeedMs",1e4,o),this.Wa=Ar("forwardChannelMaxRetries",2,o),this.wa=Ar("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Pa(o&&o.concurrentRequestLimit),this.Da=new pd,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Qa.prototype,n.la=8,n.G=1,n.connect=function(o,h,f,g){Ze(0),this.W=o,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=sl(this,null,this.W),hs(this)};function Vi(o){if(Xa(o),o.G==3){var h=o.U++,f=Ft(o.I);if(Ce(f,"SID",o.K),Ce(f,"RID",h),Ce(f,"TYPE","terminate"),Er(o,f),h=new $t(o,o.j,h),h.L=2,h.v=os(Ft(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=il(h.j,null),h.g.ea(h.v)),h.F=Date.now(),rs(h)}rl(o)}function us(o){o.g&&(Ni(o),o.g.cancel(),o.g=null)}function Xa(o){us(o),o.u&&(l.clearTimeout(o.u),o.u=null),fs(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function hs(o){if(!Va(o.h)&&!o.s){o.s=!0;var h=o.Ga;_t||N(),pn||(_t(),pn=!0),or.add(h,o),o.B=0}}function vd(o,h){return Da(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=h.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=dr(p(o.Ga,o,h),nl(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const P=new $t(this,this.j,o);let M=this.o;if(this.S&&(M?(M=y(M),T(M,this.S)):M=this.S),this.m!==null||this.O||(P.H=M,M=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Ya(this,P,h),f=Ft(this.I),Ce(f,"RID",o),Ce(f,"CVER",22),this.D&&Ce(f,"X-HTTP-Session-Id",this.D),Er(this,f),M&&(this.O?h="headers="+encodeURIComponent(String(za(M)))+"&"+h:this.m&&Pi(f,this.m,M)),Si(this.h,P),this.Ua&&Ce(f,"TYPE","init"),this.P?(Ce(f,"$req",h),Ce(f,"SID","null"),P.T=!0,Ii(P,f,null)):Ii(P,f,h),this.G=2}}else this.G==3&&(o?Ja(this,o):this.i.length==0||Va(this.h)||Ja(this))};function Ja(o,h){var f;h?f=h.l:f=o.U++;const g=Ft(o.I);Ce(g,"SID",o.K),Ce(g,"RID",f),Ce(g,"AID",o.T),Er(o,g),o.m&&o.o&&Pi(g,o.m,o.o),f=new $t(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),h&&(o.i=h.D.concat(o.i)),h=Ya(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Si(o.h,f),Ii(f,g,h)}function Er(o,h){o.H&&J(o.H,function(f,g){Ce(h,g,f)}),o.l&&Oa({},function(f,g){Ce(h,g,f)})}function Ya(o,h,f){f=Math.min(o.i.length,f);var g=o.l?p(o.l.Na,o.l,o):null;e:{var P=o.i;let M=-1;for(;;){const z=["count="+f];M==-1?0<f?(M=P[0].g,z.push("ofs="+M)):M=0:z.push("ofs="+M);let be=!0;for(let ze=0;ze<f;ze++){let ge=P[ze].g;const Ke=P[ze].map;if(ge-=M,0>ge)M=Math.max(0,P[ze].g-100),be=!1;else try{gd(Ke,z,"req"+ge+"_")}catch{g&&g(Ke)}}if(be){g=z.join("&");break e}}}return o=o.i.splice(0,f),h.D=o,g}function Za(o){if(!o.g&&!o.u){o.Y=1;var h=o.Fa;_t||N(),pn||(_t(),pn=!0),or.add(h,o),o.v=0}}function Di(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=dr(p(o.Fa,o),nl(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,el(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=dr(p(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ze(10),us(this),el(this))};function Ni(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function el(o){o.g=new $t(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var h=Ft(o.qa);Ce(h,"RID","rpc"),Ce(h,"SID",o.K),Ce(h,"AID",o.T),Ce(h,"CI",o.F?"0":"1"),!o.F&&o.ja&&Ce(h,"TO",o.ja),Ce(h,"TYPE","xmlhttp"),Er(o,h),o.m&&o.o&&Pi(h,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=os(Ft(h)),f.m=null,f.P=!0,Ca(f,o)}n.Za=function(){this.C!=null&&(this.C=null,us(this),Di(this),Ze(19))};function fs(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function tl(o,h){var f=null;if(o.g==h){fs(o),Ni(o),o.g=null;var g=2}else if(ki(o.h,h))f=h.D,Na(o.h,h),g=1;else return;if(o.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var P=o.B;g=es(),qe(g,new Ta(g,f)),hs(o)}else Za(o);else if(P=h.s,P==3||P==0&&0<h.X||!(g==1&&vd(o,h)||g==2&&Di(o)))switch(f&&0<f.length&&(h=o.h,h.i=h.i.concat(f)),P){case 1:vn(o,5);break;case 4:vn(o,10);break;case 3:vn(o,6);break;default:vn(o,2)}}}function nl(o,h){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*h}function vn(o,h){if(o.j.info("Error code "+h),h==2){var f=p(o.fb,o),g=o.Xa;const P=!g;g=new wn(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ss(g,"https"),os(g),P?dd(g.toString(),f):md(g.toString(),f)}else Ze(2);o.G=0,o.l&&o.l.sa(h),rl(o),Xa(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ze(2)):(this.j.info("Failed to ping google.com"),Ze(1))};function rl(o){if(o.G=0,o.ka=[],o.l){const h=Ma(o.h);(h.length!=0||o.i.length!=0)&&(C(o.ka,h),C(o.ka,o.i),o.h.i.length=0,S(o.i),o.i.length=0),o.l.ra()}}function sl(o,h,f){var g=f instanceof wn?Ft(f):new wn(f);if(g.g!="")h&&(g.g=h+"."+g.g),is(g,g.s);else{var P=l.location;g=P.protocol,h=h?h+"."+P.hostname:P.hostname,P=+P.port;var M=new wn(null);g&&ss(M,g),h&&(M.g=h),P&&is(M,P),f&&(M.l=f),g=M}return f=o.D,h=o.ya,f&&h&&Ce(g,f,h),Ce(g,"VER",o.la),Er(o,g),g}function il(o,h,f){if(h&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=o.Ca&&!o.pa?new Pe(new as({eb:f})):new Pe(o.pa),h.Ha(o.J),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ol(){}n=ol.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ds(){}ds.prototype.g=function(o,h){return new ut(o,h)};function ut(o,h){Me.call(this),this.g=new Qa(h),this.l=o,this.h=h&&h.messageUrlParams||null,o=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(o?o["X-WebChannel-Content-Type"]=h.messageContentType:o={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(o?o["X-WebChannel-Client-Profile"]=h.va:o={"X-WebChannel-Client-Profile":h.va}),this.g.S=o,(o=h&&h.Sb)&&!x(o)&&(this.g.m=o),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!x(h)&&(this.g.D=h,o=this.h,o!==null&&h in o&&(o=this.h,h in o&&delete o[h])),this.j=new On(this)}A(ut,Me),ut.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ut.prototype.close=function(){Vi(this.g)},ut.prototype.o=function(o){var h=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=wi(o),o=f);h.i.push(new rd(h.Ya++,o)),h.G==3&&hs(h)},ut.prototype.N=function(){this.g.l=null,delete this.j,Vi(this.g),delete this.g,ut.aa.N.call(this)};function al(o){Ai.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var h=o.__sm__;if(h){e:{for(const f in h){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,h=h!==null&&o in h?h[o]:void 0),this.data=h}else this.data=o}A(al,Ai);function ll(){Ei.call(this),this.status=1}A(ll,Ei);function On(o){this.g=o}A(On,ol),On.prototype.ua=function(){qe(this.g,"a")},On.prototype.ta=function(o){qe(this.g,new al(o))},On.prototype.sa=function(o){qe(this.g,new ll)},On.prototype.ra=function(){qe(this.g,"b")},ds.prototype.createWebChannel=ds.prototype.g,ut.prototype.send=ut.prototype.o,ut.prototype.open=ut.prototype.m,ut.prototype.close=ut.prototype.close,dh=function(){return new ds},fh=function(){return es()},hh=_n,so={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ts.NO_ERROR=0,ts.TIMEOUT=8,ts.HTTP_ERROR=6,Is=ts,ba.COMPLETE="complete",uh=ba,wa.EventType=hr,hr.OPEN="a",hr.CLOSE="b",hr.ERROR="c",hr.MESSAGE="d",Me.prototype.listen=Me.prototype.K,Tr=wa,Pe.prototype.listenOnce=Pe.prototype.L,Pe.prototype.getLastError=Pe.prototype.Ka,Pe.prototype.getLastErrorCode=Pe.prototype.Ba,Pe.prototype.getStatus=Pe.prototype.Z,Pe.prototype.getResponseJson=Pe.prototype.Oa,Pe.prototype.getResponseText=Pe.prototype.oa,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Ha,ch=Pe}).apply(typeof gs<"u"?gs:typeof self<"u"?self:typeof window<"u"?window:{});const Nl="@firebase/firestore",Ml="4.7.10";/**
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
 */class Xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
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
 */const Cn=new bo("@firebase/firestore");function Bn(){return Cn.logLevel}function W(n,...e){if(Cn.logLevel<=pe.DEBUG){const t=e.map(Do);Cn.debug(`Firestore (${tr}): ${n}`,...t)}}function Ht(n,...e){if(Cn.logLevel<=pe.ERROR){const t=e.map(Do);Cn.error(`Firestore (${tr}): ${n}`,...t)}}function Kn(n,...e){if(Cn.logLevel<=pe.WARN){const t=e.map(Do);Cn.warn(`Firestore (${tr}): ${n}`,...t)}}function Do(n){if(typeof n=="string")return n;try{/**
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
 */function re(n="Unexpected state"){const e=`FIRESTORE (${tr}) INTERNAL ASSERTION FAILED: `+n;throw Ht(e),new Error(e)}function we(n,e){n||re()}function ae(n,e){return n}/**
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
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Q extends fn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class jt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class mh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ng{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Xe.UNAUTHENTICATED))}shutdown(){}}class Mg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Og{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){we(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new jt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new jt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new jt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(we(typeof r.accessToken=="string"),new mh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return we(e===null||typeof e=="string"),new Xe(e)}}class xg{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Lg{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new xg(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ol{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Fg{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Zm(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){we(this.o===void 0);const r=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,W("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Ol(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(we(typeof t.token=="string"),this.R=t.token,new Ol(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */class gh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Ug(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function ce(n,e){return n<e?-1:n>e?1:0}function io(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return ce(r,s);{const i=ph(),a=Bg(i.encode(xl(n,t)),i.encode(xl(e,t)));return a!==0?a:ce(r,s)}}t+=r>65535?2:1}return ce(n.length,e.length)}function xl(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function Bg(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return ce(n[t],e[t]);return ce(n.length,e.length)}function $n(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const Ll=-62135596800,Fl=1e6;class xe{static now(){return xe.fromMillis(Date.now())}static fromDate(e){return xe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Fl);return new xe(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Q(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Q(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ll)throw new Q(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Q(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Fl}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Ll;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */const Ul="__name__";class Vt{constructor(e,t,r){t===void 0?t=0:t>e.length&&re(),r===void 0?r=e.length-t:r>e.length-t&&re(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Vt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Vt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Vt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return ce(e.length,t.length)}static compareSegments(e,t){const r=Vt.isNumericId(e),s=Vt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Vt.extractNumericId(e).compare(Vt.extractNumericId(t)):io(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return nn.fromString(e.substring(4,e.length-2))}}class ke extends Vt{construct(e,t,r){return new ke(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new Q(B.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new ke(t)}static emptyPath(){return new ke([])}}const jg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends Vt{construct(e,t,r){return new We(e,t,r)}static isValidIdentifier(e){return jg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ul}static keyField(){return new We([Ul])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Q(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new Q(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Q(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new Q(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new We(t)}static emptyPath(){return new We([])}}/**
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
 */class ee{constructor(e){this.path=e}static fromPath(e){return new ee(ke.fromString(e))}static fromName(e){return new ee(ke.fromString(e).popFirst(5))}static empty(){return new ee(ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ke.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ee(new ke(e.slice()))}}/**
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
 */const xr=-1;function qg(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=ie.fromTimestamp(r===1e9?new xe(t+1,0):new xe(t,r));return new on(s,ee.empty(),e)}function zg(n){return new on(n.readTime,n.key,xr)}class on{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new on(ie.min(),ee.empty(),xr)}static max(){return new on(ie.max(),ee.empty(),xr)}}function Hg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ee.comparator(n.documentKey,e.documentKey),t!==0?t:ce(n.largestBatchId,e.largestBatchId))}/**
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
 */async function nr(n){if(n.code!==B.FAILED_PRECONDITION||n.message!==Wg)throw n;W("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new F((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof F?t:F.resolve(t)}catch(t){return F.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):F.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):F.reject(t)}static resolve(e){return new F((t,r)=>{t(e)})}static reject(e){return new F((t,r)=>{r(e)})}static waitFor(e){return new F((t,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&t()},c=>r(c))}),a=!0,i===s&&t()})}static or(e){let t=F.resolve(!1);for(const r of e)t=t.next(s=>s?F.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new F((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;t(e[u]).next(d=>{a[u]=d,++l,l===i&&r(a)},d=>s(d))}})}static doWhile(e,t){return new F((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function Kg(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function rr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */function jl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function dn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function yh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Se{constructor(e,t){this.comparator=e,this.root=t||He.EMPTY}insert(e,t){return new Se(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,He.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,He.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _s(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _s(this.root,e,this.comparator,!1)}getReverseIterator(){return new _s(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _s(this.root,e,this.comparator,!0)}}class _s{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class He{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??He.RED,this.left=s??He.EMPTY,this.right=i??He.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new He(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return He.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return He.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw re();const e=this.left.check();if(e!==this.right.check())throw re();return e+(this.isRed()?0:1)}}He.EMPTY=null,He.RED=!0,He.BLACK=!1;He.EMPTY=new class{constructor(){this.size=0}get key(){throw re()}get value(){throw re()}get color(){throw re()}get left(){throw re()}get right(){throw re()}copy(e,t,r,s,i){return this}insert(e,t,r){return new He(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Le{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ql(this.data.getIterator())}getIteratorFrom(e){return new ql(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Le)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Le(this.comparator);return t.data=e,t}}class ql{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class dt{constructor(e){this.fields=e,e.sort(We.comparator)}static empty(){return new dt([])}unionWith(e){let t=new Le(We.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new dt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return $n(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Ge{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new wh("Invalid base64 string: "+i):i}}(e);return new Ge(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Ge(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ge.EMPTY_BYTE_STRING=new Ge("");const Jg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function an(n){if(we(!!n),typeof n=="string"){let e=0;const t=Jg.exec(n);if(we(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:De(n.seconds),nanos:De(n.nanos)}}function De(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ln(n){return typeof n=="string"?Ge.fromBase64String(n):Ge.fromUint8Array(n)}/**
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
 */const vh="server_timestamp",Ah="__type__",Eh="__previous_value__",Th="__local_write_time__";function Mo(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Ah])===null||t===void 0?void 0:t.stringValue)===vh}function ei(n){const e=n.mapValue.fields[Eh];return Mo(e)?ei(e):e}function Lr(n){const e=an(n.mapValue.fields[Th].timestampValue);return new xe(e.seconds,e.nanos)}/**
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
 */const bh="__type__",Ih="__max__",ys={mapValue:{fields:{__type__:{stringValue:Ih}}}},Rh="__vector__",Ls="value";function cn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Mo(n)?4:e_(n)?9007199254740991:Zg(n)?10:11:re()}function Ot(n,e){if(n===e)return!0;const t=cn(n);if(t!==cn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Lr(n).isEqual(Lr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=an(s.timestampValue),l=an(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return ln(s.bytesValue).isEqual(ln(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return De(s.geoPointValue.latitude)===De(i.geoPointValue.latitude)&&De(s.geoPointValue.longitude)===De(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return De(s.integerValue)===De(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=De(s.doubleValue),l=De(i.doubleValue);return a===l?Os(a)===Os(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return $n(n.arrayValue.values||[],e.arrayValue.values||[],Ot);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(jl(a)!==jl(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!Ot(a[c],l[c])))return!1;return!0}(n,e);default:return re()}}function Ur(n,e){return(n.values||[]).find(t=>Ot(t,e))!==void 0}function Qn(n,e){if(n===e)return 0;const t=cn(n),r=cn(e);if(t!==r)return ce(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ce(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=De(i.integerValue||i.doubleValue),c=De(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return zl(n.timestampValue,e.timestampValue);case 4:return zl(Lr(n),Lr(e));case 5:return io(n.stringValue,e.stringValue);case 6:return function(i,a){const l=ln(i),c=ln(a);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=ce(l[u],c[u]);if(d!==0)return d}return ce(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=ce(De(i.latitude),De(a.latitude));return l!==0?l:ce(De(i.longitude),De(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Hl(n.arrayValue,e.arrayValue);case 10:return function(i,a){var l,c,u,d;const m=i.fields||{},p=a.fields||{},_=(l=m[Ls])===null||l===void 0?void 0:l.arrayValue,A=(c=p[Ls])===null||c===void 0?void 0:c.arrayValue,S=ce(((u=_==null?void 0:_.values)===null||u===void 0?void 0:u.length)||0,((d=A==null?void 0:A.values)===null||d===void 0?void 0:d.length)||0);return S!==0?S:Hl(_,A)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===ys.mapValue&&a===ys.mapValue)return 0;if(i===ys.mapValue)return 1;if(a===ys.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=a.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let m=0;m<c.length&&m<d.length;++m){const p=io(c[m],d[m]);if(p!==0)return p;const _=Qn(l[c[m]],u[d[m]]);if(_!==0)return _}return ce(c.length,d.length)}(n.mapValue,e.mapValue);default:throw re()}}function zl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ce(n,e);const t=an(n),r=an(e),s=ce(t.seconds,r.seconds);return s!==0?s:ce(t.nanos,r.nanos)}function Hl(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Qn(t[s],r[s]);if(i)return i}return ce(t.length,r.length)}function Xn(n){return oo(n)}function oo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=an(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return ln(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ee.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=oo(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${oo(t.fields[a])}`;return s+"}"}(n.mapValue):re()}function Rs(n){switch(cn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ei(n);return e?16+Rs(e):16;case 5:return 2*n.stringValue.length;case 6:return ln(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Rs(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return dn(r.fields,(i,a)=>{s+=i.length+Rs(a)}),s}(n.mapValue);default:throw re()}}function ao(n){return!!n&&"integerValue"in n}function Oo(n){return!!n&&"arrayValue"in n}function Wl(n){return!!n&&"nullValue"in n}function Gl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Cs(n){return!!n&&"mapValue"in n}function Zg(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[bh])===null||t===void 0?void 0:t.stringValue)===Rh}function kr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return dn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=kr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=kr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function e_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Ih}/**
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
 */class st{constructor(e){this.value=e}static empty(){return new st({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Cs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=kr(t)}setAll(e){let t=We.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=kr(a):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Cs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ot(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Cs(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){dn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new st(kr(this.value))}}function Ch(n){const e=[];return dn(n.fields,(t,r)=>{const s=new We([t]);if(Cs(r)){const i=Ch(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new dt(e)}/**
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
 */class Je{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Je(e,0,ie.min(),ie.min(),ie.min(),st.empty(),0)}static newFoundDocument(e,t,r,s){return new Je(e,1,t,ie.min(),r,s,0)}static newNoDocument(e,t){return new Je(e,2,t,ie.min(),ie.min(),st.empty(),0)}static newUnknownDocument(e,t){return new Je(e,3,t,ie.min(),ie.min(),st.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=st.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=st.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Fs{constructor(e,t){this.position=e,this.inclusive=t}}function Kl(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=ee.comparator(ee.fromName(a.referenceValue),t.key):r=Qn(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function $l(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ot(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class kh{}class Oe extends kh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new r_(e,t,r):t==="array-contains"?new o_(e,r):t==="in"?new a_(e,r):t==="not-in"?new l_(e,r):t==="array-contains-any"?new c_(e,r):new Oe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new s_(e,r):new i_(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Qn(t,this.value)):t!==null&&cn(this.value)===cn(t)&&this.matchesComparison(Qn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xt extends kh{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new xt(e,t)}matches(e){return Sh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Sh(n){return n.op==="and"}function Ph(n){return n_(n)&&Sh(n)}function n_(n){for(const e of n.filters)if(e instanceof xt)return!1;return!0}function lo(n){if(n instanceof Oe)return n.field.canonicalString()+n.op.toString()+Xn(n.value);if(Ph(n))return n.filters.map(e=>lo(e)).join(",");{const e=n.filters.map(t=>lo(t)).join(",");return`${n.op}(${e})`}}function Vh(n,e){return n instanceof Oe?function(r,s){return s instanceof Oe&&r.op===s.op&&r.field.isEqual(s.field)&&Ot(r.value,s.value)}(n,e):n instanceof xt?function(r,s){return s instanceof xt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Vh(a,s.filters[l]),!0):!1}(n,e):void re()}function Dh(n){return n instanceof Oe?function(t){return`${t.field.canonicalString()} ${t.op} ${Xn(t.value)}`}(n):n instanceof xt?function(t){return t.op.toString()+" {"+t.getFilters().map(Dh).join(" ,")+"}"}(n):"Filter"}class r_ extends Oe{constructor(e,t,r){super(e,t,r),this.key=ee.fromName(r.referenceValue)}matches(e){const t=ee.comparator(e.key,this.key);return this.matchesComparison(t)}}class s_ extends Oe{constructor(e,t){super(e,"in",t),this.keys=Nh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class i_ extends Oe{constructor(e,t){super(e,"not-in",t),this.keys=Nh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Nh(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>ee.fromName(r.referenceValue))}class o_ extends Oe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Oo(t)&&Ur(t.arrayValue,this.value)}}class a_ extends Oe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ur(this.value.arrayValue,t)}}class l_ extends Oe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ur(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ur(this.value.arrayValue,t)}}class c_ extends Oe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Oo(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ur(this.value.arrayValue,r))}}/**
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
 */class u_{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.le=null}}function Ql(n,e=null,t=[],r=[],s=null,i=null,a=null){return new u_(n,e,t,r,s,i,a)}function xo(n){const e=ae(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>lo(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Zs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Xn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Xn(r)).join(",")),e.le=t}return e.le}function Lo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!t_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Vh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!$l(n.startAt,e.startAt)&&$l(n.endAt,e.endAt)}function co(n){return ee.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class ti{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function h_(n,e,t,r,s,i,a,l){return new ti(n,e,t,r,s,i,a,l)}function Fo(n){return new ti(n)}function Xl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function f_(n){return n.collectionGroup!==null}function Sr(n){const e=ae(n);if(e.he===null){e.he=[];const t=new Set;for(const i of e.explicitOrderBy)e.he.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Le(We.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.he.push(new Us(i,r))}),t.has(We.keyField().canonicalString())||e.he.push(new Us(We.keyField(),r))}return e.he}function Nt(n){const e=ae(n);return e.Pe||(e.Pe=d_(e,Sr(n))),e.Pe}function d_(n,e){if(n.limitType==="F")return Ql(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Us(s.field,i)});const t=n.endAt?new Fs(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Fs(n.startAt.position,n.startAt.inclusive):null;return Ql(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function uo(n,e,t){return new ti(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ni(n,e){return Lo(Nt(n),Nt(e))&&n.limitType===e.limitType}function Mh(n){return`${xo(Nt(n))}|lt:${n.limitType}`}function jn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Dh(s)).join(", ")}]`),Zs(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Xn(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Xn(s)).join(",")),`Target(${r})`}(Nt(n))}; limitType=${n.limitType})`}function ri(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ee.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Sr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,c){const u=Kl(a,l,c);return a.inclusive?u<=0:u<0}(r.startAt,Sr(r),s)||r.endAt&&!function(a,l,c){const u=Kl(a,l,c);return a.inclusive?u>=0:u>0}(r.endAt,Sr(r),s))}(n,e)}function m_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Oh(n){return(e,t)=>{let r=!1;for(const s of Sr(n)){const i=p_(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function p_(n,e,t){const r=n.field.isKeyField()?ee.comparator(e.key,t.key):function(i,a,l){const c=a.data.field(i),u=l.data.field(i);return c!==null&&u!==null?Qn(c,u):re()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return re()}}/**
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
 */class Sn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){dn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return yh(this.inner)}size(){return this.innerSize}}/**
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
 */const g_=new Se(ee.comparator);function Wt(){return g_}const xh=new Se(ee.comparator);function br(...n){let e=xh;for(const t of n)e=e.insert(t.key,t);return e}function Lh(n){let e=xh;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function bn(){return Pr()}function Fh(){return Pr()}function Pr(){return new Sn(n=>n.toString(),(n,e)=>n.isEqual(e))}const __=new Se(ee.comparator),y_=new Le(ee.comparator);function de(...n){let e=y_;for(const t of n)e=e.add(t);return e}const w_=new Le(ce);function v_(){return w_}/**
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
 */class si{constructor(){this._=void 0}}function E_(n,e,t){return n instanceof Bs?function(s,i){const a={fields:{[Ah]:{stringValue:vh},[Th]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Mo(i)&&(i=ei(i)),i&&(a.fields[Eh]=i),{mapValue:a}}(t,e):n instanceof Br?jh(n,e):n instanceof jr?qh(n,e):function(s,i){const a=Bh(s,i),l=Jl(a)+Jl(s.Ie);return ao(a)&&ao(s.Ie)?Uh(l):Uo(s.serializer,l)}(n,e)}function T_(n,e,t){return n instanceof Br?jh(n,e):n instanceof jr?qh(n,e):t}function Bh(n,e){return n instanceof js?function(r){return ao(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Bs extends si{}class Br extends si{constructor(e){super(),this.elements=e}}function jh(n,e){const t=zh(e);for(const r of n.elements)t.some(s=>Ot(s,r))||t.push(r);return{arrayValue:{values:t}}}class jr extends si{constructor(e){super(),this.elements=e}}function qh(n,e){let t=zh(e);for(const r of n.elements)t=t.filter(s=>!Ot(s,r));return{arrayValue:{values:t}}}class js extends si{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function Jl(n){return De(n.integerValue||n.doubleValue)}function zh(n){return Oo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function b_(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Br&&s instanceof Br||r instanceof jr&&s instanceof jr?$n(r.elements,s.elements,Ot):r instanceof js&&s instanceof js?Ot(r.Ie,s.Ie):r instanceof Bs&&s instanceof Bs}(n.transform,e.transform)}class I_{constructor(e,t){this.version=e,this.transformResults=t}}class mt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new mt}static exists(e){return new mt(void 0,e)}static updateTime(e){return new mt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ks(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ii{}function Hh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Bo(n.key,mt.none()):new Hr(n.key,n.data,mt.none());{const t=n.data,r=st.empty();let s=new Le(We.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new mn(n.key,r,new dt(s.toArray()),mt.none())}}function R_(n,e,t){n instanceof Hr?function(s,i,a){const l=s.value.clone(),c=Zl(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof mn?function(s,i,a){if(!ks(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Zl(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(Wh(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Vr(n,e,t,r){return n instanceof Hr?function(i,a,l,c){if(!ks(i.precondition,a))return l;const u=i.value.clone(),d=ec(i.fieldTransforms,c,a);return u.setAll(d),a.convertToFoundDocument(a.version,u).setHasLocalMutations(),null}(n,e,t,r):n instanceof mn?function(i,a,l,c){if(!ks(i.precondition,a))return l;const u=ec(i.fieldTransforms,c,a),d=a.data;return d.setAll(Wh(i)),d.setAll(u),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(i,a,l){return ks(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function C_(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Bh(r.transform,s||null);i!=null&&(t===null&&(t=st.empty()),t.set(r.field,i))}return t||null}function Yl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&$n(r,s,(i,a)=>b_(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Hr extends ii{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class mn extends ii{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Wh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Zl(n,e,t){const r=new Map;we(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,T_(a,l,t[s]))}return r}function ec(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,E_(i,a,e))}return r}class Bo extends ii{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class k_ extends ii{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class S_{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&R_(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Vr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Vr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Fh();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const c=Hh(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(ie.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),de())}isEqual(e){return this.batchId===e.batchId&&$n(this.mutations,e.mutations,(t,r)=>Yl(t,r))&&$n(this.baseMutations,e.baseMutations,(t,r)=>Yl(t,r))}}class jo{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){we(e.mutations.length===r.length);let s=function(){return __}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new jo(e,t,r,s)}}/**
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
 */var Ne,me;function D_(n){switch(n){case B.OK:return re();case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0;default:return re()}}function Gh(n){if(n===void 0)return Ht("GRPC error has no .code"),B.UNKNOWN;switch(n){case Ne.OK:return B.OK;case Ne.CANCELLED:return B.CANCELLED;case Ne.UNKNOWN:return B.UNKNOWN;case Ne.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case Ne.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case Ne.INTERNAL:return B.INTERNAL;case Ne.UNAVAILABLE:return B.UNAVAILABLE;case Ne.UNAUTHENTICATED:return B.UNAUTHENTICATED;case Ne.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case Ne.NOT_FOUND:return B.NOT_FOUND;case Ne.ALREADY_EXISTS:return B.ALREADY_EXISTS;case Ne.PERMISSION_DENIED:return B.PERMISSION_DENIED;case Ne.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case Ne.ABORTED:return B.ABORTED;case Ne.OUT_OF_RANGE:return B.OUT_OF_RANGE;case Ne.UNIMPLEMENTED:return B.UNIMPLEMENTED;case Ne.DATA_LOSS:return B.DATA_LOSS;default:return re()}}(me=Ne||(Ne={}))[me.OK=0]="OK",me[me.CANCELLED=1]="CANCELLED",me[me.UNKNOWN=2]="UNKNOWN",me[me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",me[me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",me[me.NOT_FOUND=5]="NOT_FOUND",me[me.ALREADY_EXISTS=6]="ALREADY_EXISTS",me[me.PERMISSION_DENIED=7]="PERMISSION_DENIED",me[me.UNAUTHENTICATED=16]="UNAUTHENTICATED",me[me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",me[me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",me[me.ABORTED=10]="ABORTED",me[me.OUT_OF_RANGE=11]="OUT_OF_RANGE",me[me.UNIMPLEMENTED=12]="UNIMPLEMENTED",me[me.INTERNAL=13]="INTERNAL",me[me.UNAVAILABLE=14]="UNAVAILABLE",me[me.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const N_=new nn([4294967295,4294967295],0);function tc(n){const e=ph().encode(n),t=new lh;return t.update(e),new Uint8Array(t.digest())}function nc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new nn([t,r],0),new nn([s,i],0)]}class qo{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Ir(`Invalid padding: ${t}`);if(r<0)throw new Ir(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ir(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Ir(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=nn.fromNumber(this.Ee)}Ae(e,t,r){let s=e.add(t.multiply(nn.fromNumber(r)));return s.compare(N_)===1&&(s=new nn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=tc(e),[r,s]=nc(t);for(let i=0;i<this.hashCount;i++){const a=this.Ae(r,s,i);if(!this.Re(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new qo(i,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ee===0)return;const t=tc(e),[r,s]=nc(t);for(let i=0;i<this.hashCount;i++){const a=this.Ae(r,s,i);this.Ve(a)}}Ve(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Ir extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class oi{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Wr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new oi(ie.min(),s,new Se(ce),Wt(),de())}}class Wr{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Wr(r,t,de(),de(),de())}}/**
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
 */class Ss{constructor(e,t,r,s){this.me=e,this.removedTargetIds=t,this.key=r,this.fe=s}}class Kh{constructor(e,t){this.targetId=e,this.ge=t}}class $h{constructor(e,t,r=Ge.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class rc{constructor(){this.pe=0,this.ye=sc(),this.we=Ge.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=de(),t=de(),r=de();return this.ye.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:re()}}),new Wr(this.we,this.Se,e,t,r)}Me(){this.be=!1,this.ye=sc()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,we(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class M_{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Wt(),this.$e=ws(),this.Ue=ws(),this.Ke=new Se(ce)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const r=this.He(t);switch(e.state){case 0:this.Je(t)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(t);break;case 3:this.Je(t)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),r.Ce(e.resumeToken));break;default:re()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((r,s)=>{this.Je(s)&&t(s)})}Ze(e){const t=e.targetId,r=e.ge.count,s=this.Xe(t);if(s){const i=s.target;if(co(i))if(r===0){const a=new ee(i.path);this.ze(t,a,Je.newNoDocument(a,ie.min()))}else we(r===1);else{const a=this.et(t);if(a!==r){const l=this.tt(e),c=l?this.nt(l,e,a):1;if(c!==0){this.Ye(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,u)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=ln(r).toUint8Array()}catch(c){if(c instanceof wh)return Kn("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new qo(a,s,i)}catch(c){return Kn(c instanceof Ir?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ee===0?null:l}nt(e,t,r){return t.ge.count===r-this.st(e,t.targetId)?0:2}st(e,t){const r=this.ke.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.ke.it(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.ze(t,i,null),s++)}),s}ot(e){const t=new Map;this.qe.forEach((i,a)=>{const l=this.Xe(a);if(l){if(i.current&&co(l.target)){const c=new ee(l.target.path);this._t(c).has(a)||this.ut(a,c)||this.ze(a,c,Je.newNoDocument(c,e))}i.ve&&(t.set(a,i.Fe()),i.Me())}});let r=de();this.Ue.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const u=this.Xe(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.Qe.forEach((i,a)=>a.setReadTime(e));const s=new oi(e,t,this.Ke,this.Qe,r);return this.Qe=Wt(),this.$e=ws(),this.Ue=ws(),this.Ke=new Se(ce),s}Ge(e,t){if(!this.Je(e))return;const r=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,r),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}ze(e,t,r){if(!this.Je(e))return;const s=this.He(e);this.ut(e,t)?s.xe(t,1):s.Oe(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),this.Ue=this.Ue.insert(t,this.ct(t).add(e)),r&&(this.Qe=this.Qe.insert(t,r))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new rc,this.qe.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new Le(ce),this.Ue=this.Ue.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new Le(ce),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||W("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new rc),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function ws(){return new Se(ee.comparator)}function sc(){return new Se(ee.comparator)}const O_={asc:"ASCENDING",desc:"DESCENDING"},x_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},L_={and:"AND",or:"OR"};class F_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ho(n,e){return n.useProto3Json||Zs(e)?e:{value:e}}function qs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Qh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function U_(n,e){return qs(n,e.toTimestamp())}function Mt(n){return we(!!n),ie.fromTimestamp(function(t){const r=an(t);return new xe(r.seconds,r.nanos)}(n))}function zo(n,e){return fo(n,e).canonicalString()}function fo(n,e){const t=function(s){return new ke(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Xh(n){const e=ke.fromString(n);return we(tf(e)),e}function mo(n,e){return zo(n.databaseId,e.path)}function Hi(n,e){const t=Xh(e);if(t.get(1)!==n.databaseId.projectId)throw new Q(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new Q(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ee(Yh(t))}function Jh(n,e){return zo(n.databaseId,e)}function B_(n){const e=Xh(n);return e.length===4?ke.emptyPath():Yh(e)}function po(n){return new ke(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Yh(n){return we(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function ic(n,e,t){return{name:mo(n,e),fields:t.value.mapValue.fields}}function j_(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:re()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(we(d===void 0||typeof d=="string"),Ge.fromBase64String(d||"")):(we(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Ge.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(u){const d=u.code===void 0?B.UNKNOWN:Gh(u.code);return new Q(d,u.message||"")}(a);t=new $h(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Hi(n,r.document.name),i=Mt(r.document.updateTime),a=r.document.createTime?Mt(r.document.createTime):ie.min(),l=new st({mapValue:{fields:r.document.fields}}),c=Je.newFoundDocument(s,i,a,l),u=r.targetIds||[],d=r.removedTargetIds||[];t=new Ss(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Hi(n,r.document),i=r.readTime?Mt(r.readTime):ie.min(),a=Je.newNoDocument(s,i),l=r.removedTargetIds||[];t=new Ss([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Hi(n,r.document),i=r.removedTargetIds||[];t=new Ss([],i,s,null)}else{if(!("filter"in e))return re();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new V_(s,i),l=r.targetId;t=new Kh(l,a)}}return t}function q_(n,e){let t;if(e instanceof Hr)t={update:ic(n,e.key,e.value)};else if(e instanceof Bo)t={delete:mo(n,e.key)};else if(e instanceof mn)t={update:ic(n,e.key,e.data),updateMask:J_(e.fieldMask)};else{if(!(e instanceof k_))return re();t={verify:mo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof Bs)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Br)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof jr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof js)return{fieldPath:a.field.canonicalString(),increment:l.Ie};throw re()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:U_(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:re()}(n,e.precondition)),t}function z_(n,e){return n&&n.length>0?(we(e!==void 0),n.map(t=>function(s,i){let a=s.updateTime?Mt(s.updateTime):Mt(i);return a.isEqual(ie.min())&&(a=Mt(i)),new I_(a,s.transformResults||[])}(t,e))):[]}function H_(n,e){return{documents:[Jh(n,e.path)]}}function W_(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Jh(n,s);const i=function(u){if(u.length!==0)return ef(xt.create(u,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(u){if(u.length!==0)return u.map(d=>function(p){return{field:qn(p.field),direction:$_(p.dir)}}(d))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=ho(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ht:t,parent:s}}function G_(n){let e=B_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){we(r===1);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=function(m){const p=Zh(m);return p instanceof xt&&Ph(p)?p.getFilters():[p]}(t.where));let a=[];t.orderBy&&(a=function(m){return m.map(p=>function(A){return new Us(zn(A.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(p))}(t.orderBy));let l=null;t.limit&&(l=function(m){let p;return p=typeof m=="object"?m.value:m,Zs(p)?null:p}(t.limit));let c=null;t.startAt&&(c=function(m){const p=!!m.before,_=m.values||[];return new Fs(_,p)}(t.startAt));let u=null;return t.endAt&&(u=function(m){const p=!m.before,_=m.values||[];return new Fs(_,p)}(t.endAt)),h_(e,s,a,i,l,"F",c,u)}function K_(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return re()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Zh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=zn(t.unaryFilter.field);return Oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=zn(t.unaryFilter.field);return Oe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=zn(t.unaryFilter.field);return Oe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=zn(t.unaryFilter.field);return Oe.create(a,"!=",{nullValue:"NULL_VALUE"});default:return re()}}(n):n.fieldFilter!==void 0?function(t){return Oe.create(zn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return re()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return xt.create(t.compositeFilter.filters.map(r=>Zh(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return re()}}(t.compositeFilter.op))}(n):re()}function $_(n){return O_[n]}function Q_(n){return x_[n]}function X_(n){return L_[n]}function qn(n){return{fieldPath:n.canonicalString()}}function zn(n){return We.fromServerFormat(n.fieldPath)}function ef(n){return n instanceof Oe?function(t){if(t.op==="=="){if(Gl(t.value))return{unaryFilter:{field:qn(t.field),op:"IS_NAN"}};if(Wl(t.value))return{unaryFilter:{field:qn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Gl(t.value))return{unaryFilter:{field:qn(t.field),op:"IS_NOT_NAN"}};if(Wl(t.value))return{unaryFilter:{field:qn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qn(t.field),op:Q_(t.op),value:t.value}}}(n):n instanceof xt?function(t){const r=t.getFilters().map(s=>ef(s));return r.length===1?r[0]:{compositeFilter:{op:X_(t.op),filters:r}}}(n):re()}function J_(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function tf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Zt{constructor(e,t,r,s,i=ie.min(),a=ie.min(),l=Ge.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Zt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Zt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class ey{constructor(){this.Tn=new ty}addToCollectionParentIndex(e,t){return this.Tn.add(t),F.resolve()}getCollectionParents(e,t){return F.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return F.resolve()}deleteFieldIndex(e,t){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,t){return F.resolve()}getDocumentsMatchingTarget(e,t){return F.resolve(null)}getIndexType(e,t){return F.resolve(0)}getFieldIndexes(e,t){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,t){return F.resolve(on.min())}getMinOffsetFromCollectionGroup(e,t){return F.resolve(on.min())}updateCollectionGroup(e,t,r){return F.resolve()}updateIndexEntries(e,t){return F.resolve()}}class ty{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Le(ke.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Le(ke.comparator)).toArray()}}/**
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
 */const oc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},nf=41943040;class rt{static withCacheSize(e){return new rt(e,rt.DEFAULT_COLLECTION_PERCENTILE,rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */rt.DEFAULT_COLLECTION_PERCENTILE=10,rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,rt.DEFAULT=new rt(nf,rt.DEFAULT_COLLECTION_PERCENTILE,rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),rt.DISABLED=new rt(-1,0,0);/**
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
 */const ac="LruGarbageCollector",ny=1048576;function lc([n,e],[t,r]){const s=ce(n,t);return s===0?ce(e,r):s}class ry{constructor(e){this.Hn=e,this.buffer=new Le(lc),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();lc(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class sy{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){W(ac,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){rr(t)?W(ac,"Ignoring IndexedDB error during garbage collection: ",t):await nr(t)}await this.er(3e5)})}}class iy{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return F.resolve(Ys.ae);const r=new ry(t);return this.tr.forEachTarget(e,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(e,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.tr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(oc)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),oc):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let r,s,i,a,l,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,a=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,t))).next(m=>(i=m,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(u=Date.now(),Bn()<=pe.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
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
 */class ay{constructor(){this.changes=new Sn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Je.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?F.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class cy{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Vr(r.mutation,s,dt.empty(),xe.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,de()).next(()=>r))}getLocalViewOfDocuments(e,t,r=de()){const s=bn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=br();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=bn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,de()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let i=Wt();const a=Pr(),l=function(){return Pr()}();return t.forEach((c,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof mn)?i=i.insert(u.key,u):d!==void 0?(a.set(u.key,d.mutation.getFieldMask()),Vr(d.mutation,u,d.mutation.getFieldMask(),xe.now())):a.set(u.key,dt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,d)=>a.set(u,d)),t.forEach((u,d)=>{var m;return l.set(u,new ly(d,(m=a.get(u))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,t){const r=Pr();let s=new Se((a,l)=>a-l),i=de();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let d=r.get(c)||dt.empty();d=l.applyToLocalView(u,d),r.set(c,d);const m=(s.get(l.batchId)||de()).add(c);s=s.insert(l.batchId,m)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,m=Fh();d.forEach(p=>{if(!i.has(p)){const _=Hh(t.get(p),r.get(p));_!==null&&m.set(p,_),i=i.add(p)}}),a.push(this.documentOverlayCache.saveOverlays(e,u,m))}return F.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return ee.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):f_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):F.resolve(bn());let l=xr,c=i;return a.next(u=>F.forEach(u,(d,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(d)?F.resolve():this.remoteDocumentCache.getEntry(e,d).next(p=>{c=c.insert(d,p)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,de())).next(d=>({batchId:l,changes:Lh(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ee(t)).next(r=>{let s=br();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=br();return this.indexManager.getCollectionParents(e,i).next(l=>F.forEach(l,c=>{const u=function(m,p){return new ti(p,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((m,p)=>{a=a.insert(m,p)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((c,u)=>{const d=u.getKey();a.get(d)===null&&(a=a.insert(d,Je.newInvalidDocument(d)))});let l=br();return a.forEach((c,u)=>{const d=i.get(c);d!==void 0&&Vr(d.mutation,u,dt.empty(),xe.now()),ri(t,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class uy{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return F.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Mt(s.createTime)}}(t)),F.resolve()}getNamedQuery(e,t){return F.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(s){return{name:s.name,query:Z_(s.bundledQuery),readTime:Mt(s.readTime)}}(t)),F.resolve()}}/**
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
 */class hy{constructor(){this.overlays=new Se(ee.comparator),this.Rr=new Map}getOverlay(e,t){return F.resolve(this.overlays.get(t))}getOverlays(e,t){const r=bn();return F.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.Et(e,t,i)}),F.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(r)),F.resolve()}getOverlaysForCollection(e,t,r){const s=bn(),i=t.length+1,a=new ee(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return F.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Se((u,d)=>u-d);const a=this.overlays.getIterator();for(;a.hasNext();){const u=a.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=bn(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=bn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>l.set(u,d)),!(l.size()>=s)););return F.resolve(l)}Et(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new P_(t,r));let i=this.Rr.get(t);i===void 0&&(i=de(),this.Rr.set(t,i)),this.Rr.set(t,i.add(r.key))}}/**
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
 */class fy{constructor(){this.sessionToken=Ge.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,F.resolve()}}/**
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
 */class Ho{constructor(){this.Vr=new Le(je.mr),this.gr=new Le(je.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const r=new je(e,t);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.wr(new je(e,t))}Sr(e,t){e.forEach(r=>this.removeReference(r,t))}br(e){const t=new ee(new ke([])),r=new je(t,e),s=new je(t,e+1),i=[];return this.gr.forEachInRange([r,s],a=>{this.wr(a),i.push(a.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new ee(new ke([])),r=new je(t,e),s=new je(t,e+1);let i=de();return this.gr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new je(e,0),r=this.Vr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class je{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return ee.comparator(e.key,t.key)||ce(e.Cr,t.Cr)}static pr(e,t){return ce(e.Cr,t.Cr)||ee.comparator(e.key,t.key)}}/**
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
 */class dy{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new Le(je.mr)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new S_(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.Mr=this.Mr.add(new je(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return F.resolve(a)}lookupMutationBatch(e,t){return F.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Nr(r),i=s<0?0:s;return F.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?No:this.Fr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new je(t,0),s=new je(t,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([r,s],a=>{const l=this.Or(a.Cr);i.push(l)}),F.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Le(ce);return t.forEach(s=>{const i=new je(s,0),a=new je(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,a],l=>{r=r.add(l.Cr)})}),F.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;ee.isDocumentKey(i)||(i=i.child(""));const a=new je(new ee(i),0);let l=new Le(ce);return this.Mr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Cr)),!0)},a),F.resolve(this.Br(l))}Br(e){const t=[];return e.forEach(r=>{const s=this.Or(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){we(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return F.forEach(t.mutations,s=>{const i=new je(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,t){const r=new je(t,0),s=this.Mr.firstAfterOrEqual(r);return F.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class my{constructor(e){this.kr=e,this.docs=function(){return new Se(ee.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.kr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return F.resolve(r?r.document.mutableCopy():Je.newInvalidDocument(t))}getEntries(e,t){let r=Wt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Je.newInvalidDocument(s))}),F.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Wt();const a=t.path,l=new ee(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!a.isPrefixOf(u.path))break;u.path.length>a.length+1||Hg(zg(d),r)<=0||(s.has(d.key)||ri(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return F.resolve(i)}getAllFromCollectionGroup(e,t,r,s){re()}qr(e,t){return F.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new py(this)}getSize(e){return F.resolve(this.size)}}class py extends ay{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Ir.addEntry(e,s)):this.Ir.removeEntry(r)}),F.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
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
 */class gy{constructor(e){this.persistence=e,this.Qr=new Sn(t=>xo(t),Lo),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.$r=0,this.Ur=new Ho,this.targetCount=0,this.Kr=Jn.Un()}forEachTarget(e,t){return this.Qr.forEach((r,s)=>t(s)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.$r&&(this.$r=t),F.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Kr=new Jn(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,F.resolve()}updateTargetData(e,t){return this.zn(t),F.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Ur.br(t.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Qr.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Qr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),F.waitFor(i).next(()=>s)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,t){const r=this.Qr.get(t)||null;return F.resolve(r)}addMatchingKeys(e,t,r){return this.Ur.yr(t,r),F.resolve()}removeMatchingKeys(e,t,r){this.Ur.Sr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),F.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Ur.br(t),F.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Ur.vr(t);return F.resolve(r)}containsKey(e,t){return F.resolve(this.Ur.containsKey(t))}}/**
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
 */class rf{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new Ys(0),this.zr=!1,this.zr=!0,this.jr=new fy,this.referenceDelegate=e(this),this.Hr=new gy(this),this.indexManager=new ey,this.remoteDocumentCache=function(s){return new my(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new Y_(t),this.Yr=new uy(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new hy,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Wr[e.toKey()];return r||(r=new dy(t,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,r){W("MemoryPersistence","Starting transaction:",e);const s=new _y(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(i=>this.referenceDelegate.Xr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}ei(e,t){return F.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,t)))}}class _y extends Gg{constructor(e){super(),this.currentSequenceNumber=e}}class Wo{constructor(e){this.persistence=e,this.ti=new Ho,this.ni=null}static ri(e){return new Wo(e)}get ii(){if(this.ni)return this.ni;throw re()}addReference(e,t,r){return this.ti.addReference(r,t),this.ii.delete(r.toString()),F.resolve()}removeReference(e,t,r){return this.ti.removeReference(r,t),this.ii.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),F.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.ii.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.ii,r=>{const s=ee.fromPath(r);return this.si(e,s).next(i=>{i||t.removeEntry(s,ie.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(r=>{r?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return F.or([()=>F.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class zs{constructor(e,t){this.persistence=e,this.oi=new Sn(r=>Qg(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=oy(this,t)}static ri(e,t){return new zs(e,t)}Zr(){}Xr(e){return F.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}sr(e){let t=0;return this.rr(e,r=>{t++}).next(()=>t)}rr(e,t){return F.forEach(this.oi,(r,s)=>this.ar(e,r,s).next(i=>i?F.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.qr(e,a=>this.ar(e,a,t).next(l=>{l||(r++,i.removeEntry(a,ie.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),F.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),F.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Rs(e.data.value)),t}ar(e,t,r){return F.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.oi.get(t);return F.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Go{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Hi=r,this.Ji=s}static Yi(e,t){let r=de(),s=de();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Go(e,t.fromCache,r,s)}}/**
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
 */class wy{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Qd()?8:Kg(Gd())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.rs(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ss(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new yy;return this._s(e,t,a).next(l=>{if(i.result=l,this.Xi)return this.us(e,t,a,l.size)})}).next(()=>i.result)}us(e,t,r,s){return r.documentReadCount<this.es?(Bn()<=pe.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",jn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),F.resolve()):(Bn()<=pe.DEBUG&&W("QueryEngine","Query:",jn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(Bn()<=pe.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",jn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Nt(t))):F.resolve())}rs(e,t){if(Xl(t))return F.resolve(null);let r=Nt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=uo(t,null,"F"),r=Nt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=de(...i);return this.ns.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.cs(t,l);return this.ls(t,u,a,c.readTime)?this.rs(e,uo(t,null,"F")):this.hs(e,u,t,c)}))})))}ss(e,t,r,s){return Xl(t)||s.isEqual(ie.min())?F.resolve(null):this.ns.getDocuments(e,r).next(i=>{const a=this.cs(t,i);return this.ls(t,a,r,s)?F.resolve(null):(Bn()<=pe.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),jn(t)),this.hs(e,a,t,qg(s,xr)).next(l=>l))})}cs(e,t){let r=new Le(Oh(e));return t.forEach((s,i)=>{ri(e,i)&&(r=r.add(i))}),r}ls(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}_s(e,t,r){return Bn()<=pe.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",jn(t)),this.ns.getDocumentsMatchingQuery(e,t,on.min(),r)}hs(e,t,r,s){return this.ns.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const Ko="LocalStore",vy=3e8;class Ay{constructor(e,t,r,s){this.persistence=e,this.Ps=t,this.serializer=s,this.Ts=new Se(ce),this.Is=new Sn(i=>xo(i),Lo),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new cy(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function Ey(n,e,t,r){return new Ay(n,e,t,r)}async function sf(n,e){const t=ae(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.As(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=de();for(const u of s){a.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of i){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return t.localDocuments.getDocuments(r,c).next(u=>({Rs:u,removedBatchIds:a,addedBatchIds:l}))})})}function Ty(n,e){const t=ae(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.ds.newChangeBuffer({trackRemovals:!0});return function(l,c,u,d){const m=u.batch,p=m.keys();let _=F.resolve();return p.forEach(A=>{_=_.next(()=>d.getEntry(c,A)).next(S=>{const C=u.docVersions.get(A);we(C!==null),S.version.compareTo(C)<0&&(m.applyToRemoteDocument(S,u),S.isValidDocument()&&(S.setReadTime(u.commitVersion),d.addEntry(S)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(c,m))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=de();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function of(n){const e=ae(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function by(n,e){const t=ae(n),r=e.snapshotVersion;let s=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.ds.newChangeBuffer({trackRemovals:!0});s=t.Ts;const l=[];e.targetChanges.forEach((d,m)=>{const p=s.get(m);if(!p)return;l.push(t.Hr.removeMatchingKeys(i,d.removedDocuments,m).next(()=>t.Hr.addMatchingKeys(i,d.addedDocuments,m)));let _=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?_=_.withResumeToken(Ge.EMPTY_BYTE_STRING,ie.min()).withLastLimboFreeSnapshotVersion(ie.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),s=s.insert(m,_),function(S,C,D){return S.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=vy?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(p,_,d)&&l.push(t.Hr.updateTargetData(i,_))});let c=Wt(),u=de();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(Iy(i,a,e.documentUpdates).next(d=>{c=d.Vs,u=d.fs})),!r.isEqual(ie.min())){const d=t.Hr.getLastRemoteSnapshotVersion(i).next(m=>t.Hr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return F.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(t.Ts=s,i))}function Iy(n,e,t){let r=de(),s=de();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=Wt();return t.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ie.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):W(Ko,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Vs:a,fs:s}})}function Ry(n,e){const t=ae(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=No),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Cy(n,e){const t=ae(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Hr.getTargetData(r,e).next(i=>i?(s=i,F.resolve(s)):t.Hr.allocateTargetId(r).next(a=>(s=new Zt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Hr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(r.targetId,r),t.Is.set(e,r.targetId)),r})}async function go(n,e,t){const r=ae(n),s=r.Ts.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!rr(a))throw a;W(Ko,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ts=r.Ts.remove(e),r.Is.delete(s.target)}function cc(n,e,t){const r=ae(n);let s=ie.min(),i=de();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,u,d){const m=ae(c),p=m.Is.get(d);return p!==void 0?F.resolve(m.Ts.get(p)):m.Hr.getTargetData(u,d)}(r,a,Nt(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>r.Ps.getDocumentsMatchingQuery(a,e,t?s:ie.min(),t?i:de())).next(l=>(ky(r,m_(e),l),{documents:l,gs:i})))}function ky(n,e,t){let r=n.Es.get(e)||ie.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Es.set(e,r)}class uc{constructor(){this.activeTargetIds=v_()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Sy{constructor(){this.ho=new uc,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,r){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new uc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */const hc="ConnectivityMonitor";class fc{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){W(hc,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){W(hc,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const Wi="RestConnection",Vy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Dy{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===xs?`project_id=${r}`:`project_id=${r}&database_id=${s}`}So(e,t,r,s,i){const a=_o(),l=this.bo(e,t.toUriEncodedString());W(Wi,`Sending RPC '${e}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(c,s,i),this.vo(e,l,c,r).then(u=>(W(Wi,`Received RPC '${e}' ${a}: `,u),u),u=>{throw Kn(Wi,`RPC '${e}' ${a} failed with error: `,u,"url: ",l,"request:",r),u})}Co(e,t,r,s,i,a){return this.So(e,t,r,s,i)}Do(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+tr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}bo(e,t){const r=Vy[e];return`${this.po}/v1/${t}:${r}`}terminate(){}}/**
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
 */const Qe="WebChannelConnection";class My extends Dy{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,r,s){const i=_o();return new Promise((a,l)=>{const c=new ch;c.setWithCredentials(!0),c.listenOnce(uh.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Is.NO_ERROR:const d=c.getResponseJson();W(Qe,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),a(d);break;case Is.TIMEOUT:W(Qe,`RPC '${e}' ${i} timed out`),l(new Q(B.DEADLINE_EXCEEDED,"Request time out"));break;case Is.HTTP_ERROR:const m=c.getStatus();if(W(Qe,`RPC '${e}' ${i} failed with status:`,m,"response text:",c.getResponseText()),m>0){let p=c.getResponseJson();Array.isArray(p)&&(p=p[0]);const _=p==null?void 0:p.error;if(_&&_.status&&_.message){const A=function(C){const D=C.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(D)>=0?D:B.UNKNOWN}(_.status);l(new Q(A,_.message))}else l(new Q(B.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new Q(B.UNAVAILABLE,"Connection failed."));break;default:re()}}finally{W(Qe,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);W(Qe,`RPC '${e}' ${i} sending request:`,s),c.send(t,"POST",u,r,15)})}Wo(e,t,r){const s=_o(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=dh(),l=fh(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const d=i.join("");W(Qe,`Creating RPC '${e}' stream ${s}: ${d}`,c);const m=a.createWebChannel(d,c);let p=!1,_=!1;const A=new Ny({Fo:C=>{_?W(Qe,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(p||(W(Qe,`Opening RPC '${e}' stream ${s} transport.`),m.open(),p=!0),W(Qe,`RPC '${e}' stream ${s} sending:`,C),m.send(C))},Mo:()=>m.close()}),S=(C,D,x)=>{C.listen(D,L=>{try{x(L)}catch(U){setTimeout(()=>{throw U},0)}})};return S(m,Tr.EventType.OPEN,()=>{_||(W(Qe,`RPC '${e}' stream ${s} transport opened.`),A.Qo())}),S(m,Tr.EventType.CLOSE,()=>{_||(_=!0,W(Qe,`RPC '${e}' stream ${s} transport closed`),A.Uo())}),S(m,Tr.EventType.ERROR,C=>{_||(_=!0,Kn(Qe,`RPC '${e}' stream ${s} transport errored:`,C),A.Uo(new Q(B.UNAVAILABLE,"The operation could not be completed")))}),S(m,Tr.EventType.MESSAGE,C=>{var D;if(!_){const x=C.data[0];we(!!x);const L=x,U=(L==null?void 0:L.error)||((D=L[0])===null||D===void 0?void 0:D.error);if(U){W(Qe,`RPC '${e}' stream ${s} received error:`,U);const ne=U.status;let J=function(v){const T=Ne[v];if(T!==void 0)return Gh(T)}(ne),E=U.message;J===void 0&&(J=B.INTERNAL,E="Unknown error status: "+ne+" with message "+U.message),_=!0,A.Uo(new Q(J,E)),m.close()}else W(Qe,`RPC '${e}' stream ${s} received:`,x),A.Ko(x)}}),S(l,hh.STAT_EVENT,C=>{C.stat===so.PROXY?W(Qe,`RPC '${e}' stream ${s} detected buffering proxy`):C.stat===so.NOPROXY&&W(Qe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{A.$o()},0),A}}function Gi(){return typeof document<"u"?document:null}/**
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
 */class af{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Ti=e,this.timerId=t,this.Go=r,this.zo=s,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,t-r);s>0&&W("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const dc="PersistentStream";class lf{constructor(e,t,r,s,i,a,l,c){this.Ti=e,this.n_=r,this.r_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new af(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===B.RESOURCE_EXHAUSTED?(Ht(t.toString()),Ht("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===t&&this.V_(r,s)},r=>{e(()=>{const s=new Q(B.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(e,t){const r=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return W(dc,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(W(dc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Oy extends lf{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=j_(this.serializer,e),r=function(i){if(!("targetChange"in i))return ie.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ie.min():a.readTime?Mt(a.readTime):ie.min()}(e);return this.listener.p_(t,r)}y_(e){const t={};t.database=po(this.serializer),t.addTarget=function(i,a){let l;const c=a.target;if(l=co(c)?{documents:H_(i,c)}:{query:W_(i,c).ht},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Qh(i,a.resumeToken);const u=ho(i,a.expectedCount);u!==null&&(l.expectedCount=u)}else if(a.snapshotVersion.compareTo(ie.min())>0){l.readTime=qs(i,a.snapshotVersion.toTimestamp());const u=ho(i,a.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=K_(this.serializer,e);r&&(t.labels=r),this.I_(t)}w_(e){const t={};t.database=po(this.serializer),t.removeTarget=e,this.I_(t)}}class xy extends lf{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return we(!!e.streamToken),this.lastStreamToken=e.streamToken,we(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){we(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=z_(e.writeResults,e.commitTime),r=Mt(e.commitTime);return this.listener.v_(r,t)}C_(){const e={};e.database=po(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>q_(this.serializer,r))};this.I_(t)}}/**
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
 */class Ly{}class Fy extends Ly{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new Q(B.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.So(e,fo(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Q(B.UNKNOWN,i.toString())})}Co(e,t,r,s,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Co(e,fo(t,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new Q(B.UNKNOWN,a.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class Uy{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Ht(t),this.N_=!1):W("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const kn="RemoteStore";class By{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(a=>{r.enqueueAndForget(async()=>{Pn(this)&&(W(kn,"Restarting streams for network reachability change."),await async function(c){const u=ae(c);u.W_.add(4),await Gr(u),u.j_.set("Unknown"),u.W_.delete(4),await li(u)}(this))})}),this.j_=new Uy(r,s)}}async function li(n){if(Pn(n))for(const e of n.G_)await e(!0)}async function Gr(n){for(const e of n.G_)await e(!1)}function cf(n,e){const t=ae(n);t.K_.has(e.targetId)||(t.K_.set(e.targetId,e),Jo(t)?Xo(t):sr(t).c_()&&Qo(t,e))}function $o(n,e){const t=ae(n),r=sr(t);t.K_.delete(e),r.c_()&&uf(t,e),t.K_.size===0&&(r.c_()?r.P_():Pn(t)&&t.j_.set("Unknown"))}function Qo(n,e){if(n.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ie.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}sr(n).y_(e)}function uf(n,e){n.H_.Ne(e),sr(n).w_(e)}function Xo(n){n.H_=new M_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.K_.get(e)||null,it:()=>n.datastore.serializer.databaseId}),sr(n).start(),n.j_.B_()}function Jo(n){return Pn(n)&&!sr(n).u_()&&n.K_.size>0}function Pn(n){return ae(n).W_.size===0}function hf(n){n.H_=void 0}async function jy(n){n.j_.set("Online")}async function qy(n){n.K_.forEach((e,t)=>{Qo(n,e)})}async function zy(n,e){hf(n),Jo(n)?(n.j_.q_(e),Xo(n)):n.j_.set("Unknown")}async function Hy(n,e,t){if(n.j_.set("Online"),e instanceof $h&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.K_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.K_.delete(l),s.H_.removeTarget(l))}(n,e)}catch(r){W(kn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Hs(n,r)}else if(e instanceof Ss?n.H_.We(e):e instanceof Kh?n.H_.Ze(e):n.H_.je(e),!t.isEqual(ie.min()))try{const r=await of(n.localStore);t.compareTo(r)>=0&&await function(i,a){const l=i.H_.ot(a);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.K_.get(u);d&&i.K_.set(u,d.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,u)=>{const d=i.K_.get(c);if(!d)return;i.K_.set(c,d.withResumeToken(Ge.EMPTY_BYTE_STRING,d.snapshotVersion)),uf(i,c);const m=new Zt(d.target,c,u,d.sequenceNumber);Qo(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){W(kn,"Failed to raise snapshot:",r),await Hs(n,r)}}async function Hs(n,e,t){if(!rr(e))throw e;n.W_.add(1),await Gr(n),n.j_.set("Offline"),t||(t=()=>of(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{W(kn,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await li(n)})}function ff(n,e){return e().catch(t=>Hs(n,t,e))}async function ci(n){const e=ae(n),t=un(e);let r=e.U_.length>0?e.U_[e.U_.length-1].batchId:No;for(;Wy(e);)try{const s=await Ry(e.localStore,r);if(s===null){e.U_.length===0&&t.P_();break}r=s.batchId,Gy(e,s)}catch(s){await Hs(e,s)}df(e)&&mf(e)}function Wy(n){return Pn(n)&&n.U_.length<10}function Gy(n,e){n.U_.push(e);const t=un(n);t.c_()&&t.S_&&t.b_(e.mutations)}function df(n){return Pn(n)&&!un(n).u_()&&n.U_.length>0}function mf(n){un(n).start()}async function Ky(n){un(n).C_()}async function $y(n){const e=un(n);for(const t of n.U_)e.b_(t.mutations)}async function Qy(n,e,t){const r=n.U_.shift(),s=jo.from(r,e,t);await ff(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await ci(n)}async function Xy(n,e){e&&un(n).S_&&await async function(r,s){if(function(a){return D_(a)&&a!==B.ABORTED}(s.code)){const i=r.U_.shift();un(r).h_(),await ff(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ci(r)}}(n,e),df(n)&&mf(n)}async function mc(n,e){const t=ae(n);t.asyncQueue.verifyOperationInProgress(),W(kn,"RemoteStore received new credentials");const r=Pn(t);t.W_.add(3),await Gr(t),r&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await li(t)}async function Jy(n,e){const t=ae(n);e?(t.W_.delete(2),await li(t)):e||(t.W_.add(2),await Gr(t),t.j_.set("Unknown"))}function sr(n){return n.J_||(n.J_=function(t,r,s){const i=ae(t);return i.M_(),new Oy(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{xo:jy.bind(null,n),No:qy.bind(null,n),Lo:zy.bind(null,n),p_:Hy.bind(null,n)}),n.G_.push(async e=>{e?(n.J_.h_(),Jo(n)?Xo(n):n.j_.set("Unknown")):(await n.J_.stop(),hf(n))})),n.J_}function un(n){return n.Y_||(n.Y_=function(t,r,s){const i=ae(t);return i.M_(),new xy(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:Ky.bind(null,n),Lo:Xy.bind(null,n),D_:$y.bind(null,n),v_:Qy.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await ci(n)):(await n.Y_.stop(),n.U_.length>0&&(W(kn,`Stopping write stream with ${n.U_.length} pending writes`),n.U_=[]))})),n.Y_}/**
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
 */class Yo{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new jt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new Yo(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zo(n,e){if(Ht("AsyncQueue",`${e}: ${n}`),rr(n))return new Q(B.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Wn{static emptySet(e){return new Wn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ee.comparator(t.key,r.key):(t,r)=>ee.comparator(t.key,r.key),this.keyedMap=br(),this.sortedSet=new Se(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Wn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class pc{constructor(){this.Z_=new Se(ee.comparator)}track(e){const t=e.doc.key,r=this.Z_.get(t);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(t):e.type===1&&r.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):re():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Yn{constructor(e,t,r,s,i,a,l,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new Yn(e,t,Wn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ni(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Yy{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class Zy{constructor(){this.queries=gc(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,r){const s=ae(t),i=s.queries;s.queries=gc(),i.forEach((a,l)=>{for(const c of l.ta)c.onError(r)})})(this,new Q(B.ABORTED,"Firestore shutting down"))}}function gc(){return new Sn(n=>Mh(n),ni)}async function pf(n,e){const t=ae(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.na()&&e.ra()&&(r=2):(i=new Yy,r=e.ra()?0:1);try{switch(r){case 0:i.ea=await t.onListen(s,!0);break;case 1:i.ea=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=Zo(a,`Initialization of query '${jn(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.ta.push(e),e.sa(t.onlineState),i.ea&&e.oa(i.ea)&&ea(t)}async function gf(n,e){const t=ae(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.ta.indexOf(e);a>=0&&(i.ta.splice(a,1),i.ta.length===0?s=e.ra()?0:1:!i.na()&&e.ra()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function ew(n,e){const t=ae(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.ta)l.oa(s)&&(r=!0);a.ea=s}}r&&ea(t)}function tw(n,e,t){const r=ae(n),s=r.queries.get(e);if(s)for(const i of s.ta)i.onError(t);r.queries.delete(e)}function ea(n){n.ia.forEach(e=>{e.next()})}var yo,_c;(_c=yo||(yo={}))._a="default",_c.Cache="cache";class _f{constructor(e,t,r){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Yn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const r=t!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=Yn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==yo.Cache}}/**
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
 */class yf{constructor(e){this.key=e}}class wf{constructor(e){this.key=e}}class nw{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=de(),this.mutatedKeys=de(),this.ya=Oh(e),this.wa=new Wn(this.ya)}get Sa(){return this.fa}ba(e,t){const r=t?t.Da:new pc,s=t?t.wa:this.wa;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,m)=>{const p=s.get(d),_=ri(this.query,m)?m:null,A=!!p&&this.mutatedKeys.has(p.key),S=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let C=!1;p&&_?p.data.isEqual(_.data)?A!==S&&(r.track({type:3,doc:_}),C=!0):this.va(p,_)||(r.track({type:2,doc:_}),C=!0,(c&&this.ya(_,c)>0||u&&this.ya(_,u)<0)&&(l=!0)):!p&&_?(r.track({type:0,doc:_}),C=!0):p&&!_&&(r.track({type:1,doc:p}),C=!0,(c||u)&&(l=!0)),C&&(_?(a=a.add(_),i=S?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{wa:a,Da:r,ls:l,mutatedKeys:i}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const a=e.Da.X_();a.sort((d,m)=>function(_,A){const S=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re()}};return S(_)-S(A)}(d.type,m.type)||this.ya(d.doc,m.doc)),this.Ca(r),s=s!=null&&s;const l=t&&!s?this.Fa():[],c=this.pa.size===0&&this.current&&!s?1:0,u=c!==this.ga;return this.ga=c,a.length!==0||u?{snapshot:new Yn(this.query,e.wa,i,a,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:l}:{Ma:l}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new pc,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=de(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const t=[];return e.forEach(r=>{this.pa.has(r)||t.push(new wf(r))}),this.pa.forEach(r=>{e.has(r)||t.push(new yf(r))}),t}Oa(e){this.fa=e.gs,this.pa=de();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return Yn.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const ta="SyncEngine";class rw{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class sw{constructor(e){this.key=e,this.Ba=!1}}class iw{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new Sn(l=>Mh(l),ni),this.qa=new Map,this.Qa=new Set,this.$a=new Se(ee.comparator),this.Ua=new Map,this.Ka=new Ho,this.Wa={},this.Ga=new Map,this.za=Jn.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function ow(n,e,t=!0){const r=If(n);let s;const i=r.ka.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Na()):s=await vf(r,e,t,!0),s}async function aw(n,e){const t=If(n);await vf(t,e,!0,!1)}async function vf(n,e,t,r){const s=await Cy(n.localStore,Nt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await lw(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&cf(n.remoteStore,s),l}async function lw(n,e,t,r,s){n.Ha=(m,p,_)=>async function(S,C,D,x){let L=C.view.ba(D);L.ls&&(L=await cc(S.localStore,C.query,!1).then(({documents:E})=>C.view.ba(E,L)));const U=x&&x.targetChanges.get(C.targetId),ne=x&&x.targetMismatches.get(C.targetId)!=null,J=C.view.applyChanges(L,S.isPrimaryClient,U,ne);return wc(S,C.targetId,J.Ma),J.snapshot}(n,m,p,_);const i=await cc(n.localStore,e,!0),a=new nw(e,i.gs),l=a.ba(i.documents),c=Wr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),u=a.applyChanges(l,n.isPrimaryClient,c);wc(n,t,u.Ma);const d=new rw(e,t,a);return n.ka.set(e,d),n.qa.has(t)?n.qa.get(t).push(e):n.qa.set(t,[e]),u.snapshot}async function cw(n,e,t){const r=ae(n),s=r.ka.get(e),i=r.qa.get(s.targetId);if(i.length>1)return r.qa.set(s.targetId,i.filter(a=>!ni(a,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await go(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&$o(r.remoteStore,s.targetId),wo(r,s.targetId)}).catch(nr)):(wo(r,s.targetId),await go(r.localStore,s.targetId,!0))}async function uw(n,e){const t=ae(n),r=t.ka.get(e),s=t.qa.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),$o(t.remoteStore,r.targetId))}async function hw(n,e,t){const r=yw(n);try{const s=await function(a,l){const c=ae(a),u=xe.now(),d=l.reduce((_,A)=>_.add(A.key),de());let m,p;return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{let A=Wt(),S=de();return c.ds.getEntries(_,d).next(C=>{A=C,A.forEach((D,x)=>{x.isValidDocument()||(S=S.add(D))})}).next(()=>c.localDocuments.getOverlayedDocuments(_,A)).next(C=>{m=C;const D=[];for(const x of l){const L=C_(x,m.get(x.key).overlayedDocument);L!=null&&D.push(new mn(x.key,L,Ch(L.value.mapValue),mt.exists(!0)))}return c.mutationQueue.addMutationBatch(_,u,D,l)}).next(C=>{p=C;const D=C.applyToLocalDocumentSet(m,S);return c.documentOverlayCache.saveOverlays(_,C.batchId,D)})}).then(()=>({batchId:p.batchId,changes:Lh(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let u=a.Wa[a.currentUser.toKey()];u||(u=new Se(ce)),u=u.insert(l,c),a.Wa[a.currentUser.toKey()]=u}(r,s.batchId,t),await Kr(r,s.changes),await ci(r.remoteStore)}catch(s){const i=Zo(s,"Failed to persist write");t.reject(i)}}async function Af(n,e){const t=ae(n);try{const r=await by(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Ua.get(i);a&&(we(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.Ba=!0:s.modifiedDocuments.size>0?we(a.Ba):s.removedDocuments.size>0&&(we(a.Ba),a.Ba=!1))}),await Kr(t,r,e)}catch(r){await nr(r)}}function yc(n,e,t){const r=ae(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.ka.forEach((i,a)=>{const l=a.view.sa(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=ae(a);c.onlineState=l;let u=!1;c.queries.forEach((d,m)=>{for(const p of m.ta)p.sa(l)&&(u=!0)}),u&&ea(c)}(r.eventManager,e),s.length&&r.La.p_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function fw(n,e,t){const r=ae(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Ua.get(e),i=s&&s.key;if(i){let a=new Se(ee.comparator);a=a.insert(i,Je.newNoDocument(i,ie.min()));const l=de().add(i),c=new oi(ie.min(),new Map,new Se(ce),a,l);await Af(r,c),r.$a=r.$a.remove(i),r.Ua.delete(e),na(r)}else await go(r.localStore,e,!1).then(()=>wo(r,e,t)).catch(nr)}async function dw(n,e){const t=ae(n),r=e.batch.batchId;try{const s=await Ty(t.localStore,e);Tf(t,r,null),Ef(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Kr(t,s)}catch(s){await nr(s)}}async function mw(n,e,t){const r=ae(n);try{const s=await function(a,l){const c=ae(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next(m=>(we(m!==null),d=m.keys(),c.mutationQueue.removeMutationBatch(u,m))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(r.localStore,e);Tf(r,e,t),Ef(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Kr(r,s)}catch(s){await nr(s)}}function Ef(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function Tf(n,e,t){const r=ae(n);let s=r.Wa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Wa[r.currentUser.toKey()]=s}}function wo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.qa.get(e))n.ka.delete(r),t&&n.La.Ja(r,t);n.qa.delete(e),n.isPrimaryClient&&n.Ka.br(e).forEach(r=>{n.Ka.containsKey(r)||bf(n,r)})}function bf(n,e){n.Qa.delete(e.path.canonicalString());const t=n.$a.get(e);t!==null&&($o(n.remoteStore,t),n.$a=n.$a.remove(e),n.Ua.delete(t),na(n))}function wc(n,e,t){for(const r of t)r instanceof yf?(n.Ka.addReference(r.key,e),pw(n,r)):r instanceof wf?(W(ta,"Document no longer in limbo: "+r.key),n.Ka.removeReference(r.key,e),n.Ka.containsKey(r.key)||bf(n,r.key)):re()}function pw(n,e){const t=e.key,r=t.path.canonicalString();n.$a.get(t)||n.Qa.has(r)||(W(ta,"New document in limbo: "+t),n.Qa.add(r),na(n))}function na(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const e=n.Qa.values().next().value;n.Qa.delete(e);const t=new ee(ke.fromString(e)),r=n.za.next();n.Ua.set(r,new sw(t)),n.$a=n.$a.insert(t,r),cf(n.remoteStore,new Zt(Nt(Fo(t.path)),r,"TargetPurposeLimboResolution",Ys.ae))}}async function Kr(n,e,t){const r=ae(n),s=[],i=[],a=[];r.ka.isEmpty()||(r.ka.forEach((l,c)=>{a.push(r.Ha(c,e,t).then(u=>{var d;if((u||t)&&r.isPrimaryClient){const m=u?!u.fromCache:(d=t==null?void 0:t.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,m?"current":"not-current")}if(u){s.push(u);const m=Go.Yi(c.targetId,u);i.push(m)}}))}),await Promise.all(a),r.La.p_(s),await async function(c,u){const d=ae(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>F.forEach(u,p=>F.forEach(p.Hi,_=>d.persistence.referenceDelegate.addReference(m,p.targetId,_)).next(()=>F.forEach(p.Ji,_=>d.persistence.referenceDelegate.removeReference(m,p.targetId,_)))))}catch(m){if(!rr(m))throw m;W(Ko,"Failed to update sequence numbers: "+m)}for(const m of u){const p=m.targetId;if(!m.fromCache){const _=d.Ts.get(p),A=_.snapshotVersion,S=_.withLastLimboFreeSnapshotVersion(A);d.Ts=d.Ts.insert(p,S)}}}(r.localStore,i))}async function gw(n,e){const t=ae(n);if(!t.currentUser.isEqual(e)){W(ta,"User change. New user:",e.toKey());const r=await sf(t.localStore,e);t.currentUser=e,function(i,a){i.Ga.forEach(l=>{l.forEach(c=>{c.reject(new Q(B.CANCELLED,a))})}),i.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Kr(t,r.Rs)}}function _w(n,e){const t=ae(n),r=t.Ua.get(e);if(r&&r.Ba)return de().add(r.key);{let s=de();const i=t.qa.get(e);if(!i)return s;for(const a of i){const l=t.ka.get(a);s=s.unionWith(l.view.Sa)}return s}}function If(n){const e=ae(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Af.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_w.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=fw.bind(null,e),e.La.p_=ew.bind(null,e.eventManager),e.La.Ja=tw.bind(null,e.eventManager),e}function yw(n){const e=ae(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=dw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=mw.bind(null,e),e}class Ws{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ai(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return Ey(this.persistence,new wy,e.initialUser,this.serializer)}Xa(e){return new rf(Wo.ri,this.serializer)}Za(e){return new Sy}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ws.provider={build:()=>new Ws};class ww extends Ws{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){we(this.persistence.referenceDelegate instanceof zs);const r=this.persistence.referenceDelegate.garbageCollector;return new sy(r,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?rt.withCacheSize(this.cacheSizeBytes):rt.DEFAULT;return new rf(r=>zs.ri(r,t),this.serializer)}}class vo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>yc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=gw.bind(null,this.syncEngine),await Jy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Zy}()}createDatastore(e){const t=ai(e.databaseInfo.databaseId),r=function(i){return new My(i)}(e.databaseInfo);return function(i,a,l,c){return new Fy(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,l){return new By(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>yc(this.syncEngine,t,0),function(){return fc.D()?new fc:new Py}())}createSyncEngine(e,t){return function(s,i,a,l,c,u,d){const m=new iw(s,i,a,l,c,u);return d&&(m.ja=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=ae(s);W(kn,"RemoteStore shutting down."),i.W_.add(5),await Gr(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}vo.provider={build:()=>new vo};/**
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
 */class Rf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):Ht("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const hn="FirestoreClient";class vw{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Xe.UNAUTHENTICATED,this.clientId=gh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{W(hn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(W(hn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new jt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Zo(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ki(n,e){n.asyncQueue.verifyOperationInProgress(),W(hn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await sf(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function vc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Aw(n);W(hn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>mc(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>mc(e.remoteStore,s)),n._onlineComponents=e}async function Aw(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){W(hn,"Using user provided OfflineComponentProvider");try{await Ki(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===B.FAILED_PRECONDITION||s.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Kn("Error using user provided cache. Falling back to memory cache: "+t),await Ki(n,new Ws)}}else W(hn,"Using default OfflineComponentProvider"),await Ki(n,new ww(void 0));return n._offlineComponents}async function Cf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(W(hn,"Using user provided OnlineComponentProvider"),await vc(n,n._uninitializedComponentsProvider._online)):(W(hn,"Using default OnlineComponentProvider"),await vc(n,new vo))),n._onlineComponents}function Ew(n){return Cf(n).then(e=>e.syncEngine)}async function kf(n){const e=await Cf(n),t=e.eventManager;return t.onListen=ow.bind(null,e.syncEngine),t.onUnlisten=cw.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=aw.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=uw.bind(null,e.syncEngine),t}function Tw(n,e,t={}){const r=new jt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,u){const d=new Rf({next:p=>{d.su(),a.enqueueAndForget(()=>gf(i,m));const _=p.docs.has(l);!_&&p.fromCache?u.reject(new Q(B.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&p.fromCache&&c&&c.source==="server"?u.reject(new Q(B.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),m=new _f(Fo(l.path),d,{includeMetadataChanges:!0,Ta:!0});return pf(i,m)}(await kf(n),n.asyncQueue,e,t,r)),r.promise}function bw(n,e,t={}){const r=new jt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,u){const d=new Rf({next:p=>{d.su(),a.enqueueAndForget(()=>gf(i,m)),p.fromCache&&c.source==="server"?u.reject(new Q(B.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),m=new _f(l,d,{includeMetadataChanges:!0,Ta:!0});return pf(i,m)}(await kf(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function Pf(n,e,t){if(!t)throw new Q(B.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Iw(n,e,t,r){if(e===!0&&r===!0)throw new Q(B.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ec(n){if(!ee.isDocumentKey(n))throw new Q(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Tc(n){if(ee.isDocumentKey(n))throw new Q(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ra(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":re()}function Lt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new Q(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ra(n);throw new Q(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */const Vf="firestore.googleapis.com",bc=!0;class Ic{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Q(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Vf,this.ssl=bc}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:bc;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=nf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ny)throw new Q(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Iw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Sf((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Q(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Q(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Q(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ui{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ic({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Q(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Q(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ic(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ng;switch(r.type){case"firstParty":return new Lg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Q(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Ac.get(t);r&&(W("ComponentProvider","Removing Datastore"),Ac.delete(t),r.terminate())}(this),Promise.resolve()}}function Rw(n,e,t,r={}){var s;const i=(n=Lt(n,ui))._getSettings(),a=Object.assign(Object.assign({},i),{emulatorOptions:n._getEmulatorOptions()}),l=`${e}:${t}`;i.host!==Vf&&i.host!==l&&Kn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},i),{host:l,ssl:!1,emulatorOptions:r});if(!Ds(c,a)&&(n._setSettings(c),r.mockUserToken)){let u,d;if(typeof r.mockUserToken=="string")u=r.mockUserToken,d=Xe.MOCK_USER;else{u=Wd(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new Q(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new Xe(m)}n._authCredentials=new Mg(new mh(u,d))}}/**
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
 */class hi{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new hi(this.firestore,e,this._query)}}class ot{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ot(this.firestore,e,this._key)}}class rn extends hi{constructor(e,t,r){super(e,t,Fo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new ee(e))}withConverter(e){return new rn(this.firestore,e,this._path)}}function sa(n,e,...t){if(n=Rt(n),Pf("collection","path",e),n instanceof ui){const r=ke.fromString(e,...t);return Tc(r),new rn(n,null,r)}{if(!(n instanceof ot||n instanceof rn))throw new Q(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ke.fromString(e,...t));return Tc(r),new rn(n.firestore,null,r)}}function $r(n,e,...t){if(n=Rt(n),arguments.length===1&&(e=gh.newId()),Pf("doc","path",e),n instanceof ui){const r=ke.fromString(e,...t);return Ec(r),new ot(n,null,new ee(r))}{if(!(n instanceof ot||n instanceof rn))throw new Q(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ke.fromString(e,...t));return Ec(r),new ot(n.firestore,n instanceof rn?n.converter:null,new ee(r))}}/**
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
 */const Rc="AsyncQueue";class Cc{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new af(this,"async_queue_retry"),this.Su=()=>{const r=Gi();r&&W(Rc,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=e;const t=Gi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=Gi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new jt;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!rr(e))throw e;W(Rc,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw Ht("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.bu=t,t}enqueueAfterDelay(e,t,r){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const s=Yo.createAndSchedule(this,e,t,r,i=>this.Fu(i));return this.fu.push(s),s}Du(){this.gu&&re()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class ir extends ui{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Cc,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Cc(e),this._firestoreClient=void 0,await e}}}function Cw(n,e){const t=typeof n=="object"?n:rp(),r=typeof n=="string"?n:xs,s=Ro(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=zd("firestore");i&&Rw(s,...i)}return s}function fi(n){if(n._terminated)throw new Q(B.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||kw(n),n._firestoreClient}function kw(n){var e,t,r;const s=n._freezeSettings(),i=function(l,c,u,d){return new Yg(l,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Sf(d.experimentalLongPollingOptions),d.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new vw(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(n._componentsProvider))}/**
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
 */class Zn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Zn(Ge.fromBase64String(e))}catch(t){throw new Q(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Zn(Ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Qr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Q(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class oa{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Q(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Q(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
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
 */const Sw=/^__.*__$/;class Pw{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new mn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Hr(e,this.data,t,this.fieldTransforms)}}class Df{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new mn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Nf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re()}}class la{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new la(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ku({path:r,Qu:!1});return s.$u(e),s}Uu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Gs(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(Nf(this.Lu)&&Sw.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class Vw{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ai(e)}ju(e,t,r,s=!1){return new la({Lu:e,methodName:t,zu:r,path:We.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ca(n){const e=n._freezeSettings(),t=ai(n._databaseId);return new Vw(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Mf(n,e,t,r,s,i={}){const a=n.ju(i.merge||i.mergeFields?2:0,e,t,s);ua("Data must be an object, but it was:",a,r);const l=Lf(r,a);let c,u;if(i.merge)c=new dt(a.fieldMask),u=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const m of i.mergeFields){const p=Ao(e,m,t);if(!a.contains(p))throw new Q(B.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);Uf(d,p)||d.push(p)}c=new dt(d),u=a.fieldTransforms.filter(m=>c.covers(m.field))}else c=null,u=a.fieldTransforms;return new Pw(new st(l),c,u)}class di extends ia{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof di}}function Of(n,e,t,r){const s=n.ju(1,e,t);ua("Data must be an object, but it was:",s,r);const i=[],a=st.empty();dn(r,(c,u)=>{const d=ha(e,c,t);u=Rt(u);const m=s.Uu(d);if(u instanceof di)i.push(d);else{const p=mi(u,m);p!=null&&(i.push(d),a.set(d,p))}});const l=new dt(i);return new Df(a,l,s.fieldTransforms)}function xf(n,e,t,r,s,i){const a=n.ju(1,e,t),l=[Ao(e,r,t)],c=[s];if(i.length%2!=0)throw new Q(B.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)l.push(Ao(e,i[p])),c.push(i[p+1]);const u=[],d=st.empty();for(let p=l.length-1;p>=0;--p)if(!Uf(u,l[p])){const _=l[p];let A=c[p];A=Rt(A);const S=a.Uu(_);if(A instanceof di)u.push(_);else{const C=mi(A,S);C!=null&&(u.push(_),d.set(_,C))}}const m=new dt(u);return new Df(d,m,a.fieldTransforms)}function mi(n,e){if(Ff(n=Rt(n)))return ua("Unsupported field value:",e,n),Lf(n,e);if(n instanceof ia)return function(r,s){if(!Nf(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=mi(l,s.Ku(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Rt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return A_(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=xe.fromDate(r);return{timestampValue:qs(s.serializer,i)}}if(r instanceof xe){const i=new xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:qs(s.serializer,i)}}if(r instanceof oa)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Zn)return{bytesValue:Qh(s.serializer,r._byteString)};if(r instanceof ot){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Wu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:zo(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof aa)return function(a,l){return{mapValue:{fields:{[bh]:{stringValue:Rh},[Ls]:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw l.Wu("VectorValues must only contain numeric values.");return Uo(l.serializer,u)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${ra(r)}`)}(n,e)}function Lf(n,e){const t={};return yh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):dn(n,(r,s)=>{const i=mi(s,e.qu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Ff(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof xe||n instanceof oa||n instanceof Zn||n instanceof ot||n instanceof ia||n instanceof aa)}function ua(n,e,t){if(!Ff(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=ra(t);throw r==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+r)}}function Ao(n,e,t){if((e=Rt(e))instanceof Qr)return e._internalPath;if(typeof e=="string")return ha(n,e);throw Gs("Field path arguments must be of type string or ",n,!1,void 0,t)}const Dw=new RegExp("[~\\*/\\[\\]]");function ha(n,e,t){if(e.search(Dw)>=0)throw Gs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Qr(...e.split("."))._internalPath}catch{throw Gs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Gs(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new Q(B.INVALID_ARGUMENT,l+n+c)}function Uf(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Bf{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Nw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(jf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Nw extends Bf{data(){return super.data()}}function jf(n,e){return typeof e=="string"?ha(n,e):e instanceof Qr?e._internalPath:e._delegate._internalPath}/**
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
 */function Mw(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new Q(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ow{convertValue(e,t="none"){switch(cn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return De(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ln(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw re()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return dn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[Ls].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>De(a.doubleValue));return new aa(i)}convertGeoPoint(e){return new oa(De(e.latitude),De(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ei(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Lr(e));default:return null}}convertTimestamp(e){const t=an(e);return new xe(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ke.fromString(e);we(tf(r));const s=new Fr(r.get(1),r.get(3)),i=new ee(r.popFirst(5));return s.isEqual(t)||Ht(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */class Rr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class zf extends Bf{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ps(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(jf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Ps extends zf{data(e={}){return super.data(e)}}class xw{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Rr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Ps(this._firestore,this._userDataWriter,r.key,r,new Rr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Q(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const c=new Ps(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Rr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Ps(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Rr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return l.type!==0&&(u=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:Lw(l.type),doc:c,oldIndex:u,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Lw(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re()}}/**
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
 */function Fw(n){n=Lt(n,ot);const e=Lt(n.firestore,ir);return Tw(fi(e),n._key).then(t=>Uw(e,n,t))}class Hf extends Ow{constructor(e){super(),this.firestore=e}convertBytes(e){return new Zn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,t)}}function Gt(n){n=Lt(n,hi);const e=Lt(n.firestore,ir),t=fi(e),r=new Hf(e);return Mw(n._query),bw(t,n._query).then(s=>new xw(e,r,n,s))}function Wf(n,e,t){n=Lt(n,ot);const r=Lt(n.firestore,ir),s=qf(n.converter,e,t);return fa(r,[Mf(ca(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,mt.none())])}function Gf(n,e,t,...r){n=Lt(n,ot);const s=Lt(n.firestore,ir),i=ca(s);let a;return a=typeof(e=Rt(e))=="string"||e instanceof Qr?xf(i,"updateDoc",n._key,e,t,r):Of(i,"updateDoc",n._key,e),fa(s,[a.toMutation(n._key,mt.exists(!0))])}function fa(n,e){return function(r,s){const i=new jt;return r.asyncQueue.enqueueAndForget(async()=>hw(await Ew(r),s,i)),i.promise}(fi(n),e)}function Uw(n,e,t){const r=t.docs.get(e._key),s=new Hf(n);return new zf(n,s,e._key,r,new Rr(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */class Bw{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=ca(e)}set(e,t,r){this._verifyNotCommitted();const s=$i(e,this._firestore),i=qf(s.converter,t,r),a=Mf(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(a.toMutation(s._key,mt.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=$i(e,this._firestore);let a;return a=typeof(t=Rt(t))=="string"||t instanceof Qr?xf(this._dataReader,"WriteBatch.update",i._key,t,r,s):Of(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(a.toMutation(i._key,mt.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=$i(e,this._firestore);return this._mutations=this._mutations.concat(new Bo(t._key,mt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new Q(B.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function $i(n,e){if((n=Rt(n)).firestore!==e)throw new Q(B.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */function jw(n){return fi(n=Lt(n,ir)),new Bw(n,e=>fa(n,e))}(function(e,t=!0){(function(s){tr=s})(np),sn(new qt("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new ir(new Og(r.getProvider("auth-internal")),new Fg(a,r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Q(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fr(u.options.projectId,d)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Dt(Nl,Ml,e),Dt(Nl,Ml,"esm2017")})();const qw={apiKey:"AIzaSyCTe1si_Cg2Pkl2X77JpscYfW6KajberCM",authDomain:"drawit-1f620.firebaseapp.com",projectId:"drawit-1f620",storageBucket:"drawit-1f620.firebasestorage.app",messagingSenderId:"513679195329",appId:"1:513679195329:web:d650c7307b461788dc6840",measurementId:"G-P8GR3KFS0H"},zw=Lu(qw),pi=Cw(zw),Xr=sa(pi,"games"),Kt=sa(pi,"users");sa(pi,"drawings");async function Hw(n){try{const e=$s(yt),t=n.filter(i=>!e[i]);if(t.length===0)return;const r=await Gt(Kt),s={};r.docs.forEach(i=>{const a=i.data();t.includes(a.name)&&(s[a.name]={...a,id:i.id})}),yt.update(i=>({...i,...s}))}catch(e){console.error("Error loading users:",e)}}async function Ww(n){try{const t=(await Gt(Kt)).docs.find(i=>i.data().name===n);if(t){const a={...t.data(),id:t.id};return et.set(a),yt.update(l=>({...l,[a.name]:a})),await Kf(a.name),a}const r=$r(Kt),s={name:n,coins:0,createdAt:new Date,id:r.id};return await Wf(r,s),et.set(s),yt.update(i=>({...i,[s.name]:s})),s}catch(e){throw console.error("Error creating/retrieving user:",e),e}}async function Gw(n){try{const e=$s(yt);if(e[n])return e[n];const r=(await Gt(Kt)).docs.find(s=>s.data().name===n);if(r){const i={...r.data(),id:r.id};return yt.update(a=>({...a,[i.name]:i})),i}return null}catch(e){return console.error("Error getting user:",e),null}}async function kc(n){try{if(!n){const a=(await Gt(Kt)).docs.map(l=>({...l.data(),id:l.id}));return yt.update(l=>{const c={...l};return a.forEach(u=>{c[u.name]=u}),c}),a}const e=$s(yt),t=Object.values(e).filter(i=>i.name.toLowerCase().includes(n.toLowerCase()));if(t.length>0)return t;const s=(await Gt(Kt)).docs.map(i=>({...i.data(),id:i.id})).filter(i=>i.name.toLowerCase().includes(n.toLowerCase()));return yt.update(i=>{const a={...i};return s.forEach(l=>{a[l.name]=l}),a}),s}catch(e){return console.error("Error searching users:",e),[]}}async function Kf(n){try{const t=(await Gt(Xr)).docs.filter(r=>{const s=r.data();return s.users&&s.users.includes(n)}).map(r=>({...r.data(),id:r.id}));return zr.set(t),t}catch(e){return console.error("Error in loadGames:",e),[]}}async function Kw(n){const e=$r(Xr),t={id:e.id,users:n,createdAt:new Date,drawings:[]};return await Wf(e,t),Ts.set(!1),t}async function gi(n){if(!n.id)return console.error("Cannot update game without ID"),n;try{const e=$r(Xr,n.id);return await Gf(e,{drawings:n.drawings}),n}catch(e){return console.error("Error updating game:",e),n}}async function Dr(n,e){if(!n.id)return console.error("Cannot add coins to user without ID"),n;try{const t=$r(Kt,n.id),r=n.coins+e;await Gf(t,{coins:r});const s={...n,coins:r};return et.set(s),s}catch(t){return console.error("Error adding coins:",t),n}}async function $w(){try{const n=$s(et);if(!n)return!1;const t=(await Gt(Kt)).docs.find(i=>i.data().name===n.name);if(!t)return et.set(null),localStorage.removeItem("drawIt-user"),localStorage.removeItem("drawIt-games"),localStorage.removeItem("drawIt-users"),!1;const s={...t.data(),id:t.id};return et.set(s),!0}catch(n){return console.error("Error validating user session:",n),!1}}async function Sc(n){try{const e=await Fw($r(Xr,n));return e.exists()?{...e.data(),id:e.id}:null}catch(e){return console.error("Error loading game:",e),null}}async function Qw(){try{const n=await Gt(Xr),e=[];n.docs.forEach(r=>{const s=r.data();if(s.drawings&&s.drawings.length>0){const i=s.drawings.map(a=>({...a,gameId:r.id}));for(const a of i)a.guessedBy=s.users.find(l=>l!==a.artist)??"";e.push(...i)}});const t=e.sort((r,s)=>{function i(c){return c?c instanceof Date?c:typeof c.toDate=="function"?c.toDate():typeof c=="string"?new Date(c):new Date(c):new Date(0)}const a=i(r.createdAt);return i(s.createdAt).getTime()-a.getTime()});return console.log(t),t.slice(0,100)}catch(n){return console.error("Error fetching recent drawings:",n),[]}}var da={};(function n(e,t,r,s){var i=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",l=function(){if(!e.OffscreenCanvas)return!1;var N=new OffscreenCanvas(1,1),R=N.getContext("2d");R.fillRect(0,0,1,1);var K=N.transferToImageBitmap();try{R.createPattern(K,"no-repeat")}catch{return!1}return!0}();function c(){}function u(N){var R=t.exports.Promise,K=R!==void 0?R:e.Promise;return typeof K=="function"?new K(N):(N(c,c),null)}var d=function(N,R){return{transform:function(K){if(N)return K;if(R.has(K))return R.get(K);var G=new OffscreenCanvas(K.width,K.height),le=G.getContext("2d");return le.drawImage(K,0,0),R.set(K,G),G},clear:function(){R.clear()}}}(l,new Map),m=function(){var N=Math.floor(16.666666666666668),R,K,G={},le=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(R=function(oe){var ue=Math.random();return G[ue]=requestAnimationFrame(function Z(he){le===he||le+N-1<he?(le=he,delete G[ue],oe()):G[ue]=requestAnimationFrame(Z)}),ue},K=function(oe){G[oe]&&cancelAnimationFrame(G[oe])}):(R=function(oe){return setTimeout(oe,N)},K=function(oe){return clearTimeout(oe)}),{frame:R,cancel:K}}(),p=function(){var N,R,K={};function G(le){function oe(ue,Z){le.postMessage({options:ue||{},callback:Z})}le.init=function(Z){var he=Z.transferControlToOffscreen();le.postMessage({canvas:he},[he])},le.fire=function(Z,he,Ae){if(R)return oe(Z,null),R;var Te=Math.random().toString(36).slice(2);return R=u(function(ye){function Ie(Ve){Ve.data.callback===Te&&(delete K[Te],le.removeEventListener("message",Ie),R=null,d.clear(),Ae(),ye())}le.addEventListener("message",Ie),oe(Z,Te),K[Te]=Ie.bind(null,{data:{callback:Te}})}),R},le.reset=function(){le.postMessage({reset:!0});for(var Z in K)K[Z](),delete K[Z]}}return function(){if(N)return N;if(!r&&i){var le=["var CONFETTI, SIZE = {}, module = {};","("+n.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{N=new Worker(URL.createObjectURL(new Blob([le])))}catch(oe){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",oe),null}G(N)}return N}}(),_={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function A(N,R){return R?R(N):N}function S(N){return N!=null}function C(N,R,K){return A(N&&S(N[R])?N[R]:_[R],K)}function D(N){return N<0?0:Math.floor(N)}function x(N,R){return Math.floor(Math.random()*(R-N))+N}function L(N){return parseInt(N,16)}function U(N){return N.map(ne)}function ne(N){var R=String(N).replace(/[^0-9a-f]/gi,"");return R.length<6&&(R=R[0]+R[0]+R[1]+R[1]+R[2]+R[2]),{r:L(R.substring(0,2)),g:L(R.substring(2,4)),b:L(R.substring(4,6))}}function J(N){var R=C(N,"origin",Object);return R.x=C(R,"x",Number),R.y=C(R,"y",Number),R}function E(N){N.width=document.documentElement.clientWidth,N.height=document.documentElement.clientHeight}function y(N){var R=N.getBoundingClientRect();N.width=R.width,N.height=R.height}function v(N){var R=document.createElement("canvas");return R.style.position="fixed",R.style.top="0px",R.style.left="0px",R.style.pointerEvents="none",R.style.zIndex=N,R}function T(N,R,K,G,le,oe,ue,Z,he){N.save(),N.translate(R,K),N.rotate(oe),N.scale(G,le),N.arc(0,0,1,ue,Z,he),N.restore()}function I(N){var R=N.angle*(Math.PI/180),K=N.spread*(Math.PI/180);return{x:N.x,y:N.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:N.startVelocity*.5+Math.random()*N.startVelocity,angle2D:-R+(.5*K-Math.random()*K),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:N.color,shape:N.shape,tick:0,totalTicks:N.ticks,decay:N.decay,drift:N.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:N.gravity*3,ovalScalar:.6,scalar:N.scalar,flat:N.flat}}function k(N,R){R.x+=Math.cos(R.angle2D)*R.velocity+R.drift,R.y+=Math.sin(R.angle2D)*R.velocity+R.gravity,R.velocity*=R.decay,R.flat?(R.wobble=0,R.wobbleX=R.x+10*R.scalar,R.wobbleY=R.y+10*R.scalar,R.tiltSin=0,R.tiltCos=0,R.random=1):(R.wobble+=R.wobbleSpeed,R.wobbleX=R.x+10*R.scalar*Math.cos(R.wobble),R.wobbleY=R.y+10*R.scalar*Math.sin(R.wobble),R.tiltAngle+=.1,R.tiltSin=Math.sin(R.tiltAngle),R.tiltCos=Math.cos(R.tiltAngle),R.random=Math.random()+2);var K=R.tick++/R.totalTicks,G=R.x+R.random*R.tiltCos,le=R.y+R.random*R.tiltSin,oe=R.wobbleX+R.random*R.tiltCos,ue=R.wobbleY+R.random*R.tiltSin;if(N.fillStyle="rgba("+R.color.r+", "+R.color.g+", "+R.color.b+", "+(1-K)+")",N.beginPath(),a&&R.shape.type==="path"&&typeof R.shape.path=="string"&&Array.isArray(R.shape.matrix))N.fill(_t(R.shape.path,R.shape.matrix,R.x,R.y,Math.abs(oe-G)*.1,Math.abs(ue-le)*.1,Math.PI/10*R.wobble));else if(R.shape.type==="bitmap"){var Z=Math.PI/10*R.wobble,he=Math.abs(oe-G)*.1,Ae=Math.abs(ue-le)*.1,Te=R.shape.bitmap.width*R.scalar,ye=R.shape.bitmap.height*R.scalar,Ie=new DOMMatrix([Math.cos(Z)*he,Math.sin(Z)*he,-Math.sin(Z)*Ae,Math.cos(Z)*Ae,R.x,R.y]);Ie.multiplySelf(new DOMMatrix(R.shape.matrix));var Ve=N.createPattern(d.transform(R.shape.bitmap),"no-repeat");Ve.setTransform(Ie),N.globalAlpha=1-K,N.fillStyle=Ve,N.fillRect(R.x-Te/2,R.y-ye/2,Te,ye),N.globalAlpha=1}else if(R.shape==="circle")N.ellipse?N.ellipse(R.x,R.y,Math.abs(oe-G)*R.ovalScalar,Math.abs(ue-le)*R.ovalScalar,Math.PI/10*R.wobble,0,2*Math.PI):T(N,R.x,R.y,Math.abs(oe-G)*R.ovalScalar,Math.abs(ue-le)*R.ovalScalar,Math.PI/10*R.wobble,0,2*Math.PI);else if(R.shape==="star")for(var fe=Math.PI/2*3,Be=4*R.scalar,tt=8*R.scalar,ct=R.x,bt=R.y,Pt=5,nt=Math.PI/Pt;Pt--;)ct=R.x+Math.cos(fe)*tt,bt=R.y+Math.sin(fe)*tt,N.lineTo(ct,bt),fe+=nt,ct=R.x+Math.cos(fe)*Be,bt=R.y+Math.sin(fe)*Be,N.lineTo(ct,bt),fe+=nt;else N.moveTo(Math.floor(R.x),Math.floor(R.y)),N.lineTo(Math.floor(R.wobbleX),Math.floor(le)),N.lineTo(Math.floor(oe),Math.floor(ue)),N.lineTo(Math.floor(G),Math.floor(R.wobbleY));return N.closePath(),N.fill(),R.tick<R.totalTicks}function w(N,R,K,G,le){var oe=R.slice(),ue=N.getContext("2d"),Z,he,Ae=u(function(Te){function ye(){Z=he=null,ue.clearRect(0,0,G.width,G.height),d.clear(),le(),Te()}function Ie(){r&&!(G.width===s.width&&G.height===s.height)&&(G.width=N.width=s.width,G.height=N.height=s.height),!G.width&&!G.height&&(K(N),G.width=N.width,G.height=N.height),ue.clearRect(0,0,G.width,G.height),oe=oe.filter(function(Ve){return k(ue,Ve)}),oe.length?Z=m.frame(Ie):ye()}Z=m.frame(Ie),he=ye});return{addFettis:function(Te){return oe=oe.concat(Te),Ae},canvas:N,promise:Ae,reset:function(){Z&&m.cancel(Z),he&&he()}}}function H(N,R){var K=!N,G=!!C(R||{},"resize"),le=!1,oe=C(R,"disableForReducedMotion",Boolean),ue=i&&!!C(R||{},"useWorker"),Z=ue?p():null,he=K?E:y,Ae=N&&Z?!!N.__confetti_initialized:!1,Te=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,ye;function Ie(fe,Be,tt){for(var ct=C(fe,"particleCount",D),bt=C(fe,"angle",Number),Pt=C(fe,"spread",Number),nt=C(fe,"startVelocity",Number),Jr=C(fe,"decay",Number),yi=C(fe,"gravity",Number),ar=C(fe,"drift",Number),Vn=C(fe,"colors",U),Yr=C(fe,"ticks",Number),Me=C(fe,"shapes"),qe=C(fe,"scalar"),Dn=!!C(fe,"flat"),lr=J(fe),cr=ct,ur=[],gn=N.width*lr.x,Zr=N.height*lr.y;cr--;)ur.push(I({x:gn,y:Zr,angle:bt,spread:Pt,startVelocity:nt,color:Vn[cr%Vn.length],shape:Me[x(0,Me.length)],ticks:Yr,decay:Jr,gravity:yi,drift:ar,scalar:qe,flat:Dn}));return ye?ye.addFettis(ur):(ye=w(N,ur,he,Be,tt),ye.promise)}function Ve(fe){var Be=oe||C(fe,"disableForReducedMotion",Boolean),tt=C(fe,"zIndex",Number);if(Be&&Te)return u(function(nt){nt()});K&&ye?N=ye.canvas:K&&!N&&(N=v(tt),document.body.appendChild(N)),G&&!Ae&&he(N);var ct={width:N.width,height:N.height};Z&&!Ae&&Z.init(N),Ae=!0,Z&&(N.__confetti_initialized=!0);function bt(){if(Z){var nt={getBoundingClientRect:function(){if(!K)return N.getBoundingClientRect()}};he(nt),Z.postMessage({resize:{width:nt.width,height:nt.height}});return}ct.width=ct.height=null}function Pt(){ye=null,G&&(le=!1,e.removeEventListener("resize",bt)),K&&N&&(document.body.contains(N)&&document.body.removeChild(N),N=null,Ae=!1)}return G&&!le&&(le=!0,e.addEventListener("resize",bt,!1)),Z?Z.fire(fe,ct,Pt):Ie(fe,ct,Pt)}return Ve.reset=function(){Z&&Z.reset(),ye&&ye.reset()},Ve}var Ee;function St(){return Ee||(Ee=H(null,{useWorker:!0,resize:!0})),Ee}function _t(N,R,K,G,le,oe,ue){var Z=new Path2D(N),he=new Path2D;he.addPath(Z,new DOMMatrix(R));var Ae=new Path2D;return Ae.addPath(he,new DOMMatrix([Math.cos(ue)*le,Math.sin(ue)*le,-Math.sin(ue)*oe,Math.cos(ue)*oe,K,G])),Ae}function pn(N){if(!a)throw new Error("path confetti are not supported in this browser");var R,K;typeof N=="string"?R=N:(R=N.path,K=N.matrix);var G=new Path2D(R),le=document.createElement("canvas"),oe=le.getContext("2d");if(!K){for(var ue=1e3,Z=ue,he=ue,Ae=0,Te=0,ye,Ie,Ve=0;Ve<ue;Ve+=2)for(var fe=0;fe<ue;fe+=2)oe.isPointInPath(G,Ve,fe,"nonzero")&&(Z=Math.min(Z,Ve),he=Math.min(he,fe),Ae=Math.max(Ae,Ve),Te=Math.max(Te,fe));ye=Ae-Z,Ie=Te-he;var Be=10,tt=Math.min(Be/ye,Be/Ie);K=[tt,0,0,tt,-Math.round(ye/2+Z)*tt,-Math.round(Ie/2+he)*tt]}return{type:"path",path:R,matrix:K}}function or(N){var R,K=1,G="#000000",le='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof N=="string"?R=N:(R=N.text,K="scalar"in N?N.scalar:K,le="fontFamily"in N?N.fontFamily:le,G="color"in N?N.color:G);var oe=10*K,ue=""+oe+"px "+le,Z=new OffscreenCanvas(oe,oe),he=Z.getContext("2d");he.font=ue;var Ae=he.measureText(R),Te=Math.ceil(Ae.actualBoundingBoxRight+Ae.actualBoundingBoxLeft),ye=Math.ceil(Ae.actualBoundingBoxAscent+Ae.actualBoundingBoxDescent),Ie=2,Ve=Ae.actualBoundingBoxLeft+Ie,fe=Ae.actualBoundingBoxAscent+Ie;Te+=Ie+Ie,ye+=Ie+Ie,Z=new OffscreenCanvas(Te,ye),he=Z.getContext("2d"),he.font=ue,he.fillStyle=G,he.fillText(R,Ve,fe);var Be=1/K;return{type:"bitmap",bitmap:Z.transferToImageBitmap(),matrix:[Be,0,0,Be,-Te*Be/2,-ye*Be/2]}}t.exports=function(){return St().apply(this,arguments)},t.exports.reset=function(){St().reset()},t.exports.create=H,t.exports.shapeFromPath=pn,t.exports.shapeFromText=or})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),da,!1);const Xw=da.exports;da.exports.create;function Jw(n){const e=document.createElement("div");e.className="toast toast-top toast-end",e.innerHTML=`
        <div class="alert bg-primary/80 text-black border-2 border-primary shadow-lg">
            <span>${n}</span>
        </div>
    `,document.body.appendChild(e),setTimeout(()=>{e.remove()},5e3),Xw({particleCount:100,spread:70,origin:{y:.6}})}let Yw=["apple","airplane","alligator","anchor","angel","antelope","apron","armchair","arrow","artist","avocado","axe","baby","backpack","bacon","badger","balloon","banana","bandage","banjo","barn","barrel","baseball","basket","bathtub","battery","beach","bear","beaver","bedroom","bee","beetle","bell","belt","bench","bicycle","binoculars","bird","birthday","blender","blimp","block","blouse","boat","bomb","book","boomerang","boot","bottle","bouquet","bow","boxer","bracelet","brain","branch","bread","bridge","broccoli","broom","brush","bucket","bulldozer","bullet","bus","bush","butterfly","button","cactus","cage","cake","calculator","camel","camera","campfire","can","candle","cannon","canoe","cap","cape","car","carrot","cart","castle","cat","caterpillar","cave","ceiling","cellphone","chainsaw","chair","chalk","champion","cheese","cherry","chest","chicken","chimney","church","circle","claw","cliff","clock","cloud","clown","coat","cobweb","coin","comet","computer","cookie","couch","cow","crab","crayon","cream","crocodile","crown","cruise","cupcake","curtain","cushion","dagger","daisy","dance","dart","deer","desk","desert","diamond","dice","dinosaur","dish","diver","dog","doll","dolphin","donkey","door","doormat","dragon","drawer","drill","drone","drum","duck","dumptruck","eagle","ear","earthquake","eggplant","electricity","elephant","elevator","engine","envelope","eraser","explosion","eyeglasses","face","fan","farm","feather","fence","ferret","fire","firefighter","fireplace","firetruck","fish","fishing","flag","flamingo","flashlight","flood","floor","flower","flute","fly","folder","football","fork","fountain","fox","fridge","frog","fryingpan","galaxy","garage","garden","gargoyle","gate","ghost","giraffe","glacier","glider","glove","goat","goggles","goldfish","golf","gorilla","grapes","grass","grill","guitar","hammer","hamster","handcuffs","handle","hanger","harp","hat","headphones","hedgehog","helicopter","helmet","hill","hippo","hive","hook","horn","horse","hospital","hotdog","house","hovercraft","hug","hurdle","hurricane","iceberg","icicle","igloo","iguana","ink","insect","iron","island","jacket","jail","jellyfish","jigsaw","jockey","jungle","kangaroo","kettle","key","keyboard","kick","kidney","kite","kitten","knee","knife","koala","ladder","lamp","lantern","laptop","lasso","laundry","leaf","leash","leg","lemon","leopard","letter","library","lightbulb","lighthouse","lightning","limo","lion","lips","lizard","lock","locust","lollipop","magnet","mailbox","map","maracas","mask","match","meatball","megaphone","mermaid","meteor","microscope","microwave","milk","mirror","moat","mole","monkey","monster","moon","mosquito","motorcycle","mountain","mouse","mower","mug","mummy","mushroom","music","nail","needle","nest","net","ninja","noodle","notebook","nose","notepad","nun","nut","oasis","ocean","octopus","oil","onion","ostrich","otter","oven","owl","oxygen","paddle","pajamas","panda","panther","parachute","parrot","party","passport","peacock","peanut","pear","peas","pencil","penguin","pepper","perfume","phone","piano","picture","pig","pigeon","pill","pillow","pineapple","pipe","pirate","pizza","planet","plate","plow","plug","plumber","pocket","pool","popcorn","postcard","poster","potato","printer","pudding","puppet","puppy","pyramid","quail","quartz","queen","quilt","rabbit","raccoon","radio","raft","rain","rainbow","rake","rat","raven","razor","reindeer","remote","ribbon","ring","robot","rocket","rockingchair","roof","rope","rose","ruler","saddle","sailboat","salad","sand","sandcastle","satellite","saw","scarf","school","scissors","scorpion","screw","seal","seesaw","shampoo","shark","sheep","shelf","shell","ship","shoe","shoppingcart","shovel","shower","shrimp","sink","skateboard","skeleton","ski","skirt","skunk","sled","sleepingbag","slide","slime","sloth","slug","smoke","snail","snake","sneeze","snow","snowball","snowflake","snowman","sock","sofa","soldier","spaceship","spaghetti","spark","speaker","spear","spectacles","spider","spoon","spring","spy","squirrel","stairs","starfish","statue","steak","steeringwheel","stethoscope","stomach","stool","stove","straw","street","string","submarine","suitcase","sun","sunglasses","sunset","surfboard","surgeon","swamp","swan","sweater","swing","sword","table","tail","tape","tarp","taxi","teacup","teacher","teapot","telescope","tent","thermometer","throne","ticket","tie","tiger","toad","toaster","toilet","toothbrush","toothpaste","torch","tornado","towel","tractor","traffic","train","trampoline","trash","treasure","treehouse","triangle","tricycle","troll","trophy","truck","trumpet","tuba","turtle","tusk","tv","typewriter","umbrella","unicorn","urn","vacuum","vampire","vase","vegetable","village","vine","violin","volcano","vulture","wagon","wall","wallet","wardrobe","washingmachine","watch","waterfall","wave","web","whale","wheelbarrow","whistle","wig","window","windmill","wing","wolf","worm","wrench","xylophone","yacht","yak","yo-yo","zebra","zoo"];function ma(n,e){return n.drawings.filter(r=>!r.guessed)[0]||null}async function Zw(n,e,t){const r=ma(n,e.name);if(!r)return;const s=t.toLowerCase().trim(),i=r.secretWord.toLowerCase().trim();let a=!1;return s===i?(a=!0,r.guessed=!0,r.guessedBy=e.name,await Dr(e,r.coins),Jw(`It was ${r.secretWord}! You got ${r.coins} coins!`)):r.guesses.includes(t)||r.guesses.push(t),await gi(n),a}async function Pc(n){return Yw.sort(()=>Math.random()-.5).slice(0,n).map((t,r)=>({secretWord:t,coins:r+1}))}function As(n,e){const t=ma(n);if(!t){if(n.drawings.length===0)return n.users[0]===e?"draw":"waiting";const r=[...n.drawings].reverse().find(l=>l.guessed);if(!r)return n.users[0]===e?"draw":"waiting";const i=(n.users.indexOf(r.artist)+1)%n.users.length;return n.users[i]===e?"draw":"waiting"}return t.artist===e?"waiting":"guess"}function ev(n){return{...n,hintPurchased:n.hintPurchased??!1,superHintPurchased:n.superHintPurchased??!1}}function Vc(n){return`The word is ${n.secretWord.length} letters long`}function Dc(n){const e=n.secretWord.split("");for(let t=e.length-1;t>0;t--){const r=Math.floor(Math.random()*(t+1));[e[t],e[r]]=[e[r],e[t]]}return`Letters: ${e.join(" · ").toUpperCase()}`}function Ks(n){return n?n instanceof Date?n.getTime():typeof n.toDate=="function"?n.toDate().getTime():typeof n=="string"?new Date(n).getTime():new Date(n).getTime():0}async function tv(n,e,t){if(t.coins<5||e.hintPurchased)return!1;const r=n.drawings.findIndex(s=>s.artist===e.artist&&Ks(s.createdAt)===Ks(e.createdAt));return r===-1?!1:(n.drawings[r]={...e,hintPurchased:!0},await gi(n),!0)}async function nv(n,e,t){if(t.coins<10||!e.hintPurchased||e.superHintPurchased)return!1;const r=n.drawings.findIndex(s=>s.artist===e.artist&&Ks(s.createdAt)===Ks(e.createdAt));return r===-1?!1:(n.drawings[r]={...e,superHintPurchased:!0},await gi(n),!0)}const _i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAASUExURQAAAAYGCP/4Vf/QLPGZEf///5e4X0EAAAABdFJOUwBA5thmAAAAAWJLR0QF+G/pxwAAAAd0SU1FB+kFEQMBEaw38IoAAABMSURBVEjHY2CAA0EsgAEbGFVIP4VgQSUsAF31qEL6KUSoMcYCXEAAonpU4ajCUYWjCkcVjiokQyGisnHBArDWXKMK6adwKLQfR5pCAFjAgTiNHXoCAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI1LTA1LTE3VDAzOjAwOjU0KzAwOjAwAqVpBwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNS0wNS0xN1QwMzowMDo1NCswMDowMHP40bsAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjUtMDUtMTdUMDM6MDE6MTcrMDA6MDB+jY89AAAAAElFTkSuQmCC";function Nc(n){let e,t=n[0][0].toUpperCase()+"",r;return{c(){e=O("div"),r=se(t),b(e,"class","w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold")},m(s,i){q(s,e,i),V(e,r)},p(s,i){i&1&&t!==(t=s[0][0].toUpperCase()+"")&&ve(r,t)},d(s){s&&j(e)}}}function Mc(n){let e,t,r,s,i;return{c(){e=O("span"),t=se(n[1]),r=Y(),s=O("img"),vt(s.src,i=_i)||b(s,"src",i),b(s,"class","w-4 h-4"),b(s,"alt","coins")},m(a,l){q(a,e,l),V(e,t),q(a,r,l),q(a,s,l)},p(a,l){l&2&&ve(t,a[1])},d(a){a&&(j(e),j(r),j(s))}}}function Oc(n){let e,t,r;return{c(){e=se("· "),t=O("span"),r=se(n[3]),b(t,"class","text-xs text-black/60")},m(s,i){q(s,e,i),q(s,t,i),V(t,r)},p(s,i){i&8&&ve(r,s[3])},d(s){s&&(j(e),j(t))}}}function xc(n){let e,t;return{c(){e=Jt("svg"),t=Jt("path"),b(t,"fill-rule","evenodd"),b(t,"d","M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"),b(t,"clip-rule","evenodd"),b(e,"xmlns","http://www.w3.org/2000/svg"),b(e,"class","h-5 w-5 text-gray-400"),b(e,"viewBox","0 0 20 20"),b(e,"fill","currentColor")},m(r,s){q(r,e,s),V(e,t)},d(r){r&&j(e)}}}function rv(n){let e,t,r,s,i,a,l,c,u,d,m,p,_,A=n[2]&&Nc(n),S=n[1]!==null&&Mc(n),C=n[3]&&Oc(n),D=n[4]&&xc();return{c(){e=O("button"),t=O("div"),A&&A.c(),r=Y(),s=O("div"),i=O("span"),a=se(n[0]),l=Y(),c=O("div"),S&&S.c(),u=Y(),C&&C.c(),d=Y(),D&&D.c(),b(i,"class","font-medium text-black"),b(c,"class","flex items-center gap-1 text-sm text-black/60"),b(s,"class","flex flex-col items-start"),b(t,"class","flex items-center gap-3"),b(e,"class","flex items-center justify-between w-full p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-primary/20 transition-colors active:bg-gray-50"),e.disabled=m=n[4]===null,Yt(e,"cursor-pointer",n[4]!==null),Yt(e,"cursor-default",n[4]===null)},m(x,L){q(x,e,L),V(e,t),A&&A.m(t,null),V(t,r),V(t,s),V(s,i),V(i,a),V(s,l),V(s,c),S&&S.m(c,null),V(c,u),C&&C.m(c,null),V(e,d),D&&D.m(e,null),p||(_=_e(e,"click",n[5]),p=!0)},p(x,[L]){x[2]?A?A.p(x,L):(A=Nc(x),A.c(),A.m(t,r)):A&&(A.d(1),A=null),L&1&&ve(a,x[0]),x[1]!==null?S?S.p(x,L):(S=Mc(x),S.c(),S.m(c,u)):S&&(S.d(1),S=null),x[3]?C?C.p(x,L):(C=Oc(x),C.c(),C.m(c,null)):C&&(C.d(1),C=null),x[4]?D||(D=xc(),D.c(),D.m(e,null)):D&&(D.d(1),D=null),L&16&&m!==(m=x[4]===null)&&(e.disabled=m),L&16&&Yt(e,"cursor-pointer",x[4]!==null),L&16&&Yt(e,"cursor-default",x[4]===null)},i:X,o:X,d(x){x&&j(e),A&&A.d(),S&&S.d(),C&&C.d(),D&&D.d(),p=!1,_()}}}function sv(n,e,t){let{name:r}=e,{coins:s=null}=e,{showAvatar:i=!1}=e,{subtitle:a=null}=e,{onClick:l=null}=e;const c=()=>l==null?void 0:l();return n.$$set=u=>{"name"in u&&t(0,r=u.name),"coins"in u&&t(1,s=u.coins),"showAvatar"in u&&t(2,i=u.showAvatar),"subtitle"in u&&t(3,a=u.subtitle),"onClick"in u&&t(4,l=u.onClick)},[r,s,i,a,l,c]}class pa extends kt{constructor(e){super(),Ct(this,e,sv,rv,Et,{name:0,coins:1,showAvatar:2,subtitle:3,onClick:4})}}function Lc(n,e,t){const r=n.slice();return r[11]=e[t],r}function iv(n){let e,t,r=Re(n[0].users.filter(n[9])),s=[];for(let a=0;a<r.length;a+=1)s[a]=Fc(Lc(n,r,a));const i=a=>te(s[a],1,1,()=>{s[a]=null});return{c(){for(let a=0;a<s.length;a+=1)s[a].c();e=Tt()},m(a,l){for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(a,l);q(a,e,l),t=!0},p(a,l){if(l&99){r=Re(a[0].users.filter(a[9]));let c;for(c=0;c<r.length;c+=1){const u=Lc(a,r,c);s[c]?(s[c].p(u,l),$(s[c],1)):(s[c]=Fc(u),s[c].c(),$(s[c],1),s[c].m(e.parentNode,e))}for(Fe(),c=r.length;c<s.length;c+=1)i(c);Ue()}},i(a){if(!t){for(let l=0;l<r.length;l+=1)$(s[l]);t=!0}},o(a){s=s.filter(Boolean);for(let l=0;l<s.length;l+=1)te(s[l]);t=!1},d(a){a&&j(e),pt(s,a)}}}function ov(n){let e,t,r;return t=new pa({props:{name:n[2],coins:n[3],onClick:n[6]}}),{c(){e=O("div"),gt(t.$$.fragment),b(e,"class","flex flex-row text-start w-full")},m(s,i){q(s,e,i),at(t,e,null),r=!0},p(s,i){const a={};i&4&&(a.name=s[2]),i&8&&(a.coins=s[3]),t.$set(a)},i(s){r||($(t.$$.fragment,s),r=!0)},o(s){te(t.$$.fragment,s),r=!1},d(s){s&&j(e),lt(t)}}}function av(n){let e,t=n[11]+"",r;return{c(){e=O("span"),r=se(t),b(e,"class","font-bold text-black")},m(s,i){q(s,e,i),V(e,r)},p(s,i){i&3&&t!==(t=s[11]+"")&&ve(r,t)},i:X,o:X,d(s){s&&j(e)}}}function lv(n){let e,t;return e=new pa({props:{name:n[11],coins:n[5][n[11]].coins,subtitle:`${n[0].drawings.length} drawing${n[0].drawings.length===1?"":"s"}`,onClick:n[6]}}),{c(){gt(e.$$.fragment)},m(r,s){at(e,r,s),t=!0},p(r,s){const i={};s&3&&(i.name=r[11]),s&35&&(i.coins=r[5][r[11]].coins),s&1&&(i.subtitle=`${r[0].drawings.length} drawing${r[0].drawings.length===1?"":"s"}`),e.$set(i)},i(r){t||($(e.$$.fragment,r),t=!0)},o(r){te(e.$$.fragment,r),t=!1},d(r){lt(e,r)}}}function Fc(n){let e,t,r,s,i;const a=[lv,av],l=[];function c(u,d){return u[5][u[11]]?0:1}return t=c(n),r=l[t]=a[t](n),{c(){e=O("div"),r.c(),s=Y(),b(e,"class","w-full flex flex-col items-center justify-center gap-0.5")},m(u,d){q(u,e,d),l[t].m(e,null),V(e,s),i=!0},p(u,d){let m=t;t=c(u),t===m?l[t].p(u,d):(Fe(),te(l[m],1,1,()=>{l[m]=null}),Ue(),r=l[t],r?r.p(u,d):(r=l[t]=a[t](u),r.c()),$(r,1),r.m(e,s))},i(u){i||($(r),i=!0)},o(u){te(r),i=!1},d(u){u&&j(e),l[t].d()}}}function cv(n){let e,t,r,s;const i=[ov,iv],a=[];function l(c,u){return c[4]?0:c[0]?1:-1}return~(t=l(n))&&(r=a[t]=i[t](n)),{c(){e=O("div"),r&&r.c(),b(e,"class","cursor-pointer py-1 rounded-lg transition-colors w-full mb-2 flex flex-col gap-2 items-center justify-between"),Yt(e,"bg-primary-10",!n[4]),Yt(e,"bg-secondary-10",n[4])},m(c,u){q(c,e,u),~t&&a[t].m(e,null),s=!0},p(c,[u]){let d=t;t=l(c),t===d?~t&&a[t].p(c,u):(r&&(Fe(),te(a[d],1,1,()=>{a[d]=null}),Ue()),~t?(r=a[t],r?r.p(c,u):(r=a[t]=i[t](c),r.c()),$(r,1),r.m(e,null)):r=null),(!s||u&16)&&Yt(e,"bg-primary-10",!c[4]),(!s||u&16)&&Yt(e,"bg-secondary-10",c[4])},i(c){s||($(r),s=!0)},o(c){te(r),s=!1},d(c){c&&j(e),~t&&a[t].d()}}}function uv(n,e,t){let r,s;Ye(n,ft,A=>t(10,r=A)),Ye(n,yt,A=>t(5,s=A));let{game:i=null}=e,{currentUserName:a=""}=e,{user:l=""}=e,{coins:c=null}=e,{isNewGame:u=!1}=e,{onClick:d=null}=e,{navigate:m=null}=e;function p(){u&&d?d():i&&m&&(ht(ft,r=i,r),m("home"))}const _=A=>A!==a;return n.$$set=A=>{"game"in A&&t(0,i=A.game),"currentUserName"in A&&t(1,a=A.currentUserName),"user"in A&&t(2,l=A.user),"coins"in A&&t(3,c=A.coins),"isNewGame"in A&&t(4,u=A.isNewGame),"onClick"in A&&t(7,d=A.onClick),"navigate"in A&&t(8,m=A.navigate)},[i,a,l,c,u,s,p,d,m,_]}class hv extends kt{constructor(e){super(),Ct(this,e,uv,cv,Et,{game:0,currentUserName:1,user:2,coins:3,isNewGame:4,onClick:7,navigate:8})}}function Uc(n,e,t){const r=n.slice();return r[5]=e[t],r}function Bc(n){let e,t;return e=new hv({props:{game:n[5],currentUserName:n[2],navigate:n[4]}}),{c(){gt(e.$$.fragment)},m(r,s){at(e,r,s),t=!0},p(r,s){const i={};s&2&&(i.game=r[5]),s&4&&(i.currentUserName=r[2]),s&16&&(i.navigate=r[4]),e.$set(i)},i(r){t||($(e.$$.fragment,r),t=!0)},o(r){te(e.$$.fragment,r),t=!1},d(r){lt(e,r)}}}function fv(n){let e,t,r,s,i,a=Re(n[1]),l=[];for(let u=0;u<a.length;u+=1)l[u]=Bc(Uc(n,a,u));const c=u=>te(l[u],1,1,()=>{l[u]=null});return{c(){e=O("div"),t=O("h3"),r=se(n[0]),s=Y();for(let u=0;u<l.length;u+=1)l[u].c();b(t,"class",n[3]),b(e,"class","flex flex-col gap-0")},m(u,d){q(u,e,d),V(e,t),V(t,r),V(e,s);for(let m=0;m<l.length;m+=1)l[m]&&l[m].m(e,null);i=!0},p(u,[d]){if((!i||d&1)&&ve(r,u[0]),(!i||d&8)&&b(t,"class",u[3]),d&22){a=Re(u[1]);let m;for(m=0;m<a.length;m+=1){const p=Uc(u,a,m);l[m]?(l[m].p(p,d),$(l[m],1)):(l[m]=Bc(p),l[m].c(),$(l[m],1),l[m].m(e,null))}for(Fe(),m=a.length;m<l.length;m+=1)c(m);Ue()}},i(u){if(!i){for(let d=0;d<a.length;d+=1)$(l[d]);i=!0}},o(u){l=l.filter(Boolean);for(let d=0;d<l.length;d+=1)te(l[d]);i=!1},d(u){u&&j(e),pt(l,u)}}}function dv(n,e,t){let{title:r}=e,{games:s}=e,{currentUserName:i}=e,{titleClass:a="text-sm font-semibold text-primary"}=e,{navigate:l=null}=e;return n.$$set=c=>{"title"in c&&t(0,r=c.title),"games"in c&&t(1,s=c.games),"currentUserName"in c&&t(2,i=c.currentUserName),"titleClass"in c&&t(3,a=c.titleClass),"navigate"in c&&t(4,l=c.navigate)},[r,s,i,a,l]}class $f extends kt{constructor(e){super(),Ct(this,e,dv,fv,Et,{title:0,games:1,currentUserName:2,titleClass:3,navigate:4})}}const Qf=""+new URL("logo-BEMpbk-Y.svg",import.meta.url).href;function jc(n,e,t){const r=n.slice();return r[16]=e[t],r}function qc(n,e,t){const r=n.slice();return r[16]=e[t],r}function mv(n){let e,t,r,s,i,a,l,c,u,d;return{c(){var m;e=O("div"),t=O("span"),t.textContent="Who are you?",r=Y(),s=O("input"),i=Y(),a=O("button"),l=se("get drawin'"),b(t,"class","text-2xl font-bold text-primary"),b(s,"type","text"),b(s,"placeholder","Your name"),b(s,"class","input input-bordered w-full bg-white text-black border-primary rounded-xl text-lg px-4 py-2 shadow"),b(s,"autocapitalize","off"),b(s,"autocorrect","off"),b(s,"maxlength","14"),b(a,"class","btn btn-primary text-white w-full rounded-xl text-lg py-2 shadow"),a.disabled=c=!((m=n[4])!=null&&m.trim()),b(e,"class","flex flex-col items-center gap-4 w-full max-w-xs mx-auto mt-8")},m(m,p){q(m,e,p),V(e,t),V(e,r),V(e,s),Gn(s,n[4]),V(e,i),V(e,a),V(a,l),u||(d=[_e(s,"input",n[12]),_e(a,"click",n[13])],u=!0)},p(m,p){var _;p&16&&s.value!==m[4]&&Gn(s,m[4]),p&16&&c!==(c=!((_=m[4])!=null&&_.trim()))&&(a.disabled=c)},i:X,o:X,d(m){m&&j(e),u=!1,At(d)}}}function pv(n){let e,t,r,s;const i=[yv,_v],a=[];function l(c,u){return c[6].length!==0?0:1}return e=l(n),t=a[e]=i[e](n),{c(){t.c(),r=Tt()},m(c,u){a[e].m(c,u),q(c,r,u),s=!0},p(c,u){let d=e;e=l(c),e===d?a[e].p(c,u):(Fe(),te(a[d],1,1,()=>{a[d]=null}),Ue(),t=a[e],t?t.p(c,u):(t=a[e]=i[e](c),t.c()),$(t,1),t.m(r.parentNode,r))},i(c){s||($(t),s=!0)},o(c){te(t),s=!1},d(c){c&&j(r),a[e].d(c)}}}function gv(n){let e;return{c(){e=O("div"),e.innerHTML='<div class="text-primary text-lg font-semibold">Loading...</div>',b(e,"class","flex flex-col items-center gap-4 w-full max-w-xs mx-auto")},m(t,r){q(t,e,r)},p:X,i:X,o:X,d(t){t&&j(e)}}}function _v(n){let e;return{c(){e=O("div"),e.textContent="No games yet. Start a new one!",b(e,"class","text-center text-gray-500 mt-8")},m(t,r){q(t,e,r)},p:X,i:X,o:X,d(t){t&&j(e)}}}function yv(n){let e,t,r=n[3]&&zc(n);return{c(){e=O("div"),r&&r.c(),b(e,"class","flex flex-col gap-6 w-full max-w-xs mx-auto")},m(s,i){q(s,e,i),r&&r.m(e,null),t=!0},p(s,i){s[3]?r?(r.p(s,i),i&8&&$(r,1)):(r=zc(s),r.c(),$(r,1),r.m(e,null)):r&&(Fe(),te(r,1,1,()=>{r=null}),Ue())},i(s){t||($(r),t=!0)},o(s){te(r),t=!1},d(s){s&&j(e),r&&r.d()}}}function zc(n){let e=n[6].filter(n[9]).length>0,t,r=n[6].filter(n[8]).length>0,s,i,a=e&&Hc(n),l=r&&Gc(n);return{c(){a&&a.c(),t=Y(),l&&l.c(),s=Tt()},m(c,u){a&&a.m(c,u),q(c,t,u),l&&l.m(c,u),q(c,s,u),i=!0},p(c,u){u&72&&(e=c[6].filter(c[9]).length>0),e?a?(a.p(c,u),u&72&&$(a,1)):(a=Hc(c),a.c(),$(a,1),a.m(t.parentNode,t)):a&&(Fe(),te(a,1,1,()=>{a=null}),Ue()),u&72&&(r=c[6].filter(c[8]).length>0),r?l?(l.p(c,u),u&72&&$(l,1)):(l=Gc(c),l.c(),$(l,1),l.m(s.parentNode,s)):l&&(Fe(),te(l,1,1,()=>{l=null}),Ue())},i(c){i||($(a),$(l),i=!0)},o(c){te(a),te(l),i=!1},d(c){c&&(j(t),j(s)),a&&a.d(c),l&&l.d(c)}}}function Hc(n){let e,t,r,s,i=Re(n[6].filter(n[10])),a=[];for(let c=0;c<i.length;c+=1)a[c]=Wc(qc(n,i,c));const l=c=>te(a[c],1,1,()=>{a[c]=null});return{c(){e=O("div"),t=O("div"),t.textContent="Your Turn!",r=Y();for(let c=0;c<a.length;c+=1)a[c].c();b(t,"class","text-center text-2xl font-bold mb-2 animate-gradient-text svelte-1by7pf7"),b(e,"class","rounded-2xl bg-white/90 shadow-md p-4")},m(c,u){q(c,e,u),V(e,t),V(e,r);for(let d=0;d<a.length;d+=1)a[d]&&a[d].m(e,null);s=!0},p(c,u){if(u&73){i=Re(c[6].filter(c[10]));let d;for(d=0;d<i.length;d+=1){const m=qc(c,i,d);a[d]?(a[d].p(m,u),$(a[d],1)):(a[d]=Wc(m),a[d].c(),$(a[d],1),a[d].m(e,null))}for(Fe(),d=i.length;d<a.length;d+=1)l(d);Ue()}},i(c){if(!s){for(let u=0;u<i.length;u+=1)$(a[u]);s=!0}},o(c){a=a.filter(Boolean);for(let u=0;u<a.length;u+=1)te(a[u]);s=!1},d(c){c&&j(e),pt(a,c)}}}function Wc(n){let e,t;return e=new $f({props:{title:"",games:[n[16]],currentUserName:n[3],navigate:n[0]}}),{c(){gt(e.$$.fragment)},m(r,s){at(e,r,s),t=!0},p(r,s){const i={};s&72&&(i.games=[r[16]]),s&8&&(i.currentUserName=r[3]),s&1&&(i.navigate=r[0]),e.$set(i)},i(r){t||($(e.$$.fragment,r),t=!0)},o(r){te(e.$$.fragment,r),t=!1},d(r){lt(e,r)}}}function Gc(n){let e,t,r,s,i=Re(n[6].filter(n[11])),a=[];for(let c=0;c<i.length;c+=1)a[c]=Kc(jc(n,i,c));const l=c=>te(a[c],1,1,()=>{a[c]=null});return{c(){e=O("div"),t=O("div"),t.textContent="Waiting",r=Y();for(let c=0;c<a.length;c+=1)a[c].c();b(t,"class","text-center text-secondary/60 font-semibold text-xs mb-2"),b(e,"class","rounded-2xl bg-white/60 shadow-sm p-4 opacity-60")},m(c,u){q(c,e,u),V(e,t),V(e,r);for(let d=0;d<a.length;d+=1)a[d]&&a[d].m(e,null);s=!0},p(c,u){if(u&73){i=Re(c[6].filter(c[11]));let d;for(d=0;d<i.length;d+=1){const m=jc(c,i,d);a[d]?(a[d].p(m,u),$(a[d],1)):(a[d]=Kc(m),a[d].c(),$(a[d],1),a[d].m(e,null))}for(Fe(),d=i.length;d<a.length;d+=1)l(d);Ue()}},i(c){if(!s){for(let u=0;u<i.length;u+=1)$(a[u]);s=!0}},o(c){a=a.filter(Boolean);for(let u=0;u<a.length;u+=1)te(a[u]);s=!1},d(c){c&&j(e),pt(a,c)}}}function Kc(n){let e,t;return e=new $f({props:{title:"",games:[n[16]],currentUserName:n[3],navigate:n[0]}}),{c(){gt(e.$$.fragment)},m(r,s){at(e,r,s),t=!0},p(r,s){const i={};s&72&&(i.games=[r[16]]),s&8&&(i.currentUserName=r[3]),s&1&&(i.navigate=r[0]),e.$set(i)},i(r){t||($(e.$$.fragment,r),t=!0)},o(r){te(e.$$.fragment,r),t=!1},d(r){lt(e,r)}}}function wv(n){let e,t,r,s,i,a,l;const c=[gv,pv,mv],u=[];function d(m,p){return m[2]||m[1]&&!m[5]?0:m[1]?1:2}return i=d(n),a=u[i]=c[i](n),{c(){e=O("div"),t=O("img"),s=Y(),a.c(),vt(t.src,r=Qf)||b(t,"src",r),b(t,"alt","drawIt"),b(t,"class","w-32 mx-auto mb-6 drop-shadow-md"),b(e,"class","min-h-[80vh] flex flex-col items-center justify-center px-2 py-6")},m(m,p){q(m,e,p),V(e,t),V(e,s),u[i].m(e,null),l=!0},p(m,[p]){let _=i;i=d(m),i===_?u[i].p(m,p):(Fe(),te(u[_],1,1,()=>{u[_]=null}),Ue(),a=u[i],a?a.p(m,p):(a=u[i]=c[i](m),a.c()),$(a,1),a.m(e,null))},i(m){l||($(a),l=!0)},o(m){te(a),l=!1},d(m){m&&j(e),u[i].d()}}}function vv(n,e,t){let r,s,i;Ye(n,Ts,D=>t(5,r=D)),Ye(n,et,D=>t(1,s=D)),Ye(n,zr,D=>t(6,i=D));let a=!0,l=null,c="",{navigate:u}=e;async function d(D){D.trim()&&/^[a-zA-Z0-9]+$/.test(D)?(t(2,a=!0),await Ww(D.trim()),t(2,a=!1),window.location.reload()):D.trim()}qr(async()=>{if(t(2,a=!0),ht(Ts,r=!1,r),s&&s.name)if(!await Gw(s.name))ht(et,s=null,s);else{const L=(await Kf(s.name)).flatMap(U=>U.users.filter(ne=>ne!==s.name));await Hw(L),ht(Ts,r=!0,r)}t(2,a=!1)});const m=D=>As(D,l)==="waiting",p=D=>["draw","guess"].includes(As(D,l)),_=D=>["draw","guess"].includes(As(D,l)),A=D=>As(D,l)==="waiting";function S(){c=this.value,t(4,c)}const C=()=>d(c);return n.$$set=D=>{"navigate"in D&&t(0,u=D.navigate)},n.$$.update=()=>{n.$$.dirty&2&&t(3,l=s?s.name:null)},[u,s,a,l,c,r,i,d,m,p,_,A,S,C]}class Av extends kt{constructor(e){super(),Ct(this,e,vv,wv,Et,{navigate:0})}}function $c(n,e,t){const r=n.slice();return r[28]=e[t],r}function Qc(n,e,t){const r=n.slice();return r[31]=e[t],r}function Xc(n){let e,t,r,s;function i(){return n[13](n[31])}return{c(){e=O("button"),b(e,"class",t="w-8 h-8 rounded-full border-2 "+(n[1]===n[31]?"border-primary":"")),Qi(e,"background-color",n[31])},m(a,l){q(a,e,l),r||(s=_e(e,"click",i),r=!0)},p(a,l){n=a,l[0]&2&&t!==(t="w-8 h-8 rounded-full border-2 "+(n[1]===n[31]?"border-primary":""))&&b(e,"class",t)},d(a){a&&j(e),r=!1,s()}}}function Jc(n){let e,t,r,s,i;function a(){return n[14](n[28])}return{c(){e=O("button"),t=O("div"),b(t,"class","w-4 h-4 rounded-full bg-black mx-auto"),Qi(t,"width",n[28]+"px"),Qi(t,"height",n[28]+"px"),b(e,"class",r="w-8 h-8 rounded-full border-2 bg-white "+(n[0]===n[28]?"border-primary":"border-transparent"))},m(l,c){q(l,e,c),V(e,t),s||(i=_e(e,"click",a),s=!0)},p(l,c){n=l,c[0]&1&&r!==(r="w-8 h-8 rounded-full border-2 bg-white "+(n[0]===n[28]?"border-primary":"border-transparent"))&&b(e,"class",r)},d(l){l&&j(e),s=!1,i()}}}function Ev(n){let e,t,r,s,i,a,l,c,u,d,m=Re(n[6]),p=[];for(let S=0;S<m.length;S+=1)p[S]=Xc(Qc(n,m,S));let _=Re(n[7]),A=[];for(let S=0;S<_.length;S+=1)A[S]=Jc($c(n,_,S));return{c(){e=O("div"),t=O("div");for(let S=0;S<p.length;S+=1)p[S].c();r=Y(),s=O("div");for(let S=0;S<A.length;S+=1)A[S].c();i=Y(),a=O("button"),a.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"></path></svg>',l=Y(),c=O("canvas"),b(t,"class","flex gap-2 justify-start items-center flex-wrap"),b(a,"class","w-8 h-8 rounded-full border-2 bg-white border-transparent"),b(s,"class","flex gap-2 justify-start items-center"),b(c,"class","border-2 border-gray-300 rounded-lg touch-none w-full aspect-square"),b(e,"class","flex flex-col gap-2 w-full")},m(S,C){q(S,e,C),V(e,t);for(let D=0;D<p.length;D+=1)p[D]&&p[D].m(t,null);V(e,r),V(e,s);for(let D=0;D<A.length;D+=1)A[D]&&A[D].m(s,null);V(s,i),V(s,a),V(e,l),V(e,c),n[15](c),n[16](e),u||(d=[_e(a,"click",n[2]),_e(c,"mousedown",n[8]),_e(c,"mousemove",n[9]),_e(c,"mouseup",n[10]),_e(c,"mouseleave",n[10]),_e(c,"touchstart",n[8]),_e(c,"touchmove",n[9]),_e(c,"touchend",n[10],{passive:!0})],u=!0)},p(S,C){if(C[0]&82){m=Re(S[6]);let D;for(D=0;D<m.length;D+=1){const x=Qc(S,m,D);p[D]?p[D].p(x,C):(p[D]=Xc(x),p[D].c(),p[D].m(t,null))}for(;D<p.length;D+=1)p[D].d(1);p.length=m.length}if(C[0]&145){_=Re(S[7]);let D;for(D=0;D<_.length;D+=1){const x=$c(S,_,D);A[D]?A[D].p(x,C):(A[D]=Jc(x),A[D].c(),A[D].m(s,i))}for(;D<A.length;D+=1)A[D].d(1);A.length=_.length}},i:X,o:X,d(S){S&&j(e),pt(p,S),pt(A,S),n[15](null),n[16](null),u=!1,At(d)}}}function Tv(n,e,t){let r=400,s=400,{lineWidth:i=5}=e,{strokeColor:a="#000000"}=e,l,c,u=!1,d,m=[],p=null;const _=["#E74C3C","#E67E22","#F1C40F","#2ECC71","#1ABC9C","#3498DB","#4834D4","#9B59B6","#D291BC","#F5E6DE","#D2A679","#8D5524","#000000","#7F8C8D","#FFFFFF"],A=[2,5,15,25];function S(){if(!l)return;const H=window.devicePixelRatio||1;t(3,l.width=r*H,l),t(3,l.height=s*H,l),t(3,l.style.width=r+"px",l),t(3,l.style.height=s+"px",l),t(4,c=l.getContext("2d")),c.setTransform(1,0,0,1,0,0),c.scale(H,H),t(4,c.lineCap="round",c),t(4,c.lineJoin="round",c),t(4,c.strokeStyle=a,c),t(4,c.lineWidth=i,c),t(4,c.fillStyle="#FFFFFF",c),c.fillRect(0,0,r,s)}function C(H){u=!0;const Ee=J(H);p={color:a,width:i,points:[Ee]}}function D(H){if(!u||!p)return;const Ee=J(H);p.points.push(Ee),L()}function x(){u&&p&&(m.push(p),p=null),u=!1}function L(){c.clearRect(0,0,r,s),t(4,c.fillStyle="#FFFFFF",c),c.fillRect(0,0,r,s);for(const H of m)U(H);p&&U(p)}function U(H){if(!(H.points.length<2)){c.save(),t(4,c.strokeStyle=H.color,c),t(4,c.lineWidth=H.width,c),c.beginPath(),c.moveTo(H.points[0].x,H.points[0].y);for(let Ee=1;Ee<H.points.length;Ee++)c.lineTo(H.points[Ee].x,H.points[Ee].y);c.stroke(),c.restore()}}function ne(){m.length>0&&(m.pop(),L())}function J(H){const Ee=l.getBoundingClientRect();if("touches"in H&&H.touches.length>0){const St=H.touches[0];return{x:St.clientX-Ee.left,y:St.clientY-Ee.top}}return{x:H.clientX-Ee.left,y:H.clientY-Ee.top}}function E(){m=[],p=null,t(4,c.fillStyle="#FFFFFF",c),c.fillRect(0,0,r,s)}function y(){return l.toDataURL("image/png")}function v(){!d||!l||(r=d.clientWidth,s=r,S(),L())}qr(()=>{S(),L();const H=new ResizeObserver(()=>{v()});return d&&H.observe(d),()=>{H.disconnect()}});const T=H=>{t(1,a=H),t(4,c.strokeStyle=H,c)},I=H=>{t(0,i=H),t(4,c.lineWidth=H,c)};function k(H){Mr[H?"unshift":"push"](()=>{l=H,t(3,l)})}function w(H){Mr[H?"unshift":"push"](()=>{d=H,t(5,d)})}return n.$$set=H=>{"lineWidth"in H&&t(0,i=H.lineWidth),"strokeColor"in H&&t(1,a=H.strokeColor)},[i,a,ne,l,c,d,_,A,C,D,x,E,y,T,I,k,w]}class bv extends kt{constructor(e){super(),Ct(this,e,Tv,Ev,Et,{lineWidth:0,strokeColor:1,undo:2,clearCanvas:11,getImageData:12},null,[-1,-1])}get undo(){return this.$$.ctx[2]}get clearCanvas(){return this.$$.ctx[11]}get getImageData(){return this.$$.ctx[12]}}const ga="data:image/gif;base64,R0lGODdhUABQAHcAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAUABQAIIAAAAGBgjxmRH/0Cz/+FUAAAAAAAAAAAAD/wi63B0wykmrlS7rza//HieOGWieAamSaHut8ObOU2w/dH7vQK7zNh8NGBS6iDHjEYmzEJ7QqHRKrUZDN491y91ii86uePxNXsZobhmmTbun61X7TSfEVfO6+8466998I3l/ZC9ZfoRogT2IVAOPkJGSk5SVkQKYmZo5W5aen56aogKcVqCnqAOjmzSdqa+Vq5mlVbC2krKYtI63vbmkraa9t7+7U8PEucZSyLbFwbXNr88zrtKo1C7W16DZLdvcocrQvOGf3ijg5pToJ+rruOPVwvCx8tr09ZPtJu/6qve+5fsHiR8If/oMfkBYT+EgZgTjyVoWJaLEVRShWLwUMKzdwIgOGx3b+ChkmGgkTVZgCE8lBZbrXE6AaU6mBJrhbEbAyU0nBJ7XfAYAKk0o0WZGPxJMinIj03JOO7pT+k9hhwu/smrFaAhMha1gty66aiGsWakRdng4y1bUWBlY28p9q2Gt3LZ0S8S9ezavA7t8zfpt8jWw4K5myhoOOxiPEhRM5Dw+EdnxZBCV+1z+kFnQZs6dyX62EFr0aAql4Z6ukLruatat/75GfSMBACH5BAkKAAAALAAAAABQAFAAggAAAAYGCPGZEf/QLP/4VQAAAAAAAAAAAAP/CLrc/irISWuFOOudrfdcKI7RZ0pkqjrnub5qa8K0KH91rt2g7rO8y29YCk6IRCMFGTMRntCoVOpiPk7TbLZqbWC14Ce3u/iGtWMywHyepsnsdvTdjcvFM3XZeafm9Wt8fVB0VnZ3hTCHUAONjo+QkAKTlJWJO4JZkZublZ4Clx2ZU5yljp+WfySLT6amqJShGKwErqWwk7IQtLacuKCqI7y9kb+6V6NSxMW4x0AfYcuSzcE2yVHSj8bVIcPZA9s4TdBg343hPSne2egWK+vS7ULq14zm8kvjHtH31OL05LSYA+cv3ap6rfrBcuYFYS2FqBgygLcM3xF9Fvh9s4gC0mMFjewKuvNIAWQ8kfMOBtQE8ZPEPStJtfT0ssi+cjNT/VN5U2DOWNw4UCTGMcA7hwOLHo2p7GeuoBuG9lJKcoLJiijzAezJcmPWi1sz4vS6ECompticAtspDKnamoHQ2iMb0awouQnpurQ7y61emnx3+Q1Zlm2OE7+oAkKcuLBBNYwb7zVcx4TkupQNWb4MODOTyJyfekYCOjTcpR5C63wMZ7Pqtawrf3gtOjaghkqM3kZtZDfvIL6ryggeFjjxtrmPI1ei3Fry5kJz64Z+lvmQBAAh+QQFCgAAACwAAAAAUABQAIAAAAAGBggC04SPqWvhD2NktNpbpda4+99sogOWpjKO52qmIgt77hbX1szZOopP+x/qPYBAIYT4Mw6ROiWJaXMGoFEntSa9xrJaFrd7+oJL4vGnbO6g05c1O2N9y+JyjLvOU+Lt9D3l7hdkFAinR8gAGJjot7jXiPdYFyk3+VbJdpmWabY51gn22RWqNXpVSnUKlcq0itRK9FrUd4gQmzRLKyiUmzfIW4uba7sz3BRMW1xl+Kvbw3yQjHV8GL01TVgNk+11rdjN+O0YDjkuWU55bpmOua7ZzvleUQAAIfkEBQoAAAAsAAAAAFAAUACCAAAABgYI8ZkR/9As//hVAAAAAAAAAAAAA/8Iutz+MMpJq7046827/2AojmRpnmiqrmzrvnAgzzRh33ie03wQ9zOdUAic/YrD5K0oOwKVSqbvJYUmpc6edYilMrdEZpYH1nVd1TLu3EqrbWyRVECv2wf4vH6/j4o3c3aCfISEfkUcgYJ1hY15h0CJTIt3jo2QPZJFlIyWhZg8mkCcdJ6fV38aipSmhqiIgJOkrXygNKI9pAK0fa+RsZuzvI++mcCjwsMDtkbHucnDzE3OPLrKeNJTqrKc18vFodQ01tfZuNXQvObiM+TK69vB3eXgt+wy7tH1zfHI8+/7pvV79k8fl1QZVi3yBi8hN1b0DsIaiK6guoDaHMqDCFCl4i+K49LRaohB4aCIYSZq9MfRYMqPKwm2vOjRGMh2IluRvGCyUseXNmNWnDkS47mQFovWDHcTX05TOy307PTTDMKSDxeitKoS60atVXdc5Zn1ZNg1Y6WW9emSK0yvLMG2Fds1xFRddOKsuItXrwq+uvymAExKMArCnAyfQExJsQnGixyXgCxIMgnKdiyPwFxHM4zPoEOLHk26tOnTqFOrXs26NekEACH5BAkKAAAALAAAAABQAFAAggAAAAYGCPGZEf/QLP/4VQAAAAAAAAAAAAP/CLrcHTDKSauVLuvNr/8eJ44ZaJ4BqZJoe63w5s5TbD90fu9ArvM2Hw0YFLqIMeMRibMQntCodEqtRkM3j3XL3WKLzq54/E1exmhuGaZNu6frVftNJ8RV87r7zjrr33wjeX9kL1l+hGiBPRcCjo+QA5KTlJWWl5iUXjSQnQKZoKGgmzOekaKoqaQupo+pr6GrLa2OsLaXsii0n7e9krknu76+wCbCw7fFIMfIsMofzM2qVjnR0qLPHtbXo9SctNzTVdXg4djepeXm3ePfreux6Kzq8Ljys/T1ldmN+fqT/Cxs+zcgYIWB/wxSQKhP4QSG9RxKgAhPYgSK6yxCwGhOqmMAjuE8guQm0h/Bku8I7runy2RClsFcNoRpTGZEmstsVsQJTWdGntp8dgTaL6VKgEQFCg2Z9OBSkk0XPr32rEPRXVizQlpkVanWr1i5yrgKtmwnsRqCml37CG0JsmzLunWgNq7ZuU2c2r1rCIzevWDxMqgLWKvgBYQLh+3LRIGSFo3xPD4Ruc9kEJUFXcacuetmxp3pfj4MZDRpHqZBhx6cusLqtK0p7EgAACH5BAkKAAAALAAAAABQAFAAggAAAAYGCPGZEf/QLP/4VQAAAAAAAAAAAAP/CLrc/irISWuFOOudrfdcKI7RZ0pkqjrnub5qa8K0KH91rt2g7rO8y29YCk6IRCMFGTMRntCoVOpiPk7TbLZqbWC14Ce3u/iGtWMywHyepsnsdvTdjcvFM3XZeafm9Wt8fVB0VnZ3hTAnAoyNjgOQkZKTk2GJOyaOmgKUnZ2WfySLm42eppGgOE0fpKWnpqk9KaOtr7Bglx2ZrZy2n7ihI7Skvr9owTa7tcWVwKqzysTMkrEWK8Ob09TOsqLR2dqQ1ULQrLzh4tzWqx68veHjS+wW7ugD8UfzFfXo+Cj6FPjBU0fOm7llA489M9juXD+C8so1RKjNX4Br3zTZs4jx2KC0hFuQhcCm8aHCbsIyPjIZcmFKj+BAuhHJgeRKmX5cJoNZEuccmhtsuvJJCCgmnjcrQswnkZ5Donh0jlQ5VOnJdU33PbXaEuXOiR+5zpRakyqjjUv/ZQ24dRpHgBMEis3pdSrSqm7TXoQrQW7eqwVfgo059yfZoGbfFS56+Ojgnouj1qUh1B2jXEMqW8b8Q7M7zj488wKtQ3Qr0jlMk0JdQ/Um1pQTfzaaRPZo2pltn8YNSAlTQHxbAH/hW+1whkaOB4etvPhe5YKTQ48eZDp1Hta/Sv+RAAAh+QQFCgAAACwAAAAAUABQAIAAAAAGBggC04SPqWvhD2NktNpbpda4+99sogOWpjKO52qmIgt77hbX1szZOopP+x/qPYBAIYT4Mw6ROiWJaXMGoFEntSa9xrJaFrd7+oJL4vGnbO6g05c1O2N9y+JyjLvOU+Lt9D3l7hdkFAinR8gAGJjot7jXiPdYFyk3+VbJdpmWabY51gn22RWqNXpVSnUKlcq0itRK9FrUd4gQmzRLKyiUmzfIW4uba7sz3BRMW1xl+Kvbw3yQjHV8GL01TVgNk+11rdjN+O0YDjkuWU55bpmOua7ZzvleUQAAIfkEBQoAAAAsAAAAAFAAUACCAAAABgYI8ZkR/9As//hVAAAAAAAAAAAAA/8Iutz+MMpJq7046827/2AojmRpnmiqrmzrvnAgzzRh33ie03wQ9zOdUAic/YrD5K0oOwKVSqbvJYUmpc6edYilMrdEZpYH1nVd1TLu3EqrbWyRWzio2+94vGDP78cvczp5g4N9hgJ/FoE5hI12h35iG4s4jo6QfIkVlDeWjZh7mhScNp6EoIiSGqQEpoWgohOsrnmosRKztHe2qhm5unW8RRy/wMJAxF9JwI+wvRjFusc9yUjLzAPTPNVP18zaNNxa3sbOw5PKQ9jZ5sjo1urY4Ebv3fHf7dT14/flmLcRotGa12QfGXLS8m0zWAPhQIXhGAZx6IrglFXp6MiDSA+oIzyN+P49A5RR0EaR5zzaA+kPEkAIAityLKiSH8uEKN3VPNgPp8uRikoyOvkzpS+hlYgeevkgpimL4njefJhT386GPakW1Xn0o8mQW612Xfm15VKgm5B2UmqIqQOnnqCWkIJKLhomdWdebIM3b9iFd4v4/RsxMJDBZ42yoIs4kuIVjBuHQosismS3ISw3xgxCM2LOMEKLHk26tOnTqFOrXs26tevXoxMAADs=";function Yc(n,e,t){const r=n.slice();return r[29]=e[t],r}function Zc(n,e,t){const r=n.slice();return r[32]=e[t],r}function eu(n,e,t){const r=n.slice();return r[12]=e[t],r}function Iv(n){let e,t,r,s;const i=[kv,Cv],a=[];function l(c,u){return c[1]?1:0}return t=l(n),r=a[t]=i[t](n),{c(){e=O("div"),r.c(),b(e,"class","flex flex-col items-center gap-6")},m(c,u){q(c,e,u),a[t].m(e,null),s=!0},p(c,u){let d=t;t=l(c),t===d?a[t].p(c,u):(Fe(),te(a[d],1,1,()=>{a[d]=null}),Ue(),r=a[t],r?r.p(c,u):(r=a[t]=i[t](c),r.c()),$(r,1),r.m(e,null))},i(c){s||($(r),s=!0)},o(c){te(r),s=!1},d(c){c&&j(e),a[t].d()}}}function Rv(n){let e,t,r,s,i,a,l,c,u,d;function m(U,ne){return U[0].data&&U[0].data.length>10?Nv:Dv}let p=m(n),_=p(n);function A(U,ne){return U[9]?Ov:Mv}let S=A(n),C=S(n),D=Re(n[0].guesses),x=[];for(let U=0;U<D.length;U+=1)x[U]=lu(eu(n,D,U));let L=!n[0].guessed&&n[2].name!==n[0].artist&&cu(n);return{c(){e=O("div"),t=O("div"),_.c(),r=Y(),s=O("div"),i=O("h2"),i.textContent="What's this?",a=Y(),l=O("p"),C.c(),c=Y(),u=O("div");for(let U=0;U<x.length;U+=1)x[U].c();d=Y(),L&&L.c(),b(t,"class","bg-white/90 p-2 rounded-lg w-full max-w-[min(90vw,300px)] aspect-square flex items-center justify-center mx-auto border-2 border-primary"),b(i,"class","text-xl font-bold mb-2 text-primary"),b(l,"class","mb-4"),b(u,"class","flex flex-wrap gap-2 w-full overflow-y-auto"),b(s,"class","w-full max-w-[min(90vw,400px)]"),b(e,"class","flex flex-col items-center gap-6")},m(U,ne){q(U,e,ne),V(e,t),_.m(t,null),V(e,r),V(e,s),V(s,i),V(s,a),V(s,l),C.m(l,null),V(s,c),V(s,u);for(let J=0;J<x.length;J+=1)x[J]&&x[J].m(u,null);V(e,d),L&&L.m(e,null)},p(U,ne){if(p===(p=m(U))&&_?_.p(U,ne):(_.d(1),_=p(U),_&&(_.c(),_.m(t,null))),S===(S=A(U))&&C?C.p(U,ne):(C.d(1),C=S(U),C&&(C.c(),C.m(l,null))),ne[0]&1){D=Re(U[0].guesses);let J;for(J=0;J<D.length;J+=1){const E=eu(U,D,J);x[J]?x[J].p(E,ne):(x[J]=lu(E),x[J].c(),x[J].m(u,null))}for(;J<x.length;J+=1)x[J].d(1);x.length=D.length}!U[0].guessed&&U[2].name!==U[0].artist?L?L.p(U,ne):(L=cu(U),L.c(),L.m(e,null)):L&&(L.d(1),L=null)},i:X,o:X,d(U){U&&j(e),_.d(),C.d(),pt(x,U),L&&L.d()}}}function Cv(n){let e,t,r,s,i=n[1].secretWord.toUpperCase()+"",a,l,c,u,d,m,p,_,A,S,C=n[4]?"Posting, great work...":"Submit Drawing",D,x,L,U,ne,J={};return u=new bv({props:J}),n[22](u),{c(){e=O("div"),t=O("h2"),r=se("Ok, let's draw "),s=O("span"),a=se(i),l=Y(),c=O("div"),gt(u.$$.fragment),d=Y(),m=O("div"),p=O("button"),p.textContent="Clear",_=Y(),A=O("button"),S=O("span"),D=se(C),b(s,"class","font-bold text-black"),b(t,"class","text-xl mb-4 text-black/60"),b(p,"class","btn btn-outline flex-1"),b(A,"class",x=n[4]?"btn-disabled flex-1":"btn btn-secondary flex-1 flex flex-row items-center justify-center text-center border border-secondary"),b(m,"class","flex flex-row gap-2 mt-4 w-full"),b(c,"class","w-full aspect-square max-w-[min(90vw,400px)] mx-auto"),b(e,"class","w-full h-screen")},m(E,y){q(E,e,y),V(e,t),V(t,r),V(t,s),V(s,a),V(e,l),V(e,c),at(u,c,null),V(c,d),V(c,m),V(m,p),V(m,_),V(m,A),V(A,S),V(S,D),L=!0,U||(ne=[_e(p,"click",n[23]),_e(A,"click",n[24])],U=!0)},p(E,y){(!L||y[0]&2)&&i!==(i=E[1].secretWord.toUpperCase()+"")&&ve(a,i);const v={};u.$set(v),(!L||y[0]&16)&&C!==(C=E[4]?"Posting, great work...":"Submit Drawing")&&ve(D,C),(!L||y[0]&16&&x!==(x=E[4]?"btn-disabled flex-1":"btn btn-secondary flex-1 flex flex-row items-center justify-center text-center border border-secondary"))&&b(A,"class",x)},i(E){L||($(u.$$.fragment,E),L=!0)},o(E){te(u.$$.fragment,E),L=!1},d(E){E&&j(e),n[22](null),lt(u),U=!1,At(ne)}}}function kv(n){let e,t,r,s,i,a,l,c=n[3].users.filter(n[19])[0]+"",u,d,m,p,_,A={ctx:n,current:null,token:null,hasCatch:!1,pending:Vv,then:Pv,catch:Sv,value:28};return hl(_=n[7],A),{c(){e=O("div"),t=O("h2"),t.textContent="Pick a word to draw",r=Y(),s=O("p"),i=O("span"),a=se("You get coins as the artist, and "),l=O("span"),u=se(c),d=se(" gets coins for guessing correctly!"),m=Y(),p=O("div"),A.block.c(),b(t,"class","text-xl font-bold mb-2 text-primary"),b(l,"class","font-bold"),b(s,"class","mb-6 text-accent italic tooltip flex flex-row gap-2 text-xs"),b(p,"class","flex flex-col gap-4"),b(e,"class","w-full flex flex-col items-center")},m(S,C){q(S,e,C),V(e,t),V(e,r),V(e,s),V(s,i),V(i,a),V(i,l),V(l,u),V(i,d),V(e,m),V(e,p),A.block.m(p,A.anchor=null),A.mount=()=>p,A.anchor=null},p(S,C){n=S,C[0]&12&&c!==(c=n[3].users.filter(n[19])[0]+"")&&ve(u,c),A.ctx=n,C[0]&128&&_!==(_=n[7])&&hl(_,A)||Pd(A,n,C)},i:X,o:X,d(S){S&&j(e),A.block.d(),A.token=null,A=null}}}function Sv(n){return{c:X,m:X,p:X,d:X}}function Pv(n){let e,t,r,s=n[8]?"Refreshing...":"Refresh Words",i,a,l,c,u,d=Re(n[28]),m=[];for(let _=0;_<d.length;_+=1)m[_]=nu(Yc(n,d,_));let p=!n[8]&&ru();return{c(){for(let _=0;_<m.length;_+=1)m[_].c();e=Y(),t=O("button"),r=O("span"),i=se(s),a=Y(),p&&p.c(),b(t,"class",l="btn btn-outline w-72 flex flex-row items-center justify-center gap-2 "+(!n[2]||n[2].coins<5||n[8]?"opacity-20 cursor-not-allowed":""))},m(_,A){for(let S=0;S<m.length;S+=1)m[S]&&m[S].m(_,A);q(_,e,A),q(_,t,A),V(t,r),V(r,i),V(t,a),p&&p.m(t,null),c||(u=_e(t,"click",n[21]),c=!0)},p(_,A){if(A[0]&142){d=Re(_[28]);let S;for(S=0;S<d.length;S+=1){const C=Yc(_,d,S);m[S]?m[S].p(C,A):(m[S]=nu(C),m[S].c(),m[S].m(e.parentNode,e))}for(;S<m.length;S+=1)m[S].d(1);m.length=d.length}A[0]&256&&s!==(s=_[8]?"Refreshing...":"Refresh Words")&&ve(i,s),_[8]?p&&(p.d(1),p=null):p||(p=ru(),p.c(),p.m(t,null)),A[0]&260&&l!==(l="btn btn-outline w-72 flex flex-row items-center justify-center gap-2 "+(!_[2]||_[2].coins<5||_[8]?"opacity-20 cursor-not-allowed":""))&&b(t,"class",l)},d(_){_&&(j(e),j(t)),pt(m,_),p&&p.d(),c=!1,u()}}}function tu(n){let e,t;return{c(){e=O("img"),vt(e.src,t=ga)||b(e,"src",t),b(e,"class","w-4 h-4")},m(r,s){q(r,e,s)},p:X,d(r){r&&j(e)}}}function nu(n){let e,t=n[29].secretWord.toUpperCase()+"",r,s,i,a,l,c=Re(Array(n[29].coins)),u=[];for(let m=0;m<c.length;m+=1)u[m]=tu(Zc(n,c,m));function d(){return n[20](n[29])}return{c(){e=O("button"),r=se(t),s=Y(),i=O("span");for(let m=0;m<u.length;m+=1)u[m].c();b(i,"class","flex items-center gap-1"),b(e,"class","btn btn-secondary flex flex-row items-center justify-between w-72 border border-secondary")},m(m,p){q(m,e,p),V(e,r),V(e,s),V(e,i);for(let _=0;_<u.length;_+=1)u[_]&&u[_].m(i,null);a||(l=_e(e,"click",d),a=!0)},p(m,p){if(n=m,p[0]&128&&t!==(t=n[29].secretWord.toUpperCase()+"")&&ve(r,t),p[0]&128){c=Re(Array(n[29].coins));let _;for(_=0;_<c.length;_+=1){const A=Zc(n,c,_);u[_]?u[_].p(A,p):(u[_]=tu(),u[_].c(),u[_].m(i,null))}for(;_<u.length;_+=1)u[_].d(1);u.length=c.length}},d(m){m&&j(e),pt(u,m),a=!1,l()}}}function ru(n){let e;return{c(){e=O("span"),e.innerHTML=`(5 <img src="${ga}" class="w-4 h-4 inline"/>)`,b(e,"class","text-xs text-black/60")},m(t,r){q(t,e,r)},d(t){t&&j(e)}}}function Vv(n){return{c:X,m:X,p:X,d:X}}function Dv(n){let e;return{c(){e=O("span"),e.textContent="No drawing yet",b(e,"class","text-accent")},m(t,r){q(t,e,r)},p:X,d(t){t&&j(e)}}}function Nv(n){let e,t;return{c(){e=O("img"),vt(e.src,t=`${n[0].data}`)||b(e,"src",t),b(e,"class","w-full h-full object-contain"),b(e,"alt","Current drawing")},m(r,s){q(r,e,s)},p(r,s){s[0]&1&&!vt(e.src,t=`${r[0].data}`)&&b(e,"src",t)},d(r){r&&j(e)}}}function Mv(n){let e,t,r=n[0].artist+"",s,i,a,l=(n[0].hintPurchased||n[0].superHintPurchased)&&su(n);return{c(){e=se("Drawn by "),t=O("span"),s=se(r),i=Y(),l&&l.c(),a=Tt(),b(t,"class","font-bold text-secondary")},m(c,u){q(c,e,u),q(c,t,u),V(t,s),q(c,i,u),l&&l.m(c,u),q(c,a,u)},p(c,u){u[0]&1&&r!==(r=c[0].artist+"")&&ve(s,r),c[0].hintPurchased||c[0].superHintPurchased?l?l.p(c,u):(l=su(c),l.c(),l.m(a.parentNode,a)):l&&(l.d(1),l=null)},d(c){c&&(j(e),j(t),j(i),j(a)),l&&l.d(c)}}}function Ov(n){let e,t,r=n[0].secretWord+"",s;return{c(){e=se("You drew this. The secret word is "),t=O("span"),s=se(r),b(t,"class","font-bold text-secondary")},m(i,a){q(i,e,a),q(i,t,a),V(t,s)},p(i,a){a[0]&1&&r!==(r=i[0].secretWord+"")&&ve(s,r)},d(i){i&&(j(e),j(t))}}}function su(n){let e,t,r=n[0].hintPurchased&&iu(n),s=n[0].superHintPurchased&&ou(n);return{c(){e=O("ul"),r&&r.c(),t=Y(),s&&s.c(),b(e,"class","pl-4 mt-1 space-y-1")},m(i,a){q(i,e,a),r&&r.m(e,null),V(e,t),s&&s.m(e,null)},p(i,a){i[0].hintPurchased?r?r.p(i,a):(r=iu(i),r.c(),r.m(e,t)):r&&(r.d(1),r=null),i[0].superHintPurchased?s?s.p(i,a):(s=ou(i),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(i){i&&j(e),r&&r.d(),s&&s.d()}}}function iu(n){let e,t=Vc(n[0])+"",r;return{c(){e=O("li"),r=se(t),b(e,"class","text-xs list-disc text-accent/70")},m(s,i){q(s,e,i),V(e,r)},p(s,i){i[0]&1&&t!==(t=Vc(s[0])+"")&&ve(r,t)},d(s){s&&j(e)}}}function ou(n){let e,t=Dc(n[0])+"",r;return{c(){e=O("li"),r=se(t),b(e,"class","text-xs list-disc text-accent/70")},m(s,i){q(s,e,i),V(e,r)},p(s,i){i[0]&1&&t!==(t=Dc(s[0])+"")&&ve(r,t)},d(s){s&&j(e)}}}function au(n){let e,t=n[12]+"",r,s;return{c(){e=O("div"),r=se(t),s=Y(),b(e,"class","bg-accent-light px-3 py-1 rounded-full text-black/60 border border-accent")},m(i,a){q(i,e,a),V(e,r),V(e,s)},p(i,a){a[0]&1&&t!==(t=i[12]+"")&&ve(r,t)},d(i){i&&j(e)}}}function lu(n){let e,t=n[12]&&au(n);return{c(){t&&t.c(),e=Tt()},m(r,s){t&&t.m(r,s),q(r,e,s)},p(r,s){r[12]?t?t.p(r,s):(t=au(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(r){r&&j(e),t&&t.d(r)}}}function cu(n){let e,t,r,s,i,a,l,c,u;function d(_,A){if(!_[0].hintPurchased)return Lv;if(!_[0].superHintPurchased)return xv}let m=d(n),p=m&&m(n);return{c(){e=O("div"),t=O("div"),p&&p.c(),r=Y(),s=O("div"),i=O("input"),a=Y(),l=O("button"),l.textContent="Guess",b(t,"class","flex gap-2"),b(i,"type","text"),b(i,"placeholder","Type your guess..."),b(i,"class","input input-bordered flex-1 bg-white text-black border-primary"),b(l,"class","btn btn-primary"),b(s,"class","flex gap-2"),b(e,"class","flex flex-col gap-2 w-full max-w-[min(90vw,400px)]")},m(_,A){q(_,e,A),V(e,t),p&&p.m(t,null),V(e,r),V(e,s),V(s,i),Gn(i,n[12]),V(s,a),V(s,l),c||(u=[_e(i,"input",n[16]),_e(i,"keydown",n[17]),_e(l,"click",n[18])],c=!0)},p(_,A){m===(m=d(_))&&p?p.p(_,A):(p&&p.d(1),p=m&&m(_),p&&(p.c(),p.m(t,null))),A[0]&4096&&i.value!==_[12]&&Gn(i,_[12])},d(_){_&&j(e),p&&p.d(),c=!1,At(u)}}}function xv(n){let e,t=n[11]?"Purchasing...":"Super Hint (10 ",r,s,i,a=n[11]?"":")",l,c,u,d,m;return{c(){e=O("button"),r=se(t),s=O("img"),l=se(a),vt(s.src,i=_i)||b(s,"src",i),b(s,"class","w-4 h-4 inline"),b(e,"class",c="btn btn-outline flex-1 "+(n[2].coins<10||n[11]?"opacity-40 btn-error cursor-not-allowed":"")),e.disabled=u=n[2].coins<10||n[11]},m(p,_){q(p,e,_),V(e,r),V(e,s),V(e,l),d||(m=_e(e,"click",n[15]),d=!0)},p(p,_){_[0]&2048&&t!==(t=p[11]?"Purchasing...":"Super Hint (10 ")&&ve(r,t),_[0]&2048&&a!==(a=p[11]?"":")")&&ve(l,a),_[0]&2052&&c!==(c="btn btn-outline flex-1 "+(p[2].coins<10||p[11]?"opacity-40 btn-error cursor-not-allowed":""))&&b(e,"class",c),_[0]&2052&&u!==(u=p[2].coins<10||p[11])&&(e.disabled=u)},d(p){p&&j(e),d=!1,m()}}}function Lv(n){let e,t=n[10]?"Purchasing...":"Hint (5 ",r,s,i,a=n[10]?"":")",l,c,u,d,m;return{c(){e=O("button"),r=se(t),s=O("img"),l=se(a),vt(s.src,i=_i)||b(s,"src",i),b(s,"class","w-4 h-4 inline"),b(e,"class",c="btn btn-outline flex-1 "+(n[2].coins<5||n[10]?"opacity-40 btn-error cursor-not-allowed":"")),e.disabled=u=n[2].coins<5||n[10]},m(p,_){q(p,e,_),V(e,r),V(e,s),V(e,l),d||(m=_e(e,"click",n[14]),d=!0)},p(p,_){_[0]&1024&&t!==(t=p[10]?"Purchasing...":"Hint (5 ")&&ve(r,t),_[0]&1024&&a!==(a=p[10]?"":")")&&ve(l,a),_[0]&1028&&c!==(c="btn btn-outline flex-1 "+(p[2].coins<5||p[10]?"opacity-40 btn-error cursor-not-allowed":""))&&b(e,"class",c),_[0]&1028&&u!==(u=p[2].coins<5||p[10])&&(e.disabled=u)},d(p){p&&j(e),d=!1,m()}}}function Fv(n){let e,t,r,s;const i=[Rv,Iv],a=[];function l(c,u){return c[3]&&c[2]&&c[0]?0:c[2]&&c[3]?1:-1}return~(t=l(n))&&(r=a[t]=i[t](n)),{c(){e=O("div"),r&&r.c(),b(e,"class","rounded-lg p-9 bg-background flex flex-col justify-center")},m(c,u){q(c,e,u),~t&&a[t].m(e,null),s=!0},p(c,u){let d=t;t=l(c),t===d?~t&&a[t].p(c,u):(r&&(Fe(),te(a[d],1,1,()=>{a[d]=null}),Ue()),~t?(r=a[t],r?r.p(c,u):(r=a[t]=i[t](c),r.c()),$(r,1),r.m(e,null)):r=null)},i(c){s||($(r),s=!0)},o(c){te(r),s=!1},d(c){c&&j(e),~t&&a[t].d()}}}function Uv(n,e,t){let r,s,i;Ye(n,et,w=>t(2,r=w)),Ye(n,ft,w=>t(3,s=w)),Ye(n,bs,w=>t(25,i=w));let a=null,l="",c=null,u=!1,d,m=0,p,_=!1,A=!1,S=!1,C=!1;async function D(w){if(!s||!r||!a||!w.trim()||(t(12,l=""),a.guesses.includes(w)))return;const H={...a};H.guesses.push(w);const Ee={...s},St=Ee.drawings.findIndex(_t=>!_t.guessed&&_t.artist===H.artist);St>=0&&(Ee.drawings[St]=H,ht(ft,s=Ee,s)),Zw(s,r,w).catch(_t=>{console.error("Error submitting guess:",_t)})}async function x(){if(!r||!a||!s||a.hintPurchased||r.coins<5||S)return;t(10,S=!0),await tv(s,a,r)&&await Dr(r,-5),t(10,S=!1)}async function L(){if(!r||!a||!s||!a.hintPurchased||r.coins<10||C)return;t(11,C=!0),await nv(s,a,r)&&await Dr(r,-10),t(11,C=!1)}function U(){l=this.value,t(12,l)}const ne=w=>{w.key==="Enter"&&l.length>0&&D(l)},J=()=>D(l),E=w=>w!==r.name,y=w=>{s&&t(1,c={secretWord:w.secretWord,coins:w.coins,data:"",artist:r.name,guessed:!1,guesses:[],createdAt:new Date,guessedBy:"",hintPurchased:!1,superHintPurchased:!1})},v=async()=>{if(r&&r.coins>=5&&!_){t(8,_=!0);try{await Dr(r,-5),t(6,m++,m),t(7,p=Pc(4))}finally{setTimeout(()=>{t(8,_=!1)},1e3)}}};function T(w){Mr[w?"unshift":"push"](()=>{d=w,t(5,d)})}const I=()=>d.clearCanvas(),k=async()=>{if(c&&s&&!u){t(4,u=!0);const w=d.getImageData(),H={...c,data:w};s.drawings.push(H),await gi(s),t(1,c=null),ht(ft,s=null,s),t(4,u=!1)}};return n.$$.update=()=>{if(n.$$.dirty[0]&13&&s&&r){const w=ma(s,r.name);t(0,a=w?ev(w):null),t(9,A=r.name===(a==null?void 0:a.artist))}n.$$.dirty[0]&2&&(c?ht(bs,i=!0,i):ht(bs,i=!1,i))},t(7,p=Pc(4)),[a,c,r,s,u,d,m,p,_,A,S,C,l,D,x,L,U,ne,J,E,y,v,T,I,k]}class Bv extends kt{constructor(e){super(),Ct(this,e,Uv,Fv,Et,{},null,[-1,-1])}}function uu(n,e,t){const r=n.slice();return r[16]=e[t],r}function hu(n){let e,t,r;return{c(){e=O("button"),e.textContent="×",b(e,"class","absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-black p-2")},m(s,i){q(s,e,i),t||(r=_e(e,"click",n[8]),t=!0)},p:X,d(s){s&&j(e),t=!1,r()}}}function jv(n){let e,t,r=Re(n[1]),s=[];for(let a=0;a<r.length;a+=1)s[a]=du(uu(n,r,a));const i=a=>te(s[a],1,1,()=>{s[a]=null});return{c(){for(let a=0;a<s.length;a+=1)s[a].c();e=Tt()},m(a,l){for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(a,l);q(a,e,l),t=!0},p(a,l){if(l&90){r=Re(a[1]);let c;for(c=0;c<r.length;c+=1){const u=uu(a,r,c);s[c]?(s[c].p(u,l),$(s[c],1)):(s[c]=du(u),s[c].c(),$(s[c],1),s[c].m(e.parentNode,e))}for(Fe(),c=r.length;c<s.length;c+=1)i(c);Ue()}},i(a){if(!t){for(let l=0;l<r.length;l+=1)$(s[l]);t=!0}},o(a){s=s.filter(Boolean);for(let l=0;l<s.length;l+=1)te(s[l]);t=!1},d(a){a&&j(e),pt(s,a)}}}function qv(n){let e;return{c(){e=O("div"),e.textContent="No users found",b(e,"class","text-center py-8 text-black/60")},m(t,r){q(t,e,r)},p:X,i:X,o:X,d(t){t&&j(e)}}}function zv(n){let e;return{c(){e=O("div"),e.innerHTML='<div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>',b(e,"class","flex items-center justify-center py-8")},m(t,r){q(t,e,r)},p:X,i:X,o:X,d(t){t&&j(e)}}}function fu(n){let e,t;function r(...l){return n[9](n[16],...l)}function s(...l){return n[10](n[16],...l)}function i(...l){return n[11](n[16],...l)}function a(){return n[12](n[16])}return e=new pa({props:{name:n[16].name,coins:n[16].coins,showAvatar:!0,subtitle:n[4].filter(r).length>0?`${n[4].filter(s).length} game${n[4].filter(i).length>1?"s":""}`:null,onClick:a}}),{c(){gt(e.$$.fragment)},m(l,c){at(e,l,c),t=!0},p(l,c){n=l;const u={};c&2&&(u.name=n[16].name),c&2&&(u.coins=n[16].coins),c&18&&(u.subtitle=n[4].filter(r).length>0?`${n[4].filter(s).length} game${n[4].filter(i).length>1?"s":""}`:null),c&2&&(u.onClick=a),e.$set(u)},i(l){t||($(e.$$.fragment,l),t=!0)},o(l){te(e.$$.fragment,l),t=!1},d(l){lt(e,l)}}}function du(n){let e,t,r=n[3]&&n[3].name!==n[16].name&&fu(n);return{c(){r&&r.c(),e=Tt()},m(s,i){r&&r.m(s,i),q(s,e,i),t=!0},p(s,i){s[3]&&s[3].name!==s[16].name?r?(r.p(s,i),i&10&&$(r,1)):(r=fu(s),r.c(),$(r,1),r.m(e.parentNode,e)):r&&(Fe(),te(r,1,1,()=>{r=null}),Ue())},i(s){t||($(r),t=!0)},o(s){te(r),t=!1},d(s){s&&j(e),r&&r.d(s)}}}function Hv(n){let e,t,r,s,i,a,l,c,u,d,m,p,_,A=n[0]&&hu(n);const S=[zv,qv,jv],C=[];function D(x,L){return x[2]?0:x[1].length===0?1:2}return u=D(n),d=C[u]=S[u](n),{c(){e=O("div"),t=O("div"),t.innerHTML='<h2 class="text-xl font-bold text-primary">Challenge a friend</h2> <p class="text-sm text-black/60">Tap on a user to start a new game</p>',r=Y(),s=O("div"),i=O("input"),a=Y(),A&&A.c(),l=Y(),c=O("div"),d.c(),b(t,"class","flex flex-col gap-2"),b(i,"type","text"),b(i,"placeholder","Search users..."),b(i,"class","input input-bordered w-full bg-white text-black border-primary rounded-xl text-base px-4 py-3 shadow-sm"),b(i,"autocorrect","off"),b(s,"class","relative"),b(c,"class","flex flex-col w-full gap-2 pt-2 overflow-y-auto"),b(e,"class","flex flex-col gap-4 p-4 pt-24")},m(x,L){q(x,e,L),V(e,t),V(e,r),V(e,s),V(s,i),Gn(i,n[0]),V(s,a),A&&A.m(s,null),V(e,l),V(e,c),C[u].m(c,null),m=!0,p||(_=[_e(i,"input",n[5]),_e(i,"input",n[7])],p=!0)},p(x,[L]){L&1&&i.value!==x[0]&&Gn(i,x[0]),x[0]?A?A.p(x,L):(A=hu(x),A.c(),A.m(s,null)):A&&(A.d(1),A=null);let U=u;u=D(x),u===U?C[u].p(x,L):(Fe(),te(C[U],1,1,()=>{C[U]=null}),Ue(),d=C[u],d?d.p(x,L):(d=C[u]=S[u](x),d.c()),$(d,1),d.m(c,null))},i(x){m||($(d),m=!0)},o(x){te(d),m=!1},d(x){x&&j(e),A&&A.d(),C[u].d(),p=!1,At(_)}}}function Wv(n,e,t){let r,s,i;Ye(n,et,L=>t(3,r=L)),Ye(n,ft,L=>t(15,s=L)),Ye(n,zr,L=>t(4,i=L));let a="",l=[],c,u=!0,d=!1;function m(){clearTimeout(c),c=setTimeout(async()=>{t(2,u=!0),t(1,l=await kc(a)),t(2,u=!1)},300)}(async()=>(t(2,u=!0),t(1,l=await kc("")),t(2,u=!1)))();async function p(L){if(!(!r||d)){d=!0;try{ht(ft,s=await Kw([r.name,L.name]),s)}catch(U){console.error("Error creating game:",U)}finally{d=!1}}}function _(){a=this.value,t(0,a)}return[a,l,u,r,i,m,p,_,()=>{t(0,a=""),m()},(L,U)=>U.users.includes(L.name),(L,U)=>U.users.includes(L.name),(L,U)=>U.users.includes(L.name),L=>p(L)]}class Gv extends kt{constructor(e){super(),Ct(this,e,Wv,Hv,Et,{})}}function mu(n,e,t){const r=n.slice();return r[2]=e[t],r}function pu(n,e,t){const r=n.slice();return r[5]=e[t],r[7]=t,r}function gu(n,e,t){const r=n.slice();return r[8]=e[t],r}function Kv(n){let e,t=Re(n[0]),r=[];for(let s=0;s<t.length;s+=1)r[s]=Eu(mu(n,t,s));return{c(){e=O("div");for(let s=0;s<r.length;s+=1)r[s].c();b(e,"class","flex flex-col gap-4")},m(s,i){q(s,e,i);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(e,null)},p(s,i){if(i&1){t=Re(s[0]);let a;for(a=0;a<t.length;a+=1){const l=mu(s,t,a);r[a]?r[a].p(l,i):(r[a]=Eu(l),r[a].c(),r[a].m(e,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=t.length}},d(s){s&&j(e),pt(r,s)}}}function $v(n){let e;return{c(){e=O("div"),e.innerHTML='<span class="text-accent">Loading drawings...</span>',b(e,"class","flex justify-center items-center h-40")},m(t,r){q(t,e,r)},p:X,d(t){t&&j(e)}}}function _u(n){let e,t,r,s,i,a,l,c,u,d=n[2].artist+"",m,p,_,A,S,C=Re(Array(n[2].coins)),D=[];for(let v=0;v<C.length;v+=1)D[v]=yu(gu(n,C,v));function x(v,T){return v[2].guessed?Xv:Qv}let L=x(n),U=L(n);function ne(v,T){return v[2].guesses.length>0?Yv:Jv}let J=ne(n),E=J(n),y=n[2].hintPurchased&&Au(n);return{c(){e=O("div"),t=O("div");for(let v=0;v<D.length;v+=1)D[v].c();r=Y(),s=O("img"),a=Y(),l=O("p"),U.c(),c=se(`
							by
							`),u=O("span"),m=se(d),p=Y(),_=O("p"),E.c(),A=Y(),y&&y.c(),S=Y(),b(t,"class","flex flex-row gap-1 absolute top-2 right-2"),vt(s.src,i=`${n[2].data}`)||b(s,"src",i),b(s,"class","w-full h-full object-contain"),b(s,"alt","Drawing"),b(u,"class","font-semibold"),b(l,"class","text-lg text-center py-2 align-middle items-center"),b(_,"class","text-[0.8rem] text-center align-middle items-center w-3/4"),b(e,"class","bg-white/90 p-1 relative rounded-lg w-full max-w-[min(90vw,400px)] flex flex-col items-center justify-center mx-auto border-2 border-primary")},m(v,T){q(v,e,T),V(e,t);for(let I=0;I<D.length;I+=1)D[I]&&D[I].m(t,null);V(e,r),V(e,s),V(e,a),V(e,l),U.m(l,null),V(l,c),V(l,u),V(u,m),V(e,p),V(e,_),E.m(_,null),V(e,A),y&&y.m(e,null),V(e,S)},p(v,T){if(T&1){C=Re(Array(v[2].coins));let I;for(I=0;I<C.length;I+=1){const k=gu(v,C,I);D[I]?D[I].p(k,T):(D[I]=yu(),D[I].c(),D[I].m(t,null))}for(;I<D.length;I+=1)D[I].d(1);D.length=C.length}T&1&&!vt(s.src,i=`${v[2].data}`)&&b(s,"src",i),L===(L=x(v))&&U?U.p(v,T):(U.d(1),U=L(v),U&&(U.c(),U.m(l,c))),T&1&&d!==(d=v[2].artist+"")&&ve(m,d),J===(J=ne(v))&&E?E.p(v,T):(E.d(1),E=J(v),E&&(E.c(),E.m(_,null))),v[2].hintPurchased?y?y.p(v,T):(y=Au(v),y.c(),y.m(e,S)):y&&(y.d(1),y=null)},d(v){v&&j(e),pt(D,v),U.d(),E.d(),y&&y.d()}}}function yu(n){let e,t;return{c(){e=O("img"),vt(e.src,t=_i)||b(e,"src",t),b(e,"class","w-4 h-4")},m(r,s){q(r,e,s)},p:X,d(r){r&&j(e)}}}function Qv(n){let e;return{c(){e=O("span"),e.textContent="?",b(e,"class","font-bold text-primary")},m(t,r){q(t,e,r)},p:X,d(t){t&&j(e)}}}function Xv(n){let e,t=n[2].secretWord+"",r;return{c(){e=O("span"),r=se(t),b(e,"class","font-bold text-primary")},m(s,i){q(s,e,i),V(e,r)},p(s,i){i&1&&t!==(t=s[2].secretWord+"")&&ve(r,t)},d(s){s&&j(e)}}}function Jv(n){let e,t,r=n[2].guessedBy+"",s,i;return{c(){e=O("span"),t=O("span"),s=se(r),i=se(`
									is thinking...`),b(t,"class","font-semibold"),b(e,"class","italic")},m(a,l){q(a,e,l),V(e,t),V(t,s),V(e,i)},p(a,l){l&1&&r!==(r=a[2].guessedBy+"")&&ve(s,r)},d(a){a&&j(e)}}}function Yv(n){let e,t=n[2].guessedBy+"",r,s,i,a,l=!n[2].guessed&&wu(),c=Re(n[2].guesses),u=[];for(let d=0;d<c.length;d+=1)u[d]=vu(pu(n,c,d));return{c(){e=O("span"),r=se(t),s=Y(),l&&l.c(),i=se(`
								guessed:
								`);for(let d=0;d<u.length;d+=1)u[d].c();a=Tt(),b(e,"class","font-semibold")},m(d,m){q(d,e,m),V(e,r),q(d,s,m),l&&l.m(d,m),q(d,i,m);for(let p=0;p<u.length;p+=1)u[p]&&u[p].m(d,m);q(d,a,m)},p(d,m){if(m&1&&t!==(t=d[2].guessedBy+"")&&ve(r,t),d[2].guessed?l&&(l.d(1),l=null):l||(l=wu(),l.c(),l.m(i.parentNode,i)),m&1){c=Re(d[2].guesses);let p;for(p=0;p<c.length;p+=1){const _=pu(d,c,p);u[p]?u[p].p(_,m):(u[p]=vu(_),u[p].c(),u[p].m(a.parentNode,a))}for(;p<u.length;p+=1)u[p].d(1);u.length=c.length}},d(d){d&&(j(e),j(s),j(i),j(a)),l&&l.d(d),pt(u,d)}}}function wu(n){let e;return{c(){e=se("has")},m(t,r){q(t,e,r)},d(t){t&&j(e)}}}function vu(n){let e,t=n[5]+"",r,s=n[7]<n[2].guesses.length-1?", ":"",i;return{c(){e=O("span"),r=se(t),i=se(s),b(e,"class","italic")},m(a,l){q(a,e,l),V(e,r),V(e,i)},p(a,l){l&1&&t!==(t=a[5]+"")&&ve(r,t),l&1&&s!==(s=a[7]<a[2].guesses.length-1?", ":"")&&ve(i,s)},d(a){a&&j(e)}}}function Au(n){let e,t=n[2].hintPurchased?`${n[2].guessedBy} used a Hint`:"",r,s=n[2].superHintPurchased?"... AND a SuperHint!":"",i;return{c(){e=O("p"),r=se(t),i=se(s),b(e,"class","text-[0.8rem] text-secondary flex flex-row py-2 text-center align-middle items-center")},m(a,l){q(a,e,l),V(e,r),V(e,i)},p(a,l){l&1&&t!==(t=a[2].hintPurchased?`${a[2].guessedBy} used a Hint`:"")&&ve(r,t),l&1&&s!==(s=a[2].superHintPurchased?"... AND a SuperHint!":"")&&ve(i,s)},d(a){a&&j(e)}}}function Eu(n){let e,t=n[2].data&&n[2].data.length>10&&_u(n);return{c(){t&&t.c(),e=Tt()},m(r,s){t&&t.m(r,s),q(r,e,s)},p(r,s){r[2].data&&r[2].data.length>10?t?t.p(r,s):(t=_u(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(r){r&&j(e),t&&t.d(r)}}}function Zv(n){let e,t,r,s;function i(c,u){return c[1]?$v:Kv}let a=i(n),l=a(n);return{c(){e=O("div"),t=O("img"),s=Y(),l.c(),vt(t.src,r=Qf)||b(t,"src",r),b(t,"alt","drawIt"),b(t,"class","w-32 mx-auto mb-6 drop-shadow-md"),b(e,"class","p-4")},m(c,u){q(c,e,u),V(e,t),V(e,s),l.m(e,null)},p(c,[u]){a===(a=i(c))&&l?l.p(c,u):(l.d(1),l=a(c),l&&(l.c(),l.m(e,null)))},i:X,o:X,d(c){c&&j(e),l.d()}}}function e0(n,e,t){let r=[],s=!0;return qr(async()=>{console.log("Feed mounted"),t(0,r=await Qw()),console.log("Drawings loaded",r),t(1,s=!1)}),[r,s]}class t0 extends kt{constructor(e){super(),Ct(this,e,e0,Zv,Et,{})}}function Tu(n){var L;let e,t,r,s,i,a,l,c,u=(((L=n[2])==null?void 0:L.coins)||0)+"",d,m,p,_,A,S;function C(U,ne){return U[3]?r0:n0}let D=C(n),x=D(n);return{c(){e=O("nav"),t=O("div"),r=O("div"),s=O("div"),i=O("img"),l=Y(),c=O("span"),d=se(u),m=Y(),p=O("span"),p.textContent="coins",_=Y(),x.c(),A=Y(),S=O("div"),vt(i.src,a=ga)||b(i,"src",a),b(i,"class","w-5 h-5"),b(i,"alt","coins"),b(c,"class","text-sm font-medium"),b(s,"class","flex items-center gap-1"),b(p,"class","text-xs text-gray-500"),b(r,"class","flex flex-col items-center"),b(t,"class","flex justify-around items-center max-w-md mx-auto"),b(e,"class","fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2"),b(S,"class","h-20")},m(U,ne){q(U,e,ne),V(e,t),V(t,r),V(r,s),V(s,i),V(s,l),V(s,c),V(c,d),V(r,m),V(r,p),V(t,_),x.m(t,null),q(U,A,ne),q(U,S,ne)},p(U,ne){var J;ne&4&&u!==(u=(((J=U[2])==null?void 0:J.coins)||0)+"")&&ve(d,u),D===(D=C(U))&&x?x.p(U,ne):(x.d(1),x=D(U),x&&(x.c(),x.m(t,null)))},d(U){U&&(j(e),j(A),j(S)),x.d()}}}function n0(n){let e,t,r,s,i,a,l,c,u,d,m,p,_,A,S,C,D,x,L,U,ne,J,E,y,v,T,I,k;return{c(){e=O("button"),t=Jt("svg"),r=Jt("path"),i=Y(),a=O("span"),l=se("Home"),u=Y(),d=O("button"),m=Jt("svg"),p=Jt("path"),A=Y(),S=O("span"),C=se("New"),x=Y(),L=O("button"),U=Jt("svg"),ne=Jt("path"),E=Y(),y=O("span"),v=se("Feed"),b(r,"stroke-linecap","round"),b(r,"stroke-linejoin","round"),b(r,"stroke-width","2"),b(r,"d","M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"),b(t,"xmlns","http://www.w3.org/2000/svg"),b(t,"class",s="h-6 w-6 "+(n[0]==="home"?"text-primary":"text-gray-400")),b(t,"fill","none"),b(t,"viewBox","0 0 24 24"),b(t,"stroke","currentColor"),b(a,"class",c="text-xs "+(n[0]==="home"?"text-primary":"text-gray-500")),b(e,"class","flex flex-col items-center"),b(p,"stroke-linecap","round"),b(p,"stroke-linejoin","round"),b(p,"stroke-width","2"),b(p,"d","M12 4v16m8-8H4"),b(m,"xmlns","http://www.w3.org/2000/svg"),b(m,"class",_="h-6 w-6 "+(n[0]==="new"?"text-primary":"text-gray-400")),b(m,"fill","none"),b(m,"viewBox","0 0 24 24"),b(m,"stroke","currentColor"),b(S,"class",D="text-xs "+(n[0]==="new"?"text-primary":"text-gray-500")),b(d,"class","flex flex-col items-center"),b(ne,"stroke-linecap","round"),b(ne,"stroke-linejoin","round"),b(ne,"stroke-width","2"),b(ne,"d","M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"),b(U,"xmlns","http://www.w3.org/2000/svg"),b(U,"class",J="h-6 w-6 "+(n[0]==="feed"?"text-primary":"text-gray-400")),b(U,"fill","none"),b(U,"viewBox","0 0 24 24"),b(U,"stroke","currentColor"),b(y,"class",T="text-xs "+(n[0]==="feed"?"text-primary":"text-gray-500")),b(L,"class","flex flex-col items-center")},m(w,H){q(w,e,H),V(e,t),V(t,r),V(e,i),V(e,a),V(a,l),q(w,u,H),q(w,d,H),V(d,m),V(m,p),V(d,A),V(d,S),V(S,C),q(w,x,H),q(w,L,H),V(L,U),V(U,ne),V(L,E),V(L,y),V(y,v),I||(k=[_e(e,"click",n[7]),_e(d,"click",n[8]),_e(L,"click",n[9])],I=!0)},p(w,H){H&1&&s!==(s="h-6 w-6 "+(w[0]==="home"?"text-primary":"text-gray-400"))&&b(t,"class",s),H&1&&c!==(c="text-xs "+(w[0]==="home"?"text-primary":"text-gray-500"))&&b(a,"class",c),H&1&&_!==(_="h-6 w-6 "+(w[0]==="new"?"text-primary":"text-gray-400"))&&b(m,"class",_),H&1&&D!==(D="text-xs "+(w[0]==="new"?"text-primary":"text-gray-500"))&&b(S,"class",D),H&1&&J!==(J="h-6 w-6 "+(w[0]==="feed"?"text-primary":"text-gray-400"))&&b(U,"class",J),H&1&&T!==(T="text-xs "+(w[0]==="feed"?"text-primary":"text-gray-500"))&&b(y,"class",T)},d(w){w&&(j(e),j(u),j(d),j(x),j(L)),I=!1,At(k)}}}function r0(n){let e,t,r;return{c(){e=O("button"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg> <span class="text-xs text-primary">Back</span>',b(e,"class","flex flex-col items-center")},m(s,i){q(s,e,i),t||(r=_e(e,"click",n[6]),t=!0)},p:X,d(s){s&&j(e),t=!1,r()}}}function s0(n){let e,t=!n[1]&&Tu(n);return{c(){t&&t.c(),e=Tt()},m(r,s){t&&t.m(r,s),q(r,e,s)},p(r,[s]){r[1]?t&&(t.d(1),t=null):t?t.p(r,s):(t=Tu(r),t.c(),t.m(e.parentNode,e))},i:X,o:X,d(r){r&&j(e),t&&t.d(r)}}}function i0(n,e,t){let r,s,i;Ye(n,bs,A=>t(1,r=A)),Ye(n,et,A=>t(2,s=A)),Ye(n,ft,A=>t(3,i=A));let{navigate:a}=e,l="home";function c(){const A=new URLSearchParams(window.location.search);t(0,l=A.get("page")||"home")}typeof window<"u"&&(window.addEventListener("popstate",c),c());const u=A=>{t(0,l=A),a(A)},d=()=>{ht(ft,i=null,i),u("home")},m=()=>u("home"),p=()=>u("new"),_=()=>u("feed");return n.$$set=A=>{"navigate"in A&&t(5,a=A.navigate)},[l,r,s,i,u,a,d,m,p,_]}class o0 extends kt{constructor(e){super(),Ct(this,e,i0,s0,Et,{navigate:5})}}function bu(n){let e,t,r,s,i,a,l,c,u,d,m,p;return{c(){e=O("div"),t=O("div"),r=O("h2"),r.textContent="Dev Menu",s=Y(),i=O("div"),a=O("button"),a.textContent="Delete All Users",l=Y(),c=O("button"),u=se("Add 5 Points"),b(r,"class","text-lg font-bold mb-4"),b(a,"class","btn btn-error"),b(c,"class","btn btn-primary"),c.disabled=d=!n[1],b(i,"class","flex flex-col gap-2"),b(t,"class","bg-white rounded-lg shadow-lg p-4 border border-gray-200"),b(e,"class","fixed top-0 right-0 p-4 z-50")},m(_,A){q(_,e,A),V(e,t),V(t,r),V(t,s),V(t,i),V(i,a),V(i,l),V(i,c),V(c,u),m||(p=[_e(a,"click",n[2]),_e(c,"click",n[3])],m=!0)},p(_,A){A&2&&d!==(d=!_[1])&&(c.disabled=d)},d(_){_&&j(e),m=!1,At(p)}}}function a0(n){let e,t=n[0]&&bu(n);return{c(){t&&t.c(),e=Tt()},m(r,s){t&&t.m(r,s),q(r,e,s)},p(r,[s]){r[0]?t?t.p(r,s):(t=bu(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:X,o:X,d(r){r&&j(e),t&&t.d(r)}}}function l0(n,e,t){let r;Ye(n,et,c=>t(1,r=c));let s=!1;async function i(c){c.key==="\\"&&t(0,s=!s)}async function a(){if(confirm("Are you sure you want to delete ALL users? This cannot be undone!"))try{const c=await Gt(Kt),u=jw(pi);c.docs.forEach(d=>{u.delete(d.ref)}),await u.commit(),localStorage.removeItem("drawIt-user"),localStorage.removeItem("drawIt-games"),localStorage.removeItem("drawIt-users"),et.set(null),alert("All users deleted successfully!"),window.location.reload()}catch(c){console.error("Error deleting users:",c),alert("Error deleting users. Check console for details.")}}async function l(){if(r)try{await Dr(r,5),alert("Added 5 points to current user!")}catch(c){console.error("Error adding points:",c),alert("Error adding points. Check console for details.")}}return qr(()=>(window.addEventListener("keydown",i),()=>{window.removeEventListener("keydown",i)})),[s,r,a,l]}class c0 extends kt{constructor(e){super(),Ct(this,e,l0,a0,Et,{})}}function u0(n){let e,t,r,s,i,a,l,c,u;const d=[p0,m0,d0,f0],m=[];function p(_,A){return _[2]?0:_[0]==="home"?1:_[0]==="new"?2:_[0]==="feed"?3:-1}return~(r=p(n))&&(s=m[r]=d[r](n)),a=new o0({props:{navigate:n[3]}}),c=new c0({}),{c(){e=O("main"),t=O("div"),s&&s.c(),i=Y(),gt(a.$$.fragment),l=Y(),gt(c.$$.fragment),b(t,"class","w-full max-w-md mx-auto px-4"),b(e,"class","w-full min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-background-gradient-start to-background-gradient-end text-black pb-20")},m(_,A){q(_,e,A),V(e,t),~r&&m[r].m(t,null),V(e,i),at(a,e,null),V(e,l),at(c,e,null),u=!0},p(_,A){let S=r;r=p(_),r===S?~r&&m[r].p(_,A):(s&&(Fe(),te(m[S],1,1,()=>{m[S]=null}),Ue()),~r?(s=m[r],s?s.p(_,A):(s=m[r]=d[r](_),s.c()),$(s,1),s.m(t,null)):s=null)},i(_){u||($(s),$(a.$$.fragment,_),$(c.$$.fragment,_),u=!0)},o(_){te(s),te(a.$$.fragment,_),te(c.$$.fragment,_),u=!1},d(_){_&&j(e),~r&&m[r].d(),lt(a),lt(c)}}}function h0(n){let e;return{c(){e=O("div"),e.innerHTML='<div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>',b(e,"class","w-full min-h-screen flex items-center justify-center")},m(t,r){q(t,e,r)},p:X,i:X,o:X,d(t){t&&j(e)}}}function f0(n){let e,t;return e=new t0({}),{c(){gt(e.$$.fragment)},m(r,s){at(e,r,s),t=!0},p:X,i(r){t||($(e.$$.fragment,r),t=!0)},o(r){te(e.$$.fragment,r),t=!1},d(r){lt(e,r)}}}function d0(n){let e,t;return e=new Gv({}),{c(){gt(e.$$.fragment)},m(r,s){at(e,r,s),t=!0},p:X,i(r){t||($(e.$$.fragment,r),t=!0)},o(r){te(e.$$.fragment,r),t=!1},d(r){lt(e,r)}}}function m0(n){let e,t;return e=new Av({props:{navigate:n[3]}}),{c(){gt(e.$$.fragment)},m(r,s){at(e,r,s),t=!0},p:X,i(r){t||($(e.$$.fragment,r),t=!0)},o(r){te(e.$$.fragment,r),t=!1},d(r){lt(e,r)}}}function p0(n){let e,t;return e=new Bv({}),{c(){gt(e.$$.fragment)},m(r,s){at(e,r,s),t=!0},p:X,i(r){t||($(e.$$.fragment,r),t=!0)},o(r){te(e.$$.fragment,r),t=!1},d(r){lt(e,r)}}}function g0(n){let e,t,r,s;const i=[h0,u0],a=[];function l(c,u){return c[1]?0:1}return e=l(n),t=a[e]=i[e](n),{c(){t.c(),r=Tt()},m(c,u){a[e].m(c,u),q(c,r,u),s=!0},p(c,[u]){let d=e;e=l(c),e===d?a[e].p(c,u):(Fe(),te(a[d],1,1,()=>{a[d]=null}),Ue(),t=a[e],t?t.p(c,u):(t=a[e]=i[e](c),t.c()),$(t,1),t.m(r.parentNode,r))},i(c){s||($(t),s=!0)},o(c){te(t),s=!1},d(c){c&&j(r),a[e].d(c)}}}function _0(n,e,t){let r;Ye(n,ft,l=>t(2,r=l));let s="home",i=!0;qr(async()=>{await $w();const l=new URLSearchParams(window.location.search);t(0,s=l.get("page")||"home");const c=l.get("currentGame");if(c){const u=await Sc(c);u&&ht(ft,r=u,r)}window.addEventListener("popstate",async()=>{const u=new URLSearchParams(window.location.search);t(0,s=u.get("page")||"home");const d=u.get("currentGame");if(d){const m=await Sc(d);m&&ht(ft,r=m,r)}else ht(ft,r=null,r)}),t(1,i=!1)});function a(l){const c=new URLSearchParams(window.location.search),u=r==null?void 0:r.id;u?c.set("currentGame",u):c.delete("currentGame"),l!=="home"?c.set("page",l):c.delete("page");const d=c.toString(),m=d?`?${d}`:"/drawIt/";window.history.pushState({},"",m),t(0,s=l)}return[s,i,r,a]}class y0 extends kt{constructor(e){super(),Ct(this,e,_0,g0,Et,{})}}new y0({target:document.getElementById("app")});
