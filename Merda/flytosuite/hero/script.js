// Header transparency toggle based on hero height
(function () {
  const header = document.querySelector('.site-header');
  const hero = document.querySelector('.hero');

  // Add loaded class for entrance animations
  window.addEventListener('load', function () {
    document.body.classList.add('is-loaded');
  });

  // Language selector toggle
  const langSel = document.querySelector('.lang-selector');
  const langBtn = document.getElementById('langBtn');
  const langDropdown = document.getElementById('langDropdown');
  if (langSel && langBtn && langDropdown) {
    langBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      langSel.classList.toggle('open');
    });
    langDropdown.addEventListener('click', function (e) {
      const opt = e.target.closest('.lang-option');
      if (!opt) return;
      const code = opt.getAttribute('data-code');
      langBtn.className = `lang-btn ${code}`;
      langSel.classList.remove('open');
    });
    document.addEventListener('click', function () {
      langSel.classList.remove('open');
    });
  }

  function updateHeader() {
    const heroBottom = hero.getBoundingClientRect().bottom;
    // Keep header style fixed until we pass the hero; do not change layout metrics
    if (heroBottom <= 0) {
      header.classList.remove('header--transparent');
      header.classList.add('header--solid');
      header.classList.remove('header--hidden');
      header.classList.add('header--visible');
    } else {
      header.classList.add('header--transparent');
      header.classList.remove('header--solid');
      header.classList.add('header--hidden');
      header.classList.remove('header--visible');
    }
  }

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
  window.addEventListener('resize', updateHeader);
})();


