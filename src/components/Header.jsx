import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "./Container";
import SearchBox from "./SearchBox";
import { navLinks } from "../config/constants";
import { cn } from "../utils";

const Header = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = () => {};

  return (
    <header>
      <div className="h-[50px] bg-primary" />
      <Container size="w-[95%] md:w-[92%]" className="flex items-center h-20">
        <div className="flex items-center space-x-1">
          <img
            src="/firstbank-logo.png"
            alt="first-bank logo"
            width={56}
            height={48}
          />
          <p className="self-end text-xl font-medium text-primary">
            AcademyGames
          </p>
        </div>
        <div className="flex-1 flex items-center ml-0 md:ml-14 space-x-10">
          <div className="hidden md:flex md:items-center md:flex-[2_1_0%]">
            <SearchBox
              className="w-full pl-14"
              placeholder="Search for games and competitions"
              onChange={(evt) => setSearch(evt.target.value)}
              value={search}
              onSubmit={handleSubmit}
            />
          </div>
          <div className="hidden md:flex md:flex-1 md:space-x-[18px] md:items-center">
            {navLinks.map((link) =>
              !link.isBtn ? (
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
              ) : (
                <div key={link.path} className="pl-7 inline-flex items-center">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      cn(
                        "text-base text-primary bg-secondary rounded-sm px-[15px] py-[5px]",
                        isActive ? "font-medium" : "font-normal"
                      )
                    }
                  >
                    {link.name}
                  </NavLink>
                </div>
              )
            )}
          </div>
        </div>
        <div className="flex md:hidden">{/* Mobile Toggle Button */}</div>
      </Container>
    </header>
  );
};

export default Header;
