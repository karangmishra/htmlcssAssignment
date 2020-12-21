let topbtn = document.getElementById("top-btn");
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.documentElement.scrollTop > 20){
        topbtn.style.display = "block";
    
    }
    else {
        topbtn.style.display = "none";
    }
}

// when the user clicks on button, scroll to top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}