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
      <div class="container">
        <div>
          <img src="assets/images/picture.png" alt="" />
        </div>
        <div>
          <h1>${rows.find(([key]) => key === 'title')?.[1]}</h1>
          <h2>${rows.find(([key]) => key === 'subtitle')?.[1]}</h2>
          <ul>
            <li>${rows.find(([key]) => key === 'current_position_1')?.[1]}</li>
            <li>${rows.find(([key]) => key === 'current_position_2')?.[1]}</li>
            <li>${rows.find(([key]) => key === 'current_position_3')?.[1]}</li>
          </ul>
        </div>
    `;
  }
}
customElements.define('comp-page-home', Home);