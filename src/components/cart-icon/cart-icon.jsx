import { useContext } from 'react'

import { CartContext } from '../../contexts/cart-context'

import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles'

const CartIcon = () => {
    const { cartOpen, setCartOpen, cartTotal } = useContext(CartContext)

    const toggleCartOpen = () => {
        setCartOpen(!cartOpen)
    }

    return (
        <CartIconContainer onClick={toggleCartOpen} >
            <ShoppingIcon className='shopping-icon' />
            <ItemCount>{cartTotal}</ItemCount>
        </CartIconContainer>   
      
    )
}

export default CartIcon