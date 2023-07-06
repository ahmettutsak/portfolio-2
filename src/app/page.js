import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center overflow-hidden justify-between px-24 bg-black text-purple-600">
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </main>
  );
}
