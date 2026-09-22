class Pages extends HTMLElement {
  connectedCallback() {
    const sheet = this.getAttribute('sheet');

    this.innerHTML = `
      <main id="${sheet}">
        <div class="container">
          <h2>${sheet}</h2>
          <comp-page-${sheet} sheet="${sheet}"></comp-page-${sheet}>
        </div>
      </main>
    `;
  }
}
customElements.define('comp-page', Pages);