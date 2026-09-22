class Nav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="header">
        <input class="side-menu" type="checkbox" id="side-menu"/>
        <label class="hamb" for="side-menu"><span class="hamb-line"></span></label>
        <nav class="nav">
            <ul class="menu">
                <li><a href="/">Home</a></li>
                <li><a href="#education">Education</a> </li>
                <li><a href="#">Research</a></li>
                <li><a href="#">Publications</a></li>
                <li><a data-link href="/conferences">Conferences</a></li>
                <li><a href="#">Posters</a></li>
                <li><a href="#">Teaching</a></li>
                <li><a href="#">Awards</a></li>
                <li><a href="#">Courses</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
      </header>
    `;
  }
}
customElements.define('comp-nav', Nav);

    