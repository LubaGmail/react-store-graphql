import { useContext, useRef } from "react"

import { CartContext } from "../../contexts/cart-context"

import { ImageContainer, ClickableSpan, ClickableTd } from './checkout-item.styles'

const CheckoutItem = ({item}) => {
    const { id, name, imageUrl, price, quantity } = item
    const quantityRef = useRef()
     const { updateItemQuantity, removeItem } = useContext(CartContext)
 
    const subtractQuantity = () => {
        let x = parseInt( (quantityRef.current.innerText).toString() )
        if  (!(x < 2) ) {
            item.quantity = --x
            updateItemQuantity (item)
            quantityRef.current.innerText = x.toString()
        }
    }
    
    const addQuantity = () => {
        let x = parseInt( (quantityRef.current.innerText).toString() )
        item.quantity = ++x
        updateItemQuantity (item)
        quantityRef.current.innerText = x.toString()
    }

    const handleRemoveItem = () => {
        removeItem(item)
    }

    return (
        <>
            <ImageContainer>
                <img src={imageUrl} alt={name} />
            </ImageContainer>
            <td>{name}</td>
            <td >
                <ClickableSpan onClick={subtractQuantity}>  &#10094; </ClickableSpan>
                <span ref={quantityRef}>{quantity}</span>
                <ClickableSpan onClick={addQuantity}>  &#10095; </ClickableSpan>
            </td>
            <td>${price}</td>
            <ClickableTd  onClick={handleRemoveItem}>
                <span>&#10005;</span>
            </ClickableTd>  
        </>
    )
}

export default CheckoutItem