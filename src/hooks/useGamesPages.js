import { useSearchParams, useLocation } from "react-router-dom";

const useGamesPages = (initialPage = 1) => {
  const [searchParams, setSearchParams] = useSearchParams({
    page: initialPage,
  });

  let parsedPage = parseInt(searchParams.get("page"));
  parsedPage = isNaN(parsedPage) ? initialPage : parsedPage;

  const setPage = (page) => {
    setSearchParams({ page });
  };

  return [parsedPage, setPage];
};

export default useGamesPages;
