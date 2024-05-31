import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU } from "../utils/constants";

const RestaurantMenu = () => {

    const {id} = useParams();

    // console.log(params);
    const [resInfo, setresInfo] = useState(null);
    useEffect(()=>{fetchMenu()}, []);
    const fetchMenu = async ()=>{
        const data = await fetch(MENU + id)
        const json = await data.json();
        setresInfo(json);
    }

    
    if(resInfo == null)
        return <Shimmer/>
    const {name, costForTwoMessage, cuisines} = resInfo?.data?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

    return (
        <div className="resMenu">
            {/* {console.log(itemCards[2].card.info)}; */}
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>

                {itemCards.map((item ,index)=>
                <li key={item.card.info.id}>{item.card.info.name} {"     - Rs."} {item.card.info.price/100 || item.card.info.defaultPrice/100} </li>
                )}
            </ul>
        </div>
    )
}


export default RestaurantMenu;