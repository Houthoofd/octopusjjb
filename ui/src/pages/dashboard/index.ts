import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate, ViewContext, asyncAppend, repeat, children } from '@lithium-framework/core';
import '@lithium-framework/router-element';
import 'unofficial-pf-v5-wc';
import 'unofficial-pf-v5-wc-icons';
import '../../components';
import {url} from '../../../../url';

@customElement({
    name: 'page-dashboard',
    template: html`${(dashboard: Dashboard) => {
      return html`
        <pf-page
          masterhead-no-icon
          masterhead-no-branding
          drawer-inline
          drawer-expanded
          drawer-static
          drawer-panel-left
        >
          <div slot="drawer-panel">
            <navigation-panel></navigation-panel>
          </div>
          <pf-panel header scrollable>
            <div slot="header">
              <h1 class="title">Dashboard</h1>
            </div>
            <input
              type="text"
              placeholder="Rechercher un utilisateur"
            />
            <div class="table-infos">
               ${asyncAppend(dashboard.preloadData(), (result) => {
                return html`
                    ${repeat(
                      result,
                      html`${(user) => {
                        console.log(user)
                        return html`
                          <div class="panel-row" data-user-id="${user.id}">
                            <div class="row">
                              <div class="type-de-cours">${user.last_name}</div>
                              <div class="heure-debut">${user.first_name}</div>
                              <div class="heure-fin">${user.gender}</div>
                              <div class="heure-fin">${user.grade}</div>
                              <div @click="${(user) => dashboard.displayMoreInfos(user)}" class='icon-down'><div class='icon'><pf-icons-chevron-down></pf-icons-chevron-down></div></div>
                              ${dashboard.isSuperAdmin === true ? html`<div @click="${(user) => dashboard.deleteUser(user)}" class='icon-delete'><div class='icon'><pf-icons-trash-alt></pf-icons-trash-alt></div></div>` : html``}
                            </div>
                          </div>`
                      }}`
                    )}`
              })}
            </div>
          </pf-panel>
          <pf-avatar></pf-avatar>
        </pf-page>`;
    }}`,
    styles: [
      css`
        .title{
          color: black;
        }
        .table-infos {
          color: black;
          display: flex;
          gap: 20px;
          flex-direction: column;
        }
        .navigation {
          color: black;
        }
        .row{
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 10px;
          background-color: #9e9e9e26;
        }
        .icon-down{
          cursor: pointer;
          background-color: #9E9E9E;
          width: 24px;
          height: 24px;
          border-radius: 3px;
        }
        .icon{
          transform: translate(4px, 4px);
        }
        .panel-row .new-participants {
          display: none; /* Cacher la div par défaut */
        }

        .panel-row.active .new-participants {
          display: block; /* Afficher la div quand panel-row est active */
        }
      `,
    ],
  })
  

export class Dashboard extends WebComponent {

  @state() isSuperAdmin: boolean = null;

  connectedCallback() {
    super.connectedCallback();
    this.getRole();
  }

  checkUserConnection() {
    const userDataString = localStorage.getItem('userData');
    if (!userDataString) {
        // Si l'utilisateur n'est pas connecté, redirige vers la page de connexion
        window.location.href = '/pages/connexion';
        return false; // Retourne false pour indiquer qu'aucun utilisateur n'est connecté
    }
    return true; // Si l'utilisateur est connecté, retourne true
  }

  // Méthode pour récupérer le rôle et affecter isAdmin
  getRole() {
    // Vérifie d'abord si l'utilisateur est connecté
    if (!this.checkUserConnection()) {
        return; // Si l'utilisateur n'est pas connecté, on arrête l'exécution
    }

    const userDataString = localStorage.getItem('userData');
    const userData = JSON.parse(userDataString);
    console.log('Données utilisateur récupérées:', userData);

    // Récupère le rôle de l'utilisateur
    const userRole = userData.role;
    console.log('Rôle de l\'utilisateur:', userRole);

    // Vérifie si l'utilisateur a un rôle administrateur et met à jour isAdmin
    if (userRole === 'super-administrator') {
        this.isSuperAdmin = true;
    } else {
        this.isSuperAdmin = false;
    }

    console.log('Est-ce un administrateur ? ', this.isSuperAdmin);
  }
 
  async preloadData(): Promise<any[]> {
    try {
        const response = await fetch(`${url}users`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        });
    
        if (!response.ok) {
            throw new Error('Erreur serveur.');
        }
    
        const data = await response.json();
        console.log(data)
        return data.length > 0 ? data : [];
    } catch (error) {
        console.error('Erreur lors de la requête fetch:', error);
        return [];
    }
  }

  async loadInfosUser(userId) {
    console.log(userId);
    try {
        const response = await fetch(`${url}users/infos/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_id: userId }),
            credentials: 'include',
        });

        if (!response.ok) {
            throw new Error('Erreur serveur.');
        }

        const data = await response.json();
        console.log(data)

        // Vérifier si la réponse contient des participants
        return data;
    } catch (error) {
        console.error('Erreur lors de la requête fetch:', error);
        return [];
    }
  }
  async displayMoreInfos(user) {
    console.log("User ID:", user.id);
  
    // Utiliser querySelector pour sélectionner le panel-row correspondant au cours cliqué
    const panelRow = this.shadowRoot?.querySelector(`.panel-row[data-user-id="${user.id}"]`);
    console.log(panelRow);
  
    if (panelRow) {
      // Si le panel est déjà activé, le désactiver
      if (panelRow.classList.contains('active')) {
        panelRow.classList.remove('active');
        console.log('Panel désactivé.');
        return;
      }
  
      // Activer le panel
      panelRow.classList.add('active');
      console.log('Panel activé:', panelRow);
  
      // Vérifier si la div avec les informations existe déjà
      let participantsDiv = panelRow.querySelector('.new-participants');
  
      // Si la div n'existe pas, la créer
      if (!participantsDiv) {
        participantsDiv = document.createElement('div');
        participantsDiv.classList.add('new-participants');
        panelRow.appendChild(participantsDiv);
      }
  
      // Si les informations sont déjà chargées, ne pas recharger
      if (participantsDiv.children.length > 0) {
        console.log('Informations déjà chargées. Aucun rechargement nécessaire.');
        return;
      }
  
      // Charger les informations utilisateur depuis l'API
      try {
        const userInfo = await this.loadInfosUser(user.id);
        console.log(userInfo);
  
        // Vider les anciens participants (ou informations)
        participantsDiv.innerHTML = '';
  
        // Vérifier si des informations utilisateurs existent
        if (Object.keys(userInfo).length === 0) {
          participantsDiv.textContent = 'Aucune information trouvée.';
        } else {
          // Créer un formulaire pour les informations utilisateur
          const form = document.createElement('form');
          form.classList.add('user-info-form');
  
          // Fonction pour créer un input avec un label
          const createInputField = (labelText, fieldName, value, type = 'text', disabled = false) => {
            const div = document.createElement('div');
            div.classList.add('form-group');
          
            const label = document.createElement('label');
            label.textContent = labelText;
          
            const input = document.createElement('input');
            input.type = type;  // Permet de spécifier le type (date, email, text, etc.)
            input.name = fieldName;
            input.value = value || '';  // Utilise la valeur donnée ou vide si non spécifiée
            input.disabled = disabled;
            input.classList.add('form-control');
          
            div.appendChild(label);
            div.appendChild(input);
          
            return div;
          };
          

  

          // Fonction pour créer une liste déroulante avec un label
          const createDropdownField = (labelText, fieldName, options, initialValue, disabled = false) => {
            const div = document.createElement('div');
            div.classList.add('form-group');
          
            const label = document.createElement('label');
            label.textContent = labelText;
          
            const select = document.createElement('select');
            select.name = fieldName;
            select.disabled = disabled;
            select.classList.add('form-control');
          
            // Ajout de l'option "vide" pour signaler que l'utilisateur doit choisir une option
            const defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.textContent = initialValue;
            select.appendChild(defaultOption);
          
            // Créer les options dynamiquement
            options.forEach(option => {
              const optionElement = document.createElement('option');
              optionElement.value = option.value;
              optionElement.textContent = option.text;
          
              // Vérifie si cette option doit être sélectionnée initialement
              if (option.value === initialValue) {
                optionElement.selected = true;
              }
          
              select.appendChild(optionElement);
            });
          
            div.appendChild(label);
            div.appendChild(select);
          
            return div;
          };
          
          
          
          
          

        
        const gradeOptions = [
          { value: '1', text: 'ceinture blanche' },
          { value: '2', text: 'ceinture blanche une barette' },
          { value: '3', text: 'ceinture blanche deux barettes' },
          { value: '4', text: 'ceinture blanche trois barettes' },
          { value: '5', text: 'ceinture blanche quatre barettes' },
          { value: '6', text: 'ceinture bleue' },
          { value: '7', text: 'ceinture bleue une barette' },
          { value: '8', text: 'ceinture bleue deux barettes' },
          { value: '9', text: 'ceinture bleue trois barettes' },
          { value: '10', text: 'ceinture bleue quatre barettes' },
          { value: '11', text: 'ceinture violette' },
          { value: '12', text: 'ceinture violette une barette' },
          { value: '13', text: 'ceinture violette deux barettes' },
          { value: '14', text: 'ceinture violette trois barettes' },
          { value: '15', text: 'ceinture violette quatre barettes' },
          { value: '16', text: 'ceinture marron' },
          { value: '17', text: 'ceinture marron une barette' },
          { value: '18', text: 'ceinture marron deux barettes' },
          { value: '19', text: 'ceinture marron trois barettes' },
          { value: '20', text: 'ceinture marron quatre barettes' },
          { value: '21', text: 'ceinture noire' },
          { value: '22', text: 'ceinture noire une barette' },
          { value: '23', text: 'ceinture noire deux barettes' },
          { value: '24', text: 'ceinture noire trois barettes' },
          { value: '25', text: 'ceinture noire quatre barettes' },
          { value: '26', text: 'ceinture noire cinq barettes (ceinture noire avec bande rouge)' },
          { value: '27', text: 'ceinture noire six barettes (ceinture noire avec bande rouge)' },
          { value: '28', text: 'ceinture noire sept barettes (ceinture rouge et noire)' },
          { value: '29', text: 'ceinture noire huit barettes (ceinture rouge et noire)' },
          { value: '30', text: 'ceinture noire neuf barettes (ceinture rouge)' },
          { value: '31', text: 'ceinture noire dix barettes (ceinture rouge)' }
        ];
        
          // Ajouter les champs au formulaire
          form.appendChild(createInputField('Prénom', 'first_name', userInfo.first_name, 'text', true));
          form.appendChild(createInputField('Nom', 'last_name', userInfo.last_name, 'text',true));
          form.appendChild(createInputField('Email', 'email', userInfo.email, 'email', true));
          form.appendChild(createDropdownField('Choisisez votre rôle', 'role', [{ value: 'user', text: 'user' },{ value: 'administrator', text: 'administrator' },{ value: 'super-administrator', text:'super-administrator' }],userInfo.role, true)); // Champ désactivé
          form.appendChild(createDropdownField('Choisisez votre genre', 'genre', [{ value: '1', text: 'Masculin' },{ value: '2', text: 'Féminin' }],userInfo.gender, true));
          form.appendChild(createInputField('Date de naissance', 'date_of_birth', this.formatDate(userInfo.date_of_birth, 'YYYY-MM-DD'), 'date',true));
          form.appendChild(createDropdownField('Choisisez votre grade', 'grade', gradeOptions,userInfo.grade, true));
          form.appendChild(createDropdownField('Choisisez votre abonnement', 'abonnement', [{ value: '1', text: 'paiement mensuel - 25€' },{ value: '2', text: 'paiement- trimestriel - 100€' },{ value: '3', text: 'paiement annuel - 300€' }],userInfo.abonnement, true));
  
          // Créer un bouton de modification
          const editButton = document.createElement('button');
          editButton.type = 'button';
          editButton.textContent = 'Modifier les informations';
          editButton.classList.add('edit-btn');

          // Créer un bouton d'inforations supplémentaires //
          const MoreInfosButton = document.createElement('button');
          MoreInfosButton.type = 'button';
          MoreInfosButton.textContent = 'Présences';
          MoreInfosButton.classList.add('more-infos-btn');
  
          // Créer un bouton de sauvegarde (il sera caché au départ)
          const saveButton = document.createElement('button');
          saveButton.type = 'button';
          saveButton.textContent = 'Sauvegarder';
          saveButton.classList.add('save-btn');
          saveButton.style.display = 'none'; // Caché au départ
  
          // Ajouter les boutons au formulaire
          form.appendChild(editButton);
          form.appendChild(saveButton);
  
          // Ajouter le formulaire dans participantsDiv
          participantsDiv.appendChild(form);
          participantsDiv.appendChild(MoreInfosButton)
  
          // Fonction pour activer/désactiver tous les champs du formulaire
          const enableFormFields = (enable) => {
            // Désactiver/Activer tous les champs input
            form.querySelectorAll('input').forEach(input => {
              input.disabled = !enable;
            });

            // Désactiver/Activer tous les menus déroulants (select)
            form.querySelectorAll('select').forEach(select => {
              select.disabled = !enable;
            });
          };

          
  
          // Gérer l'événement du bouton de modification
          editButton.addEventListener('click', () => {
            enableFormFields(true); // Activer les champs
            saveButton.style.display = 'block'; // Montrer le bouton "Sauvegarder"
            editButton.style.display = 'none'; // Cacher le bouton "Modifier"
          });

          MoreInfosButton.addEventListener('click', () => {
            console.log("more infos");
          
            function getQueryParams() {
              // Si `userInfo` est déjà défini en amont, pas besoin de le récupérer à nouveau ici
              return {
                email: userInfo.email,
                prenom: userInfo.first_name,
                nom: userInfo.last_name
              };
            }
          
            // Récupérer les paramètres de l'URL
            const queryParams = getQueryParams();
            console.log(queryParams);
          
            // Créer la query string avec les paramètres récupérés
            const queryString = new URLSearchParams(queryParams).toString();
            console.log("queryString" + queryString);

            window.location.href = `${url}pages/profile?${queryString}`;
          
            // Si les paramètres sont présents (si `email` ou `prenom` ou `nom` sont non vides), c'est pour un utilisateur spécifique
            if (queryParams.email && queryParams.prenom && queryParams.nom) {
              fetch(`${url}pages/profile?${queryString}`)
                .then(response => response.json())
                .then(data => {
                  console.log("Statistiques de l'utilisateur:", data);
                  // Logique pour afficher les stats de l'utilisateur
                  // Vous pouvez rediriger après avoir reçu les données si nécessaire
                  window.location.href = `${url}pages/profile?${queryString}`;
                })
                .catch(error => console.error("Erreur:", error));
            } else {
              // Sinon, c'est pour l'admin lui-même, on récupère ses infos depuis le localStorage
              const email = localStorage.getItem('email');
              const firstName = localStorage.getItem('firstName');
              const lastName = localStorage.getItem('lastName');
              console.log("fetch via body");
              fetch(`${url}pages/profile`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, firstName, lastName })
              })
              .then(response => response.json())
              .then(data => {
                console.log("Statistiques de l'admin:", data);
                // Logique pour afficher les stats de l'admin
              })
              .catch(error => console.error("Erreur:", error));
            }
          });
          
          
          
  
          // Gérer l'événement du bouton de sauvegarde
          saveButton.addEventListener('click', async () => {
            // Récupérer les données du formulaire
            const updatedData = {};
          
            // Récupérer les valeurs des champs input
            form.querySelectorAll('input').forEach(input => {
              updatedData[input.name] = input.value;  // Utiliser le nom de l'input comme clé
            });
          
            // Récupérer les valeurs des menus déroulants (select)
            form.querySelectorAll('select').forEach(select => {
              updatedData[select.name] = select.value;  // Utiliser le nom du select comme clé
            });
            console.log(updatedData)
            try {
              const response = await fetch(`${url}users/infos/update`, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ user_id: user.id, data: updatedData})
              });
      
              if (!response.ok) {
                  throw new Error('Erreur serveur.');
              }
      
              const data = await response.json();
              console.log(data)
      
              // Vérifier si la réponse contient des participants
              return data;
          } catch (error) {
              console.error('Erreur lors de la requête fetch:', error);
              return [];
          }
          
            try {
              // Sauvegarder les nouvelles données via l'API
              // await this.updateUserInfos(user.id, updatedData);
              console.log('Informations mises à jour avec succès:', updatedData);
          
              // Désactiver les champs après la sauvegarde
              enableFormFields(false);
              saveButton.style.display = 'none'; // Cacher le bouton "Sauvegarder"
              editButton.style.display = 'block'; // Afficher le bouton "Modifier"
            } catch (error) {
              console.error('Erreur lors de la mise à jour des informations:', error);
            }
          });          
        }
      } catch (error) {
        console.error('Erreur lors du chargement des informations :', error);
        participantsDiv.textContent = 'Erreur lors du chargement des informations.';
      }
  
      console.log('Informations ajoutées dans la div:', participantsDiv);
    } else {
      console.error('Aucun élément "panel-row" trouvé pour cet utilisateur.');
    }
  }

  formatDate(dateString: string, format: 'YYYY-MM-DD' | 'YYYY-MM' = 'YYYY-MM-DD'): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
  
    if (format === 'YYYY-MM') {
      return `${year}-${month}`;
    }
  
    return `${year}-${month}-${day}`;
  }


  deleteUser(user) {
    // Afficher une alerte pour confirmer l'action avant de procéder à la suppression
    const confirmation = window.confirm('Êtes-vous sûr de vouloir supprimer' + user.first_name + " " + user.last_name);
    
    if (confirmation) {
      console.log('Suppression de l\'utilisateur avec ID:', user.first_name + " " + user.last_name);
      
      // Si l'utilisateur confirme, envoyer la requête DELETE pour supprimer l'utilisateur
      fetch(`${url}users/delete/${user.id}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          console.log('Utilisateur supprimé avec succès');
          // Mettre à jour l'interface utilisateur ici (par exemple, retirer l'élément de la table)
        } else {
          console.error('Erreur lors de la suppression de l\'utilisateur');
        }
      })
      .catch(error => console.error('Erreur lors de la requête de suppression:', error));
    } else {
      console.log('Suppression annulée');
    }
  }
  
  
} 


let template: ViewTemplate<any> = html`${( context:ViewContext )=>{


  return html`<page-dashboard></page-dashboard>`;

}}`



render(template);