import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Web Development",
    description:
      "I build responsive, high-performance web applications using modern frontend technologies like React, JavaScript, and Tailwind CSS, focusing on scalability, maintainability, and cross-browser compatibility.",
  },
  {
    id: 2,
    title: "User Interface (UI)",
    description:
      "I design and implement visually appealing, responsive, and interactive interfaces using HTML, CSS, Tailwind CSS, and React. I focus on layout, typography, and color to ensure a consistent and engaging user journey.",
  },
  {
    id: 3,
    title: "User Experience (UX)",
    description:
      "I follow UX principles to create intuitive and enjoyable experiences. By optimizing component placement, responsiveness, accessibility, and interactive elements, I ensure users can navigate applications smoothly and effortlessly.",
  },
  
  
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            Frontend Developer skilled in HTML, CSS, JavaScript, React, and Tailwind CSS. Passionate about creating responsive and user-friendly web applications. Always eager to learn new technologies and deliver high-quality solutions.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My approach as a Frontend Developer combines creativity and technical skills to build web applications that are both visually appealing and highly functional for users.
          </p>
        </div>
        <a
          href="#!"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
