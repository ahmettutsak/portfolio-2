import Image from "next/image";
import me from "@/../public/me.png";
import TextSlider from "./TextSlider";

export default function Hero() {
  const title = ["React Developer", "Front End Developer"];

  return (
    <section className="w-screen h-screen flex items-center justify-center relative overflow-hidden">
      <Image
        className="absolute bottom-0 z-10 select-none"
        src={me}
        alt={"me"}
        width={500}
      />
      <div>
        <TextSlider title={title} />
      </div>
    </section>
  );
}
