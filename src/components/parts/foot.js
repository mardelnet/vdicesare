class Foot extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <h3>Victoria Di Césare</h3>
        <h4>PhD student in Social Sciences at the University of Granada</h4>
      </footer>
    `;
  }
}
customElements.define('comp-foot', Foot);