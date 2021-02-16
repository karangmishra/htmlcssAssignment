/*reading a file is an async operation.*/
function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      callback(rawFile.responseText);
    }
  }
  rawFile.send(null);
}

var showdata = function () {
  return new Promise(function (resolve, reject) {
    readTextFile("../formdata.json", function (text) {
      var data = JSON.parse(text);
  
      if (data.users.length > 0) {
        objJson = data.users;
        let temp = "";
        data.users.forEach((d) => {
          if(d.id < 6){
          temp += "<tr>";
          temp += "<td>" + d.id + "</td>";
          temp += "<td>" + d.username + "</td>";
          temp += "<td>" + d.date + "</td>";
          temp += "</tr>";
          }
        })
        document.getElementById("report").innerHTML = temp;
      }
      resolve('task1');
    });
  });
};

Promise.race([showdata()])
  .then(function (fromResolve) {
    console.log(fromResolve);
  });

window.onload = async () => {
  changePage(1);
};

var currentPage = 1;
var recordsPerPage = 5;

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
    listingTable.innerHTML += "<tr><td>" + objJson[i].id + "</td><td>" + objJson[i].username + "</td><td>" + objJson[i].date.split('T')[0] + "</td></tr>";
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

