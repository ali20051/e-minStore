// swup
const swup = new Swup();

// the JavaScript For The DropDown: Start
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownMenuItems = dropdownMenu.children;
let active = -1;

dropdownToggle.addEventListener("click", () => {
  dropdownMenu.classList.toggle("show");
});
document.addEventListener("keydown", (e) => {
  if (e.keyCode == 40) {
    if (active < dropdownMenuItems.length - 1) {
      active++;
      dropdownMenuItems[active].focus();
    }
  } else if (e.keyCode == 38) {
    if (active > -1) {
      active--;
      dropdownMenuItems[active].focus();
    }
  }
});
// the JavaScript For The DropDown: ends
