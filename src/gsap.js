import { gsap } from "gsap";

window.addEventListener("load", () => {
  let progressText = document.getElementById("progress-text");
  let progressBar = document.getElementById("progress-bar");
  gsap.to(progressBar, {
    width: "100%",
    duration: 3,
    ease: "power2.out",
    onUpdate: () => {
      let progress = Math.round(
        (progressBar.offsetWidth / progressBar.parentElement.offsetWidth) * 100
      );
      progressText.textContent = progress + "%";
    },
    onComplete: () => {
      // Geser preloader keluar
      gsap.to("#preloader", {
        y: "-100%",
        duration: 0.8,
        ease: "power4.inOut",
        onComplete: () => {
          document.body.classList.remove("overflow-hidden");

          // Animasi header dan konten masuk
          gsap.to("#header", {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          });
          gsap.to("#content", {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.2,
            ease: "power3.out",
          });
        },
      });
    },
  });
});
