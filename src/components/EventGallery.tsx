import { motion } from "framer-motion";

const GalleryEvent = () => {
  return (
    <section className="py-32 z-50 bg-black">
      <div className="relative container mx-auto px-6 max-w-7xl">
        {/* Title Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            From <span className="text-yellow-300">Ideation</span> to Completion{" "}
            <br />
            Our Work in <span className="text-yellow-300">Action</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base  text-balance text-white/80 leading-relaxed max-w-4xl mx-auto"
          >
            We turn complex ideas into measurable impact. Explore how we've
            helped brands connect with their audiences through unified brand,
            design, and event experiences.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-5 gap-4">
          <BlurVignette
            radius="24px"
            inset="10px"
            transitionLength="100px"
            blur="0px"
            className="col-span-2 h-80 rounded-[2.5rem]"
          >
            <img
              width={200}
              height={200}
              className="size-full rounded-[2.5rem] object-cover"
              src="/img/w1.jpg"
              alt="Event Gallery Image 1"
            />
          </BlurVignette>
          <BlurVignette
            radius="24px"
            inset="10px"
            transitionLength="100px"
            blur="15px"
            className="col-span-3 h-80 rounded-[2.5rem]"
          >
            <img
              width={200}
              height={200}
              className="size-full rounded-[2.5rem] object-cover"
              src="/img/w10.jpg"
              alt="Event Gallery Image 2"
            />
          </BlurVignette>
          <BlurVignette
            radius="24px"
            inset="10px"
            transitionLength="100px"
            blur="15px"
            className="col-span-5 h-96 rounded-[2.5rem]"
          >
            <img
              width={200}
              height={200}
              className="size-full rounded-[2.5rem] object-cover"
              src="/img/w2.jpg"
              alt="Event Gallery Image 3"
            />
          </BlurVignette>
          <BlurVignette
            radius="24px"
            inset="10px"
            transitionLength="100px"
            blur="15px"
            className="col-span-2 h-80 rounded-[2.5rem]"
          >
            <img
              width={200}
              height={200}
              className="size-full rounded-[2.5rem] object-cover"
              src="/img/w3.jpg"
              alt="Event Gallery Image 4"
            />
          </BlurVignette>
          <BlurVignette
            radius="24px"
            inset="10px"
            transitionLength="100px"
            blur="15px"
            className="col-span-3 h-80 rounded-[2.5rem]"
          >
            <img
              width={200}
              height={200}
              className="size-full rounded-[2.5rem] object-cover"
              src="/img/w4.jpg"
              alt="Event Gallery Image 5"
            />
          </BlurVignette>

          <BlurVignette
            radius="24px"
            inset="10px"
            transitionLength="100px"
            blur="15px"
            className="col-span-3 h-80 rounded-[2.5rem]"
          >
            <img
              width={200}
              height={200}
              className="size-full rounded-[2.5rem] object-cover"
              src="/img/w6.jpg"
              alt="Stage Setup 1"
            />
          </BlurVignette>
          <BlurVignette
            radius="24px"
            inset="10px"
            transitionLength="100px"
            blur="15px"
            className="col-span-2 h-80 rounded-[2.5rem]"
          >
            <img
              width={200}
              height={200}
              className="size-full rounded-[2.5rem] object-cover"
              src="/img/w7.jpg"
              alt="Stage Setup 2"
            />
          </BlurVignette>
          <BlurVignette
            radius="24px"
            inset="10px"
            transitionLength="100px"
            blur="15px"
            className="col-span-5 h-96 rounded-[2.5rem]"
          >
            <img
              width={200}
              height={200}
              className="size-full rounded-[2.5rem] object-cover"
              src="/img/w8.jpg"
              alt="Stage Setup 3"
            />
          </BlurVignette>
          <BlurVignette
            radius="24px"
            inset="10px"
            transitionLength="100px"
            blur="15px"
            className="col-span-2 h-80 rounded-[2.5rem]"
          >
            <img
              width={200}
              height={200}
              className="size-full rounded-[2.5rem] object-cover"
              src="/img/w9.jpg"
              alt="Stage Setup 4"
            />
          </BlurVignette>
          <BlurVignette
            radius="24px"
            inset="10px"
            transitionLength="100px"
            blur="15px"
            className="col-span-3 h-80 rounded-[2.5rem]"
          >
            <img
              width={200}
              height={200}
              className="size-full rounded-[2.5rem] object-cover transition-all ease-in-out"
              src="/img/w11.jpg"
              alt="Additional Gallery Image"
            />
          </BlurVignette>
        </div>
      </div>
    </section>
  );
};

export { GalleryEvent };

interface BlurVignetteProps {
  children: React.ReactNode;
  className?: string;
  radius?: string;
  inset?: string;
  transitionLength?: string;
  blur?: string;
}

const BlurVignette = ({
  children,
  className = "",
  radius = "24px",
  inset = "16px",
  transitionLength = "32px",
  blur = "21px",
}: BlurVignetteProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
        y: -50,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      viewport={{ once: true, amount: 0.2 }}
      className={`group relative cursor-pointer overflow-hidden ${className}`}
    >
      <style>
        {`
          .blur-vignette {
            --radius: ${radius};
            --inset: ${inset};
            --transition-length: ${transitionLength};
            --blur: ${blur};
            position: absolute;
            inset: 0;
            -webkit-backdrop-filter: blur(var(--blur));
            backdrop-filter: blur(var(--blur));
            --r: max(var(--transition-length), calc(var(--radius) - var(--inset)));
            --corner-size: calc(var(--r) + var(--inset)) calc(var(--r) + var(--inset));
            --corner-gradient: transparent 0px,
              transparent calc(var(--r) - var(--transition-length)),
              black var(--r);
            --fill-gradient: black,
              black var(--inset),
              transparent calc(var(--inset) + var(--transition-length)),
              transparent calc(100% - var(--transition-length) - var(--inset)),
              black calc(100% - var(--inset));
            --fill-narrow-size: calc(100% - (var(--inset) + var(--r)) * 2);
            --fill-farther-position: calc(var(--inset) + var(--r));
            -webkit-mask-image: linear-gradient(to right, var(--fill-gradient)),
              linear-gradient(to bottom, var(--fill-gradient)),
              radial-gradient(at bottom right, var(--corner-gradient)),
              radial-gradient(at bottom left, var(--corner-gradient)),
              radial-gradient(at top left, var(--corner-gradient)),
              radial-gradient(at top right, var(--corner-gradient));
            -webkit-mask-size: 100% var(--fill-narrow-size),
              var(--fill-narrow-size) 100%,
              var(--corner-size),
              var(--corner-size),
              var(--corner-size),
              var(--corner-size);
            -webkit-mask-position: 0 var(--fill-farther-position),
              var(--fill-farther-position) 0,
              0 0,
              100% 0,
              100% 100%,
              0 100%;
            -webkit-mask-repeat: no-repeat;
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .blur-vignette.active {
            opacity: 1;
          }

          .group:hover .blur-vignette {
            opacity: 0;
          }
        `}
      </style>
      <div className="blur-vignette active" />
      {children}
    </motion.div>
  );
};
