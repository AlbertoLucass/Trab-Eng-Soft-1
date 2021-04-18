let toggleMenuState = false;

let toggleSidebar = function() {
  let getSidebar = document.querySelector(".toggle-nav");
  let getSidebarUl = document.querySelector(".toggle-nav ul");

  if (toggleMenuState == false) {
    getSidebar.style.width = "205px";
    getSidebarUl.style.visibility = "visible";
    getSidebarUl.style.opacity = "1";
    toggleMenuState = true;
  } else if (toggleMenuState == true) {
    getSidebar.style.width = "60px";
    getSidebarUl.style.opacity = "0";
    getSidebarUl.style.visibility = "hidden";
    toggleMenuState = false;
  }
}
