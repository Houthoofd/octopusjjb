import { render , html, ViewTemplate , ViewContext } from '@lithium-framework/core';
import '@lithium-framework/router-element'


let template: ViewTemplate<any> = html`${(context: ViewContext) => {
    let first_name = "";

    if (localStorage.getItem("first_name")) {
        first_name = localStorage.getItem("first_name") || "";
        console.log(first_name);
    }

    return html`<div class='home'>
        <header class='header'>
            <nav class='navbar-middle'>
                <a href='#'>Acceuil</a>
                <a href='#'>Enfants</a>
                <a href='#'>Contact</a>
                <a href='pages/connexion' id='login'>Connexion</a>
            </nav>
            <nav class='navbar-right'>
                <a href='pages/profile'>${first_name}</a>
                <a href='/' id='logout'>Déconnexion</a>
            </nav>
        </header>
        <h1>Home 1234</h1>
    </div>`;
}}`;

document.addEventListener('DOMContentLoaded', () => {
    let isLogged = "";
    const logoutLink = document.getElementById('logout');
    if (localStorage.getItem("isLogged")) {
        isLogged = localStorage.getItem("isLogged") || "";
        const loginLink = document.getElementById('login');
        loginLink?.setAttribute('class', 'hidden')
    }else{
        logoutLink?.setAttribute('class','hidden')
    }

    if (logoutLink) {
        logoutLink.addEventListener('click', (e) => {
            
            e.preventDefault();

            console.log(localStorage)
            localStorage.clear();

            window.location.href = '/';
        });
    }
});




render(template);