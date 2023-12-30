class WebComponent extends HTMLElement {
    templateContent = `
        <slot name="content"></slot>
    `;
    constructor() {
        super();
        const template = document.createElement('template');
        template.innerHTML = this.templateContent;
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}
function createWebComponent(id, container) {
    customElements.define(id.slice(1), WebComponent);
    const webComponent = document.createElement(id.slice(1));
    container?.appendChild(webComponent);
    return webComponent;
}



window.plugins.webcomponent = {
    onload(block) {
        const container = document.getElementById(block.type);
        if (container == null) {
            return;
        }
        block.shadowDom = createWebComponent(block.id, container);
    }
}