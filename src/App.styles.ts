import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    html {
        height: 100vh;
        width: 100vw;
        background-color: #ffa69e;
        background-image: linear-gradient(315deg, #ffa69e 0%, #5d4954 74%);     
        font-family: Montserrat, san-serif;
    }

    body {
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        user-select: none;
    }

    button {
        cursor: pointer;
    }
`;
