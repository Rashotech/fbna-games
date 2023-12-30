import React from "react";
import GamesCard from "./GamesCard";

const GamesList = ({ games }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-0 md:gap-x-20 gap-y-[42px]">
      {games.map((game) => (
        <GamesCard
          id={game.id}
          name={game.name}
          category={game.type}
          participants={game.participants.length}
          status={game.status}
          venue={game.venue}
          key={game.id}
          image={game.img}
        />
      ))}
    </section>
  );
};

export default GamesList;
