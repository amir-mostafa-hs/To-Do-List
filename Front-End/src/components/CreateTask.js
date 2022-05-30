import { InputGroup, Form, FormControl, Button } from "react-bootstrap";
const CreateTask = () => {
  return (
    <aside>
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
    </aside>
  );
};
export default CreateTask;
