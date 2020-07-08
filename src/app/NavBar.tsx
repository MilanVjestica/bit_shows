import React from 'react';
import { Navbar, Icon, NavItem } from 'react-materialize'

const NavBar = () => {
  return (
    <Navbar
      alignLinks="right"
      brand={<a className="brand-logo" href="/">BIT Shows</a>}
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      centerChildren={true}
      options={{
        draggable: true,
        inDuration: 250,
        outDuration: 200,
        preventScrolling: true
      }}
      className="blue"
    >
      <NavItem href="/about">
        About
      </NavItem>
    </Navbar>
  );
}

export default NavBar;