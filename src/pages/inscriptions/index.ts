import { render , html, ViewTemplate , ViewContext } from '@lithium-framework/core';
import '@lithium-framework/router-element'


let template: ViewTemplate<any> = html`${( context:ViewContext )=>{


  return html`<div>
        <h1>Inscriptions aux cours</h1>
        <nav>
            <a href='profile'>Profile</a>
            <a href='compte'>Compte</a>
            <a href='informations'>Informations supplémentaires</a>
            <a href='/'>Déconnexion</a>
        </nav>
    </div>`;

}}`



render(template);