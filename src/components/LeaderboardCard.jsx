import React from "react";

const LeaderboardCard = ({ name, src, points, position }) => {
  return (
    <div
      className={`w-[90%] rounded-md mx-auto mb-3 p-5 flex justify-between ${
        position == 1 ? "bg-leadercardbg" : "bg-gray-200"
      }`}>
      <div className="basis-[50%] flex w-[40px] h-[40px] xsm:basis-[40%] sm:basis-[30%]">
        <img
          src={`https://ui-avatars.com/api/?name=${name}&background=4E6D93&color=022E64&font-size=.4`}
          alt=""
          className=" mr-3 rounded-full"
        />
        <p className="text-herobg font-bold mt-2 text-sm">{name}</p>
      </div>
      <div className="sm:basis-[30%]">
        <img src={src} alt={src} className=" w-[40px] h-[40px]" />
      </div>
      <div className="text-[0.75rem] text-herobg font-bold pt-2 sm:text-sm">
        {points} Points
      </div>
    </div>
  );
};

export default LeaderboardCard;
