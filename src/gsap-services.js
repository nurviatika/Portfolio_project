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
    "-=0.2"
  );

  tl.from(
    ".hero-desc p",
    {
      y: 20,
      opacity: 0,
      duration: 0.4,
      ease: "power1.out",
    },
    "-=0.1"
  );
}         

function animateServicesNow() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#servicesNow-section",
      start: "top 40%",
      toggleActions: "play none none none",
      // markers: true,
    },
  });

  tl.from(
    "#servicesNow-section .card-one",
    {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    },
    "<0.2"
  );

  document.querySelectorAll("#servicesNow-section .counter").forEach((el) => {
    let obj = { val: 0 };
    let end = parseInt(el.dataset.end, 10);
    let suffix = el.dataset.suffix || "";

    gsap.to(obj, {
      val: end,
      duration: 2,
      ease: "power3.out",
      snap: { val: 1 },
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      onUpdate: () => {
        el.textContent = obj.val + suffix;
      },
    });
  });

  tl.from(
    "#servicesNow-section p.text-xs ",
    {
      y: 20,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
    },
    "<0.4"
  );

  tl.from(
    "#servicesNow-section > div > div:last-child > p",
    {
      y: 30,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
    },
    "<0.2"
  );

  tl.from(
    "#servicesNow-section .font-plusjakarta, #servicesNow-section button",
    {
      x: 30,
      opacity: 0,
      duration: 0.7,
      stagger: 0.2,
      ease: "power2.out",
    },
    "<0.2"
  );
}

function animateServices() {
  const tlHead = gsap.timeline({
    scrollTrigger: {
      trigger: "#services-section",
      start: "top 60%",
      toggleActions: "play none none none",
    },
  });

  tlHead
    .from("#services-section p.text-sm", {
      y: 30,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    })
    .from(
      "#services-section .text-center p.lg\\:text\\[60px\\]",
      {
        y: 50,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
      },
      "<0.3"
    )
    .from(
      "#services-section .text-center p.font-medium",
      {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "<0.2"
    )
    .from(
      "#services-section .text-center p.font-normal",
      {
        y: 30,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      "<0.3"
    );

  const cards = document.querySelectorAll(
    "#services-section > div.flex.flex-col.pt-\\[60px\\] > div"
  );

  cards.forEach((card, index) => {
    const text = card.querySelector(".flex-col.max-w-\\[495px\\]");
    const img = card.querySelector("img");
    const reverseIndex = cards.length - 1 - index;

    let targetScale = 1;
    if (reverseIndex === 1) targetScale = 0.9;
    if (reverseIndex >= 2) targetScale = 0.9;
    const zIndex = index + 1;
    gsap.fromTo(
      card,
      { scale: 1, zIndex: zIndex },
      {
        scale: targetScale,
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      })
      .from(card, {
        y: 60,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      })
      .from(
        text,
        {
          x: -60,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .from(
        img,
        {
          x: 60,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.5"
      );
  });
}

function animateFaq() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#faq-section",
      start: "top 50%",
      toggleActions: "play none none none",
    },
  });

  tl.from("#faq-section .text-faq p", {
    y: 30,
    opacity: 0,
    duration: 0.7,
    stagger: 0.1,
    ease: "power2.out",
  });

  tl.from(
    "#faq-section .card-faq .faq-item",
    {
      x: 40,
      top: "50%",
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out",
    },
    "<0.10"
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
  if (document.querySelector("#servicesNow-section")) animateServicesNow();
  if (document.querySelector("#services-section")) animateServices();
  if (document.querySelector("#faq-section")) animateFaq();
  if (document.querySelector("#testimonial-section")) {
    animateTestimonial();
  }
  if (document.querySelector("footer")) animateFooter();
  ScrollTrigger.refresh();
});
