import React from "react";

const GamesCard = ({ name, date }) => {
  return (
    <div className="w-full">
      <h3 className="i20:w-[70%] md:w-full mx-auto flex justify-between text-center mt-2">
        <span className="text-herobg text-sm font-bold mr-2">{name}</span>
        <span className="text-slate-500 text-sm ml-2">{date}</span>
      </h3>
    </div>
  );
};

export default GamesCard;
