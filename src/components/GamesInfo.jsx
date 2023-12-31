import React from "react";

const GamesInfo = ({
  image,
  name,
  venue,
  description,
  startDate,
  endDate,
  status,
}) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-10 gap-y-[29px]">
      <div>
        <div className="w-[90%] mx-auto flex flex-col items-center md:w-full space-y-[29px] md:mx-0">
          <h6 className="text-primary text-2xl font-bold md:hidden">{name}</h6>
          <img
            src={image}
            alt={name}
            className="block w-full max-h-[260px] md:max-h-[460px]"
          />
        </div>
      </div>
      <div className="text-left space-y-3">
        <h6 className="hidden md:block md:text-black md:text-[32px] md:leading-10 md:font-bold">
          {name}
        </h6>
        <div className="space-y-1 font-semibold text-grey-500 text-sm md:text-grey-600 md:text-base md:font-medium md:space-y-2">
          <p>{description}</p>
          <GameInfoList name="Venue" value={venue} />
          <GameInfoList name="Start Date" value={startDate} />
          <GameInfoList name="End Date" value={endDate} />
          <GameInfoList name="Status" value={status} />
          <div className="mt-6 md:mt-3">
            <img src="/medals.png" alt="Medals" />
          </div>
        </div>
      </div>
    </section>
  );
};

const GameInfoList = ({ name, value }) => {
  return (
    <p>
      <span className="text-primary font-bold md:text-inherit md:font-medium">
        {name}
      </span>
      : {value}
    </p>
  );
};

export default GamesInfo;
