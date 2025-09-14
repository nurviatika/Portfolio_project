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

    menuToggle
      .querySelector(".line1")
      .classList.add("rotate-45", "translate-y-2");
    menuToggle.querySelector(".line2").classList.add("opacity-0");
    menuToggle
      .querySelector(".line3")
      .classList.add("-rotate-45", "-translate-y-2");
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove("translate-x-0");
    mobileMenu.classList.add("translate-x-full");

    menuToggle
      .querySelector(".line1")
      .classList.remove("rotate-45", "translate-y-2");
    menuToggle.querySelector(".line2").classList.remove("opacity-0");
    menuToggle
      .querySelector(".line3")
      .classList.remove("-rotate-45", "-translate-y-2");
  }

  window.addEventListener("scroll", handleNavbarScroll);
  menuToggle.addEventListener("click", openMenu);
  closeMenu.addEventListener("click", closeMobileMenu);

  const swiper = new Swiper(".testimonial-swiper", {
    slidesPerView: "auto",
    spaceBetween: 15,
    loop: true,
    speed: 1000,
    slidePerGroup: 3,
    breakpoints: {
      1440: { slidePerGroup: 3 },
      1279: { slidePerGroup: 2 },
      430: { slidePerGroup: 1 },
    },
  });

  const nextSlideBtn = document.querySelector(".next-slide");
  const prevSlideBtn = document.querySelector(".prev-slide");
  if (nextSlideBtn) {
    nextSlideBtn.addEventListener("click", () => swiper.slideNext());
  }
  if (prevSlideBtn) {
    prevSlideBtn.addEventListener("click", () => swiper.slidePrev());
  }
});
