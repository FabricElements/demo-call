import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icons/notification-icons.js';
import '@polymer/iron-icons/communication-icons.js';
import '@polymer/paper-icon-button/paper-icon-button.js';

/**
 * `demo-call`
 * demo-call component
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class DemoCall extends PolymerElement {
  /**
   * Template
   * @return {HTMLTemplateElement | !HTMLTemplateElement}
   */
  static get template() {
    return html`
      <style is="custom-style">
        :host {
          display: inline-block;
          border-radius: 20px;
          background-color: var(--paper-grey-900);
          transition: all 200ms linear;
          max-width: 40px;
          overflow: hidden;
          max-height: 40px;
        }
        :host([active]) {
          max-width: 250px;          
        }
        iron-icon {
        }
        paper-icon-button {
          color: white;
          background-color: var(--paper-blue-a400);
          border-radius: 50%;
        }
        :host([status=ringing]) paper-icon-button {
          background-color: var(--paper-green-a400);
        }
        :host([status=failed]) paper-icon-button {
          background-color: var(--paper-red-a400);
        }
        #text {
         color: white;       
         text-align: center;
         font-weight: 400; 
         max-width: 0px;
         min-width: 0px;
         transition: all 200ms linear;
         display: inline-block;
         font-size: 20px;
         line-height: 20px;
         letter-spacing: 2px;
         padding-right: 5px;
        }
        :host([active]) #text {
          max-width: 200px;
          min-width: 100px;
        }
      </style> 
      <paper-icon-button icon="[[_toggleIcon]]"
                          on-tap="toggle">
      </paper-icon-button>
      <span id="text">[[status]]</span>
    `;
  }

  /**
   * Properties
   * @return {object}
   */
  static get properties() {
    return {
      /**
       * Icon name
       */
      _toggleIcon: {
        type: String,
        value: 'communication:call',
      },
      /**
       * Defines the active state for the component
       */
      status: {
        type: String,
        value: null,
        observer: '_statusObserver',
        reflectToAttribute: true,
      },
      /**
       * Active state of the component
       */
      active: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
      },
    };
  }

  /**
   * Change the state of the component when it's called
   */
  toggle() {
    this.status = 'ringing';
    setTimeout(() => this.status = 'failed', 2000);
    setTimeout(() => this.status = null, 4000);
  }

  /**
   * Listen the status and changes the icon and active state
   * @param {null|string} status
   * @private
   */
  _statusObserver(status) {
    switch (status) {
      default:
        this.active = false;
        this._toggleIcon = 'communication:call';
        break;
      case 'ringing':
        this.active = true;
        this._toggleIcon = 'notification:phone-in-talk';
        break;
      case 'failed':
        this.active = true;
        this._toggleIcon = 'notification:phone-missed';
    }
  }
}

window.customElements.define('demo-call', DemoCall);
