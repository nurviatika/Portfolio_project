import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function animateHero() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#hero-p",
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });

  tl.from("#hero-p", {
    y: 50,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
  });

  tl.from(
    "h1 span",
    {
      y: 80,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.2,
    },
    "-=0.4"
  );

  tl.from(
    ".hero-desc p",
    {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    },
    "-=0.3"
  );

  tl.from(
    ".hero-desc button",
    {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    },
    "-=0.2"
  );

  tl.from(
    ".flex.md\\:justify-between > div:first-child",
    {
      x: -80,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    },
    "-=0.2"
  );

  tl.from(
    ".flex.md\\:justify-between > div:last-child > div",
    {
      x: 80,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.2,
    },
    "-=0.6"
  );
}

function animateCards() {
  if (window.innerWidth < 1024) return;

  const cards = document.querySelectorAll("#card-container .card");
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#card-container",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.set(cards, {
    position: "absolute",
    left: "50%",
    top: "50%",
    xPercent: -50,
    yPercent: -50,
    opacity: 1,
    scale: 0.9,
    rotate: (i) => (i - 1) * 6,
    zIndex: (i, _, arr) => arr.length - i,
  });

  const spacing = 420;
  const startOffset = -(spacing * (cards.length - 1)) / 2;

  cards.forEach((card, i) => {
    tl.to(
      card,
      {
        duration: 1,
        x: startOffset + i * spacing,
        y: 0,
        scale: 1,
        rotate: 0,
        ease: "power3.out",
      },
      i * 0.3
    );
  });

  tl.to(
    cards,
    {
      duration: 0.4,
      opacity: 1,
      ease: "power3.inOut",
    },
    "+=0.5"
  );

  tl.from(
    ".flex.justify-center button",
    {
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
      ease: "back.out(1.7)",
    },
    "+=0.2"
  );
}

function animateCounters() {
  const counters = [
    { selector: ".element1 h3", end: 400, suffix: "+" },
    { selector: "section div:nth-child(2) h3", end: 22, suffix: "+" },
    { selector: "section div:nth-child(3) h3", end: 99, suffix: "%" },
  ];

  counters.forEach((counter) => {
    let obj = { val: 0 };
    gsap.to(obj, {
      val: counter.end,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: counter.selector,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      onUpdate: () => {
        document.querySelector(counter.selector).innerText =
          Math.floor(obj.val) + counter.suffix;
      },
    });
  });
}

function animateAboutMe() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#about-me",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  tl.from("#about-me p.text-sm", {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
  });

  tl.from(
    "#about-me h2 span",
    {
      y: 60,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.15,
    },
    "-=0.4"
  );

  tl.from(
    "#about-me > div:nth-child(2) > div:first-child p",
    {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    },
    "-=0.3"
  );

  tl.from(
    "#about-me .flex-col.gap-8 + .flex > div",
    {
      y: 50,
      opacity: 0,
      duration: 0.9,
      ease: "power2.out",
      stagger: 0.2,
    },
    "-=0.2"
  );

  tl.from(
    "#about-me .flex.flex-wrap button",
    {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.1,
    },
    "-=0.2"
  );

  tl.from(
    "#about-me > div:last-child img",
    {
      x: 80,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    },
    "-=0.4"
  );
}

function animateServices() {
  const tlHead = gsap.timeline({
    scrollTrigger: {
      trigger: "#services-section",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  tlHead
    .from("#services-section p.text-sm", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    })
    .from(
      "#services-section .text-center p.lg\\:text\\[60px\\]",
      {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.4"
    )
    .from(
      "#services-section .text-center p.font-normal",
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.3"
    );

  const cards = document.querySelectorAll(
    "#services-section > div.flex.flex-col.pt-\\[60px\\] > div"
  );

  cards.forEach((card) => {
    const text = card.querySelector(".flex-col.max-w-\\[495px\\]");
    const img = card.querySelector("img");

    gsap
      .timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      })
      .from(card, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
      .from(
        text,
        {
          x: -60,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .from(
        img,
        {
          x: 60,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5"
      );
  });
}

function animateLatestWork() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".flex.lg\\:flex-row.flex-col.md\\:pb-\\[80px\\]",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  tl.from(".flex.lg\\:flex-row.flex-col.md\\:pb-\\[80px\\] p.text-sm", {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
  });

  tl.from(
    ".flex.lg\\:flex-row.flex-col.md\\:pb-\\[80px\\] p.font-medium span",
    {
      y: 60,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2,
    },
    "-=0.3"
  );

  tl.from(
    ".flex.lg\\:flex-row.flex-col.md\\:pb-\\[80px\\] > p.text-base",
    {
      x: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    },
    "-=0.4"
  );
}

function animateFooter() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "footer",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  tl.from("footer .bg-white.rounded-full", {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
  });

  tl.from(
    "footer p.border-b-white",
    {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    },
    "-=0.4"
  );

  tl.from(
    "footer .flex.md\\:pt-2 p",
    {
      y: 30,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.1,
    },
    "-=0.3"
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
    "-=0.3"
  );

  tl.from(
    "footer .lg\\:max-w-\\[329px\\] .flex-col.gap-6 p",
    {
      x: -30,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.1,
    },
    "-=0.2"
  );

  tl.from(
    "footer .flex-col.gap-4 > p",
    {
      y: 25,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    },
    "-=0.2"
  );

  tl.from("footer .footer-btn", {
    y: 20,
    // opacity: 0,
    duration: 0.4,
    ease: "power2.out",
  });

  tl.from(
    "footer .border-t > *",
    {
      y: 20,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.1,
    },
    "-=0.2"
  );

  tl.from(
    "footer img",
    {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    },
    "-=0.3"
  );
}

document.addEventListener("preloadComplete", () => {
  if (document.querySelector("#hero-p")) animateHero();
  if (document.querySelector("#card-container")) animateCards();
  if (document.querySelector(".element1 h3")) animateCounters();
  if (document.querySelector("#about-me")) animateAboutMe();
  if (document.querySelector("#services-section")) animateServices();
  if (document.querySelector(".flex.lg\\:flex-row.flex-col.md\\:pb-\\[80px\\]"))
    animateLatestWork();
  if (document.querySelector("footer")) animateFooter();
  ScrollTrigger.refresh();
});
