import {useState} from "react";
import {useForm} from 'react-hook-form'
import axios from "axios";
import {compareSync} from 'bcryptjs'
import {useNavigate} from 'react-router-dom'

function Login() {
  let { register, handleSubmit } = useForm();
  let [error,setError]=useState('')
  let navigate=useNavigate()
  async function onUserLogin(userCredObj){
    //make api call to verify credentials
    let res=await axios.get(`http://localhost:4000/users?username=${userCredObj.username}`)
    let usersList=res.data;

    //if user not existed
    if(usersList.length===0){
      setError("Invalid Username")
    }
    //if username is matched, then compare passwords
    else{
      let result=compareSync(userCredObj.password,usersList[0].password)
      //if passwords are not matcted
      if(result===false){
        setError("Invalid password")
      }
      //if passwords are matched, navigate to user profile
      else{
        navigate('/user-profile')
      }
    }
  }
  return (
    <div>
      <h1 className="display-3 text-center text-info">User Login</h1>

      {error.length!==0&&<p className="fs-2 text-center text-danger">{error}</p>}
      <form className="w-50 mx-auto bg-light p-3 mt-5" onSubmit={handleSubmit(onUserLogin)}>
        {/* username */}
        <div className="mb-4">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            {...register("username")}
            className="form-control "
          />
        </div>

        {/* password */}
        <div className="mb-4">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            {...register("password")}
            className="form-control mb-4"
          />
        </div>

        <button className="btn btn-success d-block mx-auto">Login</button>
      </form>
    </div>
  );
}

export default Login;
