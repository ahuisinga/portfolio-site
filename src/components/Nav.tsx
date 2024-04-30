"use client";

import { Bars3Icon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [mobileNav, setMobileNav] = useState(false);
  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };
  const mobileNavAnimation = mobileNav ? "translate-x-0" : "translate-x-[100%]";
  return (
    <>
      <div className="fixed top-0 z-[900] h-[12vh] w-full bg-indigo-400 sm:sticky">
        <div className="mx-auto flex h-full w-[80%] items-center justify-between">
          <div className="flex flex-[0.6] cursor-default text-2xl font-bold text-white">
            <h1>ANNA</h1>
            <h1 className="rotate-180 text-amber-300">HUISINGA</h1>
          </div>
          {/* <h1 className="flex-[0.6] font-bold text-xl text-white">
                    ANNA
                    <span className="text-amber-300">HUISINGA</span>
                </h1> */}
          {/* larger nav */}
          <div className="hidden gap-6 md:flex">
            <Link className="nav-link" href={"/"}>
              HOME
            </Link>
            <Link className="nav-link" href={"#about"}>
              ABOUT
            </Link>
            <Link className="nav-link" href={"/#projects"}>
              PROJECTS
            </Link>
            <Link className="nav-link" href={"/#contactMe"}>
              CONTACT
            </Link>
          </div>
          <Bars3Icon
            className={`h-[2rem] w-[2rem] cursor-pointer hover:text-amber-300 md:hidden ${
              mobileNav ? "text-amber-300" : "text-white"
            }`}
            onClick={toggleMobileNav}
          />
        </div>
      </div>
      {/* mobile nav */}
      <div
        className={`${mobileNavAnimation} fixed bottom-0 left-0 right-0 top-[12vh] z-[1000] transform bg-indigo-400 transition-all duration-300`}
      >
        <div className="flex h-full w-full flex-col items-center justify-center gap-6">
          <Link
            className="nav-link_mobile"
            href={"/"}
            onClick={toggleMobileNav}
          >
            HOME
          </Link>
          <Link
            className="nav-link_mobile"
            href={"/#about"}
            onClick={toggleMobileNav}
          >
            ABOUT
          </Link>
          <Link
            className="nav-link_mobile"
            href={"/#projects"}
            onClick={toggleMobileNav}
          >
            PROJECTS
          </Link>
          <Link
            className="nav-link_mobile"
            href={"/#contactMe"}
            onClick={toggleMobileNav}
          >
            CONTACT
          </Link>
        </div>
      </div>
    </>
  );
}
