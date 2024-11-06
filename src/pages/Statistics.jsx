import { useEffect } from "react";


const Statistics = () => {
useEffect( () => {
        document.title ="Statistics | Gadget Heaven";
    },[]);
    return (
        <div className="flex w-11/12 mx-auto min-h-96 mt-8 rounded-md justify-center items-center border-2 border-[rgba(9, 8, 15, 0.1)]">
            <h1 className="text-primary text-5xl text-center font-bold">No Data Found</h1>
        </div>
    );
};

export default Statistics;