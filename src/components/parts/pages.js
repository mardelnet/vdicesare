class Pages extends HTMLElement {
  connectedCallback() {
    const sheet = this.getAttribute('sheet');
    const id = this.getAttribute('pageid');

    const pages = [
      'other-achievements',
      'additional-training',
      'outreach',
      'teaching',
      'education',
      'publications',
      'conferences',
      'research-activity'
    ];

    if (pages.includes(id)) {
      this.innerHTML = `
        <div class="container">
          <h2>${sheet}</h2>
          <comp-page-${id} id="${id}" sheet="${sheet}"></comp-page-${id}>
        </div>
      `;
    } else {
      this.loadHtml(sheet, id);
    }
  }

  async loadHtml(sheet, id) {
    const rows = await getSheetData(sheet);
    const [header, ...dataRows] = rows;

    var items = dataRows
      .map(function (row) {
        var cells = row
          .filter(function (item) {
            return item !== '' && item != null;
          })
          .map(function (item) {
            return '<li>' + item + '</li>';
          })
          .join('');
        return '<ul class="row">' + cells + '</ul>';
      })
      .join('');

    this.innerHTML = `
      <div class="container">
        <h2>${sheet}</h2>
        <div>${items}<div>
      </div>
    `;
  }
}
customElements.define('comp-page', Pages);