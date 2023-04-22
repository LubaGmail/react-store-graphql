import styled from 'styled-components'

export const SignUpContainer = styled.div `
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

export const ClearSpan = styled.span `
    width: 150px;
    height: 50px;
    line-height: 50px;
    letter-spacing: 0.5px;
    padding: 0 1rem 0 1rem;
    font-size: 18px;
    font-family: 'Open Sans Condensed';
    border: none;
    margin-right: 1rem;
    cursor: pointer;
`
export const SignupButton = styled.button `
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















