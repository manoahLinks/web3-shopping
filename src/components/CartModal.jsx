import { useEffect, useState } from "react"
import { useDataContext } from "../hooks/useDataContext"
import CartItem from "./CartItem"
import {HiMiniXMark} from 'react-icons/hi2'

const CartModal = ({closeModal}) => {

    const {dispatch} = useDataContext()
    const [cart, setCart] = useState(``)

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
        <div className="inset-0 fixed h-screen w-full bg-slate-500 bg-opacity-50 flex">
            <div className="m-auto w-5/12 bg-white rounded-lg p-5 gap-y-4 flex flex-col">
                <div className="flex items-center justify-between">
                    <h4 className="font-bold text-xl">My cart</h4>
                    <HiMiniXMark className="cursor-pointer" onClick={closeModal} color="red" size={25} />
                </div>
                <div className="flex flex-col gap-y-2">
                    {cart && cart.map((item)=>(
                        <CartItem item={item}/>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default CartModal;