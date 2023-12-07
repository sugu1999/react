import {useContext} from "react";
import {tasksContext} from '../../contexts/todoContext'


function TasksList() {

  let [tasks]=useContext(tasksContext)

  return (
    <div>
      <p className="fs-1 lead text-center text-primary">Tasks List</p>

      {tasks.map((t) => (
        <p className="lead text-center" key={t}>
          {t}
        </p>
      ))}
    </div>
  );
}

export default TasksList;
