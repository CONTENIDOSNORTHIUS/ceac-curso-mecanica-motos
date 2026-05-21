/* ============================================================
   CEAC · Recepcionista de Hotel — main.js
   - Smooth scroll (delegado a CSS scroll-behavior)
   - Menú móvil
   - Acordeón del temario (accesible)
   - Reveal on scroll (IntersectionObserver)
   - Sombra dinámica en nav al hacer scroll
   ============================================================ */

(() => {
  'use strict';

  /* ---------- 1. Menú móvil ---------- */
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isOpen = !mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden');
      menuBtn.setAttribute('aria-expanded', String(!isOpen));
    });

    // Cierra el menú al pulsar un enlace
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- 2. Acordeón del temario ---------- */
  document.querySelectorAll('.acc-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const panel = btn.nextElementSibling;
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      if (panel) panel.classList.toggle('hidden');
    });
  });

  /* ---------- 3. Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach(el => io.observe(el));
  } else {
    // Fallback: mostrar todo
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  /* ---------- 4. Sombra del nav al hacer scroll ---------- */
  const nav = document.getElementById('nav');
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 8) {
        nav.classList.add('shadow-lg');
      } else {
        nav.classList.remove('shadow-lg');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }
})();
