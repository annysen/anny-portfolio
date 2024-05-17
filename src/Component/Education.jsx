const Education = () => {
  return (
    <div className="mt-5 border p-5 rounded ">
      <h3 className="font-bold text-2xl underline text-center">Education</h3>
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="my-5">
          <p className="text-xl font-bold text-gray-900">
            Master in Information Technology
          </p>
          <p className="text-lg mt-2 font-bold text-gray-700">
            Jahangirnagar University{" "}
          </p>
          <p className="text-lg mt-2 text-gray-700">2023 - Present</p>
          {/* <p className="description">
            List skill/technologies here. You can change the icon above to any
            of the 1500+ FontAwesome 5 free icons available. Aenean commodo
            ligula eget dolor.
          </p> */}
        </div>
        <hr />
        <div className="my-5">
          <p className="text-xl font-bold text-gray-900">
            BSc in Computer Science and Engineering
          </p>
          <p className="text-lg mt-2 font-bold text-gray-700">
            University of Science & Technology Chittagong
          </p>
          <p className="text-lg mt-2 text-gray-700">November, 2020</p>
          {/* <p className="description">
            List skill/technologies here. You can change the icon above to any
            of the 1500+ FontAwesome 5 free icons available. Aenean commodo
            ligula eget dolor.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Education;
