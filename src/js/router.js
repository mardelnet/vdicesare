const routes = {
  '/': renderHome,
  '/education': renderAbout,
  '/conferences': renderContact,
};

function router() {
  const path = window.location.pathname;
  const render = routes[path] || renderNotFound;
  document.getElementById('app').innerHTML = render();
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

function renderHome() { return '<comp-page-home></comp-page-home>'; }
function renderAbout() { return '<h1>About</h1>'; }
function renderContact() { return '<h1>Contact</h1>'; }
function renderNotFound() { return '<h1>404</h1>'; }