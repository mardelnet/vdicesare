class Outreach extends SheetPage {
  render(items) {

    const listItems = items
      .map((item, i) => `
        <div id="item-${i}" class="item">
          <div class="head">
            <h4>${item.text}</h4>
            ${item.link ? `
              <a href="${item.link}" target="_blank">
                <img src="/assets/images/icon-external-link.svg" />
              </a>` : ''}
          </div>
          <div class="data">
            ${item.date ? `${item.date} <br>` : ''}
            ${item.country ? `${item.country}` : ''}
          </div>
        </div>`)
      .join('');

    return `<div class="items">${listItems}</div>`;
  }
}
customElements.define('comp-page-outreach', Outreach);