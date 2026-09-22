class Head extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="intro">
        <img src="assets/images/picture.png" alt="" />
        <h1>Victoria Di Césare</h1>
        <p>PhD student in Social Sciences at the University of Granada</p>
      </section>
      <comp-nav></comp-nav>
    `;
  }
}
customElements.define('comp-head', Head);