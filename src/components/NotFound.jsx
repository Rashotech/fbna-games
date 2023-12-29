import React from "react";
import { Link } from "react-router-dom";

const defaultMessage = "Page not found";

const NotFound = ({
  message = defaultMessage,
  redirectTo = "/",
  redirectText = "Go back home",
}) => {
  return (
    <div className="flex items-center justify-center h-[60vh]">
      <div className="max-w-sm space-y-2 md:space-y-0 md:flex md:item md:space-x-4">
        <div className="text-3xl text-primary font-semibold">404</div>
        <div className="flex flex-col">
          <h1 className="text-3xl text-gray-800 font-semibold">{message}</h1>
          <Link to={redirectTo} className="text-primary mt-4 text-sm space-x-2">
            <span>{redirectText}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
