import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate, ViewContext, asyncAppend, repeat, children } from '@lithium-framework/core';
import '@lithium-framework/router-element';
import 'unofficial-pf-v5-wc';
import 'unofficial-pf-v5-wc-icons';

@customElement({
  name: 'navigation-panel',
  template: html`${(navigation: Navigation) => {
    return html`
    <div class="navigation">
          <div class="list"></div>
            <div class="item"><a href="/pages/cours">cours</a></div>
            <div class="item"><a href="/pages/informations">infos</a></div>
            <div class="item"><a href="/pages/compte">compte</a></div>
            <div class="item"><a href="/pages/profile">profile</a></div>
          </div>
        </div>`;
  }}`,
  styles : [
    css`
      .navigation{
        color: black;
        background-color: #ffffff
      }
      .list{
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .item{
        list-style: none;
        padding: 10px 10px;
        transition: 0.3s;
        cursor: pointer
      }
      .item:hover{
        background-color: lightgray
      }
      a{
        color: black;
        text-decoration: none;
      }
    `
  ]
})
export class Navigation extends WebComponent{

}