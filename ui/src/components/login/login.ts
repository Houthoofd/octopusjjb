import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate, ViewContext, asyncAppend, repeat, children } from '@lithium-framework/core';
import '@lithium-framework/router-element';
import 'unofficial-pf-v5-wc';
import 'unofficial-pf-v5-wc-icons';
import LoginPageStyle from '@patternfly/react-styles/css/components/Login/login';

@customElement({
  name: 'login-page',
  template: html`${(login: Login) => {
    return html`
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
              @input="${(login) => login.handleEmailInput()}" 
              value="${login.email}"
            >
          </div>
          <div class="input-field">
            <pf-icons-lock></pf-icons-lock>
            <input 
              type="password" 
              placeholder="Password" 
              @input="${(login) => login.handlePasswordInput()}" 
              value="${login.password}"
            >
          </div>
          <button 
            class="button-login" 
            ?disabled="${!login.isFormValid}"
            @click="${() => login.handleLogin()}"
          >
            Log in
          </button>
        </div>
        <div class="remember-password">
          <div class="radio">
            <input 
              type="radio" 
              @change="${() => login.toggleRememberMe()}" 
              ?checked="${login.rememberMe}"
            >
            <label for="remember me">Remember me</label>
          </div>
          <a href="../password">Forgot password?</a>
        </div>
        <div class="footer">
          <span>Don't have an account? <a href="../inscriptions">Create an account</a></span>
        </div>
        ${login.errorMessage 
          ? html`<div class="error-message">${login.errorMessage}</div>` 
          : ''}
      </div>
    `;
  }}`,
  styles: [ 
    css`
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
    `
  ],
  shadowOptions: { mode: 'open' }
})
export class Login extends WebComponent {
  

  @state() email: string = '';
  @state() password: string = '';
  @state() rememberMe: boolean = false;
  @state() isFormValid: boolean = false;
  @state() errorMessage: string | null = null;

  @state() isCustom: boolean = false;

  Mail:string = '';
  Password:string = '';

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    

    super.attributeChangedCallback(name, oldValue, newValue);
  }

  handleEmailInput(login) {
    const inputs = this.shadowRoot?.querySelectorAll('input');
    const emailValue = inputs?.[0].value || '';
   
    //this.email = emailValue;
    this.Mail = emailValue;
    this.validateForm();
  }

  handlePasswordInput(login) {
    const inputs = this.shadowRoot?.querySelectorAll('input');
    const password = inputs?.[1].value || '';
    console.log(password)

    //this.password = password;
    this.Password = password;
    this.validateForm();
  }

  // Validation du formulaire
  validateForm() {
    console.log(this.Mail,this.Password)
    this.isFormValid = this.Mail !== '' && this.Password !== '';
    this.errorMessage = this.isFormValid ? null : 'Veuillez entrer à la fois un email et un mot de passe.';
  }

  // Fonction pour envoyer les données au serveur
  async sendData() {
    if (this.isFormValid) {
      const data = {
        email: this.Mail,
        password: this.Password,
      };
      console.log(data)
      try {
        const response = await fetch('http://localhost:3000/connexion', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          const result = await response.json();
          console.log("Connexion réussie", result);

          // Redirection ou traitement du succès
          window.location.href = '/pages/cours';

        } else {
          console.error("Erreur lors de la connexion :", response.statusText);
          this.errorMessage = "Échec de la connexion. Veuillez vérifier vos informations.";
        }

      } catch (error) {
        console.error("Erreur lors de la requête :", error);
        this.errorMessage = "Une erreur est survenue. Veuillez réessayer plus tard.";
      }
    } else {
      this.errorMessage = 'Veuillez remplir tous les champs.';
    }
  }

  // Gestion de la soumission du formulaire
  handleLogin() {
    this.validateForm();
    if (this.isFormValid) {
      this.sendData();
    }
  }

  toggleRememberMe() {
    this.rememberMe = !this.rememberMe;
  }
}