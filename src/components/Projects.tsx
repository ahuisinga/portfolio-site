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
      title: "Fun Spotify App",
      description:
        "If you're like me, you've probably wondered what your Spotify Wrapped might look like right now. I wanted to play with the Spotify API and confirm that Taylor is still my #1.",
      url: "https://github.com/ahuisinga/fun-spotify-app",
      img: "/images/spotify_screenshot.png",
      attributes: ["React", "Express", "Node"],
    },
    {
      title: "Cardio App",
      description:
        "When I first started spinning, I didn't have a good way to follow a workout. There's timing and speed changes and difficulty increases to keep track of. I didn't want to pay for an app or classes, so I figured I could *spin* one up easily. Not currently accepting new users, but a portion of it is public. Still a work in progress for the UI.",
      url: "https://workout-tracker-app-kappa.vercel.app",
      img: "/images/cardio-workout-screenshot.png",
      attributes: ["Next.js", "Tailwind", "Postgresql"],
    },
    {
      title: "This Portfolio Site",
      description:
        "I'm not a UI designer in my day job, so this has been a fun project to dive back into CSS and spend time moving items pixel by pixel. And dust off my Procreate sketching skills :)",
      url: "https://github.com/ahuisinga/portfolio-site",
      img: "/images/portfolio_screenshot.png",
      attributes: ["Next.js", "React", "TypeScript", "Tailwind"],
    },
  ];
  return (
    <section id="projects" className="pt-[12vh]">
      <div className="mx-16 max-w-[1200px] py-4 sm:mx-32">
        <h3 className="text-2xl font-bold text-amber-300 uppercase">
          Featured Projects
        </h3>
        <div className="w-full bg-amber-300 py-1 lg:w-1/2"></div>
        <div className="grid">
          <ul className="mt-2">
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
