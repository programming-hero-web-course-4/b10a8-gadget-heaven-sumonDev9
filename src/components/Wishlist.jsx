import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getFromWish } from "../utilities/ProductStroe";
import WishLists from "./WishLists";


const Wishlist = () => {
    const allWish = useLoaderData();
    const [wishlish, setWishlist] = useState([]);

    useEffect(() => {
        const storeWishList = getFromWish();
        const storeWishListInt = storeWishList.map(Product => parseInt(Product));
        const wishlishs = allWish.filter(product => storeWishListInt.includes(product.product_id))
        setWishlist(wishlishs)
    },[allWish])
    return (
        <div>
            {
                wishlish.map(wishs => <WishLists key={wishs} wishs={wishs}></WishLists>)
            }
        </div>
    );
};

export default Wishlist;