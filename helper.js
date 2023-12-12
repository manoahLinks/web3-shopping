// local storage
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key))
};

export const handleAddTocart = (e, item) =>{
    e.preventDefault()

    // const item = {product, quantity, unitPrice}

    // Get the existing cart from localStorage
    let cart = localStorage.getItem('cart');

    // Parse the cart JSON or initialize an empty array if it's not set
    cart = cart ? JSON.parse(cart) : [];

    // Add the item to the cart
    cart.push(item);

    if(cart){
        console.log(cart)
        localStorage.setItem('cart', JSON.stringify(cart))
    } 
    
}