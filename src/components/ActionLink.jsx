import React from "react";
import { NavLink } from "react-router-dom";
import { cn } from "../utils";

const ActionLink = ({ className, children, href, ...props }) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        cn(
          "text-base text-primary bg-secondary rounded-sm px-[15px] py-[5px]",
          isActive ? "font-medium" : "font-normal",
          className
        )
      }
      {...props}
    >
      {children}
    </NavLink>
  );
};

export default ActionLink;
