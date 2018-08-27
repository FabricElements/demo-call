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
      <style>
        :host {
          display: block;
        }
        iron-icon {
          fill: var(--icon-toggle-color, rgba(0,0,0,0));
          stroke: var(--icon-toggle-outline-color, currentcolor);
        }
        :host([pressed]) iron-icon {
          fill: var(--icon-toggle-pressed-color, currentcolor);
        }
        paper-icon-button {
          color: white;
          background-color: var(--paper-blue-a400);
          border-radius: 50%;
        }
        paper-icon-button[active] {
          background-color: var(--paper-green-a700);
        }
      /*  paper-icon-button[active] {
          background-color: var(--paper-red-a700);
        } */
      </style>
      <paper-icon-button icon="[[toggleIcon]]"
                          on-tap="toggle"
                          active$="[[active]]">
      </paper-icon-button>
      LLamada entrante
      
    `;
  }

  /**
   * Properties
   * @return {object}
   */
  static get properties() {
    return {

      active: {
        type: Boolean,
        value: false,
        notify: true,
        reflectToAttribute: true,
        observer: '_activeObserver',
      },

      toggleIcon: {
        type: String,
        value: 'communication:call',
        computed: '_computeIcon(active)',
      },

    };
  }

  /**
   * Constructor
   */
  constructor() {
    super();
    // this.addEventListener('click', this.toggle.bind(this));
  }

  toggle() {
    this.active = !this.active;
  }

  _activeObserver(active) {
    console.log(this.toggleIcon);
    // this.toggleIcon = active ? 'notification:phone-in-talk' : 'communication:call';
  }

  _computeIcon(active) {
    return active ? 'notification:phone-in-talk' : 'communication:call' : 'star';
  }


}

window.customElements.define('demo-call', DemoCall);
