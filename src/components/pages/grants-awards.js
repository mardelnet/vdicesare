class GrantAwards extends SheetPage {
  render(items) {
    const listItems = items
      .map((item, i) => `
        <div id="item-${i}" class="item">
          <div class="year">${item.year}</div>
          <div class="info">${item.text}</div>
          <div class="type">
            <span class="${sanitizeString(item.type)}">${item.type}</span>
          </div>
        </div>`)
      .join('');

    return `<div class="items">${listItems}</div>`;
  }
}
customElements.define('comp-page-grants-awards', GrantAwards);