import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getformCart } from "../utilities/ProductStroe";
import { HiAdjustmentsVertical } from "react-icons/hi2";
import CartList from "./CartList";

const Cart = () => {
    const allcarts = useLoaderData();
    const [cartList, setCartList] =useState([]);

    useEffect( () => {
        const storeCartlist = getformCart();
        const storeCartlistInt = storeCartlist.map(id => parseInt(id));

     //console.log(storeCartlist, allcarts, typeof storeCartlistInt)

        const cartLists = allcarts.filter(product =>storeCartlistInt.includes(product.product_id))
        setCartList(cartLists)    
    }, [allcarts]);
    return (
        <div className="">
            <div className="flex flex-col md:flex-row md:justify-between items-center">
                <h1 className="text-textPrimary text-lg md:text-2xl font-bold">Cart</h1>
                <div className="flex items-center justify-between gap-3">
                    <h2 className="text-textPrimary text-lg md:text-2xl font-bold">Total cost: 000 </h2>
                 <div className="flex flex-col md:flex-row gap-3">
                 <button className="md:btn-md btn-sm  rounded-full border-2 flex gap-2 items-center text-primary text-base md:text-lg font-semibold border-primary hover:bg-primary hover:text-white">Sort by Price <HiAdjustmentsVertical className=""/></button>
                 <button className="md:btn-md btn-sm rounded-full border-2 border-primary text-primary font-semibold text-base md:text-lg hover:bg-primary hover:text-white">Purchase</button>
                 </div>
                </div>
            </div>

            <div className="mt-10">
                {
                    cartList.map(carts => <CartList key={carts.product_id} carts={carts}></CartList>)
                }
            </div>
        </div>
    );
};

export default Cart;