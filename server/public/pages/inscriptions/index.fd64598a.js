var e=globalThis,o={},i={},t=e.parcelRequirec605;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){i[e]=o},e.parcelRequirec605=t);var n=t.register;n("7KTRf",function(e,o){t("lnjTs"),t("6D2jc"),t("eUTkO"),t("3T3Tr"),t("augsA"),t("4cMYp"),t("hmMWw"),t("3d3pD")}),n("lnjTs",function(e,o){t("augsA")}),n("augsA",function(e,o){var i=t("7WQrb"),n=t("5D1XK");t("RKbfs"),t("5OQrz"),t("2LYUy");class r extends n.WebComponent{}(0,i.__decorate)([(0,n.customElement)({name:"login-page",template:(0,n.html)`${e=>(0,n.html)`
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
    `],shadowOptions:{mode:"open"}})],r)}),n("6D2jc",function(e,o){t("4cMYp")}),n("4cMYp",function(e,o){var i=t("7WQrb"),n=t("5D1XK");t("RKbfs"),t("5OQrz"),t("2LYUy");class r extends n.WebComponent{}(0,i.__decorate)([(0,n.customElement)({name:"inscription-page",template:(0,n.html)`${e=>(0,n.html)`
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
    `}`,styles:[(0,n.css)`
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
    `],shadowOptions:{mode:"open"}})],r)}),n("eUTkO",function(e,o){t("hmMWw")}),n("hmMWw",function(e,o){var i=t("7WQrb"),n=t("5D1XK");t("RKbfs"),t("5OQrz"),t("2LYUy");class r extends n.WebComponent{}(0,i.__decorate)([(0,n.customElement)({name:"new-password-page",template:(0,n.html)`${e=>(0,n.html)`
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
    `],shadowOptions:{mode:"open"}})],r)}),n("3T3Tr",function(e,o){t("3d3pD")}),n("3d3pD",function(e,o){var i=t("7WQrb"),n=t("5D1XK");t("RKbfs"),t("5OQrz"),t("2LYUy");class r extends n.WebComponent{attributeChangedCallback(e,o,i){"custom"===e&&(this.isCustom="true"===i),"info"===e&&(this.isInfo="true"===i),"success"===e&&(this.isSuccess="true"===i),"warning"===e&&(this.isWarning="true"===i),"danger"===e&&(this.isDanger="true"===i),super.attributeChangedCallback(e,o,i)}constructor(...e){super(...e),this.custom=null,this.info=null,this.success=null,this.warning=null,this.danger=null,this.isCustom=!1,this.isInfo=!1,this.isSuccess=!1,this.isWarning=!1,this.isDanger=!1}}(0,i.__decorate)([(0,n.attr)()],r.prototype,"custom",void 0),(0,i.__decorate)([(0,n.attr)()],r.prototype,"info",void 0),(0,i.__decorate)([(0,n.attr)()],r.prototype,"success",void 0),(0,i.__decorate)([(0,n.attr)()],r.prototype,"warning",void 0),(0,i.__decorate)([(0,n.attr)()],r.prototype,"danger",void 0),(0,i.__decorate)([(0,n.state)()],r.prototype,"isCustom",void 0),(0,i.__decorate)([(0,n.state)()],r.prototype,"isInfo",void 0),(0,i.__decorate)([(0,n.state)()],r.prototype,"isSuccess",void 0),(0,i.__decorate)([(0,n.state)()],r.prototype,"isWarning",void 0),(0,i.__decorate)([(0,n.state)()],r.prototype,"isDanger",void 0),(0,i.__decorate)([(0,n.customElement)({name:"notification-box",template:(0,n.html)`${e=>(0,n.html)`
      <div class="${["notification",e.isCustom?"-custom":"",e.isInfo?"-info":"",e.isSuccess?"-success":"",e.isWarning?"-warning":"",e.isDanger?"-danger":""].join("")}">
        <div class="${["layer",e.isCustom?"-custom":"",e.isInfo?"-info":"",e.isSuccess?"-success":"",e.isWarning?"-warning":"",e.isDanger?"-danger":""].join("")}">
        </div>
        <div class="main-body">
          <div class="icon">
            ${e.isCustom?(0,n.html)`<pf-icons-bell></pf-icons-bell>`:""}
            ${e.isInfo?(0,n.html)`<pf-icons-info-circle></pf-icons-info-circle>`:""}
            ${e.isSuccess?(0,n.html)`<pf-icons-check-circle></pf-icons-check-circle>`:""}
            ${e.isWarning?(0,n.html)`<pf-icons-exclamation-triangle></pf-icons-exclamation-triangle>`:""}
            ${e.isDanger?(0,n.html)`<pf-icons-exclamation-circle></pf-icons-exclamation-circle>`:""}
          </div>
          <div class="infos">
            <div class="title">
              ${e.isCustom?(0,n.html)`<pf-icons-bell></pf-icons-bell>`:""}
              ${e.isInfo?(0,n.html)`<h3>Information</h3>`:""}
              ${e.isSuccess?(0,n.html)`</slot><h3></h3></slot>`:""}
              ${e.isWarning?(0,n.html)`<h3>Warning</h3>`:""}
              ${e.isDanger?(0,n.html)`<h3>Danger</h3>`:""}
            </div>
          </div>
        </div>
        <div class="toggle-close">
          <pf-icons-times></pf-icons-times>
        </div>
      </div>
    `}`,styles:[(0,n.css)`
      .notification-success{
        width: 300px;
        height: 50px;
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
      }
      .layer-success {
        width: 5%;
        background-color: #4CAF50;
        border-radius: 3px;
      }
      .main-body{
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .toggle-close{
        color: #9E9E9E;
      }
      .infos{
        display: flex;
        flex-direction: column;
      }
    `],shadowOptions:{mode:"open"}})],r)});
//# sourceMappingURL=index.fd64598a.js.map
