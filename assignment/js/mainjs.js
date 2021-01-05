/*to perform a function, on button click we directly goes to top section of webpage*/
let topbtn = document.getElementById('top-btn');
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.documentElement.scrollTop > 20) {
        topbtn.style.display = 'block';
    } else {
        topbtn.style.display = 'none';
    }
}

/*when an user clicks on button, scroll to top of the document */
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/*show hiden answer of the question in FAQ section */
let acc = document.getElementsByClassName("faq-accordion");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function() {
    this.classList.toggle('faq-active');
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    } 
  });
}
