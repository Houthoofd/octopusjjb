var e=globalThis,t={},r={},n=e.parcelRequirec605;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},e.parcelRequirec605=n),n.register;var o=n("5D1XK");n("RKbfs"),n("5OQrz"),n("2LYUy");let l=(0,o.html)`${e=>(0,o.html)`<pf-page masterhead-no-icon masterhead-no-branding drawer-inline drawer-expanded drawer-static drawer-panel-left >
    <div slot = "drawer-panel">
      <navigation-panel></navigation-panel>
    </div>
    <div>
      <pf-panel header scrollable>
        <h1 slot = "header" >Cours</h1>
        <div>

        </div>
      </pf-panel>
    </div>
    <pf-panel class="notification-box">
      <pf-alert success>
        <slot></slot>
      </pf-alert>
    </pf-panel>
  </pf-page>`}`;document.addEventListener("DOMContentLoaded",()=>{let e=document.createElement("div"),t=document.querySelectorAll("pf-panel.notification-box")[0],r=document.querySelectorAll("div")[2];fetch("http://localhost:3000/cours/",{method:"GET",headers:{"Content-Type":"application/json"}}).then(e=>{if(!e.ok)throw Error("Erreur serveur.");return e.json()}).then(n=>{if(n.length>0)for(let e of n){let n=function(e){let t=new Date(e),r=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),o=String(t.getDate()).padStart(2,"0");return`${r}-${n}-${o}`}(e.date_cours),o=document.createElement("div");o.setAttribute("class","raw-infos");let l=document.createElement("div");l.setAttribute("class","date-infos");let a=document.createElement("div");a.setAttribute("class","heure-debut-infos");let i=document.createElement("div");i.setAttribute("class","heure-fin-infos");let s=document.createElement("div");s.setAttribute("class","type-de-cours-infos");let d=document.createElement("button");d.setAttribute("class","inscription"),d.innerHTML="Inscription";let c=document.createElement("div");c.setAttribute("class","down-arrow"),c.innerHTML=`
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1); transform: ; msFilter:;">
                    <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path>
                </svg>
                `,l.innerHTML=n,a.innerHTML=e.heure_debut,i.innerHTML=e.heure_fin,s.innerHTML=e.type_cours,o.appendChild(l),o.appendChild(a),o.appendChild(i),o.appendChild(s),o.appendChild(d),o.appendChild(c),r.appendChild(o),d.addEventListener("click",e=>{let r=function(e){let[t,r,n]=e.split("-");return new Date(`${t}-${r}-${n}T00:00:00Z`).toISOString()}(e.target.parentNode.children[0].innerHTML);console.log("Date formatée:",r);let n=localStorage.getItem("first_name");n?fetch("http://localhost:3000/inscriptions/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({first_name:n})}).then(e=>{if(!e.ok)throw Error("Erreur serveur.");return e.json()}).then(e=>{t.classList.toggle("active"),t.querySelectorAll("slot")[0].innerHTML=`Vous venez de vous inscrire pour le cours du ${r}`,setTimeout(()=>{t.classList.remove("active")},2e3)}).catch(e=>{console.error("Erreur lors de la requête fetch:",e)}):console.error("Aucun prénom trouvé dans le localStorage.")})}else e.textContent="Cours non trouvés";console.log("Réponse du serveur:",n)}).catch(t=>{e.innerHTML="Cours non trouvés",console.error("Erreur lors de la requête fetch:",t)});let n=document.getElementById("logout");n&&n.addEventListener("click",e=>{e.preventDefault(),localStorage.clear(),sessionStorage.clear(),window.location.href="/"})}),(0,o.render)(l);
//# sourceMappingURL=index.b458e4af.js.map
