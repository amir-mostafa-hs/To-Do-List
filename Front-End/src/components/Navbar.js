import { NavLink } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

const TopNavbar = () => {
  return (
    <aside className="container-fluid">
      <Navbar bg="dark" variant="dark" className="page-navbar">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="header icon"
              src={require("../Image/logo.png")}
              className="d-inline-block align-top"
            />{" "}
            ToDo List
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to={"/"} className="nav-link">
              Home
            </NavLink>
            <NavLink to={"/history"} className="nav-link">
              History
            </NavLink>
            <NavLink to={"/about"} className="nav-link">
              About
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </aside>
  );
};

export default TopNavbar;
