class Head extends HTMLElement {
  connectedCallback() {
    this.loadHtml('Globals');
  }

  async loadHtml(sheet) {
    const rows = await getSheetData(sheet);
    
    this.innerHTML = `
      <comp-nav title="${rows.find(([key]) => key === 'title')?.[1]}"></comp-nav>
    `;
  }
}
customElements.define('comp-head', Head);