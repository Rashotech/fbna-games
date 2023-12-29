import React from "react";
import IconButton from "../../components/IconButton";
import ExploreIcon from "../../components/icons/ExploreIcon";
import { useNavigate } from "react-router-dom";

const HeroOverlay = () => {
  const navigate = useNavigate();
  const exploreGames = () => {
    navigate("games");
  };
  return (
    <section className="hero_overlay text-start text-[#022E64] px-4 py-10 md:px-10 md:py-14 xl:pl-[16rem] xl:py-24">
      <h1 className="w-[70%] text-xl text-white font-bold leading-8 mb-6 sm:text-3xl sm:mb-10 lg:text-4xl xl:text-5xl xl:w-[80%]">
        Welcome To FirstAcademy Games
      </h1>
      <p className="max-w-[725px] text-white text-sm mb-6 leading-7 sm:w-[70%] sm:text-md sm:mb-10 lg:text-lg lg:w-[64%]">
        Visby is a geometric typeface that was influenced by the Arctic's stark
        elegance a nd crisp air. In lowercase, it's friendly and charismatic; in
        uppercase, it's elegant and authoritative. Humanist nuances bring warmth
        to the design, which combines hard lines and sharp corners with sleek,
        rounded letterforms.
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
