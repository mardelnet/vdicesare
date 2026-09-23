let currentPath = null;

const routes = {
  '/': renderHome,
};

async function getPages() {
  const pages = await getAllPages();
  pages.forEach(page => {
    const originalPageName = page.properties.title;
    const pageName = sanitizeString(originalPageName);
    routes[`/${pageName}`] = createRenderer(originalPageName, pageName);
  });
}

function createRenderer(sheet, id) {
  return function () {
    return `<comp-page sheet="${sheet}" pageid="${id}"></comp-page>`;
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
  if (path === currentPath) return; // hash-only navigation, nothing to re-render
  currentPath = path;

  const render = routes[path] || renderNotFound;
  document.getElementById('app').innerHTML = render();
}

async function init() {
  await getPages();   // wait for routes to be fully populated first
  router();           // now render, with routes ready
}

window.addEventListener('popstate', router);

document.addEventListener('click', e => {
  if (e.target.closest('[data-link]')) {
    e.preventDefault();
    history.pushState(null, '', e.target.href);
    router();
  }
});

// initial render
init();