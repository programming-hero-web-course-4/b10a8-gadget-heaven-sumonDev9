import { useEffect } from "react";


const Statistics = () => {
useEffect( () => {
        document.title ="Statistics | Gadget Heaven";
    },[]);
    return (
         <div>
             <div className="bg-primary text-center pt-8 pb-10">
                <h1 className="text-white font-bold text-3xl">Statistics</h1>
                <p className="text-white max-w-3xl mx-auto mt-4">Statistics is the study of collecting, analyzing, interpreting, presenting, and organizing data to uncover patterns and inform decisions.</p>
            </div>
         
        <div className="flex w-11/12 mx-auto min-h-96 mt-8 rounded-md justify-center items-center border-2 border-[rgba(9, 8, 15, 0.1)]">
            <h1 className="text-primary text-5xl text-center font-bold">No Data Found</h1>
        </div>
        </div>
    );
};

export default Statistics;