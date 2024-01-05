import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Reviews from "./components/Reviews";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="text-center container bg-secondary">
      <div className="row ">
        <div className="col-sm-6">
         
          <Login />
        </div>
        <div className="col-sm-6">
         
          <Profile />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <Reviews />
        </div>
        <div className="col-sm-6">
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default App;
