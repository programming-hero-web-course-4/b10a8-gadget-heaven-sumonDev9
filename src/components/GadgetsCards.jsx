import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import notFound from '../../src/assets/img/error.webp';

const GadgetsCards = () => {
    const data = useLoaderData();
    const {category} = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
      if(category){
        const filterBycategory = [...data].filter(product => product.category === category);
        setProducts(filterBycategory);
      }
   else{
        setProducts(data)
      }
    }, [data, category])
    
    return (
        <div className="grid col-span-12 md:col-span-9 gap-4">
     {
      products.length < 1 ? <div className="flex border-2 min-h-96 border-[rgba(9, 8, 15, 0.1)] rounded-lg justify-center items-center gap-2 flex-col">
        <img src={notFound} className="w-32" alt="" />
        <h1 className="text-primary font-bold text-3xl">No Data Found</h1>

      </div> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {
          products.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
      }
    </div>
     }

      
               
        </div>
    );
};

export default GadgetsCards;

