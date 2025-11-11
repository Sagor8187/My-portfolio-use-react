import SocialMedia from "../socialMedia/SocialMedia";

const Footer = () => {
  return (
    <div className="pt-25 md:pt-40 content max-2xl:px-3 text-center bg-neutral-300">
     
       
          <p className="text-center">© 2025 Sagor Roy. All rights reserved.</p>

      <p className="text-center max-xs:text-[12px] max-md:text-[14px] w-full py-10 text-black">
        Developed with  by
        <a
          href="#"
          className="underline font-bold text-black"
          target="_blank"
        >
          SAGOR
        </a>
        <SocialMedia></SocialMedia>
      </p>
    </div>
  );
};

export default Footer;
