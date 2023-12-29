import React from "react";
import { cn } from "../utils";

const GameDetailsTitle = ({ className, children }) => {
  return (
    <h3 className={cn("text-[#4A4A4A] text-2xl font-bold", className)}>
      {children}
    </h3>
  );
};

export default GameDetailsTitle;
