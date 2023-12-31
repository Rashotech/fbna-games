import React from "react";

const LeaderCardSkeleton = () => {
  return (
    <div
      className="relative w-[90%] max-w-[1000px] rounded-md mx-auto mb-3 p-5 flex justify-between
        bg-neutral-300 before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 hover:shadow-lg before:animate-[shimmer_1.5s_infinite] overflow-hidden">
      <div className="basis-[50%] flex w-[40px] h-[40px] xsm:basis-[40%] sm:basis-[30%]">
        <div className="w-[40px] h-[40px] bg-neutral-200 mr-3 rounded-full"></div>
        <p className="basis-[50%] h-3/4 mt-2 bg-neutral-200 rounded-md"></p>
      </div>
      <div className="sm:basis-[30%]">
        <div className="w-[40px] h-[40px] bg-neutral-200 mr-3 rounded-md"></div>
      </div>
      <div className="basis-[30%] h-3/4 text-[0.75rem] bg-neutral-200 mt-2 rounded-md"></div>
    </div>
  );
};

export default LeaderCardSkeleton;
