import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate, ViewContext, asyncAppend, repeat, children } from '@lithium-framework/core';
import '@lithium-framework/router-element';
import 'unofficial-pf-v5-wc';
import 'unofficial-pf-v5-wc-icons';
import '../../components';
import { userInfo, userInfo, userInfo } from 'os';

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
            <h1 slot="header">Dashboard</h1>
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
 
  async preloadData(): Promise<any[]> {
    try {
        const response = await fetch('http://localhost:3000/users/', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
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
        const response = await fetch('http://localhost:3000/users/infos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_id: userId })
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
          const createInputField = (labelText, fieldName, value, disabled = false) => {
            const div = document.createElement('div');
            div.classList.add('form-group');
  
            const label = document.createElement('label');
            label.textContent = labelText;
  
            const input = document.createElement('input');
            input.type = 'text';
            input.name = fieldName;
            input.value = value || '';
            input.disabled = disabled;
            input.classList.add('form-control');
  
            div.appendChild(label);
            div.appendChild(input);
  
            return div;
          };
  
          // Ajouter les champs au formulaire
          form.appendChild(createInputField('Prénom', 'first_name', userInfo.first_name));
          form.appendChild(createInputField('Nom', 'last_name', userInfo.last_name));
          form.appendChild(createInputField('Email', 'email', userInfo.email));
          form.appendChild(createInputField('Rôle', 'role', userInfo.role, true)); // Champ désactivé
          form.appendChild(createInputField('Genre', 'gender', userInfo.gender));
          form.appendChild(createInputField('Date de naissance', 'date_of_birth', new Date(userInfo.date_of_birth).toLocaleDateString()));
          form.appendChild(createInputField('Grade', 'grade', userInfo.grade));
  
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
  
          // Fonction pour activer les champs d'édition
          const enableFormFields = (enable) => {
            form.querySelectorAll('input').forEach(input => {
              if (input.name !== 'role') { // Ne pas activer le champ "role"
                input.disabled = !enable;
              }
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

            window.location.href = `http://localhost:1234/pages/profile?${queryString}`;
          
            // Si les paramètres sont présents (si `email` ou `prenom` ou `nom` sont non vides), c'est pour un utilisateur spécifique
            if (queryParams.email && queryParams.prenom && queryParams.nom) {
              fetch(`http://localhost:1234/pages/profile?${queryString}`)
                .then(response => response.json())
                .then(data => {
                  console.log("Statistiques de l'utilisateur:", data);
                  // Logique pour afficher les stats de l'utilisateur
                  // Vous pouvez rediriger après avoir reçu les données si nécessaire
                  window.location.href = `http://localhost:1234/pages/profile?${queryString}`;
                })
                .catch(error => console.error("Erreur:", error));
            } else {
              // Sinon, c'est pour l'admin lui-même, on récupère ses infos depuis le localStorage
              const email = localStorage.getItem('email');
              const firstName = localStorage.getItem('firstName');
              const lastName = localStorage.getItem('lastName');
              console.log("fetch via body");
              fetch('http://localhost:1234/pages/profile', {
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
            const updatedData = {
              first_name: form.first_name.value,
              last_name: form.last_name.value,
              email: form.email.value,
              gender: form.gender.value,
              date_of_birth: form.date_of_birth.value,
              grade: form.grade.value,
            };
  
            try {
              // Sauvegarder les nouvelles données via l'API
              //await this.updateUserInfos(user.id, updatedData);
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
} 


let template: ViewTemplate<any> = html`${( context:ViewContext )=>{


  return html`<page-dashboard></page-dashboard>`;

}}`



render(template);