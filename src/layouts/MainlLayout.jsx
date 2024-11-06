import { Outlet } from "react-router-dom";
import Navber from "../components/Navber";
import Footer from "../components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainlLayout = () => {
    return (
        <div>
            <ToastContainer position="top-center" />
            {/* navbar */}
            <Navber></Navber>
            <div>
                {/* dynamic */}
           <div className="min-h-[calc(100vh-500px)]">
           <Outlet></Outlet>
           </div>
            </div>
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainlLayout;