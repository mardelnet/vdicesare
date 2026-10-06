class AdditionalTraining extends SheetPage {
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
              <div id="item-${type}-${i}" class="item">
                <div class="info">
                  ${item.text}
                </div>
                ${item.year ? `<span>${item.year}</span>` : ''}
              </div>`)
              .join('')}
          </div>
        </div>`)
      .join('');

    return `
      <nav class="internal-links">${subMenu}</nav>
      <div class="container">
        <h2>${sheet}</h2>
        <div class="grouped-items">${listItems}</div>
      </div>
    `;
  }
}
customElements.define('comp-page-additional-training', AdditionalTraining);