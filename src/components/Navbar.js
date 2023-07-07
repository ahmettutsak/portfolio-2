"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const name = "Ahmet Tutsak";

  const [open, setOpen] = useState(false);

  const menuEvent = () => {
    setOpen(!open);
  };

  const DesktopMenu = () => {
    return (
      <div className="gap-12 xl:flex hidden">
        <Link
          href={"#about"}
          className="text-white transition-all hover:text-purple-600 hover:scale-125 text-xl"
        >
          About
        </Link>
        <Link
          href={"#projects"}
          className="text-white transition-all hover:text-purple-600 hover:scale-125 text-xl"
        >
          Projects
        </Link>
        <Link
          href={"#contact"}
          className="text-white transition-all hover:text-purple-600 hover:scale-125 text-xl"
        >
          Contact
        </Link>
      </div>
    );
  };

  const MobileMenu = () => {
    return (
      <div className="bg-black w-screen h-screen absolute top-0 left-0 flex flex-col justify-center items-center gap-12">
        <Link
          onClick={() => setOpen(false)}
          href={"#about"}
          className="text-white transition-all hover:text-purple-600 hover:scale-125 text-xl"
        >
          About
        </Link>
        <Link
          onClick={() => setOpen(false)}
          href={"#projects"}
          className="text-white transition-all hover:text-purple-600 hover:scale-125 text-xl"
        >
          Projects
        </Link>
        <Link
          onClick={() => setOpen(false)}
          href={"#contact"}
          className="text-white transition-all hover:text-purple-600 hover:scale-125 text-xl"
        >
          Contact
        </Link>
        <div
          className="text-3xl absolute top-8 right-8"
          onClick={() => setOpen(false)}
        >
          X
        </div>
      </div>
    );
  };

  return (
    <nav className="flex justify-between w-full items-center fixed px-12 py-12 z-20 ">
      <div className="flex">
        {Array.from(name).map((letter) => {
          return (
            <h2
              key={letter}
              className="text-3xl font-bold hover:scale-125 transition-transform select-none"
            >
              {letter === " " ? "\u00A0" : letter}
            </h2>
          );
        })}
      </div>
      <DesktopMenu />
      <div onClick={() => menuEvent()} className="flex xl:hidden">
        |||
      </div>
      {open && <MobileMenu />}
    </nav>
  );
}
