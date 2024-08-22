import { render , html, ViewTemplate , ViewContext } from '@lithium-framework/core';
import '@lithium-framework/router-element'


let template: ViewTemplate<any> = html`${( context:ViewContext )=>{


  return html`<div>
        <h1>Home 1234</h1>
        <nav>
            <a href='pages/compte'>Compte</a>
        </nav>
    </div>`;

}}`




render(template);