import {
  ChatBubbleBottomCenterIcon,
  HomeIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center md:my-32 mx-auto px-10">
      <h1 className="font-bold text-xl ">Contact</h1>
      <div className="flex  items-center gap-2 ">
        <HomeIcon className="h-6 w-6 " />
        <p className=" mt-2">6/21, Salimullah Road, Mohammadpur, Dhaka.</p>
      </div>
      <div className="flex items-center gap-2 ">
        <PhoneIcon className="h-6 w-6 " />
        <p className=" mt-2">annysen95@gmail.com</p>
      </div>
      <div className="flex items-center justify-start gap-2 ">
        <ChatBubbleBottomCenterIcon className="h-6 w-6 " />
        <p className=" mt-2">+880 1882 779729</p>
      </div>
    </div>
  );
};

export default Contact;
