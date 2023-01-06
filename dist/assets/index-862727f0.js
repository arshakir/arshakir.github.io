(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function X(){}const Qe=t=>t;function We(t){return t()}function Ee(){return Object.create(null)}function G(t){t.forEach(We)}function we(t){return typeof t=="function"}function ie(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Ye(t){return Object.keys(t).length===0}const qe=typeof window<"u";let xe=qe?()=>window.performance.now():()=>Date.now(),ye=qe?t=>requestAnimationFrame(t):X;const J=new Set;function He(t){J.forEach(e=>{e.c(t)||(J.delete(e),e.f())}),J.size!==0&&ye(He)}function et(t){let e;return J.size===0&&ye(He),{promise:new Promise(n=>{J.add(e={c:t,f:n})}),abort(){J.delete(e)}}}function p(t,e){t.appendChild(e)}function Ke(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function tt(t){const e=g("style");return nt(Ke(t),e),e.sheet}function nt(t,e){return p(t.head||t,e),e.sheet}function S(t,e,n){t.insertBefore(e,n||null)}function v(t){t.parentNode&&t.parentNode.removeChild(t)}function oe(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function g(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function w(){return $(" ")}function ve(){return $("")}function j(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function Ze(t){return function(e){return e.preventDefault(),t.call(this,e)}}function D(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function de(t){return t===""?null:+t}function lt(t){return Array.from(t.childNodes)}function z(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function W(t,e){t.value=e??""}function Ne(t,e){for(let n=0;n<t.options.length;n+=1){const l=t.options[n];if(l.__value===e){l.selected=!0;return}}t.selectedIndex=-1}function it(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}let ue;function ot(){if(ue===void 0){ue=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{ue=!0}}return ue}function rt(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const l=g("iframe");l.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),l.setAttribute("aria-hidden","true"),l.tabIndex=-1;const o=ot();let c;return o?(l.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",c=j(window,"message",i=>{i.source===l.contentWindow&&e()})):(l.src="about:blank",l.onload=()=>{c=j(l.contentWindow,"resize",e)}),p(t,l),()=>{(o||c&&l.contentWindow)&&c(),v(l)}}function st(t,e,{bubbles:n=!1,cancelable:l=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,l,e),o}const pe=new Map;let _e=0;function ut(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function ft(t,e){const n={stylesheet:tt(e),rules:{}};return pe.set(t,n),n}function Ae(t,e,n,l,o,c,i,u=0){const f=16.666/l;let m=`{
`;for(let y=0;y<=1;y+=f){const N=e+(n-e)*c(y);m+=y*100+`%{${i(N,1-N)}}
`}const d=m+`100% {${i(n,1-n)}}
}`,s=`__svelte_${ut(d)}_${u}`,a=Ke(t),{stylesheet:r,rules:h}=pe.get(a)||ft(a,t);h[s]||(h[s]=!0,r.insertRule(`@keyframes ${s} ${d}`,r.cssRules.length));const _=t.style.animation||"";return t.style.animation=`${_?`${_}, `:""}${s} ${l}ms linear ${o}ms 1 both`,_e+=1,s}function ct(t,e){const n=(t.style.animation||"").split(", "),l=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),o=n.length-l.length;o&&(t.style.animation=l.join(", "),_e-=o,_e||at())}function at(){ye(()=>{_e||(pe.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&v(e)}),pe.clear())})}let x;function Y(t){x=t}function dt(){if(!x)throw new Error("Function called outside component initialization");return x}function pt(t){dt().$$.on_mount.push(t)}const Q=[],Z=[],ce=[],ge=[],_t=Promise.resolve();let ke=!1;function mt(){ke||(ke=!0,_t.then(Je))}function K(t){ce.push(t)}function ee(t){ge.push(t)}const he=new Set;let fe=0;function Je(){const t=x;do{for(;fe<Q.length;){const e=Q[fe];fe++,Y(e),ht(e.$$)}for(Y(null),Q.length=0,fe=0;Z.length;)Z.pop()();for(let e=0;e<ce.length;e+=1){const n=ce[e];he.has(n)||(he.add(n),n())}ce.length=0}while(Q.length);for(;ge.length;)ge.pop()();ke=!1,he.clear(),Y(t)}function ht(t){if(t.fragment!==null){t.update(),G(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(K)}}let U;function bt(){return U||(U=Promise.resolve(),U.then(()=>{U=null})),U}function be(t,e,n){t.dispatchEvent(st(`${e?"intro":"outro"}${n}`))}const ae=new Set;let H;function Se(){H={r:0,c:[],p:H}}function Ce(){H.r||G(H.c),H=H.p}function F(t,e){t&&t.i&&(ae.delete(t),t.i(e))}function q(t,e,n,l){if(t&&t.o){if(ae.has(t))return;ae.add(t),H.c.push(()=>{ae.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}const gt={duration:0};function Le(t,e,n,l){const o={direction:"both"};let c=e(t,n,o),i=l?0:1,u=null,f=null,m=null;function d(){m&&ct(t,m)}function s(r,h){const _=r.b-i;return h*=Math.abs(_),{a:i,b:r.b,d:_,duration:h,start:r.start,end:r.start+h,group:r.group}}function a(r){const{delay:h=0,duration:_=300,easing:y=Qe,tick:N=X,css:E}=c||gt,C={start:xe()+h,b:r};r||(C.group=H,H.r+=1),u||f?f=C:(E&&(d(),m=Ae(t,i,r,_,h,y,E)),r&&N(0,1),u=s(C,_),K(()=>be(t,r,"start")),et(L=>{if(f&&L>f.start&&(u=s(f,_),f=null,be(t,u.b,"start"),E&&(d(),m=Ae(t,i,u.b,u.duration,0,y,c.css))),u){if(L>=u.end)N(i=u.b,1-i),be(t,u.b,"end"),f||(u.b?d():--u.group.r||G(u.group.c)),u=null;else if(L>=u.start){const T=L-u.start;i=u.a+u.d*y(T/u.duration),N(i,1-i)}}return!!(u||f)}))}return{run(r){we(c)?bt().then(()=>{c=c(o),a(r)}):a(r)},end(){d(),u=f=null}}}function te(t,e,n,l){const o=t.$$.props[e];o!==void 0&&(t.$$.bound[o]=n,l===void 0&&n(t.$$.ctx[o]))}function me(t){t&&t.c()}function ne(t,e,n,l){const{fragment:o,after_update:c}=t.$$;o&&o.m(e,n),l||K(()=>{const i=t.$$.on_mount.map(We).filter(we);t.$$.on_destroy?t.$$.on_destroy.push(...i):G(i),t.$$.on_mount=[]}),c.forEach(K)}function le(t,e){const n=t.$$;n.fragment!==null&&(G(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function kt(t,e){t.$$.dirty[0]===-1&&(Q.push(t),mt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function re(t,e,n,l,o,c,i,u=[-1]){const f=x;Y(t);const m=t.$$={fragment:null,ctx:[],props:c,update:X,not_equal:o,bound:Ee(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:Ee(),dirty:u,skip_bound:!1,root:e.target||f.$$.root};i&&i(m.root);let d=!1;if(m.ctx=n?n(t,e.props||{},(s,a,...r)=>{const h=r.length?r[0]:a;return m.ctx&&o(m.ctx[s],m.ctx[s]=h)&&(!m.skip_bound&&m.bound[s]&&m.bound[s](h),d&&kt(t,s)),a}):[],m.update(),d=!0,G(m.before_update),m.fragment=l?l(m.ctx):!1,e.target){if(e.hydrate){const s=lt(e.target);m.fragment&&m.fragment.l(s),s.forEach(v)}else m.fragment&&m.fragment.c();e.intro&&F(t.$$.fragment),ne(t,e.target,e.anchor,e.customElement),Je()}Y(f)}class se{$destroy(){le(this,1),this.$destroy=X}$on(e,n){if(!we(n))return X;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const o=l.indexOf(n);o!==-1&&l.splice(o,1)}}$set(e){this.$$set&&!Ye(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Ue(t){var e=null;if(window.DOMParser)try{e=new DOMParser().parseFromString(t,"text/xml")}catch{e=null}else if(window.ActiveXObject)try{e=new ActiveXObject("Microsoft.XMLDOM"),e.async=!1,e.loadXML(t)||window.alert(e.parseError.reason+e.parseError.srcText)}catch{e=null}else alert("cannot parse xml string!");return e}function Te(t,e,n){const l=t.slice();return l[6]=e[n],l}function De(t){let e,n=t[6].name+"",l,o,c;return{c(){e=g("option"),l=$(n),o=w(),e.__value=c=t[6].url,e.value=e.__value},m(i,u){S(i,e,u),p(e,l),p(e,o)},p(i,u){u&4&&n!==(n=i[6].name+"")&&z(l,n),u&4&&c!==(c=i[6].url)&&(e.__value=c,e.value=e.__value)},d(i){i&&v(e)}}}function wt(t){let e,n,l,o,c,i,u,f,m,d,s=t[2],a=[];for(let r=0;r<s.length;r+=1)a[r]=De(Te(t,s,r));return{c(){e=g("form"),n=g("input"),l=w(),o=g("button"),c=$("Search"),u=w(),f=g("select");for(let r=0;r<a.length;r+=1)a[r].c();D(n,"placeholder","Zip Code"),o.disabled=i=t[1].length<3||t[1].length>5,D(o,"type","submit"),t[0]===void 0&&K(()=>t[5].call(f))},m(r,h){S(r,e,h),p(e,n),W(n,t[1]),p(e,l),p(e,o),p(o,c),p(e,u),p(e,f);for(let _=0;_<a.length;_+=1)a[_].m(f,null);Ne(f,t[0]),m||(d=[j(n,"input",t[4]),j(f,"change",t[5]),j(e,"submit",Ze(t[3]))],m=!0)},p(r,[h]){if(h&2&&n.value!==r[1]&&W(n,r[1]),h&2&&i!==(i=r[1].length<3||r[1].length>5)&&(o.disabled=i),h&4){s=r[2];let _;for(_=0;_<s.length;_+=1){const y=Te(r,s,_);a[_]?a[_].p(y,h):(a[_]=De(y),a[_].c(),a[_].m(f,null))}for(;_<a.length;_+=1)a[_].d(1);a.length=s.length}h&5&&Ne(f,r[0])},i:X,o:X,d(r){r&&v(e),oe(a,r),m=!1,G(d)}}}function yt(t){var e=document.createElement("textarea");return e.innerHTML=t,e.value}function vt(t,e,n){let l="",o=[],{link:c}=e;async function i(){var m='<?xml version="1.0" encoding="utf-8"?>    <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><ProcessWebServiceRequest xmlns="http://edupoint.com/webservices/"><userID>EdupointDistrictInfo</userID><password>Edup01nt</password><skipLoginLog>1</skipLoginLog><parent>0</parent><webServiceHandleName>HDInfoServices</webServiceHandleName><methodName>GetMatchingDistrictList</methodName><paramStr>&lt;Parms&gt;&lt;Key&gt;5E4B7859-B805-474B-A833-FDB15D205D40&lt;/Key&gt;&lt;MatchToDistrictZipCode&gt;'+l+"&lt;/MatchToDistrictZipCode&gt;&lt;/Parms&gt;</paramStr></ProcessWebServiceRequest></soap:Body></soap:Envelope>";const s=await fetch("https://support.edupoint.com/Service/HDInfoCommunication.asmx",{method:"POST",headers:{"Content-Type":"text/xml"},body:m});let a=Ue(yt(await s.text())).getElementsByTagName("DistrictInfo");n(2,o=[]);for(let r=0;r<a.length;r++)n(2,o=[...o,{name:a[r].attributes.Name.nodeValue,url:a[r].attributes.PvueURL.nodeValue}])}function u(){l=this.value,n(1,l)}function f(){c=it(this),n(0,c),n(2,o)}return t.$$set=m=>{"link"in m&&n(0,c=m.link)},[c,l,o,i,u,f]}class St extends se{constructor(e){super(),re(this,e,vt,wt,ie,{link:0})}}function Ct(t){let e,n,l,o,c,i,u,f,m,d,s,a,r,h;return{c(){e=g("form"),n=g("input"),l=w(),o=g("input"),c=w(),i=g("button"),u=$("Log In"),m=w(),d=g("label"),s=g("input"),a=$(`
    Remember Me`),D(n,"name","userID"),D(n,"placeholder","UserID"),D(o,"type","password"),D(o,"name","password"),D(o,"placeholder","Password"),i.disabled=f=!t[0].userid||!t[0].passwd||!t[0].url,D(i,"type","submit"),D(s,"type","checkbox")},m(_,y){S(_,e,y),p(e,n),W(n,t[0].userid),p(e,l),p(e,o),W(o,t[0].passwd),p(e,c),p(e,i),p(i,u),p(e,m),p(e,d),p(d,s),s.checked=t[0].remember,p(d,a),r||(h=[j(n,"input",t[2]),j(o,"input",t[3]),j(s,"change",t[4]),j(e,"submit",Ze(t[1]))],r=!0)},p(_,[y]){y&1&&n.value!==_[0].userid&&W(n,_[0].userid),y&1&&o.value!==_[0].passwd&&W(o,_[0].passwd),y&1&&f!==(f=!_[0].userid||!_[0].passwd||!_[0].url)&&(i.disabled=f),y&1&&(s.checked=_[0].remember)},i:X,o:X,d(_){_&&v(e),r=!1,G(h)}}}function Pt(t,e,n){let{student:l}=e;function o(){n(0,l.error=!1,l),n(0,l.loggedin=!0,l),l.remember&&localStorage.setItem("student",JSON.stringify(l))}function c(){l.userid=this.value,n(0,l)}function i(){l.passwd=this.value,n(0,l)}function u(){l.remember=this.checked,n(0,l)}return t.$$set=f=>{"student"in f&&n(0,l=f.student)},[l,o,c,i,u]}class Et extends se{constructor(e){super(),re(this,e,Pt,Ct,ie,{student:0})}}function Nt(t){const e=t-1;return e*e*e+1}function Me(t,{delay:e=0,duration:n=400,easing:l=Nt,x:o=0,y:c=0,opacity:i=0}={}){const u=getComputedStyle(t),f=+u.opacity,m=u.transform==="none"?"":u.transform,d=f*(1-i);return{delay:e,duration:n,easing:l,css:(s,a)=>`
			transform: ${m} translate(${(1-s)*o}px, ${(1-s)*c}px);
			opacity: ${f-d*a}`}}function Ie(t,e,n){const l=t.slice();return l[16]=e[n],l[18]=n,l}function Oe(t,e,n){const l=t.slice();return l[16]=e[n],l[18]=n,l}function At(t){let e,n,l,o,c,i,u,f,m=t[2],d=[];for(let s=0;s<m.length;s+=1)d[s]=$e(Ie(t,m,s));return{c(){e=g("div"),n=g("button"),n.textContent="All Grades",l=w();for(let s=0;s<d.length;s+=1)d[s].c();o=w(),c=g("button"),c.textContent="Log Out",D(n,"class","svelte-g1jx7g"),D(c,"class","svelte-g1jx7g"),D(e,"class","bar svelte-g1jx7g"),K(()=>t[15].call(e))},m(s,a){S(s,e,a),p(e,n),p(e,l);for(let r=0;r<d.length;r+=1)d[r].m(e,null);p(e,o),p(e,c),i=rt(e,t[15].bind(e)),u||(f=[j(n,"click",t[12]),j(c,"click",t[14])],u=!0)},p(s,a){if(a&5){m=s[2];let r;for(r=0;r<m.length;r+=1){const h=Ie(s,m,r);d[r]?d[r].p(h,a):(d[r]=$e(h),d[r].c(),d[r].m(e,o))}for(;r<d.length;r+=1)d[r].d(1);d.length=m.length}},i:X,o:X,d(s){s&&v(e),oe(d,s),i(),u=!1,G(f)}}}function Lt(t){let e,n,l,o,c,i=t[3]&&je(t);return{c(){i&&i.c(),e=w(),n=g("button"),n.textContent="☰",D(n,"class","svelte-g1jx7g")},m(u,f){i&&i.m(u,f),S(u,e,f),S(u,n,f),l=!0,o||(c=j(n,"click",t[11]),o=!0)},p(u,f){u[3]?i?(i.p(u,f),f&8&&F(i,1)):(i=je(u),i.c(),F(i,1),i.m(e.parentNode,e)):i&&(Se(),q(i,1,1,()=>{i=null}),Ce())},i(u){l||(F(i),l=!0)},o(u){q(i),l=!1},d(u){i&&i.d(u),u&&v(e),u&&v(n),o=!1,c()}}}function $e(t){let e,n=t[2][t[18]].title+"",l,o,c;function i(){return t[13](t[18])}return{c(){e=g("button"),l=$(n),D(e,"class","svelte-g1jx7g")},m(u,f){S(u,e,f),p(e,l),o||(c=j(e,"click",i),o=!0)},p(u,f){t=u,f&4&&n!==(n=t[2][t[18]].title+"")&&z(l,n)},d(u){u&&v(e),o=!1,c()}}}function je(t){let e,n,l,o,c,i,u,f,m,d,s,a,r,h,_,y,N,E,C,L,T,b,P,I=t[2],O=[];for(let M=0;M<I.length;M+=1)O[M]=Re(Oe(t,I,M));return{c(){e=g("nav"),n=g("button"),n.textContent="×",l=w(),o=g("br"),c=w(),i=g("br"),u=w(),f=g("button"),f.textContent="All Grades",m=w(),d=g("br"),s=w(),a=g("br"),r=w();for(let M=0;M<O.length;M+=1)O[M].c();h=w(),_=g("button"),_.textContent="Log Out",y=w(),N=g("br"),E=w(),C=g("br"),D(n,"class","svelte-g1jx7g"),D(f,"class","svelte-g1jx7g"),D(_,"class","svelte-g1jx7g"),D(e,"class","svelte-g1jx7g")},m(M,B){S(M,e,B),p(e,n),p(e,l),p(e,o),p(e,c),p(e,i),p(e,u),p(e,f),p(e,m),p(e,d),p(e,s),p(e,a),p(e,r);for(let A=0;A<O.length;A+=1)O[A].m(e,null);p(e,h),p(e,_),p(e,y),p(e,N),p(e,E),p(e,C),T=!0,b||(P=[j(n,"click",t[7]),j(f,"click",t[8]),j(_,"click",t[10])],b=!0)},p(M,B){if(B&13){I=M[2];let A;for(A=0;A<I.length;A+=1){const k=Oe(M,I,A);O[A]?O[A].p(k,B):(O[A]=Re(k),O[A].c(),O[A].m(e,h))}for(;A<O.length;A+=1)O[A].d(1);O.length=I.length}},i(M){T||(K(()=>{L||(L=Le(e,Me,{x:-500,opacity:1},!0)),L.run(1)}),T=!0)},o(M){L||(L=Le(e,Me,{x:-500,opacity:1},!1)),L.run(0),T=!1},d(M){M&&v(e),oe(O,M),M&&L&&L.end(),b=!1,G(P)}}}function Re(t){let e,n=t[2][t[18]].title+"",l,o,c,i,u,f,m;function d(){return t[9](t[18])}return{c(){e=g("button"),l=$(n),o=w(),c=g("br"),i=w(),u=g("br"),D(e,"class","svelte-g1jx7g")},m(s,a){S(s,e,a),p(e,l),S(s,o,a),S(s,c,a),S(s,i,a),S(s,u,a),f||(m=j(e,"click",d),f=!0)},p(s,a){t=s,a&4&&n!==(n=t[2][t[18]].title+"")&&z(l,n)},d(s){s&&v(e),s&&v(o),s&&v(c),s&&v(i),s&&v(u),f=!1,m()}}}function Tt(t){let e,n,l,o,c,i;K(t[6]);const u=[Lt,At],f=[];function m(d,s){return d[4]<d[5]?0:1}return e=m(t),n=f[e]=u[e](t),{c(){n.c(),l=ve()},m(d,s){f[e].m(d,s),S(d,l,s),o=!0,c||(i=j(window,"resize",t[6]),c=!0)},p(d,[s]){let a=e;e=m(d),e===a?f[e].p(d,s):(Se(),q(f[a],1,1,()=>{f[a]=null}),Ce(),n=f[e],n?n.p(d,s):(n=f[e]=u[e](d),n.c()),F(n,1),n.m(l.parentNode,l))},i(d){o||(F(n),o=!0)},o(d){q(n),o=!1},d(d){f[e].d(d),d&&v(l),c=!1,i()}}}function Dt(t,e,n){let{selected:l}=e,{classes:o}=e,{student:c}=e,i,u,f;function m(){n(4,u=window.innerWidth)}const d=()=>n(3,i=!1),s=()=>{n(0,l=-1),n(3,i=!1)},a=C=>{n(0,l=C),n(3,i=!1)},r=()=>{n(1,c={}),localStorage.clear()},h=()=>n(3,i=!0),_=()=>{n(0,l=-1)},y=C=>{n(0,l=C)},N=()=>{n(1,c={}),localStorage.clear()};function E(){f=this.offsetWidth,n(5,f)}return t.$$set=C=>{"selected"in C&&n(0,l=C.selected),"classes"in C&&n(2,o=C.classes),"student"in C&&n(1,c=C.student)},[l,c,o,i,u,f,m,d,s,a,r,h,_,y,N,E]}class Mt extends se{constructor(e){super(),re(this,e,Dt,Tt,ie,{selected:0,classes:2,student:1})}}function Ve(t,e,n){const l=t.slice();return l[14]=e[n],l[15]=e,l[16]=n,l}function ze(t,e,n){const l=t.slice();return l[11]=e[n],l}function It(t){let e,n=t[1][t[2]].title+"",l,o,c,i=t[1][t[2]].letter+"",u,f,m,d=t[1][t[2]].percent+"",s,a,r,h,_,y,N,E,C,L,T,b,P,I,O,M,B=t[1][t[2]].assignments,A=[];for(let k=0;k<B.length;k+=1)A[k]=Be(Ve(t,B,k));return{c(){e=g("h1"),l=$(n),o=w(),c=g("h1"),u=$(i),f=w(),m=g("h1"),s=$(d),a=$("%"),r=w(),h=g("button"),h.textContent="Add New All Tasks Assignment",_=w(),y=g("button"),y.textContent="Add New Practice Preparation Assignment",N=w(),E=g("table"),C=g("th"),C.textContent="Assignment",L=w(),T=g("th"),T.textContent="Type",b=w(),P=g("th"),P.textContent="Score",I=w();for(let k=0;k<A.length;k+=1)A[k].c()},m(k,R){S(k,e,R),p(e,l),S(k,o,R),S(k,c,R),p(c,u),S(k,f,R),S(k,m,R),p(m,s),p(m,a),S(k,r,R),S(k,h,R),S(k,_,R),S(k,y,R),S(k,N,R),S(k,E,R),p(E,C),p(E,L),p(E,T),p(E,b),p(E,P),p(E,I);for(let V=0;V<A.length;V+=1)A[V].m(E,null);O||(M=[j(h,"click",t[5]),j(y,"click",t[6])],O=!0)},p(k,R){if(R&6&&n!==(n=k[1][k[2]].title+"")&&z(l,n),R&6&&i!==(i=k[1][k[2]].letter+"")&&z(u,i),R&6&&d!==(d=k[1][k[2]].percent+"")&&z(s,d),R&6){B=k[1][k[2]].assignments;let V;for(V=0;V<B.length;V+=1){const Pe=Ve(k,B,V);A[V]?A[V].p(Pe,R):(A[V]=Be(Pe),A[V].c(),A[V].m(E,null))}for(;V<A.length;V+=1)A[V].d(1);A.length=B.length}},d(k){k&&v(e),k&&v(o),k&&v(c),k&&v(f),k&&v(m),k&&v(r),k&&v(h),k&&v(_),k&&v(y),k&&v(N),k&&v(E),oe(A,k),O=!1,G(M)}}}function Ot(t){let e,n,l,o,c,i,u,f,m,d=t[1],s=[];for(let r=0;r<d.length;r+=1)s[r]=Xe(ze(t,d,r));let a=null;return d.length||(a=Fe()),{c(){e=g("table"),n=g("th"),n.textContent="Class",l=w(),o=g("th"),o.textContent="Period",c=w(),i=g("th"),i.textContent="Teacher",u=w(),f=g("th"),f.textContent="Grade",m=w();for(let r=0;r<s.length;r+=1)s[r].c();a&&a.c()},m(r,h){S(r,e,h),p(e,n),p(e,l),p(e,o),p(e,c),p(e,i),p(e,u),p(e,f),p(e,m);for(let _=0;_<s.length;_+=1)s[_].m(e,null);a&&a.m(e,null)},p(r,h){if(h&2){d=r[1];let _;for(_=0;_<d.length;_+=1){const y=ze(r,d,_);s[_]?s[_].p(y,h):(s[_]=Xe(y),s[_].c(),s[_].m(e,null))}for(;_<s.length;_+=1)s[_].d(1);s.length=d.length,!d.length&&a?a.p(r,h):d.length?a&&(a.d(1),a=null):(a=Fe(),a.c(),a.m(e,null))}},d(r){r&&v(e),oe(s,r),a&&a.d()}}}function Be(t){let e,n,l=t[14].name+"",o,c,i,u=t[14].type+"",f,m,d,s,a,r,h,_,y=(t[14].score/t[14].total*100).toFixed(0)+"",N,E,C,L,T,b,P,I;function O(){t[7].call(s,t[15],t[16])}function M(){t[8].call(r,t[15],t[16])}function B(){return t[9](t[16])}return{c(){e=g("tr"),n=g("td"),o=$(l),c=w(),i=g("td"),f=$(u),m=w(),d=g("td"),s=g("input"),a=$("/"),r=g("input"),h=w(),_=g("td"),N=$(y),E=$("%"),C=w(),L=g("td"),T=g("button"),T.textContent="Remove",b=w(),D(s,"type","number"),D(s,"size","6"),D(r,"type","number"),D(r,"size","6")},m(A,k){S(A,e,k),p(e,n),p(n,o),p(e,c),p(e,i),p(i,f),p(e,m),p(e,d),p(d,s),W(s,t[14].score),p(d,a),p(d,r),W(r,t[14].total),p(e,h),p(e,_),p(_,N),p(_,E),p(e,C),p(e,L),p(L,T),p(e,b),P||(I=[j(s,"input",O),j(r,"input",M),j(T,"click",B)],P=!0)},p(A,k){t=A,k&6&&l!==(l=t[14].name+"")&&z(o,l),k&6&&u!==(u=t[14].type+"")&&z(f,u),k&6&&de(s.value)!==t[14].score&&W(s,t[14].score),k&6&&de(r.value)!==t[14].total&&W(r,t[14].total),k&6&&y!==(y=(t[14].score/t[14].total*100).toFixed(0)+"")&&z(N,y)},d(A){A&&v(e),P=!1,G(I)}}}function Fe(t){let e,n,l;return{c(){e=g("br"),n=w(),l=g("p"),l.textContent="Loading ... ",D(l,"class","load svelte-12ueb6a")},m(o,c){S(o,e,c),S(o,n,c),S(o,l,c)},p:X,d(o){o&&v(e),o&&v(n),o&&v(l)}}}function Xe(t){let e,n,l=t[11].title+"",o,c,i,u=t[11].period+"",f,m,d,s=t[11].teacher+"",a,r,h,_=t[11].letter+"",y,N,E,C=t[11].percent+"",L,T,b;return{c(){e=g("tr"),n=g("td"),o=$(l),c=w(),i=g("td"),f=$(u),m=w(),d=g("td"),a=$(s),r=w(),h=g("td"),y=$(_),N=w(),E=g("td"),L=$(C),T=$("%"),b=w()},m(P,I){S(P,e,I),p(e,n),p(n,o),p(e,c),p(e,i),p(i,f),p(e,m),p(e,d),p(d,a),p(e,r),p(e,h),p(h,y),p(e,N),p(e,E),p(E,L),p(E,T),p(e,b)},p(P,I){I&2&&l!==(l=P[11].title+"")&&z(o,l),I&2&&u!==(u=P[11].period+"")&&z(f,u),I&2&&s!==(s=P[11].teacher+"")&&z(a,s),I&2&&_!==(_=P[11].letter+"")&&z(y,_),I&2&&C!==(C=P[11].percent+"")&&z(L,C)},d(P){P&&v(e)}}}function $t(t){let e,n,l,o,c,i;function u(r){t[3](r)}function f(r){t[4](r)}let m={classes:t[1]};t[2]!==void 0&&(m.selected=t[2]),t[0]!==void 0&&(m.student=t[0]),e=new Mt({props:m}),Z.push(()=>te(e,"selected",u,t[2])),Z.push(()=>te(e,"student",f,t[0]));function d(r,h){return r[2]==-1?Ot:It}let s=d(t),a=s(t);return{c(){me(e.$$.fragment),o=w(),a.c(),c=ve()},m(r,h){ne(e,r,h),S(r,o,h),a.m(r,h),S(r,c,h),i=!0},p(r,[h]){const _={};h&2&&(_.classes=r[1]),!n&&h&4&&(n=!0,_.selected=r[2],ee(()=>n=!1)),!l&&h&1&&(l=!0,_.student=r[0],ee(()=>l=!1)),e.$set(_),s===(s=d(r))&&a?a.p(r,h):(a.d(1),a=s(r),a&&(a.c(),a.m(c.parentNode,c)))},i(r){i||(F(e.$$.fragment,r),i=!0)},o(r){q(e.$$.fragment,r),i=!1},d(r){le(e,r),r&&v(o),a.d(r),r&&v(c)}}}function jt(t){var e=document.createElement("textarea");return e.innerHTML=t,e.value.replace("amp;","")}function Rt(t){for(let e in t){t[e].allTask=0,t[e].totalAllTask=0,t[e].practice=0,t[e].totalPractice=0;for(let n in t[e].assignments)t[e].assignments[n].score!==null&&(t[e].assignments[n].type==="All Tasks / Assessments"?(t[e].allTask+=t[e].assignments[n].score,t[e].totalAllTask+=t[e].assignments[n].total):t[e].assignments[n].type==="Practice / Preparation"&&(t[e].practice+=t[e].assignments[n].score,t[e].totalPractice+=t[e].assignments[n].total));t[e].percent=((t[e].allTask/t[e].totalAllTask*.9+t[e].practice/t[e].totalPractice*.1)*100).toFixed(2)}}function Vt(t){for(let e in t){let n=74-Math.floor(t[e].percent/10);n<65?n=65:n>69&&(n=69),t[e].letter=String.fromCharCode(n)}}function zt(t,e,n){let{student:l}=e,o=-1;async function c(){const h='<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><ProcessWebServiceRequest xmlns="http://edupoint.com/webservices/"><userID>'+l.userid+"</userID><password>"+l.passwd+"</password><skipLoginLog>1</skipLoginLog><parent>0</parent><ReportingPeriods>1</ReportingPeriods><webServiceHandleName>PXPWebServices</webServiceHandleName><methodName>Gradebook</methodName><paramStr>&lt;Parms&gt;&lt;ChildIntID&gt;0&lt;/ChildIntID&gt;&lt;/Parms&gt;</paramStr></ProcessWebServiceRequest></soap:Body></soap:Envelope>";let y=await(await fetch(l.url+"/Service/PXPCommunication.asmx",{method:"POST",headers:{"Content-Type":"text/xml"},body:h})).text();y.match("ERROR")&&(n(0,l.error=!0,l),n(0,l.loggedin=!1,l));let E=Ue(jt(y)).getElementsByTagName("Course");for(let C=0;C<E.length;C++){let L=[],T=E[C].getElementsByTagName("Assignment");for(let b=0;b<T.length;b++){L.push({name:T[b].attributes.Measure.nodeValue,type:T[b].attributes.Type.nodeValue});let P=T[b].attributes.Points.nodeValue.search("/");P!=-1?(L[b].score=parseFloat(T[b].attributes.Points.nodeValue.substring(0,P)),L[b].total=parseFloat(T[b].attributes.Points.nodeValue.substring(P+1))):(L[b].total=parseFloat(T[b].attributes.Points.nodeValue),L[b].score=null)}n(1,i=[...i,{title:E[C].attributes.Title.nodeValue.substring(0,E[C].attributes.Title.nodeValue.indexOf("(")),period:E[C].attributes.Period.nodeValue,teacher:E[C].attributes.Staff.nodeValue,letter:E[C].children[0].children[0].attributes.CalculatedScoreString.nodeValue,percent:E[C].children[0].children[0].attributes.CalculatedScoreRaw.nodeValue,assignments:L}])}}let i=[];pt(async()=>{c()});function u(h){o=h,n(2,o)}function f(h){l=h,n(0,l)}const m=()=>{n(1,i[o].assignments=[{name:"New Assignment",type:"All Tasks / Assessments",score:10,total:10},...i[o].assignments],i)},d=()=>{n(1,i[o].assignments=[{name:"New Assignment",type:"Practice / Preparation",score:10,total:10},...i[o].assignments],i)};function s(h,_){h[_].score=de(this.value),n(1,i),n(2,o)}function a(h,_){h[_].total=de(this.value),n(1,i),n(2,o)}const r=h=>{n(1,i[o].assignments=[...i[o].assignments.slice(0,h),...i[o].assignments.slice(h+1)],i)};return t.$$set=h=>{"student"in h&&n(0,l=h.student)},t.$$.update=()=>{t.$$.dirty&2&&Rt(i),t.$$.dirty&2&&Vt(i)},[l,i,o,u,f,m,d,s,a,r]}class Bt extends se{constructor(e){super(),re(this,e,zt,$t,ie,{student:0})}}function Ft(t){let e,n,l;function o(i){t[3](i)}let c={};return t[0]!==void 0&&(c.student=t[0]),e=new Bt({props:c}),Z.push(()=>te(e,"student",o,t[0])),{c(){me(e.$$.fragment)},m(i,u){ne(e,i,u),l=!0},p(i,u){const f={};!n&&u&1&&(n=!0,f.student=i[0],ee(()=>n=!1)),e.$set(f)},i(i){l||(F(e.$$.fragment,i),l=!0)},o(i){q(e.$$.fragment,i),l=!1},d(i){le(e,i)}}}function Xt(t){let e,n,l,o,c,i,u,f,m,d,s,a,r,h,_,y,N=t[0].error&&Ge();function E(b){t[1](b)}let C={};t[0].url!==void 0&&(C.link=t[0].url),f=new St({props:C}),Z.push(()=>te(f,"link",E,t[0].url));function L(b){t[2](b)}let T={};return t[0]!==void 0&&(T.student=t[0]),a=new Et({props:T}),Z.push(()=>te(a,"student",L,t[0])),{c(){e=g("h1"),e.textContent="GradePlex",n=w(),l=g("p"),l.textContent="An alternative to StudentVue",o=w(),c=g("h3"),c.textContent="Log In",i=w(),N&&N.c(),u=w(),me(f.$$.fragment),d=g("br"),s=w(),me(a.$$.fragment),h=w(),_=g("a"),_.textContent="Github",D(_,"href","https://github.com/arshakir")},m(b,P){S(b,e,P),S(b,n,P),S(b,l,P),S(b,o,P),S(b,c,P),S(b,i,P),N&&N.m(b,P),S(b,u,P),ne(f,b,P),S(b,d,P),S(b,s,P),ne(a,b,P),S(b,h,P),S(b,_,P),y=!0},p(b,P){b[0].error?N||(N=Ge(),N.c(),N.m(u.parentNode,u)):N&&(N.d(1),N=null);const I={};!m&&P&1&&(m=!0,I.link=b[0].url,ee(()=>m=!1)),f.$set(I);const O={};!r&&P&1&&(r=!0,O.student=b[0],ee(()=>r=!1)),a.$set(O)},i(b){y||(F(f.$$.fragment,b),F(a.$$.fragment,b),y=!0)},o(b){q(f.$$.fragment,b),q(a.$$.fragment,b),y=!1},d(b){b&&v(e),b&&v(n),b&&v(l),b&&v(o),b&&v(c),b&&v(i),N&&N.d(b),b&&v(u),le(f,b),b&&v(d),b&&v(s),le(a,b),b&&v(h),b&&v(_)}}}function Ge(t){let e;return{c(){e=g("p"),e.textContent="Error logging in try again"},m(n,l){S(n,e,l)},d(n){n&&v(e)}}}function Gt(t){let e,n,l,o;const c=[Xt,Ft],i=[];function u(f,m){return f[0].loggedin?1:0}return e=u(t),n=i[e]=c[e](t),{c(){n.c(),l=ve()},m(f,m){i[e].m(f,m),S(f,l,m),o=!0},p(f,[m]){let d=e;e=u(f),e===d?i[e].p(f,m):(Se(),q(i[d],1,1,()=>{i[d]=null}),Ce(),n=i[e],n?n.p(f,m):(n=i[e]=c[e](f),n.c()),F(n,1),n.m(l.parentNode,l))},i(f){o||(F(n),o=!0)},o(f){q(n),o=!1},d(f){i[e].d(f),f&&v(l)}}}function Wt(t,e,n){let l=JSON.parse(localStorage.getItem("student"))||{};function o(u){t.$$.not_equal(l.url,u)&&(l.url=u,n(0,l))}function c(u){l=u,n(0,l)}function i(u){l=u,n(0,l)}return[l,o,c,i]}class qt extends se{constructor(e){super(),re(this,e,Wt,Gt,ie,{})}}new qt({target:document.getElementById("app")});
