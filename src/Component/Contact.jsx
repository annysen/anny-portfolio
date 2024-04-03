import {
  ChatBubbleBottomCenterIcon,
  EnvelopeIcon,
  HomeIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";

const Contact = () => {
  return (
    <div className="flex flex-col my-10  px-5 md:px-40  mx-auto  ">
      <h1 className="font-bold text-xl ">Contact</h1>
      <div className="flex  items-center gap-2 mt-2">
        <HomeIcon className="h-6 w-6 " />
        <p>6/21, Salimullah Road, Mohammadpur, Dhaka.</p>
      </div>
      <div className="flex items-center gap-2 mt-2 ">
        <EnvelopeIcon className="h-6 w-6 " />
        <p>annysen95@gmail.com</p>
      </div>
      <div className="flex items-center gap-2 mt-2 ">
        <div>
          <PhoneIcon className="h-6 w-6 " />
        </div>
        <p>+880 1882 779729</p>
      </div>
    </div>
  );
};

export default Contact;
