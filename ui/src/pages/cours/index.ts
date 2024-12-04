import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate, ViewContext, asyncAppend, repeat, children } from '@lithium-framework/core';
import '@lithium-framework/router-element';
import 'unofficial-pf-v5-wc';
import 'unofficial-pf-v5-wc-icons';
import '../../components';

@customElement({
    name: 'page-cours',
    template: html`${(cours: Cours) => {
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
              <h1 class="title">Cours</h1>
            </div>
            <div class="table-infos">
              ${asyncAppend(cours.preloadData(), (result) => {
                return html`
                    ${repeat(
                      result.cours,
                      html`${(cour) => {
                        console.log(cour)
                        return html`
                          <div class="panel-row" data-cours-id="${cour.id}">
                            <div class="row">
                              <div class="type-de-cours">${cour.type_cours}</div>
                              <div class="date">${cours.formatDateFromISO(cour.date_cours)}</div>
                              <div class="heure-debut">${cour.heure_debut}</div>
                              <div class="heure-fin">${cour.heure_fin}</div>
                              <pf-button @click="${() => cours.register(cour)}">Réservez</pf-button>
                              ${cours.isAdmin === true ? html`<div @click="${(cour) => cours.displayParticipants(cour)}" class='icon-down'><div class='icon'><pf-icons-chevron-down></pf-icons-chevron-down></div></div>` : html``}
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
        .participants{
          display: flex;
          gap: 15px;
          margin-top: 10px;
        }
        .pill{
          display: flex;
          justify-content: space-between;
          background-color: #9e9e9e0f;
          width: 200px;
          padding: 10px 10px;
          border-radius: 10px;
        }
        .pill.valide{
          background-color: green;
        }
        .pill.invalide{
          background-color: red;
        }
        .pill > .icon-cross{
          cursor: pointer;
          background-color: #f9f9f9;
          width: 24px;
          height: 24px;
          border-radius: 3px;
        }
        .pill > .icon-validate{
          cursor: pointer;
          background-color: #f9f9f9;
          width: 24px;
          height: 24px;
          border-radius: 3px;
        }
        .pill > .icon-cross > .icon{
          transform: translate(4px, 4px);
          color: #9e9e9eab;
        }
        .pill > .icon-validate > .icon{
          transform: translate(4px, 4px);
          color: #9e9e9eab;
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
  

export class Cours extends WebComponent {
  data: any[] = [];

  @state() isAdmin: boolean = null;

  connectedCallback() {
    super.connectedCallback();
    this.getRole();
  }

  redirection() {
    const userDataString = localStorage.getItem('userData');

    // Vérifie si userData existe dans le localStorage
    if (!userDataString) {
        // Si userData n'existe pas, on redirige vers '/pages/connexion'
        window.location.href = '/pages/connexion';
    } else {
        // Si userData existe, on ne fait rien ou on peut exécuter d'autres actions
        console.log('Utilisateur déjà connecté');
    }
  }


  async register(cour) {
    try {
        const userDataString = localStorage.getItem('userData');
        if (!userDataString) {
            throw new Error('Utilisateur non connecté. Aucune donnée dans localStorage.');
        }

        const userData = JSON.parse(userDataString);
        console.log('Données utilisateur récupérées:', userData);

        const inscriptionData = {
            user: userData, 
            cours: cour
        };
        console.log(inscriptionData);

        // Faire la requête fetch
        const response = await fetch('http://www.octopusjjb.ovh/cours/inscription', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(inscriptionData)
        });

        // Vérifier si la requête a réussi
        if (!response.ok) {
            throw new Error('Erreur serveur.');
        }

        // Récupérer les données JSON de la réponse
        const data = await response.json();
        console.log(data);

        // Vérifie si la réponse contient un message et gérer en conséquence
        if (data) {

            if (data.success_message) {
              alert(data.success_message + "au cour du " + this.formatDateFromISO(cour.date_cours))  // Affiche le message du serveur
            }
            if (data.info_message) {
              alert(data.info_message)
            }
        } else {
            console.log("Réponse vide ou mal formatée.");
        }
      if(response.status === 409){
        alert(data.info_message);
      }

    } catch (error) {
        console.error('Erreur lors de la requête fetch:', error);
        alert("vous êtes déjà inscrit à ce cour");
        return [];
    }
  }

    async preloadData(): Promise<any[]> {
        try {
            const response = await fetch('http://www.octopusjjb.ovh/cours/', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });
        
            if (!response.ok) {
                throw new Error('Erreur serveur.');
            }
        
            const data = await response.json();
            return data.cours.length > 0 ? data : [];
        } catch (error) {
            console.error('Erreur lors de la requête fetch:', error);
            return [];
        }
    }

    // Méthode pour récupérer le rôle et affecter isAdmin
    getRole() {
      const userDataString = localStorage.getItem('userData');
  
      // Vérifie si les données de l'utilisateur existent
      if (!userDataString) {
          // Si pas d'utilisateur connecté, redirige vers la page de connexion
          //window.location.href = '/pages/cours';
          return; // Empêche l'exécution du reste du code
      }
  
      const userData = JSON.parse(userDataString);
      console.log('Données utilisateur récupérées:', userData);
  
      // Récupère le rôle de l'utilisateur
      const userRole = userData.role;
      console.log('Rôle de l\'utilisateur:', userRole);
  
      // Vérifie si l'utilisateur a un rôle administrateur et met à jour isAdmin
      if (userRole === 'administrator' || userRole === 'super-administrator') {
          this.isAdmin = true;
      } else {
          this.isAdmin = false;
      }
  
      console.log('Est-ce un administrateur ? ', this.isAdmin);
  }
  

  async loadParticipants(courId) {
    console.log(courId);
    try {
        const response = await fetch('http://www.octopusjjb.ovh/cours/participant', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ cour_id: courId })
        });

        if (!response.ok) {
            throw new Error('Erreur serveur.');
        }

        const data = await response.json();

        // Vérifier si la réponse contient des participants
        return data.participants && data.participants.length > 0 ? data.participants : [];
    } catch (error) {
        console.error('Erreur lors de la requête fetch:', error);
        return [];
    }
  }


  

  async displayParticipants(cour) {
    console.log("Cours ID:", cour.id);
  
    // Utiliser querySelector pour sélectionner le panel-row correspondant au cours cliqué
    const panelRow = this.shadowRoot?.querySelector(`.panel-row[data-cours-id="${cour.id}"]`);
    console.log(panelRow);
  
    if (panelRow) {
      // Si panel-row est déjà active, la désactiver et ne rien faire de plus
      if (panelRow.classList.contains('active')) {
        panelRow.classList.remove('active');
        console.log('Panel désactivé.');
        return; // Sortir de la fonction car on ne veut pas recharger les participants
      }
  
      // Sinon, activer le panel
      panelRow.classList.add('active');
      console.log('Panel activé:', panelRow);
  
      // Vérifier si la div avec les participants existe déjà
      let participantsDiv = panelRow.querySelector('.new-participants');
  
      // Si la div existe déjà et a des participants, ne pas recharger les données
      if (participantsDiv && participantsDiv.children.length > 0) {
        console.log('Participants déjà chargés. Aucun rechargement nécessaire.');
        return;
      }
  
      // Si la div des participants n'existe pas, la créer
      if (!participantsDiv) {
        participantsDiv = document.createElement('div');
        participantsDiv.classList.add('new-participants'); // Classe pour styliser la nouvelle div
        panelRow.appendChild(participantsDiv); // Ajoute la div à la fin de panelRow
      }
  
      // Charger les participants depuis l'API
      try {
        const participants = await this.loadParticipants(cour.id);
  
        // Vider la div des anciens participants
        participantsDiv.innerHTML = '';
  
        // Vérifier si l'objet participants est vide
        if (Object.keys(participants).length === 0) {
          participantsDiv.textContent = 'Aucun participant trouvé.';
        } else {
          // Utiliser Object.values pour récupérer les participants
          const participantsArray = Object.values(participants);
  
          // Créer les éléments pour chaque participant
          participantsArray.forEach(participant => {
            const pillDiv = document.createElement('div');
            pillDiv.classList.add('pill');
  
            const firstNameDiv = document.createElement('div');
            firstNameDiv.classList.add('first-name');
            firstNameDiv.textContent = participant.first_name;
  
            const lastNameDiv = document.createElement('div');
            lastNameDiv.classList.add('last-name');
            lastNameDiv.textContent = participant.last_name;
  
            const iconCrossDiv = document.createElement('div');
            iconCrossDiv.classList.add('icon-cross');
            const crossIcon = document.createElement('div');
            crossIcon.classList.add('icon');
            crossIcon.innerHTML = `<pf-icons-times></pf-icons-times>`;
            iconCrossDiv.appendChild(crossIcon);

            // Attacher une fonction à l'événement "click" de l'icône "cross"
            iconCrossDiv.addEventListener('click', async () => {
              try {
                // Effectuer la requête POST pour supprimer le participant
                const response = await fetch('http://www.octopusjjb.ovh/cours/participant/cancel', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    courId: cour.id,      // L'ID du cours
                    participantId: participant.participant_id
                  })
                });
            
                // Vérifier si la réponse est ok (code 200-299)
                if (!response.ok) {
                  throw new Error('Erreur serveur : impossible de supprimer le participant.');
                }
            
                // Extraire les données JSON de la réponse
                const data = await response.json();
            
                // Vérifier si la suppression a été effectuée avec succès (basé sur la réponse du serveur)
                if (data.message) {
                  console.log('Participant supprimé avec succès.');
                  
                  // Ici, tu peux mettre à jour l'interface utilisateur, comme retirer le participant de l'affichage
                  iconCrossDiv.parentElement.classList.toggle("invalide"); // Par exemple, retirer la div contenant le participant
                } else {
                  console.error('Erreur lors de la suppression du participant :', data.message);
                }
            
              } catch (error) {
                console.error('Erreur lors de la requête fetch :', error);
              }
            });
            

  
            const iconValidateDiv = document.createElement('div');
            iconValidateDiv.classList.add('icon-validate');
            const checkIcon = document.createElement('div');
            checkIcon.classList.add('icon');
            checkIcon.innerHTML = `<pf-icons-check></pf-icons-check>`;
            iconValidateDiv.appendChild(checkIcon);

            // Attacher une fonction à l'événement "click" de l'icône "check"
            iconValidateDiv.addEventListener('click', async () => {
              console.log(cour.id,participant.participant_id)
              try {
                // Effectuer la requête POST pour supprimer le participant
                const response = await fetch('http://www.octopusjjb.ovh/cours/participant/validation', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    courId: cour.id,      // L'ID du cours
                    participantId: participant.participant_id
                  })
                });
            
                // Vérifier si la réponse est ok (code 200-299)
                if (!response.ok) {
                  throw new Error('Erreur serveur : impossible de valider le participant.');
                }
            
                // Extraire les données JSON de la réponse
                const data = await response.json();
            
                // Vérifier si la suppression a été effectuée avec succès (basé sur la réponse du serveur)
                if (data.message) {
                  console.log('Participant validé avec succès.');
                  
                  // Ici, tu peux mettre à jour l'interface utilisateur, comme retirer le participant de l'affichage
                  iconCrossDiv.parentElement.classList.toggle("valide");
                } else {
                  console.error('Erreur lors de la suppression du participant :', data.message);
                }
            
              } catch (error) {
                console.error('Erreur lors de la requête fetch :', error);
              }
            });
  
            // Ajouter les éléments dans pillDiv
            pillDiv.appendChild(firstNameDiv);
            pillDiv.appendChild(lastNameDiv);
            pillDiv.appendChild(iconCrossDiv);
            pillDiv.appendChild(iconValidateDiv);
  
            // Ajouter le pillDiv dans la div des participants
            participantsDiv.appendChild(pillDiv);
          });
        }
      } catch (error) {
        console.error('Erreur lors du chargement des participants:', error);
        participantsDiv.textContent = 'Erreur lors du chargement des participants.';
      }
  
      console.log('Participants ajoutés dans la div:', participantsDiv);
    } else {
      console.error('Aucun élément "panel-row" trouvé pour ce cours.');
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


  return html`<page-cours></page-cours>`;

}}`



render(template);