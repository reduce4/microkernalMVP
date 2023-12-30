definePlugin('@plugins/shadowdom', (function () { 'use strict';

    console.log("Hello World!");
    window.plugins.shadowdom = {
      onload(block) {
        const container = document.getElementById(block.type);
        if (container == null) {
          return;
        }
        console.log(block);
      }
    };

}));
//# sourceMappingURL=index.js.map
