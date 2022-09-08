class MyCounter extends HTMLElement {
    // this is how you declare which props are you interested in
    static get observedAttributes() {
      return ["contarLike","constarDislike"];
      
    }
  
    attributeChangedCallback(propName, oldValue, newValue) {
      console.log("changed");
      this[propName] = newValue;
      this.mount();
    }
  
    // this is the method is triggered when the component is added to the document
    connectedCallback() {
      console.log("mounted");
      this.mount();
    }
  
    dissconnectedCallback() {
      console.log("unmounted");
      this.removeEventListeners();
      
    }
  
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.onButtonClicked = this.onButtonClicked.bind(this);
      this.onButtonClickedDislikes = this.onButtonClickedDislikes.bind(this);
    }
  
    mount() {
      this.render();
      this.addEventListeners();
    }
  
    addEventListeners() {
      this.shadowRoot
        .querySelector(".like")
        .addEventListener("click", this.onButtonClicked);

        this.shadowRoot
        .querySelector(".dislike")
        .addEventListener("click", this.onButtonClickedDislikes);
        
    }
  
    render() {
      console.log("render");
      // adding external styles to the component
      this.shadowRoot.innerHTML = `
          <link rel="stylesheet" href="./src/components/counter/style.css">
          <section>
            <h1 class="cuentaLikes">${this.count || 0}</h1>
            <button class="btnLike"></button>
            <h1 class="cuentaDislikes">${this.count || 0}</h1>
            <button class="btnDislike"></button>            
          </section>
      `;
    }
  
    removeEventListeners() {
      this.shadowRoot
        .querySelector("button")
        .removeEventListener("click", this.onButtonClicked);
    }
  
   
    onButtonClicked() {
      console.log("clicked");
      const currentValue = Number(this.getAttribute("contarLike")) || 0;
      this.setAttribute("contarLike", currentValue + 1);
    }
    
    onButtonClickedDislikes() {
      console.log("clicked");
      const currentValue = Number(this.getAttribute("contarDislike")) || 0;
      this.setAttribute("contarDisllike", currentValue + 1);
    }
  }
  
  customElements.define("my-counter", MyCounter);
  export default MyCounter;