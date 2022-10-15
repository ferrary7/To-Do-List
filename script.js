
var addContent = [];
var input = document.getElementById("input");
var content = document.getElementById("content");

document.getElementById("button").onclick = click;

function click() {
  addContent.push(input.value);
  console.log(addContent);
  input.value = "";
  list();
}

function list() {
  content.innerHTML = " ";
  addContent.forEach(function (x, y) {
    content.innerHTML += "<li>" + x +
      "<a onclick='editItem(" + y + ")'>" + " " + " Edit Here </a>" +
      "<a onclick='deleteItem(" + y + ")'>&times  </a></li>";
  });
}

function deleteItem(y) {
  addContent.splice(y, 1);
  list();
}

function editItem(y) {
  var newValue = prompt("Please insert your new value");
  addContent.splice(y, 1, newValue);
  list();
}