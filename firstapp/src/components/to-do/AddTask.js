import {useContext} from "react";
import {tasksContext} from '../../contexts/todoContext'
import { useForm } from "react-hook-form";

function AddTask() {
  
 let [tasks,setTasks]= useContext(tasksContext)

  let { register, handleSubmit } = useForm();

  function addTask(newTask) {
    setTasks([...tasks, newTask.task]);
  }

  return (
    <div>
      <p className="fs-1 lead text-center text-danger">Add Task</p>
      <form onSubmit={handleSubmit(addTask)}>
        <input
          type="text"
          {...register("task")}
          id=""
          className="form-control mb-4"
          placeholder="new task...."
        />
        <button className="btn btn-secondary d-block mx-auto" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTask;
