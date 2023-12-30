// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { getProjectMembers } from "../services/teams";
import TeamCard from "../components/TeamCard";

const ProjectMembers = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTeamMembers();
  }, []);

  const getTeamMembers = async () => {
    try {
      setLoading(true);
      const members = await getProjectMembers();
      setTeamMembers(members);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="flex items-center bg-white">
      <div>
        <p className="font-bold text-blue-900 text-4xl mt-8 text-center">
          Meet the Team...
        </p>
        <div className="flex flex-wrap mt-8 mx-16 font-bold">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectMembers;
