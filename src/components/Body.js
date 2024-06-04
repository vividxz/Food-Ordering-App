import RestaurantCard, {withdistanceRestaurant} from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";





const Body = () => {
  let [listCard, setlistCard] = useState(null);
  let [inputText, setinputText] = useState("");
  let [filterRestaurant, setfilterRestaurant] = useState([]);
  useEffect(() => {fetchData()}, []);
  const RestaurantCardDistance = withdistanceRestaurant(RestaurantCard);


  
  const fetchData = async () => {
    const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const dataVal = await data.json();
    
    const resLiveData = dataVal?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setlistCard(resLiveData);
    setfilterRestaurant(resLiveData);
  }
  
  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false)
    return <h1>Seems like you're offline, please check your connection</h1>
  return (listCard === null)
  ?<Shimmer/>
  :(
    
    <div className="body">
        <div className=" flex items-center mt-10 ">
          <div>
            <input  
            type="text" 
            className=" m-5 ml-9 px-3 border border-solid border-green-400 rounded-md shadow-md shadow-gray-400" 
            value={inputText} onChange={
              (e)=>{
                setinputText(e.target.value)
              }
            }></input>
          </div>
          <div className=" m-2 p-3">
            <button 
            className=" p-1 bg-green-100 w-28 h-10 rounded-lg shadow-md  shadow-gray-400"
            onClick={
              ()=>{
                    
              setfilterRestaurant(listCard.filter((data)=>data.info.name.toLowerCase().includes(inputText.toLocaleLowerCase())))}}>Search</button>
          </div>
          <div className=" ml-3">
          <button 
              className=" p-1 bg-green-100 w-56 h-10 rounded-lg shadow-md shadow-gray-400" 
              onClick={()=>{

                // console.log("A");res.info.avgRating>4
                // const pp = listCard.filter((res)=>(res.info.avgRating>4))
                // console.log(pp);
                setfilterRestaurant(listCard.filter((data)=>(data.info.avgRating>4)))
              }}>Top Rated Restaurant</button>
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly mt-8">
          {filterRestaurant.map((restaurant) => (
            <Link key={restaurant.info.id}  to={"/restaurant/" + restaurant.info.id}>
               {/* {console.log(restaurant.info.sla.lastMileTravelString)}; */}
              <RestaurantCardDistance resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    ); 
  };

  export default Body;