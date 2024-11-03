var e=globalThis,i={},o={},t=e.parcelRequirec605;null==t&&((t=function(e){if(e in i)return i[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return i[e]=a,t.call(a.exports,a,a.exports),a.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,i){o[e]=i},e.parcelRequirec605=t);var a=t.register;a("7KTRf",function(e,i){t("lnjTs"),t("6D2jc"),t("eUTkO"),t("3T3Tr"),t("augsA"),t("4cMYp"),t("hmMWw"),t("3d3pD")}),a("lnjTs",function(e,i){t("augsA")}),a("augsA",function(e,i){var o=t("7WQrb"),a=t("5D1XK");t("RKbfs"),t("5OQrz"),t("2LYUy");class r extends a.WebComponent{attributeChangedCallback(e,i,o){super.attributeChangedCallback(e,i,o)}handleEmailInput(e){let i=this.shadowRoot?.querySelectorAll("input");i?.[0].value}handlePasswordInput(e){let i=this.shadowRoot?.querySelectorAll("input");console.log(i?.[1].value||"")}validateForm(){this.isFormValid=""!==this.email&&""!==this.password,this.errorMessage=this.isFormValid?null:"Please enter both email and password."}handleLogin(){this.isFormValid?(console.log("Login successful"),this.errorMessage=null):this.errorMessage="Please fill in all fields."}toggleRememberMe(){this.rememberMe=!this.rememberMe}constructor(...e){super(...e),this.email="",this.password="",this.rememberMe=!1,this.isFormValid=!1,this.errorMessage=null,this.isCustom=!1}}(0,o.__decorate)([(0,a.state)()],r.prototype,"email",void 0),(0,o.__decorate)([(0,a.state)()],r.prototype,"password",void 0),(0,o.__decorate)([(0,a.state)()],r.prototype,"rememberMe",void 0),(0,o.__decorate)([(0,a.state)()],r.prototype,"isFormValid",void 0),(0,o.__decorate)([(0,a.state)()],r.prototype,"errorMessage",void 0),(0,o.__decorate)([(0,a.state)()],r.prototype,"isCustom",void 0),(0,o.__decorate)([(0,a.customElement)({name:"login-page",template:(0,a.html)`${e=>(0,a.html)`
      <div class="login">
        <div class="header">
          <h1>Log in to your account</h1>
        </div>
        <div class="main-body">
          <div class="input-field">
            <pf-icons-envelope></pf-icons-envelope>
            <input 
              type="email" 
              placeholder="Email" 
              @input="${e=>e.handleEmailInput()}" 
              value="${e.email}"
            >
          </div>
          <div class="input-field">
            <pf-icons-lock></pf-icons-lock>
            <input 
              type="password" 
              placeholder="Password" 
              @input="${e=>e.handlePasswordInput()}" 
              value="${e.password}"
            >
          </div>
          <button 
            class="button-login" 
            ?disabled="${!e.isFormValid}"
            @click="${()=>e.handleLogin()}"
          >
            Log in
          </button>
        </div>
        <div class="remember-password">
          <div class="radio">
            <input 
              type="radio" 
              @change="${()=>e.toggleRememberMe()}" 
              ?checked="${e.rememberMe}"
            >
            <label for="remember me">Remember me</label>
          </div>
          <a href="../password">Forgot password?</a>
        </div>
        <div class="footer">
          <span>Don't have an account? <a href="../inscriptions">Create an account</a></span>
        </div>
        ${e.errorMessage?(0,a.html)`<div class="error-message">${e.errorMessage}</div>`:""}
      </div>
    `}`,styles:[(0,a.css)`
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
        border-radius: 5px;
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
    `],shadowOptions:{mode:"open"}})],r)}),a("6D2jc",function(e,i){t("4cMYp")}),a("4cMYp",function(e,i){var o=t("7WQrb"),a=t("5D1XK");t("RKbfs"),t("5OQrz"),t("2LYUy");class r extends a.WebComponent{handleEmailBlur(){let e=this.shadowRoot?.querySelectorAll("input"),i=(e?.[0]).value||"";i.includes("@")?(console.log("Email valide"),this.isEmailValid=!0,this.email=i,console.log(this.email)):(console.log('L\'email doit contenir le caractère "@"'),this.isEmailValid=!1)}constructor(...e){super(...e),this.valid=null,this.invalid=null,this.isEmailValid=null,this.email=""}}(0,o.__decorate)([(0,a.state)()],r.prototype,"valid",void 0),(0,o.__decorate)([(0,a.state)()],r.prototype,"invalid",void 0),(0,o.__decorate)([(0,a.attr)()],r.prototype,"isEmailValid",void 0),(0,o.__decorate)([(0,a.customElement)({name:"inscription-page",template:(0,a.html)`${e=>(0,a.html)`
      <div class="register">
        <div class="header">
          <h1>Create a new account</h1>
        </div>
        <div class="main-body">
          
          <div class=${["input-field",null===e.isEmailValid?"":e.isEmailValid?"-valide":"-invalide"].join("")}>
            <input class=${["input",null===e.isEmailValid?"":e.isEmailValid?"-valide":"-invalide"].join("")}
              type="email" 
              placeholder="Email"
              @blur="${()=>e.handleEmailBlur()}" 
              required 
              value="${e.email||""}">

            <div class="${["info",null===e.isEmailValid?"":e.isEmailValid?"-valide":"-invalide"].join("")}">
              ${null===e.isEmailValid?"":e.isEmailValid?(0,a.html)`<div class="valide"><pf-icons-check-circle></pf-icons-check-circle></div>`:(0,a.html)`<span>Votre adresse email doit contenir le caractère '@'</span>`}
            </div>
          </div>





      
          <div class='input-field'>
            <input type="password" placeholder="Password" 
              @input="${e=>{e.handlePasswordInput()}}"
              required minlength="6"
              pattern="^(?=.*[!@#$%^&*(),.?\:{}|<>])[A-Za-z\d@$!%*?&]{6,}$">
            <div class="password-strength">
            </div>
          </div>

        
          <div class='input-field'>
            <input type="password" placeholder="Confirm Password" 
              @input="${e=>{e.handleConfirmPasswordInput()}}"
              required>
          </div>

         
          <div class='input-field'>
            <input type="date" placeholder="Date of Birth" 
              @input="${e=>{e.handleDateInput()}}"
              required>
          </div>

          
          <div class='input-field'>
            <input type="text" placeholder="Prénom" 
              @input="${e=>{e.handleFirstNameInput()}}" 
              required>
          </div>

          
          <div class='input-field'>
            <input type="text" placeholder="Nom"  
              required>
          </div>

          
          <button class="button-register" type="submit">Inscription</button>
        </div>

        <div class="footer">
          <span>Already have an account? <a href="../connexion">Log in</a></span>
        </div>
      </div>
    `}`,styles:[(0,a.css)`
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
      /* Style quand l'email est valide */
      input[type="email"]:valid {
        background-color: #f1f8e9 !important;
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
      .error {
        color: red;
        font-size: 12px;
      }
      .password-strength {
        height: 8px;
        background-color: #e0e0e0;
        margin-top: 5px;
        border-radius: 4px;
      }
      .strength-bar {
        height: 100%;
        background-color: #76c7c0;
        border-radius: 4px;
        transition: width 0.3s ease-in-out;
      }
      .valide{
        color: #3e8635;
      }
      .info{
        display: none;
      }
      .info.default .valide,
      .info.default span {
        display: none; /* Rien n'est affiché par défaut */
      }

      .info.valid .valide {
        display: block; /* Affiche l'icône de validation */
      }

      .info.invalid .valide {
        display: none; /* Masque l'icône en cas d'email invalide */
      }

      .info.invalid span {
        display: block; /* Affiche le message d'erreur */
      }
      .input-field-valide{
        background-color: #f1f8e9;
        border: 1px solid #eff3f8;
        padding: 10px 10px;
        border-radius: 3px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
      }
      .input-field-invalide{
        background-color: #ffebee;
        border: 1px solid #eff3f8;
        padding: 10px 10px;
        border-radius: 3px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
      }
      .input-valide{
        background-color: #f1f8e9; 
      }
      .input-invalide{
        background-color: #ffebee;
      }

    `],shadowOptions:{mode:"open"}})],r)}),a("eUTkO",function(e,i){t("hmMWw")}),a("hmMWw",function(e,i){var o=t("7WQrb"),a=t("5D1XK");t("RKbfs"),t("5OQrz"),t("2LYUy");class r extends a.WebComponent{}(0,o.__decorate)([(0,a.customElement)({name:"new-password-page",template:(0,a.html)`${e=>(0,a.html)`
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
      `}`,styles:[(0,a.css)`
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
    `],shadowOptions:{mode:"open"}})],r)}),a("3T3Tr",function(e,i){t("3d3pD")}),a("3d3pD",function(e,i){var o=t("7WQrb"),a=t("5D1XK");t("RKbfs"),t("5OQrz"),t("2LYUy");class r extends a.WebComponent{attributeChangedCallback(e,i,o){"custom"===e&&(this.isCustom="true"===o),"info"===e&&(this.isInfo="true"===o),"success"===e&&(this.isSuccess="true"===o),"warning"===e&&(this.isWarning="true"===o),"danger"===e&&(this.isDanger="true"===o),super.attributeChangedCallback(e,i,o)}constructor(...e){super(...e),this.custom=null,this.info=null,this.success=null,this.warning=null,this.danger=null,this.isCustom=!1,this.isInfo=!1,this.isSuccess=!1,this.isWarning=!1,this.isDanger=!1}}(0,o.__decorate)([(0,a.attr)()],r.prototype,"custom",void 0),(0,o.__decorate)([(0,a.attr)()],r.prototype,"info",void 0),(0,o.__decorate)([(0,a.attr)()],r.prototype,"success",void 0),(0,o.__decorate)([(0,a.attr)()],r.prototype,"warning",void 0),(0,o.__decorate)([(0,a.attr)()],r.prototype,"danger",void 0),(0,o.__decorate)([(0,a.state)()],r.prototype,"isCustom",void 0),(0,o.__decorate)([(0,a.state)()],r.prototype,"isInfo",void 0),(0,o.__decorate)([(0,a.state)()],r.prototype,"isSuccess",void 0),(0,o.__decorate)([(0,a.state)()],r.prototype,"isWarning",void 0),(0,o.__decorate)([(0,a.state)()],r.prototype,"isDanger",void 0),(0,o.__decorate)([(0,a.customElement)({name:"notification-box",template:(0,a.html)`${e=>(0,a.html)`
      <div class="${["notification",e.isCustom?"-custom":"",e.isInfo?"-info":"",e.isSuccess?"-success":"",e.isWarning?"-warning":"",e.isDanger?"-danger":""].join("")}">
        <div class="icon">
          ${e.isCustom?(0,a.html)`<pf-icons-bell></pf-icons-bell>`:""}
          ${e.isInfo?(0,a.html)`<pf-icons-info-circle></pf-icons-info-circle>`:""}
          ${e.isSuccess?(0,a.html)`<pf-icons-check-circle></pf-icons-check-circle>`:""}
          ${e.isWarning?(0,a.html)`<pf-icons-exclamation-triangle></pf-icons-exclamation-triangle>`:""}
          ${e.isDanger?(0,a.html)`<pf-icons-exclamation-circle></pf-icons-exclamation-circle>`:""}
        </div>
        <div class="main-body">
          <div class="title">
            ${e.isCustom?(0,a.html)`<pf-icons-bell></pf-icons-bell>`:""}
            ${e.isInfo?(0,a.html)`<h3>Information</h3>`:""}
            ${e.isSuccess?(0,a.html)`<h3>Success</h3>`:""}
            ${e.isWarning?(0,a.html)`<h3>Warning</h3>`:""}
            ${e.isDanger?(0,a.html)`<h3>Danger</h3>`:""}
          </div>
          <span class="custom-text">
            <slot></slot>
          </span>
        </div>
        <div class="toggle-close">
          <pf-icons-times></pf-icons-times>
        </div>
      </div>
    `}`,styles:[(0,a.css)`
      .notification-success{
        width: 300px;
        background-color: #ffffff;
        position: fixed;
        top: 0;
        right: 0;
        margin-top: 10px;
        margin-right: 10px;
        padding: 10px 10px;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        color: #3e8635;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .layer-success {
        width: 5%;
        background-color: #4CAF50;
        border-radius: 3px;
      }
      .main-body{
        display: inline-flex;
        align-items: center;
        gap: 20px;
      }
      .toggle-close{
        color: #9E9E9E;
        cursor: pointer;
      }
      .icon {
        transform: translateY(2px);
      }
    `],shadowOptions:{mode:"open"}})],r)});
//# sourceMappingURL=index.82c9b7a9.js.map
