var menuButton = document.querySelector(".menu-button");
var menuLists = document.querySelectorAll(".main-nav__list");
var modal = document.querySelector(".modal-size");
var modalOpen = document.querySelector(".popular-good__button");
var modalClose = document.querySelector(".modal-size__button");
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

modalOpen.addEventListener("click", function(evt){
  evt.preventDefault();
  modal.classList.add("modal-size--open");
})

modalClose.addEventListener("click", function(){
  modal.classList.remove("modal-size--open");
})
