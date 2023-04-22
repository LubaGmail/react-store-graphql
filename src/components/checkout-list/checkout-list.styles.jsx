import styled from "styled-components";

export const CheckoutContainer = styled.div `
    width: 80%;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    margin: 2rem auto;

    
    table {
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
        border: 1px solid white;
        
        th {
            background-color: brown;
            color: white;
        }   

        th, td {
            text-align: left;
            padding: 16px;
            border: 1px solid white;
        }

        tr:nth-child(even) {
            background-color: #f2f2f2;
        }

        tfoot {
            th {
                background-color: rgba(0, 0, 0, 0.541);
            }
            td {
                font-size: larger;
            }
        }
    }

`








