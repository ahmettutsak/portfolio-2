import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between px-24 bg-black text-purple-600">
      <Navbar />
      <Hero />
    </main>
  );
}
