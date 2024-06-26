import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  const auth = {
    isLoggedIn: false,
    userId: "34567345",
  };

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/">ALL USERS</NavLink>
      </li>

      {auth.isLoggedIn && (
        <li>
          <NavLink to={`${auth.userId}/places`}>MY PLACES</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to={`/places/new`}>ADD PLACE</NavLink>
        </li>
      )}

      {!auth.isLoggedIn && (
        <li>
          <NavLink to={`/auth`}>AUTHENTICATE</NavLink>
        </li>
      )}

      {/* {auth.isLoggedIn && (
        <li>
          <Button onClick={auth.logout}>LOGOUT</Button>
        </li>
      )} */}
    </ul>
  );
};

export default NavLinks;
