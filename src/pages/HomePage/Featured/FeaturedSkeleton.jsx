import React from "react";

const FeaturedSkeleton = () => {
  return (
    <div className="relative w-full max-w-[400px] mx-auto bg-card rounded-md sm:max-w-[300px] sm:mx-0 before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 hover:shadow-lg before:animate-[shimmer_1.5s_infinite] overflow-hidden">
      <div className="w-[100%]">
        <div className="w-[100%] h-[300px] bg-neutral-300 rounded-l-md rounded-r-md">
          {" "}
        </div>
      </div>
      <div className="absolute z-10 bottom-0 right-0 w-[100%] h-1/4 p-3 bg-white/90">
        <p className="w-[50%] h-1/4 bg-neutral-200 ml-[8rem] rounded-md mb-3 mt-2"></p>
        <p className="w-[30%] h-1/4 bg-neutral-200 ml-[11.4rem] rounded-md"></p>
      </div>
    </div>
  );
};

export default FeaturedSkeleton;
