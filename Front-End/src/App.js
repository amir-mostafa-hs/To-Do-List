import React from "react";
import {
  Nav,
  Navbar,
  Container,
  InputGroup,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function App() {
  return (
    <div className="page-content">
      <aside className="container-fluid">
        <Navbar bg="dark" variant="dark" className="page-navbar">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt="header icon"
                src={require("./Image/logo.png")}
                className="d-inline-block align-top"
              />{" "}
              ToDo List
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">History</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </aside>
      <main className="container page-main">
        <section className="page-imput-task">
          <InputGroup>
            <FormControl placeholder="Task description ..." />
            <Form.Select className="page-imput-task-colour">
              <option>Choose colour - default is random</option>
              <option>yellow</option>
              <option>orange</option>
              <option>pink</option>
              <option>purple</option>
              <option>blue</option>
            </Form.Select>
            <Button variant="outline-warning">Button</Button>
          </InputGroup>
        </section>
      </main>
    </div>
  );
}

export default App;
