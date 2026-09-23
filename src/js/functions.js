function loadStyles(id) {
  if (!document.querySelector(`link[data-page-style="${id}"]`)) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `./src/css/pages/${id}.css`;
    link.dataset.pageStyle = id;
    document.head.appendChild(link);
  }
}