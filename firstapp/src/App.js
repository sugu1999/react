import "./App.css";

import ManageTasks from "./components/to-do/ManageTasks";
import ToDoContextStore from "./contexts/ToDoContextStore";

function App() {
  //return react element
  return (
    <div className="main container">
      {/* Provide context store to application */}
      <ToDoContextStore>
        <ManageTasks />
      </ToDoContextStore>
    </div>
  );
}

export default App;
