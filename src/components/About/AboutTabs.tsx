"use client";
import { Tab } from "@headlessui/react";
import SkillsFragment from "./SkillsFragment";
import BioFragment from "./BioFragment";
import ArrowDownTrayIcon from "@heroicons/react/24/outline/ArrowDownTrayIcon";

export default function AboutTabsComponent() {
  return (
    <Tab.Group>
      <Tab.List className="flex space-x-1 p-1">
        <Tab className="tab">At A Glance</Tab>
        <Tab className="tab">More Info</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel className="tab-panel">
          <div className="grid grid-cols-1 justify-items-center gap-4 text-slate-500">
            <SkillsFragment />
            <div className="mt-20 flex flex-row items-center sm:mt-6">
              <a
                className="flex items-center space-x-2 bg-red-300  px-[1rem] py-[0.5rem] text-lg uppercase text-white transition-all duration-300 hover:cursor-pointer hover:bg-rose-700"
                href="pdfs/resume.pdf"
                download="annahuisinga_resume.pdf"
              >
                <p>Resume</p>
                <ArrowDownTrayIcon className="h-[1.5rem]" />
              </a>
            </div>
          </div>
        </Tab.Panel>
        <Tab.Panel className="tab-panel">
          <div className="space-y-4 text-slate-500">
            <BioFragment />
          </div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
