import React from "react";
import GamesList from "../components/GamesList.jsx";
import Pagination from "../components/Pagination.jsx";
import usePagination from "../hooks/usePagination.js";

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
  {
    image: "/football.png",
    id: 11,
    category: "Outdoor Game",
    participants: 8,
    venue: "TBD",
    name: "Soccer",
  },
  {
    image: "/karaoke.png",
    id: 12,
    category: "Indoor Game",
    participants: 6,
    venue: "Conference Hall",
    name: "Singing",
  },
  {
    image: "/race.png",
    id: 13,
    category: "Outdoor Game",
    participants: 16,
    venue: "TBD",
    name: "Relay",
  },
  {
    image: "/scrabble.png",
    id: 14,
    category: "Indoor Game",
    participants: 8,
    venue: "Conference Hall",
    name: "Scrabble",
  },
  {
    image: "/swimming.png",
    id: 15,
    category: "Outdoor Game",
    participants: 8,
    venue: "Academy Pool",
    name: "Water Hockey",
  },
  {
    image: "/bottle.png",
    id: 16,
    category: "Indoor Game",
    participants: 4,
    venue: "Conference Hall",
    name: "Drinker",
  },
  {
    image: "/chess.png",
    id: 17,
    category: "Indoor Game",
    participants: 4,
    venue: "Conference Hall",
    name: "Chess",
  },
  {
    image: "/dictionary.png",
    id: 18,
    category: "Indoor Game",
    participants: 8,
    venue: "Conference Hall",
    name: "Dictionary",
  },
  {
    image: "/fifa.png",
    id: 19,
    category: "Indoor Game",
    participants: 4,
    venue: "Conference Hall",
    name: "Play Station",
  },
  {
    image: "/football.png",
    id: 20,
    category: "Outdoor Game",
    participants: 8,
    venue: "TBD",
    name: "Women Football",
  },
];

const GamesPage = () => {
  const {
    currentData: paginatedGames,
    hasNext,
    hasPrevious,
    next,
    previous,
    currentPage,
    totalPages,
    setPage,
  } = usePagination(games);
  return (
    <div className="bg-[#b3c0d1]">
      <h1 className="pt-16 text-center text-3xl md:text-5xl font-bold text-primary">
        Every Game you can think of...
      </h1>
      <div className="w-[92%] md:w-[80%] pt-12 pb-24 mx-auto space-y-[112px]">
        <GamesList games={paginatedGames} />
        <div className="flex items-center justify-center">
          <Pagination
            hasNext={hasNext}
            hasPrevious={hasPrevious}
            currentPage={currentPage}
            next={next}
            previous={previous}
            totalPages={totalPages}
            setPage={setPage}
          />
        </div>
      </div>
    </div>
  );
};

export default GamesPage;
