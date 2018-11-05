class AwesomeWebComponent extends HTMLElement {
	constructor() {
		super();

		var shadow = this.attachShadow({mode: 'open'});

		var div = document.createElement('div');
		var style = document.createElement('style');
		shadow.appendChild(style);
		shadow.appendChild(div);
	}
}

customElements.define('awesome-web-component', AwesomeWebComponent);
