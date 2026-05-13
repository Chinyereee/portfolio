// ============================================================
//  Portfolio Navigation
// ============================================================

const menuTrigger = document.getElementById('menuTrigger');
const dropdown    = document.getElementById('dropdown');

if (menuTrigger && dropdown) {
  let menuOpen = false;

  menuTrigger.addEventListener('click', () => {
    menuOpen = !menuOpen;
    dropdown.classList.toggle('open', menuOpen);
    menuTrigger.classList.toggle('open', menuOpen);
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-menu') && menuOpen) {
      menuOpen = false;
      dropdown.classList.remove('open');
      menuTrigger.classList.remove('open');
    }
  });
}
