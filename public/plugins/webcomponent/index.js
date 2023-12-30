definePlugin('@plugins/webcomponent', (function () { 'use strict';

    var __defProp = Object.defineProperty;
    var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
    var __publicField = (obj, key, value) => {
      __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
      return value;
    };
    class WebComponent extends HTMLElement {
      constructor() {
        super();
        __publicField(this, "templateContent", `
        <slot name="content"></slot>
    `);
        const template = document.createElement("template");
        template.innerHTML = this.templateContent;
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
      }
    }
    function createWebComponent(id, container) {
      customElements.define(id.slice(1), WebComponent);
      const webComponent = document.createElement(id.slice(1));
      container == null ? void 0 : container.appendChild(webComponent);
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
    };

}));
//# sourceMappingURL=index.js.map
