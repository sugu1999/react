import {useContext} from "react";
import {tasksContext} from '../../contexts/todoContext'

function TasksCount() {

  let [tasks]=useContext(tasksContext)

  return (
    <div>
      <p className="fs-1 lead text-center text-primary">Tasks Count</p>
      <p className="display-3 text-center">{tasks.length}</p>
    </div>
  );
}

export default TasksCount;
