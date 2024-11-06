import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getFromWish, storeWishRemove } from "../utilities/ProductStroe";
import WishLists from "./WishLists";
import { toast } from "react-toastify";


const Wishlist = () => {
    const allWish = useLoaderData();
    const [wishlish, setWishlist] = useState([]);

    useEffect(() => {
        const storeWishList = getFromWish();
        const storeWishListInt = storeWishList.map(Product => parseInt(Product));
        const wishlishs = allWish.filter(product => storeWishListInt.includes(product.product_id))
        setWishlist(wishlishs)
    },[allWish])

    const handleRemove = (id) => {
        storeWishRemove(id);
        const storeWishList = getFromWish();
        const storeWishListInt = storeWishList.map(Product => parseInt(Product));
        const wishlishs = allWish.filter(product => storeWishListInt.includes(product.product_id))
        setWishlist(wishlishs)
        toast.success('Remove wishlist successfull');
    }
    return (
        <div>
            <h1 className="text-textsecondary font-bold text-2xl mb-8">Wishlist</h1>
            {
                wishlish.map(wishs => <WishLists handleRemove={handleRemove} key={wishs} wishs={wishs}></WishLists>)
            }
        </div>
    );
};

export default Wishlist;