import Image from "next/image";
import TypewriterAnimation from "./TypewriterAnimation";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

export default function HeroComponent() {
  return (
    <div
      className="min-h-[88vh] bg-neutral-100 pb-16 pl-16 pr-16 pt-[16vh] md:min-h-svh md:pt-16"
      id="hero"
    >
      <div className="mx-auto grid grid-cols-1 items-center gap-[3rem] lg:grid-cols-2">
        <div className="flex w-full flex-col">
          <h1 className="text-3xl font-bold text-slate-700 sm:text-4xl">
            HI, I&apos;M <span className="text-indigo-400">ANNA</span>!
          </h1>
          <br />
          {/* block needs specific height to prevent layout shift */}
          <div className="block h-[12rem] min-[420px]:h-[10rem] min-[506px]:h-[8rem] sm:h-[9rem] lg:h-[11.25rem] min-[1121px]:h-[9rem] xl:h-[12.5rem]">
            <TypewriterAnimation />
          </div>
          <p className="flex pl-0 pt-5 text-slate-500">
            I&apos;m a software developer, currently shaping digital experiences
            on the Salesforce platform at Charles Schwab. Beyond my professional
            endeavors, I&apos;m a passionate advocate for women&apos;s sports
            and a connoisseur of pop culture, with a soft spot for classic
            80&apos;s rom-coms. You can also often find me tinkering with DIY
            renovations, lego masterpieces, or craft projects. Let&apos;s build
            something extraordinary together!
          </p>
          <div className="mt-6 flex flex-row items-center">
            <a
              className="button-lg flex items-center space-x-2 bg-indigo-400 hover:bg-amber-300"
              href="/#about"
            >
              <p>See My Work</p>
              <ArrowDownCircleIcon className="h-[1.5rem]" />
            </a>
          </div>
        </div>
        <div className="relative mx-auto hidden drop-shadow-xl sm:flex sm:h-[500px] sm:w-[500px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[500px]">
          <Image
            src={"/images/hero-image.png"}
            className="object-cover"
            alt="polaroid cartoon of me"
            fill={true}
          />
        </div>
      </div>
    </div>
  );
}
