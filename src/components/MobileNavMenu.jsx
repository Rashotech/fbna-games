import MenuBackDrop from "./MenuBackdrop";
import MobileNavMenuLinks from "./MobileNavMenuLinks";
import { navLinks } from "../config/constants";
import { cn } from "../utils";

const MobileNavMenu = ({ isMenuVisible, onClose }) => {
  return (
    <div
      className={cn(
        "bg-transparent fixed inset-0 overflow-hidden transition-opacity duration-150",
        isMenuVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
      )}
    >
      <MenuBackDrop onClick={onClose} isMenuVisible={isMenuVisible} />
      <div
        className={cn(
          "absolute w-full h-[363px] z-40 rounded-[5px] left-0 bg-white transition-transform duration-150",
          isMenuVisible
            ? "translate-y-[calc(var(--navbar-rule-height)+var(--navbar-height))]"
            : "-translate-y-full"
        )}
      >
        <MobileNavMenuLinks links={navLinks} onClose={onClose} />
      </div>
    </div>
  );
};

export default MobileNavMenu;
