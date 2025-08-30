"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const Logos10 = () => {
  const logos = [
    {
      id: "logo-1",
      description: "Logo 1",
      image: "/logos/l1.png",
      className: "h-28 rounded-2xl w-auto ",
    },
    {
      id: "logo-2",
      description: "Logo 2",
      image: "/logos/l2.png",
      className: "h-28 rounded-2xl w-auto ",
    },
    {
      id: "logo-3",
      description: "Logo 3",
      image: "/logos/l3.png",
      className: "h-28 rounded-2xl w-auto ",
    },
    {
      id: "logo-4",
      description: "Logo 4",
      image: "/logos/l4.png",
      className: "h-28 rounded-2xl w-auto ",
    },
    {
      id: "logo-5",
      description: "Logo 5",
      image: "/logos/l5.png",
      className: "h-28 rounded-2xl w-auto ",
    },
    {
      id: "logo-6",
      description: "Logo 6",
      image: "/logos/l6.png",
      className: "h-28 rounded-2xl w-auto ",
    },
    {
      id: "logo-24",
      description: "Logo 24",
      image: "/logos/l7.png",
      className: "h-28 rounded-2xl w-auto ",
    },
    {
      id: "logo-8",
      description: "Logo 8",
      image: "/logos/l8.png",
      className: "h-28 rounded-2xl w-auto ",
    },
  ];

  return (
    <section className="">
      <div className="flex flex-col items-center justify-center  ">
        <div className="relative mx-auto flex items-center justify-center pt-8">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo, index) => (
                <CarouselItem
                  key={logo.id}
                  className="h-35  relative flex basis-1/2 justify-center  pl-0 sm:basis-1/4 md:basis-1/3 lg:basis-1/6"
                >
                  <div className="flex flex-col items-center justify-center lg:mx-10">
                    <img
                      src={logo.image}
                      alt={logo.description}
                      className={logo.className}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-32 to-transparent"></div>
          <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-32 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export { Logos10 };
