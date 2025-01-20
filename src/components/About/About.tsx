import { ArrowDownTrayIcon, ArrowDownIcon } from "@heroicons/react/24/outline";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import AboutTabsComponent from "./AboutTabs";
import SkillsFragment from "./SkillsFragment";
import BioFragment from "./BioFragment";

export default function AboutComponent() {
  return (
    <section id="about" className="pt-[12vh]">
      <div className="mx-16 max-w-[1200px] py-4 sm:mx-32">
        <div className="">
          <h3 className="text-2xl font-bold uppercase text-red-300">
            About Me
          </h3>
          <div className="w-full bg-red-300 py-1 lg:w-1/2"></div>
        </div>
        {/* Smaller devices show a tab to toggle info */}
        <div className="py-3 sm:hidden">
          <AboutTabsComponent />
        </div>
        {/* Larger devices show information stacked */}
        <div className="hidden flex-col py-3 sm:flex">
          <div className="text-slate-500">
            <BioFragment />
          </div>
          <div className="mt-4 grid text-slate-500">
            <h3 className="mb-4 flex text-lg font-medium text-slate-500">
              TL;DR <ArrowDownIcon className="h-[1.6rem]" />
            </h3>
            <SkillsFragment />
          </div>
        </div>
        <div className="flex flex-row items-center sm:mt-6">
          <a
            className="button-lg flex items-center space-x-2  bg-red-300 hover:bg-rose-700"
            href="pdfs/annahuisinga_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>See Resume</p>
            <ArrowDownTrayIcon className="h-[1.5rem]" />
          </a>
        </div>
      </div>
    </section>
  );
}
