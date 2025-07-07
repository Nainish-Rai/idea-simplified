import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

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
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {[1, 2, 3, 4, 5, 6].map((logo) => (
              <div key={logo} className="group">
                <div className="w-32 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-sm text-white/40 hover:bg-white/10 hover:border-white/20 hover:text-white/60 transition-all duration-300 backdrop-blur-sm">
                  Logo {logo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative mb-16 section-padding">
        <div className="container-grid text-center">
          <AnimatedTitle
            title="One Partner, <br /> Infinite <b>P</b>ossibilities"
            containerClass="mt-5 text-white text-center"
          />

          <div className="max-w-3xl mx-auto mt-8">
            <p className="text-body text-white/80 text-lg leading-relaxed">
              We provide two core pillars of service, designed to work
              seamlessly together to build and celebrate your brand with
              precision and impact.
            </p>
          </div>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp"
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
