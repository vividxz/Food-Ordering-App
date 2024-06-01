import { MENU } from "../utils/constants";
import { useEffect, useState } from "react";


const useRestaurantMenu = (id) =>{
    const [resInfo, setresInfo] = useState(null);
    useEffect(()=>{fetchMenu()}, []);
    const fetchMenu = async ()=>{
        const data = await fetch(MENU + id)
        const json = await data.json();
        setresInfo(json);
    }
    return resInfo;
}

export default useRestaurantMenu;