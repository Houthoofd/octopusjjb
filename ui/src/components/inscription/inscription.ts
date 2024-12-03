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

          <div class="dropdown">
            <details>
            <summary id="dropdownButtonPrice">Choisir un plan</summary>
            <div class="dropdown-menu">
              <!-- Les éléments du menu seront ajoutés ici -->
              ${asyncAppend(inscription.preloadData(`http://www.octopusjjb.ovh/informations/abonnement`), (result) => {
                return html`${repeat(
                  result,
                  html`${(plan) => {
                    return html`<div class="dropdown-item" data-plan="${plan.nom_plan}" data-prix="${plan.prix}" @click="${(plan) => inscription.handleDropDownValueTarif(plan)}">
                      ${plan.nom_plan} - ${plan.prix} €
                    </div>`;
                  }}`
                )}`;
              })}
            </div>
          </details>
        </div>

        <div class="dropdown">
            <details>
            <summary id="dropdownButtonGenre">Choisir un genre</summary>
            <div class="dropdown-menu">
              <!-- Les éléments du menu seront ajoutés ici -->
              ${asyncAppend(inscription.preloadData(`http://www.octopusjjb.ovh/informations/gender`), (result) => {
                return html`${repeat(
                  result,
                  html`${(info) => {
                    return html`<div class="dropdown-item" data-plan="${info.genre}" @click="${(info) => inscription.handleDropDownValueGenre(info)}">
                      ${info.genre}
                    </div>`;
                  }}`
                )}`;
              })}
            </div>
          </details>
        </div>


          
          <button class="button-register"
            type="submit"
            @click="${() => inscription.sendData()}">Inscription</button>
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
        height: 680px;
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
      /* Conteneur du dropdown */
.dropdown {
  position: relative;
  display: inline-block;
  width: 100%;
}

/* Bouton du dropdown */
.dropdown-toggle {
      background-color: #fafbfe;
  color: #a2adcd;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  width: 100%;
}

/* Liste cachée par défaut */
.dropdown-menu {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
}

/* Eléments du dropdown */
.dropdown-item {
  padding: 12px 16px;
  text-align: left;
  color: black;
  text-decoration: none;
  display: block;
  font-size: 14px;
}

/* Changer la couleur au survol */
.dropdown-item:hover {
  background-color: #f1f1f1;
  cursor: pointer;
}

/* Affichage du menu lorsque l'utilisateur clique sur le bouton */
.dropdown:hover .dropdown-menu {
  display: block;
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
  genre: string = '';
  tarif: string = '';

  handleDropDownValueTarif(plan) {
    // Sélectionner les éléments dans le Shadow DOM
    const dropdownButton = this.shadowRoot?.getElementById('dropdownButtonPrice');
    const dropdownMenu = this.shadowRoot?.getElementById('dropdownMenu');
    
    // Mettre à jour le texte du bouton avec la sélection
    dropdownButton.textContent = `${plan.nom_plan} - ${plan.prix} €`;
    this.tarif = plan.nom_plan;
    console.log(this.tarif)
    
    // Vérifier si le menu est déjà ouvert ou non et ajuster son état
    if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
      // Ouvrir le menu si il est fermé (display: none ou initialement vide)
      dropdownMenu.style.display = 'block';
    } else {
      // Fermer le menu si il est déjà ouvert
      dropdownMenu.style.display = 'none';
    }
  }

  handleDropDownValueGenre(info) {
    // Sélectionner les éléments dans le Shadow DOM
    const dropdownButton = this.shadowRoot?.getElementById('dropdownButtonGenre');
    const dropdownMenu = this.shadowRoot?.getElementById('dropdownMenu');
    
    // Mettre à jour le texte du bouton avec la sélection
    dropdownButton.textContent = `${info.genre}`;
    this.genre = info.genre;
    console.log(this.genre)
    
    // Vérifier si le menu est déjà ouvert ou non et ajuster son état
    if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
      // Ouvrir le menu si il est fermé (display: none ou initialement vide)
      dropdownMenu.style.display = 'block';
    } else {
      // Fermer le menu si il est déjà ouvert
      dropdownMenu.style.display = 'none';
    }
  }
  

  

  async preloadData(url:string): Promise<any[]> {
    console.log(url)
    try {
      // Faire la requête pour récupérer les plans tarifaires depuis l'URL
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      // Vérifier si la réponse est correcte
      if (!response.ok) {
        throw new Error('Erreur serveur lors de la récupération des plans tarifaires.');
      }
  
      // Récupérer les données au format JSON
      const data = await response.json();
  
      console.log("Plans tarifaires reçus:", data);
  
      // Retourner les données reçues, ou un tableau vide si aucun élément
      return data.length > 0 ? data : [];
  
    } catch (error) {
      console.error('Erreur lors de la requête fetch:', error);
      return [];
    }
  }
  

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

    this.firstName = firstName;
  }
  handleLastNameBlur(){
    const inputs = this.shadowRoot?.querySelectorAll('input');
    const lastNameInput = inputs?.[5];
    const lastName = lastNameInput.value || '';

    this.lastName = lastName;
  }

  checkValidity() {
    const formData: { [key: string]: string } = {};
  

    if (this.email) {
      formData.email = this.email;
    } else {
      console.log("L'email est manquant.");
      return null;
    }
  
    if (this.password) {
      formData.password = this.password;
    } else {
      console.log("Le mot de passe est manquant.");
      return null;
    }
  
    if (this.date) {
      formData.date = this.date;
    } else {
      console.log("La date est manquante.");
      return null;
    }
  
    if (this.firstName) {
      formData.firstName = this.firstName;
    } else {
      console.log("Le prénom est manquant.");
      return null;
    }
  
    if (this.lastName) {
      formData.lastName = this.lastName;
    } else {
      console.log("Le nom de famille est manquant.");
      return null;
    }

    if (this.tarif) {
      formData.tarif = this.tarif;
    } else {
      console.log("Le choix d'abonnement manquant.");
      return null;
    }

    if (this.genre) {
      formData.genre = this.genre;
    } else {
      console.log("Le sexe est manquant.");
      return null;
    }
  
    console.log('Données du formulaire valides:', formData);
    console.log(formData.genre, formData.tarif)
    return formData;
  }
  
  async sendData() {
    const formData = this.checkValidity();
  
    if (!formData) {
      console.log('Données invalides, la requête ne sera pas envoyée.');
      return;
    }
  
    console.log('Envoi des données:', formData);
    try {
      const response = await fetch('http://www.octopusjjb.ovh/inscriptions', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),  // Envoie des données JSON
      });
  
      if (response.ok) {
          const result = await response.text();
          alert("Utilisateur enregistré avec succès !");

          window.location.href = '/pages/connexion';
      } else {
          console.error("Erreur lors de l'enregistrement :", response.statusText);
          alert("Une erreur s'est produite. Veuillez réessayer.");
      }
    } catch (error) {
      console.error("Erreur lors de la requête :", error);
      alert("Impossible d'enregistrer la réservation.");
    }
  }
}