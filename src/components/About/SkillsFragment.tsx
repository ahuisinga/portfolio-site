import {
  AcademicCapIcon,
  ComputerDesktopIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

export default function SkillsFragment() {
  const techSkills = [
    "Java",
    "JavaScript",
    "Salesforce",
    "HTML",
    "CSS",
    "React",
    "Python",
    "Git",
    "Agile Methodologies",
    "SQL and NoSQL",
    "Technical Documentation",
    "REST APIs",
  ];
  return (
    <div className="space-y-2 text-lg">
      <div>
        <span className="flex flex-row items-center space-x-2 text-xl uppercase text-rose-700">
          <AcademicCapIcon className="h-[1.6rem]" />
          <p>Education</p>
        </span>
        Master&apos;s degree in CS & Bachelor&apos;s degree in CS from The
        University of Alabama
      </div>
      <div>
        <span className="flex flex-row items-center space-x-2 text-xl uppercase text-rose-700">
          <ComputerDesktopIcon className="h-[1.6rem]" />
          <p>Technical Skills</p>
        </span>
        {techSkills.sort().join(", ")}
      </div>
      <div>
        <span className="flex flex-row items-center space-x-2 text-xl uppercase text-rose-700">
          <ChatBubbleLeftRightIcon className="h-[1.6rem]" />
          <p>Favorite Topics</p>
        </span>
        My Goodreads shelves &#x2022; Sports! &#x2022; Any Taylor Swift era
        &#x2022; Favorite yarn colors
      </div>
    </div>
  );
}
