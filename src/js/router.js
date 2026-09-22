const routes = {
  '/': renderHome,
};

async function getPages() {
  const pages = await getAllPages();
  pages.forEach(page => {
    const originalPageName = page.properties.title;
    const pageName = originalPageName.toLowerCase();
    routes[`/${pageName}`] = createRenderer(originalPageName, pageName);
  });
}

function createRenderer(originalPageName, pageName) {
  return function () {
    return `<comp-page-${pageName} sheet="${originalPageName}"></comp-page-${pageName}>`;
  };
}

function renderHome() { 
  return '<comp-page-home></comp-page-home>';
}

function renderNotFound() { 
  return '<h1>404</h1>';
}

async function router() {
  const path = window.location.pathname;
  const render = routes[path] || renderNotFound; // sometimes a string, sometimes a function
  document.getElementById('app').innerHTML = render(); // boom if it's a string
}

// handle back/forward buttons
window.addEventListener('popstate', router);

// handle link clicks without full reload
document.addEventListener('click', e => {
  if (e.target.closest('[data-link]')) {
    e.preventDefault();
    history.pushState(null, '', e.target.href);
    router();
  }
});

// initial render
router();
getPages();