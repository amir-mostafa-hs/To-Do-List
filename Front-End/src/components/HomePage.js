import { InputGroup, Form, FormControl, Button } from "react-bootstrap";
import Task from "../components/Task";

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

const HomePage = () => {
  return (
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
  );
};

export default HomePage;
