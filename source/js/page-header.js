var menuButton = document.querySelector(".menu-button");
var menuLists = document.querySelectorAll(".main-nav__list");
var isMenuOpen = true;

for (var i = 0; i < menuLists.length; i++) {
  menuButton.classList.remove("menu-button--open");
  menuLists[i].classList.remove("main-nav__list--open");
  menuButton.classList.add("menu-button--close");
  menuLists[i].classList.add("main-nav__list--close");
  isMenuOpen = false;
}

menuButton.addEventListener("click", function(){
  if (!isMenuOpen) {
    for (var i = 0; i < menuLists.length; i++) {
      menuButton.classList.remove("menu-button--close");
      menuLists[i].classList.remove("main-nav__list--close");
      menuButton.classList.add("menu-button--open");
      menuLists[i].classList.add("main-nav__list--open");
    }
    isMenuOpen = true;
  }

  else if (isMenuOpen) {
    for (var i = 0; i < menuLists.length; i++) {
      menuButton.classList.remove("menu-button--open");
      menuLists[i].classList.remove("main-nav__list--open");
      menuButton.classList.add("menu-button--close");
      menuLists[i].classList.add("main-nav__list--close");
    }
    isMenuOpen = false;
  }
})
