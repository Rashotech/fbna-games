import React from "react";
import GameDetailsTitle from "./GamesDetailsTitle";
import GamesDetailsCard from "./GamesDetailsCard";
import { TableHead, Table, TableData, TableRow } from "./Table";
import { cn, formatCohortName } from "../utils";

const ParticipantDetails = ({ participants, className }) => {
  return (
    <div className={cn("space-y-4", className)}>
      <GameDetailsTitle>Participant Details</GameDetailsTitle>
      <GamesDetailsCard className="max-h-[450px] overflow-y-auto scrollbar">
        <Table>
          <thead>
            <TableRow className="bg-secondary/80 text-grey-600">
              <TableHead className="w-3/5 md:w-2/5">
                Participant&apos;s Name
              </TableHead>
              <TableHead className="w-2/5 md:w-3/5">Cohort</TableHead>
            </TableRow>
          </thead>
          <tbody>
            {participants.map((participant, index) => (
              <TableRow
                key={participant.id ?? index}
                className="even:shadow-md even:bg-secondary/40 md:even:shadow-none text-grey-600"
              >
                <TableData className="w-3/5 md:w-2/5">
                  {participant.name}
                </TableData>
                <TableData className="w-2/5 md:w-3/5">
                  {formatCohortName(participant.cohort)}
                </TableData>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </GamesDetailsCard>
    </div>
  );
};

export default ParticipantDetails;
