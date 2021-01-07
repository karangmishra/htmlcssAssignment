/*filtering image */
filterSelection("all");
function filterSelection(parameter) {
  var x;
  var i;
  x = document.getElementsByClassName("portfolio-img");
  if (parameter == "all") {
     parameter = "";
  }
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(parameter) > -1) {
      addClass(x[i], "show");
    }
  }
}

function addClass(element, name) {
  var i;
  var arr1;
  var arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
       element.className += " " + arr2[i]; 
      }
  }
}

function removeClass(element, name) {
  var i;
  var arr1;
  var arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("content-button");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
