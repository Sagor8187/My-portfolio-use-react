import {
  faFacebookF,
  faDribbble,
  faLinkedin,
  faGithub,        
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Email icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const socialIcons = [
  { icon: faFacebookF, link: "#!" },
  { icon: faDribbble, link: "#!" },
  { icon: faGithub, link: "https://github.com/Sagor8187" }, 
  { icon: faLinkedin, link: "https://www.linkedin.com/in/sagor-sutradhar-895199383/" },
  { icon: faEnvelope, link: "sdsagor8187@gmail.com" }, 
];

const SocialMedia = () => {
  return socialIcons.map((item, index) => (
    <a
      href={item.link}
      className={`text-picto-primary hover:bg-picto-primary p-2 pt-3 xs:p-2.5 xs:pt-3.75 sm:pt-4 md:pt-5 sm:p-3 md:p-3.75 hover:text-white rounded-md`}
      key={index}
    >
      <FontAwesomeIcon
        icon={item.icon}
        className={`text-xl w-4.5 aspect-square`}
      />
    </a>
  ));
};

export default SocialMedia;
