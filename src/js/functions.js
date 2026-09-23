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