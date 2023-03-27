import React from "react";
import { Navbar } from "flowbite-react";
import { SiBookstack as BookLogo } from "react-icons/si";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

function NavBar() {
  return (
    <div>
      <Navbar fluid={false} rounded={true}>
        <Navbar.Brand href="/">
          <BookLogo size={30} color="green" />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <SearchBar />
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse></Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
