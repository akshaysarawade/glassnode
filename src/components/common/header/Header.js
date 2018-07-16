import React from "react";
import {
  Navbar,
  NavItem,
  Nav,
  MenuItem,
  NavDropdown
} from "react-bootstrap";

const Header = () => {
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
            <NavItem eventKey={1} href="#">
              Market Overview
            </NavItem>
            <NavItem eventKey={2} href="#">
              Liquidity
            </NavItem>
            <NavDropdown eventKey={3} title="Records" id="basic-nav-dropdown" bsStyle="primary">
              <MenuItem eventKey={3.1}>10</MenuItem>
              <MenuItem eventKey={3.2}>50</MenuItem>
              <MenuItem eventKey={3.3}>100</MenuItem>
              <MenuItem eventKey={3.4}>All</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
