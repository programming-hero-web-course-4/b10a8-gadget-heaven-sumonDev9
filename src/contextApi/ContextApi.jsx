import { createContext, useState } from "react";
import PropTypes from 'prop-types';
const CartContext = createContext({});

const ContextApi = ({ children }) => {
    const [cart, setCart] = useState([]);
    
    return (
      <CartContext.Provider value={[cart, setCart]}>
        {children}
      </CartContext.Provider>
    );
};

ContextApi.propTypes = {
    children: PropTypes.object.isRequired
}

export {ContextApi, CartContext};