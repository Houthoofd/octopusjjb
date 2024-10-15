import { render , html, ViewTemplate , ViewContext } from '@lithium-framework/core';
import '@lithium-framework/router-element';
import 'unofficial-pf-v5-wc';


let template: ViewTemplate<any> = html`${( context:ViewContext )=>{


  return html`<pf-page masterhead-no-icon masterhead-no-branding drawer-inline drawer-expanded drawer-static drawer-panel-left >
    <div slot = "drawer-panel">
      <pf-navigation>
        <pf-navigation-list>
            <pf-navigation-list-item
              @mousedown=${() => { window.location.href = "cours" }}>
                Cours
            </pf-navigation-list-item>
            <pf-navigation-list-item
              @mousedown=${() => { window.location.href = "informations" }}>
                Informations supplémentaires
            </pf-navigation-list-item>
            <pf-navigation-list-item
              @mousedown=${() => { window.location.href = "compte" }}>
                Compte
            </pf-navigation-list-item>
            <pf-navigation-list-item
              @mousedown=${() => { window.location.href = "profile" }}>
                Profile
            </pf-navigation-list-item>
        </pf-navigation-list>
      </pf-navigation>
    </div>
    <div>
      <pf-panel header scrollable>
        <h1 slot = "header" >Cours</h1>
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
    <pf-avatar></pf-avatar>
  </pf-page>`;

}}`


document.addEventListener('DOMContentLoaded', () => {
    const messageContainer = document.createElement('div');
    const content = document.querySelectorAll('.content-classes')[0];

    fetch('http://localhost:3000/cours/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur serveur.');
        }
        return response.json();
    })
    .then(data => {
        if (data.length > 0) {
            for (let item of data) {
                let formatedDate = formatDateFromISO(item.date_cours);
                const raw = document.createElement('div');
                raw.setAttribute('class', 'raw-infos');

                const date = document.createElement('div');
                date.setAttribute('class', 'date-infos');

                const heureDebut = document.createElement('div');
                heureDebut.setAttribute('class', 'heure-debut-infos');

                const heureFin = document.createElement('div');
                heureFin.setAttribute('class', 'heure-fin-infos');

                const typeCours = document.createElement('div');
                typeCours.setAttribute('class', 'type-de-cours-infos');

                const inscriptionButton = document.createElement('button');
                inscriptionButton.setAttribute('class', 'inscription');
                inscriptionButton.innerHTML = 'Inscription';

                const svgContainer  = document.createElement('div');
                svgContainer.setAttribute('class', 'down-arrow');
                svgContainer.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1); transform: ; msFilter:;">
                    <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path>
                </svg>
                `;

                date.innerHTML = formatedDate;
                heureDebut.innerHTML = item.heure_debut;
                heureFin.innerHTML = item.heure_fin;
                typeCours.innerHTML = item.type_cours;

                raw.appendChild(date);
                raw.appendChild(heureDebut);
                raw.appendChild(heureFin);
                raw.appendChild(typeCours);
                raw.appendChild(inscriptionButton);
                raw.appendChild(svgContainer);
                content.appendChild(raw);

                inscriptionButton.addEventListener('click', (e) => {
                    const target = e.target as HTMLElement;
                    const parent = target.parentNode as HTMLElement;
                    
                    // récupération de la date //
                    const formatedDate = convertToISODate(parent.children[0].innerHTML);
                    console.log('Date formatée:', formatedDate);

                    // fetch pour récupérer l'id de l'utilisateur //
                    const firstName = localStorage.getItem('first_name');
                    if (firstName) {
                        fetch('http://localhost:3000/inscriptions/', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ first_name: firstName })
                        })
                        .then(response => {
                            if (!response.ok) {
                                throw new Error('Erreur serveur.');
                            }
                            return response.json();
                        })
                        .then(data => {
                            console.log('Réponse du serveur:', data);
                        })
                        .catch(error => {
                            console.error('Erreur lors de la requête fetch:', error);
                        });
                    } else {
                        console.error('Aucun prénom trouvé dans le localStorage.');
                    }
                });
            }
        } else {
            messageContainer.textContent = 'Cours non trouvés';
        }
        console.log('Réponse du serveur:', data);
    })
    .catch(error => {
        messageContainer.innerHTML = "Cours non trouvés";
        console.error('Erreur lors de la requête fetch:', error);
    });

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

function formatDateFromISO(isoDateString) {
    const date = new Date(isoDateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function convertToISODate(dateString) {
    const [year, month, day] = dateString.split('-');
    return new Date(`${year}-${month}-${day}T00:00:00Z`).toISOString();
}







render(template);