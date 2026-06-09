// nav.js — Navigation scroll state & active link
(function () {
  const nav = document.querySelector('.nav');
  const links = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');

  // Scroll state
  let ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(function () {
        // Nav background
        if (window.scrollY > 40) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }

        // Active section
        const scrollY = window.scrollY + 100;
        sections.forEach(function (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          const id = section.getAttribute('id');
          const link = document.querySelector('.nav-links a[href="#' + id + '"]');
          if (link) {
            if (scrollY >= top && scrollY < top + height) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          }
        });

        ticking = false;
      });
      ticking = true;
    }
  });
})();
