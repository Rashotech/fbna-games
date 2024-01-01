import React from "react";
import { Helmet } from "react-helmet";

const HeaderMeta = ({ title, description }) => {
  const mainTitle = "FBN Academy Games";
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title ? `${title} | ${mainTitle}` :  `${mainTitle}`}</title>
      <meta
        name="description"
        content={
          description &&
          "First Bank Nigeria Academy Games"
        }
      />
    </Helmet>
  );
};

export default HeaderMeta;
