import React from "react";
import { cn } from "../utils";

const Container = ({ size = "w-[95%]", className, ...props }) => {
  return <div className={cn(size, className, "mx-auto")} {...props} />;
};

export default Container;
