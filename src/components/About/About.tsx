import { ComputerDesktopIcon } from "@heroicons/react/24/outline";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import AboutTabsComponent from "./AboutTabs";
import SkillsFragment from "./SkillsFragment";
import BioFragment from "./BioFragment";

export default function AboutComponent() {
  return (
    <div className=" bg-orange-50 px-16 py-4">
      <div className="">
        <h3 className="text-2xl font-bold uppercase text-red-300" id="about">
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
        <div className="mt-4 grid grid-cols-2 text-slate-500">
          <SkillsFragment />
        </div>
        <div className="space-y-4 text-slate-500">
          <BioFragment />
        </div>
      </div>
    </div>
  );
}
