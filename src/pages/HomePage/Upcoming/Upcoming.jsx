import React from "react";
import SportDay from "./SportDay";
import Games from "./Games";

const Upcoming = () => {
  return (
    <section className="w-[90%] mx-auto">
      <h1 className="text-center text-2xl font-bold my-10">Upcoming Events</h1>
      <div className="md:flex gap-10 max-w-[1300px] mx-auto">
        <div className="basis-[60%]">
          <SportDay />
        </div>
        <div className="basis-[35%]">
          <h4 className="text-xl text-btnbg text-center font-bold my-4">
            Games of the week
          </h4>
          <div>
            <Games />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Upcoming;
