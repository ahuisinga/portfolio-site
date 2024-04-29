export default function AboutComponent() {
  return (
    <div className=" bg-orange-50 px-16 py-4">
      <div className="">
        <h3 className="text-2xl font-bold uppercase text-red-300" id="about">
          About Me
        </h3>
        <div className="w-56 bg-red-300 py-1"></div>
      </div>
      <div className="grid grid-cols-1 gap-6 py-3 lg:grid-cols-2">
        <div className="mx-auto my-auto">
          <h2 className="text-indigo-300">At A Glance</h2>
          <p>Education: Master&apos;s degree in Computer Science</p>
          <p>Skills</p>
          <ol>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>Java</li>
            <li>Python</li>
          </ol>
          <p>Fun Facts</p>
          <ol>
            <li>Roll Tide!</li>
            <li>Taylor Swift fan</li>
          </ol>
        </div>
        <div className="space-y-4 text-slate-500">
          <p>
            Hi! I&apos;m Anna, a software developer with a knack for crafting
            innovative solutions and tackling for solving the nittiest and
            grittiest of challenges. With over three years of experience under
            my belt, I am currently part of a dynamic team at the forefront of
            harnessing the power of the Salesforce platform to deliver seamless
            data solutions to our users.
          </p>
          <p>
            In the world of Salesforce, I wear many hats. From writing Apex code
            that processes millions of records daily to designing intuitive
            front-end experiences, I am all about making technology work
            smarter, not harder. Whether it is optimizing security models or
            fine-tuning our devops pipeline, I thrive on the thrill of
            problem-solving. In the words of John &lsquo;Hannibal&rsquo; Smith,
            &ldquo;I love it when a plan comes together!&rdquo;
          </p>
          <p>
            A lifelong learner, I am always eager to dive into new challenges
            and explore emerging technologies. Whether it is mastering the
            latest tech trends or embarking on creative side projects, I am
            constantly seeking out opportunities to expand my skill set and push
            the boundaries of what is possible.
          </p>
          <p>
            But if I had to describe myself in one word, it would be
            &ldquo;people-person.&rdquo; I am a firm believer in the power of
            human connection. I love engaging with others, whether it is sharing
            ideas, swapping stories, or simply connecting over a shared passion.
            Communication is key, and I am committed to fostering collaboration
            in everything I do.
          </p>
        </div>
      </div>
    </div>
  );
}
