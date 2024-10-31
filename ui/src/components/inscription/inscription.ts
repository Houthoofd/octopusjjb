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
          
          <div class='input-field'>
            <input type="email" placeholder="Email" 
              @input="${inscription.handleEmailInput}"
              required>
            ${inscription.isEmailValid ? '' : html`<p class="error">Invalid email address</p>`}
          </div>

      
          <div class='input-field'>
            <input type="password" placeholder="Password" 
              @input="${inscription.handlePasswordInput}"
              required minlength="6"
              pattern="^(?=.*[!@#$%^&*(),.?\:{}|<>])[A-Za-z\d@$!%*?&]{6,}$">
            <div class="password-strength">
              <div class="strength-bar" style="width: ${inscription.passwordStrength}%"></div>
            </div>
            ${inscription.isPasswordValid ? '' : html`<p class="error">Password must contain at least 6 characters, including a special character</p>`}
          </div>

        
          <div class='input-field'>
            <input type="password" placeholder="Confirm Password" 
              @input="${inscription.handleConfirmPasswordInput}"
              required>
            ${inscription.doPasswordsMatch ? '' : html`<p class="error">Passwords do not match</p>`}
          </div>

         
          <div class='input-field'>
            <input type="date" placeholder="Date of Birth" 
              @input="${inscription.handleDateInput}"
              required>
          </div>

          
          <div class='input-field'>
            <input type="text" placeholder="Prénom" 
              @input="${inscription.handleFirstNameInput}" 
              required>
          </div>

          
          <div class='input-field'>
            <input type="text" placeholder="Nom" 
              @input="${inscription.handleLastNameInput}" 
              required>
          </div>

          
          <button class="button-register" type="submit" 
            @click="${inscription.handleSubmit}"
            ?disabled="${!inscription.isFormValid}">Inscription</button>
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
    `
  ],
  shadowOptions: { mode: 'open' }
})
export class Inscription extends WebComponent {
  @state() isEmailValid: boolean = true;
  @state() isPasswordValid: boolean = true;
  @state() doPasswordsMatch: boolean = true;
  @state() isFormValid: boolean = false;
  @state() passwordStrength: number = 0;

  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  firstName: string = '';
  lastName: string = '';
  birthDate: string = '';

  handleEmailInput(event: InputEvent) {
    //const input = event.target as HTMLInputElement;
    //this.email = input.value;
    //this.isEmailValid = this.email.includes('@');
    //this.checkFormValidity();
  }

  handlePasswordInput(event: InputEvent) {
    //const input = event.target as HTMLInputElement;
    //this.password = input.value;
    //this.isPasswordValid = input.validity.valid;
    //this.updatePasswordStrength();
    //this.checkFormValidity();
  }

  handleConfirmPasswordInput(event: InputEvent) {
    // const input = event.target as HTMLInputElement;
    // this.confirmPassword = input.value;
    // this.doPasswordsMatch = this.password === this.confirmPassword;
    // this.checkFormValidity();
  }

  handleFirstNameInput(event: InputEvent) {
    // const input = event.target as HTMLInputElement;
    // this.firstName = input.value;
    // this.checkFormValidity();
  }

  handleLastNameInput(event: InputEvent) {
    // const input = event.target as HTMLInputElement;
    // this.lastName = input.value;
    // this.checkFormValidity();
  }

  handleDateInput(event: InputEvent) {
    // const input = event.target as HTMLInputElement;
    // this.birthDate = input.value;
    // this.checkFormValidity();
  }

  updatePasswordStrength() {
    // let strength = 0;
    // if (this.password.length >= 6) strength += 20;
    // if (/[A-Z]/.test(this.password)) strength += 20;
    // if (/[0-9]/.test(this.password)) strength += 20;
    // if (/[^A-Za-z0-9]/.test(this.password)) strength += 20;
    // if (this.password.length >= 10) strength += 20;
    // this.passwordStrength = strength;
  }

  checkFormValidity() {
    // this.isFormValid = this.isEmailValid && this.isPasswordValid && this.doPasswordsMatch && this.firstName !== '' && this.lastName !== '' && this.birthDate !== '';
  }

  handleSubmit() {
    // if (this.isFormValid) {
    //   console.log('Form submitted', {
    //     email: this.email,
    //     password: this.password,
    //     firstName: this.firstName,
    //     lastName: this.lastName,
    //     birthDate: this.birthDate
    //   });
      
    // }
  }
}