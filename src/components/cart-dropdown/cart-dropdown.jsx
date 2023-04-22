import { useContext } from 'react'
import { useNavigate } from "react-router-dom"

import CartItem from '../cart-item/cart-item'
import { CartContext } from '../../contexts/cart-context'

import {
    CartDropdownContainer,
    EmptyMessage,
    CartItems
} from './cart-dropdown.styles';

const CartDropdown = () => {
    const { cartItems, cartOpen, setCartOpen } = useContext(CartContext);       
    const navigate = useNavigate();

    const handleClick = () => {
        setCartOpen(!cartOpen);
        navigate('/checkout');
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.map((el) => (
                        <li key={el.id}>
                            <CartItem item={el} />
                        </li>
                    ))
                } 
                {
                    cartItems.length === 0 && 
                        <EmptyMessage>Your cart is empty</EmptyMessage>
                }
            </CartItems>

            <button onClick={handleClick}>          
                GO TO CHECKOUT
            </button>

        </CartDropdownContainer>
    )
}

export default CartDropdown

