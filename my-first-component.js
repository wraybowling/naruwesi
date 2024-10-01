const template = document.createElement('template');
template.innerHTML = `
<style>
@import "my-first-component.css";
</style>
<div class="my-first-component">
<code>Hello world!!!</code>
</div>`;

class MyFirstComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.attachShadow({mode: 'open'});

        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('my-first-component', MyFirstComponent);

