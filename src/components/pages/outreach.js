class Outreach extends SheetPage {
  render(items) {
    const listItems = items
      .map((item, i) => `
        <div id="item-${i}" class="item">
          <div>
            <a target="_blank" href="${item.link}">
              <img src="/assets/images/icon-external-link.svg" />
            </a>
          </div>
          <div>
            <em>${item.date}</em><br>
            ${item.text}
          </div>
        </div>`)
      .join('');

    return `<div class="items">${listItems}</div>`;
  }
}
customElements.define('comp-page-outreach', Outreach);