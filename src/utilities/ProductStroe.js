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
        alert(id, 'already ache')
    }
    else{
        storeCartList.push(id);
        const storeCart = JSON.stringify(storeCartList);
        localStorage.setItem('cart-store',storeCart);
    }
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
        alert('ache')
    }
    else{
        storeWishLish.push(product);
        const storeWish = JSON.stringify(storeWishLish)
        localStorage.setItem('wishLish', storeWish)
    }

}
export {getformCart, addToCart, getFromWish, addWishList}

