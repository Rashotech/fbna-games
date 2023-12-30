import React from "react";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { games } from "../config/constants";
import NotFound from "../components/NotFound";
import Container from "../components/Container";
import GamesInfo from "../components/GamesInfo";
import ParticipantDetails from "../components/ParticipantDetails";
import GameResult from "../components/GameResult";
import FeaturedGallery from "../components/FeaturedGallery";
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";

const participants = [
  {
    id: 1,
    name: "Jemima-Naomi Ben",
    cohort: "Cohort 4",
  },
  {
    id: 2,
    name: "Alison Jane",
    cohort: "Cohort 4",
  },
  {
    id: 3,
    name: "Temitope Badmus",
    cohort: "Cohort 1",
  },
  {
    id: 4,
    name: "Rasheed Ayoade",
    cohort: "Cohort 1",
  },
  {
    id: 5,
    name: "John Doe",
    cohort: "Cohort 3",
  },
  {
    id: 6,
    name: "Oyinkansola George",
    cohort: "Cohort 3",
  },
  {
    id: 7,
    name: "Jackson Peters",
    cohort: "Cohort 2",
  },
  {
    id: 8,
    name: "Stanley Stans",
    cohort: "Cohort 2",
  },
  {
    id: 9,
    name: "Joshua James",
    cohort: "Cohort 2",
  },
  {
    id: 10,
    name: "David Olaoluwa",
    cohort: "Cohort 1",
  },
  {
    id: 11,
    name: "Stanley Stans",
    cohort: "Cohort 2",
  },
  {
    id: 12,
    name: "Joshua James",
    cohort: "Cohort 2",
  },
  {
    id: 13,
    name: "David Olaoluwa",
    cohort: "Cohort 1",
  },
];

const results = [
  { cohort: "Cohort 4", points: 120, position: "1st" },
  { cohort: "Cohort 3", points: 100, position: "2nd" },
  { cohort: "Cohort 2", points: 90, position: "3rd" },
  { cohort: "Cohort 1", points: 89, position: "4th" },
];

const images = [
  "/bottle.png",
  "/chess.png",
  "/dictionary.png",
  "/fifa.png",
  "/football.png",
  "/karaoke.png",
  "/race.png",
  "/scrabble.png",
  "/swimming.png",
];

const GameDetails = () => {
  const { id } = useParams();
  const game = useMemo(() => games.find((game) => game.id == id), [id]);

  if (!game) {
    return (
      <NotFound
        message={"Game details not found"}
        redirectTo="/games"
        redirectText="Go back to games"
      />
    );
  }

  return (
    <div className="pt-14 pb-28 mb:pt-16">
      <ScrollToTopOnMount />
      <Container size="w-[90%] md:w-[92%]">
        <GamesInfo name={game.name} image={game.image} venue={game.venue} />
        <ParticipantDetails participants={participants} className="mt-14" />
        <GameResult results={results} className="mt-14" />
        <FeaturedGallery images={images} className="mt-[104px]" />
      </Container>
    </div>
  );
};

export default GameDetails;
