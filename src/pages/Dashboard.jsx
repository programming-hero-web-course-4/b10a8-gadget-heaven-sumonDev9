import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {

    
    
    
    return (
        <>
         <div className="bg-primary text-center pt-8 pb-20">
                <div>
                    <h1 className="text-white font-bold text-3xl">Dashboard</h1>
                    <p className="text-white max-w-3xl mx-auto mt-4">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
                <div className="mt-6">
                    <NavLink to='cart'  className={({isActive}) => `px-10 py-2 rounded-full mr-5 border-2 ${isActive ? 'bg-white text-textsecondary' : 'border-white hover:bg-white hover:text-textsecondary'}`}>Cart</NavLink>
                 <NavLink to='whislist' className={({isActive}) => `px-10 py-2 rounded-full mr-5 border-2 ${isActive ? 'bg-white text-textsecondary' : 'border-white hover:bg-white hover:text-textsecondary'}`}>Wishlist</NavLink>
                </div>
            </div>
            
            <div className="mt-10 w-11/12 mx-auto">
                <Outlet></Outlet>
            </div>
        </>
         
   
    );
};

export default Dashboard;