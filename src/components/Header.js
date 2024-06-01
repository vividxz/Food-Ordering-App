import { useEffect, useState } from "react";
import {LOGO_IMG } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const HeaderComponent = () => {
  const onlineStatus = useOnlineStatus();
  const [loginBtn, setloginBtn] = useState("Login");

    return (
      <div className="header-container">
        <div>
          <img
            alt="logo"
            className="food-logo"
            src= {LOGO_IMG}
          ></img>
        </div>
        <div className="nav-div">
          <ul className="nav-items">
            <li className="online-status"><h2>Status {onlineStatus? " ✅" : " 🔴"}</h2></li>
            <li>
            <Link to="/">
              <h2>Home</h2>
            </Link>
            </li>
            <li>
            <Link to="/About">
              <h2>About Us</h2>
            </Link>
            </li>
            <li>
            <Link to="/Contact">
              <h2>Contact Us</h2>
            </Link>
            </li>
            <li>
              <Link to="/Grocery">
                <h2>Grocery</h2>
              </Link>
            </li>
            <li>
              <h2>Cart</h2>
            </li>
            <li>
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