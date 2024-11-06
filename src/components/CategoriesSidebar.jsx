/* eslint-disable react/prop-types */
import { NavLink, useNavigate } from "react-router-dom";


const CategoriesSidebar = ({categories}) => {

const navigate = useNavigate();

const handleAllProduct = () => {
    navigate('/')
}
    return (
        <div className="flex flex-wrap md:grid h-[180px] lg:h-[450px] col-span-12 md:col-span-3  shadow-xl rounded-lg p-5 text-center border-2 border-[rgba(9, 8, 15, 0.1)]">
       <NavLink onClick={handleAllProduct}
       to='/'
        className={({isActive}) => `p-2 m-2 rounded-xl text-sm md:text-lg font-medium md:rounded-full ${isActive ? 'bg-primary text-white' : 'bg-[#09080F0D] text-primary'}`}>
        All Products
       </NavLink>
       {
        categories.map(category => 
        <NavLink
         key={category.category}
          to={`/category/${category.category}`}
          className={({isActive}) => `p-2 m-2 rounded-xl text-sm md:text-lg font-medium md:rounded-full ${isActive ? 'bg-primary text-white' : 'bg-[#09080F0D] text-primary'}`}> 
            {category.category}
        </NavLink>)
       }
        </div>
    );
};

export default CategoriesSidebar;