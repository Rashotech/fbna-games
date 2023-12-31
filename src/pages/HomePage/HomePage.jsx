import React from "react";
import { HeroSection, About, Leaderboard, Featured, Upcoming } from "./index";

const HomePage = () => {
  return (
    <div className="w-full bg-cohortcardbg">
      <HeroSection />
      <About />
      <Leaderboard />
      <Upcoming />
      <Featured />
    </div>
  );
};

export default HomePage;
