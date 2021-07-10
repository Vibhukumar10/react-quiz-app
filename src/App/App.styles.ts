import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    html {
        height: 100vh;
        width: 100vw;
        background-color: #FBAB7E;
        background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);
        background-color: #FF9A8B;
        background-image: linear-gradient(90deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%);
        background-color: #74EBD5;
        background-image: linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%);
        background-color: #0093E9;
        background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);    
    
                
        font-family: Montserrat, san-serif;
    }

    body {
        margin: 25px 0 0;
        display: flex;
        align-items: center;
        justify-content: center;
        user-select: none;
    }

    button {
        cursor: pointer;
    }

    @media (max-width: 500px) {
        html {
            background-image: linear-gradient(0deg, #74EBD5 0%, #9FACE6 100%);
        }    
    }
`;
