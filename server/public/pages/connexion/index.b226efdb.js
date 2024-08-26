var e=globalThis,t={},r={},n=e.parcelRequirec605;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},e.parcelRequirec605=n),n.register;var o=n("5D1XK");n("RKbfs");let l=(0,o.html)`${e=>(0,o.html)`<div>
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
    </div>`}`;document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector("form"),t=document.createElement("div");e?.appendChild(t),e&&e.addEventListener("submit",e=>{e.preventDefault();let r=document.querySelectorAll("input"),n=r[0].value,o=r[1].value;if(!n||!o){t.textContent="Veuillez remplir tous les champs.";return}fetch("http://localhost:1234/pages/connexion",{method:"GET",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,password:o})}).then(e=>{if(!e.ok)throw Error("Erreur serveur.");return e.json()}).then(e=>{t.textContent="Connexion réussie.",console.log("Réponse du serveur:",e)}).catch(e=>{t.textContent="Erreur lors de la connexion.",console.error("Erreur lors de la requête fetch:",e)})})}),(0,o.render)(l);
//# sourceMappingURL=index.b226efdb.js.map
