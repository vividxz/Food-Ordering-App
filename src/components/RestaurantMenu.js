import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuArcodian from "./RestaurantMenuArcodian";
import {CDN_IMG} from "../utils/constants";
import { useState } from "react";

const RestaurantMenu = () => {
    const {id} = useParams();
    const resInfo = useRestaurantMenu(id);
    const [viewList, setViewList] = useState(null);
    const menuIndex = new Map();

    if(resInfo == null)
        return <Shimmer/>
    const {name, costForTwoMessage, cuisines} = resInfo?.data?.cards[2]?.card?.card?.info;
    const itemCards = resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
    const arcodian = itemCards.filter((data)=>(
        data.card.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ))
    return (
        <div className="resMenu">
            {/* {console.log(itemCards[2].card.info)}; */}
            <div className="flex justify-center m-6 p-3">
                <span className="">
                    <h1 className=" p-5 text-4xl text-center font-extrabold">{name}</h1>
                    <p className=" text-lg font-bold ">{cuisines.join(", ")} - {costForTwoMessage}</p>
                </span>
            </div>

            <div>
                
            </div>
                {arcodian.map((data, index)=>
                    <RestaurantMenuArcodian 
                    viewList={index===viewList?true:false}
                    key={data.tittle} 
                    menuMap={menuIndex}
                    index={index}
                    setViewList={(i)=> setViewList(i)}
                    data={data}/>)
                }
            
        </div>
    )
}


export default RestaurantMenu;