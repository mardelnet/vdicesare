class Education extends SheetPage {
  render(items) {
    
    const listItems = items
      .map((item, i) => `
        <div id="item-${i}" class="item">
          <div>
            <h4>${item.text}</h4>
          </div>
          <div class="data">
            ${item.extra2 ? `${item.extra2} <br>` : ''}
            ${item.extra1 ? `${item.extra1} <br>` : ''}
            ${item.country ? `${item.country}` : ''}
          </div>
        </div>`)
      .join('');

    return `<div class="items">${listItems}</div>`;
  }
}
customElements.define('comp-page-education', Education);