const menuBtn = document.querySelector(".tui__nav--menu");
const menuList = document.querySelector(".tui__nav--list-col");

menuBtn.addEventListener("click", () => {
  if (menuList.style.display == "grid") menuList.style.display = "none";
  else menuList.style.display = "grid";
});

window.onresize = () => {
  if (window.innerWidth >= 1024) menuList.style.display = "none";
};

window.onload = () => (menuList.style.display = "none");
