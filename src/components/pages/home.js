class Home extends HTMLElement {
  connectedCallback() {
    this.loadStyles();
    this.loadHtml();
  }

  loadStyles() {
    if (!document.querySelector('link[data-page-style="home"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = './src/css/pages/home.css';
      link.dataset.pageStyle = 'home';
      document.head.appendChild(link);
    }
  }

  disconnectedCallback() {
    // remove the stylesheet when navigating away, so it doesn't leak into other pages
    document.querySelector('link[data-page-style="home"]')?.remove();
  }

  async loadHtml() {
    const rows = await getSheetData('Globals');
    const get = (k) => rows.find(([key]) => key === k)?.[1]?.trim() ?? '';

    const positions = [1, 2, 3]
      .map((n) => get(`current_position_${n}`))
      .filter(Boolean)
      .map((p) => `<li>${p}</li>`)
      .join('');

    this.innerHTML = `
      <div class="container">
        <div class="profile-pic-container">
          <img src="assets/images/picture.png" alt="" />
          <div class="frame"></div>
        </div>
        <div>
          <h1>${get('title')}</h1>
          <h2>${get('subtitle')}</h2>
          ${positions}
        </div>
      </div>
    `;
  }
}
customElements.define('comp-page-home', Home);