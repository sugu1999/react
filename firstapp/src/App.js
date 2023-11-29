import './App.css'
import img1 from './images/2.jpeg'

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
    <div className="main">
      <h1 className='text-danger display-2 bg-warning'>Hello React</h1>
      <img src="https://media.istockphoto.com/id/1439425791/photo/digital-technology-software-development-concept-coding-programmer-working-on-laptop-with.webp?b=1&s=170667a&w=0&k=20&c=c0Q8u1Y5yFJCDxltBZd0RAn1g01Se6qCjZGS5q9XLZs=" width="400px" alt="" />
      <img src={img1} className='w-50' alt="" />
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
