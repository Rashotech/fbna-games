import React from "react";
import LeaderboardCard from "../../components/LeaderboardCard";
import { leader_data } from "../../assets/data";
import useFetcher from "../../hooks/useFetcher";
import { hasData } from "../../utils";
import LeaderCardSkeleton from "./LeaderCardSkeleton";
import FetchError from "../../components/FetchError";
import NotFound from "../../components/NotFound";
import { getLeaderboard } from "../../services";

const LeadershipBoard = () => {
  const { data, isLoading, error, refetch } = useFetcher(getLeaderboard, null, {
    initialData: [],
    initialState: true,
  });
  return (
    <section className="py-10 bg-white">
      <h1 className="text-herobg text-lg font-bold text-center sm:text-2xl lg:text-3xl">
        See Who's Winning...
      </h1>
      <div>
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
          <div className="bg-white w-[90%] mx-auto rounded-md py-5 md:py-10">
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
    </section>
  );
};

export default LeadershipBoard;
