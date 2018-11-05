import {PolymerElement, html} from '@polymer/polymer/polymer-element.js'

// Define the class for a new element called custom-element

class AwesomeWebComponent extends PolymerElement {

	static get template() {
		return html`
			<div style$="width: [[l]]px; height: [[l]]px; background-color: [[c]];"></div>
			<slot></slot>
		`;
	}

	static get properties() {
		return {
			l: String,
			c: String
		};
	}

}

// Register the new element with the browser

customElements.define('awesome-web-component', AwesomeWebComponent);

