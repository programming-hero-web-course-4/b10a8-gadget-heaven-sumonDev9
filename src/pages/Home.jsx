import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import CategoriesSidebar from "../components/CategoriesSidebar";

import Heading from "../components/Heading";
import { useEffect } from "react";


const Home = () => {
    const categories = useLoaderData();
    useEffect( () => {
        document.title ="Gadgets | Gadget Heaven";
    },[]);
    return (
        <div>
            
            {/* banner */}
            <Banner></Banner>
            {/* Gadgets */}
           <Heading></Heading>
           <div className="grid grid-cols-12 w-11/12 mx-auto my-8 gap-6">
           <CategoriesSidebar categories={categories}></CategoriesSidebar>
           <Outlet></Outlet>
           </div>
        </div>
    );
};

export default Home;