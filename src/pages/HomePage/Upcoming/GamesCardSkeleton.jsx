import React from 'react'

const GamesCardSkeleton = () => {
  return (
    <div className="relative w-full mx-auto bg-card rounded-md sm:max-w-[300px] sm:mx-0 before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 hover:shadow-lg before:animate-[shimmer_1.5s_infinite] overflow-hidden">
      <p className="flex justify-between h-[30px] p-[0.25rem] bg-neutral-300 rounded-l-md rounded-r-md">
        <span className="block basis-[40%] h-2/4 bg-neutral-200 rounded-md mt-[0.25rem]"></span>{" "}
        <span className="block basis-[40%] h-2/4 bg-neutral-200 rounded-md mt-[0.25rem]"></span>
      </p>
    </div>
  );
}

export default GamesCardSkeleton