let btnPrev = document.getElementById('btn-prev');
let btnNext = document.getElementById('btn-next');
let sliderWrapp = document.getElementsByClassName('slider__wrapper')[0];
let slides = sliderWrapp.querySelectorAll('.slide');
let dots = document.getElementsByClassName('dot');
let currentIndex = 1;
let countSlide = 20;
let width = -27;
let timer;
let isSliderMoving = false;

if (window.innerWidth < 670) {
  width = -22;
}
if (window.innerWidth < 550) {
  width = -17;
}
if (window.innerWidth < 400) {
  width = -12;
}

sliderWrapp.style.marginLeft = width * (countSlide * currentIndex) + 'px';
dots[currentIndex - 1].classList.add('active');

btnPrev.addEventListener('click', onShowPrevBtnClick);
btnNext.addEventListener('click', onShowNextBtnClick);

Array.from(dots).forEach((el, i) => el.setAttribute('data-key', i + 1));

dots[0].parentElement.addEventListener('click', (e) => {
  if (
    !e.target.classList.contains('dot') ||
    e.target.classList.contains('active') ||
    isSliderMoving
  )
    return false;

  let image_key = +e.target.dataset[`key`];
  if (image_key > currentIndex) {
    sliderMove('right');
  } else {
    sliderMove('left');
  }
  currentIndex = image_key;
});

function onShowPrevBtnClick() {
  if (isSliderMoving) return false;
  currentIndex--;
  sliderMove('left');
}

function onShowNextBtnClick() {
  if (isSliderMoving) return false;
  currentIndex++;
  sliderMove('right');
}

function sliderMove(pos) {
  isSliderMoving = true;
  pos = pos === 'left' ? -1 : 1;
  timer = setInterval(function () {
    countSlide = countSlide + pos;
    sliderWrapp.style.marginLeft = width * countSlide + 'px';

    if (countSlide !== 20 * currentIndex) return false;
    clearInterval(timer);
    isLastOrFirst();
    isSliderMoving = false;

    Array.from(dots)
      .find((d) => d.classList.contains('active'))
      .classList.remove('active');
    dots[currentIndex - 1].classList.add('active');
  }, 20);
}

function isLastOrFirst() {
  if (currentIndex <= 0) {
    countSlide = 20 * (slides.length - 2);
    currentIndex = slides.length - 2;
    sliderWrapp.style.marginLeft = width * countSlide + 'px';
  }
  if (currentIndex >= slides.length - 1) {
    countSlide = 20;
    currentIndex = 1;
    sliderWrapp.style.marginLeft = width * countSlide + 'px';
  }
}
