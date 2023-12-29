import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../utils";

const MainLogo = ({ className, ...props }) => {
  return (
    <Link
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
    </Link>
  );
};

export default MainLogo;
