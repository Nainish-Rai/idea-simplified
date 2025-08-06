import { ChevronRight, Zap } from "lucide-react";

import { Avatar, AvatarImage } from "./ui/avatar";

const OurApproach = () => {
  return (
    <section className="">
      <div className="container">
        <div className="grid gap-5 pt-14 xl:grid-cols-3">
          <a href="#" className="group relative overflow-hidden rounded-xl">
            <img
              src="/img/a1.png"
              alt="placeholder"
              className="h-full max-h-[450px] w-full rounded-xl object-cover object-center"
            />
            <div className="absolute top-0 right-0 bottom-0 left-0 translate-y-20 rounded-xl bg-linear-to-t from-primary to-transparent transition-transform duration-300 group-hover:translate-y-0"></div>
            <div className="absolute top-0 flex h-full w-full flex-col justify-between p-7">
              <span className="ml-auto flex w-fit items-center gap-1 rounded-full bg-primary/5 backdrop-blur-2xl px-4 py-2.5 text-sm font-semibold text-background">
                <Zap className="h-auto w-6 fill-background" />
                Strategic Insights
              </span>
              <div className="flex flex-col gap-5 text-background">
                {/* <h4 className="text-2xl font-semibold lg:text-3xl">
                  We dive deep to understand your brand, audience, and goals.
                </h4>
                <p className="flex items-center gap-1 font-medium">
                  Discover our process
                  <ChevronRight className="h-auto w-4" />
                </p> */}
              </div>
            </div>
          </a>
          <a href="#" className="group relative overflow-hidden rounded-xl">
            <img
              src="/img/a2.png"
              alt="placeholder"
              className="h-full max-h-[450px] w-full rounded-xl object-cover object-center"
            />
            <div className="absolute top-0 right-0 bottom-0 left-0 translate-y-20 rounded-xl bg-linear-to-t from-primary to-transparent transition-transform duration-300 group-hover:translate-y-0"></div>
            <div className="absolute top-0 flex h-full w-full flex-col justify-between p-7">
              <span className="ml-auto flex w-fit items-center gap-2 rounded-full bg-background/30 px-4 py-2.5 text-sm font-semibold backdrop-blur-sm">
                <Avatar className="size-7 rounded-full">
                  <AvatarImage
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp"
                    alt="placeholder"
                  />
                </Avatar>
                Bespoke Solutions
              </span>
              <div className="flex flex-col gap-5 text-background">
                {/* <h4 className="text-2xl font-semibold lg:text-3xl">
                  We design creative, custom strategies for every client.
                </h4> */}
                {/* <p className="flex items-center gap-1 font-medium">
                  See how we work
                  <ChevronRight className="h-auto w-4" />
                </p> */}
              </div>
            </div>
          </a>
          <a href="#" className="group relative overflow-hidden rounded-xl">
            <img
              src="/img/a3.png"
              alt="placeholder"
              className="h-full max-h-[450px] w-full rounded-xl object-cover object-center"
            />
            <div className="absolute top-0 right-0 bottom-0 left-0 translate-y-20 rounded-xl bg-linear-to-t from-primary to-transparent transition-transform duration-300 group-hover:translate-y-0"></div>
            <div className="absolute top-0 flex h-full w-full flex-col justify-between p-7">
              <span className="ml-auto flex w-fit items-center gap-1 rounded-full bg-primary/10 backdrop-blur-3xl text-white px-4 py-2.5 text-sm font-semibold text-background">
                {/* <Zap className="h-auto w-6 fill-background" /> */}
                Measurable Impact
              </span>

              <div className="flex flex-col gap-5 text-background">
                {/* <p className="flex items-center text-white gap-1 font-medium">
                  Measurable Impact
                  <ChevronRight className="h-auto w-4" />
                </p> */}
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export { OurApproach };
