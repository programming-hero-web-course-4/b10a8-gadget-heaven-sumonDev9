import { Link } from "react-router-dom";


const ProductCard = ({ product }) => {
    const { product_id, product_image, product_title, price } = product;
    return (
        <div className="card shadow-2xl bg-white">
          <div className="mt-4">
            <img src={product_image} className="w-[250px] object-contain mx-auto h-52" alt="" />
          </div>
            <div className="card-body">
                <h2 className="card-title text-xl font-semibold text-[#09080F]">{product_title}</h2>
                <p className="text-lg text-[#09080F99] opacity-60">Price: {price}</p>
                <Link to={`/product/${product_id}`}>
                <div className="card-actions justify-start">
                    <button className="text-primary px-3 py-2 rounded-full text-lg font-semibold  border-2 border-primary hover:bg-primary hover:text-white">View Details</button>
                </div></Link>
            </div>
        </div>
    );
};

export default ProductCard;