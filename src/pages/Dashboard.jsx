import { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {

    useEffect( () => {
        document.title ="Dashboard | Gadget Heaven";
    },[]);
    
    
    return (
        <>
         <div className="bg-primary text-center pt-8 pb-20">
                <div>
                    <h1 className="text-white font-bold text-3xl">Dashboard</h1>
                    <p className="text-white max-w-3xl mx-auto mt-4">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
                <div className="mt-6">
                    <NavLink to='/dashboard/cart'  className={({isActive}) => `px-10 py-2 rounded-full  hover:text-black mr-5 border-2 ${isActive ? 'bg-white text-black' : 'border-white hover:bg-white text-white'}`}>Cart</NavLink>
                 <NavLink to='/dashboard/whislist' className={({isActive}) => `px-10 py-2 rounded-full mr-5 hover:text-black border-2 ${isActive ? 'bg-white text-black' : 'border-white hover:bg-white text-white'}`}>Wishlist</NavLink>
                </div>
            </div>

            <div className="mt-10 w-11/12 mx-auto">
                <Outlet></Outlet>
            </div>
        </>
         
   
    );
};

export default Dashboard;