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

  gsap.to("#ball", {
    y: -50,
    duration: 1,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1,
  });

  imgLoad.on("progress", () => {
    loadedCount++;
    let progress = Math.round((loadedCount / total) * 100);

    gsap.to(progressBar, {
      width: progress + "%",
      duration: 0.8,
      ease: "power3.out",
    });
    progressText.textContent = progress + "%";
  });

  imgLoad.on("done", () => {
    gsap.to("#ball", {
      y: -500,
      opacity: 0,
      duration: 1,
      ease: "back.in(1.7)",
    });

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
                duration: 0.5,
                ease: "power3.out",
                onComplete: () => {
                  let tl = gsap.timeline({
                    delay: 0.2,
                    onComplete: () => {
                      gsap.to(logoWrapper, {
                        y: "-120%",
                        opacity: 0,
                        duration: 0.8,
                        delay: 0.5,
                        ease: "back.in(1.4)",
                        onComplete: () => {
                          logoWrapper.style.display = "none";
                          preloader.style.display = "none";
                          document.body.classList.remove("overflow-hidden");
                          document.dispatchEvent(new Event("preloadComplete"));
                        },
                      });
                    },
                  });

                  tl.to(logo, {
                    scale: 1.3,
                    rotation: -180,
                    duration: 0.6,
                    ease: "power2.out",
                  });

                  tl.to(logo, {
                    scale: 1,
                    rotation: -360,
                    duration: 0.6,
                    ease: "power2.inOut",
                  });

                  tl.to(
                    "#text-ewangga",
                    {
                      opacity: 1,
                      y: 0,
                      duration: 0.6,
                      ease: "power3.out",
                    },
                    "-=0.3"
                  );
                },
              }
            );
          },
        });
      },
    });
  });
});
