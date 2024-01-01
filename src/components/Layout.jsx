import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import HeaderMeta from "./HeaderMeta";

const Layout = () => {
  return (
    <>
      <HeaderMeta/>
      <Header />
      <main className="relative z-0">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
