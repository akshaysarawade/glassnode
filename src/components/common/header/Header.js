import React from "react";
import { Navbar, NavItem, Nav, MenuItem, NavDropdown } from "react-bootstrap";

const Header = props => {
  return (
    <div>
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <span className="blue-color">Glassnode</span>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem
              onSelect={k => console.log("selected: ", k)}
              eventKey="marketOverview"
              href="#"
            >
              Market Overview
            </NavItem>
            <NavItem
              onSelect={k => console.log("selected: ", k)}
              eventKey="liquidity"
              href="#"
            >
              Liquidity
            </NavItem>
            <NavDropdown
              onSelect={rowCount => props.dropdownChange(rowCount)}
              title="Records"
              id="basic-nav-dropdown"
            >
              <MenuItem eventKey={10}>10</MenuItem>
              <MenuItem eventKey={50}>50</MenuItem>
              <MenuItem eventKey={100}>100</MenuItem>
              <MenuItem eventKey="all">All</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
