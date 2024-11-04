import { Outlet } from "react-router-dom";
import Navber from "../components/Navber";
import Footer from "../components/Footer";


const MainlLayout = () => {
    return (
        <div>
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