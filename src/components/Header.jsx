import React, { useState } from "react";
import Container from "./Container";
import SearchBox from "./SearchBox";

const Header = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = () => {};

  return (
    <header>
      <div className="h-[50px] bg-primary" />
      <Container size="w-[95%] md:w-[92%]" className="flex items-center h-20">
        <div className="flex items-center space-x-1">
          <img
            src="/firstbank-logo2.png"
            alt="first-bank logo"
            width={56}
            height={48}
          />
          <p className="self-end text-xl font-medium text-primary">
            AcademyGames
          </p>
        </div>
        <div className="flex-1 flex items-center ml-0 md:ml-14 space-x-10">
          <div className="hidden md:flex md:items-center md:flex-1">
            <SearchBox
              className="w-full pl-14"
              placeholder="Search for games and competitions"
              onChange={(evt) => setSearch(evt.target.value)}
              value={search}
              onSubmit={handleSubmit}
            />
          </div>
          <div className="hidden md:flex md:flex-1">{/* Navlinks */}</div>
        </div>
        <div className="flex md:hidden">{/* Mobile Toggle Button */}</div>
      </Container>
    </header>
  );
};

export default Header;
