import {useState} from "react";
import { userLoginContextObj } from "./userLoginContext";

function UserLoginStore({ children }) {
  //let userCred={username:'ravi',password:'test'}

  let [currentUser,setCurrentUser]=useState({})

  function compareCredentials(userObj) {
    if (userObj.username === "ravi" && userObj.password === "test") {
        setCurrentUser({
            username:'ravi',
            password:'test',
            email:'ravi@mail.com',
            age:21
        })
      return true;
    } else {
      return false;
    }
  }

  function updateUser(){
    setCurrentUser({...currentUser,age:41})
  }

  return (
    <userLoginContextObj.Provider value={{  currentUser,compareCredentials,updateUser }}>
      {children}
    </userLoginContextObj.Provider>
  );
}

export default UserLoginStore;
