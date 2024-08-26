var e=globalThis,t={},o={},r=e.parcelRequirec605;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},e.parcelRequirec605=r),r.register;var n=r("5D1XK");r("RKbfs");let l=(0,n.html)`${e=>(0,n.html)`<div>
        <h1>Connexion</h1>
        <form>
            <div class='input-fields'>
                <label for="email">E-mail</label>
                <input type="email">
            </div>
            <div class='input-fields'>
                <label for="password">Mot de passe</label>
                <input type="password">
            </div>
            <button type="submit">Connexion</button>
        </form>
    </div>`}`;document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector("form"),t=document.createElement("div");e?.appendChild(t),e&&e.addEventListener("submit",e=>{e.preventDefault();let o=document.querySelectorAll("input"),r=o[0].value,n=o[1].value;if(!r||!n){t.textContent="Veuillez remplir tous les champs.";return}let l={email:r,password:n};console.log(l),fetch("http://localhost:3000/connexion/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}).then(e=>{if(!e.ok)throw Error("Erreur serveur.");return e.json()}).then(e=>{e.success?(console.log(e),localStorage.setItem("email",r),window.location.href="http://localhost:1234/"):t.textContent="Utilisateur non trouvé ou mot de passe incorrect.",console.log("Réponse du serveur:",e)}).catch(e=>{t.textContent="Erreur lors de la connexion.",console.error("Erreur lors de la requête fetch:",e)})})}),(0,n.render)(l);
//# sourceMappingURL=index.9e9c7d98.js.map
