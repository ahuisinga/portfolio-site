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
  ];
  return (
    <>
      <div>
        <div className="items center flex flex-row space-x-2 text-lg uppercase text-rose-700">
          <AcademicCapIcon className="h-[1.6rem]" />
          <p>Education</p>
        </div>
        <p>The University of Alabama:</p>
        <ul className="list-inside list-disc">
          <li>Master&apos;s degree in CS</li>
          <li>Bachelor&apos;s degree in CS</li>
        </ul>
      </div>
      <div>
        <div className="items center flex flex-row space-x-2 text-lg uppercase text-rose-700">
          <ComputerDesktopIcon className="h-[1.6rem]" />
          <p>Technical Skills</p>
        </div>
        <ul className="list-inside list-disc">
          {techSkills.sort().map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
