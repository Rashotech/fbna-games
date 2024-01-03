import React from "react";
import IconButton from "../../components/IconButton";
import ExploreIcon from "../../components/icons/ExploreIcon";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const exploreGames = () => {
    navigate("games");
  };
  return (
    <section className="text-center text-[#022E64] px-4 py-10 md:px-10 md:py-14 xl:px-20 xl:py-24">
      <h2 className="w-[70%] mx-auto text-xl text-herobg font-bold leading-8 mb-6 sm:text-3xl sm:mb-10 xl:w-[80%]">
        About FirstGames
      </h2>
      <p className="max-w-[725px] mx-auto text-paragraphbg text-sm mb-6 leading-7 sm:w-[70%] sm:text-md sm:mb-10 lg:text-lg lg:w-[64%]">
        FirstGames combines gamification, education, and social interaction to stimulate your creativity, curiosity, and critical thinking, while learning at FirstAcademy. Remember, “All work and no play…” 😉 You just said it yourself!  
      </p>
      <div className="max-w-[210px] mx-auto">
        <IconButton
          text={"Explore the Games"}
          icon={<ExploreIcon />}
          onClick={exploreGames}
        />
      </div>
    </section>
  );
};

export default About;
