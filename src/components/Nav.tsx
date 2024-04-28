"use client";

import { Bars3Icon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
    const [mobileNav, setMobileNav] = useState(false);
    const toggleMobileNav = () => {
        setMobileNav(!mobileNav);
    };
    const mobileNavAnimation = mobileNav
        ? "translate-x-0"
        : "translate-x-[100%]";
    return (
        <>
            <div className="w-full top-0 h-[12vh] bg-indigo-400">
                <div className="flex items-center justify-between mx-auto w-[80%] h-full">
                    <div className="flex flex-[0.6] font-bold text-2xl text-white cursor-default">
                        <h1>ANNA</h1>
                        <h1 className="rotate-180 text-amber-300">HUISINGA</h1>
                    </div>
                    {/* <h1 className="flex-[0.6] font-bold text-xl text-white">
                    ANNA
                    <span className="text-amber-300">HUISINGA</span>
                </h1> */}
                    {/* larger nav */}
                    <div className="md:flex gap-6 hidden">
                        <Link className="nav-link" href={"/"}>
                            HOME
                        </Link>
                        <Link className="nav-link" href={"/"}>
                            ABOUT
                        </Link>
                        <Link className="nav-link" href={"/"}>
                            PROJECTS
                        </Link>
                        <Link className="nav-link" href={"/"}>
                            CONTACT
                        </Link>
                    </div>
                    <Bars3Icon
                        className="md:hidden cursor-pointer w-[2rem] h-[2rem] text-white"
                        onClick={toggleMobileNav}
                    />
                </div>
            </div>
            {/* mobile nav */}
            <div
                className={`${mobileNavAnimation} transform transition-all duration-300 z-[1000] bg-indigo-400 fixed top-[12vh] left-0 right-0 bottom-0`}
            >
                <div className="flex flex-col items-center justify-center w-full h-full gap-6">
                    <Link className="nav-link_mobile" href={"/"}>
                        HOME
                    </Link>
                    <Link className="nav-link_mobile" href={"/"}>
                        ABOUT
                    </Link>
                    <Link className="nav-link_mobile" href={"/"}>
                        PROJECTS
                    </Link>
                    <Link className="nav-link_mobile" href={"/"}>
                        CONTACT
                    </Link>
                </div>
            </div>
        </>
    );
}
