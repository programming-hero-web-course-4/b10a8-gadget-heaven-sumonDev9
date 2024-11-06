import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getformCart, storeCartRemove } from "../utilities/ProductStroe";
import { HiAdjustmentsVertical } from "react-icons/hi2";
import CartList from "./CartList";
import paymentImg from '../../src/assets/img/Group.png'
const Cart = () => {
    const allcarts = useLoaderData();
    const [cartList, setCartList] = useState([]);
    const [sort, setSort] = useState(allcarts);
    const [totalcost, setTotalcost] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const storeCartlist = getformCart();
        const storeCartlistInt = storeCartlist.map(id => parseInt(id));
        const cartLists = allcarts.filter(product => storeCartlistInt.includes(product.product_id))
        setCartList(cartLists)
        setSort(cartLists)

        // total cost
        const total = cartLists.reduce((sum, product) => sum + product.price, 0)
        setTotalcost(total)

    }, [allcarts]);

    // sort 
    const handleSort = (sortBy) => {
        if (sortBy === 'sortprice') {
            const sortList = [...sort].sort((a, b) => b.price - a.price);
            setCartList(sortList)
        }
    }


    const handlePurchase = () =>{
        document.getElementById('my_modal_1').showModal();
        setCartList([]);
        setTotalcost(0);
        storeCartRemove();
    }
    return (
        <>
       
        <div className="">
            <div className="flex flex-col md:flex-row md:justify-between items-center">
                <h1 className="text-textPrimary text-lg md:text-2xl font-bold">Cart</h1>
                <div className="flex items-center justify-between gap-3">
                    <h2 className="text-textPrimary text-lg md:text-2xl font-bold">Total cost: {totalcost} </h2>
                    <div className="flex flex-col md:flex-row gap-3">
                        <button onClick={() => handleSort('sortprice')} className="md:btn-md btn-sm  rounded-full border-2 flex gap-2 items-center text-primary text-base md:text-lg font-semibold border-primary hover:bg-primary hover:text-white">Sort by Price <HiAdjustmentsVertical className="" /></button>
                        <button  onClick={handlePurchase} className="md:btn-md btn-sm rounded-full border-2 border-primary text-primary font-semibold text-base md:text-lg hover:bg-primary hover:text-white">Purchase</button>
                    </div>
                </div>
            </div>

            <div className="mt-10">
                {
                    cartList.map(carts => <CartList key={carts.product_id} carts={carts}></CartList>)
                }
            </div>


            {/* modal */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button> */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box text-center space-y-3">
                    <img src={paymentImg} className="mx-auto " alt="" />
                    <h1 className="text-textsecondary font-bold text-2xl">Payment Successfully</h1>
                    <p className="text-textsecondary opacity-80 font-medium">Thanks for purchasing</p>
                    <p className="text-textsecondary opacity-80 font-medium"> Total: {totalcost}</p>
                    <div className="modal-action">
                        <form method="dialog" className="w-full">
                            {/* if there is a button in form, it will close the modal */}
                            <button onClick={() => navigate('/')} className="btn btn-block text-textsecondary font-semibold text-lg bg-[#ECECEC]">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
        </>
    );
};

export default Cart;