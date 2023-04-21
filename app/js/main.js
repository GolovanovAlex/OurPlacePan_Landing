// ---- ---- menu button ---- ---- //
const menuBtn = document.querySelector('.menu__btn');
const menuLink = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('menu__btn--active');
  menuLink.classList.toggle('menu--active');
});
// ---- ---- scroll  ---- ---- //
const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute('href').substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}
