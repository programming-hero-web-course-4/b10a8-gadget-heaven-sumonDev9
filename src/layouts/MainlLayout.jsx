import { Outlet } from "react-router-dom";
import Navber from "../components/Navber";


const MainlLayout = () => {
    return (
        <div>
            {/* navbar */}
            <Navber></Navber>
            {/* dynamic */}
            <Outlet></Outlet>
            {/* footer */}
        </div>
    );
};

export default MainlLayout;