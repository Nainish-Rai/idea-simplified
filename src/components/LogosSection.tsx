"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const Logos10 = () => {
  const logos = [
    {
      id: "logo-1",
      description: "Logo 1",
      image: "/logos/l1.png",
      className: "h-20 w-32 object-contain",
    },
    {
      id: "logo-2",
      description: "Logo 2",
      image: "/logos/l2.png",
      className: "h-20 w-32 object-contain",
    },
    {
      id: "logo-3",
      description: "Logo 3",
      image: "/logos/l3.png",
      className: "h-20 w-32 object-contain",
    },
    {
      id: "logo-4",
      description: "Logo 4",
      image: "/logos/l4.png",
      className: "h-20 w-32 object-contain",
    },
    {
      id: "logo-5",
      description: "Logo 5",
      image: "/logos/l5.png",
      className: "h-20 w-32 object-contain",
    },
    {
      id: "logo-6",
      description: "Logo 6",
      image: "/logos/l6.png",
      className: "h-20 w-32 object-contain",
    },
    {
      id: "logo-7",
      description: "Logo 7",
      image: "/logos/l7.png",
      className: "h-20 w-32 object-contain",
    },
    {
      id: "logo-9",
      description: "Logo 9",
      image: "/logos/l9.jpg",
      className: "h-20 w-32 object-contain",
    },
    {
      id: "logo-10",
      description: "Logo 10",
      image: "/logos/l10.jpg",
      className: "h-20 w-32 object-contain",
    },
    {
      id: "logo-11",
      description: "Logo 11",
      image: "/logos/l11.jpg",
      className: "h-20 w-32 object-contain",
    },
    {
      id: "logo-12",
      description: "Logo 12",
      image: "/logos/l12.png",
      className: "h-20 w-32 object-contain",
    },
    {
      id: "logo-13",
      description: "Logo 13",
      image: "/logos/l13.jpg",
      className: "h-20 w-32 object-contain",
    },
    {
      id: "logo-14",
      description: "Logo 14",
      image: "/logos/l14.webp",
      className: "h-20 w-32 object-contain",
    },
    {
      id: "logo-15",
      description: "Logo 15",
      image: "/logos/l15.png",
      className: "h-20 w-32 object-contain",
    },
    {
      id: "logo-16",
      description: "Logo 16",
      image: "/logos/l16.jpg",
      className: "h-20 w-32 object-contain",
    },
    {
      id: "logo-17",
      description: "Logo 17",
      image: "/logos/l17.png",
      className: "h-20 w-32 object-contain",
    },
    {
      id: "logo-18",
      description: "Logo 18",
      image: "/logos/l18.png",
      className: "h-20 w-32 object-contain",
    },
    {
      id: "logo-19",
      description: "Logo 19",
      image: "/logos/l19.png",
      className: "h-20 w-32 object-contain",
    },
    {
      id: "logo-20",
      description: "Logo 20",
      image: "/logos/l20.png",
      className: "h-20 w-32 object-contain",
    },
    {
      id: "logo-21",
      description: "Logo 21",
      image: "/logos/l21.png",
      className: "h-20 w-32 object-contain",
    },
    {
      id: "logo-22",
      description: "Logo 22",
      image: "/logos/l22.png",
      className: "h-20 w-32 object-contain",
    },
    {
      id: "logo-23",
      description: "Logo 23",
      image: "/logos/l23.png",
      className: "h-20 w-32 object-contain",
    },
    {
      id: "logo-24",
      description: "Logo 24",
      image: "/logos/l24.png",
      className: "h-20 w-32 object-contain",
    },
    {
      id: "logo-25",
      description: "Logo 25",
      image: "/logos/l25.png",
      className: "h-20 w-32 object-contain",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="flex flex-col items-center justify-center">
        <div className="relative mx-auto flex items-center justify-center w-full">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo, index) => (
                <CarouselItem
                  key={logo.id}
                  className="relative flex max-sm:px-2 basis-1/2 justify-center pl-0 sm:basis-1/4 md:basis-1/3 lg:basis-1/6"
                >
                  <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
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
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export { Logos10 };
