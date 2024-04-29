import AboutComponent from "@/components/About/About";
import ContactComponent from "@/components/Contact";
import HeroComponent from "@/components/Hero";
import ProjectsComponent from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroComponent />
      <AboutComponent />
      <ProjectsComponent />
      <ContactComponent />
    </main>
  );
}
