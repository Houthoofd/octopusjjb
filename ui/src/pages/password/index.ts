import { render , html, ViewTemplate , ViewContext } from '@lithium-framework/core';
import '@lithium-framework/router-element';
import 'unofficial-pf-v5-wc';
import 'unofficial-pf-v5-wc-icons';
import '../../components';



let template: ViewTemplate<any> = html`${( context:ViewContext )=>{



  return html`<new-password-page></new-password-page>`;
}}`







render(template);