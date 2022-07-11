const menu = document.querySelector(".container");
const closeBtn = document.querySelector(".closebtn");

menu.addEventListener("click", function (e) {
  e.preventDefault();
  menu.classList.toggle("change");
  console.log("Hello World");
});

function openNav() {
  menu.classList.toggle("ham-disable");
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}
menu.addEventListener("click", openNav);
closeBtn.addEventListener("click", function (e) {
  menu.classList.toggle("change");
  menu.classList.toggle("ham-disable");
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
});