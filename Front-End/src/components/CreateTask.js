import { useState } from "react";
import { InputGroup, Form, FormControl, Button, Alert } from "react-bootstrap";
const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [colour, setColour] = useState("Choose colour - default is random");
  const [show, setShow] = useState(true);

  const submitTask = () => {
    if (!title || !description) {
      setShow(true);
      setTimeout(() => setShow(false), 5000);
    } else {
      setShow(false);
    }
  };

  const EmptyAlert = () => {
    if (show) {
      return (
        <aside className="notification">
          <Alert
            variant="danger"
            onClose={() => setShow(false)}
            dismissible
            className="notification-alert"
          >
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>
              The description or title field or both is empty. Please enter a
              title and description
            </p>
          </Alert>
        </aside>
      );
    }
  };
  return (
    <aside>
      <EmptyAlert />
      <InputGroup>
        <FormControl
          placeholder="Task title ..."
          onChange={(e) => setTitle(e.target.value)}
        />
        <Form.Select
          className="page-imput-task-colour"
          onChange={(e) => setColour(e.target.value)}
        >
          <option>Choose colour - default is random</option>
          <option>Yellow</option>
          <option>Cyan</option>
          <option>Light</option>
          <option>Blue</option>
        </Form.Select>
        <Button variant="outline-warning" onClick={submitTask}>
          Button
        </Button>
      </InputGroup>
      <InputGroup className="mt-2">
        <InputGroup.Text>Description</InputGroup.Text>
        <FormControl
          as="textarea"
          aria-label="With textarea"
          onChange={(e) => setDescription(e.target.value)}
        />
      </InputGroup>
    </aside>
  );
};
export default CreateTask;
