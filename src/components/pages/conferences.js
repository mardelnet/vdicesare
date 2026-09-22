class Conferences extends HTMLElement {
  connectedCallback() {
    const sheet = this.getAttribute('sheet');
    this.loadHtml(sheet);
  }

  async loadHtml(sheet) {
    const rows = await getSheetData(sheet);

    const [header, ...dataRows] = rows;

    const items = dataRows
      .map(row => {
        const [authors, date, title, conference, institution, city, country, link, type] = row;
        return `
          <li>
            <h3>${title}</h3>
            <p>${authors}</p>
            <p>${conference} — ${institution}, ${city}, ${country}</p>
            <p>${date} · ${type}</p>
            <a href="${link}" target="_blank" rel="noopener">View</a>
          </li>
        `;
      })
      .join('');

    this.innerHTML = `
      <main id="conferences">
        <div class="container">
          <ul class="conferences-list">
            ${items}
          </ul>
        </div>
      </main>
    `;
  }
}
customElements.define('comp-page-conferences', Conferences);