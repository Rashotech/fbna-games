import React from "react";
import { cn } from "../utils";

const FeaturedGalleryBtn = ({ Icon, className, ...props }) => {
  return (
    <button
      className={cn(
        "w-6 h-6 bg-white flex items-center justify-center outline-none focus:outline-none text-primary lg:h-10 lg:w-10",
        className
      )}
      {...props}
    >
      <Icon className="w-6 h-6 lg:h-10 lg:w-10 text-primary stroke-2" />
    </button>
  );
};

export default FeaturedGalleryBtn;
