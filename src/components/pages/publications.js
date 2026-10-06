class Publications extends SheetPage {
  render(items) {
    const sheet = this.getAttribute('sheet');
    
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
              <div class="head">
                <h4>${item.title}</h4>
                ${item.link ? 
                    `<a href="${item.link}" target="_blank">
                      <img src="/assets/images/icon-external-link.svg" />
                    </a>` : ''}
              </div>
              <div class="data">
                ${item.source ? `<strong>Source:</strong> ${item.source}<br>` : ''}
                ${item.authors ? `<strong>Authors:</strong> ${item.authors}<br>` : ''}
                ${item.institution ? `<strong>Institution:</strong> ${item.institution}<br>` : ''}
                ${item.year ? `<strong>Year:</strong> ${item.year}<br>` : ''}
                ${item.volume ? `<strong>Volume:</strong> ${item.volume}<br>` : ''}
                ${item.pages ? `<strong>Pages:</strong> ${item.pages}<br>` : ''}
                ${item.editor ? `<strong>Editor:</strong> ${item.editor}<br>` : ''}
                ${item.book_title ? `<strong>Book Title:</strong> ${item.book_title}<br>` : ''}
                ${item.publisher ? `<strong>Publisher:</strong> ${item.publisher}` : ''}
              </div>
            </div>`)
            .join('')}
        </div>
      </div>`)
    .join('');
      

    return `
      <nav class="internal-links">${subMenu}</nav>
      <div class="items">${listItems}</div>
    `;
  }
}
customElements.define('comp-page-publications', Publications);