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

function animateLearning() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#learning-about",
      start: "top 50%",
      toggleActions: "play none none none",
      once: true,
    },
  });

  tl.from("#learning-about h3 ", {
    x: -30,
    bottom: "50%",
    opacity: 0,
    duration: 0.9,
    ease: "power2.out",
  });

  tl.from(
    "#learning-about .sub-text",
    {
      x: -30,
      opacity: 0,
      duration: 0.9,
      ease: "power2.out",
    },
    "<0.4"
  );

  tl.from(
    "#learning-about .vid-card1",
    {
      y: 30,
      opacity: 0,
      duration: 0.9,
      ease: "power2.out",
      stagger: 0.2,
    },
    "<0.4"
  );
  tl.from(
    "#learning-about .vid-card2",
    {
      y: -30,
      opacity: 0,
      duration: 0.9,
      ease: "power2.out",
      stagger: 0.2,
    },
    "<0.4"
  );
  tl.from(
    "#learning-about .vid-card3",
    {
      y: 30,
      opacity: 0,
      duration: 0.9,
      ease: "power2.out",
      stagger: 0.2,
    },
    "<0.4"
  );

  // tl.from(
  //   "#learning-about p:not(.sub-text)",
  //   {
  //     x: -30,
  //     opacity: 0,
  //     duration: 0.5,
  //     ease: "power1.out",
  //     stagger: 0.2,
  //   },
  //   "<0.5"
  // );
}

function animateJoin() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#join-class",
      start: "top 60%",
      toggleActions: "play none none none",
    },
  });

  tl.from("#join-class h3.font-satoshi ", {
    x: -30,
    opacity: 0,
    duration: 0.9,
    ease: "power2.out",
  });

  tl.from(
    "#join-class p.font-plusjakarta ",
    {
      x: -20,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
    },
    "<0.4"
  );

  document.querySelectorAll("#join-class .counter").forEach((el) => {
    let obj = { val: 0 };
    let end = parseInt(el.dataset.end, 10);
    let suffix = el.dataset.suffix || "";

    tl.from(
      el,
      {
        opacity: 0,
        duration: 0.3,
      },
      "<0.2"
    );

    tl.to(
      obj,
      {
        val: end,
        duration: 2,
        ease: "power3.out",
        snap: { val: 1 },
        onUpdate: () => {
          el.textContent = obj.val + suffix;
        },
      },
      "<"
    );
  });

  tl.from(
    "#join-class p.text-xs ",
    {
      y: 20,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
    },
    "<0.4"
  );

  tl.from(
    "#join-class button ",
    {
      x: 20,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
    },
    "<0.4"
  );
}

function animateTestimonial() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#testimonial-section",
      start: "top 60%",
      toggleActions: "play none none none",
    },
  });

  tl.from("#testimonial-section p.text-sm", {
    x: -40,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
  });

  tl.from(
    "#testimonial-section p.font-medium span",
    {
      x: -50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.2,
    },
    "<0.3"
  );

  tl.from(
    "#testimonial-section p.text-base",
    {
      x: -40,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    },
    "<0.3"
  );
  tl.from(
    "#testimonial-section .card-button",
    {
      x: -40,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.1,
    },
    "<0.3"
  );

  tl.from(
    "#testimonial-section .swiper-slide",
    {
      y: 50,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.1,
    },
    "<0.3"
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
  if (document.querySelector("#learning-about")) animateLearning();
  if (document.querySelector("#join-class")) animateJoin();
  if (document.querySelector("#testimonial-section")) {
    animateTestimonial();
  }
  if (document.querySelector("footer")) animateFooter();
  ScrollTrigger.refresh();
});
