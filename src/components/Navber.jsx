import { NavLink, useLocation } from "react-router-dom";
import { CiHeart } from "react-icons/ci";




const Navber = () => {

    const Links = <>
        <li><NavLink to='/' className='font-bold'>Home</NavLink></li>
        <li><NavLink to='/statistics' className='font-bold'>Statistics</NavLink></li>
        <li><NavLink to='/dashboard' className='font-bold'>Dashboard</NavLink></li>
        <li><NavLink to='/about' className='font-bold'>About Us</NavLink></li>
    </>

    const {pathname} = useLocation();
  
   
    return (
        <header className={`mx-3 mt-5 rounded-t-3xl ${pathname.includes('/category/') || pathname === '/' ?  'bg-primary text-white' : 'bg-white text-primary'}`}>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className={`menu menu-sm dropdown-content ${pathname.includes('/category/') || pathname === '/' ? 'bg-primary text-white' : 'bg-white text-primary'} rounded-box z-[1] mt-3 w-52 p-2 shadow`}>
                            {Links}
                        </ul>
                    </div>
                    <a className={`font-bold  text-base md:text-xl ${pathname.includes('/category/') || pathname === '/' ?  'text-white' : 'bg-white text-primary'}`}>Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        {Links}
                    </ul>
                </div>
                <div className="navbar-end gap-5 mr-5">
                    <div className="indicator bg-white text-black p-2 rounded-full shadow">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="badge badge-sm indicator-item">0</span>
                    </div>
                    <div className="indicator bg-white text-black p-2 rounded-full shadow">
                    <CiHeart className="text-xl" />
                    <span className="badge badge-sm indicator-item">0</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navber;