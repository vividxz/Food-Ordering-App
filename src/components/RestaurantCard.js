import {CDN_IMG } from "../utils/constants";


const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, cloudinaryImageId } = resData?.info;
  
    return (
      <div className="res-card">
        <img
          className="food-img"
          src={ CDN_IMG
            +
            cloudinaryImageId
          }
        ></img>
        <div className="card-details">
          <h2 className="food-info">{name}</h2>
          <h4 className="food-info">{cuisines.join(", ")}</h4>
          <h4 className="food-info">{avgRating} ⭐</h4>
        </div>
      </div>
    );
  };

  export default RestaurantCard;