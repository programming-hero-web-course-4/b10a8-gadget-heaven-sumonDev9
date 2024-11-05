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

export {getformCart, addToCart}