import { render , html, ViewTemplate , ViewContext } from '@lithium-framework/core';
import '@lithium-framework/router-element'


let template: ViewTemplate<any> = html`${( context:ViewContext )=>{


  return html`<div>
        <h1>Profile</h1>
        <nav>
            <a href='compte'>Compte</a>
            <a href='inscriptions-cours'>S'inscrire aux cours</a>
            <a href='informations-supplementaires'>Informations supplémentaires</a>
            <a href='deconnexion'>Déconnexion</a>
        </nav>
    </div>`;

}}`



render(template);