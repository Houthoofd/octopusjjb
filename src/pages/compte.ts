import { render , html, ViewTemplate , ViewContext } from '@lithium-framework/core';
import '@lithium-framework/router-element'


let template: ViewTemplate<any> = html`${( context:ViewContext )=>{


  return html`<div>
        <h1>Compte</h1>
        <nav>
            <a href='profile'>Profile</a>
            <a href='inscriptions-cours'>S'inscrire aux cours</a>
            <a href='informations-supplementaires'>Informations supplémentaires</a>
            <a href='deconnexion'>Déconnexion</a>
        </nav>
    </div>`;

}}`



render(template);