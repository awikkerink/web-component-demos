import {LitElement, html} from '@polymer/lit-element';

class AwesomeWebComponent extends LitElement {

	static get properties() {
		return {
			mood: {type: String}
		};
	}

	constructor() {
		super();
		this.mood = 'happy';
	}

	render() {
		return html`<style> .mood { color: green; } </style>
			Web Components are <span class="mood">${this.mood}</span>!`;
	}

}

customElements.define('awesome-web-component', AwesomeWebComponent);
