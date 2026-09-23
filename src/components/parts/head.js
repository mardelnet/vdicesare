class Head extends HTMLElement {
  connectedCallback() {
    this.loadHtml('Globals');
  }

  async loadHtml(sheet) {
    const rows = await getSheetData(sheet);
    
    this.innerHTML = `
      <section id="intro">
        <img src="assets/images/picture.png" alt="" />
        <div>
          <h1>${rows.find(([key]) => key === 'title')?.[1]}</h1>
          <p>${rows.find(([key]) => key === 'subtitle')?.[1]}</p>
        </div>
      </section>
      <comp-nav></comp-nav>
    `;
  }
}
customElements.define('comp-head', Head);