class ResearchGroups extends SheetPage {
  render(items) {

    console.log(items)
    
    const listItems = items
      .map((item, i) => `
        <div class="item">
          <div class="head">
            <h4>${item.text}</h4>
            ${item.link ? `
              <a href="${item.link}" target="_blank">
                <img src="/assets/images/icon-external-link.svg" />
              </a>` : ''}
          </div>
          <div class="data">
            <strong>Type:</strong> ${item.type} <br>
            <strong>Years:</strong> ${item.year}
          </div>
        </div>`)
      .join('');

    return `<div class="items">${listItems}</div>`;
  }
}
customElements.define('comp-page-research-groups-projects', ResearchGroups);