import React from "react";
import IconButton from "../../../components/IconButton";
import ExploreIcon from "../../../components/icons/ExploreIcon";
import { useNavigate } from "react-router-dom";

const HeroOverlay = () => {
  const navigate = useNavigate();
  const exploreGames = () => {
    navigate("games");
  };
  return (
    <section className="hero_overlay text-start text-herobg i12:py-14 i20:py-24 zsm:py-16 px-4 py-4 md:px-10 md:py-14 ipad:py-[8rem] pro:py-14 lg:py-12 xl:pl-[10rem] xl:py-24">
      <h1 className="w-[70%] text-2xl text-white font-bold leading-6 sm:leading-8 mb-2 sm:text-3xl sm:mb-10 lg:mb-6 lg:text-4xl xl:text-5xl xl:w-[80%]">
        Welcome To FirstAcademy Games
      </h1>
      <p className="max-w-[725px] text-white text-sm mb-3 sm:mb-6 leading-7 sm:w-[70%] sm:text-md lg:text-lg lg:w-[64%]">
        Are you ready to challenge yourself and have fun at the same time? Join us at FirstAcademy Games, where you can play exciting games, compete with your peers, and learn new skills. Whether you are interested in sports, puzzles, or trivia, we have something for you.
      </p>
      <IconButton
        text={"Explore the Games"}
        icon={<ExploreIcon />}
        onClick={exploreGames}
      />
    </section>
  );
};

export default HeroOverlay;
