definePlugin('@plugins/shadowdom', (function () { 'use strict';

    console.log("Hello World!");
    window.plugins.shadowdom = {
      onload(block) {
        const container = document.getElementById(block.type);
        if (container == null) {
          return;
        }
        const div = document.createElement("div");
        div.innerHTML = "shadowdom";
        container.appendChild(div);
      }
    };

}));
//# sourceMappingURL=index.js.map
