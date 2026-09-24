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
        const newName = sanitizeString(originalName);
        if (newName != 'globals') {
          return `<li><a data-link href="/${newName}">${originalName}</a></li>`;
        }
      })
      .join('');

    this.innerHTML = `
      <header class="header">
        <input class="side-menu" type="checkbox" id="side-menu"/>
        <label class="hamb" for="side-menu"><span class="hamb-line"></span></label>
        <div class="scroller menu">
          <button class="scroller__btn scroller__btn--prev" aria-label="Scroll left">▶</button>
          <div class="scroller__viewport" tabindex="0" role="region" aria-label="Items">
            <li><a data-link href="/">Home</a></li>
            ${links}
          </div>
          <button class="scroller__btn scroller__btn--next" aria-label="Scroll right">▶</button>
        </div>
      </header>
    `;

    navScroller();
    updateActiveLink(window.location.pathname);
  }
}
customElements.define('comp-nav', Nav);