import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Task from "../components/Task";
import { getAllTaskApi } from "../api/taskApi";
import CreateTask from "./CreateTask";

const HomePage = () => {
  const [taskData, setTaskData] = useState([]);
  useEffect(() => {
    getAllTaskApi().then((data) => setTaskData(data.data.tasks.reverse()));
  }, []);
  return (
    <main className="container page-main">
      <section className="page-imput-task">
        <CreateTask />
      </section>
      <section className="page-show-task">
        {taskData?.map((task) => (
          <Task
            title={task.title}
            description={task.description}
            colorNumber={task.colorNumber}
            taskId={task._id}
            key={uuidv4()}
          />
        ))}
      </section>
    </main>
  );
};

export default HomePage;
