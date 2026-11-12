class Head extends HTMLElement {
  connectedCallback() {
    this.loadNav();
  }

  async loadNav() {
    const pages = await getAllPages();
    const rows = await getSheetData('Globals');
    
    const links = pages
      .map(sheet => {
        const originalName = sheet.properties.title;
        const newName = sanitizeString(originalName);
        if (newName != 'globals') {
          return `<li><a data-link href="/${newName}">${originalName}</a></li>`;
        }
      })
      .join('');

    this.innerHTML = `
      <div id="scroll-sentinel" style="position:absolute; top:0; height:1px; width:1px;"></div>
      <header class="header">
        <div class="title">
          <a href="/" target="_self">
            Victoria Di Césare
          </a>
        </div>
        <div class="end">
          <a class="nav-item home-link" href="/">Home</a>
          <a class="nav-item" href="mailto:${rows.find(([key]) => key === 'Email')?.[1]}">Contact</a>
          <div id="menuToggle">
            <input type="checkbox" id="menuCheckbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <li class="home-link"><a href="/" target="_self">Home</a></li>
              ${links}
              <li class="home-link"><a href="mailto:${rows.find(([key]) => key === 'Email')?.[1]}" target="_self">Contact</a></li>
            </ul>
          </div>
        </div>
      </header>
    `;

    closeMenuOnClick();
    toggleNavClasses();
  }
}
customElements.define('comp-head', Head);