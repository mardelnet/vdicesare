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
    const rows = await getSheetData(sheet);
    // const obj = Object.fromEntries(data);

    // const [header, ...dataRows] = rows;

    // const items = dataRows
    //   .map(row => {
    //     const [authors, date, title, conference, institution, city, country, link, type] = row;
    //     return `
    //       <li>
    //         <h3>${title}</h3>
    //         <p>${authors}</p>
    //         <p>${conference} — ${institution}, ${city}, ${country}</p>
    //         <p>${date} · ${type}</p>
    //         <a href="${link}" target="_blank" rel="noopener">View</a>
    //       </li>
    //     `;
    //   })
    //   .join('');

    this.innerHTML = `
      <main id="homepage">
        <section id="personal">
          <div class="container">
            <h2>Personal Profile</h2>
            <p>I'm a PhD student in Social Sciences at the University of Granada, supported by a FPI fellowship awarded by the Spanish Ministry of Science and Innovation.</p>
            <p>I'm currently a member of the scientific teams at EC3 Research Group and COMPARE Project.</p>
            <p>I hold a bachelor’s degree in Information Science and I'm finishing my master’s degree in Science, Technology and Society, both in public universities from Argentina.</p>
            <p>My academic interests focus on Scientometrics and Social Studies of Science, specifically in relation to the theoretical and empirical characterization of science as a social activity.</p>
          </div>
        </section>
        <section id="education">
          <div class="container">
            <h2>Education</h2>
            <ul>
              <li>
                <img src="assets/images/logo-ugr.png" alt="" />
                <p>
                  PhD in Social Sciences at the University of Granada.<br>
                  Granada, Spain.<br>
                  In progress
                </p>
              </li>
              <li>
                <img src="assets/images/logo-ugr.png" alt="" />
                <p>
                  Research stay at the Centre for Science and Technology Studies (CWTS) of Leiden University.<br>
                  Leiden, The Netherlands.<br>
                  3 months
                </p>
              </li>
              <li>
                <img src="assets/images/logo-ugr.png" alt="" />
                <p>
                  Master’s degree in Science, Technology and Society (3-year program) at the National University of Quilmes.<br>
                  Bernal, Argentina<br>
                  12/12 courses completed
                </p>
              </li>
              <li>
                <img src="assets/images/logo-ugr.png" alt="" />
                <p>
                  Bachelor’s degree in Information Science (5-year program) at the National University of Mar del Plata.<br>
                  Mar del Plata, Argentina<br>
                  Average grade: 9.46/10
                </p>
              </li>
            </ul>
          </div>
        </section>
      </main>
    `;
  }
}
customElements.define('comp-page-home', Home);