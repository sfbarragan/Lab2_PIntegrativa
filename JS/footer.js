class Footer extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        let shadowRoot=this.attachShadow({mode:'open'});
        const t =document.querySelector('#footer');
        const instance = t.content.cloneNode(true);
        shadowRoot.appendChild(instance);
}
}
window.customElements.define('pag-footer',Footer)

