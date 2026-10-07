// The Wax Biz — mobile menu and Tools dropdown. Shared by every page.
(function () {
  var nav = document.querySelector('nav');
  var btn = nav && nav.querySelector('.nav-toggle');
  if (!btn) return;
  var sub = nav.querySelector('.nav-sub-wrap');
  var subBtn = sub && sub.querySelector('.nav-sub-toggle');
  function setSub(open) {
    if (!sub) return;
    sub.classList.toggle('open', open);
    subBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  function setOpen(open) {
    nav.classList.toggle('nav-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    if (!open) setSub(false);
  }
  btn.addEventListener('click', function () { setOpen(!nav.classList.contains('nav-open')); });
  if (subBtn) {
    subBtn.addEventListener('click', function () { setSub(!sub.classList.contains('open')); });
    sub.addEventListener('focusout', function (e) {
      if (!nav.classList.contains('nav-open') && !sub.contains(e.relatedTarget)) setSub(false);
    });
  }
  nav.querySelectorAll('.nav-links a').forEach(function (a) {
    a.addEventListener('click', function () { setOpen(false); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (sub && sub.classList.contains('open')) { setSub(false); subBtn.focus(); }
    else if (nav.classList.contains('nav-open')) { setOpen(false); btn.focus(); }
  });
  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target)) setOpen(false);
    else if (sub && !sub.contains(e.target)) setSub(false);
  });
  window.matchMedia('(min-width: 769px)').addEventListener('change', function (m) { if (m.matches) setOpen(false); });
})();
