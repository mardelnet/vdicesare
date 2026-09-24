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
          ${type} <span>→</span>
        </a>`)
      .join('');

    const listItems = Object.entries(groups)
    .map(([type, groupItems]) => `
      <div class="group">
        <h3 id="${sanitizeString(type)}" class="group-title">${type}</h3>
        <div class="items">
          ${groupItems.map((item, i) => `
            <div class="item">
              <div class="head">
                <h4>${item.title}</h4>
                ${item.link ? 
                    `<a href="${item.link}" target="_blank">
                      <img src="/assets/images/icon-external-link.svg" />
                    </a>` : ''}
              </div>
              <div class="data">
                <strong>Conference:</strong> ${item.conference} <br>
                <strong>Authors:</strong> ${item.authors} <br>
                <strong>Institution:</strong> ${item.institution} <br>
                ${item.date}. ${item.city}, ${item.country}
              </div>
            </div>`)
            .join('')}
        </div>
      </div>`)
    .join('');
      

    return `
      <nav>${subMenu}</nav>
      <div class="items">${listItems}</div>
    `;
  }
}
customElements.define('comp-page-conferences', Conferences);