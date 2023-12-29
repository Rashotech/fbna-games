import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "./Container";
import SearchBox from "./SearchBox";
import MainLogo from "./MainLogo";
import MobileMenu from "./MobileMenu";
import ActionLink from "./ActionLink";
import { navLinks } from "../config/constants";
import { cn } from "../utils";
import useSearchText from "../hooks/useSearchText";

const Header = () => {
  const { searchText, onChange, onSubmit } = useSearchText("");
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <header>
      <div className="h-[var(--navbar-rule-height)] bg-primary" />
      <Container
        size="w-[90%] md:w-[92%]"
        className="flex items-center h-[var(--navbar-height)]"
      >
        <MainLogo to="/" />
        <div className="flex-1 h-full flex items-center ml-0 space-x-10 lg:ml-14">
          <div className="hidden lg:h-full lg:flex lg:items-center lg:flex-[2_1_0%]">
            <SearchBox
              className="w-full pl-14"
              placeholder="Search for games and competitions"
              onChange={onChange}
              value={searchText}
              onSubmit={onSubmit}
            />
          </div>
          <div className="hidden lg:h-full lg:flex lg:flex-1 lg:space-x-[18px] lg:items-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    "text-base text-primary",
                    isActive ? "font-medium" : "font-normal"
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pl-7 inline-flex items-center">
              <ActionLink href="/games">Explore</ActionLink>
            </div>
          </div>
        </div>
        <div className="flex lg:hidden">
          <MobileMenu
            isMenuVisible={isMenuVisible}
            onOpen={() => setIsMenuVisible(true)}
            onClose={() => setIsMenuVisible(false)}
          />
        </div>
      </Container>
    </header>
  );
};

export default Header;
