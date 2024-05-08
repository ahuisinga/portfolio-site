"use client";
import { Tab } from "@headlessui/react";
import SkillsFragment from "./SkillsFragment";
import BioFragment from "./BioFragment";
import ArrowDownTrayIcon from "@heroicons/react/24/outline/ArrowDownTrayIcon";

export default function AboutTabsComponent() {
  return (
    <Tab.Group>
      <Tab.List className="flex space-x-1 rounded bg-neutral-500/[0.12] p-1">
        <Tab className="tab">TLDR;</Tab>
        <Tab className="tab">Read More</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel className="tab-panel">
          <div className="grid grid-cols-1 justify-items-center gap-4 text-slate-500">
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
