import AboutComponent from "@/components/About/About";
import ContactComponent from "@/components/Contact";
import HeroComponent from "@/components/Hero";
import Nav from "@/components/Nav";
import ProjectsComponent from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex flex-col bg-neutral-50">
      <HeroComponent />
      <Nav />
      <AboutComponent />
      <ProjectsComponent />
      <ContactComponent />
    </main>
  );
}
