import Link from "next/link";
export default function Contact() {
  const mail = "AHMETTUTSAK@HOTMAIL.COM";
  return (
    <div id="contact" className="w-screen h-screen p-24 flex flex-col">
      <h2 className="text-white text-5xl p-4">Say Hello 👋</h2>
      <div className="flex w-full p-24 justify-center mt-24">
        {Array.from(mail).map((letter) => {
          return (
            <Link
              href={"mailto:ahmettutsak@hotmail.com"}
              key={letter}
              className="text-8xl font-bold hover:scale-125 hover:-translate-y-5 transition-transform select-none"
            >
              {letter}
            </Link>
          );
        })}
      </div>
      <h2 className="w-full text-center text-white tracking-wide text-2xl">
        I'm looking forward to hearing from you. Please use the above email
        address to reach me.
      </h2>
    </div>
  );
}
