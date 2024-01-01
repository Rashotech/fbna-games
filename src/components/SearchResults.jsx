import React from "react";
import { GamesGrid } from "./GamesList";
import GamesCard from "./GamesCard";

const SearchResults = ({ filteredGames }) => {
  return (
    <GamesGrid>
      {filteredGames.map((game) => (
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
    </GamesGrid>
  );
};

export default SearchResults;
