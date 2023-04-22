import { useContext } from "react"

import { CartContext } from '../../contexts/cart-context'
import CheckoutItem from '../checkout-item/checkout-item'

import { CheckoutContainer } from "./checkout-list.styles"

const CheckoutList = () => {
    const { cartItems, cartPriceTotal, clearCart } = useContext(CartContext)

    const onClearCart = () => {
        clearCart();
    }
    
    return (
        <>
            <CheckoutContainer>
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Remove</th>
                        </tr>
                    </thead>    
                    <tbody>
                        { cartItems.map(el => (
                            <tr key={el.id}>
                                <CheckoutItem item={el} />
                            </tr>
                        )) }    
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan={2}>Price Total: </th>
                            <td colSpan={4}>${cartPriceTotal}</td>
                        </tr>
                    </tfoot>
                </table>
                <div>
                    <p onClick={onClearCart}>Clear Cart</p>
                </div>
            </CheckoutContainer>
        </>
    )
}

export default CheckoutList