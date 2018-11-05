function updateStyle(elem) {
	var shadow = elem.shadowRoot;
	var childNodes = shadow.childNodes;
	for(var i = 0; i < childNodes.length; i++) {
		if(childNodes[i].nodeName === 'STYLE') {
			childNodes[i].textContent = 'div {' +
				' width: ' + elem.getAttribute('l') + 'px;' +
				' height: ' + elem.getAttribute('l') + 'px;' +
				' background-color: ' + elem.getAttribute('c');
		}
	}
}



class AwesomeWebComponent extends HTMLElement {
	constructor() {
		super();

		var shadow = this.attachShadow({mode: 'open'});

		var div = document.createElement('div');
		var style = document.createElement('style');
		shadow.appendChild(style);
		shadow.appendChild(div);

	}	  

	connectedCallback() {
		console.log('Custom square element added to page.');
		updateStyle(this);
	}
}

customElements.define('awesome-web-component', AwesomeWebComponent);
