import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div className="mt-5 border p-5 rounded">
      <h3 className="font-bold text-2xl underline text-center">Projects</h3>
      <div className="flex flex-col md:flex-row justify-between  gap-10">
        <div className="my-5">
          <p className="text-xl font-bold text-gray-900">1. Nextpage</p>
          <p className="text-lg mt-2 font-bold text-gray-700">
            An online bookstore where users can purchase books.
          </p>
          <p className="text-lg my-2 text-gray-700">
            The online bookstore, developed with REACT and Tailwind, offers a
            responsive interface for users to browse and purchase books
            conveniently via integrated APIs.
          </p>
          <Link
            className="font-bold bg-violet-700 text-white border rounded hover:bg-violet-600 px-3 py-1"
            to="https://nextpage-anny.netlify.app/"
            target="_blank"
          >
            Live Link
          </Link>
        </div>
        <hr />
        <div className="my-5">
          <p className="text-xl font-bold text-gray-900">2. To-Do List</p>
          <p className="text-lg mt-2 font-bold text-gray-700">
            Daily To-Do list can be added and deleted.
          </p>
          <p className="text-lg my-2 text-gray-700">
            The Daily To-Do list website, built with HTML5, CSS3, and Vanilla
            JavaScript, is device-responsive. Users can easily add and delete
            tasks, ensuring a seamless and efficient task management experience.
          </p>
          <Link
            className="font-bold bg-violet-700 text-white border rounded hover:bg-violet-600 px-3 py-1"
            to="https://to-do-list-anny.netlify.app/"
            target="_blank"
          >
            Live Link
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
