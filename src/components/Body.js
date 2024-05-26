import RestaurantCard from "./RestaurantCard";
import resCards from "../utils/mockData";

const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
        
          {resCards.map((restaurant,index) => (
            <RestaurantCard key={index} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;