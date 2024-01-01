import React from "react";
import { cn } from "../utils";

const SearchResultTitle = ({ children, className, ...props }) => {
  return (
    <h1
      className={cn(
        "text-center text-primary font-bold text-3xl md:text-[40px] md:leading-[48px]",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

export default SearchResultTitle;
