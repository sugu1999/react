import {useState} from 'react'

function StateDemo() {

    //state
  let [counter,setCounter]=useState(0)
  let [user,setUser]=useState({uid:100,name:"kiran",age:23})
  let [skills,setSkills]=useState(['js','nodejs','angular'])


  function changeSkills(){
   // setSkills(['java',...skills])
   let copySkills=[...skills]
   copySkills.splice(1,1,'java')
   setSkills(copySkills)
  }

    function changeCounter(){
       setCounter(counter+1)
    }

    function changeUser(){
      // setUser({...user,age:29,name:'Bhanu'}) //{ uid:100,name:"kiran",age:23,age:29}
        // let copyUser={...user}
        // delete copyUser.name;
        // setUser(copyUser)
    setUser({...user,pincode:3454545})

    }


  return (
    <div>
        <h1>{counter}</h1>
        <button className="btn btn-success" onClick={changeCounter}>Change counter</button>
        <p className="lead">{user.uid}</p>
        <p className="lead">{user.name}</p>
        <p className="lead">{user.age}</p>
        <p className="lead">{user.pincode}</p>
        <button className="btn btn-info ms-3" onClick={changeUser}>Change User</button>
        
        {
            skills.map((skill)=><h2 key={skill}>{skill}</h2>)
        }
         <button className="btn btn-danger ms-3" onClick={changeSkills}>Change Skills</button>
    </div>
  )
}

export default StateDemo