import WorkSteps from "./WorkSteps";

const workStepData = [
  {
    id: 1,
    title: "REACT",
    description:
      "React is a powerful JavaScript library for building fast, interactive, and reusable user interfaces efficiently using a component-based architecture.",
    image: "https://i.ibb.co.com/pvfWcLTS/react.png"
  },
  {
    id: 2,
    title: "TAILWIND",
    description:
      "Tailwind CSS is a utility-first CSS framework that lets you rapidly build modern, responsive, and customizable designs directly in your HTML.",
    image :"https://i.ibb.co.com/Y7VJhF8S/tailwind.png"
  },
  {
    id: 3,
    title: "JAVA SCRIPT",
    description:
      "JavaScript is a powerful programming language that adds interactivity, logic, and dynamic functionality to websites, making web pages alive and engaging.",
    image: "https://i.ibb.co.com/vCytKhmw/js-logo.png"
  },
  {
    id: 4,
    title: "PYTHON",
    description:
      "Python is a versatile, easy-to-learn programming language used for web development, data science, automation, artificial intelligence, and more.",
    image:"https://i.ibb.co.com/XkNLB5Y4/python.png",
  },
  {
    id: 5,
    title: "HTML5",
    description:
      "HTML5 is the latest version of HyperText Markup Language used to structure and present content on modern, responsive web pages.",
    image:"https://i.ibb.co.com/d4DqWsLP/html-logo.png",
  },
    {
    id: 6,
    title: "CSS3",
    description:
      "CSS3 is a styling language that enhances websites with colors, layouts, animations, and responsive designs for a beautiful user experience.",
    image:"https://i.ibb.co.com/nsX6SzsX/css-2.png",
  },
   {
    id: 7,
    title: "BOOTSTRAP",
    description:
      "Bootstrap is a responsive front-end framework that simplifies web design using prebuilt CSS and JavaScript components for faster development.",
    image:"https://i.ibb.co.com/fdyrHLHp/boot-strap.png",
  },
  {
    id: 8,
    title: "GITHUB",
    description:
      "GitHub is a code hosting platform for version control and collaboration, allowing developers to manage projects and share code efficiently.",
    image:"https://i.ibb.co.com/kvzsxHm/github-logo.png",
  },
  {
    id: 9,
    title: "GIT",
    description:
      "Git is a distributed version control system that tracks code changes, enables collaboration, and manages project history efficiently.",
    image:" https://i.ibb.co.com/1t77vFHy/git.png",
  },

 
  
];

const WorkProcess = () => {
  return (
    <>
    <div className="text-center">
      <h1 className="text-5xl font-bold mt-10">SKILL</h1>
    </div>
    <div
      className="content grid xl:grid-cols-1  xl:items-center px-2 py-5 md:py-10 lg:py-25 xl:py-35 max-xxl:px-4"
      id="work-process"
    >
      

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10 px-6 max-w-6xl mx-auto">
          {workStepData.map((data, index) => (
            <WorkSteps
              data={data}
              style="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300"
              key={index}
            />
          ))}
        </div>

    </div>
    </>
  );
};

export default WorkProcess;
