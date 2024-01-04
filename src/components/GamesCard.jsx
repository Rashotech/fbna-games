import React from "react";
import ParticipantIcon from "./icons/ParticipantIcon";
import GamesCardBtn from "./GamesCardBtn";
import GameStatus from "./GamesStatus";

const GamesCard = ({
  name,
  category,
  id,
  participants,
  venue,
  image,
  status,
}) => {
  return (
    <div className="flex flex-col w-full min-h-[433px] h-auto max-h-[480px] rounded-lg border shadow-md border-gray-400/15 shadow-black/30 md:w-[302px] font-nunito">
      <img
        src={image}
        alt={name}
        className="block rounded-t-lg object-cover h-[58%]"
      />
      <div className="flex flex-col justify-between h-[42%] bg-white pt-6 pb-[22px] px-8 rounded-b-lg space-y-2">
        <div className="flex justify-between items-center text-[#3f3f3f]">
          <p className="text-2xl font-bold card-title">{name}</p>
          <div className="inline-flex items-center space-x-[3px]">
            <ParticipantIcon />
            <span className="text-sm text-bold">{participants}</span>
          </div>
        </div>
        <div className="flex items-start justify-between text-sm text-[#656565]">
          <p className="font-normal">{category}</p>
          <div className="pt-1.5 font-medium text-right">
            <p>Venue: </p>
            <p className="text-[#1f51ff]">{venue}</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <GameStatus status={status} />
          <GamesCardBtn href={`/games/${id}`}>See More</GamesCardBtn>
        </div>
      </div>
    </div>
  );
};

export default GamesCard;
