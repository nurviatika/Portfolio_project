import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function animateAbout() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#aboutMe-section",
      start: "top 70%",
      toggleActions: "play none none none",
    },
  });

  tl.from("#aboutMe-section h3 span", {
    y: 40,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
    stagger: 0.2,
  }, "-=0.2"
);
  //   tl.from("#aboutMe-section .about-next", {
  //   y: 20,
  //   opacity: 0,
  //   duration: 0.5,
  //   ease: "power2.out",
  //   stagger: 0.5,
  // });

  tl.from("#aboutMe-section p", {
    y: 20,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
  }, "-=0.2"
);

  tl.from("#aboutMe-section button", {
    y: 30,
    opacity: 0,
    duration: 0.4,
    ease: "power2.out",
  }, "-=0.2"
);
  
  tl.from("#aboutMe-section img[src*='image-hero-about.png']", {
    x: 60,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
    // rotate: -10,
  }, "-=0.3"
);

tl.from("#aboutMe-section .logo  ", {
    x: 40,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
    stagger: 0.2,
  }, "-=0.2"
);

  tl.from(
    "#aboutMe-section  > div:last-child > div",
    {
      x: 30,
      opacity: 0,
      // scale: 0.2,
      duration: 0.4,
      ease: "back.out(1.7)",
      stagger: 0.2,
    },
    "-=0.2"
  );
}

function animateCountry() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#Country-section",
      start: "top 70%",
      toggleActions: "play none none none"
    },
  });

  tl.from("Country-section")
}


document.addEventListener("preloadComplete", () => {
  if (document.querySelector("#aboutMe-section")) animateAbout();
  if (document.querySelector("#Country-section")) animateCountry();
});
