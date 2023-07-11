"use client";
import { motion } from "framer-motion";

import Link from "next/link";
export default function Contact() {
  const mail = "AHMETTUTSAK@HOTMAIL.COM";
  return (
    <div id="contact" className="w-screen h-screen xl:p-24 p-12 flex flex-col">
      <span className="text-white text-5xl p-4 flex">
        Say Hello{" "}
        <motion.h2
          animate={{
            rotate: [20, -20, 20, -20, 20],
            scale: [1.2, 1.3, 1, 0.9, 1.2],
          }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          👋
        </motion.h2>
      </span>
      <div className="flex w-full p-24 justify-center xl:mt-24">
        {Array.from(mail).map((letter, index) => {
          return (
            <Link
              href={"mailto:ahmettutsak@hotmail.com"}
              key={index}
              className="xl:text-7xl text-2xl font-bold select-none"
            >
              <motion.h2
                initial={{ scale: 1, y: 0 }}
                whileHover={{
                  scale: [1.2, 0.9, 1.5, 1.1, 1.3, 1],
                  y: [6, 9, 14, 3, 1, 0],
                  transition: { duration: 0.6 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.h2>
            </Link>
          );
        })}
      </div>
      <h2 className="w-full text-center text-white tracking-wide text-xl">
        I{"\u0027"}m looking forward to hearing from you. Please use the above
        email address to reach me.
      </h2>
    </div>
  );
}
