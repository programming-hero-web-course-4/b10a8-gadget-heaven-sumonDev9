import { toast } from "react-toastify";

const getformCart = () => {
    const storeCartstr = localStorage.getItem('cart-store');
    if(storeCartstr){
    return JSON.parse(storeCartstr);
    }
    else{
        return [];
    }
}

const addToCart = (id) => {
    const storeCartList = getformCart();
    if(storeCartList.includes(id)){
        toast.error("This item is already in your cart!");
    }
    else{
        storeCartList.push(id);
        // const storeCart = JSON.stringify(storeCartList);
        // localStorage.setItem('cart-store',storeCart);
        localStorage.setItem('cart-store', JSON.stringify(storeCartList))
        toast.success("Item added to cart successfully!");
    }
}

// delete
const storeCartRemove = (id) => {
    const storeCartList = getformCart();
    const remining = storeCartList.filter(product => product.product_id !== id);
     localStorage.setItem('cart-store', JSON.stringify(remining))
  
}

// wishList
const getFromWish = () => {
    const storeWishStr = localStorage.getItem('wishLish');
    if(storeWishStr){
        return JSON.parse(storeWishStr);
    }
    else{
        return []
    }
}

const addWishList = (product) => {
    const storeWishLish =getFromWish();
    if(storeWishLish.includes(product)){
     toast.error("This item is already in your wishlist!");
    }
    else{
        storeWishLish.push(product);
        const storeWish = JSON.stringify(storeWishLish)
        localStorage.setItem('wishLish', storeWish)
        toast.success("Item added to wishlist successfully!");
    }
}
export {getformCart, addToCart, storeCartRemove, getFromWish, addWishList}

