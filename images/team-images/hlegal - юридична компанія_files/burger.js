// menu-burger

document.querySelector('.header-nav-trigger').addEventListener('click', function () {
  document.querySelector('.header-nav').classList.add('visible');
  document.querySelector('.header-nav-overlay').classList.add('visible');
});

document.querySelector('.header-closer-btn').addEventListener('click', function (e) {
  e.target.classList.remove('visible');
  document.querySelector('.header-nav').classList.remove('visible');
  document.querySelector('.header-nav-overlay').classList.remove('visible');
});

document.querySelector('.header-nav-overlay').addEventListener('click', function (e) {
  e.target.classList.remove('visible');
  document.querySelector('.header-nav').classList.remove('visible');
  document.querySelector('.header-closer-btn').classList.remove('visible');
});
