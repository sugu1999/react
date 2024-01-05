import { Fragment, useState } from "react";

function Form1() {
  let [stateDetails, setStateDetails] = useState([
    { state: "telangana", districts: ["warangal", "rangareddy"] },
    { state: "andhra pradesh", districts: ["guntur", "prakasam"] },
  ]);

  let [selectedState, setSelectedState] = useState("");
  let [districtsOfSelectedState, setDistrictsOFSelectedState] = useState([]);
  let [selectedDistricts, setSelectedDistricts] = useState([]);

  let [err, setErr] = useState({});

  //form value handler
  function handleStateData(event) {
    let value = event.target.value;
    for (let st of stateDetails) {
      if (st.state === value) {
        setSelectedState(value);
        setDistrictsOFSelectedState(st.districts);
      }
    }
    setSelectedDistricts([]);
  }

  function handleSelectedDist(e) {
    setSelectedDistricts([...selectedDistricts, e.target.value]);
  }

  //form submission handler
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log({ selectedState, selectedDistricts });
  }

  return (
    <div>
      <form className="w-50 mx-auto mt-5" onSubmit={handleFormSubmit}>
        <select name="state" onChange={handleStateData} defaultValue="">
          <option value="" disabled>
            Select a state
          </option>
          {stateDetails.map((stateObj) => (
            <option key={stateObj.state}>{stateObj.state}</option>
          ))}
        </select>

        {districtsOfSelectedState.map((dt) => (
          <Fragment key={dt}>
            <input
              type="checkbox"
              id={dt}
              onChange={handleSelectedDist}
              value={dt}
            />
            <label htmlFor={dt}>{dt}</label>
          </Fragment>
        ))}
        <button className="btn btn-success" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form1;

// function validateUser(user) {
//   // console.log(user)
//   let errors = {};

//   //validation checking
//   //if username is empty
//   if (!user.username) {
//     errors.username = "Username is required";
//   } else if (user.username.length < 4) {
//     errors.username = "MIn length should be 4";
//   }

//   return errors;
// }
