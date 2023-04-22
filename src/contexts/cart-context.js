import { useEffect, useState,  createContext, } from 'react';

export const CartContext = createContext({
    cartOpen: false,
    setCartOpen: () => null,
    cartItems: [],
    addItem: (product) => null,
    cartTotal: 0,
    cartPriceTotal: 0,
    updateItemQuantity: (product) => null,
    removeItem: (product) => null,
})

const itemInCart = (cartItems, product) => {
    const existingCartItem = cartItems.find(el => el.id === product.id)
    if (existingCartItem) {
        return true
    } else {
        return false
    }
}

const handleAddItem = (cartItems, product) => {
    const isItemInCart = itemInCart(cartItems, product)
    if (isItemInCart) {
        return cartItems.map((el) => 
            el.id === product.id
            ? {...el, quantity: ++el.quantity }
            : el
        )
    } 
    return [...cartItems, { ...product, quantity: 1 } ];
}

const handleUpdateItemQuantity = (cartItems, product) => {
    const isItemInCart = itemInCart(cartItems, product)
    if (isItemInCart) {
        let updatedCart = cartItems.map((el) => {
            if (el.id === product.id) {
                el.quantity = product.quantity
                return el
            } else {
                return el
            }
        })
        return updatedCart
    } 
}

const handleRemoveItem = (cartItems, product) => {
    return cartItems.filter(el => el.id !== product.id)
}

export const CartProvider = ({ children }) => {
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([])
    const [cartTotal, setCartTotal] = useState(0)
    const [cartPriceTotal, setCartPriceTotal] = useState(0)

    useEffect(() => {
        let tot = cartItems.reduce((accum, el) => {
            return accum += el.quantity
        }, 0)
        setCartTotal(tot);
    }, [cartItems])

    useEffect(() => {
        let tot = cartItems.reduce((accum, el) => {
            return accum += (el.quantity * el.price)
        }, 0)
        setCartPriceTotal(tot);
    }, [cartItems])

    const addItem = (product) => {
        setCartItems(handleAddItem(cartItems, product) )
    }

    const updateItemQuantity = (product) => {
        setCartItems(handleUpdateItemQuantity(cartItems, product))
    }

    const removeItem = (product) => {
        setCartItems( handleRemoveItem(cartItems, product) )
    }
    
    const value = { cartOpen, setCartOpen, cartItems, addItem, updateItemQuantity, removeItem, cartTotal, cartPriceTotal, };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}
