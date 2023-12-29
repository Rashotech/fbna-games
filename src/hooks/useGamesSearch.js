import { useSearchParams } from "react-router-dom";

const useGamesSearch = () => {
  const initialSearch = new URLSearchParams(window.location.search ?? "");

  const [searchParams, setSearchParams] = useSearchParams({
    page: initialSearch.get("page") ?? 1,
    name: initialSearch.get("name") ?? "",
  });

  const search = Object.fromEntries(searchParams.entries());
  search.page = parseInt(search.page);

  const setSearch = (newSearch) => {
    if (typeof newSearch == "function") {
      return setSearchParams(newSearch(search));
    }
    setSearchParams(newSearch);
  };

  return [search, setSearch];
};

export default useGamesSearch;
