var e=globalThis,i={},o={},a=e.parcelRequirec605;null==a&&((a=function(e){if(e in i)return i[e].exports;if(e in o){var a=o[e];delete o[e];var s={id:e,exports:{}};return i[e]=s,a.call(s.exports,s,s.exports),s.exports}var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(e,i){o[e]=i},e.parcelRequirec605=a);var s=a.register;s("7KTRf",function(e,i){a("lnjTs"),a("6D2jc"),a("eUTkO"),a("3T3Tr"),a("jcBBX"),a("augsA"),a("4cMYp"),a("hmMWw"),a("3d3pD"),a("3Bkhj")}),s("lnjTs",function(e,i){a("augsA")}),s("augsA",function(e,i){var o=a("7WQrb"),s=a("5D1XK");a("RKbfs"),a("5OQrz"),a("2LYUy");class t extends s.WebComponent{attributeChangedCallback(e,i,o){super.attributeChangedCallback(e,i,o)}handleEmailInput(e){let i=this.shadowRoot?.querySelectorAll("input"),o=i?.[0].value||"";this.Mail=o,this.validateForm()}handlePasswordInput(e){let i=this.shadowRoot?.querySelectorAll("input"),o=i?.[1].value||"";console.log(o),this.Password=o,this.validateForm()}validateForm(){console.log(this.Mail,this.Password),this.isFormValid=""!==this.Mail&&""!==this.Password,this.errorMessage=this.isFormValid?null:"Veuillez entrer à la fois un email et un mot de passe."}async sendData(){if(this.isFormValid){let e={email:this.Mail,password:this.Password};console.log(e);try{let i=await fetch("http://localhost:3000/connexion",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(i.ok){let e=await i.json();console.log("Connexion réussie",e),console.log(e);let o={nom:e.userData.last_name,prenom:e.userData.first_name,email:e.userData.email,role:e.userData.role,cours:e.userData.cours||[]};localStorage.setItem("userData",JSON.stringify(o)),window.location.href="/pages/cours"}else console.error("Erreur lors de la connexion :",i.statusText),this.errorMessage="Échec de la connexion. Veuillez vérifier vos informations."}catch(e){console.error("Erreur lors de la requête :",e),this.errorMessage="Une erreur est survenue. Veuillez réessayer plus tard."}}else this.errorMessage="Veuillez remplir tous les champs."}handleLogin(){this.validateForm(),this.isFormValid&&this.sendData()}toggleRememberMe(){this.rememberMe=!this.rememberMe}constructor(...e){super(...e),this.email="",this.password="",this.rememberMe=!1,this.isFormValid=!1,this.errorMessage=null,this.isCustom=!1,this.Mail="",this.Password=""}}(0,o.__decorate)([(0,s.state)()],t.prototype,"email",void 0),(0,o.__decorate)([(0,s.state)()],t.prototype,"password",void 0),(0,o.__decorate)([(0,s.state)()],t.prototype,"rememberMe",void 0),(0,o.__decorate)([(0,s.state)()],t.prototype,"isFormValid",void 0),(0,o.__decorate)([(0,s.state)()],t.prototype,"errorMessage",void 0),(0,o.__decorate)([(0,s.state)()],t.prototype,"isCustom",void 0),(0,o.__decorate)([(0,s.customElement)({name:"login-page",template:(0,s.html)`${e=>(0,s.html)`
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
        ${e.errorMessage?(0,s.html)`<div class="error-message">${e.errorMessage}</div>`:""}
      </div>
    `}`,styles:[(0,s.css)`
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
    `],shadowOptions:{mode:"open"}})],t)}),s("6D2jc",function(e,i){a("4cMYp")}),s("4cMYp",function(e,i){var o=a("7WQrb"),s=a("5D1XK");a("RKbfs"),a("5OQrz"),a("2LYUy");class t extends s.WebComponent{handleEmailBlur(){let e=this.shadowRoot?.querySelectorAll("input"),i=(e?.[0]).value||"";i.includes("@")?(console.log("Email valide"),this.isEmailValid=!0,this.email=i,console.log(this.email)):(console.log('L\'email doit contenir le caractère "@"'),this.isEmailValid=!1)}handlePasswordBlur(){let e=this.shadowRoot?.querySelectorAll("input"),i=(e?.[1]).value||"",o=this.CheckStrength(i);o?(console.log(o),this.isPasswordValid=!1):(console.log("Mot de passe valide"),this.isPasswordValid=!0,this.password=i,console.log(this.password))}CheckStrength(e){return e.length<6||e.length>20?`Le mot de passe doit comporter entre 6 et 20 caract\xe8res.`:/[!@#\$%\^\&*\)\(+=._-]+/.test(e)?/[A-Z]/.test(e)?/[0-9]/.test(e)?null:"Le mot de passe doit contenir au moins un chiffre.":"Le mot de passe doit contenir au moins une majuscule.":"Le mot de passe doit contenir au moins un caractère spécial."}handleConfirmPasswordBlur(){let e=this.shadowRoot?.querySelectorAll("input"),i=(e?.[2]).value||"";console.log(this.password,i),i!==this.password?(console.log("Les mots de passe ne correspondent pas"),this.isConfirmPasswordIsValid=!1):(console.log("Les mots de passe correspondent"),this.isConfirmPasswordIsValid=!0,this.confPassword=i)}handleDateBlur(){let e=this.shadowRoot?.querySelectorAll("input"),i=(e?.[3]).value||"";this.date=i}handleFirstNameBlur(){let e=this.shadowRoot?.querySelectorAll("input"),i=(e?.[4]).value||"";this.firstName=i}handleLastNameBlur(){let e=this.shadowRoot?.querySelectorAll("input"),i=(e?.[5]).value||"";this.lastName=i}checkValidity(){let e={};return this.email?(e.email=this.email,this.password)?(e.password=this.password,this.date)?(e.date=this.date,this.firstName)?(e.firstName=this.firstName,this.lastName)?(e.lastName=this.lastName,console.log("Données du formulaire valides:",e),e):(console.log("Le nom de famille est manquant."),null):(console.log("Le prénom est manquant."),null):(console.log("La date est manquante."),null):(console.log("Le mot de passe est manquant."),null):(console.log("L'email est manquant."),null)}async sendData(){let e=this.checkValidity();if(!e){console.log("Données invalides, la requête ne sera pas envoyée.");return}console.log("Envoi des données:",e);try{let i=await fetch("http://localhost:3000/inscriptions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(i.ok){let e=await i.json();console.log("Utilisateur enregistré avec succès !",e)}else console.error("Erreur lors de l'enregistrement :",i.statusText),alert("Une erreur s'est produite. Veuillez réessayer.")}catch(e){console.error("Erreur lors de la requête :",e),alert("Impossible d'enregistrer la réservation.")}}constructor(...e){super(...e),this.valid=null,this.invalid=null,this.isEmailValid=null,this.isPasswordValid=null,this.isStrongPassword=null,this.isConfirmPasswordIsValid=null,this.email="",this.password="",this.confPassword="",this.date="",this.firstName="",this.lastName=""}}(0,o.__decorate)([(0,s.state)()],t.prototype,"valid",void 0),(0,o.__decorate)([(0,s.state)()],t.prototype,"invalid",void 0),(0,o.__decorate)([(0,s.attr)()],t.prototype,"isEmailValid",void 0),(0,o.__decorate)([(0,s.attr)()],t.prototype,"isPasswordValid",void 0),(0,o.__decorate)([(0,s.attr)()],t.prototype,"isStrongPassword",void 0),(0,o.__decorate)([(0,s.attr)()],t.prototype,"isConfirmPasswordIsValid",void 0),(0,o.__decorate)([(0,s.customElement)({name:"inscription-page",template:(0,s.html)`${e=>(0,s.html)`
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
              ${null===e.isEmailValid?"":e.isEmailValid?(0,s.html)`<div class="valide"><pf-icons-check-circle></pf-icons-check-circle></div>`:(0,s.html)`<span>Votre adresse email doit contenir le caractère '@'</span>`}
            </div>
          </div>





      
          <div class=${["input-field",null===e.isPasswordValid?"":e.isPasswordValid?"-valide":"-invalide"].join("")}>
            <input class=${["input",null===e.isPasswordValid?"":e.isPasswordValid?"-valide":"-invalide"].join("")}
              type="email" 
              placeholder="password"
              @blur="${()=>e.handlePasswordBlur()}" 
              required 
              value="${e.password||""}">

            <div class="${["info",null===e.isPasswordValid?"":e.isPasswordValid?"-valide":"-invalide"].join("")}">
              ${null===e.isPasswordValid?"":e.isPasswordValid?(0,s.html)`<div class="valide"><pf-icons-check-circle></pf-icons-check-circle></div>`:(0,s.html)`<span>Votre adresse mot de passe doit contenir le caractère</span>`}
            </div>
          </div>

        
          <div class=${["input-field",null===e.isConfirmPasswordIsValid?"":e.isConfirmPasswordIsValid?"-valide":"-invalide"].join("")}>
            <input class=${["input",null===e.isConfirmPasswordIsValid?"":e.isConfirmPasswordIsValid?"-valide":"-invalide"].join("")}
              type="email" 
              placeholder="password"
              @blur="${()=>e.handleConfirmPasswordBlur()}" 
              required 
              value="${e.confPassword||""}">

            <div class="${["info",null===e.isConfirmPasswordIsValid?"":e.isConfirmPasswordIsValid?"-valide":"-invalide"].join("")}">
              ${null===e.isConfirmPasswordIsValid?"":e.isConfirmPasswordIsValid?(0,s.html)`<div class="valide"><pf-icons-check-circle></pf-icons-check-circle></div>`:(0,s.html)`<span>Votre adresse email doit contenir le caractère '@'</span>`}
            </div>
          </div>

         
          <div class='input-field'>
            <input type="date" placeholder="Date of Birth" 
              @blur="${()=>{e.handleDateBlur()}}"
              required>
          </div>

          
          <div class='input-field'>
            <input type="text" placeholder="Prénom" 
              @blur="${()=>{e.handleFirstNameBlur()}}" 
              required>
          </div>

          
          <div class='input-field'>
            <input type="text" placeholder="Nom" 
              @blur="${()=>{e.handleLastNameBlur()}}"
              required>
          </div>

          
          <button class="button-register"
            type="submit"
            @click="${()=>e.sendData()}">Inscription</button>
        </div>

        <div class="footer">
          <span>Already have an account? <a href="../connexion">Log in</a></span>
        </div>
      </div>
    `}`,styles:[(0,s.css)`
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

    `],shadowOptions:{mode:"open"}})],t)}),s("eUTkO",function(e,i){a("hmMWw")}),s("hmMWw",function(e,i){var o=a("7WQrb"),s=a("5D1XK");a("RKbfs"),a("5OQrz"),a("2LYUy");class t extends s.WebComponent{}(0,o.__decorate)([(0,s.customElement)({name:"new-password-page",template:(0,s.html)`${e=>(0,s.html)`
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
      `}`,styles:[(0,s.css)`
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
    `],shadowOptions:{mode:"open"}})],t)}),s("3T3Tr",function(e,i){a("3d3pD")}),s("3d3pD",function(e,i){var o=a("7WQrb"),s=a("5D1XK");a("RKbfs"),a("5OQrz"),a("2LYUy");class t extends s.WebComponent{attributeChangedCallback(e,i,o){"custom"===e&&(this.isCustom="true"===o),"info"===e&&(this.isInfo="true"===o),"success"===e&&(this.isSuccess="true"===o),"warning"===e&&(this.isWarning="true"===o),"danger"===e&&(this.isDanger="true"===o),super.attributeChangedCallback(e,i,o)}constructor(...e){super(...e),this.custom=null,this.info=null,this.success=null,this.warning=null,this.danger=null,this.isCustom=!1,this.isInfo=!1,this.isSuccess=!1,this.isWarning=!1,this.isDanger=!1}}(0,o.__decorate)([(0,s.attr)()],t.prototype,"custom",void 0),(0,o.__decorate)([(0,s.attr)()],t.prototype,"info",void 0),(0,o.__decorate)([(0,s.attr)()],t.prototype,"success",void 0),(0,o.__decorate)([(0,s.attr)()],t.prototype,"warning",void 0),(0,o.__decorate)([(0,s.attr)()],t.prototype,"danger",void 0),(0,o.__decorate)([(0,s.state)()],t.prototype,"isCustom",void 0),(0,o.__decorate)([(0,s.state)()],t.prototype,"isInfo",void 0),(0,o.__decorate)([(0,s.state)()],t.prototype,"isSuccess",void 0),(0,o.__decorate)([(0,s.state)()],t.prototype,"isWarning",void 0),(0,o.__decorate)([(0,s.state)()],t.prototype,"isDanger",void 0),(0,o.__decorate)([(0,s.customElement)({name:"notification-box",template:(0,s.html)`${e=>(0,s.html)`
      <div class="${["notification",e.isCustom?"-custom":"",e.isInfo?"-info":"",e.isSuccess?"-success":"",e.isWarning?"-warning":"",e.isDanger?"-danger":""].join("")}">
        <div class="icon">
          ${e.isCustom?(0,s.html)`<pf-icons-bell></pf-icons-bell>`:""}
          ${e.isInfo?(0,s.html)`<pf-icons-info-circle></pf-icons-info-circle>`:""}
          ${e.isSuccess?(0,s.html)`<pf-icons-check-circle></pf-icons-check-circle>`:""}
          ${e.isWarning?(0,s.html)`<pf-icons-exclamation-triangle></pf-icons-exclamation-triangle>`:""}
          ${e.isDanger?(0,s.html)`<pf-icons-exclamation-circle></pf-icons-exclamation-circle>`:""}
        </div>
        <div class="main-body">
          <div class="title">
            ${e.isCustom?(0,s.html)`<pf-icons-bell></pf-icons-bell>`:""}
            ${e.isInfo?(0,s.html)`<h3>Information</h3>`:""}
            ${e.isSuccess?(0,s.html)`<h3>Success</h3>`:""}
            ${e.isWarning?(0,s.html)`<h3>Warning</h3>`:""}
            ${e.isDanger?(0,s.html)`<h3>Danger</h3>`:""}
          </div>
          <span class="custom-text">
            <slot></slot>
          </span>
        </div>
        <div class="toggle-close">
          <pf-icons-times></pf-icons-times>
        </div>
      </div>
    `}`,styles:[(0,s.css)`
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
    `],shadowOptions:{mode:"open"}})],t)}),s("jcBBX",function(e,i){a("3Bkhj")}),s("3Bkhj",function(e,i){var o=a("7WQrb"),s=a("5D1XK");a("RKbfs"),a("5OQrz"),a("2LYUy");class t extends s.WebComponent{}(0,o.__decorate)([(0,s.customElement)({name:"navigation-panel",template:(0,s.html)`${e=>(0,s.html)`
    <div class="navigation">
          <ul>
            <li><a href="/pages/cours">cours</a></li>
            <li><a href="/pages/informations">infos</a></li>
            <li><a href="/pages/compte">compte</a></li>
            <li><a href="/pages/profile">profile</a></li>
          </ul>
        </div>`}`,styles:[(0,s.css)`
      .navigation{
        color: black;
        background-color: #151515;
      }
      ul{
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      li{
        list-style: none;
        padding: 10px 10px;
      }
      a{
        color: #ffffff;
        text-decoration: none;
      }
    `]})],t)});
//# sourceMappingURL=index.95896544.js.map
