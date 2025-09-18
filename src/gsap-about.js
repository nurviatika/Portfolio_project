import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function animateHero() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#hero-p",
      start: "top 30%",
      toggleActions: "play none none none",
    },
  });

  tl.from("#hero-p", {
    y: 50,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
  });

  tl.from(
    "h1 span",
    {
      y: 80,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.1,
    },
    "-=0.1"
  );

  tl.from(
    ".hero-desc p",
    {
      y: 20,
      opacity: 0,
      duration: 0.5,
      ease: "power1.out",
    },
    "-=0.2"
  );
}

function animateAbout() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#aboutMe-section",
      start: "top 55%",
      toggleActions: "play none none none",
    },
  });

  tl.from("#aboutMe-section h3 span", {
    x: -40,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
    stagger: 0.1,
  });

  tl.from(
    "#aboutMe-section p",
    {
      x: -20,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    },
    "<0.4"
  );

  tl.from(
    "#aboutMe-section button",
    {
      x: -30,
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
    },
    "<0.3"
  );

  // tl.from(
  //   "#aboutMe-section img[src*='image-hero-about.png']",
  //   {
  //     y: 60,
  //     opacity: 0,
  //     duration: 0.6,
  //     ease: "power2.out",
  //     // rotate: -10,
  //   },
  //   "<0.3"
  // );
  tl.from(
    "#aboutMe-section .image-about",
    {
      y: 60,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      // rotate: -10,
    },
    "<0.3"
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
    "<0.2"
  );

  tl.from(
    "#aboutMe-section .logo  ",
    {
      x: 40,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.1,
    },
    "<0.2"
  );
}

function animateCountry() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#Country-section",
      start: "top 60%",
      toggleActions: "play none none none",
    },
  });

  tl.from("#Country-section p", {
    y: 30,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
    stagger: 0.2,
  });
}

function animateschedule() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#schedule-section",
      start: "top 50%",
      toggleActions: "play none none none",
    },
  });

  tl.from("#schedule-section h3", {
    x: -30,
    opacity: 0,
    duration: 0.4,
    ease: "power2.out",
  });

  tl.from(
    "#schedule-section p.font-normal",
    {
      x: -30,
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
    },
    "<0.4"
  );
  tl.from(
    "#schedule-section .input-name",
    {
      x: -30,
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
      stagger: 0.1,
    },
    "<0.3"
  );
  tl.from(
    "#schedule-section .company-name",
    {
      x: -30,
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
      stagger: 0.1,
    },
    "<0.2"
  );
  tl.from(
    "#schedule-section p.text-sm",
    {
      x: -30,
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
    },
    "<0.2"
  );
  tl.from(
    "#schedule-section .button-list",
    {
      x: -30,
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
      stagger: 0.2,
    },
    "<0.2"
  );
  tl.from(
    "#schedule-section .ide-design",
    {
      x: -30,
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
    },
    "<0.1"
  );
  tl.from(
    "#schedule-section .button-get",
    {
      x: -30,
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
    },
    "<0.1"
  );
}

function animateFooter() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "footer",
      start: "top 55%",
      toggleActions: "play none none none",
    },
  });

  tl.from("footer .bg-white.rounded-full.items-center", {
    x: -40,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
  });

  tl.from(
    "footer p.border-b-white",
    {
      x: -40,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    },
    "<0.3"
  );

  tl.from(
    "footer .flex.md\\:pt-2 p",
    {
      x: -30,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.1,
    },
    "<0.3"
  );

  tl.from(
    "footer .flex.gap-5 > div",
    {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      ease: "back.out(1.7)",
      stagger: 0.1,
    },
    "<0.2"
  );

  tl.from(
    "footer .lg\\:max-w-\\[329px\\] .flex-col.gap-6 p",
    {
      y: 20,
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
      stagger: 0.1,
    },
    "<0.2"
  );

  tl.from(
    "footer .flex-col.gap-4 > p",
    {
      x: 25,
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
    },
    "<0.2"
  );

  tl.from(
    "footer .footer-btn",
    {
      x: 25,
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
    },
    "<0.2"
  );

  tl.from(
    "footer .footer-text",
    {
      y: 20,
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
      stagger: 0.1,
    },
    "<0.2"
  );

  tl.from(
    "footer img",
    {
      y: 50,
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
    },
    "<0.3"
  );
}

document.addEventListener("preloadComplete", () => {
  if (document.querySelector("#hero-p")) animateHero();
  if (document.querySelector("#aboutMe-section")) animateAbout();
  if (document.querySelector("#Country-section")) animateCountry();
  if (document.querySelector("#schedule-section")) animateschedule();
  if (document.querySelector("footer")) animateFooter();
  ScrollTrigger.refresh();
});
