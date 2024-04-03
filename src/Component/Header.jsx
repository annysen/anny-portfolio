import { Link } from "react-router-dom";
import cover from "../assets/cover.jpg";
// w-1/2 md:w-auto
const Header = () => {
  return (
    <div className="bg-gray-100 px-5 md:px-40">
      <section className="grid grid-cols-1 md:grid-cols-2  items-center justify-items-stretch">
        <div className=" flex items-center">
          <div>
            <h1 className="text-violet-900 font-extrabold text-5xl">Hello</h1>
            <p className="mt-3 font-bold">I am a Front End Developer</p>
            <p className="text-gray py-5">
              Passionate and skilled web developer with expertise in HTML5,
              CSS3, ES6, Tailwind, Bootstrap 5, GitHub, and VS Code. Currently
              expanding my skill set with a focus on React, where I have gained
              foundational knowledge and am actively enhancing my proficiency.
              Committed to creating dynamic and responsive web applications, I
              am driven by a thirst for continuous improvement and thrive in
              collaborative team environments. Eager to contribute my evolving
              skills and innovative mindset to deliver impactful solutions for
              diverse businesses.
            </p>
            <Link
              to="https://drive.google.com/file/d/1WQdQHjpc9NUOEr1ZRNTQXXsIhdxIe0OR/view?usp=sharing"
              target="_blank"
            >
              <button className="btn-primary mt-5">My Resume</button>
            </Link>
          </div>
        </div>
        <div className=" place-self-end">
          <img src={cover} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Header;
