import React from "react";

function Child(props) {
  //{getDataFromChild:function(){}}

  //state
  let data = 200;

  return (
    <div className="bg-primary text-white p-5">
      <h1>Child</h1>
      <button
        className="btn btn-warning"
        onClick={() => props.getDataFromChild(data)}
      >
        Send data to Parent
      </button>
    </div>
  );
}

export default Child;
