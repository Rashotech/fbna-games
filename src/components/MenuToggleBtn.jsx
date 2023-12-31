import React from "react";
import ThreeBarIcon from "./icons/ThreeBarIcon";
import { cn } from "../utils";

const MenuToggleBtn = ({ className, ...props }) => {
  return (
    <button
      className={cn(
        "bg-white text-secondary w-10 h-10 p-1 focus:outline-none",
        className
      )}
      {...props}
    >
      <ThreeBarIcon className="w-full h-full" />
    </button>
  );
};

export default MenuToggleBtn;
