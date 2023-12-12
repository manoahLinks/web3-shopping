import {HiShoppingBag, HiTrash} from 'react-icons/hi2'

const CartItem = ({item}) => {
    return ( 
        <div className="p-2 border border-green-200 flex justify-between items-center">
            <div className="flex items-center gap-x-2">
                <span className='rounded-full p-1 bg-green-300'>
                    <HiShoppingBag size={25} color='white'/>
                </span>
                <span className='flex flex-col'>
                    <h4>{item.name} </h4>
                    <small className='text-red-500 text-xs'>N{item.price}</small>
                </span>                
            </div>

            
            <HiTrash className='text-slate-400 hover:text-red-300 cursor-pointer'/>
            
        </div>
     );
}
 
export default CartItem;