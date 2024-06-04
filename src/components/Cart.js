import DropDownMenu from "./DropDownMenu";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items);
    return <div> 
        <h1 className="text-center m-6 p-4 font-bold text-4xl">Cart</h1>
        {console.log(cartItems)}
        <div>
        <DropDownMenu food={cartItems}/>
        </div>
        <div className=" bg-gray-100 rounded-xl w-28 h-12 my-12 mx-auto flex justify-between">
        <button className="text-xl rounded-xl bg-black text-white m-auto w-full h-full"
        onClick={
            ()=>dispatch(clearCart())
        }
        >Clear Cart</button>
        </div>
    </div>
}

export default Cart