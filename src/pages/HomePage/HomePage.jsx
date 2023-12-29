import React from "react";
import HeroSlider from "./HeroSlider";
import HeroOverlay from "./HeroOverlay";

function HomePage() {
  return (
    <div className="w-full relative">
      <HeroSlider />
      <HeroOverlay/>
    </div>
  );
}

export default HomePage;
