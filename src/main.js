import "./style.css";
import { setupCounter } from "./counter.js";

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const menuToggle = document.getElementById("menu-toggle");
  const closeMenu = document.getElementById("close-menu");
  const mobileMenu = document.getElementById("mobile-menu");

  let lastScrollTop = 0;
  function handleNavbarScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      navbar.style.transform = "translateY(-180%)";
      navbar.style.transition = "transform 0.3s ease-in-out";
    } else {
      navbar.style.transform = "translateY(0)";
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }
  function openMenu() {
    mobileMenu.classList.remove("translate-x-full");
    mobileMenu.classList.add("translate-x-0");
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove("translate-x-0");
    mobileMenu.classList.add("translate-x-full");
  }
  window.addEventListener("scroll", handleNavbarScroll);
  menuToggle.addEventListener("click", openMenu);
  closeMenu.addEventListener("click", closeMobileMenu);
});

setupCounter(document.querySelector("#counter"));
