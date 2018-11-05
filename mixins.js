import {LitElement, html} from '@polymer/lit-element';

function MoodyMixin(superClass) {
	return class extends superClass {
		static get properties() {
			return {
				mood: {type: String}
			};
		}

		constructor() {
			super();
			this.mood = 'happy';
		}
	}
}

class AwesomeWebComponent extends MoodyMixin(LitElement) {

	render() {
		return html`<style> .mood { color: green; } </style>
			Web Components are <span class="mood">${this.mood}</span>!`;
	}

}

customElements.define('awesome-web-component', AwesomeWebComponent);
