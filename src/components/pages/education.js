class Education extends SheetPage {
  render(items) {
    const listItems = items
      .map((item, i) => `
        <div id="item-${i}" class="item">
          <div>
            ${item.text}<br>
            <em>${item.location}</em>
          </div>
          <div>
            <span>${item.extra}</span>
          </div>
        </div>`)
      .join('');

    return `
      <div class="container">
        <div class="items">${listItems}</div>
      </div>
    `;
  }
}
customElements.define('comp-page-education', Education);