class AdditionalTraining extends SheetPage {
  render(items) {
    // Group items by type
    const groups = items.reduce((acc, item) => {
      const type = item.type || 'Other';
      (acc[type] ??= []).push(item);
      return acc;
    }, {});

    const listItems = Object.entries(groups)
      .map(([type, groupItems]) => `
        <div class="group">
          <h3 class="group-title">${type}</h3>
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
      <div class="grouped-items">${listItems}</div>
    `;
  }
}
customElements.define('comp-page-additional-training', AdditionalTraining);