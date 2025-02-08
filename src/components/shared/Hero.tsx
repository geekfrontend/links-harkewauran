"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FlipText } from "../magicui/flip-text";
import AnimatedGradient from "../fancy/animated-gradient-with-svg";

const Hero = () => {
  return (
    <header className="flex flex-col items-center justify-center">
      <div className="w-full relative h-28 md:h-40 md:rounded-t-xl bg-cover">
        <AnimatedGradient
          colors={["#3B82F6", "#60A5FA", "#93C5FD"]}
          speed={0.2}
          blur="heavy"
        />
      </div>

      <div className="mt-4">
        <Avatar className="h-14 w-14">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>YHW</AvatarFallback>
        </Avatar>
      </div>

      <div className="pt-5 px-8">
        <div
          className="flex flex-col justify-center items-center space-y-3"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="flex flex-col gap-1 items-center text-center">
            <FlipText
              className="text-2xl font-bold -tracking-widest text-black dark:text-white"
              word="Yohanes Harke Wauran"
            />
            <div className="flex gap-2 text-[15px] text-neutral-500">
              <span>Indonesia</span>
              <span className="text-neutral-300">•</span>
              <span>he/him</span>
            </div>
          </div>
          <p className="text-center text-neutral-600 text-[15px] md:text-base mx-1.5 leading-relaxed">
            Frontend Developer specializing in web applications within the React
            ecosystem.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Hero;
