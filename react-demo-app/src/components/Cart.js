import {useContext} from "react";
import { userLoginContextObj } from "../contexts/userLoginContext";
import Payment from "./Payment";

function Cart() {
  let { currentUser } = useContext(userLoginContextObj);
  return (
    <div className="p-3 bg-dark text-white">
      <div>
          
      <h1>Cart</h1>
      {Object.keys(currentUser).length === 0 ? (
        <p className="lead fs-4 text-warning">No User Loggedin</p>
      ) : (
        <>
          <p className="lead">{currentUser.username}</p>
          <p className="lead">{currentUser.email}</p>
          <p className="lead">{currentUser.age}</p>
        </>
      )}
      </div>
      <Payment />
    </div>
  );
}

export default Cart;
