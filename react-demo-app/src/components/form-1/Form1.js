import {useState} from 'react'

function Form1() {

    let [user,setUser]=useState({
        username:'',
        password:'',
        email:'',
        acknowledge:''
    })

    let [err,setErr]=useState({})

    //form value handler
    function handleUserData(event){
        // console.log(event.target.type)
        // console.log(event.target.name)
        // console.log(event.target.value)
        let name=event.target.name;
        let value=event.target.type==='checkbox'?event.target.checked:event.target.value;
        setUser({...user,[name]:value})
    }

    //form submission handler
    function handleFormSubmit(event){
        event.preventDefault()
        //validate user
       let er= validateUser(user)
       
       //if no error occurred
       if(Object.keys(er).length===0){
        console.log(user)
        setUser({...user,username:'',password:''})
       }else{
        //update err
        setErr(er)
       }
    }

  

  return (
    <div>     
        <form  className="w-50 mx-auto mt-5" onSubmit={handleFormSubmit} >
            <input type="text" value={user.username} name="username"  className="form-control mb-3" onChange={handleUserData}  />
            {/* username validation error messages */}
            {err.username && <p className='text-danger lead'>{err.username}</p>}
            <input type="password" value={user.password} name="password"  className="form-control mb-3" onChange={handleUserData} />
            <input type="email"  value={user.email} name="email"  className="form-control mb-3" onChange={handleUserData} />
            <input type="checkbox" name="acknowledge" id="acknowledge"  onChange={handleUserData} />
            <label htmlFor="acknowledge">Acknowledge</label>
            <button className="btn btn-success" type='submit'>Register</button>
        </form>
    </div>
  )
}

export default Form1




function validateUser(user){
   // console.log(user)
    let errors={};

    //validation checking
    //if username is empty
    if(!user.username){
        errors.username='Username is required'
    }

    else if(user.username.length<4){
        errors.username='MIn length should be 4'
    }

    return errors;
}