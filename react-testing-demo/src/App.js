import "./App.css";
import { useState,useEffect } from "react";

function App() {
  let [counter, setCounter] = useState(0);
  // let counter = 0;
  let [users, setUsers] = useState([]);
  let [error, setError] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setUsers(users.map((user) => user.name)))
      .catch((err) => setError(err));
  }, []);

  return (
    <div>
      <h1>Welcome to react</h1>
      <p role="para">{counter}</p>
      <button role="button" onClick={() => setCounter(counter + 1)}>
        Increment
      </button>

      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
