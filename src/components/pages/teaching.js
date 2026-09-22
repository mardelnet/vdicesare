class Teaching extends HTMLElement {
  connectedCallback() {
    const sheet = this.getAttribute('sheet');
    this.loadHtml(sheet);
  }

  async loadHtml(sheet) {
    const rows = await getSheetData(sheet);
    const [header, ...dataRows] = rows;

    var items = dataRows
    .map(function (row) {
      return row
        .map(function (item) {
          return '<li>' + item + '</li>';
        })
        .join('');
    })
    .join('');

    this.innerHTML = `
      <div>${items}<div>
    `;
  }
}
customElements.define(`comp-page-teaching`, Teaching);