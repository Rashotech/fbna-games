import React, { useMemo, useEffect, useState } from "react";
import SportDay from "./SportDay";
import Games from "./Games";
import { generateDates } from "../../../hooks/getStartAndEndDate";
import { getGamesByDateRange } from "../../../services/games";

const Upcoming = () => {
  const [data, setData] = useState({
    games: [],
    isLoading: true,
    error: false,
  });
  const { games, isLoading, error } = data;
  useEffect(() => {
    const today = new Date();
    const { start, end } = generateDates(today, 7);
    let args = [start, end];

    const queryData = async () => {
      try {
        const data = await getGamesByDateRange(...args);
        let result = { games: data, isLoading: false, error: false };
        setData(result);
      } catch (error) {
        let result = { games: [], isLoading: false, error: true };
        setData(result);
      } finally {
      }
    };

    queryData();
  }, []);
  return (
    <section className="w-[90%] mx-auto">
      <h1 className="text-center text-herobg text-2xl font-bold my-10">
        Upcoming Events
      </h1>
      <div className="md:flex justify-between gap-10 max-w-[1300px] mx-auto">
        <div className="basis-[60%] lg:basis-[80%]">
          <SportDay />
        </div>
        <div className="basis-[40%] lg:basis-[20%]">
          <h4 className="text-xl text-btnbg text-center font-bold my-4">
            Games of the week
          </h4>
          <div>
            <Games games={games} isLoading={isLoading} error={error} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Upcoming;
