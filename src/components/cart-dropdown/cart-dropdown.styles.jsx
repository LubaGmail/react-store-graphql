import styled from 'styled-components';
import Button from '../button/button'

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
    align-items: center;

    /* doesn't seem to have an effect 
    ${Button} {
      margin: auto;
    } 
    */
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  margin-bottom: 1rem;
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;



