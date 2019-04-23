import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-ajax/iron-ajax.js';

/**
 * `persona-dm-element`
 * Data manager api personas
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class PersonaDmElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: none;
        }
      </style>

      
      <iron-ajax
          id = "documentsType"
          url="{{baseUrlApi}}/persona/docs"
          handle-as="json" >
      </iron-ajax>

      <iron-ajax
          id = "create"
          url="{{baseUrlApi}}/persona"
          method="post"
          content-type = "application/json"
          handle-as="json" >
      </iron-ajax>


    `;
  }
  static get properties() {
    return {
      baseUrlApi: {
        type: String,
        value: 'http://138.68.28.167:3000'
      }
    };
  }

  documentsTypeList(onSuccess, onError) {
    this.$.documentsType.generateRequest().completes.then(onSuccess || ((xhr)=>console.log(xhr)) ).catch(onError || ((error)=>console.log(error)));
  }

  create(body, onSuccess, onError) {
    this.$.create.body = JSON.stringify(body);
    this.$.create.generateRequest().completes.then(onSuccess || ((xhr)=>console.log(xhr)) ).catch(onError || ((error)=>console.log(error)));
  }

}

window.customElements.define('persona-dm-element', PersonaDmElement);
