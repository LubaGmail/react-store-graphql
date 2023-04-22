import { createContext, useState } from 'react';

import PRODUCTS from '../data/DUMMY_PRODUCTS.json'

/**
 * with Dummy test data
 */
export const ProductsContext = createContext({
    products: [],
});

export const ProductsProvider = ({ children }) => {
    const [products] = useState(PRODUCTS);
    const value = { products };         // put an array inside value which must be an object

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
};