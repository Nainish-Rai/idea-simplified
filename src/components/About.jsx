import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { Logos10 } from "./LogosSection";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen bg-black">
      {/* Client Logos Section */}
      <div className="relative mb-16 section-padding">
        <div className="container-grid">
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
            <p className="text-balance text-white/80 text-lg leading-relaxed">
              At Idea Simplified, we combine strategic clarity with creative
              firepower to deliver experiences that matter — from immersive
              brand launches to high-stakes CXO roundtables and global
              roadshows. With offices in India and the UAE, our work spans
              across fintech, energy, healthcare, and beyond. <br /> Whether
              you're building a brand, launching a product, or creating
              industry-defining conversations.
            </p>
          </div>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/fusion.jpg"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
        </div>
      </div>
    </div>
  );
};

export default About;
