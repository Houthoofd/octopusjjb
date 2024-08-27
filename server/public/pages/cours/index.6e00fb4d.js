var e=globalThis,t={},r={},n=e.parcelRequirec605;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){r[e]=t},e.parcelRequirec605=n),n.register;var o=n("1BF7I");n("lTDtW");let s=(0,o.html)`${e=>(0,o.html)`<div class='cours'>
        <nav class='header-menu'>
            <a href='compte'>Compte</a>
            <a href='/' id='logout'>Déconnexion</a>
        </nav>
        <div class='content'>
            <nav class='horizontal-menu'>
                <a href='cours'>S'inscrire aux cours</a>
                <a href='informations'>Informations supplémentaires</a>
            </nav>
            <div class='content-classes'>
                <h1>Inscriptions aux cours</h1>
            </div>
        </div>
    </div>`}`;document.addEventListener("DOMContentLoaded",()=>{let e=document.createElement("div"),t=document.querySelectorAll(".content-classes")[0];fetch("http://localhost:3000/cours/",{method:"GET",headers:{"Content-Type":"application/json"}}).then(e=>{if(!e.ok)throw Error("Erreur serveur.");return e.json()}).then(r=>{if(r.length>0)for(let e of r){let r=function(e){let t=new Date(e),r=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),o=String(t.getDate()).padStart(2,"0");return`${r}-${n}-${o}`}(e.date_cours),n=document.createElement("div");n.setAttribute("class","raw-infos");let o=document.createElement("div");o.setAttribute("class","date-infos");let s=document.createElement("div");s.setAttribute("class","heure-debut-infos");let a=document.createElement("div");a.setAttribute("class","heure-fin-infos");let l=document.createElement("div");l.setAttribute("class","type-de-cours-infos");let i=document.createElement("button");i.setAttribute("class","inscription"),i.innerHTML="Inscription";let c=document.createElement("div");c.setAttribute("class","down-arrow"),c.innerHTML=`
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1); transform: ; msFilter:;">
                    <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path>
                </svg>
                `,o.innerHTML=r,s.innerHTML=e.heure_debut,a.innerHTML=e.heure_fin,l.innerHTML=e.type_cours,n.appendChild(o),n.appendChild(s),n.appendChild(a),n.appendChild(l),n.appendChild(i),n.appendChild(c),t.appendChild(n),i.addEventListener("click",e=>{console.log("Date formatée:",function(e){let[t,r,n]=e.split("-");return new Date(`${t}-${r}-${n}T00:00:00Z`).toISOString()}(e.target.parentNode.children[0].innerHTML));let t=localStorage.getItem("first_name");t?fetch("http://localhost:3000/inscriptions/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({first_name:t})}).then(e=>{if(!e.ok)throw Error("Erreur serveur.");return e.json()}).then(e=>{console.log("Réponse du serveur:",e)}).catch(e=>{console.error("Erreur lors de la requête fetch:",e)}):console.error("Aucun prénom trouvé dans le localStorage.")})}else e.textContent="Cours non trouvés";console.log("Réponse du serveur:",r)}).catch(t=>{e.innerHTML="Cours non trouvés",console.error("Erreur lors de la requête fetch:",t)});let r=document.getElementById("logout");r&&r.addEventListener("click",e=>{e.preventDefault(),localStorage.clear(),sessionStorage.clear(),window.location.href="/"})}),(0,o.render)(s);
//# sourceMappingURL=index.6e00fb4d.js.map
