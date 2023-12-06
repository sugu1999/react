import React from "react";
import { useForm } from "react-hook-form";

function FormDemo2() {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

 // console.log("errors obj :", errors);

  function handleFormSubmit(userObj) {
    console.log(userObj);
  }

  return (
    <div>
      <h1 className="display-2 text-center text-primary">Forms</h1>
      <form
        className="w-50 mx-auto mt-5"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        {/* username */}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="form-control"
            {...register("username", { required: true,minLength:4,maxLength:6})}
          />
        </div>
        {/* username validation error messages */}
        {errors.username?.type==='required'&& <p className="text-danger fs-4">Username is required</p>}
        {errors.username?.type==='minLength'&& <p className="text-danger fs-4">Min length shd be 4</p>}
        {errors.username?.type==='maxLength'&& <p className="text-danger fs-4">Max length is 6</p>}





        {/* password */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            {...register("password",{required:true})}
          />
        </div>
         {/* username validation error messages */}
         {errors.password?.type==='required'&& <p className="text-danger fs-4">Password is required</p>}
        <button className="btn btn-warning d-block mx-auto">Submit</button>
      </form>
    </div>
  );
}

export default FormDemo2;
