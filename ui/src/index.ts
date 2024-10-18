import { render , html, ViewTemplate , ViewContext } from '@lithium-framework/core';
import '@lithium-framework/router-element';
import 'unofficial-pf-v5-wc';
import 'unofficial-pf-v5-wc-icons';


let template: ViewTemplate<any> = html`${(context: ViewContext) => {
    let first_name = "";

    if (localStorage.getItem("first_name")) {
        first_name = localStorage.getItem("first_name") || "";
        console.log(first_name);
    }

    return html`<div class='home'>
        <pf-masthead display-inline>
            <action-list>
                <action-list-item>
                    <pf-button primary>Acceuil</pf-button>
                </action-list-item>
                <action-list-item>
                    <pf-button primary>Horaires</pf-button>
                </action-list-item>
                <action-list-item>
                    <pf-button primary>Tarifs</pf-button>
                </action-list-item>
                <action-list-item>
                    <pf-button primary>Connexion</pf-button>
                </action-list-item>
            </action-list>
        </pf-masthead>
        <section>
            <h3>Plonger dans l'univers implaccable du jiu jitsu Brésilien</h3>
        </section>
        <section>
            
        </section>
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