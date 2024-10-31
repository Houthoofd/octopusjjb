import { html , render , WebComponent , customElement , attr , attrState , state, css, ViewTemplate, ViewContext, asyncAppend, repeat, children } from '@lithium-framework/core';
import '@lithium-framework/router-element';
import 'unofficial-pf-v5-wc';
import 'unofficial-pf-v5-wc-icons';

@customElement({
  name: 'notification-box',
  template: html`${(notification: Notification) => {
    return html`
      <div class="${[
          'notification',
          notification.isCustom ? '-custom' : '', 
          notification.isInfo ? '-info' : '', 
          notification.isSuccess ? '-success' : '', 
          notification.isWarning ? '-warning' : '', 
          notification.isDanger ? '-danger' : ''
        ].join('')}">
        <div class="icon">
          ${notification.isCustom ? html`<pf-icons-bell></pf-icons-bell>` : ''}
          ${notification.isInfo ? html`<pf-icons-info-circle></pf-icons-info-circle>` : ''}
          ${notification.isSuccess ? html`<pf-icons-check-circle></pf-icons-check-circle>` : ''}
          ${notification.isWarning ? html`<pf-icons-exclamation-triangle></pf-icons-exclamation-triangle>` : ''}
          ${notification.isDanger ? html`<pf-icons-exclamation-circle></pf-icons-exclamation-circle>` : ''}
        </div>
        <div class="main-body">
          <div class="title">
            ${notification.isCustom ? html`<pf-icons-bell></pf-icons-bell>` : ''}
            ${notification.isInfo ? html`<h3>Information</h3>` : ''}
            ${notification.isSuccess ? html`<h3>Success</h3>` : ''}
            ${notification.isWarning ? html`<h3>Warning</h3>` : ''}
            ${notification.isDanger ? html`<h3>Danger</h3>` : ''}
          </div>
          <span class="custom-text">
            <slot></slot>
          </span>
        </div>
        <div class="toggle-close">
          <pf-icons-times></pf-icons-times>
        </div>
      </div>
    `;
  }}`,
  styles: [
    css`
      .notification-success{
        width: 300px;
        background-color: #ffffff;
        position: fixed;
        top: 0;
        right: 0;
        margin-top: 10px;
        margin-right: 10px;
        padding: 10px 10px;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        color: #3e8635;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .layer-success {
        width: 5%;
        background-color: #4CAF50;
        border-radius: 3px;
      }
      .main-body{
        display: inline-flex;
        align-items: center;
        gap: 20px;
      }
      .toggle-close{
        color: #9E9E9E;
        cursor: pointer;
      }
      .icon {
        transform: translateY(2px);
      }
    `
  ],
  shadowOptions: { mode: 'open' }
})

export class Notification extends WebComponent {

  @attr() custom: "true" | "false" | null = null;
  @attr() info: "true" | "false" | null = null;
  @attr() success: "true" | "false" | null = null;
  @attr() warning: "true" | "false" | null = null;
  @attr() danger: "true" | "false" | null = null;

  @state() isCustom: boolean = false;
  @state() isInfo: boolean = false;
  @state() isSuccess: boolean = false;
  @state() isWarning: boolean = false;
  @state() isDanger: boolean = false;

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (name === "custom") {
      this.isCustom = newValue === "true";
    }
    if (name === "info") {
      this.isInfo = newValue === "true";
    }
    if (name === "success") {
      this.isSuccess = newValue === "true";
    }
    if (name === "warning") {
      this.isWarning = newValue === "true";
    }
    if (name === "danger") {
      this.isDanger = newValue === "true";
    }

    super.attributeChangedCallback(name, oldValue, newValue);
  }
}

