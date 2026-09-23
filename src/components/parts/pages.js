class Pages extends HTMLElement {
  connectedCallback() {
    const sheet = this.getAttribute('sheet');
    const id = this.getAttribute('id');

    if (id === 'grants-awards') {
      this.innerHTML = `
        <section id="${id}">
          <div class="container">
            <h2>${sheet}</h2>
            <comp-page-grants-awards sheet="${sheet}"></comp-page-grants-awards>
          </div>
        </section>
      `;
    }
    else {
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
            return item !== '' && item != null; // remove empty/null cells
          })
          .map(function (item) {
            return '<li>' + item + '</li>';
          })
          .join('');
        return '<ul class="row">' + cells + '</ul>'; // group each row in its own <ul>
      })
      .join('');

    this.innerHTML = `
      <section id="${id}">
        <div class="container">
          <h2>${sheet}</h2>
          <div>${items}<div>
        </div>
      </section>
    `;
  }
}
customElements.define('comp-page', Pages);