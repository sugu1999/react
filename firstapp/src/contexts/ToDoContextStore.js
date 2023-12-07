
import {tasksContext} from './todoContext'
import {useState} from 'react'

function ToDoContextStore({children}) {

    let [tasks, setTasks] = useState([]);

  return (
   <tasksContext.Provider value={[tasks, setTasks]}>
    {children}
   </tasksContext.Provider>
  )
}

export default ToDoContextStore





