import React from "react";
import { cn } from "../utils";

const GamesDetailsCard = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        "w-full px-5 pb-5 md:px-10 md:pb-10 pt-2.5 bg-white md:rounded-lg md:shadow-sm md:shadow-black/15 overflow-x-hidden",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GamesDetailsCard;
