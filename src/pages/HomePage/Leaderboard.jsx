import React from "react";
import LeaderboardCard from "../../components/LeaderboardCard";
import LeaderCardSkeleton from "../LeadershipBoard/LeaderCardSkeleton";
import { leader_data } from "../../assets/data";
import useFetcher from "../../hooks/useFetcher";
import { getLeaderboard } from "../../services";
import { hasData } from "../../utils";
import FetchError from "../../components/FetchError";
import NotFound from "../../components/NotFound";

const Leaderboard = () => {
  const { data, isLoading, error, refetch } = useFetcher(getLeaderboard, null, {
    initialData: [],
    initialState: true,
  });

  return (
    <div className="mb-5">
      <h1 className="text-center text-3xl font-bold mt-4 mb-10">
        Games Leaderboard
      </h1>
      {isLoading && (
        <div className="w-full mx-auto flex justify-center flex-wrap gap-4 md:w-[87%] lg:w-full lg:gap-3 xl:gap-6">
          {Array.from({ length: 4 }, () => null).map((arr, i) => {
            return <LeaderCardSkeleton key={i} />;
          })}
        </div>
      )}
      {error && (
        <FetchError
          error="hoops!, there was error while fetching leader data"
          onRefetch={refetch}
        />
      )}
      {!hasData(data) && (
        <NotFound message="Leader data will be available soon..." />
      )}
      {hasData(data) && (
        <div className="bg-white w-[90%] max-w-[1000px] mx-auto rounded-md py-5 md:py-10">
          {data.map((data, index) => {
            const { cohort, averagePoints } = data;
            return (
              <LeaderboardCard
                name={cohort}
                key={`cohort${cohort}`}
                position={index + 1}
                src={leader_data[index].src}
                points={averagePoints}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Leaderboard;
