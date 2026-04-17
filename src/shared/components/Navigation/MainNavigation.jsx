import React, { useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";

const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => setDrawerIsOpen(true);
  const closeDrawerHandler = () => setDrawerIsOpen(false);

  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}

      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="h-full flex items-center justify-center">
          <NavLinks />
        </nav>
      </SideDrawer>

      <MainHeader>
        {/* Mobile Menu Button */}
        <button
          onClick={openDrawerHandler}
          className="
            w-12 h-12
            flex flex-col justify-around
            bg-transparent border-none
            mr-8 cursor-pointer
            md:hidden
          "
        >
          <span className="block h-[2.5px] w-12 bg-white" />
          <span className="block h-[2.5px] w-12 bg-white" />
          <span className="block h-[2.5px] w-12 bg-white" />
        </button>

        {/* Logo / Title */}
        <h1 className="text-white text-xl font-bold">
          <Link to="/" className="no-underline text-white">
            YourPlaces
          </Link>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;