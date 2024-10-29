var e=globalThis,t={},o={},n=e.parcelRequirec605;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},e.parcelRequirec605=n),n.register;var r=n("5D1XK");n("RKbfs"),n("5OQrz"),n("2LYUy");var l=n("7WQrb"),r=n("5D1XK");n("RKbfs"),n("5OQrz"),n("2LYUy");class i extends r.WebComponent{}i=(0,l.__decorate)([(0,r.customElement)({name:"login-page",template:(0,r.html)`${e=>(0,r.html)`
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
      `}`,styles:[(0,r.css)`
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
      .input-field {
        border: #eff3f8;
      }
      .button-login {
        background-color: #0066cc;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `],shadowOptions:{mode:"open"}})],i);let s=(0,r.html)`${e=>(0,r.html)`<login-page>
    <h3>Hello</h3>
  </login-page>`}`;document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector("form"),t=document.createElement("div");e?.appendChild(t),e&&e.addEventListener("submit",e=>{e.preventDefault();let o=document.querySelectorAll("input"),n=o[0].value,r=o[1].value;if(!n||!r){t.textContent="Veuillez remplir tous les champs.";return}let l={email:n,password:r};console.log(l),fetch("http://localhost:3000/connexion/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}).then(e=>{if(!e.ok)throw Error("Erreur serveur.");return e.json()}).then(e=>{if(e.length>0){for(let t of e)localStorage.setItem("first_name",t.first_name),localStorage.setItem("email",t.email),localStorage.setItem("role",t.status),localStorage.setItem("isLogged","true"),console.log("mise en mémoire dans le locale storage"+t.first_name+t.email);window.location.href="http://localhost:1234"}else t.textContent="Utilisateur non trouvé ou mot de passe incorrect.";console.log("Réponse du serveur:",e)}).catch(e=>{t.innerHTML="Vous n'êtes pas encore inscris, veuillez vous <a href='inscriptions'><strong>inscrire</string></a>",console.error("Erreur lors de la requête fetch:",e)})})}),(0,r.render)(s);
//# sourceMappingURL=index.42c760e8.js.map
