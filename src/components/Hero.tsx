import Image from "next/image";
import TypewriterAnimation from "./TypewriterAnimation";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

export default function HeroComponent() {
  return (
    <div className="mt-[12vh] h-[88vh] bg-neutral-100 p-16">
      <div className="mx-auto grid grid-cols-1 items-center gap-[3rem] lg:grid-cols-2">
        <div className="flex w-full flex-col">
          <h1 className="text-4xl font-bold text-slate-700">
            HI, I&apos;M <span className="text-indigo-400">ANNA</span>!
          </h1>
          <br />
          {/* block needs specific height to prevent layout shift */}
          <div className="block h-[18rem] sm:h-[9rem] xl:h-[10rem]">
            <TypewriterAnimation />
          </div>
          <p className="hidden pl-0 pt-11 text-slate-500 sm:flex">
            I&apos;m a software developer, currently shaping digital experiences
            on the Salesforce platform. Beyond my professional endeavors,
            I&apos;m a passionate advocate for women&apos;s sports and a
            connoisseur of pop culture, with a soft spot for classic 80&apos;s
            rom-coms. You can also often find me tinkering with DIY renovations,
            lego masterpieces, or craft projects. Let&apos;s build something
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
