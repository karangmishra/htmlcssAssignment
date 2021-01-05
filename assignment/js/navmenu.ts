  /*Use for navbar visible in medium and small screen by changing the class name */
function navmenuFunction() {
  let x = document.querySelector('#topnav');
  if (x.className === 'navbar') {
    x.className += ' responsive';
  } else {
    x.className = 'navbar';
  }
} 