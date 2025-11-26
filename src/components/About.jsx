import { useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { Logos10 } from "./LogosSection";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const fusionImages = [
    "img/fusion-2.png",
    "img/fusion-3.png",
    "img/fusion-4.png",
    "img/fusion-5.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % fusionImages.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [fusionImages.length]);

  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=1200 center",
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "85vw",
      height: "85vh",
      borderRadius: "1.5rem",
      ease: "power2.inOut",
      scale: 1.05,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen bg-black">
      {/* Client Logos Section */}
      <div className="relative mb-16 section-padding">
        <div className="">
          <p className="text-h2 text-white/90 text-center mb-12">
            Trusted by Global <span className="text-accent">I</span>nnovators
            and Market Leaders
          </p>

          {/* Client Logos Grid */}
          <Logos10 />
        </div>
      </div>

      {/* Services Section */}
      <div className="relative mb-16 section-padding">
        <div className="container-grid text-center">
          <AnimatedTitle
            title="One Partner, Infinite Possibilities"
            containerClass="mt-5  text-white text-center"
          />

          <div className="max-w-4xl mx-auto mt-8">
            <p className="text-balance text-justify text-white/80 text-lg leading-relaxed">
              At Idea Simplified, we combine strategic clarity with creative
              firepower to deliver experiences that matter, from immersive brand
              launches to high-stakes CXO roundtables and global roadshows. With
              offices in India and the UAE, our work spans across emerging tech,
              energy, built construction, sustainability, and beyond. Whether
              you&apos;re building a brand, launching a product, or creating
              industry-defining conversations.
            </p>
          </div>
        </div>
      </div>

      <div
        className="h-dvh w-screen flex items-center justify-center"
        id="clip"
      >
        <div className="mask-clip-path about-image">
          <div className="absolute left-0 top-0 size-full overflow-hidden">
            {fusionImages.map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`Fusion Tech ${index + 2}`}
                className={`absolute left-0 top-0 size-full object-cover transition-all duration-[1500ms] ease-in-out ${
                  index === currentImageIndex
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-110"
                }`}
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
        </div>
      </div>
    </div>
  );
};

export default About;
