var UJET=function(){"use strict";function I(t){let e=!1;const o=[],r={},s={},n={};function i(c){if(c=JSON.parse(c),c.callbackId){const[a,w]=s[c.callbackId];c.type==="resolve"&&a?a(c.data):c.type==="reject"&&w&&w(c.error)}else if(/^on:/.test(c.type)){const a=c.type.slice(3);a==="created"?m():a==="db:set"&&L(c.data);const w=r[a];w&&w.forEach(b=>b(c.data))}else{const a=n[c.type];a&&a(c.data)}}function u(c,a,w){if(!e){o.push([c,a,w]);return}if(a){const b=Math.random().toString(36).slice(2)+"_"+ +new Date;c.callbackId=b,s[b]=[a,w]}t(JSON.stringify(c),location.origin)}function m(){e||(e=!0,o.forEach((w,b,be)=>{u(w,b,be)}));const c=document.documentElement.clientWidth,a=document.documentElement.clientHeight;u({type:"resize",data:{width:c,height:a}})}function d(c,a){r[c]?r[c].push(a):r[c]=[a]}function f(c,a){a?r[c]&&(r[c]=r[c].filter(w=>w!==a)):r[c]=[]}function j(c,a){n[c]=a}function he(c,a){u({type:c,data:a})}function fe(c,a){return new Promise((w,b)=>{u({type:c,data:a},w,b)})}return j("hello",c=>{try{localStorage.setItem("ujet:version",c.version)}catch{}}),{on:d,off:f,send:he,promiseSend:fe,receiveMessage:i,receive:j}}function A(t){return JSON.stringify({data:t,type:"hello",origin:location.origin})}function L(t){Object.keys(t).forEach(e=>{try{localStorage.setItem(`ujet:${e}`,t[e])}catch{}})}const R=`
position:fixed;
z-index:99999;
border-radius: 50%;
box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 5px 10px 20px rgba(0, 0, 0, 0.05), 5px 10px 10px rgba(0, 0, 0, 0.05);
`,H=`
border:0;
background:transparent;
vertical-align:middle;
width: 5rem;
height: 5rem;
`,M=`
:root {
  --background-color: #0A68B1;
  --icon-color: #FFFFFF;
  --count-color: #EE0000;
  --count-border: #FFFFFF;
  --focus-border-color: var(--icon-color, #FFFFFF);
  --focus-outline-color: var(--background-color, #0A68B1);
}

html, body {
  margin: 0;
  padding: 0;
}

body:focus-within {
  padding: 2px;
}
.count {
  position: absolute;
  top: 0;
  right: 0;
  color: white;
  font: normal 14px/22px Helvetica Neue, sans-serif;
  width: 1.375rem;
  height: 1.375rem;
  border: 2px solid var(--count-border);
  text-align: center;
  border-radius: 50%;
  background-color: var(--count-color);
}
.open .count,
.count[data-count="0"] {
  display: none;
}
.wrap button {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: var(--background-color);
  color: var(--icon-color);
  cursor: pointer;
  border: 1px solid var(--background-color);
  outline: 0;
}
.wrap button:focus {
  border-color: var(--focus-border-color);
  outline: 2px solid var(--focus-outline-color);
}
.wrap svg,
.wrap img {
  position: absolute;
  top: 0;
  left: 0;
  fill: currentColor;
  width: 100%;
  height: 100%;
  vertical-align: middle;
  transform: scale(0);
  opacity: 0;
  transition: all 0.2s ease;
}
.close #chat,
.open #minimize {
  opacity: 1;
}
.close img#chat,
.open img#minimize {
  transform: scale(1);
}
.close svg#chat {
  transform: scale(0.46);
}
.open svg#minimize {
  transform: scale(0.32);
}
.loading #loader {
  opacity: 1;
  transform: rotate(0) scale(0.46);
  animation: loop 2s linear infinite;
}
@keyframes loop {
  0% {
    transform: rotate(0) scale(0.46);
  }
  100% {
    transform: rotate(360deg) scale(0.46);
  }
}
`,F='<svg id="chat" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path d="M14.455 144.91l8.136-.352a7.995 7.995 0 0 1 5.879 2.224 8.036 8.036 0 0 1 2.468 5.793V179.4c0 1.93 2.45 2.746 3.606 1.2l20.733-27.813a17.994 17.994 0 0 1 14.43-7.251h111.326c10.318 0 18.675-8.378 18.675-18.722V36.242c0-10.343-8.357-18.722-18.675-18.722H18.52C8.203 17.52-.155 25.9-.155 36.242v94.637a14.057 14.057 0 0 0 4.319 10.14 13.992 13.992 0 0 0 10.291 3.891z"/></svg>',B='<svg id="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>',V='<svg id="minimize" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path d="M106.097 154.501a8.63 8.63 0 0 1-12.082 0L2.696 64.99a8.632 8.632 0 0 1-.086-12.24l7.068-7.113a8.63 8.63 0 0 1 12.143-.095l72.211 70.35a8.63 8.63 0 0 0 12.048 0l72.21-70.358a8.63 8.63 0 0 1 12.144.095l7.06 7.112a8.632 8.632 0 0 1-.087 12.249l-91.31 89.511z"/></svg>';function q(t,e){const o=e.style||{},r=t.contentDocument.documentElement,s=Object.keys(o).map(f=>`${f}:${o[f]};`).join("");let n=F,i=V,u="";e.chatIcon&&(n=`<img id="chat" src=${e.chatIcon} alt="Chat" />`,u="Click to chat"),e.closeIcon&&(i=`<img id="minimize" src=${e.closeIcon} alt="Close" />`,u="Click to minimize");const m=`
  <div class="wrap"><button aria-label="${u}">${n}${i}${B}</button></div>
  <div class="count" data-count="0">0</div>
  `,d=e.cssText||"";return r.innerHTML=`<head>
  <style>${M}${d}</style></head>
  <body class="close" style="${s}">${m}</body>`,r}function N(t,{bottom:e="50px",right:o="50px"}={}){const r=document.createElement("div");r.id="ujet-launcher",t.appendChild(r),r.style.cssText="display:none";const s=document.createElement("iframe");return s.style.cssText=H,r.appendChild(s),r.style.cssText=`${R}bottom:${e};right:${o};`,r}function y(t,e,o){const r=e.querySelector("body");let s=!1;t.on("ready",()=>{s=!0,r.className=t.status}),t.registerHook("loading",()=>{r.className="loading"}),t.registerHook("open",()=>{r.className="open"}),t.registerHook("close",()=>{r.className="close"});const n=e.querySelector("button"),i=()=>{!s&&r.className==="loading"||(t.status==="open"?t.close():t.open())};n.addEventListener("click",i),t.registerHook("destroy",()=>{n.removeEventListener("click",i),o.parentElement.removeChild(o)});const u=e.querySelector(".count"),m=(d=0)=>{d>99&&(d=99),u.textContent=d,u.setAttribute("data-count",d)};t.on("unread",m)}function P(t,e={}){let o,r,s=document.querySelector("#ujet-launcher");s?(r=s.querySelector("iframe"),o=r.contentDocument.documentElement,y(t,o,s)):(s=N(t.$el,e),r=s.querySelector("iframe"),r.contentDocument.readyState==="complete"&&(o=q(r,e),y(t,o,s)),r.onload=()=>{o=q(r,e),y(t,o,s)})}const $="https://websdk.ujet.co/v2/proactive.html",g={timestamp:+new Date,href:window.location.href,interval:24*60*60};function W(t,e){const o=t.options,r=o.proactiveIframe||$||e;o.proactiveInterval&&(g.interval=o.proactiveInterval);const s=new MessageChannel,n=document.createElement("iframe");n.id="ujet-proactive",n.src=r,n.style="display:none",n.addEventListener("load",()=>{const i="*";n.contentWindow.postMessage(JSON.stringify(o),i,[s.port2])}),s.port1.onmessage=i=>{const u=G(JSON.parse(i.data)||[]);if(u){const m=u.stay_time*1e3,d=Math.max(m-(new Date-g.timestamp),0);setTimeout(()=>{t.start({trigger:u});const f=`ujet:trigger:${u.id}`;try{localStorage.setItem(f,parseInt(+new Date/1e3))}catch(j){console.error(j)}},d)}},t.$el.appendChild(n)}function Y(t,e){const o=t.keywords_included||[],r=t.keywords_excluded||[];if(!o.length&&!r.length)return!0;const s=o.filter(i=>e.indexOf(i)!==-1).length,n=r.filter(i=>e.indexOf(i)===-1).length;return!!s||!!n}function U(t,e){return t==="visitor_type_new"?e:t==="visitor_type_returning"?!e:!0}function Z(t,e){return t.filter(r=>r.lang===e).length>0}function J(t){const e=`ujet:trigger:${t}`;try{const o=parseInt(localStorage.getItem(e),10);return new Date/1e3-o<g.interval}catch{return!1}}function K(){try{const t=localStorage.getItem("ujet:visits");return t?parseInt(t,10):0}catch{return 0}}function Q(t){try{localStorage.setItem("ujet:visits",t)}catch{}}function G(t){if(!Array.isArray(t)||!t.length)return null;let e="en";try{e=localStorage.getItem("ujet:lang")||"en"}catch{}const o=K(),r=o===0,s=o+1;return Q(s),t.filter(n=>{const i=Y(n,g.href),u=U(n.visitor_type,r),m=Z(n.messages,e),d=s>=n.page_visit_count,f=!J(n.id);return i&&u&&m&&d&&f}).sort((n,i)=>n.stay_time-i.stay_time)[0]}function X(){return new Promise(t=>{const e=document.createElement("script");e.src="https://js.cobrowse.io/CobrowseIO.js",e.async=1,e.onload=function(){t(window.CobrowseIO)};const o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(e,o)})}let S=!1;async function x(t={}){if(!t.license)return null;window.CobrowseIO||await X(),window.CobrowseIO.license=t.license;let e=[];return t.trustedOrigins&&(e=e.concat(t.trustedOrigins)),e.push(window.location.origin),e.push("https://websdk.ujet.co"),window.CobrowseIO.trustedOrigins=e,["api","capabilities","registration","redactedViews","unredactedViews"].forEach(r=>{t[r]!==void 0&&(window.CobrowseIO[r]=t[r])}),S||(await window.CobrowseIO.client(),window.CobrowseIO.start(),S=!0),window.CobrowseIO}function E(){var t;(t=window.CobrowseIO)!=null&&t.currentSession&&window.CobrowseIO.currentSession.end()}function z(){return new Promise(t=>{setTimeout(()=>{window.CobrowseIO.createSessionCode().then(e=>{t(e)})})})}const D={en:{ujet_cobrowse_request:"Request Co-browse",ujet_cobrowse_request_confirm_title:"Co-browse Session Request",ujet_cobrowse_request_confirm_description:"Do you want to share your current screen with the agent?",ujet_cobrowse_end_session:"End Co-browse Session",ujet_cobrowse_remote_access_confirm_title:"Remote Access Request",ujet_cobrowse_remote_access_confirm_description:"The agent would like to have access to your currently shared screen to further assist you. Do you want to allow this?",ujet_cobrowse_screenshare_confirm_title:"Screen Share Request",ujet_cobrowse_screenshare_confirm_description:"Do you want to share your full screen with the agent? The agent will not be able to control anything on the screen.",ujet_allow:"Allow",ujet_deny:"Deny"},"en-CA":{ujet_cobrowse_request:"Request Co-browse",ujet_cobrowse_request_confirm_title:"Co-browse Session Request",ujet_cobrowse_request_confirm_description:"Do you want to share your current screen with the agent?",ujet_cobrowse_end_session:"End Co-browse Session",ujet_cobrowse_remote_access_confirm_title:"Remote Access Request",ujet_cobrowse_remote_access_confirm_description:"The agent would like to have access to your currently shared screen to further assist you. Do you want to allow this?",ujet_cobrowse_screenshare_confirm_title:"Screen Share Request",ujet_cobrowse_screenshare_confirm_description:"Do you want to share your full screen with the agent? The agent will not be able to control anything on the screen.",ujet_allow:"Allow",ujet_deny:"Deny"},"en-GB":{ujet_cobrowse_request:"Request Co-browse",ujet_cobrowse_request_confirm_title:"Co-browse Session Request",ujet_cobrowse_request_confirm_description:"Do you want to share your current screen with the agent?",ujet_cobrowse_end_session:"End Co-browse Session",ujet_cobrowse_remote_access_confirm_title:"Remote Access Request",ujet_cobrowse_remote_access_confirm_description:"The agent would like to have access to your currently shared screen to further assist you. Do you want to allow this?",ujet_cobrowse_screenshare_confirm_title:"Screen Share Request",ujet_cobrowse_screenshare_confirm_description:"Do you want to share your full screen with the agent? The agent will not be able to control anything on the screen.",ujet_allow:"Allow",ujet_deny:"Deny"},"en-AU":{ujet_cobrowse_request:"Request Co-browse",ujet_cobrowse_request_confirm_title:"Co-browse Session Request",ujet_cobrowse_request_confirm_description:"Do you want to share your current screen with the agent?",ujet_cobrowse_end_session:"End Co-browse Session",ujet_cobrowse_remote_access_confirm_title:"Remote Access Request",ujet_cobrowse_remote_access_confirm_description:"The agent would like to have access to your currently shared screen to further assist you. Do you want to allow this?",ujet_cobrowse_screenshare_confirm_title:"Screen Share Request",ujet_cobrowse_screenshare_confirm_description:"Do you want to share your full screen with the agent? The agent will not be able to control anything on the screen.",ujet_allow:"Allow",ujet_deny:"Deny"},es:{ujet_cobrowse_request:"Solicitud de conavegación",ujet_cobrowse_request_confirm_title:"Solicitud de sesión de conavegación",ujet_cobrowse_request_confirm_description:"¿Desea compartir su pantalla actual con el agente?",ujet_cobrowse_end_session:"Fin de la sesión de conavegación",ujet_cobrowse_remote_access_confirm_title:"Solicitud de acceso remoto",ujet_cobrowse_remote_access_confirm_description:"El agente desea tener acceso a su pantalla actual compartida para seguir asistiéndole. ¿Desea permitirlo?",ujet_cobrowse_screenshare_confirm_title:"Solicitud de compartir pantalla",ujet_cobrowse_screenshare_confirm_description:"¿Desea compartir su pantalla completa con el agente? El agente no podrá controlar nada de la pantalla.",ujet_allow:"Permitir",ujet_deny:"Denegar"},"es-MX":{ujet_cobrowse_request:"Solicitar Co-navegación",ujet_cobrowse_request_confirm_title:"Solicitud de Sesión de Co-navegación",ujet_cobrowse_request_confirm_description:"¿Quiere compartir su pantalla actual con el agente?",ujet_cobrowse_end_session:"Fin de la sesión de co-navegación",ujet_cobrowse_remote_access_confirm_title:"Solicitud de acceso remoto",ujet_cobrowse_remote_access_confirm_description:"El agente desea tener acceso a su pantalla actualmente compartida para poder ayudarlo. ¿Quiere permitirlo?",ujet_cobrowse_screenshare_confirm_title:"Petición de pantalla compartida",ujet_cobrowse_screenshare_confirm_description:"¿Quiere compartir su pantalla completa con el agente? El agente no podrá controlar nada en la pantalla.",ujet_allow:"Permitir",ujet_deny:"Denegar"},fr:{ujet_cobrowse_request:"Demander la co-navigation",ujet_cobrowse_request_confirm_title:"Demande de session de co-navigation",ujet_cobrowse_request_confirm_description:"Voulez-vous partager votre écran actuel avec l'agent ?",ujet_cobrowse_end_session:"Terminer la session de co-navigation",ujet_cobrowse_remote_access_confirm_title:"Demande d'accès à distance",ujet_cobrowse_remote_access_confirm_description:"L'agent souhaite avoir accès à l'écran que vous partagez actuellement pour mieux vous aider. Voulez-vous l'y autoriser ?",ujet_cobrowse_screenshare_confirm_title:"Demande de partage d'écran",ujet_cobrowse_screenshare_confirm_description:"Voulez-vous partager votre écran complet avec l'agent ? L'agent ne sera pas en mesure de contrôler quoi que ce soit sur l'écran.",ujet_allow:"Autoriser",ujet_deny:"Refuser"},"fr-CA":{ujet_cobrowse_request:"Demande de co-navigation",ujet_cobrowse_request_confirm_title:"Demande de session co-navigation",ujet_cobrowse_request_confirm_description:"Voulez-vous partager votre écran actuel avec l'agent?",ujet_cobrowse_end_session:"Fin de la session de co-navigation",ujet_cobrowse_remote_access_confirm_title:"Demande d'accès à distance",ujet_cobrowse_remote_access_confirm_description:"L'agent souhaiterait avoir accès à votre écran actuellement partagé pour mieux vous aider. Voulez-vous l'autoriser?",ujet_cobrowse_screenshare_confirm_title:"Demande de partage d'écran",ujet_cobrowse_screenshare_confirm_description:"Voulez-vous partager votre écran complet avec l'agent? L'agent ne sera pas en mesure de contrôler quoi que ce soit sur l'écran.",ujet_allow:"Autoriser",ujet_deny:"Refuser"},de:{ujet_cobrowse_request:"Co-Browsing anfordern",ujet_cobrowse_request_confirm_title:"Co-Browsing-Sitzungsanfrage",ujet_cobrowse_request_confirm_description:"Möchten Sie Ihren aktuellen Bildschirm für den Agenten freigeben?",ujet_cobrowse_end_session:"Co-Browsing-Sitzung beenden",ujet_cobrowse_remote_access_confirm_title:"Fernzugriff-Anfrage",ujet_cobrowse_remote_access_confirm_description:"Der Agent möchte Zugriff auf Ihren aktuell freigegebenen Bildschirm erhalten, um Ihnen weiterhelfen zu können. Möchten Sie dies erlauben?",ujet_cobrowse_screenshare_confirm_title:"Bildschirmfreigabe",ujet_cobrowse_screenshare_confirm_description:"Möchten Sie Ihren gesamten Bildschirm für den Agenten freigeben? Der Agent ist dadurch nicht in der Lage, Elemente auf Ihrem Bildschirm zu steuern.",ujet_allow:"Erlauben",ujet_deny:"Verweigern"},ja:{ujet_cobrowse_request:"共同ブラウジングをリクエスト",ujet_cobrowse_request_confirm_title:"共同ブラウジングセッションリクエスト",ujet_cobrowse_request_confirm_description:"現在の画面を担当者と共有したいですか。",ujet_cobrowse_end_session:"共同ブラウジングセッションを終了",ujet_cobrowse_remote_access_confirm_title:"リモートアクセスリクエスト",ujet_cobrowse_remote_access_confirm_description:"担当者は、お客様をさらにお手伝いするために、現在共有中の画面へのアクセスを希望しています。許可しますか。",ujet_cobrowse_screenshare_confirm_title:"画面共有リクエスト",ujet_cobrowse_screenshare_confirm_description:"画面全体を担当者と共有したいですか。担当者は画面上で一切の操作ができません。",ujet_allow:"許可",ujet_deny:"拒否"},ko:{ujet_cobrowse_request:"코브라우징 요청",ujet_cobrowse_request_confirm_title:"코브라우징 세션 요청",ujet_cobrowse_request_confirm_description:"현재 화면을 상담원과 공유하시겠습니까?",ujet_cobrowse_end_session:"코브라우징 세션 종료",ujet_cobrowse_remote_access_confirm_title:"원격 액세스 요청",ujet_cobrowse_remote_access_confirm_description:"상담원이 추가 지원을 위해 현재 공유된 화면에 액세스할 수 있기를 원합니다. 허용하시겠습니까?",ujet_cobrowse_screenshare_confirm_title:"화면 공유 요청",ujet_cobrowse_screenshare_confirm_description:"상담원과 전체 화면을 공유하시겠습니까? 상담원은 화면의 어떤 부분도 제어할 수 없습니다.",ujet_allow:"허용",ujet_deny:"거절"},it:{ujet_cobrowse_request:"Richiedi co-browsing",ujet_cobrowse_request_confirm_title:"Richiesta di sessione di co-browsing",ujet_cobrowse_request_confirm_description:"Vuoi condividere la tua schermata attuale con l'operatore?",ujet_cobrowse_end_session:"Termina sessione di co-browsing",ujet_cobrowse_remote_access_confirm_title:"Richiesta di accesso remoto",ujet_cobrowse_remote_access_confirm_description:"L'operatore vorrebbe accedere alla tua schermata attualmente condivisa per assisterti al meglio. Acconsenti?",ujet_cobrowse_screenshare_confirm_title:"Richiesta di condivisione schermo",ujet_cobrowse_screenshare_confirm_description:"Vuoi condividere il tuo intero schermo con l'operatore? L'operatore non potrà controllare nessun elemento sullo schermo.",ujet_allow:"Consenti",ujet_deny:"Rifiuta"},zh:{ujet_cobrowse_request:"请求同步浏览",ujet_cobrowse_request_confirm_title:"同步浏览会话请求",ujet_cobrowse_request_confirm_description:"您是否要向该客服代表共享当前的屏幕？",ujet_cobrowse_end_session:"结束同步浏览会话",ujet_cobrowse_remote_access_confirm_title:"远程访问请求",ujet_cobrowse_remote_access_confirm_description:"为了进一步协助您,客服代表想访问您当前的共享屏幕。您是否允许这样做？",ujet_cobrowse_screenshare_confirm_title:"屏幕共享请求",ujet_cobrowse_screenshare_confirm_description:"您是否要向该客服代表共享全屏？客服代表将不能控制屏幕上的任何东西。",ujet_allow:"允许",ujet_deny:"拒绝"},"zh-Hant":{ujet_cobrowse_request:"要求共同瀏覽",ujet_cobrowse_request_confirm_title:"共同瀏覽工作階段要求",ujet_cobrowse_request_confirm_description:"要與專員分享您目前的畫面嗎？",ujet_cobrowse_end_session:"結束共同瀏覽工作階段",ujet_cobrowse_remote_access_confirm_title:"遠端存取要求",ujet_cobrowse_remote_access_confirm_description:"專員想要存取您目前分享的螢幕畫面以進一步協助您。要允許嗎？",ujet_cobrowse_screenshare_confirm_title:"螢幕畫面分享要求",ujet_cobrowse_screenshare_confirm_description:"要與專員分享全螢幕嗎？專員將無法控制畫面上的任何項目。",ujet_allow:"允許",ujet_deny:"拒絕"},sv:{ujet_cobrowse_request:"Begär samwebbläsning",ujet_cobrowse_request_confirm_title:"Samwebbläsningssession har begärts",ujet_cobrowse_request_confirm_description:"Vill du dela din aktuella skärm med vår medarbetare?",ujet_cobrowse_end_session:"Avsluta samwebbläsningssession",ujet_cobrowse_remote_access_confirm_title:"Begäran om fjärråtkomst",ujet_cobrowse_remote_access_confirm_description:"Vår medarbetare skulle vilja få åtkomst till skärmen som du delar just nu för att kunna hjälpa dig vidare. Vill du tillåta detta?",ujet_cobrowse_screenshare_confirm_title:"Begäran om skärmdelning",ujet_cobrowse_screenshare_confirm_description:"Vill du dela hela skärmen med medarbetaren? Medarbetaren kommer inte kunna kontrollera något på skärmen.",ujet_allow:"Tillåt",ujet_deny:"Neka"},pt:{ujet_cobrowse_request:"Solicitar Co-navegação",ujet_cobrowse_request_confirm_title:"Solicitação de Sessão de Co-navegação",ujet_cobrowse_request_confirm_description:"Deseja partilhar o seu ecrã atual com o agente?",ujet_cobrowse_end_session:"Terminar Sessão de Co-navegação",ujet_cobrowse_remote_access_confirm_title:"Solicitação de Acesso Remoto",ujet_cobrowse_remote_access_confirm_description:"O agente gostaria de ter acesso ao seu ecrã partilhado atualmente para ajudá-lo ainda mais. Quer permitir isto?",ujet_cobrowse_screenshare_confirm_title:"Solicitação de Partilha de Ecrã",ujet_cobrowse_screenshare_confirm_description:"Deseja partilhar o seu ecrã inteiro com o agente? O agente não poderá controlar nada no ecrã.",ujet_allow:"Permitir",ujet_deny:"Negar"},"pt-BR":{ujet_cobrowse_request:"Solicitar Co-navegação",ujet_cobrowse_request_confirm_title:"Solicitação de Sessão de Co-navegação",ujet_cobrowse_request_confirm_description:"Você deseja compartilhar sua tela atual com o agente?",ujet_cobrowse_end_session:"Encerrar Sessão de Co-navegação",ujet_cobrowse_remote_access_confirm_title:"Solicitação de Acesso Remoto",ujet_cobrowse_remote_access_confirm_description:"O agente gostaria de acessar sua tela atualmente compartilhada para melhor ajudá-lo. Você deseja permitir isso?",ujet_cobrowse_screenshare_confirm_title:"Solicitação de Compartilhamento de Tela",ujet_cobrowse_screenshare_confirm_description:"Você deseja compartilhar sua tela inteira com o agente? O agente não poderá controlar nada na tela.",ujet_allow:"Permitir",ujet_deny:"Negar"},fi:{ujet_cobrowse_request:"Pyydä yhteisselausta",ujet_cobrowse_request_confirm_title:"Pyyntö yhteisselausistunnosta",ujet_cobrowse_request_confirm_description:"Haluatko jakaa nykyisen näyttösi edustajan kanssa?",ujet_cobrowse_end_session:"Lopeta yhteisselausistunto",ujet_cobrowse_remote_access_confirm_title:"Etäkäyttöpyyntö",ujet_cobrowse_remote_access_confirm_description:"Edustaja haluaisi saada käyttää tällä hetkellä jakamaasi näyttöä voidakseen auttaa sinua enemmän. Haluatko antaa siihen luvan?",ujet_cobrowse_screenshare_confirm_title:"Näytön jakamispyyntö",ujet_cobrowse_screenshare_confirm_description:"Haluatko jakaa koko näyttösi edustajan kanssa? Edustaja ei pysty käyttämään mitään näytöllä olevaa.",ujet_allow:"Salli",ujet_deny:"Estä"},nb:{ujet_cobrowse_request:"Forespørsel om samlesing",ujet_cobrowse_request_confirm_title:"Samlesingsøkten er startet",ujet_cobrowse_request_confirm_description:"Vil du dele skjermen din med agenten?",ujet_cobrowse_end_session:"Avslutt samlesingsøkt",ujet_cobrowse_remote_access_confirm_title:"Forespørsel om fjerntilgang",ujet_cobrowse_remote_access_confirm_description:"Agenten vil ha tilgang til skjermen din for å kunne hjelpe deg videre. Vil du tillate dette?",ujet_cobrowse_screenshare_confirm_title:"Forespørsel om skjermdeling",ujet_cobrowse_screenshare_confirm_description:"Vil du dele hele skjermen din med agenten? Agenten kan ikke kontrollere noe på skjermen.",ujet_allow:"Tillat",ujet_deny:"Avvis"},da:{ujet_cobrowse_request:"Forespørg sambrowsing",ujet_cobrowse_request_confirm_title:"Forespørgsel om sambrowsingsession",ujet_cobrowse_request_confirm_description:"Vil du dele din nuværende skærm med agenten",ujet_cobrowse_end_session:"Afslut sambrowsingsession",ujet_cobrowse_remote_access_confirm_title:"Anmodning om fjernadgang",ujet_cobrowse_remote_access_confirm_description:"Agenten vil gerne have adgang til din nuværende delte skærm for at kunne hjælpe dig yderligere. Ønsker du at tillade dette?",ujet_cobrowse_screenshare_confirm_title:"Forespørgsel om skærmdeling",ujet_cobrowse_screenshare_confirm_description:"Vil du dele din fulde skærm med agenten? Agenten vil ikke kunne styre noget på skærmen",ujet_allow:"Tillad",ujet_deny:"Afvis"},nl:{ujet_cobrowse_request:"Cobrowse-verzoek",ujet_cobrowse_request_confirm_title:"Verzoek om cobrowse-sessie",ujet_cobrowse_request_confirm_description:"Wilt u uw huidige scherm delen met de agent?",ujet_cobrowse_end_session:"Cobrowse-sessie beëindigen",ujet_cobrowse_remote_access_confirm_title:"Verzoek om toegang op afstand",ujet_cobrowse_remote_access_confirm_description:"De agent wil graag toegang hebben tot uw momenteel gedeelde scherm om u verder te helpen. Wilt u dit toestaan?",ujet_cobrowse_screenshare_confirm_title:"Verzoek om scherm te delen",ujet_cobrowse_screenshare_confirm_description:"Wilt u uw volledige scherm delen met de agent? De agent kan niets op het scherm bedienen.",ujet_allow:"Toestaan",ujet_deny:"Weigeren"},tr:{ujet_cobrowse_request:"Eş zamanlı Tarama İste",ujet_cobrowse_request_confirm_title:"Oturum İsteğini Eş Zamanlı Tara",ujet_cobrowse_request_confirm_description:"Mevcut ekranınızı temsilciyle paylaşmak ister misiniz?",ujet_cobrowse_end_session:"Eş zamanlı Oturum Taramayı Sonlandır",ujet_cobrowse_remote_access_confirm_title:"Uzaktan Erişim İsteği",ujet_cobrowse_remote_access_confirm_description:"Temsilci şu anda paylaşılan ekranınıza size daha fazla yardımcı olabilmek için erişim sağlamak istiyor. Buna izin vermek istiyor musunuz?",ujet_cobrowse_screenshare_confirm_title:"Ekran Paylaşım İsteği",ujet_cobrowse_screenshare_confirm_description:"Temsilciyle tam ekranınızı paylaşmak istiyor musunuz? Temsilci ekrandaki hiçbir şeyi kontrol edemez.",ujet_allow:"İzin Ver",ujet_deny:"Reddet"},vi:{ujet_cobrowse_request:"Yêu cầu cùng duyệt",ujet_cobrowse_request_confirm_title:"Yêu cầu phiên cùng duyệt",ujet_cobrowse_request_confirm_description:"Bạn có muốn chia sẻ màn hình hiện tại của mình với chuyên viên không?",ujet_cobrowse_end_session:"Kết thúc phiên cùng duyệt",ujet_cobrowse_remote_access_confirm_title:"Yêu cầu truy cập từ xa",ujet_cobrowse_remote_access_confirm_description:"Chuyên viên muốn được cấp quyền truy cập vào màn hình bạn đang chia sẻ để hỗ trợ bạn nhiều hơn. Bạn có muốn cho phép không?",ujet_cobrowse_screenshare_confirm_title:"Yêu cầu chia sẻ màn hình",ujet_cobrowse_screenshare_confirm_description:"Bạn có muốn chia sẻ toàn bộ màn hình của mình với chuyên viên không? Chuyên viên sẽ không thể điều khiển bất cứ phần nào trên màn hình.",ujet_allow:"Cho phép",ujet_deny:"Từ chối"},th:{ujet_cobrowse_request:"ขอเรียกดูร่วม",ujet_cobrowse_request_confirm_title:"ขอเซสชันเรียกดูร่วม",ujet_cobrowse_request_confirm_description:"คุณต้องการแชร์หน้าจอปัจจุบันกับตัวแทนหรือไม่",ujet_cobrowse_end_session:"สิ้นสุดเซสชันเรียกดูร่วม",ujet_cobrowse_remote_access_confirm_title:"ขอการเข้าถึงระยะไกล",ujet_cobrowse_remote_access_confirm_description:"ตัวแทนต้องการเข้าถึงหน้าจอของคุณที่แชร์อยู่ในปัจจุบันเพื่อให้ความช่วยเหลือคุณต่อไป คุณจะอนุญาตหรือไม่",ujet_cobrowse_screenshare_confirm_title:"ขอแชร์หน้าจอ",ujet_cobrowse_screenshare_confirm_description:"คุณต้องการแชร์ทั้งหน้าของคุณกับตัวแทนหรือไม่ ตัวแทนจะไม่สามารถควบคุมอะไรบนหน้าจอ",ujet_allow:"ยินยอม",ujet_deny:"ปฏิเสธ"},ar:{ujet_cobrowse_request:"طلب تصفح مشترك",ujet_cobrowse_request_confirm_title:"طلب جلسة تصفح مشترك",ujet_cobrowse_request_confirm_description:"هل تريد مشاركة شاشتك الحالية مع الموظف؟",ujet_cobrowse_end_session:"إنهاء جلسة التصفح المشترك",ujet_cobrowse_remote_access_confirm_title:"طلب التحكم عن بعد",ujet_cobrowse_remote_access_confirm_description:"يرغب مسئول الدعم في رؤية شاشتك المشاركة حالياً لمساعدتك بشكلٍ أكبر. هل تسمح بذلك؟",ujet_cobrowse_screenshare_confirm_title:"طلب مشاركة الشاشة",ujet_cobrowse_screenshare_confirm_description:"هل تريد مشاركة شاشتك الكاملة مع مسئول الدعم؟ لن يتمكن المسئول من التحكم في أي شيء على الشاشة.",ujet_allow:"السماح",ujet_deny:"الرفض"},cs:{ujet_cobrowse_request:"Požádat o Co-browse",ujet_cobrowse_request_confirm_title:"Žádost o relaci Co-browse",ujet_cobrowse_request_confirm_description:"Chcete svou současnou obrazovku sdílet s agentem?",ujet_cobrowse_end_session:"Ukončit relaci Co-browse",ujet_cobrowse_remote_access_confirm_title:"Žádost o vzdálený přístup",ujet_cobrowse_remote_access_confirm_description:"Agent by rád získal přístup k vaší stávající sdílené obrazovce, aby vám mohl dál pomoci. Chcete mu přístup povolit?",ujet_cobrowse_screenshare_confirm_title:"Žádost o sdílení obrazovky",ujet_cobrowse_screenshare_confirm_description:"Chcete svou celou obrazovku sdílet s agentem? Agent nebude moci ovládat nic, co na obrazovce je.",ujet_allow:"Povolit",ujet_deny:"Zamítnout"},pl:{ujet_cobrowse_request:"Poproś o Co-browse",ujet_cobrowse_request_confirm_title:"Prośba o sesję Co-browse",ujet_cobrowse_request_confirm_description:"Czy chcesz udostępnić konsultantowi swój bieżący ekran?",ujet_cobrowse_end_session:"Zakończ sesję Co-browse",ujet_cobrowse_remote_access_confirm_title:"Prośba o zdalny dostęp",ujet_cobrowse_remote_access_confirm_description:"Konsultant prosi o dostęp do Twojego aktualnie udostępnionego ekranu, aby udzielić Ci dalszej pomocy. Czy chcesz na to zezwolić?",ujet_cobrowse_screenshare_confirm_title:"Prośba o udostępnienie ekranu",ujet_cobrowse_screenshare_confirm_description:"Czy chcesz udostępnić konsultantowi swój cały ekran? Konsultant nie będzie mógł kontrolować niczego na ekranie.",ujet_allow:"Zezwól",ujet_deny:"Odmów"},hu:{ujet_cobrowse_request:"Co-browse kérése",ujet_cobrowse_request_confirm_title:"Co-browse munkameneti kérés",ujet_cobrowse_request_confirm_description:"Megosztja az aktuális képernyőjét a képviselővel?",ujet_cobrowse_end_session:"Co-browse munkamenet befejezése",ujet_cobrowse_remote_access_confirm_title:"Távoli hozzáférési kérés",ujet_cobrowse_remote_access_confirm_description:"A képviselő szeretne hozzáférni a jelenleg megosztott képernyőjéhez, hogy további segítséget nyújthasson. Engedélyezi ezt?",ujet_cobrowse_screenshare_confirm_title:"Képernyőmegosztási kérelem",ujet_cobrowse_screenshare_confirm_description:"Megosztja a teljes képernyőjét az ügynökkel? Az ügynök semmit sem tud majd irányítani a képernyőn.",ujet_allow:"Engedélyezés",ujet_deny:"Elutasítás"}},_={lang:"en",fallback:"en",created:!1,cobrowseRequestHtml:null,remoteControlHtml:null,fullDeviceHtml:null,sessionControlsHtml:null,styles:null},v={COBROWSE:"cobrowseRequestHtml",REMOTE:"remoteControlHtml",FULL:"fullDeviceHtml"};function h(t){return(D[_.lang]||D[_.fallback])[t]}const ee=`
.cobrowse-backdrop {
  background: rgba(255, 255, 255, 0.5);
  position: fixed;
  z-index: 2147483647;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
}
.cobrowse-modal {
  color: #232424;
  font-family:sans-serif;
  line-height:140%;
  position:fixed;
  background:white;
  border-radius:5px;
  z-index:2147483647;
  top:50px;
  left:50%;
  width:75%;
  max-width:450px;
  transform:translateX(-50%);
  box-shadow:2px 2px 30px rgb(0,0,0,0.08);
}
.cobrowse-head {
  text-align:center;
  background-color: #F3F3F3;
  display: flex;
  align-items: center;
  font-size: 125%;
  line-height: 25px;
  padding: 20px;

  border-radius: 5px 5px 0 0;
}
.cobrowse-info-icon {
  margin-right: 20px;
}
.cobrowse-title {
  font-weight: 600;
  flex-grow:2;
  text-align: left;
}
div.cobrowse-close {
  cursor: pointer;
}
.cobrowse-description {
  color: #666666;
  font-size: 87.5%;
  padding: 20px;
}
.cobrowse-button-container {
  float:right;
  margin-top:20px;
  height: 50px;
}
.cobrowse-deny {
  cursor:pointer;
  padding:10px;
  border-radius: 4px;
  border: 1px solid #767775;
  color: #767775;
  font-weight: 600;
  margin-right: 20px;
}
.cobrowse-allow {
  cursor:pointer;
  padding:10px;
  border-radius: 4px;
  background-color: #3498DB;
  color: white;
  font-weight: 600;
  margin-right: 20px;
}
#cobrowse-end-button {
  padding: 10px 20px;
  font-size: 125%;
  font-family: sans-serif;
  font-weight: 500;
  color: white;
  box-shadow: 0px 2px 5px #33000044;
  cursor: pointer;
  border-radius: 4px;
  background-color: #C61C3C;
  position: fixed;
  z-index: 2147483647;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
#cobrowse-end-button:hover {
  background-color: #92162D;
}
`,te=`<div class="cobrowse-backdrop">
<div class="cobrowse-modal">
  <div class="cobrowse-head">
    <div class="cobrowse-info-icon"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_33_142)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M28 14C28 21.728 21.742 28 14.014 28C6.272 28 -1.35903e-06 21.728 -6.8343e-07 14C-7.8265e-09 6.272 6.272 7.82664e-09 14.014 6.84654e-07C21.742 1.36026e-06 28 6.272 28 14ZM26.25 14C26.25 7.23187 20.7681 1.75 14 1.75C7.23188 1.75 1.75 7.23187 1.75 14C1.75 20.7681 7.23187 26.25 14 26.25C20.7681 26.25 26.25 20.7681 26.25 14Z" fill="#232424"/>
<path d="M15.2407 20.9854C14.948 21.2369 14.5821 21.3806 14.1797 21.3806C13.7772 21.3806 13.4114 21.2369 13.1187 20.9854C12.826 20.734 12.6797 20.3748 12.6797 19.9079C12.6797 19.5128 12.826 19.1536 13.1187 18.8663C13.4114 18.5789 13.7772 18.4352 14.1797 18.4352C14.5821 18.4352 14.948 18.5789 15.2407 18.8663C15.5333 19.1536 15.6797 19.4769 15.6797 19.9079C15.6797 20.3748 15.5333 20.734 15.2407 20.9854ZM15.6065 10.174L15.1675 14.9871C15.1309 15.5618 15.0212 15.9928 14.8748 16.316C14.7285 16.6393 14.4724 16.783 14.1065 16.783C13.7407 16.783 13.4846 16.6393 13.3748 16.352C13.2285 16.0646 13.1187 15.5977 13.0821 14.9871L12.7529 10.3176C12.6797 9.41969 12.6797 8.73723 12.6797 8.34213C12.6797 7.80335 12.826 7.37233 13.1187 7.08498C13.4114 6.79763 13.7772 6.61804 14.2529 6.61804C14.8382 6.61804 15.2041 6.79763 15.387 7.19274C15.5699 7.58784 15.6797 8.12662 15.6797 8.88091C15.6797 9.31193 15.6431 9.74295 15.6065 10.174Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_33_142">
<rect width="28" height="28" fill="white"/>
</clipPath>
</defs>
</svg></div>
    <div class="cobrowse-title">__title__</div>
    <div class="cobrowse-close"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 5.35294L2.47059 0.823529C2.01577 0.368707 1.27835 0.368707 0.823529 0.823529C0.368707 1.27835 0.368706 2.01576 0.823529 2.47059L5.35294 7L0.823529 11.5294C0.368707 11.9842 0.368707 12.7216 0.823529 13.1765C1.27835 13.6313 2.01576 13.6313 2.47059 13.1765L7 8.64706L11.5294 13.1765C11.9842 13.6313 12.7216 13.6313 13.1765 13.1765C13.6313 12.7216 13.6313 11.9842 13.1765 11.5294L8.64706 7L13.1765 2.47059C13.6313 2.01577 13.6313 1.27835 13.1765 0.823529C12.7216 0.368707 11.9842 0.368706 11.5294 0.823529L7 5.35294Z" fill="#919191"/>
</svg></div>
  </div>
  <div class="cobrowse-description">__desc__</div>
  <div class="cobrowse-button-container">
    <a class="cobrowse-deny">__deny__</a>
    <a class="cobrowse-allow">__allow__</a>
  </div>
</div></div>`;function C(t,e,o){const r=document.createElement("div");let s;_[o]?s=_[o]:s=te.replace("__title__",t).replace("__desc__",e).replace("__allow__",h("ujet_allow")).replace("__deny__",h("ujet_deny")),r.innerHTML=s;const n=()=>{r.parentNode&&r.parentNode.removeChild(r)};return new Promise(i=>{r.querySelector(".cobrowse-allow").addEventListener("click",()=>{i(!0),n()}),r.querySelector(".cobrowse-deny").addEventListener("click",()=>{i(!1),n()}),r.querySelector(".cobrowse-close").addEventListener("click",()=>{i(!1),n()}),document.body&&document.body.appendChild(r)})}function oe(){const t=document.getElementById("cobrowse-consent");t&&t.parentNode&&t.parentNode.removeChild(t)}function re(t){_.lang=t}function T(t,e){if(_.created)return;if(_.lang=e.lang,_.cobrowseRequestHtml=e.cobrowseOptions.cobrowseRequestHtml,_.remoteControlHtml=e.cobrowseOptions.remoteControlHtml,_.fullDeviceHtml=e.cobrowseOptions.fullDeviceHtml,_.sessionControlsHtml=e.cobrowseOptions.sessionControlsHtml,_.styles=e.cobrowseOptions.styles,_.created=!0,!document.head.querySelector("#cobrowse-ui-style")){const r=document.createElement("style");r.id="cobrowse-ui-style",r.innerHTML=_.styles||ee,document.head.appendChild(r)}t.confirmSession=function(){return C(h("ujet_cobrowse_request_confirm_title"),h("ujet_cobrowse_request_confirm_description"),v.COBROWSE)},t.confirmRemoteControl=function(){return C(h("ujet_cobrowse_remote_access_confirm_title"),h("ujet_cobrowse_remote_access_confirm_description"),v.REMOTE)},t.confirmFullDevice=function(){return C(h("ujet_cobrowse_screenshare_confirm_title"),h("ujet_cobrowse_screenshare_confirm_description"),v.FULL)};let o=document.querySelector("#cobrowse-end-button");o||(o=document.createElement("div"),o.id="cobrowse-end-button",o.addEventListener("click",function(){E()})),t.showSessionControls=function(){_.sessionControlsHtml?o.innerHTML=_.sessionControlsHtml:o.textContent=h("ujet_cobrowse_end_session"),document.body.appendChild(o)},t.hideSessionControls=function(){o.parentNode&&o.parentNode.removeChild(o)}}const O="websdk (v2)";class se{on(e,o){this.communicator.on(e,o)}off(e,o){this.communicator.off(e,o)}async authenticate(e){let o;if(typeof e=="function"?o=await e():o=e,typeof o=="string"&&(o={token:o}),await this.communicator.promiseSend("authenticate",o))this.ready=!0;else throw new Error("Authentication failed.")}start({menuKey:e=void 0,ticketId:o=void 0,trigger:r=void 0,preferredChannel:s=void 0}={}){return this.ready?this.communicator.promiseSend("start",{menuKey:e,ticketId:o,trigger:r,preferredChannel:s}):(r&&this.on("created",()=>{this.communicator.send("start",{trigger:r})}),new Promise((n,i)=>{this.on("ready",()=>{this.communicator.promiseSend("start",{menuKey:e,ticketId:o,preferredChannel:s}).then(n).catch(i)}),this.open()}))}fetchWaitTimes({id:e,lang:o="en"}){return this.communicator.promiseSend("fetch:waitTimes",{id:e,lang:o})}getOngoingChat(){return!this.ready&&this._inject?new Promise((e,o)=>{this.on("ready",()=>{this.close(),this.communicator.promiseSend("fetch:ongoingChat").then(e).catch(o)}),this._inject()}):this.communicator.promiseSend("fetch:ongoingChat")}async setupCobrowse(){const e=await x(this.options.cobrowseOptions);e&&T(e,this.options),this.communicator.on("cobrowseRequest",async({deviceId:o,chatId:r,from:s,nonce:n,lang:i})=>{re(i);let u=null,m=null;try{e.customData={device_id:o,device_name:O,chatId:`chat_${r}`,nonce:n},e.currentSession?m=e.currentSession.code():m=await z()}catch(d){u=d}finally{this.communicator.send("cobrowseStart",{deviceId:o,code:m,chatId:r,from:s,nonce:n,error:u})}}),this.communicator.on("cobrowseEnd",async()=>{E(),oe()})}async createCobrowseCode(){const e=await x(this.options.cobrowseOptions);if(!e)return null;if(e.currentSession)return e.currentSession.code();T(e,this.options);const o=Math.random().toString(36).slice(2)+"_"+ +new Date;return e.customData={device_name:O,nonce:o},z()}}function ne(t){if(!t.companyId)throw new Error("companyId is required in options");return ie(t),ce(t),le(t),ue(t),ae(t),t}function ie(t){t.host===void 0&&(t.tenant?t.host="https://main.api.ujet.co".replace("main",t.tenant):t.host="https://main.api.ujet.co")}function ce(t){if(!t.lang)try{const e=localStorage.getItem("ujet:lang");e&&(t.lang=e)}catch{}}function ae(t){if(!t.textSize)try{const e=localStorage.getItem("ujet:textSize");e&&(t.size=e)}catch{}}function le(t){t.right||(t.right="50px"),t.bottom||(t.bottom="160px")}function ue(t){t.cobrowseOptions||(t.cobrowseOptions={}),t.cobrowseOptions.license,t.cobrowseOptions.api,t.cobrowseOptions.trustedOrigins}let l=null;const _e="https://websdk.ujet.co/v2/",k={width:0,height:0},de={position:"fixed",border:0,margin:0,padding:0,background:"transparent",transition:"opacity 0.2s ease, transform 0.2s ease","z-index":999999999,"pointer-events":"visible","border-radius":"12px","box-shadow":"0 0 1px rgba(0,0,0,.04), 0 2px 6px rgba(0,0,0,.1), 5px 10px 20px rgba(0,0,0,.05), 5px 10px 10px rgba(0,0,0,.05)"};class me extends se{constructor(e={},o=_e){if(l)throw new Error("ONLY one UJET is allowed");super();const r=document.createElement("div");r.id="ujet",document.body.appendChild(r),this.$el=r,e=ne(e),this._hooks={},this.ready=!1,this.options=e,this.communicator=we(e,o),this.communicator.on("close",()=>{this.close()}),this.communicator.on("minimize",()=>{this.close()}),this.resizeHandler=()=>{const s=document.documentElement.clientWidth,n=document.documentElement.clientHeight;this.communicator.send("resize",{width:s,height:n})},window.addEventListener("resize",this.resizeHandler),e.launcher!==!1&&P(this,e.launcher),W(this,o+"proactive.html"),e.authenticate&&this.on("created",()=>{this.authenticate(e.authenticate)}),this.setupCobrowse()}get status(){return l?l.getAttribute("data-status"):"close"}registerHook(e,o){this._hooks[e]?this._hooks[e].push(o):this._hooks[e]=[o]}runHook(e){const o=this._hooks[e];o&&o.forEach(r=>r())}_inject(){l.parentElement||(l.setAttribute("data-status","close"),this.$el.appendChild(l),this.requestCustomData&&l.addEventListener("load",()=>{this.requestCustomData().then(e=>{this.communicator.send("config",{signedCustomData:e})})}))}open(){if(!l.parentElement)this.$el.appendChild(l),this.runHook("loading"),this.requestCustomData&&l.addEventListener("load",()=>{this.requestCustomData().then(e=>{this.communicator.send("config",{signedCustomData:e})})});else{const{right:e,bottom:o}=this.options;p({right:e,bottom:o}),this.resizeHandler(),this.runHook("open")}l.setAttribute("data-status","open"),this.communicator.send("visible",!0)}close(){const{right:e,bottom:o}=this.options;l.setAttribute("data-status","close"),p({right:e,bottom:o,opacity:0,transform:"translateY(20px)"}),setTimeout(()=>{p({right:e,bottom:o,display:"none"})},200),this.communicator.send("visible",!1),this.runHook("close")}destroy(){window.removeEventListener("resize",this.resizeHandler),l&&l.parentElement&&(l.parentElement.removeChild(l),l=null),this.runHook("destroy")}}function we(t,e){const{right:o,bottom:r}=t;l=document.createElement("iframe"),l.id="ujet-widget",l.allowFullscreen=!0,l.allow="picture-in-picture";let s;const n=I(i=>{s.port1.postMessage(i)});return n.receive("resize",({width:i,height:u})=>{i&&u&&(k.width=i,k.height=u),l.getAttribute("data-status")==="close"?p({right:o,bottom:r,display:"none"}):p({right:o,bottom:r})}),l.addEventListener("load",()=>{s=new MessageChannel,s.port1.onmessage=d=>{n.receiveMessage(d.data)};const i="*";l.contentWindow.postMessage(A(t),i,[s.port2]);const u=document.documentElement.clientWidth,m=document.documentElement.clientHeight;n.send("resize",{width:u,height:m})}),l.src=e,p({right:o,bottom:r,opacity:0,transform:"translateY(20px)"}),n}function p(t={}){const{width:e,height:o}=k,r=document.documentElement.clientWidth,s={...de,...t};r<=480?(s.width="100%",s.height="100%",s.right=0,s.bottom=0,s["box-shadow"]="none",s["border-radius"]=0):e&&o&&(s.width=e+"px",s.height=o+"px");let n="";Object.keys(s).forEach(i=>{n+=`${i}:${s[i]};`}),l.style.cssText=n}return me}();
