var e=globalThis,t={},n={},r=e.parcelRequirec605;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},e.parcelRequirec605=r),r.register;var o=r("1BF7I");r("lTDtW");let s=(0,o.html)`${e=>(0,o.html)`<div class='cours'>
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
    </div>`}`;document.addEventListener("DOMContentLoaded",()=>{let e=document.createElement("div"),t=document.querySelectorAll(".content-classes")[0];fetch("http://localhost:3000/cours/",{method:"GET",headers:{"Content-Type":"application/json"}}).then(e=>{if(!e.ok)throw Error("Erreur serveur.");return e.json()}).then(n=>{if(n.length>0)for(let e of n){let n=function(e){let t=new Date(e),n=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),o=String(t.getDate()).padStart(2,"0");return`${n}-${r}-${o}`}(e.date_cours),r=document.createElement("div");r.setAttribute("class","raw-infos");let o=document.createElement("div");o.setAttribute("class","date-infos");let s=document.createElement("div");s.setAttribute("class","heure-debut-infos");let i=document.createElement("div");i.setAttribute("class","heure-fin-infos");let a=document.createElement("div");a.setAttribute("class","type-de-cours-infos");let l=document.createElement("button");l.setAttribute("class","inscription"),l.innerHTML="inscription";let c=document.createElement("div");c.setAttribute("class","down-arrow"),c.innerHTML=`
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1); transform: ; msFilter:;">
                    <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path>
                </svg>
                `,o.innerHTML=n,s.innerHTML=e.heure_debut,i.innerHTML=e.heure_fin,a.innerHTML=e.type_cours,r?.appendChild(o),r?.appendChild(s),r?.appendChild(i),r?.appendChild(a),r?.appendChild(l),r?.appendChild(c),t?.appendChild(r),l.addEventListener("click",e=>{let t=function(e){let[t,n,r]=e.split("-").map(Number);return new Date(t,n-1,r).toISOString()}(e.target.parentNode.children[0].innerHTML);fetch("http://localhost:3000/cours/inscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(localStorage.getItem("first_name"))}).then(e=>{if(!e.ok)throw Error("Erreur serveur.");return e.json()}).then(e=>{console.log(e)}).catch(e=>{console.log(e)}),console.log(t)})}else e.textContent="Cours non trouvés";console.log("Réponse du serveur:",n)}).catch(t=>{e.innerHTML="Cours non trouvés",console.error("Erreur lors de la requête fetch:",t)});let n=document.getElementById("logout");n&&n.addEventListener("click",e=>{e.preventDefault(),localStorage.clear(),sessionStorage.clear(),window.location.href="/"})}),(0,o.render)(s);
//# sourceMappingURL=index.d4d6715d.js.map
