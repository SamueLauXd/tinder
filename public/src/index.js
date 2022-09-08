import * as components from "./components/index.js";
import data from "./components/data.js";

class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        data.forEach((element) => {
            this.shadowRoot.innerHTML += `
            <my-profile
            name="${element.name}"
            age="${element.age}"
            description="${element.description}"
            match="${element.match}"
            picture="${element.picture}"
            ></my-profile>

            <my-counter></my-counter>

            `
            
        });
        
    }
}

customElements.define("app-container",AppContainer);