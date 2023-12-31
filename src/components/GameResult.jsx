import React from "react";
import GameDetailsTitle from "./GamesDetailsTitle";
import GamesDetailsCard from "./GamesDetailsCard";
import { Table, TableData, TableHead, TableRow } from "./Table";
import { cn, formatCohortName, sortGameResultsByScore } from "../utils";

const GameResult = ({ results, className }) => {
  results = sortGameResultsByScore(results);

  return (
    <div className={cn("space-y-4", className)}>
      <GameDetailsTitle>Game Result</GameDetailsTitle>
      <GamesDetailsCard>
        <Table>
          <thead>
            <TableRow className="bg-primary/90 text-grey-100">
              <TableHead className="w-1/3 md:w-1/4">Cohort</TableHead>
              <TableHead className="w-1/3 md:w-1/4">Points</TableHead>
              <TableHead className="w-1/3 md:w-2/4">Position</TableHead>
            </TableRow>
          </thead>
          <tbody>
            {results.map((result) => (
              <TableRow
                key={result.cohort}
                className="text-grey-600 even:bg-primary/40"
              >
                <TableData className="w-1/3 md:w-1/4">
                  {formatCohortName(result.cohort)}
                </TableData>
                <TableData className="w-1/3 md:w-1/4">
                  {result.point ?? "NIL"}
                </TableData>
                <TableData className="w-1/3 md:w-1/4">
                  {result.position ?? "NIL"}
                </TableData>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </GamesDetailsCard>
    </div>
  );
};

export default GameResult;
