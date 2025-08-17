import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://linkedin.com/in/ibrahim-dauda-986178329" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/Braim-Code" Icon={FiGithub} />
      <SingleContactSocial link="https://instagram.com/your-username" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
