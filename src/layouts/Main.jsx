import { Outlet } from "react-router";

const Main = () => {
    return ( 
        <div className="h-auto w-full bg-gradient-to-br from-lime-400 to-lime-200">
            <Outlet/>
        </div>
     );
}
 
export default Main;