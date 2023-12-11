import { HiOutlineShoppingCart } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="flex justify-between p-3">
            <div className="flex items-center gap-x-2">
                <span className="rounded-md p-2 bg-white text-xl font-bold">SH</span>
                <h4>hopping</h4>
            </div>

            <Link className="flex items-center">
                <HiOutlineShoppingCart size={25}/>
                <small>my cart</small>
            </Link>
        </div>
     );
}
 
export default Navbar;