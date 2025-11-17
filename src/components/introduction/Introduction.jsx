import "./introduction.css";
import InformationSummary from "./InformationSummary";

// Information summary data
const informationSummaryData = [
  {
    id: 1,
    title: " Different type of E-commerce project",
    description: "Development",
  },
  {
    id: 2,
    title: "Hacker rank,codeforces ",
    description: "Problem solving",
  },
  {
    id: 3,
    title: "AI text to Humanize text",
    description: "Design Clint side",
  },
  
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, I’m
            <span className="text-xl md:text-5xl lg:text-6xl text-nowrap shrink-0  inline-block w-full">
              Gobindo Sutradhar Sagor
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            I am a dedicated React Developer with expertise in building dynamic, responsive, and interactive web applications. I create reusable components, manage state efficiently, and implement modern JavaScript practices. My focus is on delivering seamless user experiences, clean code, and visually appealing, high-performance web interfaces.
          </p>
          <p className="text-center lg:text-start">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
              href="sdsagor8187@gmail.com"
            >
              Say Hello!
            </a>
          </p>
        </div>
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 w-fit mt-10 gap-3">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative`}
      >
        <img
          className={`shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl`}
          src="https://i.ibb.co.com/WpcTwV7v/profile.png"
          alt="Sagor image"
        />
      </div>
    </div>
  );
};

export default Introduction;
