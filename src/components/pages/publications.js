class Publications extends SheetPage {
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
        <details id="${sanitizeString(type)}" name="publications" style="--n: ${n + 1}" ${n === 0 ? 'open' : ''}>
          <summary>${type}</summary>
          <div class="items">
            ${groupItems.map((item) => `
              <div class="item">
                <div class="head">
                  <p>
                    ${item.text1}
                    <span class="apa-title">${item.title}</span>
                    ${item.text2}
                  </p>
                  ${item.link ? `
                    <a href="${item.link}" target="_blank">
                      <img src="/assets/images/icon-external-link.svg" />
                    </a>` : ''}
                </div>
              </div>`)
              .join('')}
          </div>
        </details>`)
      .join('');

    return `<div class="grid-tabs" style="--cols: ${entries.length}">${gridItems}</div>`;
  }
}
customElements.define('comp-page-publications', Publications);