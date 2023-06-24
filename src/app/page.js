import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="flex flex-col items-center overflow-hidden justify-between px-24 bg-black text-purple-600">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}
