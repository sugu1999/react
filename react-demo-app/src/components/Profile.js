import { useContext } from "react";
import { userLoginContextObj } from "../contexts/userLoginContext";

function Profile() {
  let { currentUser ,updateUser} = useContext(userLoginContextObj);
  return (
    <div className="p-3 bg-primary">
      <h1>User Profile</h1>

      {Object.keys(currentUser).length === 0 ? (
        <p className="lead fs-4 text-warning">No User Loggedin</p>
      ) : (
        <>
          <p className="lead">{currentUser.username}</p>
          <p className="lead">{currentUser.email}</p>
          <p className="lead">{currentUser.age}</p>
        </>
      )}

      <button className="btn btn-danger" onClick={updateUser}>Update Age</button>
    </div>
  );
}

export default Profile;
