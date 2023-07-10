"use client";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import mov from "@/../public/mov.png";
import art from "@/../public/art.png";
import wet from "@/../public/wet.png";
import piz from "@/../public/piz.png";

import { GithubLogo, ExternalLink } from "./svgs";

export default function Projects() {
  const [img, setImg] = useState(mov);

  const changeImg = (i) => {
    setImg(i);
  };

  const Project = () => (
    <div className="flex flex-col justify-between gap-16 items-center w-full">
      <div
        onMouseEnter={() => changeImg(mov)}
        className="w-full xl:p-4 flex justify-between"
      >
        <h2 className="text-2xl text-white">Movie App</h2>
        <div className="flex justify-center items-center gap-4">
          <Link
            className="fill-white hover:scale-110 hover:fill-purple-600 transition-all"
            target="blank"
            href="https://github.com/ahmettutsak/movie"
          >
            <GithubLogo />
          </Link>
          <Link
            className="fill-white hover:scale-110 hover:fill-purple-600 transition-all"
            target="blank"
            href="https://moviesnextjs.netlify.app"
          >
            <ExternalLink />
          </Link>
        </div>
      </div>
      <div
        onMouseEnter={() => changeImg(art)}
        className="w-full xl:p-4 flex justify-between"
      >
        <h2 className="text-2xl text-white">Art Galery App</h2>
        <div className="flex justify-center items-center gap-4">
          <Link
            className="fill-white hover:scale-110 hover:fill-purple-600 transition-all"
            target="blank"
            href="https://github.com/ahmettutsak/art"
          >
            <GithubLogo />
          </Link>
          <Link
            className="fill-white hover:scale-110 hover:fill-purple-600 transition-all"
            target="blank"
            href="https://artwithnextjs.netlify.app"
          >
            <ExternalLink />
          </Link>
        </div>
      </div>
      <div
        onMouseEnter={() => changeImg(wet)}
        className="w-full xl:p-4 flex justify-between"
      >
        <h2 className="text-2xl text-white">Weather App</h2>
        <div className="flex justify-center items-center gap-4">
          <Link
            className="fill-white hover:scale-110 hover:fill-purple-600 transition-all"
            target="blank"
            href="https://github.com/ahmettutsak/weather"
          >
            <GithubLogo />
          </Link>
          <Link
            className="fill-white hover:scale-110 hover:fill-purple-600 transition-all"
            target="blank"
            href="https://wweatherreact.netlify.app"
          >
            <ExternalLink />
          </Link>
        </div>
      </div>
      <div
        onMouseEnter={() => changeImg(piz)}
        className="w-full xl:p-4 flex justify-between"
      >
        <h2 className="text-2xl text-white">Pizza App</h2>
        <div className="flex justify-center items-center gap-4">
          <Link
            className="fill-white hover:scale-110 hover:fill-purple-600 transition-all"
            target="blank"
            href="https://github.com/ahmettutsak/pizza"
          >
            <GithubLogo />
          </Link>
          <Link
            className="fill-white hover:scale-110 hover:fill-purple-600 transition-all"
            target="blank"
            href="https://cartoonpizza.vercel.app/"
          >
            <ExternalLink />
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div id="projects" className="w-screen xl:p-24 p-12 flex flex-col">
      <h2 className="text-white text-5xl p-4">Projects</h2>
      <div className="flex mt-12">
        <div>
          <Image
            className="h-[600px] rounded-xl hidden xl:flex"
            width={3800}
            height={800}
            src={img}
            alt="asd"
          />
        </div>
        <Project />
      </div>
    </div>
  );
}
