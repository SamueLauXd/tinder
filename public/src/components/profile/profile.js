class MyProfile extends HTMLElement {
    //Metodo para declarar que atributos/parametros
    //vamos a utilizar en nuestra clase
    static get observedAttributes() {
      return ['name', 'age', 'description', 'match', 'picture'];
    }
  
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
    //Se ejecuta cuando la clase está
    //montado en nuestra pagina/html
    connectedCallback() {
      this.render();
    }
  
    //Metodo que se encarga de ejecutarse
    //si algun valor cambia
    attributeChangedCallback(propName, oldValue, newValue) {
      this[propName] = newValue;
      this.render();
    }
  
    render() {
      this.shadowRoot.innerHTML = `
          <link rel="stylesheet" href="/src/components/profile/style.css"
          <section>
            <div class="contenedor">
                  <image class="flecha" src="./assets/flecha.png"></image>
                  <image class="cancel" src="./assets/cancel.jpg"></image>
                  <button class="btnLike"></button>
                  <button class="btnDislike"></button>            
                  <image class="turbo" src="./assets/turbo.jpg"></image>
                  <image class="return" src="./assets/return.jpg"></image>
                  <image class="star" src="./assets/star.jpg"></image>
                  <image class="person" src="./assets/person.png"></image>
                  <image class="message" src="./assets/message.png"></image>
                  <image class="group" src="./assets/group.png"></image>
                  <image class="logo" src="./assets/logo.png"></image>
                  <image class="cuentaLikes" src="./assets/cuentaLike.png"></image>
                  <image class="cuentaDislikes" src="./assets/cuentaDislike.png"></image>
                  <image class="perfil" src="${this.picture}"></image>
                  <h1 class="usuario">${this.name}, ${this.age}</h1>
                  <h1 class="description">${this.description}</h1>
                  <h1 class="match">${this.match}</h1>
            </div>
          </section>
          `;
    }
  }
  
  customElements.define('my-profile', MyProfile);
  export default MyProfile;