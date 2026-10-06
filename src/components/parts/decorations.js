class Decorations extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `
        <img class="corner-decoration corner-left-top" src="../assets/images/corner-decoration.png"></img>
        <img class="corner-decoration corner-right-top" src="../assets/images/corner-decoration.png"></img>
        <img class="corner-decoration corner-right-bottom" src="../assets/images/corner-decoration.png"></img>
        <img class="corner-decoration corner-left-bottom" src="../assets/images/corner-decoration.png"></img>
        <img class="vertical-decoration top" src="./assets/images/vertical-decoration.png"></img>
        <img class="vertical-decoration bottom" src="./assets/images/vertical-decoration.png"></img>
      `;
  }
}
customElements.define('comp-decorations', Decorations);