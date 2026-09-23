class Nav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<nav class="nav"><ul class="menu"><li>Loading...</li></ul></nav>`;
    this.loadNav();
  }

  async loadNav() {
    const pages = await getAllPages();
    
    const links = pages
      .map(sheet => {
        const originalName = sheet.properties.title;
        const newName = originalName
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')  // anything non-alphanumeric → hyphen
          .replace(/^-+|-+$/g, '');     // trim leading/trailing hyphens
        return `<li><a data-link href="/${newName}">${originalName}</a></li>`;
      })
      .join('');

    this.innerHTML = `
      <header class="header">
        <input class="side-menu" type="checkbox" id="side-menu"/>
        <label class="hamb" for="side-menu"><span class="hamb-line"></span></label>
        <nav class="nav">
          <ul class="menu">
            <li><a data-link href="/">Home</a></li>
            ${links}
          </ul>
        </nav>
      </header>
    `;
  }
}
customElements.define('comp-nav', Nav);