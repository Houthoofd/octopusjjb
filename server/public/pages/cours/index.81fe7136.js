var e=globalThis,r={},o={},t=e.parcelRequirec605;null==t&&((t=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,r){o[e]=r},e.parcelRequirec605=t),t.register;var n=t("1BF7I");t("lTDtW");let s=(0,n.html)`${e=>(0,n.html)`<div class='cours'>
        <nav class='header-menu'>
            <a href='compte'>Compte</a>
            <a href='/' id='logout'>Déconnexion</a>
        </nav>
        <div class='content'>
            <nav class='horizontal-menu'>
                <a href='cours'>S'inscrire aux cours</a>
                <a href='informations'>Informations supplémentaires</a>
            </nav>
            <h1>Inscriptions aux cours</h1>
        </div>
    </div>`}`;document.addEventListener("DOMContentLoaded",()=>{let e=document.createElement("div");fetch("http://localhost:3000/cours/",{method:"GET",headers:{"Content-Type":"application/json"}}).then(e=>{if(!e.ok)throw Error("Erreur serveur.");return e.json()}).then(r=>{r.length>0?(console.log(r.date_cours),e.innerHTML=`${r.date_cours}`):e.textContent="Utilisateur non trouvé ou mot de passe incorrect.",console.log("Réponse du serveur:",r)}).catch(r=>{e.innerHTML="Vous n'êtes pas encore inscris, veuillez vous <a href='inscriptions'><strong>inscrire</string></a>",console.error("Erreur lors de la requête fetch:",r)});let r=document.getElementById("logout");r&&r.addEventListener("click",e=>{e.preventDefault(),localStorage.clear(),sessionStorage.clear(),window.location.href="/"})}),(0,n.render)(s);
//# sourceMappingURL=index.81fe7136.js.map
