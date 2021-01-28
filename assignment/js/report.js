/*using fetch method, view data*/
/*
fetch('../formdata.json', {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}).then(
  res => {
    res.json().then(
      data => {
        console.log(data.users);
        if (data.users.length > 0) {
          let temp = "";
          data.users.forEach((d) => {
            temp += "<tr>";
            temp += "<td>" + d.id + "</td>";
            temp += "<td>" + d.username + "</td>";
            temp += "<td>" + d.message + "</td>";
            temp += "</tr>";
          })
          document.getElementById("report").innerHTML = temp;
        }
      }
    )
  }
)
*/

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
        let temp = "";
        data.users.forEach((d) => {
          temp += "<tr>";
          temp += "<td>" + d.id + "</td>";
          temp += "<td>" + d.username + "</td>";
          temp += "<td>" + 1 + "</td>";
          temp += "</tr>";
        })
        document.getElementById("report").innerHTML = temp;
      }
      resolve('task1');
    });
  });
};

var countUser = function () {
  return new Promise(function (resolve, reject) {
    readTextFile("../formdata.json", function (text) {
      var data2 = JSON.parse(text);
      console.log('task2 called');
      console.log(data2);
      resolve('task2 came back');
    });
  });
}

Promise.race([showdata()])
  .then(function (fromResolve) {
    console.log(fromResolve);
  });

/* for pagination */
/*
var current_page = 1;
var records_per_page = 2;
var objJson = [
  { username: "user 1" },
  { username: "user 2" },
  { username: "user 3" },
  { username: "user 4" },
  { username: "user 5" },
  { username: "user 6" },
  { username: "user 7" },
  { username: "user 8" },
  { username: "user 9" },
  { username: "user 10" }
]; // Can be obtained from json file, such as your objJson variable

function prevPage() {
  if (current_page > 1) {
    current_page--;
    changePage(current_page);
  }
}

function nextPage() {
  if (current_page < numPages()) {
    current_page++;
    changePage(current_page);
  }
}

function changePage(page) {
  var btn_next = document.getElementById("btn-next");
  var btn_prev = document.getElementById("btn-prev");
  var listing_table = document.getElementById("listingTable");
  var page_span = document.getElementById("page");

  // Validate page
  if (page < 1) page = 1;
  if (page > numPages()) page = numPages();

  listing_table.innerHTML = "";

  for (var i = (page - 1) * records_per_page; i < (page * records_per_page); i++) {
    listing_table.innerHTML += objJson[i].username + "<br>";
  }
  page_span.innerHTML = page;

  if (page == 1) {
    btn_prev.style.visibility = "hidden";
  } else {
    btn_prev.style.visibility = "visible";
  }

  if (page == numPages()) {
    btn_next.style.visibility = "hidden";
  } else {
    btn_next.style.visibility = "visible";
  }
}

function numPages() {
  return Math.ceil(data.users.length / records_per_page);
}

window.onload = function () {
  changePage(1);
};
*/