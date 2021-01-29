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
        console.log(data.users);
        if (data.users.length > 0) {
          let temp = "";
          for (var i = 0; i < data.users.length; i++) {
            objJson = data.users[i].username;
            console.log(JSON.stringify(objJson) + "objJson")
          }
          data.users.forEach((d) => {
            temp += "<tr>";
            temp += "<td>" + d.id + "</td>";
            temp += "<td>" + d.username + "</td>";
            temp += "<td>" + d.date + "</td>";
            temp += "</tr>";
          })
          document.getElementById("report").innerHTML = temp;
        }
      }
    )
  }
)

/* for pagination */
var current_page = 1;
var records_per_page = 2;

/* Can be obtained from json file, such as your objJson variable*/
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
    listing_table.innerHTML += JSON.stringify(objJson) + "<br>";
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
  return Math.ceil(40 / records_per_page);
}

window.onload = function () {
  changePage(1);
};
