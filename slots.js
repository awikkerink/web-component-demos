class AwesomeWebComponent extends HTMLElement {
	constructor() {
		super();

		var shadow = this.attachShadow({mode: 'open'});

		var div = document.createElement('div');
		var slot = document.createElement('slot');
		shadow.appendChild(slot);
		shadow.appendChild(div);
	}
}

customElements.define('awesome-web-component', AwesomeWebComponent);
