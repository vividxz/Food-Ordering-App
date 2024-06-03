import {CDN_IMG } from "../utils/constants";


const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, cloudinaryImageId } = resData?.info;
  
    return (
      <div 
      className=" w-72 bg-gray-200 mb-5 rounded-md shadow-lg shadow-slate-700 hover:shadow-lg hover:shadow-green-400 wrap">
      <div className=" flex justify-center py-5">
          <img
            className=" w-52 h-64"
            src={ CDN_IMG
              +
              cloudinaryImageId
            }
          ></img>
      </div>
        <div className=" p-5 pt-2 h-44">
          <h2 className=" text-2xl font-bold">{name}</h2>
          <h4 className="food-info">{cuisines.join(", ")}</h4>
          <h4 className="food-info">{avgRating} ⭐</h4>
        </div>
      </div>
    );
  };



export const withdistanceRestaurant = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className=" m-2 p-2 absolute bg-black text-white rounded-lg">
          {props.resData.info.sla.lastMileTravelString}
        </label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}


  export default RestaurantCard;