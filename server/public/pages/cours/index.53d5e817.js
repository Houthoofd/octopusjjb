var e=globalThis,r={},t={},o=e.parcelRequirec605;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in t){var o=t[e];delete t[e];var n={id:e,exports:{}};return r[e]=n,o.call(n.exports,n,n.exports),n.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,r){t[e]=r},e.parcelRequirec605=o),o.register;var n=o("1BF7I");o("lTDtW");let s=(0,n.html)`${e=>(0,n.html)`<div class='cours'>
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
    </div>`}`;document.addEventListener("DOMContentLoaded",()=>{let e=document.createElement("div"),r=document.querySelectorAll(".content-classes")[0];fetch("http://localhost:3000/cours/",{method:"GET",headers:{"Content-Type":"application/json"}}).then(e=>{if(!e.ok)throw Error("Erreur serveur.");return e.json()}).then(t=>{if(t.length>0)for(let e of t){console.log(e.date_cours);let t=document.createElement("div");t.innerHTML=`${e.date_cours} - ${e.heure_debut} - ${e.heure_fin} - ${e.type_cours}`,r?.appendChild(t)}else e.textContent="Utilisateur non trouvé ou mot de passe incorrect.";console.log("Réponse du serveur:",t)}).catch(r=>{e.innerHTML="Vous n'êtes pas encore inscris, veuillez vous <a href='inscriptions'><strong>inscrire</string></a>",console.error("Erreur lors de la requête fetch:",r)});let t=document.getElementById("logout");t&&t.addEventListener("click",e=>{e.preventDefault(),localStorage.clear(),sessionStorage.clear(),window.location.href="/"})}),(0,n.render)(s);
//# sourceMappingURL=index.53d5e817.js.map
