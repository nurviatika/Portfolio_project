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

function animateDetail() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#testimoni-section",
      start: "top 60%",
      toggleActions: "play none none none",
    },
  });

  tl.from(
    "#testimoni-section .rate-img",
    {
      x: -40,
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
      stagger: 0.2,
    },
    "<0.3"
  );
  tl.from(
    "#testimoni-section h3",
    {
      x: 30,
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
    },
    "<0.3"
  );

  tl.from(
    "#testimoni-section p.font-satoshi",
    {
      x: 30,
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
    },
    "<0.3"
  );
  tl.from(
    "#testimoni-section .rate",
    {
      x: -40,
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
      stagger: 0.2,
    },
    "<0.3"
  );
}

function animatePayment() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#payment-section",
      start: "top 50%",
      toggleActions: "play none none none",
    },
  });

  tl.from("#payment-section h3", {
    x: -30,
    opacity: 0,
    duration: 0.4,
    ease: "power2.out",
  });

  tl.from(
    "#payment-section p.text-base",
    {
      x: -30,
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
    },
    "<0.4"
  );

  tl.from(
    "#payment-section .input-name",
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
    "#payment-section .company-name",
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
    "#payment-section p.text-sm",
    {
      x: -30,
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
    },
    "<0.2"
  );
  tl.from(
    "#payment-section .button-list",
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
    "#payment-section .ide-design ",
    {
      x: -30,
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
    },
    "<0.1"
  );
  tl.from(
    "#payment-section .button-get ",
    {
      x: -30,
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
    },
    "<0.1"
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
  if (document.querySelector("#testimoni-section")) animateDetail();
  if (document.querySelector("#payment-section")) animatePayment();
  if (document.querySelector("#testimonial-section")) {
    animateTestimonial();
  }
  if (document.querySelector("footer")) animateFooter();
  ScrollTrigger.refresh();
});
