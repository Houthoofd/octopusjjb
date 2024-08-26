import { render , html, ViewTemplate , ViewContext } from '@lithium-framework/core';
import '@lithium-framework/router-element'



let template: ViewTemplate<any> = html`${( context:ViewContext )=>{



  return html`<div class='login'>
        <h1>Connexion</h1>
        <form class='login-form'>
            <div class='input-fields'>
                <label for="email">E-mail</label>
                <input type="email">
            </div>
            <div class='input-fields'>
                <label for="password">Mot de passe</label>
                <input type="password">
            </div>
            <button type="submit">Connexion</button>
        </form>
    </div>`;

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