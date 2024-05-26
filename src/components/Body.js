import RestaurantCard from "./RestaurantCard";
import resCards from "../utils/mockData";
import { useState } from "react";






const Body = () => {
  let [listCard, setlistCard] = useState(resCards);
    return (
      <div className="body">
        <div >
          <button 
            className="filter-btn" 
            onClick={()=>{
              setlistCard(resCards.filter((res)=>res.info.avgRating>4));
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