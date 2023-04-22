import styled from "styled-components";

export const BaseButton = styled.button`
    background-color: black;
    color: white;
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 25px 0 25px;
    font-size: 14px;
    text-transform: uppercase;
    font-family: "Open Sans Condensed";
    font-weight: bolder;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`
export const GoogleButton = styled(BaseButton)`
    background-color: #4285f4;
    color: white;
    &:hover {
        background-color: #1b54b1;
        color: yellow;
        border: none;
    }
`

export const CheckoutButton = styled(BaseButton)`
    background-color:#1b54b1;
    color: white;
    &:hover {
        background-color: #12356c;
        color: white;
        border: none;
    }
`
export const ProductButton = styled(BaseButton)`
    background-color: #bc2424;
   color: white;
`



    

