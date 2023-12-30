import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import GamesList from "../components/GamesList.jsx";
import Pagination from "../components/Pagination.jsx";
import usePagination from "../hooks/usePagination.js";
import { getAllGames } from "../services/games.js";
import useFetcher from "../hooks/useFetcher.js";

const GamesPage = () => {
  const { data: games, isLoading, error } = useFetcher(getAllGames, []);
  const { search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [search]);

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

  if (isLoading) {
    return <div>Games data is loading</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="bg-pagesbg">
      <h1 className="pt-16 text-center text-2xl md:text-5xl font-bold text-primary">
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
