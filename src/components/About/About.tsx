import {
  ArrowDownTrayIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import AboutTabsComponent from "./AboutTabs";
import SkillsFragment from "./SkillsFragment";
import BioFragment from "./BioFragment";

export default function AboutComponent() {
  return (
    <section id="about" className="pt-[12vh]">
      <div className=" px-16 py-4">
        <div className="">
          <h3 className="text-2xl font-bold uppercase text-red-300">
            About Me
          </h3>
          <div className="w-56 bg-red-300 py-1 sm:w-[22rem]"></div>
        </div>
        {/* Smaller devices show a tab to toggle info */}
        <div className="py-3 lg:hidden">
          <AboutTabsComponent />
        </div>
        {/* Large devices show information side by side */}
        <div className="hidden grid-cols-2 gap-6 py-3 lg:grid">
          <div className="mt-4 grid grid-cols-2 justify-items-center text-slate-500">
            <SkillsFragment />
            <div className="col-span-2 mt-20 flex flex-row items-center sm:mt-6">
              <a
                className="flex items-center space-x-2 bg-red-300  px-[1rem] py-[0.5rem] text-lg uppercase text-white transition-all duration-300 hover:cursor-pointer hover:bg-rose-700"
                href="pdfs/resume.pdf"
                download="annahuisinga_resume.pdf"
              >
                <p>Download Resume</p>
                <ArrowDownTrayIcon className="h-[1.5rem]" />
              </a>
            </div>
          </div>
          <div className="space-y-4 text-slate-500">
            <BioFragment />
          </div>
        </div>
      </div>
    </section>
  );
}
