document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.getElementById("burgerMenu");
  const navLinks = document.getElementById("navLinks");

  if (burgerMenu && navLinks) {
    burgerMenu.addEventListener("click", function () {
      navLinks.classList.toggle("active");
      burgerMenu.classList.toggle("toggle");
    });
  } else {
    console.error("Burger menu or navigation links not found in the DOM");
  }
});
