import { NavLink } from "react-router-dom";
import SearchBox from "./SearchBox";
import ActionLink from "./ActionLink";
import { cn } from "../utils";
import useSearchText from "../hooks/useSearchText";

const MobileNavMenuLinks = ({ className, links, onClose, ...props }) => {
  const { searchText, onChange, onSubmit } = useSearchText();

  return (
    <div
      className={cn(
        "w-full h-full flex items-center justify-center",
        className
      )}
      {...props}
    >
      <div className="min-w-[235px] w-[70%] space-y-5">
        <SearchBox
          value={searchText}
          onChange={onChange}
          onSubmit={onSubmit}
          placeholder="Search for games & competition"
          className="h-10 py-[13px] pr-[50px] pl-[22px] flex items-center w-full"
        />
        {links.map((link) => (
          <MenuLink href={link.path} key={link.path} onClick={onClose}>
            {link.name}
          </MenuLink>
        ))}
        <div className="w-full flex justify-center">
          <ActionLink href="/games" onClick={onClose}>
            Explore
          </ActionLink>
        </div>
      </div>
    </div>
  );
};

const MenuLink = ({ href, className, children, ...props }) => {
  return (
    <NavLink
      to={href}
      className={cn(
        "flex items-center justify-center w-full py-1 h-6 border-b border-b-[#B8B8B8] text-sm font-medium text-primary",
        className
      )}
      {...props}
    >
      {children}
    </NavLink>
  );
};

export default MobileNavMenuLinks;
