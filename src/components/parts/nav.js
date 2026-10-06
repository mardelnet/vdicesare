class Nav extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute('title');
    this.loadNav(title);
  }

  async loadNav(title) {
    const pages = await getAllPages();
    
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
      <header class="header">
        <div class="title">
          ${title}
        </div>
        <div class="end">
          <a class="nav-item" href="/">Home</a>
          <a class="nav-item" href="/contact">Contact</a>
          <div id="menuToggle">
            <input type="checkbox" id="menuCheckbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              ${links}
            </ul>
          </div>
        </div>
      </header>
    `;

    closeMenuOnClick();
    updateActiveLink(window.location.pathname);
  }
}
customElements.define('comp-nav', Nav);