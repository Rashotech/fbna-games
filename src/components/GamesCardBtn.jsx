import React from "react";
import { Link } from "react-router-dom";

const GamesCardBtn = ({ children, href }) => {
  return (
    <Link
      to={href}
      className="inline-flex items-center justify-center py-2 px-6 rounded-lg bg-secondary text-white text-sm font-bold"
    >
      {children}
    </Link>
  );
};

export default GamesCardBtn;
