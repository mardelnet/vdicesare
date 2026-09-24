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

function updateActiveLink(path) {
  if (!path) return;

  const headerItems = document.querySelectorAll('header li');

  headerItems.forEach(item => {
    const link = item.querySelector('a');

    if (path == link.getAttribute('href')) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

function navScroller() {
  document.querySelectorAll('.scroller').forEach((root) => {
    const viewport = root.querySelector('.scroller__viewport');
    const prev = root.querySelector('.scroller__btn--prev');
    const next = root.querySelector('.scroller__btn--next');

    const update = () => {
      const max = viewport.scrollWidth - viewport.clientWidth;
      prev.disabled = viewport.scrollLeft <= 1;
      next.disabled = viewport.scrollLeft >= max - 1;
    };

    const scrollByPage = (dir) =>
      viewport.scrollBy({ left: dir * viewport.clientWidth * 0.8, behavior: 'smooth' });

    prev.addEventListener('click', () => scrollByPage(-1));
    next.addEventListener('click', () => scrollByPage(1));

    viewport.addEventListener('scroll', update, { passive: true });
    new ResizeObserver(update).observe(viewport);
    update();
  });
}