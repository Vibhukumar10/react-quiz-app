import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    html {
        height: 100vh;
        width: 100vw;
        background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
        font-family: Montserrat, san-serif;
    }

    body {
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        user-select: none;
    }
`;
