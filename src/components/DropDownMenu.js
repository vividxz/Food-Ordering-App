import { useDispatch } from "react-redux";
import { CDN_IMG } from "../utils/constants";
import { addItem } from "../utils/cartSlice";


const DropDownMenu = ({food}) => {
  {console.log(food)}
  const foodList = food;
  const dispatch = useDispatch()
  function handleDispatch(food){
    dispatch(addItem(food));
  }
  return(
    <div>
            {foodList.map((food) => (
    
          <div className=" bg-gray-100 rounded-xl w-6/12 my-5 pl-5 mx-auto flex justify-between">
            {/* {console.log(food.card.info)} */}
            <div>
              <h1 className=" text-lg pt-4">{food.card.info.name}</h1>
              <h1> ₹ 
                {food.card.info.price / 100
                  ? food.card.info.price / 100
                  : food.card.info.defaultPrice / 100}
              </h1>
              <h1 className="text-sm w-9/12">{food.card.info.description}</h1>
            </div>
            <div className="flex flex-wrap justify-center">

            <button 
            className="absolute mt-3 ml-2 p-1 rounded-lg bg-black text-white"
            onClick={()=>{handleDispatch(food)}}
            > Add + </button>
            <div className="w-36 h-36 justify-center items-center flex flex-wrap">

            <img
              className=" w-full h-full my-auto p-4 pt-6 rounded-lg"
              src={CDN_IMG + food.card.info.imageId}
            ></img>
            </div>
            </div>
          </div>
        ))}
        </div>
    )
}

export default DropDownMenu;