import React from "react";
import Container from "./Container";
import SearchBox from "./SearchBox";
import FacebookIcon from "./icons/FacebookIcon";
import TwitterIcon from "./icons/TwitterIcon";
import YoutubeIcon from "./icons/YoutubeIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import InstagramIcon from "./icons/InstagramIcon";
import SocialLink from "./SocialLink";

const socials = [
  { href: "", Icon: FacebookIcon },
  { href: "", Icon: YoutubeIcon },
  { href: "", Icon: TwitterIcon },
  { href: "", Icon: LinkedInIcon },
  { href: "", Icon: InstagramIcon },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#003B65] pt-[33px] pb-10">
      <Container size="w-[90%] md:w-[92%]">
        <div className="w-full md:w-[97%]">
          <div className="flex items-center flex-wrap w-full -mt-3 mb-11">
            <div className="w-full py-3 md:w-1/2 flex items-center justify-center space-x-3 md:space-x-7 md:justify-start">
              <img
                src="/firstbank-logo2.png"
                width="80"
                height="80"
                alt="FirstBank Logo"
              />
              <SearchBox
                placeholder="Search for games and competitions"
                className="pl-3 md:pl-7 max-w-[335px] flex-[1_1_auto]"
              />
            </div>
            <div className="w-full py-3 md:w-1/2 flex items-center justify-center space-x-5 md:justify-end">
              {socials.map((social) => (
                <SocialLink
                  key={social.Icon.name}
                  Icon={social.Icon}
                  href={social.href}
                />
              ))}
            </div>
          </div>
          <hr className="h-0.5 block bg-secondary border-0 mb-4" />
          <p className="text-center font-light text-xs text-[#F6F6F6]">
            @{year}. First Academy Tech Games 2.0
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
