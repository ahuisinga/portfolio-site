import Image from "next/image";
import TypewriterAnimation from "./TypewriterAnimation";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

export default function HeroComponent() {
  return (
    <div className="h-[88vh] bg-neutral-50 p-16">
      <div className="mx-auto grid grid-cols-1 items-center gap-[3rem] lg:grid-cols-2">
        <div className="flex w-full flex-col">
          <h1 className="text-4xl font-bold text-slate-700">
            HI, I&apos;M <span className="text-indigo-400">ANNA</span>!
          </h1>
          <br />
          {/* block needs specific height to prevent layout shift */}
          <div className="block h-[8rem] sm:h-[9rem] xl:h-[10rem]">
            <TypewriterAnimation />
          </div>
          <p className="hidden pl-0 pt-11 text-slate-500 sm:flex">
            I'm a seasoned software developer, currently shaping digital
            experiences at Charles Schwab on the Salesforce platform. Beyond my
            professional endeavors, I'm a passionate advocate for women's sports
            and a connoisseur of pop culture, with a soft spot for classic 80s
            rom coms. You can also often find me tinkering with DIY renovations,
            fun lego sets, or craft projects. Let's build something
            extraordinary together!
          </p>
          <div className="mt-20 flex flex-row items-center sm:mt-6">
            <a
              className="flex items-center space-x-2 bg-indigo-400  px-[1rem] py-[0.5rem] text-lg uppercase text-white transition-all duration-300 hover:cursor-pointer hover:bg-amber-300"
              href="pdfs/resume.pdf"
              download="annahuisinga_resume.pdf"
            >
              <p>Resume</p>
              <ArrowDownCircleIcon className="h-[1.7rem]" />
            </a>
          </div>
        </div>
        <div className="mx-auto hidden rounded-full lg:flex">
          <Image
            src={"/images/profile.jpg"}
            className="rounded-full object-cover"
            alt="profile photo"
            height={400}
            width={400}
          />
        </div>
      </div>
    </div>
  );
}
