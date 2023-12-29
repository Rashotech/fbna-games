import React from "react";
import { HeroSlider, HeroOverlay} from "./index";

function HeroSection() {
  return (
    <div className="w-full relative">
      <HeroSlider />
      <HeroOverlay />
    </div>
  );
}

export default HeroSection;
