import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
      <nav className=" navbar-light bg-light">
          <ul className="d-flex me-4">
            <ol className="navbar-brand">
            <NavLink className="navbar-brand" to="/">
            Intensive Foods
              </NavLink>
            </ol>
            <ol className="navbar-nav">
              <NavLink className="nav-link" to="/">
                Foods
              </NavLink>
            </ol>
            <ol className="navbar-nav mx-4">
              <NavLink className="nav-link" to="/customers">
                Customers
              </NavLink>
            </ol>
            <ol className="navbar-nav">
              <NavLink className="nav-link" to="/orders">
                Orders
              </NavLink>
            </ol>
          </ul>
    </nav>
  );
}

export default NavBar;
