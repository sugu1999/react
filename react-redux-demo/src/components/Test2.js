import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { incrementCounterByValue } from '../slices/counterSlice';
import { productsPromiseLifeCycle } from '../slices/productsSlice';

function Test2() {
  let counterObj=useSelector(state=>state.counterState)
  let {products,isPending,errMessage}=useSelector(state=>state.productsState)
  let dispatch=useDispatch()

  function changeCounterBy10(){
    let actionObj=incrementCounterByValue(10)
    dispatch(actionObj)
  }



  function getproducts() {
    let actionObj = productsPromiseLifeCycle();
    dispatch(actionObj);
  }

  return (
    <div>
         <p className="display-3">Test2</p>
         <p className="lead fs-1 text-warning" >{counterObj.counter}</p>
         <button onClick={changeCounterBy10} className='btn btn-success'>Increment by 10</button>
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
  )
}

export default Test2