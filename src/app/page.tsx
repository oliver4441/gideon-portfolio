import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProfileShowcase from "@/components/ProfileShowcase";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <ProfileShowcase />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
