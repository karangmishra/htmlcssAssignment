/* filtering image */
filterSelection('all');
function filterSelection(c) {
  let x;
  let i;
  x = document.getElementsByClassName('port-img');
  if (c == 'all') c = '';
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], 'show');
    if (x[i].className.indexOf(c) > -1) {
      addClass(x[i], 'show');
    }
  }
}

function addClass(element, name) {
  let i;
  let arr1;
  let arr2;
  arr1 = element.className.split(' ');
  arr2 = name.split(' ');
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += ' ' + arr2[i];
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

/* Add active class to the current button (highlight it) */
let btnContainer = document.getElementById('myBtnContainer');
let btns = btnContainer.getElementsByClassName('btn');
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    let current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
}