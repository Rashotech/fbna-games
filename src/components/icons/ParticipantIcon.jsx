import React from "react";
import { cn } from "../../utils";

const ParticipantIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={cn("w-4 h-4", className)}
    >
      <path
        d="M8.00004 7.58997C7.45026 7.58997 6.97937 7.39397 6.58737 7.00197C6.19537 6.60997 5.9996 6.1393 6.00004 5.58997C6.00004 5.03974 6.19582 4.56863 6.58737 4.17663C6.97893 3.78552 7.44982 3.58997 8.00004 3.58997C8.55026 3.58997 9.02115 3.78552 9.41271 4.17663C9.80426 4.56863 10 5.03974 10 5.58997C10 6.13974 9.80426 6.61041 9.41271 7.00197C9.02115 7.39352 8.55026 7.58952 8.00004 7.58997ZM3.33337 12.41V11.3133C3.33337 11.0382 3.41337 10.7809 3.57337 10.5413C3.73382 10.3013 3.94937 10.1151 4.22004 9.98263C4.84937 9.68085 5.47893 9.45463 6.10871 9.30397C6.73893 9.15285 7.36937 9.0773 8.00004 9.0773C8.63115 9.0773 9.2616 9.15285 9.89137 9.30397C10.5212 9.45508 11.1505 9.6813 11.7794 9.98263C12.0505 10.1151 12.266 10.3013 12.426 10.5413C12.5865 10.7809 12.6667 11.0382 12.6667 11.3133V12.4106L3.33337 12.41ZM4.00004 11.7433H12V11.3126C12 11.1651 11.9525 11.0262 11.8574 10.896C11.7618 10.7662 11.6298 10.6564 11.4614 10.5666C10.9129 10.3009 10.3472 10.0973 9.76404 9.95597C9.18182 9.81419 8.59382 9.7433 8.00004 9.7433C7.40671 9.7433 6.81871 9.81419 6.23604 9.95597C5.65293 10.0973 5.08715 10.3009 4.53871 10.5666C4.36982 10.6564 4.23782 10.7662 4.14271 10.896C4.0476 11.0262 4.00004 11.1653 4.00004 11.3133V11.7433ZM8.00004 6.9233C8.36671 6.9233 8.68071 6.79263 8.94204 6.5313C9.20337 6.26997 9.33382 5.95619 9.33337 5.58997C9.33337 5.2233 9.20293 4.9093 8.94204 4.64797C8.68115 4.38663 8.36715 4.25619 8.00004 4.25663C7.63337 4.25663 7.3196 4.38708 7.05871 4.64797C6.79782 4.90885 6.66715 5.22285 6.66671 5.58997C6.66671 5.95663 6.79737 6.27041 7.05871 6.5313C7.32004 6.79219 7.63382 6.92285 8.00004 6.9233Z"
        fill="#E3B527"
      />
    </svg>
  );
};

export default ParticipantIcon;
