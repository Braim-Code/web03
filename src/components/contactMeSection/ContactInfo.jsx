import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="highbee840@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+234 916 298 4380" Image={FiPhone} />
      <SingleInfo text="Lagos State,Nigeria" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
