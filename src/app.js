import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";


const AppLayout = () => (
  <div className="app-layout">
    <HeaderComponent />
    <Body />
    {/* <Footer/> */}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
