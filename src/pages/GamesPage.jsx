import React from "react";
import GamesList from "../components/GamesList.jsx";

const games = [
  {
    image: "/bottle.png",
    id: 1,
    category: "Indoor Game",
    participants: 4,
    venue: "Conference Hall",
    name: "Bottle Flipping",
  },
  {
    image: "/chess.png",
    id: 2,
    category: "Indoor Game",
    participants: 4,
    venue: "Conference Hall",
    name: "Chess",
  },
  {
    image: "/dictionary.png",
    id: 3,
    category: "Indoor Game",
    participants: 8,
    venue: "Conference Hall",
    name: "Dictionary",
  },
  {
    image: "/fifa.png",
    id: 4,
    category: "Indoor Game",
    participants: 4,
    venue: "Conference Hall",
    name: "Fifa",
  },
  {
    image: "/football.png",
    id: 5,
    category: "Outdoor Game",
    participants: 8,
    venue: "TBD",
    name: "Football",
  },
  {
    image: "/karaoke.png",
    id: 6,
    category: "Indoor Game",
    participants: 4,
    venue: "Conference Hall",
    name: "Karaoke",
  },
  {
    image: "/race.png",
    id: 7,
    category: "Outdoor Game",
    participants: 16,
    venue: "TBD",
    name: "Race",
  },
  {
    image: "/scrabble.png",
    id: 9,
    category: "Indoor Game",
    participants: 8,
    venue: "Conference Hall",
    name: "Scrabble",
  },
  {
    image: "/swimming.png",
    id: 10,
    category: "Outdoor Game",
    participants: 8,
    venue: "Academy Pool",
    name: "Swimming",
  },
];

const GamesPage = () => {
  return (
    <div className="bg-[#b3c0d1]">
      <h1 className="pt-16 text-center text-3xl md:text-5xl font-bold text-primary">
        Every Game you can think of...
      </h1>
      <div className="w-[92%] md:w-[80%] pt-12 pb-24 mx-auto">
        <GamesList games={games} />
      </div>
    </div>
  );
};

export default GamesPage;
