import styled, { css } from 'styled-components'

export const SignInContainer = styled.div `
    display: flex;
    flex-direction: column;
    width: 380px;

    h2 {
        margin: 10px 0;
    }
`

export const ButtonDiv = styled.div `
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`
    
export const SigninButton = styled.button `
    width: 200px;
    height: 40px;
    line-height: 40px;
    letter-spacing: 0.5px;
    padding: 0 1rem 0 1rem;
    font-size: 13px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    margin-right: 1rem;

    &:hover:enabled {
        background-color: white;
        color: black;
        border: 1px solid black;
    }

    &:disabled {
        background-color: silver;
        border: none;
        cursor: none;
        color: white;   
    }
`
export const GoogleButton = styled(SigninButton)`
    background-color: white;
    color: black;
    border: 2px solid rgb(25, 183, 47);

    &:hover:enabled {
        background-color: rgb(25, 183, 47);
        color: white;
        border: none;
    }
    &:disabled {
        background-color: silver;
        border: none;
        cursor: none;
        color: white;   
    }

`





