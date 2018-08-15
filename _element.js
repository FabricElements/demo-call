import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `demo-call`
 * demo-call component
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class DemoCall extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'demo-call',
      },
    };
  }
}

window.customElements.define('demo-call', DemoCall);
