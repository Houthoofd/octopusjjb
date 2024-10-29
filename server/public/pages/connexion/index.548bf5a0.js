var e=globalThis,t={},o={},r=e.parcelRequirec605;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},e.parcelRequirec605=r),r.register;var n=r("5D1XK");r("RKbfs"),r("5OQrz"),r("2LYUy");var l=r("7WQrb"),n=r("5D1XK");r("RKbfs"),r("5OQrz"),r("2LYUy");class i extends n.WebComponent{}i=(0,l.__decorate)([(0,n.customElement)({name:"login-page",template:(0,n.html)`${e=>(0,n.html)`
        <div class="login">
          <div class="header">
            <h1>Log in to your account</h1>
          </div>
          <div class="main-body">
            <div class="input-field">
              <label for="email">Email</label>
              <input type="email">
            </div>
            <div class="input-field">
              <label for="password">Password</label>
              <input type="password">
            </div>
            <div class="button-login">
              <pf-button primary>Log in</pf-button>
            </div>
          </div>
          <div class="footer">
            <span>Don't have an account ? <a href="../pages/inscription">Create an account</a></span>
          </div>
        </div>
      `}`,styles:[(0,n.css)`
      .login{
        width: 500px;
        height: 500px;
        background-color: #ffffff;
        position: absolute;
        top: 25%;
        left: 15%;
        color: black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `],shadowOptions:{mode:"open"}})],i);let s=(0,n.html)`${e=>(0,n.html)`<login-page>
    <h3>Hello</h3>
  </login-page>`}`;document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector("form"),t=document.createElement("div");e?.appendChild(t),e&&e.addEventListener("submit",e=>{e.preventDefault();let o=document.querySelectorAll("input"),r=o[0].value,n=o[1].value;if(!r||!n){t.textContent="Veuillez remplir tous les champs.";return}let l={email:r,password:n};console.log(l),fetch("http://localhost:3000/connexion/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}).then(e=>{if(!e.ok)throw Error("Erreur serveur.");return e.json()}).then(e=>{if(e.length>0){for(let t of e)localStorage.setItem("first_name",t.first_name),localStorage.setItem("email",t.email),localStorage.setItem("role",t.status),localStorage.setItem("isLogged","true"),console.log("mise en mémoire dans le locale storage"+t.first_name+t.email);window.location.href="http://localhost:1234"}else t.textContent="Utilisateur non trouvé ou mot de passe incorrect.";console.log("Réponse du serveur:",e)}).catch(e=>{t.innerHTML="Vous n'êtes pas encore inscris, veuillez vous <a href='inscriptions'><strong>inscrire</string></a>",console.error("Erreur lors de la requête fetch:",e)})})}),(0,n.render)(s);
//# sourceMappingURL=index.548bf5a0.js.map
