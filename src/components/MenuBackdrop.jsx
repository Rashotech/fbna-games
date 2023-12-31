import React from "react";
import { cn } from "../utils";

const MenuBackDrop = ({ className, isMenuVisible, ...props }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 bg-black/40 w-screen h-screen z-20 transition-opacity duration-200",
        isMenuVisible ? "opacity-100" : "opacity-0",
        className
      )}
      {...props}
    />
  );
};

export default MenuBackDrop;
