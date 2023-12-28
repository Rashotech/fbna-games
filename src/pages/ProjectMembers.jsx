// eslint-disable-next-line no-unused-vars
import React from "react";

const ProjectMembers = () => {
  // array of team member objects
  const teamMembers = [
    {
      id: 1,
      name: "Rasheed Ayoade",
      imageUrl: "./images/rasheed.jpeg",
      role: "Project Lead",
    },
    {
      id: 2,
      name: "Akabogu Chibuikem",
      imageUrl: "./images/akabogu.png",
      role: "Software Engineer",
    },
    {
      id: 3,
      name: "Okafor Nwachuku",
      imageUrl: "./images/samuel.jpg",
      role: "Project Manager",
    },
    {
      id: 4,
      name: "Habeeb Suleiman",
      imageUrl: "./images/habeeb.jpeg",
      role: "Front-end Engineer",
    },
    {
      id: 5,
      name: "Chisom Nnakude",
      imageUrl: "./images/chisom.jpeg",
      role: "Front-end Engineer",
    },
    {
      id: 6,
      name: "Oyinlola Adepitan",
      imageUrl: "./images/oyin.jpeg",
      role: "Front-end Engineer",
    },
    {
      id: 7,
      name: "Jemima-Naomi Ben",
      imageUrl: "./images/jemima.jpg",
      role: "UI Designer",
    },

    {
      id: 8,
      name: "Dara Dada",
      imageUrl: "./images/samuel.jpg",
      role: "UI Designer",
    },
  ];
  return (
    // team members page
    <div className="flex items-center">
      <div>
        <p className="font-bold text-blue-900 text-4xl ">Meet the Team...</p>
        <div className="flex flex-wrap mt-8 mx-16 font-bold">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="mb-4 md:w-1/1 lg:w-1/2 xl:w-1/3 p-2 "
            >
              <img
                className="object-cover h-64 w-52 mb-1 ml-6 mx-4 rounded-md"
                src={member.imageUrl}
                alt={`image ${member.id}`}
              />
              <div className=" pl-6 text-start">
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
