import styled from "styled-components";  

export const CategoryContainer = styled.div `
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`

export const Title = styled.h2 `
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;
`
export const ProductContainer = styled.div `
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 30px;
`


