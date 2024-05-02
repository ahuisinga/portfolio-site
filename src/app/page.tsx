import AboutComponent from "@/components/About/About";
import ContactComponent from "@/components/Contact";
import HeroComponent from "@/components/Hero";
import Nav from "@/components/Nav";
import ProjectsComponent from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex max-w-full flex-col bg-neutral-100">
      <HeroComponent />
      <Nav />
      <AboutComponent />
      <ProjectsComponent />
      <ContactComponent />
      <Footer />
    </main>
  );
}
