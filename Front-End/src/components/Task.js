import { useRef, useState } from "react";
import { Button } from "react-bootstrap";
const Task = ({ title, description, colorNumber }) => {
  const colors = [
    { bg: "text-bg-success", btn: "dark" },
    { bg: "text-bg-danger", btn: "dark" },
    { bg: "text-bg-warning", btn: "primary" },
    { bg: "text-bg-info", btn: "warning" },
    { bg: "text-bg-light", btn: "success" },
    { bg: "text-bg-primary", btn: "danger" },
  ];
  const [btnColor, setBtnColor] = useState(colors[colorNumber].btn);
  const cardRef = useRef(null);
  return (
    <>
      <aside
        className={`card text-center mb-2 mt-2 ${colors[colorNumber].bg}`}
        ref={cardRef}
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
                colors[1].bg
              );
              setBtnColor("dark");
            }}
          >
            Completed
          </Button>
          <Button variant={btnColor} className="ms-2 me-2">
            Delete
          </Button>
          <Button variant={btnColor}>Edit</Button>
        </div>
        <div className="card-footer"></div>
      </aside>
    </>
  );
};

// console.log(
//   document
//     .getElementsByTagName("aside")[1]
//     .classList.contains("text-bg-warning")
// );

export default Task;
