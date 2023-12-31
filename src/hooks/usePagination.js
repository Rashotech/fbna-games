import { useMemo, useEffect, useState } from "react";
import useGamesSearch from "./useGamesPages";
import { ELEMENTS_PER_PAGE, VISIBLE_PAGE_LINKS } from "../config/constants";

const usePagination = (data, elementPerPage = ELEMENTS_PER_PAGE) => {
  const [currentPage, setCurrentPage] = useGamesSearch();
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
      setCurrentPage(currentPage + 1);
    }
  };

  const previous = () => {
    if (hasPrevious) {
      setCurrentPage(currentPage - 1);
    }
  };

  const setPage = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
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

export const usePaginationItem = (
  currentPage,
  totalPages,
  visiblePages = VISIBLE_PAGE_LINKS
) => {
  const [pages, setPages] = useState([]);

  const isCurrentPageVisible = useMemo(
    () => pages.includes(currentPage),
    [pages, currentPage]
  );

  useEffect(() => {
    // Ensure currentPage is within bounds
    const normalizedCurrentPage = Math.min(
      Math.max(currentPage, 1),
      totalPages
    );

    if (!isCurrentPageVisible) {
      // Calculate start and end indices of visible pages
      const halfVisible = Math.floor(visiblePages / 2);
      let start = normalizedCurrentPage - halfVisible;
      let end = normalizedCurrentPage + halfVisible;

      // Adjust start and end indices to stay within bounds
      if (start < 1) {
        start = 1;
        end = Math.min(visiblePages, totalPages);
      }

      if (end > totalPages) {
        end = totalPages;
        start = Math.max(1, end - visiblePages + 1);
      }

      // Generate the array of visible pages
      const pageArray = Array.from(
        { length: end - start + 1 },
        (_, i) => start + i
      );

      // Update state
      setPages(pageArray);
    }
  }, [currentPage, totalPages, visiblePages, isCurrentPageVisible]);

  return { pages };
};

export default usePagination;
