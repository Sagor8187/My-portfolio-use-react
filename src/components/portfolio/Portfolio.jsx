import Projects from "./Projects";


const projectData = [
  {
    id: 1,
    image: "https://i.ibb.co.com/G42mwBDx/Screenshot-2025-10-17-000043.png",
    category: "CLIENT SIDE DESIGN",
    title: "AI Text to Humanize Text",
    description:
      "Developed a responsive web application that converts AI-generated or robotic text into natural, human-like language. Built using HTML, Raw CSS, Tailwind CSS, and JavaScript. Integrated text-processing logic to enhance readability and maintain a human tone. The frontend handles dynamic input/output, while the backend manages API-based text refinement.",
    link: "https://sagor8187.github.io/Ai-text-to-humanized-text/#",
  },
  
  {
    id: 2,
    image: "https://i.ibb.co.com/gLbz4qtc/post.png",
    category: "Clint Side DESIGN E-Commarce",
    title: "NEST E-Commarce",
    description:
      "Built a responsive Nest e-commerce app using React and Tailwind. Users can browse products, add to cart, and remove items easily. Focused on clean UI, smooth interactions, and seamless shopping experience. Key Features: Product listing, add to cart, remove from cart, responsive design, interactive UI.",
    link: "https://marvelous-belekoy-79b799.netlify.app/",
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/NdDtkchz/luxe.png",
    category: "UI-UX DESIGN LUXEMART ",
    title: "Luxe Mart – E-commerce Web Application",
    description:
      "Developed a fully responsive e-commerce platform using HTML, Tailwind CSS, and JavaScript. Implemented dynamic product listings, category filters, and an interactive shopping cart system. Focused on clean UI/UX design, fast performance, and seamless user experience across all devices.",
    link: "https://sagor8187.github.io/Luxemart-E-Commarce-project/index.html",
  },
  // {
  //   id: 4,
  //   image: card4,
  //   category: "UI-UX DESIGN",
  //   title: "Product Admin Dashboard",
  //   description:
  //     "Created a responsive dashboard layout that adapts smoothly across devices and screen sizes and so on.",
  //   link: "#!",
  // },
  // {
  //   id: 5,
  //   image: card5,
  //   category: "UI-UX DESIGN",
  //   title: "Product Admin Dashboard",
  //   description:
  //     "Implemented interactive charts and widgets to visualize product data effectively for stakeholders.",
  //   link: "#!",
  // },
  // {
  //   id: 6,
  //   image: card6,
  //   category: "UI-UX DESIGN",
  //   title: "Product Admin Dashboard",
  //   description:
  //     "Enhanced user experience by streamlining workflows and optimizing interface components and so on.",
  //   link: "#!",
  // },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent work, showcasing my skills in
            creating user-centric and visually appealing interfaces.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Project
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
