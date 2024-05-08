import Image from "next/image";
import ProjectCardComponent from "./ProjectCard";

export default function ProjectsComponent() {
  const projectList = [
    {
      title: "CSV Diff Generator",
      description:
        "Handy little tool to compare csv files. Strictly python, I took advantage of the pandas package to automate my report comparisons.",
      url: "https://github.com/ahuisinga/csv-diff-generator",
      img: "/images/spreadsheet_project.png",
      attributes: ["Python"],
    },
    {
      title: "EAT!",
      description:
        "For when you can't decide what to eat (which is a problem I have a lot). Still a work in progress.",
      url: "https://github.com/ahuisinga/meal-vote-app",
      img: "/images/eat_screenshot.png",
      attributes: ["Next.js", "TypeScript", "DaisyUI", "MongoDB", "Prisma"],
    },
    {
      title: "This Portfolio Site",
      description:
        "I'm not a UI designer in my day job, so this has been a fun project to dive back into CSS and spend time moving items pixel by pixel. Also, I drew the hero image myself :).",
      url: "https://github.com/ahuisinga/portfolio-site",
      img: "/images/portfolio_screenshot.png",
      attributes: ["Next.js", "React", "TypeScript", "Tailwind"],
    },
  ];
  return (
    <section id="projects" className="pt-[12vh]">
      <div className="px-16 py-4">
        <h3 className="text-2xl font-bold uppercase text-amber-300">
          Featured Projects
        </h3>
        <div className="w-56 bg-amber-300 py-1 sm:w-[22rem]"></div>
        <div className="grid lg:grid-cols-3">
          <ul className="mt-2 lg:col-span-2">
            {projectList.map((project, index) => (
              <li key={index}>
                <ProjectCardComponent
                  title={project.title}
                  description={project.description}
                  url={project.url}
                  img={project.img}
                  attributes={project.attributes}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
