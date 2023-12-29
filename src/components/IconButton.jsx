import React from "react";

const IconButton = ({ text, icon, onClick }) => {
  return (
    <button
      className="bg-btnbg p-3 rounded-md flex hover:bg-white outline-none"
      onClick={() => onClick()}>
      <span className="font-bold mr-3">{text}</span>
      <span>{icon}</span>
    </button>
  );
};

export default IconButton;
