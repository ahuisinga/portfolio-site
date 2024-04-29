"use client";
import { Tab } from "@headlessui/react";
import SkillsFragment from "./SkillsFragment";
import BioFragment from "./BioFragment";

export default function AboutTabsComponent() {
  return (
    <Tab.Group>
      <Tab.List className="flex space-x-1 p-1">
        <Tab className="tab">At A Glance</Tab>
        <Tab className="tab">More Info</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel className="tab-panel">
          <div className="grid grid-cols-1 gap-4 text-slate-500 sm:grid-cols-2 sm:gap-0">
            <SkillsFragment />
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
