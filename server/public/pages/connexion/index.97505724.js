var e=globalThis,o={},t={},n=e.parcelRequirec605;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){t[e]=o},e.parcelRequirec605=n),n.register;var r=n("5D1XK");n("RKbfs"),n("5OQrz"),n("2LYUy");var l=n("7WQrb"),r=n("5D1XK");n("RKbfs"),n("5OQrz"),n("2LYUy");class i extends r.WebComponent{}i=(0,l.__decorate)([(0,r.customElement)({name:"login-page",template:(0,r.html)`${e=>(0,r.html)`
        <div class="login">
          <div class="header">
            <h1>Log in to your account</h1>
          </div>
          <div class="main-body">
            <div class="input-field">
              <pf-icons-envelope></pf-icons-envelope>
              <input type="email" placeholder="Email">
            </div>
            <div class="input-field">
              <pf-icons-lock></pf-icons-lock class="icon">
              <input type="password" placeholder="Password">
            </div>
            <div class="button-login">
              <button>Log in</button>
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
      .main-body {
        display: grid;
        gap: 5px;
        width: 60%;
      }
      .input-field {
        border: 1px solid #eff3f8;
        padding: 10px 10px;
        border-radius: 3px;
        background-color: #fafbfe;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
      }
      input[type="email"]{
        border: none;
        background-color: #fafbfe;
      }
      input[type="email"]::placeholder {
        color: #a2adbe;
      }
      input[type="password"]{
        border: none;
        background-color: #fafbfe;
      }
      input[type="password"]:placeholder{
        color: #a2adbe;
      }
      label{
        color: #a2adbe;
      }
      .button-login {
        background-color: #0066cc;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 10px;
        border-radius: 3px;
        cursor: pointer;
      }
      .button-login:hover{
        background-color: #004080;
      }
    `],shadowOptions:{mode:"open"}})],i);let a=(0,r.html)`${e=>(0,r.html)`<login-page>
    <h3>Hello</h3>
  </login-page>`}`;document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector("form"),o=document.createElement("div");e?.appendChild(o),e&&e.addEventListener("submit",e=>{e.preventDefault();let t=document.querySelectorAll("input"),n=t[0].value,r=t[1].value;if(!n||!r){o.textContent="Veuillez remplir tous les champs.";return}let l={email:n,password:r};console.log(l),fetch("http://localhost:3000/connexion/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}).then(e=>{if(!e.ok)throw Error("Erreur serveur.");return e.json()}).then(e=>{if(e.length>0){for(let o of e)localStorage.setItem("first_name",o.first_name),localStorage.setItem("email",o.email),localStorage.setItem("role",o.status),localStorage.setItem("isLogged","true"),console.log("mise en mémoire dans le locale storage"+o.first_name+o.email);window.location.href="http://localhost:1234"}else o.textContent="Utilisateur non trouvé ou mot de passe incorrect.";console.log("Réponse du serveur:",e)}).catch(e=>{o.innerHTML="Vous n'êtes pas encore inscris, veuillez vous <a href='inscriptions'><strong>inscrire</string></a>",console.error("Erreur lors de la requête fetch:",e)})})}),(0,r.render)(a);
//# sourceMappingURL=index.97505724.js.map
