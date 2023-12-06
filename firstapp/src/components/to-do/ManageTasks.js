import { useState } from "react";
import AddTask from "./AddTask";
import TasksCount from "./TasksCount";
import TasksList from "./TasksList";

function ManageTasks() {
  let [tasks, setTasks] = useState([]);

  return (
    <div>
      <h1 className=" display-1 text-center text-secondary">To-Do app</h1>
      <div className="row">
        <div className="col-sm-4">
          <AddTask tasks={tasks} setTasks={setTasks} />
        </div>
        <div className="col-sm-4">
          <TasksList tasks={tasks} />
        </div>
        <div className="col-sm-4">
          <TasksCount tasks={tasks} />
        </div>
      </div>
    </div>
  );
}

export default ManageTasks;
