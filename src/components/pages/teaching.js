class Teaching extends SheetPage {
  render(items) {
    const listItems = items
      .map((item, i) => `
        <div id="item-${i}" class="item">
          <div class="info">${item.text}</div>
          <div class="year"><span>${item.year}</span></div>
        </div>`)
      .join('');

    return `
      <div class="items">${listItems}</div>
    `;
  }
}
customElements.define('comp-page-teaching', Teaching);