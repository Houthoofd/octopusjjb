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
    </div>`}`;document.addEventListener("DOMContentLoaded",()=>{let e=document.createElement("div"),t=document.querySelectorAll(".content-classes")[0];fetch("http://localhost:3000/cours/",{method:"GET",headers:{"Content-Type":"application/json"}}).then(e=>{if(!e.ok)throw Error("Erreur serveur.");return e.json()}).then(r=>{if(r.length>0)for(let e of r){let r=function(e){let t=new Date(e),r=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),o=String(t.getDate()).padStart(2,"0");return`${r}-${n}-${o}`}(e.date_cours),n=document.createElement("div");n.setAttribute("class","raw-infos");let o=document.createElement("div");o.setAttribute("class","date-infos");let s=document.createElement("div");s.setAttribute("class","heure-debut-infos");let i=document.createElement("div");i.setAttribute("class","heure-fin-infos");let a=document.createElement("div");a.setAttribute("class","type-de-cours-infos");let l=document.createElement("img");l.setAttribute("src","public/svg/down_arrow.svg"),o.innerHTML=r,s.innerHTML=e.heure_debut,i.innerHTML=e.heure_fin,a.innerHTML=e.type_cours,n?.appendChild(o),n?.appendChild(s),n?.appendChild(i),n?.appendChild(a),n?.appendChild(l),t?.appendChild(n)}else e.textContent="Utilisateur non trouvé ou mot de passe incorrect.";console.log("Réponse du serveur:",r)}).catch(t=>{e.innerHTML="Vous n'êtes pas encore inscris, veuillez vous <a href='inscriptions'><strong>inscrire</string></a>",console.error("Erreur lors de la requête fetch:",t)});let r=document.getElementById("logout");r&&r.addEventListener("click",e=>{e.preventDefault(),localStorage.clear(),sessionStorage.clear(),window.location.href="/"})}),(0,o.render)(s);
//# sourceMappingURL=index.d6ded06b.js.map
