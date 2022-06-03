import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteTaskApi } from "../api/taskApi";
import { Button } from "react-bootstrap";
import CreateTask from "./CreateTask";

const Task = ({ title, description, colorNumber, taskId }) => {
  const colors = [
    { bg: "text-bg-success", btn: "dark" },
    { bg: "text-bg-danger", btn: "dark" },
    { bg: "text-bg-warning", btn: "primary" },
    { bg: "text-bg-info", btn: "warning" },
    { bg: "text-bg-light", btn: "success" },
    { bg: "text-bg-primary", btn: "danger" },
  ];

  const [btnColor, setBtnColor] = useState(colors[colorNumber].btn);
  const [editState, setEditState] = useState(false);
  const cardRef = useRef(null);
  const navigate = useNavigate();

  const deleteTask = (id) => {
    console.log(id);
    deleteTaskApi(id);
    navigate(0);
  };

  return (
    <>
      <aside
        className={`card text-center mb-2 mt-2 ${colors[colorNumber].bg}`}
        ref={cardRef}
        id={taskId}
      >
        <div className="card-header task-title">{title}</div>
        <div className="card-body">
          {/* <h5 className="card-title">Special title treatment</h5> */}
          <p className="card-text">{description}</p>
          <Button
            variant={btnColor}
            onClick={() => {
              cardRef.current.classList.replace(
                colors[colorNumber].bg,
                colors[0].bg
              );
              setBtnColor("dark");
            }}
          >
            Completed
          </Button>
          <Button
            variant={btnColor}
            className="ms-2 me-2"
            onClick={() => deleteTask(taskId)}
          >
            Delete
          </Button>
          <Button variant={btnColor} onClick={() => setEditState(true)}>
            Edit
          </Button>
        </div>
        <div className="card-footer">
          {editState && (
            <CreateTask
              callFor="edit"
              taskData={{ title, description, colorNumber, taskId }}
            />
          )}
        </div>
      </aside>
    </>
  );
};

export default Task;
