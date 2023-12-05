function User({ userObj }) {
  return (
    <div className="card text-center">
      <img src={userObj.avatar} className="w-50 d-block mx-auto" alt="" />
      <div className="card-body">
        <p className="lead">
          {userObj.first_name} {userObj.last}
        </p>
        <p className="lead">{userObj.email}</p>
      </div>
    </div>
  );
}

export default User;
