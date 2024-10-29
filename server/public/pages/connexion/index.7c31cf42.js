var e=globalThis,o={},r={},t=e.parcelRequirec605;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,o){r[e]=o},e.parcelRequirec605=t),t.register;var n=t("5D1XK");t("RKbfs"),t("5OQrz"),t("2LYUy");var a=t("7WQrb"),n=t("5D1XK");t("RKbfs"),t("5OQrz"),t("2LYUy");class i extends n.WebComponent{}i=(0,a.__decorate)([(0,n.customElement)({name:"login-page",template:(0,n.html)`${e=>(0,n.html)`
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
            <button class="button-login">Log in</button>
          </div>
          <div class="remember-password">
            <div class="radio">
              <input type="radio">
              <label for="remember me">Remember me</label>
            </div>
            <a href="#">Forgot password ?</a>
          </div>
          <div class="footer">
            <span>Don't have an account ? <a href="../inscriptions">Create an account</a></span>
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
        gap: 7%;
      }
      .main-body {
        display: grid;
        gap: 5px;
        width: 65%;
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
      input[type="radio"] {
        appearance: none;
        width: 25px;
        height: 25px;
        border: 1px solid #eff3f8;
        border-radius: 3px;
        background-color: #fff;
        cursor: pointer;
        margin: 0;
      }

      input[type="radio"]:checked {
        background-color: #0066cc; 
        border: 1px solid #0066cc;
      }
      label{
        color: #a2adbe;
      }
      .button-login {
        background-color: #0066cc;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px 10px;
        border-radius: 3px;
        cursor: pointer;
        border: none;
        font-size: 18px;
        color: #ffffff;
      }
      .button-login:hover{
        background-color: #004080;
      }
      .remember-password {
        display: flex;
        gap: 50px;
      }
      .radio {
        display: flex;
        align-items: center;
        gap: 10px;
      }
    `],shadowOptions:{mode:"open"}})],i);let l=(0,n.html)`${e=>(0,n.html)`<login-page>
    <h3>Hello</h3>
  </login-page>`}`;document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector("form"),o=document.createElement("div");e?.appendChild(o),e&&e.addEventListener("submit",e=>{e.preventDefault();let r=document.querySelectorAll("input"),t=r[0].value,n=r[1].value;if(!t||!n){o.textContent="Veuillez remplir tous les champs.";return}let a={email:t,password:n};console.log(a),fetch("http://localhost:3000/connexion/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then(e=>{if(!e.ok)throw Error("Erreur serveur.");return e.json()}).then(e=>{if(e.length>0){for(let o of e)localStorage.setItem("first_name",o.first_name),localStorage.setItem("email",o.email),localStorage.setItem("role",o.status),localStorage.setItem("isLogged","true"),console.log("mise en mémoire dans le locale storage"+o.first_name+o.email);window.location.href="http://localhost:1234"}else o.textContent="Utilisateur non trouvé ou mot de passe incorrect.";console.log("Réponse du serveur:",e)}).catch(e=>{o.innerHTML="Vous n'êtes pas encore inscris, veuillez vous <a href='inscriptions'><strong>inscrire</string></a>",console.error("Erreur lors de la requête fetch:",e)})})}),(0,n.render)(l);
//# sourceMappingURL=index.7c31cf42.js.map
