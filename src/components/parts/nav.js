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
        <input class="side-menu" type="checkbox" id="side-menu"/>
        <div class="title">
          ${title}
        </div>
        <label class="hamb" for="side-menu">
          <span class="hamb-line"></span>
        </label>
        <nav class="nav scroller menu">
          <button class="scroller__btn scroller__btn--prev" aria-label="Scroll left">▶</button>
          <div class="scroller__viewport" tabindex="0" role="region" aria-label="Items">
            <label class="hamb" for="side-menu">
              <span class="hamb-line"></span>
            </label>
            <li><a data-link href="/">Home</a></li>
            ${links}
          </div>
          <button class="scroller__btn scroller__btn--next" aria-label="Scroll right">▶</button>
        </nav>
      </header>
    `;

    navScroller();
    updateActiveLink(window.location.pathname);
  }
}
customElements.define('comp-nav', Nav);