function App() {
  //state
  let username = "Rajesh";
  let email = "rajesh@mail.com";
  let mobile = 99999999;
  let skills = ["js", "java", "nodejs", "aws"];
  let address = {
    city: "hyd",
    pincode: 666666,
  };

  let emps = [
    { eno: 100, name: "ravi" },
    { eno: 100, name: "bhanu" },
    { eno: 300, name: "vikas" },
  ];

  //return react element
  return (
    <div>
      <h1>Hello React</h1>
      <h2>Username : {username}</h2>
      <h2>Email : {email}</h2>
      <h2>Mobile: {mobile}</h2>
      {skills.map((s) => (
        <h3 key={s}>{s}</h3>
      ))}

      <h2>{address.city}</h2>
      <h2>{address.pincode}</h2>
     

      <table>
          <thead>
            <tr>
              <th>Eno</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
              {
                emps.map((empObj,index)=><tr>
                  <td>{empObj.eno}</td>
                  <td>{empObj.name}</td>
                </tr>)
              }
          </tbody>
        </table>



      {/* <div>
        {emps.map((empObj, index) => (
          <div>
            <h4>{empObj.eno}</h4> <p>{empObj.name}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default App;
