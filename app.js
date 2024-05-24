import React from "react";  
import ReactDOM from 'react-dom/client';



const HeaderComponent = ()=>{
    return (
        <div className="header-container">
            <div>   
                <img alt="logo" className="food-logo" src="https://png.pngtree.com/png-clipart/20220628/original/pngtree-food-logo-png-image_8239850.png"></img>
            </div>
            <div className="nav-div">   
                <ul className="nav-items">  
                    <li> <h2>Home</h2></li>
                    <li><h2>Login</h2></li>
                    <li><h2>Orders</h2></li>
                    <li><h2>Cart</h2></li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = ()=>{
    return (
        <div className="res-card">
            <img className="food-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/0ed62bec-fb43-4815-8462-b1ff1fca6f1c_698364.jpg"></img>
            <div className="card-details">  
                <h2 className="food-info">McDonald's</h2>
                <h4 className="food-info">North Indian, Biryani</h4>
                <h4 className="food-info">4.3 ⭐</h4>
            </div>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    )
}

const AppLayout = ()=>(
    <div className="app-layout">
        <HeaderComponent/>
        <Body/>
        {/* <Footer/> */}
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);