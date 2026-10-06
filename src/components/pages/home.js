class Home extends HTMLElement {
  connectedCallback() {
    const sheet = this.getAttribute('sheet');
    this.loadStyles();
    this.loadHtml(sheet);
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

  async loadHtml(sheet) {
    const rows = await getSheetData('Globals');

    this.innerHTML = `
      <h1>Victoria Di Césare</h1>
      <h2>PhD student in Social Sciences at the University of Granada</h2>
    `;
  }
}
customElements.define('comp-page-home', Home);