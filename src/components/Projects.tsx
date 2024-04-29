import Image from "next/image";

export default function ProjectsComponent() {
  return (
    <div className="bg-emerald-50 px-16 py-4">
      <h3 className="text-2xl font-bold uppercase text-emerald-500">
        Projects
      </h3>
      <div className="w-56 bg-emerald-500 py-1"></div>
      <div className="grid grid-cols-1 gap-6 py-3 lg:grid-cols-2">
        <p className=" text-slate-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="mx-auto my-auto">
          <Image
            src={"/images/profile.jpg"}
            width={200}
            height={200}
            alt="fun photo here"
          />
        </div>
        <div className="mx-auto my-auto">
          <Image
            src={"/images/profile.jpg"}
            width={200}
            height={200}
            alt="fun photo here"
          />
        </div>
        <p className=" text-slate-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}
