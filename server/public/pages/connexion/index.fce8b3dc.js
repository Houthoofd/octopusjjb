var e=globalThis,t={},r={},o=e.parcelRequirec605;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},e.parcelRequirec605=o),o.register;var n=o("1BF7I");o("lTDtW");let l=(0,n.html)`${e=>(0,n.html)`<div class='login'>
        <h1>Connexion</h1>
        <form class='login-form'>
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
    </div>`}`;document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector("form"),t=document.createElement("div");e?.appendChild(t),e&&e.addEventListener("submit",e=>{e.preventDefault();let r=document.querySelectorAll("input"),o=r[0].value,n=r[1].value;if(!o||!n){t.textContent="Veuillez remplir tous les champs.";return}let l={email:o,password:n};console.log(l),fetch("http://localhost:3000/connexion/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}).then(e=>{if(!e.ok)throw Error("Erreur serveur.");return e.json()}).then(e=>{if(e.length>0){for(let t of e)localStorage.setItem("first_name",t.first_name),localStorage.setItem("email",t.email);window.location.href="http://localhost:1234"}else t.textContent="Utilisateur non trouvé ou mot de passe incorrect.";console.log("Réponse du serveur:",e)}).catch(e=>{t.textContent="VOus n'êtes pas encore enregistré, veuillez vous <a href='page/inscription'><strong>inscrire</string></a>",console.error("Erreur lors de la requête fetch:",e)})})}),(0,n.render)(l);
//# sourceMappingURL=index.fce8b3dc.js.map
