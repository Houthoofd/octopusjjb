var e=globalThis,t={},n={},r=e.parcelRequirec605;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequirec605=r),r.register;var o=r("1BF7I");r("lTDtW"),r("5OQrz");let i=(0,o.html)`${e=>(0,o.html)`<pf-page masterhead-no-icon masterhead-no-branding drawer-inline drawer-expanded drawer-static drawer-panel-left >
    <div slot = "drawer-panel">
      <pf-navigation>
        <pf-navigation-list>
            <pf-navigation-list-item
              @mousedown=${()=>{window.location.href="cours"}}>
                Cours
            </pf-navigation-list-item>
            <pf-navigation-list-item
              @mousedown=${()=>{window.location.href="informations"}}>
                Informations supplémentaires
            </pf-navigation-list-item>
            <pf-navigation-list-item
              @mousedown=${()=>{window.location.href="compte"}}>
                Compte
            </pf-navigation-list-item>
            <pf-navigation-list-item
              @mousedown=${()=>{window.location.href="profile"}}>
                Profile
            </pf-navigation-list-item>
        </pf-navigation-list>
      </pf-navigation>
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
        <slot>Vous venez de vous inscrire avec success !</slot>
      </pf-alert>
    </pf-panel>
  </pf-page>`}`;document.addEventListener("DOMContentLoaded",()=>{let e=document.createElement("div"),t=document.querySelectorAll("div")[2];fetch("http://localhost:3000/cours/",{method:"GET",headers:{"Content-Type":"application/json"}}).then(e=>{if(!e.ok)throw Error("Erreur serveur.");return e.json()}).then(n=>{if(n.length>0)for(let e of n){let n=function(e){let t=new Date(e),n=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),o=String(t.getDate()).padStart(2,"0");return`${n}-${r}-${o}`}(e.date_cours),r=document.createElement("div");r.setAttribute("class","raw-infos");let o=document.createElement("div");o.setAttribute("class","date-infos");let i=document.createElement("div");i.setAttribute("class","heure-debut-infos");let a=document.createElement("div");a.setAttribute("class","heure-fin-infos");let l=document.createElement("div");l.setAttribute("class","type-de-cours-infos");let s=document.createElement("button");s.setAttribute("class","inscription"),s.innerHTML="Inscription";let d=document.createElement("div");d.setAttribute("class","down-arrow"),d.innerHTML=`
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1); transform: ; msFilter:;">
                    <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path>
                </svg>
                `,o.innerHTML=n,i.innerHTML=e.heure_debut,a.innerHTML=e.heure_fin,l.innerHTML=e.type_cours,r.appendChild(o),r.appendChild(i),r.appendChild(a),r.appendChild(l),r.appendChild(s),r.appendChild(d),t.appendChild(r),s.addEventListener("click",e=>{console.log("Date formatée:",function(e){let[t,n,r]=e.split("-");return new Date(`${t}-${n}-${r}T00:00:00Z`).toISOString()}(e.target.parentNode.children[0].innerHTML));let t=localStorage.getItem("first_name");t?fetch("http://localhost:3000/inscriptions/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({first_name:t})}).then(e=>{if(!e.ok)throw Error("Erreur serveur.");return e.json()}).then(e=>{console.log("Réponse du serveur:",e)}).catch(e=>{console.error("Erreur lors de la requête fetch:",e)}):console.error("Aucun prénom trouvé dans le localStorage.")})}else e.textContent="Cours non trouvés";console.log("Réponse du serveur:",n)}).catch(t=>{e.innerHTML="Cours non trouvés",console.error("Erreur lors de la requête fetch:",t)});let n=document.getElementById("logout");n&&n.addEventListener("click",e=>{e.preventDefault(),localStorage.clear(),sessionStorage.clear(),window.location.href="/"})}),(0,o.render)(i);
//# sourceMappingURL=index.de75f880.js.map
