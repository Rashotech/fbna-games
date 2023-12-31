import React from "react";
import { featured } from "../../../assets/data";
import FeaturedCard from "./FeaturedCard";

const Featured = () => {
  return (
    <div className="p-5 md:p-7">
      <h2 className="text-center text-herobg text-2xl font-bold my-10">
        Featured Players of the week...
      </h2>
      <div className="w-[100%]">
        <div className="w-full mx-auto flex justify-center flex-wrap gap-4 md:w-[87%] lg:w-full lg:gap-3 xl:gap-6">
          {featured.map(rep => {
            return (
              <>
                <FeaturedCard
                  key={rep.id}
                  src={rep.src}
                  name={rep.name.toUpperCase()}
                  cohort={rep.cohort.toUpperCase()}
                />
              </>
            );
          })}
        </div>
      </div>
      <h4 className="max-w-[500px] mx-auto text-center text-herobg text-3xl font-bold my-20">
        Remember it is not over until it's over!
      </h4>
    </div>
  );
};

export default Featured;
