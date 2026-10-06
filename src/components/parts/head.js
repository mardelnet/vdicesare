class Head extends HTMLElement {
  connectedCallback() {
    this.loadHtml('Globals');
  }

  async loadHtml(sheet) {
    const rows = await getSheetData(sheet);
    
    this.innerHTML = `
      <section id="intro">
        <div class="container">
          <img src="assets/images/picture.png" alt="" />
          <div>
            <h1>${rows.find(([key]) => key === 'title')?.[1]}</h1>
            <p>${rows.find(([key]) => key === 'subtitle')?.[1]}</p>
          </div>
        </div>
      </section>
      <comp-nav title="${rows.find(([key]) => key === 'title')?.[1]}"></comp-nav>
    `;
  }
}
customElements.define('comp-head', Head);