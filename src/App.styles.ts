import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    html {
        height: 100vh;
        width: 100vw;
        /*background: #39A2DB;*/
        background: #0A81AB;
        font-family: Montserrat, san-serif;
    }

    body {
        margin: 50px 0 0;
        display: flex;
        align-items: center;
        justify-content: center;
        user-select: none;
    }

    button {
        cursor: pointer;
    }
`;
