const InformationSummary = ({ item }) => {
  return (
    <div className="bg-white shadow-2xl rounded-3xl mt-10 transform transition duration-500 hover:scale-105 border-b-4 border-b-transparent hover:border-b-picto-primary text-center">
      <div className="w-auto h-auto mx-4 my-5">
        <p className="text-[16px] xxs:text-[18px] sm:text-[32px] font-semibold text-gray-700 transition-colors duration-500 hover:text-picto-primary">
          {item.description}
        </p>
        <p className="text-[8px] xxs:text-[9px] sm:text-[16px] font-normal px-4 text-gray-500 break-words transition-colors duration-500 hover:text-picto-primary">
          {item.title}
        </p>
      </div>
    </div>
  );
};

export default InformationSummary;
