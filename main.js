// navbar
const menu = document.querySelector('#menu');
const nav = document.querySelector('#nav');
const links = document.querySelectorAll('.link');

menu.addEventListener("click", () => {
 nav.classList.toggle("active");
 
 // x-icon
 if (nav.classList.contains("active")) {
  menu.className = "fa-solid fa-xmark";
 } else {
  menu.className = "fa-solid fa-bars";
 }
});

// close navbar when the user clicks any links
links.forEach(link => {
 link.addEventListener("click", () => {
  nav.classList.remove("active");
  
  // icon
  menu.className = "fa-solid fa-bars";
 });
});
