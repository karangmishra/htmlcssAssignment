/*filtering image */
filterSelection('all');
function filterSelection(parameter) {
  let x;
  let i;
  x = document.getElementsByClassName('portfolio-img');
  if (parameter == 'all') {
    parameter = '';
  }
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], 'show');
    if (x[i].className.indexOf(parameter) > -1) {
      addClass(x[i], 'show');
    }
  }
}

function addClass(element, name) {
  let i;
  let arr1;
  let arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function removeClass(element, name) {
  let i;
  let arr1;
  let arr2;
  arr1 = element.className.split(' ');
  arr2 = name.split(' ');
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(' ');
}

/*Add active class to the current button (highlight it) */
let btnContainer = document.getElementById('myBtnContainer');
let btns = btnContainer.getElementsByClassName('content-button');
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    var current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
}

/* Open the Modal */
function openModal() {
  document.getElementById('myModal').style.display = 'block';
}

/* Close the Modal */
function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}

var slideIndex = 1;
showSlides(slideIndex);

/* Next/previous controls */
function plusSlides(n) {
  showSlides(slideIndex += n);
}

/* Thumbnail image controls */
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  var dots = document.getElementsByClassName('demo');
  if (n > slides.length) {
     slideIndex = 1;
   }
  if (n < 1) {
     slideIndex = slides.length;
     }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'inline';
  dots[slideIndex - 1].className += ' active';
}