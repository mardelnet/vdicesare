class AdditionalTraining extends SheetPage {
  render(items) {
    // Group items by type
    const groups = items.reduce((acc, item) => {
      const type = item.type || 'Other';
      (acc[type] ??= []).push(item);
      return acc;
    }, {});

    const entries = Object.entries(groups);

    const gridItems = entries
      .map(([type, groupItems], n) => `
        <details id="${sanitizeString(type)}" name="alpha" style="--n: ${n + 1}" ${n === 0 ? 'open' : ''}>
          <summary>${type}</summary>
          <div class="items">
            ${groupItems.map((item, i) => `
              <div id="item-${sanitizeString(type)}-${i}" class="item">
                <h4>${item.text}</h4>
                <div class="data">
                  ${item.year ? `<strong>Year:</strong> ${item.year}` : ''}
                </div>
              </div>`)
              .join('')}
          </div>
        </details>`)
      .join('');

    return `<div class="grid-tabs" style="--cols: ${entries.length}">${gridItems}</div>`;
  }
}
customElements.define('comp-page-additional-training', AdditionalTraining);