import render from '../dist/button'
window.plugins.button = {
    onload(block) {
        // console.log(block);
        // const button = document.createElement('button');
        // button.textContent = 'click me';
        // button.slot = 'content'
        // block.shadowDom.appendChild(button);
        const root = document.createElement('div');
        root.slot = 'content';
        render(root)
        block.shadowDom.appendChild(root);
    }
}
