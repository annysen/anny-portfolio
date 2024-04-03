import Education from "./Education";
import Project from "./Project";
import Skill from "./Skill";

const About = () => {
  return (
    <>
      {/* my Skills  */}
      <Skill />

      {/* a summary of resume  */}
      <div className="w-4/5 my-5 md:my-0 mx-auto">
        <section>
          <h2 className="text-center text-3xl font-bold underline text-violet-900">
            A summary of My Resume
          </h2>
          <div className="">
            {/* education section  */}
            <Education />
            {/* project section  */}
            <Project />
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
