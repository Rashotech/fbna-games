import { useMemo } from "react";
import { cn } from "../utils";
import ChevronLeft from "./icons/ChevronLeft";
import ChevronRight from "./icons/ChevronRight";
import { usePaginationItem } from "../hooks/usePagination";

const Pagination = ({
  totalPages,
  currentPage,
  next,
  previous,
  hasNext,
  hasPrevious,
  setPage,
}) => {
  return (
    <div className="flex items-center space-x-7 md:space-x-10">
      <PaginationBtn
        Icon={ChevronLeft}
        disabled={!hasPrevious}
        onClick={previous}
      />
      <PaginationItemList
        totalPages={totalPages}
        currentPage={currentPage}
        onItemClick={setPage}
      />
      <PaginationBtn Icon={ChevronRight} disabled={!hasNext} onClick={next} />
    </div>
  );
};

const PaginationItem = ({ className, isCurrent, ...props }) => {
  return (
    <div
      className={cn(
        "text-3xl font-bold",
        isCurrent ? "text-secondary" : "text-primary",
        className
      )}
      {...props}
    />
  );
};

const PaginationItemList = ({
  totalPages,
  currentPage,
  className,
  onItemClick,
}) => {
  const { pages } = usePaginationItem(currentPage, totalPages);
  return (
    <div className={cn("flex items-center space-x-7 md:space-x-10", className)}>
      {pages.map((page) => (
        <PaginationItem
          key={page}
          isCurrent={page == currentPage}
          onClick={() => onItemClick(page)}
        >
          {page}
        </PaginationItem>
      ))}
    </div>
  );
};

const PaginationBtn = ({ Icon, disabled, className, ...props }) => {
  return (
    <button
      className={cn(
        "inline-flex h-[40px] md:h-[60px] w-[40px] md:w-[60px] items-center justify-center bg-[#FCFCFC] border border-primary disabled:bg-gray-400 disabled:cursor-not-allowed",
        className
      )}
      disabled={disabled}
      {...props}
    >
      <Icon className="w-[20px] md:w-[30px] h-[20px] md:h-[30px] text-primary" />
    </button>
  );
};

export default Pagination;
