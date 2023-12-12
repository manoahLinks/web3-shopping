// import { handleAddTocart } from "../../helper";

import { toast } from "react-toastify";

const ProductCard = ({name, image, price}) => {

    const handleAddTocart = (e) =>{
        e.preventDefault()
    
        const item = {name, price}
    
        // Get the existing cart from localStorage
        let cart = localStorage.getItem('cart');
    
        // Parse the cart JSON or initialize an empty array if it's not set
        cart = cart ? JSON.parse(cart) : [];
    
        // Add the item to the cart
        cart.push(item);
    
        if(cart){
            console.log(cart)
            localStorage.setItem('cart', JSON.stringify(cart))
            toast.success(`${name} added to cart`)
        } 
        
    }

    return ( 
        <div className="p-5 bg-white rounded-lg flex flex-col shadow">
            <span className="flex items-center gap-2">
                <h4 className="text-slate-300">Product</h4>
                <h4 className="text-bold">{name}</h4>
            </span>

            <img src={image} alt="" />

            <h4 className="text-red-400 font-bold">N {price}</h4>
            <div>
                <button onClick={handleAddTocart} className="hover:shadow-lg bg-blue-400 text-white p-2 rounded-lg">Add to cart</button>
            </div>
        </div> 
    );
}
 
export default ProductCard;