import React from "react";
import { HeroSection, About, Leaderboard } from "./index";

const HomePage = () => {
  return (
    <div className="w-full bg-cohortcardbg">
      <HeroSection />
      <About />
      <Leaderboard />
    </div>
  );
};

export default HomePage;
