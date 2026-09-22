class Nav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<nav class="nav"><ul class="menu"><li>Loading...</li></ul></nav>`;
    this.loadNav();
  }

  async loadNav() {
    const pages = await getAllPages();
    
    const links = pages
      .map(sheet => {
        const name = sheet.properties.title;
        return `<li><a data-link href="/${name.toLowerCase()}">${name}</a></li>`;
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