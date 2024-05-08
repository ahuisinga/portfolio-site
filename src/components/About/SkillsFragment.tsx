import {
  AcademicCapIcon,
  ComputerDesktopIcon,
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
    <div className="space-y-2">
      <div>
        <span className="flex flex-row items-center space-x-2 text-lg uppercase text-rose-700">
          <AcademicCapIcon className="h-[1.6rem]" />
          <p>Education</p>
        </span>
        Master&apos;s degree in CS & Bachelor&apos;s degree in CS from The
        University of Alabama
      </div>
      <div>
        <span className="flex flex-row items-center space-x-2 text-lg uppercase text-rose-700">
          <ComputerDesktopIcon className="h-[1.6rem]" />
          <p>Technical Skills</p>
        </span>
        {techSkills.sort().join(", ")}
      </div>
    </div>
  );
}
