import React from "react";
import { cn } from "../utils";
import { GAME_STATUS_COLORS } from "../config/constants";

const GameStatus = ({ status, className }) => {
  const color = GAME_STATUS_COLORS[status];

  return (
    <div className={cn("inline-flex items-center space-x-1", className)}>
      <span
        className="w-5 h-5 rounded-full"
        style={{ backgroundColor: color }}
      />
      <span className="text-grey-600 text-sm font-normal">{status}</span>
    </div>
  );
};

export default GameStatus;
