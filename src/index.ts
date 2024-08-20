import { render , html, ViewTemplate , ViewContext } from '@lithium-framework/core';
import '@lithium-framework/router-element'


let template: ViewTemplate<any> = html`${( context:ViewContext )=>{


  return html`<div>
        <nav>
            <a href='pages/profile'>Compte</a>
        </nav>
    </div>`;

}}`



render(template);