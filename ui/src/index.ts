import { render , html, ViewTemplate , ViewContext } from '@lithium-framework/core';
import '@lithium-framework/router-element'


let template: ViewTemplate<any> = html`${(context: ViewContext) => {
    let first_name = "";

    console.log("jazfbjaze")

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
                <a href='pages/connexion'>Connexion</a>
            </nav>
            <nav class='navbar-right'>
                <a href='pages/profile'>${first_name}</a>
            </nav>
        </header>
        <h1>Home 1234</h1>
    </div>`;
}}`;




render(template);