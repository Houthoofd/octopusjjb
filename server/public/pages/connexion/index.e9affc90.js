var e=globalThis,o={},t={},i=e.parcelRequirec605;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var i=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,i.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,o){t[e]=o},e.parcelRequirec605=i);var r=i.register;r("7KTRf",function(e,o){i("lnjTs"),i("6D2jc"),i("eUTkO"),i("3T3Tr"),i("augsA"),i("4cMYp"),i("hmMWw"),i("3d3pD")}),r("lnjTs",function(e,o){i("augsA")}),r("augsA",function(e,o){var t=i("7WQrb"),r=i("5D1XK");i("RKbfs"),i("5OQrz"),i("2LYUy");class n extends r.WebComponent{}(0,t.__decorate)([(0,r.customElement)({name:"login-page",template:(0,r.html)`${e=>(0,r.html)`
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
            <a href="../password">Forgot password ?</a>
          </div>
          <div class="footer">
            <span>Don't have an account ? <a href="../inscriptions">Create an account</a></span>
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
        width: 38ch;
        padding: 10px 10px;
      }
      input[type="email"]::placeholder {
        color: #a2adbe;
      }
      input[type="password"]{
        border: none;
        background-color: #fafbfe;
        width: 38ch;
        padding: 10px 10px;
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
      a{
        text-decoration: none;
        font-weight: bold;
      }
    `],shadowOptions:{mode:"open"}})],n)}),r("6D2jc",function(e,o){i("4cMYp")}),r("4cMYp",function(e,o){var t=i("7WQrb"),r=i("5D1XK");i("RKbfs"),i("5OQrz"),i("2LYUy");class n extends r.WebComponent{}(0,t.__decorate)([(0,r.customElement)({name:"inscription-page",template:(0,r.html)`${e=>(0,r.html)`
      <div class="register">
          <div class="header">
            <h1>Create a new account</h1>
          </div>
          <div class="main-body">
            <div class='input-field'>
              <input type="email" placeholder="Email">
            </div>
            <div class='input-field'>
              <input type="password" placeholder="Password">
            </div>
            <div class='input-field'>
              <input type="date" placeholder="date">
            </div>
            <div class='input-field'>
              <input type="text" placeholder="Prénom">
            </div>
            <div class='input-field'>
              <input type="text" placeholder="Nom">
            </div>
            <button class="button-register" type="submit">Inscription</button>
          </div>

          <div class="footer">
            <span>Already have an account ? <a href="../connexion">Log in</a></span>
          </div>
        </div>
    `}`,styles:[(0,r.css)`
      .register{
        width: 500px;
        height: 570px;
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
        border-radius: 3px;
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
        width: 38ch;
        padding: 10px 10px;
      }
      input[type="email"]::placeholder {
        color: #a2adbe;
      }
      input[type="date"]{
        border: none;
        background-color: #fafbfe;
        width: 38ch;
        padding: 10px 10px;
      }
      input[type="date"]::placeholder {
        color: #a2adbe;
      }
      input[type="text"]{
        border: none;
        background-color: #fafbfe;
        width: 38ch;
        padding: 10px 10px;
      }
      input[type="text"]::placeholder {
        color: #a2adbe;
      }
      input[type="password"]{
        border: none;
        background-color: #fafbfe;
        width: 38ch;
        padding: 10px 10px;
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
      .button-register {
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
      .button-register:hover{
        background-color: #004080;
      }
      a{
        text-decoration: none;
        font-weight: bold;
      }
    `],shadowOptions:{mode:"open"}})],n)}),r("eUTkO",function(e,o){i("hmMWw")}),r("hmMWw",function(e,o){var t=i("7WQrb"),r=i("5D1XK");i("RKbfs"),i("5OQrz"),i("2LYUy");class n extends r.WebComponent{}(0,t.__decorate)([(0,r.customElement)({name:"new-password-page",template:(0,r.html)`${e=>(0,r.html)`
        <div class="login">
          <div class="header">
            <h1>Change your password</h1>
          </div>
          <div class="main-body">
            <div class="input-field">
              <input type="email" placeholder="Email">
            </div>
            <div class="input-field">
              <input type="password" placeholder="Password">
            </div>
            <button class="button-login">Save change</button>
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
        width: 38ch;
        padding: 10px 10px;
      }
      input[type="email"]::placeholder {
        color: #a2adbe;
      }
      input[type="password"]{
        border: none;
        background-color: #fafbfe;
        width: 38ch;
        padding: 10px 10px;
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
      a{
        text-decoration: none;
        font-weight: bold;
      }
    `],shadowOptions:{mode:"open"}})],n)}),r("3T3Tr",function(e,o){i("3d3pD")}),r("3d3pD",function(e,o){var t=i("7WQrb"),r=i("5D1XK");i("RKbfs"),i("5OQrz"),i("2LYUy");class n extends r.WebComponent{attributeChangedCallback(e,o,t){super.attributeChangedCallback(e,o,t)}constructor(...e){super(...e),this.custom=null,this.info=null,this.success=null,this.warning=null,this.danger=null,this.isCustom=!1,this.isInfo=!1,this.isSuccess=!1,this.isWarning=!1,this.isDanger=!1}}(0,t.__decorate)([(0,r.attr)()],n.prototype,"custom",void 0),(0,t.__decorate)([(0,r.attr)()],n.prototype,"info",void 0),(0,t.__decorate)([(0,r.attr)()],n.prototype,"success",void 0),(0,t.__decorate)([(0,r.attr)()],n.prototype,"warning",void 0),(0,t.__decorate)([(0,r.attr)()],n.prototype,"danger",void 0),(0,t.__decorate)([(0,r.state)()],n.prototype,"isCustom",void 0),(0,t.__decorate)([(0,r.state)()],n.prototype,"isInfo",void 0),(0,t.__decorate)([(0,r.state)()],n.prototype,"isSuccess",void 0),(0,t.__decorate)([(0,r.state)()],n.prototype,"isWarning",void 0),(0,t.__decorate)([(0,r.state)()],n.prototype,"isDanger",void 0),(0,t.__decorate)([(0,r.customElement)({name:"notification-box",template:(0,r.html)`${e=>(0,r.html)`
      <div class='pf-alert'>
        <div class="${["pf-v5-c-alert",e.isCustom?"pf-m-custom":"",e.isInfo?"pf-m-info":"",e.isSuccess?"pf-m-success":"",e.isWarning?"pf-m-warning":"",e.isDanger?"pf-m-danger":""].join(" ")}">
          <div class="pf-v5-c-alert__icon">
            ${e.isCustom?(0,r.html)`<pf-icons-bell></pf-icons-bell>`:""}
            ${e.isInfo?(0,r.html)`<pf-icons-info-circle></pf-icons-info-circle>`:""}
            ${e.isSuccess?(0,r.html)`<pf-icons-check-circle></pf-icons-check-circle>`:""}
            ${e.isWarning?(0,r.html)`<pf-icons-exclamation-triangle></pf-icons-exclamation-triangle>`:""}
            ${e.isDanger?(0,r.html)`<pf-icons-exclamation-circle></pf-icons-exclamation-circle>`:""}
          </div>
          <p class="pf-v5-c-alert__title">
            <slot name="content"></slot>
          </p>
        </div>
      </div>
    `}`,styles:[(0,r.css)`
    .pf-alert {
      width: 300px;
      height: 50px;
      background-color: #ffffff;
    }
    `],shadowOptions:{mode:"open"}})],n)});var n=i("5D1XK");i("RKbfs"),i("5OQrz"),i("2LYUy"),i("7KTRf");let a=(0,n.html)`${e=>(0,n.html)`<login-page>
    <h3>Hello</h3>
  </login-page>`}`;document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector("form"),o=document.createElement("div");e?.appendChild(o),e&&e.addEventListener("submit",e=>{e.preventDefault();let t=document.querySelectorAll("input"),i=t[0].value,r=t[1].value;if(!i||!r){o.textContent="Veuillez remplir tous les champs.";return}let n={email:i,password:r};console.log(n),fetch("http://localhost:3000/connexion/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(e=>{if(!e.ok)throw Error("Erreur serveur.");return e.json()}).then(e=>{if(e.length>0){for(let o of e)localStorage.setItem("first_name",o.first_name),localStorage.setItem("email",o.email),localStorage.setItem("role",o.status),localStorage.setItem("isLogged","true"),console.log("mise en mémoire dans le locale storage"+o.first_name+o.email);window.location.href="http://localhost:1234"}else o.textContent="Utilisateur non trouvé ou mot de passe incorrect.";console.log("Réponse du serveur:",e)}).catch(e=>{o.innerHTML="Vous n'êtes pas encore inscris, veuillez vous <a href='inscriptions'><strong>inscrire</string></a>",console.error("Erreur lors de la requête fetch:",e)})})}),(0,n.render)(a);
//# sourceMappingURL=index.e9affc90.js.map
