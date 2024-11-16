import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate, ViewContext, asyncAppend, repeat, children } from '@lithium-framework/core';
import '@lithium-framework/router-element';
import 'unofficial-pf-v5-wc';
import 'unofficial-pf-v5-wc-icons';

@customElement({
  name: 'navigation-panel',
  template: html`${(navigation: Navigation) => {
    return html`
    <div class="navigation">
          <div class="list"></div>
            <div class="item"><a href="/pages/cours">cours</a></div>
            <div class="item"><a href="/pages/informations">infos</a></div>
            <div class="item"><a href="/pages/compte">compte</a></div>
            <div class="item"><a href="/pages/profile">profile</a></div>
             ${navigation.isAdmin === true ? html`<div class="item"><a href="/pages/dashboard">dashboard</a></div>` : html``}
          </div>
          <div class="bottom-navigation">
            <pf-button @click="${() => navigation.logout()}">Déconnexion</pf-button>
          </div>
        </div>`;
  }}`,
  styles : [
    css`
      .navigation{
        color: black;
        background-color: #ffffff
      }
      .list{
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .item{
        list-style: none;
        padding: 10px 10px;
        transition: 0.3s;
        cursor: pointer
      }
      .item:hover{
        background-color: lightgray
      }
      a{
        color: black;
        text-decoration: none;
      }
    `
  ]
})
export class Navigation extends WebComponent{
  @state() isAdmin: boolean = null;
  connectedCallback() {
    super.connectedCallback();
    this.getRole();
  }
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
  logout() {
    localStorage.clear();
    window.location.href = 'http://localhost:3000';
  }
  
  
  
  
}