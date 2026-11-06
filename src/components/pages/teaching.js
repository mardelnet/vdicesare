class Teaching extends SheetPage {
  render(items) {
    const listItems = items
      .map((item, i) => `
        <div id="item-${i}" class="item">
          <h4>${item.text}</h4>
          <div class="data">
            <strong>Years:</strong> ${item.year}
          </div>
        </div>`)
      .join('');

    return `<div class="items">${listItems}</div>`;
  }
}
customElements.define('comp-page-teaching', Teaching);