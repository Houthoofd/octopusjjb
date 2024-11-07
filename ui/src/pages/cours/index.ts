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
                console.log(result);
                return html`
                  <div class="raw-infos">
                    ${repeat(
                      result,
                      html`${(cour) => {
                        console.log(cour);
                        return html`
                          <div class="row">
                            <div class="type-de-cours">${cour.type_cours}</div>
                            <div class="date">${cours.formatDateFromISO(cour.date_cours)}</div>
                            <div class="heure-debut">${cour.heure_debut}</div>
                            <div class="heure-fin">${cour.heure_fin}</div>
                            <pf-button @click="${() => cours.register(cour)}">Réservez</pf-button>
                          </div>`;
                      }}`
                    )}
                  </div>`;
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
        }
        .navigation {
          color: black;
        }
      `,
    ],
  })
  

export class Cours extends WebComponent {
  data: any[] = [];

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
            return data.length > 0 ? data : [];
        } catch (error) {
            console.error('Erreur lors de la requête fetch:', error);
            return [];
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