import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate, ViewContext, asyncAppend, repeat, children } from '@lithium-framework/core';
import '@lithium-framework/router-element';
import 'unofficial-pf-v5-wc';
import 'unofficial-pf-v5-wc-icons';
import '../../components';
import { response } from 'express';

@customElement({
  name: 'page-compte',
  template: html`${(compte: Compte) => {
    return html`
      <pf-page masterhead-no-icon masterhead-no-branding drawer-inline drawer-expanded drawer-static drawer-panel-left>
          <div slot = "drawer-panel">
            <navigation-panel></navigation-panel>
          </div>
          <pf-panel header scrollable>
            <div slot="header">
              <h1 class="title">Compte</h1>
            </div>
            <div class="table-infos">
              ${asyncAppend(compte.preloadData('http://www.octopusjjb.ovh/informations'), (result) => {
                  return html`${
                    repeat(
                      result,
                      html`${(info) => {
                        console.log(info)
                        return html`
                          <div class="row">
                            <div class="date-of-birth">
                              <label for="date_of_birth">Date de naissance:</label>
                              <input type="text" id="date_of_birth" value="${compte.formatDateFromISO(info.date_of_birth)}" readonly disabled/>
                            </div>

                            <div class="email">
                              <label for="email">Email:</label>
                              <input type="email" id="email" value="${info.email}" readonly/>
                            </div>

                            <div class="first-name">
                              <label for="first_name">Prénom:</label>
                              <input type="text" id="first_name" value="${info.first_name}" readonly/>
                            </div>

                            <div class="gender">
                              <label for="gender">Genre:</label>
                              <input type="text" id="gender" value="${info.gender}" readonly/>
                            </div>


                            <div class="last-name">
                              <label for="last_name">Nom:</label>
                              <input type="text" id="last_name" value="${info.last_name}" readonly/>
                            </div>

                            <div class="role">
                              <label for="role">Rôle:</label>
                              <input type="text" id="role" value="${info.role}" readonly disabled/>
                            </div>

                            <div class="grade">
                              <label for="grade">Grade:</label>
                              <input type="text" id="grade" value="${info.grade}" readonly disabled/>
                            </div>

                            <div class="abonnement">
                              <label for="role">abonnement:</label>
                              <input type="text" id="abonnement" value="${info.abonnement}" readonly disabled/>
                            </div>

                            
                            <!-- Bouton pour activer la modification -->
                             <button id="edit-button" @click="${() => compte.enableEditing(compte)}">Modifier</button>

                            <!-- Bouton pour enregistrer les modifications -->
                            <button id="save-button" style="display:none" @click="${() => compte.saveChanges()}">Enregistrer</button>
                          </div>
                          `;
                      }}`
                    )
                  }`
                })
              }
            </div>
          </pf-panel>
        <pf-avatar></pf-avatar>
      </pf-page>`;
  }}`,
  styles : [
    css`
      .table-infos {
        color: black;
      }
      .navigation{
        color: black
      }
      .title{
        color: black;
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

#dropdownMenu {
  display: none;
  /* Autres styles pour le menu */
}

#dropdownMenu.visible {
  display: block;
  /* Autres styles pour le menu visible, comme une animation */
}

    `
  ]
})

export class Compte extends WebComponent {
  data: any[] = [];

  nom: string = '';
  prenom: string = '';
  mail: string = '';


  async preloadData(url): Promise<any[]> {
    try {
      const userDataString = localStorage.getItem('userData');
      if (!userDataString) {
        throw new Error('Utilisateur non connecté. Aucune donnée dans localStorage.');
      }
  
      const userData = JSON.parse(userDataString);
      console.log('Données utilisateur récupérées:', userData);
  
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(userData),
      });
  
      if (!response.ok) {
        throw new Error('Erreur serveur.');
      }
  
      const data = await response.json();
  
      // Enveloppe l'objet dans un tableau
      const dataArray = [data]; // Si `data` est un objet, on le met directement dans un tableau
  
      console.log('Données mises dans un tableau:', dataArray, dataArray.length);
  
      return dataArray.length > 0 ? dataArray : []; // Retourne le tableau, ou un tableau vide si aucun élément
    } catch (error) {
      console.error('Erreur lors de la requête fetch:', error);
      return [];
    }
  }


  async preloadDataDropDown(url): Promise<any[]> {
    try {
  
      const response = await fetch(url, {
        method: 'GET',
        credentials: 'include', // Inclure les cookies et autres credentials si nécessaire
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Erreur serveur.');
      }
  
      const data = await response.json();
  
      console.log(data, data.length);
  
      return data.length > 0 ? data : []; // Retourne le tableau, ou un tableau vide si aucun élément
    } catch (error) {
      console.error('Erreur lors de la requête fetch:', error);
      return [];
    }
  }

  enableEditing(compte) {
    console.log("Enable editing");

    // Rendre les champs éditables dans le Shadow DOM
    this.shadowRoot.getElementById('first_name').removeAttribute('readonly');
    this.shadowRoot.getElementById('last_name').removeAttribute('readonly');
    this.shadowRoot.getElementById('email').removeAttribute('readonly');
    
    // Modifier l'affichage des boutons
    this.shadowRoot.getElementById('edit-button').style.display = 'none';
    this.shadowRoot.getElementById('save-button').style.display = 'inline-block';

    // Retourner un message pour informer l'utilisateur qu'il peut éditer
    return html`<div>Vous pouvez modifier désormais</div>`;
}

validateForm() {
    // Récupérer les valeurs des champs dans le Shadow DOM
    let email = this.shadowRoot?.getElementById('email').value;
    let firstName = this.shadowRoot?.getElementById('first_name').value;
    let lastName = this.shadowRoot?.getElementById('last_name').value;

    // Expression régulière pour valider un email
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Vérifier si l'email est valide
    if (!regex.test(email)) {
        alert('Veuillez entrer un email valide');
        return false;
    }

    // Vérifier si les champs nécessaires ne sont pas vides
    if (!firstName || !lastName) {
        alert('Tous les champs doivent être remplis');
        return false;
    }

    // Si toutes les conditions sont validées, permettre l'enregistrement
    return true;
}

async saveChanges() {
  // Valider les données avant d'enregistrer
  if (this.validateForm()) {
    // Récupérer les nouvelles valeurs
    let email = this.shadowRoot?.getElementById('email').value;
    let firstName = this.shadowRoot?.getElementById('first_name').value;
    let lastName = this.shadowRoot?.getElementById('last_name').value;

    // Récupérer les données actuelles depuis le localStorage
    let currentUserData = localStorage.getItem("userData");
    let current = currentUserData ? JSON.parse(currentUserData) : {};

    // Préparer les nouvelles données à envoyer
    let data = {
      new_email: email,
      new_first_name: firstName,
      new_last_name: lastName,
      current_mail: current.email,             // Utiliser les données actuelles
      current_first_name: current.prenom,      // Utiliser les données actuelles
      current_last_name: current.nom           // Utiliser les données actuelles
    };

    // Envoyer les données à l'API via fetch
    fetch('http://www.octopusjjb.ovh/users/update', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',  // Si nécessaire pour envoyer les cookies
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
      if (result.success) {
        // Si l'enregistrement a réussi
        alert('Modifications enregistrées avec succès');

        // Mettre à jour le localStorage avec les nouvelles informations utilisateur
        localStorage.setItem('userData', JSON.stringify(result.data));
      } else {
        // Si l'enregistrement échoue
        alert('Erreur lors de l\'enregistrement');
      }
    })
    .catch(error => {
      // Si une erreur se produit lors de l'appel à l'API
      console.error('Erreur:', error);
      alert('Une erreur s\'est produite lors de la tentative d\'enregistrement');
    });

    // Revenir aux états non modifiables après l'enregistrement
    this.shadowRoot.getElementById('first_name').setAttribute('readonly', 'true');
    this.shadowRoot.getElementById('last_name').setAttribute('readonly', 'true');
    this.shadowRoot.getElementById('email').setAttribute('readonly', 'true');

    // Masquer le bouton d'enregistrement et revenir au bouton "Modifier"
    this.shadowRoot.getElementById('save-button').style.display = 'none';
    this.shadowRoot.getElementById('edit-button').style.display = 'inline-block';
  }
}


  

  formatDateFromISO(isoDateString: string): string {
    const date = new Date(isoDateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  convertToISODate(dateString: string): string {
    const [year, month, day] = dateString.split('-');
    return new Date(`${year}-${month}-${day}T00:00:00Z`).toISOString();
  }
  
}



let template: ViewTemplate<any> = html`${( context:ViewContext )=>{


  return html`<page-compte></page-compte>`;

}}`




render(template);