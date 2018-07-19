import React from "react";
import { Navbar, NavItem, Nav, MenuItem, NavDropdown } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

const Header = props => {
  return (
    <div>
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
          <NavLink to="/"><span className="blue-color">Glassnode</span></NavLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey="marketOverview" href="#">
              <NavLink to="/">Market Overview</NavLink>
            </NavItem>

            <NavItem eventKey="liquidity" href="#">
              <NavLink to="/liquidity">Liquidity</NavLink>
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
