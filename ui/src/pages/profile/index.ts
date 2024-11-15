import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate, ViewContext, asyncAppend, repeat, children } from '@lithium-framework/core';
import '@lithium-framework/router-element';
import 'unofficial-pf-v5-wc';
import 'unofficial-pf-v5-wc-icons';
import '../../components';


@customElement({
  name: 'page-profile',
  template: html`${(profile: Profile) => {
    return html`
      <pf-page masterhead-no-icon masterhead-no-branding drawer-inline drawer-expanded drawer-static drawer-panel-left>
          <div slot = "drawer-panel">
            <navigation-panel></navigation-panel>
          </div>
          <pf-panel header scrollable>
            <div slot="header">
              <h1 class="title">Profile</h1>
            </div>
            <div class="table-infos">
              ${asyncAppend(profile.preloadData(), (result) => {
                  console.log(result)
                  return html`
                    <div class="row header">
                      <div class="col">Mois</div>
                      <div class="col">Total de cours</div>
                      <div class="col">Taux de présences</div>
                    </div>
                    ${
                    repeat(
                      result.totalCourses,
                      html`${(info) => {
                        console.log(info.month,info.total_courses, info.presences, profile.calculatePresenceRate(info.presences,info.total_courses))
                        return html`
                          <div class="row">
                            <div class="col">${info.month}</div>
                            <div class="col">${info.total_courses}</div>
                            <div class="col">${profile.calculatePresenceRate(info.presences, info.total_courses)}</div>
                          </div>`;
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
      .title{
        color: black;
      }
      .table-infos {
        color: black;
      }
      .navigation{
        color: black
      }
      .table-infos .row {
  display: flex;
  padding: 10px 0;
}

.table-infos .row.header {
  font-weight: bold;
  background-color: #f4f4f4;
}

.table-infos .col {
  flex: 1;
  padding: 5px;
  border-bottom: 1px solid #ddd;
}

.table-infos .row:hover {
  background-color: #f9f9f9;
}
    `
  ]
})

export class Profile extends WebComponent {
  data: any[] = [];

  // Fonction pour récupérer les paramètres depuis l'URL
  getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
      email: params.get('email'),
      prenom: params.get('prenom'),
      nom: params.get('nom'),
    };
  }

  // Méthode pour précharger les données de l'utilisateur
  async preloadData(): Promise<any[]> {
    try {
      const queryParams = this.getQueryParams();

      // Vérifier si les paramètres sont présents dans l'URL
      if (!queryParams.email || !queryParams.prenom || !queryParams.nom) {
        // Si les paramètres sont manquants, essayer de les récupérer depuis localStorage
        const userDataString = localStorage.getItem('userData');
        if (!userDataString) {
          throw new Error('Utilisateur non connecté. Aucune donnée dans localStorage.');
        }
        const userData = JSON.parse(userDataString);
        console.log('Données utilisateur récupérées depuis localStorage:', userData);

        // Récupérer les données via un fetch pour l'utilisateur connecté
        const response = await fetch('http://localhost:3000/profile', {
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
        return data.totalCourses.length > 0 ? data : []; // Retourne le tableau, ou un tableau vide si aucun élément
      } else {
        // Si les paramètres sont présents dans l'URL, les utiliser pour faire un fetch
        console.log("Données reçues depuis l'URL:", queryParams);

        const response = await fetch(`http://localhost:3000/profile?email=${queryParams.email}&prenom=${queryParams.prenom}&nom=${queryParams.nom}`, {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        
        if (!response.ok) {
          throw new Error('Erreur serveur.');
        }

        const data = await response.json();
        return data.totalCourses.length > 0 ? data : []; // Retourne le tableau, ou un tableau vide si aucun élément
      }
    } catch (error) {
      console.error('Erreur lors de la requête fetch:', error);
      return [];
    }
  }

  calculatePresenceRate(presences, totalCours) {
    const totalParticipants = presences.length;
    const participantsPresent = presences.filter(p => p.status === 1).length;

    console.log(totalParticipants, participantsPresent, totalCours);
    // Si aucun cours ou participant, on retourne 0%
    if (totalCours === 0 || totalParticipants === 0) {
      return '0%';
    }

    // Calculer le taux de présences par rapport au nombre total de cours
    const presenceRate = (participantsPresent / (totalCours)) * 100;
    console.log(presenceRate, participantsPresent, totalCours)
    return `${presenceRate.toFixed(2)}%`;
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


  return html`<page-profile></page-profile>`;

}}`


render(template);