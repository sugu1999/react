import {useState,useContext} from 'react'
import { userLoginContextObj } from '../contexts/userLoginContext'

function Login() {

  let {compareCredentials}=useContext(userLoginContextObj)

  let [user,setUser]=useState({
    username:'',
    password:''
  })

  function handleUser(e){
    setUser({...user,[e.target.name]:e.target.value})
  }

  function onUserLogin(e){
    e.preventDefault()
    compareCredentials(user)
  }


  return (
    <div className='p-3 bg-warning'>
      <h1>User login</h1>
      <form  onSubmit={onUserLogin}>
        <input type="text" name="username" className="form-control mb-3" placeholder='Username..'  onChange={handleUser}/>
        <input type="password" name="password" className='form-control mb-3'  onChange={handleUser}  />
        <button className="btn btn-success" type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login