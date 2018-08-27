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
    font-family: sans-serif;
    --icon-toggle-color: lightgrey;
    --icon-toggle-outline-color: black;
    --icon-toggle-pressed-color: red;
  }
</style>
      
      <icon-toggle toggle-icon="menu"></icon-toggle>
      <icon-toggle toggle-icon="star" pressed></icon-toggle>
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
