import React from "react";

function TasksCount(props) {
  return (
    <div>
      <p className="fs-1 lead text-center text-primary">Tasks Count</p>
      <p className="display-3 text-center">{props.tasks.length}</p>
    </div>
  );
}

export default TasksCount;
