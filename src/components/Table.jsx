import React from "react";
import { cn } from "../utils";

const Table = ({ className, ...props }) => {
  return (
    <table className={cn("border-collapse w-full", className)} {...props} />
  );
};

const TableRow = ({ className, ...props }) => {
  return (
    <tr
      className={cn("align-middle h-[38px] md:h-[30px] w-full", className)}
      {...props}
    />
  );
};

const TableHead = ({ className, ...props }) => {
  return (
    <th
      className={cn(
        "h-full align-middle truncate px-2.5 py-2 text-base leading-7 font-medium",
        className
      )}
      {...props}
    />
  );
};

const TableData = ({ className, ...props }) => {
  return (
    <td
      className={cn(
        "h-full align-middle truncate py-2 px-2.5 text-sm leading-6 font-medium",
        className
      )}
      {...props}
    />
  );
};

export { Table, TableData, TableHead, TableRow };

export default Table;
