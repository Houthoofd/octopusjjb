import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate, ViewContext, asyncAppend, repeat, children } from '@lithium-framework/core';
import '@lithium-framework/router-element';
import 'unofficial-pf-v5-wc';
import 'unofficial-pf-v5-wc-icons';
import '../../components';

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
          // Créer et afficher les informations utilisateur
          const pillDiv = document.createElement('div');
          pillDiv.classList.add('pill');
  
          const firstNameDiv = document.createElement('div');
          firstNameDiv.classList.add('first-name');
          firstNameDiv.textContent = `Prénom : ${userInfo.first_name}`;
  
          const lastNameDiv = document.createElement('div');
          lastNameDiv.classList.add('last-name');
          lastNameDiv.textContent = `Nom : ${userInfo.last_name}`;
  
          const emailDiv = document.createElement('div');
          emailDiv.classList.add('email');
          emailDiv.textContent = `Email : ${userInfo.email}`;
  
          const roleDiv = document.createElement('div');
          roleDiv.classList.add('role');
          roleDiv.textContent = `Rôle : ${userInfo.role}`;
  
          const genderDiv = document.createElement('div');
          genderDiv.classList.add('gender');
          genderDiv.textContent = `Genre : ${userInfo.gender}`;
  
          const dobDiv = document.createElement('div');
          dobDiv.classList.add('dob');
          const dob = new Date(userInfo.date_of_birth).toLocaleDateString(); // Formatage de la date
          dobDiv.textContent = `Date de naissance : ${dob}`;
  
          const gradeDiv = document.createElement('div');
          gradeDiv.classList.add('grade');
          gradeDiv.textContent = `Grade : ${userInfo.grade}`;
  
          // Ajouter les éléments dans pillDiv
          pillDiv.appendChild(firstNameDiv);
          pillDiv.appendChild(lastNameDiv);
          pillDiv.appendChild(emailDiv);
          pillDiv.appendChild(roleDiv);
          pillDiv.appendChild(genderDiv);
          pillDiv.appendChild(dobDiv);
          pillDiv.appendChild(gradeDiv);
  
          // Ajouter le pillDiv dans participantsDiv
          participantsDiv.appendChild(pillDiv);
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