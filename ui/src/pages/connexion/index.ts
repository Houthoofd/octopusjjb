import { render , html, ViewTemplate , ViewContext } from '@lithium-framework/core';
import '@lithium-framework/router-element';
import 'unofficial-pf-v5-wc';
import 'unofficial-pf-v5-wc-icons';
import '../../components';



let template: ViewTemplate<any> = html`${( context:ViewContext )=>{



  return html`<login-page>
    <h3>Hello</h3>
  </login-page>`;
}}`






render(template);