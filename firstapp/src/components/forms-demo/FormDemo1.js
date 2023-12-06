import React from "react";
import { useState } from "react";

function FormDemo1() {
  let [user, setUser] = useState({
      skills:['js','java'],
      jsTechs:['react','angular'],
      javaTechs:['spring','hibernate']
  });


  let [userSelectedTech,setUserSelectedTech]=useState([])
 

  let [err, setErr] = useState({});

  function handleUser(event) {
    // console.log(event.target.checked)
    let name = event.target.name;
    let value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setUser({ ...user, [name]: value });

    if(value==='js'){
      setUserSelectedTech(user.jsTechs)
    }
    if(value==='java'){
      setUserSelectedTech(user.javaTechs)
    }



  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(user)
    //call validation functions
  //  let errors = validateUser(user);
    // if (Object.keys(errors).length === 0) {
    //   setErr({});
    //   console.log(user);
    // } else {
    //   setErr(errors);
    // }
  }

  // console.log(err)

  return (
    <div>
      <h1 className="display-2 text-center text-primary">Forms</h1>

      {/* form */}
      <form className="w-50 mx-auto mt-5" onSubmit={handleFormSubmit}>

        <div className="mb-3">
          <input type="radio" name="selectedTech"  value={user.skills[0]} onChange={handleUser}  />
          <label htmlFor="">{user.skills[0]} </label>
        </div>
        <div className="mb-3">
          <input type="radio" name="selectedTech"  value={user.skills[1]} onChange={handleUser} />
          <label htmlFor="">{user.skills[1]} </label>
        </div>

        <div className="mb-3">
          <select name="tech" id="" className="form-select">
            {
              userSelectedTech.map(t=><option key={t}>{t}</option>)
            }
          </select>
        </div>

        {/* submit button */}
        <button type="submit" className="btn btn-success d-block mx-auto">
          Login
        </button>
      </form>
    </div>
  );
}

export default FormDemo1;

function validateUser(user) {
  //console.log("first")
  let errors = {};
  //when username is empty
  if (!user.username) {
    errors.username = "Username is required";
  }
  if (user.username.length != 0 && user.username.length < 4) {
    errors.username = "Min length should be 4";
  }
  return errors;
}
