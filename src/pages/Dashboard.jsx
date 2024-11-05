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
                    <NavLink to='cart'><button className="w-36 py-2 border-2 border-white rounded-full mr-5 hover:bg-white hover:text-textsecondary">Cart</button></NavLink>
                 <NavLink to='whislist'><button className="w-36 py-2 border-2 border-white rounded-full hover:bg-white hover:text-textsecondary">Wishlist</button></NavLink>
                </div>
            </div>

            <div className="mt-10 w-11/12 mx-auto">
                <Outlet></Outlet>
            </div>
        </>
         
   
    );
};

export default Dashboard;