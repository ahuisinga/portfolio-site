import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  url: string;
  img: string;
  attributes?: string[];
}

export default function ProjectCardComponent({
  title,
  description,
  url,
  img,
  attributes,
}: Props) {
  return (
    <div className="group relative grid min-h-[150px] grid-cols-1 gap-4 rounded p-8 text-slate-500 transition-all duration-300 md:grid-cols-8 md:hover:bg-neutral-200 md:hover:drop-shadow-sm">
      <Image
        src={img}
        height={120}
        width={200}
        alt={title}
        className="md:col-span-2 "
      />
      <div className="md:col-span-6">
        <h3>
          <a
            className="group/link inline-flex items-baseline text-base font-bold text-slate-500 duration-300 hover:text-indigo-300 focus-visible:font-semibold focus-visible:text-indigo-300 sm:text-xl sm:font-medium sm:hover:font-semibold"
            href={url}
            rel="noreferrer noopener"
            aria-label={`${title} (opens in a new tab)`}
            target="_blank"
          >
            <span className="absolute inset-0 hidden rounded md:block"></span>
            <span className="inline-block">
              {title}
              <ArrowUpRightIcon className="ml-1 inline-block h-[1.5rem] shrink-0 translate-y-px transition-transform duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-4" />
            </span>
          </a>
        </h3>
        <p className="mt-2 text-base sm:text-lg">{description}</p>
        <ul className="flex flex-wrap space-x-1">
          {attributes?.map((val, idx) => (
            <li key={idx}>
              <div className="badge mt-1 border-2 border-amber-300 bg-amber-300/20 text-sm text-indigo-300">
                {val}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
