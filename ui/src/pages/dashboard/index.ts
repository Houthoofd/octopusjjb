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
}


let template: ViewTemplate<any> = html`${( context:ViewContext )=>{


  return html`<page-dashboard></page-dashboard>`;

}}`



render(template);