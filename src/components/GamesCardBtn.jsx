import React from "react";

const GamesCardBtn = ({ children, href }) => {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center py-2 px-6 rounded-lg bg-secondary text-white text-sm font-bold"
    >
      {children}
    </a>
  );
};

export default GamesCardBtn;
