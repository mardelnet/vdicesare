const routes = {
  '/': renderHome,
};

async function getPages() {
  const pages = await getAllPages();
  pages.forEach(page => {
    const originalPageName = page.properties.title;
    const pageName = originalPageName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    routes[`/${pageName}`] = createRenderer(originalPageName, pageName);
  });
}

function createRenderer(sheet, id) {
  return function () {
    return `<comp-page sheet="${sheet}" id="${id}"></comp-page>`;
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