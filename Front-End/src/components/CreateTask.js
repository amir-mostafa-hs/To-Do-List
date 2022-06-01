import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputGroup, Form, FormControl, Button, Alert } from "react-bootstrap";
import { createTaskApi } from "../api/taskApi";

const CreateTask = () => {
  const [taskContent, setTaskContent] = useState({
    title: "",
    description: "",
    colorNumber: "Choose colour",
  });
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const submitTask = () => {
    if (
      !taskContent.title ||
      !taskContent.description ||
      taskContent.colorNumber === "Choose colour"
    ) {
      setShow(true);
      setTimeout(() => setShow(false), 5000);
    } else {
      createTaskApi(taskContent);
      setTaskContent({
        title: "",
        description: "",
        colorNumber: "Choose colour",
      });
      navigate(0);
    }
  };

  const EmptyAlert = () => {
    if (show) {
      return (
        <Alert
          variant="danger"
          onClose={() => setShow(false)}
          dismissible
          className="mt-2"
        >
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            The description field or title or color or all three is blank.
            Please enter title, description and color
          </p>
        </Alert>
      );
    }
  };
  return (
    <aside>
      <InputGroup>
        <FormControl
          placeholder="Task title ..."
          value={taskContent.title}
          onChange={(e) =>
            setTaskContent({ ...taskContent, title: e.target.value })
          }
        />
        <Form.Select
          className="page-imput-task-colour"
          value={taskContent.colorNumber}
          onChange={(e) => {
            if (e.target.value === "random") {
              const randomColur = Math.floor(Math.random() * 4) + 2;
              setTaskContent({ ...taskContent, colorNumber: randomColur });
            } else {
              setTaskContent({ ...taskContent, colorNumber: e.target.value });
            }
          }}
        >
          <option>Choose colour</option>
          <option value={"random"}>Random</option>
          <option value={2}>Yellow</option>
          <option value={3}>Cyan</option>
          <option value={4}>Light</option>
          <option value={5}>Blue</option>
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
          value={taskContent.description}
          onChange={(e) =>
            setTaskContent({ ...taskContent, description: e.target.value })
          }
        />
      </InputGroup>
      <EmptyAlert />
    </aside>
  );
};
export default CreateTask;
