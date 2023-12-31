import React from "react";
import { getProjectMembers } from "../services/teams";
import TeamCard from "../components/TeamCard";
import FetchError from "../components/FetchError.jsx";
import GameCardSkeletonList from "../components/GameCardSkeletonList.jsx";
import NotFound from "../components/NotFound.jsx";
import useFetcher from "../hooks/useFetcher.js";

const ProjectMembers = () => {
  const {
    data: teamMembers,
    isLoading,
    error,
    refetch,
  } = useFetcher(getProjectMembers, null, { initialData: [] });

  if (error) return;
  <FetchError
    error="An error occurred, could not fetch games data"
    onRefetch={refetch}
  />;

  return (
    <div className="bg-white">
      <p className="font-bold text-blue-900 text-4xl py-8 text-center">
        Meet the Team...
      </p>
      <div className="flex flex-wrap justify-center gap-20 items-center font-bold">
        {isLoading && <GameCardSkeletonList />}
        {!isLoading && teamMembers.length === 0 && <NotFound message="No Team Members found" />}
        {teamMembers.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default ProjectMembers;
