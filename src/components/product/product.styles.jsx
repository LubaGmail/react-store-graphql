import styled from 'styled-components' 

export const FooterContainer = styled.div `
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 500;
  
`
export const ProductContainer = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;
  
    img {
      width: 100%;
      height: 85%;
      // cover -  keep its aspect ratio and clip to fit
      object-fit: cover;
      margin-bottom: 5px;
    }

    button {
      width: 80%;
      opacity: 0.7;
      position: absolute;
      top: 245px;
      display: none;
      background-color: red;
      color: white;
      border: none;
      // justify-content aligns the flex items at the center of the container
      justify-content: center;
      padding-top: 1rem; padding-bottom: 1rem;
      font-weight: bold;
      font-size: medium;
    }
  
    &:hover {
      img {
        opacity: 0.8;
      }
  
      button {
        opacity: 0.85;
        display: flex;
      }
    }
 
`
