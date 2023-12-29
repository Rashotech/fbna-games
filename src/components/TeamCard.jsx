// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

const TeamCard = ({ member }) => {
  return (
    <div className="mb-4 md:w-1/1 lg:w-1/2 xl:w-1/3 p-2">
      <img
        className="object-cover h-64 w-52 mb-1 ml-6 mx-4 rounded-t-md border border-black-100"
        src={member.image}
        alt={`image ${member.id}`}
      />
      <div className="ml-6 text-start">
        <p className="text-blue-900">{member.name}</p>
        <p className="text-xs font-sans text-yellow-500">{member.role}</p>
      </div>
    </div>
  );
};

TeamCard.propTypes = {
  member: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
};

export default TeamCard;
