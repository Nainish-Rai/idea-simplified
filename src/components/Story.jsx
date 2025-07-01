import gsap from "gsap";
import { useRef } from "react";

import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";

const FloatingImage = () => {
  const frameRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  const methodSteps = [
    {
      number: "01",
      title: "Deep Dive Discovery",
      description:
        "It all starts by listening. We immerse ourselves in your world—your vision, your challenges, your audience—to understand the core of what you want to achieve.",
    },
    {
      number: "02",
      title: "Bespoke Strategy",
      description:
        'There\'s no "one-size-fits-all." We craft a custom-built strategy and creative concept that is ambitious, innovative, and perfectly aligned with your business goals.',
    },
    {
      number: "03",
      title: "Flawless Execution",
      description:
        "This is where vision becomes reality. Our team of maniacal planners, designers, and strategists manage every detail, ensuring a seamless, on-brand, and on-budget delivery.",
    },
    {
      number: "04",
      title: "Measurable Impact",
      description:
        "We're obsessed with results. We track, analyze, and report on key metrics, providing you with a clear understanding of your return on investment and the success of our partnership.",
    },
  ];

  return (
    <div id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px] text-center mb-8">
          Your Blueprint for Success
        </p>

        <div className="relative size-full max-w-6xl px-5">
          <AnimatedTitle
            title="The 'Idea <b>S</b>implified' <br /> <b>M</b>ethod"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10 text-center"
          />

          <div className="mt-8 mb-16 text-center">
            <p className="text-blue-300 text-lg">
              Backed by{" "}
              <span className="text-yellow-300 font-bold">20+ years</span> of
              industry experience,
              <span className="text-yellow-300 font-bold">
                {" "}
                100+ successful projects
              </span>
              , and
              <span className="text-yellow-300 font-bold">
                {" "}
                25+ global brands
              </span>
              .
            </p>
          </div>

          {/* Method Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            {methodSteps.map((step, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-black font-bold text-xl">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-blue-200 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="story-img-container mt-16">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  src="/img/entrance.webp"
                  alt="Our process visualization"
                  className="object-contain"
                />
              </div>
            </div>

            <svg
              className="invisible absolute size-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="flt_tag">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="flt_tag"
                  />
                  <feComposite
                    in="SourceGraphic"
                    in2="flt_tag"
                    operator="atop"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>

        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start max-w-md">
            <div className="bg-gradient-to-r from-violet-500 to-purple-600 p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-white mb-4">
                What Our Partners Say
              </h4>
              <blockquote className="text-blue-100 italic mb-4">
                "Idea Simplified didn't just execute our vision, they elevated
                it. The event was the most talked-about in our industry, and the
                ROI was immediate and substantial."
              </blockquote>
              <cite className="text-yellow-300 text-sm">
                — Marketing Director, Fortune 500 Company
              </cite>
            </div>

            <Button
              id="method-btn"
              title="Start Your Journey"
              containerClass="mt-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingImage;
