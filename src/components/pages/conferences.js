class Conferences extends SheetPage {
  render(items) {
    // Group items by type
    const groups = items.reduce((acc, item) => {
      const type = item.type || 'Other';
      (acc[type] ??= []).push(item);
      return acc;
    }, {});

    const subMenu = Object.entries(groups)
      .map(([type]) => `
        <a href="#${sanitizeString(type)}">
          ${type}
        </a>`)
      .join('');

    const listItems = Object.entries(groups)
    .map(([type, groupItems]) => `
      <div class="group">
        <h3 id="${sanitizeString(type)}" class="group-title">${type}</h3>
        <div class="items">
          ${groupItems.map((item, i) => `
            <div class="item">
              <h4>${item.title}</h4>
              <div class="data">
                <strong>Conference:</strong> ${item.conference} <br>
                <strong>Authors:</strong> ${item.authors} <br>
                <strong>Institution:</strong> ${item.institution} <br>
                ${item.date}. ${item.city}, ${item.country}
              </div>
              ${item.link ? 
                `<a href="${item.link}" target="_blank">
                  External Link <img src="/assets/images/icon-external-link.svg" />
                </a>` : ''}
            </div>`)
            .join('')}
        </div>
      </div>`)
    .join('');
      

    return `
      <nav class="internal-links">${subMenu}</nav>
      <div class="container">
        <div class="items">${listItems}</div>
      </div>
    `;
  }
}
customElements.define('comp-page-conferences', Conferences);