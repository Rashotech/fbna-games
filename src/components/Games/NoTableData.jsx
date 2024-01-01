import React from "react";
import { TableData, TableRow } from "../Table";

const NoTableData = ({ className, children, href, ...props }) => {
  return (
    <tbody>
      <TableRow className="text-grey-600">
        <TableData>Data Not Available Yet</TableData>
      </TableRow>
    </tbody>
  );
};

export default NoTableData;
