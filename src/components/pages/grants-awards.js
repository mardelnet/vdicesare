class GrantAwards extends HTMLElement {
  connectedCallback() {
    const sheet = this.getAttribute('sheet');
    console.log(sheet)
    this.loadHtml(sheet);
  }

  async loadHtml(sheet) {
    const rows = await getSheetData(sheet);
    const [header, ...dataRows] = rows;

    const items = dataRows.map(row =>
      Object.fromEntries(header.map((key, i) => [key, row[i] ?? '']))
    );

    const listItems = items
      .map((item, i) => `
        <div id="item-${i}" class="item">
          <div class="year">
            ${item.year}
          </div>
          <div class="info">
            ${item.text}
          </div>
          <div class="type">
            ${item.type}
          </div>
        </div>`)
      .join('');

    this.innerHTML = `
      <div class="items">
        ${listItems}
      </div>
    `;
  }
}
customElements.define(`comp-page-grants-awards`, GrantAwards);