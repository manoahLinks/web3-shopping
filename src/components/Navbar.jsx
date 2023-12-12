import { HiOutlineShoppingCart } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useDataContext } from "../hooks/useDataContext";
import { useState, useEffect } from "react";
import CartModal from "./CartModal";

const Navbar = () => {

    const {dispatch} = useDataContext()
    const [cart, setCart] = useState(0)
    const [cartModal, setCartModal] = useState(false)
    
    useEffect(()=>{

        const fetchData = async () => {
            const cart = JSON.parse(localStorage.getItem('cart')) 
            dispatch({type: 'SET_DATA', payload: cart})  
            setCart(cart) 
        }
        // if(user){
            fetchData()
        // }
        
    }, [dispatch])

    return ( 
        <div className="flex justify-between p-3">
            <div className="flex items-center gap-x-2">
                <span className="rounded-md p-2 bg-white text-xl font-bold">SH</span>
                <h4>hopping</h4>
            </div>

            <button onClick={()=>{setCartModal(true)}} className="flex items-center cursor-pointer">
                {cart && <span className="rounded-full bg-red-400 text-white p-2">{cart.length}</span>}
                <HiOutlineShoppingCart size={25}/>
                <small>my cart </small>
            </button>
            {cartModal && <CartModal closeModal={()=>{setCartModal(false)}}/>}
        </div>
     );
}
 
export default Navbar;