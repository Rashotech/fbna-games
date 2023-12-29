import { useMemo } from "react";
import useGamesSearch from "./useGamesSearch";
import { ELEMENTS_PER_PAGE } from "../config/constants";

const usePagination = (data, elementPerPage = ELEMENTS_PER_PAGE) => {
  const [search, setSearch] = useGamesSearch();
  const currentPage = search.page;
  const totalElements = data.length;

  const totalPages = Math.ceil(totalElements / elementPerPage);

  const currentData = useMemo(() => {
    const startIndex = (currentPage - 1) * elementPerPage;
    const endIndex = startIndex + elementPerPage;
    return data.slice(startIndex, endIndex);
  }, [data, currentPage, elementPerPage]);

  const hasNext = currentPage < totalPages;
  const hasPrevious = currentPage > 1;

  const next = () => {
    if (hasNext) {
      setSearch({ page: currentPage + 1 });
    }
  };

  const previous = () => {
    if (hasPrevious) {
      setSearch({ page: currentPage - 1 });
    }
  };

  const setPage = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setSearch({ page: pageNumber });
    }
  };

  return {
    currentData,
    next,
    previous,
    setPage,
    hasNext,
    hasPrevious,
    currentPage,
    totalPages,
  };
};

export default usePagination;
