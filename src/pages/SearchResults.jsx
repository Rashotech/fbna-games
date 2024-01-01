import React, { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Container from "../components/Container";
import SearchResultTitle from "../components/SearchResultTitle";
import SearchResults from "../components/SearchResults";
import FetchError from "../components/FetchError";
import useFetcher from "../hooks/useFetcher";
import { getAllGames } from "../services/games";

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const gamesName = searchParams.get("game");

  const {
    data: games,
    error,
    refetch,
  } = useFetcher(getAllGames, null, {
    startFetching: !!gamesName,
  });

  const filteredGames = useMemo(() => {
    if (!games || !gamesName) {
      return null;
    }

    return games.filter((game) =>
      game?.name.toLowerCase().includes(gamesName.toLowerCase())
    );
  }, [games, gamesName]);

  if (!gamesName) {
    return (
      <div className="min-h-[50vh] pt-10">
        <SearchResultTitle>No search text entered</SearchResultTitle>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-[50vh] pt-10 pb-14 md:pt-[72px]">
      <Container size="w-[90%] md:w-[92%]" className="space-y-10 md:space-y-20">
        {Array.isArray(filteredGames) && filteredGames.length === 0 && (
          <SearchResultTitle>No Results found</SearchResultTitle>
        )}
        {Array.isArray(filteredGames) && filteredGames.length > 0 && (
          <SearchResultTitle>Search Results</SearchResultTitle>
        )}
        {filteredGames && <SearchResults filteredGames={filteredGames} />}
        {error && (
          <FetchError
            error="An error occurred, could not fetch games data"
            onRefetch={refetch}
          />
        )}
      </Container>
    </div>
  );
};

export default SearchResultsPage;
