const navbar = document.querySelector("nav");

// mobile nav
const navmenu = document.querySelector(".nav_menu");
const open_menu_btn = document.getElementById("open_menu_btn");
const close_menu_btn = document.getElementById("close_menu_btn");

// faq
const faqs_title = document.querySelectorAll(".faq_title");

// change navbar style on scroll
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scroll_active", window.scrollY > 50);
});

// show/hide faq anwaser
faqs_title.forEach((item) => {
  item.addEventListener("click", () => {
    item.nextElementSibling.classList.toggle("open");

    // change icon
    const faq_icon = item.querySelector(".faq_icon i");
    if (faq_icon.className === "fa-solid fa-plus") {
      faq_icon.className = "fa-solid fa-minus";
    } else {
      faq_icon.className = "fa-solid fa-plus";
    }
  });
});

// SHOW/HIDE NAV MENU
open_menu_btn.onclick = () => {
  navmenu.style.display = "block";
  open_menu_btn.style.display = "none";
  close_menu_btn.style.display = "block";
};
// SHOW/HIDE NAV MENU
close_menu_btn.onclick = () => {
  navmenu.style.display = "none";
  open_menu_btn.style.display = "block";
  close_menu_btn.style.display = "none";
};
