import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate, ViewContext, asyncAppend, repeat, children } from '@lithium-framework/core';
import '@lithium-framework/router-element';
import 'unofficial-pf-v5-wc';
import 'unofficial-pf-v5-wc-icons';
import '../../components';

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
              ${asyncAppend(compte.preloadData(), (result) => {
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
                              <input type="email" id="email" value="${info.email}"/>
                            </div>

                            <div class="first-name">
                              <label for="first_name">Prénom:</label>
                              <input type="text" id="first_name" value="${info.first_name}"/>
                            </div>

                            <div class="gender">
                              <label for="gender">Genre:</label>
                              <input type="text" id="gender" value="${info.gender}"/>
                            </div>

                            <div class="grade">
                              <label for="grade">Grade:</label>
                              <input type="text" id="grade" value="${info.grade}"/>
                            </div>

                            <div class="last-name">
                              <label for="last_name">Nom:</label>
                              <input type="text" id="last_name" value="${info.last_name}"/>
                            </div>

                            <div class="role">
                              <label for="role">Rôle:</label>
                              <input type="text" id="role" value="${info.role}" readonly disabled/>
                            </div>

                            <div class="abonnement">
                              <label for="abonnement">Abonnement:</label>
                              <input type="text" id="abonnement" value="${info.abonnement}"/>
                            </div>
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
    `
  ]
})

export class Compte extends WebComponent {
  data: any[] = [];


  async preloadData(): Promise<any[]> {
    try {
      const userDataString = localStorage.getItem('userData');
      if (!userDataString) {
        throw new Error('Utilisateur non connecté. Aucune donnée dans localStorage.');
      }
  
      const userData = JSON.parse(userDataString);
      console.log('Données utilisateur récupérées:', userData);
  
      const response = await fetch('http://localhost:3000/informations', {
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