import React from "react";
import MenuToggleBtn from "./MenuToggleBtn";
import MobileNavMenu from "./MobileNavMenu";

const MobileMenu = ({ isMenuVisible, onOpen, onClose }) => {
  return (
    <>
      <MenuToggleBtn onClick={onOpen} />
      <MobileNavMenu isMenuVisible={isMenuVisible} onClose={onClose} />
    </>
  );
};

export default MobileMenu;
