window.plugins.button = {
    onload(block) {
        console.log(block);
        const button = document.createElement('button');
        button.textContent = 'click me';
        button.slot = 'content'
        block.shadowDom.appendChild(button);
    }
}
