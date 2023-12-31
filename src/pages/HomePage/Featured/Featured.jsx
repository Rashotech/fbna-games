import React from "react";
import { featured } from "../../../assets/data";
import FeaturedCard from "./FeaturedCard";
import { getFeaturedPlayers } from "../../../services";
import { hasData } from "../../../utils";
import useFetcher from "../../../hooks/useFetcher";
import FetchError from "../../../components/FetchError";
import NotFound from "../../../components/NotFound";
import FeaturedSkeleton from "./FeaturedSkeleton";

const Featured = () => {
  const { data, isLoading, error, refetch } = useFetcher(
    getFeaturedPlayers,
    null,
    {
      initialData: [],
      initialState: true,
    }
  );
  return (
    <div className="p-5 md:p-7">
      <h2 className="text-center text-herobg text-2xl font-bold my-10">
        Featured Players of the week...
      </h2>
      {isLoading && (
        <div className="w-full mx-auto flex justify-center flex-wrap gap-4 md:w-[87%] lg:w-full lg:gap-3 xl:gap-6">
          {Array.from({ length: 3 }, () => null).map((arr, i) => {
            return <FeaturedSkeleton key={i} />;
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
        <div className="w-[100%]">
          <div className="w-full mx-auto flex justify-center flex-wrap gap-4 md:w-[87%] lg:w-full lg:gap-3 xl:gap-6">
            {data.map(rep => {
              return (
                <>
                  <FeaturedCard
                    key={rep.name}
                    src={rep.image}
                    name={rep.name.toUpperCase()}
                    cohort={rep.cohort.toUpperCase()}
                  />
                </>
              );
            })}
          </div>
        </div>
      )}
      <h4 className="max-w-[500px] mx-auto text-center text-herobg text-3xl font-bold my-20">
        Remember it is not over until it's over!
      </h4>
    </div>
  );
};

export default Featured;
