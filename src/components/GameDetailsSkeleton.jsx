import React from "react";
import Skeleton from "./Skeleton";

const GameDetailsSkeleton = () => {
  return (
    <div className="space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-10 gap-y-[29px]">
        <div>
          <div className="w-[90%] mx-auto md:w-full">
            <Skeleton className="w-full h-[260px] md:h-[460px]" />
          </div>
        </div>
        <div className="space-y-10">
          <Skeleton className="h-12 w-52" />
          <div className="space-y-2">
            <Skeleton className="h-2" />
            <Skeleton className="h-2" />
            <Skeleton className="h-2 w-[98%]" />
          </div>
          <Skeleton className="h-16" />
        </div>
      </div>
      <Skeleton className="h-40" />
      <Skeleton className="h-40" />
    </div>
  );
};

export default GameDetailsSkeleton;
