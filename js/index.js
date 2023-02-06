// function onEntry(entry) {
//   entry.forEach((change) => {
//     if (change.isIntersecting) {
//       change.target.classList.add('our-mission-block__active');
//     }
//   });
// }

// let options = {
//   threshold: [0.5],
// };
// let observer = new IntersectionObserver(onEntry, options);
// let elements = document.querySelectorAll('.our-mission-block');
// let img = document.querySelector('.our-mission-img');

// for (let elm of elements) {
//   observer.observe(elm);
// }

cookiesInit();

function cookiesInit() {
  const btn = document.querySelector('.cookies-btn'),
    cks = document.querySelector('.fixed-cookies');

  document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
      cks.classList.add('cookies-active');
    }, 2000);
  });

  btn.addEventListener('click', function () {
    cks.style.bottom = '-100%';
    setTimeout(() => {
      document.body.removeChild(cks);
    }, 1000);
  });
}

validateForm();

function validateForm() {
  const form = document.querySelector('.get__form'),
    fields = document.querySelectorAll('.get__input-field');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    fields.forEach((field) => {
      field.classList.remove('get__input-error');
      console.log(field);
      if (field.value.trim() == '') {
        field.classList.add('get__input-error');
      }
    });
  });
}
