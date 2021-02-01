/*using fetch method, view data*/
fetch('../formdata.json', {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}).then(
  res => {
    res.json().then(
      data => {
        objJson = data.users;
        console.log(data.users);
        console.log(data.users.length + "length");

      }
    )
  }
)

var currentPage = 1;
var recordsPerPage = 3;
var objJson = [{ username: "", id: 1, date: "" }];
function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    changePage(currentPage);
  }
}

function nextPage() {
  if (currentPage < numPages()) {
    currentPage++;
    changePage(currentPage);
  }
}

function changePage(page) {
  var btnNext = document.getElementById("btn-next");
  var btnPrev = document.getElementById("btn-prev");
  var listingTable = document.getElementById("report");
  var pageSpan = document.getElementById("page");

  // Validate page
  if (page < 1) page = 1;
  if (page > numPages()) page = numPages();

  listingTable.innerHTML = "";

  for (var i = (page - 1) * recordsPerPage; i < (page * recordsPerPage); i++) {
    listingTable.innerHTML += "<tr><td>" + objJson[i].id + "</td><td>" + objJson[i].username + "</td><td>" + objJson[i].date + "</td></tr>";
  }
  pageSpan.innerHTML = page;

  if (page == 1) {
    btnPrev.style.visibility = "hidden";
  } else {
    btnPrev.style.visibility = "visible";
  }

  if (page == numPages()) {
    btnNext.style.visibility = "hidden";
  } else {
    btnNext.style.visibility = "visible";
  }
}

function numPages() {
  return Math.ceil(objJson.length / recordsPerPage);
}

window.onload = function () {
  changePage(1);
};
