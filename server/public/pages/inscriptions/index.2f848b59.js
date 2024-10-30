var e=globalThis,o={},i={},a=e.parcelRequirec605;null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in i){var a=i[e];delete i[e];var n={id:e,exports:{}};return o[e]=n,a.call(n.exports,n,n.exports),n.exports}var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(e,o){i[e]=o},e.parcelRequirec605=a);var n=a.register;n("7KTRf",function(e,o){a("lnjTs"),a("6D2jc"),a("augsA"),a("4cMYp")}),n("lnjTs",function(e,o){a("augsA")}),n("augsA",function(e,o){var i=a("7WQrb"),n=a("5D1XK");a("RKbfs"),a("5OQrz"),a("2LYUy");class t extends n.WebComponent{}(0,i.__decorate)([(0,n.customElement)({name:"login-page",template:(0,n.html)`${e=>(0,n.html)`
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
    `],shadowOptions:{mode:"open"}})],t)}),n("6D2jc",function(e,o){a("4cMYp")}),n("4cMYp",function(e,o){var i=a("7WQrb"),n=a("5D1XK");a("RKbfs"),a("5OQrz"),a("2LYUy");class t extends n.WebComponent{}(0,i.__decorate)([(0,n.customElement)({name:"inscription-page",template:(0,n.html)`${e=>(0,n.html)`
      <div class="login">
          <div class="header">
            <h1>Log in to your account</h1>
          </div>
          <div class="main-body">
          <div class='input-fields'>
          <label for="email">E-mail</label>
          <input type="email">
      </div>
      <div class='input-fields'>
          <label for="password">Mot de passe</label>
          <input type="password">
      </div>
      <div class='input-fields'>
          <label for="Date_naissance">Date de naissance</label>
          <input type="date">
      </div>
      <div class='input-fields'>
          <label for="prénom">Prénom</label>
          <input type="text">
      </div>µ
      <div class='input-fields'>
          <label for="nom">Nom</label>
          <input type="text">
      </div>
      <button type="submit">Inscription</button>
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
    `}`})],t)});var t=a("5D1XK");a("RKbfs"),a("5OQrz"),a("2LYUy"),a("7KTRf");let r=(0,t.html)`${e=>(0,t.html)`<inscription-page></inscription-page>`}`;(0,t.render)(r);
//# sourceMappingURL=index.2f848b59.js.map
