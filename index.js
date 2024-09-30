const orderBtn = document.querySelector('.hero-btn');
const backdrop = document.querySelector('.backdrop');

orderBtn.addEventListener('click', () => {
  backdrop.classList.add('is-open');
});
