import { useEffect, useState } from "react";
import {LOGO_IMG } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const HeaderComponent = () => {
  const onlineStatus = useOnlineStatus();
  const [loginBtn, setloginBtn] = useState("Login");

    return (
      <div className="flex justify-between bg-green-100 mx-3 my-4 mt-7 shadow-lg shadow-slate-700 rounded-md">
        <div className=" items-center">
          <img
            alt="logo"
            className=" w-48 px-5"
            src= {LOGO_IMG}
          ></img>
        </div>
        <div className="flex items-center">
          <ul className="flex pr-5">
            <li className=" px-5"><h2>Status {onlineStatus? " ✅" : " 🔴"}</h2></li>
            <li className=" px-5">
            <Link to="/">
              <h2>Home</h2>
            </Link>
            </li>
            <li className=" px-5">
            <Link to="/About">
              <h2>About Us</h2>
            </Link>
            </li>
            <li className=" px-5">
            <Link to="/Contact">
              <h2>Contact Us</h2>
            </Link>
            </li>
            <li className=" px-5">
              <Link to="/Grocery">
                <h2>Grocery</h2>
              </Link>
            </li>
            <li className=" px-5">
              <h2>Cart</h2>
            </li>
            <li className=" px-5">
              <button className="login-btn" onClick={
                ()=>{
                  setloginBtn(loginBtn==="Login"?"Logout":"Login")
                }
              }>{loginBtn}</button>
            </li>
          </ul>
        </div>
      </div>
    );
  };


  export default HeaderComponent;