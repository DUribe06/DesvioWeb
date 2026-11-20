import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Lookbook from "@/components/Lookbook";
import Drop001 from "@/components/Drop001";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Lookbook />
      <Drop001 />
      <Footer />
    </main>
  );
}
