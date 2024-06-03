import { useState } from "react";
import DropDownMenu from "./DropDownMenu";

const RestaurantMenuArcodian = ({ data, index,  viewList, setViewList}) => {
  const foodList = data.card.card.itemCards;
  // const [viewList, setViewList] = useState(false);

  const menuIndex = new Map();

  return (
    <div>
      <div>
        <button className="w-full"
          onClick={()=>{
            menuIndex.set(index, menuIndex.get(index)+1 || 1)
            if(menuIndex.get(index)%2===0)
              setViewList(null);
            else
              setViewList(index);
          }}
        >
          <div className="w-6/12 border-b-8 border-gray-100  mb-8 pb-4 flex justify-between m-auto">
            <span className="m-3 p-3  font-bold text-xl">
              {data.card.card.title}(
              {Object.keys(data.card.card.itemCards).length})
            </span>
            <h1 className="m-3 p-3 text-xl">🔽</h1>
          </div>
        </button>
      </div>
      <div className="">
      { viewList  &&<DropDownMenu food={data} />}</div>
    </div>
  );
};

export default RestaurantMenuArcodian;
