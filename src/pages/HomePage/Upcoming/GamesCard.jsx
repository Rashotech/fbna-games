import React from "react";

const GamesCard = ({ name, date }) => {
  return (
    <div className="w-full">
      <h3 className="text-center mt-2">
        <span className="text-herobg font-bold mr-2">{name}</span> -{" "}
        <span className="text-slate-500 ml-2">{date}</span>
      </h3>
    </div>
  );
};

export default GamesCard;
