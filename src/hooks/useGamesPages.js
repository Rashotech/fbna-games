import { useSearchParams } from "react-router-dom";

const useGamesPages = (initialPage = 1) => {
  const [searchParams, setSearchParams] = useSearchParams({
    page: initialPage,
  });

  const page = searchParams.get("page");
  const parsedPage = parseInt(page);

  const setPage = (page) => {
    setSearchParams({ page });
  };

  return [parsedPage, setPage];
};

export default useGamesPages;
