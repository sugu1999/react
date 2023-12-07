import { useState } from "react";
import AddTask from "./AddTask";
import TasksCount from "./TasksCount";
import TasksList from "./TasksList";

function ManageTasks() {
  

  return (
    <div>
      <h1 className=" display-1 text-center text-secondary">To-Do app</h1>
       <div className="row">
        <div className="col-sm-4">
          <AddTask  />
        </div>
        <div className="col-sm-4">
          <TasksList  />
        </div>
        <div className="col-sm-4">
          <TasksCount  />
        </div> 
      </div> 
    </div>
  );
}

export default ManageTasks;
