// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

const TeamCard = ({ member }) => {
  return (
    //  md:h-1/2 lg:h-3/4 xl:h-full
    <div className=" mb-4 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
      <img
        className="object-cover h-80 w-64 rounded-t-xl"
        src={member.image}
        alt={`image ${member.id}`}
      />
      <div className="text-start">
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
