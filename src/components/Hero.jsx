import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";

import Button from "./Button";
import VideoPreview from "./VideoPreview";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);

  const [loading, setLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);
  const [introComplete, setIntroComplete] = useState(false);

  const totalVideos = 4;
  const nextVdRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedVideos === totalVideos - 1) {
      setLoading(false);
    }
  }, [loadedVideos]);

  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
  };

  // Premium intro animation
  useGSAP(() => {
    if (!loading && !introComplete) {
      const tl = gsap.timeline({
        onComplete: () => setIntroComplete(true),
      });

      // Initial setup - hide all content
      gsap.set(
        [
          "[data-hero-title]",
          "[data-hero-description]",
          "[data-hero-buttons]",
          "[data-video-preview]",
        ],
        {
          opacity: 0,
          y: 100,
        }
      );

      gsap.set("[data-hero-title-bg]", {
        opacity: 0,
        y: 50,
        scale: 0.8,
      });

      gsap.set("#video-frame", {
        scale: 1.1,
        opacity: 0,
      });

      // Set initial overlay states for modern transition
      gsap.set("[data-overlay-1]", {
        scaleY: 1,
        transformOrigin: "top center",
      });
      gsap.set("[data-overlay-2]", {
        scaleY: 1,
        transformOrigin: "center center",
      });
      gsap.set("[data-overlay-3]", {
        scaleY: 1,
        transformOrigin: "bottom center",
      });

      // Modern premium overlay exit with scale and fade
      tl.to("[data-overlay-1]", {
        scaleY: 0,
        opacity: 0,
        duration: 1.4,
        ease: "power4.inOut",
      })
        .to(
          "[data-overlay-2]",
          {
            scaleY: 0,
            opacity: 0,
            duration: 1.2,
            ease: "power4.inOut",
          },
          "-=1.2"
        )
        .to(
          "[data-overlay-3]",
          {
            scaleY: 0,
            opacity: 0,
            duration: 1.0,
            ease: "power4.inOut",
          },
          "-=1.0"
        )

        // Add a subtle flash effect
        .to(
          "#video-frame",
          {
            opacity: 0.3,
            duration: 0.1,
            ease: "none",
          },
          "-=0.5"
        )

        // Animate video frame in with modern easing
        .to(
          "#video-frame",
          {
            scale: 1,
            opacity: 1,
            duration: 1.8,
            ease: "power4.out",
          },
          "-=0.4"
        )

        // Animate content in with premium stagger
        .to(
          "[data-hero-title-bg]",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.4,
            ease: "power4.out",
          },
          "-=1.0"
        )
        .to(
          "[data-hero-title]",
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power4.out",
          },
          "-=0.8"
        )
        .to(
          "[data-hero-description]",
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            ease: "power4.out",
          },
          "-=0.8"
        )
        .to(
          "[data-hero-buttons]",
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            ease: "power4.out",
          },
          "-=0.6"
        )
        .to(
          "[data-video-preview]",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "back.out(1.7)",
          },
          "-=0.8"
        );
    }
  }, [loading]);

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVdRef.current.play(),
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    {
      dependencies: [currentIndex],
      revertOnUpdate: true,
    }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(8% 0, 84% 0, 92% 88%, 0 96%)",
      borderRadius: "0% 0% 32% 8%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
        refreshPriority: -1, // Ensure this updates after Lenis
      },
    });
  });

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden bg-black">
      {/* Premium Intro Overlays */}
      {!introComplete && (
        <>
          <div
            data-overlay-1
            className="fixed inset-0 z-[200] bg-gradient-to-br from-black via-gray-900 to-black"
          />
          <div
            data-overlay-2
            className="fixed inset-0 z-[199] bg-gradient-to-tr from-black/90 via-gray-800/90 to-black/90"
          />
          <div
            data-overlay-3
            className="fixed inset-0 z-[198] bg-gradient-to-bl from-black/80 via-gray-700/80 to-black/80"
          />
        </>
      )}

      {loading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-black">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden border border-white/10 bg-black"
      >
        <div>
          <div
            data-video-preview
            className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-2xl"
          >
            <VideoPreview>
              <div
                onClick={handleMiniVdClick}
                className="origin-center scale-50 opacity-0 transition-all duration-500 ease-out hover:scale-100 hover:opacity-100"
              >
                <video
                  ref={nextVdRef}
                  src={getVideoSrc((currentIndex % totalVideos) + 1)}
                  loop
                  muted
                  id="current-video"
                  className="size-64 origin-center scale-150 object-cover object-center"
                  onLoadedData={handleVideoLoad}
                />
              </div>
            </VideoPreview>
          </div>

          <video
            ref={nextVdRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
          <video
            src={getVideoSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* <h1
          data-hero-title-bg
          className="hero-heading absolute bottom-8 right-8 pointer-events-none text-white/20"
        >
          IDEA SIMPLIFIED
        </h1> */}

        <h1
          data-hero-title
          className="hero-heading absolute bottom-1/2 lg:bottom-8 max-sm:text-4xl max-sm:left-6 max-sm:ml-2 lg:right-8 z-50 text-white/90"
        >
          IDEA SIMPLIFIED
        </h1>

        <div
          data-hero-content
          className="absolute bottom-12 lg:bottom-10 left-8 z-50"
        >
          <p
            data-hero-description
            className="mb-8 lg:ml-2 max-w-xl text-white/90"
          >
            A collective of strategists, storytellers, designers, and event
            innovators — we turn vision into impact, fast.
          </p>
          <div data-hero-buttons className="flex flex-wrap gap-6">
            <a href="https://calendly.com/hello-ideasimplified/30min">
              <Button
                id="schedule-call"
                title="Let’s Collaborate"
                containerClass="bg-white/10 text-white hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/50 px-8 py-4 rounded-full font-medium"
              />
            </a>
            <a href="/work">
              <Button
                id="see-work"
                title="See Our Work"
                containerClass="bg-transparent border border-white/30  hover:bg-white/10 hover:border-white/50 hover:text-white transition-all duration-300 px-8 py-4 rounded-full font-medium backdrop-blur-sm"
              />
            </a>
          </div>
        </div>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="container-grid mt-24 md:mt-32"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
