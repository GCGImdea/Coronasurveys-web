  (function () {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = 'https://app.termly.io/embed.min.js';
    s.id = '1197f0f9-f595-4c59-b665-5ad478686f8e';
    s.setAttribute("data-name", "termly-embed-banner");
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
  })();



// main page JS - simply-nav does not need this
(pageDuty => {
  const stickyToggle = document.querySelector('.button-default.-sticky');
  const stickyText = document.querySelector('.sticky-text');
  const menuToggle = document.querySelector('.button-default.-menu');
  const menuText = document.querySelector('.menu-text');
  const bottomNavToggle = document.querySelector('.button-default.-bottomnav');
  const bottomNavText = document.querySelector('.bottomnav-text');
  const on = '<strong>On</strong>';
  const off = '<strong>Off</strong>';
  const navWrapper = document.querySelector('.nav-wrapper');
  const mainWrapper = document.querySelector('main');
  const burgerIcon = document.querySelector('.burger');

  stickyToggle.addEventListener('click', () => {
    navWrapper.classList.toggle('-sticky');
    (navWrapper.classList.contains('-sticky') ? stickyText.innerHTML = on : stickyText.innerHTML = off);
  });

  menuToggle.addEventListener('click', () => {
    burgerIcon.classList.toggle('-offset');
    (burgerIcon.classList.contains('-offset') ? menuText.innerHTML = off : menuText.innerHTML = on);
  });

  bottomNavToggle.addEventListener('click', () => {
    navWrapper.classList.toggle('-sticky');
    navWrapper.classList.toggle('-bottom');
    mainWrapper.classList.toggle('-bottomnav');
    if (navWrapper.classList.contains('-bottom')) {
      bottomNavText.innerHTML = on;
      stickyText.innerHTML = on;
    } else {
      bottomNavText.innerHTML = off;
      stickyText.innerHTML = off;
    }
  });
})();
