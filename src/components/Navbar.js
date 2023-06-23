import Link from "next/link";

export default function Navbar() {
  const name = "Ahmet Tutsak";
  return (
    <nav className="flex justify-between w-full items-center fixed px-12 py-12 z-20">
      <div className="flex">
        {Array.from(name).map((letter) => {
          return (
            <h2 className="text-3xl font-bold hover:scale-125 transition-transform select-none">
              {letter === " " ? "\u00A0" : letter}
            </h2>
          );
        })}
      </div>
      <div className="flex gap-12">
        <Link
          href={"/"}
          className="text-white transition-all hover:text-purple-600 hover:scale-125 text-xl"
        >
          About
        </Link>
        <Link
          href={"/"}
          className="text-white transition-all hover:text-purple-600 hover:scale-125 text-xl"
        >
          Projects
        </Link>
        <Link
          href={"/"}
          className="text-white transition-all hover:text-purple-600 hover:scale-125 text-xl"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
