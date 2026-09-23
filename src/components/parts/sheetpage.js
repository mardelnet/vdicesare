class SheetPage extends HTMLElement {
  connectedCallback() {
    const sheet = this.getAttribute('sheet');
    this.loadHtml(sheet);
    loadStyles(this.id);
  }

  disconnectedCallback() {
    document.querySelector(`link[data-page-style="${this.id}"]`)?.remove();
  }

  // Shared: fetch + convert rows into an array of objects keyed by header
  async getItems(sheet) {
    const rows = await getSheetData(sheet);
    const [header, ...dataRows] = rows;

    return dataRows.map(row =>
      Object.fromEntries(header.map((key, i) => [key, row[i] ?? '']))
    );
  }

  // Subclasses override this to render their own markup
  async loadHtml(sheet) {
    const items = await this.getItems(sheet);
    this.innerHTML = this.render(items);
  }
}