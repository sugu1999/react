import React from "react";

function TasksList(props) {
  return (
    <div>
      <p className="fs-1 lead text-center text-primary">Tasks List</p>

      {props.tasks.map((t) => (
        <p className="lead text-center" key={t}>
          {t}
        </p>
      ))}
    </div>
  );
}

export default TasksList;
