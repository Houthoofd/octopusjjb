import { render , html, ViewTemplate , ViewContext } from '@lithium-framework/core';
import '@lithium-framework/router-element';
import 'unofficial-pf-v5-wc';


let template: ViewTemplate<any> = html`${( context:ViewContext )=>{



    return html`<div class='Sign-in'>
          <h1>Inscription</h1>
          <form class='Sign-form'>
              <div class='input-fields'>
                  <label for="email">E-mail</label>
                  <input type="email">
              </div>
              <div class='input-fields'>
                  <label for="password">Mot de passe</label>
                  <input type="password">
              </div>
              <div class='input-fields'>
                  <label for="Date_naissance">Date de naissance</label>
                  <input type="date">
              </div>
              <div class='input-fields'>
                  <label for="prénom">Prénom</label>
                  <input type="text">
              </div>µ
              <div class='input-fields'>
                  <label for="nom">Nom</label>
                  <input type="text">
              </div>
              <button type="submit">Inscription</button>
          </form>
      </div>`;
  
  }}`



render(template);