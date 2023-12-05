import { useEffect, useState } from "react";

function SideEffectDemo1() {
  let [users, setUsers] = useState([]);

  // useEffect(()=>{
  //     //side effect
  //     fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(res=>res.json())
  //     .then(usersList=>setUsers(usersList))

  // },[])

  function getData() {
    //side effect
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((usersList) => setUsers(usersList));
  }

  console.log(users);

  return (
    <div>
      <button onClick={getData}>User</button>
      {users.length === 0 ? (
        <p className="display-1 text-danger lead">No Users</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((userObj) => (
              <tr key={userObj.id}>
                <td>{userObj.id}</td>
                <td>{userObj.name}</td>
                <td>{userObj.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

     
    </div>
  );
}

export default SideEffectDemo1;






