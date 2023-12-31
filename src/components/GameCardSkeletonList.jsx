import Skeleton from "./Skeleton";
import { GamesGrid } from "./GamesList";
import { generateSkeleton } from "../utils";

export const GameCardSkeleton = () => {
  return (
    <div className="flex flex-col w-full h-[433px] rounded-lg md:w-[302px]">
      <Skeleton
        className="w-full h-[58%] rounded-t-lg rounded-none"
        bgColor="bg-gray-300"
      />
      <div className="h-[42%] bg-white pt-6 pb-[22px] rounded-b-lg px-8 space-y-6">
        <Skeleton className="h-2 rounded-sm" bgColor="bg-gray-300" />
        <div className="space-y-2">
          <Skeleton className="h-2 rounded-sm w-10/12" />
          <Skeleton className="h-2 rounded-sm w-10/12" />
        </div>
      </div>
    </div>
  );
};

export const GameCardSkeletonList = ({ size = 6 }) => {
  const placeholders = generateSkeleton(size);

  return (
    <GamesGrid>
      {placeholders.map((placeholder) => (
        <GameCardSkeleton key={placeholder} />
      ))}
    </GamesGrid>
  );
};

export default GameCardSkeletonList;
