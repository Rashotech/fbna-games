import React from "react";
import LeaderboardCard from "../../components/LeaderboardCard";
import { leader_data } from "../../assets/data";

const LeadershipBoard = () => {
  return (
    <section className="my-10">
      <h1 className="text-herobg text-lg font-bold text-center sm:text-2xl lg:text-3xl">
        See Who's Winning...
      </h1>
      <div>
        {/* <div>filters</div> */}
        <div className="bg-white w-[90%] mx-auto rounded-md py-5 md:py-10">
          {leader_data.map(data => {
            const { id, name, position, src, points } = data;
            return (
              <LeaderboardCard
                name={name}
                key={id}
                position={position}
                src={src}
                points={points}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LeadershipBoard;
