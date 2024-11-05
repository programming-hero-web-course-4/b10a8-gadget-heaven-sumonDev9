import { ScrollRestoration, useLoaderData, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";


import { FaCartArrowDown } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { addToCart, addWishList } from "../utilities/ProductStroe";
// import { useContext } from "react";
// import { CartContext } from "../contextApi/ContextApi";
const ProductsDetails = () => {
    const { id } = useParams();
    const productId = parseInt(id);
    const data = useLoaderData();
    // const { setCart } = useContext(CartContext)
    const product = data.find(product => product.product_id === productId)

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    const {product_id, product_title, price, product_image, description, Specification, availability, rating } = product;

    const handlecart = (id) => {
            // const cartData = addToCart('cart',id);
            // setCart(cartData);

            addToCart(id)
    }

    const handlewish = (product) => {
        addWishList(product);
    }
    return (
        <>
         <ScrollRestoration></ScrollRestoration>
            <div className="bg-primary text-center pt-8 pb-52">
                <div>
                    <h1 className="text-white font-bold text-3xl">Product Details</h1>
                    <p className="text-white max-w-3xl mx-auto mt-4">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row bg-white -mt-44 mb-10 shadow-2xl p-6 rounded-2xl max-w-4xl mx-auto gap-8">
                <div className="flex justify-center items-center p-5">
                    <img src={product_image}  alt="" />
                </div>
                <div className="space-y-3">
                    <h1 className="text-textsecondary text-3xl font-bold">{product_title}</h1>
                    <p className="text-textsecondary opacity-60 font-semibold">Price: {price}</p>
                    <button className={`text-[#309C08] text-base font-medium px-3 py-2 bg-[#ECECEC] rounded-full ${availability ? 'border-2 border-[#309C08] text-[#309C08]' : 'border-2 border-red-700 text-red-600'}`}>
                        {availability ? 'In Stock' : 'Out of Stock'}</button>
                    <p className="text-lg text-textsecondary opacity-60">{description}</p>
                    <div>
                        <h2 className="text-lg font-bold text-textsecondary mb-2">Specification:</h2>
                        <ol className="space-y-2">
                            {
                                Specification.map((specification, index) => <li className="flex items-center gap-2 text-lg text-textsecondary  opacity-60" key={index}>
                                    <span>{index + 1}.</span>{specification}
                                </li>)
                            }
                        </ol>
                    </div>
                    <p className="text-textsecondary font-bold">Rating:</p>
                    <div className="flex  gap-2 items-center">
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                        />,
                        <p className="px-3 py-2 bg-[#ECECEC] text-textsecondary opacity-80 rounded-xl">{rating}</p>
                    </div>
                    <div className="flex gap-5">
                        <button onClick={() => handlecart(product_id)} className="flex items-center gap-2 bg-primary text-white px-3 py-2 rounded-full">Add To Card <FaCartArrowDown /></button>
                        <button onClick={() => handlewish(product_id)} className="p-2 rounded-full shadow"> <CiHeart className="text-xl text-textsecondary" /></button>
                    </div>
                </div>
            </div>
        </>

    );
};

export default ProductsDetails;