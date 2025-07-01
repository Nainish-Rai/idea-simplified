import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import { useEffect, useRef, useState } from "react";

import Button from "./Button";
import VideoPreview from "./VideoPreview";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);

  const [loading, setLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

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
      },
    });
  });

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden bg-black">
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
        className="relative z-10 h-dvh w-screen overflow-hidden bg-black border border-white/10"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-2xl ">
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

        <h1 className="hero-heading absolute bottom-8 right-8 z-40 text-white/90">
          IDEA SIMPLIFIED
        </h1>
        <div className="absolute bottom-10 left-8 z-50 ">
          <p className=" mb-8 ml-2 max-w-xl text-white/90">
            We are the award-winning experiential events and brand consulting
            firm that transforms your vision from ideation to flawless
            completion. Your brand, amplified. Your event, unforgettable.
          </p>
          <div className="flex flex-wrap gap-6">
            <Button
              id="schedule-call"
              title="Schedule a  Call"
              // leftIcon={<TiLocationArrow />}
              containerClass="bg-white/10 text-white hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/50 px-8 py-4 rounded-full font-medium"
            />
            <Button
              id="see-work"
              title="See Our Work"
              containerClass="bg-transparent border border-white/30 text-black hover:bg-white/10 hover:border-white/50 hover:text-white transition-all duration-300 px-8 py-4 rounded-full font-medium backdrop-blur-sm"
            />
          </div>
        </div>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="container-grid mt-24 md:mt-32">
            {/* <h1 className="hero-heading text-white mb-8 max-w-5xl">
              From Complex <span className="text-accent">I</span>dea to <br />
              Unforgettable <span className="text-accent">I</span>mpact
            </h1> */}
          </div>
        </div>
      </div>

      <h1 className="hero-heading absolute bottom-8 right-8 text-white/20 pointer-events-none">
        IDEA SIMPLIFIED
      </h1>
    </div>
  );
};

export default Hero;
