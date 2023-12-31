import React from "react";

const FeaturedCard = ({ src, name, cohort }) => {
  return (
    <div className="relative w-full max-w-[400px] mx-auto bg-card rounded-md sm:max-w-[300px] sm:mx-0">
      <div className="w-[100%] h-[100%]">
        <img src={src} alt="" className="w-[100%] rounded-l-md rounded-r-md" />
      </div>
      <div className="absolute z-10 bottom-0 right-0 w-[100%] p-3 text-orange-500 text-right bg-white/90">
        <p className="text-md text-herobg font-bold">{name}</p>
        <span className="text-sm">Cohort {cohort}</span>
      </div>
    </div>
  );
};

export default FeaturedCard;
