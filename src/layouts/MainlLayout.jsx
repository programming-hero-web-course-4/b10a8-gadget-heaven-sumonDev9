import { Outlet } from "react-router-dom";
import Navber from "../components/Navber";


const MainlLayout = () => {
    return (
        <div>
            {/* navbar */}
            <Navber></Navber>
            {/* banner */}
            <Outlet></Outlet>
        </div>
    );
};

export default MainlLayout;