import React from "react";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import useFetcher from "../hooks/useFetcher";
import { games } from "../config/constants";
import NotFound from "../components/NotFound";
import Container from "../components/Container";
import GamesInfo from "../components/GamesInfo";
import ParticipantDetails from "../components/ParticipantDetails";
import GameResult from "../components/GameResult";
import FeaturedGallery from "../components/FeaturedGallery";
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";
import GameDetailsSkeleton from "../components/GameDetailsSkeleton";
import FetchError from "../components/FetchError";
import { getSingleGame } from "../services/games";
import { hasData } from "../utils";

const GameDetails = () => {
  const { id } = useParams();

  const {
    data: game,
    error,
    refetch,
    isLoading,
  } = useFetcher(getSingleGame, id);

  console.log(game);

  if (error) {
    if (error.includes("not exist")) {
      return (
        <NotFound
          message="Games details not found"
          redirectText="Go back to games"
          redirectTo="/games"
        />
      );
    }

    return (
      <FetchError
        error="Games details couldn't be fetched, please try again"
        onRefetch={refetch}
      />
    );
  }

  return (
    <div className="pt-14 pb-28 bg-white mb:pt-16">
      <ScrollToTopOnMount />
      <Container size="w-[90%] md:w-[92%]">
        {isLoading && <GameDetailsSkeleton />}
        {game && (
          <>
            <GamesInfo
              name={game.name}
              image={game.img}
              venue={game.venue}
              description={game.description}
              startDate={game.startDate}
              endDate={game.endDate}
              status={game.status}
            />
            <ParticipantDetails
              participants={game.participants}
              className="mt-14"
            />
            <GameResult results={game.result} className="mt-14" />
            <FeaturedGallery images={game.images} className="mt-[104px]" />
          </>
        )}
      </Container>
    </div>
  );
};

export default GameDetails;
