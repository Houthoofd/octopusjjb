import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate, ViewContext, asyncAppend, repeat, children } from '@lithium-framework/core';
import '@lithium-framework/router-element';
import 'unofficial-pf-v5-wc';
import 'unofficial-pf-v5-wc-icons';
import '../../components';

@customElement({
  name: 'page-informations',
  template: html`${(informations: Informations) => {
    return html`
      <pf-page masterhead-no-icon masterhead-no-branding drawer-inline drawer-expanded drawer-static drawer-panel-left>
          <div slot = "drawer-panel">
            <navigation-panel></navigation-panel>
          </div>
          <pf-panel header scrollable>
            <div slot="header">
              <h1 class="title">Informations</h1>
            </div>
            <div class="table-infos">
              ${asyncAppend(informations.preloadData(), (result) => {
                  return html`${
                    repeat(
                      result,
                      html`${(info) => {
                        console.log(info)
                        return html`
                          <div class="row">
                            <div class="type-de-cours">${informations.formatDateFromISO(info.created_at)}</div>
                            <div class="heure-debut">${info.email}</div>
                            <div class="heure-fin">${info.first_name}</div>
                            <div class="type-de-cours">${info.gender}</div>
                            <div class="heure-debut">${info.grade}</div>
                            <div class="heure-fin">${info.last_name}</div>
                            <div class="heure-fin">${info.role}</div>
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

export class Informations extends WebComponent {
  data: any[] = [];

  @state() isUser: boolean = null;
  @state() isAdmin: boolean = null;

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
    if (userRole === 'administrator' || userRole === 'super-administrator') {
        this.isUser = false;
        this.isAdmin = true;
    } else {
        this.isUser = true;
        this.isAdmin = false;
    }

    console.log('Est-ce un administrateur ? ', this.isAdmin);
  }


  async preloadData(): Promise<any[]> {
    try {
      const userDataString = localStorage.getItem('userData');
      if (!userDataString) {
        throw new Error('Utilisateur non connecté. Aucune donnée dans localStorage.');
      }
  
      const userData = JSON.parse(userDataString);
      console.log('Données utilisateur récupérées:', userData);
  
      const response = await fetch('http://www.octopusjjb.ovh/compte', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
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


  return html`<page-informations></page-informations>`;

}}`

render(template);