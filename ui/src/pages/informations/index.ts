import { render , html, ViewTemplate , ViewContext } from '@lithium-framework/core';
import '@lithium-framework/router-element';
import 'unofficial-pf-v5-wc';


let template: ViewTemplate<any> = html`${( context:ViewContext )=>{


    return html`<pf-page masterhead-no-icon masterhead-no-branding drawer-inline drawer-expanded drawer-static drawer-panel-left >
      <pf-action-list slot = "masthead-content">
        <pf-action-list-item>
          <pf-button>Action 1</pf-button>
        </pf-action-list-item>
        <pf-action-list-item>
          <pf-button>Action 1</pf-button>
        </pf-action-list-item>
      </pf-action-list>
      <div slot = "drawer-panel">
        <pf-navigation>
          <pf-navigation-list>
              <pf-navigation-list-item
                @mousedown=${() => { window.location.href = "cours" }}>
                  Bonjour
              </pf-navigation-list-item>
              <pf-navigation-list-item>Link 1</pf-navigation-list-item>
              <pf-navigation-list-item>Link 1</pf-navigation-list-item>
              <pf-navigation-list-item>Link 1</pf-navigation-list-item>
          </pf-navigation-list>
        </pf-navigation>
      </div>
      <div>
        <pf-panel header scrollable>
          <h1 slot = "header" >MyContent</h1>
          <div>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehiculex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodeleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada seposuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quaullamcorper, in commodo massa vulputate.
            </span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehiculex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodeleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada seposuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quaullamcorper, in commodo massa vulputate.
            </span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehiculex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodeleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada seposuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quaullamcorper, in commodo massa vulputate.
            </span>
          </div>
        </pf-panel>
      </div>
    </pf-page>`;
  
  }}`

document.addEventListener('DOMContentLoaded', () => {
    
    const logoutLink = document.getElementById('logout');

    if (logoutLink) {
        logoutLink.addEventListener('click', (e) => {
            
            e.preventDefault();

            localStorage.clear();
            sessionStorage.clear();

            window.location.href = '/';
        });
    }
});



render(template);