import React from "react";
import GameDetailsTitle from "./GamesDetailsTitle";
import GamesDetailsCard from "./GamesDetailsCard";
import { Table, TableData, TableHead, TableRow } from "./Table";
import { cn } from "../utils";

const GameResult = ({ results, className }) => {
  return (
    <div className={cn("space-y-4", className)}>
      <GameDetailsTitle>Game Result</GameDetailsTitle>
      <GamesDetailsCard>
        <Table>
          <thead>
            <TableRow className="bg-[#1B4374] text-[#F6F6F6]">
              <TableHead className="w-1/3 md:w-1/4">Cohort</TableHead>
              <TableHead className="w-1/3 md:w-1/4">Points</TableHead>
              <TableHead className="w-1/3 md:w-2/4">Position</TableHead>
            </TableRow>
          </thead>
          <tbody>
            {results.map((result) => (
              <TableRow
                key={result.cohort}
                className="text-[#4A4A4A] even:bg-[#9AABC1]"
              >
                <TableData className="w-1/3 md:w-1/4">
                  {result.cohort}
                </TableData>
                <TableData className="w-1/3 md:w-1/4">
                  {result.points}
                </TableData>
                <TableData className="w-1/3 md:w-1/4">
                  {result.position}
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
