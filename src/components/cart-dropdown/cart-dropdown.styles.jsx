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

    button {
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
      
    }
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


