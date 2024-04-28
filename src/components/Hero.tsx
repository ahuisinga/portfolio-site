import Image from "next/image";
import TypewriterAnimation from "./TypewriterAnimation";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

export default function HeroComponent() {
  return (
    <div className="h-[88vh] bg-neutral-50 p-16">
      <div className="flex">
        <div className="flex w-full flex-col lg:w-[60%]">
          <h1 className="text-4xl font-bold text-slate-700">
            HI, I&apos;M <span className="text-indigo-400">ANNA</span>!
          </h1>
          <br />
          {/* block needs specific height to prevent layout shift */}
          <div className="block h-[10rem]">
            <TypewriterAnimation />
          </div>
          <p className="py-8 pl-0 pr-16 text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="flex flex-row items-center">
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
        <div className="mx-auto rounded-full lg:w-[40%]">
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
