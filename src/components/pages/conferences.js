class Conferences extends SheetPage {
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
        <details id="${sanitizeString(type)}" name="conferences" style="--n: ${n + 1}" ${n === 0 ? 'open' : ''}>
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
                  <strong>Conference:</strong> ${item.conference} <br>
                  <strong>Authors:</strong> ${item.authors} <br>
                  <strong>Institution:</strong> ${item.institution} <br>
                  <strong>Date:</strong>${item.date} <br>
                  <strong>Location:</strong> ${item.country}
                </div>
              </div>`)
              .join('')}
          </div>
        </details>`)
      .join('');

    return `<div class="grid-tabs" style="--cols: ${entries.length}">${gridItems}</div>`;
  }
}
customElements.define('comp-page-conferences', Conferences);