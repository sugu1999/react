import React from "react";
import { useState } from "react";

function FormDemo1() {
  let [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    state: "",
    css: false,
    react: false,
  });

  let [err, setErr] = useState({});

  function handleUser(event) {
    // console.log(event.target.checked)
    let name = event.target.name;
    let value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setUser({ ...user, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    //call validation functions
    let errors = validateUser(user);
    if (Object.keys(errors).length === 0) {
      setErr({});
      console.log(user);
    } else {
      setErr(errors);
    }
  }

  // console.log(err)

  return (
    <div>
      <h1 className="display-2 text-center text-primary">Forms</h1>

      {/* form */}
      <form className="w-50 mx-auto mt-5" onSubmit={handleFormSubmit}>
        {/* username */}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="form-control"
            onChange={handleUser}
          />
        </div>
        {/* username validation err message */}
        {err.username && <p className="text-danger">{err.username}</p>}
        {/* password */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            onChange={handleUser}
          />
        </div>
        {/* email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            onChange={handleUser}
          />
        </div>
        {/* select */}
        <div className="mb-3">
          <label htmlFor="state">Select a state</label>
          <select
            name="state"
            id="state"
            className="form-select"
            onChange={handleUser}
          >
            <option value="telangana">Telangana</option>
            <option value="ap">Andhra pradesh</option>
            <option value="tamilnadu">Tamilnadu</option>
          </select>
        </div>
        {/* skills */}
        <div className="mb-3">
          <label>Select your skills</label>
          {/* css */}
          <div className="form-check">
            <input
              type="checkbox"
              name="css"
              id="css"
              className="form-check-input"
              onChange={handleUser}
            />
            <label htmlFor="css" className="form-check-label">
              CSS
            </label>
          </div>
          {/* react */}
          <div className="form-check">
            <input
              type="checkbox"
              name="react"
              id="react"
              className="form-check-input"
              onChange={handleUser}
            />
            <label htmlFor="react" className="form-check-label">
              ReactJS
            </label>
          </div>
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
  if (user.username.length!=0 && user.username.length < 4) {
    errors.username = "Min length should be 4";
  }
  return errors;
}
