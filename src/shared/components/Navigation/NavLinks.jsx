import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../context/auth-context";

const NavLinks = () => {
  const auth = useContext(AuthContext);

  const linkClasses = ({ isActive }) =>
    `
      px-2 py-1 border transition-colors duration-200
      ${isActive
        ? "bg-yellow-400 border-gray-800 text-gray-800"
        : "border-transparent text-gray-800 md:text-white"}
      hover:bg-yellow-400 hover:border-gray-800 hover:text-gray-800
    `;

  return (
    <ul
      className="
        list-none p-0 m-0
        flex flex-col items-center justify-center
        w-full h-full
        md:flex-row
      "
    >
      <li className="my-4 md:my-0 md:mx-2">
        <NavLink to="/" className={linkClasses}>
          ALL USERS
        </NavLink>
      </li>

      {auth.isLoggedIn && (
        <li className="my-4 md:my-0 md:mx-2">
          <NavLink to="/u1/places" className={linkClasses}>
            MY PLACES
          </NavLink>
        </li>
      )}

      {auth.isLoggedIn && (
        <li className="my-4 md:my-0 md:mx-2">
          <NavLink to="/places/new" className={linkClasses}>
            ADD PLACE
          </NavLink>
        </li>
      )}

      {!auth.isLoggedIn && (
        <li className="my-4 md:my-0 md:mx-2">
          <NavLink to="/auth" className={linkClasses}>
            AUTHENTICATE
          </NavLink>
        </li>
      )}

      {auth.isLoggedIn && (
        <li className="my-4 md:my-0 md:mx-2">
          <button
            onClick={auth.logout}
            className="
              px-2 py-1 border border-gray-800
              text-gray-800
              bg-transparent
              cursor-pointer
              transition-colors duration-200
              hover:bg-gray-800 hover:text-white
              md:border-white md:text-white
              md:hover:bg-yellow-400 md:hover:text-gray-800
            "
          >
            LOGOUT
          </button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;