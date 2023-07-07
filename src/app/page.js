import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center overflow-hidden justify-between px-24 bg-black text-purple-600 scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
