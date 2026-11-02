// Shared active-page indication for the hybrid portfolio navigation.
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link[href]').forEach((link) => {
  const target = link.getAttribute('href');
  if (target === currentPage) {
    link.classList.add('active');
    link.setAttribute('aria-current', 'page');
  } else if (target.endsWith('.html')) {
    link.classList.remove('active');
    link.removeAttribute('aria-current');
  }
});
