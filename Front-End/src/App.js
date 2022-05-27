import React from "react";
import "./Style/style.css";
import {
  Nav,
  Navbar,
  Container,
  InputGroup,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import Task from "./components/Task";

const tasksArray = [
  {
    title: "homework",
    colorNumber: 2,
    description:
      "egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat",
  },
  {
    title: "homework",
    colorNumber: 3,
    description:
      "egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat",
  },
  {
    title: "homework",
    colorNumber: 4,
    description:
      "egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat",
  },
  {
    title: "homework",
    colorNumber: 5,
    description:
      "egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat",
  },
];

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
            <FormControl placeholder="Task title ..." />
            <Form.Select className="page-imput-task-colour">
              <option>Choose colour - default is random</option>
              <option>Yellow</option>
              <option>Cyan</option>
              <option>Light</option>
              <option>Blue</option>
            </Form.Select>
            <Button variant="outline-warning">Button</Button>
          </InputGroup>
          <InputGroup className="mt-2">
            <InputGroup.Text>Description</InputGroup.Text>
            <FormControl as="textarea" aria-label="With textarea" />
          </InputGroup>
        </section>
        <section className="page-show-task">
          {tasksArray?.map((task) => (
            <Task
              title={task.title}
              description={task.description}
              colorNumber={task.colorNumber}
              key={Date.now() * Math.random()}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
