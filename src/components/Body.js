import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";





const Body = () => {
  let [listCard, setlistCard] = useState([]);
  let [inputText, setinputText] = useState("");
  let [filterRestaurant, setfilterRestaurant] = useState([]);
  useEffect(() => {fetchData()}, []);

  
  const fetchData = async () => {
    const data = await fetch("https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const dataVal = await data.json();

    const resLiveData = dataVal?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setlistCard(resLiveData);
    setfilterRestaurant(resLiveData);
  }

  if(listCard.length === 0){
    return <Shimmer/>
  }
  return listCard.lenght===0
    ?<Shimmer/>
    :(
      <div className="body">
        <div className="input-btn">
          <input type="text" value={inputText} onChange={
            (e)=>{
              setinputText(e.target.value)
            }
          }></input>
          <button onClick={
            ()=>{
                  
            setfilterRestaurant(listCard.filter((data)=>data.info.name.toLowerCase().includes(inputText.toLocaleLowerCase())))}}>Search</button>
          <button 
            className="filter-btn" 
            onClick={()=>{
              
              setfilterRestaurant(listCard.filter((res)=>res.info.avgRating>4));
            }}>Filter</button>
        </div>
        <div className="res-container">
        
          {filterRestaurant.map((restaurant,index) => (
            <RestaurantCard key={index} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;