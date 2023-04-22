import { useContext } from 'react'
import {Link } from "react-router-dom"

import CartItem from '../cart-item/cart-item'
import { CartContext } from '../../contexts/cart-context'

import Button from '../button/button'
import { BUTTON_TYPES } from '../button/button'

import {
    CartDropdownContainer,
    EmptyMessage,
    CartItems
} from './cart-dropdown.styles';

const CartDropdown = () => {
    // cartItems: [] ->  return as an Array
    const { cartItems } = useContext(CartContext)           

    const handleClick = () => {
        // console.log('handleClick in cart-dropdown')
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
            <Link to='/checkout'>
                <Button buttonType={BUTTON_TYPES.checkout} onClick={handleClick}>          
                    GO TO CHECKOUT
                </Button>
            </Link>
        </CartDropdownContainer>
    )
}

export default CartDropdown

