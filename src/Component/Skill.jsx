const Skill = () => {
  return (
    <div>
      <div className="w-4/5 my-5 mx-auto">
        <h1 className="text-center text-3xl font-bold underline text-violet-900">
          My Skills
        </h1>
        <p className="text-center py-5">
          I have more than 1 years experience building website. Below is a quick
          overview of my main technical skill sets and technologies i use. Want
          to find out more about my experience? Check out my online resume and
          project portfolio.
        </p>
        <ul className="flex flex-wrap gap-5 justify-center text-xl font-bold border rounded p-5">
          <li>1. React js</li>
          <li>2. ES6</li>
          <li>3. Tailwind</li>
          <li>4. Github</li>
          <li>5. VS Code</li>
          <li>6. Figma</li>
        </ul>
      </div>
    </div>
  );
};

export default Skill;
