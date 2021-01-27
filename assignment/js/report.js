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
  rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
          callback(rawFile.responseText);
      }
  }
  rawFile.send(null);
}

var showdata = function (){
return new Promise (function(resolve, reject){
  readTextFile("../formdata.json", function(text){
  var data = JSON.parse(text);
  console.log('task1 called');
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
  resolve('task1');
  }); 
});
};

/*
var task2 = function (){
return new Promise (function(resolve, reject){
  readTextFile("DATA2.json", function(text){
  var data2 = JSON.parse(text);
  console.log('task2 called');
  console.log(data2);
  resolve('task2 came back');
  });
});
}
*/

Promise.race([showdata()])
     .then(function(fromResolve){
        console.log(fromResolve); 
     });
