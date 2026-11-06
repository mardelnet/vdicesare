class Education extends SheetPage {
  render(items) {
    const sheet = this.getAttribute('sheet');
    
    const listItems = items
      .map((item, i) => `
        <div id="item-${i}" class="item">
          <div>
            <h4>${item.text}</h4>
          </div>
          <div class="data">
            <strong>Location:</strong> ${item.location}<br>
            ${item.extra}
          </div>
        </div>`)
      .join('');

    return `<div class="items">${listItems}</div>`;
  }
}
customElements.define('comp-page-education', Education);