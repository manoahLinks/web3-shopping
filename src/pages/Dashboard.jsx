import { Navbar } from "../components";
import ProductCard from "../components/ProductCard";
import item1 from '../assets/item1.jpeg';
import item2 from '../assets/item2.jpeg';
import item3 from '../assets/item3.jpeg';
import item4 from '../assets/item4.jpeg';
import item5 from '../assets/item5.jpeg';
import item6 from '../assets/item6.jpeg';


const Dashboard = () => {

    const items = [
        {
            id: 1,
            name: 'Deodorant',
            image: item1,
            price: 8000
        },
        {
            id: 2,
            name: 'Tomato paste',
            image: item2,
            price: 4500
        },
        {
            id: 3,
            name: 'Air pods',
            image: item3,
            price: 3500
        },
        {
            id:4,
            name: 'Light Bulb',
            image: item4,
            price: 200
        },
        {
            id: 5,
            name: 'sun glasses',
            image: item5,
            price: 400
        },
        {
            id: 6,
            name: 'Boots',
            image: item6,
            price: 18000
        },
    ]


    return (
        <div className="flex flex-col">
            <Navbar/>
            <div className="flex-1 grid md:grid-cols-4 grid-cols-2 gap-4 p-5">
                {items && items.map((item)=> (
                    <ProductCard name={item.name} image={item.image} price={item.price}/>
                ))}
            </div>
        </div>
      );
}
 
export default Dashboard;