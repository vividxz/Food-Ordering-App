import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";





const Body = () => {
  let [listCard, setlistCard] = useState([]);
  useEffect(() => {fetchData()}, []);

  
  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const dataVal = await data.json();

    const resLiveData = dataVal?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setlistCard(resLiveData);

  }

  if(listCard.length === 0){
     return <h1>Loading....</h1>
  }

    return (
      <div className="body">
        <div >
          <button 
            className="filter-btn" 
            onClick={()=>{
              setlistCard(listCard.filter((res)=>res.info.avgRating>4));
            }}>Filter</button>
        </div>
        <div className="res-container">
        
          {listCard.map((restaurant,index) => (
            <RestaurantCard key={index} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;