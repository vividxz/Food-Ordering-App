import {LOGO_IMG } from "../utils/constants";


const HeaderComponent = () => {
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
            <li>
              {" "}
              <h2>Home</h2>
            </li>
            <li>
              <h2>Login</h2>
            </li>
            <li>
              <h2>Orders</h2>
            </li>
            <li>
              <h2>Cart</h2>
            </li>
          </ul>
        </div>
      </div>
    );
  };


  export default HeaderComponent;