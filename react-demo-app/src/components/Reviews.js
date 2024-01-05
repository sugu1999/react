import {useContext} from 'react'
import { userLoginContextObj } from '../contexts/userLoginContext';

function Reviews() {
  let { currentUser } = useContext(userLoginContextObj);
  return (
    <div className='p-3 bg-info'>
       
      <h1>Reviews</h1>
      {Object.keys(currentUser).length === 0 ? (
        <p className="lead fs-4 text-white">No User Loggedin</p>
      ) : (
        <div className='text-white'>
          <p className="lead">{currentUser.username}</p>
          <p className="lead">{currentUser.email}</p>
          <p className="lead">{currentUser.age}</p>
        </div>
      )}
    </div>
  )
}

export default Reviews