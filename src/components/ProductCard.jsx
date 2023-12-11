const ProductCard = ({name, image, price}) => {
    return ( 
        <div className="p-5 bg-white rounded-lg flex flex-col shadow">
            <span className="flex items-center gap-2">
                <h4 className="text-slate-300">Product</h4>
                <h4 className="text-bold">{name}</h4>
            </span>

            <img src={image} alt="" />

            <h4 className="text-red-400 font-bold">N {price}</h4>
            <div>
                <button className="hover:shadow-lg bg-blue-400 text-white p-2 rounded-lg">Add to cart</button>
            </div>
        </div> 
    );
}
 
export default ProductCard;