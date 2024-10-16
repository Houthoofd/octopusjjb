import { render , html, ViewTemplate , ViewContext } from '@lithium-framework/core';
import '@lithium-framework/router-element';
import 'unofficial-pf-v5-wc';
import 'unofficial-pf-v5-wc-icons';



let template: ViewTemplate<any> = html`${( context:ViewContext )=>{



  return html`
  <pf-modal>
    <slot>
      <pf-login></pf-login>
    </slot>
  </pf-modal>`;
}}`


document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const messageContainer = document.createElement('div');
    form?.appendChild(messageContainer);

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const inputs = document.querySelectorAll('input');
            const email = (inputs[0] as HTMLInputElement).value;
            const password = (inputs[1] as HTMLInputElement).value;

            if (!email || !password) {
                messageContainer.textContent = "Veuillez remplir tous les champs.";
                return;
            }

            const data = { email, password };
            console.log(data)

            fetch('http://localhost:3000/connexion/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur serveur.');
                }
                return response.json();
            })
            .then(data => {
                if (data.length > 0) {
                    for(let item of data){
                        localStorage.setItem('first_name', item.first_name);
                        localStorage.setItem('email', item.email);
                        localStorage.setItem('role', item.status);
                        localStorage.setItem('isLogged', 'true');
                        console.log("mise en mémoire dans le locale storage" + item.first_name + item.email)
                    }
                    window.location.href = 'http://localhost:1234';
                } else {
                    messageContainer.textContent = 'Utilisateur non trouvé ou mot de passe incorrect.';
                }
                console.log('Réponse du serveur:', data);
            })
            .catch(error => {
                messageContainer.innerHTML = "Vous n'êtes pas encore inscris, veuillez vous <a href='inscriptions'><strong>inscrire</string></a>";
                console.error('Erreur lors de la requête fetch:', error);
            });
        });
    }
});






render(template);