import { render , html, ViewTemplate , ViewContext } from '@lithium-framework/core';
import '@lithium-framework/router-element'


let template: ViewTemplate<any> = html`${( context:ViewContext )=>{


  return html`<div class='profile'>
        <nav class='header-menu'>
            <a href='compte'>Compte</a>
            <a href='/' id='logout'>Déconnexion</a>
        </nav>
        <div class='content'>
            <nav class='horizontal-menu'>
                <a href='cours'>S'inscrire aux cours</a>
                <a href='informations'>Informations supplémentaires</a>
            </nav>
            <h1>Profile</h1>
        </div>
    </div>`;

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