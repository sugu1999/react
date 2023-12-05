import {useState} from "react";
import Child from "./Child";

function Parent() {

    let [v,setV]=useState(0)
    let [counter,setCouter]=useState(111)

    function getDataFromChild(a){
        setV(a)
        setCouter(counter+10)
    }


  return (
    <div className="bg-dark text-white p-5">
      <h1>Parent</h1>
      <h1>{v}</h1>
      <h1>{counter}</h1>
      <Child  getDataFromChild={getDataFromChild}/>
    </div>
  );
}

export default Parent;
