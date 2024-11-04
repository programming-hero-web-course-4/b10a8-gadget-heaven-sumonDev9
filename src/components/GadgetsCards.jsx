import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";


const GadgetsCards = () => {
    const {category} = useParams();
    const data = useLoaderData();
    console.log(data)
    return (
        <div className="grid col-span-12 md:col-span-9 gap-4 border-2 border-red-300">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
            data.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
        }
      </div>
               
        </div>
    );
};

export default GadgetsCards;