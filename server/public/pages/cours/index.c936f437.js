var e=globalThis,r={},t={},o=e.parcelRequirec605;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in t){var o=t[e];delete t[e];var n={id:e,exports:{}};return r[e]=n,o.call(n.exports,n,n.exports),n.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,r){t[e]=r},e.parcelRequirec605=o),o.register;var n=o("1BF7I");o("lTDtW");let a=(0,n.html)`${e=>(0,n.html)`<div class='cours'>
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
    </div>`}`;document.addEventListener("DOMContentLoaded",()=>{let e=document.createElement("div");fetch("http://localhost:3000/cours/",{method:"GET",headers:{"Content-Type":"application/json"}}).then(e=>{if(!e.ok)throw Error("Erreur serveur.");return e.json()}).then(r=>{if(r.length>0){for(let e of r)localStorage.setItem("first_name",e.first_name),localStorage.setItem("email",e.email),localStorage.setItem("role",e.status),localStorage.setItem("isLogged","true"),console.log("mise en mémoire dans le locale storage"+e.first_name+e.email);window.location.href="http://localhost:1234"}else e.textContent="Utilisateur non trouvé ou mot de passe incorrect.";console.log("Réponse du serveur:",r)}).catch(r=>{e.innerHTML="Vous n'êtes pas encore inscris, veuillez vous <a href='inscriptions'><strong>inscrire</string></a>",console.error("Erreur lors de la requête fetch:",r)});let r=document.getElementById("logout");r&&r.addEventListener("click",e=>{e.preventDefault(),localStorage.clear(),sessionStorage.clear(),window.location.href="/"})}),(0,n.render)(a);
//# sourceMappingURL=index.c936f437.js.map
