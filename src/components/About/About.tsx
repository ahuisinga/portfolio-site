"use client";

import {
  ArrowDownTrayIcon,
  ArrowDownIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";
import SkillsFragment from "./SkillsFragment";
import BioFragment from "./BioFragment";
import { useState } from "react";

export default function AboutComponent() {
  const [showExpandedBio, setShowExpandedBio] = useState(false);
  return (
    <section id="about" className="pt-[12vh]">
      <div className="mx-16 max-w-[1200px] py-4 sm:mx-32">
        <div className="">
          <h3 className="text-2xl font-bold uppercase text-red-300">
            About Me
          </h3>
          <div className="w-full bg-red-300 py-1 lg:w-1/2"></div>
        </div>
        {/* Larger devices shows all info */}
        {/* Smaller devices show chevron to toggle info */}
        <div className="flex flex-col py-3">
          <div
            className={`order-last text-slate-500 sm:order-first sm:flex ${!showExpandedBio ? "hidden" : ""}`}
          >
            <BioFragment />
          </div>
          <div className="grid text-slate-500 sm:mt-4">
            <h3 className="mb-4 hidden text-lg font-medium text-slate-500 sm:flex">
              TL;DR <ArrowDownIcon className="h-[1.6rem]" />
            </h3>
            <SkillsFragment />
          </div>
          <div
            className="flex flex-row items-center space-x-1 pb-2 pt-8 text-xl text-rose-700 sm:hidden"
            onClick={() => setShowExpandedBio(!showExpandedBio)}
          >
            <p className="">{showExpandedBio ? "READ LESS" : "READ MORE"}</p>
            <ChevronDoubleRightIcon
              className={`h-[1.6rem] transition-transform duration-300 ${showExpandedBio ? "rotate-90" : "rotate-0"}`}
            />
          </div>
        </div>
        <div className="mt-6 flex flex-row items-center">
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
