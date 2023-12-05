import { useState } from "react";

function StateDemo1() {
  let [counter1, setCounter1] = useState(100);
  let [counter2, setCounter2] = useState(200);

  function incrementCounter1() {
    setCounter1(counter1 + 1);
  }
  function decrementCounter1() {
    setCounter1(counter1 - 1);
  }
  function incrementCounter2() {
    setCounter2(counter2 + 1);
  }
  function decrementCounter2() {
    setCounter2(counter2 - 1);
  }

  return (
    <div>
      <div className="row">
       
        <div className="col-sm-6">
          <h1>{counter1}</h1>
          <button className="btn btn-primary" onClick={incrementCounter1}>
            +
          </button>
          <button className="btn btn-primary" onClick={decrementCounter1}>
            {" "}
            -
          </button>
        </div>
        <div className="col-sm-6">
        <h1>{counter2}</h1>
          <button className="btn btn-primary" onClick={incrementCounter2}>
            +
          </button>
          <button className="btn btn-primary" onClick={decrementCounter2}>
            {" "}
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default StateDemo1;
