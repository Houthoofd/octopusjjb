import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate, ViewContext, asyncAppend, repeat, children } from '@lithium-framework/core';
import '@lithium-framework/router-element';
import 'unofficial-pf-v5-wc';
import 'unofficial-pf-v5-wc-icons';

@customElement({
  name: 'inscription-page',
  template: html`${(inscription: Inscription) => {
    return html`
      <div class="register">
        <div class="header">
          <h1>Create a new account</h1>
        </div>
        <div class="main-body">
          
          <div class=${[
            "input-field",
            inscription.isEmailValid === null ? '' : (inscription.isEmailValid ? '-valide' : '-invalide')
          ].join('')}>
            <input class=${[
                "input",
                inscription.isEmailValid === null ? '' : (inscription.isEmailValid ? '-valide' : '-invalide')
              ].join('')}
              type="email" 
              placeholder="Email"
              @blur="${() => inscription.handleEmailBlur()}" 
              required 
              value="${inscription.email || ''}">

            <div class="${[
                'info',
                inscription.isEmailValid === null ? '' : (inscription.isEmailValid ? '-valide' : '-invalide')
              ].join('')}">
              ${inscription.isEmailValid === null ? '' : 
                inscription.isEmailValid ? 
                  html`<div class="valide"><pf-icons-check-circle></pf-icons-check-circle></div>` : 
                  html`<span>Votre adresse email doit contenir le caractère '@'</span>`
              }
            </div>
          </div>





      
          <div class=${[
            "input-field",
            inscription.isPasswordValid === null ? '' : (inscription.isPasswordValid ? '-valide' : '-invalide')
          ].join('')}>
            <input class=${[
                "input",
                inscription.isPasswordValid === null ? '' : (inscription.isPasswordValid ? '-valide' : '-invalide')
              ].join('')}
              type="email" 
              placeholder="password"
              @blur="${() => inscription.handlePasswordBlur()}" 
              required 
              value="${inscription.password || ''}">

            <div class="${[
                'info',
                inscription.isPasswordValid === null ? '' : (inscription.isPasswordValid ? '-valide' : '-invalide')
              ].join('')}">
              ${inscription.isPasswordValid === null ? '' : 
                inscription.isPasswordValid ? 
                  html`<div class="valide"><pf-icons-check-circle></pf-icons-check-circle></div>` : 
                  html`<span>Votre adresse mot de passe doit contenir le caractère</span>`
              }
            </div>
          </div>

        
          <div class=${[
            "input-field",
            inscription.isConfirmPasswordIsValid === null ? '' : (inscription.isConfirmPasswordIsValid ? '-valide' : '-invalide')
          ].join('')}>
            <input class=${[
                "input",
                inscription.isConfirmPasswordIsValid === null ? '' : (inscription.isConfirmPasswordIsValid ? '-valide' : '-invalide')
              ].join('')}
              type="email" 
              placeholder="password"
              @blur="${() => inscription.handleConfirmPasswordBlur()}" 
              required 
              value="${inscription.confPassword || ''}">

            <div class="${[
                'info',
                inscription.isConfirmPasswordIsValid === null ? '' : (inscription.isConfirmPasswordIsValid ? '-valide' : '-invalide')
              ].join('')}">
              ${inscription.isConfirmPasswordIsValid === null ? '' : 
                inscription.isConfirmPasswordIsValid ? 
                  html`<div class="valide"><pf-icons-check-circle></pf-icons-check-circle></div>` : 
                  html`<span>Votre adresse email doit contenir le caractère '@'</span>`
              }
            </div>
          </div>

         
          <div class='input-field'>
            <input type="date" placeholder="Date of Birth" 
              @blur="${() => {inscription.handleDateBlur()}}"
              required>
          </div>

          
          <div class='input-field'>
            <input type="text" placeholder="Prénom" 
              @blur="${() => {inscription.handleFirstNameBlur()}}" 
              required>
          </div>

          
          <div class='input-field'>
            <input type="text" placeholder="Nom" 
              @blur="${() => {inscription.handleLastNameBlur()}}"
              required>
          </div>

          
          <button class="button-register"
            type="submit"
            @click="${() => inscription.checkValidity()}">Inscription</button>
        </div>

        <div class="footer">
          <span>Already have an account? <a href="../connexion">Log in</a></span>
        </div>
      </div>
    `;
  }}`,
  styles: [ 
    css`
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

    `
  ],
  shadowOptions: { mode: 'open' }
})
export class Inscription extends WebComponent {
  @state() valid: "true" | "false" | null = null;
  @state() invalid: "true" | "false" | null = null;

  @attr() isEmailValid:boolean = null;
  @attr() isPasswordValid:boolean = null;
  @attr() isStrongPassword:boolean = null;
  @attr() isConfirmPasswordIsValid:boolean = null;


  email: string = '';
  password: string = '';
  confPassword: string = '';
  date: string = '';
  firstName: string = '';
  lastName: string = '';

  handleEmailBlur() {
    const inputs = this.shadowRoot?.querySelectorAll('input');
    const emailInput = inputs?.[0];
    const email = emailInput.value || '';
  
    if (!email.includes('@')) {
      console.log('L\'email doit contenir le caractère "@"');
      this.isEmailValid = false;
    } else {
      console.log('Email valide');
      this.isEmailValid = true;
      this.email = email;
      console.log(this.email)
    }
  
    //this.checkFormValidity();
  }

  handlePasswordBlur() {
    const inputs = this.shadowRoot?.querySelectorAll('input');
    const passwordInput = inputs?.[1];
    const password = passwordInput.value || '';

    const errorMessage = this.CheckStrength(password);

    if (errorMessage) {
      console.log(errorMessage);
      this.isPasswordValid = false;
    } else {
      console.log('Mot de passe valide');
      this.isPasswordValid = true;
      this.password = password;
      console.log(this.password);
    }
}

  CheckStrength(password: string): string | null {
    const min = 6;
    const max = 20;

    if (password.length < min || password.length > max) {
        return `Le mot de passe doit comporter entre ${min} et ${max} caractères.`;
    }

    const specialCharacters = /[!@#\$%\^\&*\)\(+=._-]+/;
    if (!specialCharacters.test(password)) {
        return 'Le mot de passe doit contenir au moins un caractère spécial.';
    }

    const hasUpperCase = /[A-Z]/;
    if (!hasUpperCase.test(password)) {
        return 'Le mot de passe doit contenir au moins une majuscule.';
    }

    const hasNumber = /[0-9]/;
    if (!hasNumber.test(password)) {
        return 'Le mot de passe doit contenir au moins un chiffre.';
    }

    return null;
  }
  handleConfirmPasswordBlur() {
    const inputs = this.shadowRoot?.querySelectorAll('input');
    const confirmPasswordInput = inputs?.[2];
    const confPassword = confirmPasswordInput.value || '';

    console.log(this.password, confPassword);

    // Vérifie si les mots de passe sont égaux
    if (confPassword !== this.password) {
      console.log("Les mots de passe ne correspondent pas");
      this.isConfirmPasswordIsValid = false;
    } else {
      console.log('Les mots de passe correspondent');
      this.isConfirmPasswordIsValid = true;
      this.confPassword = confPassword;
    }
  }

  handleDateBlur(){
    const inputs = this.shadowRoot?.querySelectorAll('input');
    const dateInput = inputs?.[3];
    const date = dateInput.value || '';

    // Peut-être vérifié si le format est bien respecter //
    this.date = date;
  }
  handleFirstNameBlur(){
    const inputs = this.shadowRoot?.querySelectorAll('input');
    const firstNameInput = inputs?.[4];
    const firstName = firstNameInput.value || '';

    // Peut-être vérifié si le format est bien respecter //
    this.firstName = firstName;
  }
  handleLastNameBlur(){
    const inputs = this.shadowRoot?.querySelectorAll('input');
    const lastNameInput = inputs?.[5];
    const lastName = lastNameInput.value || '';

    // Peut-être vérifié si le format est bien respecter //
    this.lastName = lastName;
  }

  checkValidity(){
    console.log(this.email, this.password, this.confPassword, this.date, this.firstName, this.lastName)
  }





}