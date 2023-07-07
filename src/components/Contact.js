import Link from "next/link";
export default function Contact() {
  const mail = "AHMETTUTSAK@HOTMAIL.COM";
  return (
    <div id="contact" className="w-screen h-screen xl:p-24 p-12 flex flex-col">
      <h2 className="text-white text-5xl p-4">Say Hello 👋</h2>
      <div className="flex w-full p-24 justify-center xl:mt-24">
        {Array.from(mail).map((letter, index) => {
          return (
            <Link
              href={"mailto:ahmettutsak@hotmail.com"}
              key={index}
              className="xl:text-7xl text-2xl font-bold hover:scale-125 hover:-translate-y-5 transition-transform select-none"
            >
              {letter === " " ? "\u00A0" : letter}
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
