import { CDN_IMG } from "../utils/constants";


const DropDownMenu = ({food}) => {
    const foodList = food.card.card.itemCards;
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
              <h1>{food.card.info.description}</h1>
            </div>
            <img
              className="w-24 h-28 mr-6 p-2 rounded-lg"
              src={CDN_IMG + food.card.info.imageId}
            ></img>
          </div>
        ))}
        </div>
    )
}

export default DropDownMenu;