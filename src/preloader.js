import { gsap } from "gsap";
import imagesLoaded from "imagesloaded";

window.addEventListener("DOMContentLoaded", () => {
  let progressText = document.getElementById("progress-text");
  let progressBar = document.getElementById("progress-bar");
  let progressContainer = document.getElementById("progress-container");
  let logoWrapper = document.getElementById("logo-wrapper");
  let logo = document.getElementById("logo");
  let preloader = document.getElementById("preloader");

  let imgLoad = imagesLoaded(document.querySelector("body"));
  let total = imgLoad.images.length;
  let loadedCount = 0;

  imgLoad.on("progress", () => {
    loadedCount++;
    let progress = Math.round((loadedCount / total) * 100);

    gsap.to(progressBar, {
      width: progress + "%",
      duration: 0.3,
      ease: "power2.out",
    });
    progressText.textContent = progress + "%";
  });

  imgLoad.on("done", () => {
    gsap.to(progressContainer, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(".preloader-half.top", {
          y: "-100%",
          duration: 1,
          ease: "power4.inOut",
        });

        gsap.to(".preloader-half.bottom", {
          y: "100%",
          duration: 1,
          ease: "power4.inOut",
          onComplete: () => {
            logoWrapper.style.display = "flex";
            logoWrapper.style.pointerEvents = "auto";

            gsap.fromTo(
              logoWrapper,
              { opacity: 0, scale: 0.8 },
              {
                opacity: 1,
                scale: 1,
                duration: 0.4,
                ease: "power3.out",
                onComplete: () => {
                  let tl = gsap.timeline({
                    delay: 0.2,
                    onComplete: () => {
                      gsap.to(logoWrapper, {
                        opacity: 0,
                        duration: 0.8,
                        delay: 0.5,
                        ease: "power3.inOut",
                        onComplete: () => {
                          logoWrapper.style.display = "none";
                          preloader.style.display = "none";
                          document.body.classList.remove("overflow-hidden");

                          // 🚀 Trigger event setelah preload selesai
                          document.dispatchEvent(new Event("preloadComplete"));
                        },
                      });
                    },
                  });

                  tl.to(logo, {
                    scale: 1.3,
                    rotation: -180,
                    duration: 0.8,
                    ease: "power2.out",
                  });

                  tl.to(logo, {
                    scale: 1,
                    rotation: -360,
                    duration: 0.8,
                    ease: "power2.inOut",
                  });
                },
              }
            );
          },
        });
      },
    });
  });
});
