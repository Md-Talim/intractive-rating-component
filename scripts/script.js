const ratingBtns = document.querySelectorAll('.rating-btn');
const submitBtn = document.querySelector('#submit-btn');
const userRatingEle = document.querySelector('#user-rating');
const mainCard = document.querySelector('.main-card');
const thanksCard = document.querySelector('.thanks-card');

ratingBtns.forEach((button) => {
  button.addEventListener('click', () => {
    const currentClickedBtn = document.querySelector('.clicked');
    if (currentClickedBtn) currentClickedBtn.classList.remove('clicked');

    button.classList.add('clicked');
  });
});

submitBtn.addEventListener('click', () => {
  const currentClickedBtn = document.querySelector('.clicked');
  if (!currentClickedBtn) return;

  const userRating = currentClickedBtn.textContent;
  userRatingEle.innerHTML = userRating;

  thanksCard.classList.remove('hide');
  mainCard.classList.add('hide');
});
