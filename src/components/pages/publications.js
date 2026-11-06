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
                  <h4>${item.title}</h4>
                  ${item.link ? `
                    <a href="${item.link}" target="_blank">
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
        </details>`)
      .join('');

    return `<div class="grid-tabs" style="--cols: ${entries.length}">${gridItems}</div>`;
  }
}
customElements.define('comp-page-publications', Publications);