import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-size: 1.6rem;
        font-family: ${(props) => props.theme.fonts.mainFont}
    }

    html {
        font-size: 62.5%;
    }

    button {
        outline: none;
        display: block;
        border: none;
        cursor: pointer;
    }

    img {
        max-width: 100%;
        width: 100%;
    }

    body {
        display: flex;
        min-height: 100vh;
        justify-content: center;
        align-items: center;
        background-color: ${(props) => props.theme.colors.body}
      
    }
`;

export { GlobalStyle };
