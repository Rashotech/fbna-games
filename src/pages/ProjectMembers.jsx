import React, { useEffect, useState } from "react";
import { getProjectMembers } from "../services/teams";

const ProjectMembers = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTeamMembers();
  }, []);

  const getTeamMembers = async () => {
    try {
      setLoading(true)
      const members = await getProjectMembers();
      setTeamMembers(members);
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  };

  return (
    // team members page
    <div className="flex items-center bg-white">
      <div>
        <p className="font-bold text-blue-900 text-4xl mt-8 ">
          Meet the Team...
        </p>
        <div className="flex flex-wrap mt-8 mx-16 font-bold">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="mb-4 md:w-1/1 lg:w-1/2 xl:w-1/3 p-2 "
            >
              <img
                className="object-cover h-64 w-52 mb-1 ml-6 mx-4 rounded-t-md border border-black-100"
                src={member.image}
                alt={`image ${member.id}`}
              />
              <div className="ml-6  text-start">
                <p className="text-blue-900">{member.name}</p>
                <p className="text-xs font-sans text-yellow-500">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectMembers;
