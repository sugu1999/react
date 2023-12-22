import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrementCounter } from "../slices/counterSlice";
import { productsPromiseLifeCycle } from "../slices/productsSlice";

function Test1() {
  let counterObj = useSelector((state) => state.counterState);
  let dispatch = useDispatch();
  let { products, isPending, errMessage } = useSelector(
    (state) => state.productsState
  );

  function changecounter() {
    let actionObj = decrementCounter();
    dispatch(actionObj);
  }

  function getproducts() {
    let actionObj = productsPromiseLifeCycle();
    dispatch(actionObj);
  }

  return (
    <div>
      <p className="display-3">Test1</p>
      <p className="lead fs-1 text-warning">{counterObj.counter}</p>
      <button className="btn btn-danger" onClick={changecounter}>
        Decrement
      </button>
      <button className="btn btn-danger ms-4" onClick={getproducts}>
        Products
      </button>
      {/* one product data */}
      <div className="text-white text-center">
        <p className="lead fs-4">{products[0]?.id}</p>
        <p className="lead fs-4">{products[0]?.title}</p>
        <p className="lead fs-4">{products[0]?.price}</p>
      </div>
    </div>
  );
}

export default Test1;
