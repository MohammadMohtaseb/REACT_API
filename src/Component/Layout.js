import React from 'react';
import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar fluid rounded>
        <Navbar.Brand as={Link} to="/">
          
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">My Tasks</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link as={Link} to="/" active>
            Home
          </Navbar.Link>
          <Navbar.Link as={Link} to="/weather">
            Weather
          </Navbar.Link>
          <Navbar.Link as={Link} to="/movies">
            Movies
          </Navbar.Link>
          <Navbar.Link as={Link} to="/contacts">
            Contacts
          </Navbar.Link>
          <Navbar.Link as={Link} to="/recipes">
            Recipes
          </Navbar.Link>
          <Navbar.Link as={Link} to="/about">
            About
          </Navbar.Link>
          <Navbar.Link as={Link} to="/contact">
            Contact
          </Navbar.Link>
          <Navbar.Link as={Link} to="/notes">
            Notes
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
