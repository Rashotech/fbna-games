import React from "react";
import GamesCard from "./GamesCard";
import { games } from "../../../assets/data";

const Games = () => {
  return (
    <div>
      {games.map(game => {
        const { id, name, date } = game;
        return <GamesCard key={id} name={name} date={date} />;
      })}
    </div>
  );
};

export default Games;
