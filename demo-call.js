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
          min-width: 40px;
          overflow: hidden;
          max-height: 40px;
        }
        :host([active]) {
          max-width: 150px;
          min-width: 150px;          
        }
        iron-icon {
        }
        :host([active]) iron-icon {
        }
        paper-icon-button {
          color: white;
          background-color: var(--paper-blue-a400);
          border-radius: 50%;
        }
        paper-icon-button[active] {
          background-color: var(--paper-green-a700);
        }
        
        paper-icon-button[toggleOne] {
          background-color: var(--paper-red-a700);
        }
        #text {
         color: white;       
         text-align: center;
         font-weight: 500; 
        }
      /*  paper-icon-button[active] {
          background-color: var(--paper-red-a700);
        } */
      </style>
      
      
      <paper-icon-button icon="[[_toggleIcon]]"
                          on-tap="toggle"
                          active$="[[active]]">
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
      _toggleIcon: {
        type: String,
        value: 'communication:call',
      },

      status: {
        type: String,
        value: 'default',
        observer: '_statusObserver',
        reflectToAttribute: true,
      },

      active: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
      },
    };
  }

  /**
   * Constructor
   */
  // phone-missed
  constructor() {
    super();
    // this.addEventListener('click', this.toggle.bind(this));
  }

  toggle() {
    this._statusObserver();
    setTimeout(() => this._statusObserver('ringing'), 2000);
    setTimeout(() => this._statusObserver('failed'), 4000);
    setTimeout(() => this._statusObserver(), 6000);
  }

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
