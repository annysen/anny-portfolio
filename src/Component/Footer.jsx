import {
  ChatBubbleBottomCenterIcon,
  HomeIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-5">
        <div>
          <h1 className="font-bold text-xl">Anny Sen</h1>
          <p className="text-gray-300 mt-2">Front End Developer</p>
          <div className="flex gap-10 mt-5">
            <i className="fa-brands fa-facebook text-2xl"></i>
            <i className="fa-brands fa-square-twitter text-2xl"></i>
            <i className="fa-brands fa-square-instagram text-2xl"></i>
          </div>
        </div>
        <div className="flex flex-col">
          <Link className="text-gray-300 mt-2" to="/">
            Home
          </Link>
          <Link className="text-gray-300 mt-2 " to="/work">
            Work
          </Link>

          <Link
            className="text-gray-300 mt-2"
            to="https://drive.google.com/file/d/1WQdQHjpc9NUOEr1ZRNTQXXsIhdxIe0OR/view?usp=sharing"
            target="_blank"
          >
            My Resume
          </Link>
        </div>

        <div className="flex flex-col">
          <h1 className="font-bold text-xl">Contact</h1>
          <div className="flex  items-center gap-2">
            <HomeIcon className="h-6 w-6 " />
            <p className="text-gray-300 mt-2">
              6/21, Salimullah Road, Mohammadpur, Dhaka.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <PhoneIcon className="h-6 w-6 " />
            <p className="text-gray-300 mt-2">annysen95@gmail.com</p>
          </div>
          <div className="flex items-center justify-start gap-2">
            <ChatBubbleBottomCenterIcon className="h-6 w-6 " />
            <p className="text-gray-300 mt-2">+880 1882 779729</p>
          </div>
        </div>
      </div>

      {/* using a bar  */}
      <div className="h-px bg-gray-300 my-6"></div>

      <div className="text-center">
        <small>©2024 Anny Sen. All Rights Reserved</small>
        {/* <p>Powered by Ann</p> */}
      </div>
    </footer>
  );
};

export default Footer;
