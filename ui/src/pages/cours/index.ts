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
            <h1 slot="header">Informations</h1>
            <div class="table-infos">
              ${asyncAppend(cours.preloadData(), (result) => {
                return html`
                    ${repeat(
                      result.cours,
                      html`${(cour) => {
                        console.log(cour.participants)
                        return html`
                          <div class="panel-row">
                            <div class="row">
                              <div class="type-de-cours">${cour.type_cours}</div>
                              <div class="date">${cours.formatDateFromISO(cour.date_cours)}</div>
                              <div class="heure-debut">${cour.heure_debut}</div>
                              <div class="heure-fin">${cour.heure_fin}</div>
                              <pf-button @click="${() => cours.register(cour)}">Réservez</pf-button>
                              ${cours.isAdmin === true ? html`<div @click="${(e) => cours.displayParticipants(e)}" class='icon-down'><div class='icon'><pf-icons-chevron-down></pf-icons-chevron-down></div></div>` : html``}
                            </div>
                            <div class="participants">
                              ${repeat(
                                cour.participants,
                                html`${(participant) => {
                                  return html`
                                    <div class="pill">
                                      <div class="first-name">${participant.first_name}</div>
                                      <div class="last-name">${participant.last_name}</div>
                                      <div class="icon-cross"><div class="icon"><pf-icons-times></pf-icons-times></div></div>
                                      <div class="icon-validate"><div class="icon"><pf-icons-check></pf-icons-check></div></div>
                                    </div>
                                  `
                                }}`
                              )}
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
            const response = await fetch('http://localhost:3000/cours/inscription', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(inscriptionData)
            });

            // Vérifier si la requête a réussi
            if (!response.ok) {
                throw new Error('Erreur serveur.');
            }

            // Récupérer les données JSON de la réponse
            const data = await response.json();
            console.log(data);

            // Vérifier si la réponse contient un message et gérer en conséquence
            if (data && data.message) {
                console.log(data.message);  // Affiche le message du serveur
                if (data.message === "Inscription réussie !") {
                    console.log("Bien inscrit au cours");
                } else {
                    console.log("Pas d'inscription ou réponse inattendue.");
                }
            } else {
                console.log("Réponse vide ou mal formatée.");
            }

        } catch (error) {
            console.error('Erreur lors de la requête fetch:', error);
            return [];
        }
    }

    async preloadData(): Promise<any[]> {
        try {
            const response = await fetch('http://localhost:3000/cours/', {
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
    if (!userDataString) {
      throw new Error('Utilisateur non connecté. Aucune donnée dans localStorage.');
    }

    const userData = JSON.parse(userDataString);
    console.log('Données utilisateur récupérées:', userData);

    // Récupérer le rôle de l'utilisateur
    const userRole = userData.role;
    console.log('Rôle de l\'utilisateur:', userRole);

    // Vérifier si le rôle est 'administrator' ou 'super-administrator' et mettre à jour isAdmin
    if (userRole === 'administrator' || userRole === 'super-administrator') {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }

    console.log('Est-ce un administrateur ? ', this.isAdmin);
  }

  displayParticipants(event: Event) {
    console.log(event)
    // Récupérer l'élément qui a déclenché l'événement
    const target = event.target as HTMLElement;
    
    // Trouver l'élément parent avec la classe 'panel-row'
    const panelRow = target.closest('.panel-row');
    
    if (!panelRow) {
      console.error('Aucun élément "panel-row" trouvé.');
      return;
    }
  
    // Ajouter ou retirer la classe 'active' sur l'élément parent
    panelRow.classList.toggle('active');
    console.log('Classe "active" togglée pour', panelRow);
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