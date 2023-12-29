import React from "react";
import { cn } from "../utils";

const MainLogo = ({ className, ...props }) => {
  return (
    <div
      className={cn("flex items-center space-x-2 md:space-x-2.5", className)}
      {...props}
    >
      <img
        src="/firstbank-logo.png"
        alt="first-bank logo"
        width={56}
        height={48}
      />
      <p className="self-end text-sm md:text-xl font-medium text-primary">
        AcademyGames
      </p>
    </div>
  );
};

export default MainLogo;
