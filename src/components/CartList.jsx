import { IoCloseCircleOutline } from "react-icons/io5";
import PropTypes from 'prop-types';
const CartList = ({carts}) => {
    const {product_id, product_title, product_image, price, description} = carts;
    return (
        <div className='flex mb-4 shadow rounded-lg justify-between items-center border-2 border-[rgba(19, 19, 19, 0.1)] p-3'>
        <div className='flex gap-6'>
            <img src={product_image} className='w-20 items-center h-20 object-contain rounded-lg' alt="" />
            <div className="space-y-2">
                <h1 className='text-textPrimary text-xl font-semibold'>{product_title}</h1>
                <p className='text-textPrimary text-sm md:text-base font-semibold opacity-60'>{description}</p>
                <p className='text-textPrimary  font-semibold opacity-80'>${price}</p>
            </div>
        </div>
        <div  className='text-4xl cursor-pointer text-red-500'><IoCloseCircleOutline /></div>
    </div>
    );
};

CartList.propTypes ={
    carts: PropTypes.object
}

export default CartList;