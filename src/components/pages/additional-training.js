class AdditionalTraining extends SheetPage {
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
      <nav>${subMenu}</nav>
      <div class="grouped-items">${listItems}</div>
    `;
  }
}
customElements.define('comp-page-additional-training', AdditionalTraining);