var e=globalThis,t={},o={},r=e.parcelRequirec605;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var l={id:e,exports:{}};return t[e]=l,r.call(l.exports,l,l.exports),l.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){o[e]=t},e.parcelRequirec605=r),r.register;var l=r("1BF7I");r("lTDtW");let n=(0,l.html)`${e=>(0,l.html)`<div class='login'>
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
    </div>`}`;document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector("form"),t=document.createElement("div");e?.appendChild(t),e&&e.addEventListener("submit",e=>{e.preventDefault();let o=document.querySelectorAll("input"),r=o[0].value,l=o[1].value;if(!r||!l){t.textContent="Veuillez remplir tous les champs.";return}let n={email:r,password:l};console.log(n),fetch("http://localhost:3000/connexion/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(e=>{if(!e.ok)throw Error("Erreur serveur.");return e.json()}).then(e=>{if(e.length>0){for(let t of e)localStorage.setItem("first_name",t.first_name),localStorage.setItem("email",t.email),localStorage.setItem("role",t.status),localStorage.setItem("isLogged","true"),console.log("mise en mémoire dans le locale storage"+t.first_name+t.email);window.location.href="http://localhost:1234"}else t.textContent="Utilisateur non trouvé ou mot de passe incorrect.";console.log("Réponse du serveur:",e)}).catch(e=>{t.innerHTML="Vous n'êtes pas encore inscris, veuillez vous <a href='inscriptions'><strong>inscrire</string></a>",console.error("Erreur lors de la requête fetch:",e)})})}),(0,l.render)(n);
//# sourceMappingURL=index.b054e036.js.map
