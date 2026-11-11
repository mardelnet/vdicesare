function loadStyles(id) {
  if (!document.querySelector(`link[data-page-style="${id}"]`)) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `./src/css/pages/${id}.css`;
    link.dataset.pageStyle = id;
    document.head.appendChild(link);
  }
}

function sanitizeString(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function closeMobileMenu() {
  const sideMenu = document.querySelector('#side-menu');
  
  if (sideMenu) {
    sideMenu.checked = false;
  }
}

function closeMenuOnClick() {
  const toggle = document.querySelector('#menuToggle input');
  const menu = document.querySelector('#menu');

  menu.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      toggle.checked = false;
    }
  });
}

function toggleNavClasses() {
  const header = document.querySelector('.header');
  const threshold = 25;

  const onScroll = () => {
    header.classList.toggle('is-scrolled', document.body.scrollTop > threshold);
  };

  document.body.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}