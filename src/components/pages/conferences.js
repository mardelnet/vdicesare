class Conferences extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <main id="conferences">
        bla bla bla
      </main>
    `;
  }
}
customElements.define('comp-page-conferences', Conferences);