const orderBtn = document.querySelector('.hero-btn');
const backdrop = document.querySelector('.backdrop');

orderBtn.addEventListener('click', () => {
  backdrop.classList.add('is-open');
});

const closeModalBtn = document.querySelector('.modal-btn');

if (closeModalBtn && backdrop) {
  closeModalBtn.addEventListener('click', () => {
    backdrop.classList.remove('is-open');
  });
}
