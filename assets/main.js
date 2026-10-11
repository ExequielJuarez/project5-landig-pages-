// Menú móvil, nav al hacer scroll, animaciones y formulario → WhatsApp.
(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const nav = $('.nav'), burger = $('.burger'), menu = $('.menu');
  const onScroll = () => nav && nav.classList.toggle('scrolled', scrollY > 30);
  onScroll(); addEventListener('scroll', onScroll, { passive: true });

  if (burger) {
    burger.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      burger.setAttribute('aria-expanded', open);
    });
    menu.addEventListener('click', e => {
      if (e.target.closest('a')) { menu.classList.remove('open'); burger.setAttribute('aria-expanded', false); }
    });
  }

  const els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { threshold: .12 });
    els.forEach(el => io.observe(el));
  } else els.forEach(el => el.classList.add('in'));

  // El formulario arma un mensaje y abre WhatsApp (cambiar data-wa por el número real, con código de país).
  const form = $('form[data-wa]');
  if (form) form.addEventListener('submit', e => {
    e.preventDefault();
    const d = new FormData(form);
    const lines = [...d.entries()].filter(([, v]) => String(v).trim()).map(([k, v]) => `*${k}:* ${v}`);
    const text = encodeURIComponent(`Hola! Quiero hacer una consulta.\n${lines.join('\n')}`);
    window.open(`https://wa.me/${form.dataset.wa}?text=${text}`, '_blank', 'noopener');
    const ok = $('.form-ok', form); if (ok) ok.classList.add('show');
    form.reset();
  });
  const y = $('#year'); if (y) y.textContent = new Date().getFullYear();
})();
