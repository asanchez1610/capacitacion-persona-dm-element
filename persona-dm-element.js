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
          id = "listPersonas"
          url="{{baseUrlApi}}/personas"
          handle-as="json" >
      </iron-ajax>

      <iron-ajax
          id = "create"
          url="{{baseUrlApi}}/persona"
          method="post"
          content-type = "application/json"
          handle-as="json" >
      </iron-ajax>

      <iron-ajax
          id = "update"
          url="{{baseUrlApi}}/persona/{{idPersona}}"
          method="put"
          content-type = "application/json"
          handle-as="json" >
      </iron-ajax>

      <iron-ajax
          id = "delete"
          url="{{baseUrlApi}}/persona/{{idPersona}}"
          method="delete"
          handle-as="json" >
      </iron-ajax>


    `;
  }
  static get properties() {
    return {
      baseUrlApi: {
        type: String,
        value: 'http://138.68.28.167:3000'
      },
      idPersona: String
    };
  }

  documentsTypeList(onSuccess, onError) {
    this.$.documentsType.generateRequest().completes.then(onSuccess || ((xhr)=>console.log(xhr)) ).catch(onError || ((error)=>console.log(error)));
  }

  create(body, onSuccess, onError) {
    this.$.create.body = JSON.stringify(body);
    this.$.create.generateRequest().completes.then(onSuccess || ((xhr)=>console.log(xhr)) ).catch(onError || ((error)=>console.log(error)));
  }

  update(id, body, onSuccess, onError) {
    this.idPersona = id;
    this.$.update.body = JSON.stringify(body);
    this.$.update.generateRequest().completes.then(onSuccess || ((xhr)=>console.log(xhr)) ).catch(onError || ((error)=>console.log(error)));
  }

  find(onSuccess, onError) {
    this.$.listPersonas.generateRequest().completes.then(onSuccess || ((xhr)=>console.log(xhr)) ).catch(onError || ((error)=>console.log(error)));
  }

  delete(id, onSuccess, onError) {
    this.idPersona = id;
    this.$.delete.generateRequest().completes.then(onSuccess || ((xhr)=>console.log(xhr)) ).catch(onError || ((error)=>console.log(error)));
  }

}

window.customElements.define('persona-dm-element', PersonaDmElement);
