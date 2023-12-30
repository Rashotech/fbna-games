import React from "react";
import { cn } from "../utils";

const SearchBox = ({ className, onChange, value, onSubmit, ...props }) => {
  const handleChange = (evt) => {
    if (onChange && typeof onChange == "function") {
      onChange(evt);
    }
  };

  const handleSubmit = (evt) => {
    if (evt.keyCode == 13) {
      evt.preventDefault();
      onSubmit();
    }
  };

  return (
    <input
      type="search"
      value={value}
      onChange={handleChange}
      onKeyUp={handleSubmit}
      className={cn(
        "bg-[#f6f6f6] rounded-2xl pt-[11px] pb-3 placeholder:text-[#4E6D93] text-[#4E6D93] placeholder:text-sm placeholder:font-normal focus:outline-none focus:border-none",
        className
      )}
      {...props}
    />
  );
};

export default SearchBox;
