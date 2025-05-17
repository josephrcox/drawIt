var vd=Object.defineProperty;var Ad=(n,e,t)=>e in n?vd(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var xi=(n,e,t)=>Ad(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();function J(){}function Ed(n){return!!n&&(typeof n=="object"||typeof n=="function")&&typeof n.then=="function"}function Iu(n){return n()}function cl(){return Object.create(null)}function At(n){n.forEach(Iu)}function Ru(n){return typeof n=="function"}function _t(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let _s;function Ct(n,e){return n===e?!0:(_s||(_s=document.createElement("a")),_s.href=e,n===_s.href)}function bd(n){return Object.keys(n).length===0}function Cu(n,...e){if(n==null){for(const r of e)r(void 0);return J}const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Xs(n){let e;return Cu(n,t=>e=t)(),e}function et(n,e,t){n.$$.on_destroy.push(Cu(e,t))}function ft(n,e,t){return n.set(t),e}function S(n,e){n.appendChild(e)}function q(n,e,t){n.insertBefore(e,t||null)}function j(n){n.parentNode&&n.parentNode.removeChild(n)}function gt(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function x(n){return document.createElement(n)}function Jt(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function se(n){return document.createTextNode(n)}function Z(){return se(" ")}function Et(){return se("")}function _e(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function T(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function Td(n){return Array.from(n.childNodes)}function ve(n,e){e=""+e,n.data!==e&&(n.data=e)}function Gn(n,e){n.value=e??""}function Xi(n,e,t,r){t==null?n.style.removeProperty(e):n.style.setProperty(e,t,"")}function Yt(n,e,t){n.classList.toggle(e,!!t)}let Mr;function jt(n){Mr=n}function ku(){if(!Mr)throw new Error("Function called outside component initialization");return Mr}function zr(n){ku().$$.on_mount.push(n)}const Un=[],Or=[];let Hn=[];const ul=[],Id=Promise.resolve();let Ji=!1;function Rd(){Ji||(Ji=!0,Id.then(bo))}function Yi(n){Hn.push(n)}const Li=new Set;let Ln=0;function bo(){if(Ln!==0)return;const n=Mr;do{try{for(;Ln<Un.length;){const e=Un[Ln];Ln++,jt(e),Cd(e.$$)}}catch(e){throw Un.length=0,Ln=0,e}for(jt(null),Un.length=0,Ln=0;Or.length;)Or.pop()();for(let e=0;e<Hn.length;e+=1){const t=Hn[e];Li.has(t)||(Li.add(t),t())}Hn.length=0}while(Un.length);for(;ul.length;)ul.pop()();Ji=!1,Li.clear(),jt(n)}function Cd(n){if(n.fragment!==null){n.update(),At(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Yi)}}function kd(n){const e=[],t=[];Hn.forEach(r=>n.indexOf(r)===-1?e.push(r):t.push(r)),t.forEach(r=>r()),Hn=e}const Ts=new Set;let En;function Fe(){En={r:0,c:[],p:En}}function Ue(){En.r||At(En.c),En=En.p}function K(n,e){n&&n.i&&(Ts.delete(n),n.i(e))}function ee(n,e,t,r){if(n&&n.o){if(Ts.has(n))return;Ts.add(n),En.c.push(()=>{Ts.delete(n),r&&(t&&n.d(1),r())}),n.o(e)}else r&&r()}function hl(n,e){const t=e.token={};function r(s,i,a,l){if(e.token!==t)return;e.resolved=l;let c=e.ctx;a!==void 0&&(c=c.slice(),c[a]=l);const u=s&&(e.current=s)(c);let f=!1;e.block&&(e.blocks?e.blocks.forEach((m,g)=>{g!==i&&m&&(Fe(),ee(m,1,1,()=>{e.blocks[g]===m&&(e.blocks[g]=null)}),Ue())}):e.block.d(1),u.c(),K(u,1),u.m(e.mount(),e.anchor),f=!0),e.block=u,e.blocks&&(e.blocks[i]=u),f&&bo()}if(Ed(n)){const s=ku();if(n.then(i=>{jt(s),r(e.then,1,e.value,i),jt(null)},i=>{if(jt(s),r(e.catch,2,e.error,i),jt(null),!e.hasCatch)throw i}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,n),!0;e.resolved=n}}function Sd(n,e,t){const r=e.slice(),{resolved:s}=n;n.current===n.then&&(r[n.value]=s),n.current===n.catch&&(r[n.error]=s),n.block.p(r,t)}function Re(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function tt(n){n&&n.c()}function Ge(n,e,t){const{fragment:r,after_update:s}=n.$$;r&&r.m(e,t),Yi(()=>{const i=n.$$.on_mount.map(Iu).filter(Ru);n.$$.on_destroy?n.$$.on_destroy.push(...i):At(i),n.$$.on_mount=[]}),s.forEach(Yi)}function Ke(n,e){const t=n.$$;t.fragment!==null&&(kd(t.after_update),At(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Pd(n,e){n.$$.dirty[0]===-1&&(Un.push(n),Rd(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function bt(n,e,t,r,s,i,a=null,l=[-1]){const c=Mr;jt(n);const u=n.$$={fragment:null,ctx:[],props:i,update:J,not_equal:s,bound:cl(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:cl(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};a&&a(u.root);let f=!1;if(u.ctx=t?t(n,e.props||{},(m,g,...y)=>{const E=y.length?y[0]:g;return u.ctx&&s(u.ctx[m],u.ctx[m]=E)&&(!u.skip_bound&&u.bound[m]&&u.bound[m](E),f&&Pd(n,m)),g}):[],u.update(),f=!0,At(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){const m=Td(e.target);u.fragment&&u.fragment.l(m),m.forEach(j)}else u.fragment&&u.fragment.c();e.intro&&K(n.$$.fragment),Ge(n,e.target,e.anchor),bo()}jt(c)}class Tt{constructor(){xi(this,"$$");xi(this,"$$set")}$destroy(){Ke(this,1),this.$destroy=J}$on(e,t){if(!Ru(t))return J;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!bd(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Vd="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Vd);const Fn=[];function er(n,e=J){let t;const r=new Set;function s(l){if(_t(n,l)&&(n=l,t)){const c=!Fn.length;for(const u of r)u[1](),Fn.push(u,n);if(c){for(let u=0;u<Fn.length;u+=2)Fn[u][0](Fn[u+1]);Fn.length=0}}}function i(l){s(l(n))}function a(l,c=J){const u=[l,c];return r.add(u),r.size===1&&(t=e(s,i)||J),l(n),()=>{r.delete(u),r.size===0&&t&&(t(),t=null)}}return{set:s,update:i,subscribe:a}}const rt=er(null),Hr=er([]),dt=er(null),wt=er({}),Is=er(!1),Rs=er(!1);try{const n=localStorage.getItem("drawIt-user");n&&rt.set(JSON.parse(n));const e=localStorage.getItem("drawIt-games");e&&Hr.set(JSON.parse(e));const t=localStorage.getItem("drawIt-users");t&&wt.set(JSON.parse(t))}catch(n){console.error("Error loading from localStorage:",n)}rt.subscribe(n=>{n?localStorage.setItem("drawIt-user",JSON.stringify(n)):localStorage.removeItem("drawIt-user")});Hr.subscribe(n=>{n?localStorage.setItem("drawIt-games",JSON.stringify(n)):localStorage.removeItem("drawIt-games")});wt.subscribe(n=>{Object.keys(n).length>0?localStorage.setItem("drawIt-users",JSON.stringify(n)):localStorage.removeItem("drawIt-users")});const Dd=()=>{};var fl={};/**
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
 */const Su=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Nd=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Pu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,c=s+2<n.length,u=c?n[s+2]:0,f=i>>2,m=(i&3)<<4|l>>4;let g=(l&15)<<2|u>>6,y=u&63;c||(y=64,a||(g=64)),r.push(t[f],t[m],t[g],t[y])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Su(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Nd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const m=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||u==null||m==null)throw new Md;const g=i<<2|l>>4;if(r.push(g),u!==64){const y=l<<4&240|u>>2;if(r.push(y),m!==64){const E=u<<6&192|m;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Md extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Od=function(n){const e=Su(n);return Pu.encodeByteArray(e,!0)},Ns=function(n){return Od(n).replace(/\./g,"")},xd=function(n){try{return Pu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ld(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Fd=()=>Ld().__FIREBASE_DEFAULTS__,Ud=()=>{if(typeof process>"u"||typeof fl>"u")return;const n=fl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Bd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&xd(n[1]);return e&&JSON.parse(e)},To=()=>{try{return Dd()||Fd()||Ud()||Bd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},jd=n=>{var e,t;return(t=(e=To())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},qd=n=>{const e=jd(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Vu=()=>{var n;return(n=To())===null||n===void 0?void 0:n.config};/**
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
 */class zd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Hd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ns(JSON.stringify(t)),Ns(JSON.stringify(a)),""].join(".")}/**
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
 */function Wd(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gd(){var n;const e=(n=To())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Kd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function $d(){return!Gd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Du(){try{return typeof indexedDB=="object"}catch{return!1}}function Nu(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}function Qd(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Xd="FirebaseError";class fn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Xd,Object.setPrototypeOf(this,fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Js.prototype.create)}}class Js{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Jd(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new fn(s,l,r)}}function Jd(n,e){return n.replace(Yd,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Yd=/\{\$([^}]+)}/g;function Ms(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(dl(i)&&dl(a)){if(!Ms(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function dl(n){return n!==null&&typeof n=="object"}/**
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
 */const Zd=1e3,em=2,tm=4*60*60*1e3,nm=.5;function ml(n,e=Zd,t=em){const r=e*Math.pow(t,n),s=Math.round(nm*r*(Math.random()-.5)*2);return Math.min(tm,r+s)}/**
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
 */class rm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new zd;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(im(e))try{this.getOrInitializeService({instanceIdentifier:An})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=An){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=An){return this.instances.has(e)}getOptions(e=An){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:sm(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=An){return this.component?this.component.multipleInstances?e:An:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sm(n){return n===An?void 0:n}function im(n){return n.instantiationMode==="EAGER"}/**
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
 */class om{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new rm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var pe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(pe||(pe={}));const am={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},lm=pe.INFO,cm={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},um=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=cm[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Io{constructor(e){this.name=e,this._logLevel=lm,this._logHandler=um,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?am[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const hm=(n,e)=>e.some(t=>n instanceof t);let pl,gl;function fm(){return pl||(pl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dm(){return gl||(gl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mu=new WeakMap,Zi=new WeakMap,Ou=new WeakMap,Fi=new WeakMap,Ro=new WeakMap;function mm(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(en(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Mu.set(t,n)}).catch(()=>{}),Ro.set(e,n),e}function pm(n){if(Zi.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Zi.set(n,e)}let eo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Zi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ou.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return en(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function gm(n){eo=n(eo)}function _m(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ui(this),e,...t);return Ou.set(r,e.sort?e.sort():[e]),en(r)}:dm().includes(n)?function(...e){return n.apply(Ui(this),e),en(Mu.get(this))}:function(...e){return en(n.apply(Ui(this),e))}}function ym(n){return typeof n=="function"?_m(n):(n instanceof IDBTransaction&&pm(n),hm(n,fm())?new Proxy(n,eo):n)}function en(n){if(n instanceof IDBRequest)return mm(n);if(Fi.has(n))return Fi.get(n);const e=ym(n);return e!==n&&(Fi.set(n,e),Ro.set(e,n)),e}const Ui=n=>Ro.get(n);function xu(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=en(a);return r&&a.addEventListener("upgradeneeded",c=>{r(en(a.result),c.oldVersion,c.newVersion,en(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const wm=["get","getKey","getAll","getAllKeys","count"],vm=["put","add","delete","clear"],Bi=new Map;function _l(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Bi.get(e))return Bi.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=vm.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||wm.includes(t)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[t](...l),s&&c.done]))[0]};return Bi.set(e,i),i}gm(n=>({...n,get:(e,t,r)=>_l(e,t)||n.get(e,t,r),has:(e,t)=>!!_l(e,t)||n.has(e,t)}));/**
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
 */class Am{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Em(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Em(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const to="@firebase/app",yl="0.11.3";/**
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
 */const Ht=new Io("@firebase/app"),bm="@firebase/app-compat",Tm="@firebase/analytics-compat",Im="@firebase/analytics",Rm="@firebase/app-check-compat",Cm="@firebase/app-check",km="@firebase/auth",Sm="@firebase/auth-compat",Pm="@firebase/database",Vm="@firebase/data-connect",Dm="@firebase/database-compat",Nm="@firebase/functions",Mm="@firebase/functions-compat",Om="@firebase/installations",xm="@firebase/installations-compat",Lm="@firebase/messaging",Fm="@firebase/messaging-compat",Um="@firebase/performance",Bm="@firebase/performance-compat",jm="@firebase/remote-config",qm="@firebase/remote-config-compat",zm="@firebase/storage",Hm="@firebase/storage-compat",Wm="@firebase/firestore",Gm="@firebase/vertexai",Km="@firebase/firestore-compat",$m="firebase",Qm="11.5.0";/**
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
 */const no="[DEFAULT]",Xm={[to]:"fire-core",[bm]:"fire-core-compat",[Im]:"fire-analytics",[Tm]:"fire-analytics-compat",[Cm]:"fire-app-check",[Rm]:"fire-app-check-compat",[km]:"fire-auth",[Sm]:"fire-auth-compat",[Pm]:"fire-rtdb",[Vm]:"fire-data-connect",[Dm]:"fire-rtdb-compat",[Nm]:"fire-fn",[Mm]:"fire-fn-compat",[Om]:"fire-iid",[xm]:"fire-iid-compat",[Lm]:"fire-fcm",[Fm]:"fire-fcm-compat",[Um]:"fire-perf",[Bm]:"fire-perf-compat",[jm]:"fire-rc",[qm]:"fire-rc-compat",[zm]:"fire-gcs",[Hm]:"fire-gcs-compat",[Wm]:"fire-fst",[Km]:"fire-fst-compat",[Gm]:"fire-vertex","fire-js":"fire-js",[$m]:"fire-js-all"};/**
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
 */const Os=new Map,Jm=new Map,ro=new Map;function wl(n,e){try{n.container.addComponent(e)}catch(t){Ht.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function sn(n){const e=n.name;if(ro.has(e))return Ht.debug(`There were multiple attempts to register component ${e}.`),!1;ro.set(e,n);for(const t of Os.values())wl(t,n);for(const t of Jm.values())wl(t,n);return!0}function Co(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ym(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Zm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},tn=new Js("app","Firebase",Zm);/**
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
 */class ep{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tn.create("app-deleted",{appName:this._name})}}/**
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
 */const tp=Qm;function Lu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:no,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw tn.create("bad-app-name",{appName:String(s)});if(t||(t=Vu()),!t)throw tn.create("no-options");const i=Os.get(s);if(i){if(Ms(t,i.options)&&Ms(r,i.config))return i;throw tn.create("duplicate-app",{appName:s})}const a=new om(s);for(const c of ro.values())a.addComponent(c);const l=new ep(t,r,a);return Os.set(s,l),l}function np(n=no){const e=Os.get(n);if(!e&&n===no&&Vu())return Lu();if(!e)throw tn.create("no-app",{appName:n});return e}function Dt(n,e,t){var r;let s=(r=Xm[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ht.warn(l.join(" "));return}sn(new zt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const rp="firebase-heartbeat-database",sp=1,xr="firebase-heartbeat-store";let ji=null;function Fu(){return ji||(ji=xu(rp,sp,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(xr)}catch(t){console.warn(t)}}}}).catch(n=>{throw tn.create("idb-open",{originalErrorMessage:n.message})})),ji}async function ip(n){try{const t=(await Fu()).transaction(xr),r=await t.objectStore(xr).get(Uu(n));return await t.done,r}catch(e){if(e instanceof fn)Ht.warn(e.message);else{const t=tn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ht.warn(t.message)}}}async function vl(n,e){try{const r=(await Fu()).transaction(xr,"readwrite");await r.objectStore(xr).put(e,Uu(n)),await r.done}catch(t){if(t instanceof fn)Ht.warn(t.message);else{const r=tn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ht.warn(r.message)}}}function Uu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const op=1024,ap=30;class lp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new up(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Al();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>ap){const a=hp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ht.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Al(),{heartbeatsToSend:r,unsentEntries:s}=cp(this._heartbeatsCache.heartbeats),i=Ns(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Ht.warn(t),""}}}function Al(){return new Date().toISOString().substring(0,10)}function cp(n,e=op){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),El(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),El(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class up{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Du()?Nu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ip(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return vl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return vl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function El(n){return Ns(JSON.stringify({version:2,heartbeats:n})).length}function hp(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function fp(n){sn(new zt("platform-logger",e=>new Am(e),"PRIVATE")),sn(new zt("heartbeat",e=>new lp(e),"PRIVATE")),Dt(to,yl,n),Dt(to,yl,"esm2017"),Dt("fire-js","")}fp("");var dp="firebase",mp="11.5.0";/**
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
 */Dt(dp,mp,"app");const Bu="@firebase/installations",ko="0.6.13";/**
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
 */const ju=1e4,qu=`w:${ko}`,zu="FIS_v2",pp="https://firebaseinstallations.googleapis.com/v1",gp=60*60*1e3,_p="installations",yp="Installations";/**
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
 */const wp={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},In=new Js(_p,yp,wp);function Hu(n){return n instanceof fn&&n.code.includes("request-failed")}/**
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
 */function Wu({projectId:n}){return`${pp}/projects/${n}/installations`}function Gu(n){return{token:n.token,requestStatus:2,expiresIn:Ap(n.expiresIn),creationTime:Date.now()}}async function Ku(n,e){const r=(await e.json()).error;return In.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function $u({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function vp(n,{refreshToken:e}){const t=$u(n);return t.append("Authorization",Ep(e)),t}async function Qu(n){const e=await n();return e.status>=500&&e.status<600?n():e}function Ap(n){return Number(n.replace("s","000"))}function Ep(n){return`${zu} ${n}`}/**
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
 */function Tp(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Ip=/^[cdef][\w-]{21}$/,so="";function Rp(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=Cp(n);return Ip.test(t)?t:so}catch{return so}}function Cp(n){return Tp(n).substr(0,22)}/**
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
 */const Ju=new Map;function Yu(n,e){const t=Ys(n);Zu(t,e),kp(t,e)}function Zu(n,e){const t=Ju.get(n);if(t)for(const r of t)r(e)}function kp(n,e){const t=Sp();t&&t.postMessage({key:n,fid:e}),Pp()}let bn=null;function Sp(){return!bn&&"BroadcastChannel"in self&&(bn=new BroadcastChannel("[Firebase] FID Change"),bn.onmessage=n=>{Zu(n.data.key,n.data.fid)}),bn}function Pp(){Ju.size===0&&bn&&(bn.close(),bn=null)}/**
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
 */const Vp="firebase-installations-database",Dp=1,Rn="firebase-installations-store";let qi=null;function So(){return qi||(qi=xu(Vp,Dp,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Rn)}}})),qi}async function xs(n,e){const t=Ys(n),s=(await So()).transaction(Rn,"readwrite"),i=s.objectStore(Rn),a=await i.get(t);return await i.put(e,t),await s.done,(!a||a.fid!==e.fid)&&Yu(n,e.fid),e}async function eh(n){const e=Ys(n),r=(await So()).transaction(Rn,"readwrite");await r.objectStore(Rn).delete(e),await r.done}async function Zs(n,e){const t=Ys(n),s=(await So()).transaction(Rn,"readwrite"),i=s.objectStore(Rn),a=await i.get(t),l=e(a);return l===void 0?await i.delete(t):await i.put(l,t),await s.done,l&&(!a||a.fid!==l.fid)&&Yu(n,l.fid),l}/**
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
 */async function Po(n){let e;const t=await Zs(n.appConfig,r=>{const s=Np(r),i=Mp(n,s);return e=i.registrationPromise,i.installationEntry});return t.fid===so?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Np(n){const e=n||{fid:Rp(),registrationStatus:0};return th(e)}function Mp(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(In.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Op(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:xp(n)}:{installationEntry:e}}async function Op(n,e){try{const t=await bp(n,e);return xs(n.appConfig,t)}catch(t){throw Hu(t)&&t.customData.serverCode===409?await eh(n.appConfig):await xs(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function xp(n){let e=await bl(n.appConfig);for(;e.registrationStatus===1;)await Xu(100),e=await bl(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await Po(n);return r||t}return e}function bl(n){return Zs(n,e=>{if(!e)throw In.create("installation-not-found");return th(e)})}function th(n){return Lp(n)?{fid:n.fid,registrationStatus:0}:n}function Lp(n){return n.registrationStatus===1&&n.registrationTime+ju<Date.now()}/**
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
 */async function Fp({appConfig:n,heartbeatServiceProvider:e},t){const r=Up(n,t),s=vp(n,t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const a={installation:{sdkVersion:qu,appId:n.appId}},l={method:"POST",headers:s,body:JSON.stringify(a)},c=await Qu(()=>fetch(r,l));if(c.ok){const u=await c.json();return Gu(u)}else throw await Ku("Generate Auth Token",c)}function Up(n,{fid:e}){return`${Wu(n)}/${e}/authTokens:generate`}/**
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
 */async function Vo(n,e=!1){let t;const r=await Zs(n.appConfig,i=>{if(!nh(i))throw In.create("not-registered");const a=i.authToken;if(!e&&qp(a))return i;if(a.requestStatus===1)return t=Bp(n,e),i;{if(!navigator.onLine)throw In.create("app-offline");const l=Hp(i);return t=jp(n,l),l}});return t?await t:r.authToken}async function Bp(n,e){let t=await Tl(n.appConfig);for(;t.authToken.requestStatus===1;)await Xu(100),t=await Tl(n.appConfig);const r=t.authToken;return r.requestStatus===0?Vo(n,e):r}function Tl(n){return Zs(n,e=>{if(!nh(e))throw In.create("not-registered");const t=e.authToken;return Wp(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function jp(n,e){try{const t=await Fp(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await xs(n.appConfig,r),t}catch(t){if(Hu(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await eh(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await xs(n.appConfig,r)}throw t}}function nh(n){return n!==void 0&&n.registrationStatus===2}function qp(n){return n.requestStatus===2&&!zp(n)}function zp(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+gp}function Hp(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function Wp(n){return n.requestStatus===1&&n.requestTime+ju<Date.now()}/**
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
 */async function Gp(n){const e=n,{installationEntry:t,registrationPromise:r}=await Po(e);return r?r.catch(console.error):Vo(e).catch(console.error),t.fid}/**
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
 */async function Kp(n,e=!1){const t=n;return await $p(t),(await Vo(t,e)).token}async function $p(n){const{registrationPromise:e}=await Po(n);e&&await e}/**
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
 */function Qp(n){if(!n||!n.options)throw zi("App Configuration");if(!n.name)throw zi("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw zi(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function zi(n){return In.create("missing-app-config-values",{valueName:n})}/**
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
 */const rh="installations",Xp="installations-internal",Jp=n=>{const e=n.getProvider("app").getImmediate(),t=Qp(e),r=Co(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Yp=n=>{const e=n.getProvider("app").getImmediate(),t=Co(e,rh).getImmediate();return{getId:()=>Gp(t),getToken:s=>Kp(t,s)}};function Zp(){sn(new zt(rh,Jp,"PUBLIC")),sn(new zt(Xp,Yp,"PRIVATE"))}Zp();Dt(Bu,ko);Dt(Bu,ko,"esm2017");/**
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
 */const Il="analytics",eg="firebase_id",tg="origin",ng=60*1e3,rg="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Do="https://www.googletagmanager.com/gtag/js";/**
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
 */const lt=new Io("@firebase/analytics");/**
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
 */const sg={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},vt=new Js("analytics","Analytics",sg);/**
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
 */function ig(n){if(!n.startsWith(Do)){const e=vt.create("invalid-gtag-resource",{gtagURL:n});return lt.warn(e.message),""}return n}function sh(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function og(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function ag(n,e){const t=og("firebase-js-sdk-policy",{createScriptURL:ig}),r=document.createElement("script"),s=`${Do}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function lg(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function cg(n,e,t,r,s,i){const a=r[s];try{if(a)await e[a];else{const c=(await sh(t)).find(u=>u.measurementId===s);c&&await e[c.appId]}}catch(l){lt.error(l)}n("config",s,i)}async function ug(n,e,t,r,s){try{let i=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const l=await sh(t);for(const c of a){const u=l.find(m=>m.measurementId===c),f=u&&e[u.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),n("event",r,s||{})}catch(i){lt.error(i)}}function hg(n,e,t,r){async function s(i,...a){try{if(i==="event"){const[l,c]=a;await ug(n,e,t,l,c)}else if(i==="config"){const[l,c]=a;await cg(n,e,t,r,l,c)}else if(i==="consent"){const[l,c]=a;n("consent",l,c)}else if(i==="get"){const[l,c,u]=a;n("get",l,c,u)}else if(i==="set"){const[l]=a;n("set",l)}else n(i,...a)}catch(l){lt.error(l)}}return s}function fg(n,e,t,r,s){let i=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=hg(i,n,e,t),{gtagCore:i,wrappedGtag:window[s]}}function dg(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Do)&&t.src.includes(n))return t;return null}/**
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
 */const mg=30,pg=1e3;class gg{constructor(e={},t=pg){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ih=new gg;function _g(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function yg(n){var e;const{appId:t,apiKey:r}=n,s={method:"GET",headers:_g(r)},i=rg.replace("{app-id}",t),a=await fetch(i,s);if(a.status!==200&&a.status!==304){let l="";try{const c=await a.json();!((e=c.error)===null||e===void 0)&&e.message&&(l=c.error.message)}catch{}throw vt.create("config-fetch-failed",{httpStatus:a.status,responseMessage:l})}return a.json()}async function wg(n,e=ih,t){const{appId:r,apiKey:s,measurementId:i}=n.options;if(!r)throw vt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw vt.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new Eg;return setTimeout(async()=>{l.abort()},ng),oh({appId:r,apiKey:s,measurementId:i},a,l,e)}async function oh(n,{throttleEndTimeMillis:e,backoffCount:t},r,s=ih){var i;const{appId:a,measurementId:l}=n;try{await vg(r,e)}catch(c){if(l)return lt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:a,measurementId:l};throw c}try{const c=await yg(n);return s.deleteThrottleMetadata(a),c}catch(c){const u=c;if(!Ag(u)){if(s.deleteThrottleMetadata(a),l)return lt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:l};throw c}const f=Number((i=u==null?void 0:u.customData)===null||i===void 0?void 0:i.httpStatus)===503?ml(t,s.intervalMillis,mg):ml(t,s.intervalMillis),m={throttleEndTimeMillis:Date.now()+f,backoffCount:t+1};return s.setThrottleMetadata(a,m),lt.debug(`Calling attemptFetch again in ${f} millis`),oh(n,m,r,s)}}function vg(n,e){return new Promise((t,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(i),r(vt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Ag(n){if(!(n instanceof fn)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class Eg{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function bg(n,e,t,r,s){if(s&&s.global){n("event",t,r);return}else{const i=await e,a=Object.assign(Object.assign({},r),{send_to:i});n("event",t,a)}}/**
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
 */async function Tg(){if(Du())try{await Nu()}catch(n){return lt.warn(vt.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return lt.warn(vt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Ig(n,e,t,r,s,i,a){var l;const c=wg(n);c.then(y=>{t[y.measurementId]=y.appId,n.options.measurementId&&y.measurementId!==n.options.measurementId&&lt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${y.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(y=>lt.error(y)),e.push(c);const u=Tg().then(y=>{if(y)return r.getId()}),[f,m]=await Promise.all([c,u]);dg(i)||ag(i,f.measurementId),s("js",new Date);const g=(l=a==null?void 0:a.config)!==null&&l!==void 0?l:{};return g[tg]="firebase",g.update=!0,m!=null&&(g[eg]=m),s("config",f.measurementId,g),f.measurementId}/**
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
 */class Rg{constructor(e){this.app=e}_delete(){return delete kr[this.app.options.appId],Promise.resolve()}}let kr={},Rl=[];const Cl={};let Hi="dataLayer",Cg="gtag",kl,ah,Sl=!1;function kg(){const n=[];if(Kd()&&n.push("This is a browser extension environment."),Qd()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),t=vt.create("invalid-analytics-context",{errorInfo:e});lt.warn(t.message)}}function Sg(n,e,t){kg();const r=n.options.appId;if(!r)throw vt.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)lt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw vt.create("no-api-key");if(kr[r]!=null)throw vt.create("already-exists",{id:r});if(!Sl){lg(Hi);const{wrappedGtag:i,gtagCore:a}=fg(kr,Rl,Cl,Hi,Cg);ah=i,kl=a,Sl=!0}return kr[r]=Ig(n,Rl,Cl,e,kl,Hi,t),new Rg(n)}function Pg(n,e,t,r){n=kt(n),bg(ah,kr[n.app.options.appId],e,t,r).catch(s=>lt.error(s))}const Pl="@firebase/analytics",Vl="0.10.12";function Vg(){sn(new zt(Il,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Sg(r,s,t)},"PUBLIC")),sn(new zt("analytics-internal",n,"PRIVATE")),Dt(Pl,Vl),Dt(Pl,Vl,"esm2017");function n(e){try{const t=e.getProvider(Il).getImmediate();return{logEvent:(r,s,i)=>Pg(t,r,s,i)}}catch(t){throw vt.create("interop-component-reg-failed",{reason:t})}}}Vg();var Dl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var nn,lh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,_){function v(){}v.prototype=_.prototype,A.D=_.prototype,A.prototype=new v,A.prototype.constructor=A,A.C=function(b,I,P){for(var w=Array(arguments.length-2),H=2;H<arguments.length;H++)w[H-2]=arguments[H];return _.prototype[I].apply(b,w)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,_,v){v||(v=0);var b=Array(16);if(typeof _=="string")for(var I=0;16>I;++I)b[I]=_.charCodeAt(v++)|_.charCodeAt(v++)<<8|_.charCodeAt(v++)<<16|_.charCodeAt(v++)<<24;else for(I=0;16>I;++I)b[I]=_[v++]|_[v++]<<8|_[v++]<<16|_[v++]<<24;_=A.g[0],v=A.g[1],I=A.g[2];var P=A.g[3],w=_+(P^v&(I^P))+b[0]+3614090360&4294967295;_=v+(w<<7&4294967295|w>>>25),w=P+(I^_&(v^I))+b[1]+3905402710&4294967295,P=_+(w<<12&4294967295|w>>>20),w=I+(v^P&(_^v))+b[2]+606105819&4294967295,I=P+(w<<17&4294967295|w>>>15),w=v+(_^I&(P^_))+b[3]+3250441966&4294967295,v=I+(w<<22&4294967295|w>>>10),w=_+(P^v&(I^P))+b[4]+4118548399&4294967295,_=v+(w<<7&4294967295|w>>>25),w=P+(I^_&(v^I))+b[5]+1200080426&4294967295,P=_+(w<<12&4294967295|w>>>20),w=I+(v^P&(_^v))+b[6]+2821735955&4294967295,I=P+(w<<17&4294967295|w>>>15),w=v+(_^I&(P^_))+b[7]+4249261313&4294967295,v=I+(w<<22&4294967295|w>>>10),w=_+(P^v&(I^P))+b[8]+1770035416&4294967295,_=v+(w<<7&4294967295|w>>>25),w=P+(I^_&(v^I))+b[9]+2336552879&4294967295,P=_+(w<<12&4294967295|w>>>20),w=I+(v^P&(_^v))+b[10]+4294925233&4294967295,I=P+(w<<17&4294967295|w>>>15),w=v+(_^I&(P^_))+b[11]+2304563134&4294967295,v=I+(w<<22&4294967295|w>>>10),w=_+(P^v&(I^P))+b[12]+1804603682&4294967295,_=v+(w<<7&4294967295|w>>>25),w=P+(I^_&(v^I))+b[13]+4254626195&4294967295,P=_+(w<<12&4294967295|w>>>20),w=I+(v^P&(_^v))+b[14]+2792965006&4294967295,I=P+(w<<17&4294967295|w>>>15),w=v+(_^I&(P^_))+b[15]+1236535329&4294967295,v=I+(w<<22&4294967295|w>>>10),w=_+(I^P&(v^I))+b[1]+4129170786&4294967295,_=v+(w<<5&4294967295|w>>>27),w=P+(v^I&(_^v))+b[6]+3225465664&4294967295,P=_+(w<<9&4294967295|w>>>23),w=I+(_^v&(P^_))+b[11]+643717713&4294967295,I=P+(w<<14&4294967295|w>>>18),w=v+(P^_&(I^P))+b[0]+3921069994&4294967295,v=I+(w<<20&4294967295|w>>>12),w=_+(I^P&(v^I))+b[5]+3593408605&4294967295,_=v+(w<<5&4294967295|w>>>27),w=P+(v^I&(_^v))+b[10]+38016083&4294967295,P=_+(w<<9&4294967295|w>>>23),w=I+(_^v&(P^_))+b[15]+3634488961&4294967295,I=P+(w<<14&4294967295|w>>>18),w=v+(P^_&(I^P))+b[4]+3889429448&4294967295,v=I+(w<<20&4294967295|w>>>12),w=_+(I^P&(v^I))+b[9]+568446438&4294967295,_=v+(w<<5&4294967295|w>>>27),w=P+(v^I&(_^v))+b[14]+3275163606&4294967295,P=_+(w<<9&4294967295|w>>>23),w=I+(_^v&(P^_))+b[3]+4107603335&4294967295,I=P+(w<<14&4294967295|w>>>18),w=v+(P^_&(I^P))+b[8]+1163531501&4294967295,v=I+(w<<20&4294967295|w>>>12),w=_+(I^P&(v^I))+b[13]+2850285829&4294967295,_=v+(w<<5&4294967295|w>>>27),w=P+(v^I&(_^v))+b[2]+4243563512&4294967295,P=_+(w<<9&4294967295|w>>>23),w=I+(_^v&(P^_))+b[7]+1735328473&4294967295,I=P+(w<<14&4294967295|w>>>18),w=v+(P^_&(I^P))+b[12]+2368359562&4294967295,v=I+(w<<20&4294967295|w>>>12),w=_+(v^I^P)+b[5]+4294588738&4294967295,_=v+(w<<4&4294967295|w>>>28),w=P+(_^v^I)+b[8]+2272392833&4294967295,P=_+(w<<11&4294967295|w>>>21),w=I+(P^_^v)+b[11]+1839030562&4294967295,I=P+(w<<16&4294967295|w>>>16),w=v+(I^P^_)+b[14]+4259657740&4294967295,v=I+(w<<23&4294967295|w>>>9),w=_+(v^I^P)+b[1]+2763975236&4294967295,_=v+(w<<4&4294967295|w>>>28),w=P+(_^v^I)+b[4]+1272893353&4294967295,P=_+(w<<11&4294967295|w>>>21),w=I+(P^_^v)+b[7]+4139469664&4294967295,I=P+(w<<16&4294967295|w>>>16),w=v+(I^P^_)+b[10]+3200236656&4294967295,v=I+(w<<23&4294967295|w>>>9),w=_+(v^I^P)+b[13]+681279174&4294967295,_=v+(w<<4&4294967295|w>>>28),w=P+(_^v^I)+b[0]+3936430074&4294967295,P=_+(w<<11&4294967295|w>>>21),w=I+(P^_^v)+b[3]+3572445317&4294967295,I=P+(w<<16&4294967295|w>>>16),w=v+(I^P^_)+b[6]+76029189&4294967295,v=I+(w<<23&4294967295|w>>>9),w=_+(v^I^P)+b[9]+3654602809&4294967295,_=v+(w<<4&4294967295|w>>>28),w=P+(_^v^I)+b[12]+3873151461&4294967295,P=_+(w<<11&4294967295|w>>>21),w=I+(P^_^v)+b[15]+530742520&4294967295,I=P+(w<<16&4294967295|w>>>16),w=v+(I^P^_)+b[2]+3299628645&4294967295,v=I+(w<<23&4294967295|w>>>9),w=_+(I^(v|~P))+b[0]+4096336452&4294967295,_=v+(w<<6&4294967295|w>>>26),w=P+(v^(_|~I))+b[7]+1126891415&4294967295,P=_+(w<<10&4294967295|w>>>22),w=I+(_^(P|~v))+b[14]+2878612391&4294967295,I=P+(w<<15&4294967295|w>>>17),w=v+(P^(I|~_))+b[5]+4237533241&4294967295,v=I+(w<<21&4294967295|w>>>11),w=_+(I^(v|~P))+b[12]+1700485571&4294967295,_=v+(w<<6&4294967295|w>>>26),w=P+(v^(_|~I))+b[3]+2399980690&4294967295,P=_+(w<<10&4294967295|w>>>22),w=I+(_^(P|~v))+b[10]+4293915773&4294967295,I=P+(w<<15&4294967295|w>>>17),w=v+(P^(I|~_))+b[1]+2240044497&4294967295,v=I+(w<<21&4294967295|w>>>11),w=_+(I^(v|~P))+b[8]+1873313359&4294967295,_=v+(w<<6&4294967295|w>>>26),w=P+(v^(_|~I))+b[15]+4264355552&4294967295,P=_+(w<<10&4294967295|w>>>22),w=I+(_^(P|~v))+b[6]+2734768916&4294967295,I=P+(w<<15&4294967295|w>>>17),w=v+(P^(I|~_))+b[13]+1309151649&4294967295,v=I+(w<<21&4294967295|w>>>11),w=_+(I^(v|~P))+b[4]+4149444226&4294967295,_=v+(w<<6&4294967295|w>>>26),w=P+(v^(_|~I))+b[11]+3174756917&4294967295,P=_+(w<<10&4294967295|w>>>22),w=I+(_^(P|~v))+b[2]+718787259&4294967295,I=P+(w<<15&4294967295|w>>>17),w=v+(P^(I|~_))+b[9]+3951481745&4294967295,A.g[0]=A.g[0]+_&4294967295,A.g[1]=A.g[1]+(I+(w<<21&4294967295|w>>>11))&4294967295,A.g[2]=A.g[2]+I&4294967295,A.g[3]=A.g[3]+P&4294967295}r.prototype.u=function(A,_){_===void 0&&(_=A.length);for(var v=_-this.blockSize,b=this.B,I=this.h,P=0;P<_;){if(I==0)for(;P<=v;)s(this,A,P),P+=this.blockSize;if(typeof A=="string"){for(;P<_;)if(b[I++]=A.charCodeAt(P++),I==this.blockSize){s(this,b),I=0;break}}else for(;P<_;)if(b[I++]=A[P++],I==this.blockSize){s(this,b),I=0;break}}this.h=I,this.o+=_},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var _=1;_<A.length-8;++_)A[_]=0;var v=8*this.o;for(_=A.length-8;_<A.length;++_)A[_]=v&255,v/=256;for(this.u(A),A=Array(16),_=v=0;4>_;++_)for(var b=0;32>b;b+=8)A[v++]=this.g[_]>>>b&255;return A};function i(A,_){var v=l;return Object.prototype.hasOwnProperty.call(v,A)?v[A]:v[A]=_(A)}function a(A,_){this.h=_;for(var v=[],b=!0,I=A.length-1;0<=I;I--){var P=A[I]|0;b&&P==_||(v[I]=P,b=!1)}this.g=v}var l={};function c(A){return-128<=A&&128>A?i(A,function(_){return new a([_|0],0>_?-1:0)}):new a([A|0],0>A?-1:0)}function u(A){if(isNaN(A)||!isFinite(A))return m;if(0>A)return C(u(-A));for(var _=[],v=1,b=0;A>=v;b++)_[b]=A/v|0,v*=4294967296;return new a(_,0)}function f(A,_){if(A.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(A.charAt(0)=="-")return C(f(A.substring(1),_));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=u(Math.pow(_,8)),b=m,I=0;I<A.length;I+=8){var P=Math.min(8,A.length-I),w=parseInt(A.substring(I,I+P),_);8>P?(P=u(Math.pow(_,P)),b=b.j(P).add(u(w))):(b=b.j(v),b=b.add(u(w)))}return b}var m=c(0),g=c(1),y=c(16777216);n=a.prototype,n.m=function(){if(R(this))return-C(this).m();for(var A=0,_=1,v=0;v<this.g.length;v++){var b=this.i(v);A+=(0<=b?b:4294967296+b)*_,_*=4294967296}return A},n.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(E(this))return"0";if(R(this))return"-"+C(this).toString(A);for(var _=u(Math.pow(A,6)),v=this,b="";;){var I=M(v,_).g;v=D(v,I.j(_));var P=((0<v.g.length?v.g[0]:v.h)>>>0).toString(A);if(v=I,E(v))return P+b;for(;6>P.length;)P="0"+P;b=P+b}},n.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function E(A){if(A.h!=0)return!1;for(var _=0;_<A.g.length;_++)if(A.g[_]!=0)return!1;return!0}function R(A){return A.h==-1}n.l=function(A){return A=D(this,A),R(A)?-1:E(A)?0:1};function C(A){for(var _=A.g.length,v=[],b=0;b<_;b++)v[b]=~A.g[b];return new a(v,~A.h).add(g)}n.abs=function(){return R(this)?C(this):this},n.add=function(A){for(var _=Math.max(this.g.length,A.g.length),v=[],b=0,I=0;I<=_;I++){var P=b+(this.i(I)&65535)+(A.i(I)&65535),w=(P>>>16)+(this.i(I)>>>16)+(A.i(I)>>>16);b=w>>>16,P&=65535,w&=65535,v[I]=w<<16|P}return new a(v,v[v.length-1]&-2147483648?-1:0)};function D(A,_){return A.add(C(_))}n.j=function(A){if(E(this)||E(A))return m;if(R(this))return R(A)?C(this).j(C(A)):C(C(this).j(A));if(R(A))return C(this.j(C(A)));if(0>this.l(y)&&0>A.l(y))return u(this.m()*A.m());for(var _=this.g.length+A.g.length,v=[],b=0;b<2*_;b++)v[b]=0;for(b=0;b<this.g.length;b++)for(var I=0;I<A.g.length;I++){var P=this.i(b)>>>16,w=this.i(b)&65535,H=A.i(I)>>>16,Ee=A.i(I)&65535;v[2*b+2*I]+=w*Ee,L(v,2*b+2*I),v[2*b+2*I+1]+=P*Ee,L(v,2*b+2*I+1),v[2*b+2*I+1]+=w*H,L(v,2*b+2*I+1),v[2*b+2*I+2]+=P*H,L(v,2*b+2*I+2)}for(b=0;b<_;b++)v[b]=v[2*b+1]<<16|v[2*b];for(b=_;b<2*_;b++)v[b]=0;return new a(v,0)};function L(A,_){for(;(A[_]&65535)!=A[_];)A[_+1]+=A[_]>>>16,A[_]&=65535,_++}function F(A,_){this.g=A,this.h=_}function M(A,_){if(E(_))throw Error("division by zero");if(E(A))return new F(m,m);if(R(A))return _=M(C(A),_),new F(C(_.g),C(_.h));if(R(_))return _=M(A,C(_)),new F(C(_.g),_.h);if(30<A.g.length){if(R(A)||R(_))throw Error("slowDivide_ only works with positive integers.");for(var v=g,b=_;0>=b.l(A);)v=G(v),b=G(b);var I=X(v,1),P=X(b,1);for(b=X(b,2),v=X(v,2);!E(b);){var w=P.add(b);0>=w.l(A)&&(I=I.add(v),P=w),b=X(b,1),v=X(v,1)}return _=D(A,I.j(_)),new F(I,_)}for(I=m;0<=A.l(_);){for(v=Math.max(1,Math.floor(A.m()/_.m())),b=Math.ceil(Math.log(v)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),P=u(v),w=P.j(_);R(w)||0<w.l(A);)v-=b,P=u(v),w=P.j(_);E(P)&&(P=g),I=I.add(P),A=D(A,w)}return new F(I,A)}n.A=function(A){return M(this,A).h},n.and=function(A){for(var _=Math.max(this.g.length,A.g.length),v=[],b=0;b<_;b++)v[b]=this.i(b)&A.i(b);return new a(v,this.h&A.h)},n.or=function(A){for(var _=Math.max(this.g.length,A.g.length),v=[],b=0;b<_;b++)v[b]=this.i(b)|A.i(b);return new a(v,this.h|A.h)},n.xor=function(A){for(var _=Math.max(this.g.length,A.g.length),v=[],b=0;b<_;b++)v[b]=this.i(b)^A.i(b);return new a(v,this.h^A.h)};function G(A){for(var _=A.g.length+1,v=[],b=0;b<_;b++)v[b]=A.i(b)<<1|A.i(b-1)>>>31;return new a(v,A.h)}function X(A,_){var v=_>>5;_%=32;for(var b=A.g.length-v,I=[],P=0;P<b;P++)I[P]=0<_?A.i(P+v)>>>_|A.i(P+v+1)<<32-_:A.i(P+v);return new a(I,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,lh=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=u,a.fromString=f,nn=a}).apply(typeof Dl<"u"?Dl:typeof self<"u"?self:typeof window<"u"?window:{});var ys=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ch,Tr,uh,Cs,io,hh,fh,dh;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,h,d){return o==Array.prototype||o==Object.prototype||(o[h]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ys=="object"&&ys];for(var h=0;h<o.length;++h){var d=o[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(o,h){if(h)e:{var d=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var V=o[p];if(!(V in d))break e;d=d[V]}o=o[o.length-1],p=d[o],h=h(p),h!=p&&h!=null&&e(d,o,{configurable:!0,writable:!0,value:h})}}function i(o,h){o instanceof String&&(o+="");var d=0,p=!1,V={next:function(){if(!p&&d<o.length){var O=d++;return{value:h(O,o[O]),done:!1}}return p=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}s("Array.prototype.values",function(o){return o||function(){return i(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var h=typeof o;return h=h!="object"?h:o?Array.isArray(o)?"array":h:"null",h=="array"||h=="object"&&typeof o.length=="number"}function u(o){var h=typeof o;return h=="object"&&o!=null||h=="function"}function f(o,h,d){return o.call.apply(o.bind,arguments)}function m(o,h,d){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,p),o.apply(h,V)}}return function(){return o.apply(h,arguments)}}function g(o,h,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,g.apply(null,arguments)}function y(o,h){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function E(o,h){function d(){}d.prototype=h.prototype,o.aa=h.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(p,V,O){for(var z=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)z[Te-2]=arguments[Te];return h.prototype[V].apply(p,z)}}function R(o){const h=o.length;if(0<h){const d=Array(h);for(let p=0;p<h;p++)d[p]=o[p];return d}return[]}function C(o,h){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(c(p)){const V=o.length||0,O=p.length||0;o.length=V+O;for(let z=0;z<O;z++)o[V+z]=p[z]}else o.push(p)}}class D{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function L(o){return/^[\s\xa0]*$/.test(o)}function F(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function M(o){return M[" "](o),o}M[" "]=function(){};var G=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function X(o,h,d){for(const p in o)h.call(d,o[p],p,o)}function A(o,h){for(const d in o)h.call(void 0,o[d],d,o)}function _(o){const h={};for(const d in o)h[d]=o[d];return h}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(o,h){let d,p;for(let V=1;V<arguments.length;V++){p=arguments[V];for(d in p)o[d]=p[d];for(let O=0;O<v.length;O++)d=v[O],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function I(o){var h=1;o=o.split(":");const d=[];for(;0<h&&o.length;)d.push(o.shift()),h--;return o.length&&d.push(o.join(":")),d}function P(o){l.setTimeout(()=>{throw o},0)}function w(){var o=ar;let h=null;return o.g&&(h=o.g,o.g=o.g.next,o.g||(o.h=null),h.next=null),h}class H{constructor(){this.h=this.g=null}add(h,d){const p=Ee.get();p.set(h,d),this.h?this.h.next=p:this.g=p,this.h=p}}var Ee=new D(()=>new St,o=>o.reset());class St{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let yt,pn=!1,ar=new H,N=()=>{const o=l.Promise.resolve(void 0);yt=()=>{o.then(k)}};var k=()=>{for(var o;o=w();){try{o.h.call(o.g)}catch(d){P(d)}var h=Ee;h.j(o),100>h.h&&(h.h++,o.next=h.g,h.g=o)}pn=!1};function Q(){this.s=this.s,this.C=this.C}Q.prototype.s=!1,Q.prototype.ma=function(){this.s||(this.s=!0,this.N())},Q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function $(o,h){this.type=o,this.g=this.target=h,this.defaultPrevented=!1}$.prototype.h=function(){this.defaultPrevented=!0};var le=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,h=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return o}();function oe(o,h){if($.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=h,h=o.relatedTarget){if(G){e:{try{M(h.nodeName);var V=!0;break e}catch{}V=!1}V||(h=null)}}else d=="mouseover"?h=o.fromElement:d=="mouseout"&&(h=o.toElement);this.relatedTarget=h,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:ue[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&oe.aa.h.call(this)}}E(oe,$);var ue={2:"touch",3:"pen",4:"mouse"};oe.prototype.h=function(){oe.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var te="closure_listenable_"+(1e6*Math.random()|0),he=0;function Ae(o,h,d,p,V){this.listener=o,this.proxy=null,this.src=h,this.type=d,this.capture=!!p,this.ha=V,this.key=++he,this.da=this.fa=!1}function be(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ye(o){this.src=o,this.g={},this.h=0}ye.prototype.add=function(o,h,d,p,V){var O=o.toString();o=this.g[O],o||(o=this.g[O]=[],this.h++);var z=Ve(o,h,p,V);return-1<z?(h=o[z],d||(h.fa=!1)):(h=new Ae(h,this.src,O,!!p,V),h.fa=d,o.push(h)),h};function Ie(o,h){var d=h.type;if(d in o.g){var p=o.g[d],V=Array.prototype.indexOf.call(p,h,void 0),O;(O=0<=V)&&Array.prototype.splice.call(p,V,1),O&&(be(h),o.g[d].length==0&&(delete o.g[d],o.h--))}}function Ve(o,h,d,p){for(var V=0;V<o.length;++V){var O=o[V];if(!O.da&&O.listener==h&&O.capture==!!d&&O.ha==p)return V}return-1}var fe="closure_lm_"+(1e6*Math.random()|0),Be={};function st(o,h,d,p,V){if(Array.isArray(h)){for(var O=0;O<h.length;O++)st(o,h[O],d,p,V);return null}return d=es(d),o&&o[te]?o.K(h,d,u(p)?!!p.capture:!!p,V):ut(o,h,d,!1,p,V)}function ut(o,h,d,p,V,O){if(!h)throw Error("Invalid event type");var z=u(V)?!!V.capture:!!V,Te=lr(o);if(Te||(o[fe]=Te=new ye(o)),d=Te.add(h,d,p,z,O),d.proxy)return d;if(p=It(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)le||(V=z),V===void 0&&(V=!1),o.addEventListener(h.toString(),p,V);else if(o.attachEvent)o.attachEvent(Zr(h.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function It(){function o(d){return h.call(o.src,o.listener,d)}const h=wi;return o}function Pt(o,h,d,p,V){if(Array.isArray(h))for(var O=0;O<h.length;O++)Pt(o,h[O],d,p,V);else p=u(p)?!!p.capture:!!p,d=es(d),o&&o[te]?(o=o.i,h=String(h).toString(),h in o.g&&(O=o.g[h],d=Ve(O,d,p,V),-1<d&&(be(O[d]),Array.prototype.splice.call(O,d,1),O.length==0&&(delete o.g[h],o.h--)))):o&&(o=lr(o))&&(h=o.g[h.toString()],o=-1,h&&(o=Ve(h,d,p,V)),(d=-1<o?h[o]:null)&&it(d))}function it(o){if(typeof o!="number"&&o&&!o.da){var h=o.src;if(h&&h[te])Ie(h.i,o);else{var d=o.type,p=o.proxy;h.removeEventListener?h.removeEventListener(d,p,o.capture):h.detachEvent?h.detachEvent(Zr(d),p):h.addListener&&h.removeListener&&h.removeListener(p),(d=lr(h))?(Ie(d,o),d.h==0&&(d.src=null,h[fe]=null)):be(o)}}}function Zr(o){return o in Be?Be[o]:Be[o]="on"+o}function wi(o,h){if(o.da)o=!0;else{h=new oe(h,this);var d=o.listener,p=o.ha||o.src;o.fa&&it(o),o=d.call(p,h)}return o}function lr(o){return o=o[fe],o instanceof ye?o:null}var Vn="__closure_events_fn_"+(1e9*Math.random()>>>0);function es(o){return typeof o=="function"?o:(o[Vn]||(o[Vn]=function(h){return o.handleEvent(h)}),o[Vn])}function Me(){Q.call(this),this.i=new ye(this),this.M=this,this.F=null}E(Me,Q),Me.prototype[te]=!0,Me.prototype.removeEventListener=function(o,h,d,p){Pt(this,o,h,d,p)};function qe(o,h){var d,p=o.F;if(p)for(d=[];p;p=p.F)d.push(p);if(o=o.M,p=h.type||h,typeof h=="string")h=new $(h,o);else if(h instanceof $)h.target=h.target||o;else{var V=h;h=new $(p,o),b(h,V)}if(V=!0,d)for(var O=d.length-1;0<=O;O--){var z=h.g=d[O];V=Dn(z,p,!0,h)&&V}if(z=h.g=o,V=Dn(z,p,!0,h)&&V,V=Dn(z,p,!1,h)&&V,d)for(O=0;O<d.length;O++)z=h.g=d[O],V=Dn(z,p,!1,h)&&V}Me.prototype.N=function(){if(Me.aa.N.call(this),this.i){var o=this.i,h;for(h in o.g){for(var d=o.g[h],p=0;p<d.length;p++)be(d[p]);delete o.g[h],o.h--}}this.F=null},Me.prototype.K=function(o,h,d,p){return this.i.add(String(o),h,!1,d,p)},Me.prototype.L=function(o,h,d,p){return this.i.add(String(o),h,!0,d,p)};function Dn(o,h,d,p){if(h=o.i.g[String(h)],!h)return!0;h=h.concat();for(var V=!0,O=0;O<h.length;++O){var z=h[O];if(z&&!z.da&&z.capture==d){var Te=z.listener,ze=z.ha||z.src;z.fa&&Ie(o.i,z),V=Te.call(ze,p)!==!1&&V}}return V&&!p.defaultPrevented}function cr(o,h,d){if(typeof o=="function")d&&(o=g(o,d));else if(o&&typeof o.handleEvent=="function")o=g(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(o,h||0)}function ur(o){o.g=cr(()=>{o.g=null,o.i&&(o.i=!1,ur(o))},o.l);const h=o.h;o.h=null,o.m.apply(null,h)}class hr extends Q{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:ur(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gn(o){Q.call(this),this.h=o,this.g={}}E(gn,Q);var ts=[];function _a(o){X(o.g,function(h,d){this.g.hasOwnProperty(d)&&it(h)},o),o.g={}}gn.prototype.N=function(){gn.aa.N.call(this),_a(this)},gn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var vi=l.JSON.stringify,Qf=l.JSON.parse,Xf=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Ai(){}Ai.prototype.h=null;function ya(o){return o.h||(o.h=o.i())}function wa(){}var fr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ei(){$.call(this,"d")}E(Ei,$);function bi(){$.call(this,"c")}E(bi,$);var _n={},va=null;function ns(){return va=va||new Me}_n.La="serverreachability";function Aa(o){$.call(this,_n.La,o)}E(Aa,$);function dr(o){const h=ns();qe(h,new Aa(h))}_n.STAT_EVENT="statevent";function Ea(o,h){$.call(this,_n.STAT_EVENT,o),this.stat=h}E(Ea,$);function nt(o){const h=ns();qe(h,new Ea(h,o))}_n.Ma="timingevent";function ba(o,h){$.call(this,_n.Ma,o),this.size=h}E(ba,$);function mr(o,h){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},h)}function pr(){this.g=!0}pr.prototype.xa=function(){this.g=!1};function Jf(o,h,d,p,V,O){o.info(function(){if(o.g)if(O)for(var z="",Te=O.split("&"),ze=0;ze<Te.length;ze++){var ge=Te[ze].split("=");if(1<ge.length){var Qe=ge[0];ge=ge[1];var Xe=Qe.split("_");z=2<=Xe.length&&Xe[1]=="type"?z+(Qe+"="+ge+"&"):z+(Qe+"=redacted&")}}else z=null;else z=O;return"XMLHTTP REQ ("+p+") [attempt "+V+"]: "+h+`
`+d+`
`+z})}function Yf(o,h,d,p,V,O,z){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+V+"]: "+h+`
`+d+`
`+O+" "+z})}function Nn(o,h,d,p){o.info(function(){return"XMLHTTP TEXT ("+h+"): "+ed(o,d)+(p?" "+p:"")})}function Zf(o,h){o.info(function(){return"TIMEOUT: "+h})}pr.prototype.info=function(){};function ed(o,h){if(!o.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var p=d[o];if(!(2>p.length)){var V=p[1];if(Array.isArray(V)&&!(1>V.length)){var O=V[0];if(O!="noop"&&O!="stop"&&O!="close")for(var z=1;z<V.length;z++)V[z]=""}}}}return vi(d)}catch{return h}}var rs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ta={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ti;function ss(){}E(ss,Ai),ss.prototype.g=function(){return new XMLHttpRequest},ss.prototype.i=function(){return{}},Ti=new ss;function $t(o,h,d,p){this.j=o,this.i=h,this.l=d,this.R=p||1,this.U=new gn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ia}function Ia(){this.i=null,this.g="",this.h=!1}var Ra={},Ii={};function Ri(o,h,d){o.L=1,o.v=ls(Ut(h)),o.m=d,o.P=!0,Ca(o,null)}function Ca(o,h){o.F=Date.now(),is(o),o.A=Ut(o.v);var d=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),ja(d.i,"t",p),o.C=0,d=o.j.J,o.h=new Ia,o.g=il(o.j,d?h:null,!o.m),0<o.O&&(o.M=new hr(g(o.Y,o,o.g),o.O)),h=o.U,d=o.g,p=o.ca;var V="readystatechange";Array.isArray(V)||(V&&(ts[0]=V.toString()),V=ts);for(var O=0;O<V.length;O++){var z=st(d,V[O],p||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,h)):(o.u="GET",o.g.ea(o.A,o.u,null,h)),dr(),Jf(o.i,o.u,o.A,o.l,o.R,o.m)}$t.prototype.ca=function(o){o=o.target;const h=this.M;h&&Bt(o)==3?h.j():this.Y(o)},$t.prototype.Y=function(o){try{if(o==this.g)e:{const Xe=Bt(this.g);var h=this.g.Ba();const xn=this.g.Z();if(!(3>Xe)&&(Xe!=3||this.g&&(this.h.h||this.g.oa()||$a(this.g)))){this.J||Xe!=4||h==7||(h==8||0>=xn?dr(3):dr(2)),Ci(this);var d=this.g.Z();this.X=d;t:if(ka(this)){var p=$a(this.g);o="";var V=p.length,O=Bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yn(this),gr(this);var z="";break t}this.h.i=new l.TextDecoder}for(h=0;h<V;h++)this.h.h=!0,o+=this.h.i.decode(p[h],{stream:!(O&&h==V-1)});p.length=0,this.h.g+=o,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=d==200,Yf(this.i,this.u,this.A,this.l,this.R,Xe,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Te,ze=this.g;if((Te=ze.g?ze.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!L(Te)){var ge=Te;break t}}ge=null}if(d=ge)Nn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ki(this,d);else{this.o=!1,this.s=3,nt(12),yn(this),gr(this);break e}}if(this.P){d=!0;let Rt;for(;!this.J&&this.C<z.length;)if(Rt=td(this,z),Rt==Ii){Xe==4&&(this.s=4,nt(14),d=!1),Nn(this.i,this.l,null,"[Incomplete Response]");break}else if(Rt==Ra){this.s=4,nt(15),Nn(this.i,this.l,z,"[Invalid Chunk]"),d=!1;break}else Nn(this.i,this.l,Rt,null),ki(this,Rt);if(ka(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Xe!=4||z.length!=0||this.h.h||(this.s=1,nt(16),d=!1),this.o=this.o&&d,!d)Nn(this.i,this.l,z,"[Invalid Chunked Response]"),yn(this),gr(this);else if(0<z.length&&!this.W){this.W=!0;var Qe=this.j;Qe.g==this&&Qe.ba&&!Qe.M&&(Qe.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Mi(Qe),Qe.M=!0,nt(11))}}else Nn(this.i,this.l,z,null),ki(this,z);Xe==4&&yn(this),this.o&&!this.J&&(Xe==4?tl(this.j,this):(this.o=!1,is(this)))}else yd(this.g),d==400&&0<z.indexOf("Unknown SID")?(this.s=3,nt(12)):(this.s=0,nt(13)),yn(this),gr(this)}}}catch{}finally{}};function ka(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function td(o,h){var d=o.C,p=h.indexOf(`
`,d);return p==-1?Ii:(d=Number(h.substring(d,p)),isNaN(d)?Ra:(p+=1,p+d>h.length?Ii:(h=h.slice(p,p+d),o.C=p+d,h)))}$t.prototype.cancel=function(){this.J=!0,yn(this)};function is(o){o.S=Date.now()+o.I,Sa(o,o.I)}function Sa(o,h){if(o.B!=null)throw Error("WatchDog timer not null");o.B=mr(g(o.ba,o),h)}function Ci(o){o.B&&(l.clearTimeout(o.B),o.B=null)}$t.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Zf(this.i,this.A),this.L!=2&&(dr(),nt(17)),yn(this),this.s=2,gr(this)):Sa(this,this.S-o)};function gr(o){o.j.G==0||o.J||tl(o.j,o)}function yn(o){Ci(o);var h=o.M;h&&typeof h.ma=="function"&&h.ma(),o.M=null,_a(o.U),o.g&&(h=o.g,o.g=null,h.abort(),h.ma())}function ki(o,h){try{var d=o.j;if(d.G!=0&&(d.g==o||Si(d.h,o))){if(!o.K&&Si(d.h,o)&&d.G==3){try{var p=d.Da.g.parse(h)}catch{p=null}if(Array.isArray(p)&&p.length==3){var V=p;if(V[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)ms(d),fs(d);else break e;Ni(d),nt(18)}}else d.za=V[1],0<d.za-d.T&&37500>V[2]&&d.F&&d.v==0&&!d.C&&(d.C=mr(g(d.Za,d),6e3));if(1>=Da(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else vn(d,11)}else if((o.K||d.g==o)&&ms(d),!L(h))for(V=d.Da.g.parse(h),h=0;h<V.length;h++){let ge=V[h];if(d.T=ge[0],ge=ge[1],d.G==2)if(ge[0]=="c"){d.K=ge[1],d.ia=ge[2];const Qe=ge[3];Qe!=null&&(d.la=Qe,d.j.info("VER="+d.la));const Xe=ge[4];Xe!=null&&(d.Aa=Xe,d.j.info("SVER="+d.Aa));const xn=ge[5];xn!=null&&typeof xn=="number"&&0<xn&&(p=1.5*xn,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Rt=o.g;if(Rt){const gs=Rt.g?Rt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(gs){var O=p.h;O.g||gs.indexOf("spdy")==-1&&gs.indexOf("quic")==-1&&gs.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Pi(O,O.h),O.h=null))}if(p.D){const Oi=Rt.g?Rt.g.getResponseHeader("X-HTTP-Session-Id"):null;Oi&&(p.ya=Oi,Ce(p.I,p.D,Oi))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var z=o;if(p.qa=sl(p,p.J?p.ia:null,p.W),z.K){Na(p.h,z);var Te=z,ze=p.L;ze&&(Te.I=ze),Te.B&&(Ci(Te),is(Te)),p.g=z}else Za(p);0<d.i.length&&ds(d)}else ge[0]!="stop"&&ge[0]!="close"||vn(d,7);else d.G==3&&(ge[0]=="stop"||ge[0]=="close"?ge[0]=="stop"?vn(d,7):Di(d):ge[0]!="noop"&&d.l&&d.l.ta(ge),d.v=0)}}dr(4)}catch{}}var nd=class{constructor(o,h){this.g=o,this.map=h}};function Pa(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Va(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Da(o){return o.h?1:o.g?o.g.size:0}function Si(o,h){return o.h?o.h==h:o.g?o.g.has(h):!1}function Pi(o,h){o.g?o.g.add(h):o.h=h}function Na(o,h){o.h&&o.h==h?o.h=null:o.g&&o.g.has(h)&&o.g.delete(h)}Pa.prototype.cancel=function(){if(this.i=Ma(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ma(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let h=o.i;for(const d of o.g.values())h=h.concat(d.D);return h}return R(o.i)}function rd(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var h=[],d=o.length,p=0;p<d;p++)h.push(o[p]);return h}h=[],d=0;for(p in o)h[d++]=o[p];return h}function sd(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var h=[];o=o.length;for(var d=0;d<o;d++)h.push(d);return h}h=[],d=0;for(const p in o)h[d++]=p;return h}}}function Oa(o,h){if(o.forEach&&typeof o.forEach=="function")o.forEach(h,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,h,void 0);else for(var d=sd(o),p=rd(o),V=p.length,O=0;O<V;O++)h.call(void 0,p[O],d&&d[O],o)}var xa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function id(o,h){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var p=o[d].indexOf("="),V=null;if(0<=p){var O=o[d].substring(0,p);V=o[d].substring(p+1)}else O=o[d];h(O,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function wn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof wn){this.h=o.h,os(this,o.j),this.o=o.o,this.g=o.g,as(this,o.s),this.l=o.l;var h=o.i,d=new wr;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),La(this,d),this.m=o.m}else o&&(h=String(o).match(xa))?(this.h=!1,os(this,h[1]||"",!0),this.o=_r(h[2]||""),this.g=_r(h[3]||"",!0),as(this,h[4]),this.l=_r(h[5]||"",!0),La(this,h[6]||"",!0),this.m=_r(h[7]||"")):(this.h=!1,this.i=new wr(null,this.h))}wn.prototype.toString=function(){var o=[],h=this.j;h&&o.push(yr(h,Fa,!0),":");var d=this.g;return(d||h=="file")&&(o.push("//"),(h=this.o)&&o.push(yr(h,Fa,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(yr(d,d.charAt(0)=="/"?ld:ad,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",yr(d,ud)),o.join("")};function Ut(o){return new wn(o)}function os(o,h,d){o.j=d?_r(h,!0):h,o.j&&(o.j=o.j.replace(/:$/,""))}function as(o,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);o.s=h}else o.s=null}function La(o,h,d){h instanceof wr?(o.i=h,hd(o.i,o.h)):(d||(h=yr(h,cd)),o.i=new wr(h,o.h))}function Ce(o,h,d){o.i.set(h,d)}function ls(o){return Ce(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function _r(o,h){return o?h?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function yr(o,h,d){return typeof o=="string"?(o=encodeURI(o).replace(h,od),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function od(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Fa=/[#\/\?@]/g,ad=/[#\?:]/g,ld=/[#\?]/g,cd=/[#\?@]/g,ud=/#/g;function wr(o,h){this.h=this.g=null,this.i=o||null,this.j=!!h}function Qt(o){o.g||(o.g=new Map,o.h=0,o.i&&id(o.i,function(h,d){o.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}n=wr.prototype,n.add=function(o,h){Qt(this),this.i=null,o=Mn(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(h),this.h+=1,this};function Ua(o,h){Qt(o),h=Mn(o,h),o.g.has(h)&&(o.i=null,o.h-=o.g.get(h).length,o.g.delete(h))}function Ba(o,h){return Qt(o),h=Mn(o,h),o.g.has(h)}n.forEach=function(o,h){Qt(this),this.g.forEach(function(d,p){d.forEach(function(V){o.call(h,V,p,this)},this)},this)},n.na=function(){Qt(this);const o=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let p=0;p<h.length;p++){const V=o[p];for(let O=0;O<V.length;O++)d.push(h[p])}return d},n.V=function(o){Qt(this);let h=[];if(typeof o=="string")Ba(this,o)&&(h=h.concat(this.g.get(Mn(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)h=h.concat(o[d])}return h},n.set=function(o,h){return Qt(this),this.i=null,o=Mn(this,o),Ba(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[h]),this.h+=1,this},n.get=function(o,h){return o?(o=this.V(o),0<o.length?String(o[0]):h):h};function ja(o,h,d){Ua(o,h),0<d.length&&(o.i=null,o.g.set(Mn(o,h),R(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var p=h[d];const O=encodeURIComponent(String(p)),z=this.V(p);for(p=0;p<z.length;p++){var V=O;z[p]!==""&&(V+="="+encodeURIComponent(String(z[p]))),o.push(V)}}return this.i=o.join("&")};function Mn(o,h){return h=String(h),o.j&&(h=h.toLowerCase()),h}function hd(o,h){h&&!o.j&&(Qt(o),o.i=null,o.g.forEach(function(d,p){var V=p.toLowerCase();p!=V&&(Ua(this,p),ja(this,V,d))},o)),o.j=h}function fd(o,h){const d=new pr;if(l.Image){const p=new Image;p.onload=y(Xt,d,"TestLoadImage: loaded",!0,h,p),p.onerror=y(Xt,d,"TestLoadImage: error",!1,h,p),p.onabort=y(Xt,d,"TestLoadImage: abort",!1,h,p),p.ontimeout=y(Xt,d,"TestLoadImage: timeout",!1,h,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else h(!1)}function dd(o,h){const d=new pr,p=new AbortController,V=setTimeout(()=>{p.abort(),Xt(d,"TestPingServer: timeout",!1,h)},1e4);fetch(o,{signal:p.signal}).then(O=>{clearTimeout(V),O.ok?Xt(d,"TestPingServer: ok",!0,h):Xt(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(V),Xt(d,"TestPingServer: error",!1,h)})}function Xt(o,h,d,p,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),p(d)}catch{}}function md(){this.g=new Xf}function pd(o,h,d){const p=d||"";try{Oa(o,function(V,O){let z=V;u(V)&&(z=vi(V)),h.push(p+O+"="+encodeURIComponent(z))})}catch(V){throw h.push(p+"type="+encodeURIComponent("_badmap")),V}}function cs(o){this.l=o.Ub||null,this.j=o.eb||!1}E(cs,Ai),cs.prototype.g=function(){return new us(this.l,this.j)},cs.prototype.i=function(o){return function(){return o}}({});function us(o,h){Me.call(this),this.D=o,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}E(us,Me),n=us.prototype,n.open=function(o,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=h,this.readyState=1,Ar(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(h.body=o),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Ar(this)),this.g&&(this.readyState=3,Ar(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;qa(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function qa(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var h=o.value?o.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!o.done}))&&(this.response=this.responseText+=h)}o.done?vr(this):Ar(this),this.readyState==3&&qa(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,vr(this))},n.Qa=function(o){this.g&&(this.response=o,vr(this))},n.ga=function(){this.g&&vr(this)};function vr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Ar(o)}n.setRequestHeader=function(o,h){this.u.append(o,h)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=h.next();return o.join(`\r
`)};function Ar(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(us.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function za(o){let h="";return X(o,function(d,p){h+=p,h+=":",h+=d,h+=`\r
`}),h}function Vi(o,h,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=za(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):Ce(o,h,d))}function Pe(o){Me.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}E(Pe,Me);var gd=/^https?$/i,_d=["POST","PUT"];n=Pe.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,h,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);h=h?h.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ti.g(),this.v=this.o?ya(this.o):ya(Ti),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(o),!0),this.B=!1}catch(O){Ha(this,O);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var V in p)d.set(V,p[V]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const O of p.keys())d.set(O,p.get(O));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(O=>O.toLowerCase()=="content-type"),V=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(_d,h,void 0))||p||V||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,z]of d)this.g.setRequestHeader(O,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ka(this),this.u=!0,this.g.send(o),this.u=!1}catch(O){Ha(this,O)}};function Ha(o,h){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=h,o.m=5,Wa(o),hs(o)}function Wa(o){o.A||(o.A=!0,qe(o,"complete"),qe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,qe(this,"complete"),qe(this,"abort"),hs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),hs(this,!0)),Pe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ga(this):this.bb())},n.bb=function(){Ga(this)};function Ga(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Bt(o)!=4||o.Z()!=2)){if(o.u&&Bt(o)==4)cr(o.Ea,0,o);else if(qe(o,"readystatechange"),Bt(o)==4){o.h=!1;try{const z=o.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var p;if(p=z===0){var V=String(o.D).match(xa)[1]||null;!V&&l.self&&l.self.location&&(V=l.self.location.protocol.slice(0,-1)),p=!gd.test(V?V.toLowerCase():"")}d=p}if(d)qe(o,"complete"),qe(o,"success");else{o.m=6;try{var O=2<Bt(o)?o.g.statusText:""}catch{O=""}o.l=O+" ["+o.Z()+"]",Wa(o)}}finally{hs(o)}}}}function hs(o,h){if(o.g){Ka(o);const d=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,h||qe(o,"ready");try{d.onreadystatechange=p}catch{}}}function Ka(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Bt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Bt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var h=this.g.responseText;return o&&h.indexOf(o)==0&&(h=h.substring(o.length)),Qf(h)}};function $a(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function yd(o){const h={};o=(o.g&&2<=Bt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(L(o[p]))continue;var d=I(o[p]);const V=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const O=h[V]||[];h[V]=O,O.push(d)}A(h,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Er(o,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||h}function Qa(o){this.Aa=0,this.i=[],this.j=new pr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Er("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Er("baseRetryDelayMs",5e3,o),this.cb=Er("retryDelaySeedMs",1e4,o),this.Wa=Er("forwardChannelMaxRetries",2,o),this.wa=Er("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Pa(o&&o.concurrentRequestLimit),this.Da=new md,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Qa.prototype,n.la=8,n.G=1,n.connect=function(o,h,d,p){nt(0),this.W=o,this.H=h||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=sl(this,null,this.W),ds(this)};function Di(o){if(Xa(o),o.G==3){var h=o.U++,d=Ut(o.I);if(Ce(d,"SID",o.K),Ce(d,"RID",h),Ce(d,"TYPE","terminate"),br(o,d),h=new $t(o,o.j,h),h.L=2,h.v=ls(Ut(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=il(h.j,null),h.g.ea(h.v)),h.F=Date.now(),is(h)}rl(o)}function fs(o){o.g&&(Mi(o),o.g.cancel(),o.g=null)}function Xa(o){fs(o),o.u&&(l.clearTimeout(o.u),o.u=null),ms(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function ds(o){if(!Va(o.h)&&!o.s){o.s=!0;var h=o.Ga;yt||N(),pn||(yt(),pn=!0),ar.add(h,o),o.B=0}}function wd(o,h){return Da(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=h.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=mr(g(o.Ga,o,h),nl(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const V=new $t(this,this.j,o);let O=this.o;if(this.S&&(O?(O=_(O),b(O,this.S)):O=this.S),this.m!==null||this.O||(V.H=O,O=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(h+=p,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Ya(this,V,h),d=Ut(this.I),Ce(d,"RID",o),Ce(d,"CVER",22),this.D&&Ce(d,"X-HTTP-Session-Id",this.D),br(this,d),O&&(this.O?h="headers="+encodeURIComponent(String(za(O)))+"&"+h:this.m&&Vi(d,this.m,O)),Pi(this.h,V),this.Ua&&Ce(d,"TYPE","init"),this.P?(Ce(d,"$req",h),Ce(d,"SID","null"),V.T=!0,Ri(V,d,null)):Ri(V,d,h),this.G=2}}else this.G==3&&(o?Ja(this,o):this.i.length==0||Va(this.h)||Ja(this))};function Ja(o,h){var d;h?d=h.l:d=o.U++;const p=Ut(o.I);Ce(p,"SID",o.K),Ce(p,"RID",d),Ce(p,"AID",o.T),br(o,p),o.m&&o.o&&Vi(p,o.m,o.o),d=new $t(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),h&&(o.i=h.D.concat(o.i)),h=Ya(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Pi(o.h,d),Ri(d,p,h)}function br(o,h){o.H&&X(o.H,function(d,p){Ce(h,p,d)}),o.l&&Oa({},function(d,p){Ce(h,p,d)})}function Ya(o,h,d){d=Math.min(o.i.length,d);var p=o.l?g(o.l.Na,o.l,o):null;e:{var V=o.i;let O=-1;for(;;){const z=["count="+d];O==-1?0<d?(O=V[0].g,z.push("ofs="+O)):O=0:z.push("ofs="+O);let Te=!0;for(let ze=0;ze<d;ze++){let ge=V[ze].g;const Qe=V[ze].map;if(ge-=O,0>ge)O=Math.max(0,V[ze].g-100),Te=!1;else try{pd(Qe,z,"req"+ge+"_")}catch{p&&p(Qe)}}if(Te){p=z.join("&");break e}}}return o=o.i.splice(0,d),h.D=o,p}function Za(o){if(!o.g&&!o.u){o.Y=1;var h=o.Fa;yt||N(),pn||(yt(),pn=!0),ar.add(h,o),o.v=0}}function Ni(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=mr(g(o.Fa,o),nl(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,el(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=mr(g(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,nt(10),fs(this),el(this))};function Mi(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function el(o){o.g=new $t(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var h=Ut(o.qa);Ce(h,"RID","rpc"),Ce(h,"SID",o.K),Ce(h,"AID",o.T),Ce(h,"CI",o.F?"0":"1"),!o.F&&o.ja&&Ce(h,"TO",o.ja),Ce(h,"TYPE","xmlhttp"),br(o,h),o.m&&o.o&&Vi(h,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=ls(Ut(h)),d.m=null,d.P=!0,Ca(d,o)}n.Za=function(){this.C!=null&&(this.C=null,fs(this),Ni(this),nt(19))};function ms(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function tl(o,h){var d=null;if(o.g==h){ms(o),Mi(o),o.g=null;var p=2}else if(Si(o.h,h))d=h.D,Na(o.h,h),p=1;else return;if(o.G!=0){if(h.o)if(p==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var V=o.B;p=ns(),qe(p,new ba(p,d)),ds(o)}else Za(o);else if(V=h.s,V==3||V==0&&0<h.X||!(p==1&&wd(o,h)||p==2&&Ni(o)))switch(d&&0<d.length&&(h=o.h,h.i=h.i.concat(d)),V){case 1:vn(o,5);break;case 4:vn(o,10);break;case 3:vn(o,6);break;default:vn(o,2)}}}function nl(o,h){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*h}function vn(o,h){if(o.j.info("Error code "+h),h==2){var d=g(o.fb,o),p=o.Xa;const V=!p;p=new wn(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||os(p,"https"),ls(p),V?fd(p.toString(),d):dd(p.toString(),d)}else nt(2);o.G=0,o.l&&o.l.sa(h),rl(o),Xa(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function rl(o){if(o.G=0,o.ka=[],o.l){const h=Ma(o.h);(h.length!=0||o.i.length!=0)&&(C(o.ka,h),C(o.ka,o.i),o.h.i.length=0,R(o.i),o.i.length=0),o.l.ra()}}function sl(o,h,d){var p=d instanceof wn?Ut(d):new wn(d);if(p.g!="")h&&(p.g=h+"."+p.g),as(p,p.s);else{var V=l.location;p=V.protocol,h=h?h+"."+V.hostname:V.hostname,V=+V.port;var O=new wn(null);p&&os(O,p),h&&(O.g=h),V&&as(O,V),d&&(O.l=d),p=O}return d=o.D,h=o.ya,d&&h&&Ce(p,d,h),Ce(p,"VER",o.la),br(o,p),p}function il(o,h,d){if(h&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=o.Ca&&!o.pa?new Pe(new cs({eb:d})):new Pe(o.pa),h.Ha(o.J),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ol(){}n=ol.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ps(){}ps.prototype.g=function(o,h){return new ht(o,h)};function ht(o,h){Me.call(this),this.g=new Qa(h),this.l=o,this.h=h&&h.messageUrlParams||null,o=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(o?o["X-WebChannel-Content-Type"]=h.messageContentType:o={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(o?o["X-WebChannel-Client-Profile"]=h.va:o={"X-WebChannel-Client-Profile":h.va}),this.g.S=o,(o=h&&h.Sb)&&!L(o)&&(this.g.m=o),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!L(h)&&(this.g.D=h,o=this.h,o!==null&&h in o&&(o=this.h,h in o&&delete o[h])),this.j=new On(this)}E(ht,Me),ht.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ht.prototype.close=function(){Di(this.g)},ht.prototype.o=function(o){var h=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=vi(o),o=d);h.i.push(new nd(h.Ya++,o)),h.G==3&&ds(h)},ht.prototype.N=function(){this.g.l=null,delete this.j,Di(this.g),delete this.g,ht.aa.N.call(this)};function al(o){Ei.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var h=o.__sm__;if(h){e:{for(const d in h){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,h=h!==null&&o in h?h[o]:void 0),this.data=h}else this.data=o}E(al,Ei);function ll(){bi.call(this),this.status=1}E(ll,bi);function On(o){this.g=o}E(On,ol),On.prototype.ua=function(){qe(this.g,"a")},On.prototype.ta=function(o){qe(this.g,new al(o))},On.prototype.sa=function(o){qe(this.g,new ll)},On.prototype.ra=function(){qe(this.g,"b")},ps.prototype.createWebChannel=ps.prototype.g,ht.prototype.send=ht.prototype.o,ht.prototype.open=ht.prototype.m,ht.prototype.close=ht.prototype.close,dh=function(){return new ps},fh=function(){return ns()},hh=_n,io={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},rs.NO_ERROR=0,rs.TIMEOUT=8,rs.HTTP_ERROR=6,Cs=rs,Ta.COMPLETE="complete",uh=Ta,wa.EventType=fr,fr.OPEN="a",fr.CLOSE="b",fr.ERROR="c",fr.MESSAGE="d",Me.prototype.listen=Me.prototype.K,Tr=wa,Pe.prototype.listenOnce=Pe.prototype.L,Pe.prototype.getLastError=Pe.prototype.Ka,Pe.prototype.getLastErrorCode=Pe.prototype.Ba,Pe.prototype.getStatus=Pe.prototype.Z,Pe.prototype.getResponseJson=Pe.prototype.Oa,Pe.prototype.getResponseText=Pe.prototype.oa,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Ha,ch=Pe}).apply(typeof ys<"u"?ys:typeof self<"u"?self:typeof window<"u"?window:{});const Nl="@firebase/firestore",Ml="4.7.10";/**
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
 */class Ye{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ye.UNAUTHENTICATED=new Ye(null),Ye.GOOGLE_CREDENTIALS=new Ye("google-credentials-uid"),Ye.FIRST_PARTY=new Ye("first-party-uid"),Ye.MOCK_USER=new Ye("mock-user");/**
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
 */const Cn=new Io("@firebase/firestore");function Bn(){return Cn.logLevel}function W(n,...e){if(Cn.logLevel<=pe.DEBUG){const t=e.map(No);Cn.debug(`Firestore (${tr}): ${n}`,...t)}}function Wt(n,...e){if(Cn.logLevel<=pe.ERROR){const t=e.map(No);Cn.error(`Firestore (${tr}): ${n}`,...t)}}function Kn(n,...e){if(Cn.logLevel<=pe.WARN){const t=e.map(No);Cn.warn(`Firestore (${tr}): ${n}`,...t)}}function No(n){if(typeof n=="string")return n;try{/**
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
 */function re(n="Unexpected state"){const e=`FIRESTORE (${tr}) INTERNAL ASSERTION FAILED: `+n;throw Wt(e),new Error(e)}function we(n,e){n||re()}function ae(n,e){return n}/**
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
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends fn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class mh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Dg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ye.UNAUTHENTICATED))}shutdown(){}}class Ng{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Mg{constructor(e){this.t=e,this.currentUser=Ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){we(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new qt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new qt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new qt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(we(typeof r.accessToken=="string"),new mh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return we(e===null||typeof e=="string"),new Ye(e)}}class Og{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Ye.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class xg{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new Og(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ol{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Lg{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Ym(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){we(this.o===void 0);const r=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,W("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Ol(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(we(typeof t.token=="string"),this.R=t.token,new Ol(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Fg(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class gh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Fg(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function ce(n,e){return n<e?-1:n>e?1:0}function oo(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return ce(r,s);{const i=ph(),a=Ug(i.encode(xl(n,t)),i.encode(xl(e,t)));return a!==0?a:ce(r,s)}}t+=r>65535?2:1}return ce(n.length,e.length)}function xl(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function Ug(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return ce(n[t],e[t]);return ce(n.length,e.length)}function $n(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const Ll=-62135596800,Fl=1e6;class xe{static now(){return xe.fromMillis(Date.now())}static fromDate(e){return xe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Fl);return new xe(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Y(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Y(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ll)throw new Y(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Fl}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Ll;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */const Ul="__name__";class Vt{constructor(e,t,r){t===void 0?t=0:t>e.length&&re(),r===void 0?r=e.length-t:r>e.length-t&&re(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Vt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Vt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Vt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return ce(e.length,t.length)}static compareSegments(e,t){const r=Vt.isNumericId(e),s=Vt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Vt.extractNumericId(e).compare(Vt.extractNumericId(t)):oo(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return nn.fromString(e.substring(4,e.length-2))}}class ke extends Vt{construct(e,t,r){return new ke(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(B.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new ke(t)}static emptyPath(){return new ke([])}}const Bg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends Vt{construct(e,t,r){return new We(e,t,r)}static isValidIdentifier(e){return Bg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ul}static keyField(){return new We([Ul])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Y(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new Y(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Y(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new Y(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new We(t)}static emptyPath(){return new We([])}}/**
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
 */const Lr=-1;function jg(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=ie.fromTimestamp(r===1e9?new xe(t+1,0):new xe(t,r));return new on(s,ne.empty(),e)}function qg(n){return new on(n.readTime,n.key,Lr)}class on{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new on(ie.min(),ne.empty(),Lr)}static max(){return new on(ie.max(),ne.empty(),Lr)}}function zg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ne.comparator(n.documentKey,e.documentKey),t!==0?t:ce(n.largestBatchId,e.largestBatchId))}/**
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
 */const Hg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Wg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function nr(n){if(n.code!==B.FAILED_PRECONDITION||n.message!==Hg)throw n;W("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new U((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof U?t:U.resolve(t)}catch(t){return U.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):U.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):U.reject(t)}static resolve(e){return new U((t,r)=>{t(e)})}static reject(e){return new U((t,r)=>{r(e)})}static waitFor(e){return new U((t,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&t()},c=>r(c))}),a=!0,i===s&&t()})}static or(e){let t=U.resolve(!1);for(const r of e)t=t.next(s=>s?U.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new U((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;t(e[u]).next(f=>{a[u]=f,++l,l===i&&r(a)},f=>s(f))}})}static doWhile(e,t){return new U((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function Gg(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function rr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */const Mo=-1;function ti(n){return n==null}function Ls(n){return n===0&&1/n==-1/0}function Kg(n){return typeof n=="number"&&Number.isInteger(n)&&!Ls(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const _h="";function $g(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Bl(e)),e=Qg(n.get(t),e);return Bl(e)}function Qg(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case _h:t+="";break;default:t+=i}}return t}function Bl(n){return n+_h+""}/**
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
 */class Se{constructor(e,t){this.comparator=e,this.root=t||He.EMPTY}insert(e,t){return new Se(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,He.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,He.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ws(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ws(this.root,e,this.comparator,!1)}getReverseIterator(){return new ws(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ws(this.root,e,this.comparator,!0)}}class ws{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class He{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??He.RED,this.left=s??He.EMPTY,this.right=i??He.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new He(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return He.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return He.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw re();const e=this.left.check();if(e!==this.right.check())throw re();return e+(this.isRed()?0:1)}}He.EMPTY=null,He.RED=!0,He.BLACK=!1;He.EMPTY=new class{constructor(){this.size=0}get key(){throw re()}get value(){throw re()}get color(){throw re()}get left(){throw re()}get right(){throw re()}copy(e,t,r,s,i){return this}insert(e,t,r){return new He(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class mt{constructor(e){this.fields=e,e.sort(We.comparator)}static empty(){return new mt([])}unionWith(e){let t=new Le(We.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new mt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return $n(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class $e{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new wh("Invalid base64 string: "+i):i}}(e);return new $e(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new $e(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}$e.EMPTY_BYTE_STRING=new $e("");const Xg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function an(n){if(we(!!n),typeof n=="string"){let e=0;const t=Xg.exec(n);if(we(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:De(n.seconds),nanos:De(n.nanos)}}function De(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ln(n){return typeof n=="string"?$e.fromBase64String(n):$e.fromUint8Array(n)}/**
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
 */const vh="server_timestamp",Ah="__type__",Eh="__previous_value__",bh="__local_write_time__";function Oo(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Ah])===null||t===void 0?void 0:t.stringValue)===vh}function ni(n){const e=n.mapValue.fields[Eh];return Oo(e)?ni(e):e}function Fr(n){const e=an(n.mapValue.fields[bh].timestampValue);return new xe(e.seconds,e.nanos)}/**
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
 */class Jg{constructor(e,t,r,s,i,a,l,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}const Fs="(default)";class Ur{constructor(e,t){this.projectId=e,this.database=t||Fs}static empty(){return new Ur("","")}get isDefaultDatabase(){return this.database===Fs}isEqual(e){return e instanceof Ur&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Th="__type__",Ih="__max__",vs={mapValue:{fields:{__type__:{stringValue:Ih}}}},Rh="__vector__",Us="value";function cn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Oo(n)?4:Zg(n)?9007199254740991:Yg(n)?10:11:re()}function Ot(n,e){if(n===e)return!0;const t=cn(n);if(t!==cn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Fr(n).isEqual(Fr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=an(s.timestampValue),l=an(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return ln(s.bytesValue).isEqual(ln(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return De(s.geoPointValue.latitude)===De(i.geoPointValue.latitude)&&De(s.geoPointValue.longitude)===De(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return De(s.integerValue)===De(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=De(s.doubleValue),l=De(i.doubleValue);return a===l?Ls(a)===Ls(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return $n(n.arrayValue.values||[],e.arrayValue.values||[],Ot);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(jl(a)!==jl(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!Ot(a[c],l[c])))return!1;return!0}(n,e);default:return re()}}function Br(n,e){return(n.values||[]).find(t=>Ot(t,e))!==void 0}function Qn(n,e){if(n===e)return 0;const t=cn(n),r=cn(e);if(t!==r)return ce(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ce(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=De(i.integerValue||i.doubleValue),c=De(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return zl(n.timestampValue,e.timestampValue);case 4:return zl(Fr(n),Fr(e));case 5:return oo(n.stringValue,e.stringValue);case 6:return function(i,a){const l=ln(i),c=ln(a);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=ce(l[u],c[u]);if(f!==0)return f}return ce(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=ce(De(i.latitude),De(a.latitude));return l!==0?l:ce(De(i.longitude),De(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Hl(n.arrayValue,e.arrayValue);case 10:return function(i,a){var l,c,u,f;const m=i.fields||{},g=a.fields||{},y=(l=m[Us])===null||l===void 0?void 0:l.arrayValue,E=(c=g[Us])===null||c===void 0?void 0:c.arrayValue,R=ce(((u=y==null?void 0:y.values)===null||u===void 0?void 0:u.length)||0,((f=E==null?void 0:E.values)===null||f===void 0?void 0:f.length)||0);return R!==0?R:Hl(y,E)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===vs.mapValue&&a===vs.mapValue)return 0;if(i===vs.mapValue)return 1;if(a===vs.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=a.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let m=0;m<c.length&&m<f.length;++m){const g=oo(c[m],f[m]);if(g!==0)return g;const y=Qn(l[c[m]],u[f[m]]);if(y!==0)return y}return ce(c.length,f.length)}(n.mapValue,e.mapValue);default:throw re()}}function zl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ce(n,e);const t=an(n),r=an(e),s=ce(t.seconds,r.seconds);return s!==0?s:ce(t.nanos,r.nanos)}function Hl(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Qn(t[s],r[s]);if(i)return i}return ce(t.length,r.length)}function Xn(n){return ao(n)}function ao(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=an(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return ln(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ne.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=ao(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${ao(t.fields[a])}`;return s+"}"}(n.mapValue):re()}function ks(n){switch(cn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ni(n);return e?16+ks(e):16;case 5:return 2*n.stringValue.length;case 6:return ln(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+ks(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return dn(r.fields,(i,a)=>{s+=i.length+ks(a)}),s}(n.mapValue);default:throw re()}}function lo(n){return!!n&&"integerValue"in n}function xo(n){return!!n&&"arrayValue"in n}function Wl(n){return!!n&&"nullValue"in n}function Gl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ss(n){return!!n&&"mapValue"in n}function Yg(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Th])===null||t===void 0?void 0:t.stringValue)===Rh}function Sr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return dn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Sr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Sr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Zg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Ih}/**
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
 */class at{constructor(e){this.value=e}static empty(){return new at({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ss(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Sr(t)}setAll(e){let t=We.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=Sr(a):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Ss(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ot(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Ss(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){dn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new at(Sr(this.value))}}function Ch(n){const e=[];return dn(n.fields,(t,r)=>{const s=new We([t]);if(Ss(r)){const i=Ch(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new mt(e)}/**
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
 */class Ze{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Ze(e,0,ie.min(),ie.min(),ie.min(),at.empty(),0)}static newFoundDocument(e,t,r,s){return new Ze(e,1,t,ie.min(),r,s,0)}static newNoDocument(e,t){return new Ze(e,2,t,ie.min(),ie.min(),at.empty(),0)}static newUnknownDocument(e,t){return new Ze(e,3,t,ie.min(),ie.min(),at.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=at.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=at.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Bs{constructor(e,t){this.position=e,this.inclusive=t}}function Kl(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=ne.comparator(ne.fromName(a.referenceValue),t.key):r=Qn(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function $l(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ot(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class js{constructor(e,t="asc"){this.field=e,this.dir=t}}function e_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class kh{}class Oe extends kh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new n_(e,t,r):t==="array-contains"?new i_(e,r):t==="in"?new o_(e,r):t==="not-in"?new a_(e,r):t==="array-contains-any"?new l_(e,r):new Oe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new r_(e,r):new s_(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Qn(t,this.value)):t!==null&&cn(this.value)===cn(t)&&this.matchesComparison(Qn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xt extends kh{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new xt(e,t)}matches(e){return Sh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Sh(n){return n.op==="and"}function Ph(n){return t_(n)&&Sh(n)}function t_(n){for(const e of n.filters)if(e instanceof xt)return!1;return!0}function co(n){if(n instanceof Oe)return n.field.canonicalString()+n.op.toString()+Xn(n.value);if(Ph(n))return n.filters.map(e=>co(e)).join(",");{const e=n.filters.map(t=>co(t)).join(",");return`${n.op}(${e})`}}function Vh(n,e){return n instanceof Oe?function(r,s){return s instanceof Oe&&r.op===s.op&&r.field.isEqual(s.field)&&Ot(r.value,s.value)}(n,e):n instanceof xt?function(r,s){return s instanceof xt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Vh(a,s.filters[l]),!0):!1}(n,e):void re()}function Dh(n){return n instanceof Oe?function(t){return`${t.field.canonicalString()} ${t.op} ${Xn(t.value)}`}(n):n instanceof xt?function(t){return t.op.toString()+" {"+t.getFilters().map(Dh).join(" ,")+"}"}(n):"Filter"}class n_ extends Oe{constructor(e,t,r){super(e,t,r),this.key=ne.fromName(r.referenceValue)}matches(e){const t=ne.comparator(e.key,this.key);return this.matchesComparison(t)}}class r_ extends Oe{constructor(e,t){super(e,"in",t),this.keys=Nh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class s_ extends Oe{constructor(e,t){super(e,"not-in",t),this.keys=Nh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Nh(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>ne.fromName(r.referenceValue))}class i_ extends Oe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return xo(t)&&Br(t.arrayValue,this.value)}}class o_ extends Oe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Br(this.value.arrayValue,t)}}class a_ extends Oe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Br(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Br(this.value.arrayValue,t)}}class l_ extends Oe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!xo(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Br(this.value.arrayValue,r))}}/**
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
 */class c_{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.le=null}}function Ql(n,e=null,t=[],r=[],s=null,i=null,a=null){return new c_(n,e,t,r,s,i,a)}function Lo(n){const e=ae(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>co(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ti(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Xn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Xn(r)).join(",")),e.le=t}return e.le}function Fo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!e_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Vh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!$l(n.startAt,e.startAt)&&$l(n.endAt,e.endAt)}function uo(n){return ne.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class ri{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function u_(n,e,t,r,s,i,a,l){return new ri(n,e,t,r,s,i,a,l)}function Uo(n){return new ri(n)}function Xl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function h_(n){return n.collectionGroup!==null}function Pr(n){const e=ae(n);if(e.he===null){e.he=[];const t=new Set;for(const i of e.explicitOrderBy)e.he.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Le(We.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.he.push(new js(i,r))}),t.has(We.keyField().canonicalString())||e.he.push(new js(We.keyField(),r))}return e.he}function Nt(n){const e=ae(n);return e.Pe||(e.Pe=f_(e,Pr(n))),e.Pe}function f_(n,e){if(n.limitType==="F")return Ql(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new js(s.field,i)});const t=n.endAt?new Bs(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Bs(n.startAt.position,n.startAt.inclusive):null;return Ql(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function ho(n,e,t){return new ri(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function si(n,e){return Fo(Nt(n),Nt(e))&&n.limitType===e.limitType}function Mh(n){return`${Lo(Nt(n))}|lt:${n.limitType}`}function jn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Dh(s)).join(", ")}]`),ti(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Xn(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Xn(s)).join(",")),`Target(${r})`}(Nt(n))}; limitType=${n.limitType})`}function ii(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ne.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Pr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,c){const u=Kl(a,l,c);return a.inclusive?u<=0:u<0}(r.startAt,Pr(r),s)||r.endAt&&!function(a,l,c){const u=Kl(a,l,c);return a.inclusive?u>=0:u>0}(r.endAt,Pr(r),s))}(n,e)}function d_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Oh(n){return(e,t)=>{let r=!1;for(const s of Pr(n)){const i=m_(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function m_(n,e,t){const r=n.field.isKeyField()?ne.comparator(e.key,t.key):function(i,a,l){const c=a.data.field(i),u=l.data.field(i);return c!==null&&u!==null?Qn(c,u):re()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return re()}}/**
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
 */const p_=new Se(ne.comparator);function Gt(){return p_}const xh=new Se(ne.comparator);function Ir(...n){let e=xh;for(const t of n)e=e.insert(t.key,t);return e}function Lh(n){let e=xh;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Tn(){return Vr()}function Fh(){return Vr()}function Vr(){return new Sn(n=>n.toString(),(n,e)=>n.isEqual(e))}const g_=new Se(ne.comparator),__=new Le(ne.comparator);function de(...n){let e=__;for(const t of n)e=e.add(t);return e}const y_=new Le(ce);function w_(){return y_}/**
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
 */function Bo(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ls(e)?"-0":e}}function Uh(n){return{integerValue:""+n}}function v_(n,e){return Kg(e)?Uh(e):Bo(n,e)}/**
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
 */class oi{constructor(){this._=void 0}}function A_(n,e,t){return n instanceof qs?function(s,i){const a={fields:{[Ah]:{stringValue:vh},[bh]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Oo(i)&&(i=ni(i)),i&&(a.fields[Eh]=i),{mapValue:a}}(t,e):n instanceof jr?jh(n,e):n instanceof qr?qh(n,e):function(s,i){const a=Bh(s,i),l=Jl(a)+Jl(s.Ie);return lo(a)&&lo(s.Ie)?Uh(l):Bo(s.serializer,l)}(n,e)}function E_(n,e,t){return n instanceof jr?jh(n,e):n instanceof qr?qh(n,e):t}function Bh(n,e){return n instanceof zs?function(r){return lo(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class qs extends oi{}class jr extends oi{constructor(e){super(),this.elements=e}}function jh(n,e){const t=zh(e);for(const r of n.elements)t.some(s=>Ot(s,r))||t.push(r);return{arrayValue:{values:t}}}class qr extends oi{constructor(e){super(),this.elements=e}}function qh(n,e){let t=zh(e);for(const r of n.elements)t=t.filter(s=>!Ot(s,r));return{arrayValue:{values:t}}}class zs extends oi{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function Jl(n){return De(n.integerValue||n.doubleValue)}function zh(n){return xo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function b_(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof jr&&s instanceof jr||r instanceof qr&&s instanceof qr?$n(r.elements,s.elements,Ot):r instanceof zs&&s instanceof zs?Ot(r.Ie,s.Ie):r instanceof qs&&s instanceof qs}(n.transform,e.transform)}class T_{constructor(e,t){this.version=e,this.transformResults=t}}class pt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new pt}static exists(e){return new pt(void 0,e)}static updateTime(e){return new pt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ps(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ai{}function Hh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new jo(n.key,pt.none()):new Wr(n.key,n.data,pt.none());{const t=n.data,r=at.empty();let s=new Le(We.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new mn(n.key,r,new mt(s.toArray()),pt.none())}}function I_(n,e,t){n instanceof Wr?function(s,i,a){const l=s.value.clone(),c=Zl(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof mn?function(s,i,a){if(!Ps(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Zl(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(Wh(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Dr(n,e,t,r){return n instanceof Wr?function(i,a,l,c){if(!Ps(i.precondition,a))return l;const u=i.value.clone(),f=ec(i.fieldTransforms,c,a);return u.setAll(f),a.convertToFoundDocument(a.version,u).setHasLocalMutations(),null}(n,e,t,r):n instanceof mn?function(i,a,l,c){if(!Ps(i.precondition,a))return l;const u=ec(i.fieldTransforms,c,a),f=a.data;return f.setAll(Wh(i)),f.setAll(u),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(i,a,l){return Ps(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function R_(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Bh(r.transform,s||null);i!=null&&(t===null&&(t=at.empty()),t.set(r.field,i))}return t||null}function Yl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&$n(r,s,(i,a)=>b_(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Wr extends ai{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class mn extends ai{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Wh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Zl(n,e,t){const r=new Map;we(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,E_(a,l,t[s]))}return r}function ec(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,A_(i,a,e))}return r}class jo extends ai{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class C_ extends ai{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class k_{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&I_(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Dr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Dr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Fh();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const c=Hh(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(ie.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),de())}isEqual(e){return this.batchId===e.batchId&&$n(this.mutations,e.mutations,(t,r)=>Yl(t,r))&&$n(this.baseMutations,e.baseMutations,(t,r)=>Yl(t,r))}}class qo{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){we(e.mutations.length===r.length);let s=function(){return g_}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new qo(e,t,r,s)}}/**
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
 */class P_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Ne,me;function V_(n){switch(n){case B.OK:return re();case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0;default:return re()}}function Gh(n){if(n===void 0)return Wt("GRPC error has no .code"),B.UNKNOWN;switch(n){case Ne.OK:return B.OK;case Ne.CANCELLED:return B.CANCELLED;case Ne.UNKNOWN:return B.UNKNOWN;case Ne.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case Ne.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case Ne.INTERNAL:return B.INTERNAL;case Ne.UNAVAILABLE:return B.UNAVAILABLE;case Ne.UNAUTHENTICATED:return B.UNAUTHENTICATED;case Ne.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case Ne.NOT_FOUND:return B.NOT_FOUND;case Ne.ALREADY_EXISTS:return B.ALREADY_EXISTS;case Ne.PERMISSION_DENIED:return B.PERMISSION_DENIED;case Ne.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case Ne.ABORTED:return B.ABORTED;case Ne.OUT_OF_RANGE:return B.OUT_OF_RANGE;case Ne.UNIMPLEMENTED:return B.UNIMPLEMENTED;case Ne.DATA_LOSS:return B.DATA_LOSS;default:return re()}}(me=Ne||(Ne={}))[me.OK=0]="OK",me[me.CANCELLED=1]="CANCELLED",me[me.UNKNOWN=2]="UNKNOWN",me[me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",me[me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",me[me.NOT_FOUND=5]="NOT_FOUND",me[me.ALREADY_EXISTS=6]="ALREADY_EXISTS",me[me.PERMISSION_DENIED=7]="PERMISSION_DENIED",me[me.UNAUTHENTICATED=16]="UNAUTHENTICATED",me[me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",me[me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",me[me.ABORTED=10]="ABORTED",me[me.OUT_OF_RANGE=11]="OUT_OF_RANGE",me[me.UNIMPLEMENTED=12]="UNIMPLEMENTED",me[me.INTERNAL=13]="INTERNAL",me[me.UNAVAILABLE=14]="UNAVAILABLE",me[me.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const D_=new nn([4294967295,4294967295],0);function tc(n){const e=ph().encode(n),t=new lh;return t.update(e),new Uint8Array(t.digest())}function nc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new nn([t,r],0),new nn([s,i],0)]}class zo{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Rr(`Invalid padding: ${t}`);if(r<0)throw new Rr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Rr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Rr(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=nn.fromNumber(this.Ee)}Ae(e,t,r){let s=e.add(t.multiply(nn.fromNumber(r)));return s.compare(D_)===1&&(s=new nn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=tc(e),[r,s]=nc(t);for(let i=0;i<this.hashCount;i++){const a=this.Ae(r,s,i);if(!this.Re(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new zo(i,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ee===0)return;const t=tc(e),[r,s]=nc(t);for(let i=0;i<this.hashCount;i++){const a=this.Ae(r,s,i);this.Ve(a)}}Ve(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Rr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class li{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Gr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new li(ie.min(),s,new Se(ce),Gt(),de())}}class Gr{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Gr(r,t,de(),de(),de())}}/**
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
 */class Vs{constructor(e,t,r,s){this.me=e,this.removedTargetIds=t,this.key=r,this.fe=s}}class Kh{constructor(e,t){this.targetId=e,this.ge=t}}class $h{constructor(e,t,r=$e.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class rc{constructor(){this.pe=0,this.ye=sc(),this.we=$e.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=de(),t=de(),r=de();return this.ye.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:re()}}),new Gr(this.we,this.Se,e,t,r)}Me(){this.be=!1,this.ye=sc()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,we(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class N_{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Gt(),this.$e=As(),this.Ue=As(),this.Ke=new Se(ce)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const r=this.He(t);switch(e.state){case 0:this.Je(t)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(t);break;case 3:this.Je(t)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),r.Ce(e.resumeToken));break;default:re()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((r,s)=>{this.Je(s)&&t(s)})}Ze(e){const t=e.targetId,r=e.ge.count,s=this.Xe(t);if(s){const i=s.target;if(uo(i))if(r===0){const a=new ne(i.path);this.ze(t,a,Ze.newNoDocument(a,ie.min()))}else we(r===1);else{const a=this.et(t);if(a!==r){const l=this.tt(e),c=l?this.nt(l,e,a):1;if(c!==0){this.Ye(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,u)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=ln(r).toUint8Array()}catch(c){if(c instanceof wh)return Kn("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new zo(a,s,i)}catch(c){return Kn(c instanceof Rr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ee===0?null:l}nt(e,t,r){return t.ge.count===r-this.st(e,t.targetId)?0:2}st(e,t){const r=this.ke.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.ke.it(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.ze(t,i,null),s++)}),s}ot(e){const t=new Map;this.qe.forEach((i,a)=>{const l=this.Xe(a);if(l){if(i.current&&uo(l.target)){const c=new ne(l.target.path);this._t(c).has(a)||this.ut(a,c)||this.ze(a,c,Ze.newNoDocument(c,e))}i.ve&&(t.set(a,i.Fe()),i.Me())}});let r=de();this.Ue.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const u=this.Xe(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.Qe.forEach((i,a)=>a.setReadTime(e));const s=new li(e,t,this.Ke,this.Qe,r);return this.Qe=Gt(),this.$e=As(),this.Ue=As(),this.Ke=new Se(ce),s}Ge(e,t){if(!this.Je(e))return;const r=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,r),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}ze(e,t,r){if(!this.Je(e))return;const s=this.He(e);this.ut(e,t)?s.xe(t,1):s.Oe(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),this.Ue=this.Ue.insert(t,this.ct(t).add(e)),r&&(this.Qe=this.Qe.insert(t,r))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new rc,this.qe.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new Le(ce),this.Ue=this.Ue.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new Le(ce),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||W("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new rc),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function As(){return new Se(ne.comparator)}function sc(){return new Se(ne.comparator)}const M_={asc:"ASCENDING",desc:"DESCENDING"},O_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},x_={and:"AND",or:"OR"};class L_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function fo(n,e){return n.useProto3Json||ti(e)?e:{value:e}}function Hs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Qh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function F_(n,e){return Hs(n,e.toTimestamp())}function Mt(n){return we(!!n),ie.fromTimestamp(function(t){const r=an(t);return new xe(r.seconds,r.nanos)}(n))}function Ho(n,e){return mo(n,e).canonicalString()}function mo(n,e){const t=function(s){return new ke(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Xh(n){const e=ke.fromString(n);return we(tf(e)),e}function po(n,e){return Ho(n.databaseId,e.path)}function Wi(n,e){const t=Xh(e);if(t.get(1)!==n.databaseId.projectId)throw new Y(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new Y(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ne(Yh(t))}function Jh(n,e){return Ho(n.databaseId,e)}function U_(n){const e=Xh(n);return e.length===4?ke.emptyPath():Yh(e)}function go(n){return new ke(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Yh(n){return we(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function ic(n,e,t){return{name:po(n,e),fields:t.value.mapValue.fields}}function B_(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:re()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,f){return u.useProto3Json?(we(f===void 0||typeof f=="string"),$e.fromBase64String(f||"")):(we(f===void 0||f instanceof Buffer||f instanceof Uint8Array),$e.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(u){const f=u.code===void 0?B.UNKNOWN:Gh(u.code);return new Y(f,u.message||"")}(a);t=new $h(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Wi(n,r.document.name),i=Mt(r.document.updateTime),a=r.document.createTime?Mt(r.document.createTime):ie.min(),l=new at({mapValue:{fields:r.document.fields}}),c=Ze.newFoundDocument(s,i,a,l),u=r.targetIds||[],f=r.removedTargetIds||[];t=new Vs(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Wi(n,r.document),i=r.readTime?Mt(r.readTime):ie.min(),a=Ze.newNoDocument(s,i),l=r.removedTargetIds||[];t=new Vs([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Wi(n,r.document),i=r.removedTargetIds||[];t=new Vs([],i,s,null)}else{if(!("filter"in e))return re();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new P_(s,i),l=r.targetId;t=new Kh(l,a)}}return t}function j_(n,e){let t;if(e instanceof Wr)t={update:ic(n,e.key,e.value)};else if(e instanceof jo)t={delete:po(n,e.key)};else if(e instanceof mn)t={update:ic(n,e.key,e.data),updateMask:X_(e.fieldMask)};else{if(!(e instanceof C_))return re();t={verify:po(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof qs)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof jr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof qr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof zs)return{fieldPath:a.field.canonicalString(),increment:l.Ie};throw re()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:F_(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:re()}(n,e.precondition)),t}function q_(n,e){return n&&n.length>0?(we(e!==void 0),n.map(t=>function(s,i){let a=s.updateTime?Mt(s.updateTime):Mt(i);return a.isEqual(ie.min())&&(a=Mt(i)),new T_(a,s.transformResults||[])}(t,e))):[]}function z_(n,e){return{documents:[Jh(n,e.path)]}}function H_(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Jh(n,s);const i=function(u){if(u.length!==0)return ef(xt.create(u,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(u){if(u.length!==0)return u.map(f=>function(g){return{field:qn(g.field),direction:K_(g.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=fo(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ht:t,parent:s}}function W_(n){let e=U_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){we(r===1);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(m){const g=Zh(m);return g instanceof xt&&Ph(g)?g.getFilters():[g]}(t.where));let a=[];t.orderBy&&(a=function(m){return m.map(g=>function(E){return new js(zn(E.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(g))}(t.orderBy));let l=null;t.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,ti(g)?null:g}(t.limit));let c=null;t.startAt&&(c=function(m){const g=!!m.before,y=m.values||[];return new Bs(y,g)}(t.startAt));let u=null;return t.endAt&&(u=function(m){const g=!m.before,y=m.values||[];return new Bs(y,g)}(t.endAt)),u_(e,s,a,i,l,"F",c,u)}function G_(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return re()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Zh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=zn(t.unaryFilter.field);return Oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=zn(t.unaryFilter.field);return Oe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=zn(t.unaryFilter.field);return Oe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=zn(t.unaryFilter.field);return Oe.create(a,"!=",{nullValue:"NULL_VALUE"});default:return re()}}(n):n.fieldFilter!==void 0?function(t){return Oe.create(zn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return re()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return xt.create(t.compositeFilter.filters.map(r=>Zh(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return re()}}(t.compositeFilter.op))}(n):re()}function K_(n){return M_[n]}function $_(n){return O_[n]}function Q_(n){return x_[n]}function qn(n){return{fieldPath:n.canonicalString()}}function zn(n){return We.fromServerFormat(n.fieldPath)}function ef(n){return n instanceof Oe?function(t){if(t.op==="=="){if(Gl(t.value))return{unaryFilter:{field:qn(t.field),op:"IS_NAN"}};if(Wl(t.value))return{unaryFilter:{field:qn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Gl(t.value))return{unaryFilter:{field:qn(t.field),op:"IS_NOT_NAN"}};if(Wl(t.value))return{unaryFilter:{field:qn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qn(t.field),op:$_(t.op),value:t.value}}}(n):n instanceof xt?function(t){const r=t.getFilters().map(s=>ef(s));return r.length===1?r[0]:{compositeFilter:{op:Q_(t.op),filters:r}}}(n):re()}function X_(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function tf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Zt{constructor(e,t,r,s,i=ie.min(),a=ie.min(),l=$e.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Zt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Zt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class J_{constructor(e){this.Tt=e}}function Y_(n){const e=W_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ho(e,e.limit,"L"):e}/**
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
 */class Z_{constructor(){this.Tn=new ey}addToCollectionParentIndex(e,t){return this.Tn.add(t),U.resolve()}getCollectionParents(e,t){return U.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return U.resolve()}deleteFieldIndex(e,t){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,t){return U.resolve()}getDocumentsMatchingTarget(e,t){return U.resolve(null)}getIndexType(e,t){return U.resolve(0)}getFieldIndexes(e,t){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,t){return U.resolve(on.min())}getMinOffsetFromCollectionGroup(e,t){return U.resolve(on.min())}updateCollectionGroup(e,t,r){return U.resolve()}updateIndexEntries(e,t){return U.resolve()}}class ey{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Le(ke.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Le(ke.comparator)).toArray()}}/**
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
 */const oc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},nf=41943040;class ot{static withCacheSize(e){return new ot(e,ot.DEFAULT_COLLECTION_PERCENTILE,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */ot.DEFAULT_COLLECTION_PERCENTILE=10,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ot.DEFAULT=new ot(nf,ot.DEFAULT_COLLECTION_PERCENTILE,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ot.DISABLED=new ot(-1,0,0);/**
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
 */const ac="LruGarbageCollector",ty=1048576;function lc([n,e],[t,r]){const s=ce(n,t);return s===0?ce(e,r):s}class ny{constructor(e){this.Hn=e,this.buffer=new Le(lc),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();lc(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ry{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){W(ac,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){rr(t)?W(ac,"Ignoring IndexedDB error during garbage collection: ",t):await nr(t)}await this.er(3e5)})}}class sy{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return U.resolve(ei.ae);const r=new ny(t);return this.tr.forEachTarget(e,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(e,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.tr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),U.resolve(oc)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),oc):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let r,s,i,a,l,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,a=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,t))).next(m=>(i=m,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(u=Date.now(),Bn()<=pe.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${m} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),U.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function iy(n,e){return new sy(n,e)}/**
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
 */class oy{constructor(){this.changes=new Sn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ze.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?U.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class ay{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class ly{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Dr(r.mutation,s,mt.empty(),xe.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,de()).next(()=>r))}getLocalViewOfDocuments(e,t,r=de()){const s=Tn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=Ir();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Tn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,de()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let i=Gt();const a=Vr(),l=function(){return Vr()}();return t.forEach((c,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof mn)?i=i.insert(u.key,u):f!==void 0?(a.set(u.key,f.mutation.getFieldMask()),Dr(f.mutation,u,f.mutation.getFieldMask(),xe.now())):a.set(u.key,mt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,f)=>a.set(u,f)),t.forEach((u,f)=>{var m;return l.set(u,new ay(f,(m=a.get(u))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,t){const r=Vr();let s=new Se((a,l)=>a-l),i=de();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let f=r.get(c)||mt.empty();f=l.applyToLocalView(u,f),r.set(c,f);const m=(s.get(l.batchId)||de()).add(c);s=s.insert(l.batchId,m)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,m=Fh();f.forEach(g=>{if(!i.has(g)){const y=Hh(t.get(g),r.get(g));y!==null&&m.set(g,y),i=i.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(e,u,m))}return U.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return ne.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):h_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):U.resolve(Tn());let l=Lr,c=i;return a.next(u=>U.forEach(u,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(f)?U.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{c=c.insert(f,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,de())).next(f=>({batchId:l,changes:Lh(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ne(t)).next(r=>{let s=Ir();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Ir();return this.indexManager.getCollectionParents(e,i).next(l=>U.forEach(l,c=>{const u=function(m,g){return new ri(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(f=>{f.forEach((m,g)=>{a=a.insert(m,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((c,u)=>{const f=u.getKey();a.get(f)===null&&(a=a.insert(f,Ze.newInvalidDocument(f)))});let l=Ir();return a.forEach((c,u)=>{const f=i.get(c);f!==void 0&&Dr(f.mutation,u,mt.empty(),xe.now()),ii(t,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class cy{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return U.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Mt(s.createTime)}}(t)),U.resolve()}getNamedQuery(e,t){return U.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(s){return{name:s.name,query:Y_(s.bundledQuery),readTime:Mt(s.readTime)}}(t)),U.resolve()}}/**
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
 */class uy{constructor(){this.overlays=new Se(ne.comparator),this.Rr=new Map}getOverlay(e,t){return U.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Tn();return U.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.Et(e,t,i)}),U.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(r)),U.resolve()}getOverlaysForCollection(e,t,r){const s=Tn(),i=t.length+1,a=new ne(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return U.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Se((u,f)=>u-f);const a=this.overlays.getIterator();for(;a.hasNext();){const u=a.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Tn(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=Tn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,f)=>l.set(u,f)),!(l.size()>=s)););return U.resolve(l)}Et(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new S_(t,r));let i=this.Rr.get(t);i===void 0&&(i=de(),this.Rr.set(t,i)),this.Rr.set(t,i.add(r.key))}}/**
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
 */class hy{constructor(){this.sessionToken=$e.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,U.resolve()}}/**
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
 */class Wo{constructor(){this.Vr=new Le(je.mr),this.gr=new Le(je.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const r=new je(e,t);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.wr(new je(e,t))}Sr(e,t){e.forEach(r=>this.removeReference(r,t))}br(e){const t=new ne(new ke([])),r=new je(t,e),s=new je(t,e+1),i=[];return this.gr.forEachInRange([r,s],a=>{this.wr(a),i.push(a.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new ne(new ke([])),r=new je(t,e),s=new je(t,e+1);let i=de();return this.gr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new je(e,0),r=this.Vr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class je{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return ne.comparator(e.key,t.key)||ce(e.Cr,t.Cr)}static pr(e,t){return ce(e.Cr,t.Cr)||ne.comparator(e.key,t.key)}}/**
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
 */class fy{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new Le(je.mr)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new k_(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.Mr=this.Mr.add(new je(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return U.resolve(a)}lookupMutationBatch(e,t){return U.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Nr(r),i=s<0?0:s;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?Mo:this.Fr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new je(t,0),s=new je(t,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([r,s],a=>{const l=this.Or(a.Cr);i.push(l)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Le(ce);return t.forEach(s=>{const i=new je(s,0),a=new je(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,a],l=>{r=r.add(l.Cr)})}),U.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;ne.isDocumentKey(i)||(i=i.child(""));const a=new je(new ne(i),0);let l=new Le(ce);return this.Mr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Cr)),!0)},a),U.resolve(this.Br(l))}Br(e){const t=[];return e.forEach(r=>{const s=this.Or(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){we(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return U.forEach(t.mutations,s=>{const i=new je(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,t){const r=new je(t,0),s=this.Mr.firstAfterOrEqual(r);return U.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class dy{constructor(e){this.kr=e,this.docs=function(){return new Se(ne.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.kr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return U.resolve(r?r.document.mutableCopy():Ze.newInvalidDocument(t))}getEntries(e,t){let r=Gt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ze.newInvalidDocument(s))}),U.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Gt();const a=t.path,l=new ne(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!a.isPrefixOf(u.path))break;u.path.length>a.length+1||zg(qg(f),r)<=0||(s.has(f.key)||ii(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,t,r,s){re()}qr(e,t){return U.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new my(this)}getSize(e){return U.resolve(this.size)}}class my extends oy{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Ir.addEntry(e,s)):this.Ir.removeEntry(r)}),U.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
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
 */class py{constructor(e){this.persistence=e,this.Qr=new Sn(t=>Lo(t),Fo),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.$r=0,this.Ur=new Wo,this.targetCount=0,this.Kr=Jn.Un()}forEachTarget(e,t){return this.Qr.forEach((r,s)=>t(s)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.$r&&(this.$r=t),U.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Kr=new Jn(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,U.resolve()}updateTargetData(e,t){return this.zn(t),U.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Ur.br(t.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Qr.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Qr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),U.waitFor(i).next(()=>s)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,t){const r=this.Qr.get(t)||null;return U.resolve(r)}addMatchingKeys(e,t,r){return this.Ur.yr(t,r),U.resolve()}removeMatchingKeys(e,t,r){this.Ur.Sr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Ur.br(t),U.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Ur.vr(t);return U.resolve(r)}containsKey(e,t){return U.resolve(this.Ur.containsKey(t))}}/**
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
 */class rf{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new ei(0),this.zr=!1,this.zr=!0,this.jr=new hy,this.referenceDelegate=e(this),this.Hr=new py(this),this.indexManager=new Z_,this.remoteDocumentCache=function(s){return new dy(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new J_(t),this.Yr=new cy(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new uy,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Wr[e.toKey()];return r||(r=new fy(t,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,r){W("MemoryPersistence","Starting transaction:",e);const s=new gy(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(i=>this.referenceDelegate.Xr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}ei(e,t){return U.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,t)))}}class gy extends Wg{constructor(e){super(),this.currentSequenceNumber=e}}class Go{constructor(e){this.persistence=e,this.ti=new Wo,this.ni=null}static ri(e){return new Go(e)}get ii(){if(this.ni)return this.ni;throw re()}addReference(e,t,r){return this.ti.addReference(r,t),this.ii.delete(r.toString()),U.resolve()}removeReference(e,t,r){return this.ti.removeReference(r,t),this.ii.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),U.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.ii.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.ii,r=>{const s=ne.fromPath(r);return this.si(e,s).next(i=>{i||t.removeEntry(s,ie.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(r=>{r?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return U.or([()=>U.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class Ws{constructor(e,t){this.persistence=e,this.oi=new Sn(r=>$g(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=iy(this,t)}static ri(e,t){return new Ws(e,t)}Zr(){}Xr(e){return U.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}sr(e){let t=0;return this.rr(e,r=>{t++}).next(()=>t)}rr(e,t){return U.forEach(this.oi,(r,s)=>this.ar(e,r,s).next(i=>i?U.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.qr(e,a=>this.ar(e,a,t).next(l=>{l||(r++,i.removeEntry(a,ie.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),U.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),U.resolve()}removeReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),U.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),U.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ks(e.data.value)),t}ar(e,t,r){return U.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.oi.get(t);return U.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Ko{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Hi=r,this.Ji=s}static Yi(e,t){let r=de(),s=de();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ko(e,t.fromCache,r,s)}}/**
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
 */class _y{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class yy{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return $d()?8:Gg(Wd())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.rs(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ss(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new _y;return this._s(e,t,a).next(l=>{if(i.result=l,this.Xi)return this.us(e,t,a,l.size)})}).next(()=>i.result)}us(e,t,r,s){return r.documentReadCount<this.es?(Bn()<=pe.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",jn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),U.resolve()):(Bn()<=pe.DEBUG&&W("QueryEngine","Query:",jn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(Bn()<=pe.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",jn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Nt(t))):U.resolve())}rs(e,t){if(Xl(t))return U.resolve(null);let r=Nt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=ho(t,null,"F"),r=Nt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=de(...i);return this.ns.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.cs(t,l);return this.ls(t,u,a,c.readTime)?this.rs(e,ho(t,null,"F")):this.hs(e,u,t,c)}))})))}ss(e,t,r,s){return Xl(t)||s.isEqual(ie.min())?U.resolve(null):this.ns.getDocuments(e,r).next(i=>{const a=this.cs(t,i);return this.ls(t,a,r,s)?U.resolve(null):(Bn()<=pe.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),jn(t)),this.hs(e,a,t,jg(s,Lr)).next(l=>l))})}cs(e,t){let r=new Le(Oh(e));return t.forEach((s,i)=>{ii(e,i)&&(r=r.add(i))}),r}ls(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}_s(e,t,r){return Bn()<=pe.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",jn(t)),this.ns.getDocumentsMatchingQuery(e,t,on.min(),r)}hs(e,t,r,s){return this.ns.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const $o="LocalStore",wy=3e8;class vy{constructor(e,t,r,s){this.persistence=e,this.Ps=t,this.serializer=s,this.Ts=new Se(ce),this.Is=new Sn(i=>Lo(i),Fo),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ly(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function Ay(n,e,t,r){return new vy(n,e,t,r)}async function sf(n,e){const t=ae(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.As(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=de();for(const u of s){a.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of i){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(r,c).next(u=>({Rs:u,removedBatchIds:a,addedBatchIds:l}))})})}function Ey(n,e){const t=ae(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.ds.newChangeBuffer({trackRemovals:!0});return function(l,c,u,f){const m=u.batch,g=m.keys();let y=U.resolve();return g.forEach(E=>{y=y.next(()=>f.getEntry(c,E)).next(R=>{const C=u.docVersions.get(E);we(C!==null),R.version.compareTo(C)<0&&(m.applyToRemoteDocument(R,u),R.isValidDocument()&&(R.setReadTime(u.commitVersion),f.addEntry(R)))})}),y.next(()=>l.mutationQueue.removeMutationBatch(c,m))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=de();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function of(n){const e=ae(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function by(n,e){const t=ae(n),r=e.snapshotVersion;let s=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.ds.newChangeBuffer({trackRemovals:!0});s=t.Ts;const l=[];e.targetChanges.forEach((f,m)=>{const g=s.get(m);if(!g)return;l.push(t.Hr.removeMatchingKeys(i,f.removedDocuments,m).next(()=>t.Hr.addMatchingKeys(i,f.addedDocuments,m)));let y=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?y=y.withResumeToken($e.EMPTY_BYTE_STRING,ie.min()).withLastLimboFreeSnapshotVersion(ie.min()):f.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(f.resumeToken,r)),s=s.insert(m,y),function(R,C,D){return R.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=wy?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(g,y,f)&&l.push(t.Hr.updateTargetData(i,y))});let c=Gt(),u=de();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(Ty(i,a,e.documentUpdates).next(f=>{c=f.Vs,u=f.fs})),!r.isEqual(ie.min())){const f=t.Hr.getLastRemoteSnapshotVersion(i).next(m=>t.Hr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return U.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(t.Ts=s,i))}function Ty(n,e,t){let r=de(),s=de();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=Gt();return t.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ie.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):W($o,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Vs:a,fs:s}})}function Iy(n,e){const t=ae(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Mo),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Ry(n,e){const t=ae(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Hr.getTargetData(r,e).next(i=>i?(s=i,U.resolve(s)):t.Hr.allocateTargetId(r).next(a=>(s=new Zt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Hr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(r.targetId,r),t.Is.set(e,r.targetId)),r})}async function _o(n,e,t){const r=ae(n),s=r.Ts.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!rr(a))throw a;W($o,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ts=r.Ts.remove(e),r.Is.delete(s.target)}function cc(n,e,t){const r=ae(n);let s=ie.min(),i=de();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,u,f){const m=ae(c),g=m.Is.get(f);return g!==void 0?U.resolve(m.Ts.get(g)):m.Hr.getTargetData(u,f)}(r,a,Nt(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>r.Ps.getDocumentsMatchingQuery(a,e,t?s:ie.min(),t?i:de())).next(l=>(Cy(r,d_(e),l),{documents:l,gs:i})))}function Cy(n,e,t){let r=n.Es.get(e)||ie.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Es.set(e,r)}class uc{constructor(){this.activeTargetIds=w_()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ky{constructor(){this.ho=new uc,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,r){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new uc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */let Es=null;function yo(){return Es===null?Es=function(){return 268435456+Math.round(2147483648*Math.random())}():Es++,"0x"+Es.toString(16)}/**
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
 */const Gi="RestConnection",Py={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Vy{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===Fs?`project_id=${r}`:`project_id=${r}&database_id=${s}`}So(e,t,r,s,i){const a=yo(),l=this.bo(e,t.toUriEncodedString());W(Gi,`Sending RPC '${e}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(c,s,i),this.vo(e,l,c,r).then(u=>(W(Gi,`Received RPC '${e}' ${a}: `,u),u),u=>{throw Kn(Gi,`RPC '${e}' ${a} failed with error: `,u,"url: ",l,"request:",r),u})}Co(e,t,r,s,i,a){return this.So(e,t,r,s,i)}Do(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+tr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}bo(e,t){const r=Py[e];return`${this.po}/v1/${t}:${r}`}terminate(){}}/**
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
 */class Dy{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
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
 */const Je="WebChannelConnection";class Ny extends Vy{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,r,s){const i=yo();return new Promise((a,l)=>{const c=new ch;c.setWithCredentials(!0),c.listenOnce(uh.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Cs.NO_ERROR:const f=c.getResponseJson();W(Je,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),a(f);break;case Cs.TIMEOUT:W(Je,`RPC '${e}' ${i} timed out`),l(new Y(B.DEADLINE_EXCEEDED,"Request time out"));break;case Cs.HTTP_ERROR:const m=c.getStatus();if(W(Je,`RPC '${e}' ${i} failed with status:`,m,"response text:",c.getResponseText()),m>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const y=g==null?void 0:g.error;if(y&&y.status&&y.message){const E=function(C){const D=C.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(D)>=0?D:B.UNKNOWN}(y.status);l(new Y(E,y.message))}else l(new Y(B.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new Y(B.UNAVAILABLE,"Connection failed."));break;default:re()}}finally{W(Je,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);W(Je,`RPC '${e}' ${i} sending request:`,s),c.send(t,"POST",u,r,15)})}Wo(e,t,r){const s=yo(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=dh(),l=fh(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const f=i.join("");W(Je,`Creating RPC '${e}' stream ${s}: ${f}`,c);const m=a.createWebChannel(f,c);let g=!1,y=!1;const E=new Dy({Fo:C=>{y?W(Je,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(g||(W(Je,`Opening RPC '${e}' stream ${s} transport.`),m.open(),g=!0),W(Je,`RPC '${e}' stream ${s} sending:`,C),m.send(C))},Mo:()=>m.close()}),R=(C,D,L)=>{C.listen(D,F=>{try{L(F)}catch(M){setTimeout(()=>{throw M},0)}})};return R(m,Tr.EventType.OPEN,()=>{y||(W(Je,`RPC '${e}' stream ${s} transport opened.`),E.Qo())}),R(m,Tr.EventType.CLOSE,()=>{y||(y=!0,W(Je,`RPC '${e}' stream ${s} transport closed`),E.Uo())}),R(m,Tr.EventType.ERROR,C=>{y||(y=!0,Kn(Je,`RPC '${e}' stream ${s} transport errored:`,C),E.Uo(new Y(B.UNAVAILABLE,"The operation could not be completed")))}),R(m,Tr.EventType.MESSAGE,C=>{var D;if(!y){const L=C.data[0];we(!!L);const F=L,M=(F==null?void 0:F.error)||((D=F[0])===null||D===void 0?void 0:D.error);if(M){W(Je,`RPC '${e}' stream ${s} received error:`,M);const G=M.status;let X=function(v){const b=Ne[v];if(b!==void 0)return Gh(b)}(G),A=M.message;X===void 0&&(X=B.INTERNAL,A="Unknown error status: "+G+" with message "+M.message),y=!0,E.Uo(new Y(X,A)),m.close()}else W(Je,`RPC '${e}' stream ${s} received:`,L),E.Ko(L)}}),R(l,hh.STAT_EVENT,C=>{C.stat===io.PROXY?W(Je,`RPC '${e}' stream ${s} detected buffering proxy`):C.stat===io.NOPROXY&&W(Je,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{E.$o()},0),E}}function Ki(){return typeof document<"u"?document:null}/**
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
 */function ci(n){return new L_(n,!0)}/**
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
 */const dc="PersistentStream";class lf{constructor(e,t,r,s,i,a,l,c){this.Ti=e,this.n_=r,this.r_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new af(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===B.RESOURCE_EXHAUSTED?(Wt(t.toString()),Wt("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===t&&this.V_(r,s)},r=>{e(()=>{const s=new Y(B.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(e,t){const r=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return W(dc,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(W(dc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class My extends lf{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=B_(this.serializer,e),r=function(i){if(!("targetChange"in i))return ie.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ie.min():a.readTime?Mt(a.readTime):ie.min()}(e);return this.listener.p_(t,r)}y_(e){const t={};t.database=go(this.serializer),t.addTarget=function(i,a){let l;const c=a.target;if(l=uo(c)?{documents:z_(i,c)}:{query:H_(i,c).ht},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Qh(i,a.resumeToken);const u=fo(i,a.expectedCount);u!==null&&(l.expectedCount=u)}else if(a.snapshotVersion.compareTo(ie.min())>0){l.readTime=Hs(i,a.snapshotVersion.toTimestamp());const u=fo(i,a.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=G_(this.serializer,e);r&&(t.labels=r),this.I_(t)}w_(e){const t={};t.database=go(this.serializer),t.removeTarget=e,this.I_(t)}}class Oy extends lf{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return we(!!e.streamToken),this.lastStreamToken=e.streamToken,we(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){we(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=q_(e.writeResults,e.commitTime),r=Mt(e.commitTime);return this.listener.v_(r,t)}C_(){const e={};e.database=go(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>j_(this.serializer,r))};this.I_(t)}}/**
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
 */class xy{}class Ly extends xy{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new Y(B.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.So(e,mo(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Y(B.UNKNOWN,i.toString())})}Co(e,t,r,s,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Co(e,mo(t,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new Y(B.UNKNOWN,a.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class Fy{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Wt(t),this.N_=!1):W("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const kn="RemoteStore";class Uy{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(a=>{r.enqueueAndForget(async()=>{Pn(this)&&(W(kn,"Restarting streams for network reachability change."),await async function(c){const u=ae(c);u.W_.add(4),await Kr(u),u.j_.set("Unknown"),u.W_.delete(4),await ui(u)}(this))})}),this.j_=new Fy(r,s)}}async function ui(n){if(Pn(n))for(const e of n.G_)await e(!0)}async function Kr(n){for(const e of n.G_)await e(!1)}function cf(n,e){const t=ae(n);t.K_.has(e.targetId)||(t.K_.set(e.targetId,e),Yo(t)?Jo(t):sr(t).c_()&&Xo(t,e))}function Qo(n,e){const t=ae(n),r=sr(t);t.K_.delete(e),r.c_()&&uf(t,e),t.K_.size===0&&(r.c_()?r.P_():Pn(t)&&t.j_.set("Unknown"))}function Xo(n,e){if(n.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ie.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}sr(n).y_(e)}function uf(n,e){n.H_.Ne(e),sr(n).w_(e)}function Jo(n){n.H_=new N_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.K_.get(e)||null,it:()=>n.datastore.serializer.databaseId}),sr(n).start(),n.j_.B_()}function Yo(n){return Pn(n)&&!sr(n).u_()&&n.K_.size>0}function Pn(n){return ae(n).W_.size===0}function hf(n){n.H_=void 0}async function By(n){n.j_.set("Online")}async function jy(n){n.K_.forEach((e,t)=>{Xo(n,e)})}async function qy(n,e){hf(n),Yo(n)?(n.j_.q_(e),Jo(n)):n.j_.set("Unknown")}async function zy(n,e,t){if(n.j_.set("Online"),e instanceof $h&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.K_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.K_.delete(l),s.H_.removeTarget(l))}(n,e)}catch(r){W(kn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Gs(n,r)}else if(e instanceof Vs?n.H_.We(e):e instanceof Kh?n.H_.Ze(e):n.H_.je(e),!t.isEqual(ie.min()))try{const r=await of(n.localStore);t.compareTo(r)>=0&&await function(i,a){const l=i.H_.ot(a);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.K_.get(u);f&&i.K_.set(u,f.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,u)=>{const f=i.K_.get(c);if(!f)return;i.K_.set(c,f.withResumeToken($e.EMPTY_BYTE_STRING,f.snapshotVersion)),uf(i,c);const m=new Zt(f.target,c,u,f.sequenceNumber);Xo(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){W(kn,"Failed to raise snapshot:",r),await Gs(n,r)}}async function Gs(n,e,t){if(!rr(e))throw e;n.W_.add(1),await Kr(n),n.j_.set("Offline"),t||(t=()=>of(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{W(kn,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await ui(n)})}function ff(n,e){return e().catch(t=>Gs(n,t,e))}async function hi(n){const e=ae(n),t=un(e);let r=e.U_.length>0?e.U_[e.U_.length-1].batchId:Mo;for(;Hy(e);)try{const s=await Iy(e.localStore,r);if(s===null){e.U_.length===0&&t.P_();break}r=s.batchId,Wy(e,s)}catch(s){await Gs(e,s)}df(e)&&mf(e)}function Hy(n){return Pn(n)&&n.U_.length<10}function Wy(n,e){n.U_.push(e);const t=un(n);t.c_()&&t.S_&&t.b_(e.mutations)}function df(n){return Pn(n)&&!un(n).u_()&&n.U_.length>0}function mf(n){un(n).start()}async function Gy(n){un(n).C_()}async function Ky(n){const e=un(n);for(const t of n.U_)e.b_(t.mutations)}async function $y(n,e,t){const r=n.U_.shift(),s=qo.from(r,e,t);await ff(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await hi(n)}async function Qy(n,e){e&&un(n).S_&&await async function(r,s){if(function(a){return V_(a)&&a!==B.ABORTED}(s.code)){const i=r.U_.shift();un(r).h_(),await ff(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await hi(r)}}(n,e),df(n)&&mf(n)}async function mc(n,e){const t=ae(n);t.asyncQueue.verifyOperationInProgress(),W(kn,"RemoteStore received new credentials");const r=Pn(t);t.W_.add(3),await Kr(t),r&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await ui(t)}async function Xy(n,e){const t=ae(n);e?(t.W_.delete(2),await ui(t)):e||(t.W_.add(2),await Kr(t),t.j_.set("Unknown"))}function sr(n){return n.J_||(n.J_=function(t,r,s){const i=ae(t);return i.M_(),new My(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{xo:By.bind(null,n),No:jy.bind(null,n),Lo:qy.bind(null,n),p_:zy.bind(null,n)}),n.G_.push(async e=>{e?(n.J_.h_(),Yo(n)?Jo(n):n.j_.set("Unknown")):(await n.J_.stop(),hf(n))})),n.J_}function un(n){return n.Y_||(n.Y_=function(t,r,s){const i=ae(t);return i.M_(),new Oy(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:Gy.bind(null,n),Lo:Qy.bind(null,n),D_:Ky.bind(null,n),v_:$y.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await hi(n)):(await n.Y_.stop(),n.U_.length>0&&(W(kn,`Stopping write stream with ${n.U_.length} pending writes`),n.U_=[]))})),n.Y_}/**
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
 */class Zo{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new qt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new Zo(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ea(n,e){if(Wt("AsyncQueue",`${e}: ${n}`),rr(n))return new Y(B.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Wn{static emptySet(e){return new Wn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ne.comparator(t.key,r.key):(t,r)=>ne.comparator(t.key,r.key),this.keyedMap=Ir(),this.sortedSet=new Se(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Wn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class pc{constructor(){this.Z_=new Se(ne.comparator)}track(e){const t=e.doc.key,r=this.Z_.get(t);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(t):e.type===1&&r.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):re():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Yn{constructor(e,t,r,s,i,a,l,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new Yn(e,t,Wn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&si(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Jy{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class Yy{constructor(){this.queries=gc(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,r){const s=ae(t),i=s.queries;s.queries=gc(),i.forEach((a,l)=>{for(const c of l.ta)c.onError(r)})})(this,new Y(B.ABORTED,"Firestore shutting down"))}}function gc(){return new Sn(n=>Mh(n),si)}async function pf(n,e){const t=ae(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.na()&&e.ra()&&(r=2):(i=new Jy,r=e.ra()?0:1);try{switch(r){case 0:i.ea=await t.onListen(s,!0);break;case 1:i.ea=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=ea(a,`Initialization of query '${jn(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.ta.push(e),e.sa(t.onlineState),i.ea&&e.oa(i.ea)&&ta(t)}async function gf(n,e){const t=ae(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.ta.indexOf(e);a>=0&&(i.ta.splice(a,1),i.ta.length===0?s=e.ra()?0:1:!i.na()&&e.ra()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Zy(n,e){const t=ae(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.ta)l.oa(s)&&(r=!0);a.ea=s}}r&&ta(t)}function ew(n,e,t){const r=ae(n),s=r.queries.get(e);if(s)for(const i of s.ta)i.onError(t);r.queries.delete(e)}function ta(n){n.ia.forEach(e=>{e.next()})}var wo,_c;(_c=wo||(wo={}))._a="default",_c.Cache="cache";class _f{constructor(e,t,r){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Yn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const r=t!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=Yn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==wo.Cache}}/**
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
 */class yf{constructor(e){this.key=e}}class wf{constructor(e){this.key=e}}class tw{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=de(),this.mutatedKeys=de(),this.ya=Oh(e),this.wa=new Wn(this.ya)}get Sa(){return this.fa}ba(e,t){const r=t?t.Da:new pc,s=t?t.wa:this.wa;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const g=s.get(f),y=ii(this.query,m)?m:null,E=!!g&&this.mutatedKeys.has(g.key),R=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let C=!1;g&&y?g.data.isEqual(y.data)?E!==R&&(r.track({type:3,doc:y}),C=!0):this.va(g,y)||(r.track({type:2,doc:y}),C=!0,(c&&this.ya(y,c)>0||u&&this.ya(y,u)<0)&&(l=!0)):!g&&y?(r.track({type:0,doc:y}),C=!0):g&&!y&&(r.track({type:1,doc:g}),C=!0,(c||u)&&(l=!0)),C&&(y?(a=a.add(y),i=R?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{wa:a,Da:r,ls:l,mutatedKeys:i}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const a=e.Da.X_();a.sort((f,m)=>function(y,E){const R=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re()}};return R(y)-R(E)}(f.type,m.type)||this.ya(f.doc,m.doc)),this.Ca(r),s=s!=null&&s;const l=t&&!s?this.Fa():[],c=this.pa.size===0&&this.current&&!s?1:0,u=c!==this.ga;return this.ga=c,a.length!==0||u?{snapshot:new Yn(this.query,e.wa,i,a,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:l}:{Ma:l}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new pc,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=de(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const t=[];return e.forEach(r=>{this.pa.has(r)||t.push(new wf(r))}),this.pa.forEach(r=>{e.has(r)||t.push(new yf(r))}),t}Oa(e){this.fa=e.gs,this.pa=de();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return Yn.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const na="SyncEngine";class nw{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class rw{constructor(e){this.key=e,this.Ba=!1}}class sw{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new Sn(l=>Mh(l),si),this.qa=new Map,this.Qa=new Set,this.$a=new Se(ne.comparator),this.Ua=new Map,this.Ka=new Wo,this.Wa={},this.Ga=new Map,this.za=Jn.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function iw(n,e,t=!0){const r=If(n);let s;const i=r.ka.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Na()):s=await vf(r,e,t,!0),s}async function ow(n,e){const t=If(n);await vf(t,e,!0,!1)}async function vf(n,e,t,r){const s=await Ry(n.localStore,Nt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await aw(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&cf(n.remoteStore,s),l}async function aw(n,e,t,r,s){n.Ha=(m,g,y)=>async function(R,C,D,L){let F=C.view.ba(D);F.ls&&(F=await cc(R.localStore,C.query,!1).then(({documents:A})=>C.view.ba(A,F)));const M=L&&L.targetChanges.get(C.targetId),G=L&&L.targetMismatches.get(C.targetId)!=null,X=C.view.applyChanges(F,R.isPrimaryClient,M,G);return wc(R,C.targetId,X.Ma),X.snapshot}(n,m,g,y);const i=await cc(n.localStore,e,!0),a=new tw(e,i.gs),l=a.ba(i.documents),c=Gr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),u=a.applyChanges(l,n.isPrimaryClient,c);wc(n,t,u.Ma);const f=new nw(e,t,a);return n.ka.set(e,f),n.qa.has(t)?n.qa.get(t).push(e):n.qa.set(t,[e]),u.snapshot}async function lw(n,e,t){const r=ae(n),s=r.ka.get(e),i=r.qa.get(s.targetId);if(i.length>1)return r.qa.set(s.targetId,i.filter(a=>!si(a,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await _o(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Qo(r.remoteStore,s.targetId),vo(r,s.targetId)}).catch(nr)):(vo(r,s.targetId),await _o(r.localStore,s.targetId,!0))}async function cw(n,e){const t=ae(n),r=t.ka.get(e),s=t.qa.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Qo(t.remoteStore,r.targetId))}async function uw(n,e,t){const r=_w(n);try{const s=await function(a,l){const c=ae(a),u=xe.now(),f=l.reduce((y,E)=>y.add(E.key),de());let m,g;return c.persistence.runTransaction("Locally write mutations","readwrite",y=>{let E=Gt(),R=de();return c.ds.getEntries(y,f).next(C=>{E=C,E.forEach((D,L)=>{L.isValidDocument()||(R=R.add(D))})}).next(()=>c.localDocuments.getOverlayedDocuments(y,E)).next(C=>{m=C;const D=[];for(const L of l){const F=R_(L,m.get(L.key).overlayedDocument);F!=null&&D.push(new mn(L.key,F,Ch(F.value.mapValue),pt.exists(!0)))}return c.mutationQueue.addMutationBatch(y,u,D,l)}).next(C=>{g=C;const D=C.applyToLocalDocumentSet(m,R);return c.documentOverlayCache.saveOverlays(y,C.batchId,D)})}).then(()=>({batchId:g.batchId,changes:Lh(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let u=a.Wa[a.currentUser.toKey()];u||(u=new Se(ce)),u=u.insert(l,c),a.Wa[a.currentUser.toKey()]=u}(r,s.batchId,t),await $r(r,s.changes),await hi(r.remoteStore)}catch(s){const i=ea(s,"Failed to persist write");t.reject(i)}}async function Af(n,e){const t=ae(n);try{const r=await by(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Ua.get(i);a&&(we(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.Ba=!0:s.modifiedDocuments.size>0?we(a.Ba):s.removedDocuments.size>0&&(we(a.Ba),a.Ba=!1))}),await $r(t,r,e)}catch(r){await nr(r)}}function yc(n,e,t){const r=ae(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.ka.forEach((i,a)=>{const l=a.view.sa(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=ae(a);c.onlineState=l;let u=!1;c.queries.forEach((f,m)=>{for(const g of m.ta)g.sa(l)&&(u=!0)}),u&&ta(c)}(r.eventManager,e),s.length&&r.La.p_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function hw(n,e,t){const r=ae(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Ua.get(e),i=s&&s.key;if(i){let a=new Se(ne.comparator);a=a.insert(i,Ze.newNoDocument(i,ie.min()));const l=de().add(i),c=new li(ie.min(),new Map,new Se(ce),a,l);await Af(r,c),r.$a=r.$a.remove(i),r.Ua.delete(e),ra(r)}else await _o(r.localStore,e,!1).then(()=>vo(r,e,t)).catch(nr)}async function fw(n,e){const t=ae(n),r=e.batch.batchId;try{const s=await Ey(t.localStore,e);bf(t,r,null),Ef(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await $r(t,s)}catch(s){await nr(s)}}async function dw(n,e,t){const r=ae(n);try{const s=await function(a,l){const c=ae(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next(m=>(we(m!==null),f=m.keys(),c.mutationQueue.removeMutationBatch(u,m))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>c.localDocuments.getDocuments(u,f))})}(r.localStore,e);bf(r,e,t),Ef(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await $r(r,s)}catch(s){await nr(s)}}function Ef(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function bf(n,e,t){const r=ae(n);let s=r.Wa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Wa[r.currentUser.toKey()]=s}}function vo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.qa.get(e))n.ka.delete(r),t&&n.La.Ja(r,t);n.qa.delete(e),n.isPrimaryClient&&n.Ka.br(e).forEach(r=>{n.Ka.containsKey(r)||Tf(n,r)})}function Tf(n,e){n.Qa.delete(e.path.canonicalString());const t=n.$a.get(e);t!==null&&(Qo(n.remoteStore,t),n.$a=n.$a.remove(e),n.Ua.delete(t),ra(n))}function wc(n,e,t){for(const r of t)r instanceof yf?(n.Ka.addReference(r.key,e),mw(n,r)):r instanceof wf?(W(na,"Document no longer in limbo: "+r.key),n.Ka.removeReference(r.key,e),n.Ka.containsKey(r.key)||Tf(n,r.key)):re()}function mw(n,e){const t=e.key,r=t.path.canonicalString();n.$a.get(t)||n.Qa.has(r)||(W(na,"New document in limbo: "+t),n.Qa.add(r),ra(n))}function ra(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const e=n.Qa.values().next().value;n.Qa.delete(e);const t=new ne(ke.fromString(e)),r=n.za.next();n.Ua.set(r,new rw(t)),n.$a=n.$a.insert(t,r),cf(n.remoteStore,new Zt(Nt(Uo(t.path)),r,"TargetPurposeLimboResolution",ei.ae))}}async function $r(n,e,t){const r=ae(n),s=[],i=[],a=[];r.ka.isEmpty()||(r.ka.forEach((l,c)=>{a.push(r.Ha(c,e,t).then(u=>{var f;if((u||t)&&r.isPrimaryClient){const m=u?!u.fromCache:(f=t==null?void 0:t.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,m?"current":"not-current")}if(u){s.push(u);const m=Ko.Yi(c.targetId,u);i.push(m)}}))}),await Promise.all(a),r.La.p_(s),await async function(c,u){const f=ae(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>U.forEach(u,g=>U.forEach(g.Hi,y=>f.persistence.referenceDelegate.addReference(m,g.targetId,y)).next(()=>U.forEach(g.Ji,y=>f.persistence.referenceDelegate.removeReference(m,g.targetId,y)))))}catch(m){if(!rr(m))throw m;W($o,"Failed to update sequence numbers: "+m)}for(const m of u){const g=m.targetId;if(!m.fromCache){const y=f.Ts.get(g),E=y.snapshotVersion,R=y.withLastLimboFreeSnapshotVersion(E);f.Ts=f.Ts.insert(g,R)}}}(r.localStore,i))}async function pw(n,e){const t=ae(n);if(!t.currentUser.isEqual(e)){W(na,"User change. New user:",e.toKey());const r=await sf(t.localStore,e);t.currentUser=e,function(i,a){i.Ga.forEach(l=>{l.forEach(c=>{c.reject(new Y(B.CANCELLED,a))})}),i.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await $r(t,r.Rs)}}function gw(n,e){const t=ae(n),r=t.Ua.get(e);if(r&&r.Ba)return de().add(r.key);{let s=de();const i=t.qa.get(e);if(!i)return s;for(const a of i){const l=t.ka.get(a);s=s.unionWith(l.view.Sa)}return s}}function If(n){const e=ae(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Af.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hw.bind(null,e),e.La.p_=Zy.bind(null,e.eventManager),e.La.Ja=ew.bind(null,e.eventManager),e}function _w(n){const e=ae(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=fw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=dw.bind(null,e),e}class Ks{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ci(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return Ay(this.persistence,new yy,e.initialUser,this.serializer)}Xa(e){return new rf(Go.ri,this.serializer)}Za(e){return new ky}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ks.provider={build:()=>new Ks};class yw extends Ks{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){we(this.persistence.referenceDelegate instanceof Ws);const r=this.persistence.referenceDelegate.garbageCollector;return new ry(r,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?ot.withCacheSize(this.cacheSizeBytes):ot.DEFAULT;return new rf(r=>Ws.ri(r,t),this.serializer)}}class Ao{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>yc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=pw.bind(null,this.syncEngine),await Xy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Yy}()}createDatastore(e){const t=ci(e.databaseInfo.databaseId),r=function(i){return new Ny(i)}(e.databaseInfo);return function(i,a,l,c){return new Ly(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,l){return new Uy(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>yc(this.syncEngine,t,0),function(){return fc.D()?new fc:new Sy}())}createSyncEngine(e,t){return function(s,i,a,l,c,u,f){const m=new sw(s,i,a,l,c,u);return f&&(m.ja=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=ae(s);W(kn,"RemoteStore shutting down."),i.W_.add(5),await Kr(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Ao.provider={build:()=>new Ao};/**
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
 */class Rf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):Wt("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const hn="FirestoreClient";class ww{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Ye.UNAUTHENTICATED,this.clientId=gh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{W(hn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(W(hn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ea(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function $i(n,e){n.asyncQueue.verifyOperationInProgress(),W(hn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await sf(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function vc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await vw(n);W(hn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>mc(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>mc(e.remoteStore,s)),n._onlineComponents=e}async function vw(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){W(hn,"Using user provided OfflineComponentProvider");try{await $i(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===B.FAILED_PRECONDITION||s.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Kn("Error using user provided cache. Falling back to memory cache: "+t),await $i(n,new Ks)}}else W(hn,"Using default OfflineComponentProvider"),await $i(n,new yw(void 0));return n._offlineComponents}async function Cf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(W(hn,"Using user provided OnlineComponentProvider"),await vc(n,n._uninitializedComponentsProvider._online)):(W(hn,"Using default OnlineComponentProvider"),await vc(n,new Ao))),n._onlineComponents}function Aw(n){return Cf(n).then(e=>e.syncEngine)}async function kf(n){const e=await Cf(n),t=e.eventManager;return t.onListen=iw.bind(null,e.syncEngine),t.onUnlisten=lw.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=ow.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=cw.bind(null,e.syncEngine),t}function Ew(n,e,t={}){const r=new qt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,u){const f=new Rf({next:g=>{f.su(),a.enqueueAndForget(()=>gf(i,m));const y=g.docs.has(l);!y&&g.fromCache?u.reject(new Y(B.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&g.fromCache&&c&&c.source==="server"?u.reject(new Y(B.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),m=new _f(Uo(l.path),f,{includeMetadataChanges:!0,Ta:!0});return pf(i,m)}(await kf(n),n.asyncQueue,e,t,r)),r.promise}function bw(n,e,t={}){const r=new qt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,u){const f=new Rf({next:g=>{f.su(),a.enqueueAndForget(()=>gf(i,m)),g.fromCache&&c.source==="server"?u.reject(new Y(B.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),m=new _f(l,f,{includeMetadataChanges:!0,Ta:!0});return pf(i,m)}(await kf(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function Pf(n,e,t){if(!t)throw new Y(B.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Tw(n,e,t,r){if(e===!0&&r===!0)throw new Y(B.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ec(n){if(!ne.isDocumentKey(n))throw new Y(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function bc(n){if(ne.isDocumentKey(n))throw new Y(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function sa(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":re()}function Lt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new Y(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=sa(n);throw new Y(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */const Vf="firestore.googleapis.com",Tc=!0;class Ic{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Vf,this.ssl=Tc}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Tc;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=nf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ty)throw new Y(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Tw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Sf((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Y(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Y(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Y(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class fi{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ic({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Y(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Y(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ic(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Dg;switch(r.type){case"firstParty":return new xg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Ac.get(t);r&&(W("ComponentProvider","Removing Datastore"),Ac.delete(t),r.terminate())}(this),Promise.resolve()}}function Iw(n,e,t,r={}){var s;const i=(n=Lt(n,fi))._getSettings(),a=Object.assign(Object.assign({},i),{emulatorOptions:n._getEmulatorOptions()}),l=`${e}:${t}`;i.host!==Vf&&i.host!==l&&Kn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},i),{host:l,ssl:!1,emulatorOptions:r});if(!Ms(c,a)&&(n._setSettings(c),r.mockUserToken)){let u,f;if(typeof r.mockUserToken=="string")u=r.mockUserToken,f=Ye.MOCK_USER;else{u=Hd(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new Y(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Ye(m)}n._authCredentials=new Ng(new mh(u,f))}}/**
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
 */class di{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new di(this.firestore,e,this._query)}}class ct{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ct(this.firestore,e,this._key)}}class rn extends di{constructor(e,t,r){super(e,t,Uo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ct(this.firestore,null,new ne(e))}withConverter(e){return new rn(this.firestore,e,this._path)}}function mi(n,e,...t){if(n=kt(n),Pf("collection","path",e),n instanceof fi){const r=ke.fromString(e,...t);return bc(r),new rn(n,null,r)}{if(!(n instanceof ct||n instanceof rn))throw new Y(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ke.fromString(e,...t));return bc(r),new rn(n.firestore,null,r)}}function Qr(n,e,...t){if(n=kt(n),arguments.length===1&&(e=gh.newId()),Pf("doc","path",e),n instanceof fi){const r=ke.fromString(e,...t);return Ec(r),new ct(n,null,new ne(r))}{if(!(n instanceof ct||n instanceof rn))throw new Y(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ke.fromString(e,...t));return Ec(r),new ct(n.firestore,n instanceof rn?n.converter:null,new ne(r))}}/**
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
 */const Rc="AsyncQueue";class Cc{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new af(this,"async_queue_retry"),this.Su=()=>{const r=Ki();r&&W(Rc,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=e;const t=Ki();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=Ki();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new qt;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!rr(e))throw e;W(Rc,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw Wt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.bu=t,t}enqueueAfterDelay(e,t,r){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const s=Zo.createAndSchedule(this,e,t,r,i=>this.Fu(i));return this.fu.push(s),s}Du(){this.gu&&re()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class ir extends fi{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Cc,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Cc(e),this._firestoreClient=void 0,await e}}}function Rw(n,e){const t=typeof n=="object"?n:np(),r=typeof n=="string"?n:Fs,s=Co(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=qd("firestore");i&&Iw(s,...i)}return s}function pi(n){if(n._terminated)throw new Y(B.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Cw(n),n._firestoreClient}function Cw(n){var e,t,r;const s=n._freezeSettings(),i=function(l,c,u,f){return new Jg(l,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Sf(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new ww(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(n._componentsProvider))}/**
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
 */class Zn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Zn($e.fromBase64String(e))}catch(t){throw new Y(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Zn($e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Xr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Y(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class oa{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Y(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Y(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
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
 */const kw=/^__.*__$/;class Sw{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new mn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Wr(e,this.data,t,this.fieldTransforms)}}class Df{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new mn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Nf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re()}}class la{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new la(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ku({path:r,Qu:!1});return s.$u(e),s}Uu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return $s(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(Nf(this.Lu)&&kw.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class Pw{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ci(e)}ju(e,t,r,s=!1){return new la({Lu:e,methodName:t,zu:r,path:We.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ca(n){const e=n._freezeSettings(),t=ci(n._databaseId);return new Pw(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Mf(n,e,t,r,s,i={}){const a=n.ju(i.merge||i.mergeFields?2:0,e,t,s);ua("Data must be an object, but it was:",a,r);const l=Lf(r,a);let c,u;if(i.merge)c=new mt(a.fieldMask),u=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const g=Eo(e,m,t);if(!a.contains(g))throw new Y(B.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Uf(f,g)||f.push(g)}c=new mt(f),u=a.fieldTransforms.filter(m=>c.covers(m.field))}else c=null,u=a.fieldTransforms;return new Sw(new at(l),c,u)}class gi extends ia{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof gi}}function Of(n,e,t,r){const s=n.ju(1,e,t);ua("Data must be an object, but it was:",s,r);const i=[],a=at.empty();dn(r,(c,u)=>{const f=ha(e,c,t);u=kt(u);const m=s.Uu(f);if(u instanceof gi)i.push(f);else{const g=_i(u,m);g!=null&&(i.push(f),a.set(f,g))}});const l=new mt(i);return new Df(a,l,s.fieldTransforms)}function xf(n,e,t,r,s,i){const a=n.ju(1,e,t),l=[Eo(e,r,t)],c=[s];if(i.length%2!=0)throw new Y(B.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(Eo(e,i[g])),c.push(i[g+1]);const u=[],f=at.empty();for(let g=l.length-1;g>=0;--g)if(!Uf(u,l[g])){const y=l[g];let E=c[g];E=kt(E);const R=a.Uu(y);if(E instanceof gi)u.push(y);else{const C=_i(E,R);C!=null&&(u.push(y),f.set(y,C))}}const m=new mt(u);return new Df(f,m,a.fieldTransforms)}function _i(n,e){if(Ff(n=kt(n)))return ua("Unsupported field value:",e,n),Lf(n,e);if(n instanceof ia)return function(r,s){if(!Nf(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=_i(l,s.Ku(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=kt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return v_(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=xe.fromDate(r);return{timestampValue:Hs(s.serializer,i)}}if(r instanceof xe){const i=new xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Hs(s.serializer,i)}}if(r instanceof oa)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Zn)return{bytesValue:Qh(s.serializer,r._byteString)};if(r instanceof ct){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Wu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ho(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof aa)return function(a,l){return{mapValue:{fields:{[Th]:{stringValue:Rh},[Us]:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw l.Wu("VectorValues must only contain numeric values.");return Bo(l.serializer,u)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${sa(r)}`)}(n,e)}function Lf(n,e){const t={};return yh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):dn(n,(r,s)=>{const i=_i(s,e.qu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Ff(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof xe||n instanceof oa||n instanceof Zn||n instanceof ct||n instanceof ia||n instanceof aa)}function ua(n,e,t){if(!Ff(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=sa(t);throw r==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+r)}}function Eo(n,e,t){if((e=kt(e))instanceof Xr)return e._internalPath;if(typeof e=="string")return ha(n,e);throw $s("Field path arguments must be of type string or ",n,!1,void 0,t)}const Vw=new RegExp("[~\\*/\\[\\]]");function ha(n,e,t){if(e.search(Vw)>=0)throw $s(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Xr(...e.split("."))._internalPath}catch{throw $s(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function $s(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new Y(B.INVALID_ARGUMENT,l+n+c)}function Uf(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Bf{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Dw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(jf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Dw extends Bf{data(){return super.data()}}function jf(n,e){return typeof e=="string"?ha(n,e):e instanceof Xr?e._internalPath:e._delegate._internalPath}/**
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
 */function Nw(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new Y(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Mw{convertValue(e,t="none"){switch(cn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return De(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ln(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw re()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return dn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[Us].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>De(a.doubleValue));return new aa(i)}convertGeoPoint(e){return new oa(De(e.latitude),De(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ni(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Fr(e));default:return null}}convertTimestamp(e){const t=an(e);return new xe(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ke.fromString(e);we(tf(r));const s=new Ur(r.get(1),r.get(3)),i=new ne(r.popFirst(5));return s.isEqual(t)||Wt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */class Cr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class zf extends Bf{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ds(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(jf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Ds extends zf{data(e={}){return super.data(e)}}class Ow{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Cr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Ds(this._firestore,this._userDataWriter,r.key,r,new Cr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Y(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const c=new Ds(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Cr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Ds(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Cr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return l.type!==0&&(u=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:xw(l.type),doc:c,oldIndex:u,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function xw(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re()}}/**
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
 */function Lw(n){n=Lt(n,ct);const e=Lt(n.firestore,ir);return Ew(pi(e),n._key).then(t=>Fw(e,n,t))}class Hf extends Mw{constructor(e){super(),this.firestore=e}convertBytes(e){return new Zn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ct(this.firestore,null,t)}}function Ft(n){n=Lt(n,di);const e=Lt(n.firestore,ir),t=pi(e),r=new Hf(e);return Nw(n._query),bw(t,n._query).then(s=>new Ow(e,r,n,s))}function Wf(n,e,t){n=Lt(n,ct);const r=Lt(n.firestore,ir),s=qf(n.converter,e,t);return fa(r,[Mf(ca(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,pt.none())])}function Gf(n,e,t,...r){n=Lt(n,ct);const s=Lt(n.firestore,ir),i=ca(s);let a;return a=typeof(e=kt(e))=="string"||e instanceof Xr?xf(i,"updateDoc",n._key,e,t,r):Of(i,"updateDoc",n._key,e),fa(s,[a.toMutation(n._key,pt.exists(!0))])}function fa(n,e){return function(r,s){const i=new qt;return r.asyncQueue.enqueueAndForget(async()=>uw(await Aw(r),s,i)),i.promise}(pi(n),e)}function Fw(n,e,t){const r=t.docs.get(e._key),s=new Hf(n);return new zf(n,s,e._key,r,new Cr(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */class Uw{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=ca(e)}set(e,t,r){this._verifyNotCommitted();const s=Qi(e,this._firestore),i=qf(s.converter,t,r),a=Mf(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(a.toMutation(s._key,pt.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=Qi(e,this._firestore);let a;return a=typeof(t=kt(t))=="string"||t instanceof Xr?xf(this._dataReader,"WriteBatch.update",i._key,t,r,s):Of(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(a.toMutation(i._key,pt.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Qi(e,this._firestore);return this._mutations=this._mutations.concat(new jo(t._key,pt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new Y(B.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Qi(n,e){if((n=kt(n)).firestore!==e)throw new Y(B.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */function Bw(n){return pi(n=Lt(n,ir)),new Uw(n,e=>fa(n,e))}(function(e,t=!0){(function(s){tr=s})(tp),sn(new zt("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new ir(new Mg(r.getProvider("auth-internal")),new Lg(a,r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Y(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ur(u.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Dt(Nl,Ml,e),Dt(Nl,Ml,"esm2017")})();const jw={apiKey:"AIzaSyCTe1si_Cg2Pkl2X77JpscYfW6KajberCM",authDomain:"drawit-1f620.firebaseapp.com",projectId:"drawit-1f620",storageBucket:"drawit-1f620.firebasestorage.app",messagingSenderId:"513679195329",appId:"1:513679195329:web:d650c7307b461788dc6840",measurementId:"G-P8GR3KFS0H"},qw=Lu(jw),Jr=Rw(qw),Yr=mi(Jr,"games"),Kt=mi(Jr,"users");mi(Jr,"drawings");const zw=mi(Jr,"words");async function Hw(n){try{const e=Xs(wt),t=n.filter(i=>!e[i]);if(t.length===0)return;const r=await Ft(Kt),s={};r.docs.forEach(i=>{const a=i.data();t.includes(a.name)&&(s[a.name]={...a,id:i.id})}),wt.update(i=>({...i,...s}))}catch(e){console.error("Error loading users:",e)}}async function Ww(){try{return(await Ft(zw)).docs.map(t=>t.data())}catch(n){console.error("Error loading words:",n)}return[]}async function Gw(n){try{const t=(await Ft(Kt)).docs.find(i=>i.data().name===n);if(t){const a={...t.data(),id:t.id};return rt.set(a),wt.update(l=>({...l,[a.name]:a})),await Kf(a.name),a}const r=Qr(Kt),s={name:n,coins:0,createdAt:new Date,id:r.id};return await Wf(r,s),rt.set(s),wt.update(i=>({...i,[s.name]:s})),s}catch(e){throw console.error("Error creating/retrieving user:",e),e}}async function Kw(n){try{const e=Xs(wt);if(e[n])return e[n];const r=(await Ft(Kt)).docs.find(s=>s.data().name===n);if(r){const i={...r.data(),id:r.id};return wt.update(a=>({...a,[i.name]:i})),i}return null}catch(e){return console.error("Error getting user:",e),null}}async function kc(n){try{if(!n){const a=(await Ft(Kt)).docs.map(l=>({...l.data(),id:l.id}));return wt.update(l=>{const c={...l};return a.forEach(u=>{c[u.name]=u}),c}),a}const e=Xs(wt),t=Object.values(e).filter(i=>i.name.toLowerCase().includes(n.toLowerCase()));if(t.length>0)return t;const s=(await Ft(Kt)).docs.map(i=>({...i.data(),id:i.id})).filter(i=>i.name.toLowerCase().includes(n.toLowerCase()));return wt.update(i=>{const a={...i};return s.forEach(l=>{a[l.name]=l}),a}),s}catch(e){return console.error("Error searching users:",e),[]}}async function Kf(n){try{const t=(await Ft(Yr)).docs.filter(r=>{const s=r.data();return s.users&&s.users.includes(n)}).map(r=>({...r.data(),id:r.id}));return Hr.set(t),t}catch(e){return console.error("Error in loadGames:",e),[]}}async function $w(n){const e=Qr(Yr),t={id:e.id,users:n,createdAt:new Date,drawings:[]};return await Wf(e,t),Is.set(!1),t}async function yi(n){if(!n.id)return console.error("Cannot update game without ID"),n;try{const e=Qr(Yr,n.id);return await Gf(e,{drawings:n.drawings}),n}catch(e){return console.error("Error updating game:",e),n}}async function Nr(n,e){if(!n.id)return console.error("Cannot add coins to user without ID"),n;try{const t=Qr(Kt,n.id),r=n.coins+e;await Gf(t,{coins:r});const s={...n,coins:r};return rt.set(s),s}catch(t){return console.error("Error adding coins:",t),n}}async function Qw(){try{const n=Xs(rt);if(!n)return!1;const t=(await Ft(Kt)).docs.find(i=>i.data().name===n.name);if(!t)return rt.set(null),localStorage.removeItem("drawIt-user"),localStorage.removeItem("drawIt-games"),localStorage.removeItem("drawIt-users"),!1;const s={...t.data(),id:t.id};return rt.set(s),!0}catch(n){return console.error("Error validating user session:",n),!1}}async function Sc(n){try{const e=await Lw(Qr(Yr,n));return e.exists()?{...e.data(),id:e.id}:null}catch(e){return console.error("Error loading game:",e),null}}async function Xw(){try{const n=await Ft(Yr),e=[];n.docs.forEach(r=>{const s=r.data();if(s.drawings&&s.drawings.length>0){const i=s.drawings.map(a=>({...a,gameId:r.id}));for(const a of i)a.guessedBy=s.users.find(l=>l!==a.artist)??"";e.push(...i)}});const t=e.sort((r,s)=>{function i(c){return c?c instanceof Date?c:typeof c.toDate=="function"?c.toDate():typeof c=="string"?new Date(c):new Date(c):new Date(0)}const a=i(r.createdAt);return i(s.createdAt).getTime()-a.getTime()});return console.log(t),t.slice(0,100)}catch(n){return console.error("Error fetching recent drawings:",n),[]}}var da={};(function n(e,t,r,s){var i=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",l=function(){if(!e.OffscreenCanvas)return!1;var N=new OffscreenCanvas(1,1),k=N.getContext("2d");k.fillRect(0,0,1,1);var Q=N.transferToImageBitmap();try{k.createPattern(Q,"no-repeat")}catch{return!1}return!0}();function c(){}function u(N){var k=t.exports.Promise,Q=k!==void 0?k:e.Promise;return typeof Q=="function"?new Q(N):(N(c,c),null)}var f=function(N,k){return{transform:function(Q){if(N)return Q;if(k.has(Q))return k.get(Q);var $=new OffscreenCanvas(Q.width,Q.height),le=$.getContext("2d");return le.drawImage(Q,0,0),k.set(Q,$),$},clear:function(){k.clear()}}}(l,new Map),m=function(){var N=Math.floor(16.666666666666668),k,Q,$={},le=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(k=function(oe){var ue=Math.random();return $[ue]=requestAnimationFrame(function te(he){le===he||le+N-1<he?(le=he,delete $[ue],oe()):$[ue]=requestAnimationFrame(te)}),ue},Q=function(oe){$[oe]&&cancelAnimationFrame($[oe])}):(k=function(oe){return setTimeout(oe,N)},Q=function(oe){return clearTimeout(oe)}),{frame:k,cancel:Q}}(),g=function(){var N,k,Q={};function $(le){function oe(ue,te){le.postMessage({options:ue||{},callback:te})}le.init=function(te){var he=te.transferControlToOffscreen();le.postMessage({canvas:he},[he])},le.fire=function(te,he,Ae){if(k)return oe(te,null),k;var be=Math.random().toString(36).slice(2);return k=u(function(ye){function Ie(Ve){Ve.data.callback===be&&(delete Q[be],le.removeEventListener("message",Ie),k=null,f.clear(),Ae(),ye())}le.addEventListener("message",Ie),oe(te,be),Q[be]=Ie.bind(null,{data:{callback:be}})}),k},le.reset=function(){le.postMessage({reset:!0});for(var te in Q)Q[te](),delete Q[te]}}return function(){if(N)return N;if(!r&&i){var le=["var CONFETTI, SIZE = {}, module = {};","("+n.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{N=new Worker(URL.createObjectURL(new Blob([le])))}catch(oe){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",oe),null}$(N)}return N}}(),y={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function E(N,k){return k?k(N):N}function R(N){return N!=null}function C(N,k,Q){return E(N&&R(N[k])?N[k]:y[k],Q)}function D(N){return N<0?0:Math.floor(N)}function L(N,k){return Math.floor(Math.random()*(k-N))+N}function F(N){return parseInt(N,16)}function M(N){return N.map(G)}function G(N){var k=String(N).replace(/[^0-9a-f]/gi,"");return k.length<6&&(k=k[0]+k[0]+k[1]+k[1]+k[2]+k[2]),{r:F(k.substring(0,2)),g:F(k.substring(2,4)),b:F(k.substring(4,6))}}function X(N){var k=C(N,"origin",Object);return k.x=C(k,"x",Number),k.y=C(k,"y",Number),k}function A(N){N.width=document.documentElement.clientWidth,N.height=document.documentElement.clientHeight}function _(N){var k=N.getBoundingClientRect();N.width=k.width,N.height=k.height}function v(N){var k=document.createElement("canvas");return k.style.position="fixed",k.style.top="0px",k.style.left="0px",k.style.pointerEvents="none",k.style.zIndex=N,k}function b(N,k,Q,$,le,oe,ue,te,he){N.save(),N.translate(k,Q),N.rotate(oe),N.scale($,le),N.arc(0,0,1,ue,te,he),N.restore()}function I(N){var k=N.angle*(Math.PI/180),Q=N.spread*(Math.PI/180);return{x:N.x,y:N.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:N.startVelocity*.5+Math.random()*N.startVelocity,angle2D:-k+(.5*Q-Math.random()*Q),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:N.color,shape:N.shape,tick:0,totalTicks:N.ticks,decay:N.decay,drift:N.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:N.gravity*3,ovalScalar:.6,scalar:N.scalar,flat:N.flat}}function P(N,k){k.x+=Math.cos(k.angle2D)*k.velocity+k.drift,k.y+=Math.sin(k.angle2D)*k.velocity+k.gravity,k.velocity*=k.decay,k.flat?(k.wobble=0,k.wobbleX=k.x+10*k.scalar,k.wobbleY=k.y+10*k.scalar,k.tiltSin=0,k.tiltCos=0,k.random=1):(k.wobble+=k.wobbleSpeed,k.wobbleX=k.x+10*k.scalar*Math.cos(k.wobble),k.wobbleY=k.y+10*k.scalar*Math.sin(k.wobble),k.tiltAngle+=.1,k.tiltSin=Math.sin(k.tiltAngle),k.tiltCos=Math.cos(k.tiltAngle),k.random=Math.random()+2);var Q=k.tick++/k.totalTicks,$=k.x+k.random*k.tiltCos,le=k.y+k.random*k.tiltSin,oe=k.wobbleX+k.random*k.tiltCos,ue=k.wobbleY+k.random*k.tiltSin;if(N.fillStyle="rgba("+k.color.r+", "+k.color.g+", "+k.color.b+", "+(1-Q)+")",N.beginPath(),a&&k.shape.type==="path"&&typeof k.shape.path=="string"&&Array.isArray(k.shape.matrix))N.fill(yt(k.shape.path,k.shape.matrix,k.x,k.y,Math.abs(oe-$)*.1,Math.abs(ue-le)*.1,Math.PI/10*k.wobble));else if(k.shape.type==="bitmap"){var te=Math.PI/10*k.wobble,he=Math.abs(oe-$)*.1,Ae=Math.abs(ue-le)*.1,be=k.shape.bitmap.width*k.scalar,ye=k.shape.bitmap.height*k.scalar,Ie=new DOMMatrix([Math.cos(te)*he,Math.sin(te)*he,-Math.sin(te)*Ae,Math.cos(te)*Ae,k.x,k.y]);Ie.multiplySelf(new DOMMatrix(k.shape.matrix));var Ve=N.createPattern(f.transform(k.shape.bitmap),"no-repeat");Ve.setTransform(Ie),N.globalAlpha=1-Q,N.fillStyle=Ve,N.fillRect(k.x-be/2,k.y-ye/2,be,ye),N.globalAlpha=1}else if(k.shape==="circle")N.ellipse?N.ellipse(k.x,k.y,Math.abs(oe-$)*k.ovalScalar,Math.abs(ue-le)*k.ovalScalar,Math.PI/10*k.wobble,0,2*Math.PI):b(N,k.x,k.y,Math.abs(oe-$)*k.ovalScalar,Math.abs(ue-le)*k.ovalScalar,Math.PI/10*k.wobble,0,2*Math.PI);else if(k.shape==="star")for(var fe=Math.PI/2*3,Be=4*k.scalar,st=8*k.scalar,ut=k.x,It=k.y,Pt=5,it=Math.PI/Pt;Pt--;)ut=k.x+Math.cos(fe)*st,It=k.y+Math.sin(fe)*st,N.lineTo(ut,It),fe+=it,ut=k.x+Math.cos(fe)*Be,It=k.y+Math.sin(fe)*Be,N.lineTo(ut,It),fe+=it;else N.moveTo(Math.floor(k.x),Math.floor(k.y)),N.lineTo(Math.floor(k.wobbleX),Math.floor(le)),N.lineTo(Math.floor(oe),Math.floor(ue)),N.lineTo(Math.floor($),Math.floor(k.wobbleY));return N.closePath(),N.fill(),k.tick<k.totalTicks}function w(N,k,Q,$,le){var oe=k.slice(),ue=N.getContext("2d"),te,he,Ae=u(function(be){function ye(){te=he=null,ue.clearRect(0,0,$.width,$.height),f.clear(),le(),be()}function Ie(){r&&!($.width===s.width&&$.height===s.height)&&($.width=N.width=s.width,$.height=N.height=s.height),!$.width&&!$.height&&(Q(N),$.width=N.width,$.height=N.height),ue.clearRect(0,0,$.width,$.height),oe=oe.filter(function(Ve){return P(ue,Ve)}),oe.length?te=m.frame(Ie):ye()}te=m.frame(Ie),he=ye});return{addFettis:function(be){return oe=oe.concat(be),Ae},canvas:N,promise:Ae,reset:function(){te&&m.cancel(te),he&&he()}}}function H(N,k){var Q=!N,$=!!C(k||{},"resize"),le=!1,oe=C(k,"disableForReducedMotion",Boolean),ue=i&&!!C(k||{},"useWorker"),te=ue?g():null,he=Q?A:_,Ae=N&&te?!!N.__confetti_initialized:!1,be=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,ye;function Ie(fe,Be,st){for(var ut=C(fe,"particleCount",D),It=C(fe,"angle",Number),Pt=C(fe,"spread",Number),it=C(fe,"startVelocity",Number),Zr=C(fe,"decay",Number),wi=C(fe,"gravity",Number),lr=C(fe,"drift",Number),Vn=C(fe,"colors",M),es=C(fe,"ticks",Number),Me=C(fe,"shapes"),qe=C(fe,"scalar"),Dn=!!C(fe,"flat"),cr=X(fe),ur=ut,hr=[],gn=N.width*cr.x,ts=N.height*cr.y;ur--;)hr.push(I({x:gn,y:ts,angle:It,spread:Pt,startVelocity:it,color:Vn[ur%Vn.length],shape:Me[L(0,Me.length)],ticks:es,decay:Zr,gravity:wi,drift:lr,scalar:qe,flat:Dn}));return ye?ye.addFettis(hr):(ye=w(N,hr,he,Be,st),ye.promise)}function Ve(fe){var Be=oe||C(fe,"disableForReducedMotion",Boolean),st=C(fe,"zIndex",Number);if(Be&&be)return u(function(it){it()});Q&&ye?N=ye.canvas:Q&&!N&&(N=v(st),document.body.appendChild(N)),$&&!Ae&&he(N);var ut={width:N.width,height:N.height};te&&!Ae&&te.init(N),Ae=!0,te&&(N.__confetti_initialized=!0);function It(){if(te){var it={getBoundingClientRect:function(){if(!Q)return N.getBoundingClientRect()}};he(it),te.postMessage({resize:{width:it.width,height:it.height}});return}ut.width=ut.height=null}function Pt(){ye=null,$&&(le=!1,e.removeEventListener("resize",It)),Q&&N&&(document.body.contains(N)&&document.body.removeChild(N),N=null,Ae=!1)}return $&&!le&&(le=!0,e.addEventListener("resize",It,!1)),te?te.fire(fe,ut,Pt):Ie(fe,ut,Pt)}return Ve.reset=function(){te&&te.reset(),ye&&ye.reset()},Ve}var Ee;function St(){return Ee||(Ee=H(null,{useWorker:!0,resize:!0})),Ee}function yt(N,k,Q,$,le,oe,ue){var te=new Path2D(N),he=new Path2D;he.addPath(te,new DOMMatrix(k));var Ae=new Path2D;return Ae.addPath(he,new DOMMatrix([Math.cos(ue)*le,Math.sin(ue)*le,-Math.sin(ue)*oe,Math.cos(ue)*oe,Q,$])),Ae}function pn(N){if(!a)throw new Error("path confetti are not supported in this browser");var k,Q;typeof N=="string"?k=N:(k=N.path,Q=N.matrix);var $=new Path2D(k),le=document.createElement("canvas"),oe=le.getContext("2d");if(!Q){for(var ue=1e3,te=ue,he=ue,Ae=0,be=0,ye,Ie,Ve=0;Ve<ue;Ve+=2)for(var fe=0;fe<ue;fe+=2)oe.isPointInPath($,Ve,fe,"nonzero")&&(te=Math.min(te,Ve),he=Math.min(he,fe),Ae=Math.max(Ae,Ve),be=Math.max(be,fe));ye=Ae-te,Ie=be-he;var Be=10,st=Math.min(Be/ye,Be/Ie);Q=[st,0,0,st,-Math.round(ye/2+te)*st,-Math.round(Ie/2+he)*st]}return{type:"path",path:k,matrix:Q}}function ar(N){var k,Q=1,$="#000000",le='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof N=="string"?k=N:(k=N.text,Q="scalar"in N?N.scalar:Q,le="fontFamily"in N?N.fontFamily:le,$="color"in N?N.color:$);var oe=10*Q,ue=""+oe+"px "+le,te=new OffscreenCanvas(oe,oe),he=te.getContext("2d");he.font=ue;var Ae=he.measureText(k),be=Math.ceil(Ae.actualBoundingBoxRight+Ae.actualBoundingBoxLeft),ye=Math.ceil(Ae.actualBoundingBoxAscent+Ae.actualBoundingBoxDescent),Ie=2,Ve=Ae.actualBoundingBoxLeft+Ie,fe=Ae.actualBoundingBoxAscent+Ie;be+=Ie+Ie,ye+=Ie+Ie,te=new OffscreenCanvas(be,ye),he=te.getContext("2d"),he.font=ue,he.fillStyle=$,he.fillText(k,Ve,fe);var Be=1/Q;return{type:"bitmap",bitmap:te.transferToImageBitmap(),matrix:[Be,0,0,Be,-be*Be/2,-ye*Be/2]}}t.exports=function(){return St().apply(this,arguments)},t.exports.reset=function(){St().reset()},t.exports.create=H,t.exports.shapeFromPath=pn,t.exports.shapeFromText=ar})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),da,!1);const Jw=da.exports;da.exports.create;function Yw(n){const e=document.createElement("div");e.className="toast toast-top toast-end",e.innerHTML=`
        <div class="alert bg-primary/80 text-black border-2 border-primary shadow-lg">
            <span>${n}</span>
        </div>
    `,document.body.appendChild(e),setTimeout(()=>{e.remove()},5e3),Jw({particleCount:100,spread:70,origin:{y:.6}})}let Zw=["apple","airplane","alligator","anchor","angel","antelope","apron","armchair","arrow","artist","avocado","axe","baby","backpack","bacon","badger","balloon","banana","bandage","banjo","barn","barrel","baseball","basket","bathtub","battery","beach","bear","beaver","bedroom","bee","beetle","bell","belt","bench","bicycle","binoculars","bird","birthday","blender","blimp","block","blouse","boat","bomb","book","boomerang","boot","bottle","bouquet","bow","boxer","bracelet","brain","branch","bread","bridge","broccoli","broom","brush","bucket","bulldozer","bullet","bus","bush","butterfly","button","cactus","cage","cake","calculator","camel","camera","campfire","can","candle","cannon","canoe","cap","cape","car","carrot","cart","castle","cat","caterpillar","cave","ceiling","cellphone","chainsaw","chair","chalk","champion","cheese","cherry","chest","chicken","chimney","church","circle","claw","cliff","clock","cloud","clown","coat","cobweb","coin","comet","computer","cookie","couch","cow","crab","crayon","cream","crocodile","crown","cruise","cupcake","curtain","cushion","dagger","daisy","dance","dart","deer","desk","desert","diamond","dice","dinosaur","dish","diver","dog","doll","dolphin","donkey","door","doormat","dragon","drawer","drill","drone","drum","duck","eagle","ear","earthquake","eggplant","electricity","elephant","elevator","engine","envelope","eraser","explosion","eyeglasses","face","fan","farm","feather","fence","ferret","fire","firefighter","fireplace","firetruck","fish","fishing","flag","flamingo","flashlight","flood","floor","flower","flute","fly","folder","football","fork","fountain","fox","fridge","frog","galaxy","garage","garden","gargoyle","gate","ghost","giraffe","glacier","glider","glove","goat","goggles","goldfish","golf","gorilla","grapes","grass","grill","guitar","hammer","hamster","handcuffs","handle","hanger","harp","hat","headphones","hedgehog","helicopter","helmet","hill","hippo","hive","hook","horn","horse","hospital","hotdog","house","hovercraft","hug","hurdle","hurricane","iceberg","icicle","igloo","iguana","ink","insect","iron","island","jacket","jail","jellyfish","jigsaw","jockey","jungle","kangaroo","kettle","key","keyboard","kick","kidney","kite","kitten","knee","knife","koala","ladder","lamp","lantern","laptop","lasso","laundry","leaf","leash","leg","lemon","leopard","letter","library","lightbulb","lighthouse","lightning","limo","lion","lips","lizard","lock","locust","lollipop","magnet","mailbox","map","maracas","mask","match","meatball","megaphone","mermaid","meteor","microscope","microwave","milk","mirror","moat","mole","monkey","monster","moon","mosquito","motorcycle","mountain","mouse","mower","mug","mummy","mushroom","music","nail","needle","nest","net","ninja","noodle","notebook","nose","notepad","nun","nut","oasis","ocean","octopus","oil","onion","ostrich","otter","oven","owl","oxygen","paddle","pajamas","panda","panther","parachute","parrot","party","passport","peacock","peanut","pear","peas","pencil","penguin","pepper","perfume","phone","piano","picture","pig","pigeon","pill","pillow","pineapple","pipe","pirate","pizza","planet","plate","plow","plug","plumber","pocket","pool","popcorn","postcard","poster","potato","printer","pudding","puppet","puppy","pyramid","quail","quartz","queen","quilt","rabbit","raccoon","radio","raft","rain","rainbow","rake","rat","raven","razor","reindeer","remote","ribbon","ring","robot","rocket","roof","rope","rose","ruler","saddle","sailboat","salad","sand","sandcastle","satellite","saw","scarf","school","scissors","scorpion","screw","seal","seesaw","shampoo","shark","sheep","shelf","shell","ship","shoe","shovel","shower","shrimp","sink","skateboard","skeleton","ski","skirt","skunk","sled","slide","slime","sloth","slug","smoke","snail","snake","sneeze","snow","snowball","snowflake","snowman","sock","sofa","soldier","spaceship","spaghetti","spark","speaker","spear","spectacles","spider","spoon","spring","spy","squirrel","stairs","starfish","statue","steak","stethoscope","stomach","stool","stove","straw","street","string","submarine","suitcase","sun","sunglasses","sunset","surfboard","surgeon","swamp","swan","sweater","swing","sword","table","tail","tape","tarp","taxi","teacup","teacher","teapot","telescope","tent","thermometer","throne","ticket","tie","tiger","toad","toaster","toilet","toothbrush","toothpaste","torch","tornado","towel","tractor","traffic","train","trampoline","trash","treasure","triangle","tricycle","troll","trophy","truck","trumpet","tuba","turtle","tusk","tv","typewriter","umbrella","unicorn","urn","vacuum","vampire","vase","vegetable","village","vine","violin","volcano","vulture","wagon","wall","wallet","wardrobe","watch","waterfall","wave","web","whale","wheelbarrow","whistle","wig","window","windmill","wing","wolf","worm","wrench","xylophone","yacht","yak","yo-yo","zebra","zoo"];function ma(n,e){return n.drawings.filter(r=>!r.guessed)[0]||null}async function ev(n,e,t){const r=ma(n,e.name);if(!r)return;const s=t.toLowerCase().trim(),i=r.secretWord.toLowerCase().trim();let a=!1;return s===i?(a=!0,r.guessed=!0,r.guessedBy=e.name,await Nr(e,r.coins),Yw(`It was ${r.secretWord}! You got ${r.coins} coins!`)):r.guesses.includes(t)||r.guesses.push(t),await yi(n),a}async function Pc(n){const e=[];for(const s of Zw)e.push({secretWord:s,coins:0});let t=await Ww();e.push(...t.map(s=>({secretWord:s.word,coins:0,createdBy:s.createdBy,createdAt:s.createdAt})));const r=e.sort(()=>Math.random()-.5).slice(0,n);for(let s=0;s<r.length;s++)r[s].coins=s+1;return r}function bs(n,e){const t=ma(n);if(!t){if(n.drawings.length===0)return n.users[0]===e?"draw":"waiting";const r=[...n.drawings].reverse().find(l=>l.guessed);if(!r)return n.users[0]===e?"draw":"waiting";const i=(n.users.indexOf(r.artist)+1)%n.users.length;return n.users[i]===e?"draw":"waiting"}return t.artist===e?"waiting":"guess"}function tv(n){return{...n,hintPurchased:n.hintPurchased??!1,superHintPurchased:n.superHintPurchased??!1}}function Vc(n){return`The word is ${n.secretWord.length} letters long`}function Dc(n){const e=n.secretWord.split("");for(let t=e.length-1;t>0;t--){const r=Math.floor(Math.random()*(t+1));[e[t],e[r]]=[e[r],e[t]]}return`Letters: ${e.join(" · ").toUpperCase()}`}function Qs(n){return n?n instanceof Date?n.getTime():typeof n.toDate=="function"?n.toDate().getTime():typeof n=="string"?new Date(n).getTime():new Date(n).getTime():0}async function nv(n,e,t){if(t.coins<5||e.hintPurchased)return!1;const r=n.drawings.findIndex(s=>s.artist===e.artist&&Qs(s.createdAt)===Qs(e.createdAt));return r===-1?!1:(n.drawings[r]={...e,hintPurchased:!0},await yi(n),!0)}async function rv(n,e,t){if(t.coins<10||!e.hintPurchased||e.superHintPurchased)return!1;const r=n.drawings.findIndex(s=>s.artist===e.artist&&Qs(s.createdAt)===Qs(e.createdAt));return r===-1?!1:(n.drawings[r]={...e,superHintPurchased:!0},await yi(n),!0)}const or="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAASUExURQAAAAYGCP/4Vf/QLPGZEf///5e4X0EAAAABdFJOUwBA5thmAAAAAWJLR0QF+G/pxwAAAAd0SU1FB+kFEQMBEaw38IoAAABMSURBVEjHY2CAA0EsgAEbGFVIP4VgQSUsAF31qEL6KUSoMcYCXEAAonpU4ajCUYWjCkcVjiokQyGisnHBArDWXKMK6adwKLQfR5pCAFjAgTiNHXoCAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI1LTA1LTE3VDAzOjAwOjU0KzAwOjAwAqVpBwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNS0wNS0xN1QwMzowMDo1NCswMDowMHP40bsAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjUtMDUtMTdUMDM6MDE6MTcrMDA6MDB+jY89AAAAAElFTkSuQmCC";function Nc(n){let e,t=n[0][0].toUpperCase()+"",r;return{c(){e=x("div"),r=se(t),T(e,"class","w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold")},m(s,i){q(s,e,i),S(e,r)},p(s,i){i&1&&t!==(t=s[0][0].toUpperCase()+"")&&ve(r,t)},d(s){s&&j(e)}}}function Mc(n){let e,t,r,s,i;return{c(){e=x("span"),t=se(n[1]),r=Z(),s=x("img"),Ct(s.src,i=or)||T(s,"src",i),T(s,"class","w-4 h-4"),T(s,"alt","coins")},m(a,l){q(a,e,l),S(e,t),q(a,r,l),q(a,s,l)},p(a,l){l&2&&ve(t,a[1])},d(a){a&&(j(e),j(r),j(s))}}}function Oc(n){let e,t,r;return{c(){e=se("· "),t=x("span"),r=se(n[3]),T(t,"class","text-xs text-black/60")},m(s,i){q(s,e,i),q(s,t,i),S(t,r)},p(s,i){i&8&&ve(r,s[3])},d(s){s&&(j(e),j(t))}}}function xc(n){let e,t;return{c(){e=Jt("svg"),t=Jt("path"),T(t,"fill-rule","evenodd"),T(t,"d","M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"),T(t,"clip-rule","evenodd"),T(e,"xmlns","http://www.w3.org/2000/svg"),T(e,"class","h-5 w-5 text-gray-400"),T(e,"viewBox","0 0 20 20"),T(e,"fill","currentColor")},m(r,s){q(r,e,s),S(e,t)},d(r){r&&j(e)}}}function sv(n){let e,t,r,s,i,a,l,c,u,f,m,g,y,E=n[2]&&Nc(n),R=n[1]!==null&&Mc(n),C=n[3]&&Oc(n),D=n[4]&&xc();return{c(){e=x("button"),t=x("div"),E&&E.c(),r=Z(),s=x("div"),i=x("span"),a=se(n[0]),l=Z(),c=x("div"),R&&R.c(),u=Z(),C&&C.c(),f=Z(),D&&D.c(),T(i,"class","font-medium text-black"),T(c,"class","flex items-center gap-1 text-sm text-black/60"),T(s,"class","flex flex-col items-start"),T(t,"class","flex items-center gap-3"),T(e,"class","flex items-center justify-between w-full p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-primary/20 transition-colors active:bg-gray-50"),e.disabled=m=n[4]===null,Yt(e,"cursor-pointer",n[4]!==null),Yt(e,"cursor-default",n[4]===null)},m(L,F){q(L,e,F),S(e,t),E&&E.m(t,null),S(t,r),S(t,s),S(s,i),S(i,a),S(s,l),S(s,c),R&&R.m(c,null),S(c,u),C&&C.m(c,null),S(e,f),D&&D.m(e,null),g||(y=_e(e,"click",n[5]),g=!0)},p(L,[F]){L[2]?E?E.p(L,F):(E=Nc(L),E.c(),E.m(t,r)):E&&(E.d(1),E=null),F&1&&ve(a,L[0]),L[1]!==null?R?R.p(L,F):(R=Mc(L),R.c(),R.m(c,u)):R&&(R.d(1),R=null),L[3]?C?C.p(L,F):(C=Oc(L),C.c(),C.m(c,null)):C&&(C.d(1),C=null),L[4]?D||(D=xc(),D.c(),D.m(e,null)):D&&(D.d(1),D=null),F&16&&m!==(m=L[4]===null)&&(e.disabled=m),F&16&&Yt(e,"cursor-pointer",L[4]!==null),F&16&&Yt(e,"cursor-default",L[4]===null)},i:J,o:J,d(L){L&&j(e),E&&E.d(),R&&R.d(),C&&C.d(),D&&D.d(),g=!1,y()}}}function iv(n,e,t){let{name:r}=e,{coins:s=null}=e,{showAvatar:i=!1}=e,{subtitle:a=null}=e,{onClick:l=null}=e;const c=()=>l==null?void 0:l();return n.$$set=u=>{"name"in u&&t(0,r=u.name),"coins"in u&&t(1,s=u.coins),"showAvatar"in u&&t(2,i=u.showAvatar),"subtitle"in u&&t(3,a=u.subtitle),"onClick"in u&&t(4,l=u.onClick)},[r,s,i,a,l,c]}class pa extends Tt{constructor(e){super(),bt(this,e,iv,sv,_t,{name:0,coins:1,showAvatar:2,subtitle:3,onClick:4})}}function Lc(n,e,t){const r=n.slice();return r[11]=e[t],r}function ov(n){let e,t,r=Re(n[0].users.filter(n[9])),s=[];for(let a=0;a<r.length;a+=1)s[a]=Fc(Lc(n,r,a));const i=a=>ee(s[a],1,1,()=>{s[a]=null});return{c(){for(let a=0;a<s.length;a+=1)s[a].c();e=Et()},m(a,l){for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(a,l);q(a,e,l),t=!0},p(a,l){if(l&99){r=Re(a[0].users.filter(a[9]));let c;for(c=0;c<r.length;c+=1){const u=Lc(a,r,c);s[c]?(s[c].p(u,l),K(s[c],1)):(s[c]=Fc(u),s[c].c(),K(s[c],1),s[c].m(e.parentNode,e))}for(Fe(),c=r.length;c<s.length;c+=1)i(c);Ue()}},i(a){if(!t){for(let l=0;l<r.length;l+=1)K(s[l]);t=!0}},o(a){s=s.filter(Boolean);for(let l=0;l<s.length;l+=1)ee(s[l]);t=!1},d(a){a&&j(e),gt(s,a)}}}function av(n){let e,t,r;return t=new pa({props:{name:n[2],coins:n[3],onClick:n[6]}}),{c(){e=x("div"),tt(t.$$.fragment),T(e,"class","flex flex-row text-start w-full")},m(s,i){q(s,e,i),Ge(t,e,null),r=!0},p(s,i){const a={};i&4&&(a.name=s[2]),i&8&&(a.coins=s[3]),t.$set(a)},i(s){r||(K(t.$$.fragment,s),r=!0)},o(s){ee(t.$$.fragment,s),r=!1},d(s){s&&j(e),Ke(t)}}}function lv(n){let e,t=n[11]+"",r;return{c(){e=x("span"),r=se(t),T(e,"class","font-bold text-black")},m(s,i){q(s,e,i),S(e,r)},p(s,i){i&3&&t!==(t=s[11]+"")&&ve(r,t)},i:J,o:J,d(s){s&&j(e)}}}function cv(n){let e,t;return e=new pa({props:{name:n[11],coins:n[5][n[11]].coins,subtitle:`${n[0].drawings.length} drawing${n[0].drawings.length===1?"":"s"}`,onClick:n[6]}}),{c(){tt(e.$$.fragment)},m(r,s){Ge(e,r,s),t=!0},p(r,s){const i={};s&3&&(i.name=r[11]),s&35&&(i.coins=r[5][r[11]].coins),s&1&&(i.subtitle=`${r[0].drawings.length} drawing${r[0].drawings.length===1?"":"s"}`),e.$set(i)},i(r){t||(K(e.$$.fragment,r),t=!0)},o(r){ee(e.$$.fragment,r),t=!1},d(r){Ke(e,r)}}}function Fc(n){let e,t,r,s,i;const a=[cv,lv],l=[];function c(u,f){return u[5][u[11]]?0:1}return t=c(n),r=l[t]=a[t](n),{c(){e=x("div"),r.c(),s=Z(),T(e,"class","w-full flex flex-col items-center justify-center gap-0.5")},m(u,f){q(u,e,f),l[t].m(e,null),S(e,s),i=!0},p(u,f){let m=t;t=c(u),t===m?l[t].p(u,f):(Fe(),ee(l[m],1,1,()=>{l[m]=null}),Ue(),r=l[t],r?r.p(u,f):(r=l[t]=a[t](u),r.c()),K(r,1),r.m(e,s))},i(u){i||(K(r),i=!0)},o(u){ee(r),i=!1},d(u){u&&j(e),l[t].d()}}}function uv(n){let e,t,r,s;const i=[av,ov],a=[];function l(c,u){return c[4]?0:c[0]?1:-1}return~(t=l(n))&&(r=a[t]=i[t](n)),{c(){e=x("div"),r&&r.c(),T(e,"class","cursor-pointer py-1 rounded-lg transition-colors w-full mb-2 flex flex-col gap-2 items-center justify-between"),Yt(e,"bg-primary-10",!n[4]),Yt(e,"bg-secondary-10",n[4])},m(c,u){q(c,e,u),~t&&a[t].m(e,null),s=!0},p(c,[u]){let f=t;t=l(c),t===f?~t&&a[t].p(c,u):(r&&(Fe(),ee(a[f],1,1,()=>{a[f]=null}),Ue()),~t?(r=a[t],r?r.p(c,u):(r=a[t]=i[t](c),r.c()),K(r,1),r.m(e,null)):r=null),(!s||u&16)&&Yt(e,"bg-primary-10",!c[4]),(!s||u&16)&&Yt(e,"bg-secondary-10",c[4])},i(c){s||(K(r),s=!0)},o(c){ee(r),s=!1},d(c){c&&j(e),~t&&a[t].d()}}}function hv(n,e,t){let r,s;et(n,dt,E=>t(10,r=E)),et(n,wt,E=>t(5,s=E));let{game:i=null}=e,{currentUserName:a=""}=e,{user:l=""}=e,{coins:c=null}=e,{isNewGame:u=!1}=e,{onClick:f=null}=e,{navigate:m=null}=e;function g(){u&&f?f():i&&m&&(ft(dt,r=i,r),m("home"))}const y=E=>E!==a;return n.$$set=E=>{"game"in E&&t(0,i=E.game),"currentUserName"in E&&t(1,a=E.currentUserName),"user"in E&&t(2,l=E.user),"coins"in E&&t(3,c=E.coins),"isNewGame"in E&&t(4,u=E.isNewGame),"onClick"in E&&t(7,f=E.onClick),"navigate"in E&&t(8,m=E.navigate)},[i,a,l,c,u,s,g,f,m,y]}class fv extends Tt{constructor(e){super(),bt(this,e,hv,uv,_t,{game:0,currentUserName:1,user:2,coins:3,isNewGame:4,onClick:7,navigate:8})}}function Uc(n,e,t){const r=n.slice();return r[5]=e[t],r}function Bc(n){let e,t;return e=new fv({props:{game:n[5],currentUserName:n[2],navigate:n[4]}}),{c(){tt(e.$$.fragment)},m(r,s){Ge(e,r,s),t=!0},p(r,s){const i={};s&2&&(i.game=r[5]),s&4&&(i.currentUserName=r[2]),s&16&&(i.navigate=r[4]),e.$set(i)},i(r){t||(K(e.$$.fragment,r),t=!0)},o(r){ee(e.$$.fragment,r),t=!1},d(r){Ke(e,r)}}}function dv(n){let e,t,r,s,i,a=Re(n[1]),l=[];for(let u=0;u<a.length;u+=1)l[u]=Bc(Uc(n,a,u));const c=u=>ee(l[u],1,1,()=>{l[u]=null});return{c(){e=x("div"),t=x("h3"),r=se(n[0]),s=Z();for(let u=0;u<l.length;u+=1)l[u].c();T(t,"class",n[3]),T(e,"class","flex flex-col gap-0")},m(u,f){q(u,e,f),S(e,t),S(t,r),S(e,s);for(let m=0;m<l.length;m+=1)l[m]&&l[m].m(e,null);i=!0},p(u,[f]){if((!i||f&1)&&ve(r,u[0]),(!i||f&8)&&T(t,"class",u[3]),f&22){a=Re(u[1]);let m;for(m=0;m<a.length;m+=1){const g=Uc(u,a,m);l[m]?(l[m].p(g,f),K(l[m],1)):(l[m]=Bc(g),l[m].c(),K(l[m],1),l[m].m(e,null))}for(Fe(),m=a.length;m<l.length;m+=1)c(m);Ue()}},i(u){if(!i){for(let f=0;f<a.length;f+=1)K(l[f]);i=!0}},o(u){l=l.filter(Boolean);for(let f=0;f<l.length;f+=1)ee(l[f]);i=!1},d(u){u&&j(e),gt(l,u)}}}function mv(n,e,t){let{title:r}=e,{games:s}=e,{currentUserName:i}=e,{titleClass:a="text-sm font-semibold text-primary"}=e,{navigate:l=null}=e;return n.$$set=c=>{"title"in c&&t(0,r=c.title),"games"in c&&t(1,s=c.games),"currentUserName"in c&&t(2,i=c.currentUserName),"titleClass"in c&&t(3,a=c.titleClass),"navigate"in c&&t(4,l=c.navigate)},[r,s,i,a,l]}class $f extends Tt{constructor(e){super(),bt(this,e,mv,dv,_t,{title:0,games:1,currentUserName:2,titleClass:3,navigate:4})}}const pv=""+new URL("logo-BEMpbk-Y.svg",import.meta.url).href;function gv(n){let e,t,r,s;return{c(){e=x("img"),Ct(e.src,t=pv)||T(e,"src",t),T(e,"alt","drawIt"),T(e,"class","w-48 mx-auto mb-6 drop-shadow-md cursor-pointer")},m(i,a){q(i,e,a),r||(s=_e(e,"click",n[0]),r=!0)},p:J,i:J,o:J,d(i){i&&j(e),r=!1,s()}}}function _v(n,e,t){let{navigate:r}=e;function s(){r?r("home"):window.location.href="/"}return n.$$set=i=>{"navigate"in i&&t(1,r=i.navigate)},[s,r]}class ga extends Tt{constructor(e){super(),bt(this,e,_v,gv,_t,{navigate:1})}}function jc(n,e,t){const r=n.slice();return r[16]=e[t],r}function qc(n,e,t){const r=n.slice();return r[16]=e[t],r}function yv(n){let e,t,r,s,i,a,l,c,u,f;return{c(){var m;e=x("div"),t=x("span"),t.textContent="Who are you?",r=Z(),s=x("input"),i=Z(),a=x("button"),l=se("get drawin'"),T(t,"class","text-2xl font-bold text-primary"),T(s,"type","text"),T(s,"placeholder","Your name"),T(s,"class","input input-bordered w-full bg-white text-black border-primary rounded-xl text-lg px-4 py-2 shadow"),T(s,"autocapitalize","off"),T(s,"autocorrect","off"),T(s,"maxlength","14"),T(a,"class","btn btn-primary text-white w-full rounded-xl text-lg py-2 shadow"),a.disabled=c=!((m=n[4])!=null&&m.trim()),T(e,"class","flex flex-col items-center gap-4 w-full max-w-xs mx-auto mt-8")},m(m,g){q(m,e,g),S(e,t),S(e,r),S(e,s),Gn(s,n[4]),S(e,i),S(e,a),S(a,l),u||(f=[_e(s,"input",n[12]),_e(a,"click",n[13])],u=!0)},p(m,g){var y;g&16&&s.value!==m[4]&&Gn(s,m[4]),g&16&&c!==(c=!((y=m[4])!=null&&y.trim()))&&(a.disabled=c)},i:J,o:J,d(m){m&&j(e),u=!1,At(f)}}}function wv(n){let e,t,r,s;const i=[Ev,Av],a=[];function l(c,u){return c[6].length!==0?0:1}return e=l(n),t=a[e]=i[e](n),{c(){t.c(),r=Et()},m(c,u){a[e].m(c,u),q(c,r,u),s=!0},p(c,u){let f=e;e=l(c),e===f?a[e].p(c,u):(Fe(),ee(a[f],1,1,()=>{a[f]=null}),Ue(),t=a[e],t?t.p(c,u):(t=a[e]=i[e](c),t.c()),K(t,1),t.m(r.parentNode,r))},i(c){s||(K(t),s=!0)},o(c){ee(t),s=!1},d(c){c&&j(r),a[e].d(c)}}}function vv(n){let e;return{c(){e=x("div"),e.innerHTML='<div class="text-primary text-lg font-semibold">Loading...</div>',T(e,"class","flex flex-col items-center gap-4 w-full max-w-xs mx-auto")},m(t,r){q(t,e,r)},p:J,i:J,o:J,d(t){t&&j(e)}}}function Av(n){let e;return{c(){e=x("div"),e.textContent="No games yet. Start a new one!",T(e,"class","text-center text-gray-500 mt-8")},m(t,r){q(t,e,r)},p:J,i:J,o:J,d(t){t&&j(e)}}}function Ev(n){let e,t,r=n[3]&&zc(n);return{c(){e=x("div"),r&&r.c(),T(e,"class","flex flex-col gap-6 w-full max-w-xs mx-auto")},m(s,i){q(s,e,i),r&&r.m(e,null),t=!0},p(s,i){s[3]?r?(r.p(s,i),i&8&&K(r,1)):(r=zc(s),r.c(),K(r,1),r.m(e,null)):r&&(Fe(),ee(r,1,1,()=>{r=null}),Ue())},i(s){t||(K(r),t=!0)},o(s){ee(r),t=!1},d(s){s&&j(e),r&&r.d()}}}function zc(n){let e=n[6].filter(n[9]).length>0,t,r=n[6].filter(n[8]).length>0,s,i,a=e&&Hc(n),l=r&&Gc(n);return{c(){a&&a.c(),t=Z(),l&&l.c(),s=Et()},m(c,u){a&&a.m(c,u),q(c,t,u),l&&l.m(c,u),q(c,s,u),i=!0},p(c,u){u&72&&(e=c[6].filter(c[9]).length>0),e?a?(a.p(c,u),u&72&&K(a,1)):(a=Hc(c),a.c(),K(a,1),a.m(t.parentNode,t)):a&&(Fe(),ee(a,1,1,()=>{a=null}),Ue()),u&72&&(r=c[6].filter(c[8]).length>0),r?l?(l.p(c,u),u&72&&K(l,1)):(l=Gc(c),l.c(),K(l,1),l.m(s.parentNode,s)):l&&(Fe(),ee(l,1,1,()=>{l=null}),Ue())},i(c){i||(K(a),K(l),i=!0)},o(c){ee(a),ee(l),i=!1},d(c){c&&(j(t),j(s)),a&&a.d(c),l&&l.d(c)}}}function Hc(n){let e,t,r,s,i=Re(n[6].filter(n[10])),a=[];for(let c=0;c<i.length;c+=1)a[c]=Wc(qc(n,i,c));const l=c=>ee(a[c],1,1,()=>{a[c]=null});return{c(){e=x("div"),t=x("div"),t.textContent="Your Turn!",r=Z();for(let c=0;c<a.length;c+=1)a[c].c();T(t,"class","text-center text-2xl font-bold mb-2 animate-gradient-text svelte-1by7pf7"),T(e,"class","rounded-2xl bg-white/90 shadow-md p-4")},m(c,u){q(c,e,u),S(e,t),S(e,r);for(let f=0;f<a.length;f+=1)a[f]&&a[f].m(e,null);s=!0},p(c,u){if(u&73){i=Re(c[6].filter(c[10]));let f;for(f=0;f<i.length;f+=1){const m=qc(c,i,f);a[f]?(a[f].p(m,u),K(a[f],1)):(a[f]=Wc(m),a[f].c(),K(a[f],1),a[f].m(e,null))}for(Fe(),f=i.length;f<a.length;f+=1)l(f);Ue()}},i(c){if(!s){for(let u=0;u<i.length;u+=1)K(a[u]);s=!0}},o(c){a=a.filter(Boolean);for(let u=0;u<a.length;u+=1)ee(a[u]);s=!1},d(c){c&&j(e),gt(a,c)}}}function Wc(n){let e,t;return e=new $f({props:{title:"",games:[n[16]],currentUserName:n[3],navigate:n[0]}}),{c(){tt(e.$$.fragment)},m(r,s){Ge(e,r,s),t=!0},p(r,s){const i={};s&72&&(i.games=[r[16]]),s&8&&(i.currentUserName=r[3]),s&1&&(i.navigate=r[0]),e.$set(i)},i(r){t||(K(e.$$.fragment,r),t=!0)},o(r){ee(e.$$.fragment,r),t=!1},d(r){Ke(e,r)}}}function Gc(n){let e,t,r,s,i=Re(n[6].filter(n[11])),a=[];for(let c=0;c<i.length;c+=1)a[c]=Kc(jc(n,i,c));const l=c=>ee(a[c],1,1,()=>{a[c]=null});return{c(){e=x("div"),t=x("div"),t.textContent="Waiting",r=Z();for(let c=0;c<a.length;c+=1)a[c].c();T(t,"class","text-center text-secondary/60 font-semibold text-xs mb-2"),T(e,"class","rounded-2xl bg-white/60 shadow-sm p-4 opacity-60")},m(c,u){q(c,e,u),S(e,t),S(e,r);for(let f=0;f<a.length;f+=1)a[f]&&a[f].m(e,null);s=!0},p(c,u){if(u&73){i=Re(c[6].filter(c[11]));let f;for(f=0;f<i.length;f+=1){const m=jc(c,i,f);a[f]?(a[f].p(m,u),K(a[f],1)):(a[f]=Kc(m),a[f].c(),K(a[f],1),a[f].m(e,null))}for(Fe(),f=i.length;f<a.length;f+=1)l(f);Ue()}},i(c){if(!s){for(let u=0;u<i.length;u+=1)K(a[u]);s=!0}},o(c){a=a.filter(Boolean);for(let u=0;u<a.length;u+=1)ee(a[u]);s=!1},d(c){c&&j(e),gt(a,c)}}}function Kc(n){let e,t;return e=new $f({props:{title:"",games:[n[16]],currentUserName:n[3],navigate:n[0]}}),{c(){tt(e.$$.fragment)},m(r,s){Ge(e,r,s),t=!0},p(r,s){const i={};s&72&&(i.games=[r[16]]),s&8&&(i.currentUserName=r[3]),s&1&&(i.navigate=r[0]),e.$set(i)},i(r){t||(K(e.$$.fragment,r),t=!0)},o(r){ee(e.$$.fragment,r),t=!1},d(r){Ke(e,r)}}}function bv(n){let e,t,r,s,i,a;t=new ga({props:{navigate:n[0]}});const l=[vv,wv,yv],c=[];function u(f,m){return f[2]||f[1]&&!f[5]?0:f[1]?1:2}return s=u(n),i=c[s]=l[s](n),{c(){e=x("div"),tt(t.$$.fragment),r=Z(),i.c(),T(e,"class","min-h-[80vh] flex flex-col items-center justify-center px-2 py-6")},m(f,m){q(f,e,m),Ge(t,e,null),S(e,r),c[s].m(e,null),a=!0},p(f,[m]){const g={};m&1&&(g.navigate=f[0]),t.$set(g);let y=s;s=u(f),s===y?c[s].p(f,m):(Fe(),ee(c[y],1,1,()=>{c[y]=null}),Ue(),i=c[s],i?i.p(f,m):(i=c[s]=l[s](f),i.c()),K(i,1),i.m(e,null))},i(f){a||(K(t.$$.fragment,f),K(i),a=!0)},o(f){ee(t.$$.fragment,f),ee(i),a=!1},d(f){f&&j(e),Ke(t),c[s].d()}}}function Tv(n,e,t){let r,s,i;et(n,Is,D=>t(5,r=D)),et(n,rt,D=>t(1,s=D)),et(n,Hr,D=>t(6,i=D));let a=!0,l=null,c="",{navigate:u}=e;async function f(D){D.trim()&&/^[a-zA-Z0-9]+$/.test(D)?(t(2,a=!0),await Gw(D.trim()),t(2,a=!1),window.location.reload()):D.trim()}zr(async()=>{if(t(2,a=!0),ft(Is,r=!1,r),s&&s.name)if(!await Kw(s.name))ft(rt,s=null,s);else{const F=(await Kf(s.name)).flatMap(M=>M.users.filter(G=>G!==s.name));await Hw(F),ft(Is,r=!0,r)}t(2,a=!1)});const m=D=>bs(D,l)==="waiting",g=D=>["draw","guess"].includes(bs(D,l)),y=D=>["draw","guess"].includes(bs(D,l)),E=D=>bs(D,l)==="waiting";function R(){c=this.value,t(4,c)}const C=()=>f(c);return n.$$set=D=>{"navigate"in D&&t(0,u=D.navigate)},n.$$.update=()=>{n.$$.dirty&2&&t(3,l=s?s.name:null)},[u,s,a,l,c,r,i,f,m,g,y,E,R,C]}class Iv extends Tt{constructor(e){super(),bt(this,e,Tv,bv,_t,{navigate:0})}}function $c(n,e,t){const r=n.slice();return r[28]=e[t],r}function Qc(n,e,t){const r=n.slice();return r[31]=e[t],r}function Xc(n){let e,t,r,s;function i(){return n[13](n[31])}return{c(){e=x("button"),T(e,"class",t="w-8 h-8 rounded-full border-2 "+(n[1]===n[31]?"border-primary":"")),Xi(e,"background-color",n[31])},m(a,l){q(a,e,l),r||(s=_e(e,"click",i),r=!0)},p(a,l){n=a,l[0]&2&&t!==(t="w-8 h-8 rounded-full border-2 "+(n[1]===n[31]?"border-primary":""))&&T(e,"class",t)},d(a){a&&j(e),r=!1,s()}}}function Jc(n){let e,t,r,s,i;function a(){return n[14](n[28])}return{c(){e=x("button"),t=x("div"),T(t,"class","w-4 h-4 rounded-full bg-black mx-auto"),Xi(t,"width",n[28]+"px"),Xi(t,"height",n[28]+"px"),T(e,"class",r="w-8 h-8 rounded-full border-2 bg-white "+(n[0]===n[28]?"border-primary":"border-transparent"))},m(l,c){q(l,e,c),S(e,t),s||(i=_e(e,"click",a),s=!0)},p(l,c){n=l,c[0]&1&&r!==(r="w-8 h-8 rounded-full border-2 bg-white "+(n[0]===n[28]?"border-primary":"border-transparent"))&&T(e,"class",r)},d(l){l&&j(e),s=!1,i()}}}function Rv(n){let e,t,r,s,i,a,l,c,u,f,m=Re(n[6]),g=[];for(let R=0;R<m.length;R+=1)g[R]=Xc(Qc(n,m,R));let y=Re(n[7]),E=[];for(let R=0;R<y.length;R+=1)E[R]=Jc($c(n,y,R));return{c(){e=x("div"),t=x("div");for(let R=0;R<g.length;R+=1)g[R].c();r=Z(),s=x("div");for(let R=0;R<E.length;R+=1)E[R].c();i=Z(),a=x("button"),a.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"></path></svg>',l=Z(),c=x("canvas"),T(t,"class","flex gap-2 justify-start items-center flex-wrap"),T(a,"class","w-8 h-8 rounded-full border-2 bg-white border-transparent"),T(s,"class","flex gap-2 justify-start items-center"),T(c,"class","border-2 border-gray-300 rounded-lg touch-none w-full aspect-square"),T(e,"class","flex flex-col gap-2 w-full")},m(R,C){q(R,e,C),S(e,t);for(let D=0;D<g.length;D+=1)g[D]&&g[D].m(t,null);S(e,r),S(e,s);for(let D=0;D<E.length;D+=1)E[D]&&E[D].m(s,null);S(s,i),S(s,a),S(e,l),S(e,c),n[15](c),n[16](e),u||(f=[_e(a,"click",n[2]),_e(c,"mousedown",n[8]),_e(c,"mousemove",n[9]),_e(c,"mouseup",n[10]),_e(c,"mouseleave",n[10]),_e(c,"touchstart",n[8]),_e(c,"touchmove",n[9]),_e(c,"touchend",n[10],{passive:!0})],u=!0)},p(R,C){if(C[0]&82){m=Re(R[6]);let D;for(D=0;D<m.length;D+=1){const L=Qc(R,m,D);g[D]?g[D].p(L,C):(g[D]=Xc(L),g[D].c(),g[D].m(t,null))}for(;D<g.length;D+=1)g[D].d(1);g.length=m.length}if(C[0]&145){y=Re(R[7]);let D;for(D=0;D<y.length;D+=1){const L=$c(R,y,D);E[D]?E[D].p(L,C):(E[D]=Jc(L),E[D].c(),E[D].m(s,i))}for(;D<E.length;D+=1)E[D].d(1);E.length=y.length}},i:J,o:J,d(R){R&&j(e),gt(g,R),gt(E,R),n[15](null),n[16](null),u=!1,At(f)}}}function Cv(n,e,t){let r=400,s=400,{lineWidth:i=5}=e,{strokeColor:a="#000000"}=e,l,c,u=!1,f,m=[],g=null;const y=["#E74C3C","#E67E22","#F1C40F","#2ECC71","#1ABC9C","#3498DB","#4834D4","#9B59B6","#D291BC","#F5E6DE","#D2A679","#8D5524","#000000","#7F8C8D","#FFFFFF"],E=[2,5,15,25];function R(){if(!l)return;const H=window.devicePixelRatio||1;t(3,l.width=r*H,l),t(3,l.height=s*H,l),t(3,l.style.width=r+"px",l),t(3,l.style.height=s+"px",l),t(4,c=l.getContext("2d")),c.setTransform(1,0,0,1,0,0),c.scale(H,H),t(4,c.lineCap="round",c),t(4,c.lineJoin="round",c),t(4,c.strokeStyle=a,c),t(4,c.lineWidth=i,c),t(4,c.fillStyle="#FFFFFF",c),c.fillRect(0,0,r,s)}function C(H){u=!0;const Ee=X(H);g={color:a,width:i,points:[Ee]}}function D(H){if(!u||!g)return;const Ee=X(H);g.points.push(Ee),F()}function L(){u&&g&&(m.push(g),g=null),u=!1}function F(){c.clearRect(0,0,r,s),t(4,c.fillStyle="#FFFFFF",c),c.fillRect(0,0,r,s);for(const H of m)M(H);g&&M(g)}function M(H){if(!(H.points.length<2)){c.save(),t(4,c.strokeStyle=H.color,c),t(4,c.lineWidth=H.width,c),c.beginPath(),c.moveTo(H.points[0].x,H.points[0].y);for(let Ee=1;Ee<H.points.length;Ee++)c.lineTo(H.points[Ee].x,H.points[Ee].y);c.stroke(),c.restore()}}function G(){m.length>0&&(m.pop(),F())}function X(H){const Ee=l.getBoundingClientRect();if("touches"in H&&H.touches.length>0){const St=H.touches[0];return{x:St.clientX-Ee.left,y:St.clientY-Ee.top}}return{x:H.clientX-Ee.left,y:H.clientY-Ee.top}}function A(){m=[],g=null,t(4,c.fillStyle="#FFFFFF",c),c.fillRect(0,0,r,s)}function _(){return l.toDataURL("image/png")}function v(){!f||!l||(r=f.clientWidth,s=r,R(),F())}zr(()=>{R(),F();const H=new ResizeObserver(()=>{v()});return f&&H.observe(f),()=>{H.disconnect()}});const b=H=>{t(1,a=H),t(4,c.strokeStyle=H,c)},I=H=>{t(0,i=H),t(4,c.lineWidth=H,c)};function P(H){Or[H?"unshift":"push"](()=>{l=H,t(3,l)})}function w(H){Or[H?"unshift":"push"](()=>{f=H,t(5,f)})}return n.$$set=H=>{"lineWidth"in H&&t(0,i=H.lineWidth),"strokeColor"in H&&t(1,a=H.strokeColor)},[i,a,G,l,c,f,y,E,C,D,L,A,_,b,I,P,w]}class kv extends Tt{constructor(e){super(),bt(this,e,Cv,Rv,_t,{lineWidth:0,strokeColor:1,undo:2,clearCanvas:11,getImageData:12},null,[-1,-1])}get undo(){return this.$$.ctx[2]}get clearCanvas(){return this.$$.ctx[11]}get getImageData(){return this.$$.ctx[12]}}const Sv="data:image/gif;base64,R0lGODdhUABQAHcAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAUABQAIIAAAAGBgjxmRH/0Cz/+FUAAAAAAAAAAAAD/wi63B0wykmrlS7rza//HieOGWieAamSaHut8ObOU2w/dH7vQK7zNh8NGBS6iDHjEYmzEJ7QqHRKrUZDN491y91ii86uePxNXsZobhmmTbun61X7TSfEVfO6+8466998I3l/ZC9ZfoRogT2IVAOPkJGSk5SVkQKYmZo5W5aen56aogKcVqCnqAOjmzSdqa+Vq5mlVbC2krKYtI63vbmkraa9t7+7U8PEucZSyLbFwbXNr88zrtKo1C7W16DZLdvcocrQvOGf3ijg5pToJ+rruOPVwvCx8tr09ZPtJu/6qve+5fsHiR8If/oMfkBYT+EgZgTjyVoWJaLEVRShWLwUMKzdwIgOGx3b+ChkmGgkTVZgCE8lBZbrXE6AaU6mBJrhbEbAyU0nBJ7XfAYAKk0o0WZGPxJMinIj03JOO7pT+k9hhwu/smrFaAhMha1gty66aiGsWakRdng4y1bUWBlY28p9q2Gt3LZ0S8S9ezavA7t8zfpt8jWw4K5myhoOOxiPEhRM5Dw+EdnxZBCV+1z+kFnQZs6dyX62EFr0aAql4Z6ukLruatat/75GfSMBACH5BAkKAAAALAAAAABQAFAAggAAAAYGCPGZEf/QLP/4VQAAAAAAAAAAAAP/CLrc/irISWuFOOudrfdcKI7RZ0pkqjrnub5qa8K0KH91rt2g7rO8y29YCk6IRCMFGTMRntCoVOpiPk7TbLZqbWC14Ce3u/iGtWMywHyepsnsdvTdjcvFM3XZeafm9Wt8fVB0VnZ3hTCHUAONjo+QkAKTlJWJO4JZkZublZ4Clx2ZU5yljp+WfySLT6amqJShGKwErqWwk7IQtLacuKCqI7y9kb+6V6NSxMW4x0AfYcuSzcE2yVHSj8bVIcPZA9s4TdBg343hPSne2egWK+vS7ULq14zm8kvjHtH31OL05LSYA+cv3ap6rfrBcuYFYS2FqBgygLcM3xF9Fvh9s4gC0mMFjewKuvNIAWQ8kfMOBtQE8ZPEPStJtfT0ssi+cjNT/VN5U2DOWNw4UCTGMcA7hwOLHo2p7GeuoBuG9lJKcoLJiijzAezJcmPWi1sz4vS6ECompticAtspDKnamoHQ2iMb0awouQnpurQ7y61emnx3+Q1Zlm2OE7+oAkKcuLBBNYwb7zVcx4TkupQNWb4MODOTyJyfekYCOjTcpR5C63wMZ7Pqtawrf3gtOjaghkqM3kZtZDfvIL6ryggeFjjxtrmPI1ei3Fry5kJz64Z+lvmQBAAh+QQFCgAAACwAAAAAUABQAIAAAAAGBggC04SPqWvhD2NktNpbpda4+99sogOWpjKO52qmIgt77hbX1szZOopP+x/qPYBAIYT4Mw6ROiWJaXMGoFEntSa9xrJaFrd7+oJL4vGnbO6g05c1O2N9y+JyjLvOU+Lt9D3l7hdkFAinR8gAGJjot7jXiPdYFyk3+VbJdpmWabY51gn22RWqNXpVSnUKlcq0itRK9FrUd4gQmzRLKyiUmzfIW4uba7sz3BRMW1xl+Kvbw3yQjHV8GL01TVgNk+11rdjN+O0YDjkuWU55bpmOua7ZzvleUQAAIfkEBQoAAAAsAAAAAFAAUACCAAAABgYI8ZkR/9As//hVAAAAAAAAAAAAA/8Iutz+MMpJq7046827/2AojmRpnmiqrmzrvnAgzzRh33ie03wQ9zOdUAic/YrD5K0oOwKVSqbvJYUmpc6edYilMrdEZpYH1nVd1TLu3EqrbWyRVECv2wf4vH6/j4o3c3aCfISEfkUcgYJ1hY15h0CJTIt3jo2QPZJFlIyWhZg8mkCcdJ6fV38aipSmhqiIgJOkrXygNKI9pAK0fa+RsZuzvI++mcCjwsMDtkbHucnDzE3OPLrKeNJTqrKc18vFodQ01tfZuNXQvObiM+TK69vB3eXgt+wy7tH1zfHI8+/7pvV79k8fl1QZVi3yBi8hN1b0DsIaiK6guoDaHMqDCFCl4i+K49LRaohB4aCIYSZq9MfRYMqPKwm2vOjRGMh2IluRvGCyUseXNmNWnDkS47mQFovWDHcTX05TOy307PTTDMKSDxeitKoS60atVXdc5Zn1ZNg1Y6WW9emSK0yvLMG2Fds1xFRddOKsuItXrwq+uvymAExKMArCnAyfQExJsQnGixyXgCxIMgnKdiyPwFxHM4zPoEOLHk26tOnTqFOrXs26NekEACH5BAkKAAAALAAAAABQAFAAggAAAAYGCPGZEf/QLP/4VQAAAAAAAAAAAAP/CLrcHTDKSauVLuvNr/8eJ44ZaJ4BqZJoe63w5s5TbD90fu9ArvM2Hw0YFLqIMeMRibMQntCodEqtRkM3j3XL3WKLzq54/E1exmhuGaZNu6frVftNJ8RV87r7zjrr33wjeX9kL1l+hGiBPRcCjo+QA5KTlJWWl5iUXjSQnQKZoKGgmzOekaKoqaQupo+pr6GrLa2OsLaXsii0n7e9krknu76+wCbCw7fFIMfIsMofzM2qVjnR0qLPHtbXo9SctNzTVdXg4djepeXm3ePfreux6Kzq8Ljys/T1ldmN+fqT/Cxs+zcgYIWB/wxSQKhP4QSG9RxKgAhPYgSK6yxCwGhOqmMAjuE8guQm0h/Bku8I7runy2RClsFcNoRpTGZEmstsVsQJTWdGntp8dgTaL6VKgEQFCg2Z9OBSkk0XPr32rEPRXVizQlpkVanWr1i5yrgKtmwnsRqCml37CG0JsmzLunWgNq7ZuU2c2r1rCIzevWDxMqgLWKvgBYQLh+3LRIGSFo3xPD4Ruc9kEJUFXcacuetmxp3pfj4MZDRpHqZBhx6cusLqtK0p7EgAACH5BAkKAAAALAAAAABQAFAAggAAAAYGCPGZEf/QLP/4VQAAAAAAAAAAAAP/CLrc/irISWuFOOudrfdcKI7RZ0pkqjrnub5qa8K0KH91rt2g7rO8y29YCk6IRCMFGTMRntCoVOpiPk7TbLZqbWC14Ce3u/iGtWMywHyepsnsdvTdjcvFM3XZeafm9Wt8fVB0VnZ3hTAnAoyNjgOQkZKTk2GJOyaOmgKUnZ2WfySLm42eppGgOE0fpKWnpqk9KaOtr7Bglx2ZrZy2n7ihI7Skvr9owTa7tcWVwKqzysTMkrEWK8Ob09TOsqLR2dqQ1ULQrLzh4tzWqx68veHjS+wW7ugD8UfzFfXo+Cj6FPjBU0fOm7llA489M9juXD+C8so1RKjNX4Br3zTZs4jx2KC0hFuQhcCm8aHCbsIyPjIZcmFKj+BAuhHJgeRKmX5cJoNZEuccmhtsuvJJCCgmnjcrQswnkZ5Donh0jlQ5VOnJdU33PbXaEuXOiR+5zpRakyqjjUv/ZQ24dRpHgBMEis3pdSrSqm7TXoQrQW7eqwVfgo059yfZoGbfFS56+Ojgnouj1qUh1B2jXEMqW8b8Q7M7zj488wKtQ3Qr0jlMk0JdQ/Um1pQTfzaaRPZo2pltn8YNSAlTQHxbAH/hW+1whkaOB4etvPhe5YKTQ48eZDp1Hta/Sv+RAAAh+QQFCgAAACwAAAAAUABQAIAAAAAGBggC04SPqWvhD2NktNpbpda4+99sogOWpjKO52qmIgt77hbX1szZOopP+x/qPYBAIYT4Mw6ROiWJaXMGoFEntSa9xrJaFrd7+oJL4vGnbO6g05c1O2N9y+JyjLvOU+Lt9D3l7hdkFAinR8gAGJjot7jXiPdYFyk3+VbJdpmWabY51gn22RWqNXpVSnUKlcq0itRK9FrUd4gQmzRLKyiUmzfIW4uba7sz3BRMW1xl+Kvbw3yQjHV8GL01TVgNk+11rdjN+O0YDjkuWU55bpmOua7ZzvleUQAAIfkEBQoAAAAsAAAAAFAAUACCAAAABgYI8ZkR/9As//hVAAAAAAAAAAAAA/8Iutz+MMpJq7046827/2AojmRpnmiqrmzrvnAgzzRh33ie03wQ9zOdUAic/YrD5K0oOwKVSqbvJYUmpc6edYilMrdEZpYH1nVd1TLu3EqrbWyRWzio2+94vGDP78cvczp5g4N9hgJ/FoE5hI12h35iG4s4jo6QfIkVlDeWjZh7mhScNp6EoIiSGqQEpoWgohOsrnmosRKztHe2qhm5unW8RRy/wMJAxF9JwI+wvRjFusc9yUjLzAPTPNVP18zaNNxa3sbOw5PKQ9jZ5sjo1urY4Ebv3fHf7dT14/flmLcRotGa12QfGXLS8m0zWAPhQIXhGAZx6IrglFXp6MiDSA+oIzyN+P49A5RR0EaR5zzaA+kPEkAIAityLKiSH8uEKN3VPNgPp8uRikoyOvkzpS+hlYgeevkgpimL4njefJhT386GPakW1Xn0o8mQW612Xfm15VKgm5B2UmqIqQOnnqCWkIJKLhomdWdebIM3b9iFd4v4/RsxMJDBZ42yoIs4kuIVjBuHQosismS3ISw3xgxCM2LOMEKLHk26tOnTqFOrXs26tevXoxMAADs=";function Yc(n,e,t){const r=n.slice();return r[29]=e[t],r}function Zc(n,e,t){const r=n.slice();return r[32]=e[t],r}function eu(n,e,t){const r=n.slice();return r[12]=e[t],r}function Pv(n){let e,t,r,s;const i=[Nv,Dv],a=[];function l(c,u){return c[1]?1:0}return t=l(n),r=a[t]=i[t](n),{c(){e=x("div"),r.c(),T(e,"class","flex flex-col items-center gap-6")},m(c,u){q(c,e,u),a[t].m(e,null),s=!0},p(c,u){let f=t;t=l(c),t===f?a[t].p(c,u):(Fe(),ee(a[f],1,1,()=>{a[f]=null}),Ue(),r=a[t],r?r.p(c,u):(r=a[t]=i[t](c),r.c()),K(r,1),r.m(e,null))},i(c){s||(K(r),s=!0)},o(c){ee(r),s=!1},d(c){c&&j(e),a[t].d()}}}function Vv(n){let e,t,r,s,i,a,l,c,u,f;function m(M,G){return M[0].data&&M[0].data.length>10?Fv:Lv}let g=m(n),y=g(n);function E(M,G){return M[9]?Bv:Uv}let R=E(n),C=R(n),D=Re(n[0].guesses),L=[];for(let M=0;M<D.length;M+=1)L[M]=lu(eu(n,D,M));let F=!n[0].guessed&&n[2].name!==n[0].artist&&cu(n);return{c(){e=x("div"),t=x("div"),y.c(),r=Z(),s=x("div"),i=x("h2"),i.textContent="What's this?",a=Z(),l=x("p"),C.c(),c=Z(),u=x("div");for(let M=0;M<L.length;M+=1)L[M].c();f=Z(),F&&F.c(),T(t,"class","bg-white/90 p-2 rounded-lg w-full max-w-[min(90vw,300px)] aspect-square flex items-center justify-center mx-auto border-2 border-primary"),T(i,"class","text-xl font-bold mb-2 text-primary"),T(l,"class","mb-4"),T(u,"class","flex flex-wrap gap-2 w-full overflow-y-auto"),T(s,"class","w-full max-w-[min(90vw,400px)]"),T(e,"class","flex flex-col items-center gap-6")},m(M,G){q(M,e,G),S(e,t),y.m(t,null),S(e,r),S(e,s),S(s,i),S(s,a),S(s,l),C.m(l,null),S(s,c),S(s,u);for(let X=0;X<L.length;X+=1)L[X]&&L[X].m(u,null);S(e,f),F&&F.m(e,null)},p(M,G){if(g===(g=m(M))&&y?y.p(M,G):(y.d(1),y=g(M),y&&(y.c(),y.m(t,null))),R===(R=E(M))&&C?C.p(M,G):(C.d(1),C=R(M),C&&(C.c(),C.m(l,null))),G[0]&1){D=Re(M[0].guesses);let X;for(X=0;X<D.length;X+=1){const A=eu(M,D,X);L[X]?L[X].p(A,G):(L[X]=lu(A),L[X].c(),L[X].m(u,null))}for(;X<L.length;X+=1)L[X].d(1);L.length=D.length}!M[0].guessed&&M[2].name!==M[0].artist?F?F.p(M,G):(F=cu(M),F.c(),F.m(e,null)):F&&(F.d(1),F=null)},i:J,o:J,d(M){M&&j(e),y.d(),C.d(),gt(L,M),F&&F.d()}}}function Dv(n){let e,t,r,s,i=n[1].secretWord.toUpperCase()+"",a,l,c,u,f,m,g,y,E,R,C=n[4]?"Posting, great work...":"Submit Drawing",D,L,F,M,G,X={};return u=new kv({props:X}),n[22](u),{c(){e=x("div"),t=x("h2"),r=se("Ok, let's draw "),s=x("span"),a=se(i),l=Z(),c=x("div"),tt(u.$$.fragment),f=Z(),m=x("div"),g=x("button"),g.textContent="Clear",y=Z(),E=x("button"),R=x("span"),D=se(C),T(s,"class","font-bold text-black"),T(t,"class","text-xl mb-4 text-black/60"),T(g,"class","btn btn-outline flex-1"),T(E,"class",L=n[4]?"btn-disabled flex-1":"btn btn-secondary flex-1 flex flex-row items-center justify-center text-center border border-secondary"),T(m,"class","flex flex-row gap-2 mt-4 w-full"),T(c,"class","w-full aspect-square max-w-[min(90vw,400px)] mx-auto"),T(e,"class","w-full h-screen")},m(A,_){q(A,e,_),S(e,t),S(t,r),S(t,s),S(s,a),S(e,l),S(e,c),Ge(u,c,null),S(c,f),S(c,m),S(m,g),S(m,y),S(m,E),S(E,R),S(R,D),F=!0,M||(G=[_e(g,"click",n[23]),_e(E,"click",n[24])],M=!0)},p(A,_){(!F||_[0]&2)&&i!==(i=A[1].secretWord.toUpperCase()+"")&&ve(a,i);const v={};u.$set(v),(!F||_[0]&16)&&C!==(C=A[4]?"Posting, great work...":"Submit Drawing")&&ve(D,C),(!F||_[0]&16&&L!==(L=A[4]?"btn-disabled flex-1":"btn btn-secondary flex-1 flex flex-row items-center justify-center text-center border border-secondary"))&&T(E,"class",L)},i(A){F||(K(u.$$.fragment,A),F=!0)},o(A){ee(u.$$.fragment,A),F=!1},d(A){A&&j(e),n[22](null),Ke(u),M=!1,At(G)}}}function Nv(n){let e,t,r,s,i,a,l,c=n[3].users.filter(n[19])[0]+"",u,f,m,g,y,E={ctx:n,current:null,token:null,hasCatch:!1,pending:xv,then:Ov,catch:Mv,value:28};return hl(y=n[7],E),{c(){e=x("div"),t=x("h2"),t.textContent="Pick a word to draw",r=Z(),s=x("p"),i=x("span"),a=se("You get coins as the artist, and "),l=x("span"),u=se(c),f=se(" gets coins for guessing correctly!"),m=Z(),g=x("div"),E.block.c(),T(t,"class","text-xl font-bold mb-2 text-black"),T(l,"class","font-bold"),T(s,"class","mb-6 text-black/60 italic tooltip flex flex-row gap-2 text-xs"),T(g,"class","flex flex-col gap-4 w-full"),T(e,"class","w-full flex flex-col items-center")},m(R,C){q(R,e,C),S(e,t),S(e,r),S(e,s),S(s,i),S(i,a),S(i,l),S(l,u),S(i,f),S(e,m),S(e,g),E.block.m(g,E.anchor=null),E.mount=()=>g,E.anchor=null},p(R,C){n=R,C[0]&12&&c!==(c=n[3].users.filter(n[19])[0]+"")&&ve(u,c),E.ctx=n,C[0]&128&&y!==(y=n[7])&&hl(y,E)||Sd(E,n,C)},i:J,o:J,d(R){R&&j(e),E.block.d(),E.token=null,E=null}}}function Mv(n){return{c:J,m:J,p:J,d:J}}function Ov(n){let e,t,r,s=n[8]?"Refreshing...":"Refresh Words",i,a,l,c,u,f=Re(n[28]),m=[];for(let y=0;y<f.length;y+=1)m[y]=nu(Yc(n,f,y));let g=!n[8]&&ru();return{c(){for(let y=0;y<m.length;y+=1)m[y].c();e=Z(),t=x("button"),r=x("span"),i=se(s),a=Z(),g&&g.c(),T(t,"class",l="btn btn-outline w-fit flex flex-row items-center justify-center gap-2 "+(!n[2]||n[2].coins<5||n[8]?"opacity-20 cursor-not-allowed":""))},m(y,E){for(let R=0;R<m.length;R+=1)m[R]&&m[R].m(y,E);q(y,e,E),q(y,t,E),S(t,r),S(r,i),S(t,a),g&&g.m(t,null),c||(u=_e(t,"click",n[21]),c=!0)},p(y,E){if(E[0]&142){f=Re(y[28]);let R;for(R=0;R<f.length;R+=1){const C=Yc(y,f,R);m[R]?m[R].p(C,E):(m[R]=nu(C),m[R].c(),m[R].m(e.parentNode,e))}for(;R<m.length;R+=1)m[R].d(1);m.length=f.length}E[0]&256&&s!==(s=y[8]?"Refreshing...":"Refresh Words")&&ve(i,s),y[8]?g&&(g.d(1),g=null):g||(g=ru(),g.c(),g.m(t,null)),E[0]&260&&l!==(l="btn btn-outline w-fit flex flex-row items-center justify-center gap-2 "+(!y[2]||y[2].coins<5||y[8]?"opacity-20 cursor-not-allowed":""))&&T(t,"class",l)},d(y){y&&(j(e),j(t)),gt(m,y),g&&g.d(),c=!1,u()}}}function tu(n){let e,t;return{c(){e=x("img"),Ct(e.src,t=or)||T(e,"src",t),T(e,"class","w-4 h-4")},m(r,s){q(r,e,s)},p:J,d(r){r&&j(e)}}}function nu(n){let e,t,r,s=n[29].secretWord.toUpperCase()+"",i,a,l,c=n[29].createdBy?"by "+n[29].createdBy:"",u,f,m,g,y,E,R=Re(Array(n[29].coins)),C=[];for(let L=0;L<R.length;L+=1)C[L]=tu(Zc(n,R,L));function D(){return n[20](n[29])}return{c(){e=x("button"),t=x("div"),r=x("span"),i=se(s),a=Z(),l=x("span"),u=se(c),f=Z(),m=x("span");for(let L=0;L<C.length;L+=1)C[L].c();T(r,"class","text-sm font-semibold"),T(l,"class","text-[0.8rem] text-white opacity-80"),T(t,"class","flex flex-col items-start gap-1"),T(m,"class","flex items-center gap-1"),T(e,"class",g="btn flex flex-row items-center justify-between w-full border "+(n[29].createdBy!=null?"btn-secondary border-black text-white h-20":"btn-primary border-primary text-white"))},m(L,F){q(L,e,F),S(e,t),S(t,r),S(r,i),S(t,a),S(t,l),S(l,u),S(e,f),S(e,m);for(let M=0;M<C.length;M+=1)C[M]&&C[M].m(m,null);y||(E=_e(e,"click",D),y=!0)},p(L,F){if(n=L,F[0]&128&&s!==(s=n[29].secretWord.toUpperCase()+"")&&ve(i,s),F[0]&128&&c!==(c=n[29].createdBy?"by "+n[29].createdBy:"")&&ve(u,c),F[0]&128){R=Re(Array(n[29].coins));let M;for(M=0;M<R.length;M+=1){const G=Zc(n,R,M);C[M]?C[M].p(G,F):(C[M]=tu(),C[M].c(),C[M].m(m,null))}for(;M<C.length;M+=1)C[M].d(1);C.length=R.length}F[0]&128&&g!==(g="btn flex flex-row items-center justify-between w-full border "+(n[29].createdBy!=null?"btn-secondary border-black text-white h-20":"btn-primary border-primary text-white"))&&T(e,"class",g)},d(L){L&&j(e),gt(C,L),y=!1,E()}}}function ru(n){let e;return{c(){e=x("span"),e.innerHTML=`(5 <img src="${or}" class="w-4 h-4 inline"/>)`,T(e,"class","text-xs text-black/60")},m(t,r){q(t,e,r)},d(t){t&&j(e)}}}function xv(n){return{c:J,m:J,p:J,d:J}}function Lv(n){let e;return{c(){e=x("span"),e.textContent="No drawing yet",T(e,"class","text-accent")},m(t,r){q(t,e,r)},p:J,d(t){t&&j(e)}}}function Fv(n){let e,t;return{c(){e=x("img"),Ct(e.src,t=`${n[0].data}`)||T(e,"src",t),T(e,"class","w-full h-full object-contain"),T(e,"alt","Current drawing")},m(r,s){q(r,e,s)},p(r,s){s[0]&1&&!Ct(e.src,t=`${r[0].data}`)&&T(e,"src",t)},d(r){r&&j(e)}}}function Uv(n){let e,t,r=n[0].artist+"",s,i,a,l=(n[0].hintPurchased||n[0].superHintPurchased)&&su(n);return{c(){e=se("Drawn by "),t=x("span"),s=se(r),i=Z(),l&&l.c(),a=Et(),T(t,"class","font-bold text-secondary")},m(c,u){q(c,e,u),q(c,t,u),S(t,s),q(c,i,u),l&&l.m(c,u),q(c,a,u)},p(c,u){u[0]&1&&r!==(r=c[0].artist+"")&&ve(s,r),c[0].hintPurchased||c[0].superHintPurchased?l?l.p(c,u):(l=su(c),l.c(),l.m(a.parentNode,a)):l&&(l.d(1),l=null)},d(c){c&&(j(e),j(t),j(i),j(a)),l&&l.d(c)}}}function Bv(n){let e,t,r=n[0].secretWord+"",s;return{c(){e=se("You drew this. The secret word is "),t=x("span"),s=se(r),T(t,"class","font-bold text-secondary")},m(i,a){q(i,e,a),q(i,t,a),S(t,s)},p(i,a){a[0]&1&&r!==(r=i[0].secretWord+"")&&ve(s,r)},d(i){i&&(j(e),j(t))}}}function su(n){let e,t,r=n[0].hintPurchased&&iu(n),s=n[0].superHintPurchased&&ou(n);return{c(){e=x("ul"),r&&r.c(),t=Z(),s&&s.c(),T(e,"class","pl-4 mt-1 space-y-1")},m(i,a){q(i,e,a),r&&r.m(e,null),S(e,t),s&&s.m(e,null)},p(i,a){i[0].hintPurchased?r?r.p(i,a):(r=iu(i),r.c(),r.m(e,t)):r&&(r.d(1),r=null),i[0].superHintPurchased?s?s.p(i,a):(s=ou(i),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(i){i&&j(e),r&&r.d(),s&&s.d()}}}function iu(n){let e,t=Vc(n[0])+"",r;return{c(){e=x("li"),r=se(t),T(e,"class","text-xs list-disc text-accent/70")},m(s,i){q(s,e,i),S(e,r)},p(s,i){i[0]&1&&t!==(t=Vc(s[0])+"")&&ve(r,t)},d(s){s&&j(e)}}}function ou(n){let e,t=Dc(n[0])+"",r;return{c(){e=x("li"),r=se(t),T(e,"class","text-xs list-disc text-accent/70")},m(s,i){q(s,e,i),S(e,r)},p(s,i){i[0]&1&&t!==(t=Dc(s[0])+"")&&ve(r,t)},d(s){s&&j(e)}}}function au(n){let e,t=n[12]+"",r,s;return{c(){e=x("div"),r=se(t),s=Z(),T(e,"class","bg-accent-light px-3 py-1 rounded-full text-black/60 border border-accent")},m(i,a){q(i,e,a),S(e,r),S(e,s)},p(i,a){a[0]&1&&t!==(t=i[12]+"")&&ve(r,t)},d(i){i&&j(e)}}}function lu(n){let e,t=n[12]&&au(n);return{c(){t&&t.c(),e=Et()},m(r,s){t&&t.m(r,s),q(r,e,s)},p(r,s){r[12]?t?t.p(r,s):(t=au(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(r){r&&j(e),t&&t.d(r)}}}function cu(n){let e,t,r,s,i,a,l,c,u;function f(y,E){if(!y[0].hintPurchased)return qv;if(!y[0].superHintPurchased)return jv}let m=f(n),g=m&&m(n);return{c(){e=x("div"),t=x("div"),g&&g.c(),r=Z(),s=x("div"),i=x("input"),a=Z(),l=x("button"),l.textContent="Guess",T(t,"class","flex gap-2"),T(i,"type","text"),T(i,"placeholder","Type your guess..."),T(i,"class","input input-bordered flex-1 bg-white text-black border-primary"),T(l,"class","btn btn-primary"),T(s,"class","flex gap-2"),T(e,"class","flex flex-col gap-2 w-full max-w-[min(90vw,400px)]")},m(y,E){q(y,e,E),S(e,t),g&&g.m(t,null),S(e,r),S(e,s),S(s,i),Gn(i,n[12]),S(s,a),S(s,l),c||(u=[_e(i,"input",n[16]),_e(i,"keydown",n[17]),_e(l,"click",n[18])],c=!0)},p(y,E){m===(m=f(y))&&g?g.p(y,E):(g&&g.d(1),g=m&&m(y),g&&(g.c(),g.m(t,null))),E[0]&4096&&i.value!==y[12]&&Gn(i,y[12])},d(y){y&&j(e),g&&g.d(),c=!1,At(u)}}}function jv(n){let e,t=n[11]?"Purchasing...":"Super Hint (10 ",r,s,i,a=n[11]?"":")",l,c,u,f,m;return{c(){e=x("button"),r=se(t),s=x("img"),l=se(a),Ct(s.src,i=or)||T(s,"src",i),T(s,"class","w-4 h-4 inline"),T(e,"class",c="btn btn-outline flex-1 "+(n[2].coins<10||n[11]?"opacity-40 btn-error cursor-not-allowed":"")),e.disabled=u=n[2].coins<10||n[11]},m(g,y){q(g,e,y),S(e,r),S(e,s),S(e,l),f||(m=_e(e,"click",n[15]),f=!0)},p(g,y){y[0]&2048&&t!==(t=g[11]?"Purchasing...":"Super Hint (10 ")&&ve(r,t),y[0]&2048&&a!==(a=g[11]?"":")")&&ve(l,a),y[0]&2052&&c!==(c="btn btn-outline flex-1 "+(g[2].coins<10||g[11]?"opacity-40 btn-error cursor-not-allowed":""))&&T(e,"class",c),y[0]&2052&&u!==(u=g[2].coins<10||g[11])&&(e.disabled=u)},d(g){g&&j(e),f=!1,m()}}}function qv(n){let e,t=n[10]?"Purchasing...":"Hint (5 ",r,s,i,a=n[10]?"":")",l,c,u,f,m;return{c(){e=x("button"),r=se(t),s=x("img"),l=se(a),Ct(s.src,i=or)||T(s,"src",i),T(s,"class","w-4 h-4 inline"),T(e,"class",c="btn btn-outline flex-1 "+(n[2].coins<5||n[10]?"opacity-40 btn-error cursor-not-allowed":"")),e.disabled=u=n[2].coins<5||n[10]},m(g,y){q(g,e,y),S(e,r),S(e,s),S(e,l),f||(m=_e(e,"click",n[14]),f=!0)},p(g,y){y[0]&1024&&t!==(t=g[10]?"Purchasing...":"Hint (5 ")&&ve(r,t),y[0]&1024&&a!==(a=g[10]?"":")")&&ve(l,a),y[0]&1028&&c!==(c="btn btn-outline flex-1 "+(g[2].coins<5||g[10]?"opacity-40 btn-error cursor-not-allowed":""))&&T(e,"class",c),y[0]&1028&&u!==(u=g[2].coins<5||g[10])&&(e.disabled=u)},d(g){g&&j(e),f=!1,m()}}}function zv(n){let e,t,r,s;const i=[Vv,Pv],a=[];function l(c,u){return c[3]&&c[2]&&c[0]?0:c[2]&&c[3]?1:-1}return~(t=l(n))&&(r=a[t]=i[t](n)),{c(){e=x("div"),r&&r.c(),T(e,"class","rounded-lg p-9 bg-background flex flex-col justify-center")},m(c,u){q(c,e,u),~t&&a[t].m(e,null),s=!0},p(c,u){let f=t;t=l(c),t===f?~t&&a[t].p(c,u):(r&&(Fe(),ee(a[f],1,1,()=>{a[f]=null}),Ue()),~t?(r=a[t],r?r.p(c,u):(r=a[t]=i[t](c),r.c()),K(r,1),r.m(e,null)):r=null)},i(c){s||(K(r),s=!0)},o(c){ee(r),s=!1},d(c){c&&j(e),~t&&a[t].d()}}}function Hv(n,e,t){let r,s,i;et(n,rt,w=>t(2,r=w)),et(n,dt,w=>t(3,s=w)),et(n,Rs,w=>t(25,i=w));let a=null,l="",c=null,u=!1,f,m=0,g,y=!1,E=!1,R=!1,C=!1;async function D(w){if(!s||!r||!a||!w.trim()||(t(12,l=""),a.guesses.includes(w)))return;const H={...a};H.guesses.push(w);const Ee={...s},St=Ee.drawings.findIndex(yt=>!yt.guessed&&yt.artist===H.artist);St>=0&&(Ee.drawings[St]=H,ft(dt,s=Ee,s)),ev(s,r,w).catch(yt=>{console.error("Error submitting guess:",yt)})}async function L(){if(!r||!a||!s||a.hintPurchased||r.coins<5||R)return;t(10,R=!0),await nv(s,a,r)&&await Nr(r,-5),t(10,R=!1)}async function F(){if(!r||!a||!s||!a.hintPurchased||r.coins<10||C)return;t(11,C=!0),await rv(s,a,r)&&await Nr(r,-10),t(11,C=!1)}function M(){l=this.value,t(12,l)}const G=w=>{w.key==="Enter"&&l.length>0&&D(l)},X=()=>D(l),A=w=>w!==r.name,_=w=>{s&&t(1,c={secretWord:w.secretWord,coins:w.coins,data:"",artist:r.name,guessed:!1,guesses:[],createdAt:new Date,guessedBy:"",hintPurchased:!1,superHintPurchased:!1})},v=async()=>{if(r&&r.coins>=5&&!y){t(8,y=!0);try{await Nr(r,-5),t(6,m++,m),t(7,g=Pc(4))}finally{setTimeout(()=>{t(8,y=!1)},1e3)}}};function b(w){Or[w?"unshift":"push"](()=>{f=w,t(5,f)})}const I=()=>f.clearCanvas(),P=async()=>{if(c&&s&&!u){t(4,u=!0);const w=f.getImageData(),H={...c,data:w};s.drawings.push(H),await yi(s),t(1,c=null),ft(dt,s=null,s),t(4,u=!1)}};return n.$$.update=()=>{if(n.$$.dirty[0]&13&&s&&r){const w=ma(s,r.name);t(0,a=w?tv(w):null),t(9,E=r.name===(a==null?void 0:a.artist))}n.$$.dirty[0]&2&&(c?ft(Rs,i=!0,i):ft(Rs,i=!1,i))},t(7,g=Pc(4)),[a,c,r,s,u,f,m,g,y,E,R,C,l,D,L,F,M,G,X,A,_,v,b,I,P]}class Wv extends Tt{constructor(e){super(),bt(this,e,Hv,zv,_t,{},null,[-1,-1])}}function uu(n,e,t){const r=n.slice();return r[17]=e[t],r}function hu(n){let e,t,r;return{c(){e=x("button"),e.textContent="×",T(e,"class","absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-black p-2")},m(s,i){q(s,e,i),t||(r=_e(e,"click",n[9]),t=!0)},p:J,d(s){s&&j(e),t=!1,r()}}}function Gv(n){let e,t,r=Re(n[2]),s=[];for(let a=0;a<r.length;a+=1)s[a]=du(uu(n,r,a));const i=a=>ee(s[a],1,1,()=>{s[a]=null});return{c(){for(let a=0;a<s.length;a+=1)s[a].c();e=Et()},m(a,l){for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(a,l);q(a,e,l),t=!0},p(a,l){if(l&180){r=Re(a[2]);let c;for(c=0;c<r.length;c+=1){const u=uu(a,r,c);s[c]?(s[c].p(u,l),K(s[c],1)):(s[c]=du(u),s[c].c(),K(s[c],1),s[c].m(e.parentNode,e))}for(Fe(),c=r.length;c<s.length;c+=1)i(c);Ue()}},i(a){if(!t){for(let l=0;l<r.length;l+=1)K(s[l]);t=!0}},o(a){s=s.filter(Boolean);for(let l=0;l<s.length;l+=1)ee(s[l]);t=!1},d(a){a&&j(e),gt(s,a)}}}function Kv(n){let e;return{c(){e=x("div"),e.textContent="No users found",T(e,"class","text-center py-8 text-black/60")},m(t,r){q(t,e,r)},p:J,i:J,o:J,d(t){t&&j(e)}}}function $v(n){let e;return{c(){e=x("div"),e.innerHTML='<div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>',T(e,"class","flex items-center justify-center py-8")},m(t,r){q(t,e,r)},p:J,i:J,o:J,d(t){t&&j(e)}}}function fu(n){let e,t;function r(...l){return n[10](n[17],...l)}function s(...l){return n[11](n[17],...l)}function i(...l){return n[12](n[17],...l)}function a(){return n[13](n[17])}return e=new pa({props:{name:n[17].name,coins:n[17].coins,showAvatar:!0,subtitle:n[5].filter(r).length>0?`${n[5].filter(s).length} game${n[5].filter(i).length>1?"s":""}`:null,onClick:a}}),{c(){tt(e.$$.fragment)},m(l,c){Ge(e,l,c),t=!0},p(l,c){n=l;const u={};c&4&&(u.name=n[17].name),c&4&&(u.coins=n[17].coins),c&36&&(u.subtitle=n[5].filter(r).length>0?`${n[5].filter(s).length} game${n[5].filter(i).length>1?"s":""}`:null),c&4&&(u.onClick=a),e.$set(u)},i(l){t||(K(e.$$.fragment,l),t=!0)},o(l){ee(e.$$.fragment,l),t=!1},d(l){Ke(e,l)}}}function du(n){let e,t,r=n[4]&&n[4].name!==n[17].name&&fu(n);return{c(){r&&r.c(),e=Et()},m(s,i){r&&r.m(s,i),q(s,e,i),t=!0},p(s,i){s[4]&&s[4].name!==s[17].name?r?(r.p(s,i),i&20&&K(r,1)):(r=fu(s),r.c(),K(r,1),r.m(e.parentNode,e)):r&&(Fe(),ee(r,1,1,()=>{r=null}),Ue())},i(s){t||(K(r),t=!0)},o(s){ee(r),t=!1},d(s){s&&j(e),r&&r.d(s)}}}function Qv(n){let e,t,r,s,i,a,l,c,u,f,m,g,y,E,R,C,D,L;r=new ga({props:{navigate:n[0]}});let F=n[1]&&hu(n);const M=[$v,Kv,Gv],G=[];function X(A,_){return A[3]?0:A[2].length===0?1:2}return E=X(n),R=G[E]=M[E](n),{c(){e=x("div"),t=x("div"),tt(r.$$.fragment),s=Z(),i=x("h2"),i.textContent="Challenge a friend",a=Z(),l=x("p"),l.textContent="Tap on a user to start a new game",c=Z(),u=x("div"),f=x("input"),m=Z(),F&&F.c(),g=Z(),y=x("div"),R.c(),T(i,"class","text-xl font-bold text-primary"),T(l,"class","text-sm text-black/60"),T(t,"class","flex flex-col gap-2"),T(f,"type","text"),T(f,"placeholder","Search users..."),T(f,"class","input input-bordered w-full bg-white text-black border-primary rounded-xl text-base px-4 py-3 shadow-sm"),T(f,"autocorrect","off"),T(u,"class","relative"),T(y,"class","flex flex-col w-full gap-2 pt-2 overflow-y-auto"),T(e,"class","flex flex-col gap-4 p-4 pt-24")},m(A,_){q(A,e,_),S(e,t),Ge(r,t,null),S(t,s),S(t,i),S(t,a),S(t,l),S(e,c),S(e,u),S(u,f),Gn(f,n[1]),S(u,m),F&&F.m(u,null),S(e,g),S(e,y),G[E].m(y,null),C=!0,D||(L=[_e(f,"input",n[6]),_e(f,"input",n[8])],D=!0)},p(A,[_]){const v={};_&1&&(v.navigate=A[0]),r.$set(v),_&2&&f.value!==A[1]&&Gn(f,A[1]),A[1]?F?F.p(A,_):(F=hu(A),F.c(),F.m(u,null)):F&&(F.d(1),F=null);let b=E;E=X(A),E===b?G[E].p(A,_):(Fe(),ee(G[b],1,1,()=>{G[b]=null}),Ue(),R=G[E],R?R.p(A,_):(R=G[E]=M[E](A),R.c()),K(R,1),R.m(y,null))},i(A){C||(K(r.$$.fragment,A),K(R),C=!0)},o(A){ee(r.$$.fragment,A),ee(R),C=!1},d(A){A&&j(e),Ke(r),F&&F.d(),G[E].d(),D=!1,At(L)}}}function Xv(n,e,t){let r,s,i;et(n,rt,M=>t(4,r=M)),et(n,dt,M=>t(16,s=M)),et(n,Hr,M=>t(5,i=M));let a="",l=[],c,u=!0,f=!1,{navigate:m}=e;function g(){clearTimeout(c),c=setTimeout(async()=>{t(3,u=!0),t(2,l=await kc(a)),t(3,u=!1)},300)}(async()=>(t(3,u=!0),t(2,l=await kc("")),t(3,u=!1)))();async function y(M){if(!(!r||f)){f=!0;try{ft(dt,s=await $w([r.name,M.name]),s)}catch(G){console.error("Error creating game:",G)}finally{f=!1}}}function E(){a=this.value,t(1,a)}const R=()=>{t(1,a=""),g()},C=(M,G)=>G.users.includes(M.name),D=(M,G)=>G.users.includes(M.name),L=(M,G)=>G.users.includes(M.name),F=M=>y(M);return n.$$set=M=>{"navigate"in M&&t(0,m=M.navigate)},[m,a,l,u,r,i,g,y,E,R,C,D,L,F]}class Jv extends Tt{constructor(e){super(),bt(this,e,Xv,Qv,_t,{navigate:0})}}function mu(n,e,t){const r=n.slice();return r[3]=e[t],r}function pu(n,e,t){const r=n.slice();return r[6]=e[t],r[8]=t,r}function gu(n,e,t){const r=n.slice();return r[9]=e[t],r}function Yv(n){let e,t=Re(n[1]),r=[];for(let s=0;s<t.length;s+=1)r[s]=Eu(mu(n,t,s));return{c(){e=x("div");for(let s=0;s<r.length;s+=1)r[s].c();T(e,"class","flex flex-col gap-4")},m(s,i){q(s,e,i);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(e,null)},p(s,i){if(i&2){t=Re(s[1]);let a;for(a=0;a<t.length;a+=1){const l=mu(s,t,a);r[a]?r[a].p(l,i):(r[a]=Eu(l),r[a].c(),r[a].m(e,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=t.length}},d(s){s&&j(e),gt(r,s)}}}function Zv(n){let e;return{c(){e=x("div"),e.innerHTML='<span class="text-accent">Loading drawings...</span>',T(e,"class","flex justify-center items-center h-40")},m(t,r){q(t,e,r)},p:J,d(t){t&&j(e)}}}function _u(n){let e,t,r,s,i,a,l,c,u,f=n[3].artist+"",m,g,y,E,R,C=Re(Array(n[3].coins)),D=[];for(let v=0;v<C.length;v+=1)D[v]=yu(gu(n,C,v));function L(v,b){return v[3].guessed?t0:e0}let F=L(n),M=F(n);function G(v,b){return v[3].guesses.length>0?r0:n0}let X=G(n),A=X(n),_=n[3].hintPurchased&&Au(n);return{c(){e=x("div"),t=x("div");for(let v=0;v<D.length;v+=1)D[v].c();r=Z(),s=x("img"),a=Z(),l=x("p"),M.c(),c=se(`
							by
							`),u=x("span"),m=se(f),g=Z(),y=x("p"),A.c(),E=Z(),_&&_.c(),R=Z(),T(t,"class","flex flex-row gap-1 absolute top-2 right-2"),Ct(s.src,i=`${n[3].data}`)||T(s,"src",i),T(s,"class","w-full h-full object-contain"),T(s,"alt","Drawing"),T(u,"class","font-semibold"),T(l,"class","text-lg text-center py-2 align-middle items-center"),T(y,"class","text-[0.8rem] text-center align-middle items-center w-3/4"),T(e,"class","bg-white/90 p-1 relative rounded-lg w-full max-w-[min(90vw,400px)] flex flex-col items-center justify-center mx-auto border-2 border-primary")},m(v,b){q(v,e,b),S(e,t);for(let I=0;I<D.length;I+=1)D[I]&&D[I].m(t,null);S(e,r),S(e,s),S(e,a),S(e,l),M.m(l,null),S(l,c),S(l,u),S(u,m),S(e,g),S(e,y),A.m(y,null),S(e,E),_&&_.m(e,null),S(e,R)},p(v,b){if(b&2){C=Re(Array(v[3].coins));let I;for(I=0;I<C.length;I+=1){const P=gu(v,C,I);D[I]?D[I].p(P,b):(D[I]=yu(),D[I].c(),D[I].m(t,null))}for(;I<D.length;I+=1)D[I].d(1);D.length=C.length}b&2&&!Ct(s.src,i=`${v[3].data}`)&&T(s,"src",i),F===(F=L(v))&&M?M.p(v,b):(M.d(1),M=F(v),M&&(M.c(),M.m(l,c))),b&2&&f!==(f=v[3].artist+"")&&ve(m,f),X===(X=G(v))&&A?A.p(v,b):(A.d(1),A=X(v),A&&(A.c(),A.m(y,null))),v[3].hintPurchased?_?_.p(v,b):(_=Au(v),_.c(),_.m(e,R)):_&&(_.d(1),_=null)},d(v){v&&j(e),gt(D,v),M.d(),A.d(),_&&_.d()}}}function yu(n){let e,t;return{c(){e=x("img"),Ct(e.src,t=or)||T(e,"src",t),T(e,"class","w-4 h-4")},m(r,s){q(r,e,s)},p:J,d(r){r&&j(e)}}}function e0(n){let e;return{c(){e=x("span"),e.textContent="?",T(e,"class","font-bold text-primary")},m(t,r){q(t,e,r)},p:J,d(t){t&&j(e)}}}function t0(n){let e,t=n[3].secretWord+"",r;return{c(){e=x("span"),r=se(t),T(e,"class","font-bold text-primary")},m(s,i){q(s,e,i),S(e,r)},p(s,i){i&2&&t!==(t=s[3].secretWord+"")&&ve(r,t)},d(s){s&&j(e)}}}function n0(n){let e,t,r=n[3].guessedBy+"",s,i;return{c(){e=x("span"),t=x("span"),s=se(r),i=se(`
									is thinking...`),T(t,"class","font-semibold"),T(e,"class","italic")},m(a,l){q(a,e,l),S(e,t),S(t,s),S(e,i)},p(a,l){l&2&&r!==(r=a[3].guessedBy+"")&&ve(s,r)},d(a){a&&j(e)}}}function r0(n){let e,t=n[3].guessedBy+"",r,s,i,a,l=!n[3].guessed&&wu(),c=Re(n[3].guesses),u=[];for(let f=0;f<c.length;f+=1)u[f]=vu(pu(n,c,f));return{c(){e=x("span"),r=se(t),s=Z(),l&&l.c(),i=se(`
								guessed:
								`);for(let f=0;f<u.length;f+=1)u[f].c();a=Et(),T(e,"class","font-semibold")},m(f,m){q(f,e,m),S(e,r),q(f,s,m),l&&l.m(f,m),q(f,i,m);for(let g=0;g<u.length;g+=1)u[g]&&u[g].m(f,m);q(f,a,m)},p(f,m){if(m&2&&t!==(t=f[3].guessedBy+"")&&ve(r,t),f[3].guessed?l&&(l.d(1),l=null):l||(l=wu(),l.c(),l.m(i.parentNode,i)),m&2){c=Re(f[3].guesses);let g;for(g=0;g<c.length;g+=1){const y=pu(f,c,g);u[g]?u[g].p(y,m):(u[g]=vu(y),u[g].c(),u[g].m(a.parentNode,a))}for(;g<u.length;g+=1)u[g].d(1);u.length=c.length}},d(f){f&&(j(e),j(s),j(i),j(a)),l&&l.d(f),gt(u,f)}}}function wu(n){let e;return{c(){e=se("has")},m(t,r){q(t,e,r)},d(t){t&&j(e)}}}function vu(n){let e,t=n[6]+"",r,s=n[8]<n[3].guesses.length-1?", ":"",i;return{c(){e=x("span"),r=se(t),i=se(s),T(e,"class","italic")},m(a,l){q(a,e,l),S(e,r),S(e,i)},p(a,l){l&2&&t!==(t=a[6]+"")&&ve(r,t),l&2&&s!==(s=a[8]<a[3].guesses.length-1?", ":"")&&ve(i,s)},d(a){a&&j(e)}}}function Au(n){let e,t=n[3].hintPurchased?`${n[3].guessedBy} used a Hint`:"",r,s=n[3].superHintPurchased?"... AND a SuperHint!":"",i;return{c(){e=x("p"),r=se(t),i=se(s),T(e,"class","text-[0.8rem] text-secondary flex flex-row py-2 text-center align-middle items-center")},m(a,l){q(a,e,l),S(e,r),S(e,i)},p(a,l){l&2&&t!==(t=a[3].hintPurchased?`${a[3].guessedBy} used a Hint`:"")&&ve(r,t),l&2&&s!==(s=a[3].superHintPurchased?"... AND a SuperHint!":"")&&ve(i,s)},d(a){a&&j(e)}}}function Eu(n){let e,t=n[3].data&&n[3].data.length>10&&_u(n);return{c(){t&&t.c(),e=Et()},m(r,s){t&&t.m(r,s),q(r,e,s)},p(r,s){r[3].data&&r[3].data.length>10?t?t.p(r,s):(t=_u(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(r){r&&j(e),t&&t.d(r)}}}function s0(n){let e,t,r,s;t=new ga({props:{navigate:n[0]}});function i(c,u){return c[2]?Zv:Yv}let a=i(n),l=a(n);return{c(){e=x("div"),tt(t.$$.fragment),r=Z(),l.c(),T(e,"class","p-4")},m(c,u){q(c,e,u),Ge(t,e,null),S(e,r),l.m(e,null),s=!0},p(c,[u]){const f={};u&1&&(f.navigate=c[0]),t.$set(f),a===(a=i(c))&&l?l.p(c,u):(l.d(1),l=a(c),l&&(l.c(),l.m(e,null)))},i(c){s||(K(t.$$.fragment,c),s=!0)},o(c){ee(t.$$.fragment,c),s=!1},d(c){c&&j(e),Ke(t),l.d()}}}function i0(n,e,t){let r=[],s=!0,{navigate:i}=e;return zr(async()=>{console.log("Feed mounted"),t(1,r=await Xw()),console.log("Drawings loaded",r),t(2,s=!1)}),n.$$set=a=>{"navigate"in a&&t(0,i=a.navigate)},[i,r,s]}class o0 extends Tt{constructor(e){super(),bt(this,e,i0,s0,_t,{navigate:0})}}function bu(n){var F;let e,t,r,s,i,a,l,c,u=(((F=n[2])==null?void 0:F.coins)||0)+"",f,m,g,y,E,R;function C(M,G){return M[3]?l0:a0}let D=C(n),L=D(n);return{c(){e=x("nav"),t=x("div"),r=x("div"),s=x("div"),i=x("img"),l=Z(),c=x("span"),f=se(u),m=Z(),g=x("span"),g.textContent="coins",y=Z(),L.c(),E=Z(),R=x("div"),Ct(i.src,a=Sv)||T(i,"src",a),T(i,"class","w-5 h-5"),T(i,"alt","coins"),T(c,"class","text-sm font-medium"),T(s,"class","flex items-center gap-1"),T(g,"class","text-xs text-gray-500"),T(r,"class","flex flex-col items-center"),T(t,"class","flex justify-around items-center max-w-md mx-auto"),T(e,"class","fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2"),T(R,"class","h-20")},m(M,G){q(M,e,G),S(e,t),S(t,r),S(r,s),S(s,i),S(s,l),S(s,c),S(c,f),S(r,m),S(r,g),S(t,y),L.m(t,null),q(M,E,G),q(M,R,G)},p(M,G){var X;G&4&&u!==(u=(((X=M[2])==null?void 0:X.coins)||0)+"")&&ve(f,u),D===(D=C(M))&&L?L.p(M,G):(L.d(1),L=D(M),L&&(L.c(),L.m(t,null)))},d(M){M&&(j(e),j(E),j(R)),L.d()}}}function a0(n){let e,t,r,s,i,a,l,c,u,f,m,g,y,E,R,C,D,L,F,M,G,X,A,_,v,b,I,P;return{c(){e=x("button"),t=Jt("svg"),r=Jt("path"),i=Z(),a=x("span"),l=se("Home"),u=Z(),f=x("button"),m=Jt("svg"),g=Jt("path"),E=Z(),R=x("span"),C=se("New"),L=Z(),F=x("button"),M=Jt("svg"),G=Jt("path"),A=Z(),_=x("span"),v=se("Feed"),T(r,"stroke-linecap","round"),T(r,"stroke-linejoin","round"),T(r,"stroke-width","2"),T(r,"d","M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"),T(t,"xmlns","http://www.w3.org/2000/svg"),T(t,"class",s="h-6 w-6 "+(n[0]==="home"?"text-primary":"text-gray-400")),T(t,"fill","none"),T(t,"viewBox","0 0 24 24"),T(t,"stroke","currentColor"),T(a,"class",c="text-xs "+(n[0]==="home"?"text-primary":"text-gray-500")),T(e,"class","flex flex-col items-center"),T(g,"stroke-linecap","round"),T(g,"stroke-linejoin","round"),T(g,"stroke-width","2"),T(g,"d","M12 4v16m8-8H4"),T(m,"xmlns","http://www.w3.org/2000/svg"),T(m,"class",y="h-6 w-6 "+(n[0]==="new"?"text-primary":"text-gray-400")),T(m,"fill","none"),T(m,"viewBox","0 0 24 24"),T(m,"stroke","currentColor"),T(R,"class",D="text-xs "+(n[0]==="new"?"text-primary":"text-gray-500")),T(f,"class","flex flex-col items-center"),T(G,"stroke-linecap","round"),T(G,"stroke-linejoin","round"),T(G,"stroke-width","2"),T(G,"d","M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"),T(M,"xmlns","http://www.w3.org/2000/svg"),T(M,"class",X="h-6 w-6 "+(n[0]==="feed"?"text-primary":"text-gray-400")),T(M,"fill","none"),T(M,"viewBox","0 0 24 24"),T(M,"stroke","currentColor"),T(_,"class",b="text-xs "+(n[0]==="feed"?"text-primary":"text-gray-500")),T(F,"class","flex flex-col items-center")},m(w,H){q(w,e,H),S(e,t),S(t,r),S(e,i),S(e,a),S(a,l),q(w,u,H),q(w,f,H),S(f,m),S(m,g),S(f,E),S(f,R),S(R,C),q(w,L,H),q(w,F,H),S(F,M),S(M,G),S(F,A),S(F,_),S(_,v),I||(P=[_e(e,"click",n[7]),_e(f,"click",n[8]),_e(F,"click",n[9])],I=!0)},p(w,H){H&1&&s!==(s="h-6 w-6 "+(w[0]==="home"?"text-primary":"text-gray-400"))&&T(t,"class",s),H&1&&c!==(c="text-xs "+(w[0]==="home"?"text-primary":"text-gray-500"))&&T(a,"class",c),H&1&&y!==(y="h-6 w-6 "+(w[0]==="new"?"text-primary":"text-gray-400"))&&T(m,"class",y),H&1&&D!==(D="text-xs "+(w[0]==="new"?"text-primary":"text-gray-500"))&&T(R,"class",D),H&1&&X!==(X="h-6 w-6 "+(w[0]==="feed"?"text-primary":"text-gray-400"))&&T(M,"class",X),H&1&&b!==(b="text-xs "+(w[0]==="feed"?"text-primary":"text-gray-500"))&&T(_,"class",b)},d(w){w&&(j(e),j(u),j(f),j(L),j(F)),I=!1,At(P)}}}function l0(n){let e,t,r;return{c(){e=x("button"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg> <span class="text-xs text-primary">Back</span>',T(e,"class","flex flex-col items-center")},m(s,i){q(s,e,i),t||(r=_e(e,"click",n[6]),t=!0)},p:J,d(s){s&&j(e),t=!1,r()}}}function c0(n){let e,t=!n[1]&&bu(n);return{c(){t&&t.c(),e=Et()},m(r,s){t&&t.m(r,s),q(r,e,s)},p(r,[s]){r[1]?t&&(t.d(1),t=null):t?t.p(r,s):(t=bu(r),t.c(),t.m(e.parentNode,e))},i:J,o:J,d(r){r&&j(e),t&&t.d(r)}}}function u0(n,e,t){let r,s,i;et(n,Rs,E=>t(1,r=E)),et(n,rt,E=>t(2,s=E)),et(n,dt,E=>t(3,i=E));let{navigate:a}=e,l="home";function c(){const E=new URLSearchParams(window.location.search);t(0,l=E.get("page")||"home")}typeof window<"u"&&(window.addEventListener("popstate",c),c());const u=E=>{t(0,l=E),a(E)},f=()=>{ft(dt,i=null,i),u("home")},m=()=>u("home"),g=()=>u("new"),y=()=>u("feed");return n.$$set=E=>{"navigate"in E&&t(5,a=E.navigate)},[l,r,s,i,u,a,f,m,g,y]}class h0 extends Tt{constructor(e){super(),bt(this,e,u0,c0,_t,{navigate:5})}}function Tu(n){let e,t,r,s,i,a,l,c,u,f,m,g;return{c(){e=x("div"),t=x("div"),r=x("h2"),r.textContent="Dev Menu",s=Z(),i=x("div"),a=x("button"),a.textContent="Delete All Users",l=Z(),c=x("button"),u=se("Add 5 Points"),T(r,"class","text-lg font-bold mb-4"),T(a,"class","btn btn-error"),T(c,"class","btn btn-primary"),c.disabled=f=!n[1],T(i,"class","flex flex-col gap-2"),T(t,"class","bg-white rounded-lg shadow-lg p-4 border border-gray-200"),T(e,"class","fixed top-0 right-0 p-4 z-50")},m(y,E){q(y,e,E),S(e,t),S(t,r),S(t,s),S(t,i),S(i,a),S(i,l),S(i,c),S(c,u),m||(g=[_e(a,"click",n[2]),_e(c,"click",n[3])],m=!0)},p(y,E){E&2&&f!==(f=!y[1])&&(c.disabled=f)},d(y){y&&j(e),m=!1,At(g)}}}function f0(n){let e,t=n[0]&&Tu(n);return{c(){t&&t.c(),e=Et()},m(r,s){t&&t.m(r,s),q(r,e,s)},p(r,[s]){r[0]?t?t.p(r,s):(t=Tu(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:J,o:J,d(r){r&&j(e),t&&t.d(r)}}}function d0(n,e,t){let r;et(n,rt,c=>t(1,r=c));let s=!1;async function i(c){c.key==="\\"&&t(0,s=!s)}async function a(){if(confirm("Are you sure you want to delete ALL users? This cannot be undone!"))try{const c=await Ft(Kt),u=Bw(Jr);c.docs.forEach(f=>{u.delete(f.ref)}),await u.commit(),localStorage.removeItem("drawIt-user"),localStorage.removeItem("drawIt-games"),localStorage.removeItem("drawIt-users"),rt.set(null),alert("All users deleted successfully!"),window.location.reload()}catch(c){console.error("Error deleting users:",c),alert("Error deleting users. Check console for details.")}}async function l(){if(r)try{await Nr(r,5),alert("Added 5 points to current user!")}catch(c){console.error("Error adding points:",c),alert("Error adding points. Check console for details.")}}return zr(()=>(window.addEventListener("keydown",i),()=>{window.removeEventListener("keydown",i)})),[s,r,a,l]}class m0 extends Tt{constructor(e){super(),bt(this,e,d0,f0,_t,{})}}function p0(n){let e,t,r,s,i,a,l,c,u;const f=[v0,w0,y0,_0],m=[];function g(y,E){return y[2]?0:y[0]==="home"?1:y[0]==="new"?2:y[0]==="feed"?3:-1}return~(r=g(n))&&(s=m[r]=f[r](n)),a=new h0({props:{navigate:n[3]}}),c=new m0({}),{c(){e=x("main"),t=x("div"),s&&s.c(),i=Z(),tt(a.$$.fragment),l=Z(),tt(c.$$.fragment),T(t,"class","w-full max-w-md mx-auto px-4"),T(e,"class","w-full min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-background-gradient-start to-background-gradient-end text-black pb-20")},m(y,E){q(y,e,E),S(e,t),~r&&m[r].m(t,null),S(e,i),Ge(a,e,null),S(e,l),Ge(c,e,null),u=!0},p(y,E){let R=r;r=g(y),r===R?~r&&m[r].p(y,E):(s&&(Fe(),ee(m[R],1,1,()=>{m[R]=null}),Ue()),~r?(s=m[r],s?s.p(y,E):(s=m[r]=f[r](y),s.c()),K(s,1),s.m(t,null)):s=null)},i(y){u||(K(s),K(a.$$.fragment,y),K(c.$$.fragment,y),u=!0)},o(y){ee(s),ee(a.$$.fragment,y),ee(c.$$.fragment,y),u=!1},d(y){y&&j(e),~r&&m[r].d(),Ke(a),Ke(c)}}}function g0(n){let e;return{c(){e=x("div"),e.innerHTML='<div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>',T(e,"class","w-full min-h-screen flex items-center justify-center")},m(t,r){q(t,e,r)},p:J,i:J,o:J,d(t){t&&j(e)}}}function _0(n){let e,t;return e=new o0({props:{navigate:n[3]}}),{c(){tt(e.$$.fragment)},m(r,s){Ge(e,r,s),t=!0},p:J,i(r){t||(K(e.$$.fragment,r),t=!0)},o(r){ee(e.$$.fragment,r),t=!1},d(r){Ke(e,r)}}}function y0(n){let e,t;return e=new Jv({props:{navigate:n[3]}}),{c(){tt(e.$$.fragment)},m(r,s){Ge(e,r,s),t=!0},p:J,i(r){t||(K(e.$$.fragment,r),t=!0)},o(r){ee(e.$$.fragment,r),t=!1},d(r){Ke(e,r)}}}function w0(n){let e,t;return e=new Iv({props:{navigate:n[3]}}),{c(){tt(e.$$.fragment)},m(r,s){Ge(e,r,s),t=!0},p:J,i(r){t||(K(e.$$.fragment,r),t=!0)},o(r){ee(e.$$.fragment,r),t=!1},d(r){Ke(e,r)}}}function v0(n){let e,t;return e=new Wv({}),{c(){tt(e.$$.fragment)},m(r,s){Ge(e,r,s),t=!0},p:J,i(r){t||(K(e.$$.fragment,r),t=!0)},o(r){ee(e.$$.fragment,r),t=!1},d(r){Ke(e,r)}}}function A0(n){let e,t,r,s;const i=[g0,p0],a=[];function l(c,u){return c[1]?0:1}return e=l(n),t=a[e]=i[e](n),{c(){t.c(),r=Et()},m(c,u){a[e].m(c,u),q(c,r,u),s=!0},p(c,[u]){let f=e;e=l(c),e===f?a[e].p(c,u):(Fe(),ee(a[f],1,1,()=>{a[f]=null}),Ue(),t=a[e],t?t.p(c,u):(t=a[e]=i[e](c),t.c()),K(t,1),t.m(r.parentNode,r))},i(c){s||(K(t),s=!0)},o(c){ee(t),s=!1},d(c){c&&j(r),a[e].d(c)}}}function E0(n,e,t){let r;et(n,dt,l=>t(2,r=l));let s="home",i=!0;zr(async()=>{await Qw();const l=new URLSearchParams(window.location.search);t(0,s=l.get("page")||"home");const c=l.get("currentGame");if(c){const u=await Sc(c);u&&ft(dt,r=u,r)}window.addEventListener("popstate",async()=>{const u=new URLSearchParams(window.location.search);t(0,s=u.get("page")||"home");const f=u.get("currentGame");if(f){const m=await Sc(f);m&&ft(dt,r=m,r)}else ft(dt,r=null,r)}),t(1,i=!1)});function a(l){const c=new URLSearchParams(window.location.search),u=r==null?void 0:r.id;u?c.set("currentGame",u):c.delete("currentGame"),l!=="home"?c.set("page",l):c.delete("page");const f=c.toString(),m=f?`?${f}`:"/drawIt/";window.history.pushState({},"",m),t(0,s=l)}return[s,i,r,a]}class b0 extends Tt{constructor(e){super(),bt(this,e,E0,A0,_t,{})}}new b0({target:document.getElementById("app")});
