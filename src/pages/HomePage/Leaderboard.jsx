import React from "react";
import LeaderboardCard from "../../components/LeaderboardCard";
import { leader_data } from "../../assets/data";

const Leaderboard = () => {
  return (
    <div className="mb-5">
      <h1 className="text-center text-3xl font-bold mt-4 mb-10">Games Leaderboard</h1>

      <div className="bg-white w-[90%] max-w-[1000px] mx-auto rounded-md py-5 md:py-10">
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
  );
};

export default Leaderboard;
