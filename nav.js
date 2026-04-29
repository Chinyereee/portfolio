// ============================================================
//  Portfolio Navigation
//  Shared by all pages: index.html, about.html, projects.html
// ============================================================

const menuTrigger = document.getElementById('menuTrigger');
const dropdown    = document.getElementById('dropdown');
let menuOpen = false;

// Toggle menu open/close on hamburger click
menuTrigger.addEventListener('click', () => {
  menuOpen = !menuOpen;
  dropdown.classList.toggle('open', menuOpen);
  menuTrigger.classList.toggle('open', menuOpen);
});

// Close menu when clicking outside the nav
document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav-menu') && menuOpen) {
    menuOpen = false;
    dropdown.classList.remove('open');
    menuTrigger.classList.remove('open');
  }
});
