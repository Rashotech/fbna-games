import React from "react";
import GamesCard from "./GamesCard";
import GamesCardSkeleton from "./GamesCardSkeleton";
import { games } from "../../../assets/data";

const Games = ({ games, isLoading, error }) => {
  return (
    <div>
      {games.length == 0 && (
        <div className="max-w-[200px] mx-auto text-herobg font-bold text-center">
          {" "}
          Stay tuned for the games of the week...
        </div>
      )}

      {isLoading && (
        <div className="w-full mx-auto flex justify-center flex-wrap gap-4 md:w-[87%] lg:w-full lg:gap-3 xl:gap-6">
          {Array.from({ length: 3 }, () => null).map((arr, i) => {
            return <GamesCardSkeleton key={i} />;
          })}
        </div>
      )}
      {games.length > 0 &&
        games?.map(game => {
          const { id, name, startDate } = game;
          return <GamesCard key={id} name={name} date={startDate} />;
        })}
    </div>
  );
};

export default Games;
